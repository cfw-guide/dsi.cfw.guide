---
title: Installation von Unlaunch
---

::: danger

Unlaunch ist nicht kompatibel mit DSi Entwicklungskonsolen.

:::

Unlaunch ist ein Exploit, der beim Systemstart ausgeführt wird. Dies erlaubt höhere Ausführungsrechte als normale DSi-Artikel Exploits, wie Memory Pit, was es folgendes tun lässt:

- Programmapplikationen beim Systemstart mit Tastenkombinationen ausführen (homebrew oder Dsi-Artikel)
- Zugang zu Slot-1, mit denen man Spielkarten dumpen kann und inkompatible flashcards ausführen kann
- Regionsperren bei DSi-Enhanced / Exclusiven Spielkarten entfernen
- Alte Nintendo DS homebrew mit nds-bootstrap-hb ausführen
- Kaputtgehschutz
- Donor-ROM vorraussetzung für DSi-Enhanced spiele im DSi modus entfernen
- Für Memory Pit user (andere exploits erlauben dies bereits):
     - Bessere kompatibilität für DSiWare gestartet mit der SD Karte
     - Besserer Ton in GBARunner2

::: danger

Wenn du es noch nicht getan hast, bitte folge [Dumping NAND](dumping-nand). Obwohl die Chance gering ist, kann Unlaunch ausversehen deinen Nintendo DSi beschädigen. Ein NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) ermöglicht dir, dieses Backup wiederherzustellen, solange du löten kannst.

:::

::: warning

Stelle sicher, dass deine Konsole geladen ist, wenn du diesem prozess folgst. Ein plötzlicher Stromverlust kann ernsthafte Schäden verursachen.

:::

## Abschnitt I- SD Kartensetup

::: tip

Verwendest Du ein Windows-, Linux- oder macOS-Gerät? Nimm [Lazy DSi Downloader](lazy-dsi-downloader) her, um deine SD Karte automatisch einzurichten.

:::

1. Lade die neueste version von [Unlaunch](https://problemkaputt.de/unlaunch.zip) herunter
   - [Spiegellink](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), falls der obere nicht funktioniert
1. Extrahiere `UNLAUNCH.DSI` vom `unlaunch.zip`-Archiv und plaziere es irgendwo auf deiner SD Karte
1. Vergewissere dich, dass sich TWiLight Menu++ auf deiner SD Karte befindet
   - Wenn du dir nicht sicher bist, folge den Anweisungen von der [Exploit Ausführen Seite](launching-the-exploit.html#twilight-menu)-Seite

## Abschnitt II - Installation/Updaten von Unlaunch

1. Öffne TWiLight Menu++
   - Wenn dies deine erste Installation von Unlaunch ist, starte TWiLight Menu++ erneut durch den Exploit, den du genutzt hast
   - Wenn du Unlaunch schon installiert hast und nur aktualisieren willst, halte <kbd class="face">A</kbd> + <kbd class="face">B</kbd> während dem Systemstart und wähle `TWiLight Menu++`, wodurch `BOOT.NDS` auf dem unteren Bildschirm angezeigt wird
1. Starte die TWiLight Menu++ Einstellungen
   - Wenn du das Theme noch nicht geändert hast, folge den Schritten in der "Exploit Ausführen"-seite. Sonst sieh dir das TWiLight Menu++ Handbuch an
1. Drücke <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> bis du die `Unlaunch einstellungen` seite erreichst
1. Wenn du Unlaunch's Hintergrund ändern willst, wähle `Hintergrund` aus und suche dir einen Hintergrund aus
   - Wenn du deinen eigenen Unlaunch-Hintergrund erstellen willst, besuche die [DS-Homebrew Wiki Website](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Wenn du den Gesundheit und Sicherheits Bildschirm, DSi Menümusik und Töne beim benutzen des offiziellen Nintendo DSi Menü's haben willst, stelle `Launcher Patches` auf `Aus`
   - Dies wird aber Regionssperre und Flashcard-whitelists beibehalten, weshalb manche Flashcards nicht im DSi Menü hergenommen werden können
1. Verlasse die TWiLight Menu++ Einstellungen
1. Wähle `Unlaunch DSi Installer` im Dateinavigationsmenü aus
1. Wähle die Installationsoption aus
   - Wenn Unlaunch mit `ERROR: MISMATCH IN FAT COPIES` einfriert, besuche die [Troubleshooting](troubleshooting)-Website
1. Starte das System nach Fertigstellung neu

Wenn du Unlaunch's Dateimenü nun siehst hast du deinen Nintendo DSi erfolgreich modifiziert, oh damn.
- Wenn du einen schwarzen Bildschirm siehst, besuche die[Troubleshooting](troubleshooting)-Website

## Abschnitt III - Konfiguration nach Unlaunchinstallation

Derzeit startet Unlaunch standardmäßig das Dateimenü beim Systemstart, dies kann aber geändert werden zu was immer man will.

1. Starte die Konsole während du <kbd class="face">A</kbd> und <kbd class="face">B</kbd> gedrückt hältst
   - Dies sollte ins Unlaunch Dateimenü starten
1. Navigiere zu `OPTIONS` und sieh dir die verfügbaren Optionen an
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> ist unveränderbar einprogrammiert, Unlaunch's Dateimenü zu starten
   - Die `NO BUTTON` und `BUTTON A / B / X / Y` Optionen können eingestellt werden wie immer man will, und bestimmen, was der DSi beim Systemstart ausführt, je nachdem welche Tasten man gedrückt hält. Man kann jegliche DSiWare, homebrew, die Slot-1 Spielkarte, wifiboot oder Unlaunch's Dateimenü auswählen
      - Für TWiLight Menu++ wähle die `TWiLight Menu++` Option, wodurch `BOOT.NDS` auf dem unteren Bildschirm angezeigt wird
      - Für das orgiginale DSi-Menü wähle `Launcher`
   - `LOAD ERROR` führt der DSi aus, wenn die ausgewählte Ladeoption nicht funktioniert, z: B. wenn die SD-Karte nicht eingesteckt ist
1. Wähle `SAVE & EXIT`, um die Einstellungen zu speichern und schalte deinen DSi aus

## Abschnitt IV- Die SD-Karte bereinigen

::: tip

Dieser Abschnitt ist optional und dient nur dazu, die SD-Karte von unnötigen Dateien zu bereinigen.

:::

- Lösche die `sd:/private/ds/app/484E494A/pit.bin` Datei von deiner SD-Karte
   - Wenn du einen anderen Exploit genutzt hast, lösche anstattdessen die Dateien dieses Exploits
- Lösche die `UNLAUNCH.DSI` Datei von deiner SD-Karte
