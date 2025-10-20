# Risoluzione problemi

## Unlaunch

### Unlaunch si blocca a `MISMATCH IN FAT COPIES`

twlnf ha un bug critico dove non aggiorna correttamente l'intera NAND dopo averla modificata, che porta alcuni homebrew (come Unlaunch installer) a generare un errore.

Per risolvere questo problema, apri [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases) e seleziona `Fix FAT copy mismatch`.

### Non c'è alcun audio o schermata d'avvio quando si avvia "Launcher" utilizzando Unlaunch

Lo sviluppatore di Unlaunch (nocash) ha intenzionalmente rimosso l'audio di sottofondo e la schermata d'avvio come impostazione predefinita. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) with `Enable sound and splash` turned on, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Accendere la console mostra solo uno schermo nero dopo aver installato di Unlaunch

Prova a estrarre la scheda SD e riaccendere la console. If it still only shows a black screen, you may need to flash your NAND via either [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) or a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Powering off in the DSi Menu and/or System Settings takes 5-10 seconds

The only solutions are starting the DSi Menu and/or System Settings with the SD card ejected, installing [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing), or uninstalling Unlaunch.

### Dopo aver installato Unlaunch, sono bloccato all'avvio di un'applicazione o al menu di Unlaunch

This was likely caused by choosing the wrong app for the `NO BUTTON` option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to `OPTIONS`, and set `NO BUTTON` to whatever your preference is.

### Altri problemi con Unlaunch

If Unlaunch displays `Clusters too large`, `Bad VBR`, `Bad MBR`, or doesn't display any applications while the SD card is inserted, your SD card likely wasn't formatted correctly. Re-follow [SD Card Setup](sd-card-setup.html).

## TWiLight Menu++

For general TWiLight Menu++ troubleshooting, see its [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) page on the DS-Homebrew Wiki.

## Ulteriore assistenza

If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4) Discord server.
