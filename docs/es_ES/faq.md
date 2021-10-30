---
---

# Preguntas Frecuentes

## ¿Qué funcionalidad perderé al modificar mi sistema?
- Si decides instalar Unlaunch, no perderás ninguna funcionalidad del sistema.
- Si decides irte por la vía de utilizar sólamente Memory Pit para acceder a Homebrew y Firmware personalizado, no podrás guardar fotos en la tarjeta SD a través de la Cámara DSi mientras el exploit esté instalado. Cambia a un [exploit alternativo](alternate-exploits) o sigue la guía para [instalar Unlaunch](installing-unlaunch).
   - Esto se debe a que el archivo de metadatos (`pit.bin`) se sobrescribe con el exploit de Memory Pit.

## ¿Cómo juego a ROMs volcadas de cartuchos de Nintendo DS?
Jugar ROMs volcadas en la consola requiere el uso de una flashcart o de nds-bootstrap, un programa que permite cargar juegos desde la tarjeta SD redirigiendo hacia esta las instrucciones de lectura/escritura originalmente dirigidas a la ranura Slot-1 de la consola.
- Con TWiLight Menu++ puedes navegar por tu tarjeta SD para encontrar ROMs que puedas ejecutar con nds-bootstrap. Las ventajas de usar TWiLight Menu++ son: tener un menú de trucos, configuraciones separadas para cada juego, y evitar las restricciones que conlleva utilizar redireccionadores. En otras palabras, puedes colocar ROMs directamente en tu tarjeta SD y jugar sin más configuraciones. No hay límite de 39 juegos por pantalla, no se requieren hiyaFCW o Unlaunch, y no hay restricciones en cuanto al tamaño de la tarjeta SD.
- Los usuarios de giyaCFW pueden crear redireccionadores a para el Menú DSi de la SDNAND usando la guía para [Redireccionadores para juegos de DS](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) en la wiki de DS-Homebrew, pero esto tiene algunas limitaciones. Sólo se pueden tener 39 títulos en pantalla, y es menos conveniente hacerlos que usar TWiLight Menu++.
   - Si no tienes instalado hiyaCFW y te gustaría usar redireccionadores, puedes seguir la [guía de instalación de hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing)en la Wiki de DS-Homebrew.

## ¿Como actualizo mi Homebrew?
- **Unlaunch** - Sigue las instrucciones en la página de [Instalación de Unlaunch](installing-unlaunch).
   - Ojo, **NO** es necesario desinstalar Unlaunch antes de hacer esto.
- **hiyaCFW** - Reemplaza el archivo `hiya.dsi` en la raíz de la tarjeta SD con la [última versión](https://github.com/RocketRobz/hiyaCFW/releases).
- **TWiLight Menu++** - Sigue las instrucciones en la [Wiki de DS Homebrew](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copia los archivos `nds-bootstrap-hb-release.nds` y `nds-bootstrap-release.nds` a la carpeta `_nds` en la raíz de tu tarjeta SD.
   - Si usas TWiLight Menu++, hay una gran probabilidad de que la última versión de nds-bootstrap esté incluida en TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etcétera** - Sigue las instrucciones usadas para descargarlos.

Otros homebrew pueden utilizar otros métodos para actualizarse.

## Soy nuevo o me gustaría rehacer mi configuración. ¿Dónde empiezo?
- Si todavía no has modificado tu consola o quieres actualizar Unlaunch en tu sistema, recomendamos empezar por el inicio de esta guía y continuar con las páginas siguientes. Asegúrate de leer todo en la página de inicio.
- Si tienes la última versión de Unlaunch, sigue la Sección 1B de [Lanzar el Exploit](launching-the-exploit.html#twilight-menu) para configurar TWiLight Menu++ en tu sistema.

## ¿Cómo elimino el control parental?
- El [generador de mkey](https://mkey.salthax.org) puede generar el código que necesitas para eliminar el control parental.

## ¿Puedo cambiar la región de mi consola?
Sí, hay distintos métodos para hacerlo, dependiendo de lo que quieras cambiar.
- El método más simple y seguro es instalar TWiLight Menu++, te permite usar cualquier lenguaje oficial y aún más sin requerir modificaciones de la NAND.
- Si quieres cambiar en definitivo la región del sistema, y estás utilizando jiyaCFW, puedes usar el [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) de Yoti.
- Por último, si quieres cambiar la región en la memoria NAND del sistema, puedes usar el [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/) de Mighty Max.

## ¿Qué pasó con la guía de instalación de hiyaCFW?
Como hiyaCFW no tiene mucha utilidad y era una parte problemática y confusa para muchos usuarios, fue trasladada a la [wiki de DS-Homebrew](https://wiki.ds-homebrew.com/hiyacfw/installing).
- Si fuiste referido a la página en cuestión desde otra guía, las instrucciones que estabas siguiendo muy probablemente estaban desactualizadas. Se te recomienda seguir esta guía en su lugar, ya que es mantenida y constantemente actualizada por los desarrolladores de estos proyectos.
