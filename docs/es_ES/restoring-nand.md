---
title: Restaurar un respaldo de la NAND
---

::: danger

¡ADVERTENCIA! Esto es ***peligroso***. Incluso siguiendo al pie de la letra estos pasos, existe la poslibilidad de bloquear al completo la consola, ya que la memoria NAND es de muy baja calidad, especialmente si la sobreescribes multiples veces. ¡Esto debería ser usado única y exclusivamente como último recurso!

:::

::: tip

No te saltes *nada* de esta página. Cualquier error incrementa las posbilidades de causar un bloqueo total de tu consola.

:::

Primero te presentaremos algunas alternativas más seguras para solucionar cosas por las que querrías hacer esto.
- La instalación de títulos DSiWare se puede hacer utilizando hiyaCFW o TWiLight Menu++
- Puedes recuperar fotos utilizando [ninfs](https://github.com/ihaveamac/ninfs/releases), en conjuncion con hiyaCFW o TWiLightMenu++ si quieres que estén en la consola. La última version de HiyaCFW Helper te permite copiar las fotos de tu memoria NAND a la SDNAND durante la configuración.
- Puedes restaurar alguna de las configuraciones de botónes de Unlaunch desde su menú, al que puedes acceder manteniendo pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd> mientras enciendes la consola.
- ¿Te salta error al iniciar Unlaunch? Saca tu tarjera SD e intenta iniciar el sistema de nuevo. Si funciona, entonces el error es a causa de tu tarjeta SD, y que restaurar la NAND no lo solucionará.
- El mensaje de error "Ha ocurrido un error..." con el texto blanco sobre negro es probable que sea un error de hiyaCFW y que no esté relacionado a la NAND de tu consola. Echa un vistazo a la [página de resolución de problemas de hiyaCFW en la wiki de DS-Homebrew](https://wiki.ds-homebrew.com/hiyacfw/faq) para más información.
- Cualquier error en TWiLight Menu++ no está relacionado con la NAND. Deberías intentar reinstalar TWiLight Menu++ o pedir ayuda en el servidor de Discord.
- Desinstalar Unlaunch (ya sea sobreescribiendo la NAND o utilizando su desinstalador) debería ser evitado al menos que sea absolutamente necesario. Puedes configurar que el inicio automático ejecute "Launcher" y consola estará como en su estado original.

La única cosa que deberías hacer con tu NAND es instalar Unlaunch. De cualquier otra forma, recomendamos usar las alternativas.

## Requisitos
- Tu respaldo de la NAND **de la misma consola DSi**.
- La última versión de [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds).
- Una forma de ejecutar homebrew con acceso a la NAND, como Unlaunch o Memory Pit.
- [no$gba](https://problemkaputt.de/gba.htm), para comprobar si tu respaldo de la NAND funciona y está en buen estado. Descarga el archivo cuyo enlace dice "Download no$gba Windows gaming version".
    - Los usuarios de macOS y Linux puede usar[WINE](https://winehq.org) para ejecutar no$gba.
- [dsibiosdumper](http://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Volcar la BIOS para su uso en no$gba
1. Extrae `dsibiosdumper.nds` del archivo `dsibiosdumper.zip` y colócalo en cualquier lugar de tu tarjeta SD.
2. Enciende tu consola manteniendo pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>.
    - Esto debería iniciar el sistema de archivos de Unlaunch.
3. Ejecuta dsbiosdumper desde el sistema de archivos de Unlaunch.
4. Pulsa <kbd class="face">A</kbd> para volcar la BIOS a la tarjeta SD.
5. Pulsa <kbd>START</kbd> para salir de dsibiosdumper.

## Probar tu respaldo de la NAND
Es muy importante asegurarse de que tu respaldo de la NAND funciona antes de intentar restaurarla. Si al probarla en no$gba resulta en un bloqueo total, es muy posible que pase lo mismo en tu consola.
1. Extrae `NO$GBA.EXE` del archivo `no$gba-w.zip` a una carpeta en tu ordenador.
2. Copia tu respaldo de la NAND a la carpeta en donde extraíste `NO$GBA.EXE`, y cámbiale el nombre a `DSI-1.MMC`.
3. Copia los archivos `bios7i.bin` y `bios9i.bin` a la carpeta en donde extraíste `NO$GBA.EXE`, y nómbralos `BIOSDSI7.ROM` y `BIOSDSI9.ROM`, respectivamente.
4. Executa `NO$GBA.EXE`.
5. Haz clic en `Options` > `Emulation Setup` para abrir la ventana de configuración de ejecución.
6. Cambia la opción `Reset/Startup Entrypoin` a `GBA/NDS BIOS (Nintendo logo)`.
7. Cambia la opción `NDS Mode/Colors` a `DSi (retail/16MB)`.
8. Haz clic en `Save Now`.
9. Ejecuta cualquier rom de Nintendo DS (la extensión de archivo debería ser `.nds`)

Si no$gba carga el menú DSi (o el sistema de archivos de Unlaunch), continúa a la siguiente sección. Si en su lugar salta cualquier clase de error, *¡no debes usar este respaldo!*

## Desinstalar Unlaunch de tu respaldo de NAND (opcional)
Sigue estos pasos si has volcado tu respaldo de la NAND después de instalar Unlaunch y te gustaría removerlo de tu sistema. Si no estás intentando desinstalar Unlaunch, **no debes** seguir esta sección.
1. Descarga la última versión del [instalador de Unlaunch](https://problemkaputt.de/unlaunch.zip).
1. Extrae el archivo `UNLAUNCH.DSI` del archivo comprimido `unlaunch.zip`.
1. Ejecuta `UNLAUNCH.DSI` como ROM en no$gba e inícialo desde la ranura para cartuchos.
    - Esto debería iniciar el instalador, que se ve parecido al sistema de archivos de Unlaunch.
1. Elige la opción `Uninstall`.
1. Una vez terminado, elige la opción `Power Down`.
1. Ejecuta cualquier otra ROM de Nintendo DS para segurarte de que el menú carga y funciona correctamente.

Si no$gba muestra cualquier clase de error en vez de cargar el menú de la consola, *¡no debes usar este respaldo!* Si tienes un respaldo antiguo dela NAND, intenta usar ese en su lugar. **NO** intentes desinstalar Unlaunch usando el instalador en la consola, es muy posible que causes un bloqueo total al hacerlo así.

## Sobreescribir utilizando tu respaldo de la NAND (por software)

::: danger

Aquí es donde la cosa se vuelve peligrosa, así que asegúrate de haber leído bien los pasos anteriores. Si llegaste aquí a través de un enlace sin seguir los pasos anteriores, vuelve al principio de la página y leela por completo.

:::

::: danger

Asegúrate de que tu consola está cargada antes de comenzar con esta sección.

:::

1. Con tu tarjeta SD dentro de tu consola, enciende la misma mientras mantienes pulsados <kbd class="face">A</kbd> y <kbd class="face">B</kbd>.
3. Ejecuta SafeNANDManager.
4. Pulsa el botón indicado para la opción `begin NAND restore`.
6. Una vez finalizada la restauracion, pulsa <kbd>START</kbd> para apagar tu consola.

La memoria NAND de tu consola debería estar restaurada.

## Sobreescribir utilizando tu respaldo de la NAND (por modificación del hardware)
Si tu consola no enciende o no incia el sistema, la única forma de restaurar un respaldo de la NAND es hacer una modificación por hardware. La mejor guía que existe actualmente es la [guía de modificación de hardware de Nintendo DSi en la Wiki de DS-Homebrew](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
