---
title: Preparacion de la tarjeta SD
---

Esta página es para preparar la tarjeta SD para usarla con tu consola. En el proceso, formatearemos la tarjeta SD con un formate adecuado para la Nintendo DSi, y revisaremos la tarjeta en búsqueda de errores.

::: danger

Asegúrate de hacer una copia de seguridad del contenido de tu tarjeta SD antes de seguir esto. El contenido de tu tarjeta SD será ELIMINADO en el proceso.

:::

::::: tabs

:::: tab name="Windows" os="windows"

### Sección I - Formatear tu tarjeta SD con SD Formatter

::: tip

Esta sección formatea la tarjeta SD según las especificaciones de la Asociación de tarjetas SD. Esto puede solucionar muchos problemas que pueden ocurrir con la ejecución de aplicaciones homebrew.

:::

::: danger

Cualquier tarjeta SD de 64GB o mayor será formateada a `exFAT` en este proceso. _Debes_ seguir la sección II para reformatear a `FAT32`.

:::

1. Descargar la última versión de [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/).
   - Aceptar el Acuerdo de Licencia de Usuario Final para iniciar la descarga.
1. Ejecuta `SD Card Formatter Setup` (el archivo `.exe` en el `.zip` descargado) con privilegios de administrador, e instala el programa.
1. Ejecuta `SD Card Formatter` desde el Menú de Inicio con privilegios de administrador.
1. Selecciona tu tarjeta SD.
1. Asegúrate de que la casilla de la opción `Quick Format` esté marcada.
1. Inicia el proceso de formato.

### Sección II - Formatear tu tarjeta SD con GUIFormat

Esta sección formatea tarjetas SD de tamaños mayores a 32GB al formato FAT32.

::: tip

Si tu tarjeta SD es de 32GB o de una menor capacidad, salta a la sección III.

:::

1. Descarga la última versión de [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm).
   - Haz clic en la imagen en el sitio web para descargar la aplicación.
1. Ejecuta GUIFormat con permisos de administrador
1. Selecciona la letra de tu unidad.
1. Establece la opción `Allocation size unit` a `32768`.
   - Si este tamaño de asignación es muy alto para tu tarjeta SD, selecciona el valor más alto que funcione.
1. Asegúrate de que la casilla de la opción `Quick Format` esté marcada.
1. Inicia el proceso de formato.

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)

### Sección III - Comprobación de errores
1. Ve a la ventana Propiedades de tu tarjeta SD.
   - Abre el `Explorador de Windows`, ve a `Equipo` y haz clic derecho en tu tarjeta SD. Luego, haz clic en `Propiedades`.
1. En la pestaña de Herramientas, selecciona la opción `Comprobar ahora`.
1. Marca las casillas `Reparar automáticamente errores en el sistema de archivos` y `Examinar e intentar recuperar sectores defectuosos`.
1. Inicia el proceso de verificación.

Esto escaneará la tarjeta SD y corregirá cualquier error que el sistema encuentre.

### Sección III - Comprobar que se pueden leer y escribir datos de/a la tarjera SD

1. Descarga y extrae [el archivo h2testw](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) en cualquier lugar de tu ordenador.
   - Si el enlace de arriba no funciona, intenta descargar desde [archive.org](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)
   - También se puede extraer en un dispositivo externo mientras ese dispositivo externo no sea tu tarjeta SD.
1. Con tu tarjeta SD insertada en tu ordenador, ejecuta `h2testw.exe`.
1. Selecciona el lenguaje en el que te gustaría ver la interfaz de h2test2. En esta guía se utilizará la interfaz en inglés.
1. Establece como objetivo la letra de unidad de tu tarjeta SD.
1. Asegúrate de que la opción `all available space` esté seleccionada.
1. Haz clic en `Write + Verify`.
- Espera hasta que el proceso se complete.

::: tip

Si la prueba muestra el resultado `Test finished without errors`, tu tarjeta SD está en buen estado y puedes eliminar todos los archivos cuya extensión sea `.h2w` de tu tarjeta SD.

:::

::: danger

Si la prueba muestra otro tipo de resultado, ¡tu tarjeta SD puede estar corrupta o dañada y tendrás que reemplazarla!

:::

::::

:::: tab name="Linux" os="other"

### Sección I - Formatear tu tarjeta SD
1. Asegúrate de que tu tarjeta SD **no** esté insertada en tu máquina Linux.
1. Ejecuta la terminal de Linux
1. Escribe `watch "lsblk"`.
1. Inserta tu tarjeta SD en tu máquina Linux.
1. Observa el mensaje que aparece en pantalla. Debería coincidir con algo como esto:
```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```
1. Toma nota del punto de montaje del dispositivo. En el ejemplo de arriba, era `mmcblk0p1`
   - Si en la fila `RO` el valor está en 1, asegúrate de que la tarjeta SD tiene el slide para la protección de escritura desactivado.
1. Haz la combinación de teclas CTRL + C para salir del menú
1. Sigue las instrucciones pertinentes a la capacidad de tu tarjeta SD:
   - 2GB o menor: Escribe `sudo mkdosfs /dev/(nombre del punto de montaje del dispositivo) -s 64 -F 16` para crear una única particion de formato FAT16 con un tamaño de asignación de 32KB en la tarjeta SD.
   - 4GB o mayor: Escribe `sudo mkdosfs /dev/(nombre del punto de montaje del dispositivo) -s 64 -F 32` para crear una única particion de formato FAT32 con un tamaño de asignación de 32KB en la tarjeta SD.

