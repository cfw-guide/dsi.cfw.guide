# Dumping de la NAND

Cette page permet de sauvegarder de la NAND, qui est une copie des données sur le stockage interne de la Nintendo DSi. Elle peut être utilisée pour configurer hiyaCFW, ainsi que no$gba et melonDS pour l'émulation DSi.

::: tip

Assurez-vous que la carte SD dispose d'au moins 250 Mo d'espace libre, sinon vous rencontrerez un message d'erreur dans dumpTool.

:::

::: tip

Il est fortement recommandé de le faire. Une sauvegarde de la NAND peut être utilisée comme point de restauration dans le futur, en cas de brick de la console.

:::

## Section I - Configuration de la carte SD

::: tip

Si vous avez déjà téléchargé dumpTool dans une autre section de ce guide, vous pouvez sauter cette section.

:::

1. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Place `dumpTool.nds` anywhere on your SD card

## Section II - Dumping de la NAND

1. Launch `dumpTool` through TWiLight Menu++
2. Appuyez sur le bouton <kbd class="face">A</kbd> de votre Nintendo DSi pour commencer à dumper votre NAND
   - Une sauvegarde de la NAND prend, généralement, 7 minutes environ
3. Lorsque la sauvegarde de la NAND est terminée, pressez le bouton <kbd>START</kbd> de votre Nintendo DSi pour quitter dumpTool
4. Éteignez votre console et réinsérez votre carte SD dans votre périphérique
5. Stockez cette sauvegarde dans un endroit sûr, là où vous ne la perdrez pas
   - Si possible, faites plusieurs sauvegardes sur différents périphériques de stockage
   - Une fois que vous l'avez sauvegardée ailleurs, vous pouvez la supprimer de la carte SD

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
