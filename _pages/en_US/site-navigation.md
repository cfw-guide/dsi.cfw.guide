---
title: "Site Navigation" #
layout: single-no-ads
sitemap: false
---

{% capture primary-notice %}
**Main guide process**

+ [Dumping NAND](dumping-nand)
+ [Installing Unlaunch](installing-unlaunch)
+ [Installing hiyaCFW](installing-hiyacfw)
+ [Launching the Exploit](launching-the-exploit)
{% endcapture %}
<div class="notice--primary">{{ primary-notice | markdownify }}</div>

{% capture second-notice %}
**Add-on sections**

+ [DSiWare Backups](dsiware-backups)
+ [Dumping Cartridges](dump-cartridges)
+ [File Extensions (Windows)](file-extensions-(windows))
+ [nds-bootstrap forwarders for hiyaCFW](nds-bootstrap-forwarders)
+ [SD card setup](sd-card-setup)
+ [Uninstalling Unlaunch](uninstalling-unlaunch)
{% endcapture %}
<div class="notice--info">{{ second-notice | markdownify }}</div>

{% capture other-notice %}
**Other website pages**

+ [Credits](credits)
+ [FAQ](faq)
+ [Home](home)
{% endcapture %}
<div class="notice">{{ other-notice | markdownify }}</div>
