---
title: Hacer Copia de Seguridad de la NAND
---

Esta página es para hacer un respaldo de la NAND, es decir, una copia de los datos en el almacenamiento interno de la consola. Puedes usar este respaldo para configurar HiyaCFW, también para usarlo con los emuladores no$gba y melonDS para emular una consola Nintendo DSi.

::: tip

Se recomienda encarecidamente realizar este proceso. Un respaldo de la NAND de tu consola se puede usar para restaurar el sistema en el futuro, en caso que tu sistema deje de funcionar.

:::

## Sección I - Configuración de la tarjeta SD

::: tip

Si ya has descargado dumpTool desde otra sección de esta guía, puedes saltarte esta sección.

:::

1. Descarga la última versión de [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Coloca `dumpTool.nds` en cualquier lugar de tu tarjeta SD


## Seccion II - Volcar la NAND

1. Inicia `dumpTool` desde TWiLight Menu++
1. Presiona el botón <kbd class="face">A</kbd> de la Nintendo DSi para empazar a volcar la NAND
   - Hacer un respaldo de la NAND usualmente toma al rededor de 7 minutos
1. Cuando el respaldo esté completo, presiona el botón <kbd>START</kbd> de tu consola para salir de dumpTool
1. Apaga la consola e introduce la tarjeta SD en tu dispositivo
1. Guarda este respaldo en un lugar seguro, donde no puedas perderlo
   - De ser posible, haz multiples copias y almacénalas en dispositivos distintos
   - Cuando lo hayas guardado en otro lugar, puedes borrarlo de la tarjeta SD

::: warning

El hash SHA1 del archivo `nand.bin` no concordará con el hash almacenado en el archivo `nand.bin.sha1`. Esto se debe a que dumpTool añade datos adicionales llamados "no$gba footer" al archivo `nand.bin` después de calcular el hash SHA1. Puedes usar [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)para crear una copia sin dichos datos.

:::

::: tip

Continuar a [Instalar Unlaunch](installing-unlaunch.html) (Opcional)

:::
