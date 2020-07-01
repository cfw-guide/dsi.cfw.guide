---
title: Installing hiyaCFW
redirect_from:
  - /guide/installing-hiyacfw
  - /guide/hiyacfw
  - /hiyacfw
---

{% include toc title="Table of Contents" %}

Do not system update after installing hiyaCFW. This will remove hiyaCFW's SD patches.
{: .notice--danger}

hiyaCFW is a custom firmware that will allow you to run your system NAND (internal storage) off of your SD card.

This allows you to modify your system without risk of bricking your internal system, as any changes are simply made to the SD card instead, which can be easily restored.

It also features easy installation of homebrew applications to the DSi Menu, and displaying a custom splash screen on boot.

This section is entirely optional. If Unlaunch is enough for you, you can stop here.
{: .notice--primary}

## Requirements
- A Nintendo DSi with [Unlaunch](installing-unlaunch)
- A NAND Backup taken from your device using dumpTool
  - If you don't have one of these, follow our [Dumping NAND](dumping-nand) guide
- The latest version of [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
  - Windows users are recommended to use the compiled `.exe` binary + the latest version of [7-Zip](https://www.7-zip.org/download.html)
  - Users of other operating systems could use the source code file `.py` (requires [Python 3](https://www.python.org/downloads/) with the Tk library)

## Section I - Preparing your SD card
![](https://camo.githubusercontent.com/538f1d70409d6b38170ef7d845b7818bd902fd87/68747470733a2f2f696d6167652e6962622e636f2f68687a4b524c2f53637265656e2d53686f742d323031382d31302d31382d61742d31362d33302d31382e706e67)

1. Extract the hiyaCFW Helper archive anywhere on your computer
1. Launch hiyaCFW Helper
 - If launching the `.py` file opens IDLE, open the terminal to this directory and type `py3 HiyaCFW_Helper.py`
 - Windows users can simply open the `.exe` file in Windows Explorer
1. Click the `...` button in the `NAND file with No$GBA footer` box
1. Navigate to your NAND backup, and click `Open`
1. Press `Start`
1. In the new pop-up window, navigate to the root of your SD card, and press `OK`.
  - The process may take several minutes

When it says "Done", then you may eject your SD card and insert it into your Nintendo DSi.

## Section II - Configuring Unlaunch and hiyaCFW

1. Power on your Nintendo DSi console while holding **(A) + (B)**
1. Navigate to `OPTIONS` -> `NO BUTTON`
1. Select `hiya.dsi` and press **(A)**
  - This will make the system launch hiyaCFW at boot
1. Save your settings and restart your console
1. Hold **(SELECT)** while powering on your Nintendo DSi console to access the hiyaCFW settings
  - If you selected `Install latest TWiLight Menu++ on custom firmware` to boot into the SDNAND home screen instead of TWiLight Menu++, navigate to `Autoboot title` and press **(A)** to deselect it.
1. Change the settings to your liking, and press **(START)** to continue

Your system will now boot from the SD card instead of the internal NAND.

If you receive `An Error Has Occurred`, please view our [Troubleshooting](troubleshooting) page.
{: .notice--warning}
