---
title: Dépannage
---

## Unlaunch
### Unlaunch plante à `MISMATCH IN FAT COPIES`

twlnf a un bug critique où il ne met pas correctement à jour la NAND entière après l'avoir modifiée, ce qui fait que certains homebrews (comme l'installateur d'Unlaunch) montrent une erreur.

Pour résoudre ce problème, ouvrez [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases) et sélectionnez `Fix FAT copy mismatch`.

### Il n'y a pas de son ni d'écran de démarrage lors du lancement de « LAUNCHER » en utilisant Unlaunch

Le développeur d'Unlaunch (nocash) a intentionnellement corrigé l'audio d'arrière-plan et l'écran de démarrage par défaut. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) using TWiLight Menu++ with "Launcher Patches" set to "Default" on the Unlaunch page of TWiLight Menu++ settings, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Après l'installation de Unlaunch, l'écran est noir à la mise sous tension

Essayez d'éjecter la carte SD et de rallumer la console. S'il n'affiche toujours qu'un écran noir, vous devrez peut-être flasher votre NAND via un [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Après avoir installé Unlaunch, je suis bloqué au démarrage d'une application ou du menu Fichier d'Unlaunch

Cela a probablement été causé par le choix de la mauvaise application pour l'option `NO BUTTON` dans Unlaunch. Maintenez <kbd class="face">A</kbd> + <kbd class="face">B</kbd> lors du démarrage de la console, accédez à `OPTIONS` et définissez `NO BUTTON` selon vos préférences.

### Autres problèmes d'Unlaunch

Si Unlaunch affiche `Clusters too large`, `Bad VBR`, `Bad MBR`, ou n'affiche aucune application alors que la carte SD est insérée, votre carte SD n'a probablement pas été formatée correctement. Suivez de nouveau [Configuration de la carte SD](sd-card-setup.html).

## TWiLight Menu++

Pour un dépannage général de TWiLight Menu++, consultez sa page [FAQ et dépannage](https://wiki.ds-homebrew.com/twilightmenu/faq) sur le wiki DS-Homebrew.

## Assistance supplémentaire

Si vous avez rencontré un problème qui n'est pas résolu ici, ou qui persiste malgré les solutions données, demandez de l'aide sur le serveur Discord [DS<sup>(i)</sup>Mode Hacking!](https://discord.gg/yD3spjv).
