---
title: "FAQ"
redirect_from:
  - help/faq
---

{% include toc title="Questions" %}

### ¿Qué funcionalidad perderé al modando mi sistema?
- Si decide instalar Unlaunch, no perderá ninguna funcionalidad del sistema
- Si vas con una configuración de pit de memoria, no podrás guardar fotos en la tarjeta SD a través de la aplicación de Cámara Nintendo DSi mientras el exploit está instalado. Cambie a un [exploit alternativo](alternate-exploits) o [instale Unlaunch](/installing-unlaunch)

Esto se debe a que el archivo de metadatos (`pit.bin`) se sobrescribe con el exploit de Memory Pit.

### ¿Cómo puedo jugar a los volcados de cartucho de Nintendo DS?
Reproducir volcados de cartucho en la consola requiere el uso de un flashcart o nds-bootstrap, un programa que permite jugar desde la tarjeta SD interna redirigiendo lecturas slot-1 y escribiendo en ella.
- Con TWiLight Menu++ puedes navegar por tu tarjeta SD para encontrar archivos ROM para jugar con nds-bootstrap. Las ventajas de usar TWiLight Menu++ son tener un menú de trucos por juego, y evitar las restricciones que traen los remitentes. En otras palabras, puede soltar sus archivos ROM directamente y reproducir sin ninguna configuración. No hay límite de títulos 39, ni hiyaCFW ni Unlaunch son necesarios y no hay restricciones en el espacio libre de la tarjeta SD que puedas tener
- los usuarios de hiyaCFW pueden crear [redireccionadores](nds-bootstrap-forwarders) para el Menú DSi de SDNAND, pero tiene algunas limitaciones. Hay un límite duro de 39 títulos, son menos convenientes de hacer y no parchean automáticamente la antipiratería

### ¿Cómo puedo actualizar mi homebrew?
- **Unlaunch** - Siga las instrucciones en la [Instalación de Deslanzamiento](/installing-unlaunch) página
- **hiyaCFW** - Reemplaza `hiya.dsi` en la raíz de la tarjeta SD desde la [versión actualizada](https://github.com/RocketRobz/hiyaCFW/releases)
- **Menú TWiLight ++** - Sigue las instrucciones en la [wiki de GitHub](https://github.com/DS-Homebrew/TWiLightMenu/wiki/updating-%28dsi%29)
- **nds-bootstrap** - Copia `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` a la carpeta `_nds` en la raíz de tu tarjeta SD
   - Si usas TWiLight Menu++, hay una gran probabilidad de que la última versión de nds-bootstrap esté incluida en TWiLight Menu++
- **GodMode9i, dumpTool, MakeForwarder, etc** - Sigue las instrucciones utilizadas para descargarlos

Otros homebrew pueden usar otros métodos para actualizar.

### Soy nuevo o me gustaría rehacer mi configuración. ¿Dónde empiezo?
- Si aún no has modificado tu consola o estás buscando actualizar Unlaunch sin usar hiyaCFW en tu sistema, Recomendamos comenzar desde el principio de la guía y seguir a través de las páginas. Asegúrese de leer todo en la página de inicio
- Si tienes la última versión de Unlaunch pero no quieres hiyaCFW, siga la Sección 1b de [Iniciar el Explosión](launching-the-exploit#twilight-menu) para configurar el Menú TWiLight ++ en su sistema
- Si ya tienes Unlaunch y quieres instalar hiyaCFW, sigue la página [Instalar hiyaCFW](installing-hiyacfw), luego regresa a la página [Instalar Unlaunch](installing-unlaunch) para actualizar Unlaunch
   - hiyaCFW Helper, la herramienta usada para instalar hiyaCFW, viene con la opción de instalar TWiLight Menu++. No hay necesidad de instalar TWiLight Menu++ por separado
   - Posteriormente, ya que utilizamos TWiLight Menu++ para lanzar el instalador de Deslanzamiento, es por eso que actualizamos Unlaunch después de configurar hiyaCFW
