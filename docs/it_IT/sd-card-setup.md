---
title: Configurazione Scheda SD
---

Questa pagina serve a preparare la scheda SD del tuo Nintendo DSi. In questo processo, formatteremo la scheda SD in un format adeguato per il Nintendo DSi e verificheremo eventuali errori della scheda.

::: danger

Assicurarsi di eseguire il backup dei contenuti della scheda SD PRIMA di seguire la guida. La tua scheda SD verrà FORMATTATA e i file dentro essa verrano eliminati nel processo.

:::

::::: tabs

:::: tab name="Windows" os="windows"

### Sezione I - Formattazione della scheda SD con SD Formatter

::: tip

Questa sezione serve per formattare la scheda SD secondo le specifiche della SD Card Association. Questo serve a risolvere problemi che potrebbero verificarsi con l'esecuzione di applicazione homebrew.

:::

::: danger

Tutte le schede SD da 64GB o più saranno formattate in `exFAT` con questo processo. _Devi_ seguire la Sezione II per riformattare in `FAT32`.

:::

1. Scarica la versione più recente di [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
   - Accetta il Contratto di Licenza per avviare il download
1. Esegui `SD Card Formatter Setup` (il file `.exe`) nel file `.zip` scaricato, con i privilegi Amministratore, quindi installa il programma
1. Esegui `SD Card Formatter` dal Menu Start con i privilegi Amministratore
1. Seleziona la tua scheda SD
1. Assicurati che la casella `Quick Format` sia spuntata
1. Avvia il processo di formattazione

### Sezione II - Formattazione della scheda SD con GUIFormat

Questa sezione serve per formattare schede SD più grandi di 32GB in FAT32.

::: tip

Se la tua scheda SD ha una capacità di 32GB o meno, salta questa sezione e vai alla Sezione III.

:::

1. Scarica la versione più recente di [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)
   - Clicca sulla foto nel sito per scaricare l'applicazione
1. Esegui GUIFormat con i permessi dell'amministratore
1. Seleziona la lettera del drive
1. Imposta la tua `unità di dimensioni di allocazione` a `32768`
   - Se questa impostazione è troppo grande per la tua SD, seleziona quella più alta possibile
1. Assicurati che la casella `Quick Format` sia spuntata
1. Avvia il processo di formattazione

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)

### Sezione III - Controllo degli errori
1. Vai alla finestra delle proprietà della scheda SD
   - `Windows Explorer` -> `Questo PC` -> Clicca con il tasto destro sulla tua scheda SD -> `Proprietà`
1. Nella scheda "tools", seleziona `Check Now`
1. Seleziona sia `Automatically fix file system errors` che `Scan for and attempt recovery of bad sectors`
1. Avvia il processo di controllo

Questo processo esegue la scansione della scheda SD per correggere eventuali errori.

### Sezione IV - Controllo lettura/scrittura della scheda SD

