---
title: "Volcar cartuchos de juegos"
---

Esta sección es para volcar los cartuchos de juegos usando GodMode9i para que puedan ser jugados en emuladores, flashcarts o desde tu tarjeta SD vía nds-bootstrap.

## Requisitos
* El cartucho del juego que quieras volcar
* Tu consola Nintendo DSi con [Unlaunch](installing-unlaunch) instalado

## Instrucciones
### Sección I - Preparación de la Tarjeta SD

¿Utilizas Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) para configurar automáticamente tu tarjeta SD.
{: .notice--info}

1. Descarga la última versión de [GodMode9i](https://github.com/RocketRobz/godmode9i/releases).
1. Extrae `GodMode9i.nds` del archivo GodMode9i y colócalo en cualquier lugar de tu tarjeta SD.

### Sección II - Instrucciones para Nintendo DSi
1. Enciende tu consola mientras mantienes pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>
   - Esto deberia iniciar el sistema de archivos de Unlaunch.
1. Inicia GodMode9i desde el sistema de archivos de Unlaunch.
1. Asegúrate de que el cartucho de juego esté insertado en la consola.
1. Selecciona la opción "NDS GAMECARD" en GodMode9i.
1. Seleccione si deseas que la ROM sea recortada o no:
   - Full: La ROM se volcará tal cual está en el cartucho.
   - Trim: Los archivos no necesarios al final de la ROM serán recortados.
1. Repite los pasos 3 a 5 para todos los cartuchos que quieras volcar.

Las ROMs volcadas estarán en el directorio `d:/gm9i/out`.
{: .notice--success}
