# Konfiguracja karty SD

Ta strona jest przeznaczona do przygotowania karty SD dla Twojego Nintendo DSi. W trakcie tego procesu sformatujemy kartę SD i sprawdzimy czy karta nie ma błędów.

::: danger

Upewnij się, że stworzyłeś kopię zapasową karty SD PRZED Zaczęciem konfiguracji. Twoja karta SD zostanie SFORMATOWANA w tym procesie.

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
4. Naciśnij `Format` aby rozpocząć proces formatowania

### Section II - Checking SD card read/write for errors

1. Pobierz i rozpakuj [archiwum h2testw](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) w dowolnym miejscu na komputerze
   - Jeśli powyższy link nie działa dla Ciebie, pobierz [z archive.org](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)
   - Można go również rozpakować na urządzeniu zewnętrznym, o ile to urządzenie zewnętrzne nie jest twoją kartą SD
2. Z kartą SD włożoną do komputera, uruchom `h2testw.exe`
3. Wybierz język, w którym chcesz zobaczyć h2testw
4. Ustaw literę napędu karty SD jako swój cel (dysk główny to zazwyczaj C:)
5. Upewnij się, że `all available space` jest zaznaczone
6. Click `Write + Verify` (If this option is greyed out, ensure you formatted the SD card with the steps in Section I)

- Poczekaj do zakończenia procesu

::: tip

Jeśli test pokazuje wynik `Test finished without errors`, Twoja karta SD jest dobra i możesz usunąć wszystkie pliki `.h2w` na twojej karcie SD.

:::

::: danger

Jeśli test pokazuje inne wyniki, karta SD może być uszkodzona, i być może będziesz musiał ją wymienić!

:::

::::

:::: tab Linux

::: tip

Ta sekcja formatuje kartę SD do specyfikacji przez SD Card Association. Może to naprawić wiele problemów, które mogą wystąpić podczas uruchamiania aplikacji homebrew.

:::

::: danger

Wszystkie karty 64GB lub większe zostaną sformatowane do systemu plików `exFAT` w tym procesie. **Musisz** przeczytać zarówno Sekcję I & II aby sformatować do `FAT32`.

:::

### Section I - Formatting your SD card with sdFormatLinux

