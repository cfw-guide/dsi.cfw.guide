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
1. Launch GodMode9i
1. Ensure the Game Card is inserted into the console
1. Select the "NDS GAMECARD" option in GodMode9i
1. Select what you want to dump
   - The "Trimmed" options for the ROM will dump a smaller file that can save SD card space, however they won't work for most patches such as ROM hacks
1. Repeat steps 2-4 for all Game Cards you wish to dump

::: tip

Les cartouches de jeu extraites peuvent être trouvées dans `sd:/gm9i/out`.

:::
