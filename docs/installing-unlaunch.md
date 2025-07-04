# Installing Unlaunch

::: warning

If you do not have access to a PC, or if your PC is running ChromeOS, then please do not install Unlaunch. A PC (running Windows, Linux, or macOS) is required in order to fix some issues that may occur after installing Unlaunch.

:::

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

## Section II - Installing/Updating Unlaunch

### With Custom Patches and Background

::: warning

If you are not using **TW**i**L**ight Menu++, then follow the `No Custom Patches and Background` method below.

:::

The DSi Menu music will play from both the system itself and hiyaCFW (if installed).     
Using a custom background is also possible.

1. Open **TW**i**L**ight Menu++
    - If this is your first time installing Unlaunch, relaunch the menu through the [exploit that you used](launching-the-exploit.html)
    - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the `TWiLight Menu++` option in where `BOOT.NDS` is shown at the end of the path on the bottom screen
1. Launch **TW**i**L**ight Menu++ Settings
    - If you haven't changed the UI, press `SELECT` and touch the small DS icon on the bottom of the touch screen. Otherwise, see the TWiLight Menu++ Manual
1. Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the `Unlaunch settings` page
1. If you want to change Unlaunch's background image, select `Background` and choose the one you want
    - If you want to create your own Unlaunch background, see the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Exit TWiLight Menu++ Settings
1. In the menu where the icons are listed, launch `Unlaunch DSi Installer` (listed as `UNLAUNCH.DSI` depending on which menu is used and/or how it's displayed)
1. Select the `Install now` option
    - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting.html) page
1. When completed, reboot your system

If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.
- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

### No Custom Patches and Background

The DSi Menu music will not play after you've installed Unlaunch. If you're using hiyaCFW or plan to, the music will still play there.     
Also, using a custom background is not possible.

1. Open the menu you have installed (**TW**i**L**ight Menu++ or akmenu-next)
    - If this is your first time installing Unlaunch, relaunch the menu through the [exploit that you used](launching-the-exploit.html)
	- If you have not installed either of those menus, and you are looking to install hiyaCFW, start the [exploit that you used](launching-the-exploit.html) in order to start GodMode9**i**, then open the SD card (listed as `sd:`)
    - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the option in where `BOOT.NDS` is shown at the end of the path on the bottom screen
1. If you are using **TW**i**L**ight Menu++, then launch it's settings menu
    - If you haven't changed the UI, press `SELECT` and touch the small DS icon on the bottom of the touch screen. Otherwise, see the **TW**i**L**ight Menu++ Manual
	1. Press `L`/`R` to switch to the Unlaunch settings page
	1. Turn off the `Unlaunch Patches` setting
1. In the menu where the icons are listed, launch `Unlaunch DSi Installer` (listed as `UNLAUNCH.DSI` depending on which menu is used and/or how it's displayed)
    - If using GodMode9**i**, select `Boot file (Direct)`
1. Select the `Install now` option
    - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting.html) page
1. When completed, reboot your system

If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.
- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

## Section III - Post-Unlaunch configuration

Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed launch whatever you want.

1. Power on your console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd>
    - This should launch the Unlaunch Filemenu
    - If nothing is listed, or if only the NAND contents are listed (even after scrolling down), then you'll need to [reformat the SD card](sd-card-setup.html)
1. Navigate to `OPTIONS`, and look at the available options
    - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> is hardcoded to launch into Unlaunch's menu, and as such cannot be changed
    - The `NO BUTTON` and `BUTTON A / B / X / Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. You can select any DSiWare, homebrew (including whichever menu you installed), the Slot-1 card, wifiboot, or Unlaunch's Filemenu
      - For the original DSi Menu, select `Launcher`
    - `LOAD ERROR` is what your DSi will load if loading what you have set fails, such as the SD card not being inserted
1. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## Section IV - Cleaning up your SD card

::: tip

This section is optional and only serves for keeping your SD card tidy of files you won't need.

:::

:::: tabs

::: tab default Memory Pit

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
- Rename `tip.bin` back to `pit.bin`, and leave it intact
- You can now restore the `DCIM` folder that was on the root of your SD card
- Delete the `UNLAUNCH.DSI` file from your SD card

:::

::: tab Flipnote Lenny

- Delete the `800031_104784BAB6B57_000.ppm` and `T00031_1038C2A757B77_000.ppm` files from inside the following folders:
    - `sd:/private/ds/app/4B47554A/001` (Japan)
    - `sd:/private/ds/app/4B475545/001` (USA)
    - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
    - You can also delete the entire folders for the regions besides your own
- Delete the `UNLAUNCH.DSI` file from your SD card

:::
