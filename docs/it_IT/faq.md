---
title: FAQ
---

## Devo aggiornare il sistema?
It is **not** recommended to update your DSi unless you know there are purchased DSiWare. While it still possible to follow this guide if you do so, the only benefit to updating is the ability to access the Nintendo DSi Shop to redownload already purchased titles. All other benefits, such as Facebook integration in the Nintendo DSi Camera application, are no longer usable or are not significant enough to justify the downsides:

- Installing System Updates is known to occasionally **brick** consoles, with roughly the same frequency as when installing Unlaunch
- Older exploits are no longer possible to use, which may be required if you are unable use the recommended exploits
- Flashcard compatibility is reduced, however this is bypassed if you install Unlaunch

## Qual è l'exploit migliore?
Unlaunch nel complesso è l'exploit migliore per il DSi, l'unico lato negativo è che c'è un basso rischio di rompere il DSi quando lo si installa. In general it's recommended to use Memory Pit to install Unlaunch. If you want to avoid any risk it's recommended to instead use Flipnote Lenny as it has fewer issues in homebrew than Memory Pit while being just as safe and simple to remove. Below is a list of the pros and cons of each exploit:

### Memory Pit
Pro:
- Facile e semplice da usare
- Nessun rischio di danneggiare la console, la disinstallazione è talmente semplice che basta rimuovere la SD o eliminare un file
- Compatibile con tutte le console DSi a meno che non abbiano una fotocamera rotta e non abbiano completato il tutorial della app fotocamera

Contro:
- Richiede di aprire l'app Fotocamera Nintendo DSi ogni volta che si desidera accedere all'homebrew
- Incompatibile con alcuni titoli in modalità DSi e applicazioni homebrew a causa di WRAM aperto solo alla CPU ARM7
- L'accesso allo Slot-1 (la scheda di gioco DS) è bloccato con gli hombrew
- L'accesso al DSP è bloccato e ciò comporta un peggioramento del suono in GBARunner2
- Le foto sulla scheda SD non possono essere visualizzate tramite l'applicazione Fotocamera Nintendo DSi mentre Memory Pit è installato, dato che ciò attiverebbe l'exploit
     - L'unico modo per visualizzare le foto della scheda SD mentre Memory Pit è installato è tramite l'esecuzione di un dump della ROM dell'applicazione Fotocamera Nintendo DSi usando **TW**i**L**ight Menu++ per avviarlo tramite nds-bootstrap (v0.61.3 or later)

### stylehax
Pro:
- Migliore compatibilità con titoli e app homebrew in modalità DSi rispetto a Memory Pit
- Facile da usare
- Nessun rischio di danneggiare la console
- Utilizzabile su console con fotocamera rotta
- Audio migliore in GBARunner2

Contro:
- Richiede accesso a internet
- Richiede di aprire DSi Browser ogni volta che si desidera accedere all'homebrew e ciò richiede poco più tempo di Memory Pit
- L'accesso allo Slot-1 (la scheda di gioco DS) è bloccato con gli hombrew

### Flipnote Lenny
Pro:
- Migliore compatibilità con titoli e app homebrew in modalità DSi rispetto a Memory Pit
- Nessun rischio di danneggiare la console, la disinstallazione è talmente semplice che basta rimuovere la SD o eliminare una cartella
- Utilizzabile su console con fotocamera rotta
- Audio migliore in GBARunner2

Contro:
- Richiede di aprire Flipnote Studio ogni volta che si desidera accedere all'homebrew e ciò richiede poco più tempo di Memory Pit
- L'accesso allo Slot-1 (la scheda di gioco DS) è bloccato con gli hombrew

### Unlaunch
Pro:
- Consente di aprire app homebrew e DSiWare immediatamente all'avvio del sistema, con tasti di scelta rapidi opzionali
- Pieno accesso al sistema senza alcuna limitazione, tra cui:
   - Accesso allo Slot-1 che consente di eseguire il backup di Cartucce di Gioco e l'avvio di flashcard non compatibili
   - Audio migliore in GBARunner2
- Rimuove i blocchi regionali sulle carte di gioco DSi-Enhanced/Exclusive
- Protezione contro la maggior parte dei modi con cui un DSi potrebbe rompersi
- DSi-Enhanced games can be run in DSi mode without a Donor ROM
- Vecchie app homebrew possono essere eseguite tramite nds-bootstrap-hb

Contro:
- Un bassissimo rischio di **rompere** la console durante l'installazione
- Un altro rischio, leggermente più alto, di rompere la console se si decide di [disinstallarlo](uninstalling-unlaunch.html)
- Non compatibile con console di sviluppo

