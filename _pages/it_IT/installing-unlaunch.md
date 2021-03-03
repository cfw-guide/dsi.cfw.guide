---
title: "Installazione di Unlaunch"
redirect_from:
  - /guide/installing-unlaunch
  - /unlaunch
---

{% include toc title="Navigation" %}

Unlaunch è un exploit che si svolge all'avvio del sistema. Questo gli permette di avere privilegi più alti del normale Memory Pit, che lo rende in grado di fare quanto segue:

- Avvio di applicazioni all'avvio (homebrew o DSiWare), con combinazioni di pulsanti opzionali
- Accesso alla Slot-1, che consente di dumpare cartucce e lanciare flashcart incompatibili
- Blocchi regionali rimossi ai giochi DSi enhanced / esclusivi
- Esegui i vecchi Homebrew del Nintendo DS tramite nds-bootstrap-hb
- Avvio di DSiWare dalla scheda SD interna
- Suono migliore in GBARunner2
- Protezione-Brick

Se non l'hai ancora fatto, fai un backup della NAND [](dumping-nand). Nonostante la minuscola probabilità, Unlaunch potrebbe accidentalmente provocare un brick al Nintendo DSi. Un backup della NAND + [un hardmod](https://web.archive.org/web/20151102221503/https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/) ti permetterebbe di ripristinare questo backup, a condizione che tu sappia come saldare.
{: .notice--danger}

Assicurarsi che la console sia caricata quando si segue questo processo. Una perdita improvvisa di potenza potrebbe causare gravi danni.
{: .notice--warning}

## Sezione I - Preparazioni della scheda SD

Usi un dispositivo Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) per configurare automaticamente la tua scheda SD.
{: .notice--info}

1. Scarica l'ultima versione di [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Link Mirror](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), se quello sopra non funziona
1. Estrai `UNLAUNCH.DSI` da `unlaunch.zip` e mettilo ovunque sulla tua scheda SD
1. Verifica di avere ancora TWiLight Menu++ sulla tua scheda SD
   - Se non sei sicuro, segui le istruzioni dalla pagina [Avvio dell'Exploit](launching-the-exploit#twilight-menu).

## Sezione Ii - Installazione/Aggiornamento Unlaunch

1. Avvia TWiLight Menu++
   - Se questa è la tua prima volta che installi Unlaunch, rilancia TWiLight Menu++ attraverso l'exploit che hai utilizzato.
   - Se hai già installato Unlaunch e stai cercando di aggiornarlo, tieni premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd> durante l'avvio e seleziona ` TWiLight Menu++` dove `BOOT.NDS` è mostrato nella schermata inferiore
1. Apri le impostazioni di TWiLight Menu++
   - Se non hai cambiato il tuo tema, segui i passaggi nella pagina "Avvio dell'Exploit". Altrimenti, consulta il manuale di TWiLight Menu++
1. Premi <kbd class="l">L</kbd> / <kbd class="r">R</kbd> fino a raggiungere la pagina Impostazioni di Unlaunch
1. Se vuoi modificare l'immagine di sfondo di Unlaunch, fai clic su `Sfondo` e scegli quello che vuoi
1. Se vuoi la schermata Salute e Sicurezza e la musica del Menu DSi, imposta `Patch di Launcher` a `Disattivato`
   - Ciò impedirà anche di rimuovere il blocco della regione
1. Esci dalle impostazioni di TWiLight Menu++
1. Nel menu di navigazione, avvia `Unlaunch DSi Installer`
1. Selezionare l'opzione di installazione
   - Se Unlaunch si blocca a `ERROR: MISMATCH IN FAT COPIES`, si prega di dare un'occhiata alla pagina [Risoluzione dei problemi](troubleshooting)
1. Una volta completato, riavvia il sistema

Se vedi la schermata del menu di Unlaunch a questo punto, Significa che hai modificato con successo il tuo Nintendo DSi.
- Se vedi una schermata nera, dai un'occhiata alla nostra pagina [Risoluzione dei problemi](troubleshooting)

## Sezione II - Configurazione Post-Unlaunch

Attualmente Unlaunch avvia il suo menu all'avvio di default, ma questo può essere cambiato avviando all'avvio quello che vuoi.

Riconfigureremo anche nds-bootstrap per avviarsi in TWiLight Menu++ (invece del titolo DSiWare sfruttato) quando eseguiamo un soft-reset in-gioco.

1. Accendi la console tenendo premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
1. Vai a `OPTIONS`, e guarda le opzioni disponibili
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> è stato fatto in codifica fissa per avviarsi nel menu di Unlaunch, e perciò non può essere modificato
   - Le opzioni `NO BUTTON` e `BUTTON A/B/X/Y` possono essere impostate come preferisci e sceglierai come carica il tuo DSi all'avvio a seconda dei pulsanti che vengono premuti. Puoi selezionare qualsiasi DSiWare, Homebrew, la scheda Slot-1 o il menu di Unlaunch
      - Per TWiLight Menu++, selezionare l'opzione `TWiLight Menu++` dove `BOOT.NDS` è mostrato sullo schermo inferiore
      - Per il menu DSi originale, seleziona `Launcher`
   - `LOAD ERROR` è quello che il tuo DSi caricherà se il caricamento di quello che hai impostato fallisce, come ad esempio se la scheda SD non viene inserita
1. Salva le tue impostazioni e torna nel menu di Unlaunch
1. Passa sopra le opzioni `TWiLight Menu++` e trova quella che ha un percorso contenente `impostazioni.srldr` nella schermata inferiore
1. Avvia l'opzione evidenziata
1. Usa i pulsanti <kbd class="l">L</kbd> e <kbd class="r">R</kbd> per passare al pulsante "Varie. Pagina impostazioni"
1. Imposta la voce "DSiWare Exploit" su "Nessuno"

## Sezione III - Pulizia della scheda SD

Questa sezione è opzionale e serve solo per mantenere la scheda SD ordinata di file che non ti servono.
{: .notice--primary}

- Elimina il file `sd:/private/ds/app/484E494A/pit.bin` dalla tua scheda SD
   - Se hai usato un altro exploit, elimina invece i file relativi a quel exploit
- Elimina il file `UNLAUNCH.DSI` dalla tua scheda SD

Continua su [Installazione di HiyaCFW](installing-hiyacfw) (facoltativo)
{: .notice--info}
