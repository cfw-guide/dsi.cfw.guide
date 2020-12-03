---
title: Troubleshooting
---

{% include toc title="Table of Contents" %}

## Unlaunch
### Unlaunch freezes at `MISMATCH IN FAT COPIES`?
twlnf has a critical bug where it does not properly update the entire NAND after modifying it, which causes certain homebrew (like the Unlaunch installer) to throw an error.

While fixable, the method to do so isn't set in stone and largely varies between systems. One method is to delete any DSiWare installed via twlnf in the past, but it has also been reported that moving *all* DSiWare to the SD card and back to the system can help in some cases.

If you have downgraded the system in the past, updating back to v1.4.5 (or v1.4.6 if your DS region is or Korean) can help this bug as well.

### There is no audio or boot splash when launching "LAUNCHER" using Unlaunch

The dev of Unlaunch (nocash) has intentionally patched out the background audio and boot-splash by default. You can regain these effects by [reinstalling Unlaunch](/installing-unlaunch) using TWiLight Menu++.

## hiyaCFW
### "An Error Has Occurred"
There are several reasons you might get this error:

- **Too Much Free Space:** The Nintendo DSi Menu has a bug that limits how much free space there can be. While this doesn't occur on the actual NAND (since the chip can never exceed 128 MB), it can happen using an SD card. What works and what doesn't goes by every other range of two gigabytes. For example, having 0-2 GB of free space works, but 2-4 GB doesn't. The same goes for 4-6 GB vs 6-8, up until you get to the size of your SD card. The latest hiyaCFW version can create dummy files though, so make sure that you download the latest version of [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) and place `hiya.dsi` from "for SDNAND SD card" to the root of your SD card.
- **Over 39 Titles:** There is a limit of 39 titles on your DSi System Menu. Delete any additional folders from `/title`
- **Too much DSiWare:** There is also a limit of 200 blocks (25MB) for DSiWare in the `00030004` folder. This can be worked around by installing as system apps using [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest)
- **Invalid Title:** There are several parameters you need to take into account when adding titles to hiyaCFW:
   - Cartridge dumps cannot be ran without being handled by a [forwarder](/nds-bootstrap-forwarder)
   - There are several arguments that have to be passed to the `.app` builder in order to work from the DSi System Menu
