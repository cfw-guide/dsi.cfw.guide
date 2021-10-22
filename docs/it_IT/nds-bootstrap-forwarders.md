# nds-bootstrap forwarders per hiyaCFW

Questa è una sezione aggiuntiva che comporta la creazione di scorciatoie per nds-bootstrap. Ciò ti permette di lanciare rom Nintendo DS direttamente dalmenù di sistema della tua SDNAND.

## Requisiti

- Un Nintendo DSi con [Unlaunch](/installing-unlaunch) e [hiyaCFW](/hiyacfw-setup) installato
- Una configurazione di [TWiLight Menu++](launching-the-exploit#twilight-menu)
- La versione più recente di [MakeForwarder](https://github.com/Ta180m/Make-Forwarder-Dsi/releases)

### Istruzioni

1. Estrai *il contenuto di* `MakeForwarder.zip` nella tua scheda SD
1. Avvia TWiLight Menu++ tramite il menù Unlaunch
   - Tieni premuti <kbd class="face">A</kbd> e <kbd class="face">B</kbd> per entrare nel menù di Unlaunch
1. Avvia la tua ROM del Nintendo DS
1. Una volta che la ROM si avvia e funziona, spegni la console
   - Se non funziona, segui la guida per la risoluzione dei problemi di nds-bootstrap
1. Avvia hiyaCFW tramite il menù Unlaunch
1. Una volta entrati nel tuo Menù di sistema del Nintendo DSi, avviare "Forwarder Maker"
1. Imposta il bootstrap di destinazione a seconda di ciò che la tua applicazione è:
   - **Retail ROM:** `sd:/_nds/nds-bootstrap-release.nds`
   - **Homebrew:** `sd:/_nds/nds-bootstrap-hb-release.nds`
1. Seleziona "create forwarder" & vai alla posizione della tua ROM

Ripetere i passaggi 7 e 8 fino a quando non avrete ottenuto tutte le vostre ROM create come scorciatoie.
- Non hai bisogno di resettare la versione del bootstrap di destinazione a meno che quella precedente non sia diversa da quella attuale

Una volta che hai ottenuto tutte le ROM create come scorciatoie, riavviare il sistema e lanciare hiyaCFW. Ora dovrebbero apparire sotto scatole regalo.
