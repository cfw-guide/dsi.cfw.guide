---
title: Installation von Unlaunch
---

::: warning

Wenn Sie keinen Zugriff auf einen PC haben oder wenn Ihr PC auf Chrome OS läuft, dann installieren Sie bitte nicht Unlaunch. Ein PC (unter Windows, Linux oder macOS) ist erforderlich, um einige Probleme zu beheben, die nach der Installation von Unlunch auftreten können.

:::

::: danger

Wenn du es noch nicht getan hast, bitte folge [Dumping NAND](dumping-nand.html). Obwohl die Chance gering ist, aber Unlaunch kann aus Versehen deinen Nintendo DSi beschädigen. Ein NAND Backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) ermöglicht dir, dieses Backup wiederherzustellen, solange du löten kannst.

:::

::: warning

Stelle sicher, dass deine Konsole geladen ist, wenn du diesem Prozess folgst. Ein plötzlicher Stromverlust kann ernsthafte Schäden verursachen.

:::

::: Warnung

Diese Anleitung ist nicht mit Nintendo DSi Entwicklungskonsolen kompatibel.

:::

## Abschnitt I- SD Kartensetup

1. Lade die neueste version von [Unlaunch](https://problemkaputt.de/unlaunch.zip) herunter
    - [Spiegellink](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), falls der obere nicht funktioniert
1. Extrahiere `UNLAUNCH.DSI` vom `unlaunch.zip`-Archiv und plaziere es irgendwo auf deiner SD Karte
1. Vergewissere dich, dass sich TWiLight Menu++ auf deiner SD Karte befindet
    - Wenn Sie unsicher sind, folgen Sie den Anweisungen der [TWiLight Menu++ Installationsanleitung](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## Abschnitt II - Installation/Updaten von Unlaunch

1. Öffne TWiLight Menu++
    - Wenn dies deine erste Installation von Unlaunch ist, starte TWiLight Menu++ erneut durch [den Exploit, den du genutzt hast](launching-the-exploit.html)
    - Wenn du Unlaunch schon installiert hast und nur aktualisieren willst, halte <kbd class="face">A</kbd> + <kbd class="face">B</kbd> während dem Systemstart und wähle TWiLight Menu++, wodurch `BOOT. NDS` auf dem unteren Bildschirm angezeigt wird
    - Wenn mehrere Optionen als `TWiLight Menu++`bezeichnet werden, wählen Sie die Option aus, in der `BOOT.NDS` am Ende des Pfades auf dem unteren Bildschirm angezeigt
      - Dies geschieht, weil du eine ältere Version von TWiLight Menü++ verwendest, wenn Sie dies nicht absichtlich tun, wird empfohlen, dass Sie [Ihre Installation](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi) aktualisieren
1. Starte die TWiLight Menu++ Einstellungen
    - Wenn Sie Ihr Thema nicht geändert haben, drücken Sie `SELECT` und berühren Sie das kleine DS-Symbol am unteren Rand des Touchscreens. Sonst sieh dir das TWiLight Menu++ Handbuch an
1. Drücke <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> bis du die `Unlaunch einstellungen` seite erreichst
1. Wenn du Unlaunch's Hintergrund ändern willst, wähle `Hintergrund` aus und suche dir einen Hintergrund aus
    - Wenn du deinen eigenen Unlaunch-Hintergrund erstellen willst, besuche die [DS-Homebrew Wiki Website](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Verlasse die TWiLight Menu++ Einstellungen
1. Wähle `Unlaunch DSi Installer` im Dateinavigationsmenü aus
    - Wenn Sie nach dem Start zwei schwarze Bildschirme sehen, laden Sie [ Godmode9i ](https://github.com/DS-Homebrew/GodMode9i/releases) herunter, setzen Sie diese .dsi Datei auf den SD-Stamm, starten Sie Godmode9i mit dem Twilight -Menü ++ und starten sie `Unlaunch.dsi`    
      Diese Methode aktiviert nicht, um eigene Patches und Hintergründe zu verwenden
1. Wählen Sie die Option "Jetzt installieren"
    - Wenn Unlaunch mit `ERROR: MISMATCH IN FAT COPIES` einfriert, besuche die [Troubleshooting](troubleshooting.html)-Website
1. Nach Fertigstellung starten Sie Ihr System neu

Wenn du Unlaunch's Dateimenü nun siehst, hast du deinen Nintendo DSi erfolgreich modifiziert.
- Wenn du einen schwarzen Bildschirm siehst, schau dir bitte die [Fehlerbehebung](troubleshooting.html) Seite an

## Abschnitt III - Konfiguration nach Unlaunchinstallation

Derzeit startet Unlaunch standardmäßig das Dateimenü beim Systemstart, dies kann aber geändert werden, wozu immer man will.

1. Starte die Konsole während du <kbd class="face">A</kbd> und <kbd class="face">B</kbd> gedrückt hältst
    - Dies sollte ins Unlaunch Dateimenü starten
    - Wenn nichts aufgelistet ist oder wenn nur `TWiLight Menu++` nicht aufgeführt ist (sogar nach dem Herunterscrollen), dann musst du [die SD-Karte](sd-card-setup.html) neu formatieren
1. Navigiere zu `OPTIONS` und sieh dir die verfügbaren Optionen an
    - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> ist unveränderbar einprogrammiert, Unlaunch's Dateimenü zu starten
    - Die `NO BUTTON` und `BUTTON A / B / X / Y` Optionen können eingestellt werden wie immer man will, und bestimmen, was der DSi beim Systemstart ausführt, je nachdem welche Tasten man gedrückt hält. Man kann jegliche DSiWare, homebrew, die Slot-1 Spielkarte, wifiboot oder Unlaunch's Dateimenü auswählen
      - Für TWiLight Menü++ wählen Sie  `TWiLight Menu++`
      - Für das orgiginale DSi-Menü wähle `Launcher`
    - `LOAD ERROR` führt der DSi aus, wenn die ausgewählte Ladeoption nicht funktioniert, z: B. wenn die SD-Karte nicht eingesteckt ist
1. Wähle `SAVE & EXIT`, um die Einstellungen zu speichern und schalte deinen DSi aus

## Abschnitt IV- Die SD-Karte bereinigen

::: tip

Dieser Abschnitt ist optional und dient nur dazu, die SD-Karte von unnötigen Dateien zu bereinigen.

:::

:::: tabs

::: tab name="Memory Pit" default

- Lösche die `sd:/private/ds/app/484E494A/pit.bin` Datei von deiner SD-Karte
- Benennen Sie `tip.bin` zurück zu `pit.bin`und lassen Sie es intakt
- Du kannst nun den Ordner `DCIM` wiederherstellen, der im Stammverzeichnis deiner SD-Karte lag
- Lösche die `UNLAUNCH.DSI` Datei von deiner SD-Karte

:::

::: tab name="Flipnote Lenny"

- Löschen Sie die `800031_104784BAB6B57_000.ppm` und `T00031_1038C2A757B77_000.ppm` Dateien innerhalb der folgenden Ordner:
    - `sd:/private/ds/app/4B47554A/001` (Japan)
    - `sd:/private/ds/app/4B475545/001` (USA)
    - `sd:/private/ds/app/4B475556/001` (Europa/Australien)
    - Sie können auch die gesamten Ordner für die Regionen außer Ihren eigenen löschen
- Lösche die `UNLAUNCH.DSI` Datei von deiner SD-Karte

:::