### Sección II - Usar F3
1. Descarga y extrae [el archivo F3](https://github.com/AltraMayor/f3/archive/v7.2.zip) en cualquier lugar de tu ordenador.
1. Lanza la terminal en el directorio de F3.
1. Ejecuta `make` para compilar F3.
1. Con tu tarjeta SD insertada y montada, ejecuta `./f3write <punto de montura de tu tarjeta SD>`
   - Espera hasta que se complete el proceso. A continuación se muestra un ejemplo de mensaje de resultado:
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. Ejecuta `./f3read <punto de montura de tu tarjeta SD>`
- Espera hasta que se complete el proceso. A continuación se muestra un ejemplo de mensaje de resultado:
   ```
   $ ./f3read /media/michel/6135-3363/
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

::: tip

Si la prueba muestra el resultado `Data LOST: 0. 0 Byte (0 sectors)` tu tarjeta SD está bien y puedes borrar todos los archivos `.h2w` de tu tarjeta SD.

:::

::: danger

Si la prueba muestra otro tipo de resultado, ¡tu tarjeta SD puede estar corrupta o dañada y tendrás que reemplazarla!

:::

::::

:::: tab name="macOS" os="macos"

### Sección I - Formatear tu tarjeta SD con SD Formatter

::: tip

Esta sección formatea la tarjeta SD según las especificaciones de la Asociación de tarjetas SD. Esto puede solucionar muchos problemas que pueden ocurrir con la ejecución de aplicaciones homebrew.

:::

::: danger

Cualquier tarjeta SD de 64GB o mayor será formateada a `exFAT` en este proceso. _Debes_ seguir la sección II para reformatear a `FAT32`.

:::

1. Descarga la última versión de [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/).
   - Acepta el Acuerdo de Licencia de Usuario Final para iniciar la descarga.
1. Ejecuta `Install SD Card Formatter` (el archivo `.mpkg` en el archivo `.zip` descargado).
1. Ejecuta `SD Card Formatter`.
1. Elige tu tarjeta SD.
1. Asegúrate de que la casilla de la opción `Quick Format` esté marcada.
1. Inicia el proceso de formato.

### Sección II - Formatear tu tarjeta SD con Disk Utility

Esta sección formatea tarjetas SD de tamaños mayores a 32GB al formato FAT32.

::: tip

Si tu tarjeta SD es de 32GB o de una menor capacidad, salta a la sección III.

:::

#### OS X El Capitan (10.11) y posteriores

1. Lanza la aplicación Disk Utility
1. Selecciona `Mostrar todos los dispositivos` en el panel `Ver` de la esquina superior izquierda.
1. Selecciona tu tarjeta SD desde la barra lateral.
   - ¡Asegúrate de elegir el dispositivo correcto, de lo contrario podrías borrar accidentalmente la unidad equivocada!
1. Haz clic en `borrar` en la parte superior.
1. Asegúrate de que la opción `Formato` está establecida en `MS-DOS (FAT32)`.
   - Desde las versiones El Capitan (10.11) hasta Catalina (10.15), elige `MS-DOS (FAT)`.
1. Asegúrate de que la opción `Esquema` está establecida a `Master Boot Record`.
   - Si la opción `Esquema` no aparece, haz clic en `Cancelar` y asegúrate de elegir el dispositivo en lugar sólamente un volúmen.
1. Haz clic en `Borrar`, y luego en `Cerrar`.

#### OS X Yosemite (10.10) y anteriores
1. Lanza la aplicación Disk Utility
1. Selecciona tu tarjeta SD desde la barra lateral.
   - ¡Asegúrate de elegir el dispositivo correcto, de lo contrario podrías borrar accidentalmente la unidad equivocada!
1. Haz clic en `Partición` en la parte superior.
   - Si la opción `Partición` aparece, asegúrate de elegir la unidad en lugar de sólo un volumen.
1. Asegúrate de que la opción `Disposición de la Partición` está establecida en `1 Partición`.
1. Asegúrate de que la opción `Formato` está establecida en `MS-DOS (FAT)`.
1. En el botón Opciones (debajo de la tabla de particiones), selecciona `Master Boot Record`.
1. Haz clic en `Aceptar`, luego en `Aplicar` y después en `Particionar`.

### Sección III - Usar F3
1. Abre Terminal
1. Instala F3 desde brew ejecutando `brew install f3`.
   - Si no tienes brew, instálalo siguiendo las instrucciones en [brew.sh](https://brew.sh).
1. Con tu tarjeta SD insertada y montada, ejecuta `./f3write <el punto de montaje de tu tarjeta sd>`.
   - Espera hasta que se complete el proceso. A continuación se muestra un ejemplo de mensaje de resultado:
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. Ejecuta `./f3read <el punto de montaje de tu tarjeta sd>`
   - Espera hasta que se complete el proceso. A continuación se muestra un ejemplo de mensaje de resultado:
   ```
   $ f3read /Volumes/SD\ CARD
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

::: tip

Si la prueba muestra el resultado `Data LOST: 0. 0 Byte (0 sectors)` tu tarjeta SD está bien y puedes borrar todos los archivos `.h2w` de tu tarjeta SD.

:::

::: danger

Si la comprobación muestra otro tipo de resultado, ¡tu tarjeta SD puede estar corrupta o dañada y tendrás que reemplazarla!

:::

::::

:::::

::: tip

Ahora puedes restaurar el contenido de tu tarjeta SD y continuar.

:::

