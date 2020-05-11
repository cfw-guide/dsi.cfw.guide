---
title: "Installing Unlaunch"
redirect_from:
  - /guide/installing-unlaunch
  - /unlaunch
---

{% include toc title="Navigation" %}

Unlaunch is a very powerful exploit, meaning homebrew is able to take full advantage of the hardware. It launches at boot, making it very useful for getting into CFW quickly.

Due to it loading before most of the OS, it also provides brick protection. In most cases, you'll still be able to restore your system if it's been damaged using unlaunch.

This section is entirely optional. If simple homebrew access is enough for you, you can stop here.
{: .notice--primary}

If you have not yet done so, please made a [NAND backup](dumping-nand). Unlaunch modifies the NAND which could result in a brick if done improperly.
{: .notice--danger}

Make sure your console is charged when following this process. A sudden power loss could result in serious damage.
{: .notice--warning}

## Section I - Installing & Updating

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
1. Extract the Unlaunch `.zip` file to the root of your SD card
1. Open your homebrew exploit and launch TWiLightMenu++
  - If you have already installed Unlaunch, hold **(A)** + **(B)** while booting
1. Select `UNLAUNCH.DSI` and open it
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
1. Save your settings and reboot the console
  - This will now boot into TWiLightMenu++
1. Once you're in TWiLightMenu++, press **(SELECT)** to switch to the DS Classic Menu
1. Tap the button at the very bottom to open settings
1. Use the **(L)** and **(R)** buttons to switch over to the "Misc. Settings" page
1. Switch the "DSiWare Exploit" entry to "None"

## Section III - Cleaning up your SD card

This section is optional and only serves for keeping your SD card tidy of files you won't need.
{: .notice--primary}

1. Power off your system and insert your SD card into your computer
1. Delete the `private/ds/app/484E494A/pit.bin` file from your SD card
  - If you used another exploit, delete the relevant files concerning that exploit instead
1. Delete the `UNLAUNCH.DSI` file from your SD card
  - If you plan on uninstalling the exploit in the future, keep this

If you have any issues setting up Unlaunch, look at our [Troubleshooting](troubleshooting) page first.

Continue to [Installing hiyaCFW](installing-hiyacfw)
{: .notice--info}
