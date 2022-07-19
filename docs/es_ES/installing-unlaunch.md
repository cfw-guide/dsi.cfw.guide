---
title: Instalar Unlaunch
---

::: danger

Si aún no lo has hecho, por favor, haz una [copia de seguridad de la NAND](dumping-nand.html). Si bien las probabilidades son escasas, Unlaunch puede bloquear totalmente tu consola de forma accidental. Una copia de respaldo de la NAND y [modificación del hardware](https://wiki.ds-homebrew.com/ds-index/hardmod) te permiten restaurar esta copia de respaldo, siempre y cuando sepas como soldar.

:::

::: warning

Asegúrate de que tu consola está cargada mientras sigues estos pasos. Si el sistema se apaga repentinamente en medio del proceso, podría causar daños graves.

:::

::: warning

Unlaunch no es compatible con consolas de desarrollo de Nintendo DSi.

:::

## Sección I - Preparación de la tarjeta SD

::: tip

¿Estás usando Windows, Linux o macOS? Puedes usar [Lazy DSi Downloader](lazy-dsi-downloader.html) para configurar automáticamente tu tarjeta SD.

:::

1. Descarga la última version de [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Enlace alternativo](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), si el de arriba no funciona
1. Extrae `UNLAUNCH.DSI` del archivo `unlaunch.zip`, y colócalo en cualquier lugar de tu tarjeta SD
1. Comprueba que aún tienes TWiLight Menu++ en tu tarjeta SD
   - Si no estás seguro, sigue las instrucciones de la [guía de instalación de TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## Sección II - Instalar/Actualizar Unlaunch

1. Abre TWiLight Menu++
   - Si esta es tu primera vez instalando Unlaunch, lanza TWiLight Menu++ a través del exploit que utilizaste anteriormente
   - Si ya has instalado Unlaunch y lo que quieres es actualizarlo, mantén presionados <kbd class="face">A</kbd> y <kbd class="face">B</kbd> mientras enciendes la consola, y escoge la opción `TWiLight Menu++`
   - Si aparecen varias opciones con el nombre `TWiLight Menu++`, escoge la opción en la que se muestra `BOOT.NDS` al final de la ruta en la pantalla inferior
      - Esto sucede debido a que tienes instalada una versión antigua de TWiLight Menu++. A menos que lo estés haciendo a propósito, sugerimos que [actualices tu instalación](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
1. Entra en la configuración de TWiLight Menu++
   - Por defecto, puedes entrar en los ajustes presionando `SELECT` y tocando el pequeño botón con un ícono de DS en la parte inferior de la pantalla táctil. Si has cambiado el tema, consulta el manual de TWiLight Menu++ para saber como entrar en los ajustes
1. Presiona <kbd class="l">L</kbd>/<kbd class="r">R</kbd> o <kbd class="face">X</kbd>/<kbd class="face">Y</kbd> hasta que llegues a la sección `Ajustes de Unlaunch`.
1. Si quieres cambiar el la imágen que Unlaunch utiliza como fondo. selecciona la opción `Fondo` y elige el que quieras.
   - Si quieres crear tu propio fondo para Unlaunch, consulta la [página en la Wiki de DS-Homebrew](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds).
1. Si quieres mantener la música y los sonidos del Menú DSi, así como la pantalla de Salud y Seguridad al usar el menú original de la consola, entonces `desactiva` la opción `Parches del Launcher`.
   - Hacer esto eviará el poder saltar el bloqueo regional y la incompatibildiad de flashcarts.
1. Sal de la Configuración de TWiLight Menu++
1. En el menú de navegación de archivos, ejecuta la aplicación `Unlaunch DSi Installer`.
1. Selecciona la opción "Install now"
   - Si Unlaunch se congela y te muestra el mensaje `ERROR: MISMATCH IN FAT COPIES`, por favor revisa la página de [solución de problemas](troubleshooting.html)
1. Cuando todo esté listo, reinicia el sistema

Si ves el sistema de archivos de Unlaunch en este punto, significa que has modificado exitosamente tu Nintendo DSi.
- Si en cambio ves una pantalla en negro, por favor revisa la página de [solución de problemas](troubleshooting.html)

## Sección III - Configuración posterior

Por defecto, Unlaunch inicia su sistema de archivos al encender la consola, pero esto puede ser cambiado para iniciar lo que desees.

1. Enciende tu consola mientras mantienes pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>.
   - Esto deberia iniciar el sistema de archivos de Unlaunch.
   - Si sólo se muestra el fondo, o si no se muestran archivos de la tarjeta SD (ej.: `TWiLight Menu++`), necesitarás [reformatear tu tarjeta SD](sd-card-setup.html)
1. Ve a `OPTIONS` y echa un vistazo a las opciones disponibles.
   - La opción <kbd class="face">A</kbd> + <kbd class="face">B</kbd> está configurada para inciar el sistema de archivos de Unlaunch. Esta opción está bloqueada y no puede ser cambiada.
   - Las opciónes `NO BUTTON` y `BUTTON A / B / X / Y` pueden ser modificadas como quieras para escoger qué cargará tu consola al encenderse dependiendo de los botones que mantengas persionados. Puedes configurar estas opciones para iniciar cualquier título DSiWare, Homebrew, la ranura Slot-1, Wifiboot o el sistema de archivos de Unlaunch.
      - Para TWiLight Menu++, escoge `TWiLight Menu++`
      - Para que alguna de estas opciones inicie el Menú DSi original, selecciona el archivo `Launcher`.
   - La opción `LOAD ERROR` es en lo que tu DSi iniciará si lo que tú hayas configurado falla, como por ejemplo, una archivo en la tarjeta SD cuando esta no está en la consola.
1. Selecciona `SAVE & EXIT` para guardar la configuración, luego, apaga la consola.

## Sección IV - Limpiar la tarjeta SD

::: tip

Esta sección es opcional y solo sirve para mantener ordenada la tarjeta SD y remover archivos que no necesites.

:::

:::: tabs

::: tab name="Memory Pit" default

- Elimina el archivo `sd:/private/ds/app/484E494A/pit.bin` de tu tarjeta SD
   - Si `tip.bin` aún existe, renómbralo de vuelta a `pit.bin`
- Ahora puede restaurar la carpeta `DCIM` que se encontraba en la carpeta raíz de su tarjeta SD, si esta carpeta existía
- Elimina el archivo `UNLAUNCH.DSI` de tu tarjeta SD

:::

::: tab name="Flipnote Lenny"

- Elimina los archivos `800031_104784BAB6B57_000.ppm` y `T00031_1038C2A757B77_000.ppm` de dentro de las siguientes carpetas:
   - `sd:/private/ds/app/4B47554A/001` (Japón)
   - `sd:/private/ds/app/4B475545/001` (EEUU)
   - `sd:/private/ds/app/4B475556/001` (Europa/Australia)
   - También puedes eliminar las carpetas de otras regiones que no sean la tuya
- Elimina el archivo `UNLAUNCH.DSI` de tu tarjeta SD

:::
