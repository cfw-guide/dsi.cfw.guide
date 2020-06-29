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
+ [Installing hiyaCFW](installing-hiyacfw)
{% endcapture %}
<div class="notice--primary">{{ primary-notice | markdownify }}</div>

{% capture second-notice %}
**Add-on sections**

+ [SD card setup](sd-card-setup)
+ [File Extensions (Windows)](file-extensions-(windows))
+ [Dumping Cartridges](dump-cartridges)
+ [DSiWare Backups](dsiware-backups)
+ [nds-bootstrap forwarders for hiyaCFW](nds-bootstrap-forwarders)
+ [Uninstalling Unlaunch](uninstalling-unlaunch)
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
