---
title: Installing Unlaunch
---

Unlaunch is an exploit that takes place on system boot. This allows it to have higher privileges than normal DSiWare exploits such as Memory Pit, which makes it able to do the following:

- Launching applications at boot (homebrew or DSiWare), with optional button combinations
- Access to Slot-1, allowing you to dump Game Cards and launch incompatible flashcards
- Region locks removed on DSi-Enhanced / Exclusive Game Cards
- Run old Nintendo DS homebrew via nds-bootstrap-hb
- Brick-protection
- The following for Memory Pit users (other exploits already allow these):
     - Improved compatibility with DSiWare launched from the SD card
     - Better sound in GBARunner2

::: danger

If you have not yet done so, please follow [Dumping NAND](dumping-nand). While the chances are slim, Unlaunch can accidentally brick your Nintendo DSi. A NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) would allow you to restore this backup, provided you know how to solder.

:::

::: warning

Make sure your console is charged when following this process. A sudden power loss could result in serious damage.

:::

## Section I - SD card setup

::: tip

Using a Windows, Linux or macOS device? Use [Lazy DSi Downloader](lazy-dsi-downloader) to automatically setup your SD card.

:::

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Mirror link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), if the above doesn't work
1. Extract `UNLAUNCH.DSI` from the `unlaunch.zip` archive and place it anywhere on your SD card
1. Verify you still have TWiLight Menu++ on your SD card
   - If you are unsure, follow the instructions from the [Launching the Exploit](launching-the-exploit.html#twilight-menu) page

## Section II - Installing/Updating Unlaunch

1. Open TWiLight Menu++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the exploit that you used
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the `TWiLight Menu++` where `BOOT.NDS` is shown on the bottom screen
1. Launch TWiLight Menu++ Settings
   - If you haven't changed your theme, follow the steps in the "Launching the Exploit" page. Otherwise, consult the TWiLight Menu++ Manual
1. Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the `Unlaunch settings` page
1. If you want to change Unlaunch's background image, select `Background` and choose the one you want
   - If you want to create your own Unlaunch background, consult the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. If you want the Health and Safety screen and DSi Menu music and sounds, then set `Launcher Patches` to `Off`
   - This will also keep the region locking and card whitelist, meaning that some flashcards won't be usable from the DSi Menu
1. Exit TWiLight Menu++ Settings
1. In the file navigation menu, launch `Unlaunch DSi Installer`
1. Select the install option
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting) page
1. When completed, reboot your system

If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.
- If you see a black screen, please take a look at our [Troubleshooting](troubleshooting) page

## Section III - Post-Unlaunch configuration

Currently, Unlaunch defaults to launching its file menu on boot, but this can be changed launch whatever you want.

We will also reconfigure nds-bootstrap to launch into TWiLight Menu++ (instead of the exploited DSiWare title) when we soft-reset in-game.

1. Power on your console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd>
   - This should launch the Unlaunch Filemenu
1. Navigate to `OPTIONS`, and look at the available options
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> is hardcoded to launch into Unlaunch's menu, and as such cannot be changed
   - The `NO BUTTON` and `BUTTON A / B / X / Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. You can select any DSiWare, homebrew, the Slot-1 card, wifiboot, or Unlaunch's file menu
      - For TWiLight Menu++, select the `TWiLight Menu++` option where `BOOT.NDS` is shown on the bottom screen
      - For the original DSi Menu, select `Launcher`
   - `LOAD ERROR` is what your DSi will load if loading what you have set fails, such as the SD card not being inserted
1. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## Section IV - Cleaning up your SD card

::: tip

This section is optional and only serves for keeping your SD card tidy of files you won't need.

:::

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
   - If you used another exploit, delete the files from that exploit instead
- Delete the `UNLAUNCH.DSI` file from your SD card
