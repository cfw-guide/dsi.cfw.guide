---
title: "Nawigacja stroną"
layout: single-no-ads
sitemap: false
---

{% capture primary-notice %}
**Główny poradnik**

+ [Uruchamianie Eksploratora](launching-the-exploit)
+ [Zrzucanie NAND](dumping-nand)
+ [Instalacja Unlaunch](installing-unlaunch)
+ [hiyaCFW Setup](hiyacfw-setup)
{% endcapture %}
<div class="notice--primary">{{ primary-notice | markdownify }}</div>

{% capture second-notice %}
**Sekcje dodatków**

+ [Konfiguracja karty SD](sd-card-setup)
+ [Lazy DSi Downloader](/lazy-dsi-downloader)
+ [Rozszerzenia plików (Windows)](file-extensions-%28windows%29)
+ [Zrzucanie kart gry](dumping-game-cards)
+ [Kopie zapasowe DSiWare](dsiware-backups)
+ [nds-bootstrap forwarders dla hiyaCFW](nds-bootstrap-forwarders)
+ [Odinstalowywanie Unlaunch](uninstalling-unlaunch)
+ [Przywracanie NAND](restoring-nand)
{% endcapture %}
<div class="notice--info">{{ second-notice | markdownify }}</div>

{% capture other-notice %}
**Inne strony**

+ [Dom](home)
+ [Często Zadawane Pytania (FAQ)](faq)
+ [Troubleshooting](troubleshooting)
+ [Zasługi](credits)

{% endcapture %}
<div class="notice">{{ other-notice | markdownify }}</div>
