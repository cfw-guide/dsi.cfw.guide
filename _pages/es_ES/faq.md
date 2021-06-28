---
title: "FAQ"
---

{% include toc title="Questions" %}

### ¿Qué funcionalidad perderé al modificar mi sistema?
- Si decide instalar Unlaunch, no perderá ninguna funcionalidad del sistema
- If you go with a Memory Pit-only setup, you will be unable to save photos to the SD card via the Nintendo DSi Camera application while the exploit is installed. Cambie a un [exploit alternativo](alternate-exploits) o [install Unlaunch](/installing-unlaunch)

   Esto es porque el archivo de metadata (`pit.bin`) es sobrescrito con el exploit de Memory Pit.

### How do I play Nintendo DS game card dumps?
Playing game card dumps on the console requires the use of a flashcard or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting Slot-1 reads and writes to it.
- Con TWiLight Menu++ puedes navegar por tu tarjeta SD para encontrar archivos ROM para jugar con nds-bootstrap. Las ventajas de usar TWiLight Menu++ son tener un menú de trucos por juego, y evitar las restricciones que traen los remitentes. En otras palabras, puede soltar sus archivos ROM directamente y reproducir sin ninguna configuración. No hay límite de títulos 39, ni hiyaCFW ni Unlaunch son necesarios y no hay restricciones en el espacio libre de la tarjeta SD que puedas tener
- los usuarios de hiyaCFW pueden crear [redireccionadores](nds-bootstrap-forwarders) para el Menú DSi de SDNAND, pero tiene algunas limitaciones. Hay un límite de 39 títulos, son menos convenientes de hacer y no parchean las medidas anti-piratería automáticamente

### ¿Cómo puedo actualizar mi homebrew?
- **Unlaunch** - Siga las instrucciones en la [Instalación de Deslanzamiento](/installing-unlaunch) página
- **hiyaCFW** - Reemplaza `hiya.dsi` en la raíz de la tarjeta SD desde la [versión actualizada](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copia `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` a la carpeta `_nds` en la raíz de tu tarjeta SD
   - Si usas TWiLight Menu++, hay una gran probabilidad de que la última versión de nds-bootstrap esté incluida en TWiLight Menu++
- **GodMode9i, dumpTool, MakeForwarder, etc** - Sigue las instrucciones utilizadas para descargarlos

Otros homebrew pueden utilizar otros métodos para actualizar.

### Soy nuevo o me gustaría rehacer mi configuración. ¿Dónde empiezo?
- Si todavía no has modificado tu consola o quieres actualizar Unlaunch en tu sistema, recomendamos empezar por el inicio de esta guía y continuar con las páginas siguientes. Asegúrese de leer todo en la página de inicio
- If you have the latest version Unlaunch, follow Section 1b of [Launching the Exploit](launching-the-exploit#twilight-menu) to set up TWiLight Menu++ on your system

### How can I remove parental controls?
- The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls

### Can I change my Nintendo DSi's region?
Yes, there are a few different methods depending on what you want to change:
- The safest and simplest method is to simply install TWiLight Menu++, it can use any official language and more without needing NAND modifications
- If you want to actually change the system region and are using hiyaCFW, you can use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)
