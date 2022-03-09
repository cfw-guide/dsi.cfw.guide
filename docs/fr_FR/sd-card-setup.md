---
title: Configuration de la carte SD
---

Cette page est destinée à préparer votre carte SD pour votre Nintendo DSi. Durant le processus, nous formateront la carte SD au format adapté à la Nintendo DSi et vérifierons les erreurs sur la carte.

::: danger

Assurez-vous de sauvegarder le contenu de votre carte SD AVANT de continuer. Toutes les données de votre carte SD seront EFFACÉES pendant le processus.

:::

::::: tabs

:::: tab name="Windows" os="windows"

### Section I - Formatting your SD card with SD Formatter

::: tip

This section formats the SD card to the specifications by the SD Card Association. This can fix many issues that may occur with running homebrew applications.

:::

::: danger

Any 64GB or larger SD cards will be formatted to `exFAT` in this process. You _must_ follow Section II to re-format to `FAT32`.

:::

1. Download the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
   - Accept the End User License Agreement to start the download
1. Run `SD Card Formatter Setup` (the `.exe` file) in the downloaded `.zip` file with Adminstrator privileges, then install the program
1. Run `SD Card Formatter` from the Start Menu with Adminstrator privileges
1. Select your SD card
1. Assurez-vous que la case `Quick Format` (formatage rapide) est cochée
1. Lancez le processus de formatage

### Section II - Formatting your SD card with GUIFormat

This section formats SD cards larger than 32GB to FAT32.

::: tip

If your SD card is 32GB or less in capacity, skip to Section III.

:::

1. Téléchargez la dernière version de [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)
   - Cliquez sur l'image du site pour télécharger l'application
1. Exécutez GUIFormat avec les permissions d'administrateur
1. Sélectionnez votre lettre de lecteur
1. Définissez votre unité de taille d'allocation (`Allocation size unit`) à `32768`
   - Si cette taille est trop grande pour votre SD, définissez-la à la plus haute qui fonctionne
1. Assurez-vous que la case `Quick Format` (formatage rapide) est cochée
1. Lancez le processus de formatage

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)

### Section III - Vérification des erreurs
1. Allez dans la fenêtre des propriétés de votre carte SD
   - `Explorateur Windows` -> `Ce PC` -> Clic droit sur votre carte SD -> `Propriétés`
1. Dans l'onglet outils, sélectionnez `Vérifier maintenant`
1. Cochez à la fois `Réparer automatiquement les erreurs de système de fichiers` et `Rechercher et tenter une récupération des secteurs défectueux`
1. Lancez le processus de vérification

Cette opération permet de scanner la carte SD et de corriger les erreurs qu'elle trouve.

### Section IV - Vérification de la lecture/écriture de la carte SD

