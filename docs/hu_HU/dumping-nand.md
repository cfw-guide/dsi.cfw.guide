---
title: NAND dumpolása
---

Ez az oldal a NAND mentés készítéséről szól, ami egy másolata a Nintendo DSi belső tárolójának. Ez a hiyaCFW telepítéséhez és a NO$gba-hoz és melonDS-hez DSi emulációhoz használható.

::: tip

Legyél biztos benne, hogy az SD kártyán van legalább 250MB szabad hely, egyébként hibáüzenetbe fogsz futni a dumpTool-ban.

:::

::: tip

Erősen ajánlott, hogy végrehajtsd ezt. Egy NAND mentés használható visszaállítási pontjaként a jövőben, ha brickelődne az eszközöd.

:::

## I. rész - SD kártya telepítés

::: tip

Ha már letöltötted a dumpTool-t az útmutató egy másik része alapján, akkor átugorhatod ezt a részt.

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

Az SHA1 hash-e a `nand.bin`-nek nem fog egyezni a `nand.bin.sha1` fájlban tárolt értékkel. Ez azért van, mert a dumpTool további adatokat ad hozzá a `nand.bin`-hez, amit no$gba láblécnek hívunk, miután az SHA1 hash kiszámításra került. Használhatod a [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)-t olyan másolat létrehozásához, amiben nincs benne ez a lábléc.

:::

::: tip

Folytatás az [Unlaunch telepítésével](installing-unlaunch.html) (Opcionális)

:::
