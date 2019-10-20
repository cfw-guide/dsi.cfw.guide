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

TWiLightMenu++ is an open-source & customizable alternative to the Nintendo DSi's System Menu. It can be used as a frontend for either nds-bootstrap or supported flashcards. It also provides a unified interface for launching NES, SNES, Gameboy (Color), SEGA GameGear, SEGA Genesis, Nintendo DS & DSiWare titles.

## Downloads

- The latest release of [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases){:target="_blank"}

## Instructions

1. Open the TWiLight Menu++ `.7z` file
2. Copy *the contents of* the `SDNAND root` folder in the `DSi - CFW users` folder to the root of your SD card
3. Copy the `_nds` and `roms` folders to the root of your SD card
4. Copy the `_nds` folder and `boot.nds` file from `DSi&3DS - SD card users` folder to the root of your SD card
    - On Windows, merge files when asked to
5. If using HiyaCFW, Power on your system. Otherwise continue on to [Replacing the System Menu](replacing-the-system-menu-if-not-using-hiyacfw)
    - TWiLight Menu++ should now be a DSiWare on your system

## Replacing the System Menu (If not using HiyaCFW)

You must have [Unlaunch](/guide/installing-unlaunch/) installed before proceeding.
{: .notice--info}

1. Power on your DSi while holding **A** and **B**
14. Navigate to `OPTIONS`, and press (A)
15. Press (A) to configure a default software to boot in to when no button is held
16. Navigate to the first `TWiLight Menu++`, and press (A)
  - It should say `sdmc:/boot.nds` on the bottom screen
17. Navigate to `SAVE & EXIT`, and press (A)

TWiLight Menu++ is now your System Menu. If you want to run DSiWare, wait for steps on how to run them to appear.

## Usage

1. Copy ROMs to their respective folders
  - Place Gameboy roms in `/roms/gb`
  - Place NDS roms in `/roms/nds`
  - Place NES roms in `/roms/nes`
  - For GBA, make a folder in the root of your SD named `gba` and place roms there
  - GBA requires a copy of the GBA BIOS named `bios.bin` on the root of your SD card, in `sd:/gba` or in `sd:/_gba`
  - Note: Using these folders in not required, it is simply a recommended way to organize your games
2. Power on your DSi
3. If using HiyaCFW, Launch TWiLight Menu++ from the Home Menu
4. You will now see a list of files and folders in the root of your SD
  - Press (A) to launch ROMs and enter folders
  - Press Select, then choose `Launch GBARunner2` to play GBA games
  - Press Select, then choose `DSi Menu` to go to the DSi Menu
  - You will need to configure your launcher version in TWiLight Menu++ settings if not using HiyaCFW
