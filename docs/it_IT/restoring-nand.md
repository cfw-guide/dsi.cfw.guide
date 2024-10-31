# Ripristino di un backup della NAND

::: danger

ATTENZIONE! This is _**dangerous**_. Anche seguendo questi passaggi esattamente c'è ancora il potenziale di causare un brick ak DSi, poiché la sua NAND è di qualità molto bassa, soprattutto se si effettuano flash più volte! Questo procedimento dovrebbe essere usato solo come ultima risorsa!

:::

::: tip

Do not skip _anything_ on this page, any mistake greatly increases chance of bricking your DSi.

:::

In primis, alcune alternative più sicure per le ragioni che portano al voler fare questo:

- L'installazione di DSiWare può essere eseguita utilizzando hiyaCFW o TWiLight Menu++
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. L'ultima versione di HiyaCFW Helper ti permette di copiare le tue foto dalla NAND alla SDNAND durante la configurazione
- Si può ripristinare la configurazione dei pulsanti di Unlaunch dal menu, a cui è possibile accedere tenendo premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd> durante l'accensione della console
- Avviare Unlaunch risulta in un errore? Estrai la scheda SD e prova a riavviare il sistema. Se funziona, allora è un difetto con la scheda SD e il ripristino di un backup della NAND non lo risolverà
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on [Discord](https://ds-homebrew.com/discord)
- La disinstallazione di Unlaunch, che sia facendo un flash alla NAND oppure usando il suo disinstallatore, deve essere evitata a meno che non sia assolutamente necessaria, è possibile impostare le key autoboot su "Launcher" e il tuo DSi sarà come se fosse di fabbrica

L'unica cosa che dovresti fare con la tua NAND è installare Unlaunch. Altrimenti usa le alternative.

## Requisiti

- Your NAND backup **from the same DSi**
- The latest release of [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Un modo per eseguire homebrew con l'accesso alla NAND, come Unlaunch o Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), to check your NAND backup (Download the 'Windows gaming version')
  - macOS and Linux users can use [WINE](https://winehq.org) to run no$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Fare un dump della BIOS per utilizzarlo in no$gba

1. Extract `dsibiosdumper.nds` from the `dsibiosdumper.zip` archive and place it anywhere on your SD card
2. Accendi la console tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
   - Questo dovrebbe avviare il menu di Unlaunch
3. Avvia dsibiosdumper tramite il menu di Unlaunch
4. Premi <kbd class="face">A</kbd> per scaricare la BIOS sulla scheda SD
5. Premi <kbd>START</kbd> per uscire da dsibiosdumper

## Testare il backup della NAND

È molto importante verificare che il backup della NAND funzioni prima di tentare di ripristinarlo sulla tua console, visto che se mostra un errore di brick in no$gba allora molto probabilmente ne causerà uno pure alla tua console.

1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Copy your NAND backup to the folder you put `NO$GBA.EXE` in and rename it to `DSI-1.MMC`
3. Copy `bios7i.bin` and `bios9i.bin` to the folder you put `NO$GBA.EXE`, named `BIOSDSI7.ROM` and `BIOSDSI9.ROM`, respectively.
4. Run `NO$GBA.EXE`
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
8. Click `Save Now`
9. Launch any Nintendo DS ROM (`.nds` file)

Se no$gba carica il menu del DSi (o il menu di Unlaunch), allora continua alla sezione successiva. If it shows any kind of error _**do not flash that backup**_!

## Disinstallazione di Unlaunch dal backup della tua NAND (facoltativo)

Segui questa sezione se hai eseguito il dump del backup della tua NAND dopo aver installato Unlaunch e volessi disinstallarlo dal sistema. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.

1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
2. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
3. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - Dovrebbe avviare l'installer di Unlaunch, che assomiglia al menu di Unlaunch
4. Choose `Uninstall`
5. Once complete, choose `Power down`
6. Avvia qualsiasi ROM per Nintendo DS e assicurati che il menu del DSi si avvii e funzioni correttamente

If no$gba shows any kind of error instead of loading the DSi menu, _**do not flash that backup**_! Se hai un backup della NAND più vecchio, potresti voler provare a usare quello. Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## Flash del backup della NAND (Software)

::: danger

Assicurati di aver letto i passaggi sopra visto che è qui che diventa pericoloso. Se ti sei collegato qui direttamente senza seguire quanto scritto sopra, allora torna in alto e leggi l'intera pagina.

:::

::: danger

Assicurati che il tuo sistema Nintendo DSi sia ben caricato prima di iniziare questa sezione.

:::

1. Con la scheda SD inserita, accendi il tuo Nintendo DSi tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
2. Avvia SafeNANDManager
3. Press the button to `begin NAND restore`
4. Una volta terminato il ripristino, premi <kbd>START</kbd> per spegnere il tuo DSi

La tua NAND dovrebbe ora essere ripristinata.

## Flash del backup della NAND (Hardmod)

Se non riesci ad avviare il tuo Nintendo DSi, un hardmod è l'unico modo per ripristinare un backup della NAND. The best guide that currently exists is the [Nintendo DSi hardmod guide on the DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