1. Upewnij się, że Twoja karta SD **nie jest** włożona do maszyny Linux
2. Download and extract the latest version of [sdFormatLinux](https://github.com/profi200/sdFormatLinux/releases/download/v0.2.0/sdFormatLinux_v0.2.0.7z) to your computer
3. Uruchom Terminal Linux
4. Wpisz `watch "lsblk"`
5. Włóż kartę SD do urządzenia Linux
6. Obserwuj wyniki. Powinny wyglądać podobnie:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Zapamiętaj nazwę urządzenia. In our example above, it was `mmcblk0`
   - Jeśli `RO` jest ustawione na 1, upewnij się, że przełącznik blokady nie jest przesunięty w dół
   - Make sure that you're targetting the **device**, `mmcblk0`, not the partition, `mmcblk0p1`
2. Naciśnij CTRL + C, aby wyjść z menu
3. Navigate to where you have extracted sdFormatLinux
4. Run `sudo ./sdFormatLinux -f -e trim /dev/(device name from above)` to format your SD card

::: tip

If you get an error message stating: `Error: Device is mounted`, you will need to run `sudo umount /dev/(partition name from above)` in order to complete the above step.

:::

### Section II - Formatting your SD card with mkdosfs

Ta sekcja formatuje karty SD, które są większe lub równe 64GB, na FAT32.

::: tip

Jeśli karta SD ma pojemność 32GB lub mniej, należy przejść do sekcji III.

:::

1. Upewnij się, że Twoja karta SD **nie jest** włożona do maszyny Linux
2. Uruchom Terminal Linux
3. Wpisz `watch "lsblk"`
4. Włóż kartę SD do urządzenia Linux
5. Obserwuj wyniki. Powinny wyglądać podobnie:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Take note of the device partition name. W naszym przykładzie powyżej było to `mmcblk0p1`
   - Jeśli `RO` jest ustawione na 1, upewnij się, że przełącznik blokady nie jest przesunięty w dół
   - Make sure you're targetting the **partition**, `mmcblk0p1`, not the device, `mmcblk0`
2. Naciśnij CTRL + C, aby wyjść z menu
3. Run `sudo mkdosfs /dev/(partition name from above) -s 64 -F 32` to format your SD card to FAT32

### Sekcja III – Używanie F3

1. Download and extract [the F3 archive](https://github.com/AltraMayor/f3/archive/v9.0.zip) anywhere on your computer.
2. Uruchom terminal w katalogu F3
3. Uruchom `make` aby skompilować F3
4. Z kartą SD włożoną, uruchom `./f3write <your sd card mount point>`
   - Poczekaj do zakończenia procesu. Poniżej przedstawiono przykładowe wyniki:
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
5. Uruchom `./f3read <your sd card mount point>`

- Poczekaj do zakończenia procesu. Poniżej przedstawiono przykładowe wyniki:
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

Jeżeli test pokazuje wynik `Data LOST: 0.00 Byte (0 sectors)`, to twoja karta SD jest zdrowa i możesz usunąć wszystkie pliki `.h2w` na karcie SD.

:::

::: danger

Jeśli test pokazuje inne wyniki, karta SD może być uszkodzona, i być może będziesz musiał ją wymienić!

:::

::::

:::: tab macOS

### Sekcja I - Formatowanie karty SD za pomocą SD Formatter

::: tip

Ta sekcja formatuje kartę SD do specyfikacji przez SD Card Association. Może to naprawić wiele problemów, które mogą wystąpić podczas uruchamiania aplikacji homebrew.

:::

::: danger

Wszystkie karty 64GB lub większe zostaną sformatowane do systemu plików `exFAT` w tym procesie. _Musisz_ postępować zgodnie z sekcją II, aby przeformatować do `FAT32`.

:::

1. Pobierz najnowszą wersję [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/)
   - Zaakceptuj umowę licencyjną użytkownika, aby rozpocząć pobieranie
2. Uruchom `Install SD Card Formatter` (plik `.mpkg`) w pobranym pliku `zip`
3. Uruchom `SD Card Formatter`
4. Wybierz swoją kartę SD
5. Upewnij się, że pole wyboru `Quick Format` jest zaznaczone
6. Rozpocznij proces formatowania

### Sekcja II - Formatowanie twojej karty SD za pomocą Disk Utility

Ta sekcja formatuje karty SD większe niż 32GB na FAT32.

::: tip

Jeśli karta SD ma pojemność 32GB lub mniej, należy przejść do sekcji III.

:::

#### OS X El Capitan (10.11) i później

1. Uruchom aplikację na dysku
2. Wybierz `Show All Devices` w panelu `View`
3. Wybierz kartę SD z paska bocznego
   - Upewnij się, że wybrałeś właściwe urządzenie, w przeciwnym razie możesz przypadkowo usunąć zły napęd!
4. Kliknij `Erase` na górze
5. Upewnij się, że `Format` jest ustawiony na `MS-DOS (FAT32)`
   - Na El Capitan (10.11) przez Katalinę (10.15) wybierz `MS-DOS (FAT)`
6. Upewnij się, że `Scheme` jest ustawiony na `Master Boot Record`
   - Jeśli `Scheme` nie pojawia się, kliknij `Cancel` i upewnij się, że wybrano urządzenie zamiast głośności
7. Kliknij `Erase` a potem `Close`

#### OS X Josemite (10.10) i wcześniej

1. Uruchom aplikację na dysku
2. Wybierz kartę SD z paska bocznego
   - Upewnij się, że wybrałeś właściwe urządzenie, w przeciwnym razie możesz przypadkowo usunąć zły napęd!
3. Kliknij `partition` na górze
   - Jeśli `partition` nie pojawia się, upewnij się, że wybrano urządzenie zamiast głośności
4. Upewnij się, że `Partition` jest ustawiona na `1 partition`
5. Upewnij się, że `Format` jest ustawiony na `MS-DOS (FAT)`
6. Z przycisku Opcje (poniżej tablicy partycji), wybierz `Master Boot Record`.
7. Kliknij `OK` -> `Apply` -> `Partition`

### Sekcja III – Używanie F3

1. Otwórz terminal
2. Zainstaluj F3 z brew poprzez uruchomienie `brew install f3`
   - Jeśli nie masz brew, zainstaluj go z instrukcjami na [brew.sh](https://brew.sh)
3. Z kartą SD włożoną i zamontowaną, uruchom `f3write <your sd card mount point>`
   - Poczekaj do zakończenia procesu. Poniżej przedstawiono przykładowe wyniki:
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
4. Uruchom `f3read <your sd card mount point>`
   - Poczekaj do zakończenia procesu. Poniżej przedstawiono przykładowe wyniki:
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

Jeżeli test pokazuje wynik `Data LOST: 0.00 Byte (0 sectors)`, to twoja karta SD jest zdrowa i możesz usunąć wszystkie pliki `.h2w` na karcie SD.

:::

::: danger

Jeśli test pokazuje inne wyniki, karta SD może być uszkodzona, i być może będziesz musiał ją wymienić!

:::

::::

:::::

::: tip

Możesz teraz przywrócić zawartości twojej karty SD i kontynuować.

:::

