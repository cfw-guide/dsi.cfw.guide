"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7806],{7540:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-66be698b",path:"/zh_CN/troubleshooting.html",title:"故障排查",lang:"zh-CN",frontmatter:{title:"故障排查"},excerpt:"",headers:[{level:2,title:"Unlaunch",slug:"unlaunch",children:[{level:3,title:"Unlaunch 停留在 MISMATCH IN FAT COPIES",slug:"unlaunch-停留在-mismatch-in-fat-copies",children:[]},{level:3,title:'在使用 Unlaunch启动"LAUNCHER"时没有声音或启动画面',slug:"在使用-unlaunch启动-launcher-时没有声音或启动画面",children:[]},{level:3,title:"Powering on only shows a black screen after installing Unlaunch",slug:"powering-on-only-shows-a-black-screen-after-installing-unlaunch",children:[]},{level:3,title:"After installing Unlaunch, I'm stuck booting into an application",slug:"after-installing-unlaunch-i-m-stuck-booting-into-an-application",children:[]},{level:3,title:"Other Unlaunch problems",slug:"other-unlaunch-problems",children:[]}]},{level:2,title:"TWiLight Menu++  troubleshooting",slug:"twilight-menu-troubleshooting",children:[]},{level:2,title:"Further assistance",slug:"further-assistance",children:[]}],filePathRelative:"zh_CN/troubleshooting.md",git:{updatedTime:1640748342e3,contributors:[{name:"triangle",email:"79382000+spellboundtriangle@users.noreply.github.com",commits:1}]}}},7183:(e,n,a)=>{a.r(n),a.d(n,{default:()=>j});var t=a(6252);const i=(0,t.uE)('<h2 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h2><h3 id="unlaunch-停留在-mismatch-in-fat-copies" tabindex="-1"><a class="header-anchor" href="#unlaunch-停留在-mismatch-in-fat-copies" aria-hidden="true">#</a> Unlaunch 停留在 <code>MISMATCH IN FAT COPIES</code></h3><p>在没有正确更新整个NAND时破解，twlnf会有一个关键的bug。 这会导致某些自制程序(如Unlaunch安装程序) 出现错误。</p><p>虽然可以修复，但这样做的方法并不是一成不变的，各系统之间差别很大。 一种方法是删除过去通过 twlnf 安装的任何DSiWare。 但也有报告称，将 <em>所有</em> DSiWare移动到SD卡并返回系统，在某些情况下可能有用。</p><p>If you have downgraded the system in the past, updating back to v1.4.5 (or v1.4.6 if your DSi region is Chinese or Korean) can help fix this bug as well.</p><p>If the issue persists, try this:</p>',6),l=(0,t.Uk)("Mount your NAND backup with "),r={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("ninfs"),s=(0,t.Uk)(", and enable the "),h=(0,t._)("code",null,"Allow writing",-1),u=(0,t.Uk)(" option"),c=(0,t.Uk)("Once your NAND backup is mounted, mount "),d=(0,t._)("code",null,"twl_main.img",-1),g=(0,t.Uk)(". If you are using Windows, you can use "),p={href:"https://www.osforensics.com/tools/mount-disk-images.html",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("OSFMount"),k=(0,t.Uk)(" to mount the image"),b=(0,t._)("li",null,[(0,t.Uk)("Unmount "),(0,t._)("code",null,"twl_main.img"),(0,t.Uk)(", then unmount the NAND backup in ninfs If the NAND was saved, follow "),(0,t._)("a",{href:"restoring-nand"},"Restoring NAND"),(0,t.Uk)(" and continue with "),(0,t._)("a",{href:"installing-unlaunch"},"Installing Unlaunch"),(0,t.Uk)(".")],-1),m=(0,t._)("h3",{id:"在使用-unlaunch启动-launcher-时没有声音或启动画面",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#在使用-unlaunch启动-launcher-时没有声音或启动画面","aria-hidden":"true"},"#"),(0,t.Uk)(' 在使用 Unlaunch启动"LAUNCHER"时没有声音或启动画面')],-1),U=(0,t.Uk)("Unlaunch的开发者(nocash) 默认修补背景音频和引导。 You can regain these effects by "),w=(0,t._)("a",{href:"installing-unlaunch"},"reinstalling Unlaunch",-1),_=(0,t.Uk)(" using TWiLight Menu++, or by using "),y={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},N=(0,t.Uk)("hiyaCFW"),v=(0,t.Uk)("."),D=(0,t._)("h3",{id:"powering-on-only-shows-a-black-screen-after-installing-unlaunch",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#powering-on-only-shows-a-black-screen-after-installing-unlaunch","aria-hidden":"true"},"#"),(0,t.Uk)(" Powering on only shows a black screen after installing Unlaunch")],-1),A=(0,t.Uk)("Try ejecting the SD card and powering the console on again. If it still only shows a black screen, you may need to flash your NAND via a "),I={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Uk)("hardmod"),T=(0,t.Uk)("."),C=(0,t.uE)('<h3 id="after-installing-unlaunch-i-m-stuck-booting-into-an-application" tabindex="-1"><a class="header-anchor" href="#after-installing-unlaunch-i-m-stuck-booting-into-an-application" aria-hidden="true">#</a> After installing Unlaunch, I&#39;m stuck booting into an application</h3><p>This was likely caused by choosing the wrong app for the <code>NO BUTTON</code> option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to <code>OPTIONS</code>, and set <code>NO BUTTON</code> to whatever your preference is.</p><h3 id="other-unlaunch-problems" tabindex="-1"><a class="header-anchor" href="#other-unlaunch-problems" aria-hidden="true">#</a> Other Unlaunch problems</h3><p>If Unlaunch displays <code>Clusters too large</code>, <code>Bad VBR</code>, <code>Bad MBR</code>, or doesn&#39;t display any applications while the SD card is inserted, your SD card likely wasn&#39;t formatted correctly. Re-follow <a href="sd-card-setup">SD Card Setup</a>.</p><h2 id="twilight-menu-troubleshooting" tabindex="-1"><a class="header-anchor" href="#twilight-menu-troubleshooting" aria-hidden="true">#</a> TWiLight Menu++ troubleshooting</h2>',5),W=(0,t.Uk)("For general TWiLight Menu++ troubleshooting, see its "),O={href:"https://wiki.ds-homebrew.com/twilightmenu/faq",target:"_blank",rel:"noopener noreferrer"},M=(0,t.Uk)("FAQ & Troubleshooting"),x=(0,t.Uk)(" page on the DS-Homebrew Wiki."),F=(0,t._)("h2",{id:"further-assistance",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#further-assistance","aria-hidden":"true"},"#"),(0,t.Uk)(" Further assistance")],-1),H=(0,t.Uk)("If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the "),B={href:"https://discord.gg/yD3spjv",target:"_blank",rel:"noopener noreferrer"},L=(0,t.Uk)("DS"),R=(0,t._)("sup",null,"(i)",-1),E=(0,t.Uk)(" Mode Hacking!"),P=(0,t.Uk)(" Discord server."),z={},j=(0,a(3744).Z)(z,[["render",function(e,n){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,(0,t._)("ol",null,[(0,t._)("li",null,[l,(0,t._)("a",r,[o,(0,t.Wm)(a)]),s,h,u]),(0,t._)("li",null,[c,d,g,(0,t._)("a",p,[f,(0,t.Wm)(a)]),k]),b]),m,(0,t._)("p",null,[U,w,_,(0,t._)("a",y,[N,(0,t.Wm)(a)]),v]),D,(0,t._)("p",null,[A,(0,t._)("a",I,[S,(0,t.Wm)(a)]),T]),C,(0,t._)("p",null,[W,(0,t._)("a",O,[M,(0,t.Wm)(a)]),x]),F,(0,t._)("p",null,[H,(0,t._)("a",B,[L,R,E,(0,t.Wm)(a)]),P])],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,t]of n)a[e]=t;return a}}}]);