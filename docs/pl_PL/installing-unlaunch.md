---
title: Instalacja Unlaunch
---

::: danger

If you have not yet done so, please follow [Dumping NAND](dumping-nand.html). While the chances are slim, Unlaunch can accidentally brick your Nintendo DSi. A NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) would allow you to restore this backup, provided you know how to solder.

:::

::: warning

Make sure your console is charged when following this process. A sudden power loss could result in serious damage.

:::

::: warning

Unlaunch is not compatible with Nintendo DSi development consoles.

:::

## Sekcja I - Konfiguracja karty SD

::: tip

Korzystasz z Windows, Linux czy macOS? Use [Lazy DSi Downloader](lazy-dsi-downloader.html) to automatically setup your SD card.

:::

1. Pobierz najnowszą wersję [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Mirror link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), jeśli powyższe nie działa
1. Wypakuj `UNLAUNCH.DSI` z archiwum `unlaunch.zip` i umieść go w dowolnym miejscu na swojej karcie SD
1. Zweryfikuj TWiLight Menu++ na karcie SD
   - If you are unsure, follow the instructions from the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## Sekcja II - Instalacja/aktualizacja Unlaunch

1. Otwórz TWiLight Menu++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the [exploit that you used](launching-the-exploit.html)
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the option labeled `TWiLight Menu++`
   - If several options are labeled `TWiLight Menu++`, select the option in where `BOOT.NDS` is shown at the end of the path on the bottom screen
      - This happens because you are running an older version of TWiLight Menu++, unless you're doing it on purpose, is suggested that you [update your installation](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
1. Uruchom Ustawienia TWiLight Menu++
   - If you haven't changed your theme, press `SELECT` and touch the small DS icon on the bottom of the touch screen. Otherwise, see the TWiLight Menu++ Manual
1. Naciśnij <kbd class="l">L</kbd> / <kbd class="r">R</kbd> lub <kbd class="face">X</kbd> / <kbd class="face">Y</kbd>, aż dojdziesz do strony `Ustawienia Unlaunch`
1. Jeśli chcesz zmienić obraz tła Unlauncha, wybierz `Tło` i wybierz to, które chcesz
   - If you want to create your own Unlaunch background, see the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Exit TWiLight Menu++ Settings
1. In the file navigation menu, launch `Unlaunch DSi Installer`
   - If you see two black screens after launching, download [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start `Unlaunch.dsi`    
     This method does not enable Unlaunch to use custom patches and background
1. Select the "install now" option
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting.html) page
1. When completed, reboot your system

If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.
- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

## Sekcja III - Konfiguracja po-Unlaunch

Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed launch whatever you want.

1. Włącz konsolę przytrzymując <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
   - To powinno uruchomić Unlaunch Filemenu
   - If only the background is shown, or if no files from the SD card are shown (ex. `TWiLight Menu++`), then you'll need to [reformat the SD card](sd-card-setup.html)
1. Przejdź do `OPTIONS`i spójrz na dostępne opcje
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> jest zakodowane, aby uruchomić w menu Unlaunch i jako takie nie może być zmienione
   - Opcje `NO BUTTON` i `BUTTON A / B / X / Y` mogą być ustawione jakkolwiek chcesz i będą wybierać co twój DSi załaduje przy starcie w zależności od tego, które przyciski są trzymane. Możesz wybrać dowolne DSiWare, homebrew, kartę Pola-1, wifiboot lub menu plików Unlaunch
      - For TWiLight Menu++, select  `TWiLight Menu++`
      - Dla oryginalnego menu DSi wybierz `Launcher`
   - `LOAD ERROR` jest tym, co DSi pokaże, jeśli załadowanie plików się nie powiedzie, np. karta SD nie została włożona
1. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## Sekcja IV - Czyszczenie karty SD

::: tip

This section is optional and only serves for keeping your SD card tidy of files you won't need.

:::

:::: tabs

::: tab name="Memory Pit" default

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
   - If `tip.bin` still exists, then rename it back to `pit.bin`
- You can now restore the `DCIM` folder that was on the root of your SD card, if this folder existed
- Usuń plik `UNLAUNCH.DSI` z karty SD

:::

::: tab name="Flipnote Lenny"

- Delete the `800031_104784BAB6B57_000.ppm` and `T00031_1038C2A757B77_000.ppm` files from inside the following folders:
   - `sd:/private/ds/app/4B47554A/001` (Japan)
   - `sd:/private/ds/app/4B475545/001` (USA)
   - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
   - You can also delete the entire folders for the regions besides your own
- Usuń plik `UNLAUNCH.DSI` z karty SD

:::
