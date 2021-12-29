"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1877],{4176:(e,i,a)=>{a.r(i),a.d(i,{data:()=>l});const l={key:"v-0c1f3b11",path:"/it_IT/launching-the-exploit.html",title:"Avvio dell'exploit",lang:"it-IT",frontmatter:{title:"Avvio dell'exploit"},excerpt:"",headers:[{level:2,title:"Requisiti",slug:"requisiti",children:[]},{level:2,title:"Sezione I - Configurazione della Scheda SD",slug:"sezione-i-configurazione-della-scheda-sd",children:[{level:3,title:"Memory Pit",slug:"memory-pit",children:[]},{level:3,title:"TWiLight Menu++",slug:"twilight-menu",children:[]}]},{level:2,title:"Sezione II - Avviare l'exploit",slug:"sezione-ii-avviare-l-exploit",children:[]},{level:2,title:"Sezione III - Configurare TWiLight Menu++",slug:"sezione-iii-configurare-twilight-menu",children:[]}],filePathRelative:"it_IT/launching-the-exploit.md",git:{updatedTime:1640748342e3,contributors:[{name:"triangle",email:"79382000+spellboundtriangle@users.noreply.github.com",commits:1}]}}},6549:(e,i,a)=>{a.r(i),a.d(i,{default:()=>R});var l=a(6252);const t=(0,l._)("p",null,'Inizieremo configurando la tua scheda SD per avviare il nostro exploit. Per la maggior parte degli utenti, consigliamo di utilizzare un exploit chiamato "Memory Pit" che sfrutta un difetto nel modo in cui la fotocamera DSi gestisce i dati.',-1),o=(0,l._)("p",null,"Una volta lanciato l'exploit, ci avvierà in TWiLight Menu++, un'applicazione homebrew che funge da sostituto al Menù DSi.",-1),n=(0,l._)("h2",{id:"requisiti",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),(0,l.Uk)(" Requisiti")],-1),r=(0,l._)("li",null,"Un modo per trasferire i file scaricati sulla scheda SD",-1),s=(0,l.Uk)("Un'applicazione che può estrarre archivi, come "),c={href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},u=(0,l.Uk)("7-Zip"),d=(0,l.Uk)(" (Windows) o "),h={href:"https://apps.apple.com/us/app/the-unarchiver/id425424353",target:"_blank",rel:"noopener noreferrer"},p=(0,l.Uk)("The Unarchiver"),m=(0,l.Uk)(" (macOS)"),g=(0,l.uE)('<h2 id="sezione-i-configurazione-della-scheda-sd" tabindex="-1"><a class="header-anchor" href="#sezione-i-configurazione-della-scheda-sd" aria-hidden="true">#</a> Sezione I - Configurazione della Scheda SD</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Assicurati che la tua scheda SD sia <a href="sd-card-setup">formattata correttamente</a>.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Usi un dispositivo Windows, Linux o macOS? Usa <a href="lazy-dsi-downloader">Lazy DSi Downloader</a> per configurare automaticamente la tua scheda SD.</p></div><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3><ol><li>Assicurati che l&#39;applicazione Fotocamera Nintendo DSi non mostri il tutorial dopo l&#39;avvio <ul><li>Se il tutorial non viene mostrato, continue fino a quando non hai finito <ul><li>Se il tutorial si blocca mentre provi a completarlo, la tua fotocamera Nintendo DSi è probabilmente rotta in qualche modo. Utilizza un <a href="alternate-exploits">exploit alternativo</a></li></ul></li></ul></li><li>Scarica il binario Memory Pit corrispondente alla versione e alla regione del tuo sistema Nintendo DSi <ul><li>per le versioni <a href="/assets/files/memory_pit/256/pit.bin">1.0 - 1.3 (USA, EUR, AUS, JPN)</a></li><li>per le versioni <a href="/assets/files/memory_pit/768_1024/pit.bin">1.4 - 1.4.5 (USA, EUR, AUS, JPN)</a></li><li>tutte le versioni <a href="/assets/files/memory_pit/256/pit.bin">(KOR, CHN)</a></li></ul></li><li>Assicurati che il seguente percorso esista nella tua scheda SD: <code>sd:/private/ds/app/484E494A/</code><ul><li>Avrai già questa directory se hai precedentemente copiato delle foto nella tua scheda SD attraverso l&#39;applicazione Fotocamera Nintendo DSi. In tal caso, non è necessario eliminarla e ricrearla</li><li>Se non esiste, crea le cartelle manualmente</li></ul></li><li>Se c&#39;è già un file <code>pit.bin</code> dentro quel percorso, crea un backup di quel file</li><li>Copia il file Memory Pit <code>pit.bin</code> dentro questa cartella</li></ol>',5),f={class:"custom-container tip"},v=(0,l._)("p",{class:"custom-container-title"},"TIP",-1),S=(0,l.Uk)("Per capire come mai stiamo facendo questo, leggi il "),z=(0,l.Uk)("FAQ"),b=(0,l.Uk)("."),_=(0,l._)("h3",{id:"twilight-menu",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#twilight-menu","aria-hidden":"true"},"#"),(0,l.Uk)(" TWiLight Menu++")],-1),k=(0,l.Uk)("Scarica la versione piè recente di "),D={href:"https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z",target:"_blank",rel:"noopener noreferrer"},U=(0,l.Uk)("TWiLight Menu++"),T=(0,l._)("li",null,[(0,l.Uk)("Estrai la cartella "),(0,l._)("code",null,"_nds"),(0,l.Uk)(" da "),(0,l._)("code",null,"TWiLightMenu-DSi.7z"),(0,l.Uk)(" e mettila nella root della tua scheda SD")],-1),w=(0,l._)("li",null,[(0,l.Uk)("Estrai il file "),(0,l._)("code",null,"BOOT.NDS"),(0,l.Uk)(" da "),(0,l._)("code",null,"TWiLightMenu-DSi.7z"),(0,l.Uk)(" e mettilo nella root della tua scheda SD")],-1),I=(0,l.uE)('<h2 id="sezione-ii-avviare-l-exploit" tabindex="-1"><a class="header-anchor" href="#sezione-ii-avviare-l-exploit" aria-hidden="true">#</a> Sezione II - Avviare l&#39;exploit</h2><ol><li>Assicurati che la tua scheda SD sia inserita nel tuo Nintendo DSi</li><li>Avvia il tuo Nintendo DSi e apri l&#39;applicazione Fotocamera Nintendo DSi</li><li>Seleziona l&#39;icona della scheda SD in alto a destra <ul><li>Se ricevi un messaggio che dice che la scheda SD non è inserita, usa un&#39;altra SD</li><li>Se ricevi un messaggio che dice che la tua scheda SD non può essere usata, assicurati che sia <a href="sd-card-setup">formattata correttamente</a></li></ul></li><li>Seleziona l&#39;album foto della tua scheda SD <ul><li>Lo schermo dovrebbe lampeggiare color magenta se Memory Pit è stato copiato correttamente</li></ul></li></ol>',2),W={class:"custom-container warning"},x=(0,l._)("p",{class:"custom-container-title"},"WARNING",-1),y=(0,l.Uk)("Se lo schermo superiore diventa verde, non hai il file "),M=(0,l._)("code",null,"BOOT.NDS",-1),N=(0,l.Uk)(" di TWiLight Menu++ nella root della tua scheda SD. Segui la"),A=(0,l.Uk)("guida per la configurazione di TWiLight Menu++"),L=(0,l.Uk)(" di nuovo."),q=(0,l.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se entri nel&#39;album foto della scheda SD e non succede nulla di insolito, assicurati di aver scaricato la corretta versione di Memory Pit per la tua versione e regione, e di averla piazzata nella cartella corretta nella rua scheda SD.</p></div><p>Ora dovresti vedere la schermata di selezione della lingua di TWiLight Menu++.</p><h2 id="sezione-iii-configurare-twilight-menu" tabindex="-1"><a class="header-anchor" href="#sezione-iii-configurare-twilight-menu" aria-hidden="true">#</a> Sezione III - Configurare TWiLight Menu++</h2><ol><li>Quando richiesto, imposta la lingua e regione che preferisci</li><li>Quando sei dentro TWiLight Menu++, premi SELECT per passare al menù classico del DS</li><li>Tocca il pulsante in mezzo in basso per aprire le impostazioni</li><li>Premi <kbd class="l">L</kbd> / <kbd class="r">R</kbd> o <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> finché non raggiungi &quot;Imp. varie&quot;</li><li>Modifica la voce &quot;Regione SysNAND&quot; inserendo la regione della tua console</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Continua a <a href="dumping-nand">Dump della NAND</a></p></div>',5),P={},R=(0,a(3744).Z)(P,[["render",function(e,i){const a=(0,l.up)("OutboundLink"),P=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[t,o,n,(0,l._)("ul",null,[r,(0,l._)("li",null,[s,(0,l._)("a",c,[u,(0,l.Wm)(a)]),d,(0,l._)("a",h,[p,(0,l.Wm)(a)]),m])]),g,(0,l._)("div",f,[v,(0,l._)("p",null,[S,(0,l.Wm)(P,{to:"/it_IT/faq.html#what-functionality-will-i-lose-by-modding-my-system"},{default:(0,l.w5)((()=>[z])),_:1}),b])]),_,(0,l._)("ol",null,[(0,l._)("li",null,[k,(0,l._)("a",D,[U,(0,l.Wm)(a)])]),T,w]),I,(0,l._)("div",W,[x,(0,l._)("p",null,[y,M,N,(0,l.Wm)(P,{to:"/it_IT/launching-the-exploit.html#twilight-menu"},{default:(0,l.w5)((()=>[A])),_:1}),L])]),q],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const a=e.__vccOpts||e;for(const[e,l]of i)a[e]=l;return a}}}]);