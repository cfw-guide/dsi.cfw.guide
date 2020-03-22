---
title: Installing hiyaCFW
redirect_from:
  - /guide/installing-hiyacfw
---

{% include toc title="Table of Contents" %}

You will need [Unlaunch](installing-unlaunch/) installed before proceeding.
{: .notice--primary}

Do not system update after installing hiyaCFW. This will remove hiyaCFW's SD patches.
{: .notice--danger}

hiyaCFW has several advantages that an Unlaunch-only system will not. These include:
- Booting the system from the SD card
- Installing homebrew applications to the System Menu with ease
- Display a custom splash screen on system boot

## Requirements
- A NAND backup taken from your device, with the NO$GBA Footer
  - dumpTool will create this footer automatically when it makes a backup
  - You should already have this backup from the previous section
- The latest version of [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases){:target="_blank"}
  - Windows users are recommended to use the compiled `.exe` binary + the latest version of [7-Zip](https://www.7-zip.org/download.html){:target="_blank"}
  - Users of other operating systems could use the source code file `.py` (requires [Python 3](https://www.python.org/downloads/){:target="_blank"} with the Tk library)

## Preparing your SD card
1. Extract the hiyaCFW Helper `.zip`
2. Launch hiyaCFW Helper
 - If launching the `.py` file opens IDLE, open the terminal to this directory and type `py3 HiyaCFW_Helper.py`
3. Click the `...` button in the `NAND file with No$GBA footer` box
4. Navigate to your NAND backup, and click `Open`
5. If you wish to install TWiLight Menu++ as a DSi Menu replacement, check the `Install latest TWiLight Menu++ on latest firmware` box
6. Press `Start`
7. In the new pop-up window, navigate to the root of your SD card, and press `OK`
  - The process may take several minutes

When it says "Done", then you may unplug your SD card and insert it into your Nintendo DSi.

##  Configuring hiyaCFW on your system
1. Power on your console, while holding **(A) + (B)**
  - Unlaunch's GUI should appear
2. Navigate to `OPTIONS`.
3. Select when you'd like hiyaCFW to be launched (which button combination, or in some cases, no button combination/auto-boot).
4. Navigate to `hiyaCFW`, and press (A)
5. Save your configuration
6. Reboot your console (power off your console and power it back on)
  - hiyaCFW's settings screen should appear
7. Change the settings to your liking, and press (START) to continue
  - If you boot to "An error has occured" screen, it's most likely because your SD card has more than 2GB of free space
  - To fix this you can create dummy files to fill up your SD card, use the following command for your OS to create 1GB files until your SD has less than 2GB free[*](#an-error-has-occured-detailed-explanation), changing `dummy0` to another name for each one:
    - Windows:<br>
    `fsutil file createnew dummy0 1073741824`
    - Linux/macOS:<br>
    `dd if=/dev/zero of=dummy0 count=1024 bs=1048576`

Your system will now boot from the SD card instead of the internal NAND.

If you want to boot in to the internal storage, you may configure `LAUNCHER` to a hotkey in a similar manner to the one you just did for hiyaCFW.
{: .notice--info}
