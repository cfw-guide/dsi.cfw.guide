---
title: "Dumpare le Cartucce"
---

Questa sezione serve per dumpare cartucce utilizzando GodMode9i, per giocarle su emulatori, flashcart o sulla scheda SD tramite nds-bootstrap.

## Requisiti
* La cartuccia del titolo che vuoi dumpare
* Una console Nintendo DSi con [Unlaunch](installing-unlaunch) installato sopra

## Istruzioni
### Sezione I - Configurazione della Scheda SD

Usi un dispositivo Windows, Linux o macOS? Usa [Lazy DSi Downloader](lazy-dsi-downloader) per configurare automaticamente la tua scheda SD.
{: .notice--info}

1. Scarica l'ultima versione di [dumpTool](https://github.com/RocketRobz/godmode9i/releases)
1. Estrai `GodMode9i.nds` dall'archivio GodMode9i e mettilo in un percorso qualsiasi sulla scheda SD

### Sezione Ii - Istruzioni Nintendo DSi
1. Accendi la console tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
   - Questo dovrebbe avviare il menu di Unlaunch
1. Avvia GodMode9i tramite il menu di Unlaunch
1. Assicurati che la cartuccia di gioco sia inserita nella console
1. Seleziona l'opzione "NDS GAMECARD" in GodMode9i
1. Selezionare se si desidera o no il riempimento (padding):
   - Pieno: Padding incluso
   - Normale: Padding rimosso
1. Ripetere i passaggi 3-5 per tutte le cartucce che si desidera dumpare

Le cartucce dumpate saranno trovate in `sd:/gm9i/out`.
{: .notice--success}
