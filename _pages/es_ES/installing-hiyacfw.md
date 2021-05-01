---
title: Instalando hiyaCFW
redirect_from:
  - /guide/installing-hiyacfw
  - /guide/hiyacfw
  - /hiyacfw
  - /hiyacfw-setup
---

{% include toc title="Table of Contents" %}

No actualizar el sistema después de instalar hiyaCFW. Esto eliminará los parches SD de hiyaCFW.
{: .notice--danger}

hiyaCFW es un custom firmware que te permitirá ejecutar la NAND del sistema (almacenamiento interno) de tu tarjeta SD.

Esto te permite instalar tus propias aplicaciones en el menu de Nintendo DSi sin el riesgo de un ladrillo, ya que están instalados en la tarjeta SD para que los problemas se puedan solucionar fácilmente.

También ofrece una fácil instalación de aplicaciones homebrew en el Menú DSi, y muestra una pantalla de presentación personalizada al arrancar.

Esta sección es totalmente opcional. Si el Deslanzamiento es suficiente para ti, puedes detenerte aquí.
{: .notice--primary}

## Requisitos
- Un Nintendo DSi con [Unlaunch](/installing-unlaunch) installado
- Una copia de seguridad de la NAND de tu dispositivo usando dumpTool
   - Si no tienes uno de ellos, sigue nuestra guía de [Dumping NAND](dumping-nand)
- Un dispositivo Windows, macOS o Linux

## Seccion I - Preparando tu Computador para installar hiyaCFW

{% capture windowsPrep %}
<noscript>
   <h3>Windows</h3>
</noscript>

1. Descarga y instala la última versión de [7-Zip](https://www.7-zip.org/download.html)
   - Esto no funcionará con ninguna otra herramienta de extractor de archivos que poseas, como WinRAR. hiyaCFW se basa en el propio 7-Zip y no en un extractor general del archivo
1. Descargar la ultima versión de Windows de [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
   - Si no puedes descargarlo porque es un "virus", revisa el boton permitir o usa un navegador diferente, no es realmente un virus
1. Extracra el hiyaCFW Helper archivo en cualquier lugar en tu computadora
{% endcapture %}

{% capture macosPrep %}
<noscript>
   <h3>macOS</h3>
</noscript>

1. Descarga la última versión de macOS de [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extraiga el archivo hiyaCFW Helper en cualquier lugar de su computadora
{% endcapture %}

{% capture linuxPrep %}
<noscript>
   <h3>Linux</h3>
</noscript>

1. Instala Python 3 usando tu gestor de paquetes si no está instalado
1. Descargar la última versión de Python de [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extraiga el archivo hiyaCFW Helper en cualquier lugar de tu PC
1. Asegúrese de que los paquetes Python necesarios están instalados ejecutando `pip3 install -r requirements.txt` en el directorio que contiene los archivos extraídos
   - Puede instalar pip ejecutando `python3 -m ensurepip`
{% endcapture %}

<div class="tabcontainer">
   <a class="tablinks btn btn--large btn--info delink windows" href="#windowsPrep" onclick="openTab(event, 'windowsPrep')">Windows</a>
   <a class="tablinks btn btn--large btn--info delink macos" href="#macosPrep" onclick="openTab(event, 'macosPrep')">macOS</a>
   <a class="tablinks btn btn--large btn--info delink other" href="#linuxPrep" onclick="openTab(event, 'linuxPrep')">Linux</a>

   <div id="windowsPrep" class="blanktabcontent">{{ windowsPrep | markdownify }}</div>
   <div id="macosPrep" class="blanktabcontent">{{ macosPrep | markdownify }}</div>
   <div id="linuxPrep" class="blanktabcontent">{{ linuxPrep | markdownify }}</div>
</div>

## Seccion II - Añadiendo los hiyaCFW archivos en tu SD card

![Screenshot del HiyaCFW Helper](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Lanza hiyaCFW Helper
  - **Windows:** - Inicie el archivo `HiyaCFW_Helper.exe` extraído del archivo hiyaCFW Helper (puede que necesite desactivar temporalmente su antivirus)
  - **macOS:** - Haga clic derecho en el archivo `HiyaCFW_Helper` extraído del archivo hiyaCFW Helper y elija `Abrir`
  - **Linux:** - Lanza el `HiyaCFW_Helper.py` extraído del archivo hiyaCFW Helper
1. Haga clic en el botón `...` en la caja "Archivo NAND NO$GBA pie de página"
1. Vaya a la copia de seguridad de su NAND y haga click en `Abrir`
1. Pulsa `Start`
1. En la nueva ventana emergente, navega a la raiz de tu tarjeta SD y pulsa `OK`.
   - El proceso puede tardar varios minutos
1. Cuando la aplicación diga "Hecho", cierre de hiyaCFW Helper
1. Cerrar la ventana de terminal

## Sección III - Configurarando Unlaunch y hiyaCFW

1. Enciende tu consola de Nintendo DSi mientras pulsando <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
   - Esto debería llevarte al menú de archivo de Unlaunch
1. Vaya a `OPCIONES` -> `NO BUTTON`
1. Selecciona `hiyaCFW` y pulsa <kbd class="face">A</kbd>
   - Esto hara que el sistema inicie hiyaCFW al arrancar
1. Guarda la configuracion y reinicia la consola
1. Manten pulsado <kbd>SELECT</kbd> al encender tu consola Nintendo DSi para acceder a los ajustes de hiyaCFW
   - Si seleccionaste "Instalar la ultima TWiLight Menu++ en firmware personalizado", para iniciar en la pantalla de inicio de SDNAND en lugar de TWiLight Menu++ vaya a `título de autoarranque` y presione <kbd class="face">A</kbd> para deseleccionarlo.
1. Cambia la configuración a tu gusto, y pulsa <kbd>START</kbd> para continuar

Su sistema arrancará ahora desde la tarjeta SD en lugar de la NAND interna.

Si muestra `Un error ha ocurrido`, por favor vea nuestra pagina [Resolución de problemas](troubleshooting).
{: .notice--warning}

<script src="/assets/js/tabs.js"></script>
