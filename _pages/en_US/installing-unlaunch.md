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
- The latest release of [Flipnote ( ͡° ͜ʖ ͡°) ("Flipnote Lenny")](https://davejmurphy.com/͡-͜ʖ-͡/){:target="_blank"}
  - We are only using this archive for fwTool; a copy of Flipnote Studio is **not** required
- The latest release of Memory Pit
  - [for firmware 1.0 - 1.3   (USA, EUR, AUS, JPN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin){:target="_blank"}
  - [for firmware 1.4 - 1.4.5 (USA, EUR, AUS, JPN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/768_1024/pit.bin){:target="_blank"}
  - [for firmware 1.0 - 1.4.6 (KOR, CHN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin){:target="_blank"}

## Preparing your SD card

1. Insert your system's SD card into your device (PC or smartphone)
2. Copy `fwTool.nds` from the `nds` folder in the Flipnote Lenny `.zip` file to the root of your SD card
3. Copy `BOOT.NDS` from the `hbmenu` folder in the HBMenu `.tar.bz2` file to the root of your SD card
4. Copy Memory Pit (`pit.bin`) to the `private/ds/app/484E494A` folder on your SD card
  - If it doesn't exist, take a photo on the console and copy it to the SD card
5. Copy `UNLAUNCH.DSI` from the Unlaunch `.zip` file to the root of your SD card
6. Rename `UNLAUNCH.DSI` to `unlaunch.nds`
7. Eject your SD card, and insert it back into your DSi

## Launching the exploit

If this method doesn't work, you could use [Flipnote Lenny](installing-unlaunch-legacy) instead, provided you have Flipnote Stuido.

1. Open the DSi Camera application
  - If you already have another DSiWare exploit installed, open that and skip to step 4
  - Note that Sudokuhax *cannot* adequately make a backup with the required footer!
2. Select `SD Card` at the top right
3. Tap `Album`
  - This will launch HBMenu

## Creating a NAND Backup

1. Launch `fwTool.nds`
2. Navigate to `Backup DSi NAND`
  - This will take a few minutes
  - When `saved nand.bin.sha1.` appears, the backup is finished
3. Navigate to `Exit`

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

You may now choose whether you would like to install HiyaCFW, or only TWiLight Menu++.

TWiLightMenu++ is an open-source & customizable alternative to the Nintendo DSi's System Menu. It can be used as a frontend for either nds-bootstrap or supported flashcards. It also provides a unified interface for launching NES, SNES, Gameboy (Color), SEGA GameGear, SEGA Genesis, Nintendo DS & DSiWare titles.

HiyaCFW is a custom firmware that will allow you to install custom titles to your home menu using your SD card as an SDNAND to prevent dangerous writing to the system's internal NAND storage.

If you install HiyaCFW you can also install TWiLight Menu++ if you'd like, however HiyaCFW requires you to fill your SD so that less than 2GB are free and will boot slowly on larger cards. Installing HiyaCFW will also require a computer with Windows, macOS, or Linux.

Continue to [Installing only TWiLight Menu++](installing-twilight-menu++)
{: .notice--info}

Continue to [Installing HiyaCFW (and optionally TWiLight Menu++)](installing-hiyacfw)
{: .notice--info}
