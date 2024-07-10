---
title: "Per iniziare"
---

L'applicazione homebrew principale che installerai con questa guida è **TW**i**L**ight Menu++, un aggiornamento/sostituzione del menu del Nintendo DSi che consente l'esecuzione di altre applicazioni homebrew, giochi commerciali per DS, emulatori di vecchie console e altro ancora.

Per prima cosa lo scaricheremo, insieme ad altre applicazione homebrew, in preparazione dell'esecuzione dell'exploit.

## Requisiti

- Un modo per copiare i file scaricati sulla scheda SD
- Un'applicazione per l'estrazione di archivi, come [7-Zip](https://www.7-zip.org/) (Windows) o [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), o [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
    - Ti consigliamo di non usare WinRAR, perché è noto causare problemi
    - Se stai usando Windows 11, ti consigliamo di non utilizzare l'estrattore integrato (Windows Explorer), perché causerà un errore dicendo che il nome del file è troppo lungo o non valido

## Sezione I - Preparazione

::: warning

Assicurati che la scheda SD sia [formattata correttamente](sd-card-setup.html).

:::

1. Inserisci la scheda SD nel PC
1. Scarica l'ultima versione di [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
    - Se non si scarica, apri la pagina [](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)e scarica `TWiLightMenu-DSi.7z`
1. Scarica la versione più recente di [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Apri `TWiLightMenu-DSi.7z`
    - Se stai usando Windows, assicurati che 7-Zip sia installato, segui questi passaggi:
        1. Click destro su `TWiLightMenu-DSi.7z`
        1. Se utilizzi Windows 11, fai clic su `Mostra più opzioni`
        1. Vai sopra `7-zip`
        1. Clicca `Apri archivio`
1. Copia la cartella `_nds` estratta da `TWiLightMenu-DSi.7z` nella root della scheda SD
1. Copia il file `BOOT.NDS` estratto da `TWiLightMenu-DSi.7z` nella root della scheda SD
1. Chiudi `TWiLightMenu-DSi.7z`
1. Copia il file `dumpTool.nds` nella root della scheda SD

::: tip

Non sai cosa sia la "root" della SD? [Vedi questa immagine](/assets/images/sdroot/en_US.png)

:::


## Sezione II - Scegliere l'exploit

Da qui hai tre opzioni, con una piccola differenza in ciò che ciascuna comporta.


### Installazione di Unlaunch tramite Memory Pit

Memory Pit è un exploit che utilizza la Fotocamera Nintendo DSi, compatibile con tutte le versioni del firmware. Facoltativamente, questo exploit può essere utilizzato per installare Unlaunch, un exploit del bootcode che consente il pieno controllo della console all'avvio.

Poiché Memory Pit ha una compatibilità limitata con gli homebrew, si raccomanda di installare Unlaunch, invece di utilizzare Memory Pit in modo autonomo. Visto che questo è il metodo più semplice per installare Unlaunch, è perciò il percorso più consigliato. Tuttavia, c'è un rischio molto marginale di causare un **brick** della console durante l'installazione di Unlaunch, quindi se questo ti preoccupa, segui il metodo alternativo sottostante.

::: tip

Continua con [Avvio dell'exploit](launching-the-exploit.html)

:::


### stylehax

stylehax è un exploit che utilizza l'applicazione DSi Browser e può essere utilizzato come alternativa a Memory Pit per l'installazione di Unlaunch (spiegato sopra) nel caso in cui il DSi abbia la fotocamera rotta.

Questo exploit è raccomandato se non si vuole utilizzare Unlaunch, poiché l'utilizzo dell'exploit Memory Pit causa problemi in alcuni giochi e homebrew.

::: tip

Continua con [Avvio dell'exploit(stylehax)](launching-the-browser-exploit.html)

:::


### Flipnote Lenny

Flipnote Lenny è un exploit che utilizza l'applicazione Flipnote Studio.

Se hai Flipnote Studio e non hai intenzione di installare Unlaunch (spiegato sopra), questo exploit è raccomandato per la stessa ragione di stylehax.

È sempre possibile installare Unlaunch più tardi se dovessi cambiare idea.

::: tip

Continua con [Avvio dell'exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

Per un confronto più dettagliato di pro e contro degli exploit disponibili, consulta [Qual è l'exploit migliore?](faq.html#which-is-the-best-exploit) nelle FAQ.
