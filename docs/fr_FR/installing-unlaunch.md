# Installation d'Unlaunch

::: warning

Si vous n'avez pas accès à un PC, ou si votre PC fonctionne sous ChromeOS, n'installez pas Unlaunch. Un PC (fonctionnant sous Windows, Linux ou macOS) est nécessaire pour résoudre certains problèmes qui peuvent survenir après l'installation de Unlaunch.

:::

::: danger

If you have not yet done so, please follow [Dumping NAND](dumping-nand.html). Même si les chances sont minces, Unlaunch peut accidentellement bricker votre Nintendo DSi. A NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) would allow you to restore this backup, provided you know how to solder.

:::

::: warning

Assurez-vous que votre console est chargée lorsque vous suivez cette procédure. Une perte soudaine de batterie pourrait causer de graves dégâts.

:::

::: warning

Unlaunch n'est pas compatible avec les consoles de développement Nintendo DSi.

:::

## Section I - Configuration de la carte SD

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Mirror link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), if the above doesn't work
2. Extract `UNLAUNCH.DSI` from the `unlaunch.zip` archive and place it anywhere on your SD card
3. Vérifiez que vous avez toujours TWiLight Menu++ sur votre carte SD
   - If you are unsure, follow the instructions from the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## Section II - Installation/Mise à jour d'Unlaunch

1. Ouvrez TWiLight Menu++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the [exploit that you used](launching-the-exploit.html)
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the option labeled `TWiLight Menu++`
   - If several options are labeled `TWiLight Menu++`, select the option in where `BOOT.NDS` is shown at the end of the path on the bottom screen
     - This happens because you are running an older version of TWiLight Menu++, unless you're doing it on purpose, is suggested that you [update your installation](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
2. Lancez les paramètres de TWiLight Menu++
   - If you haven't changed your theme, press `SELECT` and touch the small DS icon on the bottom of the touch screen. Sinon, consultez le manuel de TWiLight Menu++
3. Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the `Unlaunch settings` page
4. If you want to change Unlaunch's background image, select `Background` and choose the one you want
   - If you want to create your own Unlaunch background, see the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
5. Quittez les paramètres de TWiLight Menu++
6. In the file navigation menu, launch `Unlaunch DSi Installer`
   - If you see two black screens after launching, download [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start `Unlaunch.dsi`\
     This method does not enable Unlaunch to use custom patches and background
7. Sélectionnez l'option « install now »
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting.html) page
8. Une fois terminé, redémarrez votre système

Si vous voyez l'écran du menu de fichiers d'Unlaunch, vous avez moddé votre Nintendo DSi avec succès.

- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

## Section III - Configuration post-Unlaunch

Actuellement, Unlaunch lance par défaut son menu Fichier au démarrage, mais cela peut être modifié pour lancer ce que vous voulez.

1. Allumez votre console en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
   - Cela devrait lancer le menu Fichier d'Unlaunch
   - If nothing is listed, or if only `TWiLight Menu++` isn't listed (even after scrolling down), then you'll need to [reformat the SD card](sd-card-setup.html)
2. Navigate to `OPTIONS`, and look at the available options
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> est codé en dur pour être lancé dans le menu de Unlaunch, et ne peut donc pas être modifié
   - The `NO BUTTON` and `BUTTON A / B / X / Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. Vous pouvez sélectionner n'importe quel DSiWare ou homebrew, la carte Slot-1, wifiboot, ou le menu Fichier d'Unlaunch
     - For TWiLight Menu++, select  `TWiLight Menu++`
     - For the original DSi Menu, select `Launcher`
   - `LOAD ERROR` is what your DSi will load if loading what you have set fails, such as the SD card not being inserted
3. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## Section IV - Nettoyage de votre carte SD

::: tip

Cette section est facultative et ne sert qu'à débarrasser votre carte SD des fichiers dont vous n'avez pas besoin.

:::

:::: tabs

:::tab default Memory Pit

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
- Rename `tip.bin` back to `pit.bin`, and leave it intact
- You can now restore the `DCIM` folder that was on the root of your SD card
- Delete the `UNLAUNCH.DSI` file from your SD card

:::

:::tab Flipnote Lenny

- Delete the `800031_104784BAB6B57_000.ppm` and `T00031_1038C2A757B77_000.ppm` files from inside the following folders:
  - `sd:/private/ds/app/4B47554A/001` (Japan)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
  - Vous pouvez également supprimer tous les dossiers des régions autres que la vôtre
- Delete the `UNLAUNCH.DSI` file from your SD card

:::