1. Scarica ed estrai [l'archivio h2testw](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) ovunque sul tuo computer.
   - Può anche essere estratto su un dispositivo esterno purché quel dispositivo esterno non sia la scheda SD
1. Con la scheda SD inserita nel computer, esegui `h2testw.exe`
1. Seleziona in quale lingua vuoi vedere h2testw
1. Imposta la lettera di unità della tua scheda SD come obiettivo
1. Assicurati che `all available space` sia selezionato
1. Clicca `Write + Verify`
- Attendere fino al completamento del processo

::: tip

Se il test mostra il risultato `Test finito senza errori`, la tua scheda SD è buona e puoi eliminare tutti i `.file`.h2w sulla tua scheda SD.

:::

::: danger

Se il test mostra altri risultati, la tua scheda SD potrebbe essere corrotta o danneggiata e potrebbe essere necessario sostituirla!

:::

::::

:::: tab name="Linux" os="other"

### Sezione I - Formattazione della scheda SD
1. Assicurati che la tua scheda SD **non sia** inserita nella tua macchina Linux
1. Avvia il terminale Linux
1. Digita `orologio "lsblk"`
1. Inserisci la tua scheda SD nella tua macchina Linux
1. Osserva l'output. Dovrebbe corrispondere a qualcosa del genere:
```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```
1. Prendi nota del mount point del dispositivo. Nel suddetto esempio, era `mmcblk0p1`
   - Se `RO` è impostato a 1, assicurati che l'interruttore di blocco non sia scivolato
1. Premi CTRL + C per uscire dal menu
1. Segui le istruzione relative alla capacità della tua scheda SD:
   - 2GB o meno: Digita `sudo mkdosfs /dev/(device mount point from above) -s 64 -F 16` per creare una singola partizione FAT16 con una dimensione del cluster di 32KB nella scheda SD
   - 4GB o più: Digita `sudo mkdosfs /dev/(device mount point from above) -s 64 -F 32` per creare un'unica partizione FAT32 con una dimensione del cluster di 32KB nella scheda SD

### Sezione II - Uso Di F3
1. Scarica ed estrai [l'archivio F3](https://github.com/AltraMayor/f3/archive/v7.2.zip) in un percorso qualsiasi sul tuo computer.
1. Avvia il terminale nella directory F3
1. Esegui `make` per compilare F3
1. Con la scheda SD inserita e montata, avvia `./f3write <your sd card mount point>`
   - Attendi che il processo venga completato. Qui sotto vedrai un esempio di output:
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. Esegui `./f3read <your sd card mount point>`
- Attendi che il processo venga completato. Qui sotto vedrai un esempio di output:
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

Se il test mostra `Data LOST: 0.00 Byte (0 sectors)` come risultato, la tua scheda SD è buona e puoi eliminare tutti i file `.h2w` dalla scheda SD.

:::

::: danger

Qualora il test dovesse mostrare qualsiasi altro risultato, la tua scheda SD potrebbe essere corrotta o danneggiata e potrebbe essere necessario sostituirla!

:::

::::

:::: tab name="macOS" os="macos"

### Sezione I - Formattazione della scheda SD con SD Formatter

::: tip

Questa sezione serve per formattare la scheda SD secondo le specifiche della SD Card Association. Questo serve a risolvere problemi che potrebbero verificarsi con l'esecuzione di applicazione homebrew.

:::

::: danger

Tutte le schede SD da 64GB o più saranno formattate in `exFAT` con questo processo. _Devi_ seguire la Sezione II per riformattare in `FAT32`.

:::

1. Scarica la versione più recente di [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/)
   - Accetta il Contratto di Licenza per l'Utente Finale per avviare il download
1. Esefui `Install SD Card Formatter` (il file `.mpkg`) nel file`.zip` scaricato
1. Esegui `Sd Card Formatter`
1. Seleziona la tua scheda SD
1. Assicurati che la casella `Quick Format` sia spuntata
1. Avvia il processo di formattazione

### Sezione II - Formattazione della scheda SD con Utility Disco

Questa è una sezione di formattazione di schede SD più grandi di 32GB a FAT32.

::: tip

Se la tua scheda SD ha una capacità di 32 GB o inferiore, salta alla sezione III.

:::

#### OS X El Capitan (10.11) e successivi

1. Avviare l'applicazione Utility Disco
1. Seleziona `Mostra tutti i dispositivi` nel pannello `Vista` in alto a sinistra
1. Seleziona la tua scheda SD dalla barra laterale
   - Assicurati di selezionare il dispositivo correto, altrimenti potresti formattare l'unità sbagliata!
1. Clicca su `Cancella` in alto
1. Assicurati che il `Formato` sia impostato su `MS-DOS (FAT32)`
   - Su El Capitan (10.11) attraverso Catalina (10.15) scegli `MS-DOS (FAT)`
1. Assicurati che `Schema` sia impostato su `Master Boot Record (MBR)`
   - Se `Schema` non appare, clicca `Annulla` e assicurati di selezionare il dispositivo invece di un volume
1. Clicca `Cancella`, e infine clicca `Chiudi`

#### OS X Yosemite (10.10) e precedenti
1. Avvia l'applicazione Utility Disco
1. Seleziona la tua scheda SD dalla barra laterale
   - Assicurati di selezionare il dispositivo correto, altrimenti potresti formattare l'unità sbagliata!
1. Clicca `Partiziona` in alto
   - Se `Partiziona` non appare, assicurati di selezionare la SD invece di un volume
1. Assicurati che `Schema Volume` sia impostato su `1 Partizione`
1. Assicurati che `Formato` sia impostato su `MS-DOS (FAT)`
1. Dal pulsante Opzioni (sotto la tabella di partizione) seleziona `Master Boot Record (MBR)`.
1. Clicca `OK` -> `Applica` -> `Partiziona`

### Sezione III - Uso di F3
1. Apri il terminale
1. Installa F3 da brew esegunedo `brew install f3`
   - Se non hai brew, installalo con le istruzioni su [brew.sh](https://brew.sh)
1. Con la scheda SD inserita e montata, esegui run `f3write <your sd card mount point>`
   - Attendi che il processo sia completato. Vedi sotto per un esempio dell'output:
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. Esegui `./f3write <la tua scheda sd>`
   - Attendi che il processo sia completato. Vedi sotto per un esempio dell'output:
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

Se il test mostra `Data LOST: 0.00 Byte (0 sectors)` come risultato, la tua scheda SD è buona e puoi eliminare tutti i file `.h2w` dalla scheda SD.

:::

::: danger

Se il test mostra altri risultati, la tua scheda SD potrebbe essere corrotta o danneggiata e potrebbe essere necessario sostituirla!

:::

::::

:::::

::: tip

Ora puoi ripristinare il contenuto della tua scheda SD e continuare.

:::

