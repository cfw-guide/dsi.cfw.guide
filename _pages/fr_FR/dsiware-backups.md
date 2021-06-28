---
title: Sauvegardes DSiWare
---

{% include toc title="DSiWare Backups" %}

## Prérequis
- La dernière version de [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - Téléchargez l'archive, extrayez-en le contenu et placez `GodMode9i.nds` n'importe où sur votre carte SD
- Une Nintendo DSi avec [Unlaunch](/unlaunch) installé

## Nintendo DSi - Instructions

### Section I - Identification du chemin vers le fichier .app
1. Allumez votre Nintendo DSi en maintenant <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
   - Cela devrait vous conduire au menu de fichiers de Unlaunch
1. Identifiez vos applications dans la liste
   - Une entrée vert clair signifie qu'elles sont installées sur la NAND

Lorsque vous survolez l'entrée, l'écran du bas devrait afficher le chemin. Prenez note de celui-ci.

Par exemple, un chemin pourrait être `nand:/title/0030005/484e4a45/content/00000003.app`
{: .notice--info}

### Section II - Extraction du fichier
1. Lancez GodMode9i depuis le menu de fichiers de Unlaunch
1. Naviguez vers SYSNAND, puis naviguez à travers le chemin que vous avez noté ci-dessus
1. Mettez en surbrillance le fichier `.app` , puis appuyez sur <kbd class="face">Y</kbd> pour l'ajouter au presse-papiers
1. Naviguez sur votre carte SD vers le répertoire où vous souhaitez placer le titre DSiWare vidé
1. Appuyez encore sur <kbd class="face">Y</kbd> pour coller le titre DSiWare dans le répertoire que vous naviguez actuellement
   - Vous pouvez changer le nom du fichier après l'avoir collé en appuyant sur <kbd class="face">X</kbd> tout en maintenant <kbd class="R">R</kbd>
   - Répétez l'opération pour tous les fichiers que vous souhaitez copier dans le même répertoire

Vous devriez maintenant voir le titre DSiWare dans TWiLight Menu++ ou dans le menu de fichiers de Unlaunch.
