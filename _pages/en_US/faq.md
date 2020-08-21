---
title: "FAQ"
redirect_from:
  - help/faq
---
{% include toc title="Questions" %}

### What does a white screen in certain homebrew mean?
That implies an SD card error. Please make sure you have [checked your SD card for errors](sd-card-setup).

### What functionality will I lose by modding my system?

- If you decide to install Unlaunch, you will not lose any system functionality
- If you go with a memory-pit only setup, you will be unable to save photos to the SD card via the Nintendo DSi Camera application while the exploit is installed. Either switch to an [alternative exploit](alternative-exploits) or [install Unlaunch](/installing-unlaunch).

This is because we overwrite the metadata file (`pit.bin`) with the Memory Pit exploit.

### How do I play Nintendo DS cartridge dumps?
Cartridge dumps require a flashcard or nds-bootstrap, an application that redirects Slot-1 reads/writes to the internal SD card, to be played. To use nds-bootstrap you will need an application that can tell it what game to load, such as:

Playing cartridge dumps on the console requires the use of a flashcart or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting slot-1 reads and writes to it.
- TWiLight Menu++ searches your SD card for ROM files that can be played with nds-bootstrap. The advantages to using TWiLightmenu++ are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. In other words, you can drop your ROMs file directly and play (without any setup required), there is no 40 title limit*, no requirement of Unlaunch or hiyaCFW and no dependency on SD card free space.
- hiyaCFW users can create [forwarders](forwarder) for the SDNAND's DSi System Menu, but it comes with the limitations that hiyaCFW imposes (they contribute to the 39 applications limit and the SD card free space issue) and due to the nature of it being a forwarder, it involves more steps than drop-and-play.

\* The Nintendo DSi, Nintendo 3DS, Homebrew Launcher and SEGA Saturn Theme have a page system of 40 ROMs per page, but you can switch pages using the left and right triggers, or SELECT+LEFT and SELECT+RIGHT.

Flashcarts are still usable on a modified Nintendo DSi (and in cases of incompatible nds-bootstrap games and higher compatibility with homebrew, required), but unlike on a DS Lite, they're optional. In most cases though, using nds-bootstrap is better considering the enhancements that it brings to the table, such as overclocking the CPU, loading the ROM in RAM (making speeds quicker), expand the VRAM bus to 32-bit amongst other additions.
- Unlaunch modifies the flashcart blocklist, so if you have a blocked flashcart it will be usable again

To dump said cartridges that you'd like to launch, you can [use GodMode9i](dumping-cartridges). We do not condone piracy, nor encourage it.
- If you are unsure what piracy is, there is a good writeup on the [eiphax](https://3ds.eiphax.tech/piracy.html) website.

### How can I restore my NAND without Unlaunch?
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
- If you have the latest version Unlaunch but do not want hiyaCFW, follow Section 1b of [Launching the Exploit](launching-the-exploit#twilight-menu) to setup TWiLight Menu++ on your system.
- If you have Unlaunch already and would like to install hiyaCFW, follow the [Installing hiyaCFW]() page, then return to the [Installing Unlaunch]() page to update Unlaunch.
   - hiyaCFW Helper, the tool used for installing hiyaCFW, comes with the option to install TWiLight Menu++. There is no need for installing TWiLight Menu++ separately
   - Subsequently, since we use TWiLight Menu++ to launch the Unlaunch installer, that's why we update Unlaunch after we setup hiyaCFW
