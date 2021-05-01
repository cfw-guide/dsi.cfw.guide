---
title: Hibaelhárítás
---

{% include toc title="Table of Contents" %}

## Unlaunch
### Az Unlaunch lefagy a `MISMATCH IN FAT COPIES` üzenetnél?
A twlnf-nek van egy kritikus hibája, amikor nem frissíti megfelelően az egész NAND-ot a módosítása után, ami bizonyos homebrew-ok esetén (mint példul az Unlaunch telepítő) hibát dob.

Habár javítható, a metódus, ahogy ez megtehető, nem kőbe vésett és változik a különböző rendszereken. Az egyik metódus, hogy törölj minden DSiWare-t ami a twlnf-en keresztül lett telepítve a múltban, de azt is jelentette valaki, hogy a mozgatása *minden* DSiWare-nek az SD kártyára, majd vissza segített bizonyos esetekben.

Ha korábban downgrade-elted a rendszert, a vissza frissítése v1.4.5-re (vagy v1.4.6-ra, ha a DS régiód kínai vagy koreai) is segíthet ezen a hibán.

### Nincs hang vagy boot képernyő, amikor a "LAUNCHER" kerül indításra az Unlaunch-csel

Az Unlaunch fejlesztője (nocash) szándékosan kipatchelte alapértelmezésként háttérzenét és a boot képernyőt. Visszaszerezheted ezeket az effekteket az [Unlaunch újratelepítésével](/installing-unlaunch) a TWiLight Menu++-n keresztül.

## hiyaCFW
### "An Error Has Occurred"
Különböző okai lehetnek ennek a problémának:

- **Túl sok szaad tárhely:** A Nintendo DSi Menünek van egy hibája, ami korlátozza, hogy mennyi szabad hely lehet. Habár ez nem fordul elő az aktuális NAND-dal (mert a chip sosem nagyobb 128 MB-nál), ez előfordul SD kártya használatakor. Hogy mi működik és mi nem hasonló a többi gigabájt méretnél is. Például, 0-2 GB szabad tárhely működik, míg 2-4 GB nem. Hasonló 4-6 GB és 6-8 esetén, egészen amíg el nem jutsz az SD kártyád méretéig. A legutolsó hiyaCFW verzió létre tud hozni dummy fájlokat, így érdemes letölteni a legfrissebb verzióját a [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z)-nek és a `hiya.dsi` fájlt a "for SDNAND SD card" útvonalról az SD kártyád gyökerébe.
- **39-nél több cím:** A DSi System Menu-ben maximum 39 cím szerepelhet. Törölj minden további mappát a `/title` könyvtárból
- **Túl sok DSiWare:** Maximum 200 blokk (25MB) DSiWare lehet a `00030004` mappában. Ez a probléma megkerülhető, a rendszer alkalmazások [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest)-en keresztüli telepítésével
- **Érvénytelen cím:** Van néhány további paraméter, amit figyelembe kell venned, amikor címeket adsz hozzá a hiyaCFW-hez:
   - A cartridge dumpok nem futtathatók [forwarder](/nds-bootstrap-forwarders.html) nélkül
   - Van pár paraméter, amit át kell adni az `.app` buildernek, azért, hogy működjön a DSi System Menüből
