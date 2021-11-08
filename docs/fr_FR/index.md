---
home: true
title: Accueil
header:
  overlay_image: /assets/images/home-page-feature.png
  overlay_filter: 0.5
---

::: tip

Pour des guides complets sur les homebrews et firmwares personnalisés pour d'autres appareils, consultez [CFW.Guide](https://cfw.guide/).

:::

::: danger

Ce guide n'est pas compatible avec les consoles de développement Nintendo DSi.

:::

::: tip

Lisez attentivement toutes les pages d'introduction (y compris celle-ci !) avant de continuer.

:::

## Qu'est-ce qu'un homebrew ?

[Les applications homebrews](https://fr.wikipedia.org/wiki/Homebrew_(jeu_vidéo)) sont des logiciels sans licence conçus pour des systèmes fermés tels que la Nintendo DSi. Ces applications peuvent aller d'utilitaires à des jeux homebrews personnalisés.

Les homebrews peuvent être exécutés gratuitement sur toutes les consoles Nintendo DSi, quelle que soit la version du firmware ou la région. Tout ce dont vous avez besoin est d'un point d'entrée et une carte SD pour stocker votre homebrew. Le point d'entrée principal utilisé dans ce tutoriel est Memory Pit, mais il y en a d'autres que vous pouvez utiliser si Memory Pit est inutilisable.

## Que fera ce guide à mon système ?

Gardez à l'esprit que le guide est structuré de manière linéaire, mais cela dépend généralement de la profondeur que vous souhaitez atteindre en termes de moddage du système.

- Nous allons configurer un point d'entrée pour lancer des homebrew de base via Memory Pit, l'exploit de l'application Appareil photo Nintendo DSi
- Nous allons ensuite prendre une sauvegarde NAND, qui est utile comme point de restauration au cas où vous vous tromperiez plus tard
- Enfin, pour les utilisateurs qui veulent avoir accès à toutes les fonctionnalités de la DSi nous les guiderons en installant Unlaunch. Il permet aux homebrews de s'exécuter avec plus de permissions (comme l'accès Slot-1) et au démarrage du système
   - L'installation de Unlaunch modifie votre NAND et, dans des cas extrêmes, peut potentiellement **bricker** le système. Si vous ne risquez pas de brick, vous pouvez arrêter après avoir fait une sauvegarde NAND

## Que puis-je faire en moddant mon système ?

- Run Nintendo DS(i) game backups or ROM hacks from your DSi SD card without the need of a flashcard
- Lancez n'importe quels titres DSiWare (hors-région et/ou exclusivités 3DS) depuis votre carte SD
- Démarrez les applications DSiWare et homebrews en maintenant enfoncés certains boutons lorsque vous allumez votre Nintendo DSi
- Exécutez des vieux classiques en utilisant divers émulateurs
- Utilisez des linkers normalement incompatibles
- Redirect your NAND to the SD card using hiyaCFW
- Regardez vos films favoris en utilisant MPEG4Player
- Display an image (referred to as the boot splash) on system launch
- Play homebrew games

## Où puis-je trouver des applications homebrew ?

- [Universal-DB](https://db.universal-team.net/ds) a les homebrews les plus modernes, avec une bonne recherche et un bon tri pour garder une trace de ce qui a été récemment mis à jour
- [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew) a beaucoup de homebrews plus anciens, mais beaucoup ne fonctionneront que sur des linkers

## Que dois-je savoir avant de commencer ?

- Sur Windows, il est recommandé d'[afficher les extensions de fichier](file-extensions-%28windows%29) si vous utilisez l'Explorateur de fichiers par défaut
- Le seul risque de brick provient de l'installation de Unlaunch, et le risque de brick est minimal
- Si vous n'avez pas l'habitude de copier des fichiers sur une carte SD, nous mettons à votre disposition des outils d'aide

::: tip

Continuer vers [Lancement de l'exploit](launching-the-exploit)

:::
