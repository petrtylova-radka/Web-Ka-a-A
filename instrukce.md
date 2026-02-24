# Instrukce pro tvorbu webu - Kateřina Axmannová

**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
* Strukturovaný komentovaný HTML5 kód s validní sémantikou
* Responzivní design (mobile-first přístup)
* CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
* Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
* CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
* Základní JavaScript pro interaktivitu (na jemné oživení stránek)
* Dbej na bezpečnost webu (CSP hlavička a nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
* Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
* Zajisti rychlé načítání a optimalizovaný výkon
* Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
* Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
* Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu

**Základní SEO**
* Strukturuj nadpisy H1-H6
* Přidej meta title a description na každé stránce
* Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
* Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
* Urči kanonickou url
* Obrázkům dej alt popisky
* Propoj stránky vnitřními odkazy
* Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)

**Optimalizace obrázků**
* Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
* Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.

**Vizuální hierarchie a čitelnost**
* Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
* Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
* Čitelné fonty s českou diakritikou
* Správné řádkování (line-height 1.5-1.8 pro odstavce)
* Nikdy nezarovnávej text do bloku
* Optimální šířka řádku pro text (max 70% obrazovky)
* Menu: Položky jsou nyní vertikálně vycentrované v rámci navigační lišty. Tlačítko v menu má stejný hover efekt jako ostatní tlačítka. Po najetí myši se zobrazí podtržení položky v menu.

**Layout**
* Šířku celého webu dej na 85% obrazovky
* Jasné oddělení sekcí a obsahových celků
* Vyvážené použití bílého prostoru (white space)
* Intuitivní navigace - logo vlevo, hamburger menu na mobilu vpravo
* Dej si opravdu záležet na patičce webu, ať je v ní vše potřebné
* Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
* Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
* Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
* Stručné a srozumitelné texty
* Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
* Vizuální prvky podporující obsah (ikony, obrázky, grafika)
* Logické uspořádání informací (nejdůležitější nahoře)
* Chybová stránka (místo „404“ dej ikonu <i class="bi bi-emoji-frown"></i> a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html)
* Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
* Jednotný styl tlačítek, karet a komponent
* Stejný padding/margin napříč podobnými elementy
* Stejně ostré rohy u všech prvků
* Konzistentní ikonografie
* Stíny karet pouze velmi jemné nebo žádné
* Jednotný projev značky (brand voice)
* Konzistentní použití barev napříč celým webem
* Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
* Omezený počet barev (2-3 hlavní + neutrální)
* Primární barva pro CTA (call-to-action) tlačítka
* Barva pro pozadí #feffff
* Pro text #222222
* Brand barvy (HEX): 
   - primární: #877A70
   - sekundární: #EEEDE9
   - neutrální #EEEDE9

**Fonty**
* Zvol vhodný patkový nebo bezpatkový font podle obsahu webu - pro nadpisy jiný než Cormorant Garamond, pro text jiný než Outfit
* Písmo může být použité i psací, ale ať obsahuje české znaky a není moc ozdobné
* Pokud není jasné, zvol moderní sans-serif font
* Velikost textu webu zvol spíš větší, ať je dobře čitelné, ale ne zase moc velké

**Struktura**
* Více stránkový web
* Položky menu:
    * O mně
    * Pro firmy
    * Jak pracuji
    * Reference
    * Kontakty

**Design**
* Design hero sekce vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu png. 
* Na další sekce na hlavní stránce použij trendy jako velká typografie, krátké odstavce, barevné gradienty, glass efekt, micro-animace na hover a scroll efekty či 3D prvky.
* Sekci, kde jsou 3 přidané hodnoty doplň vhodnými ikonami, které budou ve stylu ručně kreslených obrázků.
* V sekci reference jsou 2 - nastyluj je tak, aby byly lákavě pro přečtení a graficky zajímavé.
* Sekce Jak probíhá spolupráce navrhni vizuálně zajímavou.
* Sekci Otázky a odpovědi udělej podle posledních trendů, aby byly odpovědi rozbalovací. Přidej zajímavý efekt.
* Na sekci Ceník si dej opravdu záležet, ať je vizuálně zajímavá.
* Na patičce si dej extra záležet, aby působila jako pevný základ webu. Může být v tmavším tónu se světlým textem.

