# Effettuare dump della NAND

Questa pagina riguarda la creazione di un backup della NAND, una copia dei dati della memoria interna del Nintendo DSi. Può essere usato per installare hiyaCFW, e per l'emulazione del DSi tramite no$gba e melonDS.

::: tip

Assicurati che la scheda SD abbia almeno 250MB di spazio libero, altrimenti riceverai un messaggio di errore da dumpTool.

:::

::: tip

È fortemente consigliato effettuarne uno. Un backup della NAND può essere utilizzato come punto di ripristino in futuro, nel caso in cui il DSi smetta di funzionare.

:::

## Sezione I - Configurazione della scheda SD

::: tip

Se hai già scaricato dumpTool da un'altra sezione di questa guida, puoi saltare questa parte.

:::

1. Scarica l'ultima versione di [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Posiziona `dumpTool.nds` in un percorso qualsiasi sulla tua scheda SD

## Sezione II - Effettuare dump della NAND

1. Avvia `dumpTool` attraverso il menu che hai installato
   - Se hai usato un exploit per avviarlo, e sei già nel menu di dumpTool, ignora questo passaggio
   - If Unlaunch is already installed and you we're directed to this page from the [Get Started](get-started.html#section-ii-checking-if-unlaunch-is-already-installed) page, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting
2. Premi il pulsante <kbd class="face">A</kbd> sul tuo Nintendo DSi per iniziare a creare un backup della NAND
   - Un backup della NAND richiede di solito circa 7 minuti
3. Quando il backup della NAND è completato, premi il pulsante <kbd>START</kbd> sul tuo Nintendo DSi per uscire da dumpTool
4. Spegni la console e inserisci la scheda SD nel tuo computer
5. Sulla scheda SD, vai dove è posizionato `dumpTool.nds` e vedrai una nuova cartella chiamata `DT######...` che contiene il backup della NAND
   - Se dumptool viene scaricato dalla pagina [Per iniziare](get-started.html), sarà chiamato `boot.nds`
   - All'interno della cartella c'è `nand.bin` che è il backup stesso, e `nand.bin.sha1` che è l'hash SHA1 del backup
6. Salva la cartella `DT######...` in un posto sicuro, dove non lo perderai
   - Se possibile, effettua molteplici backup su diversi dispositivi di archiviazione
   - Una volta conservato il backup altrove, lo si può eliminare dalla scheda SD
7. Se hai avviato dumpTool tramite un exploit, ed è stato scaricato dalla pagina [Per iniziare](get-started.html), elimina `boot.nds` dalla scheda SD

::: warning

L'hash SHA1 del `nand.bin` non corrisponderà all'hash memorizzato in `nand.bin.sha1`. Questo accade poiché dumpTool aggiunge dei dati aggiuntivi, noti come footer no$gba, al file `nand.bin` dopo che l'hash SHA1 è stato calcolato. Puoi usare [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) per creare una copia senza il footer.

:::

::: tip

Prosegui a [Scegliere un menu](choosing-a-menu.html)

:::
