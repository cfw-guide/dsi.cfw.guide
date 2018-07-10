---
title: Replacing the System Menu with DSiMenu++
redirect_from:
  - more/replacing-system-menu
---

{% include toc title="Table of Contents" %}

You must have [Unlaunch](/guide/installing-unlaunch/) and [HiyaCFW](/guide/installing-hiyacfw/) installed before proceeding.
{: .notice--info}

This will replace your DSi's System Menu with DSiMenu++, and run it whenever you power on your DSi console.

Replacing the System Menu with DSiMenu++ will allow for a few advantages over the built-in System Menu:
* DSiMenu++ can allow for more DSiWare than the System Menu
* DSiMenu++, in many cases, can allow for SD cards greater than 2 GB to work
    - You can copy your entire SDNAND to a larger SD card once this process is done, and it will likely work out of the box
* DSiMenu++ provides a unified interface for launching NES, GB(C), DS, and DSiWare titles

In this configuration, DSiMenu++ is effectively acting as an open source alternative to the System Menu.

## Downloads
- The latest release of [DSiMenu++](https://github.com/Robz8/DSiMenuPlusPlus/releases){:target="_blank"}
- [appgen](/assets/files/appgen.zip)
  - Windows users may use the .EXE
  - Users of other operating systems may use the .py (requires [Python 2 or 3](https://www.python.org/downloads/){:target="_blank"})

## Preparation
If you already have DSiMenu++ installed, skip to step 5.
{: .notice--info}
1. Open the DSiMenuPlusPlus `.7z` file
2. Copy *the contents of* the `CFW - SDNAND root` folder to the root of your SD card
3. Copy the `_nds` and `roms` folders, and `BOOT.NDS` to the root of your SD card
4. In the `Autoboot for HiyaCFW` folder in the DSiMenuPlusPlus `.7z`, copy `autoboot.bin` to the `hiya` folder on your SD card
5. Navigate to the `shared1` folder on your SD card
6. Mark `TWLCFG0.dat` and `TWLCFG1.dat` as **read-only**
    - On Windows, this can be done by right clicking them, going to Properties, then checking "Read-only"
    - This works around a bug that can break the SDNAND
    - You will need to make these writeable again temporarily when you want to change system settings
7. Navigate to `title/00030004` on your SD card
8. Copy `appgen.exe` or `appgen.py` to `title/00030004` on your SD card
9. Run `appgen`
    - A new `dsiware` folder will be created
10. Move the `dsiware` folder to `roms/dsiware` on your SD card
    - The two folders should be *merged*, if prompted
11. Eject your SD card, and insert it in your DSi

## Instructions
1. Power on your DSi while holding **SELECT**
2. If `Autoboot title` is not checked, navigate to it and press **A**
3. Press **START** to save and continue booting
    - DSiMenu++ will appear

DSiMenu++ is now your System Menu. Navigate to the `roms/dsiware` folder to access your DSiWare. 