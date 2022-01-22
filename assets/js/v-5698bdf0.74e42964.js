"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1516],{429:(a,e,n)=>{n.r(e),n.d(e,{data:()=>i});const i={key:"v-5698bdf0",path:"/ro_RO/troubleshooting.html",title:"Troubleshooting",lang:"ro-RO",frontmatter:{title:"Troubleshooting"},excerpt:"",headers:[{level:2,title:"Unlaunch",slug:"unlaunch",children:[{level:3,title:"Unlaunch îngheață la MISMATCH IN FAT COPIES",slug:"unlaunch-ingheata-la-mismatch-in-fat-copies",children:[]},{level:3,title:'Nu se aude nimic sau splash-ul de lansare nu apare când lansez "Launcher" în Unlaunch',slug:"nu-se-aude-nimic-sau-splash-ul-de-lansare-nu-apare-cand-lansez-launcher-in-unlaunch",children:[]},{level:3,title:"Când pornesc consola după ce am instalat Unlaunch apare doar un ecran negru",slug:"cand-pornesc-consola-dupa-ce-am-instalat-unlaunch-apare-doar-un-ecran-negru",children:[]},{level:3,title:"După ce am insatlat Unlaunch, sunt blocat la pornirea unei aplicații sau în Meniul de Fișiere Unlaunch",slug:"dupa-ce-am-insatlat-unlaunch-sunt-blocat-la-pornirea-unei-aplicatii-sau-in-meniul-de-fisiere-unlaunch",children:[]},{level:3,title:"Alte probleme cu Unalunch",slug:"alte-probleme-cu-unalunch",children:[]}]},{level:2,title:"TWiLight Menu++",slug:"twilight-menu",children:[]},{level:2,title:"Asistență suplimentară",slug:"asistenta-suplimentara",children:[]}],filePathRelative:"ro_RO/troubleshooting.md",git:{updatedTime:1642879936e3}}},2484:(a,e,n)=>{n.r(e),n.d(e,{default:()=>y});var i=n(6252);const r=(0,i.uE)('<h2 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h2><h3 id="unlaunch-ingheata-la-mismatch-in-fat-copies" tabindex="-1"><a class="header-anchor" href="#unlaunch-ingheata-la-mismatch-in-fat-copies" aria-hidden="true">#</a> Unlaunch îngheață la <code>MISMATCH IN FAT COPIES</code></h3><p>twlnf are o eroare critică în care nu actualizează corect întregul NAND după ce este modificat, ce cauzează anumite aplicații homebrew (precum instalatorul Unlaunch) să afișeze o eroare.</p><p>Deși se poate repara, metoda de a face asta depinde de fiecare sistem. O metodă este să ștergi orice joc DSiWare instalat în trecut prin twlnf, dar a fost descoperit că mutarea <em>tuturor</em> jocurilor DSiWare pe cardul SD și înapoi pe sistem poate ajuta în anumite cazuri.</p><p>Dacă ți-ai dezactualizat sistemul în trecut, actualizarea la v1.4.5 (sau v1.4.6 dacă regiunea consolei DSi este China sau Coreea) poate ajuta la repararea acestui bug.</p><p>Dacă problema persistă, încearcă asta:</p>',6),l=(0,i.Uk)("Montează copia NAND cu "),t={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},u=(0,i.Uk)("ninfs"),c=(0,i.Uk)(", și pornește opțiunea "),s=(0,i._)("code",null,"Allow writing",-1),o=(0,i.Uk)("Odată ce copia NAND este montată, montează "),d=(0,i._)("code",null,"twl_main.img",-1),h=(0,i.Uk)(". Dacă ești pe Windows, poți folosi "),p={href:"https://www.osforensics.com/tools/mount-disk-images.html",target:"_blank",rel:"noopener noreferrer"},m=(0,i.Uk)("OSFMount"),f=(0,i.Uk)(" pentru a monta imaginea"),g=(0,i._)("li",null,[(0,i.Uk)("Demontează "),(0,i._)("code",null,"twl_main.img"),(0,i.Uk)(", după demontează copia NAND în ninfs dacă NAND-ul a fost salvat, urmărește "),(0,i._)("a",{href:"restoring-nand"},"Restaurare NAND"),(0,i.Uk)(" și continuă cu "),(0,i._)("a",{href:"installing-unlaunch"},"Instalarea Unlaunch"),(0,i.Uk)(".")],-1),b=(0,i._)("h3",{id:"nu-se-aude-nimic-sau-splash-ul-de-lansare-nu-apare-cand-lansez-launcher-in-unlaunch",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#nu-se-aude-nimic-sau-splash-ul-de-lansare-nu-apare-cand-lansez-launcher-in-unlaunch","aria-hidden":"true"},"#"),(0,i.Uk)(' Nu se aude nimic sau splash-ul de lansare nu apare când lansez "Launcher" în Unlaunch')],-1),k=(0,i.Uk)("Dezvoltatorul Unlaunch-ului (nocash) a oprit implicit muzica de fundal și splash-ul de pornire. Poți recâștiga aceste efecte prin a "),U=(0,i._)("a",{href:"installing-unlaunch"},"reinstala Unlaunch",-1),_=(0,i.Uk)(" folosind TWiLight Menu++, sau prin folosirea "),D={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},z=(0,i.Uk)("hiyaCFW"),w=(0,i.Uk)("."),N=(0,i._)("h3",{id:"cand-pornesc-consola-dupa-ce-am-instalat-unlaunch-apare-doar-un-ecran-negru",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#cand-pornesc-consola-dupa-ce-am-instalat-unlaunch-apare-doar-un-ecran-negru","aria-hidden":"true"},"#"),(0,i.Uk)(" Când pornesc consola după ce am instalat Unlaunch apare doar un ecran negru")],-1),v=(0,i.Uk)("Încearcă să scoți cardul SD și să repornești consola. Dacă tot apare un ecran negru, va trebui să îți instakezi NAND-ul printr-un "),A={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},S=(0,i.Uk)("hardmod"),T=(0,i.Uk)("."),O=(0,i.uE)('<h3 id="dupa-ce-am-insatlat-unlaunch-sunt-blocat-la-pornirea-unei-aplicatii-sau-in-meniul-de-fisiere-unlaunch" tabindex="-1"><a class="header-anchor" href="#dupa-ce-am-insatlat-unlaunch-sunt-blocat-la-pornirea-unei-aplicatii-sau-in-meniul-de-fisiere-unlaunch" aria-hidden="true">#</a> După ce am insatlat Unlaunch, sunt blocat la pornirea unei aplicații sau în Meniul de Fișiere Unlaunch</h3><p>Aceasta a fost cauzată probabil de alegerea unei aplicații greșite pentru opțiunea <code>NO BUTTON</code> în Unlaunch. Ține apăsat pe <kbd class="face">A</kbd> + <kbd class="face">B</kbd> în timp ce pornești consola, mergi la <code>OPTIONS</code>, și setează <code>NO BUTTON</code> la orice preferință ai.</p><h3 id="alte-probleme-cu-unalunch" tabindex="-1"><a class="header-anchor" href="#alte-probleme-cu-unalunch" aria-hidden="true">#</a> Alte probleme cu Unalunch</h3><p>Dacă Unlaunch afișează <code>Clusters too large</code>, <code>Bad VBR</code>, <code>Bad MBR</code>, sau nu afișează nicio aplicație în timp ce cardul SD este inserat, cardul tău SD cel mai probabil nu a fost formatat corect. Reurmărește <a href="sd-card-setup">Setarea Cardului SD</a>.</p><h2 id="twilight-menu" tabindex="-1"><a class="header-anchor" href="#twilight-menu" aria-hidden="true">#</a> TWiLight Menu++</h2>',5),W=(0,i.Uk)("Pentru ajutor în legătură cu TWiLIght Menu++, vezi pagina sa de "),M={href:"https://wiki.ds-homebrew.com/twilightmenu/faq",target:"_blank",rel:"noopener noreferrer"},C=(0,i.Uk)("FAQ & Troubleshooting"),x=(0,i.Uk)(" pe DS-Homebrew Wiki."),I=(0,i._)("h2",{id:"asistenta-suplimentara",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#asistenta-suplimentara","aria-hidden":"true"},"#"),(0,i.Uk)(" Asistență suplimentară")],-1),R=(0,i.Uk)("Dacă ai întâmpinat o problemă ce nu a fost rezolvată aici, sau una care persistă chiar și cu soluțiile oferite, cere ajutor în serverul de Discord "),j={href:"https://discord.gg/yD3spjv",target:"_blank",rel:"noopener noreferrer"},B=(0,i.Uk)("DS"),F=(0,i._)("sup",null,"(i)",-1),L=(0,i.Uk)(" Mode Hacking!"),P=(0,i.Uk)("."),H={},y=(0,n(3744).Z)(H,[["render",function(a,e){const n=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("ol",null,[(0,i._)("li",null,[l,(0,i._)("a",t,[u,(0,i.Wm)(n)]),c,s]),(0,i._)("li",null,[o,d,h,(0,i._)("a",p,[m,(0,i.Wm)(n)]),f]),g]),b,(0,i._)("p",null,[k,U,_,(0,i._)("a",D,[z,(0,i.Wm)(n)]),w]),N,(0,i._)("p",null,[v,(0,i._)("a",A,[S,(0,i.Wm)(n)]),T]),O,(0,i._)("p",null,[W,(0,i._)("a",M,[C,(0,i.Wm)(n)]),x]),I,(0,i._)("p",null,[R,(0,i._)("a",j,[B,F,L,(0,i.Wm)(n)]),P])],64)}]])},3744:(a,e)=>{e.Z=(a,e)=>{const n=a.__vccOpts||a;for(const[a,i]of e)n[a]=i;return n}}}]);