---
title: Solucion de problemas
---

## Unlaunch
### Unlaunch se congela y muestra el mensaje `MISMATCH IN FAT COPIES`

twlnf tiene un error critico en el que no actualiza correctamente toda la NAND después de modificarla, lo que hace que ciertos homebrew (como el instalador de Unlaunch) tire error.

Para solucionar esto, abre [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), y selecciona la opción `Fix FAT copy mismatch`.

### No hay audio o pantalla de inicio al ejectar Launcher (el menú original de DSi) usando Unlaunch

El desarrollador de Unlaunch (nocash) parcheó intencionalmente el sonido del menú y la pantalla de inicio por defecto. Puedes restaurar estas características [reinstalando Unlaunch](installing-unlaunch.html) usando TWiLight Menu++ cambiando la opción "Parches del Launcher" a "Por Defecto" en la página de Ajustes de Unlaunch en los Ajustes de TWiLight Menu++, o usando [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Encender la consola solo muestra una pantalla en negro después de instalar Unlaunch

Intenta extraer la tarjeta SD y encender la consola nuevamente. Si el problema persiste, es posible que tengas que restaurar tu respaldo de la NAND [modificando el hardware de la consola](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Se inicia una aplicación o salta el sistema de archivos de Unlaunch al encender la consola, estoy atascado

La causa más probable es haber una aplicación incorrecta para la opción `NO BUTTON` en Unlaunch. Mantén presionados <kbd class="face">A</kbd> y <kbd class="face">B</kbd> mientras enciendes la consola, ve a `OPTIONS` y establece `NO BUTTON` a la aplicación que quieras ejecutar al inicio.

### Otros problemas de Unlaunch

Si Unlaunch muestra el mensaje `Clusters too large`, `Bad VBR`, `Bad MBR` o no muestra niguna aplicación mientras la tarjeta SD está insertada, es probable que tu tarjeta SD no fuese formateada correctamente. Vuelve a seguir los pasos de [preparación de la tarjeta SD](sd-card-setup.html).

## TWiLight Menu++

Para solución de problemas generales de TWiLight Menu++, revisa su página de [Preguntas Frecuentes y Resolución de problemas](https://wiki.ds-homebrew.com/twilightmenu/faq) en la Wiki de DS-Homebrew.

## Más asistencia

Si has encontrado un problema que no se resuelve con ninguna de las indicaciones anteriores, o que persiste a pesar de seguir las mismas, pide asistencia en el servidor de discord [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4)
