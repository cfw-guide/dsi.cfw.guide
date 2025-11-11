# Dumping NAND

This page is for making a NAND backup, which is a copy of the data on the Nintendo DSi's internal storage. It can be used to set up hiyaCFW, as well as no$gba and melonDS for DSi emulation.

::: tip

Make sure the SD card has at least 250MB of free space, or else you'll run into an error message in dumpTool.

:::

::: tip

It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.

:::

## Section I - SD card setup

::: tip

If you have already downloaded dumpTool from another section of this guide, you can skip this section.

:::

1. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Place `dumpTool.nds` anywhere on your SD card


## Section II - Dumping the NAND

1. Launch `dumpTool` through the menu you have installed
    - If you've used an exploit to launch it, and you're already in dumpTool, ignore this step
    - If Unlaunch is already installed and you we're directed to this page from the [Get Started](get-started.html#section-ii-checking-if-unlaunch-is-already-installed) page, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting
1. Hit the <kbd class="face">A</kbd> button on your Nintendo DSi to start dumping your NAND
    - A NAND backup typically takes around 7 minutes
1. When the NAND backup is complete, hit the <kbd>START</kbd> button on your Nintendo DSi to exit dumpTool
1. Power off your console and insert your SD card back into your device
1. On the SD card, go to where `dumpTool.nds` is placed, and you'll see a new folder called `DT######...` which contains the NAND backup
    - If dumpTool is downloaded from the [Get Started](get-started.html) page, it'll be named `boot.nds`
    - Inside the folder is `nand.bin` which is the backup itself, and `nand.bin.sha1` which is the SHA1 hash of the backup
1. Store the `DT######...` folder somewhere safe, where you won't lose it
    - If possible, make multiple backups across different storage devices
    - Once you've backed it up elsewhere, you can delete it from the SD card
1. If you've started dumpTool via an exploit, and was downloaded from the [Get Started](get-started.html) page, delete `boot.nds` from the SD card root

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Choosing a Menu](choosing-a-menu.html)

:::
