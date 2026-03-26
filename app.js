const PROMPTS = [
  {
    "category": "Mødeforberedelse",
    "title": "Erhvervskundemøde – refinansiering",
    "description": "Prompt til mødeforberedelse.",
    "prompt": "Du er en erfaren erhvervsrådgiver i den danske finanssektor. Jeg skal i morgen mødes med ejeren af en mindre byggevirksomhed med 25 ansatte. Virksomheden har eksisteret i 12 år og har en årlig omsætning på ca. 30 mio. kr. Ejeren har bedt om et møde for at diskutere refinansiering af deres eksisterende lån samt mulig finansiering af nye maskiner for 5 mio. kr. Branchen er under pres på grund af stigende materialpriser. Hjælp mig med at forberede mødet ved at: 1) identificere de 5 vigtigste spørgsmål, 2) liste 3 risikofaktorer, 3) foreslå en mødestruktur på 45 minutter. Hold sproget professionelt men tilgængeligt."
  },
  {
    "category": "Mødeforberedelse",
    "title": "Skabelon – mødeforberedelse",
    "description": "Prompt til mødeforberedelse.",
    "prompt": "Du er en erfaren [din rolle] i [din organisation]. Jeg skal forberede mig til et møde med [hvem] om [emne]. Situationen er [kontekst]. Hjælp mig med at [forberede spørgsmål / lave en dagsorden / identificere risici]. Giv mig [format, f.eks. 5 punkter, en tabel, en kort briefing]."
  },
  {
    "category": "Mødeforberedelse",
    "title": "Internt strategimøde om AI",
    "description": "Prompt til mødeforberedelse.",
    "prompt": "Du er en erfaren proceskonsulent i finanssektoren. Jeg skal facilitere et strategimøde på 2 timer for min ledergruppe på 8 personer. Emnet er: hvordan vi integrerer AI i vores daglige arbejdsgange inden årets udgang. Hjælp mig med at strukturere mødet i blokke, lave 3 åbningsspørgsmål og foreslå en prioriteringsmetode."
  },
  {
    "category": "Tekstskrivning",
    "title": "Kundebrev om markedsudvikling",
    "description": "Prompt til tekstskrivning.",
    "prompt": "Du er en erfaren formuerådgiver. Skriv et kort nyhedsbrev (max 300 ord) til mine private investeringskunder om den aktuelle markedssituation. Fokusér på hvad der er sket, hvorfor det ikke er tid til panik og én konkret ting de kan gøre nu. Tonen skal være beroligende men ærlig."
  },
  {
    "category": "Tekstskrivning",
    "title": "Intern mail om AI-værktøjer",
    "description": "Prompt til tekstskrivning.",
    "prompt": "Du er en kommunikationskonsulent i finanssektoren. Skriv en intern mail (max 200 ord) fra teamlederen til teamet om at vi nu indfører AI-værktøjer i vores daglige arbejde. Tonen skal være positiv og motiverende, men også ærlig om at det kræver en indsats. Inkluder 3 konkrete ting teamet kan starte med i morgen."
  },
  {
    "category": "Analyse",
    "title": "Kreditindstilling – mødebriefing",
    "description": "Prompt til analyse.",
    "prompt": "Du er en erfaren kreditchef i en dansk bank. Jeg uploader en kreditindstilling for en mellemstor virksomhed. Hjælp mig med at identificere de 5 største risikofaktorer, vurdere om konklusionen er velbegrundet og foreslå spørgsmål jeg bør stille inden beslutning. Strukturér som en kort mødebriefing på én A4-side."
  },
  {
    "category": "Analyse",
    "title": "Compliance-gennemgang",
    "description": "Prompt til analyse.",
    "prompt": "Du er en compliance-specialist med dyb viden om dansk finansregulering. Gennemgå denne tekst og identificer compliance-problemer, henvis til relevante lovområder (GDPR, MiFID II, AML) og foreslå konkrete ændringer i en tabel."
  },
  {
    "category": "Sparring",
    "title": "Forretningsudvikling – digital rådgivning",
    "description": "Prompt til sparring.",
    "prompt": "Du er en strategikonsulent med erfaring fra den danske finanssektor. Min afdeling overvejer en ny digital rådgivningsservice til små erhvervskunder. Giv 3 argumenter for, 3 argumenter imod, en anbefaling med begrundelse og 3 spørgsmål vi bør besvare før vi går videre."
  },
  {
    "category": "Sparring",
    "title": "Teamudvikling – AI-skepsis",
    "description": "Prompt til sparring.",
    "prompt": "Du er en erfaren leder i finanssektoren. Jeg leder et team på 12 medarbejdere, hvor de fleste er skeptiske over for AI. Giv mig 3 konkrete ting jeg kan sige på næste teammøde, 2 små øvelser på 15 minutter og 1 ting jeg absolut ikke bør gøre."
  },
  {
    "category": "Privatøkonomi",
    "title": "Personligt budget",
    "description": "Prompt til privatøkonomi.",
    "prompt": "Analyser kundens månedlige indtægter og udgifter: [økonomiske data]. Identificer opsparingsmuligheder, foreslå realistiske budgetmål og udarbejd en 12-måneders plan inkl. nødfond og investering."
  },
  {
    "category": "Privatøkonomi",
    "title": "Pensionsplanlægning",
    "description": "Prompt til privatøkonomi.",
    "prompt": "Udarbejd en pensionsplan for kunde på [alder] år med nuværende indkomst på [beløb] DKK. Beregn nødvendig månedlig opsparing for ønsket pensionsindkomst. Inkluder skatteoptimering og produktanbefalinger."
  },
  {
    "category": "Privatøkonomi",
    "title": "Boligkøbsrådgivning",
    "description": "Prompt til privatøkonomi.",
    "prompt": "Analyser kundens økonomi for boligkøb: [indtægt, gæld, opsparing]. Beregn maksimal låneramme, månedlig ydelse og samlede omkostninger. Inkluder stress-test ved rentestigning."
  },
  {
    "category": "Investering",
    "title": "Porteføljeanalyse",
    "description": "Prompt til investering.",
    "prompt": "Gennemgå kundens nuværende investeringsportefølje: [porteføljesammensætning]. Vurder risikospredning, omkostningsniveau og alignment med kundens mål. Foreslå konkrete justeringer."
  },
  {
    "category": "Investering",
    "title": "Risikoprofilering",
    "description": "Prompt til investering.",
    "prompt": "Baseret på kundens svar i risikoprofileringssamtalen: [svar], fastlæg passende risikoprofil. Anbefal asset allocation mellem aktier, obligationer og alternative investeringer."
  },
  {
    "category": "Investering",
    "title": "ESG-investeringsscreening",
    "description": "Prompt til investering.",
    "prompt": "Evaluer kundens portefølje ud fra ESG-kriterier: [beholdninger]. Identificer virksomheder med dårlige bæredygtighedsratings og foreslå alternativer."
  },
  {
    "category": "Erhverv",
    "title": "Kreditanalyse af SMV",
    "description": "Prompt til erhverv.",
    "prompt": "Analyser denne virksomheds kreditværdighed baseret på årsregnskaber for de seneste 3 år: [regnskabsdata]. Vurder likviditet, soliditet og rentabilitet. Anbefal lånebeløb, sikkerhedsstillelse og rentesats."
  },
  {
    "category": "Erhverv",
    "title": "Finansieringsforslag",
    "description": "Prompt til erhverv.",
    "prompt": "Virksomheden har brug for 5 mio. DKK til maskinudskiftning: [virksomhedsdata]. Sammenlign banklån, leasing og factoring. Anbefal mest hensigtsmæssig finansieringsform."
  },
  {
    "category": "Erhverv",
    "title": "Likviditetsplanlægning",
    "description": "Prompt til erhverv.",
    "prompt": "Udarbejd et 12-måneders likviditetsbudget for sæsonbetonet virksomhed: [virksomhedsdata]. Identificer perioder med udfordringer og foreslå finansieringsløsninger."
  },
  {
    "category": "AML & Compliance",
    "title": "Transaktionsanalyse",
    "description": "Prompt til aml & compliance.",
    "prompt": "Analyser følgende kundetransaktioner for mistænkelige mønstre: [transaktionsdata]. Identificer røde flag, vurder risiko 1-10 og anbefal næste skridt."
  },
  {
    "category": "AML & Compliance",
    "title": "EDD-tjekliste",
    "description": "Prompt til aml & compliance.",
    "prompt": "Generer en EDD-tjekliste for denne højrisikokunde: [kundeprofil]. Inkluder dokumentationskrav, verifikationsprocesser og løbende overvågning efter danske AML-regler."
  },
  {
    "category": "AML & Compliance",
    "title": "SAR-udkast",
    "description": "Prompt til aml & compliance.",
    "prompt": "Udarbejd et udkast til SAR baseret på følgende fund: [undersøgelsesresultater]. Strukturer med tidslinje, parter, mistankegrundlag og næste handling."
  },
  {
    "category": "Kundeservice",
    "title": "Klagebehandling",
    "description": "Prompt til kundeservice.",
    "prompt": "Udarbejd svar til kunde, der klager over gebyrer på investeringskonto: [klagedetaljer]. Forklar gebyrstrukturen klart, anerkend kundens frustration og tilbyd konstruktiv løsning."
  },
  {
    "category": "Kundeservice",
    "title": "Netbank problemer",
    "description": "Prompt til kundeservice.",
    "prompt": "Generer step-by-step guide til løsning af login-problemer i mobilbank. Inkluder almindelige årsager, troubleshooting-trin og hvornår kunden skal kontakte support."
  },
  {
    "category": "Rapportering",
    "title": "Månedlig rapportering",
    "description": "Prompt til rapportering.",
    "prompt": "Generer management rapport for oktober 2024: [finansielle data]. Fremhæv afvigelser fra budget, forklaring af væsentlige bevægelser og outlook for Q4."
  },
  {
    "category": "Rapportering",
    "title": "Rolling forecast",
    "description": "Prompt til rapportering.",
    "prompt": "Opdater 12-måneders forecast baseret på Q3 resultater: [aktuelle tal]. Justér for sæsonvariationer, markedsudvikling og nye initiativer. Identificer risici og muligheder."
  },
  {
    "category": "Jura",
    "title": "Leverandøraftaler",
    "description": "Prompt til jura.",
    "prompt": "Gennemgå IT-leverandørkontrakt for kritiske risici: [kontraktudkast]. Fokusér på databeskyttelse, SLA-krav, hæftelse og opsigelsesvilkår. Foreslå ændringer."
  },
  {
    "category": "Jura",
    "title": "Lovgivningsanalyse",
    "description": "Prompt til jura.",
    "prompt": "Analyser impact af ny EU-forordning om digital finance: [forordningstekst]. Identificer krav til banken, systemændringer og implementeringstidsplan."
  },
  {
    "category": "Marketing",
    "title": "Kampagnestrategi",
    "description": "Prompt til marketing.",
    "prompt": "Udvikl marketingkampagne for nyt bæredygtighedslån til private: [produktdetaljer]. Identificer målgruppe, kernebudskaber og kanaler. Sikr compliance med markedsføringsregler."
  },
  {
    "category": "IT & Sikkerhed",
    "title": "GDPR impact assessment",
    "description": "Prompt til it & sikkerhed.",
    "prompt": "Udarbejd DPIA for nyt AI-baseret kundeanalysesystem: [systemdetaljer]. Vurder databeskyttelsesrisici, sikkerhedsforanstaltninger og governance-struktur."
  },
  {
    "category": "IT & Sikkerhed",
    "title": "Incident response",
    "description": "Prompt til it & sikkerhed.",
    "prompt": "Udarbejd incident response plan for cybersikkerhedsbrud: [scenarie]. Definér roller, kommunikationsprocedurer, eskalering og myndighedsindberetning."
  },
  {
    "category": "Data & Analyse",
    "title": "Churn prediction",
    "description": "Prompt til data & analyse.",
    "prompt": "Identificer kunder med høj risiko for at skifte bank: [kundeadfærd]. Analyser mønstre i produktbrug, kontaktfrekvens og tilfredshed. Anbefal retention-strategier."
  },
  {
    "category": "Mødeforberedelse",
    "title": "Mødeforberedelse – inspirationsprompt 1",
    "description": "Prompt til mødeforberedelse.",
    "prompt": "Du er en erfaren specialist i mødeforberedelse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Mødeforberedelse",
    "title": "Mødeforberedelse – inspirationsprompt 2",
    "description": "Prompt til mødeforberedelse.",
    "prompt": "Du er en erfaren specialist i mødeforberedelse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Mødeforberedelse",
    "title": "Mødeforberedelse – inspirationsprompt 3",
    "description": "Prompt til mødeforberedelse.",
    "prompt": "Du er en erfaren specialist i mødeforberedelse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Mødeforberedelse",
    "title": "Mødeforberedelse – inspirationsprompt 4",
    "description": "Prompt til mødeforberedelse.",
    "prompt": "Du er en erfaren specialist i mødeforberedelse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Mødeforberedelse",
    "title": "Mødeforberedelse – inspirationsprompt 5",
    "description": "Prompt til mødeforberedelse.",
    "prompt": "Du er en erfaren specialist i mødeforberedelse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Mødeforberedelse",
    "title": "Mødeforberedelse – inspirationsprompt 6",
    "description": "Prompt til mødeforberedelse.",
    "prompt": "Du er en erfaren specialist i mødeforberedelse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Tekstskrivning",
    "title": "Tekstskrivning – inspirationsprompt 1",
    "description": "Prompt til tekstskrivning.",
    "prompt": "Du er en erfaren specialist i tekstskrivning. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Tekstskrivning",
    "title": "Tekstskrivning – inspirationsprompt 2",
    "description": "Prompt til tekstskrivning.",
    "prompt": "Du er en erfaren specialist i tekstskrivning. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Tekstskrivning",
    "title": "Tekstskrivning – inspirationsprompt 3",
    "description": "Prompt til tekstskrivning.",
    "prompt": "Du er en erfaren specialist i tekstskrivning. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Tekstskrivning",
    "title": "Tekstskrivning – inspirationsprompt 4",
    "description": "Prompt til tekstskrivning.",
    "prompt": "Du er en erfaren specialist i tekstskrivning. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Tekstskrivning",
    "title": "Tekstskrivning – inspirationsprompt 5",
    "description": "Prompt til tekstskrivning.",
    "prompt": "Du er en erfaren specialist i tekstskrivning. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Tekstskrivning",
    "title": "Tekstskrivning – inspirationsprompt 6",
    "description": "Prompt til tekstskrivning.",
    "prompt": "Du er en erfaren specialist i tekstskrivning. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Analyse",
    "title": "Analyse – inspirationsprompt 1",
    "description": "Prompt til analyse.",
    "prompt": "Du er en erfaren specialist i analyse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Analyse",
    "title": "Analyse – inspirationsprompt 2",
    "description": "Prompt til analyse.",
    "prompt": "Du er en erfaren specialist i analyse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Analyse",
    "title": "Analyse – inspirationsprompt 3",
    "description": "Prompt til analyse.",
    "prompt": "Du er en erfaren specialist i analyse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Analyse",
    "title": "Analyse – inspirationsprompt 4",
    "description": "Prompt til analyse.",
    "prompt": "Du er en erfaren specialist i analyse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Analyse",
    "title": "Analyse – inspirationsprompt 5",
    "description": "Prompt til analyse.",
    "prompt": "Du er en erfaren specialist i analyse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Analyse",
    "title": "Analyse – inspirationsprompt 6",
    "description": "Prompt til analyse.",
    "prompt": "Du er en erfaren specialist i analyse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Sparring",
    "title": "Sparring – inspirationsprompt 1",
    "description": "Prompt til sparring.",
    "prompt": "Du er en erfaren specialist i sparring. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Sparring",
    "title": "Sparring – inspirationsprompt 2",
    "description": "Prompt til sparring.",
    "prompt": "Du er en erfaren specialist i sparring. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Sparring",
    "title": "Sparring – inspirationsprompt 3",
    "description": "Prompt til sparring.",
    "prompt": "Du er en erfaren specialist i sparring. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Sparring",
    "title": "Sparring – inspirationsprompt 4",
    "description": "Prompt til sparring.",
    "prompt": "Du er en erfaren specialist i sparring. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Sparring",
    "title": "Sparring – inspirationsprompt 5",
    "description": "Prompt til sparring.",
    "prompt": "Du er en erfaren specialist i sparring. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Sparring",
    "title": "Sparring – inspirationsprompt 6",
    "description": "Prompt til sparring.",
    "prompt": "Du er en erfaren specialist i sparring. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Privatøkonomi",
    "title": "Privatøkonomi – inspirationsprompt 1",
    "description": "Prompt til privatøkonomi.",
    "prompt": "Du er en erfaren specialist i privatøkonomi. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Privatøkonomi",
    "title": "Privatøkonomi – inspirationsprompt 2",
    "description": "Prompt til privatøkonomi.",
    "prompt": "Du er en erfaren specialist i privatøkonomi. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Privatøkonomi",
    "title": "Privatøkonomi – inspirationsprompt 3",
    "description": "Prompt til privatøkonomi.",
    "prompt": "Du er en erfaren specialist i privatøkonomi. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Privatøkonomi",
    "title": "Privatøkonomi – inspirationsprompt 4",
    "description": "Prompt til privatøkonomi.",
    "prompt": "Du er en erfaren specialist i privatøkonomi. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Privatøkonomi",
    "title": "Privatøkonomi – inspirationsprompt 5",
    "description": "Prompt til privatøkonomi.",
    "prompt": "Du er en erfaren specialist i privatøkonomi. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Privatøkonomi",
    "title": "Privatøkonomi – inspirationsprompt 6",
    "description": "Prompt til privatøkonomi.",
    "prompt": "Du er en erfaren specialist i privatøkonomi. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Investering",
    "title": "Investering – inspirationsprompt 1",
    "description": "Prompt til investering.",
    "prompt": "Du er en erfaren specialist i investering. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Investering",
    "title": "Investering – inspirationsprompt 2",
    "description": "Prompt til investering.",
    "prompt": "Du er en erfaren specialist i investering. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Investering",
    "title": "Investering – inspirationsprompt 3",
    "description": "Prompt til investering.",
    "prompt": "Du er en erfaren specialist i investering. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Investering",
    "title": "Investering – inspirationsprompt 4",
    "description": "Prompt til investering.",
    "prompt": "Du er en erfaren specialist i investering. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Investering",
    "title": "Investering – inspirationsprompt 5",
    "description": "Prompt til investering.",
    "prompt": "Du er en erfaren specialist i investering. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Investering",
    "title": "Investering – inspirationsprompt 6",
    "description": "Prompt til investering.",
    "prompt": "Du er en erfaren specialist i investering. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Erhverv",
    "title": "Erhverv – inspirationsprompt 1",
    "description": "Prompt til erhverv.",
    "prompt": "Du er en erfaren specialist i erhverv. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Erhverv",
    "title": "Erhverv – inspirationsprompt 2",
    "description": "Prompt til erhverv.",
    "prompt": "Du er en erfaren specialist i erhverv. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Erhverv",
    "title": "Erhverv – inspirationsprompt 3",
    "description": "Prompt til erhverv.",
    "prompt": "Du er en erfaren specialist i erhverv. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Erhverv",
    "title": "Erhverv – inspirationsprompt 4",
    "description": "Prompt til erhverv.",
    "prompt": "Du er en erfaren specialist i erhverv. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Erhverv",
    "title": "Erhverv – inspirationsprompt 5",
    "description": "Prompt til erhverv.",
    "prompt": "Du er en erfaren specialist i erhverv. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Erhverv",
    "title": "Erhverv – inspirationsprompt 6",
    "description": "Prompt til erhverv.",
    "prompt": "Du er en erfaren specialist i erhverv. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "AML & Compliance",
    "title": "AML & Compliance – inspirationsprompt 1",
    "description": "Prompt til aml & compliance.",
    "prompt": "Du er en erfaren specialist i aml & compliance. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "AML & Compliance",
    "title": "AML & Compliance – inspirationsprompt 2",
    "description": "Prompt til aml & compliance.",
    "prompt": "Du er en erfaren specialist i aml & compliance. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "AML & Compliance",
    "title": "AML & Compliance – inspirationsprompt 3",
    "description": "Prompt til aml & compliance.",
    "prompt": "Du er en erfaren specialist i aml & compliance. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "AML & Compliance",
    "title": "AML & Compliance – inspirationsprompt 4",
    "description": "Prompt til aml & compliance.",
    "prompt": "Du er en erfaren specialist i aml & compliance. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "AML & Compliance",
    "title": "AML & Compliance – inspirationsprompt 5",
    "description": "Prompt til aml & compliance.",
    "prompt": "Du er en erfaren specialist i aml & compliance. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "AML & Compliance",
    "title": "AML & Compliance – inspirationsprompt 6",
    "description": "Prompt til aml & compliance.",
    "prompt": "Du er en erfaren specialist i aml & compliance. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Kundeservice",
    "title": "Kundeservice – inspirationsprompt 1",
    "description": "Prompt til kundeservice.",
    "prompt": "Du er en erfaren specialist i kundeservice. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Kundeservice",
    "title": "Kundeservice – inspirationsprompt 2",
    "description": "Prompt til kundeservice.",
    "prompt": "Du er en erfaren specialist i kundeservice. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Kundeservice",
    "title": "Kundeservice – inspirationsprompt 3",
    "description": "Prompt til kundeservice.",
    "prompt": "Du er en erfaren specialist i kundeservice. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Kundeservice",
    "title": "Kundeservice – inspirationsprompt 4",
    "description": "Prompt til kundeservice.",
    "prompt": "Du er en erfaren specialist i kundeservice. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Kundeservice",
    "title": "Kundeservice – inspirationsprompt 5",
    "description": "Prompt til kundeservice.",
    "prompt": "Du er en erfaren specialist i kundeservice. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Kundeservice",
    "title": "Kundeservice – inspirationsprompt 6",
    "description": "Prompt til kundeservice.",
    "prompt": "Du er en erfaren specialist i kundeservice. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Rapportering",
    "title": "Rapportering – inspirationsprompt 1",
    "description": "Prompt til rapportering.",
    "prompt": "Du er en erfaren specialist i rapportering. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Rapportering",
    "title": "Rapportering – inspirationsprompt 2",
    "description": "Prompt til rapportering.",
    "prompt": "Du er en erfaren specialist i rapportering. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Rapportering",
    "title": "Rapportering – inspirationsprompt 3",
    "description": "Prompt til rapportering.",
    "prompt": "Du er en erfaren specialist i rapportering. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Rapportering",
    "title": "Rapportering – inspirationsprompt 4",
    "description": "Prompt til rapportering.",
    "prompt": "Du er en erfaren specialist i rapportering. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Rapportering",
    "title": "Rapportering – inspirationsprompt 5",
    "description": "Prompt til rapportering.",
    "prompt": "Du er en erfaren specialist i rapportering. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Rapportering",
    "title": "Rapportering – inspirationsprompt 6",
    "description": "Prompt til rapportering.",
    "prompt": "Du er en erfaren specialist i rapportering. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Jura",
    "title": "Jura – inspirationsprompt 1",
    "description": "Prompt til jura.",
    "prompt": "Du er en erfaren specialist i jura. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Jura",
    "title": "Jura – inspirationsprompt 2",
    "description": "Prompt til jura.",
    "prompt": "Du er en erfaren specialist i jura. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Jura",
    "title": "Jura – inspirationsprompt 3",
    "description": "Prompt til jura.",
    "prompt": "Du er en erfaren specialist i jura. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Jura",
    "title": "Jura – inspirationsprompt 4",
    "description": "Prompt til jura.",
    "prompt": "Du er en erfaren specialist i jura. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Jura",
    "title": "Jura – inspirationsprompt 5",
    "description": "Prompt til jura.",
    "prompt": "Du er en erfaren specialist i jura. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Jura",
    "title": "Jura – inspirationsprompt 6",
    "description": "Prompt til jura.",
    "prompt": "Du er en erfaren specialist i jura. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Marketing",
    "title": "Marketing – inspirationsprompt 1",
    "description": "Prompt til marketing.",
    "prompt": "Du er en erfaren specialist i marketing. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Marketing",
    "title": "Marketing – inspirationsprompt 2",
    "description": "Prompt til marketing.",
    "prompt": "Du er en erfaren specialist i marketing. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Marketing",
    "title": "Marketing – inspirationsprompt 3",
    "description": "Prompt til marketing.",
    "prompt": "Du er en erfaren specialist i marketing. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Marketing",
    "title": "Marketing – inspirationsprompt 4",
    "description": "Prompt til marketing.",
    "prompt": "Du er en erfaren specialist i marketing. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Marketing",
    "title": "Marketing – inspirationsprompt 5",
    "description": "Prompt til marketing.",
    "prompt": "Du er en erfaren specialist i marketing. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Marketing",
    "title": "Marketing – inspirationsprompt 6",
    "description": "Prompt til marketing.",
    "prompt": "Du er en erfaren specialist i marketing. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "IT & Sikkerhed",
    "title": "IT & Sikkerhed – inspirationsprompt 1",
    "description": "Prompt til it & sikkerhed.",
    "prompt": "Du er en erfaren specialist i it & sikkerhed. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "IT & Sikkerhed",
    "title": "IT & Sikkerhed – inspirationsprompt 2",
    "description": "Prompt til it & sikkerhed.",
    "prompt": "Du er en erfaren specialist i it & sikkerhed. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "IT & Sikkerhed",
    "title": "IT & Sikkerhed – inspirationsprompt 3",
    "description": "Prompt til it & sikkerhed.",
    "prompt": "Du er en erfaren specialist i it & sikkerhed. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "IT & Sikkerhed",
    "title": "IT & Sikkerhed – inspirationsprompt 4",
    "description": "Prompt til it & sikkerhed.",
    "prompt": "Du er en erfaren specialist i it & sikkerhed. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "IT & Sikkerhed",
    "title": "IT & Sikkerhed – inspirationsprompt 5",
    "description": "Prompt til it & sikkerhed.",
    "prompt": "Du er en erfaren specialist i it & sikkerhed. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "IT & Sikkerhed",
    "title": "IT & Sikkerhed – inspirationsprompt 6",
    "description": "Prompt til it & sikkerhed.",
    "prompt": "Du er en erfaren specialist i it & sikkerhed. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Data & Analyse",
    "title": "Data & Analyse – inspirationsprompt 1",
    "description": "Prompt til data & analyse.",
    "prompt": "Du er en erfaren specialist i data & analyse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Data & Analyse",
    "title": "Data & Analyse – inspirationsprompt 2",
    "description": "Prompt til data & analyse.",
    "prompt": "Du er en erfaren specialist i data & analyse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Data & Analyse",
    "title": "Data & Analyse – inspirationsprompt 3",
    "description": "Prompt til data & analyse.",
    "prompt": "Du er en erfaren specialist i data & analyse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Data & Analyse",
    "title": "Data & Analyse – inspirationsprompt 4",
    "description": "Prompt til data & analyse.",
    "prompt": "Du er en erfaren specialist i data & analyse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Data & Analyse",
    "title": "Data & Analyse – inspirationsprompt 5",
    "description": "Prompt til data & analyse.",
    "prompt": "Du er en erfaren specialist i data & analyse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  },
  {
    "category": "Data & Analyse",
    "title": "Data & Analyse – inspirationsprompt 6",
    "description": "Prompt til data & analyse.",
    "prompt": "Du er en erfaren specialist i data & analyse. Hjælp mig med opgaven: [indsæt kontekst]. Lever: 1) kort opsummering, 2) 5 handlingspunkter, 3) risici og antagelser, 4) forslag til næste skridt. Formatér svaret i en tydelig tabel og afslut med en checkliste, jeg kan bruge i morgen."
  }
];


const state = { search: "", category: "Alle" };
const els = {
  stats: document.getElementById("stats"),
  search: document.getElementById("search"),
  categoryList: document.getElementById("categoryList"),
  promptGrid: document.getElementById("promptGrid"),
  template: document.getElementById("promptCardTemplate"),
  activeCategory: document.getElementById("activeCategory"),
  clearFilters: document.getElementById("clearFilters")
};

const categories = ["Alle", ...new Set(PROMPTS.map(p => p.category))];

function chatLinks(text) {
  const q = encodeURIComponent(text);
  return {
    chatgpt: `https://chat.openai.com/?q=${q}`,
    claude: `https://claude.ai/new?q=${q}`,
    gemini: `https://gemini.google.com/app?prompt=${q}`
  };
}

function filteredPrompts() {
  return PROMPTS.filter(p => {
    const inCategory = state.category === "Alle" || p.category === state.category;
    const blob = `${p.title} ${p.description} ${p.prompt} ${p.category}`.toLowerCase();
    const inSearch = blob.includes(state.search.toLowerCase());
    return inCategory && inSearch;
  });
}

function renderCategories() {
  els.categoryList.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    const count = cat === "Alle" ? PROMPTS.length : PROMPTS.filter(p => p.category === cat).length;
    btn.textContent = `${cat} (${count})`;
    btn.className = state.category === cat ? "active" : "";
    btn.addEventListener("click", () => {
      state.category = cat;
      render();
    });
    els.categoryList.appendChild(btn);
  });
}

