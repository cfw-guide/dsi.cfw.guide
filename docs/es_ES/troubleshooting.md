# Solución de problemas

## Unlaunch

### Unlaunch freezes at `MISMATCH IN FAT COPIES`

twlnf tiene un error critico en el que no actualiza correctamente toda la NAND después de modificarla, lo que hace que ciertos homebrew (como el instalador de Unlaunch) tire error.

To fix this, open [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), and select `Fix FAT copy mismatch`.

### No hay audio o pantalla de inicio al ejectar Launcher (el menú original de DSi) usando Unlaunch

El desarrollador de Unlaunch (nocash) parcheó intencionalmente el sonido del menú y la pantalla de inicio por defecto. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) with `Enable sound and splash` turned on, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Encender la consola solo muestra una pantalla en negro después de instalar Unlaunch

Intenta extraer la tarjeta SD y encender la consola nuevamente. If it still only shows a black screen, you may need to flash your NAND via either [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) or a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Powering off in the DSi Menu and/or System Settings takes 5-10 seconds

The only solutions are starting the DSi Menu and/or System Settings with the SD card ejected, installing [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing), or uninstalling Unlaunch.

### Se inicia una aplicación o salta el sistema de archivos de Unlaunch al encender la consola, estoy atascado

This was likely caused by choosing the wrong app for the `NO BUTTON` option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to `OPTIONS`, and set `NO BUTTON` to whatever your preference is.

### Otros problemas de Unlaunch

If Unlaunch displays `Clusters too large`, `Bad VBR`, `Bad MBR`, or doesn't display any applications while the SD card is inserted, your SD card likely wasn't formatted correctly. Re-follow [SD Card Setup](sd-card-setup.html).

## TWiLight Menu++

For general TWiLight Menu++ troubleshooting, see its [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) page on the DS-Homebrew Wiki.

## Más asistencia

If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4) Discord server.
