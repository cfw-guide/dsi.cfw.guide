---
title: Troubleshooting
---

{% include toc title="Table of Contents" %}

## Unlaunch

### Unlaunch freezes at `MISMATCH IN FAT COPIES`?
twlnf has a critical bug that doesn't properly update the entire NAND after modifying it, which causes certain homebrew (like the Unlaunch installer) to throw an error.

While fixable, the method to do so isn't set in stone and largely varies between systems. One method is to delete any DSiWare installed via twlnf in the past, but it has also been reported that moving *all* DSiWare to the SD card and back to the system can help in some cases.

### There is no audio or boot splash when launching "LAUNCHER" using Unlaunch
That is intentionally done by nocash, the dev of Unlaunch. Thankfully, there is a way to revert said patches, by [reinstalling Unlaunch](/installing-unlaunch) using TWiLight Menu++

### I get a black screen when trying to launch the Unlaunch installer from TWiLight Menu++
This is a bug with how the IPC values are cleared (or the lack there of). IPC values are used by audio in TWiLight Menu++.

Until the next release of TWiLight Menu++, go to the TWiLight Menu++ settings, highlight the theme option and then press LEFT/RIGHT until you select the R4 theme. Exit out of TWiLight Menu+++ settings, then launch `UNLAUNCH.DSI`.

Alternatively, you could use an external launcher, such as [GodMode9i](https://github.com/RocketRobz/godmode9i/releases/latest)

## hiyaCFW

### "An Error Has Occurred"
If you get this message when booting hiyaCFW, it means you have too much free space on your SD card. The amount of free space compatible goes by every other range of two gigabytes. For example, 0-2 GB worth of free space works while 2-4 GB doesn't.

Refollow [Section III of hiyaCFW setup](/hiyacfw-setup#section-iii---maximizing-available-space)
