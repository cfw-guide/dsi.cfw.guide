---
title: Respaldos de DSiWare
---

{% include toc title="DSiWare Backups" %}

## Requisitos
- La ultima version de [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - Descargar el archivo, extraer su contenido y colocar `GodMode9i` en cualquier lugar de tu tarjeta SD.
- Una consola Nintendo DSi con [Unlaunch](/unlaunch) instalado.

## Nintendo DSi - Instrucciones

### Sección I - Identificando la ruta al archivo .app
1. Enciende la consola Nintendo DSi mientras mantienes presionados los botónes <kbd class="face">A</kbd> y <kbd class="face">B</kbd>.
   - Esto debería llevarte al sistema de archivos de Unlaunch.
1. Identifique su aplicación en la lista.
   - Un título en verde claro indica que está instalado en la NAND (Memoria interna de la consola).

Cuando pasa el cursor sobre la entrada, la pantalla inferior debe mostrar la ruta. Apunta la dirección de la ruta.

Una ruta de ejemplo sería `nand:/title/0030005/484e4a45/content/00000003.app`
{: .notice--info}

### Sección II - Extrayendo el archivo
1. Inicia GodMode91 desde el sistema de archivos de Unlaunch.
1. Navega a SYSNAND, luego ve hacia la ruta que apuntaste antes.
1. Resalta el archivo `.app`, y presiona <kbd class="face">Y</kbd> para añadirlo al portapapeles.
1. Navega a tu SD Card al directorio que donde tu quieras poner el DSiWare volcado
1. Presiona <kbd class="face">Y</kbd> otra vez para pegar el título DSiWare en el directorio en el que te encuentras actualmente.
   - Puedes cambiar el nombre del archivo después de pegarlo si presionas <kbd class="face">X</kbd> mientras mantienes pulsado el botón <kbd class="R">R</kbd>.
   - Repite esto para todos los archivos que desees copiar al mismo directorio.

Ahora deberías ver el título DSiWare en TWiLight Menu++ o en el sistema de archivos de Unlaunch.
