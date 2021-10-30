"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2822],{7470:(e,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o={key:"v-0f5993d7",path:"/dsiware-backups.html",title:"DSiWare Backups",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Requirements",slug:"requirements",children:[]},{level:2,title:"Nintendo DSi - Instructions",slug:"nintendo-dsi-instructions",children:[{level:3,title:"Section I - Identifying the desired DSiWare",slug:"section-i-identifying-the-desired-dsiware",children:[]},{level:3,title:"Section II - Extracting the DSiWare",slug:"section-ii-extracting-the-dsiware",children:[]},{level:3,title:"Section III - Extracting the save file (optional)",slug:"section-iii-extracting-the-save-file-optional",children:[]}]}],filePathRelative:"dsiware-backups.md",git:{updatedTime:163562345e4,contributors:[{name:"Pk11",email:"epicpkmn11@outlook.com",commits:1}]}}},265:(e,i,t)=>{t.r(i),t.d(i,{default:()=>u});var o=t(6252);const a=(0,o._)("h1",{id:"dsiware-backups",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#dsiware-backups","aria-hidden":"true"},"#"),(0,o.Uk)(" DSiWare Backups")],-1),n=(0,o._)("h2",{id:"requirements",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),(0,o.Uk)(" Requirements")],-1),l=(0,o.Uk)("The latest version of "),d={href:"https://github.com/RocketRobz/godmode9i/releases",target:"_blank",rel:"noopener noreferrer"},r=(0,o.Uk)("GodMode9i"),c=(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("Download the archive, extract the contents and place "),(0,o._)("code",null,"GodMode9i.nds"),(0,o.Uk)(" anywhere on your SD card")])],-1),s=(0,o.uE)('<h2 id="nintendo-dsi-instructions" tabindex="-1"><a class="header-anchor" href="#nintendo-dsi-instructions" aria-hidden="true">#</a> Nintendo DSi - Instructions</h2><h3 id="section-i-identifying-the-desired-dsiware" tabindex="-1"><a class="header-anchor" href="#section-i-identifying-the-desired-dsiware" aria-hidden="true">#</a> Section I - Identifying the desired DSiWare</h3><ol><li>Launch GodMode9i and select <code>[nand:] SYSNAND</code></li><li>Navigate to the <code>title</code> folder</li><li>Choose the folder according to whichever category you&#39;re looking for <ul><li><code>00030004</code>: Standard DSiWare</li><li><code>00030005</code>: Pre-installed Fun Tools</li><li><code>0003000f</code>: System Data (non-DSiWare files, can&#39;t be run)</li><li><code>00030015</code>: System Base Tools</li><li><code>00030017</code>: Launcher</li></ul></li><li>Once you have chosen which type of DSiWare you would like to extract, enter a subfolder, and then enter <code>content</code></li><li>There should now be an <code>.app</code> file visible. Select the file, and choose <code>Show NDS file info</code>. This will tell you if it&#39;s the DSiWare that you are looking for <ul><li>If it is not the DSiWare title that you were looking for, continue searching in other folders until you find it</li><li>Files in <code>0003000f</code> cannot have their NDS file info viewed because they are not launchable DSiWare and do not contain a valid banner</li></ul></li></ol><h3 id="section-ii-extracting-the-dsiware" tabindex="-1"><a class="header-anchor" href="#section-ii-extracting-the-dsiware" aria-hidden="true">#</a> Section II - Extracting the DSiWare</h3><ol><li>Highlight the <code>.app</code> file, then press <kbd class="face">Y</kbd> to add it to the clipboard</li><li>Navigate your SD card to the directory where you&#39;d like to place the dumped DSiWare title</li><li>Press <kbd class="face">Y</kbd> again to paste the DSiWare title in the directory you are currently navigating <ul><li>You can change the name of the file after pasting it by pressing <kbd class="face">X</kbd> while holding <kbd class="R">R</kbd></li><li>Repeat this for all files you wish to copy to the same directory</li></ul></li></ol><p>You should now see the DSiWare title in TWiLight Menu++ or the Unlaunch Filemenu.</p><h3 id="section-iii-extracting-the-save-file-optional" tabindex="-1"><a class="header-anchor" href="#section-iii-extracting-the-save-file-optional" aria-hidden="true">#</a> Section III - Extracting the save file (optional)</h3><ol><li>In the same folder as <code>content</code> for your specified DSiWare, there will be a folder named <code>data</code></li><li>Inside the <code>data</code> folder is the save file. Copy this file to your SD card in the same way you did for the DSiWare title itself <ul><li>Unlaunch and nds-bootstrap use the <code>.pub</code> and <code>.prv</code> file extensions for DSiWare save files. If your DSiWare save file was originally titled <code>public.sav</code>, use the <code>.pub</code> extension, and if the save file was originally titled <code>private.sav</code>, use the <code>.prv</code> extension</li><li>If you wish to use the DSiWare save file with TWiLight Menu++, make sure to place it in the <code>saves</code> folder at the location of your ROM</li></ul></li></ol>',8),h={},u=(0,t(3744).Z)(h,[["render",function(e,i){const t=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,n,(0,o._)("ul",null,[(0,o._)("li",null,[l,(0,o._)("a",d,[r,(0,o.Wm)(t)]),c])]),s],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{for(const[t,o]of i)e[t]=o;return e}}}]);