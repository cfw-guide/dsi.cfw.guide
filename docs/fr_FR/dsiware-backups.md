---
title: Sauvegardes DSiWare
---

## Prérequis
- La dernière version de [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - Téléchargez l'archive, extrayez-en le contenu et placez `GodMode9i.nds` n'importe où sur votre carte SD

## Nintendo DSi - Instructions

### Section I - Identifying the desired DSiWare
1. Launch GodMode9i and select `[nand:] SYSNAND`
1. Navigate to the `title` folder
1. Choose the folder according to whichever category you're looking for
   - `00030004`: Standard DSiWare
   - `00030005`: Pre-installed Fun Tools
   - `0003000f`: System Data (non-DSiWare files, can't be run)
   - `00030015`: System Base Tools
   - `00030017`: Launcher
1. Once you have chosen which type of DSiWare you would like to extract, enter a subfolder, and then enter `content`
1. There should now be an `.app` file visible. Select the file, and choose `Show NDS file info`. This will tell you if it's the DSiWare that you are looking for
   - If it is not the DSiWare title that you were looking for, continue searching in other folders until you find it
   - Files in `0003000f` cannot have their NDS file info viewed because they are not launchable DSiWare and do not contain a valid banner

### Section II - Extracting the DSiWare
1. Mettez en surbrillance le fichier `.app` , puis appuyez sur <kbd class="face">Y</kbd> pour l'ajouter au presse-papiers
1. Naviguez sur votre carte SD vers le répertoire où vous souhaitez placer le titre DSiWare vidé
1. Appuyez encore sur <kbd class="face">Y</kbd> pour coller le titre DSiWare dans le répertoire que vous naviguez actuellement
   - Vous pouvez changer le nom du fichier après l'avoir collé en appuyant sur <kbd class="face">X</kbd> tout en maintenant <kbd class="R">R</kbd>
   - Répétez l'opération pour tous les fichiers que vous souhaitez copier dans le même répertoire

Vous devriez maintenant voir le titre DSiWare dans TWiLight Menu++ ou dans le menu de fichiers de Unlaunch.

### Section III - Extracting the save file (optional)
1. In the same folder as `content` for your specified DSiWare, there will be a folder named `data`
1. Inside the `data` folder is the save file. Copy this file to your SD card in the same way you did for the DSiWare title itself
   - Unlaunch and nds-bootstrap use the `.pub` and `.prv` file extensions for DSiWare save files. If your DSiWare save file was originally titled `public.sav`, use the `.pub` extension, and if the save file was originally titled `private.sav`, use the `.prv` extension
   - If you wish to use the DSiWare save file with TWiLight Menu++, make sure to place it in the `saves` folder at the location of your ROM
