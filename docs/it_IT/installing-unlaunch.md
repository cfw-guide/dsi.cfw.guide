---
title: Installazione di Unlaunch
---

Unlaunch è un exploit che si svolge all'avvio del sistema. Questo gli permette di avere più privilegi dei normali exploit DSiWare come Memory Pit, che lo rende in grado di fare quanto segue:

- Esecuzione di applicazioni all'avvio (homebrew o DSiWare), con combinazioni di pulsanti opzionali
- Accedere alla Slot-1, che consente di dumpare cartucce di gioco e lanciare flashcard incompatibili
- Rimuovere blocchi regionali sui giochi DSi-Enhanced / cartucce di gioco esclusive
- Eseguire i vecchi Homebrew del Nintendo DS tramite nds-bootstrap-hb
- Protezione contro i brick
- Quanto segue per gli utenti di Memory Pit (altri exploit li consentono già):
     - Migliorare la compatibilità con DSiWare avviato dalla scheda SD
     - Avere audio migliore in GBARunner2

::: danger

Se non l'hai ancora fatto, si prega di seguire [Effettuare dump della NAND](dumping-nand). Nonostante le probabilità minime, Unlaunch potrebbe accidentalmente provocare un brick al Nintendo DSi. Un backup della NAND + [un hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) ti permetterebbe di ripristinare questo backup, a condizione che tu sappia come saldare.

:::

::: warning

Assicurati che la console sia carica quando si esegue questo processo. Una perdita improvvisa di potenza potrebbe causare gravi danni.

:::

## Sezione I - Configurazione della Scheda SD

::: tip

Usi un dispositivo Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) per configurare automaticamente la tua scheda SD.

:::

1. Scarica l'ultima versione di [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Link Mirror](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), se quello sopra non funziona
1. Estrai `UNLAUNCH.DSI` da `unlaunch.zip` e mettilo ovunque sulla tua scheda SD
1. Verifica di avere ancora TWiLight Menu++ sulla tua scheda SD
   - Se non sei sicuro, segui le istruzioni dalla pagina [Avvio dell'Exploit](launching-the-exploit.html#twilight-menu)

## Sezione II - Installazione/Aggiornamento Unlaunch

1. Avvia TWiLight Menu++
   - Se questa è la tua prima volta che installi Unlaunch, rilancia TWiLight Menu++ attraverso l'exploit che hai utilizzato
   - Se hai già installato Unlaunch e stai cercando di aggiornarlo, tieni premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd> durante l'avvio e seleziona ` TWiLight Menu++` dove `BOOT.NDS` è mostrato nella schermata inferiore
1. Apri le impostazioni di TWiLight Menu++
   - Se non hai cambiato il tuo tema, segui i passaggi nella pagina "Avvio dell'Exploit". Altrimenti, consulta il manuale di TWiLight Menu++
1. Premi <kbd class="l">L</kbd> / <kbd class="r">R</kbd> o <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> finché non raggiungi la pagina `Impostazioni Unlaunch`
1. Se vuoi modificare l'immagine di sfondo di Unlaunch, fai clic su `Sfondo` e scegli quello che vuoi
   - Se desideri creare un tuo sfondo personalizzato di Unlaunch, consulta la pagina [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Se vuoi la schermata Salute e Sicurezza e la musica del Menu DSi, imposta `Patch del Launcher` a `Disattivato`
   - Questo manterrà pure il region lock e la whitelist delle cartucce, il che significa che alcune flashcard non saranno utilizzabili nel menu DSi
1. Esci dalle impostazioni di TWiLight Menu++
1. Nel menu di navigazione, avvia `Unlaunch DSi Installer`
1. Selezionare l'opzione di installazione
   - Se Unlaunch si blocca a `ERROR: MISMATCH IN FAT COPIES`, si prega di dare un'occhiata alla pagina [Risoluzione dei problemi](troubleshooting)
1. Una volta completato, riavvia il sistema

Se vedi la schermata del menu di Unlaunch a questo punto, Significa che hai modificato con successo il tuo Nintendo DSi.
- Se vedi una schermata nera, dai un'occhiata alla nostra pagina [Risoluzione dei problemi](troubleshooting)

## Sezione III - Configurazione Post-Unlaunch

Attualmente, Unlaunch avvia il suo menu all'avvio di default, ma può essere cambiato avviando all'avvio quello che vuoi.

Riconfigureremo anche nds-bootstrap per avviarsi in TWiLight Menu++ (invece del titolo DSiWare sfruttato) quando eseguiamo un soft-reset in-gioco.

1. Accendi la console tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
   - Si dovrebbe avviare il menu di Unlaunch
1. Vai a `OPTIONS`, e guarda le opzioni disponibili
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> è stato fatto in codifica fissa per avviarsi nel menu di Unlaunch, e perciò non può essere modificato
   - Le opzioni `NO BUTTON` e `BUTTON A /B / X / Y` possono essere impostate come preferisci e sceglieranno come caricare il tuo DSi all'avvio a seconda dei pulsanti che vengono premuti. Puoi selezionare qualsiasi DSiWare, homebrew, la scheda Slot-1, wifiboot, o il menu di Unlaunch
      - Per TWiLight Menu++, selezionare l'opzione `TWiLight Menu++` dove `BOOT.NDS` è mostrato sullo schermo inferiore
      - Per il menu DSi originale, seleziona `Launcher`
   - `LOAD ERROR` è quello che il tuo DSi caricherà se il caricamento di quello che hai impostato fallisce, come ad esempio se la scheda SD non viene inserita
1. Seleziona `SALVA ed ESCI` per salvare le tue impostazioni, poi spegni il tuo DSi

## Sezione IV - Pulizia della scheda SD

::: tip

Questa sezione è opzionale e serve solo per mantenere la scheda SD ordinata di file che non ti servono.

:::

- Elimina il file `sd:/private/ds/app/484E494A/pit.bin` dalla tua scheda SD
   - Se hai usato un altro exploit, elimina invece i file relativi a quell'exploit
- Elimina il file `UNLAUNCH.DSI` dalla tua scheda SD
