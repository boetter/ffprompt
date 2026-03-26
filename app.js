const corePrompts = [
  {
    title: "Erhvervskundemøde: refinansiering og maskinlån",
    category: "Mødeforberedelse",
    source: "Brugerinput",
    text: `Du er en erfaren erhvervsrådgiver i den danske finanssektor. Jeg skal i morgen mødes med ejeren af en mindre byggevirksomhed med 25 ansatte. Virksomheden har eksisteret i 12 år og har en årlig omsætning på ca. 30 mio. kr. Ejeren har bedt om et møde for at diskutere refinansiering af deres eksisterende lån samt mulig finansiering af nye maskiner for 5 mio. kr. Branchen er under pres på grund af stigende materialpriser.\n\nHjælp mig med at forberede mødet ved at:\n1) Identificere de 5 vigtigste spørgsmål\n2) Liste 3 potentielle risikofaktorer\n3) Foreslå en mødestruktur på 45 minutter\n\nHold sproget professionelt men tilgængeligt.`,
  },
  {
    title: "Skabelon: mødeforberedelse",
    category: "Mødeforberedelse",
    source: "Brugerinput",
    text: `Du er en erfaren [din rolle] i [din organisation]. Jeg skal forberede mig til et møde med [hvem] om [emne]. Situationen er [kontekst]. Hjælp mig med at [forberede spørgsmål / lave en dagsorden / identificere risici]. Giv mig [format, fx 5 punkter, en tabel, en kort briefing].`,
  },
  {
    title: "Skabelon: tekstskrivning",
    category: "Tekst & kommunikation",
    source: "Brugerinput",
    text: `Du er en erfaren [rolle]. Skriv et udkast til [type tekst] til [modtager]. Emnet er [emne]. Tonen skal være [professionel/varm/formel]. Teksten skal være [længde]. Inkluder [specifikke elementer].`,
  },
  {
    title: "Skabelon: analyse og forståelse",
    category: "Analyse & forståelse",
    source: "Brugerinput",
    text: `Du er en [rolle] med dyb viden om [område]. Jeg har et dokument der handler om [emne]. Hjælp mig med at [opsummere / identificere nøglepunkter / forklare i enkle termer]. Fokusér på [hvad der er vigtigst]. Giv svaret som [format].`,
  },
  {
    title: "Skabelon: sparring",
    category: "Sparring & idéudvikling",
    source: "Brugerinput",
    text: `Du er en erfaren [rolle]. Jeg står med følgende udfordring: [beskriv situationen]. Giv mig 3 forskellige måder jeg kan gribe det an på. For hver tilgang, forklar fordele og ulemper. Afslut med din anbefaling.`,
  },
  {
    title: "Internt strategimøde om AI",
    category: "Mødeforberedelse",
    source: "Brugerinput",
    text: `Du er en erfaren proceskonsulent i finanssektoren. Jeg skal facilitere et strategimøde på 2 timer for min ledergruppe på 8 personer om integration af AI i daglige arbejdsgange inden årets udgang. Hjælp med:\n1) Struktur i blokke med tidsangivelser\n2) 3 åbningsspørgsmål\n3) Prioriteringsmetode for indsatsområder\nMødet skal være handlingsorienteret.`,
  },
  {
    title: "Nyhedsbrev til investeringskunder",
    category: "Tekst & kommunikation",
    source: "Brugerinput",
    text: `Du er en erfaren formuerådgiver. Skriv et kort nyhedsbrev (max 300 ord) til private investeringskunder om den aktuelle markedssituation: globale aktiemarkeder sidste måned, hvorfor det ikke er tid til panik, og én konkret handling nu. Tonen skal være beroligende men ærlig, uden jargon.`,
  },
  {
    title: "Intern mail om AI-indførsel",
    category: "Tekst & kommunikation",
    source: "Brugerinput",
    text: `Du er kommunikationskonsulent i finanssektoren. Skriv intern mail (max 200 ord) fra teamleder om indførsel af AI-værktøjer. Tonen skal være positiv og motiverende, men ærlig om indsatsbehov. Inkluder 3 ting teamet kan starte med i morgen.`,
  },
  {
    title: "Kreditindstilling: mødebrief",
    category: "Analyse & forståelse",
    source: "Brugerinput",
    text: `Du er erfaren kreditchef i dansk bank. Jeg uploader en kreditindstilling for en mellemstor virksomhed. Hjælp med: 1) 5 største risikofaktorer, 2) vurdering af om konklusionen er velbegrundet, 3) spørgsmål før beslutning. Strukturér som kort mødebriefing på én A4-side.`,
  },
  {
    title: "Compliance-gennemgang (GDPR/MiFID/AML)",
    category: "AML, compliance & jura",
    source: "Brugerinput",
    text: `Du er compliance-specialist med dyb viden om dansk finansregulering. Gennemgå teksten og identificer compliance-problemer, henvis til relevante lovområder (GDPR, MiFID II, AML), og foreslå konkrete ændringer. Giv svaret i tabel: Problem | Lovområde | Ændringsforslag.`,
  },
  {
    title: "Team med AI-skepsis",
    category: "Sparring & idéudvikling",
    source: "Brugerinput",
    text: `Du er erfaren leder i finanssektoren. Jeg leder et team på 12 medarbejdere, hvor de fleste er skeptiske over for AI. Giv mig: 1) tre konkrete ting jeg kan sige på næste teammøde, 2) to 15-minutters øvelser, 3) én ting jeg absolut ikke bør gøre.`,
  },
  {
    title: "Personligt budget med 12-måneders plan",
    category: "Privatrådgivning",
    source: "Brugerinput",
    text: `Analyser kundens månedlige indtægter og udgifter: [økonomiske data]. Identificer opsparingsmuligheder, foreslå realistiske budgetmål og udarbejd en 12-måneders økonomisk plan. Inkluder nødfond og investeringsanbefalinger.`,
  },
  {
    title: "Pensionsplanlægning",
    category: "Privatrådgivning",
    source: "Brugerinput",
    text: `Udarbejd pensionsplan for kunde på [alder] år med indkomst [beløb] DKK. Beregn nødvendig månedlig opsparing for ønsket pensionsindkomst. Inkluder skatteoptimering og produktanbefalinger.`,
  },
  {
    title: "Boligkøbsrådgivning",
    category: "Privatrådgivning",
    source: "Brugerinput",
    text: `Analyser kundens økonomi for boligkøb: [indtægt, gæld, opsparing]. Beregn maksimal låneramme, månedlig ydelse og samlede omkostninger. Inkluder stresstest ved rentestigning og anbefaling om kontantindskud.`,
  },
  {
    title: "Kreditanalyse af SMV",
    category: "Erhvervsrådgivning",
    source: "Brugerinput",
    text: `Analyser virksomhedens kreditværdighed ud fra 3 års regnskaber: [data]. Vurder likviditet, soliditet og rentabilitet. Anbefal lånebeløb, sikkerhedsstillelse og rentesats.`,
  },
  {
    title: "Finansieringsforslag: banklån vs leasing vs factoring",
    category: "Erhvervsrådgivning",
    source: "Brugerinput",
    text: `Virksomheden har brug for 5 mio. DKK til maskinudskiftning: [virksomhedsdata]. Sammenlign fordele/ulemper ved banklån, leasing og factoring. Anbefal mest hensigtsmæssige finansieringsform med begrundelse.`,
  },
  {
    title: "Grundlæggende transaktionsanalyse",
    category: "AML, compliance & jura",
    source: "Brugerinput",
    text: `Analyser kundetransaktioner for mistænkelige mønstre: [data]. Identificer røde flag som strukturering, usædvanlige beløb, geografiske anomalier og frekvensændringer. Vurder risiko 1-10 og anbefal næste skridt.`,
  },
  {
    title: "Udkast til SAR",
    category: "AML, compliance & jura",
    source: "Brugerinput",
    text: `Udarbejd udkast til SAR baseret på fund: [undersøgelsesresultater]. Strukturér med klar beskrivelse af mistænkelige aktiviteter, tidslinje, involverede parter og begrundelse for mistanke. Følg SØIK-format.`,
  },
  {
    title: "Kundesvar ved gebyrklage",
    category: "Kundeservice",
    source: "Brugerinput",
    text: `Udarbejd svar til kunde, der klager over gebyrer på investeringskonto: [klagedetaljer]. Forklar gebyrstruktur klart, anerkend frustration og tilbyd konstruktiv løsning. Overhold god skik.`,
  },
  {
    title: "Regulatorisk rapportering (COREP)",
    category: "Rapportering & økonomistyring",
    source: "Brugerinput",
    text: `Forbered COREP-indberetning til Finanstilsynet: [kapitaldata]. Verificer beregninger af risikovægtede aktiver, kontroller kapitalprocenter og dokumenter eventuelle justeringer.`,
  },
  {
    title: "Projektcharter: core banking system",
    category: "Projekt, IT & data",
    source: "Brugerinput",
    text: `Udarbejd Project Charter for nyt core banking system. Inkluder mål, scope, interessenter, risici og succeskriterier. Fokusér på compliance og minimering af driftsafbrydelser.`,
  },
  {
    title: "DPIA for AI-kundeanalyse",
    category: "Projekt, IT & data",
    source: "Brugerinput",
    text: `Udarbejd DPIA for nyt AI-baseret kundeanalysesystem: [systemdetaljer]. Vurder databeskyttelsesrisici, identificer sikkerhedsforanstaltninger og anbefal governance-struktur.`,
  },
  {
    title: "KPI-dashboard prompt",
    category: "Projekt, IT & data",
    source: "Brugerinput",
    text: `Generer executive dashboard med bankens nøgletal: [data]. Inkluder trends, benchmarks og alerts. Fokusér på rentabilitet, vækst og risikoindikatorer.`,
  }
];

