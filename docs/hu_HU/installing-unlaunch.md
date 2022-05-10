---
title: Unlaunch telepítése
---

::: danger

Ha még nem tetted meg, kérjük készíts egy [NAND mentést](dumping-nand.html). Habár az esélyek kicsik, az Unlaunch brickelheti véletlenül a Nintendo DSi-det. Egy NAND mentés + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) lehetővé teszi, hogy helyreállítsd ezt a mentést, ha tudod, hogy hogyan kell forrasztani.

:::

::: warning

Biztosítsd, hogy a konzol legyen feltöltve, a következő folyamat alatt. Egy véletlen áram elvesztés komoly hibákhoz vezethet.

:::

::: warning

Az Unlaunch nem kompatibilis a Nintendo DSi fejlesztői konzolokkal.

:::

## I. rész - SD kártya telepítés

::: tip

Windows-t, Linux-ot vagy macOS-t használsz? Használd a [Lazy DSi Downloader](lazy-dsi-downloader.html)-t, hogy automatikusan telepítse az SD kártyád.

:::

1. Töltsd le az [Unlaunch](https://problemkaputt.de/unlaunch.zip) legfrissebb kiadását
   - [Tükör link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), ha a fenti nem működne
1. Csomagold ki az `UNLAUNCH.DSI`-t az `unlaunch.zip` archívból és rakd valahova az SD kártyádon
1. Ellenőrizd, hogy még rajta van a TWiLight Menu++ az SD kártyádon
   - Ha nem vagy biztos benne, kövesd a [TWiLight Menu++ telepítési útmutatót](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## II. rész - Az Unlaunch telepítése/frissítése

1. Indítsd el a TWiLight Menu++-t
   - Ha ez az első alkalom, hogy telepíted az Unlaunch-öt, töltsd újra a TWiLight Menu++-t az exploiton keresztül, amit használsz
   - Ha már telepítetted az Unlaunch-öt és frissíteni szeretnéd, tartsd nyomva az <kbd class="face">A</kbd> + <kbd class="face">B</kbd> gombokat, amíg bootolsz és válaszd a `TWiLight Menu++` opciót
   - Ha több opció neve is `TWiLight Menu++`, válaszd azt az opciót, ahol a `BOOT.NDS` látható az útvonal végén az alsó képernyőn
      - Ez azért történik, mert a TWiLight Menu++ régebbi verzióját futtatod, amíg ez nem szándékos ajánlott, hogy [frissítsd a telepítésed](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
1. Indítsd el a TWiLight Menu++ Beállításokat
   - HA nem cserélted még a témádat, nyomj `SELECT` gombot és éríntsd meg a kis DS ikont az érintő képernyő alján. Egyéként tekintsd meg a TWiLight Menu++ kézikönyvet
1. Nyomj <kbd class="l">L</kbd> / <kbd class="r">R</kbd> vagy <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> gombokat, amíg el nem éred az `Unlaunch Beállítások` oldalt
1. Ha szeretnéd cserélni az Unlaunch hátterét, válaszd a `Háttér` opciót és válaszd ki a neked tetszőt
   - Ha szeretnél saját Unlaunch hátteret, tekintsd meg a [DS-Homebrew Wiki oldalt](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Ha szeretnéd a Health and Safety képernyőt és a DSi Menu zenét és hangokat, amikor a hivatalos DSi Menut használod, állítsd a `Launcher Patchek`-et `Kikapcsolt`-ra
   - Ez megtartja a régió zárolást és a kártya fehérlistát, ami azt jelenti, hogy néhány flashcard nem lesz használható a DSi Menüből
1. Lépj ki a TWiLight Menu++ Beállításokból
1. A fájl navigáció menüből indítsd el az `Unlaunch DSi Installer`-t
1. Válaszd a telepítés opciót
   - Ha az Unlaunch lefagy az `ERROR: MISMATCH IN FAT COPIES` üzenetnél, tekintsd meg a [Hibaelhárítás](troubleshooting.html) oldalt
1. Ha végzett, indítsd újra a rendszered

Ha az Unlaunch Filemenu képernyőt látod ezen a ponton, akkor sikeresen moddoltad a Nintendo DSi-det.
- Ha fekete képernyőt kapsz, tekintsd meg a [Hibaelhárítás](troubleshooting.html) oldalt

## III. rész - Unlaunch-utáni konfiguráció

Jelenleg az Unlaunch alapértelmezésben a Filemenu-t indítja bootoláskor, de ez módosítható bármire, amit szeretnél.

1. Kapcsold be a konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
   - Ez el kell indítsa az Unlaunch Filemenu-t
1. Navigálj az `OPTIONS`-höz és nézd meg az elérhető opciókat
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> hardkódolt az Unlaunch menühöz, így az nem cserélhető
   - A `NO BUTTON` és `BUTTON A / B / X / Y` opciók beállíthatók, ahogy szeretnéd, hogy mit töltsön a DSi-d a bootolásnál, attól függően melyik gomb volt lenyomva. Kiválaszthatsz bármilyen DSiWare-t, homebrew-t, a Slot-1 kártyát vagy az Unlaunch Filemenu-t
      - A TWiLight Menu++-hoz válasz a `TWiLight Menu++` opciót
      - Az eredeti DSi Menühöz, válaszd a `Launcher`-t
   - `LOAD ERROR` az, amit a DSi be fog tölteni, amikor amit beállítottál az hibára fut, mert például az SD kártya nem lett beillesztve
1. Válaszd a `SAVE & EXIT` opciót a beállításaid mentéséhez, majd kapcsold ki a DSi konzolod

## IV. rész - Takarítás az SD kártyán

::: tip

Ez a rész opcionális és csak azt a célt szolgálja, hogy az SD kártyádon ne maradjon fájl, amire nincs szükséged.

:::

:::: tabs

::: tab name="Memory Pit" default

- Töröld az `sd:/private/ds/app/484E494A/pit.bin` fájlt az SD kártyádról
   - Ha készítettél egy mentést a meglévő `pit.bin` fájlról, rakd vissza most
- Most már visszaállíthatod a `DCIM` mappát, ami az SD kártyád göykerében volt, ha volt ilyen
- Töröld az `UNLAUNCH.DSI` fájlt az SD kártyádról

:::

::: tab name="Flipnote Lenny"

- Töröld a `800031_104784BAB6B57_000.ppm` és a `T00031_1038C2A757B77_000.ppm` fájlokat a következő mappából:
   - `sd:/private/ds/app/4B47554A/001` (Japán)
   - `sd:/private/ds/app/4B475545/001` (USA)
   - `sd:/private/ds/app/4B475556/001` (Europa/Ausztrália)
   - Törölheted az összes mappát a saját régiódón kívül is
- Töröld az `UNLAUNCH.DSI` fájlt az SD kártyádról

:::
