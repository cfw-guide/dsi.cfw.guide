---
title: "Installation de Unlaunch"
---

{% include toc title="Navigation" %}

Unlaunch est un exploit qui se déclenche au démarrage du système. Cela lui donne des privilèges plus élevés que les exploits normaux DSiWare comme Memory Pit, ce qui lui permet de faire ce qui suit :

- Lancer des applications au démarrage (homebrew ou DSiWare), avec des combinaisons optionnelles de boutons
- Accès à Slot-1, vous permettant d'extraire des cartouches et de lancer des linkers incompatibles
- Verrous de région supprimés pour les jeux DSi-Enhanced / Exclusive
- Exécuter l'ancien homebrew Nintendo DS via nds-bootstrap-hb
- Lancer des applications DSiWare à partir de la carte SD interne
- Meilleur sononité sur GBARunner2
- Protection contre les bricks

Si vous ne l'avez pas encore fait, veuillez faire une [sauvegarde de la NAND](dumping-nand). Même si les chances sont minces, Unlaunch peut accidentellement brick votre Nintendo DSi. Une sauvegarde de la NAND + [hardmod](https://web.archive.org/web/20151102221503/https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/) vous permettrait de restaurer cette sauvegarde, à condition que vous sachiez comment s'y prendre.
{: .notice--danger}

Assurez-vous que votre console est chargée lorsque vous suivez ce processus. Une perte soudaine de batterie pourrait causer de graves dégâts.
{: .notice--warning}

## Section I - Préparations de la carte SD

Vous utilisez un périphérique Windows, Linux ou macOS ? Utilisez [Lazy DSi Downloader](lazy-dsi-downloader) pour configurer automatiquement votre carte SD.
{: .notice--info}

1. Téléchargez la dernière version de [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Lien miroir](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), si le précédent ne fonctionne pas
1. Extrayez `UNLAUNCH.DSI` depuis `unlaunch.zip` et placez-le n'importe où sur votre carte SD
1. Vérifiez que vous avez toujours TWiLight Menu++ sur votre carte SD
   - Si vous n'êtes pas sûr, suivez les instructions de la page [Lancement de l'exploit](launching-the-exploit#twilight-menu)

## Section II - Installation/Mise à jour de Unlaunch

1. Ouvrez TWiLight Menu++
   - Si c'est la première fois que vous installez Unlaunch, relancez TWiLight Menu++ avec l'exploit que vous avez utilisé
   - Si vous avez déjà installé Unlaunch et que vous cherchez à le mettre à jour, maintenez <kbd class="face">A</kbd> + <kbd class="face">B</kbd> pendant le démarrage et sélectionnez le `TWiLight Menu++` où `BOOT. DS` est affiché sur l'écran du bas
1. Lancez les paramètres de TWiLight Menu++
   - Si vous n'avez pas modifié votre thème, suivez les étapes de la page « Lancement de l'exploitation ». Sinon, consultez le manuel de TWiLight Menu++
1. Appuyez sur <kbd class="l">L</kbd> / <kbd class="r">R</kbd> ou <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> jusqu'à ce que vous atteigniez la page `Paramètres d'Unlaunch`
1. Si vous voulez changer l'image en arrière-plan de Unlaunch, sélectionnez `Arrière-plan` et choisissez celle que vous voulez
   - Si vous voulez créer votre propre arrière-plan pour Unlaunch, consultez la page [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Si vous voulez l'écran Santé et Sécurité et la musique et les sons du menu DSi, réglez `Patchs pour lanceurs` sur `Off`
   - Cela empêchera également le verrouillage de la région d'être supprimé
1. Quittez les paramètres de TWiLight Menu++
1. Dans le menu de navigation des fichiers, lancez `Unlaunch DSi Installer`
1. Sélectionnez l'option d'installation
   - Si Unlaunch plante à `ERREUR: MISMATCH IN FAT COPIES`, veuillez consulter la page [Problèmes et dépannage](troubleshooting)
1. Une fois terminé, redémarrez votre système

Si vous voyez l'écran du menu de fichiers de Unlaunch, vous avez moddé votre Nintendo DSi avec succès.
- Si vous voyez un écran noir, veuillez consulter notre page de [dépannage](troubleshooting)

## Section III - Configuration post-Unlaunch

Pour le moment, Unlaunch lance par défaut son menu de fichiers au démarrage, mais cela peut être modifié pour lancez ce que vous voulez.

Nous allons également reconfigurer nds-bootstrap pour lancer TWiLight Menu++ (au lieu du titre DSiWare exploité) lorsque nous réinitialisons en jeu.

1. Allumez votre console en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
1. Naviguez vers `OPTIONS` et regardez les options disponibles
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> est codé en dur pour être lancé dans le menu de Unlaunch, et ne peut donc pas être modifié
   - Les options `NO BUTTON` et `BUTTON A / B / X / Y` peuvent être réglées comme vous le souhaitez et choisiront ce que votre DSi charge au démarrage en fonction des boutons maintenus. Vous pouvez sélectionner n'importe quel DSiWare, homebrew, la carte Slot-1, wifiboot, ou le menu de fichiers Unlaunch
      - Pour TWiLight Menu++, sélectionnez l'option `TWiLight Menu++` où `BOOT.NDS` est affiché sur l'écran du bas
      - Pour le menu DSi original, sélectionnez `Launcher`
   - `LOAD ERROR` est ce que votre DSi chargera si le chargement de ce que vous avez défini échoue, comme la carte SD qui n'est pas insérée
1. Enregistrez vos paramètres et revenez au menu de Unlaunch
1. Survolez les options `TWiLight Menu++` et trouvez celle qui a un chemin contenant `settings.srldr` sur l'écran du bas
1. Lancez l'option en surbrillance
1. Utilisez les boutons <kbd class="l">L</kbd> / <kbd class="r">R</kbd> ou <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> pour passer à la page `Misc. Settings`
1. Définissez l'option `DSiWare Exploit` à `None`

## Section IV - Nettoyage de votre carte SD

Cette section est optionnelle et sert uniquement à garder votre carte SD en bon état.
{: .notice--primary}

- Supprimez le fichier `sd:/private/ds/app/484E494A/pit.bin` de votre carte SD
   - Si vous avez utilisé un autre exploit, supprimez les fichiers de cet exploit à la place
- Sélectionnez le fichier `UNLAUNCH.DSI` que vous venez de télécharger