const generatedTemplates = [
  ["Mødeforberedelse", "Forbered kundemøde", "Du er {rolle}. Forbered et møde med {målgruppe} om {emne}. Giv agenda, nøglespørgsmål og risici i punktform."],
  ["Tekst & kommunikation", "Skriv professionel tekst", "Du er {rolle}. Skriv et udkast til {leverance} til {målgruppe}. Tone: {tone}. Inkluder klare næste skridt."],
  ["Analyse & forståelse", "Analysér dokument", "Du er {rolle}. Analysér {emne}. Opsummér nøglepunkter, usikkerheder og anbefaling i tabel."],
  ["Sparring & idéudvikling", "Sparring på udfordring", "Du er {rolle}. Jeg står med {emne}. Giv 3 løsningsspor med fordele/ulemper og en anbefalet plan."],
  ["Privatrådgivning", "Rådgivning til privatkunde", "Du er {rolle}. Brug data: {emne}. Foreslå plan for de næste 12 måneder inkl. risici og opfølgning."],
  ["Erhvervsrådgivning", "SMV-rådgivning", "Du er {rolle}. Vurder {emne} for en virksomhed i {målgruppe}. Giv kredit- og cashflowvurdering samt anbefalet handling."],
  ["AML, compliance & jura", "Compliance-vurdering", "Du er {rolle}. Gennemgå {emne}. Identificer regelbrud, risikoniveau og konkrete remediation-tiltag."],
  ["Kundeservice", "Kundesvar med empati", "Du er {rolle}. Besvar henvendelse om {emne} til {målgruppe}. Forklar klart, vis empati og angiv næste trin."],
  ["Rapportering & økonomistyring", "Management-rapport", "Du er {rolle}. Udarbejd rapport om {emne}. Vis KPI'er, afvigelser, årsager og anbefalede handlinger."],
  ["Projekt, IT & data", "Projektstyring", "Du er {rolle}. Lav plan for {emne}. Inkluder milepæle, afhængigheder, risici og beslutningspunkter."],
];

