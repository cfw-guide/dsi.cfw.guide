---
title: "Empezando el proceso"
---

La aplicación homebrew principal que esta guía te ayuda a instalar es TWiLight Menu++, que es una versión mejorada/un reemplazo del Menú Nintendo DSi, que te permite ejecutar otras aplicaciones homebrew, juegos comerciales, emuladores para varios sistemas antiguos, y demás.

Comenzaremos descargándolo, junto con otra(s) herramienta(s) homebrew, a modo de preparación para lanzar un exploit.

::: tip

¿Estás usando Windows, Linux o macOS? Puedes usar [Lazy DSi Downloader](lazy-dsi-downloader.html) para configurar automáticamente tu tarjeta SD.

:::

## Requisitos

- Una forma de copiar archivos a tu tarjeta SD
- Una aplicación que te permita extraer archivos, como [7-Zip](https://www.7-zip.org/) (en Windows y Linux) o [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (en macOS)
   - Se recomienda evitar el uso de WinRAR, ya que usualmente arruina el proceso

## Sección I - Preparación

::: warning

Asegúrate de que tu tarjeta SD esté [formateada correctamente](sd-card-setup.html).

:::

1. Inserta tu tarjeta SD en tu ordenador
1. Descarga la version más reciente de [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
1. Descarga la versión más reciente de [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Copia la carpeta `_nds` del archivo `TWiLightMenu.DSi.7z` a la carpeta raíz de tu tarjeta SD
1. Copia el archivo `BOOT.NDS` del archivo `TWiLightMenu-DSi.7z` a la carpeta raíz de tu tarjeta SD
1. Copia el archivo `dumpTool.nds` a la carpeta raíz de tu tarjeta SD

::: tip

¿No sabes qué carpeta es la carpeta raíz? [Mira esta imagen](https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png)

:::


## Sección II - Elegir un exploit

A partir de aquí, tienes tres opciones, cada una implica un proceso ligeramente distinto.


### Instalar Unlaunch usando Memory Pit

Memory Pit es un exploit que utiliza la aplicación Cámara DSi, compatible con todas las versiones de firmware. De forma opcional, este exploit puede ser usado para instalar Unlaunch, un exploit de código de arranque que permite control total de la consola al encenderla.

Ya que Memory Pit está algo limitado en cuanto a compatibilidad, se recomienda instalar Unlaunch en lugar de usar Memory Pit exclusivamente. Ya que este es el método más fácil de instalar Unlaunch, esta es la opción recomendada. Sin embargo, hay un pequeñísimo riesgo de causar un **bloqueo total** de la consola al instalar Unlaunch, así que si la posibilidad te preocupa, echa un vistazo al método de más abajo.

::: tip

Continuar a [Lanzar el Exploit](launching-the-exploit.html)

:::


### stylehax

stylehax es un exploit que utiliza la aplicación Nintendo DSi Browser, y puede ser usado como una alternativa a Memory Pit para instalar Unlaunc si tu consola tiene la cámara averiada.

Si no quieres instalar Unlaunch, se recomienda usar este exploit ya que Memory Pit causa problemas en algunos juegos y aplicaciones homebrew.

::: tip

Continuar a [Lanzar el Exploit (stylehax)](launching-the-browser-exploit.html)

:::


### Flipnote Lenny

Flipnote Lenny es un exploit que utiliza la aplicación Flipnote Studio.

Si tienes Flipnote Studio y no planeas instalar Unlaunch, se recomienda usar este exploit por la misma razón que stylehax.

Siempre puedes instalar Unlaunch más tarde si es lo que deseas.

::: tip

Continuar a [Lanzar el Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

Para una comparación más detallada de ventajas y desventajas de cada exploit, echa un vistazo a la pregunta [¿Cuál es el mejor exploit?](faq.html#which-is-the-best-exploit) en la página de Preguntas Frecuentes.
