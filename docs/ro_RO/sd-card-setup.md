---
title: Setarea Cardului SD
---

This page is for preparing your SD card for your device. In the process, we'll format the SD card and check the card for errors.

::: danger

Asigură-te că ai făcut un backup cardului SD ÎNAINTE de a urmări acest ghid. Cardul tău SD va fi ȘTERS în acest proces.

:::

::::: tabs

:::: tab name="Windows" os="windows"

### Secțiunea I - Formatarea cardului SD cu SD Formatter

::: tip

Această secțiune formatează cardul SD la specificațiile ale Asociației Cardului SD. Aceasta poate rezolva multe probleme ce pot apărea la rularea aplicațiilor homebrew.

:::

::: danger

Orice card SD de peste 64GB va fi formatat la `exFAT` în acest proces. _Trebuie_ să urmărești Secțiunea II pentru a reformata la `FAT32`.

:::

1. Descarcă ultima versiune a [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
   - If the above link doesn't work for you, download [from archive.org](https://web.archive.org/web/20220626204124/https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
   - Acceptă Accordul de Licență cu Utilizatorul pentru a începe descărcarea
1. Rulează `SD Card Formatter Setup` (fișierul `.exe`) în fișierul `.zip` descărcat cu privilegii de Administator, după aceea instalează programul
1. Rulează `SD Card Formatter` din Meniul de Start cu privilegii de Administrator
1. Selectează-ți cardul SD
1. Asigură-te că `Quick Format` este bifat
1. Press `Format` to start the format process ![Screenshot of SD Card Formatter on Windows 11](/assets/images/sd-card-formatter.png)

### Secțiunea II - Formatarea cardului SD cu GUIFormat

Această secțiune formatează cardulie SD mai mari de 32GB în FAT32.

::: tip

Dacă ai un card SD mai mic de 32GB, sari la Secțiunea III.

:::

1. Descarcă ultima versiune a [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)
   - Apasă pe imaginea de pe site pentru a descărca aplicația
1. Rulează GUIFormat cu permisiuni de Administrator
1. Selectează litera drive-ului
1. Set the `Allocation size unit` to `32768`
   - Dacă este prea mare pentru cardul tău SD, setează-l la cea mai mare valoare care funcționează
1. Asigură-te că `Quick Format` este bifat
1. Începe procesul de formatare

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)

### Secțiunea III – Căutarea de erori
1. Mergi la fereastra de proprietăți a cardului SD
   - `Windows Explorer` -> `Acest PC` -> Apasă click dreapta pe cardul SD -> `Proprietăți`
1. În fila cu unelte, selectează `Verifică Acum`
1. Bifează `Repară automat erorile sistemului de fișiere` și `Scanează pentru și încearcă recuperarea sectoarelor rele`
1. Începe procesul de verificare

Acesta va scana cardul SD și va corecta orice eroare găsită.

### Secțiunea IV - Verificarea citirii/scrierii cardului SD

1. Descarcă și extrage [arhiva h2testw](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) oriunde pe calculatorul tău
   - Dacă linkul de mai sus nu funcționează, descarcă [de pe archive.org](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)
   - Poate fi extrasă și pe un dispozitiv extern atâta timp cât dispoitivul extern nu este cardul tău SD
1. Cu cardul SD introdus în calculatorul tău, rulează `h2testw.exe`
1. Selectează în ce limbă ai vrea să vezi h2testw
1. Setează litera cardului SD ca și țintă
1. Asigură-te că `all available space` este selectat
1. Apasă `Write + Verify`
- Așteptă până când procesul este terminat

::: tip

Dacă testul afișează rezultatul `Test finished without errors`,, cardul tău SD este sănătos și poți șterge toate fișierele `.h2w` de pe cardul SD.

:::

::: danger

Dacă testul afișează orice alt rezultat, cardul tău SD ar putea fi corupt sau deteriorat și s-ar putea să trebuiască să-l înlocuiți!

:::

::::

:::: tab name="Linux" os="other"

::: tip

If TWiLight Menu++ fails to start after following this method, please follow the Windows method instead, by either rebooting to Windows or running a Windows Virtual Machine

:::

### Secțiunea I - Formatarea cardului SD
1. Asigură-te că **nu** ai introdus cardul SD în calculatorul tău Linux
1. Lansează Terminalul Linux
1. Scrie `watch "lsblk"`
1. Introdu cardul SD în calculatorul Linux
1. Observă rezultatul. Ar trebui să arate în genul acesta:
```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```
1. Take note of the device name. In our example above, it was `mmcblk0p1`
   - Dacă `RO` este setat la 1, asigură-te că butonul de blocare nu este în jos
   - Make sure you're targetting the **partition**, `mmcblk0p1` not `mmcblk0`
