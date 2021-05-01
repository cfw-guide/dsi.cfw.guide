---
title: DSiWare mentések
redirect_from:
  - more/dumping-dsiware-from-3ds
  - more/dumping-dsiware
  - dsiware
  - more/installing-dsiware
  - installing-dsiware
---

{% include toc title="DSiWare Backups" %}

## Követelmények
- A [GodMode9i](https://github.com/RocketRobz/godmode9i/releases) legfrissebb kiadása
   - Töltsd le az archívot, csomagold ki a tartalmát és helyezd a`GodMode9i.nds`-t bárhova az SD kártyára
- Egy Nintendo DSi konzol telepített [Unlaunch](/unlaunch)-csel

## Nintendo DSi - Lépések

### I. rész - Az .app fájl útvonalának azonosítása
1. Bootold be a Nintendo DSi konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
   - Ez az Unlaunch Filemenu-be kell vigyen
1. Azonosítsd az alkalmazásodat a listán
   - A világoszöld bejegyzés azt jelenti, hogy az a NAND-ra van telepítve

Ha felé állsz a bejegyzés felé, az alsó képernyőn látnod kell az útvonalat. Jegyezd fel az útvonalat.

Egy példa útvonal lehet: `nand:/title/0030005/484e4a45/content/00000003.app`
{: .notice--info}

### II. rész - A fájl kicsomagolása
1. Indítsd el GodMode9i-t az Unlaunch Filemenu-ből
1. Navigálj a SYSNAND-hoz, majd navigálj a feljegyzett útvonalra
1. Jelöld ki az `.app` fájlt, majd nyomj <kbd class="l">L</kbd>-t, hogy a vágólaphoz add
   - Ismételd meg ezt minden fájllal, amit ugyanabba a könyvtárba másolnál
1. Navigálj az SD kártyán abba a könyvtárba, ahová a dumpolt DSiWare címet szeretnéd rakni
1. Nyomj <kbd class="face">Y</kbd>-t a dumpolt DSiWare cím beillesztéséhez abba a könyvtárba, ahova navigáltál

Most már látnod kell egy DSiWare címet a TWiLight Menu++-ban vagy az Unlaunch Filemenu-ben.
