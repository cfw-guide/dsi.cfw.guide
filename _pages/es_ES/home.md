---
layout: splash
title: Guía de DSi
header:
  overlay_color: "#1a1d24"
  overlay_image: /assets/images/home-page-feature.png
  overlay_filter: 0.5
excerpt: "Una guia completa de modificar tu Nintendo DSi"
---

Para guías completas sobre homebrew y custom firmware para otros dispositivos, revisa [CFW.Guía](https://cfw.guide/).
{: .notice--primary}

Esta guía no es compatible con consolas de desarrollo de Nintendo DSi.
{: .notice--danger}

Lea detenidamente todas las páginas introductorias (¡incluyendo esta!) antes de proceder.
{: .notice--info}

## ¿Qué es el homebrew?

[Homebrew](https://en.wikipedia.org/wiki/Homebrew_(video_games)) aplicaciones son software sin licencia hecho para sistemas cerrados como el Nintendo DSi. Estas aplicaciones pueden ir de utilidades hasta juegos de homebrew.

Homebrew puede ejecutarse de forma gratuita en todas las consolas Nintendo DSi, independientemente de la versión de firmware o región. Todo lo que necesitas es un punto de entrada y una tarjeta SD para almacenar tu homebrew. El punto de entrada principal utilizado en esta guía se llama Memory Pit, pero hay otros puntos de entrada que puede usar si Memory Pit es inutilizable.

## ¿Qué hara esta guía a mi sistema?

Ten en cuenta que la guía está estructurada en un camino lineal, sin embargo, generalmente depende de la profundidad que se quiera alcanzar en terminos de modificar, el sistema.

- Estaremos configurando un punto de entrada para lanzar homebrew básico a través de Memory Pit, el exploit para la aplicación de camara Nintendo DSi
- Luego tomaremos una copia de la NAND, que es útil como punto de restauración en caso de que te estropees más tarde
- Finally, for users that want access to the full capabilities of the DSi we will walk them through installing Unlaunch. Unlaunch allows homebrew to run with more permissions (such as Slot-1 access) and at system boot
   - Instalar Unlaunch modifica su NAND, y en casos extremos tiene el potencial de **cabrear** el sistema. Si no corres el riesgo de bloquear el sistema, puedes parar después de hacer una copia de la NAND

## ¿Qué puedo hacer modificando mi sistema?

- Run Nintendo DS(i) game backups from your DSi SD card without the need of a flashcard
- Launch any DSiWare (out-of-region and/or 3DS exclusives) from your SD card
- Arrancar DSiWare y aplicaciones de homebrew manteniendo pulsados botones específicos al encender tu Nintendo DSi
- Run old-time classics using various emulators
- Use normally incompatible flashcards
- Redirect your NAND to the SD card
- Watch your favorite movies using MPEG4Player
- Use FreeNAND to transfer configurations, sys, titles and tickets to another Nintendo DSi from a SDNAND
- Mostrar una imagen (referida como la presentacion de arranque) al iniciar el sistema

## Donde puedo encontrar aplicaciones de homebrew?

- [Universal-DB](https://db.universal-team.net/ds) has most modern homebrew, with nice search and sorting to keep track of what's been updated recently
- [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew) has a lot of older homebrew, however many will only work on flashcards

## Que debo saber antes de empezar?

- En Windows, se recomienda [mostrar extensiones de archivo](file-extensions-%28windows%29) si estas usando el explorador de archivos por defecto
- El único riesgo de ladrillo proviene de la instalacion de Unlaunch, y el riesgo de ladrillo es mínimo
- Si no tienes experiencia con la copia de archivos a una tarjeta SD, tenemos herramientas de ayuda disponibles a tu disposicion

Continua a [Iniciando el exploit](launching-the-exploit)
{: .notice--info}
