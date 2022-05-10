---
title: 常见问题
---

## Should I do a system update?
No. The Nintendo DSi is able to run homebrew on any version, including the latest, however there is no benefit to updating. The DSi Shop has been taken fully offline, the DSi Camera's Facebook integration is long dead, and the only other thing updates did was block flashcards. There is also an, extremely small, risk of **bricking** your DSi when doing a system update, likely the same as the risk when installing Unlaunch.

## Which is the best exploit?
Unlaunch is overall the best exploit for the DSi, with the only downside being that there is a minor brick risk on install. In general it's recommended to use Memory Pit (as it's the simplest and most compatible exploit) to install Unlaunch, however if you decide you want to avoid any risk it's recommended to instead use Flipnote Lenny as using Memory Pit can cause issues in certain cases. Below is a list of the pros and cons of each exploit:

### Memory Pit
Pros:
- Quick and easy to use
- No risk of damaging the console, uninstalling is as simple as removing the SD or deleting one file
- Compatible with all DSi consoles unless they have a broken camera and haven't completed the camera tutorial

Cons:
- Requires loading the DSi Camera application every time you want to access homebrew
- Incompatible with certain DSi mode titles and homebrew due to WRAM only being open to the ARM7 CPU and some memory past the first 4 MB being write protected
- Access to Slot-1 (the DS Game Card) is blocked
- Access to the DSP is blocked resulting in worse sound in GBARunner2
- Photos on the SD card cannot be viewed in the DSi Camera application while Memory Pit is installed, as this is the trigger for the exploit

### Flipnote Lenny
Pros:
- Better compatibility with DSi mode titles and homebrew than Memory Pit
- No risk of damaging the console, uninstalling is as simple as removing the SD or deleting one folder
- Better sound in GBARunner2

Cons:
- Requires Flipnote Studio
- Requires loading Flipnote Studio every time you want to access homebrew, slightly more time consuming than Memory Pit
- Access to Slot-1 (the DS Game Card) is blocked

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
If you install Unlaunch or use Flipnote Lenny no functionality will be lost. If you use Memory Pit you will be unable to view photos on the SD card using the DSi Camera application while Memory Pit is installed. To regain the ability to view your SD card photos install Unlaunch or switch to a different exploit, then delete Memory Pit's `pit.bin` file.

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
- If you want to actually change the system region and are using hiyaCFW, you can use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## What happened to the hiyaCFW installation guide?
Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).
- If you were linked to the page in question from another guide, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects

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

## The [Unlaunch page](https://problemkaputt.de/unlaunch.htm) says that version 2.0 is not known to be safe. Should I use a previous version instead?
The Unlaunch page has not been updated since version 2.0 was released, which was over two years ago. The vast majority of users experience no issues with this version, so it is considered safe.
