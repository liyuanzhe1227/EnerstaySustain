import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base = path.dirname(fileURLToPath(import.meta.url));
const siteUrl = 'https://www.enerstaysustainability.com/press';

const books = [
  {
    slug: 'construction-project-safety-management',
    cover: 'construction.jpg',
    title: 'Construction Project Safety Management Handbook',
    subtitle: 'Field Controls, Inspection Tools and Project Decisions',
    language: 'English', pages: '297', year: '2026',
    authors: 'Prof. Yuanzhe Li · Haizhou Wang',
    editors: 'Jiahui Wu · Zeean Tay',
    summary: 'A workfront-oriented handbook connecting design, procurement, sequencing, competence and critical-control decisions across the construction lifecycle.',
    preface: [
      'Construction safety depends on decisions about design, procurement, sequencing, people and the condition of the workfront. This handbook connects those decisions with practical methods for preparing work, checking critical controls and responding when conditions change.',
      'The book follows a project from partner selection and design through mobilisation, construction, commissioning and closeout. Each chapter opens with a field operating guide. Technical notes deepen occupational exposure control and high-risk construction work. The companion Field Inspection and Decision Forms provides editable records for readiness, inspections, changes, corrective action and handover.',
      'The principal readers are project and construction managers, supervisors, WSH professionals, designers and contractors. They can enter the book through a task, a failed control or a required decision. The detailed explanations, calculations and professional learning questions provide supporting depth.',
      'Singapore provides the principal legal context. Use in other Southeast Asian jurisdictions requires local verification of duties, professional appointments, permits, technical requirements and reporting arrangements. International technical sources are identified by origin and do not establish Singapore law.',
      'Illustrative projects, scenarios and numerical examples are identified as such. They are not claims of observed project performance. Documented Singapore cases are distinguished from the accompanying analysis and fictional application exercises.',
      'Chapters 1–3 establish the management and legal foundations. Chapters 4–14 address project preparation and control; Chapters 15–26 address competence, health, assurance, emergencies, environment and handover. Chapters 27–34 examine high-risk work. Appendices retain the references, integrated exercise, glossary, decision templates, learning answers and subject index.'
    ]
  },
  {
    slug: 'corporate-carbon-management',
    cover: 'corporate-carbon.jpg',
    title: 'Corporate Carbon Management, Carbon Accounting and Net-Zero Transition',
    subtitle: 'A Practical Guide to Emissions Measurement, Decarbonization, and Climate Strategy',
    language: 'English', pages: '173', year: '2026',
    authors: 'Prof. Yuanzhe Li · Haizhou Wang',
    editors: 'Jiahui Wu · Zeean Tay',
    summary: 'A practice-led route from greenhouse-gas accounting and evidence quality to reduction planning, supply-chain engagement and net-zero governance.',
    preface: [
      'Carbon management is gradually moving from a relatively professional and marginal environmental issue to a core scenario of corporate operation and management. Carbon emissions are no longer only a descriptive indicator of environmental performance; they increasingly influence market access, supply-chain evaluation, financing costs, brand reputation and long-term competitiveness.',
      'For Chinese companies, domestic dual-carbon objectives are driving changes in energy structure, industrial structure and corporate management, while international customers, overseas markets, tenders and green-finance scenarios require credible answers about emissions, energy sources, reduction plans, product carbon footprints and supply-chain management.',
      'This textbook does not treat carbon management as only a greenhouse-gas inventory project or carbon accounting as formula-based form filling. Enterprise carbon management is an organisational capability: identifying emission sources, establishing reliable data collection and review, producing information for internal management and external communication, and using that foundation for targets, reduction pathways, supply-chain requirements, ESG disclosure and net-zero transition.',
      'The book is intended for business managers, ESG and sustainability managers, environmental and energy teams, quality and system managers, procurement and supply-chain professionals, finance personnel, certification auditors, carbon verifiers, consultants and learners entering low-carbon management.',
      'Its learning sequence moves from background and concepts to organisational systems, accounting methods, data quality, product carbon footprints, industry application, reduction pathways, net-zero strategy, supply-chain requirements, disclosure, third-party assurance, international rules and digital construction.',
      'Readers should distinguish carbon accounting from carbon management, and technical methods from organisational mechanisms. Many apparent calculation problems are actually caused by unclear boundaries, unclear responsibilities, unstable data sources, untraceable records or insufficient coordination. Applicable regulations, standards, customer requirements and assurance guidance should always be checked for the relevant jurisdiction and use case.'
    ]
  },
  {
    slug: 'iso-14001-2026-internal-auditor',
    cover: 'iso14001.jpg',
    title: 'ISO 14001:2026 Internal Auditor Training Textbook',
    subtitle: 'Environmental Management System Internal Auditor Training Program',
    language: 'English', pages: '375', year: '2026',
    authors: 'Haizhou Wang · Prof. Yuanzhe Li',
    editors: 'Jiahui Wu · Zeean Tay',
    summary: 'A structured internal-auditor learning text connecting ISO 14001:2026 management logic with planning, evidence collection, findings and corrective-action verification.',
    preface: [
      'This textbook paraphrases, interprets and teaches ISO 14001:2026 for internal auditor training purposes. It does not reproduce the copyrighted ISO standard text and must not be used as a substitute for an authorised copy of the standard. The examples, checklists, templates and cases are for education and professional development; they are not legal advice, accreditation instructions or a guarantee of certification outcome.',
      'ISO 14001 supports organisations in identifying environmental responsibilities, controlling significant environmental aspects, meeting compliance obligations, improving environmental performance and communicating credible environmental information.',
      'The book explains the management logic behind ISO 14001:2026 requirements and translates that logic into internal audit practice. Readers should use it together with the official standard, their organisation’s EMS documents, applicable legal and other requirements, and relevant audit guidance.',
      'The 2026 edition retains the familiar management-system framework while clarifying environmental conditions and climate-related issues, interested parties, risk and opportunity planning, lifecycle perspective, planning of changes, externally provided processes, performance evaluation and the explanatory role of Annex A.',
      'The textbook is intended for internal auditors, environmental management personnel, process owners, compliance and supplier-management personnel, trainers and managers who need to understand what internal audit contributes beyond certification preparation.',
      'Chapter 1 explains the revision background and change points; Chapter 2 covers audit principles, planning, checklists, interviews, evidence, nonconformity wording, reporting and corrective-action verification; Chapter 3 applies those methods to Clauses 4 to 10. Appendices provide templates, terminology, references, industry cases and quantitative tools.',
      'A competent internal auditor should ask three questions throughout the audit: what requirement or commitment is being tested; what objective evidence shows how the process actually operates; and what conclusion can be reached without exaggerating, weakening or replacing the audit criteria.'
    ]
  },
  {
    slug: 'iso-iec-42001-audit-competence',
    cover: 'iso42001.jpg',
    title: 'ISO/IEC 42001:2023 Audit Competence Training Textbook',
    subtitle: 'Artificial Intelligence Management System Audit Competence Training Program',
    language: 'English', pages: '209', year: '2026',
    authors: 'Haizhou Wang · Prof. Yuanzhe Li',
    editors: 'Jiahui Wu · Zeean Tay',
    summary: 'A practice-oriented manual for auditing AI management systems through risk, impact, lifecycle, data, human oversight and evidence-based judgement.',
    preface: [
      'This textbook is training and audit-competence development material based on the management-system logic of ISO/IEC 42001 and related AI-governance practices. It is not the official ISO/IEC 42001 text and must not replace the official standard, applicable audit criteria, laws, contracts or organisational documented information.',
      'Its purpose is to help learners understand the management-system logic, audit thinking, evidence route and competence requirements behind an artificial intelligence management system. Examples, cases, templates, workpapers and exercises are designed for training and are not legal opinions, regulatory interpretations, technical validation conclusions or consulting schemes.',
      'The textbook is based on ISO/IEC 42001:2023 and refers to related standards and regulatory contexts where relevant. Readers should distinguish the edition year of each referenced standard from the publication year of this textbook and verify applicable requirements for the auditee’s jurisdiction, role and AI use case.',
      'The primary audience includes management-system auditors, certification-body personnel, internal auditors, compliance and risk professionals, AI-governance managers, information-security and privacy practitioners, AI product and lifecycle owners, and training providers.',
      'The central task is to show how AI-specific risk, impact, lifecycle, data, human oversight, transparency and third-party dependence enter the management-system audit route. The text explains how to learn and audit; it does not replace normative documents.',
      'AI systems introduce data, models, prompts, lifecycle changes, third-party services and human-machine interactions. Auditors need compound competence: management-system thinking, AI literacy, risk and impact sensitivity, evidence discipline and professional restraint.',
      'The learning route moves from purpose and structure to context, scope, leadership, risk, support processes, lifecycle control, Annex A controls, audit planning, on-site audit, findings, reporting, industry cases and auditor competence. It repeatedly uses the route of requirement, implementation, evidence and judgement.',
      'Learners new to ISO/IEC 42001 should begin with the foundational chapters before moving into lifecycle controls and audit execution. Experienced auditors may focus on adapting existing audit principles to AI scenarios, while instructors may use the appendices for simulations, working papers, competence evaluation and course design.'
    ]
  },
  {
    slug: 'medical-device-esg-management',
    cover: 'medical-esg.jpg',
    title: '医疗器械企业 ESG 管理与评价概论',
    subtitle: '从行业责任到管理实践 · 从证据质量到评价与认证',
    language: '中文', pages: '192', year: '2026',
    authors: 'Prof. Yuanzhe Li · Haizhou Wang · Yun Bai',
    editors: 'Jiahui Wu · Zeean Tay',
    summary: '面向医疗器械企业的 ESG 管理与评价教材，将生命周期、患者安全、环境责任、数据质量及治理证据置于同一实践框架。',
    preface: [
      '医疗器械连接技术创新与人的生命健康。一次包装减量、一项供方替代、一份临床数据或一次商业活动，都可能同时涉及环境负担、患者安全、人员权益和组织治理。企业需要一种能够把这些关系放在共同视野中，又尊重专业分工与证据条件的管理语言。ESG 为这种学习提供了入口。',
      '本书以医疗器械企业的实际经营角色和产品生命周期为基础，讨论怎样识别重要议题、建立运行体系、获得可靠数据并作出有依据的评价。管理的价值体现为更清楚的责任、更及时的风险响应、更有效的资源使用和更可信的沟通。评价与认证则帮助使用者在明确范围内理解企业的能力与符合状态。',
      '全书共六编二十章。第一编建立概念、制度与行业认识；第二编说明管理体系怎样形成循环；第三编深入环境、社会和治理的行业议题；第四编讲解数据基础、成熟度评分与门槛；第五编讨论认证制度、实施及证书管理；第六编通过综合案例、国际衔接与趋势分析拓展应用。附录集中提供术语、议题库、映射、评分及报告工具和官方查询索引。',
      '本书把事实、要求和评价分别表述。事实回答发生了什么，要求说明应依据什么作出判断，评价则解释现有证据可以支持何种结论。贯穿全书的案例既展示可以采取的行动，也说明如何验证效果。真实改进值得肯定；把结论写得准确，能够使改进成果被恰当地理解和使用。',
      '本书适合医疗器械企业管理、质量、法规、生产、采购、研发、数据和合规人员学习，也可用于高等院校相关课程、企业培训及评价认证人员的专业学习。读者无需预先掌握所有 ESG 框架，但宜具备基本的企业管理和医疗器械行业知识。各章既可按顺序研读，也可围绕实际问题组合使用。'
    ]
  }
];

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const enZh = (en, zh) => `data-en="${escapeHtml(en)}" data-zh="${escapeHtml(zh)}"`;

