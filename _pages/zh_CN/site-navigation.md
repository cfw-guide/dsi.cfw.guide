---
title: "网站导航"
layout: single-no-ads
sitemap: false
---

{% capture primary-notice %}
**主要指南进程**

+ [启动漏洞](launching-the-exploit)
+ [提取NAND](dumping-nand)
+ [Installing Unlaunch](installing-unlaunch)

{% endcapture %}
<div class="notice--primary">{{ primary-notice | markdownify }}</div>

{% capture second-notice %}
**Add-on sections**

+ [SD 卡设置](sd-card-setup)
+ [Lazy DSi File Downloader（DSi懒人下载包）](/lazy-dsi-downloader)
+ [文件扩展名 (Windows)](file-extensions-%28windows%29)
+ [Dumping Game Cards](dumping-game-cards)
+ [DSiware备份](dsiware-backups)
+ [Uninstalling Unlaunch](uninstalling-unlaunch)
+ [Restoring NAND](restoring-nand)

{% endcapture %}
<div class="notice--info">{{ second-notice | markdownify }}</div>

{% capture other-notice %}
**Other website pages**

+ [首页](.)
+ [常见问题（FAQ）](faq)
+ [故障排查](troubleshooting)
+ [制作人员](credits)

{% endcapture %}
<div class="notice">{{ other-notice | markdownify }}</div>
