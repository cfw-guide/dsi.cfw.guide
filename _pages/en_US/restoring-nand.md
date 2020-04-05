---
title: Restoring a NAND backup
redirect_from:
  - /guide/restoring-nand
---

{% include toc title="Table of Contents" %}

WARNING! This is ***EXTREMELY*** dangerous. Even following these steps *exactly* could still result in an *irrecoverable brick* as the DSi's NAND is very low quality, especially if you flash more than once! Only use this as the *very last resort*!
{: .notice--danger}

Do not skip *anything* on this page, any mistake greatly increases chance of bricking your DSi.
{: .notice--info}

First, a few safer alternatives to why you might want to do this:
- Uninstalling Unlaunch can be done using the Unlaunch installer `.dsi` file (instructions in the FAQ)
- Installing DSiWare can be done using hiyaCFW or TWiLight Menu++
- Recovering pictures can be done using ninfs, in combination with hiyaCFW or TWiLight Menu++ if you want them on console
- Restoring an Unlaunch button configuration could be done by resetting it (instructions in the FAQ).
- Booting into Unlaunch resulting in an error? Take out your SD card and try again. If it works, then it's a fault with your SD card and restoring a NAND backup won't fix it

The only thing you should be doing with your NAND is installing Unlaunch. Use the alternatives otherwise

## Requirements

- Your NAND backup from the same DSi
- Version 1.6.0 of fwTool
- A way to run homebrew with NAND access, such as Unlaunch or Memory Pit
- A way to launch homebrew applications that isn't through Unlaucnh
  - Such tools include [GodMode9i](https://github.com/RocketRobz/GodMode9i/releases), HBMenu or TWiLight Menu++
  - fwTool 1.6.0 turns off the console immediately when launched directly from Unlaunch
- [no$gba](https://problemkaputt.de/gba.htm), to check your nand backup (Download the 'Windows gaming version')
  - macOS and Linux users can use [WINE](https://winehq.org) to run no$gba
  - You will also need to dump the "DSi firmware files", `BIOSDSI7.ROM` and `BIOSDSI9.ROM`
- A hex editor
  - Windows users can use [HxD](https://mh-nexus.de/en/hxd/)
  - macOS users can use [Hex Fiend](http://ridiculousfish.com/hexfiend/)
  - Linux users can use TODO

## Testing your NAND backup
It is very important to test that your nand backup is working before attempting to restore it to your console, if it shows a brick error in no$gba it will most likely brick your console too.
1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Copy your NAND backup to the folder you put `NO$GBA.EXE` in and rename it to `DSI-1.MMC`
2. Copy `BIOSDSI7.ROM` and `BIOSDSI9.ROM` to the folder you put `NO$GBA.EXE` in
3. Run `NO$GBA.EXE`
4. Click `Options` > `Emulation Setup` to open the Emulation Setup window
5. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
6. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
7. Click `OK`
8. Launch any Nintendo DS rom (`.nds` file)

If no$gba loads the DSi menu, then continue to the next section. If it shows any kind of error ***do not flash that backup***!

## Preparing your NAND backup
If your NAND backup was dumped using fwTool 2.0.0 or dumpTool, then it will have a no$gba footer at the end. Regardless, still check to make certain that your NAND is correct.
{: .notice--info}

1. Open your NAND backup in a hex editor
2. Go to the end of the file
   - You should see something like this: (the AA's will be your console's CID and the BB's will be its Console ID)
     ```
     44536920 654D4D43 20434944 2F435055 DSi eMMC CID/CPU
     AAAAAAAA AAAAAAAA AAAAAAAA AAAAAAAA ................
     BBBBBBBB BBBBBBBB 00000000 00000000 ........        
     00000000 00000000 00000000 00000000                 
     ```
3. If you see something like the section above, delete it (from offset `0xF000000` to the end of the file).
4. Save the changes made to your NAND backup and make sure it is now exactly **251,658,240** bytes
5. Name it `dsi_nand.bin` and place it on the root of your SD card.

If your NAND backup is not ***EXACTLY*** 251,658,240 bytes even after removing the NO$GBA footer, then it is an invalid NAND backup. ***Do not flash that backup***!
{: .notice--danger}

## Flashing your NAND backup (Software Side)

Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.
{: .notice--danger}

Make sure your Nintendo DSi system is well charged before beginning this section.
{: .notice--danger}

1. With your SD card inserted, power on your Nintendo DSi while holding (A) and (B).
2. Launch into a separate homebrew launcher that isn't Unlaunch.
3. Launch fwTool 1.6.0
4. Click `Restore nand_dsi.bin`
5. Confirm the NAND restore with the buttons prompted to you
6. Once the restore finishes, reboot your DSi

Your NAND should now be restored.

## Flashing your NAND backup (HardMod)

Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.
{: .notice--danger}

Make sure you have proper soldering skills.
{: .notice--danger}

TODO. I can't find a good tutorial online on how to hardmod. To be honest, I'd rather someone else take it up. Having a hardmodding guide is important too, since I remember some case where the NAND was bricked and didn't have unlaunch.
