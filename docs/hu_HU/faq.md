---
---

# GYIK

## Milyen funkcionalitást vesztek el, ha módosítom a rendszerem?
- Ha úgy döntesz, hogy telepíted az Unlaunch-öt, nem fogsz elveszteni semmilyen funkcionalitást
- Ha csak a Memory Pit telepítést végzed el, nem fogsz tudni fotókat menteni az SD kártyára, a Nintendo DSi Camera alkalmazással, amíg az exploit telepített. Vagy válts egy [alternatív exploit-ra](alternate-exploits) vagy [telepítsd az Unlaunch-öt](installing-unlaunch)
   - Ez azért van, mert a metaadat fájl (`pit.bin`) felülírásra kerül a Memory Pit exploit-tal

## Hogyan játszhatok Nintendo DS játék kártya dumpokkal?
A játék kártya dump játékok használatához a konzolnak szüksége van flashcard-ra vagy nds-bootstrap-re, egy programra, ami lehetővé teszi, hogy a belső SD kártyáról játszhatók legyenek a játékok a Slot-1 írás és olvasás átirányításával.
- A TWiLight Menu++-szal navigálhatsz az SD kártyádon, hogy megtaláld a ROM fájlokat, amiket nds-bootstrap-pel játszhatsz. A TWiLight Menu++ használatának előnye a csalás menü, a játékonkénti beállítások és hogy megkerüli a korlátozásokat, amikkel a forwarder-ek rendelkeznek. Más szavakkal, csak felmásolod a ROM fájlokat és játszhatsz velük bármilyen telepítés nélkül. Nincs 39 cím limit, sem hiyaCFW, sem Unlaunch nem szükséges és nincs korlátozás az SD kártya szabad tárhelyével kapcsolatosan sem
- A hiyaCFW felhasználók létrehozhatnak forwarder-eket az SDNAND DSi Menu-be a DS-Homebrew Wiki [DS játék forwarder-ek](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) útumutató használatával, de vannak korlátozásai. Ott van a 39 címes limit, kevésbé kényelmes elkészíteni, mint használni a TWiLight Menu++-t
   - Ha nincs hiyaCFW-d és szeretnél forwarder-eket használni, kövesd a [hiyaCFW telepítési útmutatót](https://wiki.ds-homebrew.com/hiyacfw/installing) a DS-Homebrew Wiki-n

## Hogyan tudom frissíteni a homebrew appjaim?
- **Unlaunch** - Kövesd az útmutatót az [Unlaunch telepítése](installing-unlaunch) oldalon
   - **Nem** kell eltávolítanod az Unlaunch-öt mielőtt ezt csinálod
- **hiyaCFW** - Cseréld a `hiya.dsi`-t az SD kártyád gyökerében a [legfrissebb kiadásból](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Kövesd a [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi) lépéseit
- **nds-bootstrap** - Másold az `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` fájlokat az `_nds` mappába, az SD kártyád gyökerében
   - Ha használsz TWiLight Menu++-t, erős rá az esély, hogy a legfrissebb nds-bootstrap kiadás is megtalálható a TWiLight Menu++-ban
- **GodMode9i, dumpTool, Forwarder3-DS, stb.** - Kövesd azokat az útmutatókat, ahol letöltötted őket

Más homebrew-ok elképzelhető, hogy más metódust használnak a frissítésre.

## Új vagyok vagy szeretném újra csinálni a telepítést. Hol kezdjem?
- Ha még nem módosítottad a konzolodat, vagy frissíteni szeretnéd az Unlaunch-öt a rendszereden, azt ajánljuk, hogy kezd az elejétől az útmutatót, követve az oldalakat. Legyél biztos abban, hogy mindent elolvastál a honlapon
- Ha rendelkezel a legutolsó Unlaunch verzióval, kövesd az 1b fejezetét az [Az Exploit futtatása](launching-the-exploit#twilight-menu) útmutatónak, a TWiLight Menu++ rendszeredre telepítéséhez

## Hogyan tudom eltávolítani a szülői felügyeletet?
- Az [mkey generátor](https://mkey.salthax.org) tud generálni olyan kódot, amivel eltávolítható a szülői felügyelet

## Meg tudom változtatni a Nintendo DSi konzolom régióját?
Igen, néhány különböző metódus áll rendelkezésre, attól függően mit szeretnél változtatni:
- A legbiztonságosabb és legegyszerűbb metódus a TWiLight Menu++ telepítése, az bármelyik hivatalos nyelvet tudja használni, és még többet a NAND módosítása nélkül
- Ha tényéeg szeretnéd cserélni a régiót és hiyaCFW-t használsz, akkor használhatod erre Yoti [hiyalang](https://github.com/Yoti/cli_hiyalang/releases)-ját
- Végül, ha cserélni akarod a régiót az aktuális rendszer NAND-ban, használhatod Mighty Max [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)-ét

## Mi történt a hiyaCFW telepítési útmutatóval?
Mivel a hiyaCFW nem ad sok funkcionalitás és problémás és avaró része volt az úutatónak, átmozgatásra került a [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing)-be.
- Ha linkelve lettél az oldalra egy másik útmutatóból, akkor a lépések amit követtél valószínűleg elavultak. Kérjük használd ezt az útmutató helyette, mert folyamatosan karbantartott a projekt fejlesztői által