function renderCards() {
  const rows = filteredPrompts();
  els.promptGrid.innerHTML = "";
  rows.forEach(item => {
    const node = els.template.content.cloneNode(true);
    node.querySelector("h3").textContent = item.title;
    node.querySelector(".badge").textContent = item.category;
    node.querySelector(".description").textContent = item.description;
    node.querySelector("textarea").value = item.prompt;

    const copyBtn = node.querySelector(".copyBtn");
    copyBtn.addEventListener("click", async () => {
      await navigator.clipboard.writeText(item.prompt);
      copyBtn.textContent = "Kopieret!";
      setTimeout(() => (copyBtn.textContent = "Kopiér"), 1400);
    });

    const links = chatLinks(item.prompt);
    node.querySelector(".chatgpt").href = links.chatgpt;
    node.querySelector(".claude").href = links.claude;
    node.querySelector(".gemini").href = links.gemini;

    els.promptGrid.appendChild(node);
  });
  els.stats.textContent = `${rows.length} af ${PROMPTS.length} prompts`;
  els.activeCategory.textContent = state.category === "Alle" ? "Alle kategorier" : state.category;
}

function render() {
  renderCategories();
  renderCards();
}

els.search.addEventListener("input", e => {
  state.search = e.target.value;
  renderCards();
});
els.clearFilters.addEventListener("click", () => {
  state.search = "";
  state.category = "Alle";
  els.search.value = "";
  render();
});

render();