**Obrázky**
Na webu použij fotky (př. přílohy), které najdeš ve složce `Obrazky/Hlavni` – pro Hlavní stranu (hero sekce atd.):
* `foto-01-hero.jpg`, `foto-02-hero.jpg` a `foto-03-hero.jpg` - použij pro hero sekci, ve které budou fotky vedle sebe a budou se postupně plynule střídat. Prostřední bude vždy největší. 
* `foto-04.jpg` a `foto-05.jpg` použij na stránce, kde se budou hodit. 
* `foto-06-o-mne.jpg`, `foto-07-o-mne.jpg` a `foto-08-o-mne.jpg` použij v sekci O mně, kde budou opět fotky vedle sebe a budou se plynule střídat, prostřední bude největší.
* `foto-09-paticka.jpg` použij do patičky webu.

**Texty**
Na webu použij tyto texty pro jednotlivé sekce / stránky. Drž se jich doslova a nic neměň ani nepřidávej.

---

### Hero Sekce / Úvod
Kateřina Axmannová – koučka a mentorka
Provázím lidi v situacích, kdy se potřebují zorientovat a rozhodovat se v souladu se sebou.

Až 95% našich reakcí vzniká nevědomě a ne vždy v náš prospěch. Zpomalením a poznáním pravdy můžete opustit vnitřní bolest, problémy a žít plnohodnotný život.

Tlačítko: Domluvit úvodní setkání (odkaz na sekci Kontakty)
Tlačítko: Reference (odkaz na sekci Reference)

---

### Klíčové hodnoty
Právě teď můžete začít měnit Váš život k lepšímu. 

Co je pro mě v práci s vámi klíčové:
* **Jdu pod povrch, posvítím na to, co se skrývá**
  Díváme se na to, co skutečně stojí za Vašimi reakcemi a rozhodnutími.
* **Vnímám Vás v souvislostech**
  Pomáhám pojmenovat vzorce, která sami cítíte, ale zatím nejsou jasné.
* **Propojuji odbornost, praxi a osobní zkušeností**
  Opírám se o vzdělání, firemní praxi, práci s lidmi a vlastní prožité zkušenosti.

---

### Sekce s videem
Nadpis: Otázkou není proč, ale JAK
(zatím dej do této sekce placeholder, který bude místo videa)

---

### Jak pracuji / Služby
JAK PRACUJI

Ve své práci propojuji zkušenosti z firemního prostředí s profesionálním koučovacím rámcem a hlubokým vnímáním lidí. Vycházím z poznání, že každý člověk má v sobě schopnost se dobře rozhodovat - jen pod tlakem může ztratit kontakt se sebou. Vytvářím prostor, kde je možné se zastavit a soustředit pozornost zpět k sobě a vlastnímu vedení.

* Kladu trefné a podstatné otázky.
* Naslouchám nejen slovům, ale i souvislostem.
* Jsem přítomná, bez hodnocení, s upřímným zájmem porozumět. 
* Spolupráce probíhá jen tam, kam mě pustíte.

Vycházím z koučovacího přístupu, který v případě potřeby a se souhlasem klienta doplňuji o mentoring.

Tlačítko: Koučink (odkaz na sekci Jak pracuji)
Tlačítko: Mentoring (odkaz na sekci Jak pracuji)

---

### Úvodní setkání
Úvodní setkání zdarma
Slouží k tomu, abychom zjistili, zda je pro Vás spolupráce se mnou užitečná. Probíhá on-line nebo osobně a k ničemu Vás nezavazuje. 
Výzva k akci: Domluvit úvodní setkání zdarma (odkaz na sekci Kontakty)

---

### Nabídka pro firmy
Nabídka pro firmy
„Ve firmách pracují lidé. A lidé si do práce nosí život.“

Strategická práce s lidmi jako součást dlouhodobě udržitelného fungování
Well-being koučink
Nabízím firmám individuální koučovací setkání a zaměstnancům bezpečný prostor, kde se mohou zastavit a otevřeně mluvit o libovolně zvoleném tématu, které ovlivňuje jejich pracovní pohodu, soustředění nebo psychickou rovnováhu. 
Více na proklik.

