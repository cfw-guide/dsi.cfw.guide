# Risoluzione dei problemi

## Unlaunch
### Unlaunch si blocca a `MISMATCH IN FAT COPIES`?
twlnf ha un bug critico che non aggiorna correttamente l'intera NAND dopo averla modificata, che porta alcuni homebrew (come Unlaunch installer) a generare un errore.

Nonostante sia sistemabile, il metodo per farlo non è impostato in stone e varia in gran parte tra i sistemi. Un metodo è quello di eliminare qualsiasi DSiWare installato via twlnf in passato, ma è stato anche segnalato che spostare *tutti* DSiWare nella scheda SD e tornare al sistema può aiutare in alcuni casi.

Se hai mai eseguito il downgrade del firmware, aggiornare di nuovo alla versione 1.4.5 (o 1.4.6 se il tuo DS è cinese o coreano) può sistemare questo bug.

### Non c'è alcun avvio audio o di avvio quando si avvia "LAUNCHER" utilizzando Unlaunch

Lo sviluppatore di Unlaunch (nocash) ha intenzionalmente rimosso l'audio di sottofondo e la schermata d'avvio come impostazione predefinita. Puoi riottenere questi effeti [reinstallando Unlaunch](/installing-unlaunch) usando TWiLight Menu++.
