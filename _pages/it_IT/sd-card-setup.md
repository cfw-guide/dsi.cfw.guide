---
title: Configurazione Scheda SD
redirect_from:
  - /f3-(linux)
  - /h2testw-(windows)
  - /f3x-(mac)
  - /sd-prep
---

Questa pagina serve a preparare la scheda SD del tuo Nintendo DSi. In questo processo, formatteremo la scheda SD in un format adeguato per il Nintendo DSi e verificheremo eventuali errori della scheda.

Assicurarsi di eseguire il backup dei contenuti della scheda SD PRIMA di seguire la guida. La tua scheda SD verrà FORMATTATA e i file dentro essa verrano eliminati nel processo.
{: .notice--danger}

{% capture windowsInstructions %}
<noscript>
   <h2>Windows</h2>
</noscript>

## Sezione I - Formattazione della scheda SD

1. Scarica la versione più recente di [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)
  - Clicca sulla foto nel sito per scaricare l'applicazione
1. Esegui GUIFormat con i permessi dell'amministratore
1. Seleziona la lettera del drive
1. Imposta la tua `Allocation size unit` a `32768`
  - Se questa impostazione è troppo grande per la tua SD, seleziona quella più alta possibile
1. Assicurati che la casella `Quick Format` sia spuntata
1. Avvia il processo di formattazione

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)
{:.notice--info}

## Sezione II - Controllo degli errori
1. Vai alla finestra delle proprietà della scheda SD
   - `Windows Explorer` -> `Questo PC` -> Clicca con il tasto destro sulla tua scheda SD -> `Proprietà`
1. Nella scheda "tools", seleziona `Check Now`
1. Seleziona sia `Automatically fix file system errors` che `Scan for and attempt recovery of bad sectors`
1. Avvia il processo di controllo

Questo processo esegue la scansione della scheda SD, per correggere eventuali errori che trova

## Sezione III - Controllo lettura/scrittura della scheda SD

1. Scarica ed estrai [l'archivio h2testw](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) ovunque sul tuo computer.
   - Può anche essere estratto su un dispositivo esterno purché quel dispositivo esterno non sia la scheda SD
1. Con la scheda SD inserita nel computer, esegui `h2testw.exe`
1. Seleziona in quale lingua vuoi vedere h2testw
1. Imposta la lettera di unità della tua scheda SD come obiettivo
1. Assicurati che `all available space` sia selezionato
1. Clicca `Write + Verify`
- Attendere fino al completamento del processo

Se il test mostra il risultato `Test finito senza errori`, la tua scheda SD è buona e puoi eliminare tutti i `.file`.h2w sulla tua scheda SD
{: .notice--info}

Se il test mostra altri risultati, la tua scheda SD potrebbe essere corrotta o danneggiata e potrebbe essere necessario sostituirla!
{: .notice--danger}
{% endcapture %}

{% capture linuxInstructions %}
<noscript>
   <h2>Linux</h2>
</noscript>

## Sezione I - Determinazione dello slot in cui è presente la tua scheda SD
1. Assicurati che la tua scheda SD **non sia** inserita nella tua macchina Linux
1. Avvia il terminale Linux
1. Digita `orologio "lsblk"`
1. Inserisci la tua scheda SD nella tua macchina Linux
1. Osservare l'output. Dovrebbe corrispondere a qualcosa del genere:
```
NOME MAJ:MIN RM DIMENSIONE RO TYPE MOUNTPOINT
mmcblk0 179:0 0 3,8G 0 disco
한mmcblk0p1 179:1 0 3,7G 0 parte /run/media/user/FFFFFF
```
1. Prendi nota del punto di montaggio del dispositivo. Nel nostro esempio sopra, era `mmcblk0`
   - Se `RO` è impostato a 1, assicurati che l'interruttore di blocco non sia scivolato
1. Premi CTRL + C per uscire dal menu

## Sezione II - Formattazione della carta
![](https://s.blogcdn.com/www.engadget.com/media/2012/06/cfdisk.jpg)

1. Digita `sudo cfdisk /dev/(device mount point from above)`
1. Su ogni partizione, premi `Elimina`
1. Crea una nuova partizione Primaria che copre la dimensione dell'intera scheda SD
- Questo creerà una nuova partizione con il filetype linux
1. Seleziona il tipo e dai un'occhiata al menù
1. Trova `W95 FAT32` e prendi nota del codice a sinistra di quella voce
1. Premi qualsiasi tasto, quindi inserisci il codice di cui hai preso nota nel passaggio precedente
1. Premi enter, e dopo cliccare Quit

## Sezione III - Uso di F3
1. Scarica e estrai [the F3 archive](https://github.com/AltraMayor/f3/archive/v7.2.zip) ovunque sul tuo computer.
1. Lancia il terminale nella cartella F3
1. Esegui `make` per compilare F3
1. Con la tua scheda SD inserita e montata, esegui `./f3write <la tua scheda sd>`
   - Attendi che il processo sia completato. Vedi sotto per un esempio dell'output:
   ```
   $ ./f3write /media/michel/6135-3363/
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

Se il test mostra il risultato `Data LOST: 0.00 Byte (0 sectors)` la tua scheda SD è buona e puoi eliminare tutti i file `.h2w` dalla tua SD
{: .notice--info}

Se il test mostra qualsiasi altro risultato, la tua scheda SD potrebbe essere corrotta o danneggiata e potresti dover sostituirla!
{: .notice--danger}
{% endcapture %}

{% capture macosInstructions %}
<noscript>
   <h2>macOS</h2>
</noscript>

## Sezione I - Formattazione della scheda SD
### OS X El Capitan (10.11) e successivi

1. Avviare l'applicazione Utility Disco
1. Seleziona `Mostra tutti i dispositivi` nel pannello `Vista` in alto a sinistra
1. Seleziona la tua scheda SD dalla barra laterale
   - Assicurati di selezionare il dispositivo correto, altrimenti potresti formattare l'unità sbagliata!
1. Clicca `Partiziona` in alto
1. Assicurati che il `Formato` sia impostato su `MS-DOS (FAT32)`
   - Su El Capitan (10.11) attraverso Catalina (10.15) scegli `MS-DOS (FAT)`
1. Assicurati che `Scheme` sia impostato su `Master Boot Record (MBR)`
   - Se `Schema` non appare, clicca `Annulla` e assicurati di selezionare la SD invece di un volume
1. Clicca `Partizione`, e infine clicca `Chiudi`

### OS X Yosemite (10.10) e precedenti
1. Avvia l'applicazione Utility Disco
1. Seleziona la tua scheda SD dalla barra laterale
   - Assicurati di selezionare il dispositivo correto, altrimenti potresti formattare l'unità sbagliata!
1. Clicca `Partiziona` in alto
   - Se `Partiziona` non appare, assicurati di selezionare la SD invece di un volume
1. Assicurati che `Schema Volume` sia impostato su `1 Partizione`
1. Assicurati che `Formato` sia impostato su `MS-DOS (FAT)`
1. Dal pulsante Opzioni (sotto la tabella di partizione) seleziona `Master Boot Record (MBR)`.
1. Clicca `OK` -> `Applica` -> `Partiziona`

## Sezione II - Uso Di F3
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

Se il test mostra il risultato `Data LOST: 0.00 Byte (0 sectors)` la tua scheda SD è buona e puoi eliminare tutti i file `.h2w` dalla tua SD
{: .notice--info}

Se il test mostra qualsiasi altro risultato, la tua scheda SD potrebbe essere corrotta o danneggiata e potresti dover sostituirla!
{: .notice--danger}
{% endcapture %}

<div class="tabcontainer">
   <a class="tablinks btn btn--large btn--info windows" href="#windowsInstructions" onclick="openTab(event, 'windowsInstructions')">Windows</a>
   <a class="tablinks btn btn--large btn--info macos" href="#macosInstructions" onclick="openTab(event, 'macosInstructions')">macOS</a>
   <a class="tablinks btn btn--large btn--info other" href="#linuxInstructions" onclick="openTab(event, 'linuxInstructions')">Linux</a>

   <div id="windowsInstructions" class="blanktabcontent">{{ windowsInstructions | markdownify }}</div>
   <div id="linuxInstructions" class="blanktabcontent">{{ linuxInstructions | markdownify }}</div>
   <div id="macosInstructions" class="blanktabcontent">{{ macosInstructions | markdownify }}</div>
</div>

Ora puoi ripristinare il contenuto della tua scheda SD e continuare.
{: .notice--primary}

<script src="/assets/js/tabs.js"></script>
