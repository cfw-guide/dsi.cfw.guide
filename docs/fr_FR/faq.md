---
title: FAQ
---

## Dois-je faire une mise à jour du système ?
Il n'est **pas** recommandé de mettre à jour votre DSi à moins que vous ne sachiez qu'il y a des DSiWare achetés. Il est toujours possible de suivre ce guide si vous le faites, mais le seul avantage de la mise à jour est la possibilité d'accéder à la boutique Nintendo DSi pour retélécharger des titres déjà achetés. Tous les autres avantages, comme l'intégration de Facebook dans l'application Appareil photo Nintendo DSi, ne sont plus utilisables ou ne sont pas suffisamment importants pour justifier les inconvénients :

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
- Nécessite le lancement de l'appareil photo DSi chaque fois que vous voulez accéder à un homebrew
- Incompatible avec certains titres en mode DSi et homebrews car la WRAM n'est ouverte qu'au processeur ARM7
- L'accès au Slot-1 (la carte de jeu DS) est bloqué dans les homebrews
- L'accès au DSP est bloqué, ce qui entraîne une dégradation du son dans GBARunner2
- Les photos sur la carte SD ne peuvent pas être visualisées dans l'appareil photo DSi lorsque Memory Pit est installé, car c'est le déclencheur de l'exploit
     - La seule façon de visualiser les photos de la carte SD alors que Memory Pit est installé, est de lancer un dump de la ROM de l'application Appareil photo Nintendo DSi en utilisant **TW**i**L**ight Menu++ pour le lancer via nds-bootstrap (v0.61.3 ou plus)

### stylehax
Avantages :
- Meilleure compatibilité avec les titres en mode DSi et homebrews que Memory Pit
- Easy to use
- No risk of damaging the console
- Useable on consoles with broken camera
- Better sound in GBARunner2

Inconvénients :
- Requires internet access
- Requires loading the DSi Browser every time you want to access homebrew, slightly more time consuming than Memory Pit
- L'accès au Slot-1 (la carte de jeu DS) est bloqué dans les homebrews

### Flipnote Lenny
Avantages :
- Better compatibility with DSi mode titles and homebrew than Memory Pit
- No risk of damaging the console, uninstalling is as simple as removing the SD or deleting one folder
- Useable on consoles with broken camera
- Better sound in GBARunner2

Inconvénients :
- Requires loading Flipnote Studio every time you want to access homebrew, slightly more time consuming than Memory Pit
- Access to Slot-1 (the DS Game Card) is blocked in homebrew

### Unlaunch
Pros:
- Allows loading homebrew and DSiWare immediately on system boot, with optional button hotkeys
- Full access to the system without any restrictions, including:
   - Access to Slot-1 allowing dumping Game Cards and loading incompatible flashcards
   - Better sound in GBARunner2
- Removes region locks on DSi-Enhanced/Exclusive Game Cards
- Protection against most ways a DSi could brick
- DSi-Enhanced games can be run in DSi mode without a Donor ROM
- Old homebrew can be run via nds-bootstrap-hb

Cons:
- Very minor risk of **bricking** the console when installing
- Another, slightly higher, risk of bricking if you decide to [uninstall it](uninstalling-unlaunch.html)
- Not compatible with development consoles

## Est-ce que je perdrai des fonctionnalités en moddant mon système ?
If you install Unlaunch or use Flipnote Lenny, no functionality will be lost. If you use Memory Pit, you will be unable to view photos on the SD card using the DSi Camera, unless you launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap.
- To regain the ability to view your SD card photos when launching the DSi Camera from the DSi Menu, install Unlaunch or switch to a different exploit, then delete Memory Pit's `pit.bin` file
  - If `tip.bin` exists in the same folder, rename it back to `pit.bin`

## Comment puis-je jouer aux dumps de cartes de jeu Nintendo DS ?
Playing Game Card dumps on the console requires the use of a flashcard or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting Slot-1 reads and writes to it.
- With TWiLight Menu++ you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using TWiLight Menu++ are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. In other words, you can drop your ROM files directly and play without any setup. There is no 39 title limit, neither hiyaCFW or Unlaunch are required and there are no restrictions on SD card free space you can have
- hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) guide on the DS-Homebrew Wiki, but it has some limitations. There is a hard limit of 39 titles, and they are less convenient to make than using TWiLight Menu++
   - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## Comment puis-je mettre à jour mes homebrews ?
- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](installing-unlaunch.html) page
   - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card from the [updated release](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
   - If you use TWiLight Menu++, there is a high chance that the latest nds-bootstrap release is included with TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

Other homebrew might use other methods to update.

## Je suis nouveau ou je voudrais refaire mon installation. Par où dois-je commencer ?
- If you have not already modified your console or are looking to update Unlaunch on your system, we recommend starting from the beginning of the guide and following through the pages. Be sure to read everything on the homepage
- If you have the latest version Unlaunch, follow the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) to set up TWiLight Menu++ on your system

## Comment puis-je supprimer le contrôle parental ?
- The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls

## Puis-je changer la région de ma Nintendo DSi ?
Yes, there are a few different methods depending on what you want to change:
- The safest and simplest method is to simply install TWiLight Menu++, it can use any official language and more without needing NAND modifications
- If you want to actually change the system region and are using hiyaCFW, you can use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) for Asian DSi systems. For American DSi systems use [this version of hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## Qu'est-il arrivé au guide d'installation de hiyaCFW ?
Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).
- If you were linked to the page in question from another guide, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects

## Quel type de carte SD dois-je utiliser ?
- You should buy an SD card from a trusted brand
- A full-size SD card or a microSD card with an adapter will both work
- Any capacity between 1 GB and 2 TB will work. For general usage, 8 GB is enough
  - Some software, such as hiyaCFW, may experience incrementally longer loading times with larger SD card capacities
- Speed class 8 or higher is recommended

## Puis-je utiliser ma carte SD DSi sur d'autres systèmes ?
Generally, yes, with two exceptions:
- hiyaCFW will only work on the system it was set up for
- Even if you are using nds-bootstrap or a flashcard, friend codes in online NDS games will be reset when attempting to go online using a different console

## Comment passer à une nouvelle carte SD après avoir configuré un homebrew ?
Format your new SD card using the [SD Card Setup](sd-card-setup.html) instructions, then simply move your data from the old SD card to the new one.

## Puis-je toujours utiliser mon système normalement sans la carte SD insérée après avoir configuré un homebrew ?
Yes. If you did not install Unlaunch, your system will remain completely unmodified. If you *did* install Unlaunch, you may need to [configure Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) to automatically boot the original DSi Menu under specified conditions.

## La page d'[Unlaunch](https://problemkaputt.de/unlaunch.htm) dit que la version 2.0 n'est pas connue pour être sûre. Dois-je utiliser une version antérieure à la place ?
The Unlaunch page has not been updated since version 2.0 was released, which was over two years ago. The vast majority of users experience no issues with this version, so it is considered safe.


## How do I run dumped DSiWare?
The recommended method is to simply launch them with TWiLight Menu++, due to the simple drag-and-drop method and there being no arbitrary limit. When nds-bootstrap is set as the launch method, it also gains the benefits of cheats and screenshots, as well as any other benefit provided by the in-game menu.

However, for the few titles that are incompatible, you can use [NTM](https://github.com/Epicpkmn11/NTM/releases) to install them on either internal memory or [hiyaCFW's SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing). In addition to lacking the benefits above, there is also a limit of 39 titles that cannot exceed 128 MiB/1,024 blocks in size. For SysNAND, there is also a very small risk of bricking the system when writing to the internal NAND.
