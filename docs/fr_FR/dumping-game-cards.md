---
title: Extraction des cartouches de jeu
---

Cette section permet d'extraire des jeux de leur cartouche en utilisant GodMode9i afin qu'ils puissent être jouées sur des émulateurs, des linkers ou votre carte SD via nds-bootstrap.

## Prérequis
- La cartouche de jeu du titre que vous souhaitez extraire
- Your Nintendo DSi console with [Unlaunch](installing-unlaunch.html) installed

## Instructions
### Section I - Configuration de la carte SD

::: tip

Vous utilisez un périphérique Windows, Linux ou macOS ? Utilisez [Lazy DSi Downloader](lazy-dsi-downloader.html) pour configurer automatiquement votre carte SD.

:::

1. Téléchargez la dernière version de [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)
1. Extrayez `GodMode9i.nds` de l'archive GodMode9i et copiez-le n'importe où sur votre carte SD

### Section II - Instructions Nintendo DSi
1. Lancez GodMode9i
1. Assurez-vous que la carte de jeu est insérée dans la console
1. Sélectionnez l'option "NDS GAMECARD" dans GodMode9i
1. Sélectionnez ce que vous voulez dumper
   - Les options "Trimmed" pour la ROM dumperont un fichier plus petit qui peut économiser de l'espace sur la carte SD, mais elles ne fonctionneront pas pour la plupart des correctifs tels que les hacks de ROM
1. Répétez les étapes 2 à 4 pour toutes les cartes de jeu que vous souhaitez dumper

::: tip

Les cartouches de jeu extraites peuvent être trouvées dans `sd:/gm9i/out`.

:::
