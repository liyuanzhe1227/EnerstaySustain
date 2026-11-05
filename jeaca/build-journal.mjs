import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base = path.dirname(fileURLToPath(import.meta.url));
const siteUrl = 'https://www.enerstaysustainability.com/jeaca';
const publisherName = 'Enerstay Sustainability Pte. Ltd.';
const publisherAddress = '3791 Jalan Bukit Merah, #03-05, E-Centre @ Redhill, Singapore 159471';
const publicationFrequency = 'Quarterly (4 issues per year)';
const publicationDate = '1 November 2026';
const publicationDateUpper = '1 NOVEMBER 2026';
const publicationDateIso = '2026-11-01';
const issueDisplay = 'VOLUME 1 · ISSUE 1';
const issueCitationDisplay = 'Volume 1 · Issue 1';
const issuePdfUrl = `${siteUrl}/vol-1/no-1/jeaca-volume-1-issue-1-2026.pdf`;
const businessPhone = '+65 8626 7896';

const articles = [
  {
    id: 'R01', type: 'Review Article', typeClass: 'review', pages: '5–57', slug: 'microalgal-carbon-sequestration',
    title: 'Microalgal Carbon Sequestration: A Systematic Review of Monitoring Approaches, Environmental Drivers, Biological Mechanisms, and Applied Systems',
    abstract: `Microalgae convert inorganic carbon into biomass and other carbon-containing products, while also supporting nutrient recovery and low-carbon bioproduct generation. This systematic review synthesizes evidence on microalgal carbon sequestration, with emphasis on monitoring indicators, environmental controls, biological mechanisms, cultivation systems, and applications in wastewater treatment, bioenergy, and circular resource use. Following screening, 109 studies were retained as the core evidence set because they explicitly addressed microalgae-related carbon sinks and reported methods or results for carbon monitoring, calculation, modelling, or performance assessment. Across these studies, carbon fixation and storage were shaped by species traits and cultivation context, particularly light, temperature, pH, nutrient supply, CO2 availability, salinity, pollutant exposure, and reactor or ecosystem design. Common monitoring variables included biomass productivity, CO2 removal, carbon-fixation rate, dissolved inorganic carbon, particulate organic carbon, photosynthetic efficiency, nutrient removal, and life-cycle or techno-economic metrics. Recent work has moved from single-species laboratory cultivation toward integrated systems, including photobioreactors, algal-bacterial consortia, wastewater-linked cultivation, flue-gas utilization, natural phytoplankton communities, and carbonate chemistry-based carbon management. The value of these systems depends on the fate of the fixed carbon - whether it remains in harvested biomass, enters products, or is released during downstream processing. When cultivation is paired with wastewater treatment and biomass valorization, fixed carbon can be routed into fuels, bioproducts, residual biomass, or other defined product streams. Durable carbon-sink contributions remain context-dependent and require full-boundary assessment of energy inputs, biomass fate, downstream processing, and long-term carbon storage. The evidence indicates that microalgal carbon-sink performance cannot be judged from CO2 uptake alone. It also depends on whether fixed carbon is retained in biomass, transferred to durable products, mineralized, or rapidly returned to the atmosphere through downstream processing. Carbon-fixation rate, biomass fate, energy inputs, and product allocation should be reported within the same accounting boundary.`,
    authors: ['Yuanzhe Li', 'WanLuoh Choo', 'Danqi Wang'],
    affiliations: [],
    keywords: ['Microalgae', 'Carbon sequestration', 'Carbon fixation', 'Carbon monitoring', 'Photobioreactor', 'Wastewater treatment', 'Life-cycle assessment', 'Circular bioeconomy']
  },
  {
    id: 'R02', type: 'Review Article', typeClass: 'review', pages: '58–72', slug: 'trusted-digital-infrastructure-building-energy-mrv',
    title: 'Trusted Digital Infrastructure for Building Energy MRV and Carbon-Market Integration: A Design-Oriented Review and Reference Architecture for Singapore',
    abstract: `Building-energy platforms are increasingly capable of collecting high-frequency operational data, yet the path from monitored efficiency gains to audit-ready decarbonization evidence remains fragmented. This paper presents a design-oriented review and reference architecture that integrates building Internet of Things (IoT), edge-cloud computing, analytics, digital measurement, reporting and verification (dMRV), and carbon-market interfaces. Singapore is used as a regulatory case because it combines ambitious green-building targets, an economy-wide carbon tax, and an international carbon-credit framework. The proposed architecture separates six functions - physical sensing, edge integration, data and compute services, analytics, MRV and assurance, and external registry or market interfaces - under a cross-cutting governance plane for identity, provenance, cybersecurity, model versioning, and auditability. A key design principle is that verified energy savings are evidence inputs rather than carbon credits: methodology eligibility, additionality, independent assurance, registry issuance, and, where relevant, Singapore's international-credit eligibility rules remain distinct downstream gates. The review identifies trade-offs between edge and cloud processing, centralized databases and distributed ledgers, and automation and verifier independence, and translates them into a five-phase implementation roadmap. The contribution is a computer-science-centered blueprint for building-energy systems that must be interoperable, verifiable, and regulator-ready rather than merely data-rich.`,
    authors: ['Yuanzhe Li'],
    affiliations: ['Carbon Neutrality Institute, China University of Mining and Technology, Xuzhou 221116, China', 'School of Civil and Environmental Engineering, University of Auckland, Auckland 1010, New Zealand'],
    keywords: ['Building energy informatics', 'Digital MRV', 'Edge-cloud computing', 'Data provenance', 'Carbon markets', 'Singapore']
  },
  {
    id: 'A01', type: 'Research Article', typeClass: 'research', pages: '73–89', slug: 'audit-ready-hotel-food-beverage-carbon-management',
    title: 'An Audit-Ready Framework for Carbon Management in Hotel Food and Beverage Systems Using Hybrid Carbon Accounting and Evidence Chain Governance',
    abstract: `Hotel food and beverage (F&B) operations are frequently embedded within aggregated hotel carbon inventories and are therefore under-managed as a distinct, carbon-intensive subsystem. Evidence from food-system LCA syntheses and hospitality-sector decarbonization initiatives indicates that dominant hotel emission drivers often sit outside traditional building-energy boundaries, particularly where restaurants, banquets, bars, and central kitchens are material revenue streams. In these settings, F&B emissions are shaped by upstream agricultural production, processing and packaging, cold-chain logistics and refrigerants, menu structure and portioning, kitchen engineering, and waste generation. We propose the Food & Beverage Carbon-Efficiency System (F&B-CES 2.0), an audit-ready framework that integrates hybrid activity-based and spend-based accounting, an ISO-aligned four-layer evidence chain, and a tiered Copper-Silver-Gold rating mechanism linking performance thresholds to data integrity and governance maturity. The system supports decision-making in menu engineering, procurement governance, capital planning, and product-level low-carbon dish or banquet claims.`,
    authors: ['Yuanzhe Li', 'Jiahui Wu', 'Zeean Tay', 'Haizhou Wang', 'Zhiyong Wu'],
    affiliations: ['Carbon Neutrality Institute, China University of Mining and Technology, Xuzhou 221116, China', 'Enerstay Sustainability Academy, Enerstay Sustainability Pte. Ltd., Singapore 118136'],
    keywords: ['Hotel food and beverage decarbonization', 'Hybrid carbon accounting', 'Audit-ready evidence chain', 'Menu engineering', 'Food waste and circularity']
  },
  {
    id: 'A02', type: 'Research Article', typeClass: 'research', pages: '90–101', slug: 'machine-learning-child-friendly-urban-environment',
    title: 'Machine Learning-Driven Child-Friendly Urban Environment Assessment: A Case Study of China Metropolitan Spatial Quality Assessment',
    abstract: `In response to the problems of subjectivity, evident scale restriction, and lack of dynamism in conventional child-friendly urban environmental evaluations, this paper proposes a machine learning-based multi-dimensional evaluation framework. Based on the central urban regions of the three major Chinese metropolises (Shanghai, Shenzhen, and Guangzhou), it utilizes street view images, remote sensing imagery, POI data, and child behavior trajectory data. Through machine learning algorithms including deep learning and random forest, it performs quantitative evaluations in four aspects: ecological safety, spatial accessibility, facility suitability, and behavioral safety. It is found that machine learning can realize fine-grained extraction of child-friendly environmental indicators with an accuracy rate of 89.7%. Spatially, the quality of child-friendly environments in the three metropolises shows a differentiation pattern that "the core areas are better than the peripheral ones, and the waterfront areas are better than the densely developed ones." The density of recreational facilities and the safety of pedestrians in streets are key elements affecting the evaluation outcomes. This framework offers technical support and experience references for the precise implementation of policies in child-friendly city planning.`,
    authors: ['Xuchao Nian', 'Mohd Fabian Bin Hasna', 'Noranita Mansor', 'Yuanzhe Li'],
    affiliations: ['Faculty of Design and Architecture, Universiti Putra Malaysia, Serdang, Selangor 43400, Malaysia', 'NUS College of Design and Engineering, National University of Singapore, Singapore 117575', 'Carbon Neutrality Institute, China University of Mining and Technology, Xuzhou 221116, China'],
    keywords: ['Machine learning', 'Child-friendly city', 'Environmental assessment', 'Spatial quality', 'Metropolis', 'Quantitative analysis']
  },
  {
    id: 'A03', type: 'Perspective Article', typeClass: 'perspective', pages: '102–120', slug: 'destination-decarbonisation-tourist-experience',
    title: 'When Impact Hotspots Are Invisible: Aligning Destination Decarbonisation With Tourist Experience',
    abstract: `Destination sustainability assessment has increasingly relied on life cycle-based standards to quantify environmental performance, while tourism research has traditionally focused on tourists' perceptions and behavioural intentions. Despite these parallel advances, a persistent gap remains between life-cycle environmental effectiveness and tourists' experiential and behavioural responses. This Perspective reframes destination sustainability assessment through a lifecycle and value-chain lens. Conceptualising destinations as tourism value chains, it argues that environmental impacts are unevenly distributed across stages and unevenly perceived by tourists. As a result, sustainability strategies risk misalignment when life-cycle impact hotspots remain experientially invisible, while highly visible practices carry limited environmental significance. Building on tourism satisfaction analytics and established standards (ISO 14064-1, ISO 14067, PAS 2060, PAS 2080), this paper proposes an interface framework linking life-cycle impact assessment with tourist perception and behavioural intention. Rather than replacing formal measurement, perception-based indicators function as diagnostic signals, revealing where environmental performance fails to translate into behavioural influence or where reputational risks may emerge. The framework also shows how tourism experience data can be operationalised as stage-specific perceptual and behavioural leverage indicators, anchored in PAS- and ISO-aligned accounting to support prioritisation and destination-level decision-making. The Perspective contributes a system-aware foundation for destination sustainability governance and a basis for future empirical validation.`,
    authors: ['Yuanzhe Li', 'Haizhou Wang', 'Zhiyong Wu'],
    affiliations: ['Carbon Neutrality Institute, China University of Mining and Technology, Xuzhou 221116, China', 'School of Education, RMIT University, Melbourne VIC 3000, Australia'],
    keywords: ['Life cycle', 'Value chain', 'Environmental impact hotspots', 'Tourist perception']
  }
];

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const enZh = (en, zh) => `data-en="${escapeHtml(en)}" data-zh="${escapeHtml(zh)}"`;
const normaliseIssueLabels = (html) => html
  .replaceAll('Volume 1, No. 1 · 2027', issueDisplay)
  .replaceAll('Vol. 1 · No. 1 · 2027', issueDisplay)
  .replaceAll('Vol. 1, No. 1 (2027)', issueDisplay)
  .replaceAll('Volume 1, No. 1', issueDisplay);
