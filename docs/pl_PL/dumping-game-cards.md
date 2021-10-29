---
---

# Zrzucanie kart gry

This section is for dumping Game Cards using GodMode9i so they can be played on emulators, flashcards, or your SD card via nds-bootstrap.

## Wymagania
- The Game Card of the title you would like to dump
- Nintendo DSi z zainstalowanym[Unlaunch](installing-unlaunch)

## Instrukcje
### Sekcja I - Konfiguracja karty SD

::: tip

Korzystasz z Windows, Linux czy macOS? Użyj [Lazy DSi Downloader](lazy-dsi-downloader), aby automatycznie skonfigurować kartę SD.

:::

1. Pobierz najnowszą wersję [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)
1. Wyodrębnij `GodMode9i.nds` z archiwum GodMode9i i umieść go gdziekolwiek na karcie SD

### Sekcja II – Instrukcje Nintendo DSi
1. Włącz konsolę trzymając <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
   - To powinno uruchomić Unlaunch Filemenu
1. Uruchom GodMode9i z Unlaunch Filemenu
1. Ensure the Game Card is inserted into the console
1. Wybierz opcję "NDS GAMECARD" w GodMode9i
1. Wybierz, czy chcesz wypełnienie czy nie:
   - Pełne: Padding przyłączony
   - Przycięty: Paddowanie usunięty
1. Repeat steps 3-5 for all Game Cards you wish to dump

::: tip

The dumped Game Cards will be found in `sd:/gm9i/out`.

:::
