# Installare Unlaunch + hiyaCFW

Stai per installare Unlaunch, un exploit di bootcode permanente che viene installato nella console DSi stessa, permettendo il pieno controllo della console all'avvio e, di conseguenza, consente alle applicazioni homebrew di accedere completamente all'hardware senza restrizioni dalle app di sistema DSI o dai titoli DSiWare.

L'installazione di Unlaunch è necessaria per utilizzare hiyaCFW.

::: danger

Se non lo hai ancora fatto, [esegui un dump della NAND](dumping-nand.html). Un backup della NAND + [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) (o [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod), purché tu sappia come saldare) ti permetterebbe di ripristinare questo backup nel caso in cui la console venga brickata in seguito.

:::

::: danger

Installare o disinstallare Unlaunch, mentre sicuro, scrive sulla NAND della console, quindi c'è una piccola possibilità di brickare la tua console!

:::

::: warning

Se non hai accesso a un PC, o se il PC ha come sistema operativo ChromeOS, allora evita di installare Unlaunch e hiyaCFW. Per garantire che la scheda SD utilizzata sia formattata in modo compatibile con Unlaunch, è necessario un PC (Windows, Linux o macOS).

:::

::: warning

Unlaunch non è compatibile con le console di sviluppo Nintendo DSi.

:::

## Sezione I - Configurazione della scheda SD

1. Scarica l'ultima versione di [Safe Unlaunch installer](https://github.com/edo9300/unlaunch-installer/releases/latest/download/unlaunch-installer.dsi)
2. Elimina `boot.firm` dalla root della scheda SD
3. Posiziona `unlaunch-installer.dsi` nella root della tua scheda SD
4. Rinomina `unlaunch-installer.dsi` in `boot.nds`

## Sezione II - Aggiornare la versione del DSi

::: tip

Se Unlaunch è già installato, salta alla Sezione IV

:::

1. Nel menu DSi, avviare l'applicazione Impostazioni di sistema (icona grigia con chiave bianca)
   - La versione verrà visualizzata in basso a destra dello schermo in alto
   - Se la versione è `Ver 1.4.2`, procedi con l'aggiornamento del sistema
   - Se la versione _non_ è `Ver 1.4.2`, vai direttamente alla [Sezione III](#section-iii-installing-unlaunch)
2. Tocca il numero `4` per andare alla quarta pagina
3. Tocca `Aggiornamento del sistema`
   - È la terza opzione se la console non è nella tua lingua madre
4. Tocca `Sì` quando ti viene chiesto di connetterti a Internet e di aggiornare
   - È l'opzione a sinistra se la console non è nella tua lingua madre
   - Se la versione è già aggiornata, vai direttamente alla [Sezione III](#section-iii-installing-unlaunch)
5. Clicca su `Avanti`
   - È l'opzione a destra se la console non è nella tua lingua madre
6. Clicca su `Accetto`
   - È l'opzione in alto se la console non è nella tua lingua madre
7. Clicca su `OK`
   - È l'opzione in basso a destra se la console non è nella tua lingua madre
8. Attendi che il sistema aggiorni e riavvia quando terminato

## Sezione III - Installare Unlaunch

1. Apri il programma di installazione rieseguendo l'[exploit che hai usato](launching-the-exploit.html)
2. Premi il pulsante <kbd class="face">A</kbd> dopo che appare il messaggio `WARNING`
   - Se il LED della batteria è rosso, dirà di mettere in carica la console. Seleziona `Yes` per continuare dopo averlo messo in carica
3. Se vuoi modificare lo sfondo predefinito, seleziona `[Custom background]` e premi <kbd class="face">A</kbd> per selezionare quello che desideri utilizzare
   - Sono inclusi tre sfondi personalizzati, ma puoi aggiungerne di più in una cartella chiamata `backgrounds` nella root della scheda SD (crea la cartella se non esiste)
4. Se vuoi mantenere sia lo splash del DSi (col messaggio di salute e sicurezza) che il suono nel menu del sistema DSi, seleziona `Enable sound and splash` e premi <kbd class="face">A</kbd> per attivarlo
5. Se Unlaunch è già installato, seleziona l'opzione `Uninstall unlaunch` o `Restore launcher tmd` e premi <kbd class="face">A</kbd> una volta terminato
6. Seleziona l'opzione `Install unlaunch` e premi il pulsante <kbd class="face">A</kbd>
7. Premi il pulsante <kbd class="face">A</kbd> una volta completata l'installazione
8. Premi <kbd class="face">POWER</kbd> per riavviare il sistema

Se vedi la schermata del menu di Unlaunch a questo punto, significa che hai modificato con successo il tuo Nintendo DSi.

- Se vedi uno schermo nero o non è listato nulla, dai un'occhiata alla pagina di [risoluzione dei problemi](troubleshooting.html)

## Sezione IV - Installare hiyaCFW

Vai su [questa pagina](https://wiki.ds-homebrew.com/hiyacfw/installing) per installare hiyaCFW.

## Sezione V - Pulizia della scheda SD

::: tip

Questa sezione è facoltativa e serve solo per mantenere la scheda SD ordinata.

:::

:::: tabs

:::tab default Memory Pit

- Elimina il file `sd:/private/ds/app/484E494A/pit.bin` dalla tua scheda SD
- Rinomina `tip.bin` in `pit.bin` e lascialo intatto
- Puoi ripristinare la cartella `DCIM` che era nella root della scheda SD
- Elimina il file `boot.nds` dalla tua scheda SD

:::

:::tab Flipnote Lenny

- Elimina i file `800031_104784BAB6B57_000.ppm` e `T00031_1038C2A757B77_000.ppm` dall'interno delle seguenti cartelle:
  - `sd:/private/ds/app/4B47554A/001` (Giappone)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europa/Australia)
  - È inoltre possibile eliminare le cartelle per le altre regioni
- Elimina il file `unlaunch-installer.dsi` dalla tua scheda SD

:::
