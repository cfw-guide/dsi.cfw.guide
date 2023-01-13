---
title: Effettuare dump della NAND
---

Questa pagina riguarda la creazione di un backup della NAND, una copia dei dati della memoria interna del Nintendo DSi. Può essere usato per installare hiyaCFW, e per l'emulazione del DSi tramite no$gba e melonDS.

::: tip

Make sure the SD card has at least 250MB of free space, or else you'll run into an error message in dumpTool.

:::

::: tip

It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.

:::

## Sezione I - Configurazione della Scheda SD

::: tip

If you have already downloaded dumpTool from another section of this guide, you can skip this section.

:::

1. Scarica l'ultima versione di [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Posiziona `dumpTool.nds` in un percorso qualsiasi sulla tua scheda SD


## Sezione II - Dump della NAND

1. Avvia `dumpTool` attraverso TWiLight Menu++
1. Premi il pulsante <kbd class="face">A</kbd> sul tuo Nintendo DSi per iniziare a creare un backup della NAND
   - Un backup della NAND richiede in genere circa 7 minuti
1. Quando il backup della NAND è completato, premi il pulsante <kbd>START</kbd> sul tuo Nintendo DSi per uscire da dumpTool
1. Spegni la console e inserisci la scheda SD nel tuo computer
1. Salva questo backup in un posto sicuro, dove non lo perderai
   - Se possibile, effettua molteplici backup su diversi dispositivi di archiviazione
   - Una volta conservato il backup altrove, lo si può eliminare dalla scheda SD

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
