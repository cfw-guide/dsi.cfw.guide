---
layout: splash
title: Guía de DSi
header:
  overlay_color: "#1a1d24"
  overlay_image: /assets/images/home-page-feature.png
  overlay_filter: 0.5
excerpt: "Una guia completa de modificar tu Nintendo DSi"
---

Para guías completas sobre homebrew y custom firmware para otros dispositivos, revisa [la Guía CFW](https://cfw.guide/).
{: .notice--primary}

Esta guía no es compatible con consolas de desarrollo de Nintendo DSi.
{: .notice--danger}

Lea detenidamente todas las páginas introductorias (¡incluyendo esta!) antes de proceder.
{: .notice--info}

## ¿Qué es el homebrew?

Las [aplicaciones Homebrew](https://en.wikipedia.org/wiki/Homebrew_(video_games)) son piezas de software sin licencia hechas para sistemas cerrados, como la Nintendo DSi. El objetivo puede variar, desde ser usadas como utilidades hasta ser jugadas como juegos no licenciados.

Las aplicaciones Homebrew pueden ejecutarse de forma gratuita en todas las consolas Nintendo DSi, independientemente de la versión de firmware o de la región. Todo lo que necesitas es un punto de entrada y una tarjeta SD para almacenar tu homebrew. El punto de entrada principal usado en esta guía se llama Memory Pit (foso de memoria), pero existen otros puntos de entrada que puedes utilizar en caso de que no puedas hacer provecho de Memory Pit.

## Si sigo esta guía, ¿qué le haré a mi sistema?

Ten en cuenta que, aunque la guía está estructurada de forma lineal, esto generalmente depende de qué tan lejos quieras ir en términos de modificar el sistema.

- Configuraremos un punto de entrada para lanzar homebrew básico a través de Memory Pit, el exploit para la aplicación Cámara Nintendo DSi.
- Después, haremos un respaldo de la memoria NAND de la consola, el cual será útil en caso de que algo falle más adelante.
- Y finalmente, para los usuarios que quieren acceso completo a todas las características de la consola, los guiaremos a través de la instalación de Unlaunch. Unlaunch permite ejecutar homebrew con más permisios (como acceso a la ranura Slot-1), y de forma automática al iniciar el sistema.
   - Instalar Unlaunch modifica la NAND, y en casos extremos existe la posibilidad de que **bloquee el sistema por completo**. Si no quieres arriesgarte a que esto pase, puedes detenerte después de hacer un respaldo de la NAND.

## Si modifico el sistema, ¿qué puedo hacer?

- Ejecutar ROMs volcadas desde la tarjeta SD de tu consola, sin necesidad de una flashcart.
- Ejecutar cualquier título de DSiWare (sin importar el bloqueo regional o que sean exclusivos de 3DS) desde tu tarjeta SD.
- Iniciar automáticamente DSiWare y aplicaciones Homebrew al mantener pulsados ciertos botónes mientras enciendes tu consola.
- Ejecutar títulos de consolas clásicas utilizando distintos emuladores.
- Utilizar flashcarts usualmente incompatibles.
- Redirigir tu NAND a la tarjeta SD.
- Ver tus películas favoritas utilizando MPEG4Player.
- Utilizar FreeNAND para transferir configuraciones, archivos de sistema, títulos y tiquetes a otra Nintendo DSi desde una SDNAND.
- Mostrar una imagen (llamada boot splash) al inciar el sistema.

## ¿Dónde puedo encontrar aplicaciones Homebrew?

- [Universal-DB](https://db.universal-team.net/ds) tiene una lista de la mayoría del homebrew moderno, con un buen sistema de búsqueda y ordenamiento, que además mantiene al día los que han sido actualizados recientemente.
- [Gamebrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew) tiene archivado un montón de Homebrew antiguo, mucho del cual sólo funcionará en flashcarts.

## ¿Qué debería saber antes de empezar?

- En Windows, se recomienda [mostrar extensiones de archivo](file-extensions-%28windows%29) si estas usando el explorador de archivos por defecto.
- El único riesgo de bloqueo total del sistema viene de instalar Unlaunch, pero este riesto es sumamente pequeño.
- Si no tienes experiencia con copiar archivos a una tarjeta SD, tenemos herramientas de ayuda a tu disposición.

Continuar a [Lanzar el Exploit](launching-the-exploit)
{: .notice--info}
