---
title: "Installing Unlaunch"
redirect_from:
  - /guide/installing-unlaunch
  - /unlaunch
---

{% include toc title="Navigation" %}

Unlaunch is an exploit that allows homebrew applications to take full advantage of the Nintendo DSi hardware at boot. Examples include dumping a Slot-1 device, launching into hiyaCFW amongst others.

{% capture usageInstructions %}
WARNING: An Unlaunch installation has the chance to **brick** your Nintendo DSi. Firstly, you should evaluate whether you need Unlaunch or not. Unlaunch is only useful for these aspects:

- Higher compatibility with running old Nintendo DS homebrew via nds-bootstrap-hb (including the SNES emulator in TWiLight Menu++)
- Launching old Nintendo DS flashcarts.
- Dumping SLOT-1 data.
- Launching DSiWare.
- Launching titles at boot (such as TWiLight Menu++ or other DSiWare)

If you don't need any of these, you do not need to install Unlaunch.
{% endcapture %}

<div class="notice--primary">{{ usageInstructions | markdownify }}</div>

If you have not yet done so, please made a [NAND backup](dumping-nand). Unlaunch modifies the NAND which could result in a brick if done improperly.
{: .notice--danger}

Make sure your console is charged when following this process. A sudden power loss could result in serious damage.
{: .notice--warning}

## Section I - SD card preparations

Using a Windows, Linux or Mac OS device? We have a tool that will automatically set up your SD card for following the guide.
{: .notice--info}

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
1. Extract `UNLAUNCH.DSI` from the `unlaunch.zip` archive and place it anywhere on your SD card
1. Verify you still have TWiLight Menu++ on your SD card
   - If you are unsure, follow the instructions from the [Launching the Exploit](launching-the-exploit#twilight-menu) page.

## Section II - Installing/Updating Unlaunch

1. Open TWiLight Menu++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the exploit that you used.
   - If you have already installed Unlaunch and are looking to update it, hold <kbd>A</kbd> + <kbd>B</kbd> while booting and select `BOOT.NDS`
1. Launch TWiLight Menu++'s Settings
   - If you hadn't changed your theme, follow the steps in the "Launching the Exploit" page. Otherwise, consult the TWiLight Menu++ Manual
1. Hit L/R until you reach the Unlaunch Settings page
1. Set your custom Unlaunch BG from the options menu
1. Make sure the "Revert Menu patches" option is set to true
   - Without this, your DSi System Menu will not contain any music and the DSi Splash Screen will not appear
1. Exit the TWiLight Menu++ Settings
1. In the file navigation menu, launch `UNLAUNCH.DSI`
1. Select the install option
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at our [Troubleshooting](troubleshooting) page
1. When completed, reboot your system

If you see Unlaunch's management screen at this point, you have successfully modded your Nintendo DSi.
- If you see a black screen, please take a look at our [Troubleshooting](troubleshooting) page

## Section II - Post-Unlaunch Configuration

Currently, Unlaunch defaults to launching it's ROM launcher on boot. We will change this so that we could launch whatever we like depending on our button configuration (while also adding a fallback to the Nintendo DSi System Menu)

We will also reconfigure nds-bootstrap to launch into TWiLight Menu++ (instead of the exploited DSiWare title) when we soft-reset in-game.

1. Power on your console while holding <kbd>A</kbd> + <kbd>B</kbd>
1. Navigate to `OPTIONS`, and look at the available options
   - <kbd>A</kbd> + <kbd>B</kbd> is hardcoded to launch into Unlaunch's menu, and as such cannot be changed
1. Feel free to play around with the options available for changing what each button boots you into. You can select DSiWare, Homebrew (best to use TWiLight Menu++ for that though) and Slot-1 launching
   - For TWiLight Menu++, hover over the `TWiLight Menu++` option and make sure that `boot.nds` is shown on the bottom screen
   - For the original DSi System Menu, select `Launcher`.
1. Set `Launch Error` to point to the original Nintendo DSi System Menu, titled `Launcher`.
1. Save your settings and head back to Unlaunch's menu
1. Hover over the `TWiLight Menu++` options and find the one that has a path containing `settings.srldr` on the bottom screen
1. Launch the highlighted option
1. Use the <kbd>L</kbd> and <kbd>R</kbd> buttons to switch over to the "Misc. Settings" page
1. Set the "DSiWare Exploit" entry to "None"

## Section III - Cleaning up your SD card

This section is optional and only serves for keeping your SD card tidy of files you won't need.
{: .notice--primary}

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
   - If you used another exploit, delete the relevant files concerning that exploit instead
- Delete the `UNLAUNCH.DSI` file from your SD card
   - If you plan on uninstalling the exploit in the future, keep this file

Continue to [Installing hiyaCFW](installing-hiyacfw)
{: .notice--info}
