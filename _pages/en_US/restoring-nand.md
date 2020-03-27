---
title: Restoring a NAND backup (Software Side)
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
If your NAND backup was dumped using fwTool 2.0.0 or dumpTool (it probably was) then it will have a no$gba footer at the end. Even if it wasn't, still check this to make certain that your NAND is correct
{: .notice--info}

If your NAND backup is ***EXACTLY*** 251,658,240 bytes, then it does not have a no$gba footer and as such, you will not need to trim it. If it isn't 251,658,240 bytes, continue reading to trim it. 
{: .notice--danger}

1. Open your NAND backup in a hex editor
2. Go to the end of the file
   - You should see something like this: (the AA's will be your console's CID and the BB's will be its Console ID)
     ```
     44536920 654D4D43 20434944 2F435055 DSi eMMC CID/CPU
     AAAAAAAA AAAAAAAA AAAAAAAA AAAAAAAA ................
     BBBBBBBB BBBBBBBB 00000000 00000000 ........        
     00000000 00000000 00000000 00000000                 
     ```
5. Delete the section above, from offset `0xF000000` to the end of the file.
6. Save the changes made to your NAND backup and make sure it is now exactly **251,658,240** bytes
7. Name it `dsi_nand.bin` and place it on the root of your SD card.

## Flashing your NAND backup

Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.
{: .notice--danger}

Make sure your Nintendo DSi system is well charged before beginning this section.
{: .notice--danger}

1. Insert your SD card into your DSi
2. Launch fwTool 1.6.0 using your preferred method of launching homebrew
3. Click `Restore nand_dsi.bin`
4. Confirm the NAND restore with the buttons prompted to you
5. Once the restore finishes, reboot your DSi

Your NAND should now be restored.
