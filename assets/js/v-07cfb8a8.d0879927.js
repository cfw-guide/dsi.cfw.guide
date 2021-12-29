"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4710],{7687:(e,a,i)=>{i.r(a),i.d(a,{data:()=>n});const n={key:"v-07cfb8a8",path:"/pl_PL/faq.html",title:"FAQ",lang:"pl-PL",frontmatter:{title:"FAQ"},excerpt:"",headers:[{level:2,title:"Jaką funkcjonalność stracę modując mój system?",slug:"jaka-funkcjonalnosc-strace-modujac-moj-system",children:[]},{level:2,title:"Jak grać w zrzuty tytułów Nintendo DS?",slug:"jak-grac-w-zrzuty-tytułow-nintendo-ds",children:[]},{level:2,title:"Jak zaktualizować mój homebrew?",slug:"jak-zaktualizowac-moj-homebrew",children:[]},{level:2,title:"Jestem nowy, lub chciałbym powtórzyć swoją konfigurację. Gdzie mam zacząć?",slug:"jestem-nowy-lub-chciałbym-powtorzyc-swoja-konfiguracje-gdzie-mam-zaczac",children:[]},{level:2,title:"Jak mogę usunąć kontrolę rodzicielską?",slug:"jak-moge-usunac-kontrole-rodzicielska",children:[]},{level:2,title:"Czy mogę zmienić mój region Nintendo DSi?",slug:"czy-moge-zmienic-moj-region-nintendo-dsi",children:[]},{level:2,title:"What happened to the hiyaCFW installation guide?",slug:"what-happened-to-the-hiyacfw-installation-guide",children:[]}],filePathRelative:"pl_PL/faq.md",git:{updatedTime:1640748342e3,contributors:[{name:"triangle",email:"79382000+spellboundtriangle@users.noreply.github.com",commits:1}]}}},8845:(e,a,i)=>{i.r(a),i.d(a,{default:()=>B});var n=i(6252);const o=(0,n.uE)('<h2 id="jaka-funkcjonalnosc-strace-modujac-moj-system" tabindex="-1"><a class="header-anchor" href="#jaka-funkcjonalnosc-strace-modujac-moj-system" aria-hidden="true">#</a> Jaką funkcjonalność stracę modując mój system?</h2><ul><li>Jeśli zdecydujesz się zainstalować Unlaunch, nie utracisz żadnych funkcji systemowych</li><li>Jeśli chcesz mieć tylko Memory Pit, nie będzie można wtedy zapisać zdjęcia na karcie SD za pośrednictwem aplikacji Nintendo DSi Camera. Either follow <a href="alternate-exploits">Alternate Exploits</a> instead, or follow <a href="installing-unlaunch">Installing Unlaunch</a><ul><li>Dzieje się tak, ponieważ plik metadanych (<code>pit.bin</code>) jest nadpisywany exploitem Memory Pit</li></ul></li></ul><h2 id="jak-grac-w-zrzuty-tytułow-nintendo-ds" tabindex="-1"><a class="header-anchor" href="#jak-grac-w-zrzuty-tytułow-nintendo-ds" aria-hidden="true">#</a> Jak grać w zrzuty tytułów Nintendo DS?</h2><p>Odtwarzanie zrzutów gier na konsoli wymaga użycia flashcarda lub nds-bootstrap, programu umożliwiającego granie z wewnętrznej karty SD poprzez przekierowanie na nią odczytów i zapisów ze Pola-1.</p>',4),t=(0,n._)("li",null,"Dzięki TWiLight Menu++ możesz nawigować po karcie SD w celu znalezienia plików ROM do odtworzenia z nds-bootstrap. Zaletą korzystania z TWiLight Menu++ jest posiadanie menu cheatów, ustawień dla poszczególnych gier oraz unikanie ograniczeń wprowadzanych przez forwardery. Innymi słowy, możesz wrzucić pliki ROM bezpośrednio i grać bez żadnych konfiguracji. Nie ma limitu 39 tytułów, ani hiyaCFW czy Unlaunch nie są wymagane i nie ma ograniczeń co do wolnego miejsca na karcie SD",-1),l=(0,n.Uk)("hiyaCFW users can create forwarders using the instructions on the "),r={href:"https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card",target:"_blank",rel:"noopener noreferrer"},s=(0,n.Uk)("DS-Homebrew Wiki"),u=(0,n.Uk)(" for the SDNAND's DSi Menu, but it has some limitations. There is a hard limit of 39 titles, and they are less convenient to make than using TWiLight Menu++ "),c=(0,n.Uk)("If you do not have hiyaCFW and would like to use forwarders, you can follow the "),d={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},h=(0,n.Uk)("hiyaCFW installation guide"),m=(0,n.Uk)(" on the DS-Homebrew Wiki"),k=(0,n._)("h2",{id:"jak-zaktualizowac-moj-homebrew",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#jak-zaktualizowac-moj-homebrew","aria-hidden":"true"},"#"),(0,n.Uk)(" Jak zaktualizować mój homebrew?")],-1),z=(0,n._)("li",null,[(0,n._)("strong",null,"Unlaunch"),(0,n.Uk)(" - Postępuj zgodnie z instrukcjami na stronie "),(0,n._)("a",{href:"installing-unlaunch"},"Instalacja"),(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("You do "),(0,n._)("strong",null,"not"),(0,n.Uk)(" need to uninstall Unlaunch before doing this")])])],-1),w=(0,n._)("strong",null,"hiyaCFW",-1),g=(0,n.Uk)(" - Zamień "),y=(0,n._)("code",null,"hiya.dsi",-1),p=(0,n.Uk)(" w katalogu głównym karty SD z "),j={href:"https://github.com/RocketRobz/hiyaCFW/releases",target:"_blank",rel:"noopener noreferrer"},f=(0,n.Uk)("zaktualizowaną wersją"),b=(0,n._)("strong",null,"TWiLight Menu++",-1),_=(0,n.Uk)(" - Postępuj zgodnie z instrukcjami na "),U={href:"https://wiki.ds-homebrew.com/twilightmenu/updating-dsi",target:"_blank",rel:"noopener noreferrer"},W=(0,n.Uk)("DS-Homebrew Wiki"),D=(0,n.uE)("<li><strong>nds-bootstrap</strong> - Skopiuj <code>nds-bootstrap-hb-release.nds</code> &amp; <code>nds-bootstrap-release.nds</code> do folderu <code>_nds</code> w katalogu głównym karty SD <ul><li>Jeśli korzystasz z TWiLight Menu++, istnieje duża szansa, że najnowsze wersje nds-bootstrap zostaną uwzględnione w TWiLight Menu++</li></ul></li><li><strong>GodMode9i, dumpTool, Forwarder3-DS, etc</strong> - Follow the instructions used to download them</li>",2),S=(0,n.uE)('<p>Inne homebrew mogą używać innych metod do aktualizacji.</p><h2 id="jestem-nowy-lub-chciałbym-powtorzyc-swoja-konfiguracje-gdzie-mam-zaczac" tabindex="-1"><a class="header-anchor" href="#jestem-nowy-lub-chciałbym-powtorzyc-swoja-konfiguracje-gdzie-mam-zaczac" aria-hidden="true">#</a> Jestem nowy, lub chciałbym powtórzyć swoją konfigurację. Gdzie mam zacząć?</h2><ul><li>Jeśli nie zmodyfikowałeś jeszcze swojej konsoli lub chcesz zaktualizować Unlaunch na swoim systemie, zalecamy wrócić do początku przewodnika i podążać za poradnikiem. Pamiętaj, aby przeczytać wszystko na stronie głównej</li><li>Jeśli masz najnowszą wersję Unlaunch, postępuj zgodnie z Sekcją 1b w <a href="launching-the-exploit#twilight-menu">Launching the Exploit</a>, aby skonfigurować TWiLight Menu++ w swoim systemie</li></ul><h2 id="jak-moge-usunac-kontrole-rodzicielska" tabindex="-1"><a class="header-anchor" href="#jak-moge-usunac-kontrole-rodzicielska" aria-hidden="true">#</a> Jak mogę usunąć kontrolę rodzicielską?</h2>',4),v={href:"https://mkey.salthax.org",target:"_blank",rel:"noopener noreferrer"},x=(0,n.Uk)("generator mkey"),J=(0,n.Uk)(" może wygenerować kod wymagany do usunięcia kontroli rodzicielskich"),M=(0,n._)("h2",{id:"czy-moge-zmienic-moj-region-nintendo-dsi",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#czy-moge-zmienic-moj-region-nintendo-dsi","aria-hidden":"true"},"#"),(0,n.Uk)(" Czy mogę zmienić mój region Nintendo DSi?")],-1),C=(0,n._)("p",null,"Tak, istnieje kilka różnych metod w zależności od tego, co chcesz zmienić:",-1),F=(0,n._)("li",null,"Najbezpieczniejszą i najprostszą metodą jest po prostu zainstalowanie TWiLight Menu++, który może używać każdego oficjalnego języka i nie tylko, bez konieczności modyfikacji NAND",-1),L=(0,n.Uk)("Jeśli chcesz zmienić region systemowy i korzystać z hiyaCFW, możesz użyć "),N={href:"https://github.com/Yoti/cli_hiyalang/releases",target:"_blank",rel:"noopener noreferrer"},P=(0,n.Uk)("hiyalang"),T=(0,n.Uk)(" Yoti'sa"),A=(0,n.Uk)("Wreszcie, jeśli chcesz zmienić region na aktualnym systemie NAND, możesz użyć "),E={href:"https://gbatemp.net/threads/release-dsi-language-patcher.582836/",target:"_blank",rel:"noopener noreferrer"},I=(0,n.Uk)("DDS Language Patcher"),H=(0,n.Uk)(" Mighty Max'a"),O=(0,n._)("h2",{id:"what-happened-to-the-hiyacfw-installation-guide",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#what-happened-to-the-hiyacfw-installation-guide","aria-hidden":"true"},"#"),(0,n.Uk)(" What happened to the hiyaCFW installation guide?")],-1),R=(0,n.Uk)("Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the "),Y={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},Z=(0,n.Uk)("DS-Homebrew Wiki"),q=(0,n.Uk)("."),G=(0,n._)("ul",null,[(0,n._)("li",null,"If you were linked to the page in question from another guide, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects")],-1),Q={},B=(0,i(3744).Z)(Q,[["render",function(e,a){const i=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n._)("ul",null,[t,(0,n._)("li",null,[l,(0,n._)("a",r,[s,(0,n.Wm)(i)]),u,(0,n._)("ul",null,[(0,n._)("li",null,[c,(0,n._)("a",d,[h,(0,n.Wm)(i)]),m])])])]),k,(0,n._)("ul",null,[z,(0,n._)("li",null,[w,g,y,p,(0,n._)("a",j,[f,(0,n.Wm)(i)])]),(0,n._)("li",null,[b,_,(0,n._)("a",U,[W,(0,n.Wm)(i)])]),D]),S,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",v,[x,(0,n.Wm)(i)]),J])]),M,C,(0,n._)("ul",null,[F,(0,n._)("li",null,[L,(0,n._)("a",N,[P,(0,n.Wm)(i)]),T]),(0,n._)("li",null,[A,(0,n._)("a",E,[I,(0,n.Wm)(i)]),H])]),O,(0,n._)("p",null,[R,(0,n._)("a",Y,[Z,(0,n.Wm)(i)]),q]),G],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const i=e.__vccOpts||e;for(const[e,n]of a)i[e]=n;return i}}}]);