---
title: FAQ
---

## Devo aggiornare il sistema?
**Non** è consigliato aggiornare il tuo DSi a meno che non sai che ci sono DSiWare acquistati. Mentre è ancora possibile seguire questa guida se lo fai, l'unico vantaggio di aggiornare la console è la possibilità di accedere al Nintendo DSi Shop per scaricare i titoli già acquistati. Tutti gli altri vantaggi, come l'integrazione di Facebook nell'applicazione Fotocamera Nintendo DSi, non sono più utilizzabili o non sono sufficientemente significativi da giustificare gli aspetti negativi:

- L'installazione di aggiornamenti di sistema è conosciuta per causare occasionalmente dei **brick** alle console, con approssimativamente la stessa frequenza di quando si installa Unlaunch
- Gli exploit più vecchi non sono più possibili da usare, che potrebbero essere necessari se non sei in grado di utilizzare gli exploit consigliati
- La compatibilità con le flashcard è minore, tuttavia questo è bypassato se si installa Unlaunch

## Qual è l'exploit migliore?
Unlaunch è nel complesso il miglior exploit per il DSi, con l'unico lato negativo è che c'è un rischio minore di causare un brick all'installazione. In generale si consiglia di utilizzare Memory Pit per installare Unlaunch. Se desideri evitare qualsiasi rischio si consiglia invece di utilizzare Flipnote Lenny in quanto ha meno problemi in homebrew rispetto a Memory Pit mentre è altrettanto sicuro e semplice da rimuovere. Sotto c'è una lista di tutti i pro e i contro di ciascun exploit:

### Memory Pit
Pro:
- Facile e semplice da usare
- Nessun rischio di danneggiare la console, la disinstallazione è talmente semplice che basta rimuovere la scheda SD o eliminare un file
- Compatibile con tutte le console DSi a meno che non abbiano una fotocamera rotta e non abbiano completato il tutorial dellla fotocamera

Contro:
- Richiede di aprire l'app Fotocamera Nintendo DSi ogni volta che si desidera accedere all'homebrew
- Incompatibile con alcuni titoli in modalità DSi e applicazioni homebrew a causa di WRAM aperto solo alla CPU ARM7
- L'accesso alla Slot-1 (la scheda di gioco DS) è bloccato con gli homebrew
- L'accesso al DSP è bloccato e ciò comporta un peggioramento del suono in GBARunner2
- Le foto sulla scheda SD non possono essere visualizzate tramite l'applicazione Fotocamera Nintendo DSi mentre Memory Pit è installato, dato che ciò attiverebbe l'exploit
    - L'unico modo per visualizzare le foto della scheda SD mentre Memory Pit è installato è tramite l'esecuzione di un dump della ROM dell'applicazione Fotocamera Nintendo DSi usando **TW**i**L**ight Menu++ per avviarlo tramite nds-bootstrap (v0.61.3 o successive)

### stylehax
Pro:
- Migliore compatibilità con titoli e app homebrew in modalità DSi rispetto a Memory Pit
- Facile da usare
- Nessun rischio di danneggiare la console
- Utilizzabile su console con fotocamera rotta
- Audio migliore in GBARunner2

Contro:
- Richiede accesso a internet
- Richiede di aprire DSi Browser ogni volta che si desidera accedere all'homebrew, e ciò richiede un po' più di tempo rispetto a Memory Pit
- L'accesso alla Slot-1 (la scheda di gioco DS) è bloccato con gli homebrew

### Flipnote Lenny
Pro:
- Migliore compatibilità con titoli e app homebrew in modalità DSi rispetto a Memory Pit
- Nessun rischio di danneggiare la console, la disinstallazione è talmente semplice che basta rimuovere la SD o eliminare una cartella
- Utilizzabile su console con fotocamera rotta
- Audio migliore in GBARunner2

Contro:
- Richiede di aprire Flipnote Studio ogni volta che si desidera accedere all'homebrew e ciò richiede poco più tempo di Memory Pit
- L'accesso alla Slot-1 (la scheda di gioco DS) è bloccato con gli homebrew

### Unlaunch
Pro:
- Consente di aprire app homebrew e DSiWare immediatamente all'avvio del sistema, con tasti di scelta rapidi opzionali
- Pieno accesso al sistema senza alcuna limitazione, tra cui:
    - Accesso alla Slot-1 che consente di eseguire i backup di schede di gioco e l'avvio di flashcard non compatibili
    - Audio migliore in GBARunner2