function header(current = 'press') {
  const nav = [
    ['../index.html#home','Home','首页','home'],
    ['../services.html','Services','服务','services'],
    ['../team.html','Team','团队','team'],
    ['../experience.html','Experience','经验','cases'],
    ['../standards.html','Standards','标准','standards'],
    ['../training.html','Training','培训','training'],
    ['../research.html','Research','研究','research'],
    ['./','Press','出版','press'],
    ['../jeaca/','Journal','期刊','journal'],
    ['../trustmark.html','Trustmark','信任标识','trustmark'],
    ['../index.html#contact','Contact','联系','contact']
  ];
  return `<header class="site-header"><a class="brand" href="../index.html#home" aria-label="Enerstay Sustainability home"><img class="brand-logo" src="../assets/logo.png" width="1120" height="340" alt="Enerstay Sustainability"></a><button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" data-menu-toggle><span></span><span></span><span></span></button><nav class="nav" aria-label="Primary navigation">${nav.map(([href,en,zh,id]) => `<a href="${href}"${id === current ? ' aria-current="page"' : ''} data-i18n="nav.${id}">${en}</a>`).join('')}</nav><button class="lang-toggle" type="button" aria-label="Switch language" data-lang-toggle><span data-lang-option="en">EN</span><span data-lang-option="zh">中</span></button></header>`;
}

