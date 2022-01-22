---
title: Volcar la memoria NAND
---

Esta página es para hacer una copia de seguridad NAND, que es una copia de los datos en el almacenamiento interno de la Nintendo DSi. Se puede utilizar para configurar hiyaCFW, así como no$gba y melonDS para la emulación DSi.

::: tip

Se recomienda encarecidamente que haga esto. Una copia de seguridad NAND se puede utilizar como punto de restauración en el futuro, en caso de tener un fallo en el sistema.

:::

## Sección I - Configuración de la tarjeta SD

::: tip

¿Utilizas Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) para configurar automáticamente tu tarjeta SD.

:::

1. Descarga la última versión de [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds).
1. Coloca `dumpTool.nds` en cualquier lugar de tu tarjeta SD.

## Seccion II - Volcar la NAND
1. Inicia `dumpTool` desde TWiLight Menu++
1. Presiona el botón <kbd class="face">A</kbd> de la Nintendo DSi para empazar a volcar la NAND.
   - Hacer un respaldo de la NAND usualmente toma al rededor de 7 minutos.
1. Cuando el respaldo esté completo, presiona el botón <kbd>START</kbd> de tu consola para salir de dumpTool.
1. Apaga la consola e introduce la tarjeta SD en tu dispositivo.
1. Guarda este respaldo en un lugar seguro, donde no lo perderás.
   - De ser posible, haz multiples copias y almacénalas en dispositivos distintos.
   - Cuando lo hayas guardado en otro lugar, puedes borrarlo de la tarjeta SD.

::: warning

El hash SHA1 del archivo `nand.bin` no concordará con el hash almacenado en el archivo `nand.bin.sha1`. Esto se debe a que dumpTool añade datos adicionales conocidos como no$gba footer al archivo `nand.bin` después de calcular el hash SHA1. Puedes usar [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)para crear una copia sin dichos datos.

:::

::: tip

Continua a [Instalar Unlaunch](installing-unlaunch) (Optional, not compatible with Nintendo DSi development consoles)

:::