## Perderò qualche funzionalità se modifico il mio sistema?
Se si installa Unlaunch o si usa Flipnote Lenny, non si perderà alcuna funzionalità. If you use Memory Pit, you will be unable to view photos on the SD card using the DSi Camera, unless you launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap.
- To regain the ability to view your SD card photos when launching the DSi Camera from the DSi Menu, install Unlaunch or switch to a different exploit, then delete Memory Pit's `pit.bin` file
  - If `tip.bin` exists in the same folder, rename it back to `pit.bin`

## Come faccio a giocare ai backup delle cartucce di gioco per Nintendo DS?
Playing Game Card dumps on the console requires the use of a flashcard or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting Slot-1 reads and writes to it.
- With TWiLight Menu++ you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using TWiLight Menu++ are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. In other words, you can drop your ROM files directly and play without any setup. There is no 39 title limit, neither hiyaCFW or Unlaunch are required and there are no restrictions on SD card free space you can have
- hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) guide on the DS-Homebrew Wiki, but it has some limitations. There is a hard limit of 39 titles, and they are less convenient to make than using TWiLight Menu++
   - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## Come faccio ad aggiornare il mio homebrew?
- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](installing-unlaunch.html) page
   - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card from the [updated release](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
   - If you use TWiLight Menu++, there is a high chance that the latest nds-bootstrap release is included with TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

Other homebrew might use other methods to update.

## Sono nuovo o vorrei rifare la mia configurazione. Da dove Inizio?
- If you have not already modified your console or are looking to update Unlaunch on your system, we recommend starting from the beginning of the guide and following through the pages. Be sure to read everything on the homepage
- If you have the latest version Unlaunch, follow the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) to set up TWiLight Menu++ on your system

## Come posso eliminare il filtro famiglia?
- The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls

## Posso cambiare la regione del mio Nintendo DSi?
Yes, there are a few different methods depending on what you want to change:
- The safest and simplest method is to simply install TWiLight Menu++, it can use any official language and more without needing NAND modifications
- If you want to actually change the system region and are using hiyaCFW, you can use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) for Asian DSi systems. For American DSi systems use [this version of hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## Cosa è successo alla guida all'installazione di hiyaCFW?
Poiché hiyaCFW non è molto pratico ed è stato un passaggio problematico e confusionario della guida per parecchi utenti, la guida è stata spostata alla [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).
- If you were linked to the page in question from another guide, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects

## Che tipo di scheda SD dovrei utilizzare?
- Dovresti acquistare una scheda SD di un marchio affidabile
- A full-size SD card or a microSD card with an adapter will both work
- Any capacity between 1 GB and 2 TB will work. For general usage, 8 GB is enough
  - Some software, such as hiyaCFW, may experience incrementally longer loading times with larger SD card capacities
- Speed class 8 or higher is recommended

## Posso usare la mia scheda SD del DSi su altri sistemi?
Generalmente sì, ma con due eccezioni:
- hiyaCFW funzionerà solo sul sistema su cui è stato configurato
- Anche se stai usando nds-bootstrap o una flashcard, i codici amico dei giochi online NDS verranno reimpostati quando si tenta di andare online utilizzando una console diversa

## How do I switch to a new SD card after setting up homebrew?
Format your new SD card using the [SD Card Setup](sd-card-setup.html) instructions, then simply move your data from the old SD card to the new one.

## Can I still use my system normally without the SD card inserted after setting up homebrew?
Yes. If you did not install Unlaunch, your system will remain completely unmodified. If you *did* install Unlaunch, you may need to [configure Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) to automatically boot the original DSi Menu under specified conditions.

## The [Unlaunch page](https://problemkaputt.de/unlaunch.htm) says that version 2.0 is not known to be safe. Should I use a previous version instead?
The Unlaunch page has not been updated since version 2.0 was released, which was over two years ago. The vast majority of users experience no issues with this version, so it is considered safe.


## How do I run dumped DSiWare?
The recommended method is to simply launch them with TWiLight Menu++, due to the simple drag-and-drop method and there being no arbitrary limit. When nds-bootstrap is set as the launch method, it also gains the benefits of cheats and screenshots, as well as any other benefit provided by the in-game menu.

However, for the few titles that are incompatible, you can use [NTM](https://github.com/Epicpkmn11/NTM/releases) to install them on either internal memory or [hiyaCFW's SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing). In addition to lacking the benefits above, there is also a limit of 39 titles that cannot exceed 128 MiB/1,024 blocks in size. For SysNAND, there is also a very small risk of bricking the system when writing to the internal NAND.
