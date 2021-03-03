---
title: Volcando NAND
redirect_from:
  - /nand-dump
  - /dump-nand
---

Esta pagina es para aser un respaldo NAND, que es una copia del data en el Nintendo DSi's sistema internal. Se puede usar para configurar hiyaCFW y NO$GBA.

Es muy recommendado que agas esto. Una copia NAND se puede usar para restaurar el sistema en el futuro, en caso que tu sistema no funcione.
{: .notice--primary}

## Seccion I - Configuration Del SD Card

Usando un despositivo Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) para automaticamente configurar tu SD card.
{: .notice--info}

1. Descarga la version ultima de [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Coloca `dumpTool.nds` en cualquier lugar de tu tarjeta SD

## Seccion II - Sacando el NAND
1. Lanza el `dumpTool` por el TWiLight Menu++
1. Dale al <kbd class="face">A</kbd> botton en el Nintendo DSi para empazar sacar el NAND
   - Un respaldo NAND normalmente toma 7 minutos.
1. Cuando el rspaldo NAND esta completo, dale al botton de<kbd>START</kbd> en tu Nintendo DSi para salir de dumpTool
1. Apaga tu consola y inserta tu SD Card en tu despositivo
1. Pon el respaldo en un lugar seguro, donde no lo perderas
   - Si es possible, as multiples respaldos en differente despositivos de almacenimiento
   - Cuando lo as puesto en otro lugar, lo puedes borar del SD Card

El SHA1 picadillo del `nand.bin` no va a combinar con el picadillo almecenado en `nand.bin.sha1`. Esto es porque dumpTool añade data adicional conocido como NO$GBA footer al `nand.bin` archivo despues del SHA1 hash es calculado. Puedes usar el [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)para crear una copia sin el footer.
{: .notice--warning}

Continua a [Installando Unlaunch](installing-unlaunch)(Opcional)
{: .notice--info}
