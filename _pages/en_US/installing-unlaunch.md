---
title: Installing Unlaunch
redirect_from:
  - /guide/installing-unlaunch
---

{% include toc title="Table of Contents" %}

Before starting, Windows users should enable the option to show file extensions using [File Extensions (Windows)](file-extensions-(windows))!
{: .notice--info}

Before starting, you may want to check your SD card for errors using [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), or [F3X (Mac)](f3x-(mac))!
{: .notice--info}

Before proceeding, if your system region is USA, make sure your console language is set to English.
{: .notice--info}

Unlaunch is currently in a beta state. Please proceed with caution.
{: .notice--info}

Unlaunch is a DSi bootcode exploit which will allow you to install HiyaCFW, a DSi Custom Firmware, to your console.
## Downloads
- The latest release of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
- The latest release of [HBMenu](https://github.com/devkitPro/nds-hb-menu/releases/){:target="_blank"}
- The latest release of [ugopwn](/assets/files/ugopwn.zip)
- The latest release of [fwTool](/assets/files/fwTool.nds)

## Preparing your SD card

1. Insert your system's SD card into your PC
2. Copy the contents of the ugopwn `.zip` file to the root of your SD card
3. Copy the fwTool `.nds` file to the root of your SD card
4. Copy `BOOT.NDS` from the `hbmenu` folder in the HBMenu `.tar.bz2` file to the root of your SD card
5. Eject your SD card, and insert it back into your DSi

## Creating a NAND backup

1. Open the Flipnote Studio application
  - Ensure that the *booting to Calendar mode* is disabled in Flipnote Studio's settings
  - If you already have another DSiWare exploit installed, open that and skip to Step 14
  - Note that Sudokuhax *cannot* adequately make a backup with the required footer!
2. Select **View Flipnote > SD Card > Select Folder > User > ugopwn**
3. Click on the note with the red bottom half
4. Select "Edit"
5. Click on the Flipnote frog icon in the bottom left
6. Click on the film roll icon
7. Select **Copy > Back > Quit**
8. Click the second note, and select "Edit"
9. Click on the Flipnote frog icon in the bottom left
10. Click on the film roll icon.
11. **USA/EUR/AUS:** Click on the single right arrow (the next to last arrow icon) two times
  - You will see a new frame be created
12. Based on your region, do the following:
  - **USA:** Click on the paste button exactly 122 times.
  - **EUR/AUS:** Click on the paste button exactly 2 times.
  - **JPN:** Click on the paste button.
13. **USA/EUR/AUS:** Select "Erase" and then "Paste"
  - This will launch HBMenu
14. Navigate to `fwtool.nds`, and press (A)
  - fwTool will appear
15. Navigate to `Backup DSi NAND`, and press (A)
  - This will take a few minutes
  - Store this NAND backup in a safe location, it is a critical backup and we will need it later to install HiyaCFW
  - When `saved nand.bin.sha1.` appears, the backup is finished
16. Navigate to `Exit`, press (A), and power off your system

## Installation
1. Insert your system's SD card into your computer
2. Copy `UNLAUNCH.DSI` from the Unlaunch `.zip` file to the root of your SD card
3. Rename `UNLAUNCH.DSI` to `unlaunch.nds`
4. Unplug your SD card, and insert it in your DSi
5. Power on your DSi, and repeat steps 1 through 13 in 
**Creating a NAND backup**
  - HBMenu will appear
6. Navigate to `unlaunch.nds`, and press (A)
  - Unlaunch's installer will appear
7. Navigate to `INSTALL NOW` and press (A)
  - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please read our [FAQ](/help/faq)
8. When done, navigate to `POWER DOWN` and press (A)
  - Your system will power off
9. Hold (A) while powering on your system, to verify Unlaunch installed properly
  - You should briefly see the Unlaunch screen, and boot into a version of the DSi Menu with no sound

With Unlaunch installed, your system now has primitive brick protection, unless the launcher's TMD file is destroyed. Unlaunch has protections that should prevent this from happening, and HiyaCFW uses your SD card as the DSi's NAND, adding a very resilient layer of brick protection.

Continue to [Installing HiyaCFW](installing-hiyacfw)
{: .notice--info}
