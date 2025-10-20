# A NAND biztonsági másolat visszaállítása

::: danger

FIGYELEM! Ez _**veszélyes**_. Még ha követed is pontosan a lépéseket, meg van a lehetősége annak, hogy brick-eled a DSi-t - mert a NAND nagyon alacsony minőségű - főleg akkor, ha többször flashelsz! Ezt az utolsó lehetőségként szabad csak használni!

:::

::: tip

Ne ugorj át _semmit_ ezen az oldalon, bármi hiba erősen növeli a DSi-d brick-elésének esélyeit.

:::

Először, pár biztonságos alternatíva, hogy miért érdemes ezt tenni:

- DSiWare-ek telepítése történhet a hiyaCFW vagy a TWiLight Menu++ alkalmazással
- A képek helyreállítása elvégezhető a [ninfs](https://github.com/ihaveamac/ninfs/releases) segítségével, kombinálva a a hiyaCFW vagy a TWiLight Menu++ alkalmazással, ha szeretnéd őket a konzolon. A HiyaCFW Helper legutolsó verziója lehetővé teszi, hogy kimásold a fotóid a NAND-ról az SDNAND-odra a telepítés során
- Az Unlaunch gomb konfiguráció helyreállítás megtörténhet az Unlaunch menüből, ami a bekapcsoláskor nyomva tartott <kbd class="face">A</kbd> + <kbd class="face">B</kbd> gombokkal érhető el
- Az Unlaunch-ba bootolás hibát adott? Vedd ki az SD kártyád és próbáld újra indítani a rendszered. Ha működik, akkor a hiba az SD kártyáddal van és a NAND mentés helyreállítása nem fogja javítani azt
- Az "An error has occurred..." üzenet bootoláskor valószínűleg egy hiyaCFW hiba és nem kapcsolódik a NAND-hoz, lásd a [hiyaCFW GYIK & hibaelhárítás](https://wiki.ds-homebrew.com/hiyacfw/faq) oldalt a DS-Homebrew Wiki-n további információkért
- Bármi hiba a TWiLight Menu++-ben nem kapcsolódik, meg kell próbálnod újra telepíteni a TWiLight Menu++-t vagy kérj segítséget a [Discord](https://ds-homebrew.com/discord) szerveren
- Az Unlaunch eltávolítása, akár a NAND flashelésével vagy az uninstallerrel, kerülendő, amíg kifejezetten nem szükséges; beállíthatod az autoboot gombokat "Launcher"-re és a DSi-d olyan lesz mint a gyári

Az egyetlen dolog, amit a NAND-oddal kell tenned az az Unlaunch telepítése. Használd az alternatívakat egyébként.

## Követelmények

- A NAND mentésed **ugyanarról a DSi-ről**
- A [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds) legutolsó kiadása
- Egy mód arra, hogy homebrew-ot futtass NAND hozzáféréssel, mint az Unlaunch vagy a Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), a NAND mentésed ellenőrzéséhez (Töltsd le a 'Windows gaming version'-t)
  - macOS és Linux felhasználók használhatják a [WINE](https://winehq.org)-t a no$gba futtatásához
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## A BIOS dumpolása a no$gba-ban történő használathoz

1. Csomagold ki az `dsibiosdumper.nds`-t az `dsibiosdumper.zip` archívból és rakd valahova az SD kártyádon
2. Kapcsold be a konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
   - Ez el kell indítsa az Unlaunch Filemenu-t
3. Indítsd el dsibiosdumper-t az Unlaunch Filemenu-ből
4. Nyomj <kbd class="face">A</kbd> gombot a BIOS SD kártyára dumpolásához
5. Nyomj <kbd>START</kbd> gombot a dsibiosdumper-ből kilépéshez

## A NAND mentésed tesztelése

Nagyon fontos, hogy teszteld a NAND mentésedet, hogy működik, mielőtt helyreállítod a konzolodra; ha brick hibát mutat a no$gba-ban, akkor jó eséllyel brick-eli a konzolodat is.

1. Csomagold ki a `NO$GBA.EXE`-t az `no$gba-w.zip` archívból és rakd egy mappába a számítógépeden
2. Másold a NAND mentésedet abba a mappába, ahova a `NO$GBA.EXE`-t raktad és nevezd át `DSI-1.MMC`-re
3. Másold a `bios7i.bin` és a `bios9i.bin` fájlokat a mappába, ahova a `NO$GBA.EXE`-t raktad, nevezd őket `BIOSDSI7.ROM` és `BIOSDSI9.ROM` nevekre.
4. Futtasd a `NO$GBA.EXE` fájlt\`
5. Kattints az `Options` > `Emulation Setup` opciókra, hogy megnyisd az Emulation Setup ablakot
6. Módosítsd a `Reset/Startup Entrypoint`-ot `GBA/NDS BIOS (Nintendo logo)`-ra
7. Módosítsd az `NDS Mode/Colors`-t `DSi (retail/16MB)`-ra
8. Kattints a `Save Now`-ra
9. Indítsd el egy tetszőleges Nintendo DS ROM-ot (`.nds` fájl)

Ha a no$gba betölti a DSi menüt (vagy az Unlaunch Filemenu-t), folytasd a következő résszel. Ha bármilyen hibát ad _**ne flasheld a mentést**_!

## Az Unlaunch eltávolítása a NAND mentésedből (opcionális)

Kövesd ezt, ha a NAND mentésed az után készítetted, hogy telepítetted az Unlaunch-öt és el szeretnéd távolítani az Unlaunch-öt a rendszeredről. Ha nem akard eltávolítani az Unlaunch-öt, **nem kell végrehajtanod** ezt a részt.

1. Töltsd le az [Unlaunch installer](https://problemkaputt.de/unlaunch.zip) legutolsó verzióját
2. Csomagold ki az `UNLAUNCH.DSI`-t az `unlaunch.zip` fájlból
3. Töltsd be az `UNLAUNCH.DSI`-t a no$gba-ban és indítsd el a Game Card slot-ból
   - Ez el kell indítsa az Unlaunch telepítőt, ami hasonlóan néz ki, mint az Unlaunch Filemenu
4. Válaszd az `Uninstall`-t
5. Ha befejezte, válaszd a `Power down`-t
6. Tölts be bármilyen Nintendo DS ROM-ot újra és ellenőrizd, hogy a DSi menüd betölts és megfelelően működik

Ha no$gba bármilyen problémát mutat, a DSi menü betöltése helyett, _**ne flash-eld a mentésed**_! Ha van egyrégebbi NAND mentésed, megpróbálhatod azt helyette. **Ne próbáld meg** eltávolítani az Unlaunch-öt az eltávolítóval (uninstaller) a konzolon, mert extrém nagy az esélye, hogy brick-eli a DSi-det.

## A NAND mentés flashelése (szoftver)

::: danger

Legyél biztos abban, hogy elolvastad az előző lépéseket, mert itt válik a folyamat veszélyessé. Ha közvetlenül ide lettél linkelve, az előbbiek követése nélkül, menj vissza az oldal tetejére és olvasd el az egész oldalt.

:::

::: danger

Legyél biztos abban, hogy Nintendo DSi rendszered rendesen fel van töltve, mielőtt elkezdenéd ezt a részt.

:::

1. Behelyezett SD kártyával kapcsold be a konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
2. Indítsd el a SafeNANDManager-t
3. Nyomd meg a gombot, hogy elkezd a NAND visszaállítást (`begin NAND restore`)
4. Ha a visszaállítás végzett, nyomd meg a <kbd>START</kbd> gombot a DSi-d kikapcsolásáshoz

A NAND-od most már helyreállított kell legyen.

## NAND mentés flashelése (Hardmod)

Ha nem tudsz bebootolni a Nintendo DSi-dbe, csak a hardmod megoldás a NAND visszaállítására mentésből. A legjobb útmutató erre a [Nintendo DSi hardmod útmutató a DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi)-ben.
