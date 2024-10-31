# Unlaunch telepítése

::: warning

Ha nincs hozzáférésed egy PC-hez, vagy a PC-d ChromeOS-t futtat, ne telepítsd az Unlaunch-öt. Egy PC (ami Windows, Linux, vagy macOS operációs rendszerű) szükséges hogy kijavtsunk pár hibát ami az Unlaunch teleptésekor előfordulhat.

:::

::: danger

If you have not yet done so, please follow [Dumping NAND](dumping-nand.html). Habár az esélyek kicsik, az Unlaunch brickelheti véletlenül a Nintendo DSi-det. A NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) would allow you to restore this backup, provided you know how to solder.

:::

::: warning

Biztosítsd, hogy a konzol legyen feltöltve, a következő folyamat alatt. Egy véletlen áram elvesztés komoly hibákhoz vezethet.

:::

::: warning

Az Unlaunch nem kompatibilis a Nintendo DSi fejlesztői konzolokkal.

:::

## I. rész - SD kártya telepítés

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Mirror link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), if the above doesn't work
2. Extract `UNLAUNCH.DSI` from the `unlaunch.zip` archive and place it anywhere on your SD card
3. Ellenőrizd, hogy még rajta van a TWiLight Menu++ az SD kártyádon
   - If you are unsure, follow the instructions from the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## II. rész - Az Unlaunch telepítése/frissítése

1. Indítsd el a TWiLight Menu++-t
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the [exploit that you used](launching-the-exploit.html)
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the option labeled `TWiLight Menu++`
   - If several options are labeled `TWiLight Menu++`, select the option in where `BOOT.NDS` is shown at the end of the path on the bottom screen
     - This happens because you are running an older version of TWiLight Menu++, unless you're doing it on purpose, is suggested that you [update your installation](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
2. Indítsd el a TWiLight Menu++ Beállításokat
   - If you haven't changed your theme, press `SELECT` and touch the small DS icon on the bottom of the touch screen. Egyéként tekintsd meg a TWiLight Menu++ kézikönyvet
3. Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the `Unlaunch settings` page
4. If you want to change Unlaunch's background image, select `Background` and choose the one you want
   - If you want to create your own Unlaunch background, see the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
5. Lépj ki a TWiLight Menu++ Beállításokból
6. In the file navigation menu, launch `Unlaunch DSi Installer`
   - If you see two black screens after launching, download [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start `Unlaunch.dsi`\
     This method does not enable Unlaunch to use custom patches and background
7. Válaszd az "install now" opciót
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting.html) page
8. Ha végzett, indítsd újra a rendszered

Ha az Unlaunch Filemenu képernyőt látod ezen a ponton, akkor sikeresen moddoltad a Nintendo DSi-det.

- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

## III. rész - Unlaunch-utáni konfiguráció

Jelenleg az Unlaunch alapértelmezésben a Filemenu-t indítja bootoláskor, de ez módosítható bármire, amit szeretnél.

1. Kapcsold be a konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
   - Ez el kell indítsa az Unlaunch Filemenu-t
   - If nothing is listed, or if only `TWiLight Menu++` isn't listed (even after scrolling down), then you'll need to [reformat the SD card](sd-card-setup.html)
2. Navigate to `OPTIONS`, and look at the available options
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> hardkódolt az Unlaunch menühöz, így az nem cserélhető
   - The `NO BUTTON` and `BUTTON A / B / X / Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. Kiválaszthatsz bármilyen DSiWare-t, homebrew-t, a Slot-1 kártyát vagy az Unlaunch Filemenu-t
     - For TWiLight Menu++, select  `TWiLight Menu++`
     - For the original DSi Menu, select `Launcher`
   - `LOAD ERROR` is what your DSi will load if loading what you have set fails, such as the SD card not being inserted
3. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## IV. rész - Takarítás az SD kártyán

::: tip

Ez a rész opcionális és csak azt a célt szolgálja, hogy az SD kártyádon ne maradjon fájl, amire nincs szükséged.

:::

:::: tabs

:::tab default Memory Pit

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
- Rename `tip.bin` back to `pit.bin`, and leave it intact
- You can now restore the `DCIM` folder that was on the root of your SD card
- Delete the `UNLAUNCH.DSI` file from your SD card

:::

:::tab Flipnote Lenny

- Delete the `800031_104784BAB6B57_000.ppm` and `T00031_1038C2A757B77_000.ppm` files from inside the following folders:
  - `sd:/private/ds/app/4B47554A/001` (Japan)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
  - Törölheted az összes mappát a saját régiódón kívül is
- Delete the `UNLAUNCH.DSI` file from your SD card

:::
