/* ─── DealFlow Africa · Shared layout injector ─── */
(function(){
  var TICKER_HTML='<div class="ticker"><div class="ticker-track">'
    +'<span>&#9650; MultiChoice / Canal+ &middot; $2.9B &middot; South Africa</span>'
    +'<span>&#9650; Maziv / Vodacom &middot; $752M &middot; South Africa &middot; Infrastructure</span>'
    +'<span>&#9650; Alameda Healthcare / DPI &middot; $190M &middot; Egypt</span>'
    +'<span>&#9650; SMSPortal / Link Mobility &middot; $115M &middot; South Africa</span>'
    +'<span>&#9650; Atlas Tower Kenya / STOA &middot; $27M &middot; Kenya</span>'
    +'<span>&#9650; Zanaga Iron Ore &middot; $21.5M &middot; Republic of Congo</span>'
    +'<span>&#9650; Safari Holdings / IFC &middot; $10M &middot; Kenya</span>'
    +'<span>&#9650; Cape Town Property / Rainbow Tourism &middot; $5.6M</span>'
    +'<span>&#9650; MultiChoice / Canal+ &middot; $2.9B &middot; South Africa</span>'
    +'<span>&#9650; Maziv / Vodacom &middot; $752M &middot; South Africa &middot; Infrastructure</span>'
    +'<span>&#9650; Alameda Healthcare / DPI &middot; $190M &middot; Egypt</span>'
    +'<span>&#9650; SMSPortal / Link Mobility &middot; $115M &middot; South Africa</span>'
    +'<span>&#9650; Atlas Tower Kenya / STOA &middot; $27M &middot; Kenya</span>'
    +'<span>&#9650; Zanaga Iron Ore &middot; $21.5M &middot; Republic of Congo</span>'
    +'<span>&#9650; Safari Holdings / IFC &middot; $10M &middot; Kenya</span>'
    +'<span>&#9650; Cape Town Property / Rainbow Tourism &middot; $5.6M</span>'
    +'</div></div>';

  var pages=[
    {href:'index.html',   label:'Home'},
    {href:'deals.html',   label:'Deals'},
    {href:'capital-flow.html', label:'Capital Flow'},
    {href:'insights.html',label:'Insights'},
    {href:'about.html',   label:'About'},
    {href:'team.html',    label:'Team'},
    {href:'contact.html', label:'Get Access', cta:true}
  ];

  var cur=location.pathname.split('/').pop()||'index.html';

  var navItems=pages.map(function(p){
    var active=cur===p.href?' aria-current="page"':'';
    var cls=p.cta?'btn-cta':'';
    return '<li><a href="'+p.href+'" class="'+cls+'"'+active+'>'+p.label+'</a></li>';
  }).join('');

  var NAV_HTML='<nav>'
    +'<a href="index.html" class="logo-wrap" style="text-decoration:none">'
    +'<div class="l1">DealFlow Africa</div>'
    +'<div class="l2">by Achievers Regal</div>'
    +'</a>'
    +'<button class="mobile-toggle" id="mobileToggle" aria-label="Open menu">&#9776;</button>'
    +'<ul class="nav-links" id="navLinks">'+navItems
    +'<li><button class="admin-btn" onclick="openLogin()">&#9881; Admin</button></li>'
    +'</ul>'
    +'</nav>';

  var FOOTER_HTML='<footer>'
    +'<div class="fb"><div class="f1">DealFlow Africa</div><div class="f2">by Achievers Regal &middot; Nairobi, Kenya</div></div>'
    +'<div class="flinks">'
    +'<a href="deals.html">Deals</a>'
    +'<a href="capital-flow.html">Capital Flow</a>'
    +'<a href="insights.html">Insights</a>'
    +'<a href="about.html">About</a>'
    +'<a href="team.html">Team</a>'
    +'<a href="contact.html">Contact</a>'
    +'</div>'
    +'<div class="fcopy">&copy; 2025 Achievers Regal. All rights reserved.</div>'
    +'</footer>';

  /* Inject */
  var tickerEl=document.getElementById('ticker-mount');
  if(tickerEl) tickerEl.outerHTML=TICKER_HTML;

  var navEl=document.getElementById('nav-mount');
  if(navEl) navEl.outerHTML=NAV_HTML;

  var footerEl=document.getElementById('footer-mount');
  if(footerEl) footerEl.outerHTML=FOOTER_HTML;

  /* Mobile toggle */
  document.addEventListener('click',function(e){
    var toggle=document.getElementById('mobileToggle');
    var links=document.getElementById('navLinks');
    if(!toggle||!links) return;
    if(e.target===toggle){ links.classList.toggle('open'); }
    else if(!links.contains(e.target)){ links.classList.remove('open'); }
  });

  /* Active nav highlight */
  document.querySelectorAll('.nav-links a').forEach(function(a){
    if(a.getAttribute('href')===cur) a.classList.add('active-page');
  });
})();

