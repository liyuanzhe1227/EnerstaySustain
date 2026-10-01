(() => {
  const articles = {
    R01: {
      type: "Review Article",
      pages: "5–57",
      title: "Microalgal Carbon Sequestration: A Systematic Review of Monitoring Approaches, Environmental Drivers, Biological Mechanisms, and Applied Systems",
      abstract: `Microalgae convert inorganic carbon into biomass and other carbon-containing products, while also supporting nutrient recovery and low-carbon bioproduct generation. This systematic review synthesizes evidence on microalgal carbon sequestration, with emphasis on monitoring indicators, environmental controls, biological mechanisms, cultivation systems, and applications in wastewater treatment, bioenergy, and circular resource use. Following screening, 109 studies were retained as the core evidence set because they explicitly addressed microalgae-related carbon sinks and reported methods or results for carbon monitoring, calculation, modelling, or performance assessment. Across these studies, carbon fixation and storage were shaped by species traits and cultivation context, particularly light, temperature, pH, nutrient supply, CO2 availability, salinity, pollutant exposure, and reactor or ecosystem design. Common monitoring variables included biomass productivity, CO2 removal, carbon-fixation rate, dissolved inorganic carbon, particulate organic carbon, photosynthetic efficiency, nutrient removal, and life-cycle or techno-economic metrics. Recent work has moved from single-species laboratory cultivation toward integrated systems, including photobioreactors, algal-bacterial consortia, wastewater-linked cultivation, flue-gas utilization, natural phytoplankton communities, and carbonate chemistry-based carbon management. The value of these systems depends on the fate of the fixed carbon - whether it remains in harvested biomass, enters products, or is released during downstream processing. When cultivation is paired with wastewater treatment and biomass valorization, fixed carbon can be routed into fuels, bioproducts, residual biomass, or other defined product streams. Durable carbon-sink contributions remain context-dependent and require full-boundary assessment of energy inputs, biomass fate, downstream processing, and long-term carbon storage. The evidence indicates that microalgal carbon-sink performance cannot be judged from CO2 uptake alone. It also depends on whether fixed carbon is retained in biomass, transferred to durable products, mineralized, or rapidly returned to the atmosphere through downstream processing. Carbon-fixation rate, biomass fate, energy inputs, and product allocation should be reported within the same accounting boundary.`,
      keywords: "Microalgae; carbon sequestration; carbon fixation; carbon monitoring; photobioreactor; wastewater treatment; life-cycle assessment; circular bioeconomy"
    },
    R02: {
      type: "Review Article",
      pages: "58–72",
      title: "Trusted Digital Infrastructure for Building Energy MRV and Carbon-Market Integration: A Design-Oriented Review and Reference Architecture for Singapore",
      abstract: `Building-energy platforms are increasingly capable of collecting high-frequency operational data, yet the path from monitored efficiency gains to audit-ready decarbonization evidence remains fragmented. This paper presents a design-oriented review and reference architecture that integrates building Internet of Things (IoT), edge-cloud computing, analytics, digital measurement, reporting and verification (dMRV), and carbon-market interfaces. Singapore is used as a regulatory case because it combines ambitious green-building targets, an economy-wide carbon tax, and an international carbon-credit framework. The proposed architecture separates six functions - physical sensing, edge integration, data and compute services, analytics, MRV and assurance, and external registry or market interfaces - under a cross-cutting governance plane for identity, provenance, cybersecurity, model versioning, and auditability. A key design principle is that verified energy savings are evidence inputs rather than carbon credits: methodology eligibility, additionality, independent assurance, registry issuance, and, where relevant, Singapore's international-credit eligibility rules remain distinct downstream gates. The review identifies trade-offs between edge and cloud processing, centralized databases and distributed ledgers, and automation and verifier independence, and translates them into a five-phase implementation roadmap. The contribution is a computer-science-centered blueprint for building-energy systems that must be interoperable, verifiable, and regulator-ready rather than merely data-rich.`,
      keywords: "Building energy informatics; digital MRV; edge-cloud computing; data provenance; carbon markets; Singapore"
    },
    A01: {
      type: "Research Article",
      pages: "73–89",
      title: "An Audit-Ready Framework for Carbon Management in Hotel Food and Beverage Systems Using Hybrid Carbon Accounting and Evidence Chain Governance",
      abstract: `Hotel food and beverage (F&B) operations are frequently embedded within aggregated hotel carbon inventories and are therefore under-managed as a distinct, carbon-intensive subsystem. Evidence from food-system LCA syntheses and hospitality-sector decarbonization initiatives indicates that dominant hotel emission drivers often sit outside traditional building-energy boundaries, particularly where restaurants, banquets, bars, and central kitchens are material revenue streams. In these settings, F&B emissions are shaped by upstream agricultural production, processing and packaging, cold-chain logistics and refrigerants, menu structure and portioning, kitchen engineering, and waste generation. We propose the Food & Beverage Carbon-Efficiency System (F&B-CES 2.0), an audit-ready framework that integrates hybrid activity-based and spend-based accounting, an ISO-aligned four-layer evidence chain, and a tiered Copper-Silver-Gold rating mechanism linking performance thresholds to data integrity and governance maturity. The system supports decision-making in menu engineering, procurement governance, capital planning, and product-level low-carbon dish or banquet claims.`,
      keywords: "Hotel food and beverage decarbonization; hybrid activity-based and spend-based carbon accounting; audit-ready evidence chain; menu engineering and procurement governance; food waste avoided emissions and circularity"
    },
    A02: {
      type: "Research Article",
      pages: "90–101",
      title: "Machine Learning-Driven Child-Friendly Urban Environment Assessment: A Case Study of China Metropolitan Spatial Quality Assessment",
      abstract: `In response to the problems of subjectivity, evident scale restriction, and lack of dynamism in conventional child-friendly urban environmental evaluations, this paper proposes a machine learning-based multi-dimensional evaluation framework. Based on the central urban regions of the three major Chinese metropolises (Shanghai, Shenzhen, and Guangzhou), it utilizes street view images, remote sensing imagery, POI data, and child behavior trajectory data. Through machine learning algorithms including deep learning and random forest, it performs quantitative evaluations in four aspects: ecological safety, spatial accessibility, facility suitability, and behavioral safety. It is found that machine learning can realize fine-grained extraction of child-friendly environmental indicators with an accuracy rate of 89.7%. Spatially, the quality of child-friendly environments in the three metropolises shows a differentiation pattern that "the core areas are better than the peripheral ones, and the waterfront areas are better than the densely developed ones." The density of recreational facilities and the safety of pedestrians in streets are key elements affecting the evaluation outcomes. This framework offers technical support and experience references for the precise implementation of policies in child-friendly city planning.`,
      keywords: "Machine learning; child-friendly city; environmental assessment; spatial quality; metropolis; quantitative analysis"
    },
    A03: {
      type: "Perspective Article",
      pages: "102–125",
      title: "When Impact Hotspots Are Invisible: Aligning Destination Decarbonisation With Tourist Experience",
      abstract: `Destination sustainability assessment has increasingly relied on life cycle-based standards to quantify environmental performance, while tourism research has traditionally focused on tourists' perceptions and behavioural intentions. Despite these parallel advances, a persistent gap remains between life-cycle environmental effectiveness and tourists' experiential and behavioural responses. This Perspective reframes destination sustainability assessment through a lifecycle and value-chain lens. Conceptualising destinations as tourism value chains, it argues that environmental impacts are unevenly distributed across stages and unevenly perceived by tourists. As a result, sustainability strategies risk misalignment when life-cycle impact hotspots remain experientially invisible, while highly visible practices carry limited environmental significance. Building on tourism satisfaction analytics and established standards (ISO 14064-1, ISO 14067, PAS 2060, PAS 2080), this paper proposes an interface framework linking life-cycle impact assessment with tourist perception and behavioural intention. Rather than replacing formal measurement, perception-based indicators function as diagnostic signals, revealing where environmental performance fails to translate into behavioural influence or where reputational risks may emerge. The framework also shows how tourism experience data can be operationalised as stage-specific perceptual and behavioural leverage indicators, anchored in PAS- and ISO-aligned accounting to support prioritisation and destination-level decision-making. The Perspective contributes a system-aware foundation for destination sustainability governance and a basis for future empirical validation.`,
      keywords: "Life cycle; value chain; environmental impact hotspots; tourist perception"
    }
  };

  const requested = new URLSearchParams(window.location.search).get("id")?.toUpperCase();
  const code = Object.prototype.hasOwnProperty.call(articles, requested) ? requested : "R01";
  const article = articles[code];
  const articleUrl = `https://www.enerstaysustainability.com/jeaca/article.html?id=${code}`;

  document.title = `${article.title} | JEACA`;
  document.getElementById("article-code").textContent = code;
  document.getElementById("article-type").textContent = article.type;
  document.getElementById("article-title").textContent = article.title;
  document.getElementById("article-pages").textContent = `Pages ${article.pages}`;
  document.getElementById("article-abstract").textContent = article.abstract;
  document.getElementById("article-keywords").textContent = article.keywords;
  document.getElementById("article-description").setAttribute("content", article.abstract.slice(0, 155));
  document.getElementById("article-og-title").setAttribute("content", article.title);
  document.getElementById("article-og-description").setAttribute("content", article.abstract.slice(0, 190));
  document.getElementById("article-purchase").href = `mailto:enquiries@enerstaysustainability.com?subject=${encodeURIComponent(`JEACA article purchase - ${code}`)}&body=${encodeURIComponent(`Please send purchase instructions for JEACA article ${code}: ${article.title}`)}`;
  document.getElementById("article-schema").textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: article.title,
    description: article.abstract,
    pagination: article.pages,
    isPartOf: {
      "@type": "PublicationIssue",
      issueNumber: "1",
      volumeNumber: "1",
      isPartOf: {
        "@type": "Periodical",
        name: "Journal of Engineering Assurance and Conformity Assessment"
      }
    },
    publisher: {
      "@type": "Organization",
      name: "Enerstay Sustainability Pte. Ltd."
    },
    url: articleUrl,
    isAccessibleForFree: false
  });
})();
