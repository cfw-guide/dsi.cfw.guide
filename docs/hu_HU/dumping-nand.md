# NAND dumpolása

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

1. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Place `dumpTool.nds` anywhere on your SD card

## II. rész - A NAND dumpolása

1. Launch `dumpTool` through TWiLight Menu++
2. Nyomd meg az <kbd class="face">A</kbd> gombot a Nintendo DSi-den a NAND dumpolás indításához
   - Egy NAND mentés általában 7 percig tart
3. Ha a NAND mentés kész, nyomd meg a <kbd>START</kbd> gombot a Nintendo DSi-den, hogy kilép a dumpTool-ból
4. Kapcsold ki a konzolodat és helyezd vissza az SD kártyádat az eszközödbe
5. Tárold ezt a mentés egy biztonságos helyen, ahol nem veszted el
   - Ha lehet, több mentésed legyen különböző tároló eszközökön
   - Ha elmentetted máshová, törölheted az SD kártyádról

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
