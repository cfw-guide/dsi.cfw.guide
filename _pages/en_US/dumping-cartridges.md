---
title: "Dumping Cartridges"
redirect_from:
  - /dump-cart
  - /dump-card
---

This is an add-on section for dumping cartridges using GodMode9i, useful for loading the cartridge data on emulators, flashcarts or your SD card via nds-bootstrap.

## Requirements
* The cartridge of the title you would like to dump
* Your Nintendo DSi console with [Unlaunch](installing-unlaunch) installed

## Instructions
### Section I - SD card Setup

- Download the latest release of [GodMode9i](https://github.com/RocketRobz/godmode9i/releases/latest)
- Extract `GodMode9i.nds` from the GodMode9i archive and place it anywhere on your SD card

### Section II - Nintendo DSi Instructions

1. Power on your console while holding **(A)** and **(B)**
   - This should launch the Unlaunch Management Menu
1. Ensure the game cartridge is inserted into the console
1. Launch GodMode9i in the Unlaunch Menu
1. Select the cartridge option in GodMode9i
1. Select if you want the padding or not:
  - Full: Padding included
  - Trim: Padding removed

The dump will be found in `SD:/gm9i/out`.
