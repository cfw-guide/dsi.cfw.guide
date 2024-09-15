---
title: Einrichtung der SD-Karte
---

Diese Seite ist für die Vorbereitung deiner SD-Karte für dein Gerät. In diesem Prozess formatieren wir die SD-Karte und überprüfen die Karte auf Fehler.

::: danger

Stellen Sie sicher, dass Sie den Inhalt Ihrer SD-Karte sichern VOR diesem. Die daten der SD-Karte werden dabei ALLE GELÖSCHT werden.

:::

::::: tabs

:::: tab name="Windows" os="windows"

### Abschnitt I - Formatieren Ihrer SD-Karte mit SD Formatter

::: tip

Dieser Abschnitt formatiert die SD-Karte nach den Spezifikationen der SD Card Association. Dies kann viele Probleme beheben, die bei laufenden Homebrew-Anwendungen auftreten können.

:::

::: danger

Jede 64GB oder größere SD-Karte wird in `exFAT` formatiert. You _must_ follow both Sections I & II to re-format to `FAT32`.

:::

1. Laden Sie die neueste Version von [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/) herunter
   - Falls der obige Link nicht für Sie funktioniert, laden Sie [von archive.org](https://web.archive.org/web/20220626204124/https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/) herunter
   - Akzeptieren Sie die Endbenutzer-Lizenzvereinbarung, um den Download zu starten
2. Führen Sie `SD Card Formatter Setup` (die `.exe` Datei) in der heruntergeladenen `.zip` Datei mit Adminstrator-Privilegien, dann installieren Sie das Programm
3. Führen Sie `SD Card Formatter` aus dem Startmenü mit Adminstrator-Rechten aus
4. Wähle deine SD Karte aus
5. Stellen Sie sicher, dass das Kontrollkästchen `Schnellformatieren` aktiviert ist
6. Drücken Sie `Formatieren` um den Formatierungsprozess zu starten
   - If you're using a 4GB-32GB SD card, and the cluster size is not reported as `32 kilobytes`, you'll need to follow Section II as well ![Screenshot von SD Card Formatter unter Windows 11](/assets/images/sd-card-formatter.png)

### Abschnitt II - Formatieren Ihrer SD-Karte mit GUIFormat

This section formats SD cards which are 64GB or larger to FAT32.\
This also applies to 4GB-32GB SD cards which have not been formatted with 32kb cluster size.

::: tip

Wenn Ihre SD-Karte 32GB oder weniger Kapazität hat, gehen Sie zu Abschnitt III.

:::

1. Laden Sie die neueste Version von [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) herunter
   - Klicken Sie auf das Bild auf der Webseite, um die App herunterzuladen
2. Lass GUIFormat mit Administratorrechten laufen lassen
3. Wähle den Laufwerkbuchstaben deiner Sd-Karte
4. Setze die `Allokationsgröße` auf `32768`
   - Wenn diese für Ihre SD zu groß ist, setzen Sie sie auf die höchste Funktionstüchtigkeit
5. Stellen Sie sicher, dass das Kontrollkästchen `Schnellformatieren` aktiviert ist
6. Formatierungsprozess starten

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)

### Abschnitt III - Suche nach Fehlern

1. Gehe zum Eigenschaftsfenster deiner SD-Karte
   - `Windows Explorer` -> `Dieser PC` -> Rechtsklick auf Ihre SD-Karte -> `Eigenschaften`
2. Im Werkzeug-Tab wählen Sie `Jetzt prüfen`
3. Überprüfen Sie beide `Automatisch Dateisystemfehler` und `und versuchen Sie die Wiederherstellung fehlerhafter Sektoren`
4. Starte denn Überprüfungsprozess starten

Dadurch wird die SD-Karte gescannt und Fehler korrigiert.

### Abschnitt IV - Prüfe das Lesen und Schreiben der SD-Karte

1. Downloaden und entpacken Sie [das h2testw-Archiv](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) irgendwo auf Ihrem Computer
   - Falls der obige Link nicht für Sie funktioniert, laden Sie [von archive.org](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) herunter
   - Es kann auch auf einem externen Gerät extrahiert werden, solange das externe Gerät nicht deine SD-Karte ist
