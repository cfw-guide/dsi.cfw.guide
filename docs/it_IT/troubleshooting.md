---
title: Risoluzione dei problemi
---

## Unlaunch
### Unlaunch si blocca a `MISMATCH IN FAT COPIES`

twlnf ha un bug critico che non aggiorna correttamente l'intera NAND dopo averla modificata, che porta alcuni homebrew (come Unlaunch installer) a generare un errore.

Per risolvere questo problema, apri [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), e seleziona `Fix FAT copy mismatch`.

### Non c'è alcun audio o schermata d'avvio quando si avvia "Launcher" utilizzando Unlaunch

Lo sviluppatore di Unlaunch (nocash) ha intenzionalmente rimosso l'audio di sottofondo e la schermata d'avvio come impostazione predefinita. Puoi riattivare questi effetti [reinstallando Unlaunch](installing-unlaunch.html) utilizzando TWiLight Menu++ con l'impostazione "Patch del Launcher" disattivata nella pagina "Impostazioni Unlaunch", oppure usando [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Accendere la console mostra solo uno schermo nero dopo aver installato di Unlaunch

Prova ad espellere la scheda SD e riaccendere la console. Se continua a mostrare uno schermo nero, potresti aver bisogno di eseguire un flash della NAND con un [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Dopo aver installato Unlaunch, sono bloccato all'avvio di un'applicazione o al menu di Unlaunch

La causa è probabilmente la scelta dell'app sbagliata per l'opzione `NO BUTTON` in Unlaunch. Tieni premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd> durante l'avvio della console, vai a `OPTIONS`, e imposta `NO BUTTON` come preferisci.

### Altri problemi con Unlaunch

Se Unlaunch mostra `Clusters too large`, `Bad VBR`, `Bad MBR`, oppure non mostra alcuna applicazione mentre la scheda SD è inserita, probabilmente la scheda SD non è stata formattata correttamente. Segui di nuovo [Configurazione scheda SD](sd-card-setup.html).

## TWiLight Menu++

Per la risoluzione dei problemi generali di TWiLight Menu++ leggi la pagina [FAQ & Risoluzione dei problemi](https://wiki.ds-homebrew.com/twilightmenu/faq) sulla DS-Homebrew Wiki.

## Ulteriore assistenza

Se hai incontrato un problema che non viene risolto qui, o che persiste nonostante le soluzioni fornite, chiedi assistenza nel server Discord [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/yD3spjv).
