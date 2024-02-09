---
title: FAQ
---

## Should I do a system update?
It is **not** recommended to update your DSi unless you know there are purchased DSiWare. While it still possible to follow this guide if you do so, the only benefit to updating is the ability to access the Nintendo DSi Shop to redownload already purchased titles. All other benefits, such as Facebook integration in the Nintendo DSi Camera application, are no longer usable or are not significant enough to justify the downsides:

- Installing System Updates is known to occasionally **brick** consoles, with roughly the same frequency as when installing Unlaunch
- Older exploits are no longer possible to use, which may be required if you are unable use the recommended exploits
- Flashcard compatibility is reduced, however this is bypassed if you install Unlaunch

## Which is the best exploit?
Unlaunch is overall the best exploit for the DSi, with the only downside being that there is a minor brick risk on install. In general it's recommended to use Memory Pit to install Unlaunch. If you want to avoid any risk it's recommended to instead use Flipnote Lenny as it has fewer issues in homebrew than Memory Pit while being just as safe and simple to remove. Below is a list of the pros and cons of each exploit:

### Memory Pit
Pros:
- Quick and easy to use
- No risk of damaging the console, uninstalling is as simple as removing the SD or deleting one file
- Compatible with all DSi consoles unless they have a broken camera and haven't completed the camera tutorial

Cons:
- Requires loading the DSi Camera application every time you want to access homebrew
- Incompatible with certain DSi mode titles and homebrew due to WRAM only being open to the ARM7 CPU
- Access to Slot-1 (the DS Game Card) is blocked in homebrew
- Access to the DSP is blocked resulting in worse sound in GBARunner2
- Photos on the SD card cannot be viewed in the DSi Camera application while Memory Pit is installed, as this is the trigger for the exploit
    - The only way to view SD card photos while Memory Pit is installed, is to launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap (v0.61.3 or later)

### stylehax
Pros:
- Better compatibility with DSi mode titles and homebrew than Memory Pit
- Easy to use
- No risk of damaging the console
- Useable on consoles with broken camera
- Better sound in GBARunner2

Cons:
- Requires internet access
- Requires loading the DSi Browser every time you want to access homebrew, slightly more time consuming than Memory Pit
- Access to Slot-1 (the DS Game Card) is blocked in homebrew

### Flipnote Lenny
Pros:
- Better compatibility with DSi mode titles and homebrew than Memory Pit
- No risk of damaging the console, uninstalling is as simple as removing the SD or deleting one folder
- Useable on consoles with broken camera
- Better sound in GBARunner2

Cons:
- Requires loading Flipnote Studio every time you want to access homebrew, slightly more time consuming than Memory Pit
- Access to Slot-1 (the DS Game Card) is blocked in homebrew

### Unlaunch
Pros:
- Allows loading homebrew and DSiWare immediately on system boot, with optional button hotkeys
- Full access to the system without any restrictions, including:
    - Access to Slot-1 allowing dumping Game Cards and loading incompatible flashcards
    - Better sound in GBARunner2
- Removes region locks on DSi-Enhanced/Exclusive Game Cards
- Protection against most ways a DSi could brick
- DSi-Enhanced games can be run in DSi mode without a Donor ROM
- Old homebrew can be run via nds-bootstrap-hb

Cons:
- Very minor risk of **bricking** the console when installing
- Another, slightly higher, risk of bricking if you decide to [uninstall it](uninstalling-unlaunch.html)
- Not compatible with development consoles

## Will I lose any functionality by modding my system?
If you install Unlaunch or use Flipnote Lenny, no functionality will be lost. If you use Memory Pit, you will be unable to view photos on the SD card using the DSi Camera, unless you launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap.
- To regain the ability to view your SD card photos when launching the DSi Camera from the DSi Menu, install Unlaunch or switch to a different exploit, then delete Memory Pit's `pit.bin` file
    - If `tip.bin` exists in the same folder, rename it back to `pit.bin`

