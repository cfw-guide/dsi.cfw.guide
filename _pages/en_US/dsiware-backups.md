---
title: DSiWare Backups
redirect_from:
  - more/dumping-dsiware-from-3ds
  - more/dumping-dsiware
  - dsiware
  - more/installing-dsiware
  - installing-dsiware
---

{% include toc title="DSiWare Backups" %}

## Requirements
- The latest version of [GodMode9i](https://github.com/RocketRobz/godmode9i/releases/latest)
   - Download the archive, extract the contents and place `GodMode9i.nds` anywhere on your SD card
- A Nintendo DSi console with [Unlaunch](/unlaunch) installed

## Nintendo DSi - Instructions

### Section I - Identifying the path to the .app file
1. Boot your Nintendo DSi console by holding <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
   - This should take you to the Unlaunch Filemenu
1. Identify your application in the list
   - A light green entry means that they are installed to NAND

When you hover over the entry, the bottom screen should show the path. Take note of the path.

An example path would be `nand:/title/0030005/484e4a45/content/00000003.app`
{: .notice--info}

### Section II - Extracting the file
1. Launch GodMode9i from the Unlaunch Filemenu
1. Navigate to SYSNAND, then navigate through the path you took note of above
1. Highlight the `.app` file, then press <kbd class="l">L</kbd> to add it to the clipboard
   - Repeat this for all files you wish to copy to the same directory
1. Navigate your SD card to the directory where you'd like to place the dumped DSiWare title
1. Press <kbd class="face">Y</kbd> to paste the dumped DSiWare title in the directory you are currently navigating

You should now see the DSiWare title in either TWiLight Menu++ or the Unlaunch Filemenu.
