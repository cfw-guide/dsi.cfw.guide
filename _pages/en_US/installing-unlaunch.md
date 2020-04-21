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
- The latest release of [GodMode9i](https://github.com/RocketRobz/GodMode9i/releases){:target="_blank"}
- The latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases){:target="_blank"}
- The latest release of Memory Pit, depending on your DSi firmware, version and region.
  - [for DSi firmware versions 1.0 - 1.3   (USA, EUR, AUS, JPN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin){:target="_blank"}
  - [for DSi firmware versions 1.4 - 1.4.5 (USA, EUR, AUS, JPN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/768_1024/pit.bin){:target="_blank"}
  - [for DSi firmware versions 1.0 - 1.4.6 (KOR, CHN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin){:target="_blank"}

## Preparing your SD card

To extract contents from an archive, you can use 7-Zip or a website extractor

- Copy `dumpTool.nds` anywhere on your SD card.
- Extract `GodMode9i.nds` from the GodMode9i archive, rename it to `BOOT.NDS` and copy it to the root of your SD card.
- Copy Memory Pit (`pit.bin`) to the `private/ds/app/484E494A` folder on your SD card.
   - You may create the folder if it doesn't exist.
- Extract `UNLAUNCH.DSI` from the Unlaunch archive and copy it anywhere your SD card.

## Launching the exploit

1. Boot your Nintendo DSi with your SD card inserted and launch the DSi Camera application.
2. Select `SD Card` at the top right.
3. Tap `Album`.

If Memory Pit worked successfully, you should be in GodMode9i, a homebrew that allows you to manage your SD card.

However, if using Memory Pit didn't work, you could use other DSi exploit provided you have their respective application. One example of such is [Flipnote Lenny](installing-unlaunch-legacy) (discovered by shutterbug2000 and implemented by WinterMute), but it requires Flipnote Studio installed on your system.
{: .notice--info}

## Creating a NAND Backup
The Nintendo DSi internal memory is commonly refered to as NAND. Taking a NAND backup is important, as in the next section, you will be modifying it to install an exploit. In case it goes wrong, you can use a hardware modification of your system to restore it to a working state. A NAND backup is also required for hiyaCFW installation.

1. Navigate your SD card using GodMode9i to find and launch `dumpTool.nds`.
2. Follow the on-screen prompt to begin the NAND backup.
  - This will take several minutes (around seven). Please be patient.
3. Hit the `START` button on your Nintendo DSi to exit when it is completed.
  - If it shuts down your system, it's to be expected. Launch the exploit again (using the steps above) but head to the next section.

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a NO$GBA footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [HiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases){:target="_blank"} to create a copy without the footer.
{: .notice--info}

## Installing Unlaunch
1. Navigate your SD card using GodMode9i to find and launch `UNLAUNCH.DSI`.
2. Navigate to `Install now`.
  - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please read our [FAQ](/faq)
3. When completed, reboot (power down and power back on) your system in order to verify Unlaunch installed properly.
  - You should now see Unlaunch's management screen

If you see Unlaunch's management screen, you have successfully installed Unalunch. With Unlaunch installed, your system now has primitive brick protection as well as a way to run unsigned applications without Memory Pit.

By following this guide, you also now have a tool for backing up your system NAND (which is always helpful if you mess up) and a tool just like GodMode9 for the Nintendo 3DS.

If you'd like for Unlaunch to load into the DSi Menu instead of Unlaunch's homebrew launcher, check the [FAQ](https://dsi.cfw.guide/faq#how-do-i-change-what-booting-my-console-boots-me-into-when-i-have-installed-unlaunch).
{: .notice--info}

You can now invert the change made to pit.bin (by either deleting or reverting if you have a backup of your previous pit.bin). You can also rename `BOOT.NDS` if it conflicts with any of your other homebrew. Unlaunch's installer is useful to keep onto the SD card in case you'd like to uninstall Unlaunch but you could always re-download it later. It's up to you if you'd like to keep the Unlaunch file there.
{: .notice--info}

---

There are two optional addons you can install now; hiyaCFW & TWiLight Menu++

- TWiLightMenu++ is an open-source & customizable alternative to the Nintendo DSi's System Menu. It provides a unified interface for launching NES, SNES, Gameboy (Color), SEGA GameGear, SEGA Genesis, Nintendo DS & DSiWare titles.
- hiyaCFW is a custom firmware that will allow you to install custom titles to your home menu using your SD card as an SDNAND to prevent dangerous writing to the system's internal NAND storage.

Installing one won't affect the install of the other; You can use both simultaneously.

Continue to either [installing TWiLight Menu++](installing-twilight-menu++) or [installing hiyaCFW](installing-hiyacfw)
{: .notice--info}
