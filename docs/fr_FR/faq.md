---
title: FAQ
---

## Dois-je faire une mise à jour du système ?
Non. La Nintendo DSi est capable d'exécuter des homebrews sur n'importe quelle version, y compris la plus récente, mais il n'y a aucun avantage à la mettre à jour. La boutique DSi a été entièrement mise hors ligne, l'intégration Facebook de l'appareil photo Nintendo DSi est morte depuis longtemps, et la seule autre chose que les mises à jour ont fait, c'est bloquer les linkers. Il existe également un risque, extrêmement faible, de **bricker** votre DSi lors d'une mise à jour du système, probablement le même que le risque lors de l'installation d'Unlaunch.

## Quel est le meilleur exploit ?
Unlaunch est globalement le meilleur exploit pour la DSi, le seul inconvénient étant qu'il y a un risque mineur de brick à l'installation. En général, il est recommandé d'utiliser Memory Pit (car c'est l'exploit le plus simple et le plus compatible) pour installer Unlaunch, mais si vous décidez d'éviter tout risque, il est recommandé d'utiliser plutôt Flipnote Lenny car l'utilisation de Memory Pit peut causer des problèmes dans certains cas. Vous trouverez ci-dessous une liste des avantages et des inconvénients de chaque exploit :

### Memory Pit
Avantages :
- Rapide et simple d'utilisation
- Aucun risque d'endommager la console, la désinstallation est aussi simple que de retirer la carte SD ou de supprimer un fichier
- Compatible avec toutes les consoles DSi, à moins qu'elles n'aient un appareil photo cassé et qu'elles n'aient pas terminé le tutoriel sur l'appareil photo

Inconvénients :
- Nécessite le lancement de l'appareil photo DSi chaque fois que vous voulez accéder à un homebrew
- Incompatible avec certains titres en mode DSi et homebrews car la WRAM n'est ouverte qu'au processeur ARM7
- L'accès au Slot-1 (la carte de jeu DS) est bloqué dans les homebrews
- L'accès au DSP est bloqué, ce qui entraîne une dégradation du son dans GBARunner2
- Les photos sur la carte SD ne peuvent pas être visualisées dans l'appareil photo DSi lorsque Memory Pit est installé, car c'est le déclencheur de l'exploit
     - La seule façon de visualiser les photos de la carte SD alors que Memory Pit est installé, est de lancer un dump de la ROM de l'application de l'appareil photo DSi en utilisant **TW**i**L**ight Menu++ pour le lancer via nds-bootstrap (v0.61.3 ou plus)

### Flipnote Lenny
Avantages :
- Meilleure compatibilité avec les titres en mode DSi et homebrews que Memory Pit
- Aucun risque d'endommager la console, la désinstallation est aussi simple que de retirer la carte SD ou de supprimer un dossier
- Meilleur son dans GBARunner2

Inconvénients :
- Nécessite Flipnote Studio
- Nécessite le chargement de Flipnote Studio chaque fois que vous voulez accéder à un homebrew, ce qui prend un peu plus de temps que Memory Pit
- L'accès au Slot-1 (la carte de jeu DS) est bloqué dans les homebrews

### Unlaunch
Avantages :
- Permet de lancer les homebrews et DSiWare immédiatement au démarrage du système, avec des boutons de raccourci facultatifs
- Accès complet au système sans aucune restriction, y compris :
   - Accès au Slot-1 permettant de dumper les cartes de jeu et de charger des linkers incompatibles
   - Meilleur son dans GBARunner2
- Supprime les verrouillages régionaux sur les cartes de jeu optimisées/exclusives DSi
- Protection contre la plupart des risques de brick de la DSi
- Les jeux optimisés DSi peuvent être exécutés en mode DSi sans ROM donatrice
- Les anciens homebrews peuvent être exécutés via nds-bootstrap-hb

Inconvénients :
- Risque très mineur de **bricker** la console lors de l'installation
- Autre risque, légèrement plus élevé, de brick si vous décidez de le [désinstaller](uninstalling-unlaunch.html)
- Non compatible avec les consoles de développement

## Est-ce que je perdrai des fonctionnalités en moddant mon système ?
Si vous installez Unlaunch ou utilisez Flipnote Lenny, vous ne perdrez aucune fonctionnalité. Si vous utilisez Memory Pit, vous ne pourrez pas visualiser les photos de la carte SD à l'aide de l'appareil photo DSi tant que Memory Pit est installé. Pour retrouver la possibilité de visualiser les photos de votre carte SD, installez Unlaunch ou passez à un autre exploit, puis supprimez le fichier `pit.bin` de Memory Pit.

## Comment puis-je jouer aux dumps de cartes de jeu Nintendo DS ?
La lecture des dumps de cartes de jeu sur la console nécessite l'utilisation d'un linker ou de nds-bootstrap, un programme qui permet de jouer à partir de la carte SD interne en redirigeant les lectures et les écritures du Slot-1 vers celle-ci.
- Avec TWiLight Menu++ vous pouvez naviguer sur votre carte SD pour trouver des fichiers ROMs à jouer avec nds-bootstrap. L'avantage d'utiliser TWiLight Menu++ est d'avoir un menu de triche, des paramètres par jeu et d'éviter les restrictions apportées par les forwarders. En d'autres termes, vous pouvez déposer vos fichiers ROMs directement et les lire sans aucune configuration. Il n'y a pas de limite de 39 titres, ni hiyaCFW ou Unlaunch ne sont nécessaires et il n'y a aucune restriction sur l'espace libre de la carte SD que vous pouvez avoir
- Les utilisateurs de hiyaCFW peuvent créer des forwarders pour le menu DSi de la SDNAND en utilisant le guide des [forwarders de jeux DS](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) sur le wiki DS-Homebrew, mais il présente certaines limites. Il y a une limite stricte de 39 titres, et ils sont moins pratiques à réaliser qu'en utilisant TWiLight Menu++
   - Si vous ne disposez pas de hiyaCFW et que vous souhaitez utiliser des forwarders, vous pouvez suivre le [guide d'installation de hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) sur le wiki DS-Homebrew

## Comment puis-je mettre à jour mes homebrews ?
- **Unlaunch** - Suivez les instructions de la page [Installation d'Unlaunch](installing-unlaunch.html)
   - Vous n'avez **pas** besoin de désinstaller Unlaunch avant de faire cela
- **hiyaCFW** - Remplacez `hiya.dsi` à la racine de la carte SD par la [version mise à jour](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Suivez les instructions sur le [wiki DS-Homebrew](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copiez `nds-bootstrap-hb-release.nds` et `nds-bootstrap-release.nds` dans le dossier `_nds` à la racine de votre carte SD
   - Si vous utilisez TWiLight Menu++, il y a beaucoup de chance que la dernière version de nds-bootstrap soit incluse avec celui-ci
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Suivez les instructions utilisées pour les télécharger

D'autres homebrews peuvent utiliser d'autres méthodes de mise à jour.

## Je suis nouveau ou je voudrais refaire mon installation. Par où dois-je commencer ?
- Si vous n'avez pas encore modifié votre console ou si vous cherchez à mettre à jour Unlaunch sur votre système, nous vous recommandons de commencer par le début du guide et de suivre les pages. Assurez-vous de lire tout ce qui figure sur la page d'accueil
- Si vous disposez de la dernière version d'Unlaunch, suivez le [guide d'installation de TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) pour configurer TWiLight Menu++ sur votre système

## Comment puis-je supprimer le contrôle parental ?
- Le [générateur mkey](https://mkey.salthax.org) peut générer le code nécessaire à la suppression du contrôle parental

## Puis-je changer la région de ma Nintendo DSi ?
Oui, il existe plusieurs méthodes différentes selon ce que vous voulez changer :
- La méthode la plus sûre et la plus simple est tout simplement d'installer TWiLight Menu++, il peut utiliser n'importe quelle langue officielle et plus encore sans nécessiter de modifications de la NAND
- Si vous voulez réellement changer la région du système et que vous utilisez hiyaCFW, vous pouvez utiliser [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) de Yoti pour les systèmes DSi asiatiques. Pour les systèmes DSi américains, utilisez [cette version de hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Enfin, si vous voulez changer la région sur le système NAND réel, vous pouvez utiliser [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/) de Mighty Max

## Qu'est-il arrivé au guide d'installation de hiyaCFW ?
Parce que hiyaCFW n'a pas beaucoup d'utilité fonctionnelle et constituait une partie problématique et confuse du guide pour de nombreux utilisateurs, elle a été déplacée vers le [wiki DS-Homebrew](https://wiki.ds-homebrew.com/hiyacfw/installing).
- Si le lien vers la page en question provient d'un autre guide, les instructions que vous suiviez étaient très probablement périmées. Veuillez plutôt utiliser ce guide, car il est maintenu en permanence par les développeurs de ces projets

## Quel type de carte SD dois-je utiliser ?
- Vous devez acheter une carte SD d'une marque de confiance
- Une carte SD de taille normale ou une carte microSD avec un adaptateur fonctionneront toutes les deux
- Toute capacité comprise entre 1 Go et 2 To fonctionnera. Pour un usage général, 8 Go suffisent
  - Certains logiciels, comme hiyaCFW, peuvent avoir des temps de chargement plus longs avec des cartes SD de plus grande capacité
- La classe de vitesse 8 ou plus est recommandée

## Puis-je utiliser ma carte SD DSi sur d'autres systèmes ?
En général, oui, à deux exceptions près :
- hiyaCFW ne fonctionnera que sur le système pour lequel il a été configuré
- Même si vous utilisez nds-bootstrap ou un linker, les codes amis dans les jeux DS en ligne seront réinitialisés si vous tentez de vous connecter en utilisant une autre console

## La page d'[Unlaunch](https://problemkaputt.de/unlaunch.htm) dit que la version 2.0 n'est pas connue pour être sûre. Dois-je utiliser une version antérieure à la place ?
La page d'Unlaunch n'a pas été mise à jour depuis la sortie de la version 2.0, il y a plus de deux ans. La grande majorité des utilisateurs ne rencontrent aucun problème avec cette version, qui est donc considérée comme sûre.

## Comment puis-je installer des DSiWare ?
Il y a trois façons de jouer aux DSiWare sur une DSi :
- Exécutez simplement la ROM à partir de TWiLight Menu++, c'est le plus simple et la seule limite est la taille de votre carte SD, cependant il y a quelques problèmes de compatibilité mineurs
- Installez [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing), puis installez les DSiWare en utilisant soit [NTM](https://github.com/Epicpkmn11/NTM/releases), soit [TMFH](https://github.com/JeffRuLz/TMFH/releases), comme il s'agit du véritable menu DSi, il est limité à 39 titres, mais la compatibilité est parfaite
- Installez directement sur le menu DSi de la SysNAND en utilisant [NTM](https://github.com/Epicpkmn11/NTM/releases), cela a aussi une compatibilité parfaite, mais les limites de 39 titres et de 1 024 blocs (128 Mio) s'appliquent toutes les deux et il y a un risque de brick extrêmement mineur dû à l'écriture sur la NAND interne
