# Installation von Unlaunch

::: warning

Wenn Sie keinen Zugriff auf einen PC haben oder wenn Ihr PC auf Chrome OS läuft, dann installieren Sie bitte nicht Unlaunch. Ein PC (unter Windows, Linux oder macOS) ist erforderlich, um einige Probleme zu beheben, die nach der Installation von Unlunch auftreten können.

:::

::: danger

If you have not yet done so, please follow [Dumping NAND](dumping-nand.html). Obwohl die Chance gering ist, aber Unlaunch kann aus Versehen deinen Nintendo DSi beschädigen. A NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) would allow you to restore this backup, provided you know how to solder.

:::

::: warning

Stelle sicher, dass deine Konsole geladen ist, wenn du diesem Prozess folgst. Ein plötzlicher Stromverlust kann ernsthafte Schäden verursachen.

:::

::: warning

Diese Anleitung ist nicht mit Nintendo DSi Entwicklungskonsolen kompatibel.

:::

## Abschnitt 1 -Einrichtung der SD-Karte

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Mirror link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), if the above doesn't work
2. Extract `UNLAUNCH.DSI` from the `unlaunch.zip` archive and place it anywhere on your SD card
3. Vergewissere dich, dass sich TWiLight Menu++ auf deiner SD Karte befindet
   - If you are unsure, follow the instructions from the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## Abschnitt II - Installation/Updaten von Unlaunch

1. Öffne TWiLight Menu++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the [exploit that you used](launching-the-exploit.html)
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the option labeled `TWiLight Menu++`
   - If several options are labeled `TWiLight Menu++`, select the option in where `BOOT.NDS` is shown at the end of the path on the bottom screen
     - This happens because you are running an older version of TWiLight Menu++, unless you're doing it on purpose, is suggested that you [update your installation](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
2. Starte die TWiLight Menu++ Einstellungen
   - If you haven't changed your theme, press `SELECT` and touch the small DS icon on the bottom of the touch screen. Sonst sieh dir das TWiLight Menu++ Handbuch an
3. Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the `Unlaunch settings` page
4. If you want to change Unlaunch's background image, select `Background` and choose the one you want
   - If you want to create your own Unlaunch background, see the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
5. Verlasse die TWiLight Menu++ Einstellungen
6. In the file navigation menu, launch `Unlaunch DSi Installer`
   - If you see two black screens after launching, download [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start `Unlaunch.dsi`\
     This method does not enable Unlaunch to use custom patches and background
7. Wählen Sie die Option "Jetzt installieren"
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting.html) page
8. Nach Fertigstellung starten Sie Ihr System neu

Wenn du Unlaunch's Dateimenü nun siehst, hast du deinen Nintendo DSi erfolgreich modifiziert.

- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

## Abschnitt III - Konfiguration nach Unlaunchinstallation

Derzeit startet Unlaunch standardmäßig das Dateimenü beim Systemstart, dies kann aber geändert werden, wozu immer man will.

1. Starte deine Konsole während du <kbd class="face">A</kbd> und <kbd class="face">B</kbd> gedrückt hältst
   - Dies sollte das Unlaunch Dateimenü starten
   - If nothing is listed, or if only `TWiLight Menu++` isn't listed (even after scrolling down), then you'll need to [reformat the SD card](sd-card-setup.html)
2. Navigate to `OPTIONS`, and look at the available options
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> ist unveränderbar einprogrammiert, Unlaunch's Dateimenü zu starten
   - The `NO BUTTON` and `BUTTON A / B / X / Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. Man kann jegliche DSiWare, homebrew, die Slot-1 Spielkarte, wifiboot oder Unlaunch's Dateimenü auswählen
     - For TWiLight Menu++, select  `TWiLight Menu++`
     - For the original DSi Menu, select `Launcher`
   - `LOAD ERROR` is what your DSi will load if loading what you have set fails, such as the SD card not being inserted
3. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## Abschnitt IV- Die SD-Karte bereinigen

::: tip

Dieser Abschnitt ist optional und dient nur dazu, die SD-Karte von unnötigen Dateien zu bereinigen.

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
  - Sie können auch die gesamten Ordner für die Regionen außer Ihren eigenen löschen
- Delete the `UNLAUNCH.DSI` file from your SD card

:::
