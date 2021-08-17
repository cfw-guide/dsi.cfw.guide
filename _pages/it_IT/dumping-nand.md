---
title: Dumpare la NAND
---

Questa pagina serve per fare un backup della NAND, che è una copia dei dati sulla memoria interna del Nintendo DSi. Può essere usato per impostare hiyaCFW e NO$GBA.

Si consiglia vivamente di farlo. Un backup della NAND può essere utilizzato come punto di ripristino in futuro, nel caso in cui il DSi smetta di funzionare.
{: .notice--primary}

## Sezione I - Configurazione della Scheda SD

Usi un dispositivo Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) per configurare automaticamente la tua scheda SD.
{: .notice--info}

1. Scarica l'ultima versione di [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Posiziona `dumpTool.nds` in un percorso qualsiasi sulla tua scheda SD

## Sezione II - Dump della NAND
1. Avvia `dumpTool` attraverso TWiLight Menu++
1. Premi il pulsante <kbd class="face">A</kbd> sul tuo Nintendo DSi per iniziare a scaricare la NAND
   - Un backup della NAND richiede in genere circa 7 minuti
1. Quando il backup della NAND è completato, premi il pulsante <kbd>START</kbd> sul tuo Nintendo DSi per uscire da dumpTool
1. Spegni la console e inserisci la scheda SD nel tuo computer
1. Memorizza questo backup in un posto sicuro, dove non lo perderai
   - Se possibile, effettua molteplici backup su diversi dispositivi di archiviazione
   - Una volta conservato il backup altrove, lo si può eliminare dalla scheda SD

L'hash SHA1 del `nand.bin` non corrisponderà all'hash memorizzato in `nand.bin.sha1`. Questo accade poiché dumpTool aggiunge dei dati aggiuntivi, noti come footer NO$GBA, al file `nand.bin` dopo che l'hash SHA1 è stato calcolato. È possibile utilizzare [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) per creare una copia senza il footer.
{: .notice--warning}

Continua a [Installazione di Unlaunch](installing-unlaunch) (Facoltativa)
{: .notice--info}
