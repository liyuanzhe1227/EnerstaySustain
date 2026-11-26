const enquiryOptions = {
 service: [
  ['Organisational GHG verification','组织温室气体核查'],
  ['Product carbon footprint verification','产品碳足迹核查'],
  ['Management-system or supplier audit / assessment','管理体系或供应商审核／评价'],
  ['ESG assurance or assurance-readiness support','ESG 保证或保证准备支持'],
  ['MRV, traceability or grant support','MRV、追溯性或资助支持'],
  ['Training','培训'],
  ['Other service','其他服务']
 ],
 relationship: [
  ['Second-party audit / assessment','代表客户或采购方开展的第二方审核／评价'],
  ['Independent third-party verification / assessment','独立第三方核查／评价'],
  ['Not sure - please advise','尚不确定，请协助确认']
 ],
 assurance: [['Reasonable assurance','合理保证'],['Limited assurance','有限保证'],['Not sure - please advise','尚不确定，请协助确认']]
};
const fields = [
 ['organisation','Organisation legal name','机构法定名称','text',true],
 ['registration','Registration number and address','注册号与地址','text'],
 ['contact','Contact name and role','联系人姓名与职务','text',true],
 ['email','Contact email','联系人邮箱','email',true],
 ['responsible','Responsible party, if different','责任方（如与申请机构不同）','text'],
 ['service','Service requested','所需服务','select',true],
 ['relationship','Requested engagement relationship','拟议委托关系','select',true],
 ['programme','Programme, if applicable','适用方案（如适用）','text'],
 ['commissioning','Commissioning customer or purchaser','委托客户或采购方','text'],
 ['supplier','Supplier or contractor being assessed','被评价的供应商或承包商','text'],
 ['serviceOther','Describe the other service','请说明其他服务','textarea'],
 ['criteria','Standards or criteria','适用标准或准则','text'],
 ['claim','Subject matter and claim title or revision','对象与声明名称或版本','text'],
 ['intended','Intended use and users','预期用途与使用者','text'],
 ['sites','Sites and activities','场所及活动','text'],
 ['basis','Initial, repeat or transfer engagement','首次、续约或转入项目','text'],
 ['assurance','Assurance level, if known','保证等级（如已知）','select'],
 ['materiality','Materiality, if known','重要性（如已知）','text'],
 ['timing','Expected deliverables and timeline','预期交付与时间安排','text'],
 ['objectives','Objectives','目标','textarea'],
 ['scope','Scope, boundary and reporting period','范围、边界及报告期','textarea'],
 ['evidence','Available evidence and access constraints','现有证据与访问限制','textarea']
];
const form = document.querySelector('#enquiry-form');
const enquiryStatus = document.querySelector('#enquiry-status');
const languageButton = document.querySelector('[data-lang-toggle]');
const languageKey = 'enerstay-language-v3';
let language = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
const contactNames = new Set(fields.slice(0,5).map(f=>f[0]));
const fieldLabels = new Map();
const displayFields = [...fields.filter(f => f[3] !== 'textarea'), ...fields.filter(f => f[3] === 'textarea')];
for (const [name,en,zh,type,required] of displayFields) {
 const label=document.createElement('label');
 label.dataset.field=name;
 const text=document.createElement('span');
 text.dataset.en=en+(required?' *':''); text.dataset.zh=zh+(required?' *':'');
 const input=document.createElement(type==='textarea'?'textarea':type==='select'?'select':'input');
 input.id='enquiry-'+name; input.name=name;
 label.htmlFor=input.id;
 if(type!=='select'&&type!=='textarea')input.type=type;
 input.required=Boolean(required);
 if(type==='select'){
  const empty=document.createElement('option');
  empty.value='';empty.dataset.en=required?'Please select':'Select if known';empty.dataset.zh=required?'请选择':'如已知，请选择';
  input.append(empty);
  for(const [optionEn,optionZh] of enquiryOptions[name]){
   const option=document.createElement('option');option.value=optionEn;option.dataset.en=optionEn;option.dataset.zh=optionZh;input.append(option);
  }
 } else input.maxLength=type==='textarea'?3000:300;
 if(type==='textarea')label.classList.add('enquiry-long-field');
 label.append(text,input);fieldLabels.set(name,label);
 document.querySelector(contactNames.has(name)?'#contact-fields':'#engagement-fields').append(label);
}
fieldLabels.get('service').insertAdjacentElement('afterend',fieldLabels.get('serviceOther'));
const serviceInput=form.elements.namedItem('service');
const relationshipInput=form.elements.namedItem('relationship');
const relationalServices=new Set(enquiryOptions.service.slice(0,4).map(o=>o[0]));
function showField(name,visible,required=false){
 const label=fieldLabels.get(name),input=form.elements.namedItem(name);
 label.hidden=!visible; input.disabled=!visible;input.required=visible&&required;
 const span=label.querySelector('span');
 for(const lang of ['en','zh'])span.dataset[lang]=span.dataset[lang].replace(/ \*$/,'')+(visible&&required?' *':'');
 span.textContent=span.dataset[language];
}
function updateConditions(){
 const hasRelationship=relationalServices.has(serviceInput.value);
 showField('relationship',hasRelationship,true);
 const second=hasRelationship&&relationshipInput.value==='Second-party audit / assessment';
 showField('commissioning',second,true);showField('supplier',second,true);
 showField('serviceOther',serviceInput.value==='Other service',true);
 document.querySelector('#relationship-note').hidden=!hasRelationship;
}
serviceInput.addEventListener('change',updateConditions);
relationshipInput.addEventListener('change',updateConditions);
function renderEnquiryLanguage(){
 language=document.documentElement.lang==='zh-CN'?'zh':'en';
 document.querySelectorAll('[data-en][data-zh]').forEach(el=>el.textContent=el.dataset[language]);
 document.title=language==='zh'?'服务咨询 ES-RF-60 | Enerstay Sustainability':'Service enquiry ES-RF-60 | Enerstay Sustainability';
 enquiryStatus.textContent='';
}
languageButton.addEventListener('click',renderEnquiryLanguage);
updateConditions();renderEnquiryLanguage();
let reference;
form.addEventListener('submit',async event=>{
 event.preventDefault();
 if(!form.reportValidity())return;
 const data=new FormData(form);
 reference ??= 'ES-RF-60-ENQ-'+new Date().toISOString().slice(0,10).replaceAll('-','')+'-'+crypto.randomUUID().slice(0,8).toUpperCase();
 const value=name=>String(data.get(name)??'').trim();
 const pending='To be confirmed by Enerstay',unknown='Not supplied';
 const relation=value('relationship')||'Not applicable to requested service';
 const requested=[value('service'),value('serviceOther'),'Requested relationship: '+relation,
 value('commissioning')?'Commissioning customer / purchaser: '+value('commissioning'):'',
 value('supplier')?'Supplier / contractor assessed: '+value('supplier'):''].filter(Boolean).join('\n');
 const values=[
  [value('organisation'),value('registration'),value('responsible')].filter(Boolean).join(' | '),
  [value('contact'),value('email')].join(' | '),requested,value('programme'),
  value('claim'),value('objectives'),value('scope'),value('criteria'),
  value('assurance'),value('materiality'),value('intended'),value('sites'),pending,
  value('timing'),pending,'Enerstay will confirm the applicable process and acceptance after review.',
  'Enquiry reference: '+reference,value('claim'),value('responsible'),value('basis'),value('evidence')
 ];
 try{
  const file=await buildRF60(values.map(v=>v||unknown));
  const filename=reference+'.docx';
  if(event.submitter?.value!=='download'){
   const transfer=new DataTransfer();transfer.items.add(new File([file],filename,{type:file.type}));
   form.elements.namedItem('attachment').files=transfer.files;
   form.elements.namedItem('_subject').value='Service enquiry | '+reference;
   form.elements.namedItem('Enquiry reference').value=reference;
   HTMLFormElement.prototype.submit.call(form);return;
  }
  downloadRecord(file,filename);
 }catch{
  enquiryStatus.textContent=language==='zh'?'无法准备 Word 文件，请重试。':'Could not prepare the Word file. Please try again.';
 }
});
function downloadRecord(file,filename){
 const url=URL.createObjectURL(file),link=document.createElement('a');link.href=url;link.download=filename;
 document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 enquiryStatus.textContent=(language==='zh'?'咨询编号：':'Enquiry reference: ')+reference;
}
