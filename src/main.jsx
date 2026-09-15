import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Calculator, Check, ChevronDown,
  ChevronRight, FileCheck2, Home, IndianRupee,
  Leaf, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, Sun, Users,
  Wrench, X, Zap
} from 'lucide-react';
import './styles.css';

const BUSINESS = {
  name: 'LumenHive Solar',
  gstin: '09BKJPG6828C1Z4',
  email: 'lumenhivesolar@gmail.com',
  phone: '+91 70072 71854',
  whatsapp: '917007271854',
  address: 'Manu Zai, Gari Fatak, Near Lapwing Hotel, Shahjahanpur, Uttar Pradesh 242001',
  instagram: 'https://www.instagram.com/lumenhivesolar/',
  // Kept as an easy-to-edit business setting. Facebook search did not expose a verified public URL.
  facebook: 'https://www.facebook.com/lumenhivesolar/',
};

const PACKAGES = [
  { brand: 'Tata Solar', price: 185000, tone: 'Premium', featured: true },
  { brand: 'Adani Solar', price: 180000, tone: 'Trusted' },
  { brand: 'Waaree Solar', price: 175000, tone: 'Popular' },
  { brand: 'UTL Solar', price: 165000, tone: 'Value' },
  { brand: 'Loom Solar', price: 170000, tone: 'Authorised Dealer' },
  { brand: 'Luminous', price: null, tone: 'Quote on request' },
];

const INCLUDED = [
  '5–6 N-Type TOPCon solar panels, total approximately 3 kW',
  '3 kW, 1-phase MPPT on-grid inverter',
  'GI solar module mounting structure — 1 set',
  'DC solar cable and AC cable to DB — 4/6 sq.mm as required',
  'ACDB with AC MCB / protection',
  'DCDB with DC MCB / protection enclosure',
  '2–3 earthing points with suitable earthing cable/conductor',
  'Lightning arrester where required',
  'Genuine MC4 connectors — 2–4 pairs',
  'Cable lugs and glands — suitable sizes',
  'PVC / conduit / cable tray as required for safe cabling',
  'SS / GI fasteners and mid + end module clamps',
  'Solar generation / net meter as per DISCOM requirements',
  'AC isolator / MCB as per inverter requirement',
  'Complete installation and commissioning',
];

const SUBSIDY = { 1: 45000, 2: 90000, 3: 108000, 5: 108000 };