const editorInstitution = () => `<p class="journal-editor-affiliation"><strong ${enZh('Editorial institution and correspondence address','编辑机构及通讯地址')}>Editorial institution and correspondence address</strong><br>${publisherName}<br>${publisherAddress}</p>`;
const articleUrl = (article) => `${siteUrl}/vol-1/no-1/${article.slug}/`;
const asset = (depth, name) => `${'../'.repeat(depth)}${name}`;

function header(depth, current = '') {
  const home = asset(depth, '');
  const nav = [
    ['current-issue', 'Current issue', '当期'],
    ['archive', 'Archive', '往期'],
    ['for-authors', 'For authors', '作者指南'],
    ['editors', 'Editorial board', '编辑团队'],
    ['about', 'About', '期刊介绍'],
    ['policies', 'Policies', '出版政策']
  ];
  const siteNav = [
    [asset(depth + 1, 'index.html#home'), 'Home', 'home'],
    [asset(depth + 1, 'services.html'), 'Services', 'services'],
    [asset(depth + 1, 'team.html'), 'Team', 'team'],
    [asset(depth + 1, 'experience.html'), 'Experience', 'cases'],
    [asset(depth + 1, 'standards.html'), 'Standards', 'standards'],
    [asset(depth + 1, 'training.html'), 'Training', 'training'],
    [asset(depth + 1, 'research.html'), 'Research', 'research'],
    [asset(depth + 1, 'press/'), 'Press', 'press'],
    [home, 'Journal', 'journal'],
    [asset(depth + 1, 'trustmark.html'), 'Trustmark', 'trustmark'],
    [asset(depth + 1, 'index.html#contact'), 'Contact', 'contact']
  ];
  const siteHeader = `<header class="site-header journal-site-header"><a class="brand" href="${asset(depth + 1, 'index.html#home')}" aria-label="Enerstay Sustainability home"><img class="brand-logo" src="${asset(depth + 1, 'assets/logo.png')}" width="1120" height="340" alt="Enerstay Sustainability"></a><button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" data-menu-toggle><span></span><span></span><span></span></button><nav class="nav" aria-label="Primary navigation">${siteNav.map(([href,label,id]) => `<a href="${href}"${id === 'journal' ? ' aria-current="page"' : ''} data-i18n="nav.${id}">${label}</a>`).join('')}</nav><button class="lang-toggle" type="button" aria-label="Switch language" data-lang-toggle><span data-lang-option="en">EN</span><span data-lang-option="zh">中</span></button></header>`;
  if (current === 'cover') return siteHeader;
  return `${siteHeader}<div class="journal-header">
    <div class="journal-container journal-header-inner">
      <a class="journal-lockup" href="${home}" aria-label="JEACA home"><span class="journal-lockup-mark">JEACA</span><span class="journal-lockup-copy"><strong>engineering assurance</strong><span>+ conformity assessment</span></span></a>
      <nav class="journal-nav" aria-label="Journal navigation">${nav.map(([id,en,zh]) => `<a href="${home}#${id}"${current === id ? ' aria-current="page"' : ''} ${enZh(en,zh)}>${en}</a>`).join('')}<a class="journal-nav-cta" href="${home}#interest" ${enZh('Register interest','登记意向')}>Register interest</a></nav>
    </div>
  </div>`;
}

