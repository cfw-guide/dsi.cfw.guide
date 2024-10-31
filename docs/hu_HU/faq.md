# GYIK

## Kell frissítenem a rendszert?

It is **not** recommended to update your DSi unless you know there are purchased DSiWare. Habár továbbra is folytatható az útmutató, ha így teszel, az egyetlen előnye a frissítésnek, a képesség, hogy elérd a Nintendo DSi Shop-ot, hogy újra letöltsd a már megvásárolt címeket. Minden más előny, mint például a Facebook integráció a Nintendo DSi Camera alkalmazásban már nem használható vagy nem fontos annyira, hogy igazolja a hátrányokat:

- Installing System Updates is known to occasionally **brick** consoles, with roughly the same frequency as when installing Unlaunch
- A régi exploitok már nem használhatók, amik szükségesek lehetnek, ha nem tudod használni az ajánlott exploitokat
- A flashcard kompatibilitás csökkentett, azonban ez megkerült, ha telepíted az Unlaunch-öt

## Melyik a legjobb exploit?

Az Unlaunch a legjobb exploit a DSi-hez, az egyetlen hátránya, hogy van egy kicsi kockázata a brickelésnek a telepítéskor. Általában ajánlott, hogy a Mamory Pit-et használd az Unlaunch telepítéséhez. Ha szeretnél elkerülni bármilyen kockázatot, akkor ajánlott a Flipnote Lenny használata helyette, mert kevesebb homebrew problémája van mint a Memory Pit-nek, miközben ugyanannyira biztonságos és egyszerű eltávolítani. Alább az előnyök és hátrányok listája minden exploithoz:

### Memory Pit

Előnyök:

- Gyorsan és könnyen használható
- Nincs kockázata a konzol sérülésének, az eltávolítás olyan egyszerű, mint kivenni az SD kártyát vagy letörölni egy fájl
- Kompatibilis minden DSi konzollal, kivéve ha rossz a kamerája és még nem lett végrehajtva a kamera oktatóprogram

Hátrányok:

- Szükség van a DSi Camera betöltésére minden alkalommal, amikor a homebrew-okat szeretnéd elérni
- Inkompatibilis bizonyos DSi módú címekkel és homebrew-val azért mert a WRAM csak az ARM7 CPU számára nyitott
- Hozzáférés a Slot-1-hez (a DS játék kártyához) blokkolt homebrew esetén
- A hozzáférés a DSP-hez blokkolt, ezért rosszabb a hang a GBARunner2-ben
- A fényképek az SD kártyán nem megtekinthetők a DSi Camera alkalmazásban, amíg a Memory Pit telepített, mert ez a trigger az exploithoz
  - The only way to view SD card photos while Memory Pit is installed, is to launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap (v0.61.3 or later)

### stylehax

Előnyök:

- Jobb kompatibilitás a DSi módú címekkel és homebrew-okkal, mint a Memory Pit esetében
- Könnyen használható
- Nincs kockázata a konzol sérülésének
- Használható hibás kamerával rendelkező konzolokon
- Jobb hang a GBARunner2-ben

Hátrányok:

- Internet hozzáférést igényel
- Szükség van a DSi Browser betöltésére minden alkalommal, amikor a homebrew-okat szeretnéd elérni, ami kicsit több időt igényel, mint a Memory Pit
- Hozzáférés a Slot-1-hez (a DS játék kártyához) blokkolt homebrew esetén

### Flipnote Lenny

Előnyök:

- Jobb kompatibilitás a DSi módú címekkel és homebrew-okkal, mint a Memory Pit esetében
- Nincs kockázata a konzol sérülésének, az eltávolítás olyan egyszerű, mint kivenni az SD kártyát vagy letörölni egy mappát
- Használható hibás kamerával rendelkező konzolokon
- Jobb hang a GBARunner2-ben

Hátrányok:

- Szükség van a Flipnote Studio betöltésére minden alkalommal, amikor a homebrew-okat szeretnéd elérni, ami kicsit több időt igényel, mint a Memory Pit
- Hozzáférés a Slot-1-hez (a DS játék kártyához) blokkolt homebrew esetén

### Unlaunch

Előnyök:

