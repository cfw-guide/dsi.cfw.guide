---
title: Backup DSiWare
redirect_from:
  - more/dumping-dsiware-from-3ds
  - more/dumping-dsiware
  - dsiware
  - more/installing-dsiware
  - installing-dsiware
---

{% include toc title="DSiWare Backups" %}

## Requisiti
- L'ultima versione di [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - Scarica l'archivio, estrai il contenuto e posizionalo `GodMode9i.nds` ovunque sulla tua scheda SD
- Una console Nintendo DSi con [Unlaunch](/unlaunch) installato

## Nintendo DSi - Istruzioni

### Sezione I - Identificare il percorso del file .app
1. Avvia la console Nintendo DSi tenendo premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
   - Dovrebbe portarti al menu di Unlaunch
1. Identifica la tua applicazione nell'elenco
   - Un testo verde chiaro indica che è installato nella NAND

Quando si passa sopra la voce, la schermata inferiore dovrebbe mostrare il percorso. Prendete nota del percorso.

Un esempio di percorso sarebbe `nand:/title/0030005/484e4a45/content/00000003.app`
{: .notice--info}

### Sezione II - Estrazione del file
1. Avvia GodMode9i tramite il menu di Unlaunch
1. Passa a SYSNAND, e poi naviga attraverso il percorso di cui avete precedentemente preso nota
1. Evidenzia il file `.app`, poi premi <kbd class="l">L</kbd> per aggiungerlo agli appunti
   - Ripeti questo processo per tutti i file che si desidera copiare nella stessa directory
1. Naviga nella scheda SD fino alla directory in cui si desidera inserire il titolo DSiWare dumpato
1. Premi <kbd class="face">Y</kbd> per incollare il titolo DSiWare dumpato nella directory in cui stai navigando

Ora dovresti vedere il titolo DSiWare in TWiLight Menu++ o nel menu di Unlaunch.
