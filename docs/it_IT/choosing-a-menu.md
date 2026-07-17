# Scegliere un menu

Ci sono tre menu disponibili per avviare i giochi. Scegli quello che si adatta alle tue esigenze.

- **Se non sei sicuro** (o non riesci a decidere) su quale usare, scegli [**TW**i**L**ight Menu++](#twilight-menu).
- Se stai cercando di eseguire una flashcard compatibile col DSi che ora mostra la schermata "An Error Occurred", scegli [Unlaunch Standalone](#unlaunch-standalone).

## [hiyaCFW](installing-unlaunch-and-hiyacfw.html)

Il primo e unico custom firmware che reindirizza l'accesso della NAND alla scheda SD e, di conseguenza, esegue il menu di sistema DSi insieme alle applicazioni di sistema e DSiWare dalla scheda SD invece che della memoria del sistema.

Installalo se sei alla ricerca di un ambiente il più vicino possibile a quello ufficiale.

### Pro

- Viene utilizzato il menu originale Nintendo DSI. Non viene usata nessuna riproduzione non ufficiale!
- I giochi che sono originariamente avviati da schede di gioco DS(i) possono essere avviati dal Menu DSi dopo aver [creato una scorciatoia](https://wiki.ds-homebrew.com/it-IT/ds-index/forwarders), mentre i DSiWare possono essere installati tramite [NTM](https://github.com/Epicpkmn11/NTM/releases).

### Contro

- Poiché questo richiede Unlaunch, la NAND della console sarà scritta, quindi c'è una piccola possibilità di brickare la tua console!
- Limitato al solo avvio di giochi DS o DSI. Per avviare giochi di console precedenti, è necessario creare scorciatoie per le applicazioni che emulano quelle console.
- La creazione di forwarder per i giochi può richiedere molto tempo rispetto ad aggiungerli direttamente nella scheda SD.
- È limitato a 39 icone sullo schermo a causa del funzionamento del menu DSi originale.
- L'interfaccia utente del menu non è personalizzabile.

## [**TW**i**L**ight Menu++](installing-twilight-menu.html)

È stato sviluppato come aggiornamento/sostituzione del menu originale Nintendo DSi. Consente l'avvio di ulteriori applicazioni homebrew, giochi DS ufficiali, emulatori per vari sistemi più vecchi, e altro ancora.

### Pro

- Include una ricreazione quasi completamente fedele del menu DSi, del menu 3DS HOME e delle IU di alcune flashcard.
- La maggior parte delle IU sono personalizzabili tramite l'installazione di temi personalizzati creati dagli utenti.
- Possono essere avviati giochi del DS, DSi, e GBA.
- I giochi delle vecchie console prima del GBA possono essere avviati [installando un add-on.](https://wiki.ds-homebrew.com/twilightmenu/installing-addons)
- Può essere installato assieme a hiyaCFW.

### Contro

- L'interfaccia del menu DSi ha alcune inaccuratezze, come la musica accorciata e di bassa qualità (si può ovviare installando un add-on), e scorrimento diverso quando si trascina la barra di scorrimento.
- Al tema Wood IU mancano alcune funzionalità, come il menu START.
- Può richiedere alcuni secondi per passare da un menu all'altro, come ad esempio il menu di selezione ROM, il menu DS classico e/o quello delle impostazioni.

## [AKMenu-Next](installing-akmenu-next.html)

Questa è una versione aggiornata del menu originale delle flashcard Wood/akmenu, fatto per essere compatibile con la scheda SD del DSi.

### Pro

- Il menu più veloce e leggero disponibile.
- Non mancano funzionalità dal menu (es. menu START e menu di informazioni grafiche/impostazioni) rispetto a Wood IU di TWLMenu++.
- Personalizzabile installando temi personalizzati realizzati dagli utenti che siano compatibili con Wood R4 & AKAIO.
- I giochi delle vecchie console, GBA incluso, possono essere avviati [installando un plugin.](https://coderkei.github.io/akmenu-next-docs/guides/plugins/)
- Può essere installato assieme a hiyaCFW.

### Contro

- Non supporta i DSiWare.
- Non è possibile utilizzare musica e/o effetti sonori.
- Non imposta automaticamente una ROM donatrice in modo che i giochi DSi-Enhanced possano essere avviati in modalità DSi senza Unlaunch, dev'essere impostato manualmente.

## [Unlaunch Standalone](installing-unlaunch-standalone.html)

Questo non installa un menu personalizzato e si basa sul menu DSi predefinito, ma l'installazione di Unlaunch sblocca il DSi compreso permettendo l'uso di flashcard precedentemente bloccate

### Pro

- Consente alle flashcard compatibili col DSi precedentemente bloccate di funzionare (previene lo schermo "An Error occcurred" per le flashcard applicabili)
- Consente di installare altri menu in futuro senza richiedere un exploit precedente
- Usa il Menu DSi di sistema

### Contro

- Non installa un menu con funzionalità di caricamento giochi
- Nessuna opzione di personalizzazione aggiuntiva
