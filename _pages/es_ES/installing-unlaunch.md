---
title: "Instalar Unlaunch"
---

{% include toc title="Navigation" %}

Unlaunch es un exploit que tiene lugar al arrancar el sistema. Esto le permite tener mas privilegios que los exploits normales de títulos DSiWare como Memory Pit, lo que hace que sea capaz de hacer lo siguiente:

- Iniciar aplicaciones al encender el sistema (sea homebrew o DSiWare), con combinaciones de botones opcionales.
- Acceso a la ranura Slot-1, lo que te permite volcar cartuchos y lanzar flashcarts incompatibles.
- Remover el bloqueo regional de juegos exclusivos de Nintendo DSi o DSi-Enhanced.
- Ejecutar homebrew antiguo de Nintendo DS a través de nds-bootstrap-hb.
- Ejecutar DSiWare desde la tarjeta SD internal.
- Mejor sonido en GBARunner2.
- Protección contra bloqueos totales de la consola.

Si aún no lo has hecho, por favor haz una [copia de resplado de la NAND](dumping-nand). Si bien las probabilidades son escasas, Unlaunch puede bloquear totalmente tu consola de forma accidental. Una copia de respaldo de la NAND y [modificación del hardware](https://web.archive.org/web/20151102221503/https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/) te permiten restaurar esta copia de respaldo, siempre y cuando sepas como soldar.
{: .notice--danger}

Asegúrate de que tu consola está cargada mientras sigues estos pasos. Si el sistema se apaga repentinamente en medio del proceso, podría causar daños graves.
{: .notice--warning}

## Sección I - Preparar la tarjeta SD

¿Utilizas Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) para configurar automáticamente tu tarjeta SD.
{: .notice--info}

1. Descarga la última version de [Unlaunch](https://problemkaputt.de/unlaunch.zip).
   - [Enlace alternativo](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), si el de arriba no funciona.
1. Extrae `UNLAUNCH.DSI` del archivo `unlach.zip`, y colócalo en cualquier lugar de tu tarjeta SD.
1. Comprueba que aún tienes TWiLight Menu++ en tu tarjeta SD.
   - Si no estás seguro, sigue las instrucciones de la página [Lanzando el Exploit](launching-the-exploit#twilight-menu).

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
   - Esto causará que el bloqueo regional no pueda ser removido.
1. Sal de la Configuración de TWiLight Menu++
1. En el menú de navegación de archivos, ejecuta la aplicación `Unlaunch DSi Installer`.
1. Selecciona la opción Install.
   - Si Unlaunch se congela y te muestra el mensaje `ERROR: MISMATCH IN FAT COPIES`, por favor revisa la página de [solución de problemas](troubleshooting).
1. Cuando todo esté listo, reinicia el sistema.

Si ves el sistema de archivos de Unlaunch en este punto, significa que has modificado exitosamente tu Nintendo DSi.
- Si en cambio, ves una pantalla en negro, por favor revisa la página de [solución de problemas](troubleshooting).

## Sección III - Configuración posterior

Actualmente, Unlaunch inicia por defecto su sistema de archivos al encender la consola, pero puedes cambiar esto para iniciar lo que tú quieras.

También vamos a reconfigurar nds-boostrap para iniciar TWiLight Menu++ (en lugar del título DSiWare de donde se lanzó el exploit) cuando hagas un soft-reset en medio de la partida.

1. Enciende tu consola mientras mantienes pulsados <kbd class="face">A</kbd> y <kbd class="face">B</kbd>.
1. Ve a `OPTIONS` y echa un vistazo a las opciones disponibles.
   - La opción <kbd class="face">A</kbd> + <kbd class="face">B</kbd> está configurada para inciar el sistema de archivos de Unlaunch. Esta opción está bloqueada y no puede ser cambiada.
   - Las opciónes `NO BUTTON` y `BUTTON A / B / X / Y` pueden ser modificadas como quieras para escoger qué cargará tu consola al encenderse dependiendo de los botones que mantengas persionados. Puedes configurar estas opciones para iniciar cualquier título DSiWare, Homebrew, la ranura Slot-1, Wifiboot o el sistema de archivos de Unlaunch.
      - Para que alguna de estas opciones inicie TWiLight Menu++, selecciona el archivo `TWiLight Menu++` en el que la ruta que acabe en `BOOT.NDS` se muestre en la pantalla inferior.
      - Para que alguna de estas opciones inicie el Menú DSi original, selecciona el archivo `Launcher`.
   - La opción `LOAD ERROR` es en lo que tu DSi iniciará si lo que tú hayas configurado falla, como por ejemplo, una archivo en la tarjeta SD cuando esta no está en la consola.
1. Guarda tus ajustes y vuelve al sistema de archivos de Unlaunch.
1. Resalta la archivo `TWiLight Menu++` cuya ruta contenga `settings.srldr` en la pantalla inferior.
1. Inicia el archivo resaltado pulsando <kbd class="face">A</kbd>.
1. Usa los botónes <kbd class="l">L</kbd>/<kbd class="r">R</kbd> o <kbd class="face">X</kbd>/<kbd class="face">Y</kbd> para moverte hacia la sección `Otros Ajustes` .
1. Establece la opción `Exploit DSiWare` a `Ninguno`.

## Sección IV - Limpiar la tarjeta SD

Esa sección es opcional, y su único propósito es mantener tu tarjeta SD ordenada y remover los archivos que no necesites.
{: .notice--primary}

- Elimina el archivo `sd:/private/ds/app/484E494A/pit.bin` en tu tarjeta SD.
   - En caso de que hayas utilizado otro exploit, borra sus archivos.
- Elimina el archivo `UNLAUNCH.DSI` de tu tarjeta SD.
