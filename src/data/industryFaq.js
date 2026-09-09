// Expert FAQ content per industry page (/industrii/[slug])
// Used for: (1) visible on-page Q&A section, (2) FAQPage JSON-LD schema.
// Content standard: concrete standards, materials and selection criteria
// (ATEX 2014/34/UE, EHEDG, FDA 21 CFR 177, 3-A, GMP, DIN/EN, PN/DN, IE3/IE4,
// IP65/IP66, ISCIR, PED 2014/68/UE etc.) - not marketing copy.
// Do not claim "distribuitor autorizat/oficial/exclusiv" or "partener oficial".

export const industryFaqs = {
  petrochimie: [
    {
      q: "ATEX zona 1 vs zona 2: ce diferă la o comandă de echipamente?",
      a: "Zonele ATEX descriu probabilitatea prezenței unei atmosfere explozive: zona 1 înseamnă că gazul inflamabil poate apărea ocazional, în funcționare normală; zona 2, doar rar și pentru perioade scurte. Conform Directivei 2014/34/UE, echipamentele pentru zona 1 trebuie să fie categoria 2 (marcaj II 2G), cu protecție mai strictă la aprindere, în timp ce zona 2 acceptă categoria 3 (II 3G), de regulă mai accesibilă ca preț. La comandă, trimiteți-ne clasificarea zonei din documentația ATEX a instalației, împreună cu grupul de gaz (IIA/IIB/IIC) și clasa de temperatură, ca să selectăm certificarea corectă."
    },
    {
      q: "Ce standard urmează pompele centrifugale pentru transferul produselor petroliere?",
      a: "Pentru rafinării folosim pompe construite conform API 610, standardul dedicat pompelor centrifugale pentru petrol, produse petrochimice și gaze naturale. Acesta stabilește cerințe pentru etanșarea pe ax, materiale rezistente la coroziune și temperatura de proces, distanțe minime pentru mentenanță și teste de performanță (hidrostatice, NPSH). Verificăm și compatibilitatea garniturii mecanice cu fluidul pompat, de multe ori conform API 682. Pentru comandă avem nevoie de debit, presiune de refulare, densitate și vâscozitate a fluidului, temperatura de operare și dacă instalația e clasificată ATEX."
    },
    {
      q: "Ce presiuni nominale (PN) și clase ANSI acoperă robineții cu bilă pentru linii de rafinărie?",
      a: "Robineții cu bilă din portofoliul nostru acoperă PN100 până la PN400 (aproximativ echivalent claselor ANSI 600-2500), cu etanșare metal-metal pentru temperaturi ridicate, acolo unde garniturile moi din PTFE nu mai rezistă. Clasa se alege în funcție de presiunea maximă de proiectare a liniei și temperatura fluidului - o presiune nominală subdimensionată e un risc de siguranță, una supradimensionată înseamnă cost inutil. Pentru fluide fierbinți sau abrazive recomandăm robineți cu design 'fire-safe' testat conform API 607/API 6FA. Trimiteți-ne fișa liniei (P&ID) cu presiunea și temperatura de proiectare."
    },
    {
      q: "Ce certificări au supapele de siguranță pentru cazane și recipiente sub presiune?",
      a: "Supapele de siguranță pe care le furnizăm sunt certificate TÜV sau conform ASME (secțiunea VIII pentru recipiente sub presiune), cu capacitate de evacuare testată și marcaj CE conform Directivei Echipamente sub Presiune 2014/68/UE. Dimensionarea corectă depinde de presiunea de deschidere, debitul de evacuare necesar și fluidul protejat (gaz, vapori sau lichid). O supapă subdimensionată nu protejează instalația, iar una supradimensionată poate produce 'chattering' (deschidere-închidere rapidă), care distruge scaunul valvei. Trimiteți-ne presiunea de reglaj și datele recipientului pentru selecția potrivită."
    },
    {
      q: "Ce informații trebuie să trimitem pentru o ofertă de echipamente destinate unei rafinării?",
      a: "Avem nevoie de: fluidul procesat (compoziție, densitate, vâscozitate, conținut de solide), parametrii de proces (debit, presiune, temperatură minimă/maximă), clasificarea zonei ATEX dacă există, materialul cerut sau specificat în caietul de sarcini și standardul de referință (API, ASME, EN). Dacă aveți schema P&ID sau fișa tehnică a echipamentului existent, ajută mult la identificarea unui înlocuitor compatibil. Pentru piese critice din stoc confirmăm disponibilitatea și livrăm în 24-72h; pentru echipamente la comandă, termenul obișnuit e de 2-6 săptămâni, în funcție de producător."
    }
  ],

  alimentar: [
    {
      q: "Ce materiale și certificări trebuie să aibă o pompă în contact cu alimente?",
      a: "Pentru contact direct cu alimente, standardul minim e inoxul austenitic 316L (conținut scăzut de carbon, rezistență bună la coroziune și la spălare CIP), cu finisaj interior Ra sub 0,8 µm, ca să evite retenția de reziduuri și bacterii. Garniturile trebuie să fie din materiale conforme FDA 21 CFR 177 (EPDM sau FKM alimentar), iar construcția pompei ar trebui certificată EHEDG pentru curățare eficientă fără demontare, sau 3-A dacă lucrați cu lactate pentru piața americană. La comandă, spuneți-ne produsul pompat (vâscozitate, conținut de particule) și tipul de conexiune dorit (Clamp, DIN 11851)."
    },
    {
      q: "Ce diferență e între o pompă centrifugală sanitară și o pompă cu lobi?",
      a: "Pompa centrifugală sanitară e potrivită pentru fluide cu vâscozitate joasă-medie (lapte, sucuri, apă de proces), oferă debit mare la presiune moderată și e ușor de curățat CIP. Pompa cu lobi funcționează prin deplasare pozitivă, pompează fluide vâscoase sau cu particule (ciocolată, creme, iaurt cu bucăți de fruct) fără să le deterioreze structura, și menține debit constant indiferent de presiunea din linie. Sub aproximativ 500 cP și fără particule mari, centrifugala e alegerea economică; peste acest prag, sau pentru produse sensibile la forfecare, recomandăm pompa cu lobi."
    },
    {
      q: "Ce tip de conexiune aleg pentru robineții fluture sanitari: Clamp sau DIN 11851?",
      a: "Conexiunea Clamp (Tri-Clamp, ISO 2852) e rapidă la montare/demontare, ideală pentru linii recompuse des pentru mentenanță sau schimbare de produs, și e standard în instalațiile de tip american. DIN 11851 (filet cu piuliță olandeză) e mai răspândită în instalațiile europene fixe, oferă etanșare foarte bună pe termen lung, dar necesită chei pentru demontare. Livrăm ambele variante cu garnituri EPDM sau FKM alimentar - EPDM rezistă bine la abur și CIP la cald, FKM la uleiuri și grăsimi. Alegerea depinde de standardul deja instalat pe linia dumneavoastră."
    },
    {
      q: "Ce presupune dimensionarea unui schimbător de căldură cu plăci pentru pasteurizare?",
      a: "Schimbătoarele cu plăci (PHE) pentru pasteurizare folosesc plăci din inox 316L cu garnituri EPDM sau NBR alimentar, dimensionate după debitul de proces și diferența de temperatură necesară (de exemplu 72°C timp de 15 secunde pentru pasteurizare HTST la lapte). Numărul și modelul plăcilor determină suprafața de transfer termic și pierderea de presiune admisă în linie. Pentru recuperare de energie, o parte din instalație poate prelua căldura produsului deja pasteurizat pentru preîncălzirea produsului crud, reducând consumul energetic. Trimiteți-ne debitul, temperaturile de intrare/ieșire dorite și tipul de produs pentru dimensionare."
    },
    {
      q: "Cum verific dacă un echipament e cu adevărat conform cerințelor de igienă din unitatea mea?",
      a: "Cereți întotdeauna declarația de conformitate pentru materialele de contact (FDA/EC 1935), certificatul EHEDG sau 3-A al constructorului (nu doar al materialului) și fișa tehnică cu rugozitatea suprafeței (Ra) garantată. Verificați și dacă echipamentul e proiectat 'self-draining' (fără zone de stagnare a lichidului) - un criteriu obligatoriu pentru certificarea EHEDG. Echipa noastră tehnică poate verifica împreună cu dumneavoastră documentația primită de la producător înainte de instalare, ca să evitați o respingere la audit. Pentru piese sanitare din stoc, livrarea se face în 24-72h."
    }
  ],

  "tratare-apa": [
    {
      q: "Cum aleg o pompă submersibilă pentru ape uzate cu conținut de solide?",
      a: "Criteriul principal e diametrul de trecere liberă - pentru ape uzate menajere cu solide obișnuite, minim 65-80 mm; pentru stații cu conținut mai mare de deșeuri solide, recomandăm rotor tip 'vortex' sau cu canale largi, care reduce riscul de înfundare față de rotorul închis clasic. Materialul rotorului contează: fontă cu tratament de duritate pentru nisip și particule abrazive. Verificați și puterea motorului față de curba de sarcină (H-Q) a stației și dacă instalația necesită certificare Ex pentru cămine cu risc de acumulare de gaze (metan, H2S). Trimiteți debitul necesar și înălțimea de pompare pentru dimensionare."
    },
    {
      q: "Ce diferență e între o suflantă cu canal lateral și una tip Roots pentru aerarea bazinelor biologice?",
      a: "Suflanta cu canal lateral e potrivită pentru debite mici-medii și presiuni de până la aproximativ 0,5-0,8 bar, funcționează fără ulei, e compactă și are mentenanță redusă - alegerea tipică pentru stații mici și medii. Suflanta Roots (cu lobi) acoperă debite și presiuni mai mari și e mai eficientă la sarcini constante mari, dar necesită tablou de control mai complex și atenuator de zgomot dedicat. Pentru bazine biologice cu nevoie variabilă de oxigen, o soluție cu convertizor de frecvență pe suflantă reduce consumul energetic față de funcționarea simplă pornit/oprit."
    },
    {
      q: "Ce robinet aleg pentru linii cu nămol sau ape cu conținut mare de solide?",
      a: "Robinetul cu cuțit (knife gate) e proiectat special pentru acest tip de fluid: lama traversează linia și poate secționa fibre sau particule fără să blocheze închiderea completă, spre deosebire de un robinet cu bilă sau fluture clasic, care s-ar înfunda rapid. Alegeți varianta cu etanșare bidirecțională dacă presiunea poate veni din ambele sensuri, și corp din fontă sau inox, în funcție de agresivitatea fluidului. Pentru nămol deshidratat sau foarte vâscos, recomandăm și pompe cu șurub excentric în amonte, capabile să transporte fluide cu consistență ridicată fără să piardă debit."
    },
    {
      q: "Ce senzori sunt necesari pentru automatizarea unei stații de epurare?",
      a: "O stație tipică folosește senzori de nivel (ultrasonic sau radar) pentru bazine și cămine de pompare, debitmetre electromagnetice pentru apă și nămol, și senzori de nivel pentru canale deschise sau praguri de măsură. Datele se centralizează într-un sistem SCADA cu PLC și panou HMI, care controlează automat pornirea/oprirea pompelor, dozarea de reactivi și aerarea, în funcție de sarcina biologică. Pentru zone cu risc de gaze explozive (cămine închise, stații de pompare adânci), senzorii și cablajul trebuie certificate ATEX. Vă putem propune o arhitectură de automatizare pornind de la schema stației existente."
    },
    {
      q: "Cât durează livrarea unei pompe submersibile sau a unei piese de schimb critice?",
      a: "Pentru modelele uzuale din portofoliu ținem stoc și livrăm în 24-72h oriunde în țară - important pentru stații unde o defecțiune înseamnă risc de deversare necontrolată. Pentru echipamente specializate (suflante de capacitate mare, pompe cu șurub excentric dedicate, componente SCADA la comandă), termenul obișnuit e de 2-6 săptămâni, în funcție de producător. Dacă aveți o urgență operațională, sunați-ne direct - verificăm disponibilitatea imediată la noi sau la alți furnizori și găsim soluția cea mai rapidă pentru a evita oprirea stației."
    }
  ],

  energie: [
    {
      q: "Ce robineți se folosesc pe liniile de abur de înaltă presiune și ce standarde contează?",
      a: "Pentru abur la parametri ridicați (până la aproximativ 550°C și 400 bar în aplicațiile noastre) folosim robineți cu etanșare metal-metal, corp din oțel aliat rezistent la fluaj termic, dimensionați după PN sau clasa ANSI corespunzătoare presiunii și temperaturii de proiectare a liniei, nu doar presiunii curente de operare. Robineții trebuie testați conform EN 12266 sau API 598, iar pentru servicii critice recomandăm construcție cu capac sudat, fără garnituri care pot ceda la cicluri termice repetate. Trimiteți-ne presiunea și temperatura maximă de proiectare, plus tipul de acționare dorit."
    },
    {
      q: "Ce rol au oalele de condens și cum le aleg?",
      a: "Oala de condens evacuează automat condensatul din rețeaua de abur fără să lase aburul viu să treacă - o funcționare defectuoasă înseamnă fie pierderi de energie, fie apă stagnantă care produce lovituri de berbec și coroziune. Alegerea depinde de aplicație: termodinamice pentru distribuție cu debit variabil, cu plutitor pentru schimbătoare de căldură unde evacuarea continuă e critică, și bimetalice pentru drenaj cu subrăcire. Capacitatea se dimensionează pe baza debitului de condensat estimat și a presiunii diferențiale disponibile - trimiteți-ne aceste date pentru recomandarea potrivită."
    },
    {
      q: "Ce certificări trebuie să aibă o supapă de siguranță pentru un cazan industrial?",
      a: "Supapa de siguranță pentru cazane trebuie certificată conform Directivei Echipamente sub Presiune 2014/68/UE (marcaj CE cu numărul organismului notificat) sau, unde se cere explicit, testată TÜV. Dimensionarea capacității de evacuare se face pe baza debitului maxim de abur al cazanului și a presiunii de reglaj, conform prescripțiilor tehnice ISCIR aplicabile în România instalațiilor sub presiune. O supapă necorespunzător dimensionată sau montată e un motiv frecvent de respingere la verificarea ISCIR periodică. Furnizăm supape cu documentația de certificare necesară pentru punerea în funcțiune și verificările periodice."
    },
    {
      q: "Ce trebuie verificat la un schimbător de căldură pentru un punct termic?",
      a: "Pentru puncte termice și preparare apă caldă menajeră, dimensionarea schimbătorului cu plăci se face pe baza sarcinii termice necesare (kW), temperaturilor de intrare/ieșire pe ambele circuite și a pierderii de presiune admise. Materialul plăcilor (inox 316 sau titan pentru apă cu clor agresiv) și tipul garniturii trebuie alese în funcție de calitatea apei - depunerile de calcar sau coroziunea reduc drastic eficiența în timp. Recomandăm o strategie de curățare periodică (CIP sau demontare mecanică) stabilită din faza de proiectare, ca să nu pierdeți capacitate termică an de an fără să știți de ce."
    },
    {
      q: "Ce informații trimiteți pentru o ofertă de echipamente pentru o centrală sau punct termic?",
      a: "Aveți nevoie să ne trimiteți parametrii de abur sau agent termic (presiune, temperatură, debit), schema P&ID dacă există, tipul de combustibil sau sursă de energie și dacă echipamentul înlocuiește unul existent (model, an fabricație, probleme întâmpinate). Pentru cazane și recipiente sub presiune, menționați dacă instalația e supusă verificărilor ISCIR. Cu aceste date pregătim o ofertă cu specificații complete - pentru piese consumabile din stoc (garnituri, elemente pentru oale de condens) livrăm în 24-72h, iar pentru echipamente noi la comandă termenul e de 2-6 săptămâni."
    }
  ],

  farmaceutic: [
    {
      q: "Ce documentație cer echipamentele pentru camere curate și producție GMP?",
      a: "Pentru validarea unei instalații GMP aveți nevoie minim de certificat de materiale (de regulă inox 316L pentru părțile în contact cu produsul), declarație de conformitate CE, fișă tehnică cu toleranțe și rugozitatea suprafeței, plus documentație de calificare IQ (Installation Qualification) și OQ (Operational Qualification) de la producător. Pentru echipamente sterilizabile în linie (SIP) e nevoie și de datele de rezistență la temperatura și presiunea ciclului de sterilizare. Documentele se anexează la dosarul de validare al liniei și sunt verificate la auditurile de conformitate GMP (EudraLex Volumul 4 sau FDA 21 CFR 211)."
    },
    {
      q: "Ce diferență e între o pompă peristaltică și una cu membrană pentru transfer steril?",
      a: "Pompa peristaltică transportă fluidul printr-un furtun flexibil comprimat de role, fără ca fluidul să atingă vreo componentă mecanică - ideală pentru transfer steril de volume mici-medii, unde contaminarea încrucișată trebuie eliminată complet, schimbând doar furtunul între loturi. Pompa cu membrană din PTFE rezistă la fluide agresive sau cu solvenți și poate funcționa uscat fără deteriorare, fiind utilă pentru transferul de substanțe active sau produse intermediare. Pentru zone cu solvenți inflamabili și certificare ATEX, pompa cu membrană pneumatică e de obicei soluția mai simplă de certificat conform 2014/34/UE."
    },
    {
      q: "Ce înseamnă un robinet aseptic sterilizabil în linie (SIP)?",
      a: "SIP (Sterilization In Place) înseamnă că robinetul poate fi sterilizat cu abur direct pe linie, fără demontare, de regulă la temperaturi peste 121°C, menținute timpul definit de procesul de validare. Construcția trebuie să fie 'self-draining' (fără zone moarte unde se pot acumula reziduuri sau condens), iar garniturile trebuie să reziste la cicluri repetate de temperatură fără să-și piardă elasticitatea sau să elibereze particule. Acești robineți vin însoțiți de certificat GMP și, de multe ori, de rapoarte de testare a duratei de viață a garniturii la cicluri SIP repetate - cereți-le producătorului înainte de instalare."
    },
    {
      q: "Ce trebuie să conțină un caiet de sarcini pentru echipamente destinate unei linii farmaceutice?",
      a: "Un caiet de sarcini complet ar trebui să specifice materialul de contact (de regulă 316L cu certificat de material), rugozitatea suprafeței cerută, standardul de conexiune (Clamp, DIN 11864 pentru aseptic), necesarul de sterilizare (SIP/CIP), clasificarea camerei curate (ISO 14644, de regulă clasa 5-8) în care va funcționa echipamentul, și documentația de calificare așteptată (IQ/OQ, uneori PQ). Cu cât specificați mai clar aceste criterii, cu atât ofertele primite sunt comparabile și evitați diferențe mari de preț cauzate de neînțelegeri privind nivelul de certificare cerut."
    },
    {
      q: "Cât durează livrarea echipamentelor certificate GMP și ce trimitem pentru ofertă?",
      a: "Termenele pentru echipamente farmaceutice certificate GMP sunt de obicei mai lungi decât la echipamentele industriale standard, pentru că producătorul trebuie să emită documentația de calificare specifică lotului - estimați 2-6 săptămâni pentru echipamente la comandă, mai rapid dacă găsim un model deja fabricat în stoc. Pentru ofertă, trimiteți-ne fluidul procesat, debitul necesar, tipul de sterilizare cerut și dacă aveți deja un caiet de sarcini cu standardul de referință. Echipa noastră tehnică verifică disponibilitatea documentației GMP înainte de confirmarea comenzii, ca să nu existe surprize la recepție."
    }
  ],

  chimie: [
    {
      q: "Ce material aleg pentru o pompă care transportă acizi sau baze concentrate?",
      a: "Alegerea depinde de fluid și concentrație: PVDF și polipropilena (PP) rezistă bine la majoritatea acizilor și bazelor la temperaturi moderate și sunt mai ieftine decât metalele speciale, dar au limite de temperatură și presiune. Pentru acizi foarte concentrați sau fluide ultra-pure, PFA (o formă de PTFE prelucrabilă) oferă rezistență chimică aproape universală. Dacă fluidul e periculos și nu vă permiteți nicio scurgere (de exemplu clor lichid sau acizi toxici), pompa magnetică, fără garnitură de ax, elimină riscul de scurgere prin etanșare. Trimiteți-ne fișa de siguranță (SDS) a fluidului și temperatura de operare."
    },
    {
      q: "Când aleg o pompă magnetică în loc de una cu garnitură mecanică clasică?",
      a: "Pompa magnetică transmite mișcarea de rotație printr-un cuplaj magnetic, fără nicio penetrare a axului prin carcasă, deci nu există garnitură care se poate uza sau ceda - risc de scurgere aproape zero. E alegerea potrivită pentru fluide toxice, inflamabile, foarte corozive sau greu de eliminat, unde o scurgere înseamnă cost mare de curățare sau raportare de mediu. Dezavantajul: sensibilitate mai mare la funcționarea 'uscată' (fără fluid), care poate arde lagărele, deci sistemul trebuie protejat cu senzor de nivel sau debit minim. Pentru fluide curate, fără particule abrazive mari, e soluția cea mai sigură pe termen lung."
    },
    {
      q: "Ce robinet rezistă la acizi concentrați și fluide ultra-pure?",
      a: "Robineții cu bilă cu căptușeală PFA oferă rezistență chimică practic universală (comparabilă cu PTFE, dar mai rigidă mecanic) și sunt varianta standard pentru acizi concentrați, produse ultra-pure sau aplicații unde orice contaminare din valvă ar afecta calitatea produsului final. Corpul metalic (oțel carbon sau inox, în funcție de mediul exterior) asigură rezistența mecanică, iar căptușeala PFA face contact cu fluidul. Pentru medii cu solvenți la temperatură ridicată, verificați limitele de temperatură ale PFA-ului (de regulă până la aproximativ 150°C) față de temperatura reală de proces, ca să nu alegeți o soluție subdimensionată termic."
    },
    {
      q: "De ce aleg un schimbător de căldură din titan pentru un proces chimic?",
      a: "Titanul rezistă excelent la coroziune în medii cu cloruri, apă de mare sau soluții oxidante puternice, unde inoxul clasic (chiar și duplex) ar suferi coroziune prin pitting în timp. E o investiție inițială mai mare decât inoxul, dar durata de viață mai lungă în mediile potrivite recuperează diferența de cost pe termen lung, mai ales dacă opririle pentru înlocuire costă producție pierdută. Nu e însă soluția universală - pentru acizi reducători puternici (de exemplu acid clorhidric concentrat) titanul poate coroda rapid, iar acolo alte materiale sunt mai potrivite. Analizăm compatibilitatea pe baza fișei chimice a fluidului."
    },
    {
      q: "Ce informații trimiteți pentru o ofertă de echipamente rezistente chimic?",
      a: "Cel mai important e fișa de siguranță a fluidului (SDS), cu concentrația exactă, temperatura de operare, presiunea din linie și eventualele particule solide în suspensie. Dacă știți deja ce echipament folosiți acum și ce problemă aveți (coroziune prematură, scurgeri, uzură rapidă), spuneți-ne - de multe ori schimbarea unui singur material (de exemplu de la inox standard la duplex sau PVDF) rezolvă problema fără să schimbați tot echipamentul. Pentru piese din stoc livrăm în 24-72h, iar pentru echipamente din materiale speciale la comandă (titan, aliaje speciale) termenul e de 2-6 săptămâni."
    }
  ],

  minerit: [
    {
      q: "Ce face o pompă de tip slurry diferită de o pompă centrifugală standard pentru nămol abraziv?",
      a: "Pompa slurry are rotorul și carcasa construite din aliaje cu duritate mare (de exemplu fontă albă cu crom, cu duritate de peste 600 HB) sau căptușeală din cauciuc natural, special pentru a rezista eroziunii produse de particulele solide din suspensie. Geometria rotorului e de obicei mai deschisă (mai puține palete, canale mai largi) decât la o pompă centrifugală standard, ca să tolereze particule mari fără să se blocheze. Selecția corectă ține cont de concentrația solidelor (procent în greutate), dimensiunea maximă a particulelor și duritatea lor - trimiteți-ne aceste date pentru dimensionarea rotorului și a materialului."
    },
    {
      q: "Ce robinet folosesc pe o linie cu conținut mare de solide sau minereu concentrat?",
      a: "Robineții cu cuțit (knife gate) sunt alegerea standard pentru aceste linii, pentru că lama poate tăia prin acumulările de solide la închidere, spre deosebire de un robinet cu bilă sau fluture, care s-ar bloca rapid. Pentru medii extrem de abrazive recomandăm variante cu corp căptușit (cauciuc sau poliuretan) și lamă din inox dur, care rezistă mai mult decât fonta simplă. Verificați și dacă aveți nevoie de etanșare bidirecțională (presiune din ambele sensuri) sau doar unidirecțională, pentru că această alegere afectează prețul și complexitatea construcției."
    },
    {
      q: "Ce criterii contează la o pompă submersibilă pentru drenaj de mină?",
      a: "Pe lângă rezistența la abraziune a rotorului, o pompă de drenaj pentru galerii sau puțuri trebuie să facă față funcționării intermitente, uneori la adâncimi mari, cu apă ce poate conține nisip, particule fine de minereu și, ocazional, urme de substanțe chimice din procesare. Motorul trebuie să aibă protecție IP68 (imersie continuă) și răcire adaptată mediului submersat, plus senzori de umiditate în carcasă pentru detectarea timpurie a infiltrațiilor. Pentru galerii cu risc de acumulare de gaze (metan), verificați dacă echipamentul electric montat în zonă necesită certificare ATEX."
    },
    {
      q: "Ce hidraulică e necesară pentru utilaje grele de minerit (excavatoare, încărcătoare)?",
      a: "Sistemele hidraulice pentru utilaje de minerit lucrează la presiuni mari (frecvent peste 300-350 bar) și trebuie să reziste la contaminare cu praf și particule fine, principalul motiv de defectare prematură a pompelor și distribuitoarelor hidraulice în acest mediu. Filtrarea uleiului hidraulic la o clasă de curățenie adecvată (conform ISO 4406) e esențială - un ulei contaminat uzează rapid componentele de precizie ale valvelor proporționale. Furnizăm cilindri, pompe și valve de schimb compatibile cu majoritatea utilajelor grele, plus consumabile de filtrare pentru mentenanța preventivă."
    },
    {
      q: "Cât durează livrarea unei piese critice pentru o pompă slurry sau un utilaj de minerit oprit?",
      a: "Pentru rotoare, carcase și garnituri de uzură din gama uzuală ținem stoc și livrăm în 24-72h, pentru că o oprire neplanificată a unei linii de procesare minereu costă mult pe oră. Pentru echipamente construite pe comandă (pompe slurry dimensionate special, cilindri hidraulici cu dimensiuni netipice), termenul e de 2-6 săptămâni. Dacă aveți o urgență de producție, sunați-ne direct cu codul echipamentului sau cu fotografii ale plăcuței - verificăm rapid ce avem disponibil la noi sau la alți furnizori din rețea."
    }
  ],

  constructii: [
    {
      q: "Ce înseamnă indicele EEI la o pompă de circulație și de ce contează?",
      a: "EEI (Energy Efficiency Index) măsoară eficiența energetică a unei pompe de circulație raportată la o pompă de referință - cu cât valoarea e mai mică, cu atât consumul e mai mic pentru același serviciu hidraulic. Regulamentele UE de ecoproiectare (Ecodesign) impun praguri minime de eficiență pentru pompele de circulație vândute în UE, iar pompele moderne cu motor sincron cu magneți permanenți ating EEI sub 0,17-0,20, față de 0,4-0,6 la pompele vechi asincrone. Diferența se traduce direct în factura de energie electrică a clădirii, mai ales la pompe care funcționează continuu în instalații de încălzire centrală."
    },
    {
      q: "Cum aleg un robinet de echilibrare pentru o instalație de încălzire cu mai multe circuite?",
      a: "Robinetul de echilibrare hidraulică reglează debitul pe fiecare circuit, astfel încât toate zonele clădirii să primească agent termic proporțional cu sarcina lor, nu doar cele mai apropiate de pompă. Alegerea se face pe baza debitului de proiectare al fiecărui circuit și a coeficientului de curgere (Kvs) al robinetului - un robinet subdimensionat introduce pierdere de presiune inutilă, unul supradimensionat nu oferă control fin. Robineții moderni cu preselectare digitală permit echilibrarea fără calcule manuale complexe pe șantier, utile mai ales la clădiri mari cu multe circuite."
    },
    {
      q: "Ce vas de expansiune aleg pentru o instalație termică?",
      a: "Vasul de expansiune preia dilatarea agentului termic la încălzire, protejând instalația de suprapresiune. Dimensionarea corectă ține cont de volumul total de apă din instalație, temperatura maximă de lucru, presiunea statică (înălțimea instalației) și presiunea de reglaj a supapei de siguranță - un vas subdimensionat produce descărcări frecvente prin supapă, cu pierdere de agent termic și presiune scăzută la pornirea următoare. Pentru instalații cu temperaturi ridicate, verificați și rezistența membranei la temperatura maximă de vârf, nu doar la temperatura medie de funcționare."
    },
    {
      q: "Ce diferență e între un chiller și o pompă de căldură pentru o clădire comercială?",
      a: "Chillerul produce doar agent răcit, fiind soluția clasică pentru climatizare de vară în clădiri mari sau data center-uri cu sarcină termică mare de evacuat din clădire. Pompa de căldură poate produce atât agent rece, cât și agent cald (reversibilă), fiind eficientă pentru clădiri cu nevoi mixte de încălzire și răcire pe parcursul anului, mai ales dacă vreți să reduceți dependența de combustibili fosili pentru încălzire. Alegerea depinde de sarcina termică de vârf, profilul anual de utilizare și dacă instalația existentă are deja o sursă separată de încălzire."
    },
    {
      q: "Ce echipamente HVAC oferiți pentru un proiect de construcții comercial și ce trimitem pentru ofertă?",
      a: "Pentru proiecte comerciale furnizăm pompe de circulație, grupuri de pompare pentru presurizare, robineți de echilibrare și termostatici, vase de expansiune, chillere și pompe de căldură, plus automatizări BMS pentru control integrat. Pentru o ofertă rapidă avem nevoie de sarcina termică estimată sau calculată (kW), tipul de instalație (bitub, monotub), numărul de circuite/zone și dacă proiectul are deja o schemă de principiu întocmită de proiectant. Pentru echipamente standard din stoc livrăm în 24-72h, ceea ce contează la șantiere cu termene de execuție strânse."
    }
  ],

  automotive: [
    {
      q: "Ce parametri contează la alegerea unui sistem hidraulic pentru o presă de ștanțare caroserie?",
      a: "Parametrii-cheie sunt forța necesară (tone), cursa cilindrului, viteza de apropiere/lucru/retragere și timpul de ciclu cerut de linia de producție - o linie cu 60-80 de bucăți pe oră are cerințe de viteză mult diferite față de una pentru serii mici. Valvele proporționale controlează precizia mișcării, iar acumulatorii hidraulici pot suplimenta debitul în vârfurile de sarcină fără să supradimensionăm pompa principală. Curățenia uleiului hidraulic (clasă ISO 4406) e critică pentru durata de viață a valvelor proporționale - majoritatea defecțiunilor premature vin din contaminare, nu din uzură normală."
    },
    {
      q: "Ce rulmenți se folosesc pe conveioarele și axele robot din liniile de asamblare auto?",
      a: "Pentru conveioare cu viteză constantă și sarcină moderată, rulmenții cu bile radiali acoperă majoritatea aplicațiilor, la un cost redus și mentenanță simplă. Pentru axe de roboți industriali sau puncte cu sarcini combinate (radiale și axiale), rulmenții de precizie (clasă P5/P6) reduc jocul și vibrațiile, ceea ce contează direct pentru precizia de poziționare cerută la sudură sau asamblare automatizată. Lubrifierea corectă și intervalul de relubrifiere trebuie respectate strict conform recomandării producătorului - majoritatea defectărilor premature vin din lubrifiere greșită, nu din alegerea greșită a rulmentului."
    },
    {
      q: "Ce contează la automatizările PLC și SCADA pentru o linie de producție auto?",
      a: "Liniile auto folosesc de regulă PLC-uri cu comunicație industrială standardizată (Profinet, EtherCAT) pentru sincronizare rapidă între stații, iar sistemele de siguranță ale automatizării trebuie proiectate cu nivelul de performanță cerut pentru fiecare funcție de oprire de urgență. SCADA centralizează datele de producție (timp de ciclu, defecte, indicatori de eficiență) pentru raportare către management. Pentru integrare cu linii existente, verificăm compatibilitatea de comunicație înainte de a recomanda un PLC nou, ca să evităm costuri suplimentare de integrare."
    },
    {
      q: "Ce lubrifianți se folosesc pentru procesele de ștanțare și sudură din automotive?",
      a: "Pentru ștanțare, uleiurile de ambutisare se aleg în funcție de tipul de tablă (oțel, aluminiu) și de operația de deformare - un ulei necorespunzător produce rizuri pe suprafața vizibilă a caroseriei sau uzură prematură a matriței. Pentru sudură se folosesc fluide de răcire dedicate circuitelor electrozilor, nu ulei hidraulic obișnuit. Pentru lagăre și reductoare de pe linii, grăsimile speciale rezistă la temperaturi și viteze mari fără să se degradeze rapid. Recomandăm produse Shell pentru majoritatea aplicațiilor, cu fișe tehnice complete pentru documentația de calitate cerută la auditurile auto (IATF)."
    },
    {
      q: "Ce trimitem pentru o ofertă de echipamente destinate unei linii de producție auto?",
      a: "Pentru sisteme hidraulice: forța presei, cursa, viteza necesară și schema hidraulică existentă dacă înlocuiți o componentă. Pentru rulmenți: codul de pe rulment sau desenul tehnic al axului. Pentru automatizări: schema electrică și tipul de comunicație folosit pe linie. Pentru lubrifianți: fișa tehnică a echipamentului unde se aplică. Cu cât detaliile sunt mai precise, cu atât oferta e mai exactă și evităm livrarea unei piese incompatibile - un risc real când o linie oprită costă zeci de mii de euro pe oră. Pentru piese critice din stoc livrăm în 24-72h."
    }
  ],

  metalurgie: [
    {
      q: "Ce senzor de temperatură rezistă lângă un cuptor cu arc electric la peste 1200°C?",
      a: "Pentru temperaturi extreme (uneori până la 1600°C în puncte de măsură apropiate de topitură), folosim termocuple de tip S sau B (platină-rodiu), protejate în teci ceramice sau din materiale refractare, rezistente la șoc termic și la atacul chimic al zgurii. Termorezistențele clasice (Pt100) nu suportă asemenea temperaturi și se folosesc doar în zone mai reci ale procesului (răcire, circuite hidraulice). Poziționarea senzorului și viteza de răspuns contează la fel de mult ca rezistența termică - un senzor prea lent nu surprinde variațiile rapide de temperatură care afectează controlul calității oțelului."
    },
    {
      q: "Ce material rezistă la transportul zgurii și oxizilor la temperaturi ridicate?",
      a: "Pentru pompe slurry care transportă zgură sau oxizi la temperaturi ridicate, rotorul și carcasa trebuie construite din aliaje rezistente simultan la abraziune și la temperatură - fontele cu crom înalt își pierd duritatea peste anumite praguri termice, așa că pentru aplicații fierbinți se preferă adesea căptușeli sau materiale speciale rezistente termic, în funcție de temperatura reală a fluidului. E esențial să ne spuneți temperatura de proces exactă, pentru că diferența dintre 80°C și 200°C schimbă complet recomandarea de material și tip de garnitură."
    },
    {
      q: "Ce cerințe au sistemele hidraulice pentru bascularea cuptoarelor sau operarea laminoarelor?",
      a: "Sistemele hidraulice din zona cuptoarelor lucrează adesea aproape de surse de căldură radiantă intensă, ceea ce impune uleiuri hidraulice cu punct de aprindere ridicat (fluide greu inflamabile) în locul uleiurilor minerale standard, pentru siguranță la incendiu. Cilindrii și garniturile trebuie să reziste la temperatura ambientală ridicată din hală, nu doar la presiunea de lucru. Pentru laminoare, precizia de poziționare a cilindrilor afectează direct toleranța dimensională a produsului laminat, deci valvele proporționale și senzorii de poziție trebuie să aibă rezoluție și repetabilitate ridicate."
    },
    {
      q: "Ce filtre de praf se recomandă pentru halele de procesare metalurgică?",
      a: "Depinde de tipul de particule generate: pentru praf fin din tăiere sau șlefuire, filtrele cu cartuș oferă suprafață mare de filtrare într-un spațiu compact; pentru volume mari de gaz cu particule mai grosiere (deprăfuire cuptor), filtrele cu saci rezistă mai bine la temperaturi ridicate ale gazului evacuat. Materialul mediului filtrant (poliester, fibră de sticlă, membrană PTFE) se alege în funcție de temperatura gazului și de proprietățile particulelor (abrazivitate, higroscopicitate). Un filtru subdimensionat termic se poate deteriora rapid, chiar dacă are eficiență bună de filtrare pe hârtie."
    },
    {
      q: "Ce lubrifianți rezistă la temperaturile ridicate din zona laminoarelor?",
      a: "Lagărele expuse la căldură radiantă sau la temperaturi de proces ridicate au nevoie de grăsimi sintetice speciale, care își păstrează consistența și nu se oxidează rapid la peste 150-200°C, spre deosebire de grăsimile minerale standard, care se degradează și pierd capacitatea de lubrifiere. Intervalul de relubrifiere trebuie redus față de aplicațiile la temperatură normală, pentru că temperatura accelerează degradarea lubrifiantului. Furnizăm produse Klüber pentru aceste aplicații, cu fișe tehnice care indică exact limitele de temperatură și intervalele recomandate."
    }
  ],

  ciment: [
    {
      q: "Ce protecție IP trebuie să aibă motoarele și reductoarele într-o fabrică de ciment cu praf abraziv?",
      a: "Pentru zonele cu praf de ciment (moară, transportoare, siloz), recomandăm minim protecție IP65 (etanșare completă la praf, protecție la jeturi de apă) pentru motoarele electrice, iar pentru echipamente expuse la spălare cu presiune, IP66. Reductoarele trebuie să aibă etanșări radiale rezistente la praf abraziv fin, care altfel pătrunde și accelerează uzura rulmenților interni. Răcirea contează la fel de mult ca etanșarea - un motor complet închis se răcește mai greu, deci puterea utilă disponibilă poate fi mai mică decât la un motor deschis echivalent; verificați factorul de serviciu la temperatura reală din hală, nu doar la temperatura de catalog."
    },
    {
      q: "Ce filtre de praf sunt potrivite pentru captarea prafului de ciment?",
      a: "Filtrele cu saci sunt soluția cea mai răspândită pentru volume mari de gaz cu praf de ciment, cu material filtrant din poliester sau, pentru temperaturi mai ridicate, fibră de sticlă cu membrană PTFE, care crește eficiența de captare și reduce frecvența de curățare. Filtrele cu cartuș sunt potrivite pentru debite mai mici sau spații reduse, cu suprafață de filtrare mare într-un volum compact. Dimensionarea corectă (raportul aer/pânză) și încadrarea în pragurile de emisie conform BAT/BREF contează atât pentru conformitatea de mediu, cât și pentru durata de viață a sacilor de filtrare."
    },
    {
      q: "Cât de des trebuie schimbate curelele de transmisie la mori și concasoare?",
      a: "Nu există un interval universal - depinde de sarcina transmisă, viteza curelei, temperatura din hală și expunerea la praf abraziv, care accelerează uzura suprafeței de contact. Ca reper general, verificați curelele la fiecare oprire planificată pentru fisuri, luciu pe suprafața de contact (semn de alunecare) sau întindere excesivă, și înlocuiți-le preventiv înainte de cedare completă - o curea ruptă neplanificat oprește producția, nu doar costă prețul curelei. O curea sincronă (dințată) în locul uneia trapezoidale poate reduce alunecarea și crește durata de viață la sarcină variabilă."
    },
    {
      q: "Ce rulmenți sunt potriviți pentru mori de ciment și concasoare?",
      a: "Aceste echipamente au sarcini mari, combinate (radiale și axiale), și funcționează adesea la viteze relativ joase, cu vibrații puternice - rulmenții oscilatori cu role (care tolerează dezalinierea axului) sunt alegerea standard pentru lagărele principale ale morilor, iar rulmenții cu role conice sau cilindrice acoperă alte puncte de sprijin, în funcție de tipul de sarcină. Lubrifierea și etanșarea împotriva prafului contează la fel de mult ca alegerea tipului de rulment - majoritatea defectărilor premature vin din contaminare cu praf abraziv, nu din suprasarcină. Recomandăm inspecții periodice de vibrații pentru detectarea uzurii înainte de cedare."
    },
    {
      q: "Ce trimitem pentru o ofertă de echipamente pentru o fabrică de ciment?",
      a: "Pentru filtre: debitul de gaz, temperatura, tipul de praf și pragul de emisie cerut. Pentru curele și rulmenți: codul de pe echipamentul existent sau desenul tehnic al axului/roții. Pentru suflante de transport pneumatic: debitul de material, distanța de transport și presiunea necesară. Pentru automatizări: tipul de senzor și schema de proces existentă. Cu cât informația e mai completă, cu atât oferta e mai aproape de nevoia reală, iar pentru consumabile uzuale (saci de filtrare, curele, rulmenți) din stoc, livrarea se face de obicei în 24-72h."
    }
  ],

  hartie: [
    {
      q: "Ce diferență e între o pompă de pastă centrifugală și una pentru consistență medie (MC)?",
      a: "Pompa centrifugală standard funcționează bine pentru pastă la consistență joasă (sub aproximativ 4-6%), unde fibra se comportă practic ca un fluid. Peste acest prag, pasta formează o rețea de fibre care se comportă mai degrabă ca un solid, iar o pompă centrifugală clasică nu mai poate 'prinde' fluidul la aspirație. Pompele pentru consistență medie (MC), de regulă 8-15%, folosesc un rotor special care rupe local rețeaua de fibre, permițând pomparea eficientă fără diluare suplimentară cu apă - un avantaj important pentru consumul de energie și apă al fabricii."
    },
    {
      q: "Ce precizie trebuie să aibă un senzor de consistență pentru pastă celulozică?",
      a: "Consistența pastei afectează direct calitatea hârtiei finale (gramaj, rezistență, uniformitate), iar o abatere de doar 0,3-0,5% poate fi vizibilă în produsul final sau poate declanșa reglaje greșite în aval pe mașina de hârtie. Senzorii moderni de consistență inline oferă măsurare continuă, fără prelevare manuală de probe. Poziționarea senzorului contează - trebuie montat într-o zonă cu flux reprezentativ, fără zone moarte sau turbulențe excesive care ar distorsiona citirea. Pentru selecție, trimiteți-ne intervalul de consistență și tipul de pastă (chimică, mecanică, reciclată)."
    },
    {
      q: "Ce material rezistă la abraziunea fibrelor și la chimicalele din procesul Kraft?",
      a: "Fibra celulozică e abrazivă mecanic, iar ciclul Kraft de recuperare a chimicalelor implică medii alcaline și, la albire, agenți oxidanți - o combinație dură pentru materialele componentelor umede. Inoxul austenitic 316L acoperă multe aplicații generale, dar pentru zonele cu expunere la agenți de albire, inoxul duplex sau aliaje superioare rezistă mai bine la coroziunea prin pitting. Pentru pompele care transportă pastă cu nisip sau impurități abrazive, recomandăm rotoare cu tratament de suprafață sau materiale dure la zona de aspirație, unde uzura e cea mai rapidă."
    },
    {
      q: "Ce schimbător de căldură recomandați pentru recuperarea căldurii din apele de proces?",
      a: "Schimbătoarele cu plăci sunt alegerea tipică pentru recuperarea căldurii din efluenți sau condensat, pentru că oferă suprafață mare de transfer termic într-un spațiu compact și permit demontarea pentru curățare atunci când apar depuneri organice sau fibre fine. Materialul plăcilor se alege în funcție de compoziția chimică a apei de proces - inox 316L pentru majoritatea aplicațiilor, titan dacă apa conține concentrații ridicate de clorură. Dimensionarea corectă a suprafeței de transfer, pe baza debitului și diferenței de temperatură disponibile, determină cât de mult combustibil sau abur puteți economisi anual la uscare."
    },
    {
      q: "Ce echipamente pentru vidul de deshidratare pe mașina de hârtie oferiți?",
      a: "Pentru secțiunea de deshidratare (cutii de vid sub sita mașinii de hârtie), pompele de vid trebuie dimensionate pe baza debitului de aer necesar la nivelul de vid țintă pentru fiecare zonă a mașinii - subdimensionarea reduce eficiența deshidratării și crește consumul de energie la uscarea ulterioară. Pompele inelare cu lichid sunt frecvent folosite pentru acest serviciu, datorită toleranței la umiditate și la particulele fine antrenate din procesul de fabricație. Trimiteți-ne nivelul de vid necesar pe fiecare zonă și debitul de aer estimat pentru dimensionarea corectă."
    }
  ],

  logistica: [
    {
      q: "Ce clasă de eficiență trebuie să aibă motoarele pentru conveioarele dintr-un centru logistic?",
      a: "Conform Regulamentului (UE) 2019/1781 privind ecoproiectarea motoarelor electrice, majoritatea motoarelor noi trebuie să respecte minim clasa IE3, iar pentru anumite game de putere (aproximativ 75-200 kW, motoare 2-4-6 poli), IE4 e obligatoriu din 2023. Pentru conveioare care funcționează aproape continuu, diferența de eficiență între IE3 și motoarele vechi asincrone se traduce direct în factura de energie - la un centru cu sute de motoreductoare active permanent, economia anuală poate fi semnificativă. Recomandăm și verificarea factorului de sarcină real față de puterea nominală, pentru că un motor supradimensionat funcționează ineficient indiferent de clasă."
    },
    {
      q: "Ce protecție IP trebuie să aibă senzorii și componentele electrice de pe liniile de sortare?",
      a: "Pentru zone cu praf din ambalaje (carton, folie) sau posibile stropiri la spălare, IP54 sau IP55 acoperă majoritatea aplicațiilor pe conveioare interioare. Pentru rampe expuse la intemperii sau zone de spălare cu presiune, recomandăm IP65-IP66. Senzorii de proximitate și barierele fotoelectrice se aleg și în funcție de distanța de detecție necesară și de viteza liniei - la sortare rapidă (mii de colete pe oră), timpul de răspuns al senzorului contează la fel de mult ca protecția mecanică, pentru că un senzor prea lent ratează detecția la viteze mari."
    },
    {
      q: "Ce rol are un convertizor de frecvență pe un conveior de sortare?",
      a: "Convertizorul de frecvență permite pornirea și oprirea lină a conveiorului, fără șoc mecanic asupra transmisiei și coletelor, reglarea vitezei în funcție de volumul de trafic din acel moment al zilei și, nu în ultimul rând, economie de energie la sarcină parțială. Pentru linii de sortare de mare capacitate, sincronizarea vitezei între segmente adiacente prin convertizoare comandate central evită acumulările sau golurile pe bandă. Alegerea convertizorului potrivit ține cont de puterea motorului, curentul de pornire admis pe rețeaua electrică a clădirii și tipul de comunicație folosit pentru integrare cu sistemul central de control."
    },
    {
      q: "Ce motoreductor aleg pentru un conveior cu funcționare continuă 24/7?",
      a: "Pentru funcționare continuă, motoreductoarele trebuie dimensionate cu factor de serviciu adecvat, nu la limită, pentru a evita supraîncălzirea și uzura prematură a angrenajelor pe termen lung. Recomandăm minim clasă IE3 pentru partea electrică, o carcasă cu protecție IP54/55 pentru mediul din depozit și verificarea raportului de reducere față de viteza liniară dorită a benzii. Mentenanța preventivă (verificare ulei reductor, vibrații, temperatura lagărelor) reduce semnificativ riscul opririlor neplanificate - la un centru care procesează mii de colete pe oră, fiecare minut de oprire are impact direct asupra livrărilor programate."
    },
    {
      q: "Ce trimitem pentru o ofertă de echipamente pentru un centru logistic nou sau o extindere?",
      a: "Pentru motoare și motoreductoare: puterea necesară, raportul de reducere, viteza liniei și mediul de funcționare (temperatură, praf, umiditate). Pentru automatizări: numărul de puncte de sortare, tipul de senzori doriți și schema de comunicație a sistemului central. Pentru pneumatică: presiunea de aer disponibilă și numărul de cicluri pe oră. Cu aceste date pregătim o ofertă completă - pentru componente standard SEW și Siemens ținem stoc pentru cele mai cerute dimensiuni și livrăm în 24-72h, esențial pentru un centru care nu-și permite oprire prelungită."
    }
  ],

  biogaz: [
    {
      q: "Ce pompă rezistă la transportul substratului cu fibre și paie dintr-un digestor de biogaz?",
      a: "Substratul agricol (gunoi de grajd, siloz, resturi vegetale) conține fibre lungi și corpuri străine ocazionale, care blochează rapid o pompă centrifugală standard. Pompele cu șurub excentric sau cu lobi tolerează aceste particule și mențin un debit constant chiar și la vâscozitate ridicată, fiind alegerea standard pentru alimentarea și recircularea digestorului. Pentru substrat foarte fibros, recomandăm și un sistem de tocare/mărunțire în amonte de pompă, care reduce riscul de blocare și uzura excesivă a rotorului. Trimiteți-ne tipul de substrat și procentul de materie uscată pentru dimensionarea corectă."
    },
    {
      q: "Ce materiale rezistă la H2S în instalațiile de biogaz?",
      a: "Hidrogenul sulfurat (H2S) rezultat din fermentarea anaerobă e coroziv pentru multe metale obișnuite, mai ales combinat cu umiditatea din biogaz, care formează acid sulfuros. Pentru componentele expuse direct (valve, senzori, conducte din zona digestorului sau desulfurizării), recomandăm inox rezistent la coroziune sau materiale plastice compatibile (PVC, PE, PP pentru conducte), în funcție de concentrația de H2S și temperatura de proces. Pentru concentrații mari de H2S, e util să vă raportați la principiile standardului ISO 15156 (rezistență la medii cu sulfuri), folosit de obicei pentru selecția materialelor în servicii 'sour' din industria de gaz."
    },
    {
      q: "Ce zonă ATEX se aplică unui digestor de biogaz și ce echipamente trebuie certificate?",
      a: "Spațiul de sub capacul digestorului, unde se acumulează biogaz (în principal metan), e de regulă clasificat ca zonă cu risc de explozie, cu zona 1 sau 2 în funcție de cât de frecvent poate ajunge gaz acolo în condiții normale sau anormale de funcționare - clasificarea exactă se face în studiul de zonare al proiectantului instalației. Toate echipamentele electrice montate în aceste zone (senzori de nivel, agitatoare submersibile, iluminat) trebuie certificate conform Directivei 2014/34/UE, cu marcaj corespunzător zonei și grupului de gaz. Verificați clasificarea din proiect înainte de a comanda echipamentul."
    },
    {
      q: "Ce senzori sunt esențiali pentru monitorizarea procesului de fermentare anaerobă?",
      a: "pH-ul e indicatorul principal al stabilității procesului - o scădere bruscă poate semnala acumulare de acizi grași volatili și risc de acidificare a digestorului, care oprește practic producția de biogaz dacă nu e corectată la timp. Alături de pH, senzorii de temperatură (fermentarea mezofilă sau termofilă necesită control strict, cu variații de maxim 1-2°C) și de nivel în digestor completează pachetul minim de monitorizare. Pentru instalații mai avansate, analizoarele de compoziție a biogazului (metan, CO2, H2S) ajută la optimizarea alimentării și la protejarea motorului de cogenerare."
    },
    {
      q: "Ce agitator aleg pentru amestecarea substratului într-un digestor?",
      a: "Agitatoarele submersibile se dimensionează pe baza volumului digestorului, vâscozității substratului și a formării eventuale a unui strat de plutire (crustă) la suprafață, care necesită putere suplimentară de amestecare pentru a fi spartă periodic. Materialul elicei și al carcasei trebuie să reziste mediului coroziv cu H2S, iar motorul submersibil trebuie certificat ATEX dacă agitatorul funcționează în spațiul cu biogaz al digestorului. O amestecare insuficientă duce la sedimentare, formare de crustă și scăderea producției de biogaz - trimiteți-ne dimensiunile digestorului și tipul de substrat pentru recomandarea puterii necesare."
    }
  ],

  naval: [
    {
      q: "De ce se folosește bronz sau CuNi pentru pompe și robineți în aplicații navale?",
      a: "Apa de mare e extrem de corozivă pentru oțelul carbon și chiar pentru unele inoxuri standard (risc de coroziune prin pitting și fisurare în prezența clorurilor). Bronzul și aliajele cupru-nichel (CuNi, de regulă 90/10) rezistă bine la coroziune în apă de mare și, în plus, CuNi are proprietăți naturale anti-biofouling, care reduc depunerea de scoici și alge pe suprafețele interioare, menținând eficiența hidraulică a conductelor pe termen lung. Pentru componente cu solicitare mecanică mai mare (axe, rotoare de pompă), inoxul duplex e o alternativă cu rezistență mecanică superioară și bună rezistență la cloruri."
    },
    {
      q: "Ce certificări trebuie să aibă echipamentele pentru o navă (Lloyd's, DNV, BV)?",
      a: "Societățile de clasificare (Lloyd's Register, DNV, Bureau Veritas) verifică și certifică echipamentele critice de la bord - pompe, robineți, sisteme de stingere incendii - conform regulilor proprii de clasă, care de multe ori depășesc cerințele industriale standard prin teste suplimentare de vibrații, șoc și funcționare la înclinare. Certificatul de clasă e obligatoriu pentru omologarea navei și trebuie să corespundă exact societății sub care nava e înregistrată - un certificat de la altă societate, chiar echivalent tehnic, poate să nu fie acceptat direct. Verificați cu șantierul sau armatorul ce societate de clasă se aplică."
    },
    {
      q: "Ce sisteme hidraulice se folosesc pentru echipamentele de punte (vinciuri, macarale)?",
      a: "Sistemele hidraulice de punte funcționează în condiții dure - expunere la apă sărată, vibrații de la mișcarea navei și temperaturi variabile - deci componentele (cilindri, garnituri, valve) trebuie protejate corespunzător împotriva coroziunii, de regulă cu acoperiri speciale sau materiale rezistente la mediul marin. Dimensionarea grupului hidraulic depinde de sarcina maximă de ridicat sau tras, viteza de operare cerută și numărul de funcții simultane. Pentru echipamente critice de siguranță (ancoră, remorcare), redundanța sistemului hidraulic e adesea o cerință a societății de clasificare, nu doar o recomandare."
    },
    {
      q: "Ce pompe se folosesc pentru sistemele de balast și răcire cu apă de mare?",
      a: "Pompele de balast trebuie să facă față unor debite mari la presiuni moderate, cu toleranță la apă de mare care poate conține nisip sau sedimente fine, mai ales în porturi. Pompele centrifugale autoamorsante din bronz sau cu carcasă din fontă cu căptușeală anticorozivă sunt alegerea standard pentru acest serviciu, iar pentru circuitele de răcire ale motoarelor principale, materialul trebuie să reziste inclusiv la temperatura de evacuare a apei de răcire. Verificați și cerințele societății de clasă privind redundanța (de regulă minim două pompe de balast independente) înainte de a stabili configurația finală."
    },
    {
      q: "Ce trimitem pentru o ofertă de echipamente pentru un proiect naval sau de șantier?",
      a: "Pentru pompe și robineți: debitul, presiunea, fluidul (apă de mare, apă dulce, combustibil), materialul cerut de caietul de sarcini și societatea de clasificare sub care nava e înregistrată. Pentru hidraulica de punte: sarcina maximă, viteza de operare și schema hidraulică existentă. Termenele de livrare pentru echipamente navale certificate pot fi mai lungi decât la echipamente industriale standard (2-6 săptămâni), din cauza documentației suplimentare cerute de societatea de clasă - pentru proiecte cu termen strâns, anunțați-ne din timp ca să verificăm cea mai rapidă opțiune de certificare și livrare."
    }
  ]
};

export function getIndustryFaq(slug) {
  return industryFaqs[slug] || [];
}
