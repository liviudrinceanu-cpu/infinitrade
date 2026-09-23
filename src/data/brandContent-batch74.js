// Batch 74 - Branduri-500 val 4 (sept. 2026): Rittmeyer, SENSY, SOR Controls Group, Seneca, Solinst, Vögtlin Instruments, Römheld, EVAPCO, REMBE.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch74 = {
  rittmeyer: {
    name: "Rittmeyer",
    headquarters: "Baar, Elveția",
    overview: `Rittmeyer este un producător elvețian de instrumentație de măsurare și sisteme de automatizare pentru infrastructuri de apă și energie, cu sediul la Baar, în Elveția. Compania dezvoltă soluții pentru măsurarea debitului la turbinele hidroelectrice, în canale deschise, în conducte sub presiune și la deversoare, alături de platforme software pentru conducerea proceselor din stațiile de tratare a apei. Face parte din BRUGG Group și declară peste 20.000 de instalații în funcțiune la nivel mondial. Pentru piața din România putem oferta senzori de debit și nivel plus platforma de automatizare RITAPP pentru operatorii de apă și hidroenergie.

Ce diferențiază Rittmeyer e concentrarea pe metode de măsurare fără piese în mișcare: măsurare ultrasonică a debitului prin timp de propagare în conducte, metoda Winter-Kennedy pentru debitul din turbine și senzori de nivel fără întreținere pentru canale deschise. Compania oferă și module de monitorizare — detecție de scurgeri, calitate a apei potabile, eficiență turbine și pompe — integrate într-o singură platformă software, de la senzor la interfața de operare.

Pentru operatorii români de apă și hidroenergie, Rittmeyer are sens la baraje mari, stații de pompare pe distanțe lungi și rețele de distribuție unde pierderile trebuie localizate rapid. Proiectele necesită dimensionare punct cu punct și integrare cu sistemul SCADA existent.`,
    whyChoose: [
      "Măsurare ultrasonică a debitului fără piese în mișcare, cu funcționare descrisă de producător drept stabilă și fără întreținere periodică",
      "Metoda Winter-Kennedy pentru debitul din turbine hidroelectrice, calibrată direct pe geometria camerei spirale a fiecărei instalații",
      "Platformă RITAPP unică pentru automatizare, monitorizare și alarmare, cu arhitectură modulară care poate crește odată cu instalația",
      "Peste 20.000 de instalații Rittmeyer raportate în funcțiune la nivel mondial, majoritatea în sectorul apă și hidroenergie",
      "Parte din BRUGG Group, cu acces la resursele de inginerie ale unui grup elvețian specializat în infrastructură critică"
    ],
    keyProducts: [
      {
        name: "Măsurare debit prin metoda Winter-Kennedy",
        description: "Sistem dedicat măsurării debitului la turbinele hidroelectrice, bazat pe diferența de presiune dintre două puncte din camera spirală, calibrat individual pentru fiecare geometrie de instalație. Metoda e recunoscută în sectorul hidroenergetic pentru precizie ridicată fără piese suplimentare în calea apei. Rittmeyer livrează senzorii de presiune diferențială, cablarea și software-ul de calcul al debitului, integrate cu sistemul de control al centralei. Aplicabil și la retehnologizarea turbinelor existente, unde se recalibrează relația debit-presiune după modificarea rotorului."
      },
      {
        name: "Măsurare ultrasonică a debitului în conducte",
        description: "Determină debitul prin timpul de propagare a impulsurilor ultrasonice între traductoare montate pe conductă, fără a perturba curgerea fluidului. Producătorul descrie soluția drept stabilă în timp și fără piese mobile expuse uzurii, potrivită pentru conducte de aducțiune, stații de pompare și rețele de distribuție a apei potabile. Se folosește și pentru bilanțul de debit pe rețele extinse, unde diferența dintre debitul intrat și cel facturat ajută la localizarea pierderilor. Montajul se poate face pe conducte existente, fără întreruperea completă a exploatării, în funcție de diametrul și materialul acestora."
      },
      {
        name: "RITAPP — platformă de automatizare și conducere a proceselor",
        description: "Aplicație software modulară pentru conducerea proceselor din stațiile de tratare a apei, hidrocentrale și rețele de distribuție, care reunește achiziția de date de la senzorii de debit și nivel, alarmarea și interfața de operare într-un singur mediu. Arhitectura scalabilă permite pornirea de la o singură stație și extinderea ulterioară pe măsură ce rețeaua crește. Se integrează cu modulele de monitorizare a calității apei potabile, detecție a scurgerilor și supraveghere a eficienței turbinelor și pompelor, oferind operatorului o singură interfață pentru instalații altfel dispersate geografic."
      }
    ],
    industries: [
      "Alimentare cu apă — automatizare stații de tratare și pompare",
      "Hidroenergie — măsurare debit la turbine și monitorizare eficiență",
      "Tratarea apelor uzate — conducere procese și monitorizare canale",
      "Distribuție apă potabilă — detecție scurgeri și monitorizare calitate",
      "Irigații — măsurare debit în canale deschise și conducte"
    ],
    infinitrade: `Pentru Rittmeyer lucrăm din surse publice ale producătorului, așa că vă spunem direct ce putem și ce nu putem confirma din capul locului: nu avem date proprii despre stocuri sau despre configurațiile software instalate la fiecare proiect. Aducem senzorii de debit și nivel, precum și modulele platformei RITAPP, la comandă prin canale de aprovizionare din spațiul UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii de către producător. Pentru o ofertă corectă avem nevoie de tipul instalației (turbină, conductă, canal deschis), diametrul sau geometria punctului de măsură și, dacă există, sistemul SCADA cu care trebuie integrată soluția. Fiecare comandă se configurează pe proiect, așa că nu operăm cu stoc propriu pentru acest brand.`,
    limitation: "Nu putem confirma configurarea sau punerea în funcțiune a platformei software RITAPP, care rămâne în sarcina echipei de inginerie a producătorului.",
    productCodes: [
      { code: "Metoda Winter-Kennedy", description: "măsurare debit la turbine hidroelectrice, calibrată pe camera spirală" },
      { code: "Măsurare ultrasonică debit conducte", description: "determinare debit prin timp de propagare, fără piese mobile" },
      { code: "Măsurare debit canale deschise", description: "monitorizare nivel și debit pentru canale și deversoare" },
      { code: "Măsurare debit la deversoare", description: "calcul debit pe baza nivelului la creasta deversorului" },
      { code: "RITAPP", description: "platformă software de automatizare și conducere procese" },
      { code: "PLDS", description: "monitorizare conducte sub presiune, detecție timpurie a anomaliilor" },
      { code: "Detecție scurgeri și minimizare pierderi", description: "analiză pe zone pentru localizarea pierderilor din rețea" },
      { code: "Monitorizare calitate apă potabilă", description: "supraveghere online a parametrilor de calitate" },
      { code: "Monitorizare skew la vane/stavilare", description: "detecție funcționare asimetrică la vane și stavilare" },
      { code: "Monitorizare sedimente", description: "supraveghere online a concentrației de sedimente" },
      { code: "Monitorizare rețele de canalizare", description: "transparență operațională pentru protecția apelor" },
      { code: "Monitorizare eficiență turbine și pompe", description: "supraveghere randament integrată cu măsurarea debitului" },
      { code: "Senzori de nivel pentru canale deschise", description: "măsurare nivel fără întreținere periodică" },
      { code: "Module de alarmare de proces", description: "notificări pentru abateri de la parametrii normali" }
    ],
    faq: [
      { q: "Ce produce Rittmeyer?", a: "Rittmeyer produce instrumentație de măsurare a debitului și nivelului și sisteme de automatizare pentru infrastructuri de apă și hidroenergie — de la turbine hidroelectrice la stații de tratare și rețele de distribuție. Compania e parte din BRUGG Group și are sediul în Elveția." },
      { q: "Cum aleg soluția Rittmeyer potrivită pentru instalația mea?", a: "Alegerea depinde de tipul punctului de măsură: pentru turbine se folosește metoda Winter-Kennedy, pentru conducte sub presiune măsurarea ultrasonică, iar pentru canale deschise sau deversoare senzori de nivel dedicați. Trimiteți-ne geometria instalației și sistemul SCADA existent, iar noi verificăm compatibilitatea cu producătorul înainte de ofertă." },
      { q: "Livrați echipamente Rittmeyer în România și cât durează?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de confirmarea producătorului pentru configurația exactă a proiectului. Nu există disponibilitate din depozit propriu pentru aceste echipamente, fiind soluții configurate pe fiecare instalație." },
      { q: "Ce informații trebuie să trimit pentru o ofertă de instrumentație Rittmeyer?", a: "Aveți nevoie să precizați tipul aplicației (turbină, conductă, canal deschis sau deversor), diametrul sau geometria punctului de măsură, condițiile de mediu și, dacă există, sistemul de automatizare cu care trebuie integrată soluția." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Rittmeyer — Messtechniklösungen", url: "https://rittmeyer.com/loesungen/messtechnikloesungen", publisher: "Rittmeyer AG", accessed: "2026-09-23" },
      { title: "Rittmeyer — Überwachung und Alarmierung", url: "https://rittmeyer.com/loesungen/ueberwachung-und-alarmierung", publisher: "Rittmeyer AG", accessed: "2026-09-23" },
      { title: "Rittmeyer — Startseite", url: "https://www.rittmeyer.com", publisher: "Rittmeyer AG", accessed: "2026-09-23" }
    ]
  },
  sensy: {
    name: "SENSY",
    headquarters: "Jumet, Belgia",
    certifications: [ "CE, CSA, ATEX, IECEx — certificări pentru montaj în zone industriale și cu risc de explozie", "ISO 376 — standard pentru traductoare de referință folosite la etalonare" ],
    overview: `SENSY este un producător belgian de traductoare de forță, cuplu și cântărire, cu fabrica la Jumet, lângă Charleroi. Gama acoperă celule de sarcină pentru compresiune și tracțiune, load pin-uri pentru macarale și utilaje de ridicare, traductoare de cuplu static și rotativ, celule de cântărire pentru silozuri și rezervoare, precum și traductoare de referință pentru etalonare metrologică. Pentru piața din România putem oferta din gama de senzori de forță și cuplu pentru aplicații industriale, marine și de ridicare.

Ce diferențiază SENSY e plaja foarte largă de capacități acoperite cu aceeași familie de principii constructive: de la 10 N (1 kg) până la 50 MN (5.000 tone) la celulele de sarcină, și de la 1 Nm până la 1.000 kNm la traductoarele de cuplu. Compania produce și variante speciale — load pin-uri subacvatice pentru adâncimi de până la 7.500 m și versiuni miniaturale cu diametrul de la 7 mm — pentru aplicații unde senzorii standard nu încap sau nu rezistă. Traductoarele de referință, calibrate după ISO 376, EN 12390-4 și ASTM E74, o plasează în segmentul metrologiei industriale, alături de alți producători europeni de celule de sarcină de precizie.

Pentru clienții din România, SENSY are sens la macarale și utilaje de ridicare unde se cere limitare de sarcină certificată, la platforme marine și offshore, și în laboratoare de metrologie care au nevoie de etaloane de forță trasabile. Proiectele cu load pin-uri sau celule de cântărire pentru silozuri necesită de regulă dimensionare pe desenul mecanic al clientului.`,
    whyChoose: [
      "Plajă de capacități de la 10 N la 50 MN pentru celulele de sarcină, acoperind atât laboratorul, cât și macaralele grele",
      "Load pin-uri disponibile în variante subacvatice, redundante sau wireless, pentru aplicații unde accesul la senzor e limitat",
      "Traductoare de referință calibrate după ISO 376, EN 12390-4 și ASTM E74, potrivite pentru etalonare metrologică",
      "Certificări CE, ATEX și IECEx pentru montaj în zone cu risc de explozie",
      "Fabricație în Belgia, cu gamă completă de la senzor la afișajul și limitatorul de sarcină asociat"
    ],
    keyProducts: [
      {
        name: "Celule de sarcină seria 5000/5600",
        description: "Traductoare de forță pentru compresiune și tracțiune, disponibile în variante de tip disc, tip S sau pancake, cu capacități care acoperă intervalul de la câțiva kilograme până la sute de tone. Se folosesc la bancuri de testare, sisteme de cântărire industrială și verificarea sarcinilor la structuri metalice. Construcția permite montaj între componente mecanice fără modificarea geometriei existente a instalației, iar semnalul de ieșire este compatibil cu amplificatoarele și afișajele din gama proprie SENSY."
      },
      {
        name: "Load pin-uri pentru macarale și utilaje de ridicare",
        description: "Bolțuri instrumentate care înlocuiesc bolțul mecanic standard dintr-o macara sau utilaj de ridicare, măsurând sarcina direct în punctul de articulație, fără elemente suplimentare montate extern. Disponibile în variante custom, redundante pentru siguranță sporită, subacvatice pentru adâncimi de până la 7.500 m și miniaturale cu diametrul de la 7 mm. Unele variante au certificare SIL CL3, relevantă pentru sistemele de limitare a sarcinii integrate în automatizarea macaralei."
      },
      {
        name: "Traductoare de cuplu static, reacție și rotativ",
        description: "Măsoară cuplul mecanic pe un domeniu de la 1 Nm la 1.000 kNm, în configurații statice, de reacție sau rotative cu transmisie fără contact a semnalului. Se folosesc la bancuri de testare pentru motoare și reductoare, verificarea cuplului de strângere la asamblări critice și controlul proceselor de producție. Alegerea configurației depinde de tipul aplicației — un traductor rotativ e necesar acolo unde arborele se rotește continuu în timpul măsurătorii."
      }
    ],
    industries: [
      "Ridicare și macarale — limitare de sarcină certificată SIL",
      "Marină și offshore — load pin-uri subacvatice",
      "Metrologie și laborator — etaloane de forță trasabile ISO 376",
      "Automotive — bancuri de testare cuplu și forță",
      "Construcții civile — verificare sarcini la structuri metalice"
    ],
    infinitrade: `Pentru gama SENSY plecăm de la informațiile publice disponibile pe site-ul producătorului și spunem clar ce am putut verifica: capacitățile de măsură, certificările și tipurile de senzori din gamă, fără date proprii despre stocul curent. Aducem celulele de sarcină, load pin-urile și traductoarele de cuplu la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea producătorului. Pentru ofertă avem nevoie de capacitatea nominală, tipul de montaj (compresiune, tracțiune, bolț de macara) și, dacă e cazul, cerința de certificare pentru zonă cu risc de explozie. Variantele custom sau subacvatice se comandă individual pentru fiecare proiect, fără disponibilitate din depozit propriu.`,
    limitation: "Nu putem confirma calibrarea sau etalonarea la fața locului pentru traductoarele de referință, serviciu oferit direct de rețeaua metrologică a producătorului.",
    productCodes: [
      { code: "5000", description: "celulă de sarcină compresiune/tracțiune" },
      { code: "5100", description: "celulă de sarcină tip disc" },
      { code: "5300", description: "celulă de sarcină industrială" },
      { code: "5560", description: "celulă de sarcină tip S" },
      { code: "5600", description: "celulă de sarcină de capacitate mare" },
      { code: "2600", description: "celulă de sarcină compactă" },
      { code: "2960", description: "celulă de sarcină pentru cântărire" },
      { code: "5580", description: "tensiometru pentru cablu static sau în mișcare" },
      { code: "Load pin standard", description: "bolț instrumentat pentru macarale" },
      { code: "Load pin subacvatic", description: "variantă pentru adâncimi de până la 7.500 m" },
      { code: "Load pin wireless", description: "transmisie fără fir a semnalului de sarcină" },
      { code: "Load pin miniatural", description: "diametru de la 7 mm" },
      { code: "Traductor cuplu static", description: "măsurare cuplu între 1 Nm și 1.000 kNm" },
      { code: "Traductor cuplu rotativ", description: "transmisie fără contact pentru arbori rotativi" },
      { code: "Celulă de cântărire silozuri/rezervoare", description: "montaj single-point pentru tancuri și silozuri" },
      { code: "Traductor de referință ISO 376", description: "etalon de forță pentru laboratoare de calibrare" }
    ],
    faq: [
      { q: "Ce produce SENSY?", a: "SENSY produce traductoare de forță, cuplu și cântărire — celule de sarcină, load pin-uri pentru macarale, traductoare de cuplu și senzori de referință pentru etalonare — fabricate în Belgia, la Jumet, lângă Charleroi." },
      { q: "Cum aleg celula de sarcină SENSY potrivită?", a: "Alegerea pornește de la capacitatea nominală necesară — între 10 N și 50 MN — și de la tipul de solicitare (compresiune, tracțiune sau ambele). Trimiteți-ne sarcina maximă, tipul de montaj și mediul de lucru, iar noi verificăm varianta potrivită din gama SENSY înainte de ofertă." },
      { q: "Livrați senzori SENSY în România și în cât timp?", a: "Da, aducem load pin-uri, celule de sarcină și traductoare de cuplu SENSY la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de configurația exactă și de confirmarea producătorului." },
      { q: "Ce trebuie să trimit pentru o ofertă de traductoare SENSY?", a: "Aveți nevoie de capacitatea nominală, tipul de solicitare (forță sau cuplu), interfața de montaj mecanic și, dacă aplicația e în zonă cu risc de explozie, cerința de certificare ATEX sau IECEx." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "SENSY — Home", url: "https://www.sensy.com", publisher: "SENSY S.A.", accessed: "2026-09-23" },
      { title: "SENSY — Products", url: "https://www.sensy.com/en/products/", publisher: "SENSY S.A.", accessed: "2026-09-23" }
    ]
  },
  "sor-controls-group": {
    name: "SOR Controls Group",
    founded: 1946,
    headquarters: "Lenexa, SUA",
    certifications: [ "ISO 9001 — management al calității pentru proiectare și fabricație", "UL, CSA, FM Approved, ATEX, IECEx — certificări pentru instrumentație de proces" ],
    overview: `SOR Controls Group este un producător american de instrumentație industrială de măsură și control, cu sediul la Lenexa, statul Kansas, activ din 1946. Sub mărcile proprii SOR, SSi și SENSOR produce comutatoare și traductoare de presiune și nivel, ansambluri de senzori de temperatură (termocuple și RTD-uri) și sisteme de prelevare pentru gaze, vapori și lichide. Pentru piața din România putem oferta din gama de comutatoare de proces și traductoare de temperatură, inclusiv variante calificate pentru energetică nucleară.

Ce diferențiază SOR e acoperirea celor trei mărci sub același grup: comutatoarele și transmițătoarele de presiune de la SOR, senzorii de temperatură SSi și sistemele de prelevare închise SENSOR, toate proiectate pentru medii de proces dificile — de la vid până la 5.000 psi și temperaturi de la -40°C la peste 200°C, în funcție de model. Compania produce și variante 1E-Qualified pentru centrale nucleare, un segment în care puțini producători de comutatoare de presiune sunt calificați. Certificările UL, CSA, FM, ATEX și IECEx acoperă majoritatea zonelor industriale cu risc de explozie sau incendiu.

Pentru clienții din România, SOR are sens la instalații petrochimice, stații de tratare a apei și centrale electrice unde se cere un comutator de nivel sau presiune cu certificare recunoscută internațional, sau la proiecte care necesită traductoare de temperatură calibrate pe ansamblu, nu doar elementul senzor izolat.`,
    whyChoose: [
      "Trei mărci sub același grup — SOR pentru presiune și nivel, SSi pentru temperatură, SENSOR pentru sisteme de prelevare",
      "Variante 1E-Qualified pentru aplicații din energetica nucleară, unde calificarea producătorului contează la fel de mult ca specificația tehnică",
      "Certificări UL, CSA, FM Approved, ATEX și IECEx pentru instalare în zone cu risc de explozie sau incendiu",
      "Peste 80 de ani de activitate continuă în instrumentație de proces, din 1946",
      "Gamă completă de comutatoare de nivel — de la montaj lateral la indicatoare magnetice — pentru rezervoare de proces"
    ],
    keyProducts: [
      {
        name: "Comutatoare de nivel și presiune seria 1500",
        description: "Comutatoare mecanice pentru nivel, presiune și debit, cu modele precum 1510 pentru montaj lateral, 1520 pentru debit electric și 1530/1540 pentru variante pneumatice, acoperind un domeniu de la vid până la 5.000 psi și temperaturi de la -40°C la 400°F. Se montează direct pe rezervoare sau conducte de proces, fără elemente electronice suplimentare, ceea ce le face potrivite pentru medii dure sau zone fără alimentare electrică ușor accesibilă. Alegerea variantei depinde de fluid, presiunea de lucru și tipul de semnal de ieșire necesar sistemului de control."
      },
      {
        name: "Ansambluri de senzori de temperatură seria 1400",
        description: "Termocuple și RTD-uri montate în teci de protecție (termowell), disponibile în modelele 1440, 1443, 1445, 1450 și 1455, dimensionate pentru imersie directă în fluid de proces. Ansamblul complet — senzor, teacă și cap de conexiune — e livrat calibrat ca unitate, nu ca elemente separate, ceea ce reduce erorile de montaj pe șantier. Se folosesc la monitorizarea temperaturii în conducte, rezervoare și reactoare din industria chimică și energetică."
      },
      {
        name: "Indicatoare de nivel magnetice seria 1100",
        description: "Indicatoare de nivel cu flotor magnetic, în modelele 1110, 1120 și 1130, care afișează nivelul lichidului dintr-un rezervor fără componente electronice expuse direct fluidului. Pot fi echipate cu comutatoare magnetice suplimentare pentru alarmare sau control automat la niveluri prestabilite. Construcția e potrivită pentru fluide corozive sau sub presiune, unde un indicator cu sticlă de nivel clasică ar reprezenta un risc."
      }
    ],
    industries: [
      "Chimie și petrochimie — comutatoare de nivel și presiune pentru procese",
      "Tratarea apei și apelor uzate — instrumentație de proces certificată",
      "Petrol și gaze — traductoare de presiune și temperatură",
      "Generare de energie electrică — indicatoare de nivel și senzori temperatură",
      "Energetică nucleară — componente 1E-Qualified"
    ],
    infinitrade: `Informațiile despre SOR Controls Group vin din pagina oficială de produse a producătorului; lucrăm fără date proprii despre stocul disponibil la un moment dat, doar cu ce am putut verifica acolo — modelele, domeniile de presiune și temperatură, certificările. Aducem comutatoarele, traductoarele și ansamblurile de temperatură SOR la comandă, prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2-6 săptămâni de la confirmarea producătorului. Pentru ofertă trimiteți modelul sau seria dorită, fluidul și presiunea de lucru, plaja de temperatură și certificarea cerută (ATEX, nucleară sau altă normă). Variantele calificate special se comandă individual, fără disponibilitate din depozit propriu.`,
    limitation: "Nu putem confirma disponibilitatea variantelor 1E-Qualified pentru energetică nucleară în afara unui proiect calificat direct cu producătorul.",
    productCodes: [
      { code: "1510", description: "comutator de nivel montaj lateral" },
      { code: "1520", description: "comutator electric de debit" },
      { code: "1530", description: "comutator pneumatic de nivel" },
      { code: "1540", description: "comutator pneumatic non-bleed de nivel" },
      { code: "1440", description: "ansamblu senzor de temperatură" },
      { code: "1443", description: "ansamblu senzor de temperatură" },
      { code: "1445", description: "ansamblu senzor de temperatură" },
      { code: "1450", description: "ansamblu senzor de temperatură" },
      { code: "1455", description: "ansamblu senzor de temperatură" },
      { code: "1310", description: "transmițător de nivel magnetostrictiv, până la 20 ft" },
      { code: "131", description: "comutator de presiune diferențială calificat nuclear" },
      { code: "141", description: "comutator de presiune diferențială calificat nuclear" },
      { code: "1000 Series", description: "cameră de bypass inginerită la comandă" },
      { code: "1110", description: "indicator de nivel magnetic" },
      { code: "1120", description: "indicator de nivel magnetic" },
      { code: "1130", description: "indicator de nivel magnetic" },
      { code: "1010FR", description: "inel de spălare pentru indicatoare de nivel" }
    ],
    faq: [
      { q: "Ce produce SOR Controls Group?", a: "SOR Controls Group produce comutatoare și transmițătoare de presiune și nivel, ansambluri de senzori de temperatură și sisteme de prelevare pentru gaze și lichide, sub mărcile SOR, SSi și SENSOR, din 1946." },
      { q: "Cum aleg comutatorul de nivel SOR potrivit?", a: "Alegerea depinde de fluid, presiunea de lucru și tipul de semnal necesar — mecanic, electric sau pneumatic. Trimiteți-ne presiunea și temperatura maximă din proces, iar noi identificăm modelul din seria 1500 sau 1100 potrivit înainte de ofertă." },
      { q: "Livrați instrumentație SOR Controls Group în România și cât durează?", a: "Da, aducem comutatoarele și traductoarele SOR la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2-6 săptămâni, în funcție de model și de confirmarea producătorului." },
      { q: "Ce informații trebuie să trimit pentru o ofertă SOR Controls Group?", a: "Aveți nevoie de seria sau modelul dorit, fluidul de proces, presiunea și temperatura de lucru, plus certificarea cerută — ATEX, IECEx sau calificare nucleară, dacă e cazul." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "SOR Controls Group — Home", url: "https://www.sorinc.com", publisher: "SOR Controls Group", accessed: "2026-09-23" },
      { title: "SOR Controls Group — Products", url: "https://www.sorinc.com/products/", publisher: "SOR Controls Group", accessed: "2026-09-23" }
    ]
  },
  seneca: {
    name: "Seneca",
    headquarters: "Padova, Italia",
    overview: `Seneca este un producător italian de automatizare industrială și achiziție de date, cu sediul la Padova. Gama acoperă module de intrare/ieșire pentru rețele CANopen, EtherNet/IP, Modbus și PROFINET, controlere programabile conform IEC 61131-3, dataloggere și gateway-uri IoT pentru telecontrol, precum și izolatoare de semnal, transmițătoare de temperatură și analizoare de rețea electrică. Pentru piața din România putem oferta din gama de izolatoare de semnal, convertoare de date și module de achiziție pentru automatizare industrială.

Ce diferențiază Seneca e lățimea gamei sub un singur brand: de la izolatoare de semnal simple din seria Z și K, până la platforme complete de telecontrol cu dataloggere 2G/4G și gateway-uri de tip Z-PASS pentru transmiterea datelor din teren către un sistem central prin platforma proprie LET'S. Analizoarele de rețea din seria R204 au certificare UL, iar contoarele de energie S500 și traductoarele de curent T201 completează segmentul de măsură electrică. Compania acoperă astfel atât automatizarea locală de proces, cât și monitorizarea la distanță, o combinație pe care mulți furnizori din segmentul izolatoarelor de semnal nu o oferă integrat.

Pentru clienții din România, Seneca are sens la panouri de automatizare unde se cere izolare galvanică pentru semnale analogice, la instalații de telecontrol pentru stații îndepărtate fără personal permanent și la proiecte de monitorizare a consumului de energie electrică unde contorizarea trebuie transmisă către un sistem central.`,
    whyChoose: [
      "Gamă unică de izolatoare de semnal, controlere IEC 61131-3, dataloggere și analizoare de rețea electrică sub același brand",
      "Gateway-uri Z-PASS pentru telecontrol 2G/4G, cu platformă proprie LET'S pentru transmiterea datelor din teren",
      "Analizor de rețea R204 cu certificare UL, relevant pentru proiecte cu cerințe nord-americane",
      "Suport pentru protocoale industriale multiple — CANopen, EtherNet/IP, Modbus RTU/TCP-IP și PROFINET — în același ecosistem",
      "Contoare de energie și traductoare de curent dedicate pentru monitorizarea consumului electric în timp real"
    ],
    keyProducts: [
      {
        name: "Izolatoare de semnal seria Z și K",
        description: "Module de izolare galvanică pentru semnale analogice de proces (4-20 mA, 0-10 V, termocuplu, RTD), montate pe șină DIN, disponibile în variantă multistandard configurabilă (seria Z) și variantă compactă cu factor de formă redus (seria K). Protejează instrumentația de proces de perturbații electrice și de diferențe de potențial între echipamente montate la distanță. Se folosesc frecvent între traductoarele de câmp și automatele programabile din panourile de control industrial."
      },
      {
        name: "Gateway-uri de telecontrol Z-PASS1/Z-PASS2",
        description: "Gateway-uri IoT pentru transmiterea datelor din instalații îndepărtate către un sistem central, cu conectivitate 2G/4G și integrare cu platforma proprie LET'S pentru telecontrol și teleasistență. Colectează semnale de la senzori și module I/O locale și le transmite periodic sau la eveniment, util pentru stații de pompare, puncte de măsură sau echipamente fără personal permanent la fața locului. Configurarea se face prin software dedicat, fără programare complexă pentru cazurile standard."
      },
      {
        name: "Analizor de rețea R204 și contoare de energie S500",
        description: "R204 este un analizor de rețea electrică cu certificare UL, folosit pentru monitorizarea parametrilor de calitate a energiei — tensiune, curent, putere, armonici — în tablouri electrice industriale. Seria S500 completează segmentul cu contoare de energie dedicate facturării interne pe centre de cost, iar traductoarele de curent T201 și senzorii Rogowski permit măsurarea fără întreruperea circuitului. Împreună acoperă atât analiza calității energiei, cât și contorizarea consumului pe secții sau echipamente."
      }
    ],
    industries: [
      "Automatizare industrială — izolatoare de semnal și module I/O",
      "Energie și utilități — analizoare de rețea și contoare de energie",
      "Apă și tratarea apei — telecontrol pentru stații fără personal",
      "Agricultură — monitorizare de la distanță prin gateway-uri IoT",
      "Industrie alimentară — achiziție de date de proces"
    ],
    infinitrade: `Pentru Seneca ne bazăm pe informațiile publice disponibile pe site-ul producătorului, fără date proprii despre stocurile curente pe fiecare model din gamă. Aducem izolatoarele de semnal, gateway-urile de telecontrol și instrumentele de măsură electrică la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea producătorului. Pentru ofertă trimiteți-ne tipul de semnal de izolat sau protocolul de comunicație folosit, numărul de canale necesare și, pentru gateway-uri, tipul de conectivitate (2G/4G) dorit. Variantele configurate special pe proiect nu au disponibilitate din depozit propriu.`,
    limitation: "Nu putem confirma configurarea platformei software LET'S pentru telecontrol, care rămâne un serviciu oferit direct de producător sau de integratorul de sistem.",
    productCodes: [
      { code: "Z-PC", description: "controler multifuncțional IEC 61131-3" },
      { code: "Z-PASS1-RT", description: "gateway IoT pentru telecontrol 2G/4G" },
      { code: "Z-PASS2-RT", description: "gateway IoT extins pentru telecontrol" },
      { code: "Z-KEY", description: "router/gateway pentru rețea de comunicație" },
      { code: "MyALARM2", description: "datalogger cu alarmare la distanță" },
      { code: "Z-LTE-CEI", description: "datalogger 4G pentru telecontrol" },
      { code: "R204", description: "analizor de rețea electrică certificat UL" },
      { code: "S500", description: "contor de energie electrică" },
      { code: "T201", description: "traductor de curent" },
      { code: "Seria Z izolatoare", description: "izolator de semnal multistandard" },
      { code: "Seria K izolatoare", description: "izolator de semnal compact" },
      { code: "Seria S transmițătoare", description: "transmițător de temperatură pentru RTD/termocuplu" },
      { code: "Seria S indicatoare", description: "indicator digital de proces" },
      { code: "Seria MY", description: "sistem portabil de măsurare" },
      { code: "TAA/TAC", description: "transformator de curent pentru măsură" }
    ],
    faq: [
      { q: "Ce produce Seneca?", a: "Seneca produce echipamente de automatizare industrială și achiziție de date — izolatoare de semnal, controlere programabile, dataloggere, gateway-uri de telecontrol și instrumente de măsură electrică — fabricate în Italia, la Padova." },
      { q: "Cum aleg izolatorul de semnal Seneca potrivit?", a: "Alegerea depinde de tipul semnalului de intrare (4-20 mA, 0-10 V, termocuplu sau RTD) și de numărul de canale necesare. Trimiteți-ne tipul semnalului, plaja de valori și dacă e nevoie de izolare pe montaj DIN multistandard sau compact." },
      { q: "Livrați echipamente Seneca în România și în cât timp?", a: "Da, aducem izolatoarele, gateway-urile și instrumentele de măsură Seneca la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de disponibilitatea producătorului." },
      { q: "Ce trebuie să trimit pentru o ofertă de echipamente Seneca?", a: "Aveți nevoie de tipul de semnal sau protocol folosit, numărul de canale, iar pentru gateway-urile de telecontrol, tipul de conectivitate dorit și frecvența de transmitere a datelor." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Seneca — Linee di prodotto", url: "https://www.seneca.it/linee-di-prodotto/", publisher: "Seneca s.r.l.", accessed: "2026-09-23" },
      { title: "Seneca — Home", url: "https://www.seneca.it", publisher: "Seneca s.r.l.", accessed: "2026-09-23" }
    ]
  },
  solinst: {
    name: "Solinst",
    headquarters: "Georgetown, Canada",
    overview: `Solinst este un producător canadian de instrumente pentru măsurarea și monitorizarea apelor subterane, cu sediul la Georgetown, Ontario. Gama include metre de nivel al apei cu cablu gradat, dataloggere compensate barometric pentru monitorizare continuă, pompe peristaltice și sisteme de prelevare a probelor, piezometre cu vârf de acționare directă și sonde multiparametru pentru calitatea apei. Pentru piața din România putem oferta din gama de metre de nivel, dataloggere și echipamente de prelevare pentru studii hidrogeologice.

Ce diferențiază Solinst e specializarea îngustă, dar foarte adâncă, pe monitorizarea apelor subterane: cabluri și benzi gradate cu marcaj laser rezistent la uzură, dataloggere Levelogger care compensează automat presiunea barometrică pentru citiri de nivel corecte, și piezometre cu vârf de acționare directă (615) pentru investigații rapide fără foraj complet. Platforma Solinst Cloud permite gestionarea de la distanță a rețelelor de monitorizare cu mai multe puncte de măsură. Compania a extins gama prin achiziții — Solinst Water Technologies pentru calitatea apei și Spohr Messtechnik, producător german cu peste 130 de ani de tradiție în instrumente hidrometrice.

Pentru clienții din România, Solinst are sens la studii hidrogeologice, monitorizarea siturilor contaminate, gestionarea barajelor și verificarea nivelului apei potabile din foraje. Proiectele cu monitorizare pe termen lung beneficiază de dataloggere și platforma cloud, în timp ce investigațiile punctuale folosesc metrele de nivel manuale.`,
    whyChoose: [
      "Cabluri și benzi gradate cu marcaj laser, rezistente la uzură, pentru citiri repetabile de nivel al apei",
      "Dataloggere Levelogger cu compensare barometrică automată pentru monitorizare continuă fără corecții manuale",
      "Piezometre cu vârf de acționare directă pentru investigații rapide, fără foraj complet",
      "Platformă Solinst Cloud pentru gestionarea de la distanță a rețelelor de monitorizare cu mai multe puncte",
      "Gamă extinsă prin achiziția Spohr Messtechnik, producător german cu peste 130 de ani de experiență hidrometrică"
    ],
    keyProducts: [
      {
        name: "Metre de nivel al apei seria 101/102",
        description: "Instrumente portabile pentru măsurarea manuală a nivelului apei în foraje și puțuri, cu cablu sau bandă gradată din PVDF marcată laser, disponibile în variante standard (101), miniaturală (101M) și pentru teste de drawdown (101D). Seria 102 folosește cablu în locul benzii plate, pentru foraje mai adânci sau cu diametru redus. Semnalul sonor sau vizual indică atingerea suprafeței apei, iar marcajul permite citirea directă a adâncimii fără calcule suplimentare."
      },
      {
        name: "Dataloggere Levelogger 6",
        description: "Sistem de înregistrare automată și continuă a nivelului apei, cu compensare barometrică integrată pentru eliminarea variațiilor cauzate de presiunea atmosferică. Se instalează suspendat în foraj și înregistrează la intervale programabile, util pentru studii pe termen lung ale acviferelor sau monitorizarea siturilor de remediere. Datele pot fi descărcate local sau transmise către platforma Solinst Cloud pentru gestionarea rețelelor cu mai multe puncte de monitorizare."
      },
      {
        name: "Piezometre cu vârf de acționare directă seria 615",
        description: "Piezometre instalate prin batere sau împingere directă în sol, fără foraj rotativ complet, potrivite pentru investigații rapide de contaminare sau pentru rețele de monitorizare cu multe puncte pe suprafețe mari. Vârful cu filtru integrat permite măsurarea nivelului apei sau prelevarea de probe direct din zona de interes. Se folosesc frecvent la evaluarea inițială a unui sit înainte de forarea puțurilor permanente de monitorizare."
      }
    ],
    industries: [
      "Hidrogeologie — monitorizare acvifere și studii de resursă",
      "Situri contaminate — monitorizare remediere și piezometre",
      "Gestionare baraje — monitorizare nivel și presiune interstițială",
      "Apă potabilă — verificare nivel în foraje de captare",
      "Cercetare de mediu — sonde multiparametru pentru calitatea apei"
    ],
    infinitrade: `Pentru Solinst pornim de la informațiile publice de pe site-ul producătorului, fără date proprii despre stocul real al fiecărui model din gamă. Aducem metrele de nivel, dataloggerele Levelogger și piezometrele Solinst la comandă, prin canale de aprovizionare din America de Nord sau Europa, cu termen orientativ de 2-6 săptămâni de la confirmarea disponibilității. Pentru ofertă trimiteți-ne adâncimea forajului sau punctului de măsură, tipul de aplicație (monitorizare manuală sau continuă) și dacă aveți nevoie de integrare cu platforma Solinst Cloud. Lungimile de cablu și variantele de senzor se confirmă individual, fără disponibilitate din depozit propriu.`,
    limitation: "Nu putem confirma configurarea sau licențierea platformei Solinst Cloud pentru monitorizare la distanță, aspect gestionat direct de producător.",
    productCodes: [
      { code: "101", description: "metru de nivel apă cu bandă PVDF" },
      { code: "101M", description: "metru de nivel apă, versiune mini" },
      { code: "101D", description: "metru de nivel pentru teste drawdown" },
      { code: "101B", description: "metru de nivel apă, versiune de bază" },
      { code: "102", description: "metru de nivel apă cu cablu gradat" },
      { code: "102M", description: "metru de nivel apă cu cablu, versiune mini" },
      { code: "104", description: "metru sonic de nivel apă" },
      { code: "105", description: "indicator adâncime coloană foraj" },
      { code: "122", description: "metru de interfață apă-produs petrolier" },
      { code: "122M", description: "metru de interfață, versiune mini" },
      { code: "201", description: "metru nivel și temperatură apă" },
      { code: "107 TLC", description: "profiler temperatură, nivel, conductivitate" },
      { code: "103", description: "tag line pentru marcare adâncime" },
      { code: "410", description: "pompă peristaltică pentru prelevare" },
      { code: "615", description: "piezometru cu vârf de acționare directă" },
      { code: "Levelogger 6", description: "datalogger de nivel cu compensare barometrică" },
      { code: "Solinst Eureka", description: "sondă multiparametru pentru calitatea apei" },
      { code: "Waterloo Emitter", description: "dispozitiv pentru biodegradare accelerată" }
    ],
    faq: [
      { q: "Ce produce Solinst?", a: "Solinst produce instrumente pentru monitorizarea apelor subterane — metre de nivel, dataloggere compensate barometric, pompe de prelevare și piezometre — fabricate în Canada, la Georgetown, Ontario." },
      { q: "Cum aleg metrul de nivel Solinst potrivit pentru forajul meu?", a: "Alegerea depinde de adâncimea și diametrul forajului: pentru foraje înguste sau adânci se recomandă seria 102 cu cablu, iar pentru măsurători curente seria 101 cu bandă. Trimiteți-ne adâncimea estimată și diametrul forajului pentru confirmare." },
      { q: "Livrați echipamente Solinst în România și cât durează livrarea?", a: "Da, aducem instrumentele Solinst la comandă prin canale de aprovizionare din America de Nord sau Europa, cu termen orientativ de 2-6 săptămâni, în funcție de model și de confirmarea producătorului." },
      { q: "Ce informații trebuie să trimit pentru o ofertă de echipamente Solinst?", a: "Aveți nevoie de adâncimea forajului sau a punctului de măsură, tipul de monitorizare dorit (manuală sau continuă) și, pentru dataloggere, frecvența de înregistrare și modul de descărcare a datelor." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Solinst — Level Measurement Devices", url: "https://www.solinst.com/instruments/level-measurement-devices/", publisher: "Solinst Canada Ltd.", accessed: "2026-09-23" },
      { title: "Solinst — Home", url: "https://www.solinst.com", publisher: "Solinst Canada Ltd.", accessed: "2026-09-23" }
    ]
  },
  "vogtlin-instruments": {
    name: "Vögtlin Instruments",
    founded: 1986,
    headquarters: "Muttenz, Elveția",
    certifications: [ "ATEX — certificare pentru variantele destinate zonelor cu risc de explozie din seria red-y industrial" ],
    overview: `Vögtlin Instruments este un producător elvețian de debitmetre și regulatoare masice digitale pentru gaze, cu sediul la Muttenz, fondat în 1986. Gama red-y acoperă măsurarea și reglarea debitului de gaz pe principii diferite — de la senzori compacți alimentați cu baterie, până la variante industriale certificate ATEX — alături de debitmetre mecanice cu flotor din seria Q-Flow. Pentru piața din România putem oferta din gama red-y de debitmetre și regulatoare masice pentru laborator și instalații industriale de gaz.

Ce diferențiază Vögtlin e tehnologia MEMS folosită la seria red-y smart, care oferă timp de răspuns rapid și precizie ridicată pe game largi de gaze — aer, oxigen, azot, heliu, argon, CO₂, hidrogen, metan, propan și amestecuri personalizate. Seria SmartTrak, cu tehnologie capilară și componente umede din inox 316L, acoperă gazele corozive sau agresive, iar seria d·flux multi măsoară simultan mai mulți parametri pentru debite între 350 și 1.400 ln/min. Variantele industriale, cu protecție IP67/NEMA6 și certificare ATEX, extind gama către medii de producție dure, unde un debitmetru de laborator obișnuit nu ar rezista.

Pentru clienții din România, Vögtlin are sens în electroliza pentru hidrogen, biotehnologie, farmacie și laboratoare de cercetare unde se cere control precis al debitului de gaz, dar și în instalații industriale cu medii corozive unde componentele umede trebuie să fie compatibile chimic cu gazul măsurat.`,
    whyChoose: [
      "Tehnologie MEMS pentru măsurare rapidă și precisă a debitului de gaz, calibrată pe zeci de gaze și amestecuri",
      "Serie SmartTrak cu componente umede din inox 316L, pentru gaze corozive sau agresive chimic",
      "Variante industriale cu protecție IP67/NEMA6 și certificare ATEX pentru medii de producție dure",
      "Regulatoare de presiune red-y smart cu măsurare de debit integrată, pentru control combinat presiune-debit",
      "Fondată în 1986, cu peste patru decenii de specializare exclusivă pe debitmetre masice pentru gaze"
    ],
    keyProducts: [
      {
        name: "red-y smart series — debitmetre și regulatoare masice digitale",
        description: "Seria principală de debitmetre și regulatoare masice pentru gaze, bazată pe tehnologie MEMS, cu interfețe analogice și digitale și valvă de reglare cu răspuns rapid pentru varianta de control. Calibrate pentru aer, oxigen, azot, heliu, argon, CO₂, hidrogen, metan, propan și amestecuri personalizate. Se folosesc în laboratoare de cercetare, linii de producție farmaceutică și instalații de biotehnologie unde debitul de gaz trebuie controlat cu precizie ridicată."
      },
      {
        name: "SmartTrak — debitmetre cu tehnologie capilară",
        description: "Debitmetre și regulatoare de debit bazate pe principiul capilar, cu toate componentele umede din oțel inoxidabil 316L, pentru gaze corozive sau chimic agresive care ar deteriora senzorii MEMS standard. Producătorul indică o precizie de până la 0,5% din valoarea finală a scalei. Se folosesc în procese chimice și de semiconductori unde compatibilitatea materialului cu gazul este critică pentru durata de viață a instrumentului."
      },
      {
        name: "red-y industrial series — variante certificate pentru medii dure",
        description: "Versiune industrială a tehnologiei red-y, cu protecție IP67/NEMA6 și certificare ATEX pentru zone cu risc de explozie, păstrând interfețele analogice și digitale ale seriei smart. Destinată instalațiilor de producție unde debitmetrul e expus la praf, umiditate sau vibrații, spre deosebire de mediul controlat de laborator. Se recomandă pentru linii industriale de gaz din chimie, energie și procesare industrială."
      }
    ],
    industries: [
      "Biotehnologie și farmacie — control debit gaz în procese de producție",
      "Hidrogen — măsurare debit la electroliză",
      "Laboratoare de cercetare — debitmetre de precizie pentru gaze",
      "Industrie chimică — debitmetre pentru gaze corozive (SmartTrak)",
      "Prelucrarea sticlei și industria alimentară — control debit gaz de proces"
    ],
    infinitrade: `Pentru Vögtlin ne bazăm pe informațiile publice de pe site-ul producătorului elvețian, fără date proprii despre stocul curent pe fiecare variantă din gama red-y. Aducem debitmetrele și regulatoarele masice la comandă, prin canale de aprovizionare din Elveția și restul UE, cu termen orientativ de 2-6 săptămâni de la confirmarea producătorului. Pentru ofertă avem nevoie de gazul măsurat, plaja de debit dorită, presiunea de lucru și dacă instalația necesită certificare ATEX sau protecție IP67. Pentru gaze corozive vă recomandăm să menționați explicit compoziția, ca să verificăm compatibilitatea materialelor umede înainte de a trimite oferta. Aceste instrumente se aduc individual la comandă, fără disponibilitate din depozit propriu.`,
    limitation: "Nu putem confirma calibrarea pe gaze sau amestecuri foarte specifice, în afara celor listate explicit de producător pe site.",
    productCodes: [
      { code: "red-y smart series — meter", description: "debitmetru masic digital cu tehnologie MEMS" },
      { code: "red-y smart series — controller", description: "regulator masic digital cu valvă de reglare rapidă" },
      { code: "red-y compact series", description: "debitmetru portabil alimentat cu baterie, cu touchscreen" },
      { code: "d·flux multi series", description: "debitmetru multiparametric, 350-1.400 ln/min" },
      { code: "SmartTrak", description: "debitmetru capilar cu componente inox 316L" },
      { code: "red-y industrial series — meter", description: "debitmetru certificat ATEX, protecție IP67/NEMA6" },
      { code: "red-y industrial series — controller", description: "regulator masic certificat ATEX pentru medii dure" },
      { code: "red-y smart pressure controller", description: "regulator de presiune cu măsurare debit integrată" },
      { code: "Q-Flow", description: "debitmetru mecanic cu flotor și valvă cu ac" },
      { code: "M-Flow", description: "valvă de reglare de precizie pentru control debit" }
    ],
    faq: [
      { q: "Ce produce Vögtlin Instruments?", a: "Vögtlin Instruments produce debitmetre și regulatoare masice digitale pentru gaze, sub gama red-y, fondată în 1986 la Muttenz, în Elveția, cu variante de laborator și industriale." },
      { q: "Cum aleg debitmetrul Vögtlin Instruments potrivit pentru aplicația mea?", a: "Alegerea depinde de gazul măsurat, plaja de debit necesară și mediul de instalare — laborator sau zonă industrială cu risc de explozie. Trimiteți-ne aceste date, plus presiunea de lucru, iar noi verificăm varianta red-y sau SmartTrak potrivită." },
      { q: "Livrați debitmetre Vögtlin Instruments în România și cât durează?", a: "Da, aducem debitmetrele și regulatoarele masice red-y la comandă, prin canale de aprovizionare din Elveția și UE, cu termen orientativ de 2-6 săptămâni, în funcție de configurație și de confirmarea producătorului." },
      { q: "Ce trebuie să trimit pentru o ofertă de debitmetre red-y?", a: "Aveți nevoie de gazul sau amestecul de gaze măsurat, plaja de debit dorită, presiunea de lucru și dacă aplicația necesită certificare ATEX sau protecție IP67 pentru medii industriale dure." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Vögtlin — Massedurchflussmesser und Massedurchflussregler", url: "https://www.voegtlin.com/massedurchflussmesser-und-massedurchflussregler/", publisher: "Vögtlin Instruments GmbH", accessed: "2026-09-23" },
      { title: "Vögtlin Instruments — Home", url: "https://www.voegtlin.com", publisher: "Vögtlin Instruments GmbH", accessed: "2026-09-23" }
    ]
  },
  romheld: {
    name: "Römheld",
    overview: `Römheld este un producător german de sisteme hidraulice de fixare și schimbare rapidă a matrițelor pentru mașini-unelte, activ din anii 1940, cu origini într-o turnătorie de fontă. Gama acoperă elemente de fixare a pieselor (hidraulice, electrice și pneumatice), cilindri hidraulici, menghine de precizie pentru prelucrare pe 5 axe și sisteme complete de schimbare rapidă a matrițelor pentru prese. Pentru piața din România putem oferta din gama de elemente de fixare hidraulică și componente pentru sisteme de schimbare rapidă a matrițelor.

Ce diferențiază Römheld e combinația dintre fixarea pieselor și schimbarea rapidă a matrițelor sub același producător: menghina concentrică H 4.400 atinge, potrivit site-ului, o precizie de ±0,005 mm, iar elementele de basculare B1.8807 și variantele electrice B1.8320 acoperă fixarea automatizată pe centre de prelucrare. Sistemele de schimbare rapidă — rack-uri de depozitare matrițe, bare cu role, cărucioare și lanțuri push-pull — reduc timpul de schimbare la prese, un aspect esențial în producția de serie din stanțare și ambutisare.

Pentru clienții din România, Römheld are sens la centre de prelucrare CNC care necesită fixare rapidă și repetabilă, la ateliere de matrițerie și la linii de stanțare unde timpul de schimbare a matriței influențează direct productivitatea instalației.`,
    whyChoose: [
      "Menghină concentrică H 4.400 cu precizie de ±0,005 mm, potrivit pentru prelucrare pe 5 axe",
      "Peste 100 de brevete deținute, conform informațiilor publicate de producător, în domeniul fixării și schimbării matrițelor",
      "Gamă completă pentru schimbarea rapidă a matrițelor — de la rack-uri de depozitare la sisteme push-pull",
      "Elemente de basculare hidraulice și electrice pentru fixare automatizată pe centre de prelucrare",
      "Peste 80 de ani de activitate în fixarea pieselor, cu origini într-o turnătorie de fontă"
    ],
    keyProducts: [
      {
        name: "Elemente de fixare a pieselor (workholding)",
        description: "Elemente de fixare acționate hidraulic, electric sau pneumatic, folosite pentru poziționarea și blocarea rigidă a pieselor pe mese de mașini-unelte sau dispozitive de prelucrare. Includ elemente de basculare precum B1.8807 (hidraulic) și B1.8320 (electric), destinate integrării în cicluri automatizate de prelucrare. Alegerea tipului de acționare depinde de forța de fixare necesară și de disponibilitatea sursei de energie (hidraulică, electrică sau pneumatică) la stația de lucru."
      },
      {
        name: "Menghine de precizie seria H",
        description: "Menghine concentrice pentru prelucrare pe mai multe axe, exemplificate prin modelul H 4.400, care atinge o precizie de repetabilitate de ±0,005 mm conform datelor publicate de producător. Construcția concentrică permite centrarea automată a piesei la fiecare strângere, reducând timpul de aliniere manuală. Se folosesc la centre de prelucrare 5-axe, unde geometria complexă a piesei cere o referință de poziționare stabilă și repetabilă între operații."
      },
      {
        name: "Sisteme de schimbare rapidă a matrițelor",
        description: "Ansamblu de echipamente pentru reducerea timpului de schimbare a matrițelor la presele de stanțare — rack-uri de depozitare, bare cu role sau bile pentru transport, console de manipulare, cărucioare dedicate și lanțuri sau sisteme push-pull pentru introducerea și scoaterea matriței din presă. Reduc timpul de oprire a liniei la schimbarea seriei de producție, relevant în special pentru ateliere cu multe schimbări de matriță pe schimb de lucru."
      }
    ],
    industries: [
      "Mașini-unelte — fixare piese pe centre de prelucrare CNC",
      "Construcție de matrițe și dispozitive — elemente de fixare hidraulică",
      "Automotive — fixare automatizată pe linii de producție",
      "Stanțare și ambutisare — schimbare rapidă a matrițelor la prese",
      "Robotică și automatizare — module de manipulare și transport piese"
    ],
    infinitrade: `Pentru Römheld informațiile vin din pagina oficială a producătorului, fără date proprii despre stocul disponibil pentru fiecare element din gamă. Aducem elementele de fixare, menghinele de precizie și componentele pentru schimbarea rapidă a matrițelor la comandă, prin canale de aprovizionare din Germania și restul UE, cu termen orientativ de 2-6 săptămâni de la confirmarea producătorului. Pentru ofertă trimiteți-ne tipul de acționare dorit (hidraulic, electric sau pneumatic), forța de fixare necesară și, pentru sistemele de schimbare a matrițelor, dimensiunile presei. Componentele configurate pe proiect nu au disponibilitate din depozit propriu.`,
    limitation: "Nu putem confirma compatibilitatea directă cu prese sau centre de prelucrare de la alți producători fără verificarea desenului tehnic al instalației.",
    productCodes: [
      { code: "H 4.400", description: "menghină concentrică, precizie ±0,005 mm" },
      { code: "B1.8807", description: "element de basculare hidraulic" },
      { code: "B1.8320", description: "element de basculare electric" },
      { code: "Elemente fixare hidraulice", description: "acționare hidraulică pentru workholding" },
      { code: "Elemente fixare electrice", description: "acționare electrică pentru workholding" },
      { code: "Elemente fixare pneumatice", description: "acționare pneumatică pentru workholding" },
      { code: "Cilindri hidro", description: "cilindru hidraulic pentru fixare piese" },
      { code: "Cilindri universali", description: "cilindru hidraulic cu utilizare generală" },
      { code: "Cilindri cu piston gol", description: "cilindru hidraulic hollow-piston" },
      { code: "Cilindri bloc", description: "cilindru hidraulic tip bloc compact" },
      { code: "Menghine 5 axe", description: "menghină pentru prelucrare multiaxă" },
      { code: "Unități putere și pompe", description: "sursă hidraulică pentru sisteme de fixare" },
      { code: "Componente hidraulice — valve", description: "valve pentru circuite hidraulice de fixare" },
      { code: "Rack-uri depozitare matrițe", description: "sistem de stocare pentru matrițe" },
      { code: "Bare cu role/bile", description: "transport matriță la schimbare rapidă" },
      { code: "Lanțuri și sisteme push-pull", description: "introducere/scoatere matriță din presă" }
    ],
    faq: [
      { q: "Ce produce Römheld?", a: "Römheld produce sisteme hidraulice de fixare a pieselor, menghine de precizie și echipamente pentru schimbarea rapidă a matrițelor la presele de stanțare, fiind un producător german activ din anii 1940." },
      { q: "Cum aleg elementul de fixare Römheld potrivit?", a: "Alegerea depinde de forța de fixare necesară și de sursa de energie disponibilă la stația de lucru — hidraulică, electrică sau pneumatică. Trimiteți-ne forța dorită și tipul de acționare, iar noi verificăm elementul potrivit din gama Römheld." },
      { q: "Livrați componente Römheld în România și cât durează?", a: "Da, aducem elementele de fixare și componentele pentru schimbarea matrițelor Römheld la comandă, prin canale de aprovizionare din Germania și UE, cu termen orientativ de 2-6 săptămâni, în funcție de confirmarea producătorului." },
      { q: "Ce trebuie să trimit pentru o ofertă Römheld?", a: "Aveți nevoie de tipul de acționare dorit, forța de fixare sau presiunea de lucru necesară și, pentru sistemele de schimbare a matrițelor, dimensiunile presei și ale matriței." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "ROEMHELD — Workholding", url: "https://ws.roemheld.de/en", publisher: "Römheld GmbH", accessed: "2026-09-23" },
      { title: "ROEMHELD — Home", url: "https://www.roemheld.de/en", publisher: "Römheld GmbH", accessed: "2026-09-23" },
      { title: "ROEMHELD — Quick Die Change", url: "https://wz.roemheld.de/en", publisher: "Römheld GmbH", accessed: "2026-09-23" }
    ]
  },
  evapco: {
    name: "EVAPCO",
    headquarters: "Taneytown, SUA",
    certifications: [ "CTI Certified — capacitate termică certificată pentru turnurile de răcire", "Conformitate IBC pentru proiectare seismică și de vânt" ],
    overview: `EVAPCO este un producător american de turnuri de răcire, condensatoare evaporative și răcitoare cu circuit închis, cu sediul central la Taneytown, statul Maryland. Gama acoperă turnuri de răcire cu tiraj indus din seria AT, modelul AT Atlas cu capacitate certificată pe celulă, turnuri cu ventilator centrifugal seria LSTE și LPT pentru montaj interior sau cu spațiu limitat, precum și sisteme de răcire în circuit închis eco-ATWB-H. Pentru piața din România putem oferta din gama de turnuri de răcire și răcitoare cu circuit închis pentru instalații industriale și HVAC.

Ce diferențiază EVAPCO e varietatea de configurații pentru același principiu de răcire evaporativă: turnuri cu tiraj indus și ventilator axial (seria AT) pentru capacități mari în exterior, turnuri cu ventilator centrifugal cu profil redus și zgomot scăzut (LSTE, LPT) pentru instalații interioare sau cu restricții de înălțime, și configurația crossflow avansată AXS. Seria eco-Air, cu soluții uscate și adiabatice, vine cu o garanție de performanță termică declarată de producător, o abordare mai puțin întâlnită la turnurile evaporative clasice.

Pentru clienții din România, EVAPCO are sens la centrale electrice, instalații de răcire industrială de proces și centre de date unde se cere o capacitate de răcire certificată CTI și opțiuni de montaj flexibile — de la turnuri exterioare mari până la unități compacte pentru spații interioare cu înălțime limitată.`,
    whyChoose: [
      "Capacitate certificată CTI pe celulă la turnurile din seria AT, verificabilă independent de producător",
      "Turnuri cu ventilator centrifugal, profil redus și zgomot scăzut, pentru montaj interior sau cu restricții de spațiu",
      "Sisteme de tratare a apei proprii (Pass-Protect, Water Saver) integrabile cu turnurile de răcire",
      "Configurație crossflow avansată AXS pentru tiraj indus cu ventilator axial",
      "Gamă completă de la turnuri de răcire la răcitoare cu circuit închis, sub același producător"
    ],
    keyProducts: [
      {
        name: "Turnuri de răcire cu tiraj indus seria AT",
        description: "Turnuri de răcire cu ventilator axial și tiraj indus, pentru o gamă largă de capacități de răcire exterioară, cu modelul AT Atlas descris de producător drept o variantă modulară eficientă energetic, cu capacitate certificată CTI ridicată per celulă. Seria include și modelul SUN, cea mai nouă variantă cu configurație counterflow. Se folosesc la centrale electrice, instalații industriale de proces și sisteme HVAC de mare capacitate."
      },
      {
        name: "Turnuri cu ventilator centrifugal seria LSTE/LPT",
        description: "Turnuri de răcire cu tiraj forțat și ventilator centrifugal, cu profil redus și nivel de zgomot mai scăzut decât variantele cu ventilator axial, potrivite pentru montaj interior sau în spații cu înălțime limitată. Seria LPT reprezintă varianta standard, iar LSTE completează gama pentru amplasamente ducted sau cu cerințe suplimentare de reducere a zgomotului. Alegerea între cele două depinde de restricțiile de spațiu și de nivelul de zgomot admis la amplasament."
      },
      {
        name: "Răcitoare cu circuit închis eco-ATWB-H",
        description: "Răcitoare cu circuit închis (closed circuit coolers) care combină răcirea evaporativă cu izolarea fluidului de proces față de mediul exterior, evitând contaminarea directă a fluidului răcit. Se folosesc acolo unde fluidul de proces trebuie protejat de impurități sau de contactul cu aerul exterior, spre deosebire de turnurile de răcire deschise. Completează gama EVAPCO pentru aplicații industriale unde puritatea fluidului de răcire contează la fel de mult ca eficiența termică."
      }
    ],
    industries: [
      "HVAC comercial — răcire pentru clădiri și centre comerciale mari",
      "Refrigerare industrială — răcire pentru procese cu amoniac",
      "Generare de energie electrică — răcire condensatoare turbine",
      "Procesare industrială — răcire fluide de proces",
      "Centre de date — răcire echipamente IT de mare densitate"
    ],
    infinitrade: `Pentru EVAPCO ne bazăm pe informațiile publicate de producător pe site-ul oficial, fără date proprii despre stocul de echipamente disponibil la un moment dat. Aducem turnurile de răcire, condensatoarele evaporative și răcitoarele cu circuit închis la comandă, prin canale de aprovizionare din SUA sau reprezentanțele europene, cu termen orientativ de 2-6 săptămâni de la confirmarea configurației de către producător. Pentru ofertă avem nevoie de capacitatea termică necesară, spațiul disponibil la amplasament (interior sau exterior) și restricțiile de zgomot sau înălțime. Echipamentele dimensionate individual pe proiect nu au disponibilitate din depozit propriu.`,
    limitation: "Nu putem confirma timpii de execuție pentru unități factory-assembled de mare capacitate fără o cerere tehnică transmisă direct producătorului.",
    productCodes: [
      { code: "AT", description: "turn de răcire tiraj indus, ventilator axial" },
      { code: "AT Atlas", description: "turn de răcire modular, capacitate CTI ridicată pe celulă" },
      { code: "SUN", description: "turn de răcire counterflow, cea mai nouă variantă din seria AT" },
      { code: "LSTE", description: "turn de răcire ventilator centrifugal, profil redus" },
      { code: "LPT", description: "turn de răcire standard, ventilator centrifugal" },
      { code: "AXS", description: "turn de răcire crossflow, tiraj indus axial" },
      { code: "eco-Air", description: "sistem de răcire uscat/adiabatic cu garanție termică" },
      { code: "eco-ATWB-H", description: "răcitor cu circuit închis evaporativ" },
      { code: "VersaSplit", description: "sistem de răcire cu amoniac în pachet" },
      { code: "Pass-Protect", description: "soluție de pasivare pentru tratarea apei" },
      { code: "Water Saver", description: "sistem pentru reducerea consumului de apă la turnuri" }
    ],
    faq: [
      { q: "Ce produce EVAPCO?", a: "EVAPCO produce turnuri de răcire, condensatoare evaporative și răcitoare cu circuit închis pentru HVAC industrial, refrigerare și generarea de energie, cu sediul central în Statele Unite, la Taneytown." },
      { q: "Cum aleg turnul de răcire EVAPCO potrivit pentru instalația mea?", a: "Alegerea depinde de capacitatea termică necesară și de spațiul disponibil: turnurile din seria AT sunt pentru montaj exterior de mare capacitate, iar LSTE și LPT pentru interior sau spații cu înălțime limitată. Trimiteți-ne sarcina termică și amplasamentul dorit." },
      { q: "Livrați echipamente EVAPCO în România și cât durează?", a: "Da, aducem turnurile de răcire și răcitoarele EVAPCO la comandă, prin canale de aprovizionare din SUA sau Europa, cu termen orientativ de 2-6 săptămâni, în funcție de configurația confirmată de producător." },
      { q: "Ce informații trebuie să trimit pentru o ofertă de turnuri de răcire EVAPCO?", a: "Aveți nevoie de capacitatea termică necesară, temperaturile de intrare și ieșire ale apei, spațiul disponibil la amplasament și dacă instalația este interioară sau exterioară, plus eventualele restricții de zgomot admise pe amplasament." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "EVAPCO — Products", url: "https://www.evapco.com/products", publisher: "EVAPCO, Inc.", accessed: "2026-09-23" },
      { title: "EVAPCO — Cooling Towers Factory Assembled", url: "https://www.evapco.com/products/cooling-towers-factory-assembled", publisher: "EVAPCO, Inc.", accessed: "2026-09-23" },
      { title: "EVAPCO — Home", url: "https://www.evapco.com", publisher: "EVAPCO, Inc.", accessed: "2026-09-23" }
    ]
  },
  rembe: {
    name: "REMBE",
    founded: 1973,
    headquarters: "Brilon, Germania",
    overview: `REMBE este un producător german de sisteme de protecție la explozie și siguranță de proces, cu sediul la Brilon, activ din 1973. Gama include discuri de rupere din familiile EGV, EDP, MDX, ODV/ODU și ERO, sisteme de detentă a exploziei fără flacără din seria Q-Rohr, bariere de decuplare Q-Bic pentru izolarea propagării exploziei între echipamente și soluții dedicate bateriilor de stocare a energiei (BESS). Pentru piața din România putem oferta din gama de discuri de rupere și sisteme de protecție la explozie pentru instalații de proces.

Ce diferențiază REMBE e acoperirea completă a lanțului de protecție la explozie: discul de rupere elimină suprapresiunea într-un punct definit, sistemul Q-Rohr evacuează flacăra fără a o lăsa să iasă din echipament, iar Q-Bic oprește propagarea exploziei către conductele sau echipamentele conectate. Variantele dedicate — Q-Rohr 6T pentru prafuri metalice, Q-Rohr DFE pentru motoare pe gaz și seria BESS (EGV, TGV, Q.Vent) pentru containere de baterii — arată o specializare pe aplicații de nișă unde soluțiile generice de protecție la explozie nu acoperă riscul specific.

Pentru clienții din România, REMBE are sens la instalații din industria chimică și petrochimică, silozuri și instalații de procesare a prafurilor combustibile, precum și la proiecte noi de stocare a energiei în baterii unde protecția la explozie trebuie dimensionată pentru riscul specific al containerului.`,
    whyChoose: [
      "Gamă completă de protecție la explozie — disc de rupere, detentă fără flacără și barieră de decuplare — de la același producător",
      "Variantă Q-Rohr 6T dedicată special prafurilor metalice, un risc greu de acoperit cu echipamente generice",
      "Soluții dedicate containerelor de baterii (BESS), un segment nou pentru care puțini producători au produse specializate",
      "Peste 50 de ani de activitate în siguranța de proces, din 1973",
      "Prezență în 10 regiuni la nivel mondial, conform informațiilor publicate de producător"
    ],
    keyProducts: [
      {
        name: "Discuri de rupere seria EGV/EDP/MDX/ODV/ERO",
        description: "Discuri de rupere pentru protecția la suprapresiune a echipamentelor de proces, disponibile în mai multe familii constructive — EGV și EDP pentru aplicații generale, MDX pentru presiuni de rupere joase, iar ODV/ODU și ERO pentru configurații specifice de montaj. Discul cedează controlat la o presiune calculată, eliminând suprapresiunea dintr-un vas sau conductă înainte ca aceasta să depășească limita de siguranță a echipamentului. Alegerea familiei depinde de presiunea de rupere necesară și de compatibilitatea chimică cu fluidul din instalație."
      },
      {
        name: "Sisteme de detentă a exploziei fără flacără Q-Rohr",
        description: "Sistem de detentă a presiunii de explozie care reține flacăra și particulele arse în interior, eliminând doar unda de presiune către exterior, ceea ce permite montajul chiar și lângă zone ocupate de personal. Varianta Q-Rohr 6T este dedicată exploziilor cu prafuri metalice, iar variantele DFE sunt adaptate pentru motoare pe gaz sau LNG. Se montează pe silozuri, filtre și echipamente de procesare a pulberilor combustibile."
      },
      {
        name: "Bariere de decuplare a exploziei Q-Bic",
        description: "Sistem activ de decuplare care oprește propagarea unei explozii de la un echipament către conductele sau echipamentele conectate, folosind o barieră cu agent stingător activată la detectarea exploziei. Completează discul de rupere și sistemul de detentă într-o strategie completă de protecție, acolo unde izolarea între echipamente e la fel de importantă ca eliminarea suprapresiunii. Se folosește frecvent la instalații cu mai multe vase sau filtre interconectate prin conducte."
      }
    ],
    industries: [
      "Chimie și petrochimie — protecție la explozie pentru reactoare și conducte",
      "Industria alimentară — protecție silozuri și sisteme de manipulare pulberi",
      "Prelucrarea lemnului — protecție la explozie pentru praf de lemn",
      "Aerospațial și energie — soluții de siguranță de proces specializate",
      "Stocare energie în baterii (BESS) — protecție la explozie pentru containere"
    ],
    infinitrade: `Pentru REMBE lucrăm cu informațiile publice disponibile pe site-ul producătorului, fără date proprii despre stocul de discuri de rupere sau sisteme Q-Rohr disponibile la un moment dat. Aducem discurile de rupere, sistemele de detentă și barierele de decuplare la comandă, prin canale de aprovizionare din Germania și UE, cu termen orientativ de 2-6 săptămâni de la confirmarea producătorului. Pentru ofertă avem nevoie de presiunea de rupere necesară, dimensiunea nominală a racordului, tipul de mediu (gaz, praf sau lichid) și temperatura de lucru. Fiecare disc se dimensionează pe presiunea și geometria instalației clientului, fără disponibilitate din depozit propriu.`,
    limitation: "Nu putem confirma calculul de dimensionare a sistemului de protecție la explozie pentru o instalație existentă fără o cerere tehnică analizată direct de producător.",
    productCodes: [
      { code: "Q-Rohr", description: "detentă a exploziei fără flacără" },
      { code: "Q-Rohr 6T", description: "detentă a exploziei pentru prafuri metalice" },
      { code: "Q-Rohr DFE Gas", description: "detentă explozie pentru motoare pe gaz" },
      { code: "Q-Bic", description: "barieră activă de decuplare a exploziei" },
      { code: "Q-Box R3leaf", description: "sistem de detentă sustenabilă a exploziei" },
      { code: "Q-Ball E", description: "detentă explozie pentru elevatoare" },
      { code: "Q-Ball S", description: "detentă explozie pentru sisteme cu vibrații" },
      { code: "KUB", description: "disc de rupere cu tehnologie de rupere inversă" },
      { code: "EXKOP System", description: "sistem de decuplare bidirecțional" },
      { code: "EGV", description: "disc de rupere pentru aplicații generale" },
      { code: "EDP", description: "disc de rupere pentru aplicații de proces" },
      { code: "MDX", description: "disc de rupere pentru presiuni joase" },
      { code: "ODV/ODU", description: "disc de rupere pentru montaj specific" },
      { code: "ERO", description: "disc de rupere pentru configurații dedicate" },
      { code: "BESS.EGV", description: "disc de rupere dedicat containerelor de baterii" },
      { code: "BESS.Q.Vent", description: "sistem de ventilare a exploziei pentru BESS" }
    ],
    faq: [
      { q: "Ce produce REMBE?", a: "REMBE produce sisteme de protecție la explozie — discuri de rupere, sisteme de detentă fără flacără Q-Rohr și bariere de decuplare Q-Bic — fiind un producător german activ din 1973, cu sediul la Brilon." },
      { q: "Cum aleg discul de rupere REMBE potrivit?", a: "Alegerea depinde de presiunea de rupere necesară, dimensiunea racordului și tipul de mediu din instalație — gaz, praf combustibil sau lichid. Trimiteți-ne acești parametri, iar noi verificăm familia de disc (EGV, EDP, MDX sau ODV) potrivită." },
      { q: "Livrați echipamente REMBE în România și cât durează?", a: "Da, aducem discurile de rupere și sistemele Q-Rohr sau Q-Bic la comandă, prin canale de aprovizionare din Germania și UE, cu termen orientativ de 2-6 săptămâni, în funcție de confirmarea producătorului." },
      { q: "Ce informații trebuie să trimit pentru o ofertă REMBE?", a: "Aveți nevoie de presiunea de rupere necesară, dimensiunea nominală a racordului, tipul de mediu din instalație (gaz, praf sau lichid) și temperatura de lucru la punctul de montaj." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "REMBE — Explosionsschutz", url: "https://rembe.de/loesungen/explosionsschutz", publisher: "REMBE GmbH Safety+Control", accessed: "2026-09-23" },
      { title: "REMBE — Home", url: "https://rembe.de", publisher: "REMBE GmbH Safety+Control", accessed: "2026-09-23" }
    ]
  },
};
