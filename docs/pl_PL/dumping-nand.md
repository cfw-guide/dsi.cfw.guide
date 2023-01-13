---
title: Zrzucanie NAND
---

Ta strona służy do tworzenia kopii zapasowej NAND, która jest kopią danych znajdujących się w pamięci wewnętrznej Nintendo DSi. It can be used to set up hiyaCFW, as well as no$gba and melonDS for DSi emulation.

::: tip

Make sure the SD card has at least 250MB of free space, or else you'll run into an error message in dumpTool.

:::

::: tip

It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.

:::

## Sekcja I - Konfiguracja karty SD

::: tip

If you have already downloaded dumpTool from another section of this guide, you can skip this section.

:::

1. Pobierz najnowszą wersję [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Umieść `dumpTool.nds` w dowolnym miejscu na karcie SD


## Sekcja II – Dumping NAND

1. Uruchom `dumpTool` przez TWiLight Menu++
1. Naciśnij przycisk <kbd class="face">A</kbd> na swoim Nintendo DSi, aby zacząć zrzucać swój NAND
   - Kopia zapasowa NAND zajmuje zazwyczaj około 7 minut
1. Kiedy kopiowanie NAND zostanie zakończona, naciśnij przycisk <kbd>START</kbd> na swoim Nintendo DSi, aby wyjść z dumpTool
1. Wyłącz konsolę i włóż kartę SD z powrotem do komputera
1. Przechowuj tę kopię w bezpiecznym miejscu, gdzie jej nie stracisz
   - Jeśli to możliwe, utwórz wiele kopii zapasowych na różnych urządzeniach pamięci masowej
   - Po wykonaniu kopii zapasowej w innym miejscu, możesz usunąć ją z karty SD

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
