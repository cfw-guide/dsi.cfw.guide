# Empezando el proceso

The main homebrew application this guide has you install is **TW**i**L**ight Menu++, which is an upgrade/replacement to the Nintendo DSi Menu that allows running other homebrew applications, retail DS games, emulators for various older systems, and more.

Comenzaremos descargándolo, junto con otra(s) herramienta(s) homebrew, a modo de preparación para lanzar un exploit.

## Requisitos

- Una forma de copiar archivos a tu tarjeta SD
- An application that can extract archives, such as [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), or [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
  - Se recomienda evitar el uso de WinRAR, ya que usualmente arruina el proceso
  - Si estás usando Windows 11, evitar también usar el extractor incorporado en el sistema (Explorador de archivos), ya que causa un error referente al nombre del archivo siendo inválido o muy grande

## Sección I - Preparación

::: warning

Ensure your SD card is [formatted correctly](sd-card-setup.html).

:::

1. Inserta tu tarjeta SD en tu ordenador
2. Download the latest release of [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
   - If it does not download, open the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest), and download `TWiLightMenu-DSi.7z`
3. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
4. Open `TWiLightMenu-DSi.7z`
   - Si estás a utilizar el Windows, asegúrate de que 7-Zip está instalado, entonces siga estos pasos:
     1. Right-click on `TWiLightMenu-DSi.7z`
     2. If using Windows 11, click `Show more options`
     3. Hover over `7-zip`
     4. Click `Open archive`
5. Copy the `_nds` folder from `TWiLightMenu-DSi.7z` to the root of your SD card
6. Copy the `BOOT.NDS` file from `TWiLightMenu-DSi.7z` to the root of your SD card
7. Close `TWiLightMenu-DSi.7z`
8. Copy the `dumpTool.nds` file to the root of your SD card

::: tip

Si no sabes qué carpeta es la carpeta raíz, echa un vistazo a [See this image](/assets/images/sdroot/en_US.png)

:::

## Sección II - Elegir un exploit

A partir de aquí, tienes tres opciones, cada una implica un proceso ligeramente distinto.

### Instalar Unlaunch usando Memory Pit

Memory Pit es un exploit que utiliza la aplicación Cámara Nintendo DSi, compatible con todas las versiones de firmware. De forma opcional, este exploit puede ser usado para instalar Unlaunch, un exploit de código de arranque que permite control total de la consola al encenderla.

Ya que Memory Pit está algo limitado en cuanto a compatibilidad, se recomienda instalar Unlaunch en lugar de usar Memory Pit exclusivamente. Ya que este es el método más fácil de instalar Unlaunch, esta es la opción recomendada. However, there is a very minor risk of **bricking** your console when installing Unlaunch, so if this is a concern, see the alternate method below.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::

### stylehax

stylehax es un exploit que utiliza la aplicación Nintendo DSi Browser, y puede ser usado como una alternativa a Memory Pit para instalar Unlaunch si tu consola tiene la cámara averiada.

Si no quieres instalar Unlaunch, se recomienda usar este exploit ya que Memory Pit causa problemas en algunos juegos y aplicaciones homebrew.

::: tip

Continue to [Launching the Exploit (stylehax)](launching-the-browser-exploit.html)

:::

### Flipnote Lenny

Flipnote Lenny es un exploit que utiliza la aplicación Flipnote Studio.

Si tienes Flipnote Studio y no planeas instalar Unlaunch, se recomienda usar este exploit por la misma razón que stylehax.

Siempre puedes instalar Unlaunch más tarde si es lo que deseas.

::: tip

Continue to [Launching the Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

For a more detailed pros and cons comparision of the available exploits, please see the [Which is the best exploit?](faq.html#which-is-the-best-exploit) FAQ.
