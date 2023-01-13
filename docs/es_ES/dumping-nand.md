---
title: Hacer Copia de Seguridad de la NAND
---

Esta página es para hacer un respaldo de la NAND, es decir, una copia de los datos en el almacenamiento interno de la consola. Puedes usar este respaldo para configurar HiyaCFW, también para usarlo con los emuladores no$gba y melonDS para emular una consola Nintendo DSi.

::: tip

Make sure the SD card has at least 250MB of free space, or else you'll run into an error message in dumpTool.

:::

::: tip

It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.

:::

## Sección I - Configuración de la tarjeta SD

::: tip

If you have already downloaded dumpTool from another section of this guide, you can skip this section.

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

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
