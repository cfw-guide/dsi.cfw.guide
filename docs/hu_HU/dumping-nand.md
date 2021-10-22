# NAND dumpolása

Ez az oldal a NAND mentés készítéséről szól, ami egy másolata a Nintendo DSi belső tárolójának. Ez a hiyaCFW és a NO$GBA telepítéséhez használható.

::: tip
Erősen ajánlott, hogy végrehajtsd ezt. Egy NAND mentés használható visszaállítási pontjaként a jövőben, ha brickelődne az eszközöd.
:::

## I. rész - SD kártya telepítés

::: tip
Windows-t, Linux-ot vagy macOS-t használsz? Használd a [Lazy DSi Downloader](lazy-dsi-downloader)-t, hogy automatikusan telepítse az SD kártyád.
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
Az SHA1 hash-e a `nand.bin`-nek nem fog egyezni a `nand.bin.sha1` fájlban tárolt értékkel. Ez azért van, mert a dumpTool további adatokat ad hozzá a `nand.bin`-hez, amit NO$GBA láblécnek hívunk, miután az SHA1 hash kiszámításra került. Használhatod a [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) olyan másolat létrehozásához, amiben nincs benne ez a lábléc.
:::

::: tip
Folytatás az [Unlaunch telepítésével](installing-unlaunch) (Opcionális)
:::
