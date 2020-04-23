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
- The latest release of Memory Pit, depending on your Nintendo DSi firmware version and region.
  - [for versions 1.0 - 1.3   (USA, EUR, AUS, JPN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin){:target="_blank"}
  - [for versions 1.4 - 1.4.5 (USA, EUR, AUS, JPN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/768_1024/pit.bin){:target="_blank"}
  - [for versions 1.0 - 1.4.6 (KOR, CHN)](https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin){:target="_blank"}

To check your version and region, check the System Settings application.

## Preparing your SD card

Make sure your SD card is [formatted correctly](faq/#what-are-the-sd-card-requirements).
{: .notice--info}

To extract contents from an archive, you can use 7-Zip or a website extractor.

- Copy `dumpTool.nds` anywhere on your SD card.
- Extract `GodMode9i.nds` from the GodMode9i archive, rename it to `BOOT.NDS` and copy it to the root of your SD card.
- Copy Memory Pit (`pit.bin`) to the `private/ds/app/484E494A` folder on your SD card.
   - You may create the folder if it doesn't exist.
- Extract `UNLAUNCH.DSI` from the Unlaunch archive and copy it anywhere your SD card.

## Launching the exploit

Memory Pit requires you to have access to the SD card Album on the Nintendo DSi Camera application. If you have a broken camera and are treated to a tutorial when launching the camera, Memory Pit would be unusable on your system. You could use another exploit, provided you have the respective application.

- [Flipnote Lenny](installing-unlaunch-legacy) is an exploit which takes advantage of a bug in Flipnote Studio (an application preinstalled on most Nintendo DSi systems).
- If you are on an older Nintendo DSi firmware, you have access to save game exploits for a select [list of games](https://dsibrew.org/wiki/DSi_exploits#DSiWare(True_DSi-Mode)_Exploits).
  - Petit Compwner will not work, as it requires you to scan QR codes. If you're able to scan the QR codes, you should be able to use Memory Pit.

1. Boot your Nintendo DSi and launch the DSi Camera application.
2. With your SD card inserted into your console, select the SD Card icon on the top right.
 - If you recieve a message saying your SD card isn't inserted, please use another SD card.
 - If you recieve a message saying that your SD card cannot be used, please make sure your SD card is [formatted correctly](faq/#what-are-the-sd-card-requirements).
3. Select your SD card's camera album.
 - If you copied Memory Pit correctly, the system should flash magenta

If your SD card was properly setup, the top screen should now display the GodMode9i logo. GodMode9i is a homebrew that allows you to manage your SD card and to boot into Nintendo DSi Homebrew applications (they will have the `.nds` or `.dsi` file extension).

If your Nintendo DSi flashes magenta but the top screen turns green while the bottom is white, then you do not have `BOOT.NDS` on the root of your SD card.
{: .notice--warning}

## Creating a NAND Backup
The Nintendo DSi internal memory is commonly refered to as NAND. Taking a NAND backup is important, as in the next section, you will be modifying it to install Unlaunch. In case it goes wrong, you can use a hardware modification of your system to restore it to a working state.
- A NAND backup is also required for hiyaCFW installation.

1. Navigate your SD card using GodMode9i to find and launch `dumpTool.nds`.
2. Follow the on-screen prompt to begin the NAND backup.
  - This will take several minutes (around seven). Please be patient.
3. Hit the `START` button on your Nintendo DSi to exit when it is completed.
  - If it shuts down your system, it's to be expected. Launch the exploit again (using the steps above) but head to the next section.

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a NO$GBA footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases){:target="_blank"} to create a copy without the footer.
{: .notice--info}

## Installing Unlaunch
1. Navigate your SD card using GodMode9i to find and launch `UNLAUNCH.DSI`.
2. Select the install option.
  - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please read our [FAQ](/faq)
3. When completed, reboot (power down and power back on) your system in order to verify Unlaunch installed properly.
  - You should now see Unlaunch's management screen

If you see Unlaunch's management screen at this point, you have successfully modded your Nintendo DSi.

If you'd like for Unlaunch to load into the DSi Menu instead of Unlaunch's homebrew launcher, check the [FAQ](https://dsi.cfw.guide/faq#how-do-i-change-what-booting-my-console-boots-me-into-when-i-have-installed-unlaunch).
{: .notice--info}

- Keeping Memory Pit (`pit.bin`) is unnecessary since you now have a stabler way to launch Nintendo DSi Homebrew. You can now delete it or restore a backup to a pit.bin file you've made before.
- Keeping GodMode9i is nice to have but is not a requirement. We recommend renaming it back to `GodMode9i.nds`, to prevent it from conflicting with other Nintendo DS homebrew you may come across.
- Keeping Unlaunch's installer (`UNLAUNCH.DSI`) is not a requirement but recommended. You will need to use Unlaunch's installer to uninstall Unlaunch if you ever would like to revert your console back to stock

---

There are two optional addons you can install now; hiyaCFW & TWiLight Menu++

- TWiLightMenu++ is an open-source homebrew application that can act as a replacement to the Nintendo DSi System Menu. It provides a customizable unified interface for launching a variety of titles on your SD card.
- hiyaCFW is a custom firmware allowing for System NAND to SD card redirection, allowing for easy installation of homebrew on your DSi Menu. You can setup a boot splash, where you can pick an image to display on system bootup.

Installing one won't affect the install of the other; You can use both simultaneously. Additionally, there's an option in hiyaCFW helper (the tool used to help users install hiyaCFW) to install TWiLight Menu++.

Continue to either [installing TWiLight Menu++](installing-twilight-menu++) or [installing hiyaCFW](installing-hiyacfw)
{: .notice--info}
