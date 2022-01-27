---
title: Extraction des cartouches de jeu
---

Cette section permet d'extraire des jeux de leur cartouche en utilisant GodMode9i afin qu'ils puissent être jouées sur des émulateurs, des linkers ou votre carte SD via nds-bootstrap.

## Prérequis
- La cartouche de jeu du titre que vous souhaitez extraire
- Votre Nintendo DSi avec [Unlaunch](installing-unlaunch) installé

## Instructions
### Section I - Configuration de la carte SD

::: tip

Vous utilisez un périphérique Windows, Linux ou macOS ? Utilisez [Lazy DSi Downloader](lazy-dsi-downloader) pour configurer automatiquement votre carte SD.

:::

1. Téléchargez la dernière version de [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)
1. Extrayez `GodMode9i.nds` de l'archive GodMode9i et copiez-le n'importe où sur votre carte SD

### Section II - Instructions Nintendo DSi
1. Allumez votre console en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
   - Cela devrait lancer le menu de fichiers de Unlaunch
1. Lancez GodMode9i depuis le menu de fichiers de Unlaunch
1. Assurez-vous que la cartouche de jeu est insérée dans la console
1. Sélectionnez l'option "NDS GAMECARD" dans GodMode9i
1. Sélectionnez si vous voulez ou non le remplissage :
   - Full : remplissage inclus
   - Trim : remplissage supprimé
1. Répétez les étapes 3 à 5 pour toutes les cartouches de jeu que vous souhaitez extraire

::: tip

Les cartouches de jeu extraites peuvent être trouvées dans `sd:/gm9i/out`.

:::
