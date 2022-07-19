---
title: Restauration d'une sauvegarde de la NAND
---

::: danger

ATTENTION ! Ceci est ***dangereux***. Même en suivant exactement ces étapes, il y a toujours un risque potentiel de brick de la DSi car la NAND est de très mauvaise qualité, surtout si vous flashez plusieurs fois ! Cela ne devrait être utilisé qu'en dernier recours !

:::

::: tip

Ne sautez *rien* sur cette page, toute erreur augmente considérablement les chances de bricker votre DSi.

:::

Tout d'abord, quelques alternatives plus sûres pour expliquer pourquoi vous pourriez vouloir faire cela :
- L'installation de titres DSiWare peut être faite en utilisant hiyaCFW ou TWiLight Menu++
- La récupération des images peut se faire en utilisant [ninfs](https://github.com/ihaveamac/ninfs/releases), en combinaison avec hiyaCFW ou TWiLight Menu++ si vous les voulez sur console. La dernière version de HiyaCFW Helper vous permet de copier vos photos de votre NAND vers la SDNAND pendant l'installation
- La restauration d'une configuration de boutons d'Unlaunch peut se faire à partir du menu d'Unlaunch, auquel on accède en maintenant <kbd class="face">A</kbd> + <kbd class="face">B</kbd> tout en allumant la console
- Démarrer sur Unlaunch entraîne une erreur ? Retirez votre carte SD et essayez de redémarrer le système. Si cela fonctionne, alors c'est un défaut avec votre carte SD et la restauration d'une sauvegarde de la NAND ne le corrigera pas
- « Une erreur est survenue… » au démarrage est probablement une erreur de hiyaCFW et n'est pas liée à votre NAND, consultez [FAQ et dépannage de hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/faq) sur le wiki DS-Homebrew pour plus d'informations
- Toute erreur dans TWiLight Menu++ n'est pas liée et vous devriez essayer de réinstaller TWiLight Menu++ ou demander de l'aide sur [Discord](https://ds-homebrew.com/discord)
- La désinstallation d'Unlaunch, que ce soit en flashant la NAND ou en utilisant son désinstallateur, devrait être évitée sauf en cas de nécessité absolue, vous pouvez régler les touches de démarrage automatique sur « Launcher » et votre DSi sera comme avant

La seule chose que vous devriez faire avec votre NAND est d'installer Unlaunch. Sinon, utilisez les alternatives.

## Prérequis
- Votre sauvegarde de la NAND **de la même DSi**
- La dernière version de [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Un moyen d'exécuter des homebrews avec un accès à la NAND, comme Unlaunch ou Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), pour vérifier votre sauvegarde de la NAND (téléchargez la « Windows gaming version »)
   - Les utilisateurs de macOS et Linux peuvent utiliser [WINE](https://winehq.org) pour exécuter no$gba
- [dsibiosdumper](http://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Dumping du BIOS pour une utilisation sur no$gba
1. Extrayez `dsibiosdumper.nds` depuis l'archive `dsibiosdumper.zip` et placez-le n'importe où sur votre carte SD
2. Allumez votre console en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
   - Cela devrait lancer le menu Fichier d'Unlaunch
3. Lancez dsibiosdumper depuis le menu Fichier d'Unlaunch
4. Appuyez sur <kbd class="face">A</kbd> pour dumper le BIOS sur la carte SD
5. Appuyez sur <kbd>START</kbd> pour quitter dsibiosdumper

## Test de votre sauvegarde NAND
Il est très important de tester que votre sauvegarde NAND fonctionne avant d'essayer de la restaurer sur votre console, si elle montre une erreur de brick dans no$gba, il est fort probable que votre console sera également brickée.
1. Extrayez `NO$GBA.EXE` depuis `no$gba-w.zip` vers un dossier sur votre ordinateur
2. Copiez la sauvegarde de votre NAND dans le dossier dans lequel vous avez placé `NO$GBA.EXE` et renommez-la `DSI-1.MMC`
3. Copiez `bios7i.bin` et `bios9i.bin` dans le dossier où vous avez mis `NO$GBA.EXE`, nommés respectivement `BIOSDSI7.ROM` et `BIOSDSI9.ROM`.
4. Lancez `NO$GBA.EXE`
5. Cliquez sur `Options` > `Emulation Setup` pour ouvrir la fenêtre de configuration d'émulation
6. Changez `Reset/Startup Entrypoint` en `GBA/NDS BIOS (Nintendo logo)`
7. Changez `NDS Mode/Colors` en `DSi (retail/16MB)`
8. Cliquez sur `Save Now`
9. Lancez n'importe quelle ROM Nintendo DS (fichier`.nds`)

Si no$gba charge le menu DSi (ou le menu Fichier d'Unlaunch), passez à la section suivante. S'il montre n'importe quel type d'erreur ***ne flashez pas cette sauvegarde*** !

## Désinstallation d'Unlaunch à partir de votre sauvegarde NAND (facultatif)
Suivez ceci si vous avez dumpé votre sauvegarde NAND après avoir installé Unlaunch et que vous souhaitez désinstaller Unlaunch de votre système. Si vous n'essayez pas de désinstaller Unlaunch, vous n'avez **pas** besoin de suivre cette section.
1. Téléchargez la dernière version de l'[installateur d'Unlaunch](https://problemkaputt.de/unlaunch.zip)
1. Extrayez `UNLAUNCH.DSI` de `unlaunch.zip`
1. Lancez `UNLAUNCH.DSI` dans no$gba et démarrez-le depuis l'emplacement de la carte de jeu
   - Cela devrait démarrer le programme d'installation d'Unlaunch, qui ressemble au menu Fichier d'Unlaunch
1. Choisissez `Uninstall`
1. Une fois terminé, choisissez `Power down`
1. Lancez à nouveau n'importe quelle ROM Nintendo DS et assurez-vous que votre menu DSi se charge et fonctionne correctement

## Flashage de votre sauvegarde NAND (logiciel)

::: danger

Assurez-vous d'avoir lu les étapes ci-dessus car c'est là que cela devient dangereux. Si vous avez été directement lié ici sans suivre ce qui précède, retournez en haut et lisez toute cette page.

:::

::: danger

Assurez-vous que votre console Nintendo DSi est bien chargée avant de commencer cette section.

:::

1. Avec votre carte SD insérée, allumez votre Nintendo DSi en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
3. Lancez SafeNANDManager
4. Appuyez sur le bouton pour `commencer la restauration de la NAND`
6. Une fois la restauration terminée, appuyez sur <kbd>START</kbd> pour éteindre votre DSi

Votre NAND devrait maintenant être restaurée.

## Flashage de votre sauvegarde NAND (hardmod)
Si vous ne pouvez pas démarrer votre Nintendo DSi, un hardmod est le seul moyen de restaurer une sauvegarde de la NAND. Le meilleur guide qui existe actuellement est le [guide de hardmod Nintendo DSi sur le wiki DS-Homebrew](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
