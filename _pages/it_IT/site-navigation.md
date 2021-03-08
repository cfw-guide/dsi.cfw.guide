---
title: "Navigazione Sito"
layout: single-no-ads
sitemap: false
---

{% capture primary-notice %}
**Processo guida principale**

+ [Avviare l'exploit](launching-the-exploit)
+ [Backup della NAND](dumping-nand)
+ [Installare Unlaunch](installing-unlaunch)
+ [hiyaCFW setup](hiyacfw-setup)
{% endcapture %}
<div class="notice--primary">{{ primary-notice | markdownify }}</div>

{% capture second-notice %}
**Sezione aggiuntive**

+ [Setup Scheda SD](sd-card-setup)
+ [Lazy DSi Downloader](/lazy-dsi-downloader)
+ [Estensioni File (Windows)](file-extensions-%28windows%29)
+ [Backup Cartucce](dumping-cartridges)
+ [Backup DSiWare](dsiware-backups)
+ [forwarder nds-bootstrap per hiyaCFW](nds-bootstrap-forwarders)
+ [Disinstallazione di Unlaunch](uninstalling-unlaunch)
+ [Ripristino nand](restoring-nand)
{% endcapture %}
<div class="notice--info">{{ second-notice | markdownify }}</div>

{% capture other-notice %}
**Altri siti web**

+ [Home](home)
+ [Domande Frequenti (FAQ)](faq)
+ [Risoluzione problemi](troubleshooting)
+ [Crediti](credits)

{% endcapture %}
<div class="notice">{{ other-notice | markdownify }}</div>
