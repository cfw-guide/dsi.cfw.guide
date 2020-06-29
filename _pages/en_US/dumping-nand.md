---
title: Dumping NAND
redirect_from:
  - /nand-dump
  - /dump-nand
---

In this step, we'll be making a NAND backup. This is a 1:1 copy of your Nintendo DSi internal storage, which we can use later on to setup hiyaCFW and NO$GBA.

We highly recommend that you do this. A NAND backup can be used as a restore point in the future, in case your Nintendo DSi stops working.
{: .notice--primary}

## Section I - SD card setup
Using a Windows, Linux or Mac OS device? We have a tool that will automatically set up your SD card for following the guide.
{: .notice--info}

1. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases)
1. Place `dumpTool.nds` anywhere on your SD card

## Section II - Dumping the NAND
1. Launch `dumpTool.nds` through a homebrew launcher
   - If you have already installed Unlaunch, use Unlaunch's homebrew launcher instead by holding **(A)** + **(B)** on your system boot and selecting it in the menu
   - If you have not yet installed Unlaunch, launch your exploit and select `dumpTool.nds` from TWiLight Menu++
1. Follow the on-screen prompts
   - This usually takes around seven minutes
1. Hit the **(START)** button on your Nintendo DSi to exit dumpTool when the NAND dump is completed
1. Power off your console and insert your SD card back into your computer
1. Store this backup somewhere safe, where you won't lose it
   - If possible, make multiple backups across different storage devices

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a NO$GBA footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.
{: .notice--warning}

Continue to [Installing Unlaunch](installing-unlaunch)
{: .notice--info}
