# Zrzucanie NAND

Ta strona służy do tworzenia kopii zapasowej NAND, która jest kopią danych znajdujących się w pamięci wewnętrznej Nintendo DSi. Może być użyta do konfiguracji hiyaCFW, a także no$gba i melonDS w celu emulacji DSi.

::: tip

Upewnij się, że karta SD ma co najmniej 250MB wolnego miejsca, w przeciwnym razie pojawi się komunikat o błędzie.

:::

::: tip

Jest to bardzo zalecane. Kopia zapasowa NAND może być użyta jako punkt przywracania w przyszłości w przypadku awarii.

:::

## Sekcja I - Konfiguracja karty SD

::: tip

Jeśli już pobrałeś narzędzie dumpTool z innej sekcji tego poradnika, możesz pominąć tę sekcję.

:::

1. Pobierz najnowsze wydanie [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Przenieś `dumpTool.nds` gdziekolwiek na twoją kartę SD

## Sekcja II – Dumping NAND

1. Launch `dumpTool` through the menu you have installed
   - If you've used an exploit to launch it, and you're already in dumpTool, ignore this step
   - If Unlaunch is already installed and you we're directed to this page from the [Get Started](get-started.html#section-ii-checking-if-unlaunch-is-already-installed) page, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting
2. Naciśnij przycisk <kbd class="face">A</kbd> na swoim Nintendo DSi, aby zacząć zrzucać swój NAND
   - Kopia zapasowa NAND zajmuje zazwyczaj około 7 minut
3. Kiedy kopiowanie NAND zostanie zakończona, naciśnij przycisk <kbd>START</kbd> na swoim Nintendo DSi, aby wyjść z dumpTool
4. Wyłącz konsolę i włóż kartę SD z powrotem do komputera
5. On the SD card, go to where `dumpTool.nds` is placed, and you'll see a new folder called `DT######...` which contains the NAND backup
   - If dumpTool is downloaded from the [Get Started](get-started.html) page, it'll be named `boot.nds`
   - Inside the folder is `nand.bin` which is the backup itself, and `nand.bin.sha1` which is the SHA1 hash of the backup
6. Store the `DT######...` folder somewhere safe, where you won't lose it
   - Jeśli to możliwe, utwórz wiele kopii zapasowych na różnych urządzeniach pamięci masowej
   - Po wykonaniu kopii zapasowej w innym miejscu, możesz usunąć ją z karty SD
7. If you've started dumpTool via an exploit, and was downloaded from the [Get Started](get-started.html) page, delete `boot.nds` from the SD card root

::: warning

Hasz SHA1 `nand.bin` nie będzie zgodny z haszem zapisanym w `nand.bin.sha1`. Jest tak ponieważ dumpTool dodaje dodatkowe dane znane jako stopka no$gba do pliku `nand.bin` po kalkulacji haszu SHA1. Możesz użyć [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) aby utworzyć kopię bez stopki.

:::

::: tip

Continue to [Choosing a Menu](choosing-a-menu.html)

:::