const roles = [
  "erfaren rådgiver i dansk bank", "compliance manager", "kreditchef", "formuerådgiver",
  "teamleder i kundeservice", "HR-partner", "projektleder i finans-IT", "dataanalytiker i finanssektoren"
];
const targetGroups = [
  "SMV-kunder", "privatkunder", "ledergruppen", "AML-teamet", "investeringskunder",
  "nyansatte rådgivere", "digitale kunder", "eksterne samarbejdspartnere"
];
const subjects = [
  "likviditetsudfordringer", "AI-adoption", "kundekommunikation", "GDPR-efterlevelse", "kreditbeslutning",
  "budgetopfølgning", "porteføljejustering", "forretningsudvikling", "onboarding", "incident response",
  "leverandørstyring", "netbankforbedringer"
];
const deliverables = ["mail", "mødebrief", "præsentation", "notat", "kundebrev", "statusrapport"];
const tones = ["professionel", "varm", "kortfattet", "handlingsorienteret", "beroligende"];

const generatedPrompts = [];
let generatedId = 1;
for (const [category, title, template] of generatedTemplates) {
  for (const role of roles) {
    const subject = subjects[(generatedId * 3) % subjects.length];
    const group = targetGroups[(generatedId * 5) % targetGroups.length];
    const deliverable = deliverables[(generatedId * 7) % deliverables.length];
    const tone = tones[(generatedId * 11) % tones.length];

    generatedPrompts.push({
      title: `${title} #${generatedId}`,
      category,
      source: "Tilføjet",
      text: template
        .replace("{rolle}", role)
        .replace("{målgruppe}", group)
        .replace("{emne}", subject)
        .replace("{leverance}", deliverable)
        .replace("{tone}", tone),
    });

    generatedId += 1;
  }
}

