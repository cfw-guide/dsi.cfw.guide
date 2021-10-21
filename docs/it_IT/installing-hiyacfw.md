---
title: Installazione di hiyaCFW
---

{% include toc title="Table of Contents" %}

Non aggiornare il sistema dopo l'installazione di hiyaCFW. Rimuoverà le patch di hiyaCFW fatte alla SD.
{: .notice--danger}

hiyaCFW è un custom firmware che vi permetterà di avviare la NAND del sistema (archiviazione interna) sulla scheda SD.

Questo ti permette di installare le tue app nel menu del Nintendo DSi senza rischi di brick, visto che sono installate sulla scheda SD in modo che eventuali problemi possano essere facilmente risolti.

Dispone inoltre di una facile installazione di applicazioni homebrew nel Menu DSi e di una schermata di avvio personalizzata all'avvio.

Questa sezione è completamente facoltativa. Se Unlaunch è sufficiente per te, puoi fermarti qui.
{: .notice--primary}

## Requisiti
- Una console Nintendo DSi con [Unlaunch](/installing-unlaunch) installato sopra
- Un backup della NAND prelevato dal dispositivo utilizzando lo strumento di dumping
   - Se non ne hai uno, segui la nostra guida [Dump della NAND](dumping-nand)
- Un dispositivo Windows, macOS o Linux

## Sezione I - Preparazione del PC per l'installazione di hiyaCFW

{% capture windowsPrep %}
<noscript>
   <h3>Windows</h3>
</noscript>

1. Scarica & installa l'ultima versione di [7-Zip](https://www.7-zip.org/download.html)
   - Questo non funzionerà con qualsiasi altro strumento di estrazione di archivio che possiedi, come WinRAR. hiyaCFW helper si basa su 7-Zip stesso, e non ad un estrattore di archivio generale
1. Scarica l'ultima versione Windows di [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
   - Se non è possibile scaricarlo perché è un "virus", controllare un pulsante di autorizzazione o utilizzare un browser diverso, non è in realtà un virus
1. Estrai l'archivio hiyaCFW Helper ovunque sul tuo PC
{% endcapture %}

{% capture macosPrep %}
<noscript>
   <h3>macOS</h3>
</noscript>

1. Scarica l'ultima versione macOS di [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Estrai l'archivio hiyaCFW Helper ovunque sul tuo PC
{% endcapture %}

{% capture linuxPrep %}
<noscript>
   <h3>Linux</h3>
</noscript>

1. Installa Python 3 usando il gestore di pacchetti se non è già installato
1. Scarica l'ultima versione Python di [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Estrai l'archivio hiyaCFW Helper ovunque sul tuo PC
1. Assicurati che i pacchetti Python necessari siano installati eseguendo `pip3 install -r requirements.txt` nella directory contenente i file estratti
   - Puoi installare pip con `python3 -m ensurepip`
{% endcapture %}

<div class="tabcontainer">
   <a class="tablinks btn btn--large btn--info delink windows" href="#windowsPrep" onclick="openTab(event, 'windowsPrep')">Windows</a>
   <a class="tablinks btn btn--large btn--info delink macos" href="#macosPrep" onclick="openTab(event, 'macosPrep')">macOS</a>
   <a class="tablinks btn btn--large btn--info delink other" href="#linuxPrep" onclick="openTab(event, 'linuxPrep')">Linux</a>

   <div id="windowsPrep" class="blanktabcontent">{{ windowsPrep | markdownify }}</div>
   <div id="macosPrep" class="blanktabcontent">{{ macosPrep | markdownify }}</div>
   <div id="linuxPrep" class="blanktabcontent">{{ linuxPrep | markdownify }}</div>
</div>

## Sezione II - Aggiungere file hiyaCFW alla tua scheda SD

![Schermata di HiyaCFW Helper](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Avvia hiyaCFW Helper
  - **Windows:** - Avvia il file `HiyaCFW_Helper.exe` estratto dall'archivio hiyaCFW Helper (potrebbe essere necessario disattivare temporaneamente il tuo antivirus)
  - **macOS:** - Fare clic con il pulsante destro del mouse sul file `HiyaCFW_Helper` estratto dall'archivio hiyaCFW Helper e scegliere `Apri`
  - **Linux:** - Avvia il `HiyaCFW_Helper.py` estratto dall'archivio hiyaCFW Helper
1. Fare clic sul pulsante `...` nella casella "NAND file with No$GBA footer"
1. Vai al backup della NAND e clicca `Apri`
1. Premi `Avvia`
1. Nella nuova finestra pop-up, vai nella tua scheda SD e premi `OK`.
   - Il processo può richiedere diversi minuti
1. Quando l'applicazione dice "Fatto", esci da hiyaCFW Helper
1. Chiudi la finestra del terminale

## Sezione III - Configurazione di Unlaunch e hiyaCFW

1. Avvia la console Nintendo DSi tenendo premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
   - Questo dovrebbe portarti al menu di Unlaunch
1. Vai a `OPTIONS` -> `NO BUTTON`
1. Seleziona `hiyaCFW` e premi <kbd class="face">A</kbd>
   - Questo farà avviare hiyaCFW all'avvio del sistema
1. Salva le impostazioni e riavvia la console
1. Tieni premuto <kbd>SELECT</kbd> mentre accendi la console Nintendo DSi per accedere alle impostazioni di hiyaCFW
   - Se hai selezionato "Installa l'ultimo TWiLight Menu++ sul custom firmware", per avviarsi nella schermata Home della SDNAND invece di TWiLight Menu++ navigare a `Titolo di avvio automatico` e premere <kbd class="face">A</kbd> per deselezionarlo.
1. Cambia le impostazioni a tuo piacimento e premi <kbd>INIZIA</kbd> per continuare

Il sistema si avvierà dalla scheda SD invece che dalla NAND interna.

Se mostra `Si è verificato un errore`, consulta la nostra pagina [Risoluzione dei problemi](troubleshooting).
{: .notice--warning}

<script src="/assets/js/tabs.js"></script>