2. Führen Sie `h2testw.exe` aus, wenn Ihre SD-Karte in Ihren Computer eingelegt ist
3. Wählen Sie, in welcher Sprache Sie h2testw sehen möchten
4. Setze den Laufwerkbuchstaben deiner SD-Karte als Ziel
5. Stelle sicher, dass `der verfügbare Raum` ausgewählt ist
6. Klick `Schreiben + Verifizieren`

- Warten bis der Prozess abgeschlossen ist

::: tip

Wenn der Test das Ergebnis `Test ohne Fehler` zeigt, Ihre SD-Karte ist gesund und Sie können alle `.h2w` Dateien auf Ihrer SD-Karte löschen.

:::

::: danger

Falls der Test jedoch ein anderes Ergebnis anzeigen sollte, ist deine SD Karte möglicherweise korrupt oder beschädigt und du müsstest diese eventuell austauschen!

:::

::::

:::: tab name="Linux" os="other"

::: tip

Falls TWiLight Menu++ nach der Anwendung dieser Methode nicht startet, folgen Sie stattdessen der Windows-Methode, durch Neustart nach Windows oder durch Ausführen einer virtuellen Windows-Maschine

:::

### Abschnitt I - Formatieren der SD-Karte

1. Stelle sicher, dass deine SD-Karte **nicht** in deinen Linux-Rechner eingelegt ist
2. Starten Sie das Linux-Terminal
3. Tippe `Uhr "lsblk"`
4. Lege deine SD-Karte in deine Linux-Maschine ein
5. Ausgabe beobachten. Es sollte so etwas übereinstimmen:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Notieren Sie sich den Gerätenamen. In unserem obigen Beispiel war es `mmcblk0p1`
   - Wenn `RO` auf 1 gesetzt ist, stellen Sie sicher, dass der Schalterschalter nicht nach unten geschaltet ist
   - Stellen Sie sicher, dass Sie die **-Partition**, `mmcblk0p1` nicht `mmcblk0`
2. Drücke STRG + C, um das Menü zu verlassen
3. Folgen Sie den Anweisungen, die für die Kapazität Ihrer SD-Karte relevant sind:
   - 2GB oder niedriger: `sudo mkdosfs /dev/(Gerätename von oben) -s 64 -F 16`
     - Erstellt eine einzelne FAT16-Partition mit 32 KB-Cluster-Größe auf der SD-Karte
   - 4GB oder höher: `sudo mkdosfs /dev/(Gerätename von oben) -s 64 -F 32`
     - Erstellt eine einzelne FAT32 Partition mit 32 KB Cluster Größe auf der SD-Karte

### Abschnitt II - Verwendung von F3

