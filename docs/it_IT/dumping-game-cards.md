---
title: Dumping delle cartucce di gioco
---

Questa sezione riguarda il dumping delle cartucce utilizzando GodMode9i, per usarle su emulatori, flashcard o sulla scheda SD tramite nds-bootstrap.

## Requisiti
- La cartuccia di gioco del titolo che si desidera effettuare un dump
- Una console Nintendo DSi con [Unlaunch](installing-unlaunch) installato sopra

## Istruzioni
### Sezione I - Configurazione della Scheda SD

::: tip

Usi un dispositivo Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) per configurare automaticamente la tua scheda SD.

:::

1. Scarica l'ultima versione di [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)
1. Estrai `GodMode9i.nds` dall'archivio GodMode9i e mettilo in un percorso qualsiasi sulla scheda SD

### Sezione II - Istruzioni Nintendo DSi
1. Launch GodMode9i
1. Ensure the Game Card is inserted into the console
1. Select the "NDS GAMECARD" option in GodMode9i
1. Select what you want to dump
   - The "Trimmed" options for the ROM will dump a smaller file that can save SD card space, however they won't work for most patches such as ROM hacks
1. Repeat steps 2-4 for all Game Cards you wish to dump

::: tip

I dump delle cartucce di gioco saranno trovato in `sd:/gm9i/out`.

:::
