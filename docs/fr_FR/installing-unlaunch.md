---
title: Installation d'Unlaunch
---

::: danger

Si vous ne l'avez pas encore fait, veuillez suivre [Dumping de la NAND](dumping-nand.html). Même si les chances sont minces, Unlaunch peut accidentellement bricker votre Nintendo DSi. Une sauvegarde NAND peut être restaurée avec du [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod), à condition de savoir souder.

:::

::: warning

Assurez-vous que votre console est chargée lorsque vous suivez cette procédure. Une perte soudaine de batterie pourrait causer de graves dégâts.

:::

::: warning

Unlaunch n'est pas compatible avec les consoles de développement Nintendo DSi.

:::

## Section I - Configuration de la carte SD

::: tip

Vous utilisez un périphérique Windows, Linux ou macOS ? Utilisez [Lazy DSi Downloader](lazy-dsi-downloader.html) pour configurer automatiquement votre carte SD.

:::

1. Téléchargez la dernière version d'[Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Lien miroir](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), si le précédent ne fonctionne pas
1. Extrayez `UNLAUNCH.DSI` depuis `unlaunch.zip` et placez-le n'importe où sur votre carte SD
1. Vérifiez que vous avez toujours TWiLight Menu++ sur votre carte SD
   - Si vous n'êtes pas sûr, suivez les instructions du [guide d'installation de TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## Section II - Installation/Mise à jour d'Unlaunch

1. Ouvrez TWiLight Menu++
   - Si c'est la première fois que vous installez Unlaunch, relancez TWiLight Menu++ avec [l'exploit que vous avez utilisé](launching-the-exploit.html)
   - Si vous avez déjà installé Unlaunch et que vous cherchez à le mettre à jour, maintenez <kbd class="face">A</kbd> + <kbd class="face">B</kbd> pendant le démarrage et sélectionnez l'option intitulée `TWiLight Menu++`
   - Si plusieurs options sont intitulées `TWiLight Menu++`, sélectionnez l'option dans laquelle `BOOT.NDS` apparaît à la fin du chemin sur l'écran inférieur
      - Cela se produit parce que vous exécutez une ancienne version de TWiLight Menu++, à moins que vous ne le fassiez exprès, il vous est suggéré de [mettre à jour votre installation](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
1. Lancez les paramètres de TWiLight Menu++
   - Si vous n'avez pas changé de thème, appuyez sur `SELECT` et touchez la petite icône DS en bas de l'écran tactile. Sinon, consultez le manuel de TWiLight Menu++
1. Pressez <kbd class="l">L</kbd> / <kbd class="r">R</kbd> ou <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> jusqu'à ce que vous atteigniez la page `Paramètres d'Unlaunch`
1. Si vous voulez changer l'image en fond d'écran d'Unlaunch, sélectionnez `Fond d'écran` et choisissez celle qui vous convient
   - Si vous souhaitez créer votre propre fond d'écran d'Unlaunch, consultez la page du [wiki DS-Homebrew](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Quittez les paramètres de TWiLight Menu++
1. In the file navigation menu, launch `Unlaunch DSi Installer`
   - If you see two black screens after launching, download [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start `Unlaunch.dsi`    
     This method does not enable Unlaunch to use custom patches and background
1. Select the "install now" option
   - Si Unlaunch plante à `ERROR: MISMATCH IN FAT COPIES`, veuillez consulter la page de [dépannage](troubleshooting.html)
1. Une fois terminé, redémarrez votre système

Si vous voyez l'écran du menu de fichiers d'Unlaunch, vous avez moddé votre Nintendo DSi avec succès.
- Si vous voyez un écran noir, veuillez consulter la page de [dépannage](troubleshooting.html)

## Section III - Configuration post-Unlaunch

Actuellement, Unlaunch lance par défaut son menu Fichier au démarrage, mais cela peut être modifié pour lancer ce que vous voulez.

1. Allumez votre console en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
   - Cela devrait lancer le menu Fichier d'Unlaunch
   - Si seul l'arrière-plan est affiché, ou si aucun fichier de la carte SD n'est affiché (comme `TWiLight Menu++`), alors vous devrez [reformater la carte SD](sd-card-setup.html)
1. Naviguez vers `OPTIONS` et regardez les options disponibles
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> est codé en dur pour être lancé dans le menu de Unlaunch, et ne peut donc pas être modifié
   - Les options `NO BUTTON` et `BUTTON A / B / X / Y` peuvent être réglées comme vous le souhaitez et choisiront ce que votre DSi charge au démarrage en fonction des boutons maintenus. Vous pouvez sélectionner n'importe quel DSiWare ou homebrew, la carte Slot-1, wifiboot, ou le menu Fichier d'Unlaunch
      - Pour TWiLight Menu++, sélectionnez `TWiLight Menu++`
      - Pour le menu DSi original, sélectionnez `Launcher`
   - `LOAD ERROR` est ce que votre DSi chargera si le chargement de ce que vous avez défini échoue, comme la carte SD qui n'est pas insérée
1. Sélectionnez `SAVE & EXIT` pour enregistrer vos paramètres, puis éteignez votre DSi

## Section IV - Nettoyage de votre carte SD

::: tip

Cette section est facultative et ne sert qu'à débarrasser votre carte SD des fichiers dont vous n'avez pas besoin.

:::

:::: tabs

::: tab name="Memory Pit" default

- Supprimez le fichier `sd:/private/ds/app/484E494A/pit.bin` de votre carte SD
   - Si `tip.bin` existe toujours, alors renommez-le en `pit.bin`
- Vous pouvez maintenant restaurer le dossier `DCIM` qui était à la racine de votre carte SD, si ce dossier existait
- Supprimez le fichier `UNLAUNCH.DSI` de votre carte SD

:::

::: tab name="Flipnote Lenny"

- Supprimez les fichiers `800031_104784BAB6B57_000.ppm` et `T00031_1038C2A757B77_000.ppm` des dossiers suivants :
   - `sd:/private/ds/app/4B47554A/001` (Japon)
   - `sd:/private/ds/app/4B475545/001` (États-Unis)
   - `sd:/private/ds/app/4B475556/001` (Europe/Australie)
   - Vous pouvez également supprimer tous les dossiers des régions autres que la vôtre
- Supprimez le fichier `UNLAUNCH.DSI` de votre carte SD

:::
