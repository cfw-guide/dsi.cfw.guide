# Installazione di Unlaunch

You are about to install Unlaunch, a permanent bootcode exploit which gets installed onto the DSi console itself, allowing full control of the console on boot, and as a result, allows homebrew applications full access to the hardware without restrictions from DSi system apps or DSiWare titles.

::: danger

Se non lo hai ancora fatto, [effettua un dump della NAND](dumping-nand.html). A NAND backup + [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) (or a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod), provided you know how to solder) would allow you to restore this backup in case the console gets bricked afterwards.

:::

::: danger

Installing or uninstalling Unlaunch, while safe, writes to the console's NAND, so there's a small chance to brick your console!

:::

::: warning

Se non hai accesso a un PC, o se il PC è in esecuzione ChromeOS, allora non installare Unlaunch. A PC (running Windows, Linux, or macOS) is required to ensure the SD Card used is formatted in a way compatible with Unlaunch.

:::

::: warning

Unlaunch non è compatibile con le console di sviluppo Nintendo DSi.

:::

## Sezione I - Configurazione della scheda SD

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

1. Apri il menu che hai installato (**TW**i**L**ight Menu++ o akmenu-next)
   - Se questa è la prima volta che installi Unlaunch, riavvia il menu attraverso l'[exploit che hai usato](launching-the-exploit.html)
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

Se vedi la schermata del menu di Unlaunch a questo punto, significa che hai modificato con successo il tuo Nintendo DSi.

- Se vedi uno schermo nero, dai un'occhiata alla pagina [Risoluzione dei problemi](troubleshooting.html)

## Section IV - Post-Unlaunch configuration

Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed to launch whatever you want.

1. Accendi la console tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
   - Questo dovrebbe avviare il menu di Unlaunch
   - Se non è elencato nulla, o se solo i contenuti della NAND sono elencati (anche dopo aver scrollato verso il basso), allora avrai bisogno di [riformattare la scheda SD](sd-card-setup.html)
2. Vai a `OPTIONS`, e guarda le opzioni disponibili
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> è stato fatto in codifica fissa per avviarsi nel menu di Unlaunch, e perciò non può essere modificato
   - Le opzioni `NO BUTTON` e `BUTTON A / B / X / Y` possono essere impostate come preferisci e sceglieranno come caricare il tuo DSi all'avvio a seconda dei pulsanti che vengono premuti. Puoi selezionare qualsiasi DSiWare, homebrew (compreso qualsiasi menu installato), la scheda Slot-1, wifiboot, o il menu di Unlaunch
     - Per il menu DSi originale, seleziona `Launcher`
   - `LOAD ERROR` è quello che il tuo DSi caricherà se il caricamento di ciò che hai impostato fallisce, come ad esempio se la scheda SD non viene inserita
3. Seleziona `SAVE & EXIT` per salvare le impostazioni, e spegni il tuo DSi

## Section V - Cleaning up your SD card

::: tip

Questa sezione è facoltativa e serve solo per mantenere la scheda SD ordinata.

:::

:::: tabs

:::tab default Memory Pit

- Elimina il file `sd:/private/ds/app/484E494A/pit.bin` dalla tua scheda SD
- Rinomina `tip.bin` in `pit.bin`, e lascialo intatto
- Puoi ripristinare la cartella `DCIM` che era nella root della scheda SD
- Delete the `unlaunch-installer.dsi` file from your SD card

:::

:::tab Flipnote Lenny

- Elimina i file `800031_104784BAB6B57_000.ppm` e `T00031_1038C2A757B77_000.ppm` dall'interno delle seguenti cartelle:
  - `sd:/private/ds/app/4B47554A/001` (Giappone)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europa/Australia)
  - È inoltre possibile eliminare le cartelle per le altre regioni
- Delete the `unlaunch-installer.dsi` file from your SD card

:::
