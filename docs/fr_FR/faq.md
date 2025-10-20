# FAQ

## Dois-je faire une mise à jour du système ?

Il n'est **pas** recommandé de mettre à jour votre DSi à moins que vous ne sachiez que des DSiWare ont été achetés. Il est toujours possible de suivre ce guide si vous le faites, mais le seul avantage de la mise à jour est la possibilité d'accéder à la boutique Nintendo DSi pour retélécharger des titres déjà achetés. Tous les autres avantages, comme l'intégration de Facebook dans l'application de l'appareil photo Nintendo DSi, ne sont plus utilisables ou ne sont pas suffisamment importants pour justifier les inconvénients :

- L'installation des mises à jour du système est connue pour occasionnellement **bricker** des consoles, avec à peu près la même fréquence que lors de l'installation d'Unlaunch
- Il n'est plus possible d'utiliser des exploits plus anciens, ce qui peut être nécessaire si vous ne pouvez pas utiliser les exploits recommandés
- La compatibilité des linkers est réduite, mais cela peut être contourné si vous installez Unlaunch

## Quel est le meilleur exploit ?

Unlaunch est globalement le meilleur exploit pour la DSi, le seul inconvénient étant qu'il y a un risque mineur de brick à l'installation. En général, il est recommandé d'utiliser Memory Pit pour installer Unlaunch. Si vous voulez éviter tout risque, il est recommandé d'utiliser plutôt Flipnote Lenny car il a moins de problèmes que Memory Pit avec les homebrews, tout en étant tout aussi sûr et simple à supprimer. Vous trouverez ci-dessous une liste des avantages et des inconvénients de chaque exploit :

### Memory Pit

Avantages :

- Rapide et simple d'utilisation
- Aucun risque d'endommager la console, la désinstallation est aussi simple que de retirer la carte SD ou de supprimer un fichier
- Compatible avec toutes les consoles DSi, à moins qu'elles n'aient un appareil photo cassé et qu'elles n'aient pas terminé le tutoriel sur l'appareil photo

Inconvénients :

- Nécessite le lancement de l'appareil photo Nintendo DSi chaque fois que vous voulez accéder à un homebrew
- Incompatible avec certains titres en mode DSi et homebrews car la WRAM n'est ouverte qu'au processeur ARM7
- L'accès au Slot-1 (la carte de jeu DS) est bloqué dans les homebrews
- L'accès au DSP est bloqué, ce qui entraîne une dégradation du son dans GBARunner2
- Les photos sur la carte SD ne peuvent pas être visualisées dans l'appareil photo Nintendo DSi lorsque Memory Pit est installé, car c'est le déclencheur de l'exploit
  - La seule façon de voir les photos de la carte SD lorsque Memory Pit est installé, est de lancer un dump de la ROM de l'application de l'appareil photo Nintendo DSi en utilisant **TW**i**L**ight Menu++ pour le démarrer via nds-bootstrap (v0.61.3 ou plus récent)

### stylehax

Avantages :

- Meilleure compatibilité avec les titres en mode DSi et homebrews que Memory Pit
- Facile à utiliser
- Aucun risque d'endommager la console
- Utilisable sur les consoles avec un appareil photo cassé
- Meilleur son dans GBARunner2

Inconvénients :

- Nécessite un accès à Internet
- Nécessite de charger le Nintendo DSi Browser chaque fois que vous voulez accéder à un homebrew, ce qui prend un peu plus de temps que Memory Pit
- L'accès au Slot-1 (la carte de jeu DS) est bloqué dans les homebrews

### Flipnote Lenny

Avantages :

- Meilleure compatibilité avec les titres en mode DSi et homebrews que Memory Pit
- Aucun risque d'endommager la console, la désinstallation est aussi simple que de retirer la carte SD ou de supprimer un dossier
- Utilisable sur les consoles avec un appareil photo cassé
- Meilleur son dans GBARunner2

Inconvénients :

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

