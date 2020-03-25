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

## Configuring hiyaCFW on your system
1. Power on your console, while holding **(A) + (B)**
  - Unlaunch's GUI should appear
2. Launch `hiyaCFW`
  - If you'd like for hiyaCFW to automatically launch when you power on your console, check the FAQ for a guide.
3. Change the settings to your liking, and press (START) to continue

Your system will now boot from the SD card instead of the internal NAND.

If you boot to "An error has occured" screen, check the FAQ for instructions on how to fix it.
{: .notice--danger}
