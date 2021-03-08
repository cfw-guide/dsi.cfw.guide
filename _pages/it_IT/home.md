---
layout: splash
title: Guida DSi
header:
  overlay_color: "#1a1d24"
  overlay_image: /assets/images/home-page-feature.png
  overlay_filter: 0.5
excerpt: "La guida completa per moddare il tuo Nintendo DSi"
---

Per guide complete su homebrew e custom firmware per altri dispositivi, controlla [CFW.Guida](https://cfw.guide/).
{: .notice--primary}

Questa guida non è compatibile con le console di sviluppo Nintendo DSI.
{: .notice--danger}

Leggi attentamente tutte le pagine introduttive (compresa questa!) prima di procedere.
{: .notice--info}

## Cos'è l'homebrew?

[Le applicazioni Homebrew](https://en. wikipedia. org/wiki/Homebrew_(video_games)) sono software senza licenza fatte per sistemi chiusi come il Nintendo DSi. Queste applicazioni possono variare da app utili a giochi homebrew personalizzati.

L'Homebrew può essere eseguito gratuitamente su tutte le console Nintendo DSi, indipendentemente dalla versione del firmware o dalla regione. Tutto ciò di cui hai bisogno è un punto di ingresso e una scheda SD per memorizzare il tuo homebrew. Il punto di entrata principale utilizzato in questa guida sarà chiamato Memory Pit, ma ci sono altri punti di entrata che si potrebbero utilizzare se Memory Pit è inutilizzabile.

## Cosa farà questa guida al mio sistema?

Tieni presente che la guida è strutturata in un percorso lineare, ma in genere dipende da quanto in profondità si desidera andare in termini di modding del sistema.

- Imposteremo un punto di accesso per lanciare homebrew di base tramite Memory Pit, l'exploit per l'applicazione Fotocamera Nintendo DSi
- Poi faremo un backup della NAND, che è utile come punto di restauro nel caso in cui si pasticci più tardi
- Per gli utenti che vogliono più controllo, li guideremo attraverso l'installazione di Unlaunch. Unlaunch consente alle applicazioni homebrew di avviarsi con più permessi (come l'accesso alla slot-1) e all'avvio del sistema
   - L'installazione di Unlaunch modifica la tua NAND, e in casi estremi ha il potenziale di fare un**brick**al sistema. Se non si vuole rischiare un brick, si può interrompere dopo aver preso un backup della NAND
- Infine, per gli utenti che desiderano installare applicazioni personalizzate sul loro Menu di sistema Nintendo DSi, installeremo hiyaCFW

## Cosa posso fare moddando il mio sistema?

- Reindirizzare la NAND alla scheda SD
- Usare flashcard normalmente incompatibili
- Avviare applicazioni DSiWare e homebrew tenendo premuti pulsanti specifici quando si attiva il Nintendo DSi
- Avviare qualsiasi DSiWare (fuori dalla propria regione e/o esclusiva 3DS) dalla tua scheda SD
- Avviare i backup dei giochi Nintendo DS dalla scheda SD del DSi senza la necessità di una flashcard
- Guardare i tuoi film preferiti usando MPEG4Player
- Avviare classici dei vecchi tempi utilizzando vari emulatori
- Usare FreeNAND per trasferire configurazioni, sys, titoli e ticket a un altro Nintendo DSi da una NAND della scheda SD
- Mostrare un'immagine (definita come immagine d'avvio) all'avvio del sistema

## Dove posso trovare delle applicazioni homebrew?

- [Universal DB](https://db.universal-team.net/ds) ha la maggior parte degli homebrew moderni, con una bella ricerca e un bel ordinamento per tenere traccia di ciò che è stato aggiornato di recente
- [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications) ha un sacco di homebrew più vecchi, tuttavia molti funzioneranno solo su flashcards

## Cosa dovrei sapere prima di iniziare?

- Su Windows, si consiglia di [mostrare le estensioni dei file](file-extensions-%28windows%29) se si utilizza il File Explorer predefinito
- L'unico rischio di brick deriva dall'installazione di Unlaunch, ma il rischio è minimo
- Se non hai esperienza con la copia dei file su una scheda SD, abbiamo a tua disposizione strumenti di assistenza

Continua a [Avvio dello Exploit](launching-the-exploit){: #get-started}
{: .notice--info}
