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

1. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Place `dumpTool.nds` anywhere on your SD card

## Sekcja II – Dumping NAND

1. Launch `dumpTool` through TWiLight Menu++
2. Naciśnij przycisk <kbd class="face">A</kbd> na swoim Nintendo DSi, aby zacząć zrzucać swój NAND
   - Kopia zapasowa NAND zajmuje zazwyczaj około 7 minut
3. Kiedy kopiowanie NAND zostanie zakończona, naciśnij przycisk <kbd>START</kbd> na swoim Nintendo DSi, aby wyjść z dumpTool
4. Wyłącz konsolę i włóż kartę SD z powrotem do komputera
5. Przechowuj tę kopię w bezpiecznym miejscu, gdzie jej nie stracisz
   - Jeśli to możliwe, utwórz wiele kopii zapasowych na różnych urządzeniach pamięci masowej
   - Po wykonaniu kopii zapasowej w innym miejscu, możesz usunąć ją z karty SD

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
