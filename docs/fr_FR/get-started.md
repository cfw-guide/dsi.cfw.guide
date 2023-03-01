---
title: "Pour commencer"
---

The main homebrew application this guide has you install is **TW**i**L**ight Menu++, which is an upgrade/replacement to the Nintendo DSi Menu that allows running other homebrew applications, retail DS games, emulators for various older systems, and more.

Nous commencerons par le télécharger ainsi que d'autres outils homebrew, en préparation des étapes de l'exploit.

## Prérequis

- Un moyen de copier les fichiers téléchargés sur votre carte SD
- Une application capable d'extraire des archives, telle que [7-Zip](https://www.7-zip.org/) (Windows) ou [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS)
   - Nous vous conseillons de ne pas utiliser WinRAR, car il est connu pour casser les choses

## Section I - Travail préparatoire

::: warning

Ensure your SD card is [formatted correctly](sd-card-setup.html).

:::

1. Insérez votre carte SD dans votre PC
1. Téléchargez la dernière version de [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
1. Téléchargez la dernière version de [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Copiez le dossier `_nds` de `TWiLightMenu-DSi.7z` à la racine de votre carte SD
1. Copiez le fichier `BOOT.NDS` de `TWiLightMenu-DSi.7z` à la racine de votre carte SD
1. Copiez le fichier `dumpTool.nds` à la racine de votre carte SD

::: tip

Unsure what the SD "root" is? [See this image](https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png)

:::


## Section II - Sélection d'un exploit

From here you have three options, with a minor difference in what each entails.


### Installation d'Unlaunch via Memory Pit

Memory Pit is an exploit utilizing the DSi Camera, compatible with all firmware versions. Optionally, this exploit can be used to install Unlaunch, a bootcode exploit that allows full control of the console on boot.

As Memory Pit is somewhat limited in homebrew compatibility, it is recommended to install Unlaunch, instead of using Memory Pit standalone. As this is the easiest method to install Unlaunch, this is the recommended path. However, there is a very minor risk of **bricking** your console when installing Unlaunch, so if this is a concern, see the alternate method below.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::


### stylehax

stylehax is an exploit utilizing the DSi Browser application, and can be used as an alternative to Memory Pit for installing Unlaunch (explained above) if your DSi has a broken camera.

For an Unlaunch-free experience, this exploit is recommended as using Memory Pit causes issues in some games and homebrew.

::: tip

Continue to [Launching the Exploit (stylehax)](launching-the-browser-exploit.html)

:::


### Flipnote Lenny

Flipnote Lenny is an exploit utilizing the Flipnote Studio application.

If you have Flipnote Studio and do not plan on installing Unlaunch (explained above), this exploit is recommended for the same reason as stylehax.

You can always install Unlaunch later if you decide later on that you want it.

::: tip

Continue to [Launching the Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

For a more detailed pros and cons comparision of the available exploits, please see the [Which is the best exploit?](faq.html#which-is-the-best-exploit) FAQ.
