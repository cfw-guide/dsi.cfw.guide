# Restaurar un respaldo de la NAND

::: danger

¡ADVERTENCIA! This is _**dangerous**_. Incluso siguiendo al pie de la letra estos pasos, existe la poslibilidad de bloquear al completo la consola, ya que la memoria NAND es de muy baja calidad, especialmente si la sobreescribes multiples veces. ¡Esto debería ser usado única y exclusivamente como último recurso!

:::

::: tip

Do not skip _anything_ on this page, any mistake greatly increases chance of bricking your DSi.

:::

Primero te presentaremos algunas alternativas más seguras para solucionar cosas por las que querrías hacer esto.

- La instalación de títulos DSiWare se puede hacer utilizando hiyaCFW o TWiLight Menu++
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. La última version de HiyaCFW Helper te permite copiar las fotos de tu memoria NAND a la SDNAND durante la configuración.
- Puedes restaurar alguna de las configuraciones de botónes de Unlaunch desde su menú, al que puedes acceder manteniendo pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd> mientras enciendes la consola.
- ¿Te salta error al iniciar Unlaunch? Saca tu tarjera SD e intenta iniciar el sistema de nuevo. Si funciona, entonces el error es a causa de tu tarjeta SD, y que restaurar la NAND no lo solucionará.
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on [Discord](https://ds-homebrew.com/discord)
- Desinstalar Unlaunch (ya sea sobreescribiendo la NAND o utilizando su desinstalador) debería ser evitado al menos que sea absolutamente necesario. Puedes configurar que el inicio automático ejecute "Launcher" y consola estará como en su estado original.

La única cosa que deberías hacer con tu NAND es instalar Unlaunch. De cualquier otra forma, recomendamos usar las alternativas.

## Requisitos

- Your NAND backup **from the same DSi**
- The latest release of [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Una forma de ejecutar homebrew con acceso a la NAND, como Unlaunch o Memory Pit.
- [no$gba](https://problemkaputt.de/gba.htm), to check your NAND backup (Download the 'Windows gaming version')
  - macOS and Linux users can use [WINE](https://winehq.org) to run no$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Volcar la BIOS para su uso en no$gba

1. Extract `dsibiosdumper.nds` from the `dsibiosdumper.zip` archive and place it anywhere on your SD card
2. Enciende tu consola manteniendo pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>.
   - Esto debería iniciar el sistema de archivos de Unlaunch.
3. Ejecuta dsbiosdumper desde el sistema de archivos de Unlaunch.
4. Pulsa <kbd class="face">A</kbd> para volcar la BIOS a la tarjeta SD.
5. Pulsa <kbd>START</kbd> para salir de dsibiosdumper.

## Probar tu respaldo de la NAND

Es muy importante asegurarse de que tu respaldo de la NAND funciona antes de intentar restaurarla. Si al probarla en no$gba resulta en un bloqueo total, es muy posible que pase lo mismo en tu consola.

1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Copy your NAND backup to the folder you put `NO$GBA.EXE` in and rename it to `DSI-1.MMC`
3. Copy `bios7i.bin` and `bios9i.bin` to the folder you put `NO$GBA.EXE`, named `BIOSDSI7.ROM` and `BIOSDSI9.ROM`, respectively.
4. Run `NO$GBA.EXE`
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
8. Click `Save Now`
9. Launch any Nintendo DS ROM (`.nds` file)

Si no$gba carga el menú DSi (o el sistema de archivos de Unlaunch), continúa a la siguiente sección. If it shows any kind of error _**do not flash that backup**_!

## Desinstalar Unlaunch de tu respaldo de NAND (opcional)

Sigue estos pasos si has volcado tu respaldo de la NAND después de instalar Unlaunch y te gustaría removerlo de tu sistema. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.

1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
2. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
3. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - Esto debería iniciar el instalador, que se ve parecido al sistema de archivos de Unlaunch.
4. Choose `Uninstall`
5. Once complete, choose `Power down`
6. Ejecuta cualquier otra ROM de Nintendo DS para segurarte de que el menú carga y funciona correctamente.

If no$gba shows any kind of error instead of loading the DSi menu, _**do not flash that backup**_! Si tienes un respaldo antiguo dela NAND, intenta usar ese en su lugar. Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## Sobreescribir utilizando tu respaldo de la NAND (por software)

::: danger

Aquí es donde la cosa se vuelve peligrosa, así que asegúrate de haber leído bien los pasos anteriores. Si llegaste aquí a través de un enlace sin seguir los pasos anteriores, vuelve al principio de la página y leela por completo.

:::

::: danger

Asegúrate de que tu consola está cargada antes de comenzar con esta sección.

:::

1. Con tu tarjeta SD dentro de tu consola, enciende la misma mientras mantienes pulsados <kbd class="face">A</kbd> y <kbd class="face">B</kbd>.
2. Ejecuta SafeNANDManager.
3. Press the button to `begin NAND restore`
4. Una vez finalizada la restauracion, pulsa <kbd>START</kbd> para apagar tu consola.

La memoria NAND de tu consola debería estar restaurada.

## Sobreescribir utilizando tu respaldo de la NAND (por modificación del hardware)

Si tu consola no enciende o no incia el sistema, la única forma de restaurar un respaldo de la NAND es hacer una modificación por hardware. The best guide that currently exists is the [Nintendo DSi hardmod guide on the DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
