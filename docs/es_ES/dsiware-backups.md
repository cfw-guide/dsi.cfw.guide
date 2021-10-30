---
---

# Respaldos de DSiWare

## Requisitos
- La ultima version de [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - Descargar el archivo, extraer su contenido y colocar `GodMode9i` en cualquier lugar de tu tarjeta SD.

## Nintendo DSi - Instrucciones

### Sección I - Identificar el título DSiWare deseado
1. Ejecuta GodMode9i y seleccióna `[nand:] SYSNAND`.
1. Navega hacia la carpeta `title`.
1. Elige la carpeta correspondiente a la categoría de DSiWare que estás buscando.
   - `00030004`: DSiWare estandar.
   - `00030005`: Herramientas de entretenimiento preinstaladas.
   - `0003000f`: Datos del sistema (no son archivos de DSiWare, no pueden ser ejecutados).
   - `00030015`: Herramientas base del sistema.
   - `00030017`: Launcher por defecto de la consola.
1. Una vez elegido el tipo de DSiWare que quieras extraer, entre en la subcarpeta correspondiente y luego a la carpeta `content`.
1. Debería haber una archivo `.app` visible. Selecciona el archivo y elige la opción `Show NDS file info`. Esto servirá para confirmar que es el título DSiWare que estás buscando.
   - Si no lo es, continúa buscando en las carpetas hasta que lo encuentres.
   - No puedes ver la información NDS de los archivos en `0003000f` porque no son títulos DSiWare ejecutables y no contienen información de banner válida.

### Sección II - Extraer el título deseado
1. Resalta el archivo `.app`, luego presiona <kbd class="face">Y</kbd> para añadirlo al portapapeles.
1. Navega hasta el directorio de la tarjeta SD en la que quieras volcar el título DSiWare.
1. Presiona <kbd class="face">Y</kbd> nuevamente para pegar el título DSiWare en el directorio en el que te encuentras.
   - Puedes cambiar el nombre del archivo después de pegarlo presionando <kbd class="face">X</kbd> mientras mantienes <kbd class="R">R</kbd>.
   - Repite esto para todos los archivos que quieras copiar en el mismo directorio.

Ahora deberías ver el título DSiWare en TWiLight Menu++ o el sistema de archivos de Unlaunch.

### Sección III - Extraer el archivo de guardado (opcional)
1. En la misma carpeta que contiene `content` del título DSiWare específico, también habrá una carpeta llamada `data`.
1. Dentro de esta carpeta está el archivo de guardado. Copia este archivo y pégalo en tu tarjeta SD de la misma forma que hiciste con el título DSiWare.
   - Unlaunch y nds-bootstrap usan las extensiones de archivo `.pub` y `.prv` para identificar archivos de guardado de títulos DSiWare. Si el archivo de guardado se llamaba originalmente `public.sav`, usa la extensión `.pub`. Si en cambio se llamaba `private.sav` originalmente, usa la extensión `.prv` en su lugar.
   - Si deseas utilizar el archivo de guardado de título DSiWare en TWiLight Menu++, asegúrate de colocarlo en la carpeta llamda `saves` que se encuentra en el mismo lugar que la ROM. Si esta no existe, créala manualmente.
