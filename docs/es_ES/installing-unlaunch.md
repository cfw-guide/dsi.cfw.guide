---
title: Instalar Unlaunch
---

::: danger

Unlaunch is not compatible with Nintendo DSi development consoles.

:::

Unlaunch es un exploit que tiene lugar al arrancar el sistema. Esto le permite tener mas privilegios que los exploits normales de títulos DSiWare como Memory Pit, lo que hace que sea capaz de hacer lo siguiente:
- Iniciar aplicaciones al encender el sistema (sea homebrew o DSiWare), con combinaciones de botones opcionales.
- Acceder a la ranura Slot-1, permitiéndote volcar cartuchos de juegos e iniciar flashcarts incompatibles con tu sistema.
- Remover el bloqueo regional en cartuchos de juegos con mejoras para Nintendo DSi o que sean exclusivos de la misma.
- Ejecutar homebrew antiguo de Nintendo DS a través de nds-bootstrap-hb.
- Protección contra bloqueos totales de la consola.
- Para los usuarios de Memory Pit (otros exploits ya son capaces de esto):
     - Compatibilidad mejorada con títulos DSiWare ejecutados desde la tarjeta SD.
     - Mejor sonido en GBARunner2.

::: danger

Si aún no lo has hecho, por favor haz una [copia de seguridad de la NAND](dumping-nand). Si bien las probabilidades son escasas, Unlaunch puede bloquear totalmente tu consola de forma accidental. Una copia de respaldo de la NAND y [modificación del hardware](https://wiki.ds-homebrew.com/ds-index/hardmod) te permiten restaurar esta copia de respaldo, siempre y cuando sepas como soldar.

:::

::: warning

Asegúrate de que tu consola está cargada mientras sigues estos pasos. Si el sistema se apaga repentinamente en medio del proceso, podría causar daños graves.

:::

## Sección I - Preparación de la tarjeta SD

::: tip

¿Utilizas Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) para configurar automáticamente tu tarjeta SD.

:::

1. Descarga la última version de [Unlaunch](https://problemkaputt.de/unlaunch.zip).
   - [Enlace alternativo](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), si el de arriba no funciona.
1. Extrae `UNLAUNCH.DSI` del archivo `unlach.zip`, y colócalo en cualquier lugar de tu tarjeta SD.
1. Comprueba que aún tienes TWiLight Menu++ en tu tarjeta SD.
   - Si no estás seguro, sigue las instrucciones en la página [Lanzar el Exploit](launching-the-exploit.html#twilight-menu).

## Sección II - Instalar/Actualizar Unlaunch

1. Abre TWiLight Menu++
   - Si esta es tu primera vez instalando Unlaunch, relanza TWiLight Menu++ a través del exploit que utilizaste antes.
   - Si ya has instalado Unlaunch y estás buscando actualizarlo, mantén pulsados <kbd class="face">A</kbd> y <kbd class="face">B</kbd> mientras enciendes la consola y selecciona el `TWiLight Menu++` en el que la ruta que acabe en `BOOT.NDS` se muestra en la pantalla inferior
1. Entra en la configuración de TWiLight Menu++
   - Si no has cambiado tu tema, sigue los pases en la página "Lanzando el Exploit". De lo contratio, consulta el manual de TWiLight Menu++
1. Presiona <kbd class="l">L</kbd>/<kbd class="r">R</kbd> o <kbd class="face">X</kbd>/<kbd class="face">Y</kbd> hasta que llegues a la sección `Ajustes de Unlaunch`.
1. Si quieres cambiar el la imágen que Unlaunch utiliza como fondo. selecciona la opción `Fondo` y elige el que quieras.
   - Si quieres crear tu propio fondo para Unlaunch, consulta la [página en la Wiki de DS-Homebrew](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds).
1. Si quieres mantener la música y los sonidos del Menú DSi, así como la pantalla de Salud y Seguridad, entonces `desactiva` la opción `Parches del Launcher`.
   - Hacer esto eviará el poder saltar el bloqueo regional y la incompatibildiad de flashcarts.
1. Sal de la Configuración de TWiLight Menu++
1. En el menú de navegación de archivos, ejecuta la aplicación `Unlaunch DSi Installer`.
1. Selecciona la opción Install.
   - Si Unlaunch se congela y te muestra el mensaje `ERROR: MISMATCH IN FAT COPIES`, por favor revisa la página de [solución de problemas](troubleshooting).
1. Cuando todo esté listo, reinicia el sistema.

Si ves el sistema de archivos de Unlaunch en este punto, significa que has modificado exitosamente tu Nintendo DSi.
- Si en cambio, ves una pantalla en negro, por favor revisa la página de [solución de problemas](troubleshooting).

## Sección III - Configuración posterior

Actualmente, Unlaunch inicia por defecto su sistema de archivos al encender la consola, pero puedes cambiar esto para iniciar lo que tú quieras.

1. Enciende tu consola mientras mantienes pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>.
   - Esto deberia iniciar el sistema de archivos de Unlaunch.
1. Ve a `OPTIONS` y echa un vistazo a las opciones disponibles.
   - La opción <kbd class="face">A</kbd> + <kbd class="face">B</kbd> está configurada para inciar el sistema de archivos de Unlaunch. Esta opción está bloqueada y no puede ser cambiada.
   - Las opciónes `NO BUTTON` y `BUTTON A / B / X / Y` pueden ser modificadas como quieras para escoger qué cargará tu consola al encenderse dependiendo de los botones que mantengas persionados. Puedes configurar estas opciones para iniciar cualquier título DSiWare, Homebrew, la ranura Slot-1, Wifiboot o el sistema de archivos de Unlaunch.
      - Para que alguna de estas opciones inicie TWiLight Menu++, selecciona el archivo `TWiLight Menu++` en el que la ruta que acabe en `BOOT.NDS` se muestre en la pantalla inferior.
      - Para que alguna de estas opciones inicie el Menú DSi original, selecciona el archivo `Launcher`.
   - La opción `LOAD ERROR` es en lo que tu DSi iniciará si lo que tú hayas configurado falla, como por ejemplo, una archivo en la tarjeta SD cuando esta no está en la consola.
1. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## Sección IV - Limpiar la tarjeta SD

::: tip

Esa sección es opcional, y su único propósito es mantener tu tarjeta SD ordenada y remover los archivos que no necesites.

:::

- Elimina el archivo `sd:/private/ds/app/484E494A/pit.bin` en tu tarjeta SD.
   - En caso de que hayas utilizado otro exploit, borra sus archivos.
- Elimina el archivo `UNLAUNCH.DSI` de tu tarjeta SD.