function homepageNav() {
  const links = [
    ['current-issue', 'Current issue', '当期'],
    ['archive', 'Archive', '往期'],
    ['for-authors', 'For authors', '作者指南'],
    ['editors', 'Editorial board', '编辑团队'],
    ['about', 'About', '期刊介绍'],
    ['policies', 'Policies', '出版政策']
  ];
  return `<div class="journal-home-nav"><div class="journal-container"><nav aria-label="Journal navigation">${links.map(([id,en,zh]) => `<a href="#${id}" ${enZh(en,zh)}>${en}</a>`).join('')}<a class="journal-nav-cta" href="#interest" ${enZh('Register interest','登记意向')}>Register interest</a></nav></div></div>`;
}

function footer(depth) {
  const root = asset(depth, '');
  return `<footer class="site-footer journal-site-footer"><a class="brand footer-brand" href="${asset(depth + 1, 'index.html#home')}" aria-label="Enerstay Sustainability home"><img class="brand-logo" src="${asset(depth + 1, 'assets/logo.png')}" width="1120" height="340" alt="Enerstay Sustainability"></a><p><strong>Journal of Engineering Assurance and Conformity Assessment</strong><br><span ${enZh('Published by Enerstay Sustainability Pte. Ltd.','由 Enerstay Sustainability Pte. Ltd. 出版')}>Published by Enerstay Sustainability Pte. Ltd.</span><br>${publisherAddress}<br><a href="mailto:enquiries@enerstaysustainability.com">enquiries@enerstaysustainability.com</a> · <a href="tel:+6586267896">${businessPhone}</a></p><nav class="footer-links" aria-label="Journal footer"><a href="${root}#current-issue" ${enZh('Current issue','当期')}>Current issue</a><a href="${root}#for-authors" ${enZh('For authors','作者指南')}>For authors</a><a href="${asset(depth + 1, 'press/')}" ${enZh('Press','出版')}>Press</a><a href="${asset(depth + 1, 'privacy.html')}" ${enZh('Privacy','隐私')}>Privacy</a><a href="${asset(depth + 1, 'index.html')}" ${enZh('Enerstay website','Enerstay 官网')}>Enerstay website</a></nav></footer>`;
}

