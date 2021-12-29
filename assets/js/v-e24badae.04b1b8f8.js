"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6121],{1981:(e,i,a)=>{a.r(i),a.d(i,{data:()=>o});const o={key:"v-e24badae",path:"/pl_PL/",title:"Dom",lang:"pl-PL",frontmatter:{home:!0,title:"Dom",header:{overlay_image:"/assets/images/home-page-feature.png",overlay_filter:.5}},excerpt:"",headers:[{level:2,title:"Czym jest homebrew?",slug:"czym-jest-homebrew",children:[]},{level:2,title:"Co ten przewodnik zrobi z moim systemem?",slug:"co-ten-przewodnik-zrobi-z-moim-systemem",children:[]},{level:2,title:"Co mogę zrobić modując swój system?",slug:"co-moge-zrobic-modujac-swoj-system",children:[]},{level:2,title:"Gdzie mogę znaleźć aplikacje homebrew?",slug:"gdzie-moge-znalezc-aplikacje-homebrew",children:[]},{level:2,title:"Co należy wiedzieć przed rozpoczęciem?",slug:"co-nalezy-wiedziec-przed-rozpoczeciem",children:[]}],filePathRelative:"pl_PL/index.md",git:{updatedTime:1640748342e3,contributors:[{name:"triangle",email:"79382000+spellboundtriangle@users.noreply.github.com",commits:1}]}}},7779:(e,i,a)=>{a.r(i),a.d(i,{default:()=>_});var o=a(6252);const r={class:"custom-container tip"},n=(0,o._)("p",{class:"custom-container-title"},"TIP",-1),t=(0,o.Uk)("Aby uzyskać całkowity przewodnik do homebrew i niestandardowych firmware dla innych urządzeń, sprawdź poradnik "),l={href:"https://cfw.guide/",target:"_blank",rel:"noopener noreferrer"},s=(0,o.Uk)("CFW.Poradnik"),c=(0,o.Uk)("."),m=(0,o.uE)('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Ten przewodnik nie jest kompatybilny z konsolami deweloperskimi Nintendo DSi.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Dokładnie przeczytaj wszystkie strony wprowadzające (łącznie z tą!) przed przystąpieniem do pracy.</p></div><h2 id="czym-jest-homebrew" tabindex="-1"><a class="header-anchor" href="#czym-jest-homebrew" aria-hidden="true">#</a> Czym jest homebrew?</h2>',3),z={href:"https://en.wikipedia.org/wiki/Homebrew_(video_games)",target:"_blank",rel:"noopener noreferrer"},d=(0,o.Uk)("Aplikacje Homebrew"),p=(0,o.Uk)(" są nielicencjonowanymi programami stworzonymi dla systemów zamkniętych, takich jak Nintendo DSi. Aplikacje te mogą obejmować zarówno programy użytkowe, jak i niestandardowe gry homebrew."),w=(0,o.uE)('<p>Homebrew można uruchomić za darmo na wszystkich konsolach Nintendo DSi, niezależnie od wersji firmware&#39;u czy regionu. Wszystko, czego potrzebujesz, to punkt wejścia i karta SD do przechowywania swojego homebrew. Główny punkt wejścia użyty w tym poradniku nazywa się Memory Pit, ale istnieją inne punkty wejścia, których możesz użyć, jeśli Memory Pit jest dla ciebie bezużyteczny.</p><h2 id="co-ten-przewodnik-zrobi-z-moim-systemem" tabindex="-1"><a class="header-anchor" href="#co-ten-przewodnik-zrobi-z-moim-systemem" aria-hidden="true">#</a> Co ten przewodnik zrobi z moim systemem?</h2><p>Pamiętaj, że poradnik jest skonstruowany liniowo, ale to zależy od tego, jak głęboko chcesz się posunąć w modowaniu systemu.</p><ul><li>Ustawimy punkt wejścia, aby uruchomić podstawowy homebrew poprzez Memory Pit, czyli exploit dla aplikacji Nintendo DSi Camera</li><li>Następnie wykonamy kopię zapasową NAND, która jest przydatna jako punkt przywracania w przypadku, gdyby coś się zepsuło</li><li>Wreszcie, dla użytkowników, którzy chcą zdobyć dostęp do pełnych możliwości DSi, przejdziemy ich przez instalację Unlaunch. Unlaunch pozwala na uruchamianie homebrew z większymi uprawnieniami (takimi jak dostęp do Pola-1) <ul><li>Instalacja Unlaunch modyfikuje twoją pamięć NAND, a w skrajnych przypadkach ma potencjał do <strong>zablokowania</strong> systemu. Jeśli nie chcesz ryzykować, możesz przestać po zrobieniu kopii zapasowej NAND</li></ul></li></ul><h2 id="co-moge-zrobic-modujac-swoj-system" tabindex="-1"><a class="header-anchor" href="#co-moge-zrobic-modujac-swoj-system" aria-hidden="true">#</a> Co mogę zrobić modując swój system?</h2><ul><li>Run Nintendo DS(i) game backups or ROM hacks from your DSi SD card without the need of a flashcard</li><li>Uruchom dowolny DSiWare (z innego regionu i/lub ekskluzywy na 3ds) z karty SD</li><li>Uruchom aplikacje DSiWare i homebrew trzymając specyficzne przyciski podczas włączania Nintendo DSi</li><li>Uruchom dawne klasyki za pomocą różnych emulatorów</li><li>Użyj normalnie niekompatybilnych flaschardów</li><li>Redirect your NAND to the SD card using hiyaCFW</li><li>Obejrzyj swoje ulubione filmy używając MPEG4Player</li><li>Wyświetlanie obrazu (zwanego rozbryzgiem startowym) podczas uruchamiania systemu</li><li>Play homebrew games</li></ul><h2 id="gdzie-moge-znalezc-aplikacje-homebrew" tabindex="-1"><a class="header-anchor" href="#gdzie-moge-znalezc-aplikacje-homebrew" aria-hidden="true">#</a> Gdzie mogę znaleźć aplikacje homebrew?</h2>',7),y={href:"https://db.universal-team.net/ds",target:"_blank",rel:"noopener noreferrer"},u=(0,o.Uk)("Universal-DB"),h=(0,o.Uk)(" zawiera większość nowoczesnych homebrew, z ładnym wyszukiwaniem i sortowaniem, aby śledzić, co zostało ostatnio zaktualizowane"),k={href:"https://www.gamebrew.org/wiki/List_of_all_DS_homebrew",target:"_blank",rel:"noopener noreferrer"},b=(0,o.Uk)("GameBrew"),j=(0,o.Uk)(" ma wiele starszych homebrew, jednak wiele z nich będzie działać tylko na flashcardach"),g=(0,o.uE)('<h2 id="co-nalezy-wiedziec-przed-rozpoczeciem" tabindex="-1"><a class="header-anchor" href="#co-nalezy-wiedziec-przed-rozpoczeciem" aria-hidden="true">#</a> Co należy wiedzieć przed rozpoczęciem?</h2><ul><li>W systemie Windows zaleca się, aby <a href="file-extensions-%28windows%29">pokazać rozszerzenia plików</a>, jeśli używasz domyślnego Eksploratora plików</li><li>Jedyne ryzyko związane z awarią pochodzi z instalacji Unlaunch, a ryzyko to jest minimalne</li><li>Jeśli nie masz doświadczenia w kopiowaniu plików na kartę SD, mamy do dyspozycji narzędzia pomocnicze</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Przejdź do <a href="launching-the-exploit">Uruchamianie Exploitu</a></p></div>',3),f={},_=(0,a(3744).Z)(f,[["render",function(e,i){const a=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",r,[n,(0,o._)("p",null,[t,(0,o._)("a",l,[s,(0,o.Wm)(a)]),c])]),m,(0,o._)("p",null,[(0,o._)("a",z,[d,(0,o.Wm)(a)]),p]),w,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("a",y,[u,(0,o.Wm)(a)]),h]),(0,o._)("li",null,[(0,o._)("a",k,[b,(0,o.Wm)(a)]),j])]),g],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const a=e.__vccOpts||e;for(const[e,o]of i)a[e]=o;return a}}}]);