---
title: "Site Navigation" #
layout: single-no-ads
sitemap: false
---

{% capture primary-notice %}
**Main guide process**

+ [Launching the Exploit](launching-the-exploit)
+ [Dumping NAND](dumping-nand)
+ [Installing Unlaunch](installing-unlaunch)

{% endcapture %}
<div class="notice--primary">{{ primary-notice | markdownify }}</div>

{% capture second-notice %}
**Add-on sections**

+ [SD Card Setup](sd-card-setup)
+ [Lazy DSi Downloader](/lazy-dsi-downloader)
+ [File Extensions (Windows)](file-extensions-%28windows%29)
+ [Dumping Game Cards](dumping-game-cards)
+ [DSiWare Backups](dsiware-backups)
+ [Uninstalling Unlaunch](uninstalling-unlaunch)
+ [Restoring NAND](restoring-nand)

{% endcapture %}
<div class="notice--info">{{ second-notice | markdownify }}</div>

{% capture other-notice %}
**Other website pages**

+ [Home](.)
+ [Frequently Asked Questions (FAQ)](faq)
+ [Troubleshooting](troubleshooting)
+ [Credits](credits)

{% endcapture %}
<div class="notice">{{ other-notice | markdownify }}</div>
