---
title: Installing Unlaunch (TempNAND)
---

{% include toc title="Table of Contents" %}

If you do not have a DSiWare exploit already installed, you must have a USA console with Flipnote Studio installed, or a hardware modification capable of installing DSiWare.
{: .notice--info}

This method **severely degrades** the NAND and should only be used as a **last resort**.
{: .notice--danger}

## Requirements

- v0.8 of [Unlaunch](https://problemkaputt.de/unlau08.zip)
	- We are currently using Unlaunch v0.8, as 0.9 is incompatible with HiyaCFW
- The latest release of [ugopwn](/assets/files/ugopwn.zip)
  - Only for USA consoles
- The latest release of [fwTool](/assets/files/fwTool_1.6.zip)
- The latest release of [TempNAND](https://github.com/ThisIsDaAccount/TempNand/releases/latest){:target="_blank"}
- The latest release of [Java](https://java.com/en/download/){:target="_blank"}
- The latest release of [Python 3](https://www.python.org/downloads/){:target="_blank"}
- The latest release of [DSi SRL Extractor](/assets/files/dsi_srl_extract.zip)
- The latest release of [No$GBA](http://problemkaputt.de/gba.htm){:target="_blank"}
- A random `.nds` rom file

## Preparing SD card

1. Copy the contents of the fwTool `.zip` file to the root of your SD card
2. Rename the fwTool `.nds` file to `boot.nds`
3. Copy the contents of the ugopwn `.zip` file to the root of your SD card
  - Only for USA consoles

## Dumping key files

1. Open the System Settings application
2. Select **Data Management > System Memory > Flipnote Studio > Copy > Yes**
	- If Data Management isn't appearing, open the DSi Shop, close it, and then try again
3. Exit to the DSi Menu
1. Open the Flipnote Studio application
  - Ensure that the *booting to Calendar mode* is disabled in Flipnote Studio's settings
  - If you already have another DSiWare exploit installed, open that and skip to Step 17
2. Select **View Flipnote > SD Card > Select Folder > User > ugopwn**
3. Click on the note with the red bottom half
4. Select "Edit"
5. Click on the Flipnote frog icon in the bottom left
6. Click on the film roll icon
7. Select **Copy > Back > Exit**
8. Click the second note.
9. Click on the Flipnote frog icon in the bottom left
10. Click on the film roll icon.
11. Click on the single right arrow (the next to last arrow icon) two times
  - You will see a new frame be created
12. Click on the paste button exactly 122 times.
13. Select "Erase" and then "Paste"
  - This should launch fwTool
14. Select the options `Dump CID` and `Dump BIOS`
15. Select `Dump  nand_dsi.bin`
  - This will take a few minutes
15. Once finished, power off your device

## Preparing for TempNAND and No$GBA

1. Download and extract the No$GBA `.zip` file to a folder on your Desktop
2. Insert your SD card into your computer
3. Open the folder in your SD card with seemingly random numbers
4. Copy the DSi BIOS to the NO$GBA folder
4. Copy `nand_dsi.bin` to a safe location on your computer
5. Rename `nand_dsi.bin` to `clean_nand_dsi.bin`
6. Copy `CID.bin` to a safe location on your computer
7. Copy the contents of the Unlaunch `.zip` file to a folder on your Desktop
8. Copy the contents of the DSi SRL Extractor `.zip` file to a folder on your Desktop
9. Navigate to /Private/DS/Title/ on your SD card
10. Copy the `.bin` file to your DSi SRL Extractor folder
11. Run the `console_id.py` file inside the folder
  - This script requires [WINE](https://www.winehq.org/){:target="_blank"} on Mac/Linux/*nix systems
12. When prompted, press Enter
13. Copy the new `console_id.txt` file to a safe location on your computer

## Using TempNAND

1. Download and extract the TempNAND `.zip` file to somewhere on your computer
2. Open the TempNAND `.jar` file
  - Make sure you have Java installed
3. Navigate to the setup tab
4. Select **Console ID > get Console ID from file**
5. Select your `console_id.txt` file from earlier
6. Select **CID > get CID from file**
7. Select your `CID.bin` file from earlier
8. Select **File > Open Encrypted NAND**
9. Select your `clean_nand_dsi.bin` file from earlier
  - This might take a few seconds
  - If it appears to freeze, give it time
10. Select "Install Unlaunch"
11. Select `unlaunch.dsi` from the Unlaunch `.zip` you extracted earlier
12. Select **File > Save As**
13. Save a copy of your NAND backup for later use
14. Rename it to `unlaunch_nand_dsi.bin`
15. Select **File > Save for No$GBA**
16. Save a the file to the NO$GBA folder
17. Rename the No$GBA NAND backup to `DSI-1.mmc`

## Testing NAND

1. Open No$GBA
2. Select **Options > Emulation Setup**
3. Set "Reset/Startup Entrypoint" to "GBA/NDS BIOS (Nintendo Logo)"
4. Set "NDS Mode Colors" to "DSi (retail/16MB)"
5. Select **Save Now > OK**
6. Select **File >> Cartridge Menu (FileName)**
7. Open the `.nds` file

Your NAND should now be emulated by No$GBA. If it does not work, the NAND backup is not safe to use and it is not safe to flash it to your DSi.

If the backup works in No$GBA, feel free to continue to the next section.

## Reflashing NAND

1. Copy the `unlaunch_nand_dsi.bin` file back to the folder on your SD card created by fwTool
2. Delete the `nand_dsi.bin` file on your SD card
  - Make sure you still have the original backup on your computer!
3. Rename `unlaunch_nand_dsi.bin` to `nand_dsi.bin`
4. Open the Flipnote Studio application
  - Ensure that the *booting to Calendar mode* is disabled in Flipnote Studio's settings
  - If you already have another DSiWare exploit installed, open that and skip to Step 16
5. Select **View Flipnote > SD Card > Select Folder > User > ugopwn**
6. Click on the note with the red bottom half
7. Select "Edit"
8. Click on the Flipnote frog icon in the bottom left
9. Click on the film roll icon
10. Select **Copy > Back > Exit**
11. Click the second note.
12. Click on the Flipnote frog icon in the bottom left
13. Click on the film roll icon.
14. Click on the single right arrow (the next to last arrow icon) two times
  - You will see a new frame be created
15. Click on the paste button exactly 122 times.
16. Select "Erase" and then "Paste"
  - This should launch fwTool
17. Select "Restore `nand_dsi.bin`"
  - This will take a few minutes
18. After it has finished, power off your console

Your console should now have Unlaunch installed. With Unlaunch installed, your system now has primitive brick protection, unless the launcher’s TMD file is destroyed. Unlaunch has protections that should prevent this from happening, and HiyaCFW uses your SD card as the DSi’s NAND, making your system theoretically unbrickable.

Continue to [Installing HiyaCFW](installing-hiyacfw)
{: .notice--info}