1. Téléchargez et extrayez [l'archive h2testw](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) n'importe où sur votre ordinateur
   - If the above link doesn't work for you, download [from archive.org](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)
   - Il peut également être extrait sur un périphérique externe tant qu'il ne s'agit pas de votre carte SD
1. Avec votre carte SD insérée dans votre ordinateur, exécutez `h2testw.exe`
1. Sélectionnez la langue dans laquelle vous souhaitez voir h2testw. Étant donné qu'il n'est pas disponible en français, les noms anglais seront utilisés et traduits pour ce guide
1. Définissez la lettre de lecteur de votre carte SD en tant que cible
1. Assurez-vous que `all available space` (tout l'espace disponible) est sélectionné
1. Cliquez sur `Write + Verify` (Écrire + Vérifier)
- Attendez que le processus se finisse

::: tip

If the test shows the result `Test finished without errors`, your SD card is healthy and you can delete all `.h2w` files on your SD card.

:::

::: danger

Si le test présente n'importe quel autre résultat, votre carte SD est peut être corrompue ou endommagée et vous pourrez être amené à la remplacer !

:::

::::

:::: tab name="Linux" os="other"

### Section I - Formatage de votre carte SD
1. Assurez-vous que votre carte SD n'est pas **** insérée dans votre machine Linux
1. Lancez le terminal Linux
1. Tapez `regarder "lsblk"`
1. Insérez votre carte SD dans votre machine Linux
1. Observez le résultat. Cela devrait ressembler à quelque chose comme cela :
```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```
1. Prenez note du point de montage de l'appareil. In the example above, it was `mmcblk0p1`
   - Si `RO` est réglé sur 1, assurez-vous que l'interrupteur de verrouillage n'est pas glissé vers le bas
1. Appuyez sur CTRL + C pour quitter le menu
1. Follow the instructions relevant to your SD card's capacity:
   - 2GB or lower: Type in `sudo mkdosfs /dev/(device mount point from above) -s 64 -F 16` to create a single FAT16 partition with 32 KB cluster size on the SD card
   - 4GB or higher: Type in `sudo mkdosfs /dev/(device mount point from above) -s 64 -F 32` to create a single FAT32 partition with 32 KB cluster size on the SD card

### Section II - Utilisation de F3
1. Téléchargez et extrayez [l'archive F3](https://github.com/AltraMayor/f3/archive/v7.2.zip) n'importe où sur votre ordinateur.
1. Lancez le terminal dans le dossier F3
1. Exécutez `make` pour compiler F3
1. Avec votre carte SD insérée et montée, exécutez `./f3write <le point de montage de votre carte SD>`
   - Attendez que le processus soit terminé. Regardez ci-dessous pour un exemple de sortie du terminal :
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. Lancez `./f3read <le point de montage de votre carte SD>`
- Attendez que le processus soit terminé. Regardez ci-dessous pour un exemple de sortie du terminal :
   ```
   $ ./f3read /media/michel/6135-3363/
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

::: tip

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your SD card is healthy and you can delete all `.h2w` files on your SD card.

:::

::: danger

Si le test présente n'importe quel autre résultat, votre carte SD est peut être corrompue ou endommagée et vous pourrez être amené à la remplacer !

:::

::::

:::: tab name="macOS" os="macos"

### Section I - Formatting your SD card with SD Formatter

::: tip

This section formats the SD card to the specifications by the SD Card Association. This can fix many issues that may occur with running homebrew applications.

:::

::: danger

Any 64GB or larger SD cards will be formatted to `exFAT` in this process. You _must_ follow Section II to re-format to `FAT32`.

:::

1. Download the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/)
   - Accept the End User License Agreement to start the download
1. Run `Install SD Card Formatter` (the `.mpkg` file) in the downloaded `.zip` file
1. Run `SD Card Formatter`
1. Select your SD card
1. Assurez-vous que la case `Quick Format` (formatage rapide) est cochée
1. Lancez le processus de formatage

### Section II - Formatting your SD card with Disk Utility

This section formats SD cards larger than 32GB to FAT32.

::: tip

If your SD card is 32GB or less in capacity, skip to Section III.

:::

#### OS X El Capitan (10.11) et versions plus récentes

1. Lancez l'application Utilitaire de disques
1. Sélectionnez `Afficher tous les appareils` dans le panneau `Présentation` en haut à gauche
1. Sélectionnez votre carte SD dans la barre latérale
   - Assurez-vous de choisir le bon périphérique, sinon vous risquez d'effacer accidentellement le mauvais lecteur !
1. Cliquez sur `Effacer` en haut
1. Assurez-vous que le `Format` est défini à `MS-DOS (FAT32)`
   - De El Capitan (10.11) à Catalina (10.15) choisissez `MS-DOS (FAT)`
1. Assurez-vous que `Schéma` est réglé sur `Master Boot Record`
   - Si `Schéma` n'apparaît pas, cliquez sur `Annuler` et assurez-vous de choisir le périphérique au lieu d'un volume
1. Cliquez sur `Effacer`, puis cliquez sur `Fermer`

#### OS X Yosemite (10.10) et versions plus anciennes
1. Lancez l'application Utilitaire de disques
1. Sélectionnez votre carte SD dans la barre latérale
   - Assurez-vous de choisir le bon périphérique, sinon vous risquez d'effacer accidentellement le mauvais lecteur !
1. Cliquez sur `Partitionner` en haut
   - Si `Partitionner` n'apparaît pas, assurez-vous de choisir le périphérique au lieu d'un volume
1. Assurez-vous que la `Configuration de volume` est définie à `1 partition`
1. Assurez-vous que le `Format` est défini à `MS-DOS (FAT)`
1. Depuis le bouton Options (en dessous de la table de partitions), sélectionnez `Master Boot Record`.
1. Cliquez sur `OK` -> `Appliquer` -> `Partition`

### Section III - Utilisation de F3
1. Ouvrez le terminal
1. Installez F3 depuis brew en exécutant `brew install f3`
   - Si vous n'avez pas brew, installez-le en suivant les instructions de [brew.sh](https://brew.sh)
1. Avec votre carte SD insérée et montée, exécutez `./f3write <le point de montage de votre carte SD>`
   - Attendez que le processus soit terminé. Regardez ci-dessous pour un exemple de sortie du terminal :
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. Lancez `f3read <le point de montage de votre carte SD>`
   - Attendez que le processus soit terminé. Regardez ci-dessous pour un exemple de sortie du terminal :
   ```
   $ f3read /Volumes/SD\ CARD
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

::: tip

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your SD card is healthy and you can delete all `.h2w` files on your SD card.

:::

::: danger

Si le test présente n'importe quel autre résultat, votre carte SD est peut être corrompue ou endommagée et vous pourrez être amené à la remplacer !

:::

::::

:::::

::: tip

Vous pouvez maintenant restaurer le contenu de votre carte SD et continuer.

:::