1. Apasă CTRL + C pentru a ieși din meniu
1. Urmează instrucțiunile conform capacității cardului SD:
   - 2GB or lower: `sudo mkdosfs /dev/(device name from above) -s 64 -F 16`
      - This creates a single FAT16 partition with 32 KB cluster size on the SD card
   - 4GB or higher: `sudo mkdosfs /dev/(device name from above) -s 64 -F 32`
      - This creates a single FAT32 partition with 32 KB cluster size on the SD card

### Secţiunea II – Utilizarea F3
1. Descarcă și extrage [arhiva F3](https://github.com/AltraMayor/f3/archive/v7.2.zip) oriunde pe calculatorul tău.
1. Lansează terminalul în dosarul F3
1. Rulează `make` pentru a compila F3
1. Cu cardul SD introdus și montat, rulează `./f3write <your sd card mount point>`
   - Așteaptă până procesul s-a încheiat. Vezi mai jos un exemplu de rezultat:
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. Rulează `./f3read <your sd card mount point>`
- Așteaptă până procesul s-a încheiat. Vezi mai jos un exemplu de rezultat:
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

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your SD card is healthy and you can delete all `.h2w` files on your SD card.

:::

::: danger

Dacă testul afișează orice alt rezultat, cardul tău SD ar putea fi corupt sau deteriorat și s-ar putea să trebuiască să-l înlocuiți!

:::

::::

:::: tab name="macOS" os="macos"

### Secțiunea I - Formatarea cardului SD cu SD Formatter

::: tip

Această secțiune formatează cardul SD la specificațiile ale Asociației Cardului SD. Aceasta poate rezolva multe probleme ce pot apărea la rularea aplicațiilor homebrew.

:::

::: danger

Orice card SD de peste 64GB va fi formatat la `exFAT` în acest proces. _Trebuie_ să urmărești Secțiunea II pentru a reformata la `FAT32`.

:::

1. Descarcă ultima versiune a [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/)
   - Acceptă Accordul de Licență cu Utilizatorul pentru a începe descărcarea
1. Rulați `Instalați cardul SD Formatter` (fișierul `.mpkg`) în fișierul descărcat `.zip`
1. Rulează `SD Card Formatter`
1. Selectează-ți cardul SD
1. Asigură-te că `Quick Format` este bifat
1. Începe procesul de formatare

### Secțiunea II - Formatarea cardului SD cu Disk Utility

Această secțiune formatează cardulie SD mai mari de 32GB în FAT32.

::: tip

Dacă ai un card SD mai mic de 32GB, sari la Secțiunea III.

:::

#### OS X El Capitan (10,11) și ulterior

1. Lansează aplicația Disk Utility
1. Selectează `Show All Devices` în panoul `View` din stânga sus
1. Selectează cardul SD din bara laterală
   - Asigură-te că ai ales dispozitivul corect, altfel ai putea șterge din greșeală drive-ul greșit!
1. Apasă `Erase` în vârf
1. Asigură-te că `Format` este setat la `MS-DOS (FAT32)`
   - De la El Capitan (10.11) până la Catalina (10.15) alege `MS-DOS (FAT)`
1. Asigură-te că `Scheme` este setat la `Master Boot Record`
   - Dacă `Scheme` nu apare, apasă `Cancel` și asigură-te că ai ales dispozitivul corect în loc de un volum
1. Apasă `Erase`, apoi apasă `Close`

#### OS X Yosemit (10.10) și anterior
1. Lansează aplicația Disk Utility
1. Selectează cardul SD din bara laterală
   - Asigură-te că ai ales dispozitivul corect, altfel ai putea șterge din greșeală drive-ul greșit!
1. Apasă `Partition` în vârf
   - Dacă `Partition` nu apare, asigură-te că ai ales dispozitivul în loc de un volum
1. Asigură-te că `Partition Layout` este setat la `1 Partition`
1. Asigură-te că `Format` este setat la`MS-DOS (FAT)`
1. Din butonul de Opțiuni (sub tabelul de partiții), selectează `Master Boot Record`.
1. Apasă `OK` -> `Apply` -> `Partition`

### Secțiunea III – Utilizarea F3
1. Deschide Terminalul
1. Instalează F3 din brew prin rularea a `brew install f3`
   - Dacă nu ai brew, instalează-l cu instrucțiunile de pe [brew.sh](https://brew.sh)
1. Cu cardul SD introdus și montat, rulează `f3write <your sd card mount point>`
   - Așteaptă până procesul s-a încheiat. Vezi mai jos un exemplu de rezultat:
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. Rulează `f3read <your sd card mount point>`
   - Așteaptă până procesul s-a încheiat. Vezi mai jos un exemplu de rezultat:
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

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your SD card is healthy and you can delete all `.h2w` files on your SD card.

:::

::: danger

Dacă testul afișează orice alt rezultat, cardul tău SD ar putea fi corupt sau deteriorat și s-ar putea să trebuiască să-l înlocuiți!

:::

::::

:::::

::: tip

You can now restore the contents of your SD card and continue.

:::

