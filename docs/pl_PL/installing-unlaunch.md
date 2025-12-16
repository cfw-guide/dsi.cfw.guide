# Instalacja Unlaunch

You are about to install Unlaunch, a permanent bootcode exploit which gets installed onto the DSi console itself, allowing full control of the console on boot, and as a result, allows homebrew applications full access to the hardware without restrictions from DSi system apps or DSiWare titles.

::: danger

Jeżeli nadal jeszcze tego nie zrobiłeś, proszę [Zrzuć NAND](dumping-nand.html). A NAND backup + [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) (or a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod), provided you know how to solder) would allow you to restore this backup in case the console gets bricked afterwards.

:::

::: danger

Installing or uninstalling Unlaunch, while safe, writes to the console's NAND, so there's a small chance to brick your console!

:::

::: warning

Jeżeli nie masz dostępu do komputera, albo jeżeli twój komputer ma zainstalowany ChromeOS, to proszę nie instaluj Unlaunch. A PC (running Windows, Linux, or macOS) is required to ensure the SD Card used is formatted in a way compatible with Unlaunch.

:::

::: warning

Unlaunch nie jest kompatybilny z konsolami deweloperskimi Nintendo DSi.

:::

## Sekcja I - Konfiguracja karty SD

1. Download the latest version of [Safe Unlaunch installer](https://github.com/edo9300/unlaunch-installer/releases/latest/download/unlaunch-installer.dsi)
2. Place `unlaunch-installer.dsi` anywhere on your SD card

## Section II - Updating DSi system version

::: tip

If Unlaunch is already installed and you are looking to update or uninstall Unlaunch, skip to Section III

:::

1. In the DSi Menu, launch the System Settings application (the icon is gray and has a white wrench)
   - The version will be shown on the bottom-right of the top screen
   - If the version is `Ver 1.4.2`, proceed with performing a system update
   - If the version is _not_ `Ver 1.4.2`, go straight to [Section III](#section-iii-installing-updating-unlaunch)
2. Touch the number `4` to go to the fourth page
3. Touch `System Update`
   - It is the third option if your console isn't in your native language
4. Touch `Yes` when asked to connect to the internet and update
   - It is the left-side option if your console isn't in your native language
   - If the version is already up to date, go straight to [Section III](#section-iii-installing-updating-unlaunch)
5. Touch the `Next` button
   - It is the right-side option if your console isn't in your native language
6. Touch the `I Accept` button
   - It is the top option if your console isn't in your native language
7. Touch the `OK` button
   - It is the bottom right-side option if your console isn't in your native language
8. Wait for the system to update, and reboot when finished

## Section III - Installing/Updating Unlaunch

1. Open the menu you have installed (**TW**i**L**ight Menu++ or akmenu-next)
   - If this is your first time installing Unlaunch, relaunch the menu through the [exploit that you used](launching-the-exploit.html)
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting
2. In the menu where the icons are listed, launch `Safe Unlaunch installer` (listed as `unlaunch-installer.dsi` depending on which menu is used and/or how it's displayed)
3. Press the <kbd class="face">A</kbd> button after the `WARNING` message appears
   - If the battery LED is red, it'll tell you to plug in the console. Select `Yes` to continue after plugging it in
4. If you want to change the default background, select `[Custom background]` and press <kbd class="face">A</kbd> to select the one you want to use
   - Three custom backgrounds are included, but you can add more into a folder called `backgrounds` on the SD card root (create the folder if it doesn't exist)
5. If you want to keep both the DSi splash (with health and safety message) and the sound in the DSi system menu, select `Enable sound and splash` and press <kbd class="face">A</kbd> to turn it on
6. If Unlaunch is already installed, select the `Uninstall unlaunch` or `Restore launcher tmd` option, and press <kbd class="face">A</kbd> once it's done
   - If you only want to **uninstall** Unlaunch, you can stop here
7. Select the `Install unlaunch` option, and press the <kbd class="face">A</kbd> button
8. Press the <kbd class="face">A</kbd> button once installation is done
9. Press <kbd class="face">POWER</kbd> to reboot your system

Jeśli w tym momencie zobaczysz manu plików Unlaunch, pomyślnie zmodowałeś Nintendo DSi.

- Jeżeli zobaczysz czarny ekran, proszę zobacz na stronę [Rozwiązywanie Problemów](troubleshooting.html)

## Section IV - Post-Unlaunch configuration

Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed to launch whatever you want.

1. Włącz konsolę przytrzymując <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
   - To powinno uruchomić Unlaunch Filemenu
   - If nothing is listed, or if only the NAND contents are listed (even after scrolling down), then you'll need to [reformat the SD card](sd-card-setup.html)
2. Przejdź do `OPTIONS` oraz sprawdź dostępne opcje
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> jest zakodowane, aby uruchomić w menu Unlaunch i jako takie nie może być zmienione
   - Opcje `NO BUTTON` i `BUTTON A / B / X / Y` mogą być ustawione dowolnie i zdecydują co załaduje twoje DSi podczas uruchamiania, gdy te przyciski są przytrzymane. You can select any DSiWare, homebrew (including whichever menu you installed), the Slot-1 card, wifiboot, or Unlaunch's Filemenu
     - Dla oryginalnego Menu DSi wybierz `Launcher`
   - Twoje DSi załaduje `LOAD ERROR` jeżeli ładowanie czegokolwiek co wybrałeś, nie powiedzie się, np. jeśli karta SD nie jest włożona
3. Wybierz `SAVE & EXIT` aby zapisać swoje ustawienia, po czym wyłącz swoje DSi

## Section V - Cleaning up your SD card

::: tip

Ta sekcja jest opcjonalna i służy tylko do wyczyszczenia niepotrzebnych plików na karcie SD.

:::

:::: tabs

:::tab default Memory Pit

- Usuń plik `sd:/private/ds/app/484E494A/pit.bin` ze swojej karty SD
- Zmień nazwę `tip.bin` z powrotem na `pit.bin` i nie ruszaj go
- Możesz teraz przywrócić katalog `DCIM`, który był na początku twojej karty SD
- Delete the `unlaunch-installer.dsi` file from your SD card

:::

:::tab Flipnote Lenny

- Usuń pliki `800031_104784BAB6B57_000.ppm` i `T00031_1038C2A757B77_000.ppm` z następujących katalogów:
  - `sd:/private/ds/app/4B47554A/001` (Japonia)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europa/Australia)
  - Możesz również usunąć wszystkie foldery dla regionów poza twoim
- Delete the `unlaunch-installer.dsi` file from your SD card

:::
