---
title: Restaurando De Un Respaldo NAND
---

{% include toc title="Table of Contents" %}

ADVERTENCIA! ESTO ES ***PELGIROSO</strong>. Aunque sigas los pasos exactamento esto tiene el potential de blockear el DSi como el nand as baja qualidad, especialmente si lo flasheas muchas veses! Solamente se debe usar como un resorte ultimo! </p>
{: .notice--danger}

No eskipes *nada* en esta pagina, cualquier error aumenta la possibilidad de blockeando tu dsi.
{: .notice--info}

Primero, algunas alternativas más seguras a por qué tal vez quieras hacer esto:
- La instalacion de DSiWare se puede hacer usando hiyaCFW o TWiLight Menu++
- Recuperando imágenes se puede hacer usando ninfs, en combinación con hiyaCFW o TWiLight Menu++ si las quieres en la consola
- Restaurar una configuración de botón de Unlaunch se puede hacer desde el menú de inicio
- Iniciando Unlaunch resulta en un error? Saca tu tarjeta SD y vuelve a intentarlo. Si funciona, entonces es un error en tu tarjeta SD y restaurar una copia de seguridad de la NAND no lo solucionará
- "An error has occurred..." on boot is a hiyaCFW error and is not related to your NAND, see the [DS-Homebrew wiki's hiyaCFW troubleshooting page](https://wiki.ds-homebrew.com/hiyacfw/troubleshooting) for more information
- Cualquier error en el Menú TWiLight ++ no está relacionado y deberías intentar reinstalar el Menu TWiLight ++ o pedir ayuda en Discord
- La desinstalacion de Unlaunch, ya sea por flashear la NAND o usando su desinstalador, debe evitarse a menos que sea absolutamente necesario. puede configurar las teclas de autoarranque a "Launcher" y su DSi será como stock

Lo único que deberías hacer con tu NAND es instalando Unlaunch. De lo contrario, utilice las alternativas.

## Requisitos
- Tu copia del NAND **del mismo DSi**
- La ultima versión de [MakeForwarder](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Una forma de ejecutar homebrew con acceso a la NAND, como Unlaunch o Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), para comprobar tu copia de seguridad de la NAND (Descargar la 'versión de juegos de Windows')
  - los usuarios de macOS y Linux puede usar[WINE](https://winehq.org) para ejecutar no$gba
- [dsibiosdumper](http://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Volcando el BIOS para su uso en no$gba
1. Extrae `dsibiosdumper.nds` del archivo `dsibiosdumper.zip` y colocalo en cualquier lugar de tu tarjeta SD
2. Enciende tu consola manteniendo pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>
   - Esto deberia lanzar el menuarchivo Unlaunch
3. Lanza dsibiosdumper desde el archivo Unlaunch
4. Pulsa <kbd class="face">A</kbd> para volcar el BIOS a la tarjeta SD
5. Pulsa <kbd>START</kbd> para salir de dsibiosdumper

## Selecciona tu copia del NAND
Es muy importante probar que tu copia de seguridad de la NAND está funcionando antes de intentar restaurarla a tu consola, si muestra un error de ladrillo en no$gba probablemente también brickeará tu consola.
1. Extraer `NO$GBA.EXE` de `no$gba-w.zip` a una carpeta en su computadora
2. Copia su copia de la NAND a la carpeta en la que puso `NO$GBA.EXE` y renombrarla a `DSI-1.MMC`
3. Copie `bios7i.bin` y `bios9i.bin` a la carpeta que ponga `NO$GBA.EXE`, llamado `BIOSDSI7.ROM` y `BIOSDSI9.ROM`, respectivamente.
4. Executa `NO$GBA.EXE`
5. Haga clic a `Opciones` > `Configuración de Emulación` para abrir la ventana de Configuración de Emulación
6. Cambia `Restablecer/Comenzar Entrypoint` a `GBA/NDS BIOS (Nintendo logo)`
7. Cambia `Modo NDS/Colores` a `DSi (retail/16MB)`
8. Haga clic a `OK`
9. Ejecuta cualquier Nintendo DS ROM (`.nds` archivo)

Si no$gba carga el menú DSi, continúe a la siguiente sección. Si muestra algún tipo de error ***no flashea esa copia de nand***!

## Flasheando tu copia de la NAND (Software)

Asegúrate de haber leido los pasos anteriores ya que aquí es donde se vuelve peligroso. Si usted estaba enlazado directamente a aqui sin seguir lo anterior, entonces vuelva a la parte superior y lea toda esta página.
{: .notice--danger}

Asegúurate de que tu sistema de Nintendo DSi esté bien cargado antes de comenzar esta sección.
{: .notice--danger}

1. Con tu tarjeta SD insertada, enciende tu Nintendo DSi mientras mantienes pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>
3. Inicie SafeNANDManager
4. Pulsa el botón para `iniciar restauracion de la NAND`
6. Una vez finalizada la restauracion, pulsa <kbd>START</kbd> para desactivar tu DSi

Tu Nand esta ahora restaurado.

## Flasheando tu copia del NAND (Hardmod)
Si no puedes arrancar tu Nintendo DSi, un hardmod es la unica manera de restaurar una copia de seguridad de la NAND. La mejor guía que existe actualmente es la [guía de hardmod de Nintendo DSi en la Wiki de DS-Homebrew](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
