# Per iniziare

Per prima cosa scaricheremo alcuni tool per homebrew, in preparazione per i passaggi dell'exploit.

## Requisiti

- Un modo per copiare i file scaricati sulla scheda SD
- Un'applicazione che può estrarre archivi, come [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), o [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
  - Ti consigliamo di non usare WinRAR, perché è noto causare problemi
  - Se stai usando Windows 11, ti consigliamo di non utilizzare l'estrattore integrato (Windows Explorer), perché causerà un errore dicendo che il nome del file è troppo lungo o non valido
- Una scheda SD con marca di qualità (o una MicroSD con un adattatore SD). **Questo è importante in quanto potresti incontrare problemi di compatibilità e perdita di dati utilizzando una sottomarca o una scheda SD contraffatta!** Per ulteriori informazioni, [vedi questo articolo](https://www.flashcarts.net/microsd-fakes) sulle schede MicroSD e SD fasulle.

## Sezione I - Preparazione

::: warning

Assicurati che la tua scheda SD sia [formattata correttamente attraverso questa guida](sd-card-setup.html). Potresti incontrare problemi di compatibilità con gli homebrew o formattare la scheda SD incorrettamente se salti questi passaggi.

:::

1. Inserisci la scheda SD nel PC
2. Scarica l'ultima versione di [dumpTool](https://dsi.cfw.guide/assets/files/dumptool/boot.nds) come `boot.nds`
3. Copia il file `boot.nds` nella root della tua scheda SD
   - Assicurati che sia chiamato esattamente `boot.nds` e non `boot (1).nds` o altro

::: tip

Non sai cosa sia la "root" della SD? [Vedi questa immagine](/assets/images/sdroot/en_US.png)

:::

## Sezione II - Verifica se Unlaunch è già installato

Unlaunch è un exploit di bootcode permanente che viene installato nella console DSi stessa, permettendo il pieno controllo della console all'avvio e, di conseguenza, consente alle applicazioni homebrew di accedere completamente all'hardware senza restrizioni dalle app di sistema DSI o dai titoli DSiWare.

Alcune console DSi che sono vendute come usato/ricondizionate potrebbero già avere Unlaunch installato.

Per controllare, premi il pulsante <kbd class="face">POWER</kbd> e tieni premuto immediatamente i pulsanti <kbd class="face">A</kbd> + <kbd class="face">B</kbd>.

- Se vedi un menu che mostra `Nocash Unlaunch.dsi` nella schermata superiore, ciò significa che Unlaunch è già installato, quindi puoi proseguire a [Effettuare dump della NAND](dumping-nand.html).
- Se il DSi inizia normalmente con il menu DSi che appare, procedi con la Sezione III.

## Sezione III - Memory Pit

Memory Pit è un exploit che utilizza la Fotocamera Nintendo DSi, compatibile con tutte le versioni del firmware.

Se si utilizza l'exploit senza installare Unlaunch, la compatibilità con alcuni homebrew potrebbe essere limitata. Se incontri problemi con gli homebrew DSi e/o la funzione fotocamera nei giochi DSi-Enhanced puoi tornare a questa guida e usare un [exploit alternativo](alternate-exploits.html).

::: tip

Prosegui con l'[avvio dell'exploit](launching-the-exploit.html)

:::
