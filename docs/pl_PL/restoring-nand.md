# Przywracanie kopii zapasowej NAND

::: danger
OSTRZEŻENIE! To jest ***niebezpieczne***. Nawet podążając za tymi krokami, nadal istnieje potencjał do zablokowania DSi, ponieważ NAND jest bardzo niskiej jakości, zwłaszcza jeśli flashujesz wiele razy! Powinno to być stosowane tylko w ostateczności!
:::

::: tip
Nie pomiń *niczego* na tej stronie, jakikolwiek błąd znacznie zwiększa szansę na zablokowanie twojego DSi.
:::

Po pierwsze, kilka bezpieczniejszych alternatyw dla tego:
- Instalacja DSiWare może być wykonana za pomocą hiyaCFW lub TWiLight Menu++
- Odzyskiwanie zdjęć można przeprowadzić za pomocą ninfów, w połączeniu z hiyaCFW lub TWiLight Menu+++, jeśli chcesz je na konsoli
- Przywracanie konfiguracji przycisków Unlaunch można wykonać z menu Unlaunch
- Uruchamianie w Unlaunch skutkujące błędem? Wyciągnij kartę SD i spróbuj ponownie. Jeśli zadziała, to jest to błąd na twojej karcie SD i przywrócenie kopii zapasowej NAND tego nie naprawi
- "Wystąpił błąd..." podczas uruchamiania systemu to błąd hiyaCFW i nie jest związany z pamięcią NAND, zobacz stronę [troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/troubleshooting) by zdobyć więcej informacji
- Wszelkie błędy w TWiLight Menu++ są niepowiązane i powinieneś ponownie pobrać TWiLight Menu++ lub poprosić o pomoc na Discordzie
- Odinstalowanie Unlauncha, czy to poprzez flashowanie NAND czy użycie deinstalatora, powinno być unikane, chyba że jest to absolutnie konieczne, możesz ustawić klucze autobootu na "Launcher" i DSi będzie jak nowy

Jedyną rzeczą, którą powinieneś zrobić ze swoją pamięcią NAND jest instalacja Unlaunch. W przeciwnym razie należy korzystać z innych rozwiązań.

## Wymagania
- Kopia zapasowa NAND **z twojego DSi**
- Najnowsza wersja [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Sposób uruchamiania homebrew z dostępem NAND, takim jak Unlaunch lub Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), aby sprawdzić kopię zapasową NAND (Pobierz wersję dla Windows)
   - użytkownicy macOS i Linux mogą używać [WINE](https://winehq.org), aby uruchomić no$gba
- [dsibiosdumper](http://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Zrzucenie BIOS do użycia w no$gba
1. Wypakuj `dsibiosdumper.nds` z archiwum `dsibiosdumper.zip` i umieść go w dowolnym miejscu na karcie SD
2. Włącz konsolę przytrzymując <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
   - To powinno uruchomić Unlaunch Filemenu
3. Uruchom dsibiosdumper z Unlaunch Filemenu
4. Naciśnij <kbd class="face">A</kbd> aby zrzucić BIOS do karty SD
5. Naciśnij <kbd>START</kbd> aby wyjść z dsibiosdumpera

## Testowanie kopii zapasowej NAND
Bardzo ważne jest, aby sprawdzić, czy kopia zapasowa NAND działa przed próbą przywrócenia jej na konsolę, jeśli pokaże zablokowanie w no$gba, najprawdopodobniej zablokuje również konsolę.
1. Wyodrębnij `NO$GBA.EXE` z `no$gba-w.zip` do folderu na komputerze
2. Skopiuj swoją kopię zapasową NAND do folderu, w którym umieściłeś `NO$GBA.EXE` i zmień nazwę na `DSI-1.MMC`
3. Skopiuj `bios7i.bin` i `bios9i.bin` do folderu, w którym umieściłeś `NO$GBA. XE`, nazwany odpowiednio `BIOSDSI7.ROM` i `BIOSDSI9.ROM`.
4. Uruchom `NO$GBA.EXE`
5. Kliknij `Options` > `Emulation Setup` aby otworzyć okno konfiguracji Emulacji
6. Zmień `Reset/Startup Entrypoint` na `GBA/NDS BIOS (logo Nintendo)`
7. Zmień `NDS Mode/Colors` na `DSi (retail/16MB)`
8. Kliknij `OK`
9. Uruchom dowolny ROM NDS (plik `.nds`)

Jeśli no$gba załaduje menu DSi, przejdź do następnej sekcji. Jeśli pokaże jakikolwiek błąd ***nie flashuj(nie wgrywaj) tej kopii zapasowej***!

## Wgrywanie kopii zapasowej NAND (Urządzenie)

::: danger
Upewnij się, że przeczytałeś powyższe kroki, ponieważ wchodzisz na głęboką wodę. Jeśli zostałeś skierowany bezpośrednio do tego miejsca bez podążania za powyższymi wskazówkami, wróć na górę i przeczytaj całą tę stronę.
:::

::: danger
Upewnij się, że system Nintendo DSi jest dobrze naładowany przed rozpoczęciem tej sekcji.
:::

1. Po włożeniu karty SD włącz Nintendo DSi, trzymając <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
3. Uruchom SafeNANDManager
4. Naciśnij `begin NAND restore`
6. Po zakończeniu przywracania, naciśnij <kbd>START</kbd>, aby wyłączyć DSi

Twój NAND powinien być teraz przywrócony.

## Wgrywanie kopii zapasowej NAND (Hardmod)
Jeśli nie możesz uruchomić swojego Nintendo DSi, hardmod jest jedynym sposobem na przywrócenie kopii zapasowej NAND. Najlepszym przewodnikiem, który obecnie istnieje jest [ przewodnik Nintendo DSi hardmod na DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
