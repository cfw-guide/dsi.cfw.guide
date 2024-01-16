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
- [dsibiosdumper](http://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Das Bios für no$gba Verwendung dumpen
1. Extrahiere `dsibiosdumper.nds` vom `dsibiosdumper.zip` Archiv und plaziere es irgendwo auf deiner SD-Karte
2. Starte deine Konsole während du <kbd class="face">A</kbd> und <kbd class="face">B</kbd> gedrückt hältst
    - Dies sollte das Unlaunch Dateimenü starten
3. Führe dsibiosdumper vom Unlaunch Dateimenü aus
4. Drücke <kbd class="face">A</kbd>, um das BIOS zu deiner SD-Karte zu dumpen
5. Drücke <kbd>START</kbd>, um dsibiosdumper zu verlassen

## Teste dein NAND-Backup
Es ist sehr wichtig auszuprobieren, ob dein NAND-Backup funktioniert, bevor du versuchst, es zu deiner Konsole wiederherzustellen, wenn es brick error in no$gba anzeigt, wird es deine Konsole höchstwahrscheinlich auch beschädigen.
1. Extrahiere `NO$GBA.EXE` von `no$gba-w.zip` zu einem Ordner auf deinem Computer
2. Kopiere dein NAND-BAckup zum Ordner, in den du `NO$GBA.EXE` plaziert hast und benenne es zu `DSI-1.MMC` um
3. Kopiere `bios7i.bin` und `bios9i.bin`, genannt `BIOSDSI7.ROM `und `BIOSDSI9.ROM` zum Ordner, in den du `NO$GBA.EXE` plaziert hast.
4. Führe `NO$GBA.EXE` aus
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
8. Click `Save Now`
9. Launch any Nintendo DS ROM (`.nds` file)

If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. If it shows any kind of error ***do not flash that backup***!

## Uninstalling Unlaunch from your NAND backup (optional)
Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.
1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
1. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
1. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
    - This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu
1. Choose `Uninstall`
1. Once complete, choose `Power down`
1. Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly

If no$gba shows any kind of error instead of loading the DSi menu, ***do not flash that backup***! If you have an older NAND backup you may want to try using that instead. Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## Flashing your NAND backup (Software)

::: danger

Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.

:::

::: danger

Make sure your Nintendo DSi system is well charged before beginning this section.

:::

1. With your SD card inserted, power on your Nintendo DSi while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd>
3. Launch SafeNANDManager
4. Press the button to `begin NAND restore`
6. Once the restore finishes, press <kbd>START</kbd> to turn off your DSi

Your NAND should now be restored.

## Flashing your NAND backup (Hardmod)
If you cannot boot your Nintendo DSi, a hardmod is the only way to restore a NAND backup. The best guide that currently exists is the [Nintendo DSi hardmod guide on the DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
