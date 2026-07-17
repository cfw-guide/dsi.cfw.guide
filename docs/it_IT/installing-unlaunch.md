# Installare Unlaunch

Stai per installare Unlaunch, un exploit di bootcode permanente che viene installato nella console DSi stessa, permettendo il pieno controllo della console all'avvio e, di conseguenza, consente alle applicazioni homebrew di accedere completamente all'hardware senza restrizioni dalle app di sistema DSI o dai titoli DSiWare.

::: danger

Se non lo hai ancora fatto, [esegui un dump della NAND](dumping-nand.html). Un backup della NAND + [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) (o [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod), purché tu sappia come saldare) ti permetterebbe di ripristinare questo backup nel caso in cui la console venga brickata in seguito.

:::

::: danger

Installare o disinstallare Unlaunch, mentre sicuro, scrive sulla NAND della console, quindi c'è una piccola possibilità di brickare la tua console!

:::

::: warning

Se non hai accesso a un PC, o se il PC ha come sistema operativo ChromeOS, allora evita di installare Unlaunch. Per garantire che la scheda SD utilizzata sia formattata in modo compatibile con Unlaunch, è necessario un PC (Windows, Linux o macOS).

:::

::: warning

Unlaunch non è compatibile con le console di sviluppo Nintendo DSi.

:::

## Sezione I - Configurazione della scheda SD

1. Scarica l'ultima versione di [Safe Unlaunch installer](https://github.com/edo9300/unlaunch-installer/releases/latest/download/unlaunch-installer.dsi)
2. Posiziona `unlaunch-installer.dsi` sulla tua scheda SD in una posizione qualsiasi

## Sezione II - Aggiornare la versione del DSi

::: tip

Se Unlaunch è già installato e stai cercando di aggiornare o disinstallare Unlaunch, passa alla Sezione III

:::

