---
title: FAQ
---

## Quelles fonctionnalités vais-je perdre en moddant mon système ?
- Si vous décidez d'installer Unlaunch, vous ne perdrez aucune fonctionnalité du système
- If you go with a Memory Pit-only setup, you will be unable to save photos to the SD card via the Nintendo DSi Camera application while the exploit is installed. Either follow [Alternate Exploits](alternate-exploits) instead, or follow [Installing Unlaunch](installing-unlaunch)
   - This is because the metadata file (`pit.bin`) is overwritten with the Memory Pit exploit

## How do I play Nintendo DS Game Card dumps?
Playing Game Card dumps on the console requires the use of a flashcard or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting Slot-1 reads and writes to it.
- Avec TWiLight Menu++, vous pouvez naviguer sur votre carte SD pour trouver des fichiers ROM et y jouer avec nds-bootstrap. TWiLight Menu++ permet d'avoir un menu de triche, des paramètres par jeu et d'éviter les restrictions que les transitaires imposent. En d'autres termes, vous pouvez déposer vos fichiers ROM directement et jouer sans aucune installation. Il n'y a pas de limite de titre 39, ni hiyaCFW ni Unlaunch sont requis et il n'y a aucune restriction sur l'espace libre de la carte SD que vous pouvez avoir
- hiyaCFW users can create forwarders using the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) for the SDNAND's DSi Menu, but it has some limitations. There is a hard limit of 39 titles, and they are less convenient to make than using TWiLight Menu++
   - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## Comment puis-je mettre à jour mon homebrew?
- **Unlaunch** — Suivez les instructions sur la page [Installation de Unlaunch](installing-unlaunch)
   - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** — Remplacez `hiya.dsi` à la racine de la carte SD de la [version mise à jour](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** — Suivez les instructions sur le [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** — Copiez `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` dans le dossier `_nds` à la racine de votre carte SD
   - Si vous utilisez TWiLight Menu++, il y a beaucoup de chance que le dernier nds-bootstrap soit inclus avec celui-ci
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

D'autres homebrews pourraient utiliser d'autres méthodes de mise à jour.

## Je suis nouveau ou je voudrais refaire mon installation. Par où commencer ?
- Si vous n'avez pas déjà modifié votre console ou que vous cherchez à mettre à jour Unlaunch sur votre système, nous vous recommandons de commencer à partir du début du guide et de suivre à travers les pages. N'oubliez pas de lire toute la page d'accueil
- Si vous avez la dernière version de Unlaunch, suivez la Section 1b de [Lancement de l'exploit](launching-the-exploit#twilight-menu) pour configurer TWiLight Menu++ sur votre système

## Comment puis-je supprimer le contrôle parental ?
- Le [générateur mkey](https://mkey.salthax.org) peut générer le code requis pour supprimer le contrôle parental.

## Puis-je changer la région de ma Nintendo DSI ?
Oui, il y a quelques méthodes différentes selon ce que vous souhaitez changer :
- La méthode la plus sûre et la plus simple est d'installer TWiLight Menu++, il peut utiliser n'importe quelle langue officielle et plus encore sans avoir besoin de modifications de la NAND
- Si vous voulez réellement changer la région du système et que vous utilisez hiyaCFW, vous pouvez utiliser le [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) de Yoti
- Enfin, si vous voulez changer de région sur la NAND du système actuel, vous pouvez utiliser [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/) de Mighty Max.

## What happened to the hiyaCFW installation guide?
Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).
- If you were linked to the page in question from another guide, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects

## What kind of SD card should I use?
- You should buy an SD card from a trusted brand
- A full-size SD card or a microSD card with an adapter will both work
- Any capacity between 1 GB and 2 TB will work. For general usage, 8 GB is enough
  - Some software, such as hiyaCFW, may experience incrementally longer loading times with larger SD card capacities
- Speed class 8 or higher is recommended

## Can I use my DSi SD card on other systems?
Generally, yes, with two exceptions:
- hiyaCFW will only work on the system it was set up for
- Even if you are using nds-bootstrap or a flashcard, friend codes in online NDS games will be reset when attempting to go online using a different console

## The [Unlaunch page](https://problemkaputt.de/unlaunch.htm) says that version 2.0 is not known to be safe. Should I use a previous version instead?
The Unlaunch page has not been updated since version 2.0 was released, which was over two years ago. The vast majority of users experience no issues with this version, so it is considered safe.
