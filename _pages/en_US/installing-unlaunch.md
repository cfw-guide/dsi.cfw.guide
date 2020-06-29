---
title: "Installing Unlaunch"
redirect_from:
  - /guide/installing-unlaunch
  - /unlaunch
---

{% include toc title="Navigation" %}

Unlaunch is an exploit that allows homebrew applications to take full advantage of the Nintendo DSi hardware at boot. Examples include dumping a Slot-1 device, launching into hiyaCFW amongst others.

Installing Unlaunch is entirely optional. You could stop here if simple homebrew access is enough.
{: .notice--primary}

If you have not yet done so, please made a [NAND backup](dumping-nand). Unlaunch modifies the NAND which could result in a brick if done improperly.
{: .notice--danger}

Make sure your console is charged when following this process. A sudden power loss could result in serious damage.
{: .notice--warning}

## Section I - SD card preparations

Using a Windows, Linux or Mac OS device? We have a tool that will automatically set up your SD card for following the guide.
{: .notice--info}

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
1. Extract `UNLAUNCH.DSI` from the `unlaunch.zip` archive and place it anywhere on your SD card.

## Section II - Installing/Updating Unlaunch

1. Launch `UNLAUNCH.DSI` from a homebrew launcher.
   - If this is your first time installing Unlaunch, launch TWiLight Menu++ via your exploit and select `UNLAUNCH.DSI`
   - If you have already installed Unlaunch and are looking to update it, hold **(A)** + **(B)** while booting and select `UNLAUNCH.DSI`
1. Select the install option
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at our [Troubleshooting](troubleshooting) page
1. When completed, reboot your system

If you see Unlaunch's management screen at this point, you have successfully modded your Nintendo DSi.

## Section II - Reconfiguring TWiLightMenu++

1. Power on your console while holding **(A)** + **(B)**
1. Navigate to `OPTIONS` -> `NO BUTTON`
1. Select `boot.nds` and press **(A)**
   - This will make the system automatically launch TWiLightMenu++ on boot
   - This is optional
1. Save your settings and head back to Unlaunch's menu
1. Launch `sd:/_nds/twilightmenu/settings.srldr`
1. Use the **(L)** and **(R)** buttons to switch over to the "Misc. Settings" page
1. Set the "DSiWare Exploit" entry to "None"

## Section III - Cleaning up your SD card

This section is optional and only serves for keeping your SD card tidy of files you won't need.
{: .notice--primary}

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
   - If you used another exploit, delete the relevant files concerning that exploit instead
- Delete the `UNLAUNCH.DSI` file from your SD card
   - If you plan on uninstalling the exploit in the future, keep this

If you have any issues setting up Unlaunch, look at our [Troubleshooting](troubleshooting) page first.

Continue to [Installing hiyaCFW](installing-hiyacfw)
{: .notice--info}
