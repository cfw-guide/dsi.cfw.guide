# Zrzucanie kart gry

Ta sekcja służy do zrzucania kart z grami przy użyciu GodMode9i, aby można je było odtwarzać na emulatorach, flashcardach lub na karcie SD poprzez nds-bootstrap.

## Wymagania

- Tytuł, który chcesz zrzucić
- Your Nintendo DSi console with [Unlaunch](installing-unlaunch.html) installed

## Instrukcje

### Sekcja I - Konfiguracja karty SD

1. Download the latest release of [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)
2. Extract `GodMode9i.nds` from the GodMode9i archive and place it anywhere on your SD card

### Sekcja II – Instrukcje Nintendo DSi

1. Launch GodMode9i
2. Ensure the Game Card is inserted into the console
3. Select the "NDS GAMECARD" option in GodMode9i
4. Select what you want to dump
   - The "Trimmed" options for the ROM will dump a smaller file that can save SD card space, however they won't work for most patches such as ROM hacks
5. Repeat steps 2-4 for all Game Cards you wish to dump

::: tip

The dumped Game Cards will be found in `sd:/gm9i/out`.

:::
