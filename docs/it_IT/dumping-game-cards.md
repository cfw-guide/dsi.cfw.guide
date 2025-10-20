# Effettuare dump delle schede di gioco

Questa sezione riguarda l'effettuare dump delle schede di gioco utilizzando GodMode9i, per usarle su emulatori, flashcard o sulla scheda SD tramite nds-bootstrap.

## Requisiti

- La cartuccia di gioco del titolo che si desidera effettuare un dump
- La tua console Nintendo DSi con [Unlaunch](installing-unlaunch.html) installato

## Istruzioni

### Sezione I - Configurazione della scheda SD

1. Scarica l'ultima versione di [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)
2. Estrai `GodMode9i.nds` dall'archivio GodMode9i e mettilo in un percorso qualsiasi sulla scheda SD

### Sezione II - Istruzioni Nintendo DSi

1. Avvia GodMode9i
2. Assicurati che la scheda di gioco sia inserita nella console
3. Seleziona l'opzione "SCHEDA NDS" in GodMode9i
4. Seleziona i dump da effettuare
   - Le opzioni "Trimmed" per la ROM scaricheranno un file più piccolo che può salvare spazio sulpa scheda SD. tuttavia non funzioneranno per la maggior parte delle patch, come le ROM hack
5. Ripeti i passaggi 2-4 per tutte le schede di gioco di cui desideri effettuare un dump

::: tip

I dump delle schede di gioco sono posizionati in `sd:/gm9i/out`.

:::