const copy = {
  en: {
    nav: ['Solutions', 'Calculator', 'Subsidy', 'Packages', 'About', 'Contact'],
    heroEyebrow: 'ROOFTOP SOLAR • UTTAR PRADESH',
    heroTitle: 'Turn your rooftop into a power plant.',
    heroText: 'Complete solar solutions for homes, shops, offices and businesses — from consultation and installation to service and after-sales support.',
    calculate: 'Calculate my savings',
    whatsapp: 'WhatsApp an expert',
    call: 'Call LumenHive',
    trust: 'Quality systems • Professional installation • Local support',
    serviceBadge: 'SERVING ALL OF UTTAR PRADESH',
    introLabel: 'WHAT WE DO',
    introTitle: 'Solar made simple.\nSavings made tangible.',
    introText: 'LumenHive Solar helps you move from rising electricity bills to dependable solar power with practical system recommendations, complete installation and ongoing service support.',
    serviceTitles: ['Residential Solar', 'Commercial Solar', 'On-Grid Solar', 'Hybrid & Off-Grid', 'Solar Service & Maintenance', 'Subsidy Assistance'],
    serviceTexts: [
      'Rooftop solar systems for homes, designed around your electricity usage and roof.',
      'Solar solutions for shops, offices and businesses looking to reduce operating costs.',
      'Grid-connected systems for everyday electricity consumption and net-metering workflows.',
      'Backup-oriented solar solutions for sites that need more energy independence.',
      'Service, inspection and maintenance support for solar systems — including systems installed by other providers, subject to site inspection.',
      'Guidance and documentation support for applicable PM Surya Ghar and government processes.'
    ],
    subsidyLabel: 'PM SURYA GHAR + UP SUPPORT',
    subsidyTitle: 'Up to ₹1,08,000 in combined subsidy.',
    subsidyText: 'Eligible residential customers in Uttar Pradesh may benefit from central and state support under the applicable scheme and DISCOM process.',
    subsidyNote: 'Subject to eligibility, current government rules and DISCOM requirements. Central support is capped at ₹78,000; the ₹1.08 lakh figure represents the published combined UP + central support for eligible systems.',
    calculatorLabel: 'SOLAR CALCULATOR',
    calculatorTitle: 'See what solar could look like for you.',
    bill: 'Monthly electricity bill',
    city: 'Your city',
    property: 'Property type',
    propertyOptions: ['Home', 'Shop', 'Office', 'Factory'],
    system: 'Preferred system',
    systemOptions: ['On-Grid', 'Hybrid', 'Off-Grid', 'Not sure'],
    recommended: 'Indicative recommendation',
    subsidyApplicable: 'Indicative subsidy',
    packageExample: '3 kW package example',
    estimatedSavings: 'Indicative monthly bill savings',
    calculatorHint: 'This is an indicative estimate, not a quotation. Final system sizing, savings and price depend on site survey, usage, roof conditions and applicable scheme rules.',
    getEstimate: 'Get this estimate on WhatsApp',
    packagesLabel: 'COMPLETE 3 KW INSTALLED PACKAGES',
    packagesTitle: 'Choose your solar brand.',
    packagesText: 'Every listed 3 kW package is positioned as a complete installed solution. Final site-specific requirements are confirmed before quotation.',
    perPackage: 'Complete 3 kW package',
    quoteRequest: 'Request quotation',
    includedLabel: 'WHAT YOUR 3 KW PACKAGE INCLUDES',
    includedTitle: 'The system, not just the panels.',
    includedText: 'Your package is designed as a complete installation rather than a panel-only sale. Final quantities can vary where the site or DISCOM requirement demands it.',
    processLabel: 'THE LUMENHIVE PROCESS',
    processTitle: 'From sunlight to savings.',
    steps: [
      ['01', 'Free consultation', 'Share your city, property type and electricity bill.'],
      ['02', 'Site survey', 'We assess roof space, shade, structure and electrical requirements.'],
      ['03', 'System design', 'Get a practical recommendation and package option for your site.'],
      ['04', 'Installation & commissioning', 'Professional installation with documentation and commissioning support.'],
      ['05', 'Service & support', 'LumenHive stays available for maintenance and service after installation.']
    ],
    serviceExisting: 'Already have solar?',
    serviceExistingText: 'We also provide service and maintenance support for solar systems installed by other companies, subject to inspection and parts availability.',
    aboutLabel: 'ABOUT LUMENHIVE',
    aboutTitle: 'Local solar expertise. Built for Uttar Pradesh.',
    aboutText: 'Based in Shahjahanpur, LumenHive Solar serves customers across Uttar Pradesh with rooftop solar installation, subsidy assistance and ongoing service support.',
    contactLabel: 'GET STARTED',
    contactTitle: 'Ready to make your rooftop work for you?',
    contactText: 'Tell us your city, electricity bill and property type. We’ll help you understand the right solar option and the next step.',
    name: 'Your name', phone: 'WhatsApp number', message: 'Anything else we should know?', send: 'Continue on WhatsApp',
    footerTag: 'Solar energy company • Uttar Pradesh', gst: 'GSTIN', address: 'Address', quick: 'Quick links', social: 'Connect with us',
    disclaimer: 'Pricing, savings, subsidy eligibility and system sizing are subject to site conditions, current government/DISCOM rules and final quotation.',
  },
  hi: {
    nav: ['समाधान', 'कैलकुलेटर', 'सब्सिडी', 'पैकेज', 'हमारे बारे में', 'संपर्क'],
    heroEyebrow: 'रूफटॉप सोलर • उत्तर प्रदेश',
    heroTitle: 'अपनी छत को पावर प्लांट बनाइए।',
    heroText: 'घर, दुकान, ऑफिस और व्यवसायों के लिए सम्पूर्ण सोलर समाधान — सलाह और इंस्टॉलेशन से लेकर सर्विस और आफ्टर-सेल्स सपोर्ट तक।',
    calculate: 'अपनी बचत कैलकुलेट करें', whatsapp: 'WhatsApp पर बात करें', call: 'LumenHive को कॉल करें',
    trust: 'गुणवत्तापूर्ण सिस्टम • प्रोफेशनल इंस्टॉलेशन • स्थानीय सेवा', serviceBadge: 'पूरे उत्तर प्रदेश में सेवा',
    introLabel: 'हम क्या करते हैं', introTitle: 'सोलर को आसान बनाइए।\nबचत को समझिए।',
    introText: 'LumenHive Solar बढ़ते बिजली बिल से बेहतर सोलर समाधान तक आपका साथ देता है — सही सिस्टम की सलाह, पूरी इंस्टॉलेशन और लगातार सर्विस सपोर्ट के साथ।',
    serviceTitles: ['घरों के लिए सोलर', 'कमर्शियल सोलर', 'ऑन-ग्रिड सोलर', 'हाइब्रिड और ऑफ-ग्रिड', 'सोलर सर्विस और मेंटेनेंस', 'सब्सिडी सहायता'],
    serviceTexts: [
      'घरों के लिए आपकी बिजली खपत और छत के अनुसार रूफटॉप सोलर सिस्टम।',
      'दुकान, ऑफिस और व्यवसायों के लिए बिजली खर्च कम करने वाले सोलर समाधान।',
      'दैनिक बिजली उपयोग और नेट-मीटरिंग प्रक्रिया के लिए ग्रिड-कनेक्टेड सिस्टम।',
      'जहाँ अधिक ऊर्जा स्वतंत्रता और बैकअप की जरूरत हो वहाँ उपयुक्त सोलर समाधान।',
      'सोलर सिस्टम की सर्विस, निरीक्षण और मेंटेनेंस — अन्य कंपनियों से लगाए गए सिस्टम की सेवा भी, साइट निरीक्षण के अधीन।',
      'लागू PM Surya Ghar और सरकारी प्रक्रियाओं के लिए मार्गदर्शन एवं दस्तावेज़ सहायता।'
    ],
    subsidyLabel: 'PM SURYA GHAR + UP सहायता', subsidyTitle: '₹1,08,000 तक की संयुक्त सब्सिडी।',
    subsidyText: 'पात्र आवासीय ग्राहक लागू योजना और DISCOM प्रक्रिया के अनुसार केंद्र एवं राज्य सहायता का लाभ उठा सकते हैं।',
    subsidyNote: 'लाभ पात्रता, वर्तमान सरकारी नियमों और DISCOM आवश्यकताओं के अधीन है। केंद्र की सहायता ₹78,000 तक सीमित है; ₹1.08 लाख का आंकड़ा पात्र सिस्टम के लिए प्रकाशित संयुक्त UP + केंद्र सहायता को दर्शाता है।',
    calculatorLabel: 'सोलर कैलकुलेटर', calculatorTitle: 'देखिए आपके लिए सोलर कैसा हो सकता है।', bill: 'मासिक बिजली बिल', city: 'आपका शहर', property: 'प्रॉपर्टी का प्रकार', propertyOptions: ['घर', 'दुकान', 'ऑफिस', 'फैक्ट्री'], system: 'पसंदीदा सिस्टम', systemOptions: ['ऑन-ग्रिड', 'हाइब्रिड', 'ऑफ-ग्रिड', 'पता नहीं'], recommended: 'अनुमानित सिस्टम', subsidyApplicable: 'अनुमानित सब्सिडी', packageExample: '3 kW पैकेज उदाहरण', estimatedSavings: 'अनुमानित मासिक बचत', calculatorHint: 'यह केवल अनुमान है, कोटेशन नहीं। अंतिम सिस्टम क्षमता, बचत और कीमत साइट सर्वे, खपत, छत और लागू सरकारी नियमों पर निर्भर करेगी।', getEstimate: 'यह अनुमान WhatsApp पर भेजें',
    packagesLabel: 'सम्पूर्ण 3 KW इंस्टॉल्ड पैकेज', packagesTitle: 'अपना सोलर ब्रांड चुनें।', packagesText: 'सभी बताए गए 3 kW पैकेज complete installed solution के रूप में हैं। अंतिम साइट की जरूरतें कोटेशन से पहले तय की जाएंगी।', perPackage: 'सम्पूर्ण 3 kW पैकेज', quoteRequest: 'कोटेशन लें',
    includedLabel: 'आपके 3 KW पैकेज में क्या शामिल है', includedTitle: 'सिर्फ पैनल नहीं — पूरा सिस्टम।', includedText: 'पैकेज को केवल पैनल बिक्री के बजाय complete installation के रूप में तैयार किया गया है। साइट या DISCOM आवश्यकता के अनुसार अंतिम मात्रा बदल सकती है।',
    processLabel: 'LUMENHIVE प्रक्रिया', processTitle: 'धूप से बचत तक।', steps: [['01','फ्री कंसल्टेशन','अपना शहर, प्रॉपर्टी और बिजली बिल बताइए।'],['02','साइट सर्वे','छत की जगह, शेड, स्ट्रक्चर और इलेक्ट्रिकल जरूरतों की जांच।'],['03','सिस्टम डिजाइन','आपकी साइट के लिए सही सिफारिश और पैकेज विकल्प।'],['04','इंस्टॉलेशन और कमीशनिंग','प्रोफेशनल इंस्टॉलेशन, दस्तावेज़ और कमीशनिंग सपोर्ट।'],['05','सर्विस और सपोर्ट','इंस्टॉलेशन के बाद मेंटेनेंस और सर्विस के लिए LumenHive उपलब्ध।']],
    serviceExisting: 'पहले से सोलर लगा है?', serviceExistingText: 'हम अन्य कंपनियों द्वारा लगाए गए सोलर सिस्टम की सर्विस और मेंटेनेंस भी करते हैं, साइट निरीक्षण और पार्ट्स की उपलब्धता के अधीन।',
    aboutLabel: 'LUMENHIVE के बारे में', aboutTitle: 'लोकल सोलर विशेषज्ञता। पूरे उत्तर प्रदेश के लिए।', aboutText: 'शाहजहांपुर से संचालित LumenHive Solar पूरे उत्तर प्रदेश में रूफटॉप सोलर इंस्टॉलेशन, सब्सिडी सहायता और सर्विस सपोर्ट प्रदान करता है।',
    contactLabel: 'शुरू करें', contactTitle: 'क्या आप अपनी छत को कमाई/बचत का साधन बनाना चाहते हैं?', contactText: 'अपना शहर, बिजली बिल और प्रॉपर्टी का प्रकार बताइए। हम सही सोलर विकल्प और अगले कदम को समझने में मदद करेंगे।', name: 'आपका नाम', phone: 'WhatsApp नंबर', message: 'कुछ और जानकारी?', send: 'WhatsApp पर जारी रखें', footerTag: 'सोलर एनर्जी कंपनी • उत्तर प्रदेश', gst: 'GSTIN', address: 'पता', quick: 'त्वरित लिंक', social: 'हमसे जुड़ें', disclaimer: 'कीमत, बचत, सब्सिडी पात्रता और सिस्टम क्षमता साइट की स्थिति, वर्तमान सरकारी/DISCOM नियमों और अंतिम कोटेशन के अधीन हैं।'
  }
};

