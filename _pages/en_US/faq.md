---
title: "FAQ"
redirect_from:
  - help/faq
---
{% include toc title="Questions" %}

### What does a white screen in certain homebrew mean?
That implies an SD card error. Please make sure you have [checked your SD card for errors](sd-prep).

### How do I launch retail ROMs?
Retail ROMs are not able to be launched through Unlaunch alone, as Retail ROMs was made to be used by Slot-1. In order to run them from your SD card, you'll need to use nds-bootstrap, an application that can redirect Slot-1 reads to the SD card. It knows what to launch based on the strings set in the configuration file. While manually setting up the configuration file is possible, it's tedious and isn't user friendly. Depending on how you'd like to access your ROMS, there are easier ways.
- hiyaCFW users can create [forwarders](forwarder) for the DSi System Menu, but it is limited to 40 title and involves more steps than drag and drop.
- TWiLight Menu++ can navigate your SD card to discover and launch your ROM files. This has the benefit of no 40 title limit, drop and play (no conversion required), and no Unlaunch requirement.

Keep in mind that we would prefer if you [dumped these carts using GodMode9i](dump-cart). We do not support software piracy, and please do not go asking us how to get you free games.
- If you are unsure what piracy is, there is a good writeup on the [eiphax](https://3ds.eiphax.tech/piracy.html) website.

### How can I restore my NAND without Unlaunch?
You can follow Gadorach's [hardmodding guide](https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/) to hardmod your DSi. Previous soldering experience is required.

### How do I update my Nintendo DSi Homebrew?
- **Unlaunch** - Download `UNLAUNCH.DSI` and run it through the Unlaunch menu
  - Hold (A) & (B) when turning on your console
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card
- **TWiLight Menu++** - Follow Section 1b of [Launching the Exploit](exploit-launch#section-ib---twilight-menu++)
  - If you are moving from DSiMenu++ or SRLoader, rename `sd:/_nds/SRLoader` or `sd:/_nds/DSiMenuPlusPlus` to `sd:/_nds/TWiLightMenu` & delete `53524C41` (and `534C5254`, if exists) at `sd:/title/00030015`
  - Starting with v6.8.3, DS game saves are stored in a `saves` folder in the exact same location as the DS (`.nds`) ROMs. Please move them to that folder before updating
  - Starting with v12.0.0, please convert any photos for the DSi theme to `.png`
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
  - If you use TWiLight Menu++, there is a high chance that the latest nds-bootstrap release is included with TWiLight Menu++
- **GodMode9i, dumpTool** - Replace the `.nds` file
- **MakeForwarder, etc..** - Refollow the instructions used to download it

Keep in mind we can only guarantee the DSi Homebrew listed on our website. Other homebrew might use other methods to update.