- Lehetővé teszi Allows homebrew és DSiWare azonnali betöltését rendszer bootoláskor, opcionális gyorsgombokkal
- Teljes hozzáférés a rendszerhez, korlátozások nélkül, beleértve:
  - Hozzáférés a Slot-1-hez, ami lehetővé teszi a játék kártyák dumpolását és inkompatibilis flashcard-ok betöltését
  - Jobb hang a GBARunner2-ben
- A régió zárakat eltávolítja a DSi-Enchanced/Exkluzív játék kártyák esetében
- Védelem a legtöbb lehetőség ellen, ami a DSi-t brickelheti
- DSi-Enhanced játékok futhatnak DSi módban Donor ROM nélkül
- Régi homebrew futtatható az nds-bootstrap-hb-n keresztül

Hátrányok:

- Very minor risk of **bricking** the console when installing
- Another, slightly higher, risk of bricking if you decide to [uninstall it](uninstalling-unlaunch.html)
- Nem kompatibilis fejlesztői konzolokkal

## Vesztek el funkcionalitást, ha moddolom a rendszerem?

Ha telepíted az Unlaunch-öt vagy a Flipnote Lenny-t használod, nem vesztesz el funkcionalitást. If you use Memory Pit, you will be unable to view photos on the SD card using the DSi Camera, unless you launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap.

- To regain the ability to view your SD card photos when launching the DSi Camera from the DSi Menu, install Unlaunch or switch to a different exploit, then delete Memory Pit's `pit.bin` file
  - If `tip.bin` exists in the same folder, rename it back to `pit.bin`

## Hogyan játszhatok Nintendo DS játék kártya dumpokkal?

A játék kártya dump játékok használatához a konzolnak szüksége van flashcard-ra vagy nds-bootstrap-re, egy programra, ami lehetővé teszi, hogy a belső SD kártyáról játszhatók legyenek a játékok a Slot-1 írás és olvasás átirányításával.

- A TWiLight Menu++-szal navigálhatsz az SD kártyádon, hogy megtaláld a ROM fájlokat, amiket nds-bootstrap-pel játszhatsz. A TWiLight Menu++ használatának előnye a csalás menü, a játékonkénti beállítások és hogy megkerüli a korlátozásokat, amikkel a forwarder-ek rendelkeznek. Más szavakkal, csak felmásolod a ROM fájlokat és játszhatsz velük bármilyen telepítés nélkül. Nincs 39 cím limit, sem hiyaCFW, sem Unlaunch nem szükséges és nincs korlátozás az SD kártya szabad tárhelyével kapcsolatosan sem
- hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) guide on the DS-Homebrew Wiki, but it has some limitations. Van egy 39 címes limit és kevésbé kényelmes beállítani, mint használni a TWiLight Menu++-t
  - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## Hogyan tudom frissíteni a homebrew appjaim?

- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](installing-unlaunch.html) page
  - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card from the [updated release](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
  - Ha használsz TWiLight Menu++-t, erős rá az esély, hogy a legfrissebb nds-bootstrap kiadás is megtalálható a TWiLight Menu++-ban
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

Más homebrew-ok elképzelhető, hogy más metódust használnak a frissítésre.

## Új vagyok vagy szeretném újra csinálni a telepítést. Hol kezdjem?

- Ha még nem módosítottad a konzolodat, vagy frissíteni szeretnéd az Unlaunch-öt a rendszereden, azt ajánljuk, hogy kezd az elejétől az útmutatót, követve az oldalakat. Legyél biztos abban, hogy mindent elolvastál a honlapon
- If you have the latest version Unlaunch, follow the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) to set up TWiLight Menu++ on your system

## Hogyan tudom eltávolítani a szülői felügyeletet?

- The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls

## Meg tudom változtatni a Nintendo DSi konzolom régióját?

Igen, néhány különböző metódus áll rendelkezésre, attól függően mit szeretnél változtatni:

- A legbiztonságosabb és legegyszerűbb metódus a TWiLight Menu++ telepítése, az bármelyik hivatalos nyelvet tudja használni, és még többet a NAND módosítása nélkül
- Ha tényleg szeretnéd cserélni a régiót és hiyaCFW-t használsz, nyisd meg a konfigurációs menüt és állítsd át a régiós beállításokat (nem lehetséges CHN vagy KOR NAND-okkal)
  - If this breaks touch input, revert the region setting back to the original, and you can instead use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) for Asian DSi systems. For American DSi systems use [this version of hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## Mi történt a hiyaCFW telepítési útmutatóval?

Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).

