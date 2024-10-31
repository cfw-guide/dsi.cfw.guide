# Restauration d'une sauvegarde de la NAND

::: danger

ATTENTION ! This is _**dangerous**_. Même en suivant exactement ces étapes, il y a toujours un risque potentiel de brick de la DSi car la NAND est de très mauvaise qualité, surtout si vous flashez plusieurs fois ! Cela ne devrait être utilisé qu'en dernier recours !

:::

::: tip

Do not skip _anything_ on this page, any mistake greatly increases chance of bricking your DSi.

:::

Tout d'abord, quelques alternatives plus sûres pour expliquer pourquoi vous pourriez vouloir faire cela :

- L'installation de titres DSiWare peut être faite en utilisant hiyaCFW ou TWiLight Menu++
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. La dernière version de HiyaCFW Helper vous permet de copier vos photos de votre NAND vers la SDNAND pendant l'installation
- La restauration d'une configuration de boutons d'Unlaunch peut se faire à partir du menu d'Unlaunch, auquel on accède en maintenant <kbd class="face">A</kbd> + <kbd class="face">B</kbd> tout en allumant la console
- Démarrer sur Unlaunch entraîne une erreur ? Retirez votre carte SD et essayez de redémarrer le système. Si cela fonctionne, alors c'est un défaut avec votre carte SD et la restauration d'une sauvegarde de la NAND ne le corrigera pas
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on [Discord](https://ds-homebrew.com/discord)
- La désinstallation d'Unlaunch, que ce soit en flashant la NAND ou en utilisant son désinstallateur, devrait être évitée sauf en cas de nécessité absolue, vous pouvez régler les touches de démarrage automatique sur « Launcher » et votre DSi sera comme avant

La seule chose que vous devriez faire avec votre NAND est d'installer Unlaunch. Sinon, utilisez les alternatives.

## Prérequis

- Your NAND backup **from the same DSi**
- The latest release of [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Un moyen d'exécuter des homebrews avec un accès à la NAND, comme Unlaunch ou Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), to check your NAND backup (Download the 'Windows gaming version')
  - macOS and Linux users can use [WINE](https://winehq.org) to run no$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Dumping du BIOS pour une utilisation sur no$gba

1. Extract `dsibiosdumper.nds` from the `dsibiosdumper.zip` archive and place it anywhere on your SD card
2. Allumez votre console en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
   - Cela devrait lancer le menu Fichier d'Unlaunch
3. Lancez dsibiosdumper depuis le menu Fichier d'Unlaunch
4. Appuyez sur <kbd class="face">A</kbd> pour dumper le BIOS sur la carte SD
5. Appuyez sur <kbd>START</kbd> pour quitter dsibiosdumper

## Test de votre sauvegarde NAND

Il est très important de tester que votre sauvegarde NAND fonctionne avant d'essayer de la restaurer sur votre console, si elle montre une erreur de brick dans no$gba, il est fort probable que votre console sera également brickée.

1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Copy your NAND backup to the folder you put `NO$GBA.EXE` in and rename it to `DSI-1.MMC`
3. Copy `bios7i.bin` and `bios9i.bin` to the folder you put `NO$GBA.EXE`, named `BIOSDSI7.ROM` and `BIOSDSI9.ROM`, respectively.
4. Run `NO$GBA.EXE`
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
8. Click `Save Now`
9. Launch any Nintendo DS ROM (`.nds` file)

Si no$gba charge le menu DSi (ou le menu Fichier d'Unlaunch), passez à la section suivante. If it shows any kind of error _**do not flash that backup**_!

## Désinstallation d'Unlaunch à partir de votre sauvegarde NAND (facultatif)

Suivez ceci si vous avez dumpé votre sauvegarde NAND après avoir installé Unlaunch et que vous souhaitez désinstaller Unlaunch de votre système. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.

1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
2. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
3. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - Cela devrait démarrer le programme d'installation d'Unlaunch, qui ressemble au menu Fichier d'Unlaunch
4. Choose `Uninstall`
5. Once complete, choose `Power down`
6. Lancez à nouveau n'importe quelle ROM Nintendo DS et assurez-vous que votre menu DSi se charge et fonctionne correctement

If no$gba shows any kind of error instead of loading the DSi menu, _**do not flash that backup**_! Si vous avez une ancienne sauvegarde NAND, vous pouvez essayer de l'utiliser à la place. Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## Flashage de votre sauvegarde NAND (logiciel)

::: danger

Assurez-vous d'avoir lu les étapes ci-dessus car c'est là que cela devient dangereux. Si vous avez été directement lié ici sans suivre ce qui précède, retournez en haut et lisez toute cette page.

:::

::: danger

Assurez-vous que votre console Nintendo DSi est bien chargée avant de commencer cette section.

:::

1. Avec votre carte SD insérée, allumez votre Nintendo DSi en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
2. Lancez SafeNANDManager
3. Press the button to `begin NAND restore`
4. Une fois la restauration terminée, appuyez sur <kbd>START</kbd> pour éteindre votre DSi

Votre NAND devrait maintenant être restaurée.

## Flashage de votre sauvegarde NAND (hardmod)

Si vous ne pouvez pas démarrer votre Nintendo DSi, un hardmod est le seul moyen de restaurer une sauvegarde de la NAND. The best guide that currently exists is the [Nintendo DSi hardmod guide on the DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
