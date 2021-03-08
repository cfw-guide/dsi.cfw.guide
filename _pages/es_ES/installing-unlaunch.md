---
title: "Instalando Unlaunch"
redirect_from:
  - /guide/installing-unlaunch
  - /unlaunch
---

{% include toc title="Navigation" %}

Unlaunch es un exploit que tiene lugar al arrancar el sistema. Esto le permite tener privilegios superiores a los normales de Memory Pit, lo que le permite hacer lo siguiente:

- Iniciando aplicaciones en el arranque (homebrew o DSiWare), con combinaciones opcionales de botones
- Acceso a Slot-1, permitiéndole volcar cartuchos y lanzar cartuchos incompatibles
- Bloqueo de región eliminado en juegos mejorados / exclusivos de DSi
- Ejecuta el viejo Nintendo DS Homebrew a través de nds-bootstrap-hb
- Iniciando DSiWare desde la tarjeta SD interna
- Mejor sonido en GBARunner2
- Protección de bloques

Si aún no lo has hecho, por favor haz una [copia de resplado de la NAND](dumping-nand). Mientras que las probabilidades son escasas, Unlaunch puede brickear accidentalmente tu Nintendo DSi. Una copia de respaldo de la NAND + [hardmod](https://web.archive.org/web/20151102221503/https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/) le permitirá restaurar esta copia de seguridad, siempre que sepa cómo soldar.
{: .notice--danger}

Asegúrese de que su consola está cargada cuando siga este proceso. Una repentina pérdida de energía podría causar un daño grave.
{: .notice--warning}

## Seccion I - Preparando SD Card

Usando un despositivo Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) para automaticamente configurar tu SD card.
{: .notice--info}

1. Descargar la última version de [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Link De Espejo](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), si lo de arriba no funciona
1. Extrae `UNLAUNCH.DSI` del `unlach.zip` archivo y ponlo donde quieras en tu SD Card
1. Comprueba que todavía tienes TWiLight Menu++ en tu tarjeta SD
   - Si no está seguro, siga las instrucciones de la página [Lanzando el Explotador](launching-the-exploit#twilight-menu).

## Sección II - Instalar/Actualizar Unlaunch

1. Abre Menú TWiLight ++
   - Si esta es tu primera vez instalando Unlaunch, vuelve a lanzar TWiLight Menu++ a través del exploit que utilizaste.
   - Si ya has instalado Unlaunch y estás buscando actualizarlo, mantén <kbd class="face">A</kbd> + <kbd class="face">B</kbd> mientras inicias y selecciona el `Menú TWiLight ++` donde `BOOT. DS` se muestra en la pantalla inferior
1. Iniciar ajustes del Menú TWiLight ++
   - Si no has cambiado tu tema, sigue los pasos de la página "Abrir el exploto". De lo contrario, consulte el Manual de Menú TWiLight ++
1. Pulsa <kbd class="l">L</kbd> / <kbd class="r">R</kbd> hasta que llegues a la página de configuración de desinicio
1. Si desea cambiar la imagen de fondo de Unlaunch, haga clic en `Fondo` y elija la que desea
1. Si quieres la pantalla de Salud y Seguridad y música del menú DSi, entonces ajusta `parches de lanzamiento` a `apagados`
   - Esto también evitará que se elimine el bloqueo regional
1. Sal del los ajustes del Menú TWiLight ++
1. En el menú de navegación de archivos, inicia `Unlaunch DSi Installer`
1. Seleccione la opción de instalación
   - Si Unlaunch se congela en `ERROR: MISMATCH IN FAT COPIES`, por favor echa un vistazo a la página [Resolución de problemas](troubleshooting)
1. Cuando esta completado reinicie su sistema

Si ves la pantalla Filemenu de Unlaunch en este momento, has modelado con éxito tu Nintendo DSi.
- Si ves una pantalla negra, echa un vistazo a nuestra página de [solución de problemas](troubleshooting)

## Sección II - Configuración Post-Unlaunch

Actualmente Desiniciar predeterminado para lanzar su menú de archivos al arrancar, pero esto se puede cambiar iniciando lo que desee.

También reconfiguraremos nds-bootstrap para que se ejecute en el Menú TWiLight ++ (en lugar del título de DSiWare explotado) cuando reiniciemos el juego de forma suave.

1. Enciende tu consola mientras mantienes <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
1. Vaya a `OPCIONES`y vea las opciones disponibles
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> está hardcoded para lanzar en el menú de Unlaunch, y como tal no se puede cambiar
   - Las opciones `NO BOTTON` y `BOTTON A/B/X/Y` pueden configurarse como quiera y elegirán lo que su DSi carga en el arranque dependiendo de los botones que se mantengan. Puede seleccionar cualquier DSiWare, Homebrew, la tarjeta Slot-1 o el menú de archivos de Unlaunch
      - Para el Menú TWiLight ++, selecciona la opción `Menú TWiLight ++` donde `BOOT.NDS` se muestra en la pantalla inferior
      - Para el menú DSi original, seleccione `Lanzador`
   - `ERROR DE LOAD` es lo que cargará tu DSi si la carga falla, como la tarjeta SD no se insertará
1. Guarda tus ajustes y vuelve al menú de Unlaunch
1. Desplácese sobre las opciones de `TWiLight Menu++` y encuentre la que tiene una ruta que contenga `settings.srldr` en la pantalla inferior
1. Iniciar la opción resaltada
1. Utilice los botones <kbd class="l">L</kbd> y <kbd class="r">R</kbd> para cambiar al "Misc. Pagina Settings"
1. Establece la entrada "DSiWare Exploit" a "Ninguno"

## Sección III - Limpieza de la tarjeta SD

Esta seccion es opcional solo sirve para mantener la tarjeta de de archivo que no necesitas.
{: .notice--primary}

- Bora el archivo `sd:/private/ds/app/484E494A/pit.bin` de tu SD Card
   - Si usaste otro exploit, borra los archivos de ese exploit en su lugar
- Elimina el archivo `UNLAUNCH.DSI` de tu tarjeta SD

Continúa a [Instalar HiyaCFW](installing-hiyacfw) (opcional)
{: .notice--info}
