---
title: Zrzucanie NAND
---

Ta strona służy do tworzenia kopii zapasowej NAND, która jest kopią danych znajdujących się w pamięci wewnętrznej Nintendo DSi. Można jej użyć do skonfigurowania hiyaCFW i NO$GBA.

Bardzo zalecamy to zrobić. Kopia zapasowa NAND może być użyteczna w przypadku wystąpienia awarii.
{: .notice--primary}

## Sekcja I - Konfiguracja karty SD

Korzystasz z Windows, Linux czy macOS? Użyj [Lazy DSi Downloader](lazy-dsi-downloader), aby automatycznie skonfigurować kartę SD.
{: .notice--info}

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

Skrót SHA1 `nand.bin` nie będzie odpowiadał skrótowi zapisanemu w `nand.bin.sha1`. Dzieje się tak, ponieważ dumpTool dodaje dodatkowe dane znane jako stopka NO$GBA do pliku `nand.bin` po obliczeniu skrótu SHA1. Możesz użyć [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases), aby utworzyć kopię bez tego elementu.
{: .notice--warning}

Przejdź do [Instalacja Unlaunch](installing-unlaunch) (Opcjonalnie)
{: .notice--info}
