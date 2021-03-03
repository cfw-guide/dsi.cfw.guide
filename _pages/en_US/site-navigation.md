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
+ [hiyaCFW setup](hiyacfw-setup)
{% endcapture %}
<div class="notice--primary">{{ primary-notice | markdownify }}</div>

{% capture second-notice %}
**Add-on sections**

+ [SD Card Setup](sd-card-setup)
+ [Lazy DSi Downloader](/lazy-dsi-downloader)
+ [File Extensions (Windows)](file-extensions-%28windows%29)
+ [Dumping Cartridges](dumping-cartridges)
+ [DSiWare Backups](dsiware-backups)
+ [nds-bootstrap forwarders for hiyaCFW](nds-bootstrap-forwarders)
+ [Uninstalling Unlaunch](uninstalling-unlaunch)
+ [Restoring nand](restoring-nand)
{% endcapture %}
<div class="notice--info">{{ second-notice | markdownify }}</div>

{% capture other-notice %}
**Other website pages**

+ [Home](home)
+ [Frequently Asked Questions (FAQ)](faq)
+ [Troubleshooting](troubleshooting)
+ [Credits](credits)

{% endcapture %}
<div class="notice">{{ other-notice | markdownify }}</div>
