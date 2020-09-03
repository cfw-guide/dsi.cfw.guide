---
title: "Installing Unlaunch"
redirect_from:
  - /guide/installing-unlaunch
  - /unlaunch
---

{% include toc title="Navigation" %}

Unlaunch is an exploit that allows homebrew applications to take full advantage of the Nintendo DSi hardware at boot. Examples include dumping a Slot-1 device and launching into hiyaCFW, amongst others.

{% capture usageInstructions %}
WARNING: While low, there is a chance of **bricking your console** when installing Unlaunch. If you are worried whether you'd brick, these are all the benefits your console will gain by installing Unlaunch:

- Higher compatibility with running old Nintendo DS homebrew via nds-bootstrap-hb (including the SNES emulator in TWiLight Menu++)
- Better sound in GBARunner2
- Launching incompatible flashcarts
- Removing region locks on DSi enhanced / exclusive games
- Accessing Slot-1 data
- Launching DSiWare from SD
- Launching titles at boot (such as TWiLight Menu++ or other DSiWare)
- Protection from bricking

{% endcapture %}

<div class="notice--primary">{{ usageInstructions | markdownify }}</div>

If you have not yet done so, please made a [NAND backup](dumping-nand). Unlaunch modifies the NAND which could result in a brick if done improperly.
{: .notice--danger}

Make sure your console is charged when following this process. A sudden power loss could result in serious damage.
{: .notice--warning}

## Section I - SD card preparations

Using a Windows, Linux or macOS device? We have a tool that will automatically set up your SD card for following the guide.
{: .notice--info}

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
1. Extract `UNLAUNCH.DSI` from the `unlaunch.zip` archive and place it anywhere on your SD card
1. Verify you still have TWiLight Menu++ on your SD card
   - If you are unsure, follow the instructions from the [Launching the Exploit](launching-the-exploit#twilight-menu) page.

## Section II - Installing/Updating Unlaunch

1. Open TWiLight Menu++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the exploit that you used.
   - If you have already installed Unlaunch and are looking to update it, hold <kbd>A</kbd> + <kbd>B</kbd> while booting and select the `TWiLight Menu++` where `BOOT.NDS` is shown on the bottom screen
1. Launch TWiLight Menu++'s Settings
   - If you haven't changed your theme, follow the steps in the "Launching the Exploit" page. Otherwise, consult the TWiLight Menu++ Manual
1. Hit <kbd>L</kbd> / <kbd>R</kbd> until you reach the Unlaunch Settings page
1. If you want to change Unlaunch's background image, click on `Background` and choose the one you want
1. If you want the Health and Safety screen and DSi Menu music, then set `Launcher Patches` to `Off`
   - This will also prevent region locking from being removed
1. Exit the TWiLight Menu++ Settings
1. In the file navigation menu, launch `Unlaunch DSi Installer`
1. Select the install option
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting) page
1. When completed, reboot your system

If you see Unlaunch's management screen at this point, you have successfully modded your Nintendo DSi.
- If you see a black screen, please take a look at our [Troubleshooting](troubleshooting) page

## Section II - Post-Unlaunch Configuration

Currently Unlaunch defaults to launching its file menu on boot, but this can be changed launch whatever you want.

We will also reconfigure nds-bootstrap to launch into TWiLight Menu++ (instead of the exploited DSiWare title) when we soft-reset in-game.

1. Power on your console while holding <kbd>A</kbd> + <kbd>B</kbd>
1. Navigate to `OPTIONS`, and look at the available options
   - <kbd>A</kbd> + <kbd>B</kbd> is hardcoded to launch into Unlaunch's menu, and as such cannot be changed
   - The `NO BUTTON` and `BUTTON A/B/X/Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. You can select any DSiWare, Homebrew, the Slot-1 card, or Unlaunch's file menu
      - For TWiLight Menu++, select the `TWiLight Menu++` option where `BOOT.NDS` is shown on the bottom screen
      - For the original DSi Menu, select `Launcher`
   - `LOAD ERROR` is what your DSi will load if loading what you have set fails, such as the SD card not being inserted. If you would like to load into the DSi Menu, then set this to `Launcher`
1. Save your settings and head back to Unlaunch's menu
1. Hover over the `TWiLight Menu++` options and find the one that has a path containing `settings.srldr` on the bottom screen
1. Launch the highlighted option
1. Use the <kbd>L</kbd> and <kbd>R</kbd> buttons to switch over to the "Misc. Settings" page
1. Set the "DSiWare Exploit" entry to "None"

## Section III - Cleaning up your SD card

This section is optional and only serves for keeping your SD card tidy of files you won't need.
{: .notice--primary}

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
   - If you used another exploit, delete the files from that exploit instead
- Delete the `UNLAUNCH.DSI` file from your SD card

Continue to [Installing hiyaCFW](installing-hiyacfw)
{: .notice--info}
