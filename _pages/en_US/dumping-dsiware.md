---
title: Dumping DSiWare
redirect_from:
  - more/dumping-dsiware-from-3ds
---

This guide requires a hacked 3DS with [Luma3DS](https://github.com/AuroraWright/Luma3DS){:target="_blank"} and [FBI](https://github.com/Steveice10/FBI){:target="_blank"} installed. Follow [3ds.hacks.guide](3ds.hacks.guide){:target="_blank"} to hack your 3DS.
{: .notice--info}

This will allow you to dump DSiWare for use on your DSi console. This is possible by installing DSiWare to your 3DS, and then dumping it using [FBI](https://github.com/Steveice10/FBI){:target="_blank"}, a 3DS homebrew tool.

## Finding DSiWare TitleID

1. Launch the FBI application on your 3DS
2. Scroll down to "Titles" and press (A)
3. Press (SELECT) and then press (A) on "Show game card" and "Show SD"
4. Press (B) then wait for the screen to stop moving
5. Scroll down to the DSiWare you want to dump
6. Write down the `Title ID` of the DSiWare on the top screen down
7. Power off the 3DS

## Dumping DSiWare

1. Power on the 3DS while holding (START) to launch the Luma3DS chainloader menu
2. Navigate to GodMode9 and press (A) to launch it
3. Navigate to `[2:] SYSNAND TWLN/title/00030004`
4. The folder containing the game you want to dump is the last 8 numbers of the game's Title ID
5. Press (R)+(A) on this folder
6. Select "Copy to `0:/gm9/out`"
7. Press (A) when the folder is done copying to the SD Card.
8. Power off your 3DS.

Your dump should now be located on your 3DS's SD card in the folder `gm9/out`. Copy this to a safe location on your PC.

Continue to [Installing DSiWare](installing-dsiware)
{: .notice--info}