V případě zájmu se můžeme potkat na úvodní schůzce, kde společně probereme možnosti spolupráce.
 
Tlačítko: Domluvit nezávaznou konzultaci (bude odkazovat na sekci Kontakty)

---

### Reference
REFERENCE

**Barbara Šamalová**
*Z chaosu může vzniknout nový začátek*
Ke Katce jsem přišla v období, kdy se mi hroutil svět. Byla jsem unavená, ztracená a plná strachu z budoucnosti. Už při prvním setkání jsem cítila, že tady můžu být sama sebou – bez masek, bez obav, bez studu. Přijala mě s obrovskou laskavostí, klidem a pochopením, které se dnes jen tak nevidí.
Naslouchala mi s opravdovým zájmem, bez hodnocení a tlaku. Uměla přesně pojmenovat to, co jsem sama nedokázala říct nahlas a citlivě mě vedla v momentech, kdy jsem nevěděla, jak udělat další krok. Pomohla mi projít bolestivou rodinnou krizí i složitou situací v partnerském vztahu a ukázala mi, že i z chaosu může vzniknout nový začátek.
Díky její podpoře jsem znovu našla sílu, naději a víru v sebe samu. Naučila mě dívat se na věci jinak, s větším klidem a pochopením. Je to skutečný profesionál s obrovským srdcem. Jsem nesmírně vděčná, že mi v nejtěžším období života stála po boku a z celého srdce ji doporučuji každému, kdo se ocitl v temnotě a hledá světlo.
 
**Petra Sajdlová**
*Dovedla jsi mě zpět sama k sobě, děkuji.*
Katka je člověk s velmi silným morálním kompasem a přirozenou empatií. Je laskavá a přistupuje k lidem s opravdovým zájmem, umí naslouchat a nabídnout podporu ve chvílích, kdy ji skutečně potřebujete. Její loajalita a životní zkušenosti z ní dělají stabilní a spolehlivou osobnost, na kterou doporučuji se obrátit nejen v náročných životních situacích. Je velmi diskrétní a umí vytvořit bezpečný prostor založený na důvěře, což je pro mě klíčové. Má schopnost povzbudit, dodat klid a nadhled, být oporou v obdobích změn. Zároveň vnímám, že touha pomáhat lidem dává jejímu jednání hlubší smysl.

Tlačítko: Více referencí (odkaz na sekci Reference)

---

### Jak probíhá spolupráce
JAK PROBÍHÁ SPOLUPRÁCE

1. Vyplníte formulář (odkaz na sekci Kontakty) a domluvíme se na úvodním nezávazném setkání.
2. Spojíme se online přes Microsoft Teams nebo přes WhatsApp, případně osobně.
3. Během 30 minut si popovídáme a zjistíme, zda se domluvíme na další spolupráci.

---

### O mně
O mně

Jmenuji se Kateřina. 
Věřím tomu, že každý člověk má svůj jedinečný příběh, a že společné sdílení je hluboce léčivé. 

Ráda pracuji s lidmi v situacích, kdy se ocitají pod dlouhodobým tlakem a potřebují se znovu opřít o vnitřní stabilitu, jasnost a vlastní rozhodování. 

Patnáct let jsem působila v mezinárodní společnosti na manažerských pozicích. Vím, jaké to je orientovat se na výkon, být pod tlakem, rychle se rozhodovat a nést odpovědnost. Znám situace, kdy se ve vztazích – pracovních i osobních – objevují jemné i zjevnější hry moci, tlak a manipulace. Těmito zkušenostmi jsem si prošla z obou stran a zásadně mě proměnily.
Naučily mě rozpoznávat jemné vzorce chování, které často zůstávají bez povšimnutí. Prohloubily mou citlivost k tématu sebehodnoty a vnitřních hranic. Dnes za ně cítím vděk, protože mě přivedly k větší úctě k sobě i druhým. 

Možná právě proto dokážu s respektem a bez souzení držet prostor i pro témata, o kterých se mlčí. Kde vy můžete mluvit otevřeně, hledat vlastní odpovědi v tempu, které Vám je přirozené a znovu se opřít o jasnost a schopnost rozhodovat se v souladu se sebou. 

