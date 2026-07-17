# Risoluzione problemi

## Unlaunch

### Unlaunch si blocca a `MISMATCH IN FAT COPIES`

twlnf ha un bug critico dove non aggiorna correttamente l'intera NAND dopo averla modificata, che porta alcuni homebrew (come Unlaunch installer) a generare un errore.

Per risolvere questo problema, apri [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases) e seleziona `Fix FAT copy mismatch`.

### Non c'è alcun audio o schermata d'avvio quando si avvia "Launcher" utilizzando Unlaunch

Lo sviluppatore di Unlaunch (nocash) ha intenzionalmente rimosso l'audio di sottofondo e la schermata d'avvio come impostazione predefinita. Puoi recuperare questi effetti [reinstallando Unlaunch](installing-unlaunch.html) con `Enable sound and splash` attivato, o usando [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Accendere la console mostra solo uno schermo nero dopo aver installato di Unlaunch

Prova a estrarre la scheda SD e riaccendere la console. Se mostra solo una schermata nera, potrebbe essere necessario flashare la NAND tramite [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) o [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Spegnere nel menu DSi e/o Impostazioni di sistema impiega 5-10 secondi

Le uniche soluzioni sono l'avvio del menu DSi e/o impostazioni di sistema con la scheda SD tolta, l'installazione di [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) o la disinstallazione di Unlaunch.

### Dopo aver installato Unlaunch, sono bloccato all'avvio di un'applicazione o al menu di Unlaunch

La causa è probabilmente la scelta dell'app sbagliata per l'opzione `NO BUTTON` in Unlaunch. Tieni premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd> durante l'avvio della console, vai a `OPTIONS`, e imposta `NO BUTTON` come preferisci.

### Altri problemi con Unlaunch

Se Unlaunch mostra `Clusters too large`, `Bad VBR`, `Bad MBR`, o non mostra alcuna applicazione mentre la scheda SD è inserita, probabilmente la scheda SD non è stata formattata correttamente. Risegui la [configurazione scheda SD](sd-card-setup.html).

## TWiLight Menu++

Per la risoluzione generale dei problemi TWiLight Menu++, consulta la pagina [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) su DS-Homebrew Wiki.

## AKMenu-Next

Per la risoluzione dei problemi di AKMenu-Next, consulta la [pagina di risoluzione ai problemi](https://coderkei.github.io/akmenu-next-docs/guides/troubleshooting) e le [domande frequenti](https://coderkei.github.io/akmenu-next-docs/guides/faq) sul loro sito di documentazione.

## Ulteriore assistenza

Se hai incontrato un problema che non viene risolto qui, o che persiste nonostante le soluzioni fornite, chiedi assistenza nel server Discord [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4).
