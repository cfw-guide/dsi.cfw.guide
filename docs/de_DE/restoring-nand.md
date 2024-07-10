---
title: NAND-Backup wiederherstellen
---

::: danger

WARNUNG! Dies ist ***gefährlich***. Selbst wenn du diesen Schritten exakt folgst, gibt es immer noch ein Risiko, den DSi zu beschädigen, da die NAND sehr niedrige Qualität hat, besonders, wenn du mehrere male flashst! Dies sollte nur als letzter Ausweg benutzt werden!

:::

::: tip

Überspringe *nichts* auf dieser Seite, jeder Fehler erhöht das Risiko stark, den DSi zu beschädigen.

:::

Zunächst ein paar sicherere alternativen, zu dem, was du machen willst:
- Installation von DSiWare kann mit HiyaCFW oder TWiLight Menu++ durchgeführt werden
- Bilder können mit [ninfs](https://github.com/ihaveamac/ninfs/releases), in Kombination mit hiyaCFW oder TWiLight Menu++, wenn du sie auf der Konsole haben willst, wiederhergestellt werden. Die neueste Version vom hiyaCFW Helfer erlaubt dir, während der Einrichtung, deine Fotos von der NAND zur SDNAND zu kopieren
- Die Wiederherstellung einer Unlaunch Tastenkonfiguration kann über das Unlaunch Menü gemacht werden, welches geöffnet wird, indem man <kbd class="face">A</kbd> + <kbd class="face">B</kbd> beim Systemstart drückt
- Löst der Unlaunch Systemstart einen Fehler aus? Entferne deine SD-Karte und versuche einen Systemstart erneut. Wenn es nun funktioniert, dann ist die SD-Karte Schuld und die wiederherstellung eines NAND-Backups wird dies nicht reparieren
- "An error has occured..." beim Systemstart ist höchstwarscheinlich ein hiyaCFW Fehler und steht nicht im Zusammenhang mit deiner NAND, siehe [hiyaCFW FAQ & Problembehandlung](https://wiki.ds-homebrew.com/hiyacfw/faq) im DS-Homebrew Wiki für mehr Information
- Alle Fehler im TWiLight Menu++ stehen nicht damit im Zusammenhang und du solltest versuchen, TWiLight Menu++ erneut zu Installieren oder um Hilfe im [Discord](https://ds-homebrew.com/discord) zu fragen
- Unlaunch zu deinstallieren, entweder durch NAND flashen oder durch den Deinstallierer sollte gemieden werden, wenn es nicht unbedingt nötig ist, du kannst nämlich die Autostart Tasten zu "Launcher" setzen und dein DSi wird wie normal sein

Die einzige Sache, die du mit deiner NAND machen solltest, ist Unlaunch zu Installieren. Verwende sonst die alternativen.

## Voraussetzungen
- Dein NAND-Backup **vom gleichen DSi**
- Die neueste Version von [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Ein Weg, homebrew mit NAND Zugang auszuführen, wie Unlaunch oder Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), um dein NAND-Backup zu überprüfen (Installiere die "Windows gaming Version")
    - macOS und Linux Nutzer können [WINE](https://winehq.org) nutzen, um no$gba auszuführen
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Das Bios für no$gba Verwendung dumpen
1. Extrahiere `dsibiosdumper.nds` vom `dsibiosdumper.zip` Archiv und plaziere es irgendwo auf deiner SD-Karte
2. Starte deine Konsole während du <kbd class="face">A</kbd> und <kbd class="face">B</kbd> gedrückt hältst
    - Dies sollte das Unlaunch Dateimenü starten
3. Führe dsibiosdumper vom Unlaunch Dateimenü aus
4. Drücke <kbd class="face">A</kbd>, um das BIOS zu deiner SD-Karte zu dumpen
5. Drücke <kbd>START</kbd>, um dsibiosdumper zu verlassen

## Teste dein NAND-Backup
Es ist sehr wichtig auszuprobieren, ob dein NAND-Backup funktioniert, bevor du versuchst, es zu deiner Konsole wiederherzustellen, wenn es Beschädigungs error in no$gba anzeigt, wird es deine Konsole höchstwahrscheinlich auch beschädigen.
1. Extrahiere `NO$GBA.EXE` von `no$gba-w.zip` zu einem Ordner auf deinem Computer
2. Kopiere dein NAND-BAckup zum Ordner, in den du `NO$GBA.EXE` plaziert hast und benenne es zu `DSI-1.MMC` um
3. Kopiere `bios7i.bin` und `bios9i.bin`, genannt `BIOSDSI7.ROM `und `BIOSDSI9.ROM` zum Ordner, in den du `NO$GBA.EXE` plaziert hast.
4. Führe `NO$GBA.EXE` aus
5. Klicken Sie auf `Optionen` > `Emulation Setup` um das Emulation Setup Fenster zu öffnen
6. Ändern Sie `Reset/Startup Eintrag` auf `GBA/NDS BIOS (Nintendo Logo)`
7. Ändern Sie `NDS Mode/Colors` auf `DSi (Einzelhandel/16MB)`
8. Klick `Jetzt speichern`
9. Starte jede Nintendo DS ROM (`.nds` Datei)

Wenn no$gba das DSi Menü (oder das Filemenu deinstallieren) lädt, fahren Sie mit dem nächsten Abschnitt fort. Wenn es irgendeine Art von Fehler ***blinkt nicht das Backup***!

## Deinstalliere Unlaunch von deinem NAND-Backup (optional)
Folgen Sie dies, wenn Sie Ihr NAND-Backup nach der Installation von Unlaunch gedumpt haben und Sie Deinstallation von Deinstallieren möchten. Wenn Sie nicht versuchen Deinstallieren zu versuchen, tun Sie **nicht** diesen Abschnitt.
1. Lade die neueste version von [Unlaunch](https://problemkaputt.de/unlaunch.zip) herunter
1. Extrahiere `UNLAUNCH.DSI` von `unlaunch.zip`
1. Starte `UNLAUNCH.DSI` in keinem$gba und starte es vom Spielkarten-Slot
    - Dies sollte den Unstart-Installer starten, der dem Dateimanager "Unstart" ähnelt
1. Wähle `Uninstall` aus
1. Nach Abschluss wählen Sie `Power down`
1. Starte alle Nintendo DS ROM erneut und stelle sicher, dass dein DSi Menü geladen wird und ordnungsgemäß funktioniert

Wenn kein$gba einen Fehler anzeigt, anstatt das DSi Menü zu laden, dann blinkt ***diese Sicherung nicht***! Wenn du ein älteres NAND-Backup hast, solltest du es stattdessen versuchen. **nicht** versuchen, Deinstallationen unter Verwendung seines Deinstallationsprogramms auf der Konsole zu deinstallieren. Dies ist sehr wahrscheinlich, dass dies deine DSi-Datei bricken wird.

## Flashen Ihrer NAND-Backup (Software)

::: danger

Vergewissern Sie sich, dass Sie die oben genannten Schritte durchgelesen haben, da es hier gefährlich wird. Wenn Sie direkt auf hier verlinkt wurden, ohne den obigen zu folgen, dann gehen Sie zurück nach oben und lesen Sie diese ganze Seite.

:::

::: danger

Stellen Sie sicher, dass Ihr Nintendo DSi System gut geladen ist, bevor Sie diesen Abschnitt starten.

:::

1. Mit Ihrer SD-Karte eingefügt, betreiben Sie Ihr Nintendo DSI, während Sie <kbd class="face"> A </kbd> und <kbd class="face"> B </kbd> halten
3. Starte SafeNANDManager
4. Drücke den Knopf um NAND `zu starten`
6. Sobald die Wiederherstellung abgeschlossen ist, drücke <kbd>START</kbd> um deinen DSi auszuschalten

Dein NAND sollte jetzt wiederhergestellt werden.

## Flashen Ihrer NAND-Backup (Hardmod)
Wenn du deinen Nintendo DSi nicht booten kannst, ist eine Hardmod die einzige Möglichkeit, ein NAND-Backup wiederherzustellen. Die beste Anleitung, die derzeit existiert, ist die [Nintendo DSi Hardmod Anleitung auf dem DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
