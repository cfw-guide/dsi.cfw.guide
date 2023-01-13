---
title: Disinstallazione di Unlaunch
---

::: danger

**Installare o disinstallare Unlaunch potrebbe brickare casualmente la tua console! Sei stato avvertito!**

:::

**ATTENZIONE:** Disinstallare Unlaunch potrebbe brickare il tuo Nintendo DSi. Ecco alcune ragione per cui potresti voler disinstallare Unlaunch ma con soluzioni che non necessitano la disinstallazione.

- **Lo sfondo di Unlaunch fa paura:**[Reinstalla Unlaunch](installing-unlaunch.html)seguendo le nuove istruzioni. Ora contengono istruzioni su come cambiare lo sfondo
- **Ho un problema con Unlaunch o la mia console dopo averlo installato:** La pagina [Risoluzione dei problemi](troubleshooting.html#unlaunch) spiegherà come risolvere i problemi che potrebbero verificarsi

::: warning

Per ridurre le probabilità di bricking, assicurati di non aver installato nessun titolo DSiWare illegale nel backup della tua NAND (la SDNAND fornita da hiyaCFW non conta), o di non aver manomesso file di sistema.

:::

::: warning

Per disinstallare Unlaunch, **NON** si dovrebbe utilizzare il suo disinstallatore incorporato direttamente sulla console in quanto c'è la possibilità che rompa la tua console. Si prega di consultare quanto segue per la corretta disinstallazione.

:::

Dopo aver esaminato le informazioni di cui sopra, segui le istruzioni [Effettuare dump della NAND](dumping-nand.html) per fare un nuovo backup della NAND, poi procedi a [Ripristino di un backup della NAND](restoring-nand.html). This will guide you through uninstalling Unlaunch from the NAND backup and flashing that to your console.

If you are not able to use no$gba or get an error after uninstalling Unlaunch in no$gba it is also possible to flash a NAND backup made prior to installing Unlaunch if you still have one, however it is recommended to try using a NAND backup that previously had Unlaunch first. This will make recovery significantly easier in the case of a brick requiring a hardmod as Unlaunch leaves the no$gba footer embedded in the NAND even when uninstalled.
