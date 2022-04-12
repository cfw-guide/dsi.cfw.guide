---
title: Problembehandlung
---

## Unlaunch
### Unlaunch friert ein bei `MISMATCH IN FAT COPIES`

twlnf hat einen kritischen Fehler, bei dem es nach einer Modifikation das ganze NAND nicht korrekt aktualisiert, wodurch bei manchem Homebrew (z. B. dem Unlaunch Installierer) Fehler ausgelöst werden.

Um dies zu reparieren, öffne [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases) und wähle `Fix FAT copy mismatch` aus.

Wenn das Problem weiterhin besteht, versuche folgendes:
1. Mounte/Öffne dein NAND-Backup mit [ninfs](https://github.com/ihaveamac/ninfs/releases) und aktiviere die `Allow writing` Einstellung
1. Wenn dein NAND-Backup gemounted ist, mounte `twl_main.img`. Wenn du Windows nutzt, kannst du [OSFMount](https://www.osforensics.com/tools/mount-disk-images.html) nutzen, um das Bild zu mounten
1. Entmounte `twl_main.img`, dann entmounte das NAND-Backup in ninfs Wenn das NAND gespeichert wurde, folge [NAND wiederherstellen](restoring-nand) und danach [Unlaunch Installation](installing-unlaunch).

### Es gibt kein Ton- oder Boot-splash beim ausführen von "Launcher" mit Unlaunch

Der Entwickler von Unlaunch (nocash) hat absichtlich die Hintergrundmusik und Bootsplashes standardmäßig entfernt. Du kannst diese Effekte mit einer [Neuinstallation von Unlaunch](installing-unlaunch) mit TWiLight Menu++, oder durch die Nutzung von [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) wiederherstellen.

### Der Systemstart nach Unlaunchinstallation zeigt nur einen schwarzen Bildschirm

Versuche, deine SD Karte zu entfernen und die Konsole erneut zu starten. Wenn es immernoch nur einen schwarzen Bildschirm zeigt, könnte es sein, dass du dein NAND mit einer [Hardwaremod](https://wiki.ds-homebrew.com/ds-index/hardmod) flashen musst.

### Nach der Unlaunchinstallation stecke ich beim Systemstart in einer Anwendung oder dem Unlaunch Dateimenü fest

Dies wurde warscheinlich durch die Wahl einer falschen Anwendung für die `NO BUTTON` Einstellung in Unlaunch ausgelöst. Halte <kbd class="face">A</kbd> + <kbd class="face">B</kbd> während dem Systemstart und wähle `OPTIONS`, setze dann `NO BUTTON` zu der Anwendung deiner Wahl.

### Andere Unlaunch Probleme

Wenn Unlaunch `Clusters too large`, `Bad VBR`, `Bad MBR` oder keine Anwendungen anzeigt, während die SD-Karte eingesteckt ist, ist die SD-Karte wahrscheinlich nicht korrekt formatiert. Folge [Einrichtung der SD-Karte](sd-card-setup) erneut.

## TWiLight Menu++

Für generelle TWiLight Menu++ Problembehandlung, besuche das [FAQ & die Problembehandlungs](https://wiki.ds-homebrew.com/twilightmenu/faq) Seite im DS-Homebrew Wiki.

## Weitere Assistenz

Wenn du ein Problem feststellst, was hier nicht gelöst wird, oder trotz den Lösungen weiterhin besteht, bitte um Hilfe im [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/yD3spjv) Discord Server.
