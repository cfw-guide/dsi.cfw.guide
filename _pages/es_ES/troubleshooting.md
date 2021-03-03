---
title: Solución de problemas
---

{% include toc title="Table of Contents" %}

## Desactivar
### ¿Desactivar los congelos en `MISMATCH EN COPIES FAT`?
twlnf tiene un error critico donde no actualiza correctamente toda la NAND después de modificarla, que hace que ciertos homebrew (como el instalador de Unlauning) arroje un error.

Aunque es fijable, el método para hacerlo no está en piedra y en gran medida varía entre sistemas. Un método es eliminar cualquier DSiWare instalado a través de twlnf en el pasado, pero también se ha informado de que mover *todo* DSiWare a la tarjeta SD y volver al sistema puede ayudar en algunos casos.

Si ha degradado el sistema en el pasado, actualizando de nuevo a v1.4.5 (o v1.4.6 si tu región de DS es o coreano) también puede ayudar a este error.

### No hay audio o arranque al iniciar "LAUNCHER" usando Unlaunch

El dev de Unlaunch (nocash) ha parcheado intencionalmente el audio en segundo plano y arranque de forma predeterminada. Puedes recuperar estos efectos reinstalando [Unlaunch](/installing-unlaunch) usando TWiLight Menu++.

## hiyaCFW
### "Ha ocurrido un error"
Hay varias razones que tu puedes obtener este error:

- **Demasiado espacio libre:** El menú del Nintendo DSi tiene un error que limita la cantidad de espacio libre que puede haber. Aunque esto no ocurre en la NAND (ya que el chip nunca puede exceder los 128 MB), puede suceder usando una tarjeta SD. Lo que funciona y lo que no pasa por cada otra gama de dos gigabytes. Por ejemplo, tener 0-2 GB de espacio libre funciona, pero 2-4 GB no. Lo mismo puede decirse de 4-6 GB vs 6-8, hasta que llegues al tamaño de tu tarjeta SD. Sin embargo, la última versión de hiyaCFW puede crear archivos dummy así que asegúrate de descargar la última versión de [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) y colocar `hiya. si` de "para tarjeta SD SDNAND" a la raíz de tu tarjeta SD.
- **Más de 39 títulos:** Hay un límite de 39 títulos en su menú del sistema de DSi. Eliminar cualquier carpeta adicional de `/title`
- **Demasiado DSiWare:** También hay un límite de 200 bloques (25MB) para DSiWare en la carpeta `00030004`. Esto se puede solucionar instalando como aplicaciones del sistema usando [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest)
- **Título inválido:** Hay varios parámetros que necesita tener en cuenta al agregar títulos a hiyaCFW:
   - Los respaldos de cartucho no pueden ser ejecutados sin ser manejados por un [fowarder](/nds-bootstrap-forwarder)
   - Hay varios argumentos que deben pasarse al constructor `.app` para funcionar desde el menú del sistema DSi
