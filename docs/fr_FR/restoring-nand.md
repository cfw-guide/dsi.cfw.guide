---
title: Restauration d'une sauvegarde de la NAND
---

::: danger

ATTENTION ! Ceci est ***dangereux***. Même en suivant exactement ces étapes, il y a toujours un risque potentiel de brick de la DSi car la NAND est de très mauvaise qualité, surtout si vous flashez plusieurs fois ! Cela ne devrait être utilisé qu'en dernier recours!

:::

::: tip

Ne sautez *rien* sur cette page, toute erreur augmente considérablement les chances de brick votre DSi.

:::

Tout d'abord, quelques alternatives plus sûres pour expliquer pourquoi vous pourriez vouloir faire cela :
- L'installation de titres DSiWare peut être faite en utilisant hiyaCFW ou TWiLight Menu++
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. The latest version of the HiyaCFW Helper allows you to copy your photos from your NAND to the SDNAND during setup
- Restoring an Unlaunch button configuration can be done from the Unlaunch menu, which can be accessed by holding <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while powering the console on
- Démarrer sur Unlaunch entraîne une erreur ? Take out your SD card and try starting the system again. Si cela fonctionne, alors c'est un défaut avec votre carte SD et la restauration d'une sauvegarde de la NAND ne le corrigera pas
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on [Discord](https://ds-homebrew.com/discord)
- La désinstallation de Unlaunch, que ce soit en flashant la NAND ou en utilisant son désinstalleur, devrait être évitée sauf en cas de nécessité absolue, vous pouvez régler les touches de démarrage automatique sur "Launcher" et votre DSi sera comme la version originale

La seule chose que vous devriez faire avec votre NAND est d'installer Unlaunch. Utilisez les alternatives autrement.

## Prérequis
- Votre sauvegarde de la NAND **de la même DSi**
- La dernière version de [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Un moyen d'exécuter des homebrews avec un accès à la NAND, comme Unlaunch ou Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), pour vérifier votre sauvegarde de la NAND (téléchargez la « Windows gaming version »)
   - les utilisateurs de macOS et Linux peuvent utiliser [WINE](https://winehq.org) pour exécuter no$gba
- [dsibiosdumper](http://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Extraction du BIOS pour une utilisation sur no$gba
1. Extrayez `dsibiosdumper.nds` depuis l'archive `dsibiosdumper.zip` et placez-le n'importe où sur votre carte SD
2. Allumez votre console en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
   - Cela devrait lancer le menu de fichiers de Unlaunch
3. Lancez dsibiosdumper depuis le menu de fichiers de Unlaunch
4. Appuyez sur <kbd class="face">A</kbd> pour extraire le BIOS sur la carte SD
5. Appuyez sur <kbd>START</kbd> pour quitter dsibiosdumper

## Test de votre sauvegarde NAND
Il est très important de tester que votre sauvegarde NAND fonctionne avant d'essayer de la restaurer sur votre console, si elle montre une erreur de brick dans no$gba, il est fort probable que votre console sera également brickée.
1. Extrayez `NO$GBA.EXE` depuis `no$gba-w.zip` vers un dossier sur votre ordinateur
2. Copiez la sauvegarde de votre NAND dans le dossier dans lequel vous avez placé `NO$GBA.EXE` et renommez-la `DSI-1.MMC`
3. Copiez `bios7i.bin` et `bios9i.bin` dans le dossier où vous avez mis `NO$GBA.EXE`, nommés respectivement `BIOSDSI7.ROM` et `BIOSDSI9.ROM`.
4. Lancez `NO$GBA.EXE`
5. Cliquez sur `Options` > `Emulation Setup` pour ouvrir la fenêtre de configuration d'émulation
6. Changez `Reset/Startup Entrypoint` en `GBA/NDS BIOS (logo Nintendo)`
7. Changez `NDS Mode/Colors` en `DSi (retail/16MB)`
8. Click `Save Now`
9. Lancez n'importe quelle ROM Nintendo DS (fichier`.nds`)

If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. S'il montre n'importe quel type d'erreur ***ne flashez pas cette sauvegarde*** !

## Uninstalling Unlaunch from your NAND backup (optional)
Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.
1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
1. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
1. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu
1. Choose `Uninstall`
1. Once complete, choose `Power down`
1. Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly

## Flashage de votre sauvegarde NAND (Software)

::: danger

Assurez-vous d'avoir lu les étapes ci-dessus car c'est là que cela devient dangereux. Si vous avez été directement lié ici sans suivre ce qui précède, retournez en haut et lisez toute cette page.

:::

::: danger

Assurez-vous que votre console Nintendo DSi est bien chargée avant de commencer cette section.

:::

1. Avec votre carte SD insérée, branchez votre Nintendo DSi en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
3. Lancez SafeNANDManager
4. Appuyez sur le bouton pour `commencer la restauration de la NAND`
6. Une fois la restauration terminée, appuyez sur <kbd>START</kbd> pour éteindre votre DSi

Votre NAND devrait maintenant être restaurée.

## Flashage de votre sauvegarde NAND (Hardmod)
Si vous ne pouvez pas démarrer votre Nintendo DSi, un hardmod est le seul moyen de restaurer une sauvegarde de la NAND. Le meilleur guide qui existe actuellement est le [guide de hardmod Nintendo DSi sur le Wiki DS-Homebrew](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
