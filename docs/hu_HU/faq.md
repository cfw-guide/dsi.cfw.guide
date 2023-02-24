---
title: GYIK
---

## Kell frissítenem a rendszert?
**Nem** ajánlott a DSi frissítése, ha nem tudod biztosan, hogy van-e rajta vásárolt DSiWare. Habár továbbra is folytatható az útmutató, ha így teszel, az egyetlen előnye a frissítésnek, a képesség, hogy elérd a Nintendo DSi Shop-ot, hogy újra letöltsd a már megvásárolt címeket. Minden más előny, mint például a Facebook integráció a Nintendo DSi Camera alkalmazásban már nem használható vagy nem fontos annyira, hogy igazolja a hátrányokat:

- A rendszer frissítések telepítése alkalmanként **brickeli** a konzolokat, közel hasonló frekvenciával, mint az Unlaunch telepítése
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
     - Az egyetlen módja, hogy az SD kártyán található fotókat megtekintsd amíg a Memory Pit telepített, hogy elindítod a ROM dumpját a DSi Camera alkalmazásnak **TW**i**L**ight Menu++-szal, hgy bootoljon nds-bootstrap-re (v0.61.3 vagy későbbi)

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
- Van egy nagyon kicsi kockázata a konzol **brickelésének** a telepítésekor
- Egy másik kicsit magasabb kockázata van a brickelésnek, amikor [eltávolítod](uninstalling-unlaunch.html)
- Nem kompatibilis fejlesztői konzolokkal

## Vesztek el funkcionalitást, ha moddolom a rendszerem?
Ha telepíted az Unlaunch-öt vagy a Flipnote Lenny-t használod, nem vesztesz el funkcionalitást. Ha a Memory Pit-et használod, nem fogsz tudni fotókat megnézni az SD kártyáról a DSi Camera alkalmazással, kivéve ha egy DSi Camera ROM-ot indítasz a**TW**i**L**ight Menu++ használatával, bootoljon be rá az nds-bootstrap használatával.
- Ahhoz, hogy újra tudjál az SD kártyáról fotókat megtekinteni a DSi Camera indításakor, telepítsd az Unlaunch-öt vagy válts más exploitra és töröld a Memory Pit `pit.bin` fájlját
  - Ha a `tip.bin` létezik ugyanabban a mappában, nevezd vissza azt `pit.bin`-re

