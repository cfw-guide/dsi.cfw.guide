import{_ as t,r,o as l,c as s,a as e,d as o,b as a,e as i}from"./app-ULTNArho.js";const d={},c=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,[o("OSTRZEŻENIE! To jest "),e("em",null,[e("strong",null,"niebezpieczne")]),o(". Nawet podążając za tymi krokami, nadal istnieje potencjał do zablokowania DSi, ponieważ NAND jest bardzo niskiej jakości, zwłaszcza jeśli flashujesz wiele razy! Powinno to być stosowane tylko w ostateczności!")])],-1),u=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[o("Nie pomiń "),e("em",null,"niczego"),o(" na tej stronie, jakikolwiek błąd znacznie zwiększa szansę na zablokowanie twojego DSi.")])],-1),h=e("p",null,"Po pierwsze, kilka bezpieczniejszych alternatyw dla tego:",-1),p=e("li",null,"Instalacja DSiWare może być wykonana za pomocą hiyaCFW lub TWiLight Menu++",-1),w={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,[o("Restoring an Unlaunch button configuration can be done from the Unlaunch menu, which can be accessed by holding "),e("kbd",{class:"face"},"A"),o(" + "),e("kbd",{class:"face"},"B"),o(" while powering the console on")],-1),k=e("li",null,"Uruchamianie w Unlaunch skutkujące błędem? Take out your SD card and try starting the system again. Jeśli zadziała, to jest to błąd na twojej karcie SD i przywrócenie kopii zapasowej NAND tego nie naprawi",-1),m={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},y={href:"https://ds-homebrew.com/discord",target:"_blank",rel:"noopener noreferrer"},z=e("li",null,'Odinstalowanie Unlauncha, czy to poprzez flashowanie NAND czy użycie deinstalatora, powinno być unikane, chyba że jest to absolutnie konieczne, możesz ustawić klucze autobootu na "Launcher" i DSi będzie jak nowy',-1),g=e("p",null,"Jedyną rzeczą, którą powinieneś zrobić ze swoją pamięcią NAND jest instalacja Unlaunch. W przeciwnym razie należy korzystać z innych rozwiązań.",-1),N=e("h2",{id:"wymagania",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wymagania","aria-hidden":"true"},"#"),o(" Wymagania")],-1),f=e("li",null,[o("Kopia zapasowa NAND "),e("strong",null,"z twojego DSi")],-1),_={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},j=e("li",null,"Sposób uruchamiania homebrew z dostępem NAND, takim jak Unlaunch lub Memory Pit",-1),D={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},S={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},A={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},U=i('<h2 id="zrzucenie-bios-do-uzycia-w-no-gba" tabindex="-1"><a class="header-anchor" href="#zrzucenie-bios-do-uzycia-w-no-gba" aria-hidden="true">#</a> Zrzucenie BIOS do użycia w no$gba</h2><ol><li>Wypakuj <code>dsibiosdumper.nds</code> z archiwum <code>dsibiosdumper.zip</code> i umieść go w dowolnym miejscu na karcie SD</li><li>Włącz konsolę przytrzymując <kbd class="face">A</kbd> i <kbd class="face">B</kbd><ul><li>To powinno uruchomić Unlaunch Filemenu</li></ul></li><li>Uruchom dsibiosdumper z Unlaunch Filemenu</li><li>Naciśnij <kbd class="face">A</kbd> aby zrzucić BIOS do karty SD</li><li>Naciśnij <kbd>START</kbd> aby wyjść z dsibiosdumpera</li></ol><h2 id="testowanie-kopii-zapasowej-nand" tabindex="-1"><a class="header-anchor" href="#testowanie-kopii-zapasowej-nand" aria-hidden="true">#</a> Testowanie kopii zapasowej NAND</h2><p>Bardzo ważne jest, aby sprawdzić, czy kopia zapasowa NAND działa przed próbą przywrócenia jej na konsolę, jeśli pokaże zablokowanie w no$gba, najprawdopodobniej zablokuje również konsolę.</p><ol><li>Wyodrębnij <code>NO$GBA.EXE</code> z <code>no$gba-w.zip</code> do folderu na komputerze</li><li>Skopiuj swoją kopię zapasową NAND do folderu, w którym umieściłeś <code>NO$GBA.EXE</code> i zmień nazwę na <code>DSI-1.MMC</code></li><li>Skopiuj <code>bios7i.bin</code> i <code>bios9i.bin</code> do folderu, w którym umieściłeś <code>NO$GBA. XE</code>, nazwany odpowiednio <code>BIOSDSI7.ROM</code> i <code>BIOSDSI9.ROM</code>.</li><li>Uruchom <code>NO$GBA.EXE</code></li><li>Kliknij <code>Options</code> &gt; <code>Emulation Setup</code> aby otworzyć okno konfiguracji Emulacji</li><li>Zmień <code>Reset/Startup Entrypoint</code> na <code>GBA/NDS BIOS (logo Nintendo)</code></li><li>Zmień <code>NDS Mode/Colors</code> na <code>DSi (retail/16MB)</code></li><li>Kliknij <code>OK</code></li><li>Uruchom dowolny ROM NDS (plik <code>.nds</code>)</li></ol><p>If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. Jeśli pokaże jakikolwiek błąd <em><strong>nie flashuj(nie wgrywaj) tej kopii zapasowej</strong></em>!</p><h2 id="uninstalling-unlaunch-from-your-nand-backup-optional" tabindex="-1"><a class="header-anchor" href="#uninstalling-unlaunch-from-your-nand-backup-optional" aria-hidden="true">#</a> Uninstalling Unlaunch from your NAND backup (optional)</h2><p>Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do <strong>not</strong> need to do this section.</p>',8),I={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},E=i("<li>Extract <code>UNLAUNCH.DSI</code> from <code>unlaunch.zip</code></li><li>Launch <code>UNLAUNCH.DSI</code> in no$gba and start it from the Game Card slot <ul><li>This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu</li></ul></li><li>Choose <code>Uninstall</code></li><li>Once complete, choose <code>Power down</code></li><li>Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly</li>",5),W=i('<p>If no$gba shows any kind of error instead of loading the DSi menu, <em><strong>do not flash that backup</strong></em>! If you have an older NAND backup you may want to try using that instead. Do <strong>not</strong> try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.</p><h2 id="wgrywanie-kopii-zapasowej-nand-urzadzenie" tabindex="-1"><a class="header-anchor" href="#wgrywanie-kopii-zapasowej-nand-urzadzenie" aria-hidden="true">#</a> Wgrywanie kopii zapasowej NAND (Urządzenie)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Make sure your Nintendo DSi system is well charged before beginning this section.</p></div><ol><li>Po włożeniu karty SD włącz Nintendo DSi, trzymając <kbd class="face">A</kbd> i <kbd class="face">B</kbd></li><li>Uruchom SafeNANDManager</li><li>Naciśnij <code>begin NAND restore</code></li><li>Po zakończeniu przywracania, naciśnij <kbd>START</kbd>, aby wyłączyć DSi</li></ol><p>Your NAND should now be restored.</p><h2 id="wgrywanie-kopii-zapasowej-nand-hardmod" tabindex="-1"><a class="header-anchor" href="#wgrywanie-kopii-zapasowej-nand-hardmod" aria-hidden="true">#</a> Wgrywanie kopii zapasowej NAND (Hardmod)</h2>',7),M={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"};function O(T,x){const n=r("ExternalLinkIcon");return l(),s("div",null,[c,u,h,e("ul",null,[p,e("li",null,[o("Recovering pictures can be done using "),e("a",w,[o("ninfs"),a(n)]),o(", in combination with hiyaCFW or TWiLight Menu++ if you want them on console. The latest version of the HiyaCFW Helper allows you to copy your photos from your NAND to the SDNAND during setup")]),b,k,e("li",null,[o('"An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see '),e("a",m,[o("hiyaCFW FAQ & Troubleshooting"),a(n)]),o(" for more information")]),e("li",null,[o("Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on "),e("a",y,[o("Discord"),a(n)])]),z]),g,N,e("ul",null,[f,e("li",null,[o("Najnowsza wersja "),e("a",_,[o("SafeNANDManager"),a(n)])]),j,e("li",null,[e("a",D,[o("no$gba"),a(n)]),o(", aby sprawdzić kopię zapasową NAND (Pobierz wersję dla Windows) "),e("ul",null,[e("li",null,[o("użytkownicy macOS i Linux mogą używać "),e("a",S,[o("WINE"),a(n)]),o(", aby uruchomić no$gba")])])]),e("li",null,[e("a",A,[o("dsibiosdumper"),a(n)])])]),U,e("ol",null,[e("li",null,[o("Download the latest version of the "),e("a",I,[o("Unlaunch installer"),a(n)])]),E]),W,e("p",null,[o("If you cannot boot your Nintendo DSi, a hardmod is the only way to restore a NAND backup. The best guide that currently exists is the "),e("a",M,[o("Nintendo DSi hardmod guide on the DS-Homebrew Wiki"),a(n)]),o(".")])])}const v=t(d,[["render",O],["__file","restoring-nand.html.vue"]]);export{v as default};