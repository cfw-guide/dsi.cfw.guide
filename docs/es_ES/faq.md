---
title: Preguntas Frecuentes
---

## ¿Debería actualizar el sistema?
No. La Nintendo DSi es capaz de ejecutar aplicaciones Homebrew en cualquier versión, incluyendo la última; sin embargo, actualizar no da ninguna ventaja. La Tienda DSi ha sido dada de baja, al igual que la integración de Facebook a la Cámara DSi. La única otra cosa que hacían las actualizaciones era bloquar flashcarts. También existe un pequeñísimo riesgo de que tu consola sufra de un **bloqueo total** al instalar una actualización, más o menos igual de probable que al instalar Unlaunch.

## ¿Cuál es el mejor exploit?
Unlaunch suele ser la mejor opción. La única desventaja es que tiene un pequeño riesgo de bloqueo total al instalar. Generalmente se recomienda usar Memory Pit (ya que es el exploit más fácil y más compatible) para instalar Unlaunch, sin embargo, si decides evitar cualquier posible riesgo, se recomienda usar Flipnote Lenny, ya que usar solamente Memory Pit puede causar problemas en ciertos casos. Debajo encontrarás una lista de las ventajas y desventajas de cada exploit:

### Memory Pit
Ventajas:
- Rápido y fácil de usar
- Ningún riesgo de dañar la consola, y desinstalar es tan fácil como remover la tarjeta SD o eliminar un archivo
- Compatible con todas las consolas DSi, a no ser que la cámara no funcione y no se haya hecho el tutorial de la aplicación Cámara DSi

Desventajas:
- Requiere abir la aplicación Cámara DSi cada vez que quieras acceder a aplicaciones homebrew
- Incompatible con ciertos títulos en modo DSi y homebrew debido a la que la WRAM sólo se abre en la CPU ARM7, y que algunas direcciones de memoria pasados los 4MB en la RAM estan protegidos
- El acceso a los cartuchos en Slot-1 (la ranura detrás de la consola) está prohibido
- El acceso al procesador de señal digital (DSP) está prohibido, lo que resulta en sonido de baja calidad en GBARunner2
- Las fotos en la tarjeta SD no se pueden ver en la aplicación Cámara DSi mientras Memory Pit esté instalado, ya que el álbum es el detonante del exploit

### Flipnote Lenny
Ventajas:
- Mejor compatibilidad con títulos en modo DSi y homebrew, en comparación con Memory Pit
- Ningún riesgo de dañar la consola, y desinstalar es tan fácil como remover la tarjeta SD o eliminar una carpeta
- Mejor sonido en GBARunner2

Desventajas:
- Requiere Flipnote Studio
- Requiere abrir Flipnote Studio cada vez que quieras acceder a aplicaciones homebrew, lo cual es un poco más lento que usar Memory Pit
- El acceso a los cartuchos en Slot-1 (la ranura detrás de la consola) está prohibido

### Unlaunch
Ventajas:
- Permite cargar homebrew y títulos DSiWare inmediatamente al encender la consola, con comandos de acceso rápido opcionales
- Acceso completo a las funciones del sistema sin ninguna restricción, lo que permite:
   - Acceder a la ranura Slot-1, permitiéndote volcar roms de cartuchos de juego y cargar flashcarts incompatibles
   - Mejor sonido en GBARunner2
- Remueve el bloqueo regional en cartuchos de juego con mejoras DSi o exlcusivos para DSi
- Protección ante la mayoría de formas de ocasionar un bloqueo total
- Juegos con mejoras DSi pueden ser ejecutados en modo DSi sin necesidad de una ROM donante
- Aplicaciones homebrew antiguas pueden ejecutarse a través de nds-bootstrap-hb

Desventajas:
- Pequeñísimo riesgo de **bloqueo total** al instalar
- Riesgo ligeramente mayor de ocasionar un bloqueo total si decides [desinstalarlo](uninstalling-unlaunch.html)
- No es compatible con consolas de desarrollo

## ¿Perderé funcionalidades si modifico mi consola?
Si instalas Unlaunch o Flipnote Lenny no se perderá ninguna funcionalidad. Si usas Memory Pit no podrás guardar ni ver fotos en la tarjeta SD a través de la aplicación Cámara DSi mientras Memory Pit esté instalado. Para recuperar la capacidad de ver y guardar fotos en la tarjeta SD, instala Unlaunch o usa un exploit distinto, y elimina el archivo `pit.bin` de Memory Pit.

## ¿Cómo juego a ROMs volcadas de cartuchos de Nintendo DS?
Jugar ROMs volcadas en la consola requiere el uso de una flashcart o de nds-bootstrap, un programa que permite cargar juegos desde la tarjeta SD redirigiendo hacia esta las instrucciones de lectura/escritura originalmente dirigidas a la ranura Slot-1 de la consola.
- Con TWiLight Menu++ puedes navegar por tu tarjeta SD para encontrar ROMs que puedas ejecutar con nds-bootstrap. Las ventajas de usar TWiLight Menu++ son: tener un menú de trucos, configuraciones separadas para cada juego, y evitar las restricciones que conlleva utilizar redireccionadores. En otras palabras, puedes colocar ROMs directamente en tu tarjeta SD y jugar sin más configuraciones. No hay límite de 39 juegos por pantalla, no se requieren hiyaFCW o Unlaunch, y no hay restricciones en cuanto al tamaño disponible en la tarjeta SD
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
- Si quieres cambiar en definitivo la región del sistema, y estás utilizando HiyaCFW, puedes usar [hiyalang](https://github.com/Yoti/cli_hiyalang/releases), de Yoti
- Por último, si quieres cambiar la región en la memoria NAND del sistema, puedes usar [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/), de Mighty Max

## ¿Qué pasó con la guía de instalación de hiyaCFW?
Como hiyaCFW no tiene mucha utilidad y era una parte problemática y confusa de la guía para muchos usuarios, fue movida a la [wiki de DS-Homebrew](https://wiki.ds-homebrew.com/hiyacfw/installing).
- Si fuiste referido a la página en cuestión desde otra guía, las instrucciones que estabas siguiendo muy probablemente estaban desactualizadas. Se te recomienda seguir esta guía en su lugar, ya que es mantenida y constantemente actualizada por los desarrolladores de estos proyectos

## ¿Qué tipo de tarjeta SD debería usar?
- Deberías comprar una tarjeta SD de una marca confiable
- Funcionarán tanto una tarjeta SD de tamaño normal como una tarjeta micro SD con un adaptador
- Cualquier capacidad de entre 1 GB y 2 TB funcionarán. 8 GB suele ser suficiente para el uso general
  - Algunas aplicaciones, como hiyaCFW, pueden ver tiempos de carga prolongados según la capacidad de la tarjeta utilizada
- Se recomienda el uso de tarjetas de velocidad clase 8 o superior

## ¿Puedo usar la tarjeta SD de mi consola en otros sistemas?
Usualmente, sí, con un par de excepciones:
- hiyaCFW solo funcionará en el sistema para el que se configuró. Si intentas usarlo con otra consola, saltará error el 100% de las veces
- Incluso si usas nds-bootstrap o una flashcart, los códigos de amigo en juegos en línea se resetearán cuando se intente entrar en línea usando una consola diferente

## La [página de Unlaunch](https://problemkaputt.de/unlaunch.htm) dice que la versión 2.0 no ha probado ser segura. ¿Debería usar una versión anterior?
La página de Unlaunch no ha sido actualizada desde que se publicó la versión 2.0, cosa que ocurrió hace más de dos años. La gran mayoría de usuarios no han experimentado problemas usando esta versión, así que puede considerarse segura.
