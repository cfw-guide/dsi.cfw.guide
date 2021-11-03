---
title: Hibaelhárítás
---

## Unlaunch
### Az Unlaunch lefagy a `MISMATCH IN FAT COPIES` üzenetnél

A twlnf-nek van egy kritikus hibája, amikor nem frissíti megfelelően az egész NAND-ot a módosítása után, ami bizonyos homebrew-ok esetén (mint példul az Unlaunch telepítő) hibát dob.

Habár javítható, a metódus, ahogy ez megtehető, nem kőbe vésett és változik a különböző rendszereken. Az egyik metódus, hogy törölj minden DSiWare-t ami a twlnf-en keresztül lett telepítve a múltban, de azt is jelentette valaki, hogy a mozgatása *minden* DSiWare-nek az SD kártyára, majd vissza segített bizonyos esetekben.

Ha korábban downgrade-elted a rendszert, a vissza frissítése v1.4.5-re (vagy v1.4.6-ra, ha a DSi régiód kínai vagy koreai) is segíthet ezen a hibán.

Ha a hiba továbbra is fennáll, próbáld ezt:
1. Csatold a NAND mentésedet a [ninfs](https://github.com/ihaveamac/ninfs/releases)-sel és engedélyezd, az `Allow writing` opciót
1. Ha a NAND mentésed csatolt, csatold a `twl_main.img` fájlt. Ha Windows-t használsz, használhatod az [OSFMount](https://www.osforensics.com/tools/mount-disk-images.html) -ot a képfájl csatolásához
1. Válaszd le a `twl_main.img` fájlt, majd válaszd le a NAND mentést a ninfs-ben. Ha a NAND mentésre került kövesd a [ NAND visszaállítását](restoring-nand) és folytasd az [Unlaunch telepítéssel](installing-unlaunch).

### Nincs hang vagy boot képernyő, amikor a "LAUNCHER" kerül indításra az Unlaunch-csel

Az Unlaunch fejlesztője (nocash) szándékosan kipatchelte alapértelmezésként háttérzenét és a boot képernyőt. Visszaszerezheted ezeket az effekteket az [Unlaunch újratelepítésével](installing-unlaunch) a TWiLight Menu++-n keresztül vagy a [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) használatával.

### A bekapcsolás csak fekete képernyőt mutat az Unlaunch telepítése után

Vedd ki az SD kártyád és próbáld újra indítani a rendszered. Ha továbbra is fekete képernyőt mutat, lehet, hogy flash-elned kell a NAND-od [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod)-on keresztül.

### Az Unlaunch telepítése után beragadok egy alkalmazásba bootolásnál

Ez valószínűleg egy rossz app választása miatt van a `NO BUTTON` opciónál az Unlaunch-ben. Tartsd nyomva az <kbd class="face">A</kbd> + <kbd class="face">B</kbd> gombokat a konzol indításakor és menj az `OPTIONS` menübe, majd állítsd be a `NO BUTTON` opciót arra, amire szeretnéd.

### Egyéb Unlaunch problémák

Ha az Unlaunch `Clusters too large`, `Bad VBR`, `Bad MBR` hibát jelenít meg vagy nem jelenít meg semmilyen alkalmazást, miközben az SD kártya behelyezett, az SD kártyád valószínűleg nem jól formázott. Kövesd újra az [SD kártya telepítést](sd-card-setup).

## TWiLight Menu++ hibaelhárítás

Az általános TWiLight Menu++ hibaelhárításhoz tekintsd meg a [GYIK & hibaelhárítás](https://wiki.ds-homebrew.com/twilightmenu/faq) oldalt a DS-Homebrew Wiki-n.

## További segítség

Ha olyan hibába ütköztél, ami nincs megoldva itt, vagy egy olyanba, ami továbbra is fenn áll a megadott megoldások ellenére kérj segítséget a [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/yD3spjv) Discord szerveren.
