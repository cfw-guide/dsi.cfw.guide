"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27],{7969:(e,a,n)=>{n.r(a),n.d(a,{data:()=>l});const l={key:"v-22fdbea8",path:"/es_ES/troubleshooting.html",title:"Solucion de problemas",lang:"es-ES",frontmatter:{title:"Solucion de problemas"},excerpt:"",headers:[{level:2,title:"Unlaunch",slug:"unlaunch",children:[{level:3,title:"Unlaunch se congela y muestra el mensaje MISMATCH IN FAT COPIES",slug:"unlaunch-se-congela-y-muestra-el-mensaje-mismatch-in-fat-copies",children:[]},{level:3,title:"No hay audio o pantalla de inicio al ejectar Launcher (el menú original de DSi) usando Unlaunch.",slug:"no-hay-audio-o-pantalla-de-inicio-al-ejectar-launcher-el-menu-original-de-dsi-usando-unlaunch",children:[]},{level:3,title:"Encender la consola solo muestra una pantalla en negro después de instalar Unlaunch.",slug:"encender-la-consola-solo-muestra-una-pantalla-en-negro-despues-de-instalar-unlaunch",children:[]},{level:3,title:"Después de instalar Unlaunch, estoy atascado ya que se inicia una aplicación o salta el sistema de archivos de Unlaunch.",slug:"despues-de-instalar-unlaunch-estoy-atascado-ya-que-se-inicia-una-aplicacion-o-salta-el-sistema-de-archivos-de-unlaunch",children:[]},{level:3,title:"Otros problemas de Unlaunch",slug:"otros-problemas-de-unlaunch",children:[]}]},{level:2,title:"TWiLight Menu++",slug:"twilight-menu",children:[]},{level:2,title:"Más asistencia",slug:"mas-asistencia",children:[]}],filePathRelative:"es_ES/troubleshooting.md",git:{updatedTime:1640748342e3,contributors:[{name:"triangle",email:"79382000+spellboundtriangle@users.noreply.github.com",commits:1}]}}},5405:(e,a,n)=>{n.r(a),n.d(a,{default:()=>H});var l=n(6252);const s=(0,l.uE)('<h2 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h2><h3 id="unlaunch-se-congela-y-muestra-el-mensaje-mismatch-in-fat-copies" tabindex="-1"><a class="header-anchor" href="#unlaunch-se-congela-y-muestra-el-mensaje-mismatch-in-fat-copies" aria-hidden="true">#</a> Unlaunch se congela y muestra el mensaje <code>MISMATCH IN FAT COPIES</code></h3><p>twlnf tiene un error critico en el que no actualiza correctamente toda la NAND después de modificarla, lo que hace que ciertos homebrew (como el instalador de Unlaunch) tire error.</p><p>Si bien se puede solucionar, el método no es exacto y varia en gran medida según el sistema. Un posible método es eliminar todos los títulos DSiWare instalados a través de twlnf, pero también ha habido reportes de que mover <em>todos</em> los títulos DSiWare a la tarjeta SD y luego de vuelta al sistema puede ayudar en algunos casos.</p><p>Si has hecho un downgrade del firmware de tu consola en el pasado, actualizarlo a la versión 1.4.5 (o 1.4.6 si la región de tu consola es China o Corea), también podría solucionar el error.</p><p>Si el problema persiste, prueba esto:</p>',6),o=(0,l.Uk)("Monta el respaldo de tu NAND con "),i={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},r=(0,l.Uk)("ninfs"),t=(0,l.Uk)(", y marca la opción "),u=(0,l._)("code",null,"Allow writing",-1),c=(0,l.Uk)("."),d=(0,l.Uk)("Una vez montado el respaldo de tu NAND, monta "),h=(0,l._)("code",null,"twl_main.img",-1),p=(0,l.Uk)(". Si usas Windows, puedes usar "),m={href:"https://www.osforensics.com/tools/mount-disk-images.html",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("OSFMount"),b=(0,l.Uk)(" para montar la imagen."),f=(0,l._)("li",null,[(0,l.Uk)("Desmonta "),(0,l._)("code",null,"twl_main.img"),(0,l.Uk)(", luego desmonta el respaldo de la NAND en ninfs. Si la NAND se guarda, sigue las instrucciones de "),(0,l._)("a",{href:"restoring-nand"},"Restaurar la NAND"),(0,l.Uk)(" y continua con la "),(0,l._)("a",{href:"installing-unlaunch"},"instalación de Unlaunch"),(0,l.Uk)(".")],-1),U=(0,l._)("h3",{id:"no-hay-audio-o-pantalla-de-inicio-al-ejectar-launcher-el-menu-original-de-dsi-usando-unlaunch",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#no-hay-audio-o-pantalla-de-inicio-al-ejectar-launcher-el-menu-original-de-dsi-usando-unlaunch","aria-hidden":"true"},"#"),(0,l.Uk)(" No hay audio o pantalla de inicio al ejectar Launcher (el menú original de DSi) usando Unlaunch.")],-1),k=(0,l.Uk)("El desarrollador de Unlaunch (nocash) intencionalmente parchea el sonido de fondo y la pantalla de inicio por defecto. Puedes recuperar estos efectos "),_=(0,l._)("a",{href:"installing-unlaunch"},"reinstalando Unlaunch",-1),y=(0,l.Uk)(" usando TWiLight Menu ++, o usando "),v={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},S=(0,l.Uk)("hiyaCFW"),w=(0,l.Uk)("."),D=(0,l._)("h3",{id:"encender-la-consola-solo-muestra-una-pantalla-en-negro-despues-de-instalar-unlaunch",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#encender-la-consola-solo-muestra-una-pantalla-en-negro-despues-de-instalar-unlaunch","aria-hidden":"true"},"#"),(0,l.Uk)(" Encender la consola solo muestra una pantalla en negro después de instalar Unlaunch.")],-1),N=(0,l.Uk)("Intenta extraer la tarjeta SD y encender la consola nuevamente. Si el problema persiste, es posible que tengas que restaurar el chip de la NAND "),j={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},q=(0,l.Uk)("modificando el hardware de la consola"),M=(0,l.Uk)("."),W=(0,l.uE)('<h3 id="despues-de-instalar-unlaunch-estoy-atascado-ya-que-se-inicia-una-aplicacion-o-salta-el-sistema-de-archivos-de-unlaunch" tabindex="-1"><a class="header-anchor" href="#despues-de-instalar-unlaunch-estoy-atascado-ya-que-se-inicia-una-aplicacion-o-salta-el-sistema-de-archivos-de-unlaunch" aria-hidden="true">#</a> Después de instalar Unlaunch, estoy atascado ya que se inicia una aplicación o salta el sistema de archivos de Unlaunch.</h3><p>Es probable que esto fuese causado por elegir una aplicación incorrecta para la opción <code>NO BUTTON</code> en Unlaunch. Mantén presionados <kbd class="face">A</kbd> y <kbd class="face">B</kbd> mientras enciendes la consola, ve a <code>OPTIONS</code> y establece <code>NO BUTTON</code> a la aplicación que quieras ejecutar al inicio.</p><h3 id="otros-problemas-de-unlaunch" tabindex="-1"><a class="header-anchor" href="#otros-problemas-de-unlaunch" aria-hidden="true">#</a> Otros problemas de Unlaunch</h3><p>Si Unlaunch muestra el mensaje <code>Clusters too large</code>, <code>Bad VBR</code>, <code>Bad MBR</code> o no muestra niguna aplicación mientras la tarjeta SD está insertada, es probable que tu tarjeta SD no fuese formateada correctamente. Vuelve a seguir los pasos de <a href="sd-card-setup">preparación de la tarjeta SD</a>.</p><h2 id="twilight-menu" tabindex="-1"><a class="header-anchor" href="#twilight-menu" aria-hidden="true">#</a> TWiLight Menu++</h2>',5),T=(0,l.Uk)("Para solución de problemas generales de TWiLight Menu++, revisa su página de "),A={href:"https://wiki.ds-homebrew.com/twilightmenu/faq",target:"_blank",rel:"noopener noreferrer"},O=(0,l.Uk)("Preguntas Frecuentes y Resolución de problemas"),x=(0,l.Uk)(" en la Wiki de DS-Homebrew."),E=(0,l._)("h2",{id:"mas-asistencia",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#mas-asistencia","aria-hidden":"true"},"#"),(0,l.Uk)(" Más asistencia")],-1),C=(0,l.Uk)("Si has encontrado un problema que no se resuelve con ninguna de las indicaciones anteriores, o que persiste a pesar de seguir las mismas, pide asistencia en el servidor de discord "),I={href:"https://discord.gg/yD3spjv",target:"_blank",rel:"noopener noreferrer"},B=(0,l.Uk)("DS"),L=(0,l._)("sup",null,"(i)",-1),P=(0,l.Uk)(" Mode Hacking!"),F={},H=(0,n(3744).Z)(F,[["render",function(e,a){const n=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[s,(0,l._)("ol",null,[(0,l._)("li",null,[o,(0,l._)("a",i,[r,(0,l.Wm)(n)]),t,u,c]),(0,l._)("li",null,[d,h,p,(0,l._)("a",m,[g,(0,l.Wm)(n)]),b]),f]),U,(0,l._)("p",null,[k,_,y,(0,l._)("a",v,[S,(0,l.Wm)(n)]),w]),D,(0,l._)("p",null,[N,(0,l._)("a",j,[q,(0,l.Wm)(n)]),M]),W,(0,l._)("p",null,[T,(0,l._)("a",A,[O,(0,l.Wm)(n)]),x]),E,(0,l._)("p",null,[C,(0,l._)("a",I,[B,L,P,(0,l.Wm)(n)])])],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const n=e.__vccOpts||e;for(const[e,l]of a)n[e]=l;return n}}}]);