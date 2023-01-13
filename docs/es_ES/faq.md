---
title: Preguntas Frecuentes
---

## ¿Debería actualizar el sistema?
**No** se recomienda instalar una actualización a no ser que sepas que se han comprado DSiWare con tu consola. Si bien es posible seguir esta guía si actualizas, el único beneficio real sería acceder a la tienda de Nintendo DSi para volver a descargar tus títulos comprados. Todos los demás beneficios, como la integración de Facebook a la aplicación Cámara Nintendo DSi, ya no son utilizables o suficientemente provechosos para justificar las desventajas:

- Instalar actualizaciones de sistema ha causado **bloqueos totales** a algunas consolas, con más o menos la misma frecuenciaque instalar Unlaunch lo ha causado
- Ya no podrás usar exploits antiguos, lo que es posible que necesites hacer si no puedes usar los exploits recomendados
- La compatibilidad con flashcards se ve reducida. Instalar Unlaunch previene que esto ocurra

## ¿Cuál es el mejor exploit?
Unlaunch suele ser la mejor opción. La única desventaja es que tiene un pequeño riesgo de bloqueo total al instalar. En general, se recomienda usar Memory Pit para instalar Unlaunch. Si quieres evitar riesgos, se recomienda usar Flipnote Lenny en su lugar, ya que tiene menos problemas con homebrew que Memory Pit mientras que es igual de seguro y fácil de desinstalar. Abo podrás ver una lista de ventajas y desventajas de cada exploit principal:

### Memory Pit
Ventajas:
- Rápido y fácil de usar
- No hay riesgo de dañar la consola, y desinstalar es tan simple como remover la tarjeta SD o eliminar un archivo
- Compatible con todas las consolas DSi a no ser que la cámara esté dañada y el tutorial de la aplicación Cámara DSi no se haya completado

Desventajas:
- Requiere iniciar la aplicación Cámara Nintendo DSi cada vez que quieras acceder a aplicaciones homebrew
- Incompativle con ciertos homebrew y títulos en modo DSi debido a que la WRAM sólo es accesible por la CPU ARM7
- Las aplicaciones homebrew no pueden acceder a la ranura Slot-1 (donde van los cartuchos de DS)
- El acceso al DSP está bloqueado, lo que resulta en peor calidad de audio en GBARunner2
- Las fotos en la tarjeta SD no se pueden ver en la aplicación Cámara Nintendo DSi mientras Memory Pit esté instalado, ya que por ahí se accede al exploit
     - La única forma de acceder a las fotos en la tarjeta SD mientras Memory Pit esté instalado, es iniciar una rom volcada de la aplicación Cámara Nintendo DSi usando nds-bootstrap (v0.61.3 o posterior) a través de **TW**i**L**ight Menu++

### stylehax
Ventajas:
- Mejor compatibilidad con títulos en modo DSi y homebrew, en comparación con Memory Pit
- Easy to use
- No risk of damaging the console
- Useable on consoles with broken camera
- Better sound in GBARunner2

Desventajas:
- Requires internet access
- Requires loading the DSi Browser every time you want to access homebrew, slightly more time consuming than Memory Pit
- Las aplicaciones homebrew no pueden acceder a la ranura Slot-1 (donde van los cartuchos de DS)

### Flipnote Lenny
Ventajas:
- Better compatibility with DSi mode titles and homebrew than Memory Pit
- No risk of damaging the console, uninstalling is as simple as removing the SD or deleting one folder
- Useable on consoles with broken camera
- Better sound in GBARunner2

Desventajas:
- Requires loading Flipnote Studio every time you want to access homebrew, slightly more time consuming than Memory Pit
- Access to Slot-1 (the DS Game Card) is blocked in homebrew

### Unlaunch
Pros:
- Allows loading homebrew and DSiWare immediately on system boot, with optional button hotkeys
- Full access to the system without any restrictions, including:
   - Access to Slot-1 allowing dumping Game Cards and loading incompatible flashcards
   - Better sound in GBARunner2
- Removes region locks on DSi-Enhanced/Exclusive Game Cards
- Protection against most ways a DSi could brick
- DSi-Enhanced games can be run in DSi mode without a Donor ROM
- Old homebrew can be run via nds-bootstrap-hb

Cons:
- Very minor risk of **bricking** the console when installing
- Another, slightly higher, risk of bricking if you decide to [uninstall it](uninstalling-unlaunch.html)
- Not compatible with development consoles