1. Nel menu DSi, avviare l'applicazione Impostazioni di sistema (icona grigia con chiave bianca)
   - La versione verrà visualizzata in basso a destra dello schermo in alto
   - Se la versione è `Ver 1.4.2`, procedi con l'aggiornamento del sistema
   - Se la versione _non_ è `Ver 1.4.2`, vai direttamente alla [Sezione III](#section-iii-installing-updating-unlaunch)
2. Tocca il numero `4` per andare alla quarta pagina
3. Tocca `Aggiornamento del sistema`
   - È la terza opzione se la console non è nella tua lingua madre
4. Tocca `Sì` quando ti viene chiesto di connetterti a Internet e di aggiornare
   - È l'opzione a sinistra se la console non è nella tua lingua madre
   - Se la versione è già aggiornata, vai direttamente alla [Sezione III](#section-iii-installing-updating-unlaunch)
5. Clicca su `Avanti`
   - È l'opzione a destra se la console non è nella tua lingua madre
6. Clicca su `Accetto`
   - È l'opzione in alto se la console non è nella tua lingua madre
7. Clicca su `OK`
   - È l'opzione in basso a destra se la console non è nella tua lingua madre
8. Attendi che il sistema aggiorni e riavvia quando terminato

## Sezione III - Installare/Aggiornare Unlaunch

1. Apri il menu che hai installato (**TW**i**L**ight Menu++ o AKMenu-Next)
   - Se questa è la prima volta che installi Unlaunch, riavvia il menu attraverso l'[exploit che hai usato](launching-the-exploit.html)
   - Se hai già installato Unlaunch e stai cercando di aggiornarlo, tieni premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd> durante l'avvio
2. Nel menu in cui sono elencate le icone, avvia il file `Safe Unlaunch installer` (elencato come `unlaunch-installer.dsi` a seconda di quale menu viene utilizzato e/o come viene visualizzato)
3. Premi il pulsante <kbd class="face">A</kbd> dopo che appare il messaggio `WARNING`
   - Se il LED della batteria è rosso, dirà di mettere in carica la console. Seleziona `Yes` per continuare dopo averlo messo in carica
4. Se vuoi modificare lo sfondo predefinito, seleziona `[Custom background]` e premi <kbd class="face">A</kbd> per selezionare quello che desideri utilizzare
   - Sono inclusi tre sfondi personalizzati, ma puoi aggiungerne di più in una cartella chiamata `backgrounds` nella root della scheda SD (crea la cartella se non esiste)
5. Se vuoi mantenere sia lo splash del DSi (col messaggio di salute e sicurezza) che il suono nel menu del sistema DSi, seleziona `Enable sound and splash` e premi <kbd class="face">A</kbd> per attivarlo
6. Se Unlaunch è già installato, seleziona l'opzione `Uninstall unlaunch` o `Restore launcher tmd` e premi <kbd class="face">A</kbd> una volta terminato
   - Se volevi solo **disinstallare** Unlaunch, puoi fermarti qui
7. Seleziona l'opzione `Install unlaunch` e premi il pulsante <kbd class="face">A</kbd>
8. Premi il pulsante <kbd class="face">A</kbd> una volta completata l'installazione
9. Premi <kbd class="face">POWER</kbd> per riavviare il sistema

Se vedi la schermata del menu di Unlaunch a questo punto, significa che hai modificato con successo il tuo Nintendo DSi.

- Se vedi uno schermo nero, dai un'occhiata alla pagina di [risoluzione dei problemi](troubleshooting.html)

## Sezione IV - Configurare Unlaunch

Attualmente, Unlaunch apre il suo menu all'avvio per impostazione predefinita, ma può essere cambiarlo per avviare quello che vuoi.

1. Accendi la console tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
   - Questo dovrebbe avviare il menu di Unlaunch
   - Se non è elencato nulla, o se solo i contenuti della NAND sono elencati (anche dopo aver scrollato verso il basso), allora avrai bisogno di [riformattare la scheda SD](sd-card-setup.html)
2. Vai a `OPTIONS`, e guarda le opzioni disponibili
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> è stato fatto in codifica fissa per avviarsi nel menu di Unlaunch, e perciò non può essere modificato
   - Le opzioni `NO BUTTON` (avvio automatico) e `BUTTON A / B / X / Y` possono essere impostate come preferisci e determineranno cosa il DSi avvia all'accensione a seconda dei pulsanti che vengono premuti. Puoi selezionare qualsiasi DSiWare, homebrew (compreso qualsiasi menu installato), la scheda Slot-1, wifiboot, o il menu di Unlaunch
     - Per il menu DSi originale, seleziona `Launcher`
     - Per TWiLight Menu++, seleziona `TWiLight Menu++` (elencato come `sdmc:/BOOT.NDS` sullo schermo inferiore)
     - Per AKMenu-Next, seleziona `AKMenu-Next` (elencato come `sdmc:/akmenu-next.dsi` sullo schermo inferiore)
     - Per hiyaCFW, seleziona `hiyaCFW` (elencato come `sdmc:/hiya.dsi` sullo schermo inferiore)
   - `LOAD ERROR` è quello che il tuo DSi caricherà se il caricamento di ciò che hai impostato fallisce, come ad esempio se la scheda SD non viene inserita
3. Seleziona `SAVE & EXIT` per salvare le impostazioni, e spegni il tuo DSi

## Sezione V - Pulizia della scheda SD

::: tip

Questa sezione è facoltativa e serve solo per mantenere la scheda SD ordinata.

:::

:::: tabs

:::tab default Memory Pit

- Elimina il file `sd:/private/ds/app/484E494A/pit.bin` dalla tua scheda SD
- Rinomina `tip.bin` in `pit.bin` e lascialo intatto
- Puoi ripristinare la cartella `DCIM` che era nella root della scheda SD
- Elimina il file `unlaunch-installer.dsi` dalla tua scheda SD

:::

:::tab Flipnote Lenny

- Elimina i file `800031_104784BAB6B57_000.ppm` e `T00031_1038C2A757B77_000.ppm` dall'interno delle seguenti cartelle:
  - `sd:/private/ds/app/4B47554A/001` (Giappone)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europa/Australia)
  - È inoltre possibile eliminare le cartelle per le altre regioni
- Elimina il file `unlaunch-installer.dsi` dalla tua scheda SD

:::