/* ─── Shared data ─── */
var DEALS=[
  {date:"2025-10-03",target:"Atlas Tower Kenya",acquirer:"STOA",country:"Kenya",sector:"Infrastructure",value:"$27M",valueNum:27,stake:"Strategic equity",summary:"Advancing Kenya's digital transformation through long-term capital and development expertise in tower infrastructure.",logo:""},
  {date:"2025-09-22",target:"MultiChoice Group",acquirer:"Groupe Canal+ S.A.S",country:"South Africa",sector:"Entertainment & Media",value:"$2,900M",valueNum:2900,stake:"Full control",summary:"Full control transition of MultiChoice, Sub-Saharan Africa's largest pay-TV operator, to Canal+.",logo:""},
  {date:"2025-09-22",target:"EXMGO",acquirer:"Duaya",country:"Egypt",sector:"Health-tech",value:"Undisclosed",valueNum:null,stake:"—",summary:"Strengthens Duaya's e-commerce offering and advances pharmacy digitisation in Egypt.",logo:""},
  {date:"2025-09-19",target:"Digitip",acquirer:"Street Wallet",country:"South Africa",sector:"Fin-tech",value:"Undisclosed",valueNum:null,stake:"—",summary:"Strengthens Street Wallet's presence in KwaZulu-Natal and Cape Town.",logo:""},
  {date:"2025-09-16",target:"BH Holding",acquirer:"Amethis",country:"Morocco",sector:"Agriculture",value:"Undisclosed",valueNum:null,stake:"Minority",summary:"Accelerate growth in packing and export of high-value fruits.",logo:""},
  {date:"2025-09-11",target:"Telecom Egypt",acquirer:"Helios Investment Partners",country:"Egypt",sector:"Infrastructure",value:"Undisclosed",valueNum:null,stake:"75-80%",summary:"Expands Helios' data infrastructure portfolio across Africa.",logo:""},
  {date:"2025-09-10",target:"Rance Timber",acquirer:"New Forests",country:"South Africa",sector:"Forestry",value:"Undisclosed",valueNum:null,stake:"—",summary:"Part of New Forests' African Forestry Impact Platform (AFIP) for sustainable forestry management.",logo:""},
  {date:"2025-09-10",target:"Altera Infrastructure FPSO",acquirer:"Carlyle",country:"Cote d'Ivoire",sector:"Energy / FPSO",value:"Undisclosed",valueNum:null,stake:"—",summary:"Portfolio benefits from long-term contracts and strong FPSO market fundamentals.",logo:""},
  {date:"2025-09-08",target:"SMSPortal",acquirer:"Link Mobility",country:"South Africa",sector:"Telecommunications",value:"$115M",valueNum:115,stake:"—",summary:"Market expansion and consolidation in South Africa's enterprise messaging sector.",logo:""},
  {date:"2025-09-08",target:"Cathedis",acquirer:"Ora Technologies",country:"Morocco",sector:"Logistics",value:"Undisclosed",valueNum:null,stake:"—",summary:"Build an integrated e-commerce and fintech platform.",logo:""},
  {date:"2025-09-08",target:"TaxTim",acquirer:"Twofold Capital / Octoco",country:"South Africa",sector:"Financial Services",value:"Undisclosed",valueNum:null,stake:"—",summary:"Strengthen product foundation and accelerate feature delivery.",logo:""},
  {date:"2025-09-04",target:"Honoris United Universities",acquirer:"Old Mutual Private Equity",country:"South Africa",sector:"Education",value:"Undisclosed",valueNum:null,stake:"Majority",summary:"Actis exit and strategic commitment to transformative sectors with significant socio-economic impact.",logo:""},
  {date:"2025-08-29",target:"Toy Zone",acquirer:"Toys R Us / Babies R Us",country:"South Africa",sector:"Retail",value:"Undisclosed",valueNum:null,stake:"—",summary:"Enhance market reach through brand acquisition.",logo:""},
  {date:"2025-08-25",target:"Cape Town Commercial Property",acquirer:"Rainbow Tourism Group",country:"South Africa",sector:"Hotel & Tourism",value:"$5.6M",valueNum:5.6,stake:"—",summary:"Sale and purchase of a seven-storey commercial property in Cape Town via Elleke Hospitality.",logo:""},
  {date:"2025-08-25",target:"Kensta Group",acquirer:"Norfund",country:"Uganda",sector:"Manufacturing",value:"Undisclosed",valueNum:null,stake:"Minority",summary:"Expansion into sanitary pad production facility.",logo:""},
  {date:"2025-08-21",target:"Cobra Group",acquirer:"Alterra Capital",country:"South Africa",sector:"Manufacturing",value:"Undisclosed",valueNum:null,stake:"—",summary:"Africa expansion strategy.",logo:""},
  {date:"2025-08-15",target:"Maziv",acquirer:"Vodacom",country:"South Africa",sector:"Infrastructure",value:"$752M",valueNum:752,stake:"30%",summary:"Expand fiber connectivity in underserved areas and townships across South Africa.",logo:""},
  {date:"2025-08-15",target:"Kemet",acquirer:"Ezdehar Management",country:"Egypt",sector:"Food & Beverages",value:"Undisclosed",valueNum:null,stake:"—",summary:"Broaden product range into healthy savoury snacks and expand international distribution.",logo:""},
  {date:"2025-08-14",target:"Safari Holdings",acquirer:"IFC",country:"Kenya",sector:"Hotel & Tourism",value:"$10M",valueNum:10,stake:"—",summary:"IFC investment to support tourism infrastructure development in Kenya.",logo:""},
  {date:"2025-08-12",target:"Societe Generale Mauritania",acquirer:"Enko Capital-Oronte",country:"Mauritania",sector:"Financial Services",value:"Undisclosed",valueNum:null,stake:"100%",summary:"Support growth with modern banking solutions tailored to the local economy.",logo:""},
  {date:"2025-07-25",target:"Goodlife Pharmacy",acquirer:"CFAO Healthcare",country:"Kenya",sector:"Health-tech",value:"Undisclosed",valueNum:null,stake:"Minority exit",summary:"LeapFrog Investments minority stake exit as CFAO Healthcare expands in East Africa.",logo:""},
  {date:"2025-07-09",target:"Medlane Holdings",acquirer:"Africa Lighthouse Capital",country:"Botswana",sector:"Healthcare",value:"Undisclosed",valueNum:null,stake:"76%",summary:"Increase localisation of specialist care and reduce medical tourism.",logo:""},
  {date:"2025-07-09",target:"Alameda Healthcare",acquirer:"DPI",country:"Egypt",sector:"Healthcare",value:"$190M",valueNum:190,stake:"Minority",summary:"Delivering world-class healthcare across Egypt and the GCC.",logo:""},
  {date:"2025-05-28",target:"MDP",acquirer:"Lorax Capital Partners",country:"Egypt",sector:"Fin-tech",value:"Undisclosed",valueNum:null,stake:"—",summary:"Accelerate expansion and deepen processing capabilities across Africa and the Middle East.",logo:""},
  {date:"2025-03-10",target:"Zanaga Iron Ore Company",acquirer:"Group of Investors",country:"Republic of Congo",sector:"Mining",value:"$21.5M",valueNum:21.5,stake:"—",summary:"Advance flagship iron-ore project in Congo-Brazzaville.",logo:""},
  {date:"2025-03-07",target:"Herotel",acquirer:"Vumatel",country:"South Africa",sector:"Infrastructure",value:"Undisclosed",valueNum:null,stake:"45%",summary:"Market expansion for rural broadband infrastructure in South Africa.",logo:""}
];

