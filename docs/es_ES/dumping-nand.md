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

1. Descarga la última versión de [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Coloca `dumpTool.nds` en cualquier lugar de tu tarjeta SD

## Seccion II - Volcar la NAND

1. Ejecuta `dumpTool` a través del menú que has instalado
   - If you've used an exploit to launch it, and you're already in dumpTool, ignore this step
   - If Unlaunch is already installed and you we're directed to this page from the [Get Started](get-started.html#section-ii-checking-if-unlaunch-is-already-installed) page, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting
2. Presiona el botón <kbd class="face">A</kbd> de la Nintendo DSi para empazar a volcar la NAND
   - Hacer un respaldo de la NAND usualmente toma al rededor de 7 minutos
3. Cuando el respaldo esté completo, presiona el botón <kbd>START</kbd> de tu consola para salir de dumpTool
4. Apaga la consola e introduce la tarjeta SD en tu dispositivo
5. En la tarjeta SD, va a donde `dumpTool.nds` es colocado, y verás una nueva carpeta llamada `DT######...` que contiene la copia de seguridad de la NAND
   - Si dumpTool es descargado de la página [Empezar](get-started.html), se llamará `boot.nds`
   - Dentro de la carpeta está `nand.bin` que es la copia de seguridad su propio, y `nand.bin.sha1` que es el hash SHA1 de la copia de seguridad
6. Guarda la carpeta  `DT######...` en algún lugar seguro, donde no la perderás
   - De ser posible, haz multiples copias y almacénalas en dispositivos distintos
   - Cuando lo hayas guardado en otro lugar, puedes borrarlo de la tarjeta SD
7. Si has iniciado dumpTool por un exploit, y ha sido descargado desde la página [Empezar](get-started.html), elimina `boot.nds` de la raíz de la tarjeta SD

::: warning

El hash SHA1 del `nand.bin` no coincidirá el hash almacenado en `nand.bin.sha1`. Este se debe a que dumpTool añade datos adicionales conocidos como no$gba footer después de hash SHA1 sea calculado Puedes usar la [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) a crear una copia sin el pie de página.

:::

::: tip

Continua a [Elefir un menú](choosing-a-menu.html)

:::
