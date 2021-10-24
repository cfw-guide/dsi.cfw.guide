---
home: true
title: Kezdőlap
tagline: A Nintendo DSi moddolás teljes útmutatója
header:
   overlay_text: DSi Útmutató
   overlay_image: /assets/images/home-page-feature.png
   overlay_filter: 0.5
---

::: tip
Más készülékekhez szóló teljes homebrew és egyedi firmware útmutatókért keresd fel a [CFW.Guide](https://cfw.guide/) oldalt.
:::

::: danger
Ez az útmutató nem kompatibilis a Nintendo DSi fejlesztői konzolokkal.
:::

::: tip
Alaposan olvasd végig az összes bevezető oldalt (beleértve ezt is) mielőtt bármibe belekezdenél.
:::

## Mi az a Homebrew?

A [Homebrew](https://en.wikipedia.org/wiki/Homebrew_(video_games)) alkalmazások nem licencszelt szoftverek, zárt rendszerekre mint például a Nintendo DSi. Ezek az alkalmazások lehetnek segédeszközök, egyedi homebrew játékok.

Egy Homebrew ingyensen futtatható bármilyen Nintendo DSi konzolon, függetlenül a firmware-től és a régiótól. Az egyetlen amire szükséged van egy belépési pont és egy SD kártya, amint a homebrew-ot tárolod. A fő belépési pont ebben az útmutatóban a Memory Pit, de léteznek más belépési pontok is, amit használhatsz, ha a Memory Pit nem elérhető számodra.

## Mit cisnál ez az útmutató a rendszeremmel?

Tartsd észben, hogy az útmutató lineáris lépésekben strukturált, és általában attól függ, milyen mélyre szeretnél menni a rendszer moddolásában.

- Be fogunk éllítani egy belépési pontot, hogy homebrew indítható legyen a Memory Pit-en, a Nintendo DSi Camera exploitján keresztül
- Ez után készítünk egy NAND mentést, ami hasznos visszaállítási pont, ha a későbbiekben összekeversz valamit
- Azon felhasználók számára, akik a DSi teljes képességét szeretnék kihasználni, végig megyünk az Unlaunch telepítésén. Az Unlaunch lehetővé teszi, hogy a homebrew alkalmazások több joggal fussanak (mint például Slot-1 hozzáférés) illetve a rendszer boot során fussanak
   - Az Unlaunch módosítja a NAND-ot és extrém esetekben **brickelheti ** a rendszert. Ha tartasz a brickeléstől, álj meg a NAND mentés elkészítését követően

## Mit tehetek a rendszerem moddolásával?

- Futtathatsz Nintendo DS(i) játék mentéseket a DSi-d SD kártyájáról, a nélkül, hogy flashcard-ra lenne szükséged
- Futtathatsz bármilyen DSiWare alkalmazást (régión kívüli és/vagy 3DS exkluzív) az SD kártyádról
- Bebootolhatsz DSiWare és homebrew alkalmazásokba a megfelelő gombok nyomva tartásával a Nintendo DSi bekapcsolásakor
- Régi idők klasszikusait futtathatod különböző emulátorokkal
- Használhatsz alaphelyzetben inkompatibilis flashcard-okat
- Átirányíthatod a NAND-ot SD kártyára
- Megtekintheted a kedvenc filmjeidet az MPEG4Player használatával
- Használhatod a FreeNAND-ot, hogy átvidd a konfigurációt, rendszert, címeket és ticketeket egy másik Nintendo DSi-re az SDNAND-ból
- Megjeleníthetsz egy képet (amire boot képernyőként hivatkozunk) a rendszer indulásakor

## Hol találhatok homebrew alkalmazásokat?

- [Universal DB](https://db.universal-team.net/ds) tartalmazza a legtöbb modern homebrew alkalmazást, szép kereséssel és rendezéssel, hogy nyomon követhető legyen mi került frissítésre aktuálisan
- [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew) sok régi homebrew-t tartalmaz, bár nagy részük csak flashcard-on működik

## Mit kell tudnom, mielőtt belekezdenék?

- Windows-on ajánloktt, hogy [megjelenjenek a fájl kiterjesztések](file-extensions-%28windows%29) ha az alapértelmezett Fájlkezelőt használod
- Ez egyetlen brickelési kockázat az Unlaunch telepítésekor lehetséges, de a kockázat minimális
- Ha nem vagy tapasztalt a fájlok SD kártyára másolásával, rendelkezünk segéd eszközökkel erre a feladatra

::: tip
Folytatás [Az Exploit indítása](launching-the-exploit) útmutatóval
:::
