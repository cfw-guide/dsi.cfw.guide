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

If you have installed HBMenu, this will overwrite it. However, TWiLight Menu++ has the same DSi Homebrew launching code as HBMenu so you won't lose any functionality.
{: .notice--info}

If you haven't already done so, please rename GodMode9i from `BOOT.NDS` to anything else. Otherwise, it will get overwritten.
{: .notice--danger}

## Downloads

- The latest release of [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases){:target="_blank"}

## Instructions

 - Copy *the contents of* the `SDNAND root` folder in the `DSi - CFW users` folder to the root of your SD card
 - Copy the `_nds` folder to the root of your SD card
 - Copy the `boot.nds` file and the `_nds` folder from the `DSi&3DS - SD card users` folder to the root of your SD card
    - Replace files and merge folders, if asked.

Yes, there are two `_nds` folders. While the first one contained all the TWiLight Menu++ files, those are universal to flashcarts as well. The second `_nds` folder contains DSi/3DS specific files, such as the homebrew version of nds-boostrap.
{: .notice--info}

You have now installed TWiLight Menu++. If you want to run DSiWare, wait for steps on how to run them to appear.

## Usage
- TWiLight Menu++ is an SD card navigator. You can launch the available applications anywhere on the SD cards.
- If files don't appear, they are most likely hidden using the FAT attributes of the filesystem. You can check via Windows or MacOS
   - You can view hidden files on TWiLight Menu++ by enabling the option in the TWiLight Menu++ Settings Application
- To launch GBA applications, you'll need a `bios.bin` file. This can be located either on the root of your SD card, a `gba` folder or a `_gba` folder.
