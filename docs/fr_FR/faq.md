# FAQ

### Quelles fonctionnalités vais-je perdre en moddant mon système ?
- Si vous décidez d'installer Unlaunch, vous ne perdrez aucune fonctionnalité du système
- Si vous optez pour une configuration réservée à Memory Pit, vous ne pourrez pas enregistrer de photos sur la carte SD via l'application Appareil photo Nintendo DSi pendant l'installation de l'exploit. Il vous faut donc soit passer à un [exploit alternatif](alternate-exploits), soit [installer Unlaunch](/installing-unlaunch)

   C'est parce que le fichier de métadonnées (`pit.bin`) est écrasé par l'exploit Memory Pit.

### Comment jouer aux jeux des cartouches Nintendo DS extraites ?
L'utilisation d'un linker ou de nds-bootstrap, un programme qui permet de jouer à partir de la carte SD interne en redirigeant les lectures et les écritures du Slot-1 vers celle-ci, est nécessaire pour jouer aux jeux des cartouches Nintendo DS extraites.
- Avec TWiLight Menu++, vous pouvez naviguer sur votre carte SD pour trouver des fichiers ROM et y jouer avec nds-bootstrap. TWiLight Menu++ permet d'avoir un menu de triche, des paramètres par jeu et d'éviter les restrictions que les transitaires imposent. En d'autres termes, vous pouvez déposer vos fichiers ROM directement et jouer sans aucune installation. Il n'y a pas de limite de titre 39, ni hiyaCFW ni Unlaunch sont requis et il n'y a aucune restriction sur l'espace libre de la carte SD que vous pouvez avoir
- Les utilisateurs de hiyaCFW peuvent créer des [redirections](nds-bootstrap-forwarders) pour le menu DSi de SDNAND, mais il a quelques limitations. Il y a en effet une limite dure de 39 titres, elles sont donc moins pratiques à faire et elles ne corrigent pas automatiquement l'anti-piratage

### Comment puis-je mettre à jour mon homebrew?
- **Unlaunch** — Suivez les instructions sur la page [Installation de Unlaunch](/installing-unlaunch)
- **hiyaCFW** — Remplacez `hiya.dsi` à la racine de la carte SD de la [version mise à jour](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** — Suivez les instructions sur le [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** — Copiez `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` dans le dossier `_nds` à la racine de votre carte SD
   - Si vous utilisez TWiLight Menu++, il y a beaucoup de chance que le dernier nds-bootstrap soit inclus avec celui-ci
- **GodMode9i, dumpTool, MakeForwarder, etc** — Suivez les instructions utilisées pour les télécharger

D'autres homebrews pourraient utiliser d'autres méthodes de mise à jour.

### Je suis nouveau ou je voudrais refaire mon installation. Par où commencer ?
- Si vous n'avez pas déjà modifié votre console ou que vous cherchez à mettre à jour Unlaunch sur votre système, nous vous recommandons de commencer à partir du début du guide et de suivre à travers les pages. N'oubliez pas de lire toute la page d'accueil
- Si vous avez la dernière version de Unlaunch, suivez la Section 1b de [Lancement de l'exploit](launching-the-exploit.html#twilight-menu) pour configurer TWiLight Menu++ sur votre système

### Comment puis-je supprimer le contrôle parental ?
- Le [générateur mkey](https://mkey.salthax.org) peut générer le code requis pour supprimer le contrôle parental.

### Puis-je changer la région de ma Nintendo DSI ?
Oui, il y a quelques méthodes différentes selon ce que vous souhaitez changer :
- La méthode la plus sûre et la plus simple est d'installer TWiLight Menu++, il peut utiliser n'importe quelle langue officielle et plus encore sans avoir besoin de modifications de la NAND
- Si vous voulez réellement changer la région du système et que vous utilisez hiyaCFW, vous pouvez utiliser le [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) de Yoti
- Enfin, si vous voulez changer de région sur la NAND du système actuel, vous pouvez utiliser [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/) de Mighty Max.
