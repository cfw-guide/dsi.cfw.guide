---
home: true
title: Startseite
header:
  overlay_image: /assets/images/home-page-feature.png
  overlay_filter: 0.5
---

::: tip

Für komplette Anleitungen zu homebrew und benutzerdefinierter Firmware für andere Geräte, besuche [CFW.Anleitung](https://cfw.guide/).

:::

::: tip

Lese alle Einleitungsseiten (einschließlich dieser!) gründlich durch, bevor du fortfährst.

:::

## Was ist Homebrew?

[Homebrew](https://en.wikipedia.org/wiki/Homebrew_(video_games)) Anwendungen sind unlizensierte Software gemacht für geschlossene Systeme wie den Nintendo DSi. Diese Anwendungen beinhalten Dienstprogramme sowie benutzerdefinierten Homebrew-Spiele.

Homebrew kann gratis auf allen Nintendo DSi Konsolen genutzt werden, unabhängig von Firmware-Version oder Region. Alles was du brauchst ist ein Einstiegspunkt und eine SD-Karte, um dein homebrew zu speichern. Der Haupteinstiegspunkt in dieser Anleitung wird Memory Pit genannt, es gibt aber auch andere Einstiegspunkte, die man verwenden kann, wenn Memory Pit instabil ist.

## Was wird diese Anleitung mit meinem System machen?

Vergiss nicht, dass die Anleitung linear strukturiert ist, aber generell davon abhängt, wie stark du dein System modifizieren willst.

- Wir werden einen Einstiegspunkt einrichten, um grundlegendes Homebrew über Memory Pit, den Exploit für die Nintendo DSi-Kamera-Anwendung, zu starten
- Wir werden dann ein NAND-Backup erstellen, was als Wiederherstellungspunkt, wenn der DSi beschädigt wird, dienen kann
- Für Benutzer, die Zugriff auf die vollen Möglichkeiten des DSi's wünschen, werden wir diese durch die Unlaunch Installation führen. Unlaunch ermöglicht die Ausführung von Homebrew mit mehr Berechtigungen (z. B. Slot-1-Zugriff) und beim Systemstart
   - Durch die Installation von Unlaunch wird NAND modifiziert und kann in seltenen Fällen das System **beschädigen.**. Wenn du keine Schäden riskieren willst, kannst du auch aufhören, nachdem du ein NAND-Backup erstellt hast

## Was kann ich mit einem modifiziertem System machen?

- Nintendo DS(i) game backups oder ROM-Hacks ohne eine Flashcard von der SD-Karte ausführen
- Jegliche DSiWare (außerhalb der Region und/oder 3DS-Exklusiv) von der SD-Karte starten
- Ausführen von DSiWare- und Homebrew-Anwendungen, wenn man beim Systemstart des Nintendo DSi bestimmte Tasten gedrückt hält
- Retro-Klassiker mit verschiedenen Emulatoren spielen
- Flashcards benutzen, welche normalerweise inkompatibel sind
- Die NAND mit hiyaCFW zur SD-Karte umleiten
- Deine Lieblingsfilme mit MPEG4Player anschauen
- Ein Bild (genannt "boot splash") beim Systemstart zeigen
- Homebrew Spiele spielen

## Wo finde ich Homebrew-Anwendungen?

- [Universal-DB](https://db.universal-team.net/ds) hat modernstes homebrew, mit nützlicher Suche und Sortierung, um den Überblick zu behalten, was kürzlich aktualisiert wurde
- [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew) hat viele ältere Homebrews, viele funktionieren aber nur auf Flash-Karten

## Was sollte ich vor dem Start wissen?

- Mit Windows ist es empfohlen, [Dateierweiterungen anzuzeigen](file-extensions-%28windows%29), wenn man den standard Windows Datei-Explorer nutzt
- Das einzige Risiko, den Dsi zu beschädigen, kommt von der Unlaunch Installation, ist aber sehr unwahrscheinlich
- Wenn du keine Erfahrung mit dem Kopieren von Dateien auf eine SD-Karte hast, sind verschiedene Hilfswerkzeuge verfügbar

::: tip

Fahre fort zu [Launching the Exploit](launching-the-exploit)

:::
