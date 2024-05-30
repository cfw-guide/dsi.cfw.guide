---
title: Fehlerbeseitigung & Problemlösungen
---

## Unlaunch
### Unlaunch friert ein bei `MISMATCH IN FAT COPIES`

twlnf hat einen kritischen Fehler, bei dem es nach einer Modifikation das ganze NAND nicht korrekt aktualisiert, wodurch bei manchem Homebrew (z. B. dem Unlaunch Installierer) Fehler ausgelöst werden.

Um dies zu reparieren, öffne [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases) und wähle `Fix FAT copy mismatch` aus.

### Es gibt kein Ton- oder Boot-splash beim ausführen von "Launcher" mit Unlaunch

Der Entwickler von Unlaunch (nocash) hat absichtlich die Hintergrundmusik und Bootsplashes standardmäßig entfernt. Sie können diese Effekte wieder erlangen, indem Sie [deinstallieren](installing-unlaunch.html) mit Hilfe von TWiLight Menu++ mit "Launcher Patches" auf "Standard" auf der Unlaunch-Seite der TWiLight Menu++ Einstellungen neu installieren, oder mit [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Der Systemstart nach Unlaunchinstallation zeigt nur einen schwarzen Bildschirm

Versuche, deine SD Karte zu entfernen und die Konsole erneut zu starten. Wenn es immer noch nur einen schwarzen Bildschirm zeigt, müssen Sie möglicherweise Ihr NAND über eine [Hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) neu flashen.

### Nach der Unlaunchinstallation stecke ich beim Systemstart in einer Anwendung oder dem Unlaunch Dateimenü fest

Dies wurde warscheinlich durch die Wahl einer falschen Anwendung für die `NO BUTTON` Einstellung in Unlaunch ausgelöst. Halte <kbd class="face">A</kbd> + <kbd class="face">B</kbd> während dem Systemstart und wähle `OPTIONS`, setze dann `NO BUTTON` zu der Anwendung deiner Wahl.

### Andere Unlaunch Probleme

Wenn Unlaunch `Clusters too large`, `Bad VBR`, `Bad MBR` oder keine Anwendungen anzeigt, während die SD-Karte eingesteckt ist, ist die SD-Karte wahrscheinlich nicht korrekt formatiert. Folge die [Einrichtung der SD-Karte](sd-card-setup.html) erneut.

## TWiLight Menu++

Für allgemeine TWiLight Menu++ Fehlerbehebung, lesen Sie die [FAQ & Fehlerbehebung](https://wiki.ds-homebrew.com/twilightmenu/faq) Seite im DS-Homebrew Wiki.

## Weitere Assistenz

Wenn du ein Problem feststellst, was hier nicht gelöst wird, oder trotz der oben aufgeführten Lösungen weiterhin besteht, bitte um Hilfe im [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/yD3spjv) Discord Server.
