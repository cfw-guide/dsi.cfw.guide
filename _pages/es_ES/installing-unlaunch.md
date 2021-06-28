---
title: "Instalando Unlaunch"
---

{% include toc title="Navigation" %}

Unlaunch es un exploit que tiene lugar al arrancar el sistema. This allows it to have higher privileges than normal DSiWare exploits such as Memory Pit, which makes it able to do the following:

- Iniciando aplicaciones en el arranque (homebrew o DSiWare), con combinaciones opcionales de botones
- Acceso a Slot-1, permitiéndole volcar cartuchos y lanzar cartuchos incompatibles
- Region locks removed on DSi-Enhanced / Exclusive games
- Run old Nintendo DS homebrew via nds-bootstrap-hb
- Iniciando DSiWare desde la tarjeta SD interna
- Mejor sonido en GBARunner2
- Brick-protection

Si aún no lo has hecho, por favor haz una [copia de resplado de la NAND](dumping-nand). Mientras que las probabilidades son escasas, Unlaunch puede brickear accidentalmente tu Nintendo DSi. Una copia de respaldo de la NAND + [hardmod](https://web.archive.org/web/20151102221503/https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/) le permitirá restaurar esta copia de seguridad, siempre que sepa cómo soldar.
{: .notice--danger}

Asegúrese de que su consola está cargada cuando siga este proceso. Una repentina pérdida de energía podría causar un daño grave.
{: .notice--warning}

## Seccion I - Preparando SD Card

Using a Windows, Linux, or macOS device? Usa [Lazy DSi Downloader](lazy-dsi-downloader) para automaticamente configurar tu SD card.
{: .notice--info}

1. Descargar la última version de [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Link De Espejo](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), si lo de arriba no funciona
1. Extrae `UNLAUNCH.DSI` del `unlach.zip` archivo y ponlo donde quieras en tu SD Card
1. Comprueba que todavía tienes TWiLight Menu++ en tu tarjeta SD
   - If you are unsure, follow the instructions from the [Launching the Exploit](launching-the-exploit#twilight-menu) page

## Sección II - Instalar/Actualizar Unlaunch

1. Abre Menú TWiLight ++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the exploit that you used
   - Si ya has instalado Unlaunch y estás buscando actualizarlo, mantén <kbd class="face">A</kbd> + <kbd class="face">B</kbd> mientras inicias y selecciona el `Menú TWiLight ++` donde `BOOT. DS` se muestra en la pantalla inferior
1. Launch TWiLight Menu++ Settings
   - Si no has cambiado tu tema, sigue los pasos de la página "Abrir el exploto". De lo contrario, consulte el Manual de Menú TWiLight ++
1. Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the `Unlaunch Settings` page
1. If you want to change Unlaunch's background image, select `Background` and choose the one you want
   - If you want to create your own Unlaunch background, consult the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. If you want the Health and Safety screen and DSi Menu music and sounds, then set `Launcher Patches` to `Off`
   - Esto también evitará que se elimine el bloqueo regional
1. Exit TWiLight Menu++ Settings
1. En el menú de navegación de archivos, inicia `Unlaunch DSi Installer`
1. Seleccione la opción de instalación
   - Si Unlaunch se congela en `ERROR: MISMATCH IN FAT COPIES`, por favor echa un vistazo a la página [Resolución de problemas](troubleshooting)
1. Cuando esta completado reinicie su sistema

Si ves la pantalla Filemenu de Unlaunch en este momento, has modelado con éxito tu Nintendo DSi.
- Si ves una pantalla negra, echa un vistazo a nuestra página de [solución de problemas](troubleshooting)

## Section III - Post-Unlaunch configuration

Currently, Unlaunch defaults to launching its file menu on boot, but this can be changed launch whatever you want.

También reconfiguraremos nds-bootstrap para que se ejecute en el Menú TWiLight ++ (en lugar del título de DSiWare explotado) cuando reiniciemos el juego de forma suave.

1. Enciende tu consola mientras mantienes <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
1. Vaya a `OPCIONES`y vea las opciones disponibles
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> está hardcoded para lanzar en el menú de Unlaunch, y como tal no se puede cambiar
   - The `NO BUTTON` and `BUTTON A / B / X / Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. You can select any DSiWare, homebrew, the Slot-1 card, wifiboot, or Unlaunch's file menu
      - Para el Menú TWiLight ++, selecciona la opción `Menú TWiLight ++` donde `BOOT.NDS` se muestra en la pantalla inferior
      - Para el menú DSi original, seleccione `Lanzador`
   - `ERROR DE LOAD` es lo que cargará tu DSi si la carga falla, como la tarjeta SD no se insertará
1. Guarda tus ajustes y vuelve al menú de Unlaunch
1. Desplácese sobre las opciones de `TWiLight Menu++` y encuentre la que tiene una ruta que contenga `settings.srldr` en la pantalla inferior
1. Iniciar la opción resaltada
1. Use the <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> buttons to switch over to the `Misc. Settings` page
1. Set the `DSiWare Exploit` option to `None`

## Section IV - Cleaning up your SD card

Esta seccion es opcional solo sirve para mantener la tarjeta de de archivo que no necesitas.
{: .notice--primary}

- Bora el archivo `sd:/private/ds/app/484E494A/pit.bin` de tu SD Card
   - Si usaste otro exploit, borra los archivos de ese exploit en su lugar
- Elimina el archivo `UNLAUNCH.DSI` de tu tarjeta SD