- Rimuove i blocchi regionali sulle schede di gioco DSi-Enhanced/Esclusive DSi
- Protezione contro la maggior parte dei modi con cui un DSi potrebbe rompersi
- I giochi DSi-Enhanced possono essere eseguiti in modalità DSi senza una ROM donatrice
- Vecchie app homebrew possono essere eseguite tramite nds-bootstrap-hb

Contro:
- Un bassissimo rischio di **rompere** la console durante l'installazione
- Un altro rischio, leggermente più alto, di rompere la console se si decide di [disinstallarlo](uninstalling-unlaunch.html)
- Non compatibile con console di sviluppo

## Perderò qualche funzionalità se modifico il mio sistema?
Se si installa Unlaunch o si usa Flipnote Lenny, non si perderà alcuna funzionalità. Se si usa Memory Pit, non sarà possibile visualizzare le foto sulla scheda SD utilizzando la fotocamera DSi, a meno che non avvii un dump ROM dell'applicazione Fotocamera Nintendo DSi utilizzando **TW**i**L**ight Menu++ per avviarlo tramite nds-bootstrap.
- Per recuperare la possibilità di visualizzare le foto salvate sulla scheda SD quando avvii la Fotocamera Nintendo DSi dal menu DSi installa Unlaunch o passa a un exploit differente, poi elimina il file `pit.bin`
    - Se `tip.bin` esiste ancora nella stessa cartella, rinominalo a `pit.bin`