function documentShell({ title, description, canonical, image, depth, body, extraHead = '' }) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}"><meta name="robots" content="index,follow">
  <link rel="canonical" href="${canonical}"><meta property="og:type" content="article"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${image}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/png" href="${asset(depth + 1, 'assets/logo-mark.png')}"><link rel="stylesheet" href="${asset(depth + 1, 'styles.css')}?v=release-20261012a"><link rel="stylesheet" href="${asset(depth, 'journal.css')}?v=release-20261012a">${extraHead}
</head><body>${body}<script src="${asset(depth + 1, 'script.js')}?v=release-20261012a"></script><script src="${asset(depth, 'journal.js')}?v=release-20261012a"></script></body></html>`;
}

function articleCard(article) {
  const href = `./vol-1/no-1/${article.slug}/`;
  const summary = article.abstract.slice(0, 330).replace(/\s+\S*$/, '') + '…';
  return `<article class="journal-card"><div><div class="journal-card-meta"><span class="journal-type journal-type-${article.typeClass}">${escapeHtml(article.type.replace(' Article',''))}</span><span>${issueDisplay}</span><span>Pages ${article.pages}</span></div><h3><a href="${href}">${escapeHtml(article.title)}</a></h3><p class="journal-article-byline">${escapeHtml(article.authors.join('; '))}</p><p class="journal-card-summary">${escapeHtml(summary)}</p><div class="journal-keywords">${article.keywords.slice(0,3).map((keyword) => `<span>${escapeHtml(keyword)}</span>`).join('')}</div></div><div class="journal-card-actions"><a class="journal-button journal-button-primary" href="${href}" ${enZh('Read abstract','阅读摘要')}>Read abstract</a><a class="journal-button journal-button-secondary" href="${issuePdfUrl}" target="_blank" rel="noopener" ${enZh('Download published issue','下载正式期刊')}>Download published issue</a></div></article>`;
}

function buildHomepage() {
  const title = 'JEACA | Journal of Engineering Assurance and Conformity Assessment';
  const description = 'Published online journal for engineering assurance, conformity assessment, environmental standards and auditable technical methods.';
  const editorCard = (initials, role, name, email, scope) => `<article class="journal-editor"><div class="journal-editor-avatar">${initials}</div><div><small>${role}</small><h3>${name}</h3><p>${scope}</p>${editorInstitution()}<p><a href="mailto:${email}">${email}</a><br><a href="tel:+6586267896">${businessPhone}</a></p></div></article>`;
  const body = `${header(0, 'cover')}<main>
    <section class="journal-hero"><div class="journal-container journal-hero-inner"><a class="journal-cover-lockup" href="./" aria-label="JEACA home"><span class="journal-cover-mark">JEACA</span><span class="journal-cover-copy"><strong>engineering assurance</strong><span>+ conformity assessment</span></span></a><p class="journal-kicker" ${enZh(`${issueDisplay} · PUBLISHED ${publicationDateUpper}`,'第1卷第1期 · 2026年11月1日正式出版')}>${issueDisplay} · PUBLISHED ${publicationDateUpper}</p><h1>Journal of Engineering Assurance and Conformity Assessment</h1><p class="journal-hero-deck">A digital-first journal connecting engineering assurance, conformity assessment, standards implementation, carbon accounting and auditable technical methods.</p><p class="journal-hero-note" ${enZh('The complete first issue is published online and available below as a free-to-read publisher PDF.','完整创刊号已正式在线出版，可在下方免费下载出版者 PDF。')}>The complete first issue is published online and available below as a free-to-read publisher PDF.</p><div class="journal-card-actions"><a class="journal-button journal-button-primary" href="${issuePdfUrl}" target="_blank" rel="noopener" ${enZh('Download complete published issue','下载完整正式期刊')}>Download complete published issue</a></div><div class="journal-scale"></div></div></section>${homepageNav()}
    <section class="journal-section" id="current-issue"><div class="journal-container"><div class="journal-section-head"><div><p class="journal-section-label">Current issue</p><h2>${issueDisplay}</h2><div class="journal-issue-meta"><span>5 articles</span><span>Published online ${publicationDate}</span><span>Quarterly</span><span>English</span><span>ISSN application pending</span></div></div><p>The complete issue is published and directly accessible without login, payment or an access request.</p></div><p class="journal-metadata-banner"><strong>Publication record:</strong> ${issueCitationDisplay}; published online ${publicationDate}. DOI not assigned. All rights reserved.</p><div class="journal-article-list">${articles.map(articleCard).join('')}</div></div></section>
    <section class="journal-section journal-section-soft" id="for-authors"><div class="journal-container"><div class="journal-section-head"><div><p class="journal-section-label">For authors</p><h2>Scope and editorial process</h2></div><p>JEACA publishes research, reviews, perspectives and applied methods across engineering assurance, conformity assessment, environmental performance, digital measurement, carbon accounting, audit evidence and standards implementation.</p></div><div class="journal-feature-grid"><article><h3>Submission enquiries</h3><p>Contact the editorial office before sending a manuscript. An enquiry does not imply acceptance.</p><a class="journal-text-link" href="mailto:enquiries@enerstaysustainability.com?subject=JEACA%20submission%20enquiry">Contact the editorial office</a></article><article><h3>Publication ethics</h3><p>Authors remain responsible for data, citations, permissions and declarations. Editorial handling preserves independence, conflicts controls and correction records.</p><a class="journal-text-link" href="#policies">Review policies</a></article><article><h3>Review process</h3><p>Administrative screening, editorial assessment, independent review, revision and a recorded final decision.</p><a class="journal-text-link" href="#policies">Review editorial policies</a></article></div></div></section>
    <section class="journal-section" id="editors"><div class="journal-container"><div class="journal-section-head"><div><p class="journal-section-label">Editorial leadership</p><h2>Complete editorial board</h2></div><p>Each editor is listed with the publisher institution, Singapore correspondence address, professional email and business telephone.</p></div><div class="journal-editor-grid">${editorCard('YL','Editor-in-Chief','Yuanzhe Li','yuanzhe.li@enerstaysustainability.com','Engineering assurance, carbon accounting, standards implementation and evidence governance.')}${editorCard('ML','Editor-in-Chief','Micue Liu Hongci','enquiries@enerstaysustainability.com','Editorial direction, interdisciplinary review and international scholarly coordination.')}${editorCard('HW','Associate Editor-in-Chief','Haizhou Wang','haizhou.wang@enerstaysustainability.com','Conformity assessment, technical methods, quality systems and applied engineering practice.')}${editorCard('YB','Editor','Yun Bai','enquiries@enerstaysustainability.com','Editorial coordination, manuscript administration and publication workflow control.')}</div></div></section>
    <section class="journal-section journal-section-soft" id="about"><div class="journal-container"><div class="journal-section-head"><div><p class="journal-section-label">About JEACA</p><h2>Publication record</h2></div><p>The inaugural issue was published online on ${publicationDate}. The publisher PDF is the version of record for the issue.</p></div><dl class="journal-publisher-details"><div><dt>Publisher</dt><dd>${publisherName}</dd></div><div><dt>Publication and correspondence address</dt><dd>${publisherAddress}</dd></div><div><dt>Business telephone</dt><dd><a href="tel:+6586267896">${businessPhone}</a></dd></div><div><dt>Publishing frequency</dt><dd>${publicationFrequency}</dd></div><div><dt>Issue designation</dt><dd>${issueCitationDisplay}</dd></div><div><dt>Publication date</dt><dd>${publicationDate}</dd></div><div><dt>Direct issue PDF</dt><dd><a href="${issuePdfUrl}">${issuePdfUrl}</a></dd></div><div><dt>Editorial contact</dt><dd><a href="mailto:enquiries@enerstaysustainability.com">enquiries@enerstaysustainability.com</a></dd></div></dl></div></section>
    <section class="journal-section" id="policies"><div class="journal-container"><p class="journal-section-label">Publication policies</p><h2>Public rules for every manuscript</h2><nav class="journal-policy-links" aria-label="Publication policies"><a href="#policies">Ethics</a><a href="#policies">Authorship</a><a href="#policies">AI-assisted work</a><a href="#policies">Data &amp; methods</a><a href="#policies">Corrections</a><a href="#policies">Appeals</a><a href="#current-issue">Reader access</a><a href="../privacy.html">Privacy</a></nav></div></section>
    <section class="journal-section journal-section-soft" id="archive"><div class="journal-container"><p class="journal-section-label">Archive</p><h2>2026</h2><p class="journal-section-intro">${issueCitationDisplay}, published ${publicationDate}, is the inaugural issue. <a href="${issuePdfUrl}">Download the complete issue PDF.</a></p></div></section>
    <section class="journal-section" id="interest"><div class="journal-container journal-publisher-note"><p><strong>Editorial and author interest</strong><br>Researchers and practitioners may contact the editorial office. An enquiry does not create an appointment, submission, acceptance or indexing commitment.</p><a class="journal-button journal-button-primary" href="mailto:enquiries@enerstaysustainability.com?subject=JEACA%20editorial%20or%20author%20interest">Contact the editorial office</a></div></section>
  </main>${footer(0)}`;
  const periodicalSchema = { '@context':'https://schema.org','@type':'Periodical',name:'Journal of Engineering Assurance and Conformity Assessment',alternateName:'JEACA',url:`${siteUrl}/`,inLanguage:'en',publicationFrequency:'Quarterly',publisher:{'@type':'Organization',name:publisherName,telephone:businessPhone,email:'enquiries@enerstaysustainability.com',address:{'@type':'PostalAddress',streetAddress:'3791 Jalan Bukit Merah, #03-05, E-Centre @ Redhill',addressLocality:'Singapore',postalCode:'159471',addressCountry:'SG'}} };
  fs.writeFileSync(path.join(base, 'index.html'), documentShell({ title, description, canonical: `${siteUrl}/`, image: `${siteUrl}/social.png`, depth: 0, body: normaliseIssueLabels(body), extraHead: `<script type="application/ld+json">${JSON.stringify(periodicalSchema).replaceAll('<','\\u003c')}</script>` }));
}

function buildArticle(article, index) {
  const depth = 3;
  const [firstPage, lastPage] = article.pages.split('–');
  const canonical = articleUrl(article);
  const description = article.abstract.slice(0, 205).replace(/\s+\S*$/, '') + '…';
  const previous = articles[index - 1];
  const next = articles[index + 1];
  const related = `<nav class="journal-next-prev" aria-label="Adjacent articles">${previous ? `<a href="../${previous.slug}/"><span>Previous article</span><strong>${escapeHtml(previous.title)}</strong></a>` : '<span></span>'}${next ? `<a href="../${next.slug}/"><span>Next article</span><strong>${escapeHtml(next.title)}</strong></a>` : ''}</nav>`;
  const authors = article.authors.join('; ');
  const affiliations = article.affiliations.length ? `<p class="journal-article-byline"><strong>Affiliations:</strong> ${escapeHtml(article.affiliations.join('; '))}</p>` : '';
  const body = `${header(depth, 'current-issue')}<main class="journal-article-main"><header class="journal-article-head"><div class="journal-container"><nav class="journal-breadcrumb" aria-label="Breadcrumb"><a href="../../../">JEACA</a><span>/</span><a href="../../../#current-issue">${issueCitationDisplay}</a><span>/</span><span>${escapeHtml(article.type)}</span></nav><span class="journal-type journal-type-${article.typeClass}">${escapeHtml(article.type)}</span><h1>${escapeHtml(article.title)}</h1><p class="journal-article-byline"><strong>Authors:</strong> ${escapeHtml(authors)}</p>${affiliations}<div class="journal-article-citation-line"><span>Journal of Engineering Assurance and Conformity Assessment</span><strong>${issueCitationDisplay}</strong><span>Published ${publicationDate}</span><span>Pages ${article.pages}</span></div></div></header><div class="journal-container journal-article-layout"><article class="journal-abstract"><p class="journal-section-label">Article content</p><h2>Abstract</h2><p class="journal-abstract-text">${escapeHtml(article.abstract)}</p><div class="journal-article-note">This is the public abstract record. The complete published issue is available directly from the publisher PDF link on this page.</div></article><aside class="journal-article-sidebar" aria-label="Article information"><dl class="journal-info"><div><dt>Type</dt><dd>${escapeHtml(article.type)}</dd></div><div><dt>Issue</dt><dd>${issueCitationDisplay}</dd></div><div><dt>Published online</dt><dd>${publicationDate}</dd></div><div><dt>Pages</dt><dd>${article.pages}</dd></div><div><dt>DOI</dt><dd>Not assigned</dd></div><div><dt>ISSN</dt><dd>Application pending</dd></div><div><dt>Rights</dt><dd>Free to read; all rights reserved</dd></div><div><dt>Keywords</dt><dd>${escapeHtml(article.keywords.join('; '))}</dd></div></dl><div class="journal-access-box" id="access"><small>Published issue PDF</small><p>The complete issue is available without login, payment or an access request.</p><a class="journal-button journal-button-primary" href="${issuePdfUrl}" target="_blank" rel="noopener">Download complete issue</a><div class="journal-side-actions"><button type="button" data-share-article>Share</button></div></div></aside></div><section class="journal-article-bottom"><div class="journal-container"><div class="journal-citation"><h2>Cite this article</h2><p>${escapeHtml(authors)}. ${escapeHtml(article.title)}. <em>Journal of Engineering Assurance and Conformity Assessment</em>. 2026;1(1):${article.pages}.</p><small>No DOI has been assigned.</small></div>${related}</div></section></main>${footer(depth)}`;
  const schema = { '@context':'https://schema.org','@type':'ScholarlyArticle',headline:article.title,description:article.abstract,pagination:article.pages,datePublished:publicationDateIso,isAccessibleForFree:true,author:article.authors.map(name => ({'@type':'Person',name})),isPartOf:{'@type':'PublicationIssue',issueNumber:'1',volumeNumber:'1',datePublished:publicationDateIso,isPartOf:{'@type':'Periodical',name:'Journal of Engineering Assurance and Conformity Assessment'}},publisher:{'@type':'Organization',name:publisherName},url:canonical };
  const authorMeta = article.authors.map(name => `<meta name="citation_author" content="${escapeHtml(name)}">`).join('');
  const extraHead = `<meta name="citation_title" content="${escapeHtml(article.title)}">${authorMeta}<meta name="citation_journal_title" content="Journal of Engineering Assurance and Conformity Assessment"><meta name="citation_publication_date" content="2026/11/01"><meta name="citation_volume" content="1"><meta name="citation_issue" content="1"><meta name="citation_firstpage" content="${firstPage}"><meta name="citation_lastpage" content="${lastPage}"><meta name="citation_pdf_url" content="${issuePdfUrl}"><meta name="citation_language" content="en"><script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>`;
  const directory = path.join(base, 'vol-1', 'no-1', article.slug);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), documentShell({ title: `${article.title} | JEACA`, description, canonical, image: `${canonical}social.png`, depth, body: normaliseIssueLabels(body), extraHead }));
  fs.writeFileSync(path.join(directory, 'social.svg'), socialImage(article.type, article.title));
}

function buildAccess() {
  const body = `${header(0)}<main class="journal-form-page"><div class="journal-container journal-form-shell"><div><p class="journal-section-label">Published issue access</p><h1>Download the complete published issue</h1><p>${issueCitationDisplay} was published online on ${publicationDate}. The publisher PDF is free to read and available without login, payment or an access request.</p><p><a class="journal-text-link" href="./#current-issue">Return to the current issue</a></p></div><div class="journal-access-box"><small>Publisher PDF</small><h2>${issueCitationDisplay}</h2><p>Five complete articles · pages 1–120 · all rights reserved</p><a class="journal-button journal-button-primary" href="${issuePdfUrl}">Download published issue</a></div></div></main>${footer(0)}`;
  fs.writeFileSync(path.join(base, 'access.html'), documentShell({ title:'Published issue access | JEACA',description:'Download the complete first published issue of JEACA.',canonical:`${siteUrl}/access.html`,image:`${siteUrl}/social.png`,depth:0,body }));
  fs.writeFileSync(path.join(base, 'access-thanks.html'), '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=./access.html"><title>Published issue access | JEACA</title></head><body><p><a href="./access.html">Open published issue access</a></p></body></html>');
}

function socialImage(label, title) {
  const words = title.split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    if (`${line} ${word}`.trim().length > 38 && lines.length < 3) { lines.push(line); line = word; }
    else line = `${line} ${word}`.trim();
  }
  if (line && lines.length < 4) lines.push(line);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#183028"/><path d="M720 545H1200M770 515H1200M820 485H1200" stroke="#d9e1dd" opacity=".35"/><text x="72" y="92" fill="#fff" font-family="Georgia,serif" font-size="64" font-weight="700">JEACA</text><text x="300" y="68" fill="#e8f0ec" font-family="Arial,sans-serif" font-size="18" font-weight="700">ENGINEERING ASSURANCE</text><text x="300" y="94" fill="#e8f0ec" font-family="Arial,sans-serif" font-size="18">+ CONFORMITY ASSESSMENT</text><rect x="72" y="144" width="170" height="34" rx="17" fill="#e07a3f"/><text x="157" y="167" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="14" font-weight="700">${escapeHtml(label.toUpperCase())}</text>${lines.map((value,i)=>`<text x="72" y="${244+i*66}" fill="#fff" font-family="Arial,sans-serif" font-size="48" font-weight="700">${escapeHtml(value)}</text>`).join('')}<text x="72" y="574" fill="#b9cbc4" font-family="Arial,sans-serif" font-size="18">Journal of Engineering Assurance and Conformity Assessment</text></svg>`;
}

function buildLegacyRedirect() {
  const mapping = Object.fromEntries(articles.map((article) => [article.id, `./vol-1/no-1/${article.slug}/`]));
  fs.writeFileSync(path.join(base, 'article.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>Article moved | JEACA</title><link rel="stylesheet" href="./journal.css?v=release-20261012a"></head><body><main class="journal-form-page"><div class="journal-container"><h1>Article page moved</h1><p>This article now has a permanent, readable web address.</p><p><a id="legacy-target" class="journal-button journal-button-primary" href="./#current-issue">Open the current issue</a></p></div></main><script>const m=${JSON.stringify(mapping)};const id=new URLSearchParams(location.search).get('id')?.toUpperCase();if(m[id]){document.getElementById('legacy-target').href=m[id];location.replace(m[id]);}</script></body></html>`);
}

buildHomepage();
articles.forEach(buildArticle);
buildAccess();
buildLegacyRedirect();
fs.writeFileSync(path.join(base, 'social.svg'), socialImage(`${issueDisplay} · 2026`, 'Engineering evidence for trustworthy decisions'));
console.log(`Built JEACA homepage, ${articles.length} static article pages and access workflow.`);
