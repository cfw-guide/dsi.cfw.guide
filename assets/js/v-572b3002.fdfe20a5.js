"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8104],{3e3:(e,n,l)=>{l.r(n),l.d(n,{data:()=>o});const o={key:"v-572b3002",path:"/zh_CN/restoring-nand.html",title:"还原 NAND备份",lang:"zh-CN",frontmatter:{title:"还原 NAND备份"},excerpt:"",headers:[{level:2,title:"需要准备",slug:"需要准备",children:[]},{level:2,title:"提取BIOS 以便使用no$gba",slug:"提取bios-以便使用no-gba",children:[]},{level:2,title:"测试你的NAND备份",slug:"测试你的nand备份",children:[]},{level:2,title:"Uninstalling Unlaunch from your NAND backup (optional)",slug:"uninstalling-unlaunch-from-your-nand-backup-optional",children:[]},{level:2,title:"刷入你的NAND备份 (软件方式)",slug:"刷入你的nand备份-软件方式",children:[]},{level:2,title:"刷入你的NAND备份 (硬件修改)",slug:"刷入你的nand备份-硬件修改",children:[]}],filePathRelative:"zh_CN/restoring-nand.md"}},181:(e,n,l)=>{l.r(n),l.d(n,{default:()=>v});var o=l(6252);const i=(0,o._)("div",{class:"custom-container danger"},[(0,o._)("p",{class:"custom-container-title"},"DANGER"),(0,o._)("p",null,[(0,o.Uk)("警告！ 这非常 "),(0,o._)("em",null,[(0,o._)("strong",null,"危险")]),(0,o.Uk)("！！！ 即使严格按照这些步骤操作也有可能使DSi变砖，因为机器的NAND闪存质量很低，尤其是如果你已经多次刷机！ 这只能作为最后手段使用！")])],-1),a=(0,o._)("div",{class:"custom-container tip"},[(0,o._)("p",{class:"custom-container-title"},"TIP"),(0,o._)("p",null,[(0,o.Uk)("请勿跳过此页上的 "),(0,o._)("em",null,"任何步骤"),(0,o.Uk)(", 任何错误都会使得你DSi的变砖几率增加.")])],-1),r=(0,o._)("p",null,"首先，除了你打算这样做的原因之外，还有几种更安全的替代选择：",-1),t=(0,o._)("li",null,"可以使用 hiyaCFW 或 TWiLight 菜单++安装DSiWare",-1),d={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},c=(0,o._)("li",null,[(0,o.Uk)("Restoring an Unlaunch button configuration can be done from the Unlaunch menu, which can be accessed by holding "),(0,o._)("kbd",{class:"face"},"A"),(0,o.Uk)(" + "),(0,o._)("kbd",{class:"face"},"B"),(0,o.Uk)(" while powering the console on")],-1),s=(0,o._)("li",null,"启动至Unlaunch导致错误？ 取出SD卡，并且重启系统。 如果这有用，那么是SD卡出了错，还原NAND备份将不会修复它",-1),u={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},h={href:"https://ds-homebrew.com/discord",target:"_blank",rel:"noopener noreferrer"},N=(0,o._)("li",null,"除非绝对有必要，否则应避免通过刷入NAND或使用其卸载器来卸载 您可以将自动启动密钥设置为“Launcher”，您的 DSi就会恢复正常了",-1),b=(0,o._)("p",null,"你唯一应该用你的NAND做的事情是安装Unlaunch 除此之外，请用其他替代方法",-1),p=(0,o._)("h2",{id:"需要准备",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#需要准备","aria-hidden":"true"},"#"),(0,o.Uk)(" 需要准备")],-1),k=(0,o._)("li",null,[(0,o._)("strong",null,"来自同一个DSi"),(0,o.Uk)("NAND备份")],-1),m={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},g=(0,o._)("li",null,"有利用NAND运行自制程序的方法，例如Unlaunch或Memory Pit 漏洞",-1),D={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},f={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},_={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},U=(0,o.uE)('<h2 id="提取bios-以便使用no-gba" tabindex="-1"><a class="header-anchor" href="#提取bios-以便使用no-gba" aria-hidden="true">#</a> 提取BIOS 以便使用no$gba</h2><ol><li>从 <code>dsibiodumper.zip</code> 压缩包中解压 <code>dsibiosdumper.nds</code> 并将其放置在你SD卡的任意位置</li><li>摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd>键 后，再摁下 Dsi 的电源键 <ul><li>这应该能启动到Unlaunch Filemenu</li></ul></li><li>从Unlaunch Filemenu启动 dsibiosdumper。</li><li>按 <kbd class="face">A</kbd> 将BIOS 导出到SD卡</li><li>按 <kbd>Start</kbd> 退出 dsibiosdumer</li></ol><h2 id="测试你的nand备份" tabindex="-1"><a class="header-anchor" href="#测试你的nand备份" aria-hidden="true">#</a> 测试你的NAND备份</h2><p>在尝试将NAND备份恢复到您的机器之前，测试您的NAND备份是否能用非常重要， 如果它在no$gba 时显示变砖错误，它很可能也会使您的机器变砖。</p><ol><li>将 <code>NO$GBA.EXE</code> 从 <code>no$gba-w.zip</code> 解压到您计算机上的一个文件夹中</li><li>将您的NAND备份复制到您放置 <code>NO$GBA.EXE</code> 的文件夹，并重命名为 <code>DSI-1.MMC</code></li><li>复制 <code>bios7i.bin</code> 和 <code>bios9i.bin</code> 到您放置 <code>NO$GBA. EXE</code>的文件夹, 分别命名为 <code>BIOSDSI7.ROM</code> 和 <code>BIOSI9.ROM</code></li><li>运行 <code>NO$GBA.EXE</code></li><li>点击 <code>Options</code> &gt; <code>Emulation Setup</code> 来打开模拟器设置窗口</li><li>改变 <code>Reset/Startup Entrypoint</code> 为 <code>GBA/NDS BIOS (Nintendo logo)</code></li><li>改变 <code>NDS Mode/Colors</code>为 <code>DSi (retail/16MB)</code></li><li>Click <code>Save Now</code></li><li>加载任何 NDS ROM (<code>.nds</code> 文件)</li></ol><p>If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. 如果出现任何错误 <em><strong>不要刷入那个备份</strong></em>！</p><h2 id="uninstalling-unlaunch-from-your-nand-backup-optional" tabindex="-1"><a class="header-anchor" href="#uninstalling-unlaunch-from-your-nand-backup-optional" aria-hidden="true">#</a> Uninstalling Unlaunch from your NAND backup (optional)</h2><p>Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do <strong>not</strong> need to do this section.</p>',8),A={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},S=(0,o.uE)("<li>Extract <code>UNLAUNCH.DSI</code> from <code>unlaunch.zip</code></li><li>Launch <code>UNLAUNCH.DSI</code> in no$gba and start it from the Game Card slot <ul><li>This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu</li></ul></li><li>Choose <code>Uninstall</code></li><li>Once complete, choose <code>Power down</code></li><li>Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly</li>",5),y=(0,o.uE)('<h2 id="刷入你的nand备份-软件方式" tabindex="-1"><a class="header-anchor" href="#刷入你的nand备份-软件方式" aria-hidden="true">#</a> 刷入你的NAND备份 (软件方式)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>请确保您已经阅读过上述步骤，因为这是开始变得危险的地方。 如果您直接链接到这里而没有跟从以上内容，请回到顶端阅读整个页面。</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>请确保您的 Nintendo DSi 在开始本节之前已经充满电。</p></div><ol><li>在插入 SD 卡的状态下，按住 <kbd class="face">A</kbd> 和<kbd class="face">B</kbd> 开机</li><li>启动 SafeNANDManager</li><li>按下 <code>begin NAND restore</code></li><li>一旦恢复完成，按 <kbd>start</kbd> 关闭您的 DSi</li></ol><p>现在你的NAND应该已被还原。</p><h2 id="刷入你的nand备份-硬件修改" tabindex="-1"><a class="header-anchor" href="#刷入你的nand备份-硬件修改" aria-hidden="true">#</a> 刷入你的NAND备份 (硬件修改)</h2>',6),w={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"},W={},v=(0,l(3744).Z)(W,[["render",function(e,n){const l=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,a,r,(0,o._)("ul",null,[t,(0,o._)("li",null,[(0,o.Uk)("如果您想要在终端上同时使用 TWiLight Menu++与hiyaCFW ，可以使用 "),(0,o._)("a",d,[(0,o.Uk)("ninfs"),(0,o.Wm)(l)]),(0,o.Uk)("来恢复图片。 HiyaCFW助手的最新版本允许您在设置过程中将您的照片从 NAND 复制到 SDNAND")]),c,s,(0,o._)("li",null,[(0,o.Uk)('"An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see '),(0,o._)("a",u,[(0,o.Uk)("hiyaCFW FAQ & Troubleshooting"),(0,o.Wm)(l)]),(0,o.Uk)(" on the DS-Homebrew Wiki for more information")]),(0,o._)("li",null,[(0,o.Uk)("TWiLight 菜单++中的任何错误都与NAND无关，您应该尝试重新安装 TWiLight 菜单++或在 "),(0,o._)("a",h,[(0,o.Uk)("Discord"),(0,o.Wm)(l)]),(0,o.Uk)(" 上寻求帮助")]),N]),b,p,(0,o._)("ul",null,[k,(0,o._)("li",null,[(0,o.Uk)("最新版本的 "),(0,o._)("a",m,[(0,o.Uk)("SafeNANDManager"),(0,o.Wm)(l)])]),g,(0,o._)("li",null,[(0,o._)("a",D,[(0,o.Uk)("no$gba"),(0,o.Wm)(l)]),(0,o.Uk)(", 用来检查您的 NAND 备份 (下载 'Windows gaming version') "),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("macOS 和 Linux 用户可以使用 "),(0,o._)("a",f,[(0,o.Uk)("WINE"),(0,o.Wm)(l)]),(0,o.Uk)(" 来运行no$gba")])])]),(0,o._)("li",null,[(0,o._)("a",_,[(0,o.Uk)("dsibiosdumper"),(0,o.Wm)(l)])])]),U,(0,o._)("ol",null,[(0,o._)("li",null,[(0,o.Uk)("Download the latest version of the "),(0,o._)("a",A,[(0,o.Uk)("Unlaunch installer"),(0,o.Wm)(l)])]),S]),y,(0,o._)("p",null,[(0,o.Uk)("如果你不能启动你的Nintendo DSi，硬刷是恢复NAND备份的唯一途径。 目前存在的最佳指南是 "),(0,o._)("a",w,[(0,o.Uk)("DS-Homebrew Wiki 上的 Nintendo DSi 硬破 指南"),(0,o.Wm)(l)]),(0,o.Uk)("。")])],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const l=e.__vccOpts||e;for(const[e,o]of n)l[e]=o;return l}}}]);