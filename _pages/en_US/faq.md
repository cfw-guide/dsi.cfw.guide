---
title: "FAQ"
redirect_from:
  - help/faq
---
{% include toc title="Questions" %}

### What functionality will I lose by modding my system?
- If you decide to install Unlaunch, you will not lose any system functionality
- If you go with a memory-pit only setup, you will be unable to save photos to the SD card via the Nintendo DSi Camera application while the exploit is installed. Either switch to an [alternative exploit](alternate-exploits) or [install Unlaunch](/installing-unlaunch)

This is because the metadata file (`pit.bin`) is overwritten with the Memory Pit exploit.

### How do I play Nintendo DS cartridge dumps?
Playing cartridge dumps on the console requires the use of a flashcart or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting slot-1 reads and writes to it.
- With TWiLight Menu++ you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using TWiLight Menu++ are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. In other words, you can drop your ROM files directly and play without any setup. There is no 39 title limit, neither hiyaCFW or Unlaunch are required and there are no restrictions on SD card free space you can have
- hiyaCFW users can create [forwarders](nds-bootstrap-forwarders) for the SDNAND's DSi Menu, but it has some limitations. There is a hard limit of 39 titles, they are less convenient to make and they do not automatically patch Anti-Piracy

### How do I update my homebrew?
- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](/installing-unlaunch) page
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card from the [updated release](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [GitHub wiki](https://github.com/DS-Homebrew/TWiLightMenu/wiki/updating-%28dsi%29)
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
   - If you use TWiLight Menu++, there is a high chance that the latest nds-bootstrap release is included with TWiLight Menu++
- **GodMode9i, dumpTool, MakeForwarder, etc** - Follow the instructions used to download them

Other homebrew might use other methods to update.

### I am new or I would like to redo my setup. Where do I start?
- If you have not already modified your console or are looking to update Unlaunch without using hiyaCFW on your system, we recommend starting from the beginning of the guide and following through the pages. Be sure to read everything on the homepage
- If you have the latest version Unlaunch but do not want hiyaCFW, follow Section 1b of [Launching the Exploit](launching-the-exploit#twilight-menu) to set up TWiLight Menu++ on your system
- If you have Unlaunch already and would like to install hiyaCFW, follow the [Installing hiyaCFW](installing-hiyacfw) page, then return to the [Installing Unlaunch](installing-unlaunch) page to update Unlaunch
   - hiyaCFW Helper, the tool used for installing hiyaCFW, comes with the option to install TWiLight Menu++. There is no need for installing TWiLight Menu++ separately
   - Subsequently, since we use TWiLight Menu++ to launch the Unlaunch installer, that's why we update Unlaunch after we set up hiyaCFW
