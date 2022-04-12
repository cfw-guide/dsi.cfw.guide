---
title: FAQ
---

## Sollte ich ein Systemupdate durchführen?
Nein. Der Nintendo DSi kann Homebrew in jeder Version ausführen, auch der neuesten, es gibt aber keinen Vorteil durch updaten. Der DSi Shop wurde vollständig offline genommen, die Facebookintegration der DSi Kamera ist inaktiv und die einzig andere Sache Updates machen, ist Flashcards zu blockieren. Es gibt auch ein extrem geringes Risiko, den DSi bei einem Systemupdate zu **beschädigen**, genauso wahrscheinlich wie das Risiko bei der Unlaunch-Installation.

## Welche Funktionalität werde ich durch das Modifizieren meinen Systems verlieren?
- Wenn du dich entscheidest Unlaunch zu installieren, wirst du keine Systemfunktionen verlieren
- Wenn du dich nur für Memory-Pit entscheidest, wirst du keine Fotos über die Nintendo DSi Kamera-Anwendung auf der SD-Karte speichern können, während der Exploit installiert ist. Folge dann stattdessen [alternative Exploits](alternate-exploits) oder der [Unlaunch Installation](installing-unlaunch)
   - Das liegt daran, dass die Metadatendatei (`pit.bin`) mit dem Memory Pit Exploit überschrieben ist

## Wie Spiele ich Nintendo DS Spielkarten-Dumps?
Das Spielen von Spielkarten-Dumps auf der Konsole benötigt die Nutzung einer Flashcard oder von nds-bootsstrap, ein Programm, was Spiele von der SD-Karte spielen lässt, indem es Slot-1 Reads umleitet und darauf schreibt.
- Mithilfe von TWiLight Menu++ kannst du auf deiner SD-Karte nach ROM Dateien suchen und diese anschließend mit nds-bootstrap starten. Die Vorteile von TWiLight Menu++ sind ein Cheatmenü, in-Game Einstellungen und ausweichen von Beschränkungen, die Forwarder auslösen. Mit anderen Worten, du kannst per Drag-and-drop deine ROM Dateien direkt und ohne Setup starten. Es gibt keine Titelbegrenzung von 39, weder von hiyaCFW oder Unlauch und es gibt keine Beschränkung von freiem Speicherplatz auf der SD-Karte
- hiyaCFW Nutzer können forwarder für SDNAND's DSi Menü erstellen, indem sie die [DS Spiel-Forwarder](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) Anleitung auf dem DS-Homebrew_wiki nutzen, dies hat aber Einschränkungen. Dann gibt es aber eine feste Beschränkung von 39 Speilen und forwarder sind schwerer zu erstellen als TWiLight Menu++ zu nutzen
   - Wenn du hiyaCFW nicht hast und forwarder nutzen willst, folge der [hiyaCFW Installations-Anleitung](https://wiki.ds-homebrew.com/hiyacfw/installing) im DS-Homebrew-Wiki

## Wie aktualisiere ich Homebrew?
- **Unlaunch** - Folge den Anweisungen auf der [Unlaunch Installtion](installing-unlaunch)'s Seite
   - Du musst Unlaunch **nicht** deinstallieren bevor du dies machst
- **hiyaCFW** - Ersetze `hiya.dsi` im Stammverzeichnis der SD-Karte mit der [aktualisierten Version](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Folge den Anweisungen auf dem [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Kopiere `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` in den Ordner `_nds`, der sich im Stammverzeichnis deiner SD-Karte befindet
   - Wenn du TWiLight Menu++ nutzt, ist es sehr wahrscheinlich, dass die neueste nds-bootstrap Version bei TWiLight Menü++ mit eingeschlossen ist
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Folge den Anweisungen zum downloaden von ihnen

Anderes Homebrew könnte andere Methoden zum Aktualisieren nutzen.

## Ich bin neu oder würde gerne meine Einstellungen neu machen. Wo fange ich an?
- Wenn du deine Konsole noch nicht modfiziert hast oder Unlaunch auf deinem System updaten willst, empfehlen wir dir, am Anfang der Anleitung zu starten und durch alle Seiten zu lesen. Stelle sicher, dass du alles auf der Startseite gelesen hast
- Wenn du die neueste Version von Unlaunch hast, folge Abschnitt 1b von [Exploit ausführen](launching-the-exploit.html#twilight-menu), um TWiLight Menu++ auf deinem System einzurichten

## Wie kann ich die Kindersicherung enfernen?
- Der [mkey generator](https://mkey.salthax.org) kann den Code generieren mit dem man die Kindersicherung entfernen kann

## Kann ich die Region meines Nintendo DSi's ändern?
Es gibt einige verschiedene Methoden, je nachdem, was du ändern willst:
- Die sicherste und einfachste Methode ist, einfach TWiLight Menu++ zu installieren, es kann jede offizielle Sprache ohne NAND-Modifizierungen nutzen
- Wenn du die Systemregion tatsächlich ändern willst und hiyaCFW nutzt, kannst du Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) nutzen
- Schließlich, wenn du die Region auf der System-NAND ändern willst, kannst du Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/) verwenden

## Was ist mit der hiyaCFW Installationsanleitung passiert?
Weil hiyaCFW nicht mehr viel Nutzen hat und ein problematischer und verwirrender Teil der Anleitung war, wurde es zum [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing) verschoben.
- Wenn du zu der hiyaCFW Installationsseite von einer anderen Anleitung weitergeleitet wurdest, ist diese Anleitung höchstwahrscheinlich veraltet. Nutze diese Anleitung daher stattdessen, weil sie dauerhaft von den Entwicklern dieser Projekte aufrechterhalten wird

## Welche SD-Karte sollte ich verwenden?
- Du solltest eine SD-Karte von einer vertrauenswürdigen Marke kaufen
- Entweder eine normal große SD-Karte oder eine microSD-Karte mit einem Adapter funktionieren
- Jede Speichergröße von 1 GB bis 2 TB funktioniert. Für normale Nutzung sind 8 GB aber genügend
  - Einige Software, wie hiyaCFW, könnte stufenweise längere Ladezeiten mit größeren Speicherkapazitäten haben
- Geschwindigkeiten Klasse 8 oder höher sind empfohlen

## Kann ich meine DSi SD-Karte mit anderen Systemen verwenden?
Generell ja, mit zwei Ausnahmen:
- hiyaCFW wird nur auf dem System funktionieren, für das es eingerichtet wurde
- Selbst wenn du nds-bootstrap oder eine Flashcard nutzt, werden Freundescodes in Online Nintendo-DS Spielen zurückgesetzt, wenn du versuchst mit einer anderen Konsole Online zu gehen

## Die [Unlaunch Seite](https://problemkaputt.de/unlaunch.htm) meint, dass Version 2.0 nicht volkommen sicher ist. Sollte ich die vorherige Version stattdessen nutzen?
Die Unlaunch Seite wurde seit Version 2.0 nicht aktualisiert, was vor zwei Jahren war. Die große mehrheit der Benutzer haben keine Probleme mit dieser Version erfahren, also wird sie als sicher anerkannt.
