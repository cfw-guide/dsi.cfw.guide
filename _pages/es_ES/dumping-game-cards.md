---
title: "Dumping Game Cards"
---

This section is for dumping game cards using GodMode9i so they can be played on emulators, flashcards, or your SD card via nds-bootstrap.

## Requisitos
* The game card of the title you would like to dump
* Tu consola Nintendo DSi con [Unlaunch](installing-unlaunch) instalado

## Instrucciones
### Section I - SD card setup

Using a Windows, Linux, or macOS device? Usa [Descargador Lazy DSi](lazy-dsi-downloader) para configurar automáticamente tu SD Card.
{: .notice--info}

1. Descargar la última versión de [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
1. Extraer `GodMode9i.nds` del archivo GodMode9i y colocarlo en cualquier lugar de tu SD Card

### Section II - Nintendo DSi instructions
1. Enciende tu consola manteniendo pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>
   - Esto deberia lanzar el archivo Unlaunch
1. Inicia GodMode9i desde el Filemenu de Unlaunch
1. Ensure the game card is inserted into the console
1. Selecciona la opción "NDS GAMECARD" en GodMode9i
1. Seleccione si desea el relleno o no:
   - Completo: Relleno incluido
   - Trim: Relleno eliminado
1. Repeat steps 3-5 for all game cards you wish to dump

The dumped game cards will be found in `sd:/gm9i/out`.
{: .notice--success}
