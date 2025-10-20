# SD kártya telepítés

Ez az oldal az SD kártyád előkészítéséről szól az eszközödhöz. A folyamat során formázzuk az SD kártyát, majd ellenőrizzük hibákra.

::: danger

Legyél biztos abban, hogy lementetted az SD kártyád tartalmát MIELŐTT követnéd a lépéseket. Az SD kártya WIPEOLVA lesz a folyamat során.

:::

::::: tabs

:::: tab default Windows

### I. rész - Az SD kártya formázása az SD Formatter-rel

::: tip

Ez a rész leformázza az SD kártyát az SD Card Association előírásai szerint. Ez javíthat számtalan problémát, ami homebrew alkalmazások futtatásakor előfordulhat.

:::

::: danger

Bármilyen 64GB vagy nagyobb SD exFAT-ra lesz formázva ebben a folyamatban. Követned _kell az I. és II. részt egyaránt a `FAT32`-re újra formázáshoz.

:::

1. Töltsd le az [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/) legutolsó verzióját
   - Ha a fenti link nem múködik neke, töltsd le az [archive.org-ról](https://web.archive.org/web/20220626204124/https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
   - Fogadd el a Végfelhasználói licencszerződést a letöltés indításához
2. Futtasd az `SD Card Formatter Setup`-ot (az `.exe` fájlt) a letöltött `.zip` fájlból rendszergazda joggal a program telepítéséhez
3. Futtasd az `SD Card Formatter`-t a Start menüből rendszergazda joggal
4. Válaszd ki az SD kártyád
5. Ellenőrizd, hogy a `Quick Format` opció be van-e pipálva
6. Nyomd meg a `Format` gombot a formázás elindításához
   - Ha 4GB-32GB SD kártyát használsz, és a cluster méret nem 32 kilobájt-nak jelezett, akkor követned kell a II. részt is
     ![Az SD Card Formatter képernyőképe Windows 11-en](/assets/images/sd-card-formatter.png)

### II. rész - Az SD kártya formázása a GUIFormat-tal

Ez a rész 64 GB-nál nagyobb SD kártyák FAT32-re formázását írja le.  
Ez vomatkozik azokra a 4GB-32GB SD kártyákra is, amiket nem 32kb cluster mérettel formáztak.

::: tip

Ha az SD kártyád 32GB vagy kevesebb ugorj a III. részhez.

:::

1. Töltsd le a [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) legutolsó verzióját
   - Kattints a képre a weboldalon, hogy letöltsd az appot
2. Futtasd a GUIFormat-ot Adminisztrátor joggal
3. Válaszd ki az SD kártyád betűjelét
4. Állítsd be az `Allocation size unit`-ot `32768`-ra
   - Ha ez túl nagy az SD-d számára, állítsd a legnagyobbra ami működik
5. Ellenőrizd, hogy a `Quick Format` opció be van-e pipálva
6. Indíts el a formázást

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)

### III. rész - Ellenőrzés hibákra

1. Menj a tulajdonságaihoz az SD kártyádnak
   - `Windows Explorer` -> `Ez a gép` -> Jobb kattintás az SD kártyádon -> `Tulajdonságok`
2. Az eszközök fülön válaszd az `Ellenőrzés most` opciót
3. Válaszd ki `Fájl rendszer hibák automatikus javítása` és a `Hibás szektorok keresése és javítása` opciókat egyaránt
4. Indítsd el az ellenőrzési folyamatot

Ez ellenőrizni fogja az SD kártyádat és kijavít minden hibát, amit talál.

### IV. rész - Az SD kártya írás/olvasás ellenőrzése

1. Töltsd le és csomagold ki [a h2testw archívot](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) bárhova a számítógépeden
   - Ha a fenti link nem működik, töltsd le az [archive.org-ról](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip-ról)
   - Külső eszközre is kicsomagolhatod, amíg az a külső eszköz nem az SD kártyád
