---
title: Getting Started
redirect_from:
  - /guide/installing-unlaunch
---

{% include toc title="Table of Contents" %}

## Introduction

This guide will start with an stock Nintendo DSi, and end with a DSi running _Unlaunch_, allowing you to install custom software. We will be using the following software:

### Unlaunch

_Unlaunch_ is a bootrom exploit for the Nintendo DSi. This enables the ability to install and run third-party software on the DSi.  
After successfully running _Unlaunch_, you may install additional software to control the unlocked features of your device. Among the most popular are _HiyaCFW_ and _TWiLight Menu++_.

### HiyaCFW

_HiyaCFW_ is custom firmware for the DSi. Essentially, this allows you to boot the DSi operating system entirely from an SD card. The advantages of this are as follows:

- Safety. _Unlaunch_ enables the ability to write to the onboard storage on the DSi (NAND-type flash storage). However, NAND storage is notoriously volatile, and subsequent writes to this type of storage increases the likelihood of bricking your device. _HiyaCFW_ prevents this by booting the DSi main menu from an SD card.
- _HiyaCFW_ enables you to display a custom splash screen on system boot
- Additionally, _HiyaCFW_ installs the latest version of _TWiLight Menu++_ for you upon installation, if you desire.

### TWiLight Menu++

_TWiLight Menu++_ is an open-source homebrew application that can act as a home menu replacement. It has many additional features, such as custom themes and file management.  
_TWiLight Menu++_ is also the easiest way to launch retail ROMs from an SD card. All games are normally launched via the game slot (Slot-1), and _TWiLight Menu++_ handles redirecting the system to your own SD card to launch games.

## Downloads

To perform the exploit, you'll need the following loaded onto an SD card:

- The latest release of [Unlaunch](https://problemkaputt.de/unlaunch.zip){:target="\_blank"}
- The latest release of [GodMode9i](https://github.com/RocketRobz/GodMode9i/releases){:target="\_blank"}
- The latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases){:target="\_blank"}
- The latest release of Memory Pit, depending on your DSi firmware, version and region.
  - [for DSi firmware versions 1.0 - 1.3 (USA, EUR, AUS, JPN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin){:target="\_blank"}
  - [for DSi firmware versions 1.4 - 1.4.5 (USA, EUR, AUS, JPN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/768_1024/pit.bin){:target="\_blank"}
  - [for DSi firmware versions 1.0 - 1.4.6 (KOR, CHN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin){:target="\_blank"}

## Preparing your SD card

- IMPORTANT: Please check [The FAQ Section](https://dsi.cfw.guide/faq) to make sure your SD card is formatted and sized correctly.
- Copy `dumpTool.nds` anywhere on your SD card.
- Copy `GodMode9i.nds` to the root of your SD card, and rename it to `BOOT.NDS`.
- Create the folder `/private/ds/app/484E494A`.
- Copy Memory Pit (`pit.bin`) to the `private/ds/app/484E494A` folder.
- Copy `UNLAUNCH.DSI` to anywhere on your SD card.

## Launching the exploit

1. With the SD card inserted, start your DSi.
2. Open the DSi Camera application.
3. Select `SD Card` at the top right.
4. Tap `Album`.

If Memory Pit worked successfully, you should be in GodMode9i, a homebrew that allows you to manage your SD card. Even though it displays retail `.nds` files, those require a loader (like nds-bootstrap) to launch them.

If using Memory Pit doesn't work, you could try using other DSi exploits. One example of such is [Flipnote Lenny](installing-unlaunch-legacy) (discovered by shutterbug2000 and implemented by WinterMute), but it requires Flipnote Studio installed on your system.
{: .notice--info}

## Creating a NAND Backup

As previously discussed, NAND is the onboard system storage in your DSi. It contains all boot and OS files needed to run your device. We'll create a backup of this NAND for safety, and to be used by HiyaCFW

1. Navigate your SD card using GodMode9i to find and launch `dumpTool.nds`.
2. Follow the on-screen prompt to begin the NAND backup.

- This will take several minutes (around seven). Please be patient.

3. Hit the `START` button on your Nintendo DSi to exit when it is completed.

- If it shuts down your system, it's to be expected. Launch the exploit again (using the steps above) but head to the next section.

Copy this NAND backup (`nand.bin`) to your computer and store it in a safe location; it's a failsafe if you mess up. You would also need it if you'd like to install hiyaCFW.
{: .notice--warning}

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a NO\$GBA footer to the `nand.bin` file after the SHA1 hash is calculated (that `nand.bin` file can then be used with HiyaCFW). You can use the [HiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases){:target="\_blank"} to create a copy without the footer, if you want.
{: .notice--info}

## Installing Unlaunch

1. Navigate your SD card using GodMode9i to find and launch `UNLAUNCH.DSI`.
2. Navigate to `Install now`.

- If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please read our [FAQ](/faq)

3. When completed, reboot (power down and power back on) your system in order to verify Unlaunch installed properly.

- You should now see Unlaunch's management screen

If you see Unlaunch's management screen, you have successfully installed Unalunch. With Unlaunch installed, your system now has primitive brick protection as well as a way to run unsigned applications without Memory Pit.

By following this guide, you also now have a tool for backing up your system NAND (which is always helpful if you mess up) and a tool just like GodMode9 for the Nintendo 3DS.

If you'd like for Unlaunch to load into the DSi Menu instead of Unlaunch's homebrew launcher, check the FAQ.
{: .notice--info}

You can now invert the change made to pit.bin (by either deleting or reverting if you have a backup of your previous pit.bin). You can also rename `BOOT.NDS` if it conflicts with any of your other homebrew. Unlaunch's installer is useful to keep onto the SD card in case you'd like to uninstall Unlaunch but you could always re-download it later. It's up to you if you'd like to keep the Unlaunch file there.
{: .notice--info}

---

You may now proceed with installinig HiyaCFW and/or TWiiLightMenu++

Installing one won't affect the install of the other; You can use both simultaneously, and the _HiyaCFW_ helper installs both for you.

Continue to either [installing TWiLight Menu++](installing-twilight-menu++) or [installing hiyaCFW](installing-hiyacfw)
{: .notice--info}
