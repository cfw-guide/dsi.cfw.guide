---
title: "Navigazione Sito"
layout: single-no-ads
sitemap: false
---

{% capture primary-notice %}
**Processo guida principale**

+ [Avviare l'exploit](launching-the-exploit)
+ [Backup della NAND](dumping-nand)
+ [Installazione di Unlaunch](installing-unlaunch)

{% endcapture %}
<div class="notice--primary">{{ primary-notice | markdownify }}</div>

{% capture second-notice %}
**Sezione aggiuntive**

+ [Setup Scheda SD](sd-card-setup)
+ [Lazy DSi Downloader](/lazy-dsi-downloader)
+ [Estensioni File (Windows)](file-extensions-%28windows%29)
+ [Dumping delle cartucce di gioco](dumping-game-cards)
+ [Backup DSiWare](dsiware-backups)
+ [Disinstallazione di Unlaunch](uninstalling-unlaunch)
+ [Ripristino NAND](restoring-nand)

{% endcapture %}
<div class="notice--info">{{ second-notice | markdownify }}</div>

{% capture other-notice %}
**Altre pagine del sito**

+ [Home](.)
+ [Domande Frequenti (FAQ)](faq)
+ [Risoluzione problemi](troubleshooting)
+ [Crediti](credits)

{% endcapture %}
<div class="notice">{{ other-notice | markdownify }}</div>