## Hogyan játszhatok Nintendo DS játék kártya dumpokkal?
A játék kártya dump játékok használatához a konzolnak szüksége van flashcard-ra vagy nds-bootstrap-re, egy programra, ami lehetővé teszi, hogy a belső SD kártyáról játszhatók legyenek a játékok a Slot-1 írás és olvasás átirányításával.
- A TWiLight Menu++-szal navigálhatsz az SD kártyádon, hogy megtaláld a ROM fájlokat, amiket nds-bootstrap-pel játszhatsz. A TWiLight Menu++ használatának előnye a csalás menü, a játékonkénti beállítások és hogy megkerüli a korlátozásokat, amikkel a forwarder-ek rendelkeznek. Más szavakkal, csak felmásolod a ROM fájlokat és játszhatsz velük bármilyen telepítés nélkül. Nincs 39 cím limit, sem hiyaCFW, sem Unlaunch nem szükséges és nincs korlátozás az SD kártya szabad tárhelyével kapcsolatosan sem
- A hiyaCFW felhasználók létrehozhatnak forwarder-eket az SDNAND DSi Menu-be a DS-Homebrew Wiki [DS játék forwarder-ek](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) útumutató használatával, de vannak korlátozásai. Van egy 39 címes limit és kevésbé kényelmes beállítani, mint használni a TWiLight Menu++-t
   - Ha nincs hiyaCFW-d és szeretnél forwarder-eket használni, kövesd a [hiyaCFW telepítési útmutatót](https://wiki.ds-homebrew.com/hiyacfw/installing) a DS-Homebrew Wiki-n

## Hogyan tudom frissíteni a homebrew appjaim?
- **Unlaunch** - Kövesd az útmutatót az [Unlaunch telepítése](installing-unlaunch.html) oldalon
   - **Nem** kell eltávolítanod az Unlaunch-öt mielőtt ezt csinálod
- **hiyaCFW** - Cseréld a `hiya.dsi`-t az SD kártyád gyökerében a [legfrissebb kiadásból](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Kövesd a [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi) lépéseit
- **nds-bootstrap** - Másold az `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` fájlokat az `_nds` mappába, az SD kártyád gyökerében
   - Ha használsz TWiLight Menu++-t, erős rá az esély, hogy a legfrissebb nds-bootstrap kiadás is megtalálható a TWiLight Menu++-ban
- **GodMode9i, dumpTool, Forwarder3-DS, stb.** - Kövesd azokat az útmutatókat ami alapján letöltötted őket

Más homebrew-ok elképzelhető, hogy más metódust használnak a frissítésre.

## Új vagyok vagy szeretném újra csinálni a telepítést. Hol kezdjem?
- Ha még nem módosítottad a konzolodat, vagy frissíteni szeretnéd az Unlaunch-öt a rendszereden, azt ajánljuk, hogy kezd az elejétől az útmutatót, követve az oldalakat. Legyél biztos abban, hogy mindent elolvastál a honlapon
- Ha rendelkezel a legutolsó Unlaunch verzióval, kövesd a [TWiLight Menu+ telepítési útmutatót](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) a TWiLight Menu++ rendszeredre telepítéséhez

## Hogyan tudom eltávolítani a szülői felügyeletet?
- Az [mkey generátor](https://mkey.salthax.org) tud generálni olyan kódot, amivel eltávolítható a szülői felügyelet

## Meg tudom változtatni a Nintendo DSi konzolom régióját?
Igen, néhány különböző metódus áll rendelkezésre, attól függően mit szeretnél változtatni:
- A legbiztonságosabb és legegyszerűbb metódus a TWiLight Menu++ telepítése, az bármelyik hivatalos nyelvet tudja használni, és még többet a NAND módosítása nélkül
- Ha tényleg szeretnéd cserélni a régiót és hiyaCFW-t használsz, akkor használhatod erre Yoti [hiyalang](https://github.com/Yoti/cli_hiyalang/releases)-ját ázsiai DSI rendszerekhez. Amerikai DSi rendszerekhez használd a [hiyalang ezen verzióját](https://github.com/Simonsator/cli_hiyalang/releases/)
- Végül, ha cserélni akarod a régiót az aktuális rendszer NAND-ban, használhatod Mighty Max [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)-ét

## Mi történt a hiyaCFW telepítési útmutatóval?
Mivel a hiyaCFW nem ad sok funkcionalitást és problémás és zavaró része volt az útmutatónak, átmozgatásra került a [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing)-be.
- Ha linkelve lettél az oldalra egy másik útmutatóból, akkor a lépések amit követtél valószínűleg elavultak. Kérjük használd ezt az útmutatót helyette, mert folyamatosan karbantartott a projekt fejlesztői által

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
Formázd az SD kártyát a [SD kártya telepítés](sd-card-setup.html) lépései alapján, majd egyszerűen mozgasd az adatod a régi SD kártyáról az újra.

## Tudom használni a rendszeremet normálisan az SD kártya behelyezése nélkül, miután telepítettem a homebrew-t?
Igen. Ha nem telepíted az Unlaunch-öt, a rendszered teljesen módosítatlan marad. Ha *did* telepíted az Unlaunch-öt, szükséged lehet [az Unlaunch beállítására](installing-unlaunch.html#section-iii-post-unlaunch-configuration), hogy automatikusan bootolj az eredeti DSi Menüre bizonyos kondíciók esetén.

## Az [Unlaunch oldal](https://problemkaputt.de/unlaunch.htm) azt mondja, hogy a 2.0 verzió nem tekinthető biztonságosnak. Javasolt helyette egy korábbi verzió használata?
Az Unlaunch oldal nem került frissítésre, mióta a 2.0 verzió kiadásra került, ami két évvel ezelőtt volt. A legtöbb felhasználó nem tapasztalt problémát ezzel a verzióval, így biztonságosnak tekinthető.


## Hogyan futtathatok dumpolt DSiWare-t?
Az ajánlott módszer, hogy egyszerűen futtasd a TWiLight Menu++-szal az egyszerű húzd-és-vidd metódussal és nincs semmilen korlátja. Ha az nds-bootstrap a beállított indítási metódus, akkor még megkapja a csalások és a képernyőképek előnyeit és minden más előnyt ami a játékbani menüből érhető el.

Azonban a néhány inkompatibilis címhez használhatod az [NTM](https://github.com/Epicpkmn11/NTM/releases)-et, hogy telepítsd őket vagy a belső memóriára vagy a [hiyaCFW SDNAND-jára](https://wiki.ds-homebrew.com/hiyacfw/installing). Továbbá a fenti előnyök hiánya mellett a 39 címes limit is megmarad, amik nem léphetik től a 128 MiB/1,024 block méretet. A SysNAND esetén van egy nagyon kicsi rizikója a rendszer brickelésének, amikor az ír a belső NAND-ba.
