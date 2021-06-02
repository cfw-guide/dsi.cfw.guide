---
title: "Dumping Game Cards"
---

This section is for dumping game cards using GodMode9i so they can be played on emulators, flashcards, or your SD card via nds-bootstrap.

## Requirements
* The game card of the title you would like to dump
* Your Nintendo DSi console with [Unlaunch](installing-unlaunch) installed

## Instructions
### Section I - SD card setup

Using a Windows, Linux or macOS device? Use [Lazy DSi Downloader](lazy-dsi-downloader) to automatically setup your SD card.
{: .notice--info}

1. Download the latest release of [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
1. Extract `GodMode9i.nds` from the GodMode9i archive and place it anywhere on your SD card

### Section II - Nintendo DSi instructions
1. Power on your console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd>
   - This should launch the Unlaunch Filemenu
1. Launch GodMode9i from the Unlaunch Filemenu
1. Ensure the game card is inserted into the console
1. Select the "NDS GAMECARD" option in GodMode9i
1. Select if you want the padding or not:
   - Full: Padding included
   - Trim: Padding removed
1. Repeat steps 3-5 for all game cards you wish to dump

The dumped game cards will be found in `sd:/gm9i/out`.
{: .notice--success}
