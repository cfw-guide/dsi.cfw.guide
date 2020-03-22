---
title: Installing TWiLight Menu++
redirect_from:
  - /guide/finalizing-setup
  - /finalizing-setup
  - /installing-twlmenu++
  - more/replacing-system-menu
  - replacing-system-menu-with-srloader
  - replacing-system-menu-with-dsimenu++
  - replacing-system-menu-with-twilight-menu++
  - replacing-system-menu-with-twlmenu++
---

{% include toc title="Table of Contents" %}

TWiLight Menu++ is an open-source & customizable alternative to the Nintendo DSi's System Menu. It can be used as a frontend for either nds-bootstrap or supported flashcards. It also provides a unified interface for launching NES, SNES, Gameboy (Color), SEGA GameGear, SEGA Genesis, Nintendo DS & DSiWare titles.

This will be overwriting HBMENU, but TWiLight Menu++ has the same DSi Homebrew launching code as HBMENU.
{: .notice--info}

## Downloads

- The latest release of [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases){:target="_blank"}

## Instructions

 - Copy *the contents of* the `SDNAND root` folder in the `DSi - CFW users` folder to the root of your SD card
 - Copy the `_nds` folder to the root of your SD card
 - Copy the `boot.nds` file and the `_nds` folder from the `DSi&3DS - SD card users` folder to the root of your SD card
    - Replace files and merge folders, if asked.

Yes, there are two `_nds` folders. While the first one contained all the TWiLight Menu++ files, those are universal to flashcarts as well. The second `_nds` folder contains DSi/3DS specific files, such as the homebrew version of nds-boostrap.
{: .notice--info}

## Replacing the System Menu (if not using HiyaCFW)

You must have [Unlaunch](/guide/installing-unlaunch/) installed before proceeding.
{: .notice--info}

1. Power on your DSi while holding **(A)** & **(B)**
2. Navigate to `OPTIONS`, and press (A)
3. Press (A) to configure a default software to boot in to when no button is held
4. Navigate to the first `TWiLight Menu++`, and press (A)
  - It should say `sdmc:/boot.nds` on the bottom screen
5. Navigate to `SAVE & EXIT`, and press (A)

TWiLight Menu++ is now automatically launched when you launch your console. If you want to run DSiWare, wait for steps on how to run them to appear.

## Usage

- TWiLight Menu++ is an SD card navigator. You can launch the available applications anywhere on the SD cards.
- If files don't appear, they are most likely hidden using the FAT attributes of the filesystem. You can check via Windows or MacOS
   - You can view hidden files on TWiLight Menu++ by enabling the option in the TWiLight Menu++ Settings Application
- To launch GBA applications, you'll need a `bios.bin` file. This can be located either on the root of your SD card, a `gba` folder or a `_gba` folder.
