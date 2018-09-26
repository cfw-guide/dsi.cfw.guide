---
title: Installing HiyaCFW
redirect_from:
  - /guide/installing-hiyacfw
---

{% include toc title="Table of Contents" %}

You will need [Unlaunch](installing-unlaunch/) installed before proceeding.
{: .notice--info}

Do not system update after installing HiyaCFW. This will remove HiyaCFW's SD patches.
{: .notice--danger}

HiyaCFW has several advantages that only having Unlaunch on your system will not allow for. These include:
- Booting the system from the SD card
- Installing homebrew applications to the System Menu with ease
- Including a custom splash screen on boot
- Automatically booting into another application, such as TWiLight Menu++


## Requirements
- **[OPTIONAL, BUT RECOMMENDED]** An SD card that is 2GB or smaller, or a larger SD card that is partitioned to be 2GB or smaller
  - If you cannot fulfill this requirement, or do not wish to, follow [Replacing System Menu with TWiLight Menu++](replacing-system-menu-with-twlmenu++) once you are finished with this page
- The latest release of [fuse-3ds](https://github.com/ihaveamac/fuse-3ds/releases){:target="_blank"}
  - Windows users will need to install [WinFsp](http://www.secfs.net/winfsp/download/){:target="_blank"} as well
- The latest release of [OSFMount](https://www.osforensics.com/tools/mount-disk-images.html){:target="_blank"}
  - This can be substituted for the `mount` utility on non-Windows systems
- The latest release of [HiyaCFW](https://github.com/Robz8/hiyaCFW/releases){:target="_blank"}
- [NUSDownloader](/assets/files/NUSDownloader.zip)
- A NAND backup taken from your device, with the NO$GBA Footer
  - fwTool 2.0 will create this footer automatically when it makes a backup
  - You should already have this backup from the previous section
- [HiyaCFW Helper](/assets/files/hiyacfw_helper.zip)
  - Windows users may use the .EXE
  - Users of other operating systems may use the .py (requires [Python 3](https://www.python.org/downloads/){:target="_blank"} and [WINE](https://www.winehq.org/){:target="_blank"})

## HiyaCFW Preparation
1. Insert your SDNAND SD card into your PC
2. Copy *the contents of* the NUSDownloader `.zip` file to a folder on your PC
3. Copy *the contents of* the HiyaCFW `.7z` file to a folder on your PC
4. Copy *the contents of* the HiyaCFW Helper file to the `for PC` folder in your HiyaCFW folder
5. Open NUSDownloader on your computer
  - This can be done through [Mono](http://www.mono-project.com/) on non-Windows systems
6. Check the "Create Decrypted Contents (*.app)" box, and uncheck the "Keep Enc. Contents" box
7. Select `Database` -> `System (DSi)` -> `System Menu (Launcher)` -> `[Your Region]` -> `v512` -> `Start NUS Download!`
8. Exit NUS Downloader
9. Navigate to `titles` -> `00030017484e41XX` -> `512` in your NUS Downloader directory
10. Copy `00000002.app` from the `512` folder to the HiyaCFW `for PC` folder
11. Copy your valid NAND backup (`nand.bin`) from the `FWXXXXXXXXXXXX` folder on your SD card to the HiyaCFW `for PC` folder
  - `XXXXXXXXXXXX` denotes random, console-specific characters
12. In the HiyaCFW `for PC` folder, run `hiyacfw_helper.exe` to prepare modifications
  - Non-Windows systems can use the `.py` file, which will require [Python 3](https://www.python.org/downloads/){:target="_blank"} and [WINE](https://www.winehq.org/){:target="_blank"}

## SDNAND Creation
1. Open fuse-3ds on your PC
  - If fuse-3ds fails to open, check the [FAQ](faq)
2. In the `- Choose a type or drag a file/directory here -` dropdown, select `Nintendo DSi NAND backup ("nand_dsi.bin")`
3. Drag and drop your valid NAND backup onto the file `Drag a file here or browse...` input box
4. Create a new folder on your PC (NOT your SD card!) to mount the NAND backup on, and drag and drop this new folder onto the mount point `Drag a directory here or browse...` input box
  - Ensure that the mount type is set to "Directory" on Windows systems
5. At the bottom of the fuse-3ds window, press "Mount"
  - The mounted folder will appear
  - If fuse-3ds fails to mount, check the [FAQ](faq)
6. Open OSFMount on your PC
  - The `mount` utility can be used instead on non-Windows systems
7. At the bottom left of OSFMount's window, press "Mount new..."
8. In the new window, under "Image file", navigate to your mounted NAND folder and select `twl_main.img`
9. Press "OK"
  - A new mounted drive will appear
10. Navigate to the new mounted drive on your PC
11. Copy all contents of the new mounted drive to the root of your SD card
12. In OSFMount's window, select "Dismount all and Exit", then press "Yes"
13. In fuse-3ds's window, select "Unmount", and close fuse-3ds

## Finalization
1. Copy *the contents of* the HiyaCFW `for SDNAND SD card` folder to the root of your SD card
  - If asked to replace any files, do so
2. Open the `Modified Files` folder from the HiyaCFW `for PC` folder
3. Copy `bootloader.nds` to the `hiya` folder on your SD card
4. Copy 00000002.app to `title` -> `00030017` -> `484e41XX` -> `content` folder on your SD card
  - XX denotes your region: 45 for USA, 50 for EUR, 4A for JAP, 55 for AUS
5. Unplug your SD card, and insert it in your DSi
6. Power on your console
  - HiyaCFW's settings screen should appear
7. Change the settings to your liking, and press (START) to continue
  - If you boot to "An error has occured" screen, it's most likely because your SD card is larger than 2GB; follow [Replacing System Menu with TWiLight Menu++](replacing-system-menu-with-twlmenu++) as noted at the top of the page

Your system will now boot from the SD card instead of the internal NAND.
You may press (A) while booting to bypass HiyaCFW and boot from the internal NAND, using Unlaunch.
  
Continue to [Finalizing Setup](finalizing-setup)
{: .notice--info}
