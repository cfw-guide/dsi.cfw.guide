---
title: Solucion de problemas
---

## Unlaunch
### Unlaunch se congela y muestra el mensaje `MISMATCH IN FAT COPIES`

twlnf tiene un error critico en el que no actualiza correctamente toda la NAND después de modificarla, lo que hace que ciertos homebrew (como el instalador de Unlaunch) tire error.

Para solucionar esto, abre [NAND Rirle Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), y selecciona la opción `Fix FAT copy mismatch`.

Si el problema persiste, prueba esto:
1. Monta el respaldo de tu NAND con [ninfs](https://github.com/ihaveamac/ninfs/releases), y marca la opción `Allow writing`.
1. Una vez montado el respaldo de tu NAND, monta `twl_main.img`. Si usas Windows, puedes usar [OSFMount](https://www.osforensics.com/tools/mount-disk-images.html) para montar la imagen.
1. Desmonta `twl_main.img`, luego desmonta el respaldo de la NAND en ninfs. Si la NAND se guarda, sigue las instrucciones de [Restaurar la NAND](restoring-nand) y continua con la [instalación de Unlaunch](installing-unlaunch).

### No hay audio o pantalla de inicio al ejectar Launcher (el menú original de DSi) usando Unlaunch.

El desarrollador de Unlaunch (nocash) intencionalmente parchea el sonido de fondo y la pantalla de inicio por defecto. Puedes recuperar estos efectos [reinstalando Unlaunch](installing-unlaunch) usando TWiLight Menu ++, o usando [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Encender la consola solo muestra una pantalla en negro después de instalar Unlaunch.

Intenta extraer la tarjeta SD y encender la consola nuevamente. Si el problema persiste, es posible que tengas que restaurar el chip de la NAND [modificando el hardware de la consola](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Después de instalar Unlaunch, estoy atascado ya que se inicia una aplicación o salta el sistema de archivos de Unlaunch.

Es probable que esto fuese causado por elegir una aplicación incorrecta para la opción `NO BUTTON` en Unlaunch. Mantén presionados <kbd class="face">A</kbd> y <kbd class="face">B</kbd> mientras enciendes la consola, ve a `OPTIONS` y establece `NO BUTTON` a la aplicación que quieras ejecutar al inicio.

### Otros problemas de Unlaunch

Si Unlaunch muestra el mensaje `Clusters too large`, `Bad VBR`, `Bad MBR` o no muestra niguna aplicación mientras la tarjeta SD está insertada, es probable que tu tarjeta SD no fuese formateada correctamente. Vuelve a seguir los pasos de [preparación de la tarjeta SD](sd-card-setup).

## TWiLight Menu++

Para solución de problemas generales de TWiLight Menu++, revisa su página de [Preguntas Frecuentes y Resolución de problemas](https://wiki.ds-homebrew.com/twilightmenu/faq) en la Wiki de DS-Homebrew.

## Más asistencia

Si has encontrado un problema que no se resuelve con ninguna de las indicaciones anteriores, o que persiste a pesar de seguir las mismas, pide asistencia en el servidor de discord [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/yD3spjv)
