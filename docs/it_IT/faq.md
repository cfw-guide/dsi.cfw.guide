---
title: FAQ
---

## Quale funzionalità perderò moddando il mio sistema?
- Se decidi di installare Unlaunch, non perderai nessuna funzionalità di sistema
- Se utilizzerai una configurazione con soltanto Memory-Pit, non sarà possibile salvare le foto sulla scheda SD tramite l'applicazione Fotocamera Nintendo DSi mentre l'exploit è installato. Puoi o passare ad un [exploit alternativo](alternate-exploits) o [installare Unlaunch](installing-unlaunch)
   - Questo poiché il file metadata (`pit.bin`) viene sovrascritto con l'exploit Memory Pit

## Come faccio a riprodurre i backup delle cartucce di gioco per Nintendo DS?
Giocare dump delle cartucce sulla console richiede l'uso di una flashcart o di nds-bootstrap, un programma che consente di riprodurre i giochi dalla scheda SD interna reindirizzando le scritture e le letture della slot-1.
- Con TWiLight Menu++ puoi navigare nella tua scheda SD per trovare i file ROM da giocare con nds-bootstrap. I vantaggi di utilizzare TWiLight Menu++ sono di avere un menu per i trucchi, per le impostazioni per gioco, e di evitare le restrizioni che le scorciatoie portano. In altre parole, è possibile rilasciare i file ROM direttamente e giocare senza alcuna configurazione. Non c'è nessun limite di 39 titoli, né hiyaCFW o Unlaunch sono necessari e non ci sono restrizioni sullo spazio libero della scheda SD che si può avere
- Gli utenti di hiyaCFW possono creare scorciatoie per il menu DSi della SDNAND utilizzando la guida alle [Scorciatoie per i Giochi DS](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) sulla DS-Homebrew Wiki, ma si hanno alcune limitazioni. C'è un limite non aggirabile di 39 titoli, sono meno convenienti da fare che usare TWiLight Menu++
   - Se non hai hiyaCFW e volessi usare scorciatoie, puoi seguire la [guida all'Installazione di hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) sulla DS-Homebrew Wiki

## Come faccio ad aggiornare il mio homebrew?
- **Unlaunch** - Segui le istruzioni sulla pagina [Installazione di Unlaunch](installing-unlaunch)
   - **Non** devi disinstallare Unlaunch prima di farlo
- **hiyaCFW** - Sostituisci `hiya.dsi` nella scheda SD con la [versione aggiornata](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Segui le istruzioni sulla [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copia `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` nella cartella `_nds` sulla scheda SD
   - Se si utilizza TWiLight Menu++, c'è un'alta probabilità che l'ultima versione di nds-bootstrap sia inclusa con TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, ecc** - Segui le istruzioni su come scaricarli

Altri homebrew potrebbero usare altri metodi per gli aggiornarmenti.

## Sono nuovo o vorrei rifare la mia configurazione. Da dove devo cominciare?
- Se non hai già modificato la console o stai cercando di aggiornare Unlaunch sul tuo sistema, si consiglia di partire dall'inizio della guida e di seguirla attraverso le pagine. Assicurati di leggere tutto sulla pagina principale
- Se hai l'ultima versione di Unlaunch ma non vuoi hiyaCFW, segui la Sezione 1b di [Avvio dell'Exploit](launching-the-exploit.html#twilight-menu) per impostare TWiLight Menu++ sul tuo sistema

## Come posso eliminare il filtro famiglia?
- Il [generatore mkey](https://mkey.salthax.org) può generare il codice per rimuovere il filtro famiglia

## Come posso cambiare la regione del mio Nintendo DSi?
Sì, ci sono alcuni metodi diversi a seconda di ciò che si desidera cambiare:
- Il metodo più semplice e sicuro è quello di installare semplicemente TWiLight Menu++, può utilizzare qualsiasi lingua ufficiale e altro senza bisogno di modifiche della NAND
- Se si desidera effettivamente cambiare la regione di sistema e si sta utilizzando hiyaCFW, è possibile utilizzare [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) di Yoti
- Infine, se si desidera cambiare la regione sulla NAND di sistema attuale, è possibile utilizzare il [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/) di Mighty Max

## Cosa è successo alla guida all'installazione di hiyaCFW?
Poiché hiyaCFW non è molto pratico ed è stato un passaggio problematico e confusionario della guida per parecchi utenti, la guida è stata spostata alla [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).
- Se sei stato collegato alla pagina in questione da un'altra guida, le istruzioni che stai seguendo sono obsolete. Si prega invece di utilizzare questa guida, dato che viene aggiornata costantemente dagli sviluppatori di questi progetti

## Che tipo di scheda SD dovrei utilizzare?
- È necessario acquistare una scheda SD da un marchio di fiducia
- Funzionerà sia una scheda SD sia una scheda microSD con un adattatore
- Qualsiasi capacità compresa tra 1 GB e 2 TB andrà bene. Per uso generale, 8 GB sono sufficienti
  - Alcuni software, come hiyaCFW, possono sperimentare tempi di caricamento molto più lunghi con schede SD con capienze più grandj
- Si raccomanda una classe di velocità 8 o superiore

## Posso usare la mia scheda SD del DSi su altri sistemi?
Generalmente sì, ma con due eccezioni:
- hiyaCFW funzionerà solo sul sistema per cui è stato creato
- Anche se stai usando nds-bootstrap o una flashcard, i codici amico e i giochi online NDS verranno reimpostati quando si tenta di andare online utilizzando una console diversa

## La pagina di [Unlaunch](https://problemkaputt.de/unlaunch.htm) dice che la versione 2.0 non è notoriamente sicura. Dovrei usare una versione precedente?
La pagina di Unlaunch non è stata aggiornata da quando è stata rilasciata la versione 2.0, più di due anni fa. La stragrande maggioranza degli utenti non hanno problemi con questa versione, e perciò è considerata sicura.
