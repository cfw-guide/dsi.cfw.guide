---
title: "Dumping Cartridges"
redirect_from:
  - /dump-cart
  - /dump-card
---

This section is for dumping cartridges using GodMode9i, so they can be played on emulators, flashcarts or your SD card via nds-bootstrap.

## Requirements
* The cartridge of the title you would like to dump
* Your Nintendo DSi console with [Unlaunch](installing-unlaunch) installed

## Instructions
### Section I - SD card Setup

- Download the latest release of [GodMode9i](https://github.com/RocketRobz/godmode9i/releases/latest)
- Extract `GodMode9i.nds` from the GodMode9i archive and place it anywhere on your SD card

### Section II - Nintendo DSi Instructions
1. Power on your console while holding <kbd>A</kbd> and <kbd>B</kbd>
   - This should launch the Unlaunch Filemenu
1. Launch GodMode9i in the Unlaunch Filemenu
1. Ensure the game cartridge is inserted into the console
1. Select the "NDS GAMECARD" option in GodMode9i
1. Select if you want the padding or not:
  - Full: Padding included
  - Trim: Padding removed
1. Repeat steps 3-5 for all cartridges you wish to dump
The dump will be found in `SD:/gm9i/out`.