const prompts = [...corePrompts, ...generatedPrompts];

const cards = document.getElementById("cards");
const count = document.getElementById("promptCount");
const categoryFilter = document.getElementById("categoryFilter");
const sourceFilter = document.getElementById("sourceFilter");
const searchInput = document.getElementById("searchInput");
const activeFilters = document.getElementById("activeFilters");
const resetBtn = document.getElementById("resetBtn");
const template = document.getElementById("cardTemplate");

const allCategories = ["all", ...new Set(prompts.map((p) => p.category))];
for (const c of allCategories) {
  const option = document.createElement("option");
  option.value = c;
  option.textContent = c === "all" ? "Alle" : c;
  categoryFilter.append(option);
}

const platformUrl = {
  chatgpt: "https://chatgpt.com/?q=",
  claude: "https://claude.ai/new?q=",
  perplexity: "https://www.perplexity.ai/search?q=",
};

function render() {
  const term = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const source = sourceFilter.value;

  const filtered = prompts.filter((p) => {
    const inCategory = category === "all" || p.category === category;
    const inSource = source === "all" || p.source === source;
    const inSearch = !term || `${p.title} ${p.text}`.toLowerCase().includes(term);
    return inCategory && inSource && inSearch;
  });

  cards.innerHTML = "";
  for (const p of filtered) {
    const card = template.content.cloneNode(true);
    card.querySelector("h3").textContent = p.title;
    card.querySelector(".badge").textContent = p.category;
    card.querySelector(".meta").textContent = `Kilde: ${p.source}`;
    card.querySelector("pre").textContent = p.text;

    card.querySelector(".copy").addEventListener("click", async () => {
      await navigator.clipboard.writeText(p.text);
      const old = card.querySelector(".copy").textContent;
      card.querySelector(".copy").textContent = "Kopieret ✓";
      setTimeout(() => (card.querySelector(".copy").textContent = old), 1200);
    });

    card.querySelector(".chatgpt").href = platformUrl.chatgpt + encodeURIComponent(p.text);
    card.querySelector(".claude").href = platformUrl.claude + encodeURIComponent(p.text);
    card.querySelector(".perplexity").href = platformUrl.perplexity + encodeURIComponent(p.text);

    cards.append(card);
  }

  count.textContent = filtered.length;
  activeFilters.textContent = `Viser ${filtered.length} af ${prompts.length} prompts`;
}

[searchInput, categoryFilter, sourceFilter].forEach((el) => el.addEventListener("input", render));
resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  sourceFilter.value = "all";
  render();
});

render();
