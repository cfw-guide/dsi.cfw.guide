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
+ [hiyaCFW](hiyacfw)
{% endcapture %}
<div class="notice--primary">{{ primary-notice | markdownify }}</div>

{% capture second-notice %}
**Add-on sections**

+ [SD card setup](sd-prep)
+ [File Extensions (Windows)](file-extensions-(windows))
+ [Dumping cartridges](dump-cart)
+ [Dumping and installing DSiWare](dsiware)
+ [nds-bootstrap forwarders for hiyaCFW](forwarder)
{% endcapture %}
<div class="notice--info">{{ second-notice | markdownify }}</div>

{% capture other-notice %}
**Other website pages**

+ [Home](home)
+ [FAQ](faq)
+ [Credits](credits)
{% endcapture %}
<div class="notice">{{ other-notice | markdownify }}</div>