## How do I play Nintendo DS Game Card dumps?
Playing Game Card dumps on the console requires the use of a flashcard or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting Slot-1 reads and writes to it.
- With TWiLight Menu++ you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using TWiLight Menu++ are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. In other words, you can drop your ROM files directly and play without any setup. There is no 39 title limit, neither hiyaCFW or Unlaunch are required and there are no restrictions on SD card free space you can have
- hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) guide on the DS-Homebrew Wiki, but it has some limitations. There is a hard limit of 39 titles, and they are less convenient to make than using TWiLight Menu++
    - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## How do I update my homebrew?
- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](installing-unlaunch.html) page
    - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card from the [updated release](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
    - If you use TWiLight Menu++, there is a high chance that the latest nds-bootstrap release is included with TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

Other homebrew might use other methods to update.

## I am new or I would like to redo my setup. Where do I start?
- If you have not already modified your console or are looking to update Unlaunch on your system, we recommend starting from the beginning of the guide and following through the pages. Be sure to read everything on the homepage
- If you have the latest version Unlaunch, follow the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) to set up TWiLight Menu++ on your system

## How can I remove parental controls?
- The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls

## Can I change my Nintendo DSi's region?
Yes, there are a few different methods depending on what you want to change:
- The safest and simplest method is to simply install TWiLight Menu++, it can use any official language and more without needing NAND modifications
- If you want to actually change the system region and are using hiyaCFW, open the config menu, and change the region setting (not possible with CHN and KOR NANDs)
    - If this breaks touch input, revert the region setting back to the original, and you can instead use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) for Asian DSi systems. For American DSi systems use [this version of hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## What happened to the hiyaCFW installation guide?
Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).
- If you were linked to the page in question from another guide, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects

## What happened with Lazy DSi Downloader? How do I install CFW without it?
Lazy DSi Downloader was a program that essentially allowed you to skip the manual setup process by downloading and placing the necessary files and folders on your SD card. However, due to the way it was programmed and distributed, many users encountered various issues and ended up having to do the manual set up, as it was quicker and/or easier than fixing whatever was causing the issue.

To avoid more users encountering these issues, we no longer recommend using Lazy DSi Downloader, and instead [doing the manual setup](get-started.html) is the recommended way to go.
- If you were linked to this guide by a third party that recommended using Lazy DSi Downloader, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects.

## What kind of SD card should I use?
- You should buy an SD card from a trusted brand
- A full-size SD card or a microSD card with an adapter will both work
- Any capacity between 1 GB and 2 TB will work. For general usage, 8 GB is enough
    - Some software, such as hiyaCFW, may experience incrementally longer loading times with larger SD card capacities
- Speed class 8 or higher is recommended

## Can I use my DSi SD card on other systems?
Generally, yes, with two exceptions:
- hiyaCFW will only work on the system it was set up for
- Even if you are using nds-bootstrap or a flashcard, friend codes in online NDS games will be reset when attempting to go online using a different console

## How do I switch to a new SD card after setting up homebrew?
Format your new SD card using the [SD Card Setup](sd-card-setup.html) instructions, then simply move your data from the old SD card to the new one.

## Can I still use my system normally without the SD card inserted after setting up homebrew?
Yes. If you did not install Unlaunch, your system will remain completely unmodified. If you *did* install Unlaunch, you may need to [configure Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) to automatically boot the original DSi Menu under specified conditions.

## The [Unlaunch page](https://problemkaputt.de/unlaunch.htm) says that version 2.0 is not known to be safe. Should I use a previous version instead?
The Unlaunch page has not been updated since version 2.0 was released, which was over two years ago. The vast majority of users experience no issues with this version, so it is considered safe.


## How do I run dumped DSiWare?
The recommended method is to simply launch them with TWiLight Menu++, due to the simple drag-and-drop method and there being no arbitrary limit. When nds-bootstrap is set as the launch method, it also gains the benefits of cheats and screenshots, as well as any other benefit provided by the in-game menu.

However, for the few titles that are incompatible, you can use [NTM](https://github.com/Epicpkmn11/NTM/releases) to install them on either internal memory or [hiyaCFW's SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing). In addition to lacking the benefits above, there is also a limit of 39 titles that cannot exceed 128 MiB/1,024 blocks in size. For SysNAND, there is also a very small risk of bricking the system when writing to the internal NAND.
