---
title: "Volcado de cartuchos"
redirect_from:
  - /dump-cart
  - /dump-card
---

Esta sección es para descargar cartuchos usando GodMode9i para que se puedan jugar en emuladores, flashcarts o tu tarjeta SD a traves de nds-bootstrap.

## Requisitos
* El cartucho del título que te gustaria volcar
* Tu consola Nintendo DSi con [Unlaunch](installing-unlaunch) instalado

## Instrucciones
### Seccion I - Configuration Del SD Card

Utilizando un dispositivo Windows, Linux o macOS? Usa [Descargador Lazy DSi](lazy-dsi-downloader) para configurar automáticamente tu SD Card.
{: .notice--info}

1. Descargar la última versión de [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
1. Extraer `GodMode9i.nds` del archivo GodMode9i y colocarlo en cualquier lugar de tu SD Card

### Seccion II - Nintendo DSi Instrucciones
1. Enciende tu consola manteniendo pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>
   - Esto deberia lanzar el archivo Unlaunch
1. Inicia GodMode9i desde el Filemenu de Unlaunch
1. Asegúrate de que la tarjeta de juego se inserte en la consola
1. Selecciona la opción "NDS GAMECARD" en GodMode9i
1. Seleccione si desea el relleno o no:
   - Completo: Relleno incluido
   - Trim: Relleno eliminado
1. Repite los pasos 3-5 para todos los cartuchos que desee volcar

Los cartuchos volcados se encontrarán en `sd:/gm9i/out`.
{: .notice--success}
