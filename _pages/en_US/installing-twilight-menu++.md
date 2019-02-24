---
title: Installing TWiLight Menu++
redirect_from:
  - /guide/finalizing-setup
  - /finalizing-setup
  - /installing-twlmenu++
  - more/replacing-system-menu
  - replacing-system-menu-with-srloader
  - replacing-system-menu-with-dsimenu++
  - replacing-system-menu-with-twlmenu++
---

{% include toc title="Table of Contents" %}

TWiLightMenu++ is an open-source & customizable alternative to the Nintendo DSi's System Menu. It can be used as a frontend for either nds-bootstrap or supported flashcards. It also provides a unified interface for launching NES, SNES, Gameboy (Color), SEGA GameGear, SEGA Genesis, Nintendo DS & DSiWare titles.

## Downloads

- The latest release of [TWiLight Menu++](https://github.com/RocketRobz/TWiLightMenu/releases){:target="_blank"}

## Instructions

1. Open the TWiLight Menu++ `.7z` file
2. Copy *the contents of* the `SDNAND root` folder in the `DSi - CFW users` folder to the root of your SD card
3. Copy the `_nds` and `roms` folders to the root of your SD card
4. Copy the `_nds` folder and `boot.nds` file from `DSi&3DS - SD card users` folder to the root of your SD card
    - On Windows, merge files when asked to
5. Power on your system
    - TWiLight Menu++ should now be a DSiWare on your system

TWiLight Menu++ should now be on your System Menu, as any other DSiWare would be.

## Usage

1. Copy ROMs to their respective folders
  - Place Gameboy roms in `/roms/gb`
  - Place NDS roms in `/roms/nds`
  - Place NES roms in `/roms/nes`
  - For GBA, make a folder in `roms` named `gba` and place roms there
  - GBA requires a copy of the GBA BIOS named `bios.bin` on the root of your SD card
2. Launch TWiLight Menu++ from the Home Menu
3. You will now see a list of your NDS ROMs
  - Press (A) to launch ROMs
  - Touch the GBA icon, which starts GBARunner2, to run GBA ROMs
  - Touch the HOME icon to return to the DSi Menu
4. (optional) If you have Unlaunch and HiyaCFW, TWiLight Menu++ can completely replace your System Menu. This can help work around several bugs with SD card sizes and the DSiWare block limit.

## (optional) Replacing the System Menu

You must have [Unlaunch](/guide/installing-unlaunch/) and [HiyaCFW](/guide/installing-hiyacfw/) installed before proceeding.
{: .notice--info}

1. Power on your DSi while holding **SELECT**
2. If `Autoboot title` is not checked, navigate to it and press **A**
3. Press **START** to save and continue booting
    - TWiLight Menu++ will appear

TWiLight Menu++ is now your System Menu. If you want to run DSiWare, wait for steps on how to run them to appear.
