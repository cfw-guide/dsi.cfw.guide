# NAND-Backup wiederherstellen

::: danger

WARNUNG! This is _**dangerous**_. Selbst wenn du diesen Schritten exakt folgst, gibt es immer noch ein Risiko, den DSi zu beschädigen, da die NAND sehr niedrige Qualität hat, besonders, wenn du mehrere male flashst! Dies sollte nur als letzter Ausweg benutzt werden!

:::

::: tip

Do not skip _anything_ on this page, any mistake greatly increases chance of bricking your DSi.

:::

Zunächst ein paar sicherere alternativen, zu dem, was du machen willst:

- Installation von DSiWare kann mit HiyaCFW oder TWiLight Menu++ durchgeführt werden
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. Die neueste Version vom hiyaCFW Helfer erlaubt dir, während der Einrichtung, deine Fotos von der NAND zur SDNAND zu kopieren
- Die Wiederherstellung einer Unlaunch Tastenkonfiguration kann über das Unlaunch Menü gemacht werden, welches geöffnet wird, indem man <kbd class="face">A</kbd> + <kbd class="face">B</kbd> beim Systemstart drückt
- Löst der Unlaunch Systemstart einen Fehler aus? Entferne deine SD-Karte und versuche einen Systemstart erneut. Wenn es nun funktioniert, dann ist die SD-Karte Schuld und die wiederherstellung eines NAND-Backups wird dies nicht reparieren
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on [Discord](https://ds-homebrew.com/discord)
- Unlaunch zu deinstallieren, entweder durch NAND flashen oder durch den Deinstallierer sollte gemieden werden, wenn es nicht unbedingt nötig ist, du kannst nämlich die Autostart Tasten zu "Launcher" setzen und dein DSi wird wie normal sein

Die einzige Sache, die du mit deiner NAND machen solltest, ist Unlaunch zu Installieren. Verwende sonst die alternativen.

## Anforderungen

- Your NAND backup **from the same DSi**
- The latest release of [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Ein Weg, homebrew mit NAND Zugang auszuführen, wie Unlaunch oder Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), to check your NAND backup (Download the 'Windows gaming version')
  - macOS and Linux users can use [WINE](https://winehq.org) to run no$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Das Bios für no$gba Verwendung dumpen

1. Extract `dsibiosdumper.nds` from the `dsibiosdumper.zip` archive and place it anywhere on your SD card
2. Starte deine Konsole während du <kbd class="face">A</kbd> und <kbd class="face">B</kbd> gedrückt hältst
   - Dies sollte das Unlaunch Dateimenü starten
3. Führe dsibiosdumper vom Unlaunch Dateimenü aus
4. Drücke <kbd class="face">A</kbd>, um das BIOS zu deiner SD-Karte zu dumpen
5. Drücke <kbd>START</kbd>, um dsibiosdumper zu verlassen

## Teste dein NAND-Backup

Es ist sehr wichtig auszuprobieren, ob dein NAND-Backup funktioniert, bevor du versuchst, es zu deiner Konsole wiederherzustellen, wenn es Beschädigungs error in no$gba anzeigt, wird es deine Konsole höchstwahrscheinlich auch beschädigen.

1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Copy your NAND backup to the folder you put `NO$GBA.EXE` in and rename it to `DSI-1.MMC`
3. Copy `bios7i.bin` and `bios9i.bin` to the folder you put `NO$GBA.EXE`, named `BIOSDSI7.ROM` and `BIOSDSI9.ROM`, respectively.
4. Run `NO$GBA.EXE`
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
8. Click `Save Now`
9. Launch any Nintendo DS ROM (`.nds` file)

Wenn no$gba das DSi Menü (oder das Filemenu deinstallieren) lädt, fahren Sie mit dem nächsten Abschnitt fort. If it shows any kind of error _**do not flash that backup**_!

## Deinstalliere Unlaunch von deinem NAND-Backup (optional)

Folgen Sie dies, wenn Sie Ihr NAND-Backup nach der Installation von Unlaunch gedumpt haben und Sie Deinstallation von Deinstallieren möchten. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.

1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
2. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
3. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - Dies sollte den Unstart-Installer starten, der dem Dateimanager "Unstart" ähnelt
4. Choose `Uninstall`
5. Once complete, choose `Power down`
6. Starte alle Nintendo DS ROM erneut und stelle sicher, dass dein DSi Menü geladen wird und ordnungsgemäß funktioniert

If no$gba shows any kind of error instead of loading the DSi menu, _**do not flash that backup**_! Wenn du ein älteres NAND-Backup hast, solltest du es stattdessen versuchen. Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## Flashen Ihrer NAND-Backup (Software)

::: danger

Vergewissern Sie sich, dass Sie die oben genannten Schritte durchgelesen haben, da es hier gefährlich wird. Wenn Sie direkt auf hier verlinkt wurden, ohne den obigen zu folgen, dann gehen Sie zurück nach oben und lesen Sie diese ganze Seite.

:::

::: danger

Stellen Sie sicher, dass Ihr Nintendo DSi System gut geladen ist, bevor Sie diesen Abschnitt starten.

:::

1. Mit Ihrer SD-Karte eingefügt, betreiben Sie Ihr Nintendo DSI, während Sie <kbd class="face"> A </kbd> und <kbd class="face"> B </kbd> halten
2. Starte SafeNANDManager
3. Press the button to `begin NAND restore`
4. Sobald die Wiederherstellung abgeschlossen ist, drücke <kbd>START</kbd> um deinen DSi auszuschalten

Dein NAND sollte jetzt wiederhergestellt werden.

## Flashen Ihrer NAND-Backup (Hardmod)

Wenn du deinen Nintendo DSi nicht booten kannst, ist eine Hardmod die einzige Möglichkeit, ein NAND-Backup wiederherzustellen. The best guide that currently exists is the [Nintendo DSi hardmod guide on the DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
