---
title: Volcar cartuchos de juegos
---

Esta sección es para volcar los cartuchos de juegos usando GodMode9i para que puedan ser jugados en emuladores, flashcarts o desde tu tarjeta SD vía nds-bootstrap.

## Requisitos
- El cartucho del juego que quieras volcar
- Tu consola Nintendo DSi con [Unlaunch](installing-unlaunch) instalado

## Instrucciones
### Sección I - Preparación de la Tarjeta SD

::: tip

¿Utilizas Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) para configurar automáticamente tu tarjeta SD.

:::

1. Descarga la última versión de [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases).
1. Extrae `GodMode9i.nds` del archivo GodMode9i y colócalo en cualquier lugar de tu tarjeta SD.

### Sección II - Instrucciones para Nintendo DSi
1. Launch GodMode9i
1. Ensure the Game Card is inserted into the console
1. Select the "NDS GAMECARD" option in GodMode9i
1. Select what you want to dump
   - The "Trimmed" options for the ROM will dump a smaller file that can save SD card space, however they won't work for most patches such as ROM hacks
1. Repeat steps 2-4 for all Game Cards you wish to dump

::: tip

Las ROMs volcadas estarán en el directorio `sd:/gm9i/out`.

:::
