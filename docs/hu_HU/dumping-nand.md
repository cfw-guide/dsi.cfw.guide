---
title: NAND dumpolása
---

Ez az oldal a NAND mentés készítéséről szól, ami egy másolata a Nintendo DSi belső tárolójának. Ez a hiyaCFW telepítéséhez és a NO$gba-hoz és melonDS-hez DSi emulációhoz használható.

::: tip

Make sure the SD card has at least 250MB of free space, or else you'll run into an error message in dumpTool.

:::

::: tip

It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.

:::

## I. rész - SD kártya telepítés

::: tip

If you have already downloaded dumpTool from another section of this guide, you can skip this section.

:::

1. Töltsd le a [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds) legfrissebb kiadását
1. Rakd a `dumpTool.nds`-t bárhova az SD kártyádon


## II. rész - A NAND dumpolása

1. Indítsd el a `dumpTool`-t a TWiLight Menu++-on keresztül
1. Nyomd meg az <kbd class="face">A</kbd> gombot a Nintendo DSi-den a NAND dumpolás indításához
   - Egy NAND mentés általában 7 percig tart
1. Ha a NAND mentés kész, nyomd meg a <kbd>START</kbd> gombot a Nintendo DSi-den, hogy kilép a dumpTool-ból
1. Kapcsold ki a konzolodat és helyezd vissza az SD kártyádat az eszközödbe
1. Tárold ezt a mentés egy biztonságos helyen, ahol nem veszted el
   - Ha lehet, több mentésed legyen különböző tároló eszközökön
   - Ha elmentetted máshová, törölheted az SD kártyádról

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
