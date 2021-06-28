---
title: Solución de problemas
---

{% include toc title="Table of Contents" %}

## Desactivar
### ¿Desactivar los congelos en `MISMATCH EN COPIES FAT`?
twlnf tiene un error critico donde no actualiza correctamente toda la NAND después de modificarla, que hace que ciertos homebrew (como el instalador de Unlauning) arroje un error.

Aunque es fijable, el método para hacerlo no está en piedra y en gran medida varía entre sistemas. Un método es eliminar cualquier DSiWare instalado a través de twlnf en el pasado, pero también se ha informado de que mover *todo* DSiWare a la tarjeta SD y volver al sistema puede ayudar en algunos casos.

Si ha degradado el sistema en el pasado, actualizando de nuevo a v1.4.5 (o v1.4.6 si tu región de DS es china o coreano) también puede ayudar a este error.

### No hay audio o arranque al iniciar "LAUNCHER" usando Unlaunch

The developer of Unlaunch (nocash) has intentionally patched out the background audio and boot-splash by default. Puedes recuperar estos efectos reinstalando [Unlaunch](/installing-unlaunch) usando TWiLight Menu++.
