# Per iniziare

The main homebrew application this guide has you install is **TW**i**L**ight Menu++, which is an upgrade/replacement to the Nintendo DSi Menu that allows running other homebrew applications, retail DS games, emulators for various older systems, and more.

Per prima cosa lo scaricheremo, insieme ad altre applicazione homebrew, in preparazione dell'esecuzione dell'exploit.

## Requisiti

- Un modo per copiare i file scaricati sulla scheda SD
- An application that can extract archives, such as [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), or [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
  - Ti consigliamo di non usare WinRAR, perché è noto causare problemi
  - Se stai usando Windows 11, ti consigliamo di non utilizzare l'estrattore integrato (Windows Explorer), perché causerà un errore dicendo che il nome del file è troppo lungo o non valido

## Sezione I - Preparazione

::: warning

Ensure your SD card is [formatted correctly](sd-card-setup.html).

:::

1. Inserisci la scheda SD nel PC
2. Download the latest release of [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
   - If it does not download, open the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest), and download `TWiLightMenu-DSi.7z`
3. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
4. Open `TWiLightMenu-DSi.7z`
   - Se stai usando Windows, assicurati che 7-Zip sia installato, segui questi passaggi:
     1. Right-click on `TWiLightMenu-DSi.7z`
     2. If using Windows 11, click `Show more options`
     3. Hover over `7-zip`
     4. Click `Open archive`
5. Copy the `_nds` folder from `TWiLightMenu-DSi.7z` to the root of your SD card
6. Copy the `BOOT.NDS` file from `TWiLightMenu-DSi.7z` to the root of your SD card
7. Close `TWiLightMenu-DSi.7z`
8. Copy the `dumpTool.nds` file to the root of your SD card

::: tip

Non sai cosa sia la "root" della SD? [See this image](/assets/images/sdroot/en_US.png)

:::

## Sezione II - Scegliere l'exploit

Da qui hai tre opzioni, con una piccola differenza in ciò che ciascuna comporta.

### Installazione di Unlaunch tramite Memory Pit

Memory Pit è un exploit che utilizza la Fotocamera Nintendo DSi, compatibile con tutte le versioni del firmware. Facoltativamente, questo exploit può essere utilizzato per installare Unlaunch, un exploit del bootcode che consente il pieno controllo della console all'avvio.

Poiché Memory Pit ha una compatibilità limitata con gli homebrew, si raccomanda di installare Unlaunch, invece di utilizzare Memory Pit in modo autonomo. Visto che questo è il metodo più semplice per installare Unlaunch, è perciò il percorso più consigliato. However, there is a very minor risk of **bricking** your console when installing Unlaunch, so if this is a concern, see the alternate method below.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::

### stylehax

stylehax è un exploit che utilizza l'applicazione DSi Browser e può essere utilizzato come alternativa a Memory Pit per l'installazione di Unlaunch (spiegato sopra) nel caso in cui il DSi abbia la fotocamera rotta.

Questo exploit è raccomandato se non si vuole utilizzare Unlaunch, poiché l'utilizzo dell'exploit Memory Pit causa problemi in alcuni giochi e homebrew.

::: tip

Continue to [Launching the Exploit (stylehax)](launching-the-browser-exploit.html)

:::

### Flipnote Lenny

Flipnote Lenny è un exploit che utilizza l'applicazione Flipnote Studio.

Se hai Flipnote Studio e non hai intenzione di installare Unlaunch (spiegato sopra), questo exploit è raccomandato per la stessa ragione di stylehax.

È sempre possibile installare Unlaunch più tardi se dovessi cambiare idea.

::: tip

Continue to [Launching the Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

For a more detailed pros and cons comparision of the available exploits, please see the [Which is the best exploit?](faq.html#which-is-the-best-exploit) FAQ.