## ¿Perderé funcionalidades si modifico mi consola?
If you install Unlaunch or use Flipnote Lenny, no functionality will be lost. If you use Memory Pit, you will be unable to view photos on the SD card using the DSi Camera, unless you launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap.
- To regain the ability to view your SD card photos when launching the DSi Camera from the DSi Menu, install Unlaunch or switch to a different exploit, then delete Memory Pit's `pit.bin` file
  - If `tip.bin` exists in the same folder, rename it back to `pit.bin`

## ¿Cómo juego a ROMs volcadas de cartuchos de Nintendo DS?
Playing Game Card dumps on the console requires the use of a flashcard or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting Slot-1 reads and writes to it.
- With TWiLight Menu++ you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using TWiLight Menu++ are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. In other words, you can drop your ROM files directly and play without any setup. There is no 39 title limit, neither hiyaCFW or Unlaunch are required and there are no restrictions on SD card free space you can have
- hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) guide on the DS-Homebrew Wiki, but it has some limitations. There is a hard limit of 39 titles, and they are less convenient to make than using TWiLight Menu++
   - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## ¿Como actualizo mis aplicaciones homebrew?
- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](installing-unlaunch.html) page
   - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card from the [updated release](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
   - If you use TWiLight Menu++, there is a high chance that the latest nds-bootstrap release is included with TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

Other homebrew might use other methods to update.

## Soy nuevo o me gustaría rehacer mi configuración. ¿Por dónde empiezo?
- If you have not already modified your console or are looking to update Unlaunch on your system, we recommend starting from the beginning of the guide and following through the pages. Be sure to read everything on the homepage
- If you have the latest version Unlaunch, follow the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) to set up TWiLight Menu++ on your system

## ¿Cómo elimino el control parental?
- The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls

## ¿Puedo cambiar la región de mi consola?
Yes, there are a few different methods depending on what you want to change:
- The safest and simplest method is to simply install TWiLight Menu++, it can use any official language and more without needing NAND modifications
- If you want to actually change the system region and are using hiyaCFW, you can use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) for Asian DSi systems. For American DSi systems use [this version of hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## ¿Qué pasó con la guía de instalación de hiyaCFW?
Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).
- If you were linked to the page in question from another guide, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects

## ¿Qué tipo de tarjeta SD debería usar?
- You should buy an SD card from a trusted brand
- A full-size SD card or a microSD card with an adapter will both work
- Any capacity between 1 GB and 2 TB will work. For general usage, 8 GB is enough
  - Some software, such as hiyaCFW, may experience incrementally longer loading times with larger SD card capacities
- Speed class 8 or higher is recommended

## ¿Puedo usar la tarjeta SD de mi consola en otros sistemas?
Generally, yes, with two exceptions:
- hiyaCFW will only work on the system it was set up for
- Even if you are using nds-bootstrap or a flashcard, friend codes in online NDS games will be reset when attempting to go online using a different console

## ¿Puedo cambiar de tarjeta SD después de que ya esté todo listo y configurado?
Format your new SD card using the [SD Card Setup](sd-card-setup.html) instructions, then simply move your data from the old SD card to the new one.

## ¿Puedo usar mi consola normalmente sin introducir la tarjeta SD después de instalar homebrew?
Yes. If you did not install Unlaunch, your system will remain completely unmodified. If you *did* install Unlaunch, you may need to [configure Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) to automatically boot the original DSi Menu under specified conditions.

## La [página de Unlaunch](https://problemkaputt.de/unlaunch.htm) dice que la versión 2.0 no es segura. ¿Debería usar una versión anterior?
The Unlaunch page has not been updated since version 2.0 was released, which was over two years ago. The vast majority of users experience no issues with this version, so it is considered safe.


## How do I run dumped DSiWare?
The recommended method is to simply launch them with TWiLight Menu++, due to the simple drag-and-drop method and there being no arbitrary limit. When nds-bootstrap is set as the launch method, it also gains the benefits of cheats and screenshots, as well as any other benefit provided by the in-game menu.

However, for the few titles that are incompatible, you can use [NTM](https://github.com/Epicpkmn11/NTM/releases) to install them on either internal memory or [hiyaCFW's SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing). In addition to lacking the benefits above, there is also a limit of 39 titles that cannot exceed 128 MiB/1,024 blocks in size. For SysNAND, there is also a very small risk of bricking the system when writing to the internal NAND.
