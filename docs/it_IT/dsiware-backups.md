---
title: Backup DSiWare
---

## Requisiti
- L'ultima versione di [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - Scarica l'archivio, estrai il contenuto e posizionalo `GodMode9i.nds` ovunque sulla tua scheda SD

## Nintendo DSi - Istruzioni

### Sezione I - Identificazione del DSiWare desiderato
1. Avvia GodMode9i e seleziona `[nand:] SYSNAND`
1. Naviga fino alla cartella `title`
1. Scegli la cartella in base alla categoria che stai cercando
   - `00030004`: DSiWare Standard
   - `00030005`: Strumenti di divertimento preinstallati
   - `0003000f`: Dati di sistema (file non-DSiWare, non possono essere eseguiti)
   - `00030015`: Strumenti base del sistema
   - `00030017`: Launcher
1. Una volta scelto quale tipo di DSiWare si desidera estrarre, entra in una sottocartella, e inserisci `content`
1. Adesso dovrebbe essere visibile un file `.app`. Seleziona il file, e scegli `Show NDS file info`. Indicherà se è il DSiWare che stai cercando
   - Se non lo è, continua a cercare in altre cartelle fino a quando non lo trovi
   - I file in `0003000f` non possono avere visualizzate le loro informazioni sui file NDS poiché non sono DSiWare avviabili e non contengono un banner valido

### Sezione II - Estrazione del DSiWare
1. Evidenzia il file `.app`, poi premi <kbd class="face">L</kbd> per aggiungerlo agli appunti
1. Naviga nella scheda SD fino alla directory in cui si desidera inserire il titolo DSiWare di cui è stato eseguito il dump
1. Premi <kbd class="face">Y</kbd> per incollare il titolo DSiWare nella directory in cui stai navigando
   - Puoi cambiare il nome del file dopo averlo incollato premendo <kbd class="face">X</kbd> mentre stai tenendo premuto <kbd class="R">R</kbd>
   - Ripeti questo processo per tutti i file che si desidera copiare nella stessa directory

Ora dovresti vedere il titolo DSiWare o in TWiLight Menu++ o nel menu di Unlaunch.

### Sezione III - Estrazione del file di salvataggio (facoltativo)
1. Nella stessa cartella di `content` per il tuo DSiWare specificato, ci sarà una cartella chiamata `data`
1. L'interno della cartella `data` è il file di salvataggio. Copia questo file nella tua scheda SD nello stesso modo in cui lo hai fatto per il titolo DSiWare
   - Unlaunch e nds-bootstrap usano le estensioni file `.pub` e `.prv` per i file di salvataggio dei DSiWare. Se il tuo file di salvataggio DSiWare era inizialmente chiamato `public.sav`, usa l'estensione `.pub`, mentre se invece il file di salvataggio era originariamente intitolato `private.sav`, utilizza l'estensione `.prv`
   - Se si desidera utilizzare i file di salvataggio DSiWare con TWiLight Menu++, assicurati di posizionarli nella cartella `saves` localizzata insieme alle tue ROM
