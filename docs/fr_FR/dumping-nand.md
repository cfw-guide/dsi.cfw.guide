---
title: Dumping de la NAND
---

Cette page permet de sauvegarder de la NAND, qui est une copie des données sur le stockage interne de la Nintendo DSi. Elle peut être utilisée pour configurer hiyaCFW, ainsi que no$gba et melonDS pour l'émulation DSi.

::: tip

Make sure the SD card has at least 250MB of free space, or else you'll run into an error message in dumpTool.

:::

::: tip

It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.

:::

## Section I - Configuration de la carte SD

::: tip

If you have already downloaded dumpTool from another section of this guide, you can skip this section.

:::

1. Téléchargez la dernière version de [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Placez `dumpTool.nds` n'importe où sur votre carte SD


## Section II - Dumping de la NAND

1. Lancez `dumpTool` via TWiLight Menu++
1. Appuyez sur le bouton <kbd class="face">A</kbd> de votre Nintendo DSi pour commencer à dumper votre NAND
   - Une sauvegarde de la NAND prend, généralement, 7 minutes environ
1. Lorsque la sauvegarde de la NAND est terminée, pressez le bouton <kbd>START</kbd> de votre Nintendo DSi pour quitter dumpTool
1. Éteignez votre console et réinsérez votre carte SD dans votre périphérique
1. Stockez cette sauvegarde dans un endroit sûr, là où vous ne la perdrez pas
   - Si possible, faites plusieurs sauvegardes sur différents périphériques de stockage
   - Une fois que vous l'avez sauvegardée ailleurs, vous pouvez la supprimer de la carte SD

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
