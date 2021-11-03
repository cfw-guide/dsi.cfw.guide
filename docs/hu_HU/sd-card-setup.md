---
title: SD kártya telepítés
---

Ez az oldal az SD kártyád előkészítéséről szól a Nintendo DSi-hez. A folyamat során formázzuk az SD kártyát úgy, hogy megfelelő legyen a Nintendo DSi-hez és ellenőrizzük a kártyát hibákra.

::: danger

Legyél biztos abban, hogy lementetted az SD kártyád tartalmát MIELŐTT követnéd a lépéseket. Az SD kártya WIPEOLVA lesz a folyamat során.

:::

::::: tabs

:::: tab name="Windows" os="windows"

### I. rész - Az SD kártya formázása az SD Formatter-rel

::: tip

Ez a rész leformázza az SD kártyát az SD Card Association előírásai szerint. Ez javíthat számtalan problémát, ami homebrew alkalmazások futtatásakor előfordulhat.

:::

::: danger

Bármilyen 64GB vagy nagyobb SD `exFAT`-ra lesz formázva ebben a folyamatban. Követned _kell_ a II. részt a `FAT32`-re újra formázáshoz.

:::

1. Töltsd le az [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/) legfrissebb verzióját
   - Fogadd el a Végfelhasználói licencszerződést a letöltés indításához
1. Futtasd az `SD Card Formatter Setup`-ot (az `.exe` fájlt) a letöltött `.zip` fájlból rendszergazda joggal a program telepítéséhez
1. Futtasd az `SD Card Formatter`-t a Start menüből rendszergazda joggal
1. Válaszd ki az SD kártyád
1. Ellenőrizd, hogy a `Quick Format` opció be van-e pipálva
1. Indíts el a formázást

### II. rész - Az SD kártya formázása az SD GUIFormat-tal

Ez a rész 32 GB-nál nagyobb kártyák FAT32-re formázását írja le.

::: tip

Ha az SD kártyád 32GB vagy kevesebb ugorj a III. részhez

:::

1. Töltsd le a [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) legfrissebb kiadását
   - Kattints a képre a weboldalon, hogy letöltsd az appot
1. Futtasd a GUIFormat-ot Adminisztrátor joggal
1. Válaszd ki az SD kártyád betűjelét
1. Állítsd be az `Allocation size unit`-ot `32768`-ra
   - Ha ez túl nagy az SD-d számára, állítsd a legnagyobbra ami működik
1. Ellenőrizd, hogy a `Quick Format` opció be van-e pipálva
1. Indíts el a formázást

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)

### III. rész - Ellenőrzés hibákra
1. Menj a tulajdonságaihoz az SD kártyádnak
   - `Windows Explorer` -> `Ez a gép` -> Jobb kattintás az SD kártyádon -> `Tulajdonságok`
1. Az eszközök fülön válaszd az `Ellenőrzés most` opciót
1. Válaszd ki `Fájl rendszer hibák automatikus javítása` és `Hibás szektorok kereséses és javítása` opciókat egyaránt
1. Indítsd el az ellenőrzési folyamatot

Ez ellenőrizni fogja az SD kártyádat és kijavít minden hibát, amit talál.

### IV. rész - Az SD kártya írás/olvasás ellenőrzése

1. Töltsd le és csomagold ki [the h2testw archívot](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) bárhova a számítógépeden.
   - Külső eszközre is kicsomagolhatOD, amíg az a külső eszköz nem az SD kártyád
1. Az SD kártyád legyen beillesztve a gépbe, majd futtasd a `h2testw.exe` fájlt
1. Válaszd ki milyen nyelven szeretnéd a h2testw-t látni
1. Válaszd ki az SD kártyád betűjelét, mint célt
1. Bizonyosodj meg róla, hogy az `all available space` van kiválasztva
1. Kattints a `Write + Verify` gombra
- Várj, amíg a folyamat befejeződik

::: tip

Ha a teszt eredménye `Test finished without errors`, az SD kártyád hibátlan, és törölheted a `.h2w` fájlokat az SD kártyádról.

:::

::: danger

Ha a teszt bármi más eredményt mutat, akkor az SD kártyád valószínűleg hibás, vagy sérült, és le kell cserélned!

:::

::::

:::: tab name="Linux" os="other"

### I. rész - Az SD kártya formázása
1. Ellenőrizd, hogy az SD kártyád **nincs** bedugva a Linux gépedbe
1. Indítsd el a Linux Terminal-t
1. Írd be a `watch "lsblk"` parancsot
1. Helyezd az SD kártyád a Linux számítógépbe
1. Figyeld a kimenetet. Valami hasonlót kell kapj:
```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```
1. Jegyezd fel az eszköz csatolási pontját. A fenti példában ez `mmcblk0` volt
   - + Ha az `RO` 1-re állított, ellenőrizd, hogy a zároló csúszka nincs-e lehúzva
1. Nyomj CTRL + C-t a menüből kilépéshez
1. Kövesd az SD kártyád kapacitásának megfelelő lépéseket:
   - 2GB vagy kisebb: Írd be a `sudo mkdosfs /dev/(eszköz csatolási pont fentebbről) -s 64 -F 16` parancsot egy FAT16 partíció létrehozásához 32 KB cluster mérettel az SD kártyán
   - 4GB vagy nagyobb: Írd be a `sudo mkdosfs /dev/(eszköz csatolási pont fentebbről) -s 64 -F 32` parancsot egy FAT32 partíció létrehozásához 32 KB cluster mérettel az SD kártyán

