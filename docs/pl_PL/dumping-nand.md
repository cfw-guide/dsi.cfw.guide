---
title: Zrzucanie NAND
---

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

Hash SHA1 `nand.bin` nie będzie odpowiadał hash'owi zapisanemu w `nand.bin.sha1`. Dzieje się tak, ponieważ dumpTool dodaje dodatkowe dane znane jako footer no$gba do pliku `nand.bin` po obliczeniu hash'u SHA1. Możesz użyć [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases), aby utworzyć kopię bez tego elementu.

:::

::: tip

(Opcjonalnie) Przejdź do [Instalacja Unlaunch'a](installing-unlaunch.html)

:::
