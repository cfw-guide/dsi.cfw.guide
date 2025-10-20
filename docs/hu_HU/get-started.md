# Kezdeti lépések

Néhány homebrew eszköz letöltésével fogjuk kezdeni, hogy előkészüljünk az exploit lépéseire.

## Követelmények

- Egy mód arra, hogy a letöltött fájlokat az SD kártyádra másold
- Egy alkalmazás, ami ki tud tömöríteni csomagolt állományokat, mint például a [7-Zip](https://www.7-zip.org/) (Windows), a [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS) vagy a [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
  - Azt tanácsoljuk, hogy ne használj WinRAR-t, mert ismert arról, hogy elront dolgokat
  - Ha Windows 11-et használsz javasoljuk, hogy ne használd a beépített csomagolót (Windows Explorer), mert hibát okoz azzal, hogy azt mondja a fájlnév túl hosszú vagy nem érvényes

## I. rész - Előkészületek

::: warning

Biztosítsd, hogy az SD kártyád [megfelelően formázott](sd-card-setup.html) legyen.

:::

1. Tedd be az SD kártyád a PC számítógépedbe
2. Töltsd le a [dumpTool](https://dsi.cfw.guide/assets/files/dumptool/boot.nds) legutolsó kiadását, mint `boot.nds`
3. Másold a `boot.nds` fájlt az SD kártyád gyökerébe

::: tip

Nem tudod, mi az SD "gyökér"? [Nézd meg ezt a képet](/assets/images/sdroot/en_US.png)

:::

## II. rész - Az Unlaunch telepítettségének vizsgálata

Az Unlaunch egy bootcode exploit és telepítésre kerül a DSi konzolra magára, teljes hozzáférést adva a konzolhoz bootoláskor, és ennek eredményeként lehetővé teszi a homebrew alkalmazások teljes hozzáférését a hardverhez a DSi rendszer appok és a DSiWare címek korlátozásai nélkül.

Néhány DSi konzol amit használtként/felújítottként értékesítenek, már tartalmazhatja az Unlaubch-öt telepítve.

Ennek ellenőrzéséhez nyomd meg a <kbd class="face">POWER</kbd> gombot, és rögtön tartsd is lenyomva az <kbd class="face">A</kbd>+<kbd class="face">B</kbd> gombokat.

- Ha egy menüt látsz ami a `Nocash Unlaunch.dsi`-t mutatja a felső képenyőn, akkor az azt jelenti, hogy az Unlaunch már telepített ás folytathatod a [NAND mentésével](dumping-nand.html).
- Ha a DSi normálisan indul el a DSi Menü megjelenítésével, akkor folytasd a III. résszel.

## III. rész - Memory Pit

A Memory Pit egy exploit ami a DSi Camera-t használja és kompatibilis minden firmware verzióval.

Az exploit használata Unlaunch telepítése nélkül kompatibilitási problémákat okozhat néhány homebrew-nál. Ha hibába futnál DSi homebrew-ok esetében, visszatérhetsz ehhez az útmutatóhoz és beállíthatsz egy [alternatív exploit-ot](alternate-exploits.html) helyette.

::: tip

Folytatás [Az Exploit indításával](launching-the-exploit.html)

:::
