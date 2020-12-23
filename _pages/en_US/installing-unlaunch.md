---
title: "Installing Unlaunch"
redirect_from:
  - /guide/installing-unlaunch
  - /unlaunch
---

{% include toc title="Navigation" %}

Unlaunch is an exploit that takes place on system boot. This allows it to have higher privileges than normal Memory Pit, which makes it able to do the following:

- Launching applications at boot (homebrew or DSiWare), with optional button combinations
- Access to Slot-1, allowing you to dump cartridges and launch incompatible flashcarts
- Region locks removed on DSi enhanced / exclusive games
- Run old Nintendo DS Homebrew via nds-bootstrap-hb
- Launching DSiWare from the internal SD card
- Better sound in GBARunner2
- Brick-Protection

If you have not yet done so, please made a [NAND backup](dumping-nand). While the chances are slim, Unlaunch can accidentally brick your Nintendo DSi. A NAND backup + [hardmod](https://web.archive.org/web/20151102221503/https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/) would allow you to restore this backup, provided you know how to solder.
{: .notice--danger}

Make sure your console is charged when following this process. A sudden power loss could result in serious damage.
{: .notice--warning}

## Section I - SD card preparations

Using a Windows, Linux or macOS device? Use [Lazy DSi Downloader](lazy-dsi-downloader) to automatically setup your SD card.
{: .notice--info}

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
1. Extract `UNLAUNCH.DSI` from the `unlaunch.zip` archive and place it anywhere on your SD card
1. Verify you still have TWiLight Menu++ on your SD card
   - If you are unsure, follow the instructions from the [Launching the Exploit](launching-the-exploit#twilight-menu) page.

## Section II - Installing/Updating Unlaunch

1. Open TWiLight Menu++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the exploit that you used.
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the `TWiLight Menu++` where `BOOT.NDS` is shown on the bottom screen
1. Launch TWiLight Menu++'s Settings
   - If you haven't changed your theme, follow the steps in the "Launching the Exploit" page. Otherwise, consult the TWiLight Menu++ Manual
1. Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> until you reach the Unlaunch Settings page
1. If you want to change Unlaunch's background image, click on `Background` and choose the one you want
1. If you want the Health and Safety screen and DSi Menu music, then set `Launcher Patches` to `Off`
   - This will also prevent region locking from being removed
1. Exit the TWiLight Menu++ Settings
1. In the file navigation menu, launch `Unlaunch DSi Installer`
1. Select the install option
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting) page
1. When completed, reboot your system

If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.
- If you see a black screen, please take a look at our [Troubleshooting](troubleshooting) page

## Section II - Post-Unlaunch Configuration

Currently Unlaunch defaults to launching its file menu on boot, but this can be changed launch whatever you want.

We will also reconfigure nds-bootstrap to launch into TWiLight Menu++ (instead of the exploited DSiWare title) when we soft-reset in-game.

1. Power on your console while holding <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
1. Navigate to `OPTIONS`, and look at the available options
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> is hardcoded to launch into Unlaunch's menu, and as such cannot be changed
   - The `NO BUTTON` and `BUTTON A/B/X/Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. You can select any DSiWare, Homebrew, the Slot-1 card, or Unlaunch's file menu
      - For TWiLight Menu++, select the `TWiLight Menu++` option where `BOOT.NDS` is shown on the bottom screen
      - For the original DSi Menu, select `Launcher`
   - `LOAD ERROR` is what your DSi will load if loading what you have set fails, such as the SD card not being inserted
1. Save your settings and head back to Unlaunch's menu
1. Hover over the `TWiLight Menu++` options and find the one that has a path containing `settings.srldr` on the bottom screen
1. Launch the highlighted option
1. Use the <kbd class="l">L</kbd> and <kbd class="r">R</kbd> buttons to switch over to the "Misc. Settings" page
1. Set the "DSiWare Exploit" entry to "None"

## Section III - Cleaning up your SD card

This section is optional and only serves for keeping your SD card tidy of files you won't need.
{: .notice--primary}

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
   - If you used another exploit, delete the files from that exploit instead
- Delete the `UNLAUNCH.DSI` file from your SD card

Continue to [Installing HiyaCFW](installing-hiyacfw) (optional)
{: .notice--info}
