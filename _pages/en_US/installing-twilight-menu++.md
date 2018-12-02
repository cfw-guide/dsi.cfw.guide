---
title: Installing TWiLight Menu++
redirect_from:
  - /guide/finalizing-setup
  - /finalizing-setup
  - /installing-twlmenu++
---

TWiLight Menu++ is a homebrew application that can launch homebrew and retail ROMs, and has several emulators built in.

## Downloads

- The latest release of [TWiLight Menu++](https://github.com/RocketRobz/TWiLightMenu/releases){:target="_blank"}

## Instructions

1. Insert your SD card into your PC
2. Copy *the contents of* `CFW - SDNAND root` from the TWiLight Menu++ `.7z` file to the root of your SD card
3. Copy the `_nds` and `roms` folders from the TWiLight Menu++ `.7z` file to the root of your SD card
4. Unplug your SD card, and insert it in your DSi
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
4. (optional) TWiLight Menu++ can completely replace your System Menu. This can help work around several bugs with SD card sizes and the DSiWare block limit.
  - [Replacing System Menu](replacing-system-menu-with-twlmenu++)
