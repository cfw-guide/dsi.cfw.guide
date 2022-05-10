---
title: Problèmes et dépannage
---

## Unlaunch
### Unlaunch plante à `MISMATCH IN FAT COPIES`

twlnf a un bug critique où il ne met pas correctement à jour la NAND entière après l'avoir modifié, ce qui fait que certains homebrews (comme l'installateur d'Unlaunch) montrent une erreur.

Pour résoudre ce problème, ouvrez [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases) et sélectionnez `Fix FAT copy mismatch`.

### Il n'y a pas de son ou de chargement de démarrage lors du lancement de "LAUNCHER" en utilisant Unlaunch

Le développeur de Unlaunch (nocash) a intentionnellement corrigé l'audio d'arrière-plan et le boot-splash par défaut. Vous pouvez retrouver ces effets en [réinstallant Unlaunch](installing-unlaunch.html) à l'aide de TWiLight Menu++ avec les "correctifs de lancement" désactivés sur la page Unlaunch des paramètres TWiLight Menu++, ou en utilisant [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### La mise sous tension n'affiche qu'un écran noir après l'installation de Unlaunch

Essayez d'éjecter la carte SD et de rallumer la console. S'il n'affiche toujours qu'un écran noir, vous devrez peut-être flasher votre NAND via un [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Après avoir installé Unlaunch, je suis bloqué au démarrage d'une application ou du menu Unlaunch File

Cela a probablement été causé par le choix de la mauvaise application pour l'option `NO BUTTON` dans Unlaunch. Maintenez <kbd class="face">A</kbd> + <kbd class="face">B</kbd> lors du démarrage de la console, accédez à `OPTIONS` et définissez `NO BUTTON` selon vos préférences.

### Autres problèmes Unlaunch

Si Unlaunch affiche `Clusters too large`, `Bad VBR`, `Bad MBR`, ou n'affiche aucune application alors que la carte SD est insérée, votre carte SD n'a probablement pas été formatée correctement. Suivez de nouveau [Configuration de la carte SD](sd-card-setup.html).

## TWiLight Menu++  troubleshooting

Pour le dépannage général de TWiLight Menu++, consultez sa [FAQ & Page de dépannage](https://wiki.ds-homebrew.com/twilightmenu/faq) sur le wiki DS-Homebrew.

## Assistance supplémentaire

Si vous avez rencontré un problème qui n'est pas résolu ici, ou qui persiste malgré les solutions données, demandez de l'aide dans le [DS<sup>(i)</sup>Mode Hacking !](https://discord.gg/yD3spjv) Serveur Discord.
