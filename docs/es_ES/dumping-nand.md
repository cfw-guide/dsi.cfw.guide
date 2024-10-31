# Hacer Copia de Seguridad de la NAND

Esta página es para hacer un respaldo de la NAND, es decir, una copia de los datos en el almacenamiento interno de la consola. Puedes usar este respaldo para configurar HiyaCFW, también para usarlo con los emuladores no$gba y melonDS para emular una consola Nintendo DSi.

::: tip

Asegúrate de que la tarjeta SD tenga al menos 250MB de espacio libre, o de lo contrario te encontrarás con un mensaje de error en dumpTool.

:::

::: tip

Se recomienda encarecidamente realizar este proceso. Un respaldo de la NAND de tu consola se puede usar para restaurar el sistema en el futuro, en caso que tu sistema deje de funcionar.

:::

## Sección I - Configuración de la tarjeta SD

::: tip

Si ya has descargado dumpTool desde otra sección de esta guía, puedes saltarte esta sección.

:::

1. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Place `dumpTool.nds` anywhere on your SD card

## Seccion II - Volcar la NAND

1. Launch `dumpTool` through TWiLight Menu++
2. Presiona el botón <kbd class="face">A</kbd> de la Nintendo DSi para empazar a volcar la NAND
   - Hacer un respaldo de la NAND usualmente toma al rededor de 7 minutos
3. Cuando el respaldo esté completo, presiona el botón <kbd>START</kbd> de tu consola para salir de dumpTool
4. Apaga la consola e introduce la tarjeta SD en tu dispositivo
5. Guarda este respaldo en un lugar seguro, donde no puedas perderlo
   - De ser posible, haz multiples copias y almacénalas en dispositivos distintos
   - Cuando lo hayas guardado en otro lugar, puedes borrarlo de la tarjeta SD

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
