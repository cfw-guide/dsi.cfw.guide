# Empezando el proceso

Empezaremos descargando una serie de herramientas homebrew a modo de preparación para lanzar un exploit.

## Requisitos

- Una forma de copiar archivos a tu tarjeta SD
- Una aplicación que pueda extraer archivos comprimidos, como [7-Zip](https://www.7-zip.org/) (para Windows), <[The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (para macOS) o [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (para Chromebook)
  - Se recomienda evitar el uso de WinRAR, ya que usualmente arruina el proceso
  - Si estás usando Windows 11, evitar también usar el extractor incorporado en el sistema (Explorador de archivos), ya que causa un error referente al nombre del archivo siendo inválido o muy grande
- Una tarjeta SD de marca buena (o una microSD de marca buena con un adaptador a SD). **¡Es muy importante que sea de calidad, si utilizas una tarjeta SD de marca genérica o falsificada, podrías tener problemas de compatibilidad y pérdida de datos!** Para más información, [lee este artículo](https://www.flashcarts.net/microsd-fakes) sobre las tarjetas MicroSD falsas. Su información también se aplica a las tarjetas SD.

## Sección I - Preparación

::: warning

Comprueba que tu tarjeta SD [esté formateada correctamente siguiendo esta guía](sd-card-setup.html). Si omites este paso, podrías tener problemas de compatibilidad con aplicaciones homebrew o que tu tarjeta SD tenga el sistema de archivos que no corresponde.

:::

1. Inserta tu tarjeta SD en tu ordenador
2. Descarga la última versión de [dumpTool](https://dsi.cfw.guide/assets/files/dumptool/boot.nds) con el nombre `boot.nds`.
3. Copia el archivo `boot.nds` a la raíz de tu tarjeta SD.
   - Asegúrate de que tiene exactamente el nombre `boot.nds` y no `boot (1).nds`o cualquier otro nombre.

::: tip

Si no sabes qué carpeta es la carpeta raíz, echa un vistazo a [Ver esta imagen](/assets/images/sdroot/en_US.png)

:::

## Sección II - Comprobar que Unlaunch ya esté instalado

Unlaunch is a bootcode exploit which gets installed onto the DSi console itself, allowing full control of the console on boot, and as a result, allows homebrew applications full access to the hardware without restrictions from DSi system apps or DSiWare titles.

Some DSi consoles that are sold as used/refurbished might already have Unlaunch installed.

To check, press the <kbd class="face">POWER</kbd> button and immediately hold the <kbd class="face">A</kbd> + <kbd class="face">B</kbd> buttons.

- If you see a menu which shows `Nocash Unlaunch.dsi` on the top screen, this means Unlaunch is already installed, and you can continue with [dumping the NAND](dumping-nand.html).
- If the DSi starts normally with the DSi Menu appearing, proceed with Section III.

## Sección III - Foso de memoria

Memory Pit is an exploit utilizing the DSi Camera, compatible with all firmware versions.

If using the exploit without installing Unlaunch, compatibility with some homebrews could be limited. If you encounter issues with DSi homebrews and/or the camera function in DSi-Enhanced games, you can return to this guide and set up an [alternate exploit](alternate-exploits.html) instead.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::
