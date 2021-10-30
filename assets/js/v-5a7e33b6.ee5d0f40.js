"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9471],{611:(e,a,i)=>{i.r(a),i.d(a,{data:()=>l});const l={key:"v-5a7e33b6",path:"/it_IT/restoring-nand.html",title:"Ripristino di un backup della NAND",lang:"it-IT",frontmatter:{},excerpt:"",headers:[{level:2,title:"Requisiti",slug:"requisiti",children:[]},{level:2,title:"Fai un dump della BIOS per utilizzarla in no$gba",slug:"fai-un-dump-della-bios-per-utilizzarla-in-no-gba",children:[]},{level:2,title:"Testare il backup della NAND",slug:"testare-il-backup-della-nand",children:[]},{level:2,title:"Uninstalling Unlaunch from your NAND backup (optional)",slug:"uninstalling-unlaunch-from-your-nand-backup-optional",children:[]},{level:2,title:"Flash del backup della NAND (Software)",slug:"flash-del-backup-della-nand-software",children:[]},{level:2,title:"Flash del backup della NAND (Hardmod)",slug:"flash-del-backup-della-nand-hardmod",children:[]}],filePathRelative:"it_IT/restoring-nand.md",git:{updatedTime:163562345e4,contributors:[{name:"Pk11",email:"epicpkmn11@outlook.com",commits:1}]}}},3955:(e,a,i)=>{i.r(a),i.d(a,{default:()=>X});var l=i(6252);const n=(0,l.uE)('<h1 id="ripristino-di-un-backup-della-nand" tabindex="-1"><a class="header-anchor" href="#ripristino-di-un-backup-della-nand" aria-hidden="true">#</a> Ripristino di un backup della NAND</h1><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>ATTENZIONE! Questo processo è <em><strong>potenzialmente pericoloso</strong></em>. Anche seguendo questi passaggi esattamente vi è ancora il potenziale di brickare il DSi, poiché la sua NAND è di qualità molto bassa, soprattutto se si flasha più volte! Questo procedimento dovrebbe essere usato solo come ultima risorsa!</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Non saltare <em>niente</em> in questa pagina, visto che qualsiasi errore aumenta notevolmente le possibilità di brickare il tuo DSI.</p></div><p>In primo luogo, alcune alternative più sicure per le ragioni che portano al voler fare questo:</p>',4),o=(0,l._)("li",null,"Installare DSiWare può essere fatto utilizzando hiyaCFW o TWiLight Menu++",-1),r=(0,l.Uk)("Le immagini possono essere recuperate usando "),t={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},s=(0,l.Uk)("ninfs"),d=(0,l.Uk)(", insieme a hiyaCFW o TWiLight Menu++ se le vuoi su console. L'ultima versione di HiyaCFW Helper ti permette di copiare le tue foto dalla NAND alla SDNAND durante la configurazione"),u=(0,l._)("li",null,[(0,l.Uk)("Si può ripristinare la configurazione dei pulsanti di Unlaunch dal menu, a cui è possibile accedere tenendo premuto "),(0,l._)("kbd",{class:"face"},"A"),(0,l.Uk)(" + "),(0,l._)("kbd",{class:"face"},"B"),(0,l.Uk)(" durante l'accensione della console")],-1),c=(0,l._)("li",null,"Avviare Unlaunch risulta in un errore? Estrai la scheda SD e prova a riavviare il sistema. Se funziona, allora è un difetto con la scheda SD e il ripristino di un backup della NAND non risolverà",-1),p=(0,l.Uk)('"An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see '),h={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},m=(0,l.Uk)("hiyaCFW FAQ & Troubleshooting"),b=(0,l.Uk)(" on the DS-Homebrew Wiki for more information"),k=(0,l.Uk)("Eventuali errori in TWiLight Menu++ non sono correlati e dovresti provare a reinstallare TWiLight Menu++ o chiedere aiuto su "),f={href:"https://ds-homebrew.com/discord",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("Discord"),N=(0,l._)("li",null,'La disinstallazione di Unlaunch, che sia flashando la NAND oppure usando il suo uninstaller, deve essere evitata a meno che non sia assolutamente necessaria, è possibile impostare le autoboot keys su "Launcher" e il tuo DSi sarà come se fosse di fabbrica',-1),v=(0,l._)("p",null,"L'unica cosa che dovresti fare con la tua NAND è installare Unlaunch. Usa le alternative altrimenti.",-1),D=(0,l._)("h2",{id:"requisiti",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),(0,l.Uk)(" Requisiti")],-1),A=(0,l._)("li",null,[(0,l.Uk)("Il tuo backup della NAND "),(0,l._)("strong",null,"dallo stesso DSi")],-1),S=(0,l.Uk)("La versione più recente di "),U={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},_=(0,l.Uk)("MakeForwarder"),w=(0,l._)("li",null,"Un modo per eseguire homebrew con l'accesso alla NAND, come Unlaunch o Memory Pit",-1),y={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},z=(0,l.Uk)("no$gba"),E=(0,l.Uk)(", per controllare il backup della NAND (scarica la versione di gioco di Windows) "),I=(0,l.Uk)("gli utenti macOS e Linux possono usare "),W={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},q=(0,l.Uk)("WINE"),C=(0,l.Uk)(" per avviare no$gba"),O={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},T=(0,l.Uk)("dsibiosdumper"),L=(0,l.uE)('<h2 id="fai-un-dump-della-bios-per-utilizzarla-in-no-gba" tabindex="-1"><a class="header-anchor" href="#fai-un-dump-della-bios-per-utilizzarla-in-no-gba" aria-hidden="true">#</a> Fai un dump della BIOS per utilizzarla in no$gba</h2><ol><li>Estrai <code>dsibiosdumper.nds</code> dall&#39;archivio <code>dsibiosdumper.zip</code> e posizionalo ovunque sulla tua scheda SD</li><li>Accendi la console tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd><ul><li>Questo dovrebbe avviare il menu di Unlaunch</li></ul></li><li>Avvia dsibiosdumper tramite il menu di Unlaunch</li><li>Premi <kbd class="face">A</kbd> per scaricare la BIOS sulla scheda SD</li><li>Premi <kbd>START</kbd> per uscire da dsibiosdumper</li></ol><h2 id="testare-il-backup-della-nand" tabindex="-1"><a class="header-anchor" href="#testare-il-backup-della-nand" aria-hidden="true">#</a> Testare il backup della NAND</h2><p>È molto importante verificare che il backup della NAND stia funzionando prima di tentare di ripristinarla alla console, visto che se mostra un errore di brick in no$gba allora molto probabilmente brickera pure la tua console.</p><ol><li>Estrai <code>NO$GBA.EXE</code> da <code>no$gba-w.zip</code> in una cartella sul tuo computer</li><li>Copia il tuo backup della NAND nella cartella che hai inserito <code>NO$GBA.EXE</code> e rinominalo in <code>DSI-1.MMC</code></li><li>Copia <code>bios7i.bin</code> e <code>bios9i.bin</code> nella cartella che metti <code>NO$GBA.EXE</code>, rinominati rispettivamente <code>BIOSDSI7.ROM</code> e <code>BIOSDSI9.ROM</code>.</li><li>Avvia <code>NO$GBA.EXE</code></li><li>Clicca su <code>Options</code> &gt; <code>Emulation Setup</code> per aprire la finestra Emulation Setup</li><li>Cambia <code>Reset/Startup Entrypoint</code> in <code>BIOS GBA/NDS (Nintendo logo)</code></li><li>Cambia <code>NDS Mode/Colors</code> in <code>DSi (retail/16MB)</code></li><li>Click <code>Save Now</code></li><li>Avvia qualsiasi ROM Nintendo DS (<code>.nds</code> file)</li></ol><p>If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. Se mostra qualsiasi tipo di errore <em><strong>non flashare quel backup</strong></em>!</p><h2 id="uninstalling-unlaunch-from-your-nand-backup-optional" tabindex="-1"><a class="header-anchor" href="#uninstalling-unlaunch-from-your-nand-backup-optional" aria-hidden="true">#</a> Uninstalling Unlaunch from your NAND backup (optional)</h2><p>Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do <strong>not</strong> need to do this section.</p>',8),M=(0,l.Uk)("Download the latest version of the "),F={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},B=(0,l.Uk)("Unlaunch installer"),R=(0,l.uE)("<li>Extract <code>UNLAUNCH.DSI</code> from <code>unlaunch.zip</code></li><li>Launch <code>UNLAUNCH.DSI</code> in no$gba and start it from the Game Card slot <ul><li>This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu</li></ul></li><li>Choose <code>Uninstall</code></li><li>Once complete, choose <code>Power down</code></li><li>Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly</li>",5),x=(0,l.uE)('<h2 id="flash-del-backup-della-nand-software" tabindex="-1"><a class="header-anchor" href="#flash-del-backup-della-nand-software" aria-hidden="true">#</a> Flash del backup della NAND (Software)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Assicurati di aver letto attraverso i passaggi sopra visto che è qui che diventa pericoloso. Se siete stati collegati direttamente qui senza seguire quanto sopra, allora tornate in alto e leggere l&#39;intera pagina.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Assicurati che il tuo sistema Nintendo DSi sia ben caricato prima di iniziare questa sezione.</p></div><ol><li>Con la scheda SD inserita, accendi il tuo Nintendo DSi tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd></li><li>Avvia SafeNANDManager</li><li>Premi il pulsante per <code>avviare il ripristino della NAND</code></li><li>Una volta terminato il ripristino, premi <kbd>START</kbd> per spegnere il tuo DSi</li></ol><p>La tua NAND dovrebbe ora essere ripristinata.</p><h2 id="flash-del-backup-della-nand-hardmod" tabindex="-1"><a class="header-anchor" href="#flash-del-backup-della-nand-hardmod" aria-hidden="true">#</a> Flash del backup della NAND (Hardmod)</h2>',6),$=(0,l.Uk)("Se non riesci ad avviare il tuo Nintendo DSi, un hardmod è l'unico modo per ripristinare un backup NAND. La migliore guida che attualmente esiste è la guida "),H={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"},G=(0,l.Uk)(" Hardmod Nintendo DSi sulla DS-Homebrew Wiki"),P=(0,l.Uk)("."),Q={},X=(0,i(3744).Z)(Q,[["render",function(e,a){const i=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[n,(0,l._)("ul",null,[o,(0,l._)("li",null,[r,(0,l._)("a",t,[s,(0,l.Wm)(i)]),d]),u,c,(0,l._)("li",null,[p,(0,l._)("a",h,[m,(0,l.Wm)(i)]),b]),(0,l._)("li",null,[k,(0,l._)("a",f,[g,(0,l.Wm)(i)])]),N]),v,D,(0,l._)("ul",null,[A,(0,l._)("li",null,[S,(0,l._)("a",U,[_,(0,l.Wm)(i)])]),w,(0,l._)("li",null,[(0,l._)("a",y,[z,(0,l.Wm)(i)]),E,(0,l._)("ul",null,[(0,l._)("li",null,[I,(0,l._)("a",W,[q,(0,l.Wm)(i)]),C])])]),(0,l._)("li",null,[(0,l._)("a",O,[T,(0,l.Wm)(i)])])]),L,(0,l._)("ol",null,[(0,l._)("li",null,[M,(0,l._)("a",F,[B,(0,l.Wm)(i)])]),R]),x,(0,l._)("p",null,[$,(0,l._)("a",H,[G,(0,l.Wm)(i)]),P])],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{for(const[i,l]of a)e[i]=l;return e}}}]);