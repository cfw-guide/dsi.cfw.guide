---
title: Installing Unlaunch
redirect_from:
  - /guide/installing-unlaunch
---

{% include toc title="Table of Contents" %}

Before starting, Windows users should enable the option to show file extensions using [File Extensions (Windows)](file-extensions-(windows))!
{: .notice--primary}

Before starting, you may want to check your SD card for errors using [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), or [F3X (Mac)](f3x-(mac))!
{: .notice--primary}

Ensure your SD card is formatted to FAT32 before proceeding.
{: .notice--info}

Unlaunch is a DSi bootcode exploit which will allow you to install HiyaCFW, a DSi Custom Firmware, to your console.
## Downloads
- The latest release of [Unlaunch](https://problemkaputt.de/unlaunch.zip){:target="_blank"}
- The latest release of [HBMenu](https://github.com/devkitPro/nds-hb-menu/releases/){:target="_blank"}
- The latest release of [Flipnote ( ͡° ͜ʖ ͡°) ("Flipnote Lenny")](https://davejmurphy.com/͡-͜ʖ-͡/){:target="_blank"}
  - We are only using this archive for fwTool- a copy of Flipnote Studio is **not** required
- The latest release of Memory Pit
  - [for firmware 1.0 - 1.3   (USA, EUR, AUS, JPN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin){:target="_blank"}
  - [for firmware 1.4 - 1.4.5 (USA, EUR, AUS, JPN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/768_1024/pit.bin){:target="_blank"}
  - [for firmware 1.0 - 1.4.6 (KOR, CHN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin){:target="_blank"}

## Preparing your SD card

1. Insert your system's SD card into your device (PC or smartphone)
2. Copy `fwTool.nds` from the `nds` folder in the Flipnote Lenny `.zip` file to the root of your SD card
3. Copy `BOOT.NDS` from the `hbmenu` folder in the HBMenu `.tar.bz2` file to the root of your SD card
4. Copy Memory Pit (`pit.bin`) to the `private/ds/app/484E494A` folder on your SD card
  - If it doesn't exist, take a photo on the console and copy it to the SD card
5. Eject your SD card, and insert it back into your DSi

<a name="creating-a-nand-backup"/>
## Creating a NAND backup

1. Open the DSi Camera application
  - If you already have another DSiWare exploit installed, open that and skip to step 4
  - Note that Sudokuhax *cannot* adequately make a backup with the required footer!
2. Select `SD Card` at the top right
3. Tap `Album`
  - This will launch HBMenu
4. Navigate to `fwTool.nds`, and press (A)
  - fwTool will appear
5. Navigate to `Backup DSi NAND`, and press (A)
  - This will take a few minutes
  - Store this NAND backup in a safe location, it is a critical backup and we will need it later to install HiyaCFW
  - When `saved nand.bin.sha1.` appears, the backup is finished
6. Navigate to `Exit`, press (A), and power off your system

SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because fwTool adds additional data to the `nand.bin` file after the SHA1 hash is calculated. You can use the [HiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases){:target="_blank"} to create a copy without the footer.
{: .notice--info}

## Installation
1. Insert your system's SD card into your computer
2. Copy `UNLAUNCH.DSI` from the Unlaunch `.zip` file to the root of your SD card
3. Rename `UNLAUNCH.DSI` to `unlaunch.nds`
4. Unplug your SD card, and insert it in your DSi
5. Power on your DSi, and repeat steps 1 through 3 in
[Creating a NAND backup](#creating-a-nand-backup)
  - HBMenu will appear
6. Navigate to `unlaunch.nds`, and press (A)
  - Unlaunch's installer will appear
7. Navigate to `INSTALL NOW` and press (A)
  - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please read our [FAQ](/help/faq)
8. When done, navigate to `POWER DOWN` and press (A)
  - Your system will power off
9. Power on your system, to verify Unlaunch installed properly
  - You should now see Unlaunch's management screen

With Unlaunch installed, your system now has primitive brick protection, unless the launcher's TMD file is destroyed. Unlaunch has protections that should prevent this from happening, and HiyaCFW uses your SD card as the DSi's NAND, adding a very resilient layer of brick protection.

Continue to [Installing HiyaCFW](installing-hiyacfw)
{: .notice--info}