const formatINR = (n) => n == null ? 'Quote on request' : `₹${n.toLocaleString('en-IN')}`;

function whatsapp(text) {
  window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

function SolutionCard({ icon, title, text }) {
  return <article className="solutionCard"><div className="iconBox">{icon}</div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="cornerArrow" size={18}/></article>;
}

function App() {
  const [lang, setLang] = useState('en');
  const [menu, setMenu] = useState(false);
  const [bill, setBill] = useState(5000);
  const [city, setCity] = useState('Shahjahanpur');
  const [property, setProperty] = useState(0);
  const [system, setSystem] = useState(0);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const t = copy[lang];

  const recommended = bill <= 2500 ? 1 : bill <= 4500 ? 2 : bill <= 9000 ? 3 : bill <= 15000 ? 5 : 7;
  const subsidy = SUBSIDY[Math.min(recommended, 5)] ?? 108000;
  const estimatedSavings = Math.max(700, Math.round(bill * 0.72 / 100) * 100);
  const best3k = PACKAGES[0].price;

  const calculatorMessage = useMemo(() => {
    const propertyName = t.propertyOptions[property];
    const systemName = t.systemOptions[system];
    return `Hello LumenHive Solar Team,\n\nI would like to discuss a rooftop solar installation.\n\nName: ${form.name || 'Not provided'}\nCity: ${city || 'Not provided'}\nProperty: ${propertyName}\nMonthly electricity bill: ₹${bill.toLocaleString('en-IN')}\nPreferred system: ${systemName}\nIndicative recommended capacity: ${recommended} kW\nIndicative subsidy: ₹${subsidy.toLocaleString('en-IN')}\n${form.message ? `Additional details: ${form.message}\n` : ''}\nPlease guide me regarding the site survey, final quotation and next steps.\n\nThank you.`;
  }, [bill, city, property, system, form, recommended, subsidy, t]);

  const genericMessage = (brand = '') => `Hello LumenHive Solar Team,\n\nI am interested in ${brand ? `${brand} ` : ''}solar installation.\n\nLocation: ${city || 'Not provided'}\nProperty: ${t.propertyOptions[property]}\nMonthly electricity bill: ₹${bill.toLocaleString('en-IN')}\n\nPlease share the detailed quotation, installation scope, subsidy guidance and site survey process.\n\nThank you.`;

  const go = (id) => { document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };

  return <div className="site">
    <header className="navBar">
      <a href="#top" className="brand" aria-label="LumenHive Solar home"><img src="/assets/logo.jpeg" alt="LumenHive Solar logo"/><span>LumenHive <b>Solar</b></span></a>
      <nav className="desktopNav">{t.nav.map((item, i) => <a key={item} href={['#solutions','#calculator','#subsidy','#packages','#about','#contact'][i]}>{item}</a>)}</nav>
      <div className="navActions">
        <button className="langBtn" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')} aria-label="Switch language">{lang === 'en' ? 'हिंदी' : 'EN'}</button>
        <button className="navWhats" onClick={() => whatsapp(genericMessage())}><MessageCircle size={16}/> WhatsApp</button>
        <button className="menuBtn" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button>
      </div>
      {menu && <div className="mobileNav">{t.nav.map((item, i) => <a key={item} href={['#solutions','#calculator','#subsidy','#packages','#about','#contact'][i]} onClick={() => setMenu(false)}>{item}<ChevronRight size={16}/></a>)}<button onClick={() => whatsapp(genericMessage())}><MessageCircle size={17}/> {t.whatsapp}</button></div>}
    </header>

    <main id="top">
      <section className="hero">
        <div className="heroPhoto"/>
        <div className="heroOverlay"/>
        <div className="heroContent">
          <div className="eyebrow"><Sun size={15}/> {t.heroEyebrow}</div>
          <div className="heroBadge"><BadgeCheck size={14}/> {t.serviceBadge}</div>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <div className="heroActions"><button className="primaryBtn" onClick={() => go('#calculator')}>{t.calculate}<ArrowRight size={18}/></button><button className="lightBtn" onClick={() => whatsapp(genericMessage())}>{t.whatsapp}<MessageCircle size={18}/></button></div>
          <div className="trustRow"><ShieldCheck size={17}/><span>{t.trust}</span></div>
        </div>
        <div className="heroStats"><div><b>3 kW</b><span>Complete packages</span></div><div><b>UP</b><span>Service coverage</span></div><div><b>360°</b><span>Installation + support</span></div></div>
      </section>

      <div className="ticker"><div>ROOFTOP SOLAR <i>✦</i> ON-GRID <i>✦</i> HYBRID <i>✦</i> OFF-GRID <i>✦</i> SERVICE & MAINTENANCE <i>✦</i> PM SURYA GHAR ASSISTANCE <i>✦</i> UTTAR PRADESH <i>✦</i></div></div>

      <section className="section intro" id="solutions">
        <div className="sectionKicker">{t.introLabel}</div>
        <div className="splitHeading"><h2>{t.introTitle.split('\n').map((x,i)=><React.Fragment key={x}>{x}{i===0 && <br/>}</React.Fragment>)}</h2><p>{t.introText}</p></div>
        <div className="solutionGrid">
          {t.serviceTitles.map((title,i)=><SolutionCard key={title} title={title} text={t.serviceTexts[i]} icon={[<Home/>,<Users/>,<Zap/>,<Sparkles/>,<Wrench/>,<FileCheck2/>][i]}/>) }
        </div>
      </section>

      <section className="subsidySection" id="subsidy">
        <div className="subsidyVisual"><div className="sunCircle"><Sun size={64}/></div><span>PM SURYA GHAR</span><strong>₹1.08L</strong><small>combined UP + central support*</small></div>
        <div className="subsidyContent"><div className="sectionKicker lightKicker">{t.subsidyLabel}</div><h2>{t.subsidyTitle}</h2><p>{t.subsidyText}</p><div className="subsidyTable"><div><span>1 kW</span><b>₹45,000</b></div><div><span>2 kW</span><b>₹90,000</b></div><div className="hot"><span>3 kW+</span><b>₹1,08,000</b></div></div><small className="finePrint">* {t.subsidyNote}</small><button className="inlineBtn" onClick={() => go('#calculator')}>{t.calculate}<ArrowRight size={17}/></button></div>
      </section>

      <section className="section calculatorSection" id="calculator">
        <div className="calcHeader"><div><div className="sectionKicker">{t.calculatorLabel}</div><h2>{t.calculatorTitle}</h2></div><Calculator size={40}/></div>
        <div className="calculatorBox">
          <div className="calcControls">
            <label>{t.bill}<output>₹{bill.toLocaleString('en-IN')}</output></label>
            <input type="range" min="1000" max="30000" step="500" value={bill} onChange={e=>setBill(Number(e.target.value))}/>
            <div className="rangeLabels"><span>₹1,000</span><span>₹30,000+</span></div>
            <label>{t.city}</label><input className="textInput" value={city} onChange={e=>setCity(e.target.value)} placeholder={t.city}/>
            <div className="selectGrid"><div><label>{t.property}</label><select value={property} onChange={e=>setProperty(Number(e.target.value))}>{t.propertyOptions.map((x,i)=><option value={i} key={x}>{x}</option>)}</select></div><div><label>{t.system}</label><select value={system} onChange={e=>setSystem(Number(e.target.value))}>{t.systemOptions.map((x,i)=><option value={i} key={x}>{x}</option>)}</select></div></div>
            <p className="calcHint">{t.calculatorHint}</p>
          </div>
          <div className="calcResult">
            <div className="resultHero"><span>{t.recommended}</span><strong>{recommended} <small>kW</small></strong></div>
            <div className="resultRow"><span>{t.subsidyApplicable}</span><b>₹{subsidy.toLocaleString('en-IN')}</b></div>
            <div className="resultRow"><span>{t.packageExample}</span><b>₹{best3k.toLocaleString('en-IN')}</b></div>
            <div className="resultRow"><span>{t.estimatedSavings}</span><b>~₹{estimatedSavings.toLocaleString('en-IN')}</b></div>
            <button className="resultBtn" onClick={() => whatsapp(calculatorMessage)}><MessageCircle size={18}/> {t.getEstimate}</button>
          </div>
        </div>
      </section>

      <section className="section packagesSection" id="packages">
        <div className="sectionKicker">{t.packagesLabel}</div>
        <div className="splitHeading packageHeading"><h2>{t.packagesTitle}</h2><p>{t.packagesText}</p></div>
        <div className="packageGrid">
          {PACKAGES.map((pkg,i)=><article className={`packageCard ${pkg.featured ? 'featured' : ''}`} key={pkg.brand}>
            {pkg.featured && <span className="featuredTag">RECOMMENDED</span>}
            <span className="pkgIndex">0{i+1}</span><div className="brandWord">{pkg.brand}</div><span className="pkgTone">{pkg.tone}</span>
            <div className="packagePrice">{formatINR(pkg.price)}{pkg.price && <small>complete installed</small>}</div>
            <div className="packageSpec"><b>3 kW</b><span>On-grid rooftop package</span></div>
            <ul><li><Check size={14}/> N-Type TOPCon panels</li><li><Check size={14}/> MPPT inverter</li><li><Check size={14}/> Structure + protection</li><li><Check size={14}/> Installation & commissioning</li></ul>
            <button onClick={() => whatsapp(genericMessage(pkg.brand))}>{t.quoteRequest}<ArrowUpRight size={16}/></button>
          </article>)}
        </div>
        <p className="packageDisclaimer">Luminous pricing varies by configuration, so LumenHive provides a quotation after understanding the site and required setup.</p>
      </section>

      <section className="section includedSection">
        <div className="sectionKicker">{t.includedLabel}</div>
        <div className="splitHeading"><h2>{t.includedTitle}</h2><p>{t.includedText}</p></div>
        <div className="includedGrid">{INCLUDED.map((item,i)=><div className="includedItem" key={item}><span>{String(i+1).padStart(2,'0')}</span><p>{item}</p></div>)}</div>
      </section>

      <section className="serviceBanner"><div><div className="sectionKicker lightKicker">{t.serviceExisting}</div><h2>{t.serviceExistingText}</h2></div><button className="lightBtn" onClick={() => whatsapp(`Hello LumenHive Solar Team,\n\nI need service/maintenance for an existing solar system.\nLocation: ${city}\n\nPlease let me know the inspection and service process.`)}>{t.whatsapp}<MessageCircle size={18}/></button></section>

      <section className="processSection">
        <div className="processIntro"><div className="sectionKicker lightKicker">{t.processLabel}</div><h2>{t.processTitle}</h2><p>{t.aboutText}</p><button className="outlineBtn" onClick={() => whatsapp(genericMessage())}>{t.whatsapp}<ArrowUpRight size={17}/></button></div>
        <div className="steps">{t.steps.map(([num,title,text])=><div className="step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><ChevronRight size={18}/></div>)}</div>
      </section>

      <section className="section aboutSection" id="about">
        <div className="aboutImage"><img src="/assets/lumenhive-brochure.jpg" alt="LumenHive Solar brochure"/><div className="imageCaption"><Leaf size={17}/><span>Powering a brighter future across Uttar Pradesh.</span></div></div>
        <div className="aboutCopy"><div className="sectionKicker">{t.aboutLabel}</div><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="aboutFacts"><div><ShieldCheck/><b>Quality</b><span>Complete installation focus</span></div><div><Wrench/><b>Service</b><span>Support beyond installation</span></div><div><FileCheck2/><b>Guidance</b><span>Subsidy & documentation help</span></div></div></div>
      </section>

      <section className="section contactSection" id="contact">
        <div className="contactIntro"><div className="sectionKicker">{t.contactLabel}</div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contactDirect"><a href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}><Phone size={18}/>{BUSINESS.phone}</a><a href={`mailto:${BUSINESS.email}`}><FileCheck2 size={18}/>{BUSINESS.email}</a></div></div>
        <form className="leadForm" onSubmit={e=>{e.preventDefault(); whatsapp(calculatorMessage);}}><input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder={t.name}/><input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder={t.phone} inputMode="tel"/><textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder={t.message}/><button className="primaryBtn" type="submit">{t.send}<MessageCircle size={18}/></button></form>
      </section>
    </main>

    <footer>
      <div className="footerTop"><div className="footerBrand"><a href="#top" className="footerLogo"><img src="/assets/lumenhive-logo.jpg" alt="LumenHive Solar"/><span>LumenHive <b>Solar</b></span></a><p>{t.footerTag}</p><p className="footerGst">{t.gst}: {BUSINESS.gstin}</p></div><div><span>{t.address}</span><p>{BUSINESS.address}</p><a href="https://www.google.com/maps/search/?api=1&query=Manu+Zai+Gari+Fatak+Near+Lapwing+Hotel+Shahjahanpur+Uttar+Pradesh+242001" target="_blank" rel="noreferrer">Open location <ArrowUpRight size={14}/></a></div><div><span>{t.social}</span><a href={BUSINESS.instagram} target="_blank" rel="noreferrer"><span className="socialTextIcon">◎</span> Instagram</a><a href={BUSINESS.facebook} target="_blank" rel="noreferrer"><span className="socialTextIcon">f</span> Facebook</a><a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={14}/> WhatsApp</a><a href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}><Phone size={14}/> {BUSINESS.phone}</a></div></div>
      <div className="footerBottom"><span>© {new Date().getFullYear()} LumenHive Solar. All rights reserved.</span><span>{t.disclaimer}</span></div>
    </footer>

    <button className="floatingWhats" onClick={() => whatsapp(genericMessage())}><MessageCircle size={22}/><span>WhatsApp</span></button>
  </div>;
}

createRoot(document.getElementById('root')).render(<App/>);
