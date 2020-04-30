---
title: "Site Navigation" #
layout: single-no-ads
sitemap: false
---

{% capture primary-notice %}
**Main guide process**

+ [Exploit Launch](exploit-launch)
+ [Dumping your NAND](dump-nand)
+ [Unlaunch Setup](unlaunch)
+ [hiyaCFW](hiyaCFW)
{% endcapture %}
<div class="notice--primary">{{ primary-notice | markdownify }}</div>

{% capture second-notice %}
**Add-on sections**

+ [Dumping and installing DSiWare](dsiware)
+ [Dumping cartridges](dump-cart)
+ [File Extensions (Windows)](file-extensions-(windows))
+ [SD card setup](sd-setup)
{% endcapture %}
<div class="notice--info">{{ second-notice | markdownify }}</div>

{% capture other-notice %}
**Other website pages**

+ [Home](home)
+ [FAQ](faq)
+ [Credits](credits)
{% endcapture %}
<div class="notice">{{ other-notice | markdownify }}</div>