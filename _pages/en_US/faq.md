---
title: "FAQ"
redirect_from:
  - help/faq
---
{% include toc title="Questions" %}

### What does a white screen in certain homebrew mean?
This could possibly be an SD card error. Please make sure you have [checked your SD card for errors](sd-card-setup).

### What functionality will I lose by modding my system?
- If you decide to install Unlaunch, you will not lose any system functionality
- If you go with a memory-pit only setup, you will be unable to save photos to the SD card via the Nintendo DSi Camera application while the exploit is installed. Either switch to an [alternative exploit](alternative-exploits) or [install Unlaunch](/installing-unlaunch).

This is because the metadata file (`pit.bin`) is overwritten with the Memory Pit exploit.

### How can I dump my cartridges?
To dump your cartridges for use with emulators, nds-bootstrap or flashcarts, follow [this guide](dumping-cartridges).

### How do I play Nintendo DS cartridge dumps?
Playing cartridge dumps on the console requires the use of a flashcart or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting slot-1 reads and writes to it.
- With TWiLight Menu++ you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using TWiLight Menu++ are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. In other words, you can drop your ROM files directly and play without any setup. There is no 39 title limit, neither hiyaCFW or Unlaunch are required and there are no restrictions on SD card free space you can have.
- hiyaCFW users can create [forwarders](nds-bootstrap-forwarders) for the SDNAND's DSi Menu, but it has some limitations. There is a hard limit of 39 titles, they are less convenient to make and they do not automatically patch Anti-Piracy.

### How can I restore my NAND backup without Unlaunch?
You can follow Gadorach's [hardmodding guide](https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/) to hardmod your DSi. Previous soldering experience is required.

### How do I update my Nintendo DSi Homebrew?
- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](/installing-unlaunch) page
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card
- **TWiLight Menu++** - Follow Section 1b of [Launching the Exploit](launching-the-exploit#twilight-menu)
  - If you are moving from DSiMenu++ or SRLoader, rename `sd:/_nds/SRLoader` or `sd:/_nds/DSiMenuPlusPlus` to `sd:/_nds/TWiLightMenu` & delete `53524C41` (and `534C5254`, if exists) at `sd:/title/00030015`
  - Starting with v6.8.3, DS game saves are stored in a `saves` folder in the exact same location as the DS (`.nds`) ROMs. Please move them to that folder before updating
  - Starting with v12.0.0, please convert any photos for the DSi theme to `.png`
  - The Wood UI (aka Acekard) theme has been temporarily removed, due to bugginess.
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
  - If you use TWiLight Menu++, there is a high chance that the latest nds-bootstrap release is included with TWiLight Menu++
- **GodMode9i, dumpTool, MakeForwarder, etc** - Follow the instructions used to download them

Keep in mind we can only guarantee the DSi Homebrew listed on our website. Other homebrew might use other methods to update.

### I am new or I would like to redo my setup. Where do I start?
- If you had not already modified your console or are looking towards updating Unlaunch while not using hiyaCFW on your system, we recommend starting from the beginning of the guide and following through the pages. Be sure to read everything on the homepage.
- If you have the latest version Unlaunch but do not want hiyaCFW, follow Section 1b of [Launching the Exploit](launching-the-exploit#twilight-menu) to set up TWiLight Menu++ on your system.
- If you have Unlaunch already and would like to install hiyaCFW, follow the [Installing hiyaCFW]() page, then return to the [Installing Unlaunch]() page to update Unlaunch.
   - hiyaCFW Helper, the tool used for installing hiyaCFW, comes with the option to install TWiLight Menu++. There is no need for installing TWiLight Menu++ separately
   - Subsequently, since we use TWiLight Menu++ to launch the Unlaunch installer, that's why we update Unlaunch after we set up hiyaCFW
