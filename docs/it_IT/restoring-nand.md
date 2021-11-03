---
title: Ripristino di un backup della NAND
---

::: danger

ATTENZIONE! Questo processo è ***potenzialmente pericoloso***. Anche seguendo questi passaggi esattamente vi è ancora il potenziale di brickare il DSi, poiché la sua NAND è di qualità molto bassa, soprattutto se si flasha più volte! Questo procedimento dovrebbe essere usato solo come ultima risorsa!

:::

::: tip

Non saltare *niente* in questa pagina, visto che qualsiasi errore aumenta notevolmente le possibilità di brickare il tuo DSI.

:::

In primo luogo, alcune alternative più sicure per le ragioni che portano al voler fare questo:
- Installare DSiWare può essere fatto utilizzando hiyaCFW o TWiLight Menu++
- Le immagini possono essere recuperate usando [ninfs](https://github.com/ihaveamac/ninfs/releases), insieme a hiyaCFW o TWiLight Menu++ se le vuoi su console. L'ultima versione di HiyaCFW Helper ti permette di copiare le tue foto dalla NAND alla SDNAND durante la configurazione
- Si può ripristinare la configurazione dei pulsanti di Unlaunch dal menu, a cui è possibile accedere tenendo premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd> durante l'accensione della console
- Avviare Unlaunch risulta in un errore? Estrai la scheda SD e prova a riavviare il sistema. Se funziona, allora è un difetto con la scheda SD e il ripristino di un backup della NAND non risolverà
- "Si è verificato un errore..." all'avvio è un errore di hiyaCFW e non è relativo alla tua NAND, consulta la pagina [FAQ e risoluzione dei problemi di hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/faq) sulla DS-Homebrew Wiki per maggiori informazioni
- Eventuali errori in TWiLight Menu++ non sono correlati e dovresti provare a reinstallare TWiLight Menu++ o chiedere aiuto su [Discord](https://ds-homebrew.com/discord)
- La disinstallazione di Unlaunch, che sia flashando la NAND oppure usando il suo uninstaller, deve essere evitata a meno che non sia assolutamente necessaria, è possibile impostare le autoboot keys su "Launcher" e il tuo DSi sarà come se fosse di fabbrica

L'unica cosa che dovresti fare con la tua NAND è installare Unlaunch. Usa le alternative altrimenti.

## Requisiti
- Il tuo backup della NAND **dallo stesso DSi**
- La versione più recente di [MakeForwarder](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Un modo per eseguire homebrew con l'accesso alla NAND, come Unlaunch o Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), per controllare il backup della NAND (scarica la versione di gioco di Windows)
   - gli utenti macOS e Linux possono usare [WINE](https://winehq.org) per avviare no$gba
- [dsibiosdumper](http://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Fai un dump della BIOS per utilizzarla in no$gba
1. Estrai `dsibiosdumper.nds` dall'archivio `dsibiosdumper.zip` e posizionalo ovunque sulla tua scheda SD
2. Accendi la console tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
   - Questo dovrebbe avviare il menu di Unlaunch
3. Avvia dsibiosdumper tramite il menu di Unlaunch
4. Premi <kbd class="face">A</kbd> per scaricare la BIOS sulla scheda SD
5. Premi <kbd>START</kbd> per uscire da dsibiosdumper

## Testare il backup della NAND
È molto importante verificare che il backup della NAND stia funzionando prima di tentare di ripristinarla alla console, visto che se mostra un errore di brick in no$gba allora molto probabilmente brickera pure la tua console.
1. Estrai `NO$GBA.EXE` da `no$gba-w.zip` in una cartella sul tuo computer
2. Copia il tuo backup della NAND nella cartella che hai inserito `NO$GBA.EXE` e rinominalo in `DSI-1.MMC`
3. Copia `bios7i.bin` e `bios9i.bin` nella cartella che metti `NO$GBA.EXE`, rinominati rispettivamente `BIOSDSI7.ROM` e `BIOSDSI9.ROM`.
4. Avvia `NO$GBA.EXE`
5. Clicca su `Options` > `Emulation Setup` per aprire la finestra Emulation Setup
6. Cambia `Reset/Startup Entrypoint` in `BIOS GBA/NDS (Nintendo logo)`
7. Cambia `NDS Mode/Colors` in `DSi (retail/16MB)`
8. Clicca `Salva ora`
9. Avvia qualsiasi ROM Nintendo DS (`.nds` file)

Se no$gba carica il menu del DSi (o il menu di Unlaunch), allora continua alla sezione successiva. Se mostra qualsiasi tipo di errore ***non flashare quel backup***!

## Disinstallazione di Unlaunch dal backup della tua NAND (facoltativo)
Segui questa sezione se hai eseguito il dump del backup della tua NAND dopo aver installato Unlaunch e volessi disinstallarlo dal sistema. Se non vuoi disinstallare Unlaunch, **non** devi seguire questa sezione.
1. Scarica l'ultima versione dell'[installer di Unlaunch](https://problemkaputt.de/unlaunch.zip)
1. Estrai `UNLAUNCH.DSI` da `unlaunch.zip`
1. Avvia `UNLAUNCH.DSI` su no$gba e avvialo dallo slot delle cartucce di gioco
   - Dovrebbe avviare l'installer di Unlaunch, che assomiglia al menu di Unlaunch
1. Scegli `Disinstalla`
1. Una volta completato, scegli `Spegnimento`
1. Avvia qualsiasi ROM Nintendo DS e assicurati che il menu del DSi si avvii e funzioni correttamente

## Flash del backup della NAND (Software)

::: danger

Assicurati di aver letto attraverso i passaggi sopra visto che è qui che diventa pericoloso. Se siete stati collegati direttamente qui senza seguire quanto sopra, allora tornate in alto e leggere l'intera pagina.

:::

::: danger

Assicurati che il tuo sistema Nintendo DSi sia ben caricato prima di iniziare questa sezione.

:::

1. Con la scheda SD inserita, accendi il tuo Nintendo DSi tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
3. Avvia SafeNANDManager
4. Premi il pulsante per `avviare il ripristino della NAND`
6. Una volta terminato il ripristino, premi <kbd>START</kbd> per spegnere il tuo DSi

La tua NAND dovrebbe ora essere ripristinata.

## Flash del backup della NAND (Hardmod)
Se non riesci ad avviare il tuo Nintendo DSi, un hardmod è l'unico modo per ripristinare un backup NAND. La migliore guida che attualmente esiste è la guida [ Hardmod Nintendo DSi sulla DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
