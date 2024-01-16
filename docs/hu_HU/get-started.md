---
title: "Kezdeti lépések"
---

A fő homebrew alkalmazás, amit ez az útmutató telepít a **TW**i**L**ight Menu++, ami egy feljavítása/cseréje a Nintendo DSi Menu-nek, és ami lehetővé teszi más homebrew-ok, kereskedelmi DS játékok, más régebbi rendszerek emulátorainak és egyebeknek a futtatását.

A letöltésével fogunk kezdeni, illetve más homebrew eszköz(ök) letöltésével, hogy előkészüljünk az exploit lépéseire.

## Követelmények

- Egy mód arra, hogy a letöltött fájlokat az SD kártyádra másold
- An application that can extract archives, such as [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), or [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
    - Azt tanácsoljuk, hogy ne használj WinRAR-t, mert ismert arról, hogy elront dolgokat
    - If you're using Windows 11, we also advise you to not use it's built-in extractor, as it'll cause an error saying that the filename is too long or not valid

## I. rész - Előkészületek

::: warning

Biztosítsd, hogy az SD kártyád [megfelelően formázott](sd-card-setup.html) legyen.

:::

1. Tedd be az SD kártyád a PC számítógépedbe
1. Töltsd le a [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) legfrissebb kiadását
1. Töltsd le a [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds) legfrissebb kiadását
1. Másold ki az `_nds` mappát `TWiLightMenu-DSi.7z` fájlból az SD kártyád gyökerébe
1. Másold ki a `BOOT.NDS` fájlt `TWiLightMenu-DSi.7z` fájlból az SD kártyád gyökerébe
1. Másold a `dumpTool.nds` fájlt az SD kártyád gyökerébe

::: tip

Nem tudod, mi az SD "gyökér"? [Tekintsd meg ezt a képet](https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png)

:::


## II. rész - Az exploit kiválasztása

Innentől kezdve három lehetőséged van, egy kis különbséggel, hogy melyik mivel jár.


### Az Unlaunch telepítése Memory Pit-tel

A Memory Pit egy exploit ami a DSi Camera-t használja és kompatibilis minden firmware verzióval. Opcionálisan, ez az exploit használható az Unlaunch telepítésére, ami egy bootcode exploit és teljes hozzáférést ad a konzolhoz bootoláskor.

A Memory Pit valamennyire korlátozott homebrew kompatibilitással rendelkezik, ajánlott, hogy telepítsd az Unlaunch-öt, a Memory Pit önálló használata helyett. Ez a legkönnyebb metódusa az Unlaunch telepítésének, így ez az ajánlott módja. Azonban van egy nagyon kicsi kockázata a konzolod **brickelésének** az Unlaunch telepítésekor, így ha ez számít, akkor válassz másik metódust alább.

::: tip

Folytatás [Az Exploit indítása](launching-the-exploit.html) útmutatóval

:::


### stylehax

A stylehax egy olyan exploit, ami a DSi Browser alkalmazást használja és alternatívaként használható a Memory Pit helyett az Unlaunch telepítéséhez (részletezve fentebb) ha a DSi-d kamerája hibás.

Az Unlaunch mentes élményhez ez az exploit ajánlott, mert a Memory Pit problémát okoz néhány játéknál vagy homebrew-nál.

::: tip

Folytatás [Az Exploit indítása (stylehax)](launching-the-browser-exploit.html) útmutatóval

:::


### Flipnote Lenny

A Flipnote Lenny egy exploit ami a Flipnote Studio alkalmazást használja.

Ha van Flipnote Studio-d és nem tervezed az Unlaunch (fentebb bemutatva) telepítését, akkor ez az exploit ajánlott, ugyanazon okból, mint a stylehax.

Mindig teleptheted az Unlaunch-öt később, ha úgy döntenél, hogy szeretnéd.

::: tip

Folytatás [Az Exploit indítása (Flipnote Lenny)](launching-the-flipnote-exploit.html) útmutatóval

:::

Részletesebb előnyök és hátrányok összehasonltásért az elérhető exploitokról tekints meg a [Melyik a legjobb exploit?](faq.html#which-is-the-best-exploit) GYIK-et.
