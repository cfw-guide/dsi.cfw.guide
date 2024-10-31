# Effettuare dump della NAND

Questa pagina riguarda la creazione di un backup della NAND, una copia dei dati della memoria interna del Nintendo DSi. Può essere usato per installare hiyaCFW, e per l'emulazione del DSi tramite no$gba e melonDS.

::: tip

Assicurati che la scheda SD abbia almeno 1250MB di spazio libero, altrimenti riceverai un messaggio di errore da dumpTool.

:::

::: tip

Si consiglia vivamente di farlo. Un backup della NAND può essere utilizzato come punto di ripristino in futuro, nel caso in cui il DSi smetta di funzionare.

:::

## Sezione I - Configurazione della scheda SD

::: tip

Se hai già scaricato dumpTool da un'altra sezione di questa guida, puoi saltare questa parte.

:::

1. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Place `dumpTool.nds` anywhere on your SD card

## Sezione II - Dump della NAND

1. Launch `dumpTool` through TWiLight Menu++
2. Premi il pulsante <kbd class="face">A</kbd> sul tuo Nintendo DSi per iniziare a creare un backup della NAND
   - Un backup della NAND richiede in genere circa 7 minuti
3. Quando il backup della NAND è completato, premi il pulsante <kbd>START</kbd> sul tuo Nintendo DSi per uscire da dumpTool
4. Spegni la console e inserisci la scheda SD nel tuo computer
5. Salva questo backup in un posto sicuro, dove non lo perderai
   - Se possibile, effettua molteplici backup su diversi dispositivi di archiviazione
   - Una volta conservato il backup altrove, lo si può eliminare dalla scheda SD

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
