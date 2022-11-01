"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6478],{3974:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n={key:"v-3ebb5ad1",path:"/de_DE/launching-the-exploit.html",title:"Den Exploit ausführen",lang:"de-DE",frontmatter:{title:"Den Exploit ausführen"},excerpt:"",headers:[{level:3,title:"Section I - Checking your DSi Camera Version",slug:"section-i-checking-your-dsi-camera-version",children:[]},{level:3,title:"Section II - Memory Pit",slug:"section-ii-memory-pit",children:[]},{level:2,title:"Section III - Launching the exploit",slug:"section-iii-launching-the-exploit",children:[]}],filePathRelative:"de_DE/launching-the-exploit.md"}},9822:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var n=i(6252);const o=(0,n._)("p",null,'Wir fangen damit an, die SD-Karte einzurichten, um den Exploit zu starten. Für die meisten Nutzer empfehlen wir einen Exploit namens "Memory Pit", welches einen Fehler in der Handhabung der Bildmetadaten durch die DSi-Kamera-Anwendung ausnutzt.',-1),a=(0,n._)("p",null,"Das Ausführen des Exploits wird TWiLight Menu++ starten, eine Homebrewanwednung, die als Ersatz für das DSi Menü dient.",-1),l={class:"custom-container tip"},r=(0,n._)("p",{class:"custom-container-title"},"TIP",-1),s=(0,n._)("h3",{id:"section-i-checking-your-dsi-camera-version",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#section-i-checking-your-dsi-camera-version","aria-hidden":"true"},"#"),(0,n.Uk)(" Section I - Checking your DSi Camera Version")],-1),u=(0,n._)("li",null,"Starte deine Konsole",-1),c=(0,n._)("li",null,"If you are prompted to complete the camera tutorial, do so now",-1),d=(0,n._)("li",null,"Open the album using the large button on the right",-1),h=(0,n._)("li",null,[(0,n.Uk)("Take note of whether you have a Facebook icon alongside the star, clubs, and heart, outlined in red here: "),(0,n._)("img",{src:"/assets/images/facebook-check.png",alt:"Screenshot of where the Facebook icon is located"})],-1),m=(0,n.uE)('<h3 id="section-ii-memory-pit" tabindex="-1"><a class="header-anchor" href="#section-ii-memory-pit" aria-hidden="true">#</a> Section II - Memory Pit</h3><ol><li>Download the correct Memory Pit binary for your Nintendo DSi Camera version: <ul><li><a href="/assets/files/memory_pit/768_1024/pit.bin">If you <em><strong>did</strong></em> have a Facebook icon</a></li><li><a href="/assets/files/memory_pit/256/pit.bin">If you did <em><strong>not</strong></em> have a Facebook icon</a></li></ul></li><li>Navigate to the <code>sd:/private/ds/app/484E494A/</code> folder on your SD card <ul><li>You will already have this directory if you have previously taken photos to your SD card via the Nintendo DSi Camera application. If so, you do not need to delete it and recreate it</li><li>If it does not exist, please create the individual folders</li></ul></li><li>If there is already a <code>pit.bin</code> file in that path, rename it to <code>tip.bin</code></li><li>Place the Memory Pit <code>pit.bin</code> file in this folder</li><li>If there&#39;s a folder named <code>DCIM</code> in the root of your SD card, make a back up of it so you don&#39;t lose the pictures inside, and then remove it from the SD card</li></ol><h2 id="section-iii-launching-the-exploit" tabindex="-1"><a class="header-anchor" href="#section-iii-launching-the-exploit" aria-hidden="true">#</a> Section III - Launching the exploit</h2>',3),p=(0,n._)("li",null,"Ensure your SD card is inserted into your Nintendo DSi",-1),y=(0,n._)("li",null,"Boot your Nintendo DSi and launch the Nintendo DSi Camera application",-1),f=(0,n._)("li",null,"If you receive a message saying your SD card isn't inserted, please use another SD card",-1),g=(0,n._)("li",null,[(0,n.Uk)("Open the album using the large button on the right "),(0,n._)("ul",null,[(0,n._)("li",null,"The screen should flash magenta if Memory Pit was copied correctly")])],-1),_={class:"custom-container warning"},k=(0,n._)("p",{class:"custom-container-title"},"WARNING",-1),D=(0,n._)("code",null,"BOOT.NDS",-1),S=(0,n._)("div",{class:"custom-container warning"},[(0,n._)("p",{class:"custom-container-title"},"WARNING"),(0,n._)("p",null,[(0,n.Uk)("If you enter the SD card camera album and nothing unusual happens, ensure that you downloaded the correct version of Memory Pit for your version and region, and placed it into the correct folder on your SD card. Also ensure that the "),(0,n._)("code",null,"DCIM"),(0,n.Uk)(" folder does not exist on your SD card.")])],-1),b=(0,n._)("p",null,"You can now use TWiLight Menu++! First, it will ask you to select your language and region. These do not need to match your console's language or region so set them to whichever you prefer. Next it's recommended to continue on and make a NAND backup. This can potentially be used to save your console if anything bad happens in the future.",-1),v={class:"custom-container tip"},w=(0,n._)("p",{class:"custom-container-title"},"TIP",-1),I={},x=(0,i(3744).Z)(I,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,a,(0,n._)("div",l,[r,(0,n._)("p",null,[(0,n.Uk)("If you don't plan on installing Unlaunch and have Flipnote Studio, it is recommended to use "),(0,n.Wm)(i,{to:"/de_DE/launching-the-flipnote-exploit.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("Flipnote Lenny")])),_:1}),(0,n.Uk)(" instead. "),(0,n.Wm)(i,{to:"/de_DE/faq.html#which-is-the-best-exploit"},{default:(0,n.w5)((()=>[(0,n.Uk)("Which is the best exploit?")])),_:1})])]),s,(0,n._)("ol",null,[u,(0,n._)("li",null,[(0,n.Uk)("Open Nintendo DSi Camera "),(0,n._)("ul",null,[c,(0,n._)("li",null,[(0,n.Uk)("If the tutorial crashes as you try to complete it, your Nintendo DSi camera hardware is likely broken in some way and you will not be able to use Memory Pit. Please use an "),(0,n.Wm)(i,{to:"/de_DE/alternate-exploits.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("alternate exploit")])),_:1})])])]),d,h]),m,(0,n._)("ol",null,[p,y,(0,n._)("li",null,[(0,n.Uk)("Select the SD Card icon in the top-right "),(0,n._)("ul",null,[f,(0,n._)("li",null,[(0,n.Uk)("If you receive a message saying that your SD card cannot be used, ensure your SD card is "),(0,n.Wm)(i,{to:"/de_DE/sd-card-setup.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("formatted correctly")])),_:1})])])]),g]),(0,n._)("div",_,[k,(0,n._)("p",null,[(0,n.Uk)("If the top screen turns green, you do not have TWiLight Menu++'s "),D,(0,n.Uk)(" on the root of your SD card. Follow the "),(0,n.Wm)(i,{to:"/de_DE/get-started.html#section-i-prep-work"},{default:(0,n.w5)((()=>[(0,n.Uk)("prep work")])),_:1}),(0,n.Uk)(" again.")])]),S,b,(0,n._)("div",v,[w,(0,n._)("p",null,[(0,n.Uk)("Continue to "),(0,n.Wm)(i,{to:"/de_DE/dumping-nand.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("Dumping NAND")])),_:1})])])],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const i=e.__vccOpts||e;for(const[e,n]of t)i[e]=n;return i}}}]);