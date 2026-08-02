const translations = {
  es: {
    doc_title: "Moonlorian — Inteligencia artificial aplicada",
    nav_servicios: "Servicios",
    nav_contacto: "Contacto",
    hero_title: 'La tecnología también tiene <span>fases</span>.<br>Nosotros gobernamos cada una.',
    hero_subtitle: "Moonlorian aplica inteligencia artificial al desarrollo de software, a entornos enterprise, al blockchain y a la ciberseguridad, convirtiendo la tecnología en capacidad operativa y ventaja competitiva.",
    hero_cta: "Hablemos →",
    serv_eyebrow: "Qué hacemos",
    serv_title: "Cuatro fases, un mismo ciclo",
    phase1_label: "Fase 01 — Luna nueva",
    phase1_title: "IA aplicada al desarrollo",
    phase1_desc: "Todo empieza en la oscuridad: inteligencia artificial integrada en el ciclo de desarrollo de software, desde el diseño hasta el release.",
    phase2_label: "Fase 02 — Luna creciente",
    phase2_title: "IA en entornos enterprise",
    phase2_desc: "Procesos y plataformas enterprise potenciados con IA para escalar operaciones con criterio y eficiencia.",
    phase3_label: "Fase 03 — Luna llena",
    phase3_title: "IA aplicada a blockchain",
    phase3_desc: "Máxima visibilidad: soluciones blockchain e identidad digital potenciadas con IA, bajo criterios de compliance MiCA.",
    phase4_label: "Fase 04 — Luna menguante",
    phase4_title: "IA aplicada a ciberseguridad",
    phase4_desc: "El conocimiento se transmite: IA y ciberseguridad bajo ENS, NIS2 y DORA, en formación técnica aplicada.",
    contact_eyebrow: "Hablemos",
    contact_title: "¿Listo para gobernar tu próxima fase?",
    contact_p: "Cuéntanos en qué punto del ciclo está tu empresa y qué necesita para avanzar a la siguiente fase.",
    contact_email_btn: "Escríbenos por email",
    contact_note: "Al pulsar se abrirá tu gestor de correo habitual.",
    footer_tagline: "Inteligencia Artificial · Desarrollo · Enterprise · Blockchain · Ciberseguridad",
    footer_privacy: "Política de privacidad",
    accreditation_text: "Persona assessora acreditada per",
    accreditation_link: "ACCIÓ, Generalitat de Catalunya"
  },
  ca: {
    doc_title: "Moonlorian — Intel·ligència artificial aplicada",
    nav_servicios: "Serveis",
    nav_contacto: "Contacte",
    hero_title: 'La tecnologia també té <span>fases</span>.<br>Nosaltres governem cadascuna.',
    hero_subtitle: "Moonlorian aplica intel·ligència artificial al desenvolupament de programari, a entorns enterprise, al blockchain i a la ciberseguretat, convertint la tecnologia en capacitat operativa i avantatge competitiu.",
    hero_cta: "Parlem →",
    serv_eyebrow: "Què fem",
    serv_title: "Quatre fases, un mateix cicle",
    phase1_label: "Fase 01 — Lluna nova",
    phase1_title: "IA aplicada al desenvolupament",
    phase1_desc: "Tot comença en la foscor: intel·ligència artificial integrada en el cicle de desenvolupament de programari, des del disseny fins al llançament.",
    phase2_label: "Fase 02 — Lluna creixent",
    phase2_title: "IA en entorns enterprise",
    phase2_desc: "Processos i plataformes enterprise potenciades amb IA per escalar operacions amb criteri i eficiència.",
    phase3_label: "Fase 03 — Lluna plena",
    phase3_title: "IA aplicada al blockchain",
    phase3_desc: "Màxima visibilitat: solucions blockchain i identitat digital potenciades amb IA, sota criteris de compliance MiCA.",
    phase4_label: "Fase 04 — Lluna minvant",
    phase4_title: "IA aplicada a la ciberseguretat",
    phase4_desc: "El coneixement es transmet: IA i ciberseguretat sota ENS, NIS2 i DORA, en formació tècnica aplicada.",
    contact_eyebrow: "Parlem",
    contact_title: "Preparats per governar la vostra propera fase?",
    contact_p: "Explica'ns en quin punt del cicle es troba la teva empresa i què necessita per avançar a la següent fase.",
    contact_email_btn: "Escriu-nos un correu",
    contact_note: "En clicar s'obrirà el teu gestor de correu habitual.",
    footer_tagline: "Intel·ligència Artificial · Desenvolupament · Enterprise · Blockchain · Ciberseguretat",
    footer_privacy: "Política de privacitat",
    accreditation_text: "Persona assessora acreditada per",
    accreditation_link: "ACCIÓ, Generalitat de Catalunya"
  },
  en: {
    doc_title: "Moonlorian — Applied artificial intelligence",
    nav_servicios: "Services",
    nav_contacto: "Contact",
    hero_title: 'Every technology moves through <span>phases</span>.<br>We guide it through all of them.',
    hero_subtitle: "We build AI into software development, enterprise systems, blockchain, and cybersecurity — turning technology into a real operational edge.",
    hero_cta: "Get in touch →",
    serv_eyebrow: "What we do",
    serv_title: "One cycle, four phases",
    phase1_label: "Phase 01 — New moon",
    phase1_title: "AI-driven development",
    phase1_desc: "It all starts in the dark: AI woven into every stage of the software lifecycle, from first design to final release.",
    phase2_label: "Phase 02 — Waxing moon",
    phase2_title: "AI for the enterprise",
    phase2_desc: "AI-powered platforms and processes that help enterprise operations scale with precision and efficiency.",
    phase3_label: "Phase 03 — Full moon",
    phase3_title: "AI for blockchain",
    phase3_desc: "Full visibility: AI-enhanced blockchain and digital identity solutions, built to meet MiCA compliance from day one.",
    phase4_label: "Phase 04 — Waning moon",
    phase4_title: "AI for cybersecurity",
    phase4_desc: "Knowledge moves forward: hands-on training in AI and cybersecurity, aligned with ENS, NIS2, and DORA.",
    contact_eyebrow: "Get in touch",
    contact_title: "Ready for your next phase?",
    contact_p: "Tell us where your company stands today, and where it needs to go next.",
    contact_email_btn: "Email us",
    contact_note: "This opens your default mail app.",
    footer_tagline: "Artificial Intelligence · Development · Enterprise · Blockchain · Cybersecurity",
    footer_privacy: "Privacy policy",
    accreditation_text: "Accredited advisor with",
    accreditation_link: "ACCIÓ, Catalonia Trade & Investment"
  }
};

function applyLanguage(lang){
  const dict = translations[lang];
  if(!dict) return;
  document.documentElement.lang = lang;
  document.title = dict.doc_title;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.querySelectorAll('.lang-switch button').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

/* Obfuscated contact email: never present as plain text in the HTML/JS
   source as a full address, assembled only at click time in the browser
   to keep it off simple scrapers that just regex the page source. */
function getContactEmail(){
  const user = String.fromCharCode(109,111,111,110,108,111,114,105,97,110);
  const domain = String.fromCharCode(109,111,111,110,108,111,114,105,97,110,46,99,111,109);
  return user + String.fromCharCode(64) + domain;
}

const emailBtn = document.getElementById('contact-email-btn');
if (emailBtn) {
  emailBtn.addEventListener('click', () => {
    window.location.href = 'mailto:' + getContactEmail();
  });
}

/* Scroll reveal */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}