### II. rész - Az F3 használata
1. Töltsd le és csomagold ki [az F3 archívot](https://github.com/AltraMayor/f3/archive/v7.2.zip) bárhova a számítógépeden.
1. Indítsd el a terminált az F3 könyvtárában
1. Futtasd a `make`-et az F3 fordításához
1. Bedugott és csatolt SD kártya mellett futtasd a következő parancsot: `./f3write <az sd kártyád csatolási pontja>`
   - Várj, amíg a folyamat befejeződik. Alább egy példa kimenet látható:
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. Futtasd a következő parancsot: `./f3write <az sd kártyád csatolási pontja>`
- Várj, amíg a folyamat befejeződik. Alább egy példa kimenet látható:
   ```
   $ ./f3read /media/michel/6135-3363/
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

::: tip

Ha a teszt eredménye `Data LOST: 0.00 Byte (0 sectors)`, az SD kártyád rendben van és most már törölheted az összes `.h2w` fájlt róla.

:::

::: danger

Ha a teszt bármi más eredményt mutat, akkor az SD kártyád valószínűleg hibás, vagy sérült, és le kell cserélned!

:::

::::

:::: tab name="macOS" os="macos"

### I. rész - Az SD kártya formázása az SD Formatter-rel

::: tip

Ez a rész leformázza az SD kártyát az SD Card Association előírásai szerint. Ez javíthat számtalan problémát, ami homebrew alkalmazások futtatásakor előfordulhat.

:::

::: danger

Bármilyen 64GB vagy nagyobb SD `exFAT`-ra lesz formázva ebben a folyamatban. Követned _kell_ a II. részt a `FAT32`-re újra formázáshoz.

:::

1. Töltsd le az [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/) legfrissebb verzióját
   - Fogadd el a Végfelhasználói licencszerződést a letöltés indításához
1. Futtasd az `Install SD Card Formatter Setup`-ot (az `.mpkg` fájlt) a letöltött `.zip` fájlból
1. Futtasd az `SD Card Formatter`-t
1. Válaszd ki az SD kártyád
1. Ellenőrizd, hogy a `Quick Format` opció be van-e pipálva
1. Indíts el a formázást

### II. rész - Az SD kártyád formázása Disk Utility-vel

Ez a rész 32 GB-nál nagyobb kártyák FAT32-re formázását írja le.

::: tip

Ha az SD kártyád 32GB vagy kevesebb ugorj a III. részhez

:::

#### OS X El Capitan (10.11) és későbbi

1. Indítsd el a Disk Utility alkalmazást
1. Válaszd a `Show All Devices` opciót a bal felső `View` panelen
1. Válaszd ki az SD kártyád az oldalpanelen
   - Legyél biztos abban, hogy a jó meghajtót választod, egyébként rossz merevlemezt törölhetsz!
1. Kattints az `Erase`-re felül
1. Ellenőrizd, hogy a `Format` beállítása `MS-DOS (FAT32)`
   - El Capitan (10.11)-tól Catalina (10.15)-ig válaszd az `MS-DOS (FAT)` opciót
1. Ellenőrizd, hogy a `Scheme` beállítása `Master Boot Record`
   - Ha a `Scheme` nem jelenik meg, nyomj `Cancel`-t és ellenőrizd, hogy az eszközt választottad-e ki egy kötet helyett
1. Kattints az `Erase`-re, majd a `Close`-ra

#### OS X Yosemite (10.10) és korábbi
1. Indítsd el a Disk Utility alkalmazást
1. Válaszd ki az SD kártyád az oldalpanelen
   - Legyél biztos abban, hogy a jó meghajtót választod, egyébként rossz merevlemezt törölhetsz!
1. Kattints az `Partition`-re felül
   - Ha a `Partition` nem jelenik meg, ellenőrizd, hogy az eszközt választottad-e ki egy kötet helyett
1. Ellenőrizd, hogy a `Partition Layout` beállított `1 Partition`-re
1. Ellenőrizd, hogy a `Format` beállítása `MS-DOS (FAT)`
1. Az Options gombnál (a partíciós tábla alatt), válaszd a `Master Boot Record` opciót.
1. Kattintsd az `OK` -> `Apply` -> `Partition` opciókra

### III. rész - Az F3 használata
1. Nyisd meg a terminált
1. Telepítsd az F3-t a brew-ból a `brew install f3` futtatásával
   - Ha nincs brew-od, telepítsd azt a [brew.sh](https://brew.sh) instrukciókkal
1. Bedugott és csatolt SD kártya mellett futtasd a következő parancsot: `./f3write <az sd kártyád csatolási pontja>`
   - Várj, amíg a folyamat befejeződik. Alább egy példa kimenet látható:
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. Futtasd a következő parancsot: `./f3write <az sd kártyád csatolási pontja>`
   - Várj, amíg a folyamat befejeződik. Alább egy példa kimenet látható:
   ```
   $ f3read /Volumes/SD\ CARD
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

::: tip

Ha a teszt eredménye `Data LOST: 0.00 Byte (0 sectors)`, az SD kártyád rendben van és most már törölheted az összes `.h2w` fájlt róla.

:::

::: danger

Ha a teszt bármi más eredményt mutat, akkor az SD kártyád valószínűleg hibás, vagy sérült, és le kell cserélned!

:::

::::

:::::

::: tip

Most már helyreállíthatod az SD kártyád tartalmát és folytathatod.

:::