function footer() {
  return `<footer class="site-footer press-site-footer"><a class="brand footer-brand" href="../index.html#home" aria-label="Enerstay Sustainability home"><img class="brand-logo" src="../assets/logo.png" width="1120" height="340" alt="Enerstay Sustainability"></a><p><strong>Enerstay Sustainability Press</strong><br><span ${enZh('Published by Enerstay Sustainability Pte. Ltd.','由 Enerstay Sustainability Pte. Ltd. 出版')}>Published by Enerstay Sustainability Pte. Ltd.</span><br>3791 Jalan Bukit Merah, #03-05, E-Centre @ Redhill, Singapore 159471</p><nav class="footer-links" aria-label="Publishing links"><a href="./" ${enZh('Books','书目')}>Books</a><a href="../jeaca/" ${enZh('Journal','期刊')}>Journal</a><a href="../research.html" ${enZh('Research','科研')}>Research</a><a href="../privacy.html" ${enZh('Privacy','隐私')}>Privacy</a><a href="../index.html#home" ${enZh('Enerstay website','Enerstay 官网')}>Enerstay website</a></nav></footer>`;
}

function shell({ title, description, canonical, image, body, robots = 'index,follow' }) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}"><meta name="robots" content="${robots}"><link rel="canonical" href="${canonical}"><meta property="og:type" content="website"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${image}"><meta name="twitter:card" content="summary_large_image"><link rel="icon" type="image/png" href="../assets/logo-mark.png"><link rel="stylesheet" href="../styles.css?v=release-20261002f"><link rel="stylesheet" href="press.css?v=release-20261002f"></head><body>${body}<script src="../script.js?v=release-20261002f"></script><script src="press.js?v=release-20261002f"></script></body></html>`;
}

function card(book) {
  return `<article class="press-book-card"><a class="press-cover-link" href="${book.slug}.html"><img src="assets/covers/${book.cover}" width="900" height="1272" alt="Cover of ${escapeHtml(book.title)}" loading="lazy"></a><div class="press-book-meta"><span>${escapeHtml(book.language)} · ${book.pages} pages</span><span class="press-price">SGD 38</span></div><h3><a href="${book.slug}.html">${escapeHtml(book.title)}</a></h3><p>${escapeHtml(book.summary)}</p><div class="press-book-actions"><a class="press-button press-button-primary" href="${book.slug}.html" ${enZh('View book','查看书目')}>View book</a><a class="press-button press-button-secondary" href="order.html?book=${book.slug}" ${enZh('Purchase','购买')}>Purchase</a></div></article>`;
}

function buildIndex() {
  const body = `${header()}<main><section class="press-hero"><div class="press-container press-hero-inner"><div><p class="press-eyebrow">Enerstay Sustainability Press</p><h1 ${enZh('Practice-led books for credible decisions','面向可信决策的实践型专业书籍')}>Practice-led books for credible decisions</h1><p class="press-hero-copy" ${enZh('Professional handbooks and training texts connecting standards, evidence, management systems and applied sustainability practice.','连接标准、证据、管理体系与可持续发展实践的专业手册和培训教材。')}>Professional handbooks and training texts connecting standards, evidence, management systems and applied sustainability practice.</p><p class="press-hero-note" ${enZh('Each title combines structured explanation, applied examples and reusable practice tools for professionals, organisations and learning cohorts.','每本书均融合结构化讲解、应用案例与可复用的实践工具，服务于专业人士、组织及学习团队。')}>Each title combines structured explanation, applied examples and reusable practice tools for professionals, organisations and learning cohorts.</p><div class="press-hero-actions"><a class="press-button press-button-primary" href="#books" ${enZh('Browse books','浏览书目')}>Browse books</a><a class="press-button press-button-secondary" href="../index.html#home" ${enZh('Back to Enerstay','返回 Enerstay 官网')}>Back to Enerstay</a></div></div></div></section><section class="press-section" id="books"><div class="press-container"><div class="press-section-head"><div><p class="press-eyebrow" ${enZh('2026 catalogue','2026 年书目')}>2026 catalogue</p><h2 ${enZh('Books from Enerstay Sustainability Press','Enerstay Sustainability Press 出版书籍')}>Books from Enerstay Sustainability Press</h2></div><p ${enZh('Select a title to view its publication details and preface. Full book files are supplied only after purchase confirmation.','选择书名可查看出版信息与前言。完整书籍仅在购买确认后提供。')}>Select a title to view its publication details and preface. Full book files are supplied only after purchase confirmation.</p></div><div class="press-book-grid">${books.map(card).join('')}</div></div></section></main>${footer()}`;
  fs.writeFileSync(path.join(base,'index.html'), shell({title:'Enerstay Sustainability Press | Professional Books',description:'Professional sustainability, assurance, carbon, ISO and ESG books published by Enerstay Sustainability Press.',canonical:`${siteUrl}/`,image:`${siteUrl}/assets/covers/corporate-carbon.jpg`,body}));
}

function buildBook(book) {
  const body = `${header()}<main class="press-detail"><div class="press-container"><nav class="press-breadcrumb" aria-label="Breadcrumb"><a href="./" ${enZh('Press','出版')}>Press</a><span>/</span><span>${escapeHtml(book.title)}</span></nav><div class="press-detail-grid"><figure class="press-detail-cover"><img src="assets/covers/${book.cover}" width="900" height="1272" alt="Cover of ${escapeHtml(book.title)}"></figure><article class="press-detail-copy"><span class="press-detail-label">Enerstay Sustainability Press · First Edition</span><h1>${escapeHtml(book.title)}</h1><p class="press-subtitle">${escapeHtml(book.subtitle)}</p><dl class="press-facts"><div><dt ${enZh('Chief editors','主编')}>Chief editors</dt><dd>${escapeHtml(book.authors)}</dd></div><div><dt ${enZh('Responsible editors','责任编辑')}>Responsible editors</dt><dd>${escapeHtml(book.editors)}</dd></div><div><dt ${enZh('Publication','出版信息')}>Publication</dt><dd>Singapore · ${book.year} · Paperback</dd></div><div><dt ${enZh('Language and extent','语言与页数')}>Language and extent</dt><dd>${escapeHtml(book.language)} · ${book.pages} pages</dd></div></dl><div class="press-buy-box"><div><strong>SGD 38</strong><span ${enZh('per copy','每本')}>per copy</span></div><a class="press-button press-button-primary" href="order.html?book=${book.slug}" ${enZh('Purchase this book','购买本书')}>Purchase this book</a></div><section class="press-preface"><p class="press-eyebrow" ${enZh('From the book','摘自本书')}>From the book</p><h2 ${enZh(book.language === '中文' ? '前言' : 'Preface','前言')}>${book.language === '中文' ? '前言' : 'Preface'}</h2>${book.preface.map((paragraph)=>`<p>${escapeHtml(paragraph)}</p>`).join('')}<div class="press-notice" ${enZh('This page presents publication information and the preface only. The full book is not publicly downloadable.','本页仅展示出版信息与前言，不提供整本书公开下载。')}>This page presents publication information and the preface only. The full book is not publicly downloadable.</div></section></article></div></div></main>${footer()}`;
  fs.writeFileSync(path.join(base,`${book.slug}.html`), shell({title:`${book.title} | Enerstay Sustainability Press`,description:book.summary,canonical:`${siteUrl}/${book.slug}.html`,image:`${siteUrl}/assets/covers/${book.cover}`,body}));
}

function buildOrder() {
  const options = books.map((book)=>`<option value="${book.slug}">${escapeHtml(book.title)} — SGD 38</option>`).join('');
  const body = `${header()}<main class="press-form-page"><div class="press-container press-form-shell"><div><p class="press-eyebrow" ${enZh('Book purchase','书籍购买')}>Book purchase</p><h1 ${enZh('Request a copy','申请购买')}>Request a copy</h1><p ${enZh('Each title is SGD 38 per copy. Complete the form and Enerstay Sustainability Press will send payment and delivery instructions.','每本售价 SGD 38。提交表单后，Enerstay Sustainability Press 将发送付款和交付说明。')}>Each title is SGD 38 per copy. Complete the form and Enerstay Sustainability Press will send payment and delivery instructions.</p><p><a href="./" ${enZh('Return to the catalogue','返回书目')}>Return to the catalogue</a></p></div><form class="press-form" action="https://formsubmit.co/enquiries@enerstaysustainability.com" method="post"><input type="hidden" name="_subject" value="Enerstay Sustainability Press book order"><input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="false"><input type="hidden" name="_next" value="https://www.enerstaysustainability.com/press/order-thanks.html"><label class="wide"><span ${enZh('Book','书籍')}>Book</span><select name="book" required data-order-book><option value="" disabled selected>Select a book</option>${options}</select></label><label><span ${enZh('Quantity','数量')}>Quantity</span><input name="quantity" type="number" min="1" value="1" required></label><label><span ${enZh('Name','姓名')}>Name</span><input name="name" autocomplete="name" required></label><label><span ${enZh('Email','邮箱')}>Email</span><input name="email" type="email" autocomplete="email" required></label><label><span ${enZh('Organisation','机构')}>Organisation</span><input name="organisation" autocomplete="organization"></label><label class="wide"><span ${enZh('Delivery location and notes','交付地点与备注')}>Delivery location and notes</span><textarea name="message" required></textarea></label><button class="press-button press-button-primary wide" type="submit" ${enZh('Send purchase request','提交购买申请')}>Send purchase request</button><small class="wide" ${enZh('Submitting sends these details to Enerstay Sustainability Press for payment and delivery fulfilment.','提交后，相关信息将发送至 Enerstay Sustainability Press，用于付款和交付安排。')}>Submitting sends these details to Enerstay Sustainability Press for payment and delivery fulfilment.</small></form></div></main>${footer()}`;
  fs.writeFileSync(path.join(base,'order.html'), shell({title:'Purchase a book | Enerstay Sustainability Press',description:'Request purchase of Enerstay Sustainability Press books at SGD 38 per copy.',canonical:`${siteUrl}/order.html`,image:`${siteUrl}/assets/covers/corporate-carbon.jpg`,body,robots:'noindex,follow'}));
  const thanks = `${header()}<main class="press-form-page"><div class="press-container"><p class="press-eyebrow" ${enZh('Request received','已收到申请')}>Request received</p><h1 ${enZh('Thank you','谢谢')}>Thank you</h1><p ${enZh('Enerstay Sustainability Press will follow up with payment and delivery instructions.','Enerstay Sustainability Press 将跟进付款和交付说明。')}>Enerstay Sustainability Press will follow up with payment and delivery instructions.</p><p><a class="press-button press-button-primary" href="./" ${enZh('Return to catalogue','返回书目')}>Return to catalogue</a></p></div></main>${footer()}`;
  fs.writeFileSync(path.join(base,'order-thanks.html'), shell({title:'Purchase request received | Enerstay Sustainability Press',description:'Book purchase request confirmation.',canonical:`${siteUrl}/order-thanks.html`,image:`${siteUrl}/assets/covers/corporate-carbon.jpg`,body:thanks,robots:'noindex,follow'}));
}

buildIndex();
books.forEach(buildBook);
buildOrder();
console.log(`Built Enerstay Sustainability Press catalogue with ${books.length} books.`);
