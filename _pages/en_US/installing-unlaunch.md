---
title: "Installing Unlaunch"
redirect_from:
  - /guide/installing-unlaunch
  - /unlaunch
---

{% include toc title="Navigation" %}

Unlaunch is a very powerful exploit, meaning homebrew is able to take full advantage of the hardware. It launches at boot, making it very useful for getting into CFW quickly.

This section is entirely optional. If simple homebrew access is enough for you, you can stop here.
{: .notice--primary}

If you have not yet done so, please made a [NAND backup](dumping-nand). Unlaunch modifies the NAND which could result in a brick if done improperly.
{: .notice--danger}

Make sure your console is decently charged when following this process. A sudden power loss could result in serious damage.
{: .notice--warning}

## Instructions

### Installing & Updating

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
1. Extract the Unlaunch `.zip` file to the root of your SD card
1. Open your homebrew exploit and launch TWiLightMenu++
  - If you have already installed Unlaunch, hold **(A)** + **(B)** while booting
1. Select `UNLAUNCH.DSI` and open it
1. Select the install option.
  - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at our [Troubleshooting](troubleshooting) page
1. When completed, reboot your system

If you see Unlaunch's management screen at this point, you have successfully modded your Nintendo DSi.

### Cleaning up your SD card

This section is optional and only serves for keeping your SD card tidy of files you won't need.
{: .notice--primary}

1. Power off your system and insert your SD card into your computer
1. Delete the `private/ds/app/484E494A/pit.bin` file from your SD card
  - If you used another exploit, delete the relevant files concerning that exploit instead
1. Delete the `UNLAUNCH.DSI` file from your SD card
  - If you plan on uninstalling the exploit in the future, keep this

If you see Unlaunch's management screen at this point, you have successfully modded your Nintendo DSi.

If you have any issues setting up Unlaunch, look at our [Troubleshooting](troubleshooting) page first.

Continue to [Installing HiyaCFW](installing-hiyacfw)
{: .notice--info}
