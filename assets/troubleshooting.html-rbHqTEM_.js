import{_ as r,r as s,o as h,c as l,a as n,d as e,b as t,w as i,e as c}from"./app-ULTNArho.js";const d={},u=n("h2",{id:"unlaunch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#unlaunch","aria-hidden":"true"},"#"),e(" Unlaunch")],-1),p=n("h3",{id:"unlaunch-停留在-mismatch-in-fat-copies",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#unlaunch-停留在-mismatch-in-fat-copies","aria-hidden":"true"},"#"),e(" Unlaunch 停留在 "),n("code",null,"MISMATCH IN FAT COPIES")],-1),_=n("p",null,"在没有正确更新整个NAND时破解，twlnf会有一个关键的bug。 这会导致某些自制程序(如Unlaunch安装程序) 出现错误。",-1),f={href:"https://github.com/Epicpkmn11/NTM/releases",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"Fix FAT copy mismatch",-1),b=n("h3",{id:"在使用-unlaunch启动-launcher-时没有声音或启动画面",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在使用-unlaunch启动-launcher-时没有声音或启动画面","aria-hidden":"true"},"#"),e(' 在使用 Unlaunch启动"LAUNCHER"时没有声音或启动画面')],-1),m={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},k=n("h3",{id:"powering-on-only-shows-a-black-screen-after-installing-unlaunch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#powering-on-only-shows-a-black-screen-after-installing-unlaunch","aria-hidden":"true"},"#"),e(" Powering on only shows a black screen after installing Unlaunch")],-1),w={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},y=c('<h3 id="after-installing-unlaunch-i-m-stuck-booting-into-an-application" tabindex="-1"><a class="header-anchor" href="#after-installing-unlaunch-i-m-stuck-booting-into-an-application" aria-hidden="true">#</a> After installing Unlaunch, I&#39;m stuck booting into an application</h3><p>This was likely caused by choosing the wrong app for the <code>NO BUTTON</code> option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to <code>OPTIONS</code>, and set <code>NO BUTTON</code> to whatever your preference is.</p><h3 id="other-unlaunch-problems" tabindex="-1"><a class="header-anchor" href="#other-unlaunch-problems" aria-hidden="true">#</a> Other Unlaunch problems</h3>',3),N=n("code",null,"Clusters too large",-1),T=n("code",null,"Bad VBR",-1),x=n("code",null,"Bad MBR",-1),U=n("h2",{id:"twilight-menu-troubleshooting",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#twilight-menu-troubleshooting","aria-hidden":"true"},"#"),e(" TWiLight Menu++ troubleshooting")],-1),D={href:"https://wiki.ds-homebrew.com/twilightmenu/faq",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"further-assistance",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#further-assistance","aria-hidden":"true"},"#"),e(" Further assistance")],-1),M={href:"https://discord.gg/yD3spjv",target:"_blank",rel:"noopener noreferrer"},S=n("sup",null,"(i)",-1);function A(B,C){const a=s("ExternalLinkIcon"),o=s("RouterLink");return h(),l("div",null,[u,p,_,n("p",null,[e("To fix this, open "),n("a",f,[e("NAND Title Manager (NTM)"),t(a)]),e(", and select "),g,e(".")]),b,n("p",null,[e("The developer of Unlaunch (nocash) has intentionally patched out the background audio and boot-splash by default. You can regain these effects by "),t(o,{to:"/zh_CN/installing-unlaunch.html"},{default:i(()=>[e("reinstalling Unlaunch")]),_:1}),e(' using TWiLight Menu++ with "Launcher Patches" set to "Default" on the Unlaunch page of TWiLight Menu++ settings, or by using '),n("a",m,[e("hiyaCFW"),t(a)]),e(".")]),k,n("p",null,[e("Try ejecting the SD card and powering the console on again. If it still only shows a black screen, you may need to flash your NAND via a "),n("a",w,[e("hardmod"),t(a)]),e(".")]),y,n("p",null,[e("If Unlaunch displays "),N,e(", "),T,e(", "),x,e(", or doesn't display any applications while the SD card is inserted, your SD card likely wasn't formatted correctly. Re-follow "),t(o,{to:"/zh_CN/sd-card-setup.html"},{default:i(()=>[e("SD Card Setup")]),_:1}),e(".")]),U,n("p",null,[e("For general TWiLight Menu++ troubleshooting, see its "),n("a",D,[e("FAQ & Troubleshooting"),t(a)]),e(" page on the DS-Homebrew Wiki.")]),v,n("p",null,[e("If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the "),n("a",M,[e("DS"),S,e(" Mode Hacking!"),t(a)]),e(" Discord server.")])])}const L=r(d,[["render",A],["__file","troubleshooting.html.vue"]]);export{L as default};