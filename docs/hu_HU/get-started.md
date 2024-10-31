# Kezdeti lépések

The main homebrew application this guide has you install is **TW**i**L**ight Menu++, which is an upgrade/replacement to the Nintendo DSi Menu that allows running other homebrew applications, retail DS games, emulators for various older systems, and more.

A letöltésével fogunk kezdeni, illetve más homebrew eszköz(ök) letöltésével, hogy előkészüljünk az exploit lépéseire.

## Követelmények

- Egy mód arra, hogy a letöltött fájlokat az SD kártyádra másold
- An application that can extract archives, such as [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), or [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
  - Azt tanácsoljuk, hogy ne használj WinRAR-t, mert ismert arról, hogy elront dolgokat
  - Ha Windows 11-et használsz javasoljuk, hogy ne használd a beépített csomagolót (Windows Explorer), mert hibát okoz azzal, hogy azt mondja a fájlnév túl hosszú vagy nem érvényes

## I. rész - Előkészületek

::: warning

Ensure your SD card is [formatted correctly](sd-card-setup.html).

:::

1. Tedd be az SD kártyád a PC számítógépedbe
2. Download the latest release of [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
   - If it does not download, open the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest), and download `TWiLightMenu-DSi.7z`
3. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
4. Open `TWiLightMenu-DSi.7z`
   - Ha Windows-t használ, biztosítsd, hogy a 7-Zip telepítve van, majd kövesd a következő lépéseket:
     1. Right-click on `TWiLightMenu-DSi.7z`
     2. If using Windows 11, click `Show more options`
     3. Hover over `7-zip`
     4. Click `Open archive`
5. Copy the `_nds` folder from `TWiLightMenu-DSi.7z` to the root of your SD card
6. Copy the `BOOT.NDS` file from `TWiLightMenu-DSi.7z` to the root of your SD card
7. Close `TWiLightMenu-DSi.7z`
8. Copy the `dumpTool.nds` file to the root of your SD card

::: tip

Nem tudod, mi az SD "gyökér"? [See this image](/assets/images/sdroot/en_US.png)

:::

## II. rész - Az exploit kiválasztása

Innentől kezdve három lehetőséged van, egy kis különbséggel, hogy melyik mivel jár.

### Az Unlaunch telepítése Memory Pit-tel

A Memory Pit egy exploit ami a DSi Camera-t használja és kompatibilis minden firmware verzióval. Opcionálisan, ez az exploit használható az Unlaunch telepítésére, ami egy bootcode exploit és teljes hozzáférést ad a konzolhoz bootoláskor.

A Memory Pit valamennyire korlátozott homebrew kompatibilitással rendelkezik, ajánlott, hogy telepítsd az Unlaunch-öt, a Memory Pit önálló használata helyett. Ez a legkönnyebb metódusa az Unlaunch telepítésének, így ez az ajánlott módja. However, there is a very minor risk of **bricking** your console when installing Unlaunch, so if this is a concern, see the alternate method below.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::

### stylehax

A stylehax egy olyan exploit, ami a DSi Browser alkalmazást használja és alternatívaként használható a Memory Pit helyett az Unlaunch telepítéséhez (részletezve fentebb) ha a DSi-d kamerája hibás.

Az Unlaunch mentes élményhez ez az exploit ajánlott, mert a Memory Pit problémát okoz néhány játéknál vagy homebrew-nál.

::: tip

Continue to [Launching the Exploit (stylehax)](launching-the-browser-exploit.html)

:::

### Flipnote Lenny

A Flipnote Lenny egy exploit ami a Flipnote Studio alkalmazást használja.

Ha van Flipnote Studio-d és nem tervezed az Unlaunch (fentebb bemutatva) telepítését, akkor ez az exploit ajánlott, ugyanazon okból, mint a stylehax.

Mindig teleptheted az Unlaunch-öt később, ha úgy döntenél, hogy szeretnéd.

::: tip

Continue to [Launching the Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

For a more detailed pros and cons comparision of the available exploits, please see the [Which is the best exploit?](faq.html#which-is-the-best-exploit) FAQ.
