---
title: "FAQ"
redirect_from:
  - help/faq
---

{% include toc title="Questions" %}

### Quale funzionalità perderò moddando il mio sistema?
- Se decidi di installare Unlaunch, non perderai nessuna funzionalità di sistema
- Se si va con una configurazione con soltango memory-pit, non sarà possibile salvare le foto sulla scheda SD tramite l'applicazione Fotocamera Nintendo DSi mentre l'exploit è installato. Puoi o passare ad un [exploit alternativo](alternate-exploits) o [installare Unlaunch](/installing-unlaunch)

Questo perché il file di metadata (`pit.bin`) viene sovrascritto con l'exploit Memory Pit.

### Come faccio a riprodurre i backup delle cartucce Nintendo DS?
Giocare dump delle cartucce sulla console richiede l'uso di una flashcart o di nds-bootstrap, un programma che consente di riprodurre i giochi dalla scheda SD interna reindirizzando le scritture e le letture della slot-1.
- Con TWiLight Menu++ puoi navigare nella tua scheda SD per trovare i file ROM da giocare con nds-bootstrap. I vantaggi di utilizzare TWiLight Menu++ sono di avere un menu di trucchi, di impostazioni per gioco, e di evitare le restrizioni che le scorciatoie portano. In altre parole, è possibile rilasciare i file ROM direttamente e giocare senza alcuna configurazione. Non c'è nessun limite di 39 titoli, né hiyaCFW o Unlaunch sono necessari e non ci sono restrizioni sullo spazio libero della scheda SD che si può avere
- gli utenti di hiyaCFW possono creare [scorciatoie](nds-bootstrap-forwarders) per la SDNAND del menu del DSi, ma si hanno alcune limitazioni. C'è un limite di 39 titoli, sono meno convenienti da fare e non sono provviste automaticamente di patch anti-pirateria

### Come faccio ad aggiornare il mio homebrew?
- **Unlaunch** - Segui le istruzioni sulla pagina [Installazione di Unlaunch](/installing-unlaunch)
- **hiyaCFW** - Sostituisci `hiya.dsi` nella scheda SD con la [versione aggiornata](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Segui le istruzioni sulla [wiki di GitHub](https://github.com/DS-Homebrew/TWiLightMenu/wiki/updating-%28dsi%29)
- **nds-bootstrap** - Copia `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` nella cartella `_nds` sulla scheda SD
   - Se si utilizza TWiLight Menu++, c'è un'alta probabilità che l'ultima versione di nds-bootstrap sia inclusa con TWiLight Menu++
- **GodMode9i, dumpTool, MakeForwarder, ecc** - Segui le istruzioni su come scaricarli

Altri homebrew potrebbero usare altri metodi per gli aggiornarmenti.

### Sono nuovo o vorrei rifare la mia configurazione. Da dove devo cominciare?
- Se non hai già modificato la console o stai cercando di aggiornare Unlaunch senza usare hiyaCFW sul tuo sistema, si consiglia di partire dall'inizio della guida e di seguirla attraverso le pagine. Assicurati di leggere tutto sulla pagina principale
- Se hai l'ultima versione di Unlaunch ma non vuoi hiyaCFW, segui la Sezione 1b di [Avvio dello Exploit](launching-the-exploit#twilight-menu) per impostare TWiLight Menu++ sul tuo sistema
- Se hai già Unlaunch e vuoi installare hiyaCFW, segui la pagina [Installazione di hiyaCFW](installing-hiyacfw), poi torna alla pagina [Installazione di Unlaunch](installing-unlaunch) per aggiornare Unlaunch
   - hiyaCFW Helper, lo strumento utilizzato per l'installazione di hiyaCFW, viene fornito con l'opzione di installare TWiLight Menu++. Non c'è bisogno di installare TWiLight Menu++ separatamente
   - Successivamente, dal momento che utilizziamo TWiLight Menu++ per avviare il programma di installazione di Unlanch, ecco perché aggiorniamo Unlaunch dopo aver impostato hiyaCFW
