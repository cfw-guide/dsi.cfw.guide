# Instalar Unlaunch

::: warning

Si no tienes acceso a una PC, o si el sistema operativo de tu PC es ChromeOS, no instales Unlaunch. Se requiere una PC (cuyo sistema operativo sea Windows, Linux o macOS) para arreglar algunos problemas que podrían surgir después de instalar Unlanch.

:::

::: danger

If you have not yet done so, please follow [Dumping NAND](dumping-nand.html). Si bien las probabilidades son escasas, Unlaunch puede bloquear totalmente tu consola de forma accidental. A NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) would allow you to restore this backup, provided you know how to solder.

:::

::: warning

Asegúrate de que tu consola está cargada mientras sigues estos pasos. Si el sistema se apaga repentinamente en medio del proceso, podría causar daños graves.

:::

::: warning

Unlaunch no es compatible con consolas de desarrollo de Nintendo DSi.

:::

## Sección I - Configuración de la tarjeta SD

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Mirror link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), if the above doesn't work
2. Extract `UNLAUNCH.DSI` from the `unlaunch.zip` archive and place it anywhere on your SD card
3. Comprueba que aún tienes TWiLight Menu++ en tu tarjeta SD
   - If you are unsure, follow the instructions from the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## Sección II - Instalar/Actualizar Unlaunch

1. Abre TWiLight Menu++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the [exploit that you used](launching-the-exploit.html)
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the option labeled `TWiLight Menu++`
   - If several options are labeled `TWiLight Menu++`, select the option in where `BOOT.NDS` is shown at the end of the path on the bottom screen
     - This happens because you are running an older version of TWiLight Menu++, unless you're doing it on purpose, is suggested that you [update your installation](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
2. Entra en la configuración de TWiLight Menu++
   - If you haven't changed your theme, press `SELECT` and touch the small DS icon on the bottom of the touch screen. Si has cambiado el tema, consulta el manual de TWiLight Menu++ para saber como entrar en los ajustes
3. Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the `Unlaunch settings` page
4. If you want to change Unlaunch's background image, select `Background` and choose the one you want
   - If you want to create your own Unlaunch background, see the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
5. Sal de la Configuración de TWiLight Menu++
6. In the file navigation menu, launch `Unlaunch DSi Installer`
   - If you see two black screens after launching, download [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start `Unlaunch.dsi`\
     This method does not enable Unlaunch to use custom patches and background
7. Selecciona la opción "Install now"
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting.html) page
8. Al terminar, reinicia tu consola

Si en este punto ves el sistema de archivos de Unlaunch, significa que has modificado exitosamente tu Nintendo DSi.

- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

## Sección III - Configuración posterior

Por defecto, Unlaunch inicia su sistema de archivos al encender la consola, pero esto puede ser cambiado para iniciar lo que desees.

1. Enciende tu consola manteniendo pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>.
   - Esto debería iniciar el sistema de archivos de Unlaunch.
   - If nothing is listed, or if only `TWiLight Menu++` isn't listed (even after scrolling down), then you'll need to [reformat the SD card](sd-card-setup.html)
2. Navigate to `OPTIONS`, and look at the available options
   - La opción <kbd class="face">A</kbd> + <kbd class="face">B</kbd> está configurada para inciar el sistema de archivos de Unlaunch. Esta opción está bloqueada y no puede ser cambiada.
   - The `NO BUTTON` and `BUTTON A / B / X / Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. Puedes configurar estas opciones para iniciar cualquier título DSiWare, Homebrew, la ranura Slot-1, Wifiboot o el sistema de archivos de Unlaunch.
     - For TWiLight Menu++, select  `TWiLight Menu++`
     - For the original DSi Menu, select `Launcher`
   - `LOAD ERROR` is what your DSi will load if loading what you have set fails, such as the SD card not being inserted
3. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## Sección IV - Limpiar la tarjeta SD

::: tip

Esta sección es opcional y solo sirve para mantener ordenada la tarjeta SD y remover archivos que no necesites.

:::

:::: tabs

:::tab default Memory Pit

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
- Rename `tip.bin` back to `pit.bin`, and leave it intact
- You can now restore the `DCIM` folder that was on the root of your SD card
- Delete the `UNLAUNCH.DSI` file from your SD card

:::

:::tab Flipnote Lenny

- Delete the `800031_104784BAB6B57_000.ppm` and `T00031_1038C2A757B77_000.ppm` files from inside the following folders:
  - `sd:/private/ds/app/4B47554A/001` (Japan)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
  - También puedes eliminar las carpetas de otras regiones que no sean la tuya
- Delete the `UNLAUNCH.DSI` file from your SD card

:::
