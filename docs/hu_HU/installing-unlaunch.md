---
title: Unlaunch telepítése
---

::: danger

Az Unlaunch nem kompatibilis a Nintendo DSi fejlesztői konzolokkal.

:::

Az Unlaunch egy exploit, ami a rendszer bootnál helyezkedik el. Ez lehetővé tesz, hogy magasabb jogokat szerezünk, mint a normál DSiWare exploitok, mint például Memory Pit, ami lehetővé teszi a következőket:

- Alkalmazások indítása bootoláskor (homebrew vagy DSiWare), az opcionális gomb kombinációkkal
- Hozzáférés a Slot-1-hez, ami lehetővé teszi a játék kártyák dumpolását és inkompatibilis flashcard-ok használatát
- A régiózárak eltávolításra kerülnek a DSi-Enchanced / exkluzív játék kártyák esetében
- Régi Nintendo DS homebrew futtatása nds-bootstrap-hb-n keresztül
- DSiWare indítása a belső SD kártyáról
- Eltávolítja a Donor ROM követelményt DSi-Enhanced játékok DSi módban futtatásakor
- A következők Memory Pit felhasználóknak (más exploit-ok már engedélyezték ezeket):
     - Fejlettebb kompatibilitás SD kártyáról indított DSiWare-ekkel
     - Jobb hang a GBARunner2-ben

::: danger

Ha még nem tetted meg, kérjük készíts egy [NAND mentést](dumping-nand). Habár az esélyek kicsik, az Unlaunch brickelheti véletlenül a Nintendo DSi-det. Egy NAND mentés + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) lehetővé teszi, hogy helyreállítsd ezt a mentést, ha tudod, hogy hogyan kell forrasztani.

:::

::: warning

Biztosítsd, hogy a konzol legyen feltöltve, a következő folyamat alatt. Egy véletlen áram elvesztés komoly hibákhoz vezethet.

:::

## I. rész - SD kártya telepítés

::: tip

Windows-t, Linux-ot vagy macOS-t használsz? Használd a [Lazy DSi Downloader](lazy-dsi-downloader)-t, hogy automatikusan telepítse az SD kártyád.

:::

1. Töltsd le az [Unlaunch](https://problemkaputt.de/unlaunch.zip) legfrissebb kiadását
   - [Tükör link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), ha a fenti nem működne
1. Csomagold ki az `UNLAUNCH.DSI`-t az `unlaunch.zip` archívból és rakd valahova az SD kártyádon
1. Ellenőrizd, hogy még rajta van a TWiLight Menu++ az SD kártyádon
   - Ha nem vagy biztos benne, kövesd a lépéseket [Az Exploit indítása](launching-the-exploit#twilight-menu) oldalról

## II. rész - Az Unlaunch telepítése/frissítése

1. Indítsd el a TWiLight Menu++-t
   - Ha ez az első alkalom, hogy telepíted az Unlaunch-öt, töltsd újra a TWiLight Menu++-t az exploiton keresztül, amit használsz
   - Ha már telepítetted az Unlaunch-öt és frissíteni szeretnéd, tartsd nyomva az <kbd class="face">A</kbd> + <kbd class="face">B</kbd> gombokat, amíg bootolsz és válaszd a `TWiLight Menu++-t`, ahol a `BOOT.NDS` van megjelenítve az alsó képernyőn
1. Indítsd el a TWiLight Menu++ Beállításokat
   - Ha nem cserélted a témádat, kövesd a lépéseket "Az Exploit futtatása" oldalon. Egyéként tekintsd meg a TWiLight Menu++ kézikönyvet
1. Nyomj <kbd class="l">L</kbd> / <kbd class="r">R</kbd> vagy <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> gombokat, amíg el nem éred az `Unlaunch Beállítások` oldalt
1. Ha szeretnéd cserélni az Unlaunch hátterét, válaszd a `Háttér` opciót és válaszd ki a neked tetszőt
   - Ha szeretnél saját Unlaunch hátteret, tekintsd meg a [DS-Homebrew Wiki oldalt](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Ha szeretnéd a Health and Safety képernyőt és a DSi Menu zenét és hangokat, amikor a hivatalos DSi Menut használod, állítsd a `Launcher Patchek`-et `Kikapcsolt`-ra
   - Ez megtartja a régió zárolást és a kártya fehérlistát, ami azt jelenti, hogy néhány flashcard nem lesz használható a DSi Menüből
1. Lépj ki a TWiLight Menu++ Beállításokból
1. A fájl navigáció menüből indítsd el az `Unlaunch DSi Installer`-t
1. Válaszd a telepítés opciót
   - Ha az Unlaunch lefagy az `ERROR: MISMATCH IN FAT COPIES` üzenetnél, tekintsd meg a [Hibaelhárítás](troubleshooting) oldalt
1. Ha végzett, indítsd újra a rendszered

Ha az Unlaunch Filemenu képernyőt látod ezen a ponton, akkor sikeresen moddoltad a Nintendo DSi-det.
- Ha fekete képernyőt kapsz, tekintsd meg a [Hibaelhárítás](troubleshooting) oldalt

## III. rész - Unlaunch-utáni konfiguráció

Jelenleg az Unlaunch alapértelmezésben a Filemenu-t indítja bootkor, de ez módosítható bármire, amit szeretnél.

1. Kapcsold be a konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
   - Ez el kell indítsa az Unlaunch Filemenu-t
1. Navigálj az `OPTIONS`-höz és nézd meg az elérhető opciókat
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> hardkódolt az Unlaunch menühöz, így az nem cserélhető
   - A `NO BUTTON` és `BUTTON A / B / X / Y` opciók beállíthatók, ahogy szeretnéd, hogy mit töltsön a DSi-d a bootolásnál, attól függően melyik gomb volt lenyomva. Kiválaszthatsz bármilyen DSiWare-t, homebrew-t, a Slot-1 kártyát vagy az Unlaunch Filemenu-t
      - A TWiLight Menu++-hoz válaszd a `TWiLight Menu++` opciót, ahol a `BOOT.NDS`-t mutatja az alsó képernyőn
      - Az eredeti DSi Menühöz, válaszd a `Launcher`-t
   - `LOAD ERROR` az, amit a DSi be fog tölteni, amikor amit beállítottál az hibára fut, mert például az SD kártya nem lett beillesztve
1. Válaszd a `SAVE & EXIT` opciót a beállításaid mentéséhez, majd kapcsold ki a DSi konzolod

## IV. rész - Takarítás az SD kártyán

::: tip

Ez a rész opcionális és csak azt a célt szolgálja, hogy az SD kártyádon ne maradjon fájl, amire nincs szükséged.

:::

- Töröld az `sd:/private/ds/app/484E494A/pit.bin` fájlt az SD kártyádról
   - Ha más exploitot használtál, töröld annak az exploitnak a fájljait e helyett
- Töröld az `UNLAUNCH.DSI` fájlt az SD kártyádról
