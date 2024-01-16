---
title: "Pour commencer"
---

La principale application homebrew que ce guide vous demande d'installer est **TW**i**L**ight Menu++, qui est une mise à niveau/un remplacement du menu Nintendo DSi permettant d'exécuter d'autres applications homebrew, des jeux DS commerciaux, des émulateurs pour diverses anciennes consoles, etc.

Nous commencerons par le télécharger ainsi que d'autres outils homebrew, en préparation des étapes de l'exploit.

## Prérequis

- Un moyen de copier les fichiers téléchargés sur votre carte SD
- An application that can extract archives, such as [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), or [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
    - Nous vous conseillons de ne pas utiliser WinRAR, car il est connu pour casser les choses
    - If you're using Windows 11, we also advise you to not use it's built-in extractor, as it'll cause an error saying that the filename is too long or not valid

## Section I - Travail préparatoire

::: warning

Assurez-vous que votre carte SD est [correctement formatée](sd-card-setup.html).

:::

1. Insérez votre carte SD dans votre PC
1. Téléchargez la dernière version de [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
1. Téléchargez la dernière version de [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Copiez le dossier `_nds` de `TWiLightMenu-DSi.7z` à la racine de votre carte SD
1. Copiez le fichier `BOOT.NDS` de `TWiLightMenu-DSi.7z` à la racine de votre carte SD
1. Copiez le fichier `dumpTool.nds` à la racine de votre carte SD

::: tip

Vous ne savez pas ce qu'est la « racine » de la carte SD ? [Consultez cette image](https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png)

:::


## Section II - Sélection d'un exploit

À partir de là, trois options s'offrent à vous, avec une différence mineure dans ce que chacune implique.


### Installation d'Unlaunch via Memory Pit

Memory Pit est un exploit utilisant l'appareil photo DSi, compatible avec toutes les versions du firmware. Facultativement, cet exploit peut être utilisé pour installer Unlaunch, un exploit bootcode qui permet le contrôle total de la console au démarrage.

Comme Memory Pit est quelque peu limité dans sa compatibilité avec les homebrews, il est recommandé d'installer Unlaunch, au lieu d'utiliser Memory Pit de manière autonome. Comme c'est la méthode la plus facile pour installer Unlaunch, c'est le chemin recommandé. Cependant, il existe un risque très mineur de **brick** de votre console lors de l'installation d'Unlaunch, donc si cela vous préoccupe, consultez la méthode alternative ci-dessous.

::: tip

Continuez vers [Lancement de l'exploit](launching-the-exploit.html)

:::


### stylehax

stylehax est un exploit utilisant l'application Nintendo DSi Browser, et peut être utilisé comme une alternative à Memory Pit pour installer Unlaunch (expliqué ci-dessus) si votre DSi a un appareil photo cassé.

Pour une expérience sans Unlaunch, cet exploit est recommandé car l'utilisation de Memory Pit cause des problèmes dans certains jeux et homebrews.

::: tip

Continuez vers [Lancement de l'exploit (stylehax)](launching-the-browser-exploit.html)

:::


### Flipnote Lenny

Flipnote Lenny est un exploit utilisant l'application Flipnote Studio.

Si vous possédez Flipnote Studio et que vous ne prévoyez pas d'installer Unlaunch (expliqué ci-dessus), cet exploit est recommandé car l'utilisation de Memory Pit cause des problèmes dans certains jeux et homebrews.

Vous pouvez toujours installer Unlaunch plus tard si vous décidez plus tard que vous le voulez.

::: tip

Continuez vers [Lancement de l'exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

Pour une comparaison plus détaillée des avantages et inconvénients des exploits disponibles, veuillez consulter sur la section [Quel est le meilleur exploit ?](faq.html#which-is-the-best-exploit) de la FAQ.
