---
title: Konfiguracja karty SD
---

Ta strona jest przeznaczona do przygotowania karty SD dla Twojego Nintendo DSi. W trakcie tego procesu sformatujemy kartę SD i sprawdzimy czy karta nie ma błędów.

::: danger

Upewnij się, że stworzyłeś kopię zapasową karty SD PRZED Zaczęciem konfiguracji. Twoja karta SD zostanie SFORMATOWANA w tym procesie.

:::

::::: tabs

:::: tab name="Windows" os="windows"

### Sekcja I - Formatowanie karty SD za pomocą SD Formatter

::: tip

Ta sekcja formatuje kartę SD do specyfikacji przez SD Card Association. Może to naprawić wiele problemów, które mogą wystąpić podczas uruchamiania aplikacji homebrew.

:::

::: danger

Wszystkie karty 64GB lub większe zostaną sformatowane do systemu plików `exFAT` w tym procesie. You _must_ follow both Sections I & II to re-format to `FAT32`.

:::

1. Pobierz najnowszą wersję [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
    - Jeśli powyższy link nie działa dla Ciebie, pobierz [z archive.org](https://web.archive.org/web/20220626204124/https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
    - Zaakceptuj umowę licencyjną użytkownika, aby rozpocząć pobieranie
1. Uruchom `SD Card Formatter Setup` (plik `.exe`), który znajduje się w pobranym plik `.zip`. Pamiętaj aby uruchomić program z uprawnieniami administratora
1. Uruchom `SD Card Formatter` z Menu Start z uprawnieniami administratora
1. Wybierz swoją kartę SD
1. Upewnij się, że pole wyboru `Quick Format` jest zaznaczone
1. Naciśnij `Format` aby rozpocząć proces formatowania
    - If you're using a 4GB-32GB SD card, and the cluster size is not reported as `32 kilobytes`, you'll need to follow Section II as well ![Screenshot of SD Card Formatter on Windows 11](/assets/images/sd-card-formatter.png)

### Sekcja II - Formatowanie karty SD za pomocą GUIFormat

This section formats SD cards which are 64GB or larger to FAT32.     
This also applies to 4GB-32GB SD cards which have not been formatted with 32kb cluster size.

::: tip

Jeśli karta SD ma pojemność 32GB lub mniej, należy przejść do sekcji III.

:::

1. Pobierz najnowszą wersję [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)
    - Kliknij na zdjęcie na stronie internetowej, aby pobrać aplikację
1. Uruchom GUIFormat z uprawnieniami administratora
1. Wybierz literę dysku
1. Ustaw `Allocation size unit` na `32768`
    - Jeśli jest on zbyt duży dla twojego SD, ustaw go na najwyższy, który działa
1. Upewnij się, że pole wyboru `Quick Format` jest zaznaczone
1. Rozpocznij proces formatowania

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)

### Sekcja III – Sprawdzanie błędów
1. Przejdź do okna właściwości karty SD
    - `Menedżer Plików` -> `Ten komputer` -> Kliknij prawym przyciskiem myszy na kartę SD -> `Właściwości`
1. W zakładce Narzędzia wybierz `Sprawdź teraz`
1. Sprawdź `Automatycznie napraw błędy systemu plików` i `Skanowanie i próba odzyskania złych sektorów`
1. Rozpocznij proces sprawdzania

Spowoduje to skanowanie karty SD i poprawienie wszelkich wykrytych przez nią błędów.

### Sekcja IV - Sprawdzanie odczytu/zapisu karty SD

1. Pobierz i rozpakuj [archiwum h2testw](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) w dowolnym miejscu na komputerze
    - Jeśli powyższy link nie działa dla Ciebie, pobierz [z archive.org](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)
    - Można go również rozpakować na urządzeniu zewnętrznym, o ile to urządzenie zewnętrzne nie jest twoją kartą SD
1. Z kartą SD włożoną do komputera, uruchom `h2testw.exe`
1. Wybierz język, w którym chcesz zobaczyć h2testw
1. Ustaw literę napędu karty SD jako swój cel (dysk główny to zazwyczaj C:)
1. Upewnij się, że `all available space` jest zaznaczone
1. Kliknij `Write + Verify`
- Poczekaj do zakończenia procesu

::: tip

Jeśli test pokazuje wynik `Test finished without errors`, Twoja karta SD jest dobra i możesz usunąć wszystkie pliki `.h2w` na twojej karcie SD.

:::

::: danger

Jeśli test pokazuje inne wyniki, karta SD może być uszkodzona, i być może będziesz musiał ją wymienić!

:::

::::

:::: tab name="Linux" os="other"

::: tip

Jeśli TWiLight Menu++ nie uruchomi się po zastosowaniu tej metody, należy zastosować się do metody Windows, poprzez uruchomienie systemu Windows lub uruchomienie maszyny wirtualnej Windows

:::

### Sekcja I - Formatowanie karty SD
1. Upewnij się, że Twoja karta SD **nie jest** włożona do maszyny Linux
1. Uruchom Terminal Linux
1. Wpisz `watch "lsblk"`
1. Włóż kartę SD do urządzenia Linux
1. Obserwuj wyniki. Powinny wyglądać podobnie:
```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```
1. Zapamiętaj nazwę urządzenia. In our example above, it was `mmcblk0p1`
    - Jeśli `RO` jest ustawione na 1, upewnij się, że przełącznik blokady nie jest przesunięty w dół
    - Make sure you're targetting the **partition**, `mmcblk0p1` not `mmcblk0`
1. Naciśnij CTRL + C, aby wyjść z menu
1. Follow the instructions relevant to your SD card's capacity:
    - 2GB or lower: `sudo mkdosfs /dev/(device name from above) -s 64 -F 16`
      - This creates a single FAT16 partition with 32 KB cluster size on the SD card
    - 4GB or higher: `sudo mkdosfs /dev/(device name from above) -s 64 -F 32`
      - This creates a single FAT32 partition with 32 KB cluster size on the SD card

### Sekcja II – Używanie F3
1. Pobierz i rozpakuj [archiwum F3](https://github.com/AltraMayor/f3/archive/v7.2.zip) w dowolnym miejscu na swoim komputerze.
1. Uruchom terminal w katalogu F3
1. Uruchom `make` aby skompilować F3
1. Z kartą SD włożoną, uruchom `./f3write <your sd card mount point>`
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
1. Run `./f3read <your sd card mount point>`
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

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your SD card is healthy and you can delete all `.h2w` files on your SD card.

:::

::: danger

Jeśli test pokazuje inne wyniki, karta SD może być uszkodzona, i być może będziesz musiał ją wymienić!

:::

::::

:::: tab name="macOS" os="macos"

### Sekcja I - Formatowanie karty SD za pomocą SD Formatter

::: tip

Ta sekcja formatuje kartę SD do specyfikacji przez SD Card Association. Może to naprawić wiele problemów, które mogą wystąpić podczas uruchamiania aplikacji homebrew.

:::

::: danger

Wszystkie karty 64GB lub większe zostaną sformatowane do systemu plików `exFAT` w tym procesie. _Musisz_ postępować zgodnie z sekcją II, aby przeformatować do `FAT32`.

:::

1. Download the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/)
    - Accept the End User License Agreement to start the download
1. Run `Install SD Card Formatter` (the `.mpkg` file) in the downloaded `.zip` file
1. Run `SD Card Formatter`
1. Wybierz swoją kartę SD
1. Upewnij się, że pole wyboru `Quick Format` jest zaznaczone
1. Rozpocznij proces formatowania

### Section II - Formatting your SD card with Disk Utility

Ta sekcja formatuje karty SD większe niż 32GB na FAT32.

::: tip

Jeśli karta SD ma pojemność 32GB lub mniej, należy przejść do sekcji III.

:::

#### OS X El Capitan (10.11) i później

1. Uruchom aplikację na dysku
1. Wybierz `Show All Devices` w panelu `View`
1. Wybierz kartę SD z paska bocznego
    - Upewnij się, że wybrałeś właściwe urządzenie, w przeciwnym razie możesz przypadkowo usunąć zły napęd!
1. Kliknij `Erase` na górze
1. Upewnij się, że `Format` jest ustawiony na `MS-DOS (FAT32)`
    - Na El Capitan (10.11) przez Katalinę (10.15) wybierz `MS-DOS (FAT)`
1. Upewnij się, że `Scheme` jest ustawiony na `Master Boot Record`
    - Jeśli `Scheme` nie pojawia się, kliknij `Cancel` i upewnij się, że wybrano urządzenie zamiast głośności
1. Kliknij `Erase` a potem `Close`

#### OS X Josemite (10.10) i wcześniej
1. Uruchom aplikację na dysku
1. Wybierz kartę SD z paska bocznego
    - Upewnij się, że wybrałeś właściwe urządzenie, w przeciwnym razie możesz przypadkowo usunąć zły napęd!
1. Kliknij `partition` na górze
    - Jeśli `partition` nie pojawia się, upewnij się, że wybrano urządzenie zamiast głośności
1. Upewnij się, że `Partition` jest ustawiona na `1 partition`
1. Upewnij się, że `Format` jest ustawiony na `MS-DOS (FAT)`
1. Z przycisku Opcje (poniżej tablicy partycji), wybierz `Master Boot Record`.
1. Kliknij `OK` -> `Apply` -> `Partition`

### Sekcja III – Używanie F3
1. Otwórz terminal
1. Zainstaluj F3 z brew poprzez uruchomienie `brew install f3`
    - Jeśli nie masz brew, zainstaluj go z instrukcjami na [brew.sh](https://brew.sh)
1. Z kartą SD włożoną i zamontowaną, uruchom `f3write <your sd card mount point>`
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
1. Uruchom `f3read <your sd card mount point>`
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

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your SD card is healthy and you can delete all `.h2w` files on your SD card.

:::

::: danger

Jeśli test pokazuje inne wyniki, karta SD może być uszkodzona, i być może będziesz musiał ją wymienić!

:::

::::

:::::

::: tip

You can now restore the contents of your SD card and continue.

:::

