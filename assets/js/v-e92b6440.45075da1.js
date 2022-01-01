"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6306],{5763:(e,n,l)=>{l.r(n),l.d(n,{data:()=>i});const i={key:"v-e92b6440",path:"/installing-unlaunch.html",title:"Installing Unlaunch",lang:"en-US",frontmatter:{title:"Installing Unlaunch"},excerpt:"",headers:[{level:2,title:"Section I - SD card setup",slug:"section-i-sd-card-setup",children:[]},{level:2,title:"Section II - Installing/Updating Unlaunch",slug:"section-ii-installing-updating-unlaunch",children:[]},{level:2,title:"Section III - Post-Unlaunch configuration",slug:"section-iii-post-unlaunch-configuration",children:[]},{level:2,title:"Section IV - Cleaning up your SD card",slug:"section-iv-cleaning-up-your-sd-card",children:[]}],filePathRelative:"installing-unlaunch.md",git:{updatedTime:1641080169e3,contributors:[{name:"lifehackerhansol",email:"lifehacker@hansol.ca",commits:1}]}}},1477:(e,n,l)=>{l.r(n),l.d(n,{default:()=>ne});var i=l(6252);const t=(0,i.uE)('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Unlaunch is not compatible with Nintendo DSi development consoles.</p></div><p>Unlaunch is an exploit that takes place on system boot. This allows it to have higher privileges than normal DSiWare exploits such as Memory Pit, which makes it able to do the following:</p><ul><li>Launching applications at boot (homebrew or DSiWare), with optional button combinations</li><li>Access to Slot-1, allowing you to dump Game Cards and launch incompatible flashcards</li><li>Region locks removed on DSi-Enhanced / Exclusive Game Cards</li><li>Run old Nintendo DS homebrew via nds-bootstrap-hb</li><li>Brick-protection</li><li>The following for Memory Pit users (other exploits already allow these): <ul><li>Improved compatibility with DSiWare launched from the SD card</li><li>Better sound in GBARunner2</li></ul></li></ul>',3),o={class:"custom-container danger"},a=(0,i._)("p",{class:"custom-container-title"},"DANGER",-1),u=(0,i.Uk)("If you have not yet done so, please follow "),c=(0,i.Uk)("Dumping NAND"),s=(0,i.Uk)(". While the chances are slim, Unlaunch can accidentally brick your Nintendo DSi. A NAND backup + "),r={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},h=(0,i.Uk)("hardmod"),d=(0,i.Uk)(" would allow you to restore this backup, provided you know how to solder."),p=(0,i._)("div",{class:"custom-container warning"},[(0,i._)("p",{class:"custom-container-title"},"WARNING"),(0,i._)("p",null,"Make sure your console is charged when following this process. A sudden power loss could result in serious damage.")],-1),g=(0,i._)("h2",{id:"section-i-sd-card-setup",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#section-i-sd-card-setup","aria-hidden":"true"},"#"),(0,i.Uk)(" Section I - SD card setup")],-1),k={class:"custom-container tip"},f=(0,i._)("p",{class:"custom-container-title"},"TIP",-1),m=(0,i.Uk)("Using a Windows, Linux or macOS device? Use "),b=(0,i.Uk)("Lazy DSi Downloader"),w=(0,i.Uk)(" to automatically setup your SD card."),U=(0,i.Uk)("Download the latest version of "),y={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},_=(0,i.Uk)("Unlaunch"),S={href:"https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},D=(0,i.Uk)("Mirror link"),v=(0,i.Uk)(", if the above doesn't work"),I=(0,i._)("li",null,[(0,i.Uk)("Extract "),(0,i._)("code",null,"UNLAUNCH.DSI"),(0,i.Uk)(" from the "),(0,i._)("code",null,"unlaunch.zip"),(0,i.Uk)(" archive and place it anywhere on your SD card")],-1),T=(0,i.Uk)("Verify you still have TWiLight Menu++ on your SD card "),W=(0,i.Uk)("If you are unsure, follow the instructions from the "),N=(0,i.Uk)("Launching the Exploit"),L=(0,i.Uk)(" page"),A=(0,i._)("h2",{id:"section-ii-installing-updating-unlaunch",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#section-ii-installing-updating-unlaunch","aria-hidden":"true"},"#"),(0,i.Uk)(" Section II - Installing/Updating Unlaunch")],-1),M=(0,i.uE)('<li>Open TWiLight Menu++ <ul><li>If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the exploit that you used</li><li>If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the <code>TWiLight Menu++</code> where <code>BOOT.NDS</code> is shown on the bottom screen</li></ul></li><li>Launch TWiLight Menu++ Settings <ul><li>If you haven&#39;t changed your theme, follow the steps in the &quot;Launching the Exploit&quot; page. Otherwise, see the TWiLight Menu++ Manual</li></ul></li><li>Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the <code>Unlaunch settings</code> page</li>',3),x=(0,i.Uk)("If you want to change Unlaunch's background image, select "),O=(0,i._)("code",null,"Background",-1),E=(0,i.Uk)(" and choose the one you want "),R=(0,i.Uk)("If you want to create your own Unlaunch background, see the "),B={href:"https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds",target:"_blank",rel:"noopener noreferrer"},C=(0,i.Uk)("DS-Homebrew Wiki page"),P=(0,i._)("li",null,[(0,i.Uk)("If you want the Health and Safety screen and DSi Menu music and sounds when using the official Nintendo DSi Menu, then set "),(0,i._)("code",null,"Launcher Patches"),(0,i.Uk)(" to "),(0,i._)("code",null,"Off"),(0,i._)("ul",null,[(0,i._)("li",null,"This will also keep the region locking and card whitelist, meaning that some flashcards won't be usable from the DSi Menu")])],-1),F=(0,i._)("li",null,"Exit TWiLight Menu++ Settings",-1),H=(0,i._)("li",null,[(0,i.Uk)("In the file navigation menu, launch "),(0,i._)("code",null,"Unlaunch DSi Installer")],-1),z=(0,i.Uk)("Select the install option "),G=(0,i.Uk)("If Unlaunch freezes at "),V=(0,i._)("code",null,"ERROR: MISMATCH IN FAT COPIES",-1),Y=(0,i.Uk)(", please take a look at the "),X=(0,i.Uk)("Troubleshooting"),q=(0,i.Uk)(" page"),Z=(0,i._)("li",null,"When completed, reboot your system",-1),j=(0,i._)("p",null,"If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.",-1),J=(0,i.Uk)("If you see a black screen, please take a look at the "),K=(0,i.Uk)("Troubleshooting"),Q=(0,i.Uk)(" page"),$=(0,i.uE)('<h2 id="section-iii-post-unlaunch-configuration" tabindex="-1"><a class="header-anchor" href="#section-iii-post-unlaunch-configuration" aria-hidden="true">#</a> Section III - Post-Unlaunch configuration</h2><p>Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed launch whatever you want.</p><ol><li>Power on your console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd><ul><li>This should launch the Unlaunch Filemenu</li></ul></li><li>Navigate to <code>OPTIONS</code>, and look at the available options <ul><li><kbd class="face">A</kbd> + <kbd class="face">B</kbd> is hardcoded to launch into Unlaunch&#39;s menu, and as such cannot be changed</li><li>The <code>NO BUTTON</code> and <code>BUTTON A / B / X / Y</code> options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. You can select any DSiWare, homebrew, the Slot-1 card, wifiboot, or Unlaunch&#39;s Filemenu <ul><li>For TWiLight Menu++, select the <code>TWiLight Menu++</code> option where <code>BOOT.NDS</code> is shown on the bottom screen</li><li>For the original DSi Menu, select <code>Launcher</code></li></ul></li><li><code>LOAD ERROR</code> is what your DSi will load if loading what you have set fails, such as the SD card not being inserted</li></ul></li><li>Select <code>SAVE &amp; EXIT</code> to save your settings, then turn off your DSi</li></ol><h2 id="section-iv-cleaning-up-your-sd-card" tabindex="-1"><a class="header-anchor" href="#section-iv-cleaning-up-your-sd-card" aria-hidden="true">#</a> Section IV - Cleaning up your SD card</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This section is optional and only serves for keeping your SD card tidy of files you won&#39;t need.</p></div><ul><li>Delete the <code>sd:/private/ds/app/484E494A/pit.bin</code> file from your SD card <ul><li>If you used another exploit, delete the files from that exploit instead</li></ul></li><li>Delete the <code>UNLAUNCH.DSI</code> file from your SD card</li></ul>',6),ee={},ne=(0,l(3744).Z)(ee,[["render",function(e,n){const l=(0,i.up)("router-link"),ee=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[t,(0,i._)("div",o,[a,(0,i._)("p",null,[u,(0,i.Wm)(l,{to:"dumping-nand"},{default:(0,i.w5)((()=>[c])),_:1}),s,(0,i._)("a",r,[h,(0,i.Wm)(ee)]),d])]),p,g,(0,i._)("div",k,[f,(0,i._)("p",null,[m,(0,i.Wm)(l,{to:"lazy-dsi-downloader"},{default:(0,i.w5)((()=>[b])),_:1}),w])]),(0,i._)("ol",null,[(0,i._)("li",null,[U,(0,i._)("a",y,[_,(0,i.Wm)(ee)]),(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",S,[D,(0,i.Wm)(ee)]),v])])]),I,(0,i._)("li",null,[T,(0,i._)("ul",null,[(0,i._)("li",null,[W,(0,i.Wm)(l,{to:"launching-the-exploit.html#twilight-menu"},{default:(0,i.w5)((()=>[N])),_:1}),L])])])]),A,(0,i._)("ol",null,[M,(0,i._)("li",null,[x,O,E,(0,i._)("ul",null,[(0,i._)("li",null,[R,(0,i._)("a",B,[C,(0,i.Wm)(ee)])])])]),P,F,H,(0,i._)("li",null,[z,(0,i._)("ul",null,[(0,i._)("li",null,[G,V,Y,(0,i.Wm)(l,{to:"troubleshooting.html"},{default:(0,i.w5)((()=>[X])),_:1}),q])])]),Z]),j,(0,i._)("ul",null,[(0,i._)("li",null,[J,(0,i.Wm)(l,{to:"troubleshooting.html"},{default:(0,i.w5)((()=>[K])),_:1}),Q])]),$],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const l=e.__vccOpts||e;for(const[e,i]of n)l[e]=i;return l}}}]);