1. Downloaden und entpacken Sie [das F3-Archiv](https://github.com/AltraMayor/f3/archive/v7.2.zip) irgendwo auf Ihrem Computer.
2. Starten Sie das Terminal im F3-Verzeichnis
3. Führe `make` aus, um F3 zu kompilieren
4. Führen Sie `f3write <your sd card mount point>` aus, wenn Ihre SD-Karte eingelegt und eingebunden ist
   - Warte, bis der Prozess abgeschlossen ist. Ein Beispiel Ergebnis siehe unten:
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
5. `./f3read <your sd card mount point>` ausführen

- Warte, bis der Prozess abgeschlossen ist. Ein Beispiel Ergebnis siehe unten:
  ```
  $ ./f3read /media/michel/6135-3363/
                    SECTORS      ok/corrupted/changed/overwritten
  Validating file 1.h2w ... 2097152/        0/      0/      0
  ...
  Validating file 30.h2w ... 1491904/        0/      0/      0

     Data OK: 29.71 GB (62309312 sectors)
  Data LOST: 0.00 Byte (0 sectors)
              Corrupted: 0.00 Byte (0 sectors)
     Slightly changed: 0.00 Byte (0 sectors)
           Overwritten: 0.00 Byte (0 sectors)
  Average Reading speed: 9.42 MB/s
  ```

___

::: tip

0 Byte (0 Sektoren)`deine SD-Karte ist gesund und du kannst alle`löschen.

:::

::: danger

Falls der Test jedoch ein anderes Ergebnis anzeigen sollte, ist deine SD Karte möglicherweise korrupt oder beschädigt und du müsstest diese eventuell austauschen!

:::

::::

:::: tab name="macOS" os="macos"

### Abschnitt I - Formatieren Ihrer SD-Karte mit SD Formatter

::: tip

Dieser Abschnitt formatiert die SD-Karte nach den Spezifikationen der SD Card Association. Dies kann viele Probleme beheben, die bei laufenden Homebrew-Anwendungen auftreten können.

:::

::: danger

Jede 64GB oder größere SD-Karte wird in `exFAT` formatiert. Sie _müssen_ Abschnitt II folgen, um das Format nach `FAT32` umzuformatieren.

:::

1. Laden Sie die neueste Version von [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/) herunter
   - Akzeptieren Sie die Endbenutzer-Lizenzvereinbarung, um den Download zu starten
2. Führen Sie `SD Card Formatter` (die `.mpkg` Datei) in der heruntergeladenen `.zip` Datei aus
3. `SD Card Formatter` ausführen
4. Wähle deine SD Karte aus
5. Stellen Sie sicher, dass das Kontrollkästchen `Schnellformatieren` aktiviert ist
6. Formatierungsprozess starten

### Abschnitt II - Formatieren Ihrer SD-Karte mit Festplattenprogramm

Dieser Abschnitt formatiert SD-Karten größer als 32GB nach FAT32.

::: tip

Wenn Ihre SD-Karte 32GB oder weniger Kapazität hat, gehen Sie zu Abschnitt III.

:::

#### OS X El Capitan (10.11) und später

1. Starte die Disk Utility Anwendung
2. Wählen Sie `Alle Geräte` in der oberen linken `Ansicht`
3. SD-Karte aus der Seitenleiste auswählen
   - Stelle sicher das du das richtige Gerät ausgewählt hast, oder du könntest versehentlich ein anderes Gerät formattieren!
4. Klicke oben `Lösche`
5. Stellen Sie sicher, dass `Format` auf `MS-DOS (FAT32)` gesetzt ist
   - Auf El Capitan (10.11) durch Catalina (10.15) wählen Sie `MS-DOS (FAT)`
6. Stelle sicher, dass `Schema` auf `Master Boot Record` gesetzt ist
   - Wenn das `Schema` nicht erscheint, klicken Sie auf `Abbrechen` und stellen Sie sicher, dass das Gerät anstelle einer Lautstärke ausgewählt wird
7. Click `Erase`, then click `Close`

#### OS X Yosemite (10.10) und früher

1. Starte die Disk Utility Anwendung
2. SD-Karte aus der Seitenleiste auswählen
   - Stelle sicher das du das richtige Gerät ausgewählt hast, oder du könntest versehentlich ein anderes Gerät formattieren!
3. Klicken Sie auf `Partition` oben
   - Wenn `Partition` nicht erscheint, stellen Sie sicher, dass das Gerät anstelle eines Volumes ausgewählt wird
4. Stellen Sie sicher, dass `Partition Layout` auf `1 Partition` gesetzt ist
5. Stellen Sie sicher, dass `Format` auf `MS-DOS (FAT)` gesetzt ist
6. Wählen Sie unter der Schaltfläche Optionen (unter der Partitionstabelle) `Master Boot Record`.
7. Klicken Sie `OK` -> `Anwenden` -> `Partition`

### Abschnitt III - Verwendung von F3

1. Terminal öffnen
2. Installieren Sie F3 aus dem Brew, indem Sie `brew f3` installieren
   - Wenn Sie kein Brauen haben, installieren Sie es mit den Anweisungen auf [brew.sh](https://brew.sh)
3. Führen Sie `f3write <your sd card mount point>` aus, wenn Ihre SD-Karte eingelegt und eingebunden ist
   - Warte, bis der Prozess abgeschlossen ist. Ein Beispiel Ergebnis siehe unten:
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
4. `f3read <your sd card mount point>` ausführen
   - Warte, bis der Prozess abgeschlossen ist. Ein Beispiel Ergebnis siehe unten:
   ```
   $ f3read /Volumes/SD\ CARD
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

::: tip

0 Byte (0 Sektoren)`deine SD-Karte ist gesund und du kannst alle`löschen.

:::

::: danger

Falls es jedoch ein anderes Ergebnis anzeigen sollte, ist deine SD-Karte möglicherweise beschädigt.

:::

::::

:::::

::: tip

Du kannst nun den Inhalt deiner SD-Karte wiederherstellen und fortfahren.

:::
