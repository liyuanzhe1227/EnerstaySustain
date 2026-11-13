async function buildRF60(values) {
  const packed = Uint8Array.from(atob(window.rf60TemplateData), char => char.charCodeAt(0));
  const stream = new Blob([packed]).stream().pipeThrough(new DecompressionStream("gzip"));
  const template = await new Response(stream).json();
  const encoder = new TextEncoder();
  const chunks = [];
  const directory = [];
  let offset = 0;
  const xmlEscape = text => text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\r\n?|\n/g,'</w:t><w:br/><w:t xml:space="preserve">');
  const crc32 = bytes => {
    let crc = 0xffffffff;
    for (const byte of bytes) {
      crc ^= byte;
      for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
    }
    return (crc ^ 0xffffffff) >>> 0;
  };
  for (const [path, base64] of Object.entries(template)) {
    const name = encoder.encode(path);
    let bytes = Uint8Array.from(atob(base64), char => char.charCodeAt(0));
    if (path === 'word/document.xml') {
      const xml = new TextDecoder().decode(bytes);
      bytes = encoder.encode(xml.replace(/RF60FIELD(\d+)END/g, (_, index) => xmlEscape(values[Number(index)])));
    }
    const crc = crc32(bytes);
    const local = new Uint8Array(30);
    const l = new DataView(local.buffer);
    l.setUint32(0,0x04034b50,true);
    l.setUint16(4,20,true);
    l.setUint32(14,crc,true);
    l.setUint32(18,bytes.length,true);
    l.setUint32(22,bytes.length,true);
    l.setUint16(26,name.length,true);
    const central = new Uint8Array(46);
    const c = new DataView(central.buffer);
    c.setUint32(0,0x02014b50,true);
    c.setUint16(4,20,true);
    c.setUint16(6,20,true);
    c.setUint32(16,crc,true);
    c.setUint32(20,bytes.length,true);
    c.setUint32(24,bytes.length,true);
    c.setUint16(28,name.length,true);
    c.setUint32(42,offset,true);
    chunks.push(local,name,bytes);
    directory.push(central,name);
    offset += local.length + name.length + bytes.length;
  }
  const end = new Uint8Array(22);
  const e = new DataView(end.buffer);
  e.setUint32(0,0x06054b50,true);
  e.setUint16(8,directory.length / 2,true);
  e.setUint16(10,directory.length / 2,true);
  e.setUint32(12,directory.reduce((sum, part) => sum + part.length,0),true);
  e.setUint32(16,offset,true);
  return new Blob([...chunks,...directory,end],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
}
