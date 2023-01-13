---
title: "Per iniziare"
---

L'applicazione homebrew principale che installerai con questa guida è TWiLight Menu++, un aggiornamento/sostituzione del Menu del Nintendo DSi che consente l'esecuzione di altre applicazioni homebrew, giochi commerciali per DS, emulatori di vecchie console e altro ancora.

Per prima cosa lo scaricheremo, insieme ad altre applicazione homebrew, in preparazione dell'esecuzione dell'exploit.

::: tip

Usi un dispositivo con Windows, Linux o MacOS? Utilizza [Lazy DSi Downloader](lazy-dsi-downloader.html) per configurare automaticamente la tua scheda SD.

:::

## Requisiti

- Un modo per copiare i file scaricati sulla scheda SD
- Un'applicazione per l'estrazione di archivi, come [7-Zip](https://www.7-zip.org/) (Windows) o [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS)
   - Ti consigliamo di non usare WinRAR, perché è noto causare problemi

## Sezione I - Preparazione

::: warning

Assicurati che la scheda SD sia [formattata correttamente](sd-card-setup.html).

:::

1. Inserisci la scheda SD nel PC
1. Scarica la versione più recente di [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
1. Scarica la versione più recente di [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Copia la cartella `_nds` estratta da `TWiLightMenu-DSi.7z` nella root della scheda SD
1. Copia il file `BOOT.NDS` estratto da `TWiLightMenu-DSi.7z` nella root della scheda SD
1. Copia il file `dumpTool.nds` nella root della scheda SD

::: tip

Non sai cosa sia la "root" della SD? [Guarda questa immagine](https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png)

:::


## Sezione II - Scegliere l'exploit

From here you have three options, with a minor difference in what each entails.


### Installazione di Unlaunch tramite Memory Pit

Memory Pit è un exploit che utilizza la Fotocamera Nintendo DSi, compatibile con tutte le versioni del firmware. Facoltativamente, questo exploit può essere utilizzato per installare Unlaunch, un exploit del bootcode che consente il pieno controllo della console all'avvio.

Poiché Memory Pit ha una compatibilità limitata con gli homebrew, si raccomanda d'installare Unlaunch, invece di utilizzare Memory Pit in modo autonomo. È il metodo più semplice per installare Unlaunch e perciò è il percorso consigliato. Tuttavia, c'è un rischio molto piccolo di **brick** della console durante l'installazione di Unlaunch, quindi se questa è una preoccupazione, segui il metodo alternativo sottostante.

::: tip

Continua con l'[Avvio dell'exploit](launching-the-exploit.html)

:::


### stylehax

stylehax is an exploit utilizing the DSi Browser application, and can be used as an alternative to Memory Pit for installing Unlaunch (explained above) if your DSi has a broken camera.

For an Unlaunch-free experience, this exploit is recommended as using Memory Pit causes issues in some games and homebrew.

::: tip

Continue to [Launching the Exploit (stylehax)](launching-the-browser-exploit.html)

:::


### Flipnote Lenny

Flipnote Lenny is an exploit utilizing the Flipnote Studio application.

If you have Flipnote Studio and do not plan on installing Unlaunch (explained above), this exploit is recommended for the same reason as stylehax.

You can always install Unlaunch later if you decide later on that you want it.

::: tip

Continue to [Launching the Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

For a more detailed pros and cons comparision of the available exploits, please see the [Which is the best exploit?](faq.html#which-is-the-best-exploit) FAQ.
