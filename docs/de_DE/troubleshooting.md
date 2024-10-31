# Problembehandlung

## Unlaunch

### Unlaunch freezes at `MISMATCH IN FAT COPIES`

twlnf hat einen kritischen Fehler, bei dem es nach einer Modifikation das ganze NAND nicht korrekt aktualisiert, wodurch bei manchem Homebrew (z. B. dem Unlaunch Installierer) Fehler ausgelöst werden.

To fix this, open [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), and select `Fix FAT copy mismatch`.

### Es gibt kein Ton- oder Boot-splash beim ausführen von "Launcher" mit Unlaunch

Der Entwickler von Unlaunch (nocash) hat absichtlich die Hintergrundmusik und Bootsplashes standardmäßig entfernt. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) using TWiLight Menu++ with "Launcher Patches" set to "Default" on the Unlaunch page of TWiLight Menu++ settings, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Der Systemstart nach Unlaunchinstallation zeigt nur einen schwarzen Bildschirm

Versuche, deine SD Karte zu entfernen und die Konsole erneut zu starten. If it still only shows a black screen, you may need to flash your NAND via a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Nach der Unlaunchinstallation stecke ich beim Systemstart in einer Anwendung oder dem Unlaunch Dateimenü fest

This was likely caused by choosing the wrong app for the `NO BUTTON` option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to `OPTIONS`, and set `NO BUTTON` to whatever your preference is.

### Andere Unlaunch Probleme

If Unlaunch displays `Clusters too large`, `Bad VBR`, `Bad MBR`, or doesn't display any applications while the SD card is inserted, your SD card likely wasn't formatted correctly. Re-follow [SD Card Setup](sd-card-setup.html).

## TWiLight Menu++

For general TWiLight Menu++ troubleshooting, see its [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) page on the DS-Homebrew Wiki.

## Weitere Assistenz

If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4) Discord server.