Věřím, že změna má smysl nikoli z donucení, ale z vědomého rozhodnutí a porozumění sobě.

Koučování pro mě není jen profese. Hodnoty a kompetence kouče představují principy, jak žiji a jak mnoho let pracuji sama se sebou. 

Tlačítko: Číst více (bude odkazovat na sekci O mně)

---

### Otázky a odpovědi
OTÁZKY A ODPOVĚDI

* **Proč bych měl/a využít koučink?**
  Pokud jste tady, pravděpodobně něco ve Vašem životě není tak, jak by mělo být. Možná situace, které se opakují. Rozhodnutí, které nejde udělat a nebo nevíte, jak.
  Člověk pod tlakem často nevidí řešení, která jsou jinak dostupná. 
  Koučink nabízí bezpečný prostor zastavit se, podívat se na věci jinak, s odstupem a objevit řešení, které dává smysl právě Vám.

* **Až zjistím, že to funguje a dostanu se do jiné, obtížné situace - budu Vás muset navštěvovat stále?**
  Samozřejmě jsem tady pro Vás do doby, dokud Vám to bude dávat smysl. 
  Nicméně odpověď zní ne, neboť chápu, že není potřeba být na někom z venku závislý.
  Mým záměrem je naučit Vás praktikovat a přistupovat k životním výzvám autonomně. Jen tak můžete být v dlouhodobém horizontu svobodní.

* **Je změna nutná?**
  Ano, někdy postačí změnit úhel pohledu. 
  Jak řekl řecký filosof, vše je v neustálém pohybu, jedinou jistotou je trvalá změna. Místo odporu k “nevyhnutelnému” Vám koučink pomůže najít způsob, jak nejistoty, které jsou běžnou součástí našich životů, ustát a využít je ve svůj prospěch.

* **Je rozhovor důvěrný?**
  Ano, setkání jsou plně důvěrná. To, co spolu sdílíme, zůstává mezi námi. Pokud si dělám poznámky, jsou anonymní a slouží pouze pro mou orientaci v procesu.
  Výjimku tvoří situace, kdy by zazněly informace o bezprostředním ohrožení života, zdraví nebo plánovaném závažném trestném činu - v takovém případě mi zákon ukládá oznamovací povinnost. 

* **Pro koho koučink není vhodný?**
  Koučink není náhradou psychoterapie ani psychiatrické péče. Pokud se nacházíte v akutní psychické krizi nebo řešíte závažné duševní onemocnění, je důležité obrátit se na zdravotnického odborníka. 

* **Jak poznám, jestli mi sedíte?**
  V tomto procesu je potřebné, abychom spolu vzájemně ladili. K tomu slouží úvodní setkání, které je nezávazné a kde se můžeme navzájem navnímat. Pokud Vám bude vyhovovat způsob práce, ale z jakéhokoliv důvodu Vám nesednu právě já, velmi ráda Vám doporučím své kolegy.

---

### Ceník
CENÍK 

* **Vstupní setkání 30 min zdarma**
  Cílem je vyjasnit Vaše téma, vysvětlit způsob práce, zjistit Vaše očekávání a v případě souladu domluvit spolupráci.
* **Individuální koučink / mentoring - 60 min - 2.000 Kč**
* **Balíček 3 setkání - 5.000 Kč** 
* **1-2 místa ročně pro klienty v náročné situaci** 

V případě potřeby je možné domluvit individuální podmínky. 

Setkání probíhají online nebo osobně dle domluvy.
Platba převodem předem nebo po osobním setkání. 
Vše domluvíme na prvním setkání. 

Pokud zjistíme, že naše spolupráce není vhodná, otevřeně si to řekneme. 

---

### Patička
PATIČKA

Kontakty
Tel: +420 777 339 611
E-mail: katerina@axmannova.cz

Povinné údaje: 
IČ 24367401, sídlo Na Výsluní 1727, Frýdlant nad Ostravicí.
Fyzická osoba zapsaná v živnostenském rejstříku vedeném Městským úřadem Frýdlant n. Ostravicí.
