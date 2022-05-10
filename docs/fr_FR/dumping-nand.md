---
title: Dump de la NAND
---

Cette page permet de sauvegarder de la NAND, qui est une copie des données sur le stockage interne de la Nintendo DSi. Elle peut être utilisée pour configurer hiyaCFW, ainsi que no$gba et melonDS pour l'émulation DSi.

::: tip

Il est fortement recommandé de le faire. Une sauvegarde de la NAND peut être utilisée comme point de restauration dans le futur, en cas de brick de la console.

:::

## Section I - Configuration de la carte SD

::: tip

Si vous avez déjà téléchargé dumpTool dans une autre section de ce guide, vous pouvez sauter cette section.

:::

1. Téléchargez la dernière version de [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Placez `dumpTool.nds` n'importe où sur votre carte SD


## Section II - Dump de la NAND

1. Lancez `dumpTool` via TWiLight Menu++
1. Appuyez sur le bouton <kbd class="face">A</kbd> de votre Nintendo DSi pour commencer à dumper votre NAND
   - Une sauvegarde de la NAND prend, généralement, 7 minutes environ
1. Lorsque la sauvegarde de la NAND est terminée, pressez le bouton <kbd>START</kbd> de votre Nintendo DSi pour quitter dumpTool
1. Éteignez votre console et réinsérez votre carte SD dans votre périphérique
1. Stockez cette sauvegarde dans un endroit sûr, là où vous ne la perdrez pas
   - Si possible, faites plusieurs sauvegardes sur différents périphériques de stockage
   - Une fois que vous l'avez sauvegardée ailleurs, vous pouvez la supprimer de la carte SD

::: warning

Le hachage SHA1 de `nand.bin` ne correspondra pas à celui stocké dans `nand.bin.sha1`. Ceci est dû au fait que dumpTool ajoute des données supplémentaires, connues comme un pied de page no$gba, au fichier `nand.bin` après le calcul du hachage SHA1. Vous pouvez utiliser [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) pour créer une copie sans le pied de page.

:::

::: tip

Continuer vers [Installation d'Unlaunch](installing-unlaunch.html) (optionnel)

:::
