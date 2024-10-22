---
title: Troubleshooting
---

## Unlaunch
### Unlaunch îngheață la `MISMATCH IN FAT COPIES`

twlnf are o eroare critică în care nu actualizează corect întregul NAND după ce este modificat, ce cauzează anumite aplicații homebrew (precum instalatorul Unlaunch) să afișeze o eroare.

Pentru a remedia asta, deschide [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), și selectează `Fix FAT copy mismatch`.

### Nu se aude nimic sau splash-ul de lansare nu apare când lansez "Launcher" în Unlaunch

The developer of Unlaunch (nocash) has intentionally patched out the background audio and boot-splash by default. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) using TWiLight Menu++ with "Launcher Patches" set to "Default" on the Unlaunch page of TWiLight Menu++ settings, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Când pornesc consola după ce am instalat Unlaunch apare doar un ecran negru

Try ejecting the SD card and powering the console on again. If it still only shows a black screen, you may need to flash your NAND via a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### După ce am insatlat Unlaunch, sunt blocat la pornirea unei aplicații sau în Meniul de Fișiere Unlaunch

This was likely caused by choosing the wrong app for the `NO BUTTON` option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to `OPTIONS`, and set `NO BUTTON` to whatever your preference is.

### Alte probleme cu Unalunch

If Unlaunch displays `Clusters too large`, `Bad VBR`, `Bad MBR`, or doesn't display any applications while the SD card is inserted, your SD card likely wasn't formatted correctly. Re-follow [SD Card Setup](sd-card-setup.html).

## TWiLight Menu++

For general TWiLight Menu++ troubleshooting, see its [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) page on the DS-Homebrew Wiki.

## Asistență suplimentară

If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4) Discord server.
