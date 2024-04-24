import{_ as s,r as l,o as r,c,a as e,d as i,b as o,w as n,e as d}from"./app-ULTNArho.js";const h={},u=e("p",null,[i("L'applicazione homebrew principale che installerai con questa guida è "),e("strong",null,"TW"),i("i"),e("strong",null,"L"),i("ight Menu++, un aggiornamento/sostituzione del menu del Nintendo DSi che consente l'esecuzione di altre applicazioni homebrew, giochi commerciali per DS, emulatori di vecchie console e altro ancora.")],-1),p=e("p",null,"Per prima cosa lo scaricheremo, insieme ad altre applicazione homebrew, in preparazione dell'esecuzione dell'exploit.",-1),_=e("h2",{id:"requisiti",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),i(" Requisiti")],-1),m=e("li",null,"Un modo per copiare i file scaricati sulla scheda SD",-1),g={href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://apps.apple.com/us/app/the-unarchiver/id425424353",target:"_blank",rel:"noopener noreferrer"},f={href:"https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver",target:"_blank",rel:"noopener noreferrer"},x=e("ul",null,[e("li",null,"Ti consigliamo di non usare WinRAR, perché è noto causare problemi"),e("li",null,"If you're using Windows 11, we also advise you to not use it's built-in extractor, as it'll cause an error saying that the filename is too long or not valid")],-1),b=e("h2",{id:"sezione-i-preparazione",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sezione-i-preparazione","aria-hidden":"true"},"#"),i(" Sezione I - Preparazione")],-1),v={class:"custom-container warning"},S=e("p",{class:"custom-container-title"},"WARNING",-1),T=e("li",null,"Inserisci la scheda SD nel PC",-1),y={href:"https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds",target:"_blank",rel:"noopener noreferrer"},D=d("<li>Copia la cartella <code>_nds</code> estratta da <code>TWiLightMenu-DSi.7z</code> nella root della scheda SD</li><li>Copia il file <code>BOOT.NDS</code> estratto da <code>TWiLightMenu-DSi.7z</code> nella root della scheda SD</li><li>Copia il file <code>dumpTool.nds</code> nella root della scheda SD</li>",3),I={class:"custom-container tip"},P=e("p",{class:"custom-container-title"},"TIP",-1),k={href:"https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png",target:"_blank",rel:"noopener noreferrer"},L=e("h2",{id:"sezione-ii-scegliere-l-exploit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sezione-ii-scegliere-l-exploit","aria-hidden":"true"},"#"),i(" Sezione II - Scegliere l'exploit")],-1),q=e("p",null,"Da qui hai tre opzioni, con una piccola differenza in ciò che ciascuna comporta.",-1),M=e("h3",{id:"installazione-di-unlaunch-tramite-memory-pit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installazione-di-unlaunch-tramite-memory-pit","aria-hidden":"true"},"#"),i(" Installazione di Unlaunch tramite Memory Pit")],-1),U=e("p",null,"Memory Pit è un exploit che utilizza la Fotocamera Nintendo DSi, compatibile con tutte le versioni del firmware. Facoltativamente, questo exploit può essere utilizzato per installare Unlaunch, un exploit del bootcode che consente il pieno controllo della console all'avvio.",-1),C=e("p",null,[i("Poiché Memory Pit ha una compatibilità limitata con gli homebrew, si raccomanda di installare Unlaunch, invece di utilizzare Memory Pit in modo autonomo. Visto che questo è il metodo più semplice per installare Unlaunch, è perciò il percorso più consigliato. Tuttavia, c'è un rischio molto marginale di causare un "),e("strong",null,"brick"),i(" della console durante l'installazione di Unlaunch, quindi se questo ti preoccupa, segui il metodo alternativo sottostante.")],-1),N={class:"custom-container tip"},W=e("p",{class:"custom-container-title"},"TIP",-1),A=e("h3",{id:"stylehax",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stylehax","aria-hidden":"true"},"#"),i(" stylehax")],-1),F=e("p",null,"stylehax è un exploit che utilizza l'applicazione DSi Browser e può essere utilizzato come alternativa a Memory Pit per l'installazione di Unlaunch (spiegato sopra) nel caso in cui il DSi abbia la fotocamera rotta.",-1),R=e("p",null,"Questo exploit è raccomandato se non si vuole utilizzare Unlaunch, poiché l'utilizzo dell'exploit Memory Pit causa problemi in alcuni giochi e homebrew.",-1),B={class:"custom-container tip"},V=e("p",{class:"custom-container-title"},"TIP",-1),E=e("h3",{id:"flipnote-lenny",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flipnote-lenny","aria-hidden":"true"},"#"),i(" Flipnote Lenny")],-1),O=e("p",null,"Flipnote Lenny è un exploit che utilizza l'applicazione Flipnote Studio.",-1),Q=e("p",null,"Se hai Flipnote Studio e non hai intenzione di installare Unlaunch (spiegato sopra), questo exploit è raccomandato per la stessa ragione di stylehax.",-1),G=e("p",null,"È sempre possibile installare Unlaunch più tardi se dovessi cambiare idea.",-1),Z={class:"custom-container tip"},H=e("p",{class:"custom-container-title"},"TIP",-1);function j(J,K){const t=l("ExternalLinkIcon"),a=l("RouterLink");return r(),c("div",null,[u,p,_,e("ul",null,[m,e("li",null,[i("An application that can extract archives, such as "),e("a",g,[i("7-Zip"),o(t)]),i(" (Windows), "),e("a",z,[i("The Unarchiver"),o(t)]),i(" (macOS), or "),e("a",f,[i("ZArchiver"),o(t)]),i(" (Chromebook) "),x])]),b,e("div",v,[S,e("p",null,[i("Assicurati che la scheda SD sia "),o(a,{to:"/it_IT/sd-card-setup.html"},{default:n(()=>[i("formattata correttamente")]),_:1}),i(".")])]),e("ol",null,[T,e("li",null,[i("Scarica la versione più recente di "),e("a",y,[i("TWiLight Menu++"),o(t)])]),e("li",null,[i("Scarica la versione più recente di "),e("a",w,[i("dumpTool"),o(t)])]),D]),e("div",I,[P,e("p",null,[i('Non sai cosa sia la "root" della SD? '),e("a",k,[i("Guarda questa immagine"),o(t)])])]),L,q,M,U,C,e("div",N,[W,e("p",null,[i("Continua con "),o(a,{to:"/it_IT/launching-the-exploit.html"},{default:n(()=>[i("Avvio dell'exploit")]),_:1})])]),A,F,R,e("div",B,[V,e("p",null,[i("Continua con "),o(a,{to:"/it_IT/launching-the-browser-exploit.html"},{default:n(()=>[i("Avvio dell'exploit(stylehax)")]),_:1})])]),E,O,Q,G,e("div",Z,[H,e("p",null,[i("Continua con "),o(a,{to:"/it_IT/launching-the-flipnote-exploit.html"},{default:n(()=>[i("Avvio dell'exploit (Flipnote Lenny)")]),_:1})])]),e("p",null,[i("Per un confronto più dettagliato di pro e contro degli exploit disponibili, consulta "),o(a,{to:"/it_IT/faq.html#which-is-the-best-exploit"},{default:n(()=>[i("Qual è l'exploit migliore?")]),_:1}),i(" nelle FAQ.")])])}const Y=s(h,[["render",j],["__file","get-started.html.vue"]]);export{Y as default};