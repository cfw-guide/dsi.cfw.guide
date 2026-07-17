# Einrichtung der SD-Karte

Diese Seite ist für die Vorbereitung deiner SD-Karte für dein Gerät. In diesem Prozess formatieren wir die SD-Karte und überprüfen die Karte auf Fehler.

::: danger

Stellen Sie sicher, dass Sie den Inhalt Ihrer SD-Karte sichern VOR diesem. Die daten der SD-Karte werden dabei ALLE GELÖSCHT werden.

:::

::::: tabs

:::: tab default Windows

### Section I - Formatting your SD card with sdFormatWindows

::: warning

It is **not** recommended to use the built in default Windows Formatting utility since this can cause compatibility problems with homebrew, as it does not format SD cards to the correct specifications set by the SD Association.

:::

1. Download the latest version of [sdFormatWindows](https://github.com/flashcarts/sdFormatWindows/releases/latest/download/sdFormatWindows.exe)
2. Run the `sdFormatWindows` application (the `.exe` file) from the location you downloaded it to, adminstrator privileges are required
3. Select your SD card drive
   - If your SD card is **32GB or less**, you can use the default settings
   - If your SD card is **64GB or more**, enable the **"Format as FAT32"** and **"Force 32KiB Cluster Size"** options
4. Drücken Sie `Formatieren` um den Formatierungsprozess zu starten

### Section II - Checking SD card read/write for errors

1. Downloaden und entpacken Sie [das h2testw-Archiv](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) irgendwo auf Ihrem Computer
   - Falls der obige Link nicht für Sie funktioniert, laden Sie [von archive.org](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) herunter
   - Es kann auch auf einem externen Gerät extrahiert werden, solange das externe Gerät nicht deine SD-Karte ist
2. Führen Sie `h2testw.exe` aus, wenn Ihre SD-Karte in Ihren Computer eingelegt ist
3. Wählen Sie, in welcher Sprache Sie h2testw sehen möchten
4. Setze den Laufwerkbuchstaben deiner SD-Karte als Ziel
5. Stelle sicher, dass `der verfügbare Raum` ausgewählt ist
6. Click `Write + Verify` (If this option is greyed out, ensure you formatted the SD card with the steps in Section I)

- Warten bis der Prozess abgeschlossen ist

::: tip

Wenn der Test das Ergebnis `Test ohne Fehler` zeigt, Ihre SD-Karte ist gesund und Sie können alle `.h2w` Dateien auf Ihrer SD-Karte löschen.

:::

::: danger

Falls der Test jedoch ein anderes Ergebnis anzeigen sollte, ist deine SD Karte möglicherweise korrupt oder beschädigt und du müsstest diese eventuell austauschen!

:::

::::

:::: tab Linux

::: tip

Dieser Abschnitt formatiert die SD-Karte nach den Spezifikationen der SD Card Association. Dies kann viele Probleme beheben, die bei laufenden Homebrew-Anwendungen auftreten können.

:::

::: danger

Jede 64GB oder größere SD-Karte wird in `exFAT` formatiert. You _must_ follow both Sections I & II to re-format to `FAT32`.

:::

### Section I - Formatting your SD card with sdFormatLinux

1. Stelle sicher, dass deine SD-Karte **nicht** in deinen Linux-Rechner eingelegt ist
2. Download and extract the latest version of [sdFormatLinux](https://github.com/profi200/sdFormatLinux/releases/download/v0.2.0/sdFormatLinux_v0.2.0.7z) to your computer
3. Starten Sie das Linux-Terminal
4. Tippe `Uhr "lsblk"`
5. Lege deine SD-Karte in deine Linux-Maschine ein
6. Ausgabe beobachten. Es sollte so etwas übereinstimmen:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Notieren Sie sich den Gerätenamen. In our example above, it was `mmcblk0`
   - Wenn `RO` auf 1 gesetzt ist, stellen Sie sicher, dass der Schalterschalter nicht nach unten geschaltet ist
   - Make sure that you're targetting the **device**, `mmcblk0`, not the partition, `mmcblk0p1`
2. Drücke STRG + C, um das Menü zu verlassen
3. Navigate to where you have extracted sdFormatLinux
4. Run `sudo ./sdFormatLinux -f -e trim /dev/(device name from above)` to format your SD card

::: tip

If you get an error message stating: `Error: Device is mounted`, you will need to run `sudo umount /dev/(partition name from above)` in order to complete the above step.

:::

### Section II - Formatting your SD card with mkdosfs

This section formats SD cards which are 64GB or larger to FAT32.

::: tip

Wenn Ihre SD-Karte 32GB oder weniger Kapazität hat, gehen Sie zu Abschnitt III.

:::

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

1. Take note of the device partition name. In unserem obigen Beispiel war es `mmcblk0p1`
   - Wenn `RO` auf 1 gesetzt ist, stellen Sie sicher, dass der Schalterschalter nicht nach unten geschaltet ist
   - Make sure you're targetting the **partition**, `mmcblk0p1`, not the device, `mmcblk0`
2. Drücke STRG + C, um das Menü zu verlassen
3. Run `sudo mkdosfs /dev/(partition name from above) -s 64 -F 32` to format your SD card to FAT32

### Abschnitt III - Verwendung von F3

1. Download and extract [the F3 archive](https://github.com/AltraMayor/f3/archive/v9.0.zip) anywhere on your computer.
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

:::: tab macOS

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

Falls der Test jedoch ein anderes Ergebnis anzeigen sollte, ist deine SD Karte möglicherweise korrupt oder beschädigt und du müsstest diese eventuell austauschen!

:::

::::

:::::

::: tip

Du kannst nun den Inhalt deiner SD-Karte wiederherstellen und fortfahren.

:::

