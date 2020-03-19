---
title: Installing Unlaunch
redirect_from:
  - /guide/installing-unlaunch
---

{% include toc title="Table of Contents" %}

## Downloads

The source code is not needed. You only need the actual files.
{: .notice--info}

- The latest release of [Unlaunch](https://problemkaputt.de/unlaunch.zip){:target="_blank"}
- The latest release of [HBMenu](https://github.com/devkitPro/nds-hb-menu/releases/){:target="_blank"}
- The latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases){:target="_blank"}
- The latest release of Memory Pit, depending on your DSi firmware version and region
  - [for DSi firmware versions 1.0 - 1.3   (USA, EUR, AUS, JPN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin){:target="_blank"}
  - [for DSi firmware versions 1.4 - 1.4.5 (USA, EUR, AUS, JPN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/768_1024/pit.bin){:target="_blank"}
  - [for DSi firmware versions 1.0 - 1.4.6 (KOR, CHN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin){:target="_blank"}

## Preparing your SD card

- Copy `dumpTool.nds` to your SD card
- Copy `BOOT.NDS` from the `hbmenu` folder in the HBMenu `.tar.bz2` file to the root of your SD card
- Copy Memory Pit (`pit.bin`) to the `private/ds/app/484E494A` folder on your SD card
  - If it doesn't exist, take a photo on the console and copy it to the SD card
- Copy `UNLAUNCH.DSI` from the Unlaunch `.zip` file to your SD card
  - Be sure to rename it to `unlaunch.nds`, to be able to be used with hbmenu

## Launching the exploit

If this method doesn't work, you could use another DSi Exploit (such as [Flipnote Lenny](installing-unlaunch-legacy) instead, provided you have Flipnote Studio.)

1. Open the DSi Camera application
2. Select `SD Card` at the top right
3. Tap `Album`
  - This will launch HBMenu

## Creating a NAND Backup

1. Launch dumpTool.nds
2. Press (A) to begin the NAND dump
  - This will take several minutes (around 7)
  - When it says `Done.` the backup is finished
3. Press Start to exit

SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because fwTool adds additional data to the `nand.bin` file after the SHA1 hash is calculated. You can use the [HiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases){:target="_blank"} to create a copy without the footer.
{: .notice--info}

Store this NAND backup in a safe location; it's a failsafe if you mess up. You would also need it if you'd like to install hiyaCFW.

## Installation
1. Launch `unlaunch.nds`
2. Navigate to `INSTALL NOW`
  - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please read our [FAQ](/faq)
3. When completed, Reboot (power down and power back on) your system in order to verify Unlaunch installed properly.
  - You should now see Unlaunch's management screen

If you see Unlaunch's management screen, you have successfully installed Unalunch. With Unlaunch installed, your system now has primitive brick protection.

---

There are two addons you can install now; hiyaCFW & TWiLight Menu++

- TWiLightMenu++ is an open-source & customizable alternative to the Nintendo DSi's System Menu.  It provides a unified interface for launching NES, SNES, Gameboy (Color), SEGA GameGear, SEGA Genesis, Nintendo DS & DSiWare titles.
- hiyaCFW is a custom firmware that will allow you to install custom titles to your home menu using your SD card as an SDNAND to prevent dangerous writing to the system's internal NAND storage.

Installing one won't affect the install of the other; You can use both simultaneously.

Continue to either [installing TWiLight Menu++](installing-twilight-menu++) or [installing hiyaCFW](installing-hiyacfw)
{: .notice--info}
