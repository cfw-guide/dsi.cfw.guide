---
---

# Extraction des cartouches de jeu

This section is for dumping Game Cards using GodMode9i so they can be played on emulators, flashcards, or your SD card via nds-bootstrap.

## Prérequis
- The Game Card of the title you would like to dump
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
1. Ensure the Game Card is inserted into the console
1. Sélectionnez l'option "NDS GAMECARD" dans GodMode9i
1. Sélectionnez si vous voulez ou non le remplissage :
   - Full : remplissage inclus
   - Trim : remplissage supprimé
1. Repeat steps 3-5 for all Game Cards you wish to dump

::: tip

The dumped Game Cards will be found in `sd:/gm9i/out`.

:::
