# Preguntas Frecuentes

## ¿Debería actualizar el sistema?

It is **not** recommended to update your DSi unless you know there are purchased DSiWare. Si bien es posible seguir esta guía si actualizas, el único beneficio real sería acceder a la tienda de Nintendo DSi para volver a descargar tus títulos comprados. Todos los demás beneficios, como la integración de Facebook a la aplicación Cámara Nintendo DSi, ya no son utilizables o suficientemente provechosos para justificar las desventajas:

- Installing System Updates is known to occasionally **brick** consoles, with roughly the same frequency as when installing Unlaunch
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
  - The only way to view SD card photos while Memory Pit is installed, is to launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap (v0.61.3 or later)

### stylehax

Ventajas:

- Mejor compatibilidad con títulos en modo DSi y homebrew, en comparación con Memory Pit
- Fácil de usar
- No existe riesgo de averiar la consola
- Utilizable en las consolas que tengan la cámara averiada
- Mejor sonido en GBARunner2

Desventajas:

- Requiere acceso a internet
- Requiere cargar la aplicación Nintendo DSi Browser cada vez que quieras acceder a aplicaciones homebrew, lo cual es un poco más lento que usar Memory Pit
- Las aplicaciones homebrew no pueden acceder a la ranura Slot-1 (donde van los cartuchos de DS)

### Flipnote Lenny

Ventajas:

- Mejor compatibilidad con títulos en modo DSi y homebrew, en comparación con Memory Pit
- No hay riesgo de dañar la consola, y desinstalar es tan simple como remover la tarjeta SD o eliminar una carpeta
- Utilizable en las consolas que tengan la cámara averiada
- Mejor sonido en GBARunner2

Desventajas:

- Requiere cargar Flipnote Studio cada vez que quieras acceder a aplicaciones homebrew, lo cual es un poco más lento que usar Memory Pit
- Las aplicaciones homebrew no pueden acceder a la ranura Slot-1 (donde van los cartuchos de DS)

### Unlaunch

Ventajas:

- Permite cargar homebrew y títulos DSiWare inmediatamente al encender la consola, con comandos de acceso rápido opcionales
- Acceso completo a las funciones del sistema sin ninguna restricción, lo que permite:
  - Acceder a la ranura Slot-1, permitiéndote volcar roms de cartuchos de juego y cargar flashcards incompatibles
  - Mejor sonido en GBARunner2
- Remueve el bloqueo regional en cartuchos de juego con mejoras DSi o exlcusivos para DSi
- Protección ante la mayoría de formas de ocasionar un bloqueo total
- Se pueden ejectuar juegos con mejoras DSi en modo DSi sin necesidad de una ROM donante
- Pueden ejecutarse aplicaciones homebrew antiguas a través de nds-bootstrap-hb

Desventajas:

- Very minor risk of **bricking** the console when installing
- Another, slightly higher, risk of bricking if you decide to [uninstall it](uninstalling-unlaunch.html)
- No es compatible con consolas de desarrollo

## ¿Perderé funcionalidades si modifico mi consola?

Si instalas Unlaunch o Flipnote Lenny, no se perderá ninguna funcionalidad. If you use Memory Pit, you will be unable to view photos on the SD card using the DSi Camera, unless you launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap.

- To regain the ability to view your SD card photos when launching the DSi Camera from the DSi Menu, install Unlaunch or switch to a different exploit, then delete Memory Pit's `pit.bin` file
  - If `tip.bin` exists in the same folder, rename it back to `pit.bin`

## ¿Cómo juego a ROMs volcadas de cartuchos de Nintendo DS?

Jugar ROMs volcadas en la consola requiere el uso de una flashcart o de nds-bootstrap, un programa que permite cargar juegos desde la tarjeta SD redirigiendo hacia esta las instrucciones de lectura/escritura originalmente dirigidas a la ranura Slot-1 de la consola.

- Con TWiLight Menu++ puedes navegar por tu tarjeta SD para buscar ROMs que puedas ejecutar con nds-bootstrap. Las ventajas de usar TWiLight Menu++ son: tener un menú de trucos, configuraciones separadas para cada juego, y evitar las restricciones que conlleva utilizar redireccionadores. En otras palabras, puedes colocar ROMs directamente en tu tarjeta SD y jugar sin más configuraciones. No hay límite de 39 juegos por pantalla, no se requieren hiyaFCW o Unlaunch, y no hay restricciones en cuanto al tamaño disponible en la tarjeta SD
- hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) guide on the DS-Homebrew Wiki, but it has some limitations. Sólo se pueden tener 39 títulos en pantalla, y es menos conveniente hacerlos que usar TWiLight Menu++
  - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## ¿Como actualizo mis aplicaciones homebrew?

- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](installing-unlaunch.html) page
  - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card from the [updated release](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
  - Si usas TWiLight Menu++, es muy probable que la última versión de nds-bootstrap esté incluida en TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

Otras aplicaciones homebrew pueden usar otros métodos para actualizar.

## Soy nuevo o me gustaría rehacer mi configuración. ¿Por dónde empiezo?

- Si todavía no has modificado tu consola o quieres actualizar Unlaunch en tu sistema, recomendamos empezar por el inicio de esta guía y continuar con las páginas siguientes. Asegúrate de leer todo en la página de inicio
- If you have the latest version Unlaunch, follow the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) to set up TWiLight Menu++ on your system

## ¿Cómo elimino el control parental?

- The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls

## ¿Puedo cambiar la región de mi consola?

Sí, hay distintos métodos para hacerlo, dependiendo de lo que quieras cambiar:

- El método más simple y seguro es instalar TWiLight Menu++, te permite usar cualquier lenguaje oficial y aún más sin requerir modificaciones de la NAND
- Si quieres cambiar la región del sistema y estás usando hiyaCFW, abre el menú de configuración y cambia la configuración de región (no es posible con NANDs de las regiones de China y Corea)
  - If this breaks touch input, revert the region setting back to the original, and you can instead use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) for Asian DSi systems. For American DSi systems use [this version of hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## ¿Qué pasó con la guía de instalación de hiyaCFW?

Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).

- Si fuiste referido a la página en cuestión desde otra guía, las instrucciones que estabas siguiendo muy probablemente estaban desactualizadas. Se te recomienda seguir esta guía en su lugar, ya que es mantenida y constantemente actualizada por los desarrolladores de estos proyectos

## ¿Qué pasó con Lazy DSi Downloader? ¿Cómo instalo homebrew sin usarlo?

Lazy DSi Downloader era un programa que, esencialmente, te permitía saltar el proceso de instalación manual, ya que descargaba e instalaba los archivos necesarios en tu tarjeta SD. Sin embargo, por como fue programado y distribuido, muchos usuarios encontraban problemas varios y terminaban teniendo que instalar homebrew de forma manual, ya que eras más rápido y/o sencillo que resolver lo que fuese que estuviese causando el problema.

To avoid more users encountering these issues, we no longer recommend using Lazy DSi Downloader, and instead [doing the manual setup](get-started.html) is the recommended way to go.

- Si llegaste a esta página por un tercero que recomendaba usar Lazy DSi Downloader, las instrucciones que estabas siguiendo estaban desactualizadas. Por favor, usa esta guía, ya que es mantenida constantemente por los desarrolladores de estos proyectos.

## ¿Qué tipo de tarjeta SD debería usar?

- Deberías comprar una tarjeta SD de una marca confiable
- Funcionarán tanto una tarjeta SD de tamaño normal como una tarjeta micro SD con un adaptador
- Cualquier capacidad de entre 1 GB y 2 TB funcionarán. 8 GB suele ser suficiente para el uso general
  - Algunas aplicaciones, como hiyaCFW, pueden ver tiempos de carga prolongados según la capacidad de la tarjeta utilizada
- Se recomienda el uso de tarjetas de velocidad clase 8 o superior

## ¿Puedo usar la tarjeta SD de mi consola en otros sistemas?

Usualmente, sí, con un par de excepciones:

- hiyaCFW solo funcionará en el sistema para el que se configuró
- Incluso si usas nds-bootstrap o una flashcard, los códigos de amigo en juegos en línea se resetearán cuando se intente entrar en línea usando una consola diferente

## ¿Puedo cambiar de tarjeta SD después de que ya esté todo listo y configurado?

Format your new SD card using the [SD Card Setup](sd-card-setup.html) instructions, then simply move your data from the old SD card to the new one.

## ¿Puedo usar mi consola normalmente sin introducir la tarjeta SD después de instalar homebrew?

Sí. Si no instalaste Unlaunch, tu consola permanecerá con el sistema intacto. If you _did_ install Unlaunch, you may need to [configure Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) to automatically boot the original DSi Menu under specified conditions.

## The [Unlaunch page](https://problemkaputt.de/unlaunch.htm) says that version 2.0 is not known to be safe. ¿Debería usar una versión anterior?

La página de Unlaunch no ha sido actualizada desde que se publicó la versión 2.0, en 2019. La gran mayoría de usuarios no han experimentado problemas usando esta versión, así que puede considerarse segura.

## ¿Cómo puedo jugar títulos DSi volcados?

La forma recomendado es iniciarlos usando TWiLight Meni++, debido a su métedo simple para añadir juegos al menú, y que no hay un límite arbitrario de cuántos títulos puedes instalar. Si el método de ejecución de DSiWare es nds-bootstrap, además, ganas el beneficio de poder hacer capturas de pantalla y usar trucos, junto con cualquier otra ventaja proporcionada por el menú dentro del juego.

However, for the few titles that are incompatible, you can use [NTM](https://github.com/Epicpkmn11/NTM/releases) to install them on either internal memory or [hiyaCFW's SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing). Además de carecer de los beneficios previamente mencionados, también hay un límite de 39 títulos, y no se pueden exceder 128Mib/1024 bloques en tamaño. Para la memoria interna, también hay un pequeño riesgo de bloqueo total del sistema al escribir al almacenamiento interno.
