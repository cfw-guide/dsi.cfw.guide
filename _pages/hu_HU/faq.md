---
title: "GYIK"
redirect_from:
  - help/faq
---

{% include toc title="Questions" %}

### Milyen funkcionalitást vesztek el, ha módosítom a rendszerem?
- Ha úgy döntesz, hogy telepíted az Unlaunch-öt, nem fogsz elveszteni semmilyen funkcionalitást
- Ha csak a memory-pit telepítést végzed el, nem fogsz tudni fotókat menteni az SD kártyára, a Nintendo DSi Camera alkalmazással, amíg az exploit telepített. Vagy válts egy [alternatív exploit-ra](alternate-exploits) vagy [telepítsd az Unlaunch-öt](/installing-unlaunch)

   Ez azért van, mert a metaadat fájl (`pit.bin`) felülírásra kerül a Memory Pit exploit-tal.

### Hogyan játszhatok Nintendo DS cartridge dumpokkal?
A cartridge dump játékok használatához a konzolnak szüksége van flashcard-ra vagy nds-bootstrap-re, egy programra, ami lehetővé teszi, hogy a belső SD kártyáról játszhatók legyenek a játékok a slot-1 írás és olvasás átirányításával.
- A TWiLight Menu++-szal navigálhatsz az SD kártyádon, hogy megtaláld a ROM fájlokat, amiket nds-bootstrap-pel játszhatsz. A TWiLight Menu++ használatának előnye a csalás menü, a játékonkénti beállítások és hogy megkerüli a korlátozásokat, amikkel a forwarder-ek rendelkeznek. Más szavakkal, csak felmásolod a ROM fájlokat és játszhatsz velük bármilyen telepítés nélkül. Nincs 39 cím limit, sem hiyaCFW, sem Unlaunch nem szükséges és nincs korlátozás az SD kártya szabad tárhelyével kapcsolatosan sem
- A hiyaCFW felhasználók létre hozhatnak [forwarder](nds-bootstrap-forwarders)-eket az SDNAND DSi Menujéhez, de vannak bizonyos korlátozásai. Ott van a 39 címes limit, kevésbé kényelmes beállítani és nem patcheli automatikusan az Anti-Piracy-t

### Hogyan tudom frissíteni a homebrew appjaim?
- **Unlaunch** - Kövesd az útmutatót az [Unlaunch telepítése](/installing-unlaunch) oldalon
- **hiyaCFW** - Cseréld a `hiya.dsi`-t az SD kártyád gyökerében a [legfrissebb kiadásból](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Kövesd a lépéseket a [GitHub wiki](https://github.com/DS-Homebrew/TWiLightMenu/wiki/updating-%28dsi%29)-n
- **nds-bootstrap** - Másold az `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` fájlokat az `_nds` mappába, az SD kártyád gyökerében
   - Ha használsz TWiLight Menu++-t, erős rá az esély, hogy a legfrissebb nds-bootstrap kiadás is megtalálható a TWiLight Menu++-ban
- **GodMode9i, dumpTool, MakeForwarder, stb.** - Kövesd azokat az útmutatókat, ahol letöltötted őket

Más homebrew-ok elképzelhető, hogy más metódust használnak a frissítésre.

### Új vagyok vagy szeretném újra csinálni a telepítést. Hol kezdjem?
- Ha még nem módosítottad a konzolodat, vagy frissíteni szeretnéd az Unlaunch-öt hiyaCFW használata nélkül, azt ajánljuk, hogy kezd az elejétől az útmutató, követve az oldalakat. Legyél biztos abban, hogy mindent elolvastál a honlapon
- Ha rendelkezel a legutolsó Unlaunch verzióval, de nem szeretnél hiyaCFW-t telepíteni, kövesd az 1b fejezetét az [Az Exploit futtatása](launching-the-exploit#twilight-menu) útmutatónak, a TWiLight Menu++ rendszeredre telepítéséhez
- Ha van Unlaunch-öd már és szeretnéd telepíteni a hiyaCFW-t, kövesd az [A hiyaCFW telepítése](installing-hiyacfw) oldalt, majd térj vissza az [Unlaunch telepítése oldalra](installing-unlaunch) az Unlaunch frissítéséhez
   - A hiyaCFW Helper, az eszköz amivel telepíthető a hiyaCFW, olyan opcióval érkezik, ami telepíti TWiLight Menu++-t. Nincs szükség a TWiLight Menu++ külön telepítésére
   - Ezt követően, mivel a TWiLight Menu++-t használjuk az Unlaunch installer futtatására, ezért frissítjük az Unlaunch-öt a hiyaCFW telepítése után
