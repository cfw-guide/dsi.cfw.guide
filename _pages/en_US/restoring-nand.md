---
title: Restoring a NAND backup
redirect_from:
  - /guide/restoring-nand
---

{% include toc title="Table of Contents" %}

WARNING! This is ***EXTREMELY*** dangerous, even following these steps *exactly* could still result in an *irrecoverable brick* as the DSi's NAND is very low quality, especially if you flash more than once! Only use this as the *very last resort*!
{: .notice--danger}

Do not skip *anything* on this page, any mistake greatly increases chance of bricking your DSi.
{: .notice--info}

First, a few safer alternatives to why you might want to do this:
- Uninstalling Unlaunch:

This can be done using the Unlaunch installer

- Installing DSiWare:

This can be done using hiyaCFW or TWiLight Menu++

- Recovering pictures:

This can be done using ninfs, in combination with hiyaCFW or TWiLight Menu++ if you want them on console

If you want to continue, it is best that you at least do it right to minimize the brick chance, but consider yourself warned, this *has a chance of bricking* especially when done more than once.
{: .notice--danger}

## Preparing
There are a few things you will need:
- A NAND backup from the same DSi
- fwTool 1.6.0
- A way to run homebrew with NAND access, such as Unlaunch or Memory Pit
- [GodMode9i](https://github.com/RocketRobz/GodMode9i/releases), or any other way to launch a homebrew app such as HBMenu except directly from Unlaunch
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
9. If no$gba loads the DSi menu, then continue to the next section. If it shows any kind of error ***do not flash that backup***!

## Preparing your NAND backup
If your NAND backup was dumped using fwTool 2.0.0 or dumpTool (it probably was) then it will have a no$gba footer at the end, even if it wasn't still check this to make certain that your NAND is correct
1. Check the size of your NAND backup, if it is ***EXACTLY*** 251,658,240 bytes then it is good for this section, if it is anything else then proceed to the next step
2. Open your NAND backup in a hex editor
3. Go to the end of the file
4. You should see something like this: (the AA's will be your console's CID and the BB's will be its Console ID)
```
44536920 654D4D43 20434944 2F435055 DSi eMMC CID/CPU
AAAAAAAA AAAAAAAA AAAAAAAA AAAAAAAA ................
BBBBBBBB BBBBBBBB 00000000 00000000 ........        
00000000 00000000 00000000 00000000                 
```
5. Delete that whole section, from offset `0xF000000` to the end
6. Save changes to your nand backup and make sure it is now exactly 251,658,240 bytes

## Preparing your SD card
On your SD card you will need:
- Your nand backup, named `dsi_nand.bin` in the root of your SD
- GodMode9i, or another way to launch fwTool 1.6.0
- fwTool 1.6.0

## Flashing your NAND backup
This is where it gets dangerous, make sure you have read through the above steps. If you were linked directly to here then go back to the top and read this whole page
{: .notice--danger}

Make sure your DSi is well charged before beginning this section.
{: .notice--danger}

1. Insert your SD card into your DSi
2. Launch fwTool 1.6.0 using your preferred method of launching homebrew
3. Click `Restore nand_dsi.bin`
4. Press START and SELECT to begin the restore
5. Once the restore finishes, reboot your DSi
