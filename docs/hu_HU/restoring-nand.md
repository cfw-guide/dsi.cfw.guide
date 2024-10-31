# A NAND biztonsági másolat visszaállítása

::: danger

FIGYELEM! This is _**dangerous**_. Még ha követed is pontosan a lépéseket, meg van a lehetősége annak, hogy brick-eled a DSi-t - mert a NAND nagyon alacsony minőségű - főleg akkor, ha többször flashelsz! Ezt az utolsó lehetőségként szabad csak használni!

:::

::: tip

Do not skip _anything_ on this page, any mistake greatly increases chance of bricking your DSi.

:::

Először, pár biztonságos alternatíva, hogy miért érdemes ezt tenni:

- DSiWare-ek telepítése történhet a hiyaCFW vagy a TWiLight Menu++ alkalmazással
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. A HiyaCFW Helper legutolsó verziója lehetővé teszi, hogy kimásold a fotóid a NAND-ról az SDNAND-odra a telepítés során
- Az Unlaunch gomb konfiguráció helyreállítás megtörténhet az Unlaunch menüből, ami a bekapcsoláskor nyomva tartott <kbd class="face">A</kbd> + <kbd class="face">B</kbd> gombokkal érhető el
- Az Unlaunch-ba bootolás hibát adott? Vedd ki az SD kártyád és próbáld újra indítani a rendszered. Ha működik, akkor a hiba az SD kártyáddal van és a NAND mentés helyreállítása nem fogja javítani azt
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on [Discord](https://ds-homebrew.com/discord)
- Az Unlaunch eltávolítása, akár a NAND flashelésével vagy az uninstallerrel, kerülendő, amíg kifejezetten nem szükséges; beállíthatod az autoboot gombokat "Launcher"-re és a DSi-d olyan lesz mint a gyári

Az egyetlen dolog, amit a NAND-oddal kell tenned az az Unlaunch telepítése. Használd az alternatívakat egyébként.

## Követelmények

- Your NAND backup **from the same DSi**
- The latest release of [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Egy mód arra, hogy homebrew-ot futtass NAND hozzáféréssel, mint az Unlaunch vagy a Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), to check your NAND backup (Download the 'Windows gaming version')
  - macOS and Linux users can use [WINE](https://winehq.org) to run no$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## A BIOS dumpolása a no$gba-ban történő használathoz

1. Extract `dsibiosdumper.nds` from the `dsibiosdumper.zip` archive and place it anywhere on your SD card
2. Kapcsold be a konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
   - Ez el kell indítsa az Unlaunch Filemenu-t
3. Indítsd el dsibiosdumper-t az Unlaunch Filemenu-ből
4. Nyomj <kbd class="face">A</kbd> gombot a BIOS SD kártyára dumpolásához
5. Nyomj <kbd>START</kbd> gombot a dsibiosdumper-ből kilépéshez

## A NAND mentésed tesztelése

Nagyon fontos, hogy teszteld a NAND mentésedet, hogy működik, mielőtt helyreállítod a konzolodra; ha brick hibát mutat a no$gba-ban, akkor jó eséllyel brick-eli a konzolodat is.

1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Copy your NAND backup to the folder you put `NO$GBA.EXE` in and rename it to `DSI-1.MMC`
3. Copy `bios7i.bin` and `bios9i.bin` to the folder you put `NO$GBA.EXE`, named `BIOSDSI7.ROM` and `BIOSDSI9.ROM`, respectively.
4. Run `NO$GBA.EXE`
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
8. Click `Save Now`
9. Launch any Nintendo DS ROM (`.nds` file)

Ha a no$gba betölti a DSi menüt (vagy az Unlaunch Filemenu-t), folytasd a következő résszel. If it shows any kind of error _**do not flash that backup**_!

## Az Unlaunch eltávolítása a NAND mentésedből (opcionális)

Kövesd ezt, ha a NAND mentésed az után készítetted, hogy telepítetted az Unlaunch-öt és el szeretnéd távolítani az Unlaunch-öt a rendszeredről. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.

1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
2. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
3. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - Ez el kell indítsa az Unlaunch telepítőt, ami hasonlóan néz ki, mint az Unlaunch Filemenu
4. Choose `Uninstall`
5. Once complete, choose `Power down`
6. Tölts be bármilyen Nintendo DS ROM-ot újra és ellenőrizd, hogy a DSi menüd betölts és megfelelően működik

If no$gba shows any kind of error instead of loading the DSi menu, _**do not flash that backup**_! Ha van egyrégebbi NAND mentésed, megpróbálhatod azt helyette. Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## A NAND mentés flashelése (szoftver)

::: danger

Legyél biztos abban, hogy elolvastad az előző lépéseket, mert itt válik a folyamat veszélyessé. Ha közvetlenül ide lettél linkelve, az előbbiek követése nélkül, menj vissza az oldal tetejére és olvasd el az egész oldalt.

:::

::: danger

Legyél biztos abban, hogy Nintendo DSi rendszered rendesen fel van töltve, mielőtt elkezdenéd ezt a részt.

:::

1. Behelyezett SD kártyával kapcsold be a konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
2. Indítsd el a SafeNANDManager-t
3. Press the button to `begin NAND restore`
4. Ha a visszaállítás végzett, nyomd meg a <kbd>START</kbd> gombot a DSi-d kikapcsolásáshoz

A NAND-od most már helyreállított kell legyen.

## NAND mentés flashelése (Hardmod)

Ha nem tudsz bebootolni a Nintendo DSi-dbe, csak a hardmod megoldás a NAND visszaállítására mentésből. The best guide that currently exists is the [Nintendo DSi hardmod guide on the DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
