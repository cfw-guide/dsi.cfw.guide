---
title: Troubleshooting
---

## Unlaunch
### Unlaunch freezes at `MISMATCH IN FAT COPIES`

twlnf has a critical bug where it does not properly update the entire NAND after modifying it, which causes certain homebrew (like the Unlaunch installer) to throw an error.

While fixable, the method to do so isn't set in stone and largely varies between systems. One method is to delete any DSiWare installed via twlnf in the past, but it has also been reported that moving *all* DSiWare to the SD card and back to the system can help in some cases.

If you have downgraded the system in the past, updating back to v1.4.5 (or v1.4.6 if your DSi region is Chinese or Korean) can help fix this bug as well.

If the issue persists, try this:
1. Mount your NAND backup with [ninfs](https://github.com/ihaveamac/ninfs/releases), and enable the `Allow writing` option
1. Once your NAND backup is mounted, mount `twl_main.img`. If you are using Windows, you can use [OSFMount](https://www.osforensics.com/tools/mount-disk-images.html) to mount the image
1. Unmount `twl_main.img`, then unmount the NAND backup in ninfs
If the NAND was saved, follow [Restoring NAND](restoring-nand) and continue with [Installing Unlaunch](installing-unlaunch).

### There is no audio or boot splash when launching "Launcher" using Unlaunch

The developer of Unlaunch (nocash) has intentionally patched out the background audio and boot-splash by default. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch) using TWiLight Menu++, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Powering on only shows a black screen after installing Unlaunch

Try ejecting the SD card and powering the console on again. If it still only shows a black screen, you may need to flash your NAND via a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### After installing Unlaunch, I'm stuck booting into an application or the Unlaunch Filemenu

This was likely caused by choosing the wrong app for the `NO BUTTON` option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to `OPTIONS`, and set `NO BUTTON` to whatever your preference is.

### Other Unlaunch problems

If Unlaunch displays `Clusters too large`, `Bad VBR`, `Bad MBR`, or doesn't display any applications while the SD card is inserted, your SD card likely wasn't formatted correctly. Re-follow [SD Card Setup](sd-card-setup).

## TWiLight Menu++

For general TWiLight Menu++ troubleshooting, see its [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) page on the DS-Homebrew Wiki.

## Further assistance

If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/yD3spjv) Discord server.
