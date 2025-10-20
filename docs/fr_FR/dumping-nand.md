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

1. Téléchargez la dernière version de [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Placez `dumpTool.nds` n'importe où sur votre carte SD

## Section II - Dumping de la NAND

1. Lancez `dumpTool` depuis le menu que vous aviez installé
   - Si vous avez utilisé un "exploit" pour le lancer, et que vous êtes déjà dans le "DumpTool menu" ignorer cette étape
   - Si Unlaunch est déjà installé et que vous aviez été dirigé vers cette page à partir de la page [Get Started](get-started.html#section-ii-checking-if-unlaunch-is-already-installed) maintenez <kbd class="face">A</kbd> + <kbd class="face">B</kbd> lors du démarrage
2. Appuyez sur le bouton <kbd class="face">A</kbd> de votre Nintendo DSi pour commencer à dumper votre NAND
   - Une sauvegarde de la NAND prend, généralement, 7 minutes environ
3. Lorsque la sauvegarde de la NAND est terminée, pressez le bouton <kbd>START</kbd> de votre Nintendo DSi pour quitter dumpTool
4. Éteignez votre console et réinsérez votre carte SD dans votre périphérique
5. Sur la carte SD, allez à l'endroit où `dumpTool.nds` est placé, et vous verrez un nouveau dossier appelé `DT######...` qui contient la sauvegarde de la NAND
   - Si dumpTool est téléchargé depuis la page [Get Started](get-started.html), il sera nommé `boot.nds`
   - À l'intérieur du dossier se trouve "nand.bin" qui est la sauvegarde en elle-même, et "nand.bin.sha1" qui est le hachage SHA1 de la sauvegarde
6. Stocker le dossier `DT######...` dans un endroit sûr, où vous ne le perdrez pas
   - Si possible, faites plusieurs sauvegardes sur différents périphériques de stockage
   - Une fois que vous l'avez sauvegardée ailleurs, vous pouvez la supprimer de la carte SD
7. Si vous avez démarré dumpTool par un "exploit", et que vous avez été téléchargé depuis la page [Get Started](get-started.html), supprimez `boot.nds` de la racine de la carte SD

::: warning

Le hachage SHA1 de `nand.bin` ne correspondra pas à celui stocké dans `nand.bin.sha1`. Ceci est dû au fait que dumpTool ajoute des données supplémentaires, connues comme un pied de page no$gba, au fichier `nand.bin` après le calcul du hachage SHA1. Vous pouvez utiliser [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) pour créer une copie sans le pied de page.

:::

::: tip

Continuez vers [Choisir un Menu](choosing-a-menu.html)

:::