- Ha linkelve lettél az oldalra egy másik útmutatóból, akkor a lépések amit követtél valószínűleg elavultak. Kérjük használd ezt az útmutatót helyette, mert folyamatosan karbantartott a projekt fejlesztői által

## Mi történt a Lazy DSi Downloader-rel? Hogyan telepítek CFW-t nélküle?

A Lazy DSi Downloader egy olyan program volt, ami lehetővé tette, hogy átugorjuk a kézi telepítést azzal, hogy letölti és a helyére rakja a szükséges fájlokat és mappákat az SD kártyádra. Azonban a módtól, ahogy programozva és terjesztve lett, sok felhasználó tapasztalt különböző hibákat és végül kötött ki a kézi teleptésnél, mivel az gyorsabb és/vagy könnyebb, mint kijavtani azt ami a hibát okozta.

To avoid more users encountering these issues, we no longer recommend using Lazy DSi Downloader, and instead [doing the manual setup](get-started.html) is the recommended way to go.

- Ha linkelve lettél az oldalra egy másik útmutatóból, ami a Lazy DSi Downloader-t ajánlja, akkor a lépések amit követtél valószínűleg elavultak. Kérjük használd ezt az útmutatót helyette, mert folyamatosan karbantartott a projekt fejlesztői által.

## Milyen SD kártyát kell, hogy használjak?

- Megbízható márkájú SD kártyát kell vásárolnod
- Egy teljes méretű SD kártya vagy egy microSD kártya adapterrel is megfelelő
- Bármilyen méret 1 GB és 2 TB között működni fog. Általános használatra 8 GB elég
  - Néhány szoftver, mint például a hiyaCFW, hosszabb töltési idővel rendelkezhet nagyobb SD kártya kapacitás esetén
- 8-as sebesség osztályú vagy gyorsabb ajánlott

## Használhatom a DSi SD kártyámat más rendszereken is?

Általában igen, két kivétellel:

- A hiyaCFW csak azon a rendszeren fog működni, amin telepítve lett
- Még ha nds-bootstrap-et vagy egy flashcard-ot is használsz, a friend code-ok az online NDS játékok esetében alaphelyzetbe állnak, ha megpróbálsz online lenni egy másik konzolon

## Hogyan váltok egy új SD kártyára, miután beállítottam a homebrew-t?

Format your new SD card using the [SD Card Setup](sd-card-setup.html) instructions, then simply move your data from the old SD card to the new one.

## Tudom használni a rendszeremet normálisan az SD kártya behelyezése nélkül, miután telepítettem a homebrew-t?

Igen. Ha nem telepíted az Unlaunch-öt, a rendszered teljesen módosítatlan marad. If you _did_ install Unlaunch, you may need to [configure Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) to automatically boot the original DSi Menu under specified conditions.

## The [Unlaunch page](https://problemkaputt.de/unlaunch.htm) says that version 2.0 is not known to be safe. Javasolt helyette egy korábbi verzió használata?

Az Unlaunch oldal nem került frissítésre, mióta a 2.0 verzió kiadásra került 2019-ben. A legtöbb felhasználó nem tapasztalt problémát ezzel a verzióval, így biztonságosnak tekinthető.

## Hogyan futtathatok dumpolt DSiWare-t?

Az ajánlott módszer, hogy egyszerűen futtasd a TWiLight Menu++-szal az egyszerű húzd-és-vidd metódussal és nincs semmilen korlátja. Ha az nds-bootstrap a beállított indítási metódus, akkor még megkapja a csalások és a képernyőképek előnyeit és minden más előnyt ami a játékbani menüből érhető el.

However, for the few titles that are incompatible, you can use [NTM](https://github.com/Epicpkmn11/NTM/releases) to install them on either internal memory or [hiyaCFW's SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing). Továbbá a fenti előnyök hiánya mellett a 39 címes limit is megmarad, amik nem léphetik től a 128 MiB/1,024 block méretet. A SysNAND esetén van egy nagyon kicsi rizikója a rendszer brickelésének, amikor az ír a belső NAND-ba.
