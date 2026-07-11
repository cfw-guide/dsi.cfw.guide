# Configurazione scheda SD

Questa pagina serve a preparare la scheda SD per il tuo dispositivo. In questo processo, formatteremo la scheda SD e controlleremo la presenza di errori.

::: danger

Assicuratindi fare dei backup ai contenuti della scheda SD PRIMA di seguire la guida. La tua scheda SD verrà FORMATTATA e i file dentro essa verrano eliminati nel processo.

:::

::::: tabs

:::: tab default Windows

### Sezione I - Formattazione della scheda SD con sdFormatWindows

::: warning

Usare gli strumenti di formattazione integrati in Windows **non** è consigliato in quanto può causare problemi di compatibilità con homebrew, in quanto non formatta le schede SD alle specifiche corrette imposte da SD Association.

:::

1. Scarica la versione più recente di [sdFormatWindows](https://github.com/flashcarts/sdFormatWindows/releases/latest/download/sdFormatWindows.exe)
2. Esegui `sdFormatWindows` (il file `.exe`) da dove l'hai scaricato, dandogli i permessi di amministratore
3. Seleziona la tua scheda SD
   - Se la scheda è di **32GB o inferiore**, puoi usare le impostazioni predefinite
   - Altrimenti, abilita **"Format as FAT32"** e **"Force 32KiB Cluster Size"**
4. Premi `Format` per avviare il processo di formattazione

### Sezione II - Controllo lettura/scrittura della scheda SD

1. Scarica ed estrai [l'archivio h2testw](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) ovunque sul tuo computer
   - Se il link qui sopra non ti funziona, scarica [da archive.org](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)
   - Può anche essere estratto su un dispositivo esterno purché quel dispositivo esterno non sia la scheda SD
2. Con la scheda SD inserita nel computer, esegui `h2testw.exe`
3. Seleziona in quale lingua vuoi vedere h2testw
4. Imposta la lettera di unità della tua scheda SD come obiettivo
5. Assicurati che `all available space` sia selezionato
6. Clicca `Write + Verify` (Se questa opzione è grigia, assicurati di formattare la scheda SD con i passaggi nella Sezione I)

- Attendere fino al completamento del processo

::: tip

Se il test mostra il risultato `Test finito senza errori`, la tua scheda SD è buona e puoi eliminare tutti i `.file`.h2w sulla tua scheda SD.

:::

::: danger

Se il test mostra altri risultati, la tua scheda SD potrebbe essere corrotta o danneggiata e potrebbe essere necessario sostituirla!

:::

::::

:::: tab Linux

::: tip

Questa sezione riguarda la formattazione della scheda SD secondo le specifiche della SD Card Association. Serve a risolvere problemi che potrebbero verificarsi con l'esecuzione di applicazione homebrew.

:::

::: danger

Tutte le schede SD da 64GB o più grandi saranno formattate in `exFAT` con questo processo. _Devi_ seguire la Sezione I e II per riformattare in `FAT32`.

:::

### Sezione I - Formattazione della scheda SD con sdFormatLinux

1. Assicurati che la tua scheda SD **non sia** inserita nella tua macchina Linux
2. Scarica ed estrai l'ultima versione di [sdFormatLinux](https://github.com/profi200/sdFormatLinux/releases/download/v0.2.0/sdFormatLinux_v0.2.0.7z) sul tuo computer
3. Avvia il terminale Linux
4. Digita `orologio "lsblk"`
5. Inserisci la tua scheda SD nella tua macchina Linux
6. Osserva l'output. Dovrebbe corrispondere a qualcosa del genere:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Prendi nota del nome del dispositivo. Nell'esempio sopra, era `mmcblk0`
   - Se `RO` è impostato a 1, assicurati che l'interruttore di blocco non sia scivolato
   - Assicurati di mirare il **dispositivo**, `mmcblk0`, non la partizione, `mmcblk0p1`
2. Premi CTRL + C per uscire dal menu
3. Naviga dove hai estratto sdFormatLinux
4. Esegui `sudo ./sdFormatLinux -f -e trim /dev/(nome dispositivo in alto)` per formattare la scheda SD

::: tip

Se ottieni un messaggio di errore con: `Error: Device is mounted`, esegui `sudo umount /dev/(nome della partizione in alto)` per completare il passaggio precedente.

:::

### Sezione II - Formattazione della scheda SD con mkdosfs

Questa sezione formatta schede SD che sono 64GB o più grandi di FAT32.

::: tip

Se la tua scheda SD ha una capacità di 32GB o minori, salta questa sezione e vai alla Sezione III.

:::

1. Assicurati che la tua scheda SD **non sia** inserita nella tua macchina Linux
2. Avvia il terminale Linux
3. Digita `orologio "lsblk"`
4. Inserisci la tua scheda SD nella tua macchina Linux
5. Osserva l'output. Dovrebbe corrispondere a qualcosa del genere:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Prendi nota del nome della partizione. Nell'esempio sopra, era `mmcblk0p1`
   - Se `RO` è impostato a 1, assicurati che l'interruttore di blocco non sia scivolato
   - Assicurati di puntare alla **partizione**: `mmcblk0p1`, non il dispositivo, `mmcblk0`
2. Premi CTRL + C per uscire dal menu
3. Esegui `sudo mkdosfs /dev/(nome partizione in alto) -s 64 -F 32` per formattare la tua scheda SD in FAT32

### Sezione III - Uso di F3

1. Scarica ed estrai [l'archivio F3](https://github.com/AltraMayor/f3/archive/v9.0.zip) in un percorso qualsiasi sul tuo computer.
2. Avvia il terminale nella directory F3
3. Esegui `make` per compilare F3
4. Con la scheda SD inserita e montata, avvia `./f3write <your sd card mount point>`
   - Attendi che il processo sia completato. Qui sotto vedrai un esempio di output:
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
5. Esegui `./f3write <la tua scheda sd>`

- Attendi che il processo sia completato. Qui sotto vedrai un esempio di output:
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

Se il test mostra `Data LOST: 0.00 Byte (0 sectors)` come risultato, la tua scheda SD va bene e puoi eliminare tutti i file `.h2w` dalla scheda SD.

:::

::: danger

Se il test mostra altri risultati, la tua scheda SD potrebbe essere corrotta o danneggiata e potrebbe essere necessario sostituirla!

:::

::::

:::: tab macOS

### Sezione I - Formattazione della scheda SD con SD Formatter

::: tip

Questa sezione riguarda la formattazione della scheda SD secondo le specifiche della SD Card Association. Serve a risolvere problemi che potrebbero verificarsi con l'esecuzione di applicazione homebrew.

:::

::: danger

Tutte le schede SD da 64GB o più grandi saranno formattate in `exFAT` con questo processo. _Devi_ seguire la Sezione II per riformattare in `FAT32`.

:::

1. Scarica la versione più recente di [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/)
   - Accetta il contratto di licenza per l'utente finale per avviare il download
2. Esefui `Install SD Card Formatter` (il file `.mpkg`) nel file`.zip` scaricato
3. Esegui `Sd Card Formatter`
4. Seleziona la tua scheda SD
5. Assicurati che la casella `Quick Format` sia spuntata
6. Avvia il processo di formattazione

### Sezione II - Formattazione della scheda SD con Utility Disco

Questa sezione serve per formattare schede SD più grandi di 32GB in FAT32.

::: tip

Se la tua scheda SD ha una capacità di 32GB o minori, salta questa sezione e vai alla Sezione III.

:::

#### OS X El Capitan (10.11) e successivi

1. Avviare l'applicazione Utility Disco
2. Seleziona `Mostra tutti i dispositivi` nel pannello `Vista` in alto a sinistra
3. Seleziona la tua scheda SD dalla barra laterale
   - Assicurati di selezionare il dispositivo correto, altrimenti potresti formattare l'unità sbagliata!
4. Clicca su `Cancella` in alto
5. Assicurati che il `Formato` sia impostato su `MS-DOS (FAT32)`
   - Su El Capitan (10.11) attraverso Catalina (10.15) scegli `MS-DOS (FAT)`
6. Assicurati che `Schema` sia impostato su `Master Boot Record (MBR)`
   - Se `Schema` non appare, clicca `Annulla` e assicurati di selezionare il dispositivo invece di un volume
7. Clicca `Cancella`, e infine clicca `Chiudi`

#### OS X Yosemite (10.10) e precedenti

1. Avviare l'applicazione Utility Disco
2. Seleziona la tua scheda SD dalla barra laterale
   - Assicurati di selezionare il dispositivo correto, altrimenti potresti formattare l'unità sbagliata!
3. Clicca `Partiziona` in alto
   - Se `Partiziona` non appare, assicurati di selezionare la SD invece di un volume
4. Assicurati che `Schema Volume` sia impostato su `1 Partizione`
5. Assicurati che `Formato` sia impostato su `MS-DOS (FAT)`
6. Dal pulsante Opzioni (sotto la tabella di partizione) seleziona `Master Boot Record (MBR)`.
7. Clicca `OK` -> `Applica` -> `Partiziona`

### Sezione III - Uso di F3

1. Apri il terminale
2. Installa F3 da brew esegunedo `brew install f3`
   - Se non hai brew, installalo con le istruzioni su [brew.sh](https://brew.sh)
3. Con la scheda SD inserita e montata, esegui run `f3write <your sd card mount point>`
   - Attendi che il processo sia completato. Qui sotto vedrai un esempio di output:
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
4. Esegui `./f3read <your sd card mount point>`
   - Attendi che il processo sia completato. Qui sotto vedrai un esempio di output:
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

Se il test mostra `Data LOST: 0.00 Byte (0 sectors)` come risultato, la tua scheda SD va bene e puoi eliminare tutti i file `.h2w` dalla scheda SD.

:::

::: danger

Se il test mostra altri risultati, la tua scheda SD potrebbe essere corrotta o danneggiata e potrebbe essere necessario sostituirla!

:::

::::

:::::

::: tip

Ora è possibile ripristinare i contenuti della scheda SD e continuare.

:::

