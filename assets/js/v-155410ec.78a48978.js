"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2915],{3850:(e,a,i)=>{i.r(a),i.d(a,{data:()=>o});const o={key:"v-155410ec",path:"/es_ES/faq.html",title:"Preguntas Frecuentes",lang:"es-ES",frontmatter:{title:"Preguntas Frecuentes"},excerpt:"",headers:[{level:2,title:"¿Debería actualizar el sistema?",slug:"¿deberia-actualizar-el-sistema",children:[]},{level:2,title:"¿Cuál es el mejor exploit?",slug:"¿cual-es-el-mejor-exploit",children:[{level:3,title:"Memory Pit",slug:"memory-pit",children:[]},{level:3,title:"Flipnote Lenny",slug:"flipnote-lenny",children:[]},{level:3,title:"Unlaunch",slug:"unlaunch",children:[]}]},{level:2,title:"¿Perderé funcionalidades si modifico mi consola?",slug:"¿perdere-funcionalidades-si-modifico-mi-consola",children:[]},{level:2,title:"¿Cómo juego a ROMs volcadas de cartuchos de Nintendo DS?",slug:"¿como-juego-a-roms-volcadas-de-cartuchos-de-nintendo-ds",children:[]},{level:2,title:"¿Como actualizo mis aplicaciones homebrew?",slug:"¿como-actualizo-mis-aplicaciones-homebrew",children:[]},{level:2,title:"Soy nuevo o me gustaría rehacer mi configuración. ¿Por dónde empiezo?",slug:"soy-nuevo-o-me-gustaria-rehacer-mi-configuracion-¿por-donde-empiezo",children:[]},{level:2,title:"¿Cómo elimino el control parental?",slug:"¿como-elimino-el-control-parental",children:[]},{level:2,title:"¿Puedo cambiar la región de mi consola?",slug:"¿puedo-cambiar-la-region-de-mi-consola",children:[]},{level:2,title:"¿Qué pasó con la guía de instalación de hiyaCFW?",slug:"¿que-paso-con-la-guia-de-instalacion-de-hiyacfw",children:[]},{level:2,title:"¿Qué tipo de tarjeta SD debería usar?",slug:"¿que-tipo-de-tarjeta-sd-deberia-usar",children:[]},{level:2,title:"¿Puedo usar la tarjeta SD de mi consola en otros sistemas?",slug:"¿puedo-usar-la-tarjeta-sd-de-mi-consola-en-otros-sistemas",children:[]},{level:2,title:"La página de Unlaunch dice que la versión 2.0 no ha probado ser segura. ¿Debería usar una versión anterior?",slug:"la-pagina-de-unlaunch-dice-que-la-version-2-0-no-ha-probado-ser-segura-¿deberia-usar-una-version-anterior",children:[]},{level:2,title:"¿Cómo instalo títulos DSiWare?",slug:"¿como-instalo-titulos-dsiware",children:[]}],filePathRelative:"es_ES/faq.md"}},5207:(e,a,i)=>{i.r(a),i.d(a,{default:()=>Z});var o=i(6252);const n=(0,o.uE)('<h2 id="¿deberia-actualizar-el-sistema" tabindex="-1"><a class="header-anchor" href="#¿deberia-actualizar-el-sistema" aria-hidden="true">#</a> ¿Debería actualizar el sistema?</h2><p>No. La Nintendo DSi es capaz de ejecutar aplicaciones Homebrew en cualquier versión, incluyendo la última; sin embargo, actualizar no da ninguna ventaja. La Tienda DSi ha sido dada de baja, al igual que la integración de Facebook a la Cámara DSi. La única otra cosa que hacían las actualizaciones era bloquar flashcarts. También existe un pequeñísimo riesgo de que tu consola sufra de un <strong>bloqueo total</strong> al instalar una actualización, más o menos igual de probable que al instalar Unlaunch.</p><h2 id="¿cual-es-el-mejor-exploit" tabindex="-1"><a class="header-anchor" href="#¿cual-es-el-mejor-exploit" aria-hidden="true">#</a> ¿Cuál es el mejor exploit?</h2><p>Unlaunch suele ser la mejor opción. La única desventaja es que tiene un pequeño riesgo de bloqueo total al instalar. Generalmente se recomienda usar Memory Pit (ya que es el exploit más fácil y más compatible) para instalar Unlaunch, sin embargo, si decides evitar cualquier posible riesgo, se recomienda usar Flipnote Lenny, ya que usar solamente Memory Pit puede causar problemas en ciertos casos. Debajo encontrarás una lista de las ventajas y desventajas de cada exploit:</p><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3><p>Ventajas:</p><ul><li>Rápido y fácil de usar</li><li>Ningún riesgo de dañar la consola, y desinstalar es tan fácil como remover la tarjeta SD o eliminar un archivo</li><li>Compatible con todas las consolas DSi, a no ser que la cámara no funcione y no se haya hecho el tutorial de la aplicación Cámara DSi</li></ul><p>Desventajas:</p><ul><li>Requiere abir la aplicación Cámara DSi cada vez que quieras acceder a aplicaciones homebrew</li><li>No es compatible con ciertas aplicaciones homebrew y títulos en modo DSi debido a que la WRAM sólo es accesible para la CPU ARM7</li><li>Las aplicaciónes homebrew no pueden acceder a la runara Slot-1 (donde van los cartuchos)</li><li>El acceso al procesador de señal digital (DSP) está prohibido, lo que resulta en sonido de baja calidad en GBARunner2</li><li>Fotos en la tarjeta SD no pueden verse en la aplicación Cámara DSi mientras Memory Pit esté instalado, ya que por ahí se accede al exploit <ul><li>La única forma de acceder a las fotos en la tarjeta SD mientras Memory Pit esté instalado, es iniciar una rom volcada de la aplicación Cámara DSi usando nds-boostrap (v0.61.3 o posterior) a través de <strong>TW</strong>i<strong>L</strong>ight Menu++</li></ul></li></ul><h3 id="flipnote-lenny" tabindex="-1"><a class="header-anchor" href="#flipnote-lenny" aria-hidden="true">#</a> Flipnote Lenny</h3><p>Ventajas:</p><ul><li>Mejor compatibilidad con títulos en modo DSi y homebrew, en comparación con Memory Pit</li><li>Ningún riesgo de dañar la consola, y desinstalar es tan fácil como remover la tarjeta SD o eliminar una carpeta</li><li>Mejor sonido en GBARunner2</li></ul><p>Desventajas:</p><ul><li>Requiere Flipnote Studio</li><li>Requiere abrir Flipnote Studio cada vez que quieras acceder a aplicaciones homebrew, lo cual es un poco más lento que usar Memory Pit</li><li>Las aplicaciónes homebrew no pueden acceder a la runara Slot-1 (donde van los cartuchos)</li></ul><h3 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h3><p>Ventajas:</p><ul><li>Permite cargar homebrew y títulos DSiWare inmediatamente al encender la consola, con comandos de acceso rápido opcionales</li><li>Acceso completo a las funciones del sistema sin ninguna restricción, lo que permite: <ul><li>Acceder a la ranura Slot-1, permitiéndote volcar roms de cartuchos de juego y cargar flashcarts incompatibles</li><li>Mejor sonido en GBARunner2</li></ul></li><li>Remueve el bloqueo regional en cartuchos de juego con mejoras DSi o exlcusivos para DSi</li><li>Protección ante la mayoría de formas de ocasionar un bloqueo total</li><li>Juegos con mejoras DSi pueden ser ejecutados en modo DSi sin necesidad de una ROM donante</li><li>Aplicaciones homebrew antiguas pueden ejecutarse a través de nds-bootstrap-hb</li></ul><p>Desventajas:</p>',18),r=(0,o._)("li",null,[(0,o.Uk)("Pequeñísimo riesgo de "),(0,o._)("strong",null,"bloqueo total"),(0,o.Uk)(" al instalar")],-1),l=(0,o._)("li",null,"No es compatible con consolas de desarrollo",-1),s=(0,o._)("h2",{id:"¿perdere-funcionalidades-si-modifico-mi-consola",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#¿perdere-funcionalidades-si-modifico-mi-consola","aria-hidden":"true"},"#"),(0,o.Uk)(" ¿Perderé funcionalidades si modifico mi consola?")],-1),t=(0,o._)("p",null,[(0,o.Uk)("Si instalas Unlaunch o Flipnote Lenny no se perderá ninguna funcionalidad. Si usas Memory Pit no podrás guardar ni ver fotos en la tarjeta SD a través de la aplicación Cámara DSi mientras Memory Pit esté instalado. Para recuperar la capacidad de ver y guardar fotos en la tarjeta SD, instala Unlaunch o usa un exploit distinto, y elimina el archivo "),(0,o._)("code",null,"pit.bin"),(0,o.Uk)(" de Memory Pit.")],-1),u=(0,o._)("h2",{id:"¿como-juego-a-roms-volcadas-de-cartuchos-de-nintendo-ds",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#¿como-juego-a-roms-volcadas-de-cartuchos-de-nintendo-ds","aria-hidden":"true"},"#"),(0,o.Uk)(" ¿Cómo juego a ROMs volcadas de cartuchos de Nintendo DS?")],-1),d=(0,o._)("p",null,"Jugar ROMs volcadas en la consola requiere el uso de una flashcart o de nds-bootstrap, un programa que permite cargar juegos desde la tarjeta SD redirigiendo hacia esta las instrucciones de lectura/escritura originalmente dirigidas a la ranura Slot-1 de la consola.",-1),c=(0,o._)("li",null,"Con TWiLight Menu++ puedes navegar por tu tarjeta SD para encontrar ROMs que puedas ejecutar con nds-bootstrap. Las ventajas de usar TWiLight Menu++ son: tener un menú de trucos, configuraciones separadas para cada juego, y evitar las restricciones que conlleva utilizar redireccionadores. En otras palabras, puedes colocar ROMs directamente en tu tarjeta SD y jugar sin más configuraciones. No hay límite de 39 juegos por pantalla, no se requieren hiyaFCW o Unlaunch, y no hay restricciones en cuanto al tamaño disponible en la tarjeta SD",-1),m={href:"https://wiki.ds-homebrew.com/es-ES/ds-index/forwarders?tab=tab-dsi-sd-card",target:"_blank",rel:"noopener noreferrer"},h={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},p=(0,o._)("h2",{id:"¿como-actualizo-mis-aplicaciones-homebrew",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#¿como-actualizo-mis-aplicaciones-homebrew","aria-hidden":"true"},"#"),(0,o.Uk)(" ¿Como actualizo mis aplicaciones homebrew?")],-1),g=(0,o._)("strong",null,"Unlaunch",-1),b=(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("Ojo, "),(0,o._)("strong",null,"NO"),(0,o.Uk)(" es necesario desinstalar Unlaunch antes de hacer esto")])],-1),f=(0,o._)("strong",null,"hiyaCFW",-1),y=(0,o._)("code",null,"hiya.dsi",-1),_={href:"https://github.com/RocketRobz/hiyaCFW/releases",target:"_blank",rel:"noopener noreferrer"},k=(0,o._)("strong",null,"TWiLight Menu++",-1),v={href:"https://wiki.ds-homebrew.com/twilightmenu/updating-dsi",target:"_blank",rel:"noopener noreferrer"},S=(0,o.uE)("<li><strong>nds-bootstrap</strong> - Copia los archivos <code>nds-bootstrap-hb-release.nds</code> y <code>nds-bootstrap-release.nds</code> a la carpeta <code>_nds</code> en la raíz de tu tarjeta SD <ul><li>Si usas TWiLight Menu++, es muy probable que la última versión de nds-bootstrap esté incluida en TWiLight Menu++</li></ul></li><li><strong>GodMode9i, dumpTool, Forwarder3-DS, etcétera</strong> - Sigue las instrucciones usadas para descargarlos</li>",2),U=(0,o._)("p",null,"Otras aplicaciones homebrew pueden usar otros métodos para actualizar.",-1),j=(0,o._)("h2",{id:"soy-nuevo-o-me-gustaria-rehacer-mi-configuracion-¿por-donde-empiezo",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#soy-nuevo-o-me-gustaria-rehacer-mi-configuracion-¿por-donde-empiezo","aria-hidden":"true"},"#"),(0,o.Uk)(" Soy nuevo o me gustaría rehacer mi configuración. ¿Por dónde empiezo?")],-1),q=(0,o._)("li",null,"Si todavía no has modificado tu consola o quieres actualizar Unlaunch en tu sistema, recomendamos empezar por el inicio de esta guía y continuar con las páginas siguientes. Asegúrate de leer todo en la página de inicio",-1),D={href:"https://wiki.ds-homebrew.com/twilightmenu/installing-dsi",target:"_blank",rel:"noopener noreferrer"},w=(0,o._)("h2",{id:"¿como-elimino-el-control-parental",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#¿como-elimino-el-control-parental","aria-hidden":"true"},"#"),(0,o.Uk)(" ¿Cómo elimino el control parental?")],-1),W={href:"https://mkey.salthax.org",target:"_blank",rel:"noopener noreferrer"},M=(0,o._)("h2",{id:"¿puedo-cambiar-la-region-de-mi-consola",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#¿puedo-cambiar-la-region-de-mi-consola","aria-hidden":"true"},"#"),(0,o.Uk)(" ¿Puedo cambiar la región de mi consola?")],-1),C=(0,o._)("p",null,"Sí, hay distintos métodos para hacerlo, dependiendo de lo que quieras cambiar:",-1),x=(0,o._)("li",null,"El método más simple y seguro es instalar TWiLight Menu++, te permite usar cualquier lenguaje oficial y aún más sin requerir modificaciones de la NAND",-1),z={href:"https://github.com/Yoti/cli_hiyalang/releases",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/Simonsator/cli_hiyalang/releases/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://gbatemp.net/threads/release-dsi-language-patcher.582836/",target:"_blank",rel:"noopener noreferrer"},F=(0,o._)("h2",{id:"¿que-paso-con-la-guia-de-instalacion-de-hiyacfw",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#¿que-paso-con-la-guia-de-instalacion-de-hiyacfw","aria-hidden":"true"},"#"),(0,o.Uk)(" ¿Qué pasó con la guía de instalación de hiyaCFW?")],-1),R={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},N=(0,o.uE)('<ul><li>Si fuiste referido a la página en cuestión desde otra guía, las instrucciones que estabas siguiendo muy probablemente estaban desactualizadas. Se te recomienda seguir esta guía en su lugar, ya que es mantenida y constantemente actualizada por los desarrolladores de estos proyectos</li></ul><h2 id="¿que-tipo-de-tarjeta-sd-deberia-usar" tabindex="-1"><a class="header-anchor" href="#¿que-tipo-de-tarjeta-sd-deberia-usar" aria-hidden="true">#</a> ¿Qué tipo de tarjeta SD debería usar?</h2><ul><li>Deberías comprar una tarjeta SD de una marca confiable</li><li>Funcionarán tanto una tarjeta SD de tamaño normal como una tarjeta micro SD con un adaptador</li><li>Cualquier capacidad de entre 1 GB y 2 TB funcionarán. 8 GB suele ser suficiente para el uso general <ul><li>Algunas aplicaciones, como hiyaCFW, pueden ver tiempos de carga prolongados según la capacidad de la tarjeta utilizada</li></ul></li><li>Se recomienda el uso de tarjetas de velocidad clase 8 o superior</li></ul><h2 id="¿puedo-usar-la-tarjeta-sd-de-mi-consola-en-otros-sistemas" tabindex="-1"><a class="header-anchor" href="#¿puedo-usar-la-tarjeta-sd-de-mi-consola-en-otros-sistemas" aria-hidden="true">#</a> ¿Puedo usar la tarjeta SD de mi consola en otros sistemas?</h2><p>Usualmente, sí, con un par de excepciones:</p><ul><li>hiyaCFW solo funcionará en el sistema para el que se configuró. Si intentas usarlo con otra consola, saltará error el 100% de las veces</li><li>Incluso si usas nds-bootstrap o una flashcart, los códigos de amigo en juegos en línea se resetearán cuando se intente entrar en línea usando una consola diferente</li></ul>',6),T={id:"la-pagina-de-unlaunch-dice-que-la-version-2-0-no-ha-probado-ser-segura-¿deberia-usar-una-version-anterior",tabindex:"-1"},E=(0,o._)("a",{class:"header-anchor",href:"#la-pagina-de-unlaunch-dice-que-la-version-2-0-no-ha-probado-ser-segura-¿deberia-usar-una-version-anterior","aria-hidden":"true"},"#",-1),A={href:"https://problemkaputt.de/unlaunch.htm",target:"_blank",rel:"noopener noreferrer"},O=(0,o._)("p",null,"La página de Unlaunch no ha sido actualizada desde que se publicó la versión 2.0, cosa que ocurrió hace más de dos años. La gran mayoría de usuarios no han experimentado problemas usando esta versión, así que puede considerarse segura.",-1),H=(0,o._)("h2",{id:"¿como-instalo-titulos-dsiware",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#¿como-instalo-titulos-dsiware","aria-hidden":"true"},"#"),(0,o.Uk)(" ¿Cómo instalo títulos DSiWare?")],-1),B=(0,o._)("p",null,"Hay tres formas de jugar títulos DSiWare en una Nintendo DSi:",-1),G=(0,o._)("li",null,"Inicia la rom usando TWiLight Menu++, esta es la forma más sencilla y el único límite es la capacidad de almacenamiento de tu tarjeta SD, sin embargo, algunos títulos tienen problemas de incompatibilidad",-1),I={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/Epicpkmn11/NTM/releases",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://github.com/JeffRuLz/TMFH/releases",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/Epicpkmn11/NTM/releases",target:"_blank",rel:"noopener noreferrer"},V={},Z=(0,i(3744).Z)(V,[["render",function(e,a){const i=(0,o.up)("RouterLink"),V=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n,(0,o._)("ul",null,[r,(0,o._)("li",null,[(0,o.Uk)("Riesgo ligeramente mayor de ocasionar un bloqueo total si decides "),(0,o.Wm)(i,{to:"/es_ES/uninstalling-unlaunch.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("desinstalarlo")])),_:1})]),l]),s,t,u,d,(0,o._)("ul",null,[c,(0,o._)("li",null,[(0,o.Uk)("Los usuarios de hiyaCFW pueden crear redireccionadores a para el Menú DSi de la SDNAND usando la guía para "),(0,o._)("a",m,[(0,o.Uk)("Redireccionadores para juegos de DS"),(0,o.Wm)(V)]),(0,o.Uk)(" en la wiki de DS-Homebrew, pero esto tiene algunas limitaciones. Sólo se pueden tener 39 títulos en pantalla, y es menos conveniente hacerlos que usar TWiLight Menu++ "),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("Si no tienes instalado hiyaCFW y te gustaría usar redireccionadores, puedes seguir la "),(0,o._)("a",h,[(0,o.Uk)("guía de instalación de hiyaCFW"),(0,o.Wm)(V)]),(0,o.Uk)("en la Wiki de DS-Homebrew")])])])]),p,(0,o._)("ul",null,[(0,o._)("li",null,[g,(0,o.Uk)(" - Sigue las instrucciones en la página de "),(0,o.Wm)(i,{to:"/es_ES/installing-unlaunch.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("Instalación de Unlaunch")])),_:1}),b]),(0,o._)("li",null,[f,(0,o.Uk)(" - Reemplaza el archivo "),y,(0,o.Uk)(" en la carpeta raíz de la tarjeta SD con la "),(0,o._)("a",_,[(0,o.Uk)("última versión"),(0,o.Wm)(V)])]),(0,o._)("li",null,[k,(0,o.Uk)(" - Sigue las instrucciones en la "),(0,o._)("a",v,[(0,o.Uk)("Wiki de DS-Homebrew"),(0,o.Wm)(V)])]),S]),U,j,(0,o._)("ul",null,[q,(0,o._)("li",null,[(0,o.Uk)("Si estás en la última versión de Unlaunch, sigue la "),(0,o._)("a",D,[(0,o.Uk)("guía de instalación de TWiLight Menu++"),(0,o.Wm)(V)]),(0,o.Uk)(" para instalar y configurar TWiLight Menu++ en tu sistema")])]),w,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("El "),(0,o._)("a",W,[(0,o.Uk)("generador de mkey"),(0,o.Wm)(V)]),(0,o.Uk)(" puede generar el código que necesitas para eliminar el control parental")])]),M,C,(0,o._)("ul",null,[x,(0,o._)("li",null,[(0,o.Uk)("Si quieres cambiar la región del sistema y usas hiyaCFW, puedes usar "),(0,o._)("a",z,[(0,o.Uk)("hiyalang"),(0,o.Wm)(V)]),(0,o.Uk)(" de Yoti para consolas asiáticas. Para consolas americanas, usa "),(0,o._)("a",L,[(0,o.Uk)("esta versión de hiyalang"),(0,o.Wm)(V)])]),(0,o._)("li",null,[(0,o.Uk)("Por último, si quieres cambiar la región en la memoria NAND del sistema, puedes usar "),(0,o._)("a",P,[(0,o.Uk)("DSi Language Patcher"),(0,o.Wm)(V)]),(0,o.Uk)(", de Mighty Max")])]),F,(0,o._)("p",null,[(0,o.Uk)("Como hiyaCFW no tiene mucha utilidad y era una parte problemática y confusa de la guía para muchos usuarios, fue movida a la "),(0,o._)("a",R,[(0,o.Uk)("wiki de DS-Homebrew"),(0,o.Wm)(V)]),(0,o.Uk)(".")]),N,(0,o._)("h2",T,[E,(0,o.Uk)(" La "),(0,o._)("a",A,[(0,o.Uk)("página de Unlaunch"),(0,o.Wm)(V)]),(0,o.Uk)(" dice que la versión 2.0 no ha probado ser segura. ¿Debería usar una versión anterior?")]),O,H,B,(0,o._)("ul",null,[G,(0,o._)("li",null,[(0,o.Uk)("Instala "),(0,o._)("a",I,[(0,o.Uk)("hiyaCFW"),(0,o.Wm)(V)]),(0,o.Uk)(", y luego instala el título DSiWare usando "),(0,o._)("a",Q,[(0,o.Uk)("NTM"),(0,o.Wm)(V)]),(0,o.Uk)(" o "),(0,o._)("a",Y,[(0,o.Uk)("TMFH"),(0,o.Wm)(V)]),(0,o.Uk)(". Ya que este es el menú original de la consola, hay un límite de 39 títulos, pero la compatibilidad es perfecta")]),(0,o._)("li",null,[(0,o.Uk)("Instala los títulos diréctamente a la NAND de la consola usando "),(0,o._)("a",J,[(0,o.Uk)("NTM"),(0,o.Wm)(V)]),(0,o.Uk)(". Haciendo esto también tendrás compatibilidad perfecta, pero se aplican los límites de los 39 títulos y de 1024 bloques (128 MiB), además de que existe un pequeño riesgo de bloqueo total al escribir a la memoria interna de la consola")])])],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const i=e.__vccOpts||e;for(const[e,o]of a)i[e]=o;return i}}}]);