---
title: "Index du site"
layout: single-no-ads
sitemap: false
---

{% capture primary-notice %}
**Étapes du guide principal**

+ [Lancement de l'exploit](launching-the-exploit)
+ [Extraction de la NAND](dumping-nand)
+ [Installation de Unlauch](installing-unlaunch)

{% endcapture %}
<div class="notice--primary">{{ primary-notice | markdownify }}</div>

{% capture second-notice %}
**Sections complémentaires**

+ [Configuration de la carte SD](sd-card-setup)
+ [Lazy DSi Downloader](/lazy-dsi-downloader)
+ [Extensions de fichier (Windows)](file-extensions-%28windows%29)
+ [Extraire des cartouches de jeu](dumping-game-cards)
+ [Sauvegardes DSiWare](dsiware-backups)
+ [Désinstallation de Unlauch](uninstalling-unlaunch)
+ [Restauration de la NAND](restoring-nand)

{% endcapture %}
<div class="notice--info">{{ second-notice | markdownify }}</div>

{% capture other-notice %}
**Autres pages du site web**

+ [Accueil](.)
+ [Foire Aux Questions (FAQ)](faq)
+ [Problèmes et dépannage](troubleshooting)
+ [Remerciements](credits)

{% endcapture %}
<div class="notice">{{ other-notice | markdownify }}</div>
