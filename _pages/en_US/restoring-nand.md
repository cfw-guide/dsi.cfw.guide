---
title: Restoring a NAND backup
redirect_from:
  - /guide/restoring-nand
  - /guide/nand-restore
---

{% include toc title="Table of Contents" %}

WARNING! This is ***dangerous***. Even following these steps exactly still has potential to brick the DSi as the NAND is very low quality, especially if you flash multiple times! This should only be used as a last resort!
{: .notice--danger}

Do not skip *anything* on this page, any mistake greatly increases chance of bricking your DSi.
{: .notice--info}

First, a few safer alternatives to why you might want to do this:
- Installing DSiWare can be done using hiyaCFW or TWiLight Menu++
- Recovering pictures can be done using ninfs, in combination with hiyaCFW or TWiLight Menu++ if you want them on console
- Restoring an Unlaunch button configuration can be done from the Unlaunch menu
- Booting into Unlaunch resulting in an error? Take out your SD card and try again. If it works, then it's a fault with your SD card and restoring a NAND backup won't fix it
- "An error has occurred..." on boot is a hiyaCFW error and is not related to your NAND, see the [troubleshooting](troubleshooting#hiyacfw) page for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on Discord
- Uninstalling Unlaunch, whether by flashing NAND or using its uninstaller, should avoided unless absolutely necessary, you can set the autoboot keys to "Launcher" and your DSi will be like stock

The only thing you should be doing with your NAND is installing Unlaunch. Use the alternatives otherwise.

## Requirements
- Your NAND backup **from the same DSi**
- The latest release of [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- A way to run homebrew with NAND access, such as Unlaunch or Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), to check your NAND backup (Download the 'Windows gaming version')
  - macOS and Linux users can use [WINE](https://winehq.org) to run no$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Dumping the BIOS for use in no$gba
1. Extract `dsibiosdumper.nds` from the `dsibiosdumper.zip` archive and place it anywhere on your SD card
2. Power on your console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd>
   - This should launch the Unlaunch Filemenu
3. Launch dsibiosdumper from the Unlaunch Filemenu
4. Press <kbd class="face">A</kbd> to dump the BIOS to the SD card
5. Press <kbd>START</kbd> to exit dsibiosdumper

## Testing your NAND backup
It is very important to test that your NAND backup is working before attempting to restore it to your console, if it shows a brick error in no$gba it will most likely brick your console too.
1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Copy your NAND backup to the folder you put `NO$GBA.EXE` in and rename it to `DSI-1.MMC`
3. Copy `bios7i.bin` and `bios9i.bin` to the folder you put `NO$GBA.EXE`, named `BIOSDSI7.ROM` and `BIOSDSI9.ROM`, respectively.
4. Run `NO$GBA.EXE`
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
8. Click `OK`
9. Launch any Nintendo DS ROM (`.nds` file)

If no$gba loads the DSi menu, then continue to the next section. If it shows any kind of error ***do not flash that backup***!

## Flashing your NAND backup (Software Side)

Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.
{: .notice--danger}

Make sure your Nintendo DSi system is well charged before beginning this section.
{: .notice--danger}

1. With your SD card inserted, power on your Nintendo DSi while holding <kbd>A</kbd> and <kbd>B</kbd>.
3. Launch SafeNANDManager
4. Press the button to `begin NAND restore`
6. Once the restore finishes, press <kbd>START</kbd> to turn off your DSi

Your NAND should now be restored.

## Flashing your NAND backup (Hardmod)

Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.
{: .notice--danger}

Make sure you have proper soldering skills.
{: .notice--danger}

TODO. I can't find a good tutorial online on how to hardmod. To be honest, I'd rather someone else take it up. Having a hardmodding guide is important too, since I remember some case where the NAND was bricked and didn't have unlaunch.