2. Az SD kártyád legyen beillesztve a gépbe, majd futtasd a `h2testw.exe` fájlt\`
3. Válaszd ki milyen nyelven szeretnéd a h2testw-t látni
4. Válaszd ki az SD kártyád betűjelét, mint célt
5. Bizonyosodj meg róla, hogy az `all available space` van kiválasztva
6. Kattints a `Write + Verify`-ra

- Várj, amíg a folyamat befejeződik

::: tip

Ha a teszt eredménye `Test finished without errors`, az SD kártyád hibátlan, és törölheted a `.h2w` fájlokat az SD kártyádról.

:::

::: danger

Ha a teszt bármi más eredményt mutat, akkor az SD kártyád valószínűleg hibás, vagy sérült, és le kell cserélned!

:::

::::

:::: tab Linux

::: tip

Ha TWiLight Menu++ indtása sikertelen ezen metódus végrehajtása után, kérjük kövesd a Windows metódust e helyett, vagy Windows-ra bootolással, vagy Windows virtuális gép használatával

:::

### I. rész - Az SD kártya formázása

1. Ellenőrizd, hogy az SD kártyád **nincs** bedugva a Linux gépedbe
2. Indítsd el a Linux Terminal-t
3. Írd be, hogy `watch "lsblk"`
4. Helyezd az SD kártyád a Linux számítógépbe
5. Figyeld a kimenetet. Valami hasonlót kell kapj:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Jegyezd fel az eszköz nevét. A fenti példánkban ez `mmcblk0p1` volt
   - - Ha az `RO` 1-re állított, ellenőrizd, hogy a zároló csúszka nincs-e lehúzva
   - Legyél biztos benne, hogy a megcélzott **partíció**, az `mmcblk0p1` nem pedig az `mmcblk0`
2. Nyomj CTRL + C-t a menüből kilépéshez
3. Kövesd az SD kártyád kapacitásának megfelelő lépéseket:
   - 2GB vagy kisebb: `sudo mkdosfs /dev/(az eszköz neve fentről) -s 64 -F 16`
     - Ez létrehoz egy FAT16 partíciót 32 KB cluster mérettel az SD kártyán
   - 4GB vagy nagyobb: `sudo mkdosfs /dev/(az eszköz neve fentről) -s 64 -F 32`
     - Ez létrehoz egy FAT32 partíciót 32 KB cluster mérettel az SD kártyán

::: tip

Ha egy hibaüzentet kapsz ezzel a tartalommal: `mkdosfs: /dev/(eszköznév) contains a mounted file system`, akkor futtatnod kell a `sudo umount /dev/(esköz neve fentről)` parancsot annak érdekében, hogy végre tudd hajtani a fenti lépést.
Ez után újra kell csatlakoztatnod az SD kártyát **vagy** újra létre kell hoznod a CSATOLÁSI PONTOT (`sudo mkdir -p /run/media/user/FFFF-FFFF && sudo mount /dev/(device name) /run/media/user/FFFF-FFFF`) a folytatáshoz.

:::

### II. rész - Az F3 használata

1. Töltsd le és csomagold ki [az F3 archívot](https://github.com/AltraMayor/f3/archive/v7.2.zip) bárhova a számítógépeden.
2. Indítsd el a terminált az F3 könyvtárában
3. Futtasd a `make`-et az F3 fordításához
4. Bedugott és csatolt SD kártya mellett futtasd az `./f3write <your sd card mount point>` parancsot
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
5. Futtasd a `./f3read <your sd card mount point>` parancsot

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

:::: tab macOS

### I. rész - Az SD kártya formázása az SD Formatter-rel

::: tip

Ez a rész leformázza az SD kártyát az SD Card Association előírásai szerint. Ez javíthat számtalan problémát, ami homebrew alkalmazások futtatásakor előfordulhat.

:::

::: danger

Bármilyen 64GB vagy nagyobb SD exFAT-ra lesz formázva ebben a folyamatban. Követned _kell_ a II. részt a `FAT32`-re újra formázáshoz.

:::

1. Töltsd le az [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/) legutolsó verzióját
   - Fogadd el a Végfelhasználói licencszerződést a letöltés indításához
2. Futtasd az `Install SD Card Formatter`-t (az `.mpkg` fájlt) a letöltött `.zip` fájlból
3. Futtasd az `SD Card Formatter`-t
4. Válaszd ki az SD kártyád
5. Ellenőrizd, hogy a `Quick Format` opció be van-e pipálva
6. Indíts el a formázást

### II. rész - Az SD kártyád formázása Disk Utility-vel

Ez a rész 32 GB-nál nagyobb kártyák FAT32-re formázását írja le.

::: tip

Ha az SD kártyád 32GB vagy kevesebb ugorj a III. részhez.

:::

#### OS X El Capitan (10.11) és későbbi

1. Indítsd el a Disk Utility alkalmazást
2. Válaszd a `Show All Devices` opciót a bal felső `View` panelen
3. Válaszd ki az SD kártyád az oldalpanelen
   - Legyél biztos abban, hogy a jó meghajtót választod, egyébként rossz merevlemezt törölhetsz!
4. Kattints az `Erase`-re felül
5. Ellenőrizd, hogy a `Format` beállítása `MS-DOS (FAT32)`
   - El Capitan (10.11)-tól Catalina (10.15)-ig válaszd az `MS-DOS (FAT)` opciót
6. Ellenőrizd, hogy a `Scheme` beállítása `Master Boot Record`
   - Ha a `Scheme` nem jelenik meg, nyomj `Cancel`-t és ellenőrizd, hogy az eszközt választottad-e ki egy kötet helyett
7. Kattints az `Erase`-re, majd a `Close`-ra

#### OS X Yosemite (10.10) és korábbi

1. Indítsd el a Disk Utility alkalmazást
2. Válaszd ki az SD kártyád az oldalpanelen
   - Legyél biztos abban, hogy a jó meghajtót választod, egyébként rossz merevlemezt törölhetsz!
3. Kattints az `Partition`-re felül
   - Ha a `Partition` nem jelenik meg, ellenőrizd, hogy az eszközt választottad-e ki egy kötet helyett
4. Ellenőrizd, hogy a `Partition Layout` beállított `1 Partition`-re
5. Ellenőrizd, hogy a `Format` beállítása `MS-DOS (FAT)`
6. Az Options gombnál (a partíciós tábla alatt), válaszd a `Master Boot Record` opciót.
7. Kattints az `OK` -> `Apply` -> `Partition` opciókra

### III. rész - Az F3 használata

1. Nyisd meg a terminált
2. Telepítsd az F3-t a brew-ból a `brew install f3` futtatásával
   - Ha nincs brew-od, telepítsd azt a [brew.sh](https://brew.sh) oldaon található instrukciók alapján
3. Bedugott és csatolt SD kártya mellett futtasd az `./f3write <your sd card mount point>` parancsot
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
4. Futtasd a `./f3read <your sd card mount point>` parancsot
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

