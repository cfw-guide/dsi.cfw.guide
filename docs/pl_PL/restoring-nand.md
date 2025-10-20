# Przywracanie kopii zapasowej NAND

::: danger

OSTRZEŻENIE! To jest _**niebezpieczne**_. Nawet podążając za tymi krokami, nadal istnieje potencjał do zablokowania DSi, ponieważ NAND jest bardzo niskiej jakości, zwłaszcza jeśli flashujesz wiele razy! Powinno to być stosowane tylko w ostateczności!

:::

::: tip

Nie pomijaj _niczego_ na tej stronie, każda wpadka może niesamowicie zwiększyć szansę zablokowania twojego DSi.

:::

Po pierwsze, kilka bezpieczniejszych alternatyw dla tego:

- Instalacja DSiWare może być wykonana za pomocą hiyaCFW lub TWiLight Menu++
- Odzyskiwanie zdjęć może zostać dokonane poprzez użycie [ninfs](https://github.com/ihaveamac/ninfs/releases), w kombinacji z hiyaCFW albo TWiLight Menu++, jeżeli chcesz je na konsoli. Najnowsza wersja HiyaCFW Helper pozwala na kopiowanie twoich zdjęć z twojego NAND-u do SDNAND-u podczas ustawania
- Odzyskiwanie konfiguracji przycisków Unlaunch może zostać dokonane poprzez menu Unlaunch, które może być otworzone przez przytrzymanie <kbd class="face">A</kbd> + <kbd class="face">B</kbd> podczas uruchamiania konsoli
- Uruchamianie w Unlaunch skutkujące błędem? Wysuń swoją karte SD i spróbuj ponownie uruchomić system. Jeśli zadziała, to jest to błąd na twojej karcie SD i przywrócenie kopii zapasowej NAND tego nie naprawi
- "An error has occured..." podczas uruchamiania to prawdopodobnie błąd hiyaCFW i nie jest powiązany z twoim NAND-em, zobacz [FAQ hiyaCFW & Rozwiązywanie Problemów](https://wiki.ds-homebrew.com/hiyacfw/faq) na Wiki DS-Homebrew po więcej informacji
- Jakiekolwiek błędy w TWiLight Menu++ są niepowiązane i powinieneś przeinstalować TWiLight Menu++ lub poprosić o pomoc na [Discordzie](https://ds-homebrew.com/discord)
- Odinstalowanie Unlauncha, czy to poprzez wgrywanie NAND-u czy użycie deinstalatora, powinno być unikane, chyba że jest to absolutnie konieczne, możesz ustawić klucze autobootu na "Launcher" i DSi będzie jak nowy

Jedyną rzeczą, którą powinieneś zrobić ze swoją pamięcią NAND jest instalacja Unlaunch. W przeciwnym razie należy korzystać z innych rozwiązań.

## Wymagania

- Twoja kopia zapasowa NAND-u **z tego samego DSi**
- Najnowsze wydanie [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Sposób uruchamiania homebrew z dostępem NAND, takim jak Unlaunch lub Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), aby sprawdzić kopie zapasową twojego NAND-u (Pobierz 'Windows Gaming Version')
  - Użytkownicy macOS i Linux mogą użyć [WINE](https://winehq.org) do uruchomienia $gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Zrzucenie BIOS do użycia w no$gba

1. Wypakuj `dsibiosdumper.nds` z archiwum `dsibiosdumper.zip` i przenieś je gdziekolwiek na twoją kartę SD
2. Włącz konsolę przytrzymując <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
   - To powinno uruchomić Unlaunch Filemenu
3. Uruchom dsibiosdumper z Unlaunch Filemenu
4. Naciśnij <kbd class="face">A</kbd> aby zrzucić BIOS do karty SD
5. Naciśnij <kbd>START</kbd> aby wyjść z dsibiosdumpera

## Testowanie kopii zapasowej NAND

Bardzo ważne jest, aby sprawdzić, czy kopia zapasowa NAND działa przed próbą przywrócenia jej na konsolę, jeśli pokaże zablokowanie w no$gba, najprawdopodobniej zablokuje również konsolę.

1. Wypakuj `NO$GBA.EXE` z `no$gba-w.zip` do folderu na twoim komputerze
2. Skopiuj swoją kopię zapasową NAND-u do folderu, w którym jest `NO$GBA.EXE` i zmień jej nazwę na `DSI-1.MMC`
3. Skopiuj `bios7i.bin` i `bios9i.bin` do folderu, w którym jest `NO$GBA.EXE` i nazwij je odpowiednio `BIOSDSI7.ROM` oraz `BIOSDSI9.ROM`.
4. Uruchom `NO$GBA.EXE`
5. Kliknij `Options` > `Emulation Setup`, aby otworzyć okno Ustawień Emulacji
6. Zmień `Reset/Startup Entrypoint` na `GBA/NDS BIOS (Nintendo Logo)`
7. Zmień `NDS Mode/Colors` na `DSi (retail/16MB)`
8. Kliknij `Save Now`
9. Uruchom jakikolwiek ROM Nintendo DS (plik `.nds`)

Jeżeli no$gba załaduje menu DSi (albo menu plików Unlaunch), to kontynuuj to następnej sekcji. Jeżeli pokaże jakikolwiek błąd _**to nie wgrywaj tej kopii zapasowej**_!

## Odinstalowywanie Unlaunch z twojej kopii zapasowej NAND-u (opcjonalne)

Przeczytaj to, jeśli zrzuciłeś swój NAND, bo zainstalowaniu Unlaunch i chciałbyś odinstalować Unlaunch ze swojego systemu. Jeśli nie próbujesz odinstalować Unlaunch, **nie** musisz wykonać tę sekcję.

1. Pobierz najnowszą wersję [Unlaunch](https://problemkaputt.de/unlaunch.zip)
2. Wypakuj `UNLAUNCH.DSI` z `unlaunch.zip`
3. Uruchom `UNLAUNCH.DSI` w no$gba i uruchom go z slot'u Karty Gry
   - To powinno uruchomić instalator Unlaunch, który wygląda podobnie do menu plików Unlaunch
4. Wybierz `Odinstaluj`
5. Po zakńczeniu wybierz `Power down`
6. Uruchom jakikolwiek ROM Nintendo DS, i upewnij się, że twoje menu DSi ładuje się i działa poprawnie

Jeżeli no$gba pokaże jakikolwiek błąd zamiast ładowania menu DSi, _**nie wgrywaj tej kopii zapasowej**_! Jeżeli masz starszą kopie zapasową NAND-u możesz spróbować użyć go. **Nie** próbuj odinstalowywać Unlaunch używając jego dezinstalatora na konsoli, jest bardzo prawdopodobne, że spowoduje to awarię twojego DSi.

## Wgrywanie kopii zapasowej NAND (Urządzenie)

::: danger

Upewnij się, że przeczytałeś powyższe kroki, bo tu zaczyna się to robić niebezpieczne. Jeżeli byłeś tu bezpośrednio skierowany bez czytania tego powyżej, wróć do góry tej strony i przeczytaj ją całą.

:::

::: danger

Upewnij się, że twój system Nintendo DSi jest dobrze naładowany przed rozpoczęciem tej sekcji.

:::

1. Po włożeniu karty SD włącz Nintendo DSi, trzymając <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
2. Uruchom SafeNANDManager
3. Wciśnij przycisk `begin NAND restore`
4. Po zakończeniu przywracania, naciśnij <kbd>START</kbd>, aby wyłączyć DSi

Twój NAND powinien być teraz przywrócony.

## Wgrywanie kopii zapasowej NAND (Hardmod)

Jeżeli nie możesz uruchomić swojego Nintendo DSi, hardmod jest jedynym sposobem na przywrócenie kopii zapasowej NAND-u. Najlepszym poradnikiem, jaki obecnie istnieje, jest [poradnik hardmod'a Nintendo DSi na Wiki DS-Homebrew](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