## Come faccio a giocare ai backup delle schede di gioco per Nintendo DS?
Giocare ai backup delle schede di gioco sulla console richiede l'uso di una flashcard o di nds-bootstrap, un programma che consente di riprodurre i giochi dalla scheda SD interna reindirizzando le scritture e le letture della Slot-1.
- Con TWiLight Menu++ puoi navigare nella tua scheda SD per trovare i file ROM da avviare tramite nds-bootstrap. I vantaggi di utilizzare TWiLight Menu++ sono di avere un menu per i trucchi, impostazioni per gioco, e di evitare le restrizioni che le scorciatoie comportano. In altre parole, è possibile spostare i file ROM direttamente e giocare senza alcuna configurazione. Non c'è nessun limite di 39 titoli, né hiyaCFW o Unlaunch sono necessari e non ci sono restrizioni sullo spazio libero della scheda SD che si può avere
- gli utenti di hiyaCFW possono creare scorciatoie per il menu DSi della SDNAND utilizzando la guida [Scorciatoie per i giochi DS](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) sulla DS-Homebrew Wiki, ma hanno alcune limitazioni. C'è un limite non aggirabile di 39 titoli, e sono meno convenienti da creare rispetto all'uso di TWiLight Menu++
    - Se non hai hiyaCFW e volessi usare le scorciatoie, puoi seguire la [guida all'Installazione di hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) sulla DS-Homebrew Wiki

## Come faccio ad aggiornare il mio homebrew?
- **Unlaunch** - Segui le istruzioni sulla pagina [Installazione di Unlaunch](installing-unlaunch.html)
    - **Non** devi disinstallare Unlaunch prima di farlo
- **hiyaCFW** - Sostituisci `hiya.dsi` nella scheda SD con la [versione aggiornata](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Segui le istruzioni sulla [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copia `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` nella cartella `_nds` sulla scheda SD
    - Se utilizzi TWiLight Menu++, c'è un'alta probabilità che l'ultima versione di nds-bootstrap sia inclusa con TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, ecc** - Segui le istruzioni su come scaricarli

Altre app homebrew potrebbero usare altri metodi per essere aggiornate.

## Sono nuovo o vorrei rifare la mia configurazione. Da dove inizio?
- Se non hai già modificato la console o stai cercando di aggiornare Unlaunch sul tuo sistema, si consiglia di partire dall'inizio della guida e di seguirla attraverso le pagine. Assicurati di leggere tutto sulla pagina principale
- Se hai l'ultima versione di Unlaunch, segui la [guida per l'installazione di TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) per installare TWiLight Menu++ sul tuo sistema

## Come posso eliminare il filtro famiglia?
- Il [generatore mkey](https://mkey.salthax.org) può generare il codice necessario per rimuovere il filtro famiglia

## Posso cambiare la regione del mio Nintendo DSi?
Sì, ci sono alcuni metodi diversi a seconda di ciò che si desidera cambiare:
- Il metodo più semplice e sicuro è quello di installare semplicemente TWiLight Menu++, può utilizzare qualsiasi lingua ufficiale e altre senza bisogno di modifiche alla NAND
- Se desideri effettivamente cambiare la regione di sistema e utilizzi hiyaCFW, apri il menu di configurazione e cambia l'impostazione della regione (non è possibile con NAND CHN o KOR)
    - Se ciò rompe l'input del touch screen, rimetti la regione originale e utilizza piuttosto [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) di Yoti per i sistemi DSi asiatici. Per i DSi americani utilizza [questa versione di hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Infine, se si desidera cambiare la regione sulla NAND di sistema, è possibile utilizzare il [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/) di Mighty Max

## Cosa è successo alla guida all'installazione di hiyaCFW?
Poiché hiyaCFW non è molto pratico ed è stato un passaggio problematico e confusionario della guida per parecchi utenti, È stata spostata alla [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).
- Se sei stato collegato alla pagina in questione da un'altra guida, le istruzioni che stai seguendo sono obsolete. È consigliato invece di utilizzare questa guida, dato che viene aggiornata costantemente dagli sviluppatori di questi progetti

## Cosa è successo con Lazy DSi Downloader? Come posso installare CFW senza di esso?
Lazy DSi Downloader era un programma che essenzialmente permetteva di saltare il processo di installazione manuale scaricando e posizionando i file e le cartelle necessari sulla scheda SD. Tuttavia, a causa del modo in cui è stato programmato e distribuito, molti utenti hanno incontrato vari problemi e finito per dover fare ricorso all'installazione manuale, in quanto più rapida e/o più facile nella risoluzione di qualsiasi cosa causi il problema.

Per evitare che più utenti incontrino questi problemi, non consigliamo più di utilizzare Lazy DSi Downloader, ma piuttosto [la configurazione manuale](get-started.html).
- Se sei stato collegato a questa guida da una terza parte che ha raccomandato di utilizzare Lazy DSi Downloader, le istruzioni che stavi seguendo erano molto probabilmente obsolete. È consigliato l'utilizzo di questa guida, dato che viene aggiornata costantemente dagli sviluppatori di questi progetti.

## Che tipo di scheda SD dovrei utilizzare?
- Dovresti acquistare una scheda SD di un marchio affidabile
- Funzionerà sia una scheda SD sia una scheda microSD in un adattatore
- Qualsiasi capacità compresa tra 1 GB e 2 TB andrà bene. Per un uso generale, 8 GB sono sufficienti
    - Con alcuni software, come hiyaCFW, si possono avere tempi di caricamento molto più lunghi con schede SD con capienze più grandi
- Si raccomanda una classe di velocità 8 o superiore

## Posso usare la mia scheda SD del DSi su altri sistemi?
Generalmente sì, ma con due eccezioni:
- hiyaCFW funzionerà solo sul sistema su cui è stato configurato
- Anche se stai usando nds-bootstrap o una flashcard, i codici amico dei giochi online NDS verranno reimpostati quando si tenta di andare online utilizzando una console diversa

## Come posso passare a una nuova scheda SD dopo aver impostato gli homebrew?
Formatta la tua nuova scheda SD utilizzando le istruzioni [Configurazione scheda SD](sd-card-setup.html), poi semplicemente sposta i dati dalla vecchia scheda SD a quella nuova.

## Posso ancora usare il mio sistema normalmente senza la scheda SD inserita dopo aver impostato gli homebrew?
Sì. Se non è stato installato Unlaunch, il sistema rimarrà completamente non modificato. Se *hai* installato Unlaunch, potresti aver bisogno di [configurare Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) per avviare automaticamente il menu DSi originale in condizioni specifiche.

## La pagina di [Unlaunch](https://problemkaputt.de/unlaunch.htm) dice che la versione 2.0 non è notoriamente sicura. Dovrei usare una versione precedente?
La pagina di Unlaunch non è stata aggiornata da quando è stata rilasciata la versione 2.0 nel 2019. La stragrande maggioranza degli utenti non hanno problemi con questa versione, ed è perciò considerata sicura.


## Come faccio ad avviare i dump dei DSiWare?
Il metodo consigliato è quello di avviarli semplicemente con TWiLight Menu++, a causa del semplice metodo trascina-e-rilascia e non ci sono limiti arbitrari. Quando nds-bootstrap è impostato come metodo di avvio, ottiene anche i benefici di trucchi e screenshot, così come qualsiasi altro vantaggio fornito dal menu in-gioco.

Tuttavia, per i pochi titoli che sono incompatibili, puoi usare [NTM](https://github.com/Epicpkmn11/NTM/releases) per installarli su memoria interna o [SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing) di hiyaCFW. Oltre alla mancanza dei benefici di cui sopra, vi è anche un limite di 39 titoli che non possono superare 128 MiB/1.024 blocchi di dimensione. Per SysNAND, c'è anche un rischio molto piccolo di causare un brick al sistema quando si scrive sulla NAND interna.
