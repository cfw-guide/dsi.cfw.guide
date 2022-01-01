"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5955],{2827:(e,o,a)=>{a.r(o),a.d(o,{data:()=>i});const i={key:"v-4e320ef6",path:"/pl_PL/restoring-nand.html",title:"Przywracanie kopii zapasowej NAND",lang:"pl-PL",frontmatter:{title:"Przywracanie kopii zapasowej NAND"},excerpt:"",headers:[{level:2,title:"Wymagania",slug:"wymagania",children:[]},{level:2,title:"Zrzucenie BIOS do użycia w no$gba",slug:"zrzucenie-bios-do-uzycia-w-no-gba",children:[]},{level:2,title:"Testowanie kopii zapasowej NAND",slug:"testowanie-kopii-zapasowej-nand",children:[]},{level:2,title:"Uninstalling Unlaunch from your NAND backup (optional)",slug:"uninstalling-unlaunch-from-your-nand-backup-optional",children:[]},{level:2,title:"Wgrywanie kopii zapasowej NAND (Urządzenie)",slug:"wgrywanie-kopii-zapasowej-nand-urzadzenie",children:[]},{level:2,title:"Wgrywanie kopii zapasowej NAND (Hardmod)",slug:"wgrywanie-kopii-zapasowej-nand-hardmod",children:[]}],filePathRelative:"pl_PL/restoring-nand.md",git:{updatedTime:1641080169e3,contributors:[{name:"lifehackerhansol",email:"lifehacker@hansol.ca",commits:1}]}}},8170:(e,o,a)=>{a.r(o),a.d(o,{default:()=>X});var i=a(6252);const n=(0,i._)("div",{class:"custom-container danger"},[(0,i._)("p",{class:"custom-container-title"},"DANGER"),(0,i._)("p",null,[(0,i.Uk)("OSTRZEŻENIE! To jest "),(0,i._)("em",null,[(0,i._)("strong",null,"niebezpieczne")]),(0,i.Uk)(". Nawet podążając za tymi krokami, nadal istnieje potencjał do zablokowania DSi, ponieważ NAND jest bardzo niskiej jakości, zwłaszcza jeśli flashujesz wiele razy! Powinno to być stosowane tylko w ostateczności!")])],-1),r=(0,i._)("div",{class:"custom-container tip"},[(0,i._)("p",{class:"custom-container-title"},"TIP"),(0,i._)("p",null,[(0,i.Uk)("Nie pomiń "),(0,i._)("em",null,"niczego"),(0,i.Uk)(" na tej stronie, jakikolwiek błąd znacznie zwiększa szansę na zablokowanie twojego DSi.")])],-1),l=(0,i._)("p",null,"Po pierwsze, kilka bezpieczniejszych alternatyw dla tego:",-1),t=(0,i._)("li",null,"Instalacja DSiWare może być wykonana za pomocą hiyaCFW lub TWiLight Menu++",-1),s=(0,i.Uk)("Recovering pictures can be done using "),d={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},c=(0,i.Uk)("ninfs"),u=(0,i.Uk)(", in combination with hiyaCFW or TWiLight Menu++ if you want them on console. The latest version of the HiyaCFW Helper allows you to copy your photos from your NAND to the SDNAND during setup"),p=(0,i._)("li",null,[(0,i.Uk)("Restoring an Unlaunch button configuration can be done from the Unlaunch menu, which can be accessed by holding "),(0,i._)("kbd",{class:"face"},"A"),(0,i.Uk)(" + "),(0,i._)("kbd",{class:"face"},"B"),(0,i.Uk)(" while powering the console on")],-1),h=(0,i._)("li",null,"Uruchamianie w Unlaunch skutkujące błędem? Take out your SD card and try starting the system again. Jeśli zadziała, to jest to błąd na twojej karcie SD i przywrócenie kopii zapasowej NAND tego nie naprawi",-1),w=(0,i.Uk)('"An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see '),k={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},z=(0,i.Uk)("hiyaCFW FAQ & Troubleshooting"),m=(0,i.Uk)(" for more information"),y=(0,i.Uk)("Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on "),b={href:"https://ds-homebrew.com/discord",target:"_blank",rel:"noopener noreferrer"},g=(0,i.Uk)("Discord"),N=(0,i._)("li",null,'Odinstalowanie Unlauncha, czy to poprzez flashowanie NAND czy użycie deinstalatora, powinno być unikane, chyba że jest to absolutnie konieczne, możesz ustawić klucze autobootu na "Launcher" i DSi będzie jak nowy',-1),j=(0,i._)("p",null,"Jedyną rzeczą, którą powinieneś zrobić ze swoją pamięcią NAND jest instalacja Unlaunch. W przeciwnym razie należy korzystać z innych rozwiązań.",-1),f=(0,i._)("h2",{id:"wymagania",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#wymagania","aria-hidden":"true"},"#"),(0,i.Uk)(" Wymagania")],-1),D=(0,i._)("li",null,[(0,i.Uk)("Kopia zapasowa NAND "),(0,i._)("strong",null,"z twojego DSi")],-1),U=(0,i.Uk)("Najnowsza wersja "),_={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},A=(0,i.Uk)("SafeNANDManager"),S=(0,i._)("li",null,"Sposób uruchamiania homebrew z dostępem NAND, takim jak Unlaunch lub Memory Pit",-1),W={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},O=(0,i.Uk)("no$gba"),E=(0,i.Uk)(", aby sprawdzić kopię zapasową NAND (Pobierz wersję dla Windows) "),v=(0,i.Uk)("użytkownicy macOS i Linux mogą używać "),T={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},I=(0,i.Uk)("WINE"),M=(0,i.Uk)(", aby uruchomić no$gba"),B={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},L=(0,i.Uk)("dsibiosdumper"),P=(0,i.uE)('<h2 id="zrzucenie-bios-do-uzycia-w-no-gba" tabindex="-1"><a class="header-anchor" href="#zrzucenie-bios-do-uzycia-w-no-gba" aria-hidden="true">#</a> Zrzucenie BIOS do użycia w no$gba</h2><ol><li>Wypakuj <code>dsibiosdumper.nds</code> z archiwum <code>dsibiosdumper.zip</code> i umieść go w dowolnym miejscu na karcie SD</li><li>Włącz konsolę przytrzymując <kbd class="face">A</kbd> i <kbd class="face">B</kbd><ul><li>To powinno uruchomić Unlaunch Filemenu</li></ul></li><li>Uruchom dsibiosdumper z Unlaunch Filemenu</li><li>Naciśnij <kbd class="face">A</kbd> aby zrzucić BIOS do karty SD</li><li>Naciśnij <kbd>START</kbd> aby wyjść z dsibiosdumpera</li></ol><h2 id="testowanie-kopii-zapasowej-nand" tabindex="-1"><a class="header-anchor" href="#testowanie-kopii-zapasowej-nand" aria-hidden="true">#</a> Testowanie kopii zapasowej NAND</h2><p>Bardzo ważne jest, aby sprawdzić, czy kopia zapasowa NAND działa przed próbą przywrócenia jej na konsolę, jeśli pokaże zablokowanie w no$gba, najprawdopodobniej zablokuje również konsolę.</p><ol><li>Wyodrębnij <code>NO$GBA.EXE</code> z <code>no$gba-w.zip</code> do folderu na komputerze</li><li>Skopiuj swoją kopię zapasową NAND do folderu, w którym umieściłeś <code>NO$GBA.EXE</code> i zmień nazwę na <code>DSI-1.MMC</code></li><li>Skopiuj <code>bios7i.bin</code> i <code>bios9i.bin</code> do folderu, w którym umieściłeś <code>NO$GBA. XE</code>, nazwany odpowiednio <code>BIOSDSI7.ROM</code> i <code>BIOSDSI9.ROM</code>.</li><li>Uruchom <code>NO$GBA.EXE</code></li><li>Kliknij <code>Options</code> &gt; <code>Emulation Setup</code> aby otworzyć okno konfiguracji Emulacji</li><li>Zmień <code>Reset/Startup Entrypoint</code> na <code>GBA/NDS BIOS (logo Nintendo)</code></li><li>Zmień <code>NDS Mode/Colors</code> na <code>DSi (retail/16MB)</code></li><li>Kliknij <code>OK</code></li><li>Uruchom dowolny ROM NDS (plik <code>.nds</code>)</li></ol><p>If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. If it shows any kind of error <em><strong>do not flash that backup</strong></em>!</p><h2 id="uninstalling-unlaunch-from-your-nand-backup-optional" tabindex="-1"><a class="header-anchor" href="#uninstalling-unlaunch-from-your-nand-backup-optional" aria-hidden="true">#</a> Uninstalling Unlaunch from your NAND backup (optional)</h2><p>Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do <strong>not</strong> need to do this section.</p>',8),R=(0,i.Uk)("Download the latest version of the "),C={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},$=(0,i.Uk)("Unlaunch installer"),x=(0,i.uE)("<li>Extract <code>UNLAUNCH.DSI</code> from <code>unlaunch.zip</code></li><li>Launch <code>UNLAUNCH.DSI</code> in no$gba and start it from the Game Card slot <ul><li>This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu</li></ul></li><li>Choose <code>Uninstall</code></li><li>Once complete, choose <code>Power down</code></li><li>Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly</li>",5),F=(0,i.uE)('<h2 id="wgrywanie-kopii-zapasowej-nand-urzadzenie" tabindex="-1"><a class="header-anchor" href="#wgrywanie-kopii-zapasowej-nand-urzadzenie" aria-hidden="true">#</a> Wgrywanie kopii zapasowej NAND (Urządzenie)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Upewnij się, że przeczytałeś powyższe kroki, ponieważ wchodzisz na głęboką wodę. Jeśli zostałeś skierowany bezpośrednio do tego miejsca bez podążania za powyższymi wskazówkami, wróć na górę i przeczytaj całą tę stronę.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Upewnij się, że system Nintendo DSi jest dobrze naładowany przed rozpoczęciem tej sekcji.</p></div><ol><li>Po włożeniu karty SD włącz Nintendo DSi, trzymając <kbd class="face">A</kbd> i <kbd class="face">B</kbd></li><li>Uruchom SafeNANDManager</li><li>Naciśnij <code>begin NAND restore</code></li><li>Po zakończeniu przywracania, naciśnij <kbd>START</kbd>, aby wyłączyć DSi</li></ol><p>Twój NAND powinien być teraz przywrócony.</p><h2 id="wgrywanie-kopii-zapasowej-nand-hardmod" tabindex="-1"><a class="header-anchor" href="#wgrywanie-kopii-zapasowej-nand-hardmod" aria-hidden="true">#</a> Wgrywanie kopii zapasowej NAND (Hardmod)</h2>',6),G=(0,i.Uk)("Jeśli nie możesz uruchomić swojego Nintendo DSi, hardmod jest jedynym sposobem na przywrócenie kopii zapasowej NAND. Najlepszym przewodnikiem, który obecnie istnieje jest "),H={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"},Z=(0,i.Uk)(" przewodnik Nintendo DSi hardmod na DS-Homebrew Wiki"),J=(0,i.Uk)("."),K={},X=(0,a(3744).Z)(K,[["render",function(e,o){const a=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,r,l,(0,i._)("ul",null,[t,(0,i._)("li",null,[s,(0,i._)("a",d,[c,(0,i.Wm)(a)]),u]),p,h,(0,i._)("li",null,[w,(0,i._)("a",k,[z,(0,i.Wm)(a)]),m]),(0,i._)("li",null,[y,(0,i._)("a",b,[g,(0,i.Wm)(a)])]),N]),j,f,(0,i._)("ul",null,[D,(0,i._)("li",null,[U,(0,i._)("a",_,[A,(0,i.Wm)(a)])]),S,(0,i._)("li",null,[(0,i._)("a",W,[O,(0,i.Wm)(a)]),E,(0,i._)("ul",null,[(0,i._)("li",null,[v,(0,i._)("a",T,[I,(0,i.Wm)(a)]),M])])]),(0,i._)("li",null,[(0,i._)("a",B,[L,(0,i.Wm)(a)])])]),P,(0,i._)("ol",null,[(0,i._)("li",null,[R,(0,i._)("a",C,[$,(0,i.Wm)(a)])]),x]),F,(0,i._)("p",null,[G,(0,i._)("a",H,[Z,(0,i.Wm)(a)]),J])],64)}]])},3744:(e,o)=>{o.Z=(e,o)=>{const a=e.__vccOpts||e;for(const[e,i]of o)a[e]=i;return a}}}]);