- Risque très faible de **bricker** la console lors de l'installation
- Autre risque, un peu plus élevé, de brick si vous décidez de [le désinstaller](uninstalling-unlaunch.html)
- Non compatible avec les consoles de développement

## Est-ce que je perdrai des fonctionnalités en moddant mon système ?

Si vous installez Unlaunch ou utilisez Flipnote Lenny, vous ne perdrez aucune fonctionnalité. Si vous utilisez Memory Pit, vous ne pourrez pas visualiser les photos de la carte SD à l'aide de l'appareil photo Nintendo DSi, à moins que vous ne lanciez un dump de cette ROM en utilisant **TW**i**L**ight Menu++ pour le démarrer via nds-bootstrap.

- Pour retrouver la possibilité de visualiser les photos de votre carte SD lors du lancement de l'appareil photo Nintendo DSi à partir du menu DSi, installez Unlaunch ou utilisez un autre exploit, puis supprimez le fichier `pit.bin` de Memory Pit
  - Si `tip.bin` existe dans le même dossier, renommez-le en `pit.bin`

## Comment puis-je jouer aux dumps de cartes de jeu Nintendo DS ?

La lecture des dumps de cartes de jeu sur la console nécessite l'utilisation d'un linker ou de nds-bootstrap, un programme qui permet de jouer à partir de la carte SD interne en redirigeant les lectures et les écritures du Slot-1 vers celle-ci.

- Avec TWiLight Menu++, vous pouvez naviguer sur votre carte SD pour trouver des fichiers ROMs à jouer avec nds-bootstrap. L'avantage d'utiliser TWiLight Menu++ est d'avoir un menu de triche, des paramètres par jeu et d'éviter les restrictions apportées par les forwarders. En d'autres termes, vous pouvez déposer vos fichiers ROMs directement et les lire sans aucune configuration. Il n'y a pas de limite de 39 titres, ni hiyaCFW ou Unlaunch ne sont nécessaires et il n'y a aucune restriction sur l'espace libre de la carte SD que vous pouvez avoir
- Les utilisateurs de hiyaCFW peuvent créer des redirections pour le menu DSi de SDNAND en utilisant le guide [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) sur le wiki DS-Homebrew, mais il a quelques limites. Il y a une limite stricte de 39 titres, et ils sont moins pratiques à réaliser qu'en utilisant TWiLight Menu++
  - Si vous n'avez pas de hiyaCFW et que vous souhaitez utiliser les transferts, vous pouvez suivre le [guide d'installation de hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) sur le wiki DS-Homebrew

## Comment puis-je mettre à jour mes homebrews ?

- **Unlaunch** - Suivez les instructions sur la page [Installation de Unlaunch](installing-unlaunch.html)
  - Vous n'avez **pas** à désinstaller Unlaunch avant de faire ceci
- **hiyaCFW** - Remplacez `hiya.dsi` à la racine de la carte SD de la [version mise à jour](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Suivez les instructions sur le [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copiez `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` dans le dossier `_nds` à la racine de votre carte SD
  - Si vous utilisez TWiLight Menu++, il y a beaucoup de chance que la dernière version de nds-bootstrap soit incluse avec celui-ci
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Suivez les instructions utilisées pour les télécharger

D'autres homebrews peuvent utiliser d'autres méthodes de mise à jour.

## Je suis nouveau ou je voudrais refaire mon installation. Par où dois-je commencer ?

- Si vous n'avez pas encore modifié votre console ou si vous cherchez à mettre à jour Unlaunch sur votre système, nous vous recommandons de commencer par le début du guide et de suivre les pages. Assurez-vous de lire tout ce qui figure sur la page d'accueil
- Si vous avez la dernière version de Unlaunch, suivez le [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) pour configurer TWiLight Menu++ sur votre système

## Comment puis-je supprimer le contrôle parental ?

- Le [générateur mkey](https://mkey.salthax.org) peut générer le code requis pour supprimer les contrôles parentaux

## Puis-je changer la région de ma Nintendo DSi ?

Oui, il existe plusieurs méthodes différentes selon ce que vous voulez changer :

- La méthode la plus sûre et la plus simple est tout simplement d'installer TWiLight Menu++, il peut utiliser n'importe quelle langue officielle et plus encore sans nécessiter de modifications de la NAND
- Si vous voulez réellement changer la région du système et que vous utilisez hiyaCFW, ouvrez le menu de configuration et modifiez les paramètres de région (pas possible avec CHN et KOR NANDs)
  - Si cela casse l'entrée tactile, retournez le paramètre de région à l'original, et vous pouvez utiliser Yoti [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) pour les systèmes asiatiques DSi. Pour les versions de systèmes DSi américaine utilisez [cette version de hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Enfin, si vous voulez changer de région sur le système actuel NAND, vous pouvez utiliser [le correcteur de langue DSi Max](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## Qu'est-il advenu de Lazy DSi Downloader ? Comment puis-je installer un CFW sans lui ?

Lazy DSi Downloader était un programme qui vous permettait essentiellement de sauter le processus d'installation manuelle en téléchargeant et en plaçant les fichiers et dossiers nécessaires sur votre carte SD. Toutefois, en raison de la manière dont il a été programmé et distribué, de nombreux utilisateurs ont rencontré divers problèmes et ont fini par devoir procéder à une installation manuelle, car cela était plus rapide et/ou plus facile que de réparer ce qui causait le problème.

Pour éviter que d'autres utilisateurs rencontrent ces problèmes, nous ne recommandons plus d'utiliser le Downloader Lazy DSi et à la place [faire la configuration manuelle](get-started.html) est la méthode recommandée.

- Si vous avez été redirigé vers ce guide par un tiers qui recommandait l'utilisation de Lazy DSi Downloader, les instructions que vous avez suivies étaient probablement obsolètes. Utilisez plutôt ce guide, qui est constamment mis à jour par les développeurs de ces projets.

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

## Comment passer à une nouvelle carte SD après avoir configuré un homebrew ?

Formatez votre nouvelle carte SD en utilisant les instructions [Configuration de la carte SD](sd-card-setup.html), puis déplacez simplement vos données de l'ancienne carte SD vers la nouvelle.

## Puis-je toujours utiliser mon système normalement sans la carte SD insérée après avoir configuré un homebrew ?

Oui. Si vous n'avez pas installé Unlaunch, votre système ne sera pas du tout modifié. Si vous avez installer Unlaunch, vous devrez peut-être [configurer Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) pour démarrer automatiquement le menu DSi original sous certaines conditions.

## La [page Unlaunch](https://problemkaputt.de/unlaunch.htm) dit que la version 2.0 n'est pas connue pour être sûre. Dois-je utiliser une version antérieure à la place ?

La page Unlaunch n'a pas été mise à jour depuis la sortie de la version 2.0 en 2019. La grande majorité des utilisateurs ne rencontrent aucun problème avec cette version, qui est donc considérée comme sûre.

## Comment puis-je exécuter un DSiWare dumpé ?

La méthode recommandée est de simplement les lancer avec TWiLight Menu++, en raison de la méthode simple de glisser-déposer et du fait qu'il n'y a pas de limite arbitraire. Lorsque nds-bootstrap est défini comme méthode de lancement, il bénéficie également des avantages des triches et des captures d'écran, ainsi que de tout autre avantage fourni par le menu du jeu.

Cependant, pour les quelques titres incompatibles, vous pouvez utiliser [NTM](https://github.com/Epicpkmn11/NTM/releases) pour les installer sur la mémoire interne ou [SDNAND de hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing). En plus de l'absence des avantages ci-dessus, il y a également une limite de 39 titres dont la taille ne peut pas dépasser 128 Mio/1 024 blocs. Pour SysNAND, il y a également un très faible risque de bricker le système lors de l'écriture sur la NAND interne.
