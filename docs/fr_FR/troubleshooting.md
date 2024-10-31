# Dépannage

## Unlaunch

### Unlaunch freezes at `MISMATCH IN FAT COPIES`

twlnf a un bug critique où il ne met pas correctement à jour la NAND entière après l'avoir modifiée, ce qui fait que certains homebrews (comme l'installateur d'Unlaunch) montrent une erreur.

To fix this, open [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), and select `Fix FAT copy mismatch`.

### Il n'y a pas de son ni d'écran de démarrage lors du lancement de « LAUNCHER » en utilisant Unlaunch

Le développeur d'Unlaunch (nocash) a intentionnellement corrigé l'audio d'arrière-plan et l'écran de démarrage par défaut. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) using TWiLight Menu++ with "Launcher Patches" set to "Default" on the Unlaunch page of TWiLight Menu++ settings, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Après l'installation de Unlaunch, l'écran est noir à la mise sous tension

Essayez d'éjecter la carte SD et de rallumer la console. If it still only shows a black screen, you may need to flash your NAND via a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Après avoir installé Unlaunch, je suis bloqué au démarrage d'une application ou du menu Fichier d'Unlaunch

This was likely caused by choosing the wrong app for the `NO BUTTON` option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to `OPTIONS`, and set `NO BUTTON` to whatever your preference is.

### Autres problèmes d'Unlaunch

If Unlaunch displays `Clusters too large`, `Bad VBR`, `Bad MBR`, or doesn't display any applications while the SD card is inserted, your SD card likely wasn't formatted correctly. Re-follow [SD Card Setup](sd-card-setup.html).

## TWiLight Menu++

For general TWiLight Menu++ troubleshooting, see its [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) page on the DS-Homebrew Wiki.

## Assistance supplémentaire

If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4) Discord server.
