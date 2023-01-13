---
title: Installation von Unlaunch
---

::: danger

If you have not yet done so, please follow [Dumping NAND](dumping-nand.html). While the chances are slim, Unlaunch can accidentally brick your Nintendo DSi. A NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) would allow you to restore this backup, provided you know how to solder.

:::

::: warning

Make sure your console is charged when following this process. A sudden power loss could result in serious damage.

:::

::: warning

Unlaunch is not compatible with Nintendo DSi development consoles.

:::

## Abschnitt I- SD Kartensetup

::: tip

Using a Windows, Linux or macOS device? Use [Lazy DSi Downloader](lazy-dsi-downloader.html) to automatically setup your SD card.

:::

1. Lade die neueste version von [Unlaunch](https://problemkaputt.de/unlaunch.zip) herunter
   - [Spiegellink](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), falls der obere nicht funktioniert
1. Extrahiere `UNLAUNCH.DSI` vom `unlaunch.zip`-Archiv und plaziere es irgendwo auf deiner SD Karte
1. Vergewissere dich, dass sich TWiLight Menu++ auf deiner SD Karte befindet
   - If you are unsure, follow the instructions from the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## Abschnitt II - Installation/Updaten von Unlaunch

1. Öffne TWiLight Menu++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the [exploit that you used](launching-the-exploit.html)
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the option labeled `TWiLight Menu++`
   - If several options are labeled `TWiLight Menu++`, select the option in where `BOOT.NDS` is shown at the end of the path on the bottom screen
      - This happens because you are running an older version of TWiLight Menu++, unless you're doing it on purpose, is suggested that you [update your installation](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
1. Starte die TWiLight Menu++ Einstellungen
   - If you haven't changed your theme, press `SELECT` and touch the small DS icon on the bottom of the touch screen. Sonst sieh dir das TWiLight Menu++ Handbuch an
1. Drücke <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> bis du die `Unlaunch einstellungen` seite erreichst
1. Wenn du Unlaunch's Hintergrund ändern willst, wähle `Hintergrund` aus und suche dir einen Hintergrund aus
   - Wenn du deinen eigenen Unlaunch-Hintergrund erstellen willst, besuche die [DS-Homebrew Wiki Website](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Exit TWiLight Menu++ Settings
1. In the file navigation menu, launch `Unlaunch DSi Installer`
   - If you see two black screens after launching, download [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start `Unlaunch.dsi`    
     This method does not enable Unlaunch to use custom patches and background
1. Select the "install now" option
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting.html) page
1. When completed, reboot your system

If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.
- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

## Abschnitt III - Konfiguration nach Unlaunchinstallation

Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed launch whatever you want.

1. Starte die Konsole während du <kbd class="face">A</kbd> und <kbd class="face">B</kbd> gedrückt hältst
   - Dies sollte ins Unlaunch Dateimenü starten
   - If only the background is shown, or if no files from the SD card are shown (ex. `TWiLight Menu++`), then you'll need to [reformat the SD card](sd-card-setup.html)
1. Navigiere zu `OPTIONS` und sieh dir die verfügbaren Optionen an
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> ist unveränderbar einprogrammiert, Unlaunch's Dateimenü zu starten
   - Die `NO BUTTON` und `BUTTON A / B / X / Y` Optionen können eingestellt werden wie immer man will, und bestimmen, was der DSi beim Systemstart ausführt, je nachdem welche Tasten man gedrückt hält. Man kann jegliche DSiWare, homebrew, die Slot-1 Spielkarte, wifiboot oder Unlaunch's Dateimenü auswählen
      - For TWiLight Menu++, select  `TWiLight Menu++`
      - Für das orgiginale DSi-Menü wähle `Launcher`
   - `LOAD ERROR` führt der DSi aus, wenn die ausgewählte Ladeoption nicht funktioniert, z: B. wenn die SD-Karte nicht eingesteckt ist
1. Wähle `SAVE & EXIT`, um die Einstellungen zu speichern und schalte deinen DSi aus

## Abschnitt IV- Die SD-Karte bereinigen

::: tip

This section is optional and only serves for keeping your SD card tidy of files you won't need.

:::

:::: tabs

::: tab name="Memory Pit" default

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
   - If `tip.bin` still exists, then rename it back to `pit.bin`
- You can now restore the `DCIM` folder that was on the root of your SD card, if this folder existed
- Delete the `UNLAUNCH.DSI` file from your SD card

:::

::: tab name="Flipnote Lenny"

- Delete the `800031_104784BAB6B57_000.ppm` and `T00031_1038C2A757B77_000.ppm` files from inside the following folders:
   - `sd:/private/ds/app/4B47554A/001` (Japan)
   - `sd:/private/ds/app/4B475545/001` (USA)
   - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
   - You can also delete the entire folders for the regions besides your own
- Lösche die `UNLAUNCH.DSI` Datei von deiner SD-Karte

:::
