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
- Pequeñísimo riesgo de **bloqueo total** al instalar
- Riesgo ligeramente mayor de ocasionar un bloqueo total si decides [desinstalarlo](uninstalling-unlaunch.html)
- No es compatible con consolas de desarrollo

## ¿Perderé funcionalidades si modifico mi consola?
Si instalas Unlaunch o Flipnote Lenny, no se perderá ninguna funcionalidad. Si usas Memory Pit, no podrás ver las fotos en la tarjeta SD usando la aplicación Camara Nintendo DSi, a no ser que inicies una rom volcada de dicha aplicación usando nds-bootstrap a traves de **TW**i**L**ight Menu++.
- Para recuperar la habilidad de ver las fotos en la tarjeta SD al usar la aplicación Camara Nintendo DSi desde el menú DSi, instala Unlaunch o usa un exploit distinto, luego, elimina el archivo `pit.bin` de Memory Pit
    - Si `tip.bin` existe en la misma carpeta, renómbralo a `pit.bin`

## ¿Cómo juego a ROMs volcadas de cartuchos de Nintendo DS?
Jugar ROMs volcadas en la consola requiere el uso de una flashcart o de nds-bootstrap, un programa que permite cargar juegos desde la tarjeta SD redirigiendo hacia esta las instrucciones de lectura/escritura originalmente dirigidas a la ranura Slot-1 de la consola.
- Con TWiLight Menu++ puedes navegar por tu tarjeta SD para buscar ROMs que puedas ejecutar con nds-bootstrap. Las ventajas de usar TWiLight Menu++ son: tener un menú de trucos, configuraciones separadas para cada juego, y evitar las restricciones que conlleva utilizar redireccionadores. En otras palabras, puedes colocar ROMs directamente en tu tarjeta SD y jugar sin más configuraciones. No hay límite de 39 juegos por pantalla, no se requieren hiyaFCW o Unlaunch, y no hay restricciones en cuanto al tamaño disponible en la tarjeta SD
- Los usuarios de hiyaCFW pueden crear redireccionadores a para el Menú DSi de la SDNAND usando la guía para [Redireccionadores para juegos de DS](https://wiki.ds-homebrew.com/es-ES/ds-index/forwarders?tab=tab-dsi-sd-card) en la wiki de DS-Homebrew, pero esto tiene algunas limitaciones. Sólo se pueden tener 39 títulos en pantalla, y es menos conveniente hacerlos que usar TWiLight Menu++
    - Si no tienes instalado hiyaCFW y te gustaría usar redireccionadores, puedes seguir la [guía de instalación de hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing)en la Wiki de DS-Homebrew

## ¿Como actualizo mis aplicaciones homebrew?
- **Unlaunch** - Sigue las instrucciones en la página de [Instalación de Unlaunch](installing-unlaunch.html)
    - Ojo, **NO** es necesario desinstalar Unlaunch antes de hacer esto
- **hiyaCFW** - Reemplaza el archivo `hiya.dsi` en la carpeta raíz de la tarjeta SD con la [última versión](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Sigue las instrucciones en la [Wiki de DS-Homebrew](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copia los archivos `nds-bootstrap-hb-release.nds` y `nds-bootstrap-release.nds` a la carpeta `_nds` en la raíz de tu tarjeta SD
    - Si usas TWiLight Menu++, es muy probable que la última versión de nds-bootstrap esté incluida en TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etcétera** - Sigue las instrucciones usadas para descargarlos

Otras aplicaciones homebrew pueden usar otros métodos para actualizar.

## Soy nuevo o me gustaría rehacer mi configuración. ¿Por dónde empiezo?
- Si todavía no has modificado tu consola o quieres actualizar Unlaunch en tu sistema, recomendamos empezar por el inicio de esta guía y continuar con las páginas siguientes. Asegúrate de leer todo en la página de inicio
- Si estás en la última versión de Unlaunch, sigue la [guía de instalación de TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) para instalar y configurar TWiLight Menu++ en tu sistema

## ¿Cómo elimino el control parental?
- El [generador de mkey](https://mkey.salthax.org) puede generar el código que necesitas para eliminar el control parental

## ¿Puedo cambiar la región de mi consola?
Sí, hay distintos métodos para hacerlo, dependiendo de lo que quieras cambiar:
- El método más simple y seguro es instalar TWiLight Menu++, te permite usar cualquier lenguaje oficial y aún más sin requerir modificaciones de la NAND
- Si quieres cambiar la región del sistema y estás usando hiyaCFW, abre el menú de configuración y cambia la configuración de región (no es posible con NANDs de las regiones de China y Corea)
    - Si esto hace que la pantalla táctil deje de funcionar, revierte el cambio de región y usa [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) de Yoti para consolas asiáticas. Para consolas americanas, usa [esta versión de hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Por último, si quieres cambiar la región en la memoria NAND del sistema, puedes usar [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/), de Mighty Max

## ¿Qué pasó con la guía de instalación de hiyaCFW?
Como hiyaCFW no tiene mucha utilidad y era una parte problemática y confusa de la guía para muchos usuarios, fue movida a la [wiki de DS-Homebrew](https://wiki.ds-homebrew.com/hiyacfw/installing).
- Si fuiste referido a la página en cuestión desde otra guía, las instrucciones que estabas siguiendo muy probablemente estaban desactualizadas. Se te recomienda seguir esta guía en su lugar, ya que es mantenida y constantemente actualizada por los desarrolladores de estos proyectos

## ¿Qué pasó con Lazy DSi Downloader? ¿Cómo instalo homebrew sin usarlo?
Lazy DSi Downloader era un programa que, esencialmente, te permitía saltar el proceso de instalación manual, ya que descargaba e instalaba los archivos necesarios en tu tarjeta SD. Sin embargo, por como fue programado y distribuido, muchos usuarios encontraban problemas varios y terminaban teniendo que instalar homebrew de forma manual, ya que eras más rápido y/o sencillo que resolver lo que fuese que estuviese causando el problema.

Para evitar que más usuarios tengan estos problemas, ya no recomendamos usar Lazy DSi Downloader, y en su lugar recomendamos [realizar el proceso de instalación manual](get-started.html).
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
Sí, asegúrate de formatear tu nueva tarjeta SD usando la página de [preparación de tarjeta SD](sd-card-setup.html), y luego simplemente mueve tus archivos de tu tarjeta antigua a la nueva.

## ¿Puedo usar mi consola normalmente sin introducir la tarjeta SD después de instalar homebrew?
Sí. Si no instalaste Unlaunch, tu consola permanecerá con el sistema intacto. Si *sí* instalaste Unlaunch, puede que necesites [configurar Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) para iniciar el Menú DSi original automáticamente bajo ciertas condiciones.

## La [página de Unlaunch](https://problemkaputt.de/unlaunch.htm) dice que la versión 2.0 no es segura. ¿Debería usar una versión anterior?
La página de Unlaunch no ha sido actualizada desde que se publicó la versión 2.0, en 2019. La gran mayoría de usuarios no han experimentado problemas usando esta versión, así que puede considerarse segura.


## ¿Cómo puedo jugar títulos DSi volcados?
La forma recomendado es iniciarlos usando TWiLight Meni++, debido a su métedo simple para añadir juegos al menú, y que no hay un límite arbitrario de cuántos títulos puedes instalar. Si el método de ejecución de DSiWare es nds-bootstrap, además, ganas el beneficio de poder hacer capturas de pantalla y usar trucos, junto con cualquier otra ventaja proporcionada por el menú dentro del juego.

Sin embargo, para los pocos títulos incompatibles, puedes usar [NTM](https://github.com/Epicpkmn11/NTM/releases) para instalarlos bien en la memoria interna, o en la [SDNAND de hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing). Además de carecer de los beneficios previamente mencionados, también hay un límite de 39 títulos, y no se pueden exceder 128Mib/1024 bloques en tamaño. Para la memoria interna, también hay un pequeño riesgo de bloqueo total del sistema al escribir al almacenamiento interno.
