---
title: Installing Unlaunch
---

::: danger

If you have not yet done so, please follow [Dumping NAND](dumping-nand.html). While the chances are slim, Unlaunch can accidentally brick your Nintendo DSi. A NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) would allow you to restore this backup, provided you know how to solder.

:::

::: warning

Make sure your console is charged when following this process. A sudden power loss could result in serious damage.

:::

::: warning

Unlaunch is not compatible with Nintendo DSi development consoles.

:::

## Section I - SD card setup

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Mirror link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), if the above doesn't work
1. Extract `UNLAUNCH.DSI` from the `unlaunch.zip` archive and place it anywhere on your SD card
1. Verify you still have TWiLight Menu++ on your SD card
   - If you are unsure, follow the instructions from the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## Section II - Installing/Updating Unlaunch

1. Open TWiLight Menu++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the [exploit that you used](launching-the-exploit.html)
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the option labeled `TWiLight Menu++`
   - If several options are labeled `TWiLight Menu++`, select the option in where `BOOT.NDS` is shown at the end of the path on the bottom screen
      - This happens because you are running an older version of TWiLight Menu++, unless you're doing it on purpose, is suggested that you [update your installation](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
1. Launch TWiLight Menu++ Settings
   - If you haven't changed your theme, press `SELECT` and touch the small DS icon on the bottom of the touch screen. Otherwise, see the TWiLight Menu++ Manual
1. Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the `Unlaunch settings` page
1. If you want to change Unlaunch's background image, select `Background` and choose the one you want
   - If you want to create your own Unlaunch background, see the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Exit TWiLight Menu++ Settings
1. In the file navigation menu, launch `Unlaunch DSi Installer`
   - If you see two black screens after launching, download [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start `Unlaunch.dsi`    
   This method does not enable Unlaunch to use custom patches and background
1. Select the "install now" option
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting.html) page
1. When completed, reboot your system

If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.
- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

## Section III - Post-Unlaunch configuration

Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed launch whatever you want.

1. Power on your console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd>
   - This should launch the Unlaunch Filemenu
   - If only the background is shown, or if no files from the SD card are shown (ex. `TWiLight Menu++`), then you'll need to [reformat the SD card](sd-card-setup.html)
1. Navigate to `OPTIONS`, and look at the available options
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> is hardcoded to launch into Unlaunch's menu, and as such cannot be changed
   - The `NO BUTTON` and `BUTTON A / B / X / Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. You can select any DSiWare, homebrew, the Slot-1 card, wifiboot, or Unlaunch's Filemenu
      - For TWiLight Menu++, select  `TWiLight Menu++`
      - For the original DSi Menu, select `Launcher`
   - `LOAD ERROR` is what your DSi will load if loading what you have set fails, such as the SD card not being inserted
1. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## Section IV - Cleaning up your SD card

::: tip

This section is optional and only serves for keeping your SD card tidy of files you won't need.

:::

:::: tabs

::: tab name="Memory Pit" default

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
- Rename `tip.bin` back to `pit.bin`, and leave it intact
- You can now restore the `DCIM` folder that was on the root of your SD card
- Delete the `UNLAUNCH.DSI` file from your SD card

:::

::: tab name="Flipnote Lenny"

- Delete the `800031_104784BAB6B57_000.ppm` and `T00031_1038C2A757B77_000.ppm` files from inside the following folders:
   - `sd:/private/ds/app/4B47554A/001` (Japan)
   - `sd:/private/ds/app/4B475545/001` (USA)
   - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
   - You can also delete the entire folders for the regions besides your own
- Delete the `UNLAUNCH.DSI` file from your SD card

:::
