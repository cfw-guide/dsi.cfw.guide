---
title: Copias de seguridad DSiWare
---

{% include toc title="DSiWare Backups" %}

## Requisitos
- La ultima version de [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - Descarga el archivo, extrae el contenido y coloca `GodMode9i.nds` en cualquier lugar de tu tarjeta SD
- Una consola de Nintendo DSi con [Unlaunch](/unlaunch) instalado

## Nintendo DSi - Instrucciones

### Sección I - Identificando la ruta al archivo .app
1. Boot your Nintendo DSi console while holding <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
   - Esto debería llevarte al Filemenu de Unlaunch
1. Identifique su aplicación en la lista
   - Una entrada verde claro significa que están instalados en la NAND

Cuando pasa el cursor sobre la entrada, la pantalla inferior debe mostrar la ruta. Tome nota del camino.

Una ruta de ejemplo sería `nand:/title/0030005/484e4a45/content/00000003.app`
{: .notice--info}

### Sección II - Extrayendo el archivo
1. Inicia GodMode9i desde el Filemenu de Deslanzamiento
1. Navega a SYSNAND, luego navega a través del camino de arriba
1. Highlight the `.app` file, then press <kbd class="face">Y</kbd> to add it to the clipboard
1. Navega a tu SD Card al directorio que donde tu quieras poner el DSiWare volcado
1. Press <kbd class="face">Y</kbd> again to paste the DSiWare title in the directory you are currently navigating
   - You can change the name of the file after pasting it by pressing <kbd class="face">X</kbd> while holding <kbd class="R">R</kbd>
   - Repeat this for all files you wish to copy to the same directory

You should now see the DSiWare title in TWiLight Menu++ or the Unlaunch Filemenu.
