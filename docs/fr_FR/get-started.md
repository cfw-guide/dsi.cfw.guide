# Pour commencer

The main homebrew application this guide has you install is **TW**i**L**ight Menu++, which is an upgrade/replacement to the Nintendo DSi Menu that allows running other homebrew applications, retail DS games, emulators for various older systems, and more.

Nous commencerons par le télécharger ainsi que d'autres outils homebrew, en préparation des étapes de l'exploit.

## Prérequis

- Un moyen de copier les fichiers téléchargés sur votre carte SD
- An application that can extract archives, such as [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), or [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
  - Nous vous conseillons de ne pas utiliser WinRAR, car il est connu pour casser les choses
  - If you're using Windows 11, we also advise you to not use it's built-in extractor (Windows Explorer), as it'll cause an error saying that the filename is too long or not valid

## Section I - Travail préparatoire

::: warning

Ensure your SD card is [formatted correctly](sd-card-setup.html).

:::

1. Insérez votre carte SD dans votre PC
2. Download the latest release of [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
   - If it does not download, open the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest), and download `TWiLightMenu-DSi.7z`
3. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
4. Open `TWiLightMenu-DSi.7z`
   - If you're using Windows, ensure 7-Zip is installed, then follow these steps:
     1. Right-click on `TWiLightMenu-DSi.7z`
     2. If using Windows 11, click `Show more options`
     3. Hover over `7-zip`
     4. Click `Open archive`
5. Copy the `_nds` folder from `TWiLightMenu-DSi.7z` to the root of your SD card
6. Copy the `BOOT.NDS` file from `TWiLightMenu-DSi.7z` to the root of your SD card
7. Close `TWiLightMenu-DSi.7z`
8. Copy the `dumpTool.nds` file to the root of your SD card

::: tip

Vous ne savez pas ce qu'est la « racine » de la carte SD ? [See this image](/assets/images/sdroot/en_US.png)

:::

## Section II - Sélection d'un exploit

À partir de là, trois options s'offrent à vous, avec une différence mineure dans ce que chacune implique.

### Installation d'Unlaunch via Memory Pit

Memory Pit est un exploit utilisant l'appareil photo DSi, compatible avec toutes les versions du firmware. Facultativement, cet exploit peut être utilisé pour installer Unlaunch, un exploit bootcode qui permet le contrôle total de la console au démarrage.

Comme Memory Pit est quelque peu limité dans sa compatibilité avec les homebrews, il est recommandé d'installer Unlaunch, au lieu d'utiliser Memory Pit de manière autonome. Comme c'est la méthode la plus facile pour installer Unlaunch, c'est le chemin recommandé. However, there is a very minor risk of **bricking** your console when installing Unlaunch, so if this is a concern, see the alternate method below.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::

### stylehax

stylehax est un exploit utilisant l'application Nintendo DSi Browser, et peut être utilisé comme une alternative à Memory Pit pour installer Unlaunch (expliqué ci-dessus) si votre DSi a un appareil photo cassé.

Pour une expérience sans Unlaunch, cet exploit est recommandé car l'utilisation de Memory Pit cause des problèmes dans certains jeux et homebrews.

::: tip

Continue to [Launching the Exploit (stylehax)](launching-the-browser-exploit.html)

:::

### Flipnote Lenny

Flipnote Lenny est un exploit utilisant l'application Flipnote Studio.

Si vous possédez Flipnote Studio et que vous ne prévoyez pas d'installer Unlaunch (expliqué ci-dessus), cet exploit est recommandé car l'utilisation de Memory Pit cause des problèmes dans certains jeux et homebrews.

Vous pouvez toujours installer Unlaunch plus tard si vous décidez plus tard que vous le voulez.

::: tip

Continue to [Launching the Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

For a more detailed pros and cons comparision of the available exploits, please see the [Which is the best exploit?](faq.html#which-is-the-best-exploit) FAQ.
