---
title: Risoluzione dei problemi
---

## Unlaunch
### Unlaunch si blocca a `MISMATCH IN FAT COPIES`

twlnf ha un bug critico che non aggiorna correttamente l'intera NAND dopo averla modificata, che porta alcuni homebrew (come Unlaunch installer) a generare un errore.

Per risolvere questo problema, apri [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), e seleziona `Fix FAT copy mismatch`.

Se il problema persiste, prova questo:
1. Monta il tuo backup della NAND con [ninfs](https://github.com/ihaveamac/ninfs/releases), e abilita l'opzione `Allow writing`
1. Quando il backup della NAND è montato, monta `twl_main.img`. Se usi windows, puoi usare [OSFMount](https://www.osforensics.com/tools/mount-disk-images.html) per montare l'mmagine
1. Smonta `twl_main.img`, dopo smonta il backup delle NAND su ninfs Se la NAND è stata salvata, procedi con [Ripristino NAND](restoring-nand) e dopo continua con [Installazione di Unlaunch](installing-unlaunch).

### Non c'è alcun audio o schermata d'avvio quando si avvia "Launcher" utilizzando Unlaunch

Lo sviluppatore di Unlaunch (nocash) ha intenzionalmente rimosso l'audio di sottofondo e la schermata d'avvio come impostazione predefinita. Puoi riattivare questi effetti [reinstallando Unlaunch](installing-unlaunch) usando TWiLight Menu++, o usando [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Accendere la console mostra solo uno schermo nero dopo aver installato di Unlaunch

Prova ad espellere la scheda SD e riaccendere la console. Se continua a mostrare uno schermo nero, potresti aver bisogno di flashare la tua NAND con un [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Dopo aver installato Unlaunch, sono bloccato all'avvio di un'applicazione o al menu di Unlaunch

La causa è probabilmente la scelta dell'app sbagliata per l'opzione `NO BUTTON` in Unlaunch. Tieni premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd> durante l'avvio della console, apri `OPTIONS`, e imposta `NO BUTTON`.

### Altri problemi con Unlaunch

Se Unlaunch mostra `Clusters too large`, `Bad VBR`, `Bad MBR`, oppure non mostra alcuna applicazione mentre la scheda SD è inserita, probabilmente la scheda SD non è stata formattata correttamente. Segui di nuovo [Configurazione scheda SD](sd-card-setup).

## TWiLight Menu++

Per la risoluzione dei problemi generali di TWiLight Menu++ leggi la pagina [FAQ &Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) sulla wiki del DS-Homebrew.

## Ulteriore assistenza

Se hai incontrato un problema che non viene risolto qui, o uno che persiste nonostante le soluzioni fornite, chiedi assistenza nel server Discord [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/yD3spjv).
