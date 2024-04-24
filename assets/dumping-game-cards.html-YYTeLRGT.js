import{_ as l,r as o,o as s,c as d,a as e,d as i,b as a,w as r,e as c}from"./app-ULTNArho.js";const u={},h=e("p",null,"Questa sezione riguarda il dumping delle cartucce utilizzando GodMode9i, per usarle su emulatori, flashcard o sulla scheda SD tramite nds-bootstrap.",-1),p=e("h2",{id:"requisiti",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),i(" Requisiti")],-1),_=e("li",null,"La cartuccia di gioco del titolo che si desidera effettuare un dump",-1),m=e("h2",{id:"istruzioni",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#istruzioni","aria-hidden":"true"},"#"),i(" Istruzioni")],-1),f=e("h3",{id:"sezione-i-configurazione-della-scheda-sd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sezione-i-configurazione-della-scheda-sd","aria-hidden":"true"},"#"),i(" Sezione I - Configurazione della Scheda SD")],-1),z={href:"https://github.com/DS-Homebrew/GodMode9i/releases",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,[i("Estrai "),e("code",null,"GodMode9i.nds"),i(" dall'archivio GodMode9i e mettilo in un percorso qualsiasi sulla scheda SD")],-1),S=c('<h3 id="sezione-ii-istruzioni-nintendo-dsi" tabindex="-1"><a class="header-anchor" href="#sezione-ii-istruzioni-nintendo-dsi" aria-hidden="true">#</a> Sezione II - Istruzioni Nintendo DSi</h3><ol><li>Avvia GodMode9i</li><li>Assicurati che la scheda di gioco sia inserita nella console</li><li>Seleziona l&#39;opzione &quot;SCHEDA NDS&quot; in GodMode9i</li><li>Seleziona i dump da effettuare <ul><li>Le opzioni &quot;Trimmed&quot; per la ROM scaricheranno un file più piccolo che può salvare lo spazio della scheda SD. tuttavia non funzioneranno per la maggior parte delle patch come le ROM hack</li></ul></li><li>Ripeti i passaggi 2-4 per tutte le cartucce di cui desideri effettuare un dump</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>I dump delle schede di gioco saranno trovati in <code>sd:/gm9i/out</code>.</p></div>',3);function v(x,I){const n=o("RouterLink"),t=o("ExternalLinkIcon");return s(),d("div",null,[h,p,e("ul",null,[_,e("li",null,[i("Una console Nintendo DSi con "),a(n,{to:"/it_IT/installing-unlaunch.html"},{default:r(()=>[i("Unlaunch")]),_:1}),i(" installato")])]),m,f,e("ol",null,[e("li",null,[i("Scarica l'ultima versione di "),e("a",z,[i("GodMode9i"),a(t)])]),g]),S])}const D=l(u,[["render",v],["__file","dumping-game-cards.html.vue"]]);export{D as default};