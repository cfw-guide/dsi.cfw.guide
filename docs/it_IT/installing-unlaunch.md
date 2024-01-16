---
title: Installazione di Unlaunch
---

::: warning

If you do not have access to a PC, or if your PC is running ChromeOS, then please do not install Unlaunch. A PC (running Windows, Linux, or macOS) is required in order to fix some issues that may occur after installing Unlaunch.

:::

::: danger

Se non lo hai ancora fatto, sei pregato di seguire [Effettuare dump della NAND](dumping-nand.html). Nonostante le probabilità minime, Unlaunch potrebbe accidentalmente causare un brick al tuo Nintendo DSi. Un backup della NAND + [un hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) ti permetterebbe di ripristinare questo backup, a condizione che tu sappia come saldare.

:::

::: warning

Assicurati che la console sia carica quando si esegue questo processo. Uno spegnimento improvviso potrebbe causare gravi danni.

:::

::: warning

Unlaunch non è compatibile con le console di sviluppo Nintendo DSi.

:::

## Sezione I - Configurazione della scheda SD

1. Scarica l'ultima versione di [Unlaunch](https://problemkaputt.de/unlaunch.zip)
    - [Link Mirror](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), se quello sopra non funziona
1. Estrai `UNLAUNCH.DSI` da `unlaunch.zip` e mettilo ovunque sulla tua scheda SD
1. Verifica di avere ancora TWiLight Menu++ sulla tua scheda SD
    - Se non ne sei sicuro, segui le instruzioni alla [guida all'installazione di TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## Sezione II - Installazione/Aggiornamento di Unlaunch

1. Avvia TWiLight Menu++
    - Se questa è la tua prima volta che installi Unlaunch, avvia TWiLight Menu++ attraverso l'[exploit che hai utilizzato](launching-the-exploit.html)
    - Se hai già installato Unlaunch e stai cercando di aggiornarlo, tieni premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd> durante l'avvio e seleziona `TWiLight Menu++`
    - Se più opzioni sono etichettate `TWiLight Menu++`, seleziona l'opzione in cui `BOOT. NDS` è mostrato alla fine del percorso nella schermata inferiore
      - Questo accade perché hai una versione vecchia di TWiLight Menu++, e a meno che tu non lo stia facendo apposta, è cosigliato di [aggiornare la tua installazione](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
1. Apri le impostazioni di TWiLight Menu++
    - Se non hai cambiato tema, premi `SELECT` e tocca la piccola icona del DS nella parte inferiore del touch screen. Altrimenti, consulta il Manuale di TWiLight Menu++
1. Premi <kbd class="l">L</kbd> / <kbd class="r">R</kbd> o <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> finché non raggiungi la pagina `Impostazioni Unlaunch`
1. Se vuoi modificare l'immagine di sfondo di Unlaunch, fai clic su `Sfondo` e scegli quello che vuoi
    - Se desideri creare il tuo sfondo di Unlaunch, consulta la [pagina della Wiki di DS-Homebrew](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Esci dalle impostazioni di TWiLight Menu++
1. Avvia `Unlaunch DSi Installer` dal menu di navigazione
    - Se vedi due schermate nere dopo l'avvio, scarica [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), sposta il file .dsi nella root della scheda SD, avvia GodMode9i utilizzando TWiLight Menu++ e infine avvia `Unlaunch.dsi`    
      Questo metodo non consente a Unlaunch di utilizzare patch e sfondi personalizzati
1. Seleziona l'opzione d'installazione
    - Se Unlaunch si blocca a `ERROR: MISMATCH IN FAT COPIES`, si prega di dare un'occhiata alla pagina [Risoluzione dei problemi](troubleshooting.html)
1. Una volta completato, riavvia il sistema

Se vedi la schermata del menu di Unlaunch a questo punto, significa che hai modificato con successo il tuo Nintendo DSi.
- Se vedi una schermata nera, dai un'occhiata alla pagina [Risoluzione dei problemi](troubleshooting.html)

## Sezione III - Configurazione di Unlaunch

Attualmente, Unlaunch apre il suo menu all'avvio per impostazione predefinita, ma può essere cambiato aprendo all'avvio quello che vuoi.

1. Accendi la console tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
    - Si dovrebbe avviare il menu di Unlaunch
    - If nothing is listed, or if only `TWiLight Menu++` isn't listed (even after scrolling down), then you'll need to [reformat the SD card](sd-card-setup.html)
1. Vai a `OPTIONS`, e guarda le opzioni disponibili
    - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> è stato fatto in codifica fissa per avviarsi nel menu di Unlaunch, e perciò non può essere modificato
    - Le opzioni `NO BUTTON` e `BUTTON A /B / X / Y` possono essere impostate come preferisci e sceglieranno come caricare il tuo DSi all'avvio a seconda dei pulsanti che vengono premuti. Puoi selezionare qualsiasi DSiWare, homebrew, la scheda Slot-1, wifiboot, o il menu di Unlaunch
      - Per TWiLight Menu++, seleziona  `TWiLight Menu++`
      - Per il menu DSi originale, seleziona `Launcher`
    - `LOAD ERROR` è quello che il tuo DSi caricherà se il caricamento di quello che hai impostato fallisce, come ad esempio se la scheda SD non viene inserita
1. Seleziona `SALVA ed ESCI` per salvare le tue impostazioni, poi spegni il tuo DSi

## Sezione IV - Pulizia della scheda SD

::: tip

Questa sezione è facoltativa e serve solo per mantenere la scheda SD ordinata.

:::

:::: tabs

::: tab name="Memory Pit" default

- Elimina il file `sd:/private/ds/app/484E494A/pit.bin` dalla tua scheda SD
- Rename `tip.bin` back to `pit.bin`, and leave it intact
- You can now restore the `DCIM` folder that was on the root of your SD card
- Elimina il file `UNLAUNCH.DSI` dalla tua scheda SD

:::

::: tab name="Flipnote Lenny"

- Elimina i file `800031_104784BAB6B57_000.ppm` e `T00031_1038C2A757B77_000.ppm` dall'interno delle seguenti cartelle:
    - `sd:/private/ds/app/4B47554A/001` (Giappone)
    - `sd:/private/ds/app/4B475545/001` (USA)
    - `sd:/private/ds/app/4B475556/001` (Europa/Australia)
    - È inoltre possibile eliminare le cartelle per le altre regioni
- Elimina il file `UNLAUNCH.DSI` dalla tua scheda SD

:::
