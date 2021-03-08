---
title: Copias de seguridad DSiWare
redirect_from:
  - more/dumping-dsiware-from-3ds
  - more/dumping-dsiware
  - dsiware
  - more/installing-dsiware
  - installing-dsiware
---

{% include toc title="DSiWare Backups" %}

## Requisitos
- La ultima version de [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - Descarga el archivo, extrae el contenido y coloca `GodMode9i.nds` en cualquier lugar de tu tarjeta SD
- Una consola de Nintendo DSi con [Unlaunch](/unlaunch) instalado

## Nintendo DSi - Instrucciones

### Sección I - Identificando la ruta al archivo .app
1. Arranca tu consola Nintendo DSi manteniendo pulsado <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
   - Esto debería llevarte al Filemenu de Unlaunch
1. Identifique su aplicación en la lista
   - Una entrada verde claro significa que están instalados en la NAND

Cuando pasa el cursor sobre la entrada, la pantalla inferior debe mostrar la ruta. Tome nota del camino.

Una ruta de ejemplo sería `nand:/title/0030005/484e4a45/content/00000003.app`
{: .notice--info}

### Sección II - Extrayendo el archivo
1. Inicia GodMode9i desde el Filemenu de Deslanzamiento
1. Navega a SYSNAND, luego navega a través del camino de arriba
1. Marca el archivo `.app`, luego pulsa <kbd class="l">L</kbd> para añadirlo al portapapeles
   - Repitelo por todos los archivos que quieras copiar al mismo directorio
1. Navega a tu SD Card al directorio que donde tu quieras poner el DSiWare volcado
1. Pulsa el botton <kbd class="face">Y</kbd> para pegar el título de DSiWare volcado en el directorio que estás navegando actualmente

Ahora deberias ver el título de DSiWare en TWiLight Menu++ o en el archivo Unlaunch Filemenu.
