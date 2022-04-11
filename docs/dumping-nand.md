---
title: Dumping NAND
---

This page is for making a NAND backup, which is a copy of the data on the Nintendo DSi's internal storage. It can be used to set up hiyaCFW, as well as no$gba and melonDS for DSi emulation.

::: tip

It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.

:::

## Section I - SD card setup

::: tip

Using a Windows, Linux or macOS device? Use [Lazy DSi Downloader](lazy-dsi-downloader.html) to automatically setup your SD card.

:::

1. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Place `dumpTool.nds` anywhere on your SD card

## Section II - Dumping the NAND
1. Launch `dumpTool` through TWiLight Menu++
1. Hit the <kbd class="face">A</kbd> button on your Nintendo DSi to start dumping your NAND
   - A NAND backup typically takes around 7 minutes
1. When the NAND backup is complete, hit the <kbd>START</kbd> button on your Nintendo DSi to exit dumpTool
1. Power off your console and insert your SD card back into your device
1. Store this backup somewhere safe, where you won't lose it
   - If possible, make multiple backups across different storage devices
   - Once you've backed it up elsewhere, you can delete it from the SD card

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional, not compatible with Nintendo DSi development consoles)

:::
