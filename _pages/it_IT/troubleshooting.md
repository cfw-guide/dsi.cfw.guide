---
title: Risoluzione dei problemi
---

{% include toc title="Table of Contents" %}

## Unlaunch
### Unlaunch si blocca a `MISMATCH IN FAT COPIES`?
twlnf ha un bug critico che non aggiorna correttamente l'intera NAND dopo averla modificata, che porta alcuni homebrew (come Unlaunch installer) a generare un errore.

Nonostante sia sistemabile, il metodo per farlo non è impostato in stone e varia in gran parte tra i sistemi. Un metodo è quello di eliminare qualsiasi DSiWare installato via twlnf in passato, ma è stato anche segnalato che spostare *tutti* DSiWare nella scheda SD e tornare al sistema può aiutare in alcuni casi.

Se hai mai eseguito il downgrade del firmware, aggiornare di nuovo alla versione 1.4.5 (o 1.4.6 se il tuo DS è cinese o coreano) può sistemare questo bug.

### Non c'è alcun avvio audio o di avvio quando si avvia "LAUNCHER" utilizzando Unlaunch

Lo sviluppatore di Unlaunch (nocash) ha intenzionalmente rimosso l'audio di sottofonfo e il boot-splash come impostazione predefinita. Puoi riottenere questi effeti [reinstallando Unlaunch](/installing-unlaunch) usando TWiLight Menu++.

## hiyaCFW
### "Si è verificato un errore"
Ci sono diverse ragioni per cui tu abbia potuto avere questo errore:

- **Troppo Spazio Libero:** Il menù del Nintendo DSi ha un bug che limita la quantità di spazio libero che può esserci. Anche se questo non succede nella vera NAND ( dato che il chip non può mai superare 128MB), può succedere usando una scheda SD. Lo spazio libero funziona a gruppi di due gygabyte (uno si ed uno no). Per esempio, avere 0-2 GB di spazio funziona, ma 2-4GB no. Lo stesso per 4-6 GB e 6-8 GB, finchè non si arriva alla grandezza massima della scheda SD. L'ultima versione di hiyaCFW può creare dei file fantoccio per riempire spazio, quindi assicurati di scaricare l'ultima di versione di [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) e sposta `hiya.dsi` dalla cartella "for SDNAND SD card" al root della scheda SD.
- **Più di 39 Titoli:** C'è un limite di 39 titoli all'interno del menù di sistema del DSi. Elimina eventuali cartelle in più da `/title`
- **Troppo DSiWare:** C'è anche un limite di 200 blocchi (25MB) per il DSiWare nella cartella `00030004`. Questo limite può essere raggirato installando giochi e app DSiware come app di sistema utilizzando [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest)
- **Titolo Invalido:** Ci sono diversi paramtri da considereare quando aggiungi titoli a hiyaCFW:
   - I dump delle cartucce non possono essere avviati senza essere gestiti da una [scorciatoia](/nds-bootstrap-forwarders.html)
   - Devono essere passati diversi argomenti al builder del `.app` per far si che i titoli possano funzionare dal menù di sistema
