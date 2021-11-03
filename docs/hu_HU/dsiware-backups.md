---
title: DSiWare mentések
---

## Követelmények
- A [GodMode9i](https://github.com/RocketRobz/godmode9i/releases) legfrissebb kiadása
   - Töltsd le az archívot, csomagold ki a tartalmát és helyezd a`GodMode9i.nds`-t bárhova az SD kártyára

## Nintendo DSi - Lépések

### I. rész - A szükséges DSiWare azonosítása
1. Indítsd el a GodMode9i és válaszd a `[nand:] SYSNAND` opciót
1. Navigálj a `title` mappába
1. Válaszd ki a megfelelő mappát a kategóriához, amit keresel
   - `00030004`: Standard DSiWare
   - `00030005`: Előre telepített Fun Tools
   - `0003000f`: Rendszer adat (nem-DSiWare fájlok, nem futtathatók)
   - `00030015`: Rendszer alap eszközök
   - `00030017`: Indító (Launcher)
1. Ha kiválasztottad milyen típusú DSiWare-t szeretnél kiszedni, lépj be az almappába, majd utána a `content`-be
1. Ott egy `.app` fájl kell látható legyen. Válaszd ki a fájlt, majd a `Show NDS file info` opciót. Ez megmondja neked, hogy ez-e az a DSiWare, amit keresel
   - Ha ez nem az a DSiWare, ait keresel, folytasd a keresést a többi mappában, amíg meg nem találod
   - A `0003000f` mappában található fájloknak nem megtekinthető az NDS infója, mert azok nem futtatható DSiWare-k és nem tartalmaznak érvényes fejlécet

### II. rész - A DSiWare kiszedése
1. Jelöld ki az `.app` fájlt, majd nyomj <kbd class="face">Y</kbd>-t, hogy a vágólaphoz add
1. Navigálj az SD kártyán abba a könyvtárba, ahová a dumpolt DSiWare címet szeretnéd rakni
1. Nyomj <kbd class="face">Y</kbd>-t ismét a DSiWare cím beillesztéséhez abba a könyvtárba, ahova navigáltál
   - Módosíthatod a fájlnevet beillesztése után az <kbd class="face">X</kbd> megnyomásával, az <kbd class="R">R</kbd> nyomva tartása mellett
   - Ismételd meg ezt minden fájllal, amit ugyanabba a könyvtárba másolnál

Most már látnod kell egy DSiWare címet a TWiLight Menu++-ban vagy az Unlaunch Filemenu-ben.

### II. rész - A mentés fájl kiszedése (opionális)
1. Abban a mappában, ahol a `content` van a kiválaszott DSiWare-hez található egy mappa `data` néven
1. A `data` mappában található a mentés fájl. Másold ezt a fájl az SD kártyára, úgy, ahogy a DSiWare címmel is csináltad
   - Az Unlaunch és az nds-bootstrap `.pub` és `.prv` fájl kiterjesztéseket használ a DSiWare mentés fájlokhoz. Ha a DSiWare mentés fájlod neve eredetileg `public.sav`, használd a `.pub` kiterjesztést, ha pedig `private.sav`, használd a `.prv` kiterjesztést
   - Ha szeretnéd használni a DSiWare mentés fájlt a TWiLight Menu++-szal, biztosítsd, hogy a `saves` mappába kerüljön ott, ahol a ROM található