var INSIGHTS=[
  {tag:"Market Report · Oct 2025",type:"",title:"South Africa Leads Q3 M&A Activity with 11 Tracked Deals",blurb:"South Africa accounts for over 42% of tracked transactions this quarter, led by the landmark $2.9B Canal+ acquisition of MultiChoice — the continent's biggest disclosed deal of the year.",url:"contact.html"},
  {tag:"Sector Focus · Sep 2025",type:"",title:"Infrastructure & Fintech Attract the Most Capital Across Africa",blurb:"From fiber connectivity to tower assets, infrastructure deals alongside fintech acquisitions are driving the majority of disclosed deal value in Africa's private markets this quarter.",url:"contact.html"},
  {tag:"Macro Analysis · 2025",type:"macro",title:"59% of African PE GPs Expect Rising Investment Activity in 2025",blurb:"Over half of General Partners expect increased deal flow in 2025, with South Africa and Kenya identified as the most promising markets by more than 65% of respondents in AVCA's annual sentiment survey.",url:"contact.html"},
  {tag:"Macro Analysis · 2025",type:"macro",title:"Currency Volatility Remains the Top Risk for African PE Investors",blurb:"Three quarters of LPs cite currency volatility as a major concern for African investments, followed by geopolitical tensions. Funds are increasingly structuring deals through offshore vehicles to manage FX exposure.",url:"contact.html"},
  {tag:"Macro Analysis · 2025",type:"macro",title:"AI is Reshaping How M&A Deals Are Sourced and Closed in Africa",blurb:"AI is transforming the M&A lifecycle — from target identification to automated due diligence — presenting both efficiency gains and new risks for dealmakers operating across African markets.",url:"contact.html"},
  {tag:"Macro Analysis · 2025",type:"macro",title:"Interest Rate Easing Unlocks New Deal Activity Across Emerging Markets",blurb:"As central banks gradually ease rates, the cost of capital is falling — a key unlock for African buyout activity and infrastructure financing where debt structures have been constrained since 2022.",url:"contact.html"},
  {tag:"Macro Analysis · 2025",type:"macro",title:"DFIs and Co-Investment Structures Drive African Capital Deployment",blurb:"Co-investment is the top priority for the majority of LPs active in Africa, as IFC, Norfund, and other DFIs continue to anchor deals through blended finance structures that reduce risk for private investors.",url:"contact.html"},
  {tag:"Valuation Brief · 2025",type:"",title:"Undisclosed Deals Signal an African Pricing Gap",blurb:"The majority of tracked transactions list values as undisclosed, reflecting both confidentiality norms and a growing need for independent valuation benchmarks in African M&A markets.",url:"contact.html"}
];

var ADMIN_PASS="DealBase2025!";

/* ─── Login / Admin shared logic ─── */
function openLogin(){
  document.getElementById('loginOverlay').classList.add('open');
  document.getElementById('loginInput').value='';
  document.getElementById('loginErr').style.display='none';
}
function doLogin(){
  if(document.getElementById('loginInput').value===ADMIN_PASS){
    document.getElementById('loginOverlay').classList.remove('open');
    document.getElementById('adminOverlay').classList.add('open');
    if(typeof renderManageLists==='function') renderManageLists();
  } else {
    document.getElementById('loginErr').style.display='block';
    document.getElementById('loginInput').value='';
  }
}
