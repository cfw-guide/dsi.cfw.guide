"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9474],{86:(e,t,n)=>{n.r(t),n.d(t,{data:()=>o});const o={key:"v-878b3f50",path:"/dumping-nand.html",title:"Dumping NAND",lang:"en-US",frontmatter:{title:"Dumping NAND"},excerpt:"",headers:[{level:2,title:"Section I - SD card setup",slug:"section-i-sd-card-setup",children:[]},{level:2,title:"Section II - Dumping the NAND",slug:"section-ii-dumping-the-nand",children:[]}],filePathRelative:"dumping-nand.md",git:{updatedTime:1640748342e3,contributors:[{name:"triangle",email:"79382000+spellboundtriangle@users.noreply.github.com",commits:1}]}}},963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var o=n(6252);const i=(0,o._)("p",null,"This page is for making a NAND backup, which is a copy of the data on the Nintendo DSi's internal storage. It can be used to set up hiyaCFW, as well as no$gba and melonDS for DSi emulation.",-1),a=(0,o._)("div",{class:"custom-container tip"},[(0,o._)("p",{class:"custom-container-title"},"TIP"),(0,o._)("p",null,"It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.")],-1),l=(0,o._)("h2",{id:"section-i-sd-card-setup",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#section-i-sd-card-setup","aria-hidden":"true"},"#"),(0,o.Uk)(" Section I - SD card setup")],-1),s={class:"custom-container tip"},u=(0,o._)("p",{class:"custom-container-title"},"TIP",-1),c=(0,o.Uk)("Using a Windows, Linux or macOS device? Use "),r=(0,o.Uk)("Lazy DSi Downloader"),d=(0,o.Uk)(" to automatically setup your SD card."),h=(0,o.Uk)("Download the latest release of "),p={href:"https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds",target:"_blank",rel:"noopener noreferrer"},m=(0,o.Uk)("dumpTool"),k=(0,o._)("li",null,[(0,o.Uk)("Place "),(0,o._)("code",null,"dumpTool.nds"),(0,o.Uk)(" anywhere on your SD card")],-1),b=(0,o.uE)('<h2 id="section-ii-dumping-the-nand" tabindex="-1"><a class="header-anchor" href="#section-ii-dumping-the-nand" aria-hidden="true">#</a> Section II - Dumping the NAND</h2><ol><li>Launch <code>dumpTool</code> through TWiLight Menu++</li><li>Hit the <kbd class="face">A</kbd> button on your Nintendo DSi to start dumping your NAND <ul><li>A NAND backup typically takes around 7 minutes</li></ul></li><li>When the NAND backup is complete, hit the <kbd>START</kbd> button on your Nintendo DSi to exit dumpTool</li><li>Power off your console and insert your SD card back into your device</li><li>Store this backup somewhere safe, where you won&#39;t lose it <ul><li>If possible, make multiple backups across different storage devices</li><li>Once you&#39;ve backed it up elsewhere, you can delete it from the SD card</li></ul></li></ol>',2),f={class:"custom-container warning"},g=(0,o._)("p",{class:"custom-container-title"},"WARNING",-1),_=(0,o.Uk)("The SHA1 hash of the "),D=(0,o._)("code",null,"nand.bin",-1),y=(0,o.Uk)(" will not match the hash stored in "),N=(0,o._)("code",null,"nand.bin.sha1",-1),w=(0,o.Uk)(". This is because dumpTool adds additional data known as a no$gba footer to the "),S=(0,o._)("code",null,"nand.bin",-1),U=(0,o.Uk)(" file after the SHA1 hash is calculated. You can use the "),T={href:"https://github.com/mondul/HiyaCFW-Helper/releases",target:"_blank",rel:"noopener noreferrer"},A=(0,o.Uk)("hiyaCFW Helper"),v=(0,o.Uk)(" to create a copy without the footer."),I={class:"custom-container tip"},W=(0,o._)("p",{class:"custom-container-title"},"TIP",-1),H=(0,o.Uk)("Continue to "),C=(0,o.Uk)("Installing Unlaunch"),P=(0,o.Uk)(" (Optional, not compatible with Nintendo DSi development consoles)"),x={},L=(0,n(3744).Z)(x,[["render",function(e,t){const n=(0,o.up)("router-link"),x=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,a,l,(0,o._)("div",s,[u,(0,o._)("p",null,[c,(0,o.Wm)(n,{to:"lazy-dsi-downloader"},{default:(0,o.w5)((()=>[r])),_:1}),d])]),(0,o._)("ol",null,[(0,o._)("li",null,[h,(0,o._)("a",p,[m,(0,o.Wm)(x)])]),k]),b,(0,o._)("div",f,[g,(0,o._)("p",null,[_,D,y,N,w,S,U,(0,o._)("a",T,[A,(0,o.Wm)(x)]),v])]),(0,o._)("div",I,[W,(0,o._)("p",null,[H,(0,o.Wm)(n,{to:"installing-unlaunch"},{default:(0,o.w5)((()=>[C])),_:1}),P])])],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}}}]);