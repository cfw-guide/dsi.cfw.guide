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

Before proceeding, if your system region is USA, make sure your console language is set to English.
{: .notice--info}

Ensure your SD card is formatted to FAT32 before proceeding.
{: .notice--info}

Unlaunch is a DSi bootcode exploit which will allow you to install HiyaCFW, a DSi Custom Firmware, to your console.
## Downloads
- The latest release of [Unlaunch](https://problemkaputt.de/unlau18.zip){:target="_blank"}
- The latest release of [HBMenu](https://github.com/devkitPro/nds-hb-menu/releases/){:target="_blank"}
- The latest release of [Flipnote ( ͡° ͜ʖ ͡°) ("Flipnote Lenny")](https://davejmurphy.com/͡-͜ʖ-͡/){:target="_blank"}

## Preparing your SD card

1. Insert your system's SD card into your PC
2. Copy the `private` folder from the Flipnote Lenny `.zip` file to the root of your SD card
3. Copy `fwTool.nds` from the `nds` folder in the Flipnote Lenny `.zip` file to the root of your SD card
4. Copy `BOOT.NDS` from the `hbmenu` folder in the HBMenu `.tar.bz2` file to the root of your SD card
5. Eject your SD card, and insert it back into your DSi

<a name="creating-a-nand-backup"/>
## Creating a NAND backup

1. Open the Flipnote Studio application
  - Ensure that the *booting to Calendar mode* is disabled in Flipnote Studio's settings
  - If you already have another DSiWare exploit installed, open that and skip to Step 12
  - Note that Sudokuhax *cannot* adequately make a backup with the required footer!
2. Select `View Flipnote` -> `SD Card`
3. Click on the lenny corresponding to your region (USA, JPN or EUR)
4. Select "Edit"
5. Click on the Flipnote frog icon in the bottom left
6. Click on the film roll icon
7. Select `Copy` -> `Back` -> `Exit`
8. Click the second note with a larger lenny face, and select "Edit"
9. Click on the Flipnote frog icon in the bottom left
10. Click on the film roll icon
11. Select `Paste`
  - This will launch HBMenu
12. Navigate to `fwTool.nds`, and press (A)
  - fwTool will appear
13. Navigate to `Backup DSi NAND`, and press (A)
  - This will take a few minutes
  - Store this NAND backup in a safe location, it is a critical backup and we will need it later to install HiyaCFW
  - When `saved nand.bin.sha1.` appears, the backup is finished
14. Navigate to `Exit`, press (A), and power off your system

## Installation
1. Insert your system's SD card into your computer
2. Copy `UNLAUNCH.DSI` from the Unlaunch `.zip` file to the root of your SD card
3. Rename `UNLAUNCH.DSI` to `unlaunch.nds`
4. Unplug your SD card, and insert it in your DSi
5. Power on your DSi, and repeat steps 1 through 11 in
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
