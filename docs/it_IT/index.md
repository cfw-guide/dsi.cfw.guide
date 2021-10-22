---
home: true
title: Home
heroImage: /assets/images/home-page-feature.png
heroText: Guida DSi
tagline: La guida completa per moddare il tuo Nintendo DSi
---

::: tip
Per guide complete su homebrew e custom firmware per altri dispositivi, controlla [CFW.Guide](https://cfw.guide/).
:::

::: danger
Questa guida non è compatibile con le console di sviluppo Nintendo DSI.
:::

::: tip
Leggi attentamente tutte le pagine introduttive (compresa questa!) prima di procedere.
:::

## Cos'è l'homebrew?

[Le applicazioni Homebrew](https://en. wikipedia. org/wiki/Homebrew_(video_games)) sono software senza licenza fatte per sistemi chiusi come il Nintendo DSi. Queste applicazioni possono variare da app utili a giochi homebrew personalizzati.

L'Homebrew può essere eseguito gratuitamente su tutte le console Nintendo DSi, indipendentemente dalla versione del firmware o dalla regione. Tutto ciò di cui hai bisogno è un punto di ingresso e una scheda SD per memorizzare i tuoi homebrew. Il punto di entrata principale utilizzato in questa guida sarà chiamato Memory Pit, ma ce ne sono altri che si potrebbero utilizzare se Memory Pit è inutilizzabile.

## Cosa farà questa guida al mio sistema?

Tieni presente che la guida è strutturata in maniera lineare, ma in genere dipende da quanto in profondità si desidera andare in termini di modding del sistema.

- Imposteremo un punto di accesso per avviare homebrew di base tramite Memory Pit, l'exploit per l'applicazione Fotocamera Nintendo DSi
- Poi faremo un backup della NAND, che è utile come punto di restauro nel caso in cui si pasticci più tardi
- Infine, per gli utenti che vogliono accedere a tutte le funzionalità del DSi li guideremo attraverso l'installazione di Unlaunch. Unlaunch consente alle applicazioni homebrew di avviarsi con più permessi (come l'accesso alla Slot-1) e all'avvio del sistema
   - L'installazione di Unlaunch modifica la tua NAND, e in casi estremi ha il potenziale di fare un **brick** al sistema. Se non si vuole rischiare un brick, puoi fermarti dopo aver fatto un backup della NAND

## Cosa posso fare moddando il mio sistema?

- Avviare i backup dei giochi Nintendo DS(i) dalla scheda SD del DSi senza la necessità di una flashcard
- Avviare qualsiasi DSiWare (fuori regione e/o esclusiva 3DS) dalla tua scheda SD
- Avviare applicazioni DSiWare e homebrew tenendo premuti pulsanti specifici quando si accende il Nintendo DSi
- Avviare classici dei vecchi tempi utilizzando vari emulatori
- Usare flashcard normalmente incompatibili
- Reindirizzare la NAND alla scheda SD
- Guardare i tuoi film preferiti usando MPEG4Player
- Usare FreeNAND per trasferire configurazioni, sys, titoli e ticket a un altro Nintendo DSi da una SDNAND
- Mostrare un'immagine (definita come immagine d'avvio) all'avvio del sistema

## Dove posso trovare delle applicazioni homebrew?

- [Universal-DB](https://db.universal-team.net/ds) ha la maggior parte degli homebrew moderni, con una bella ricerca e un bel ordinamento per tenere traccia di ciò che è stato aggiornato di recente
- [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew) ha un sacco di homebrew più vecchi, tuttavia molti funzionano solo su flashcard

## Cosa dovrei sapere prima di iniziare?

- Su Windows, si consiglia di [mostrare le estensioni dei file](file-extensions-%28windows%29) se si utilizza il File Explorer predefinito
- L'unico rischio di brick deriva dall'installazione di Unlaunch, ma il rischio è minimo
- Se non hai esperienza con la copia dei file su una scheda SD, abbiamo a tua disposizione strumenti di assistenza

::: tip
Continua a [Avvio dell' Exploit](launching-the-exploit)
:::
