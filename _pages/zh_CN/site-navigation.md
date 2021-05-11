---
title: "网站导航"
layout: single-no-ads
sitemap: false
---

{% capture primary-notice %}
**主要指南进程**

+ [启动漏洞](launching-the-exploit)
+ [提取NAND](dumping-nand)
+ [安装 Unlaunch](installing-unlaunch)
+ [hiyaCFW 设置](hiyacfw-setup)
{% endcapture %}
<div class="notice--primary">{{ primary-notice | markdownify }}</div>

{% capture second-notice %}
**附加部分**

+ [SD 卡设置](sd-card-setup)
+ [Lazy DSi File Downloader（DSi懒人下载包）](/lazy-dsi-downloader)
+ [文件扩展名 (Windows)](file-extensions-%28windows%29)
+ [提取原版卡带](dumping-cartridges)
+ [DSiware备份](dsiware-backups)
+ [hiyaCFW的nds-bootstrap 转发器](nds-bootstrap-forwarders)
+ [卸载 Unlaunch](uninstalling-unlaunch)
+ [还原nand](restoring-nand)
{% endcapture %}
<div class="notice--info">{{ second-notice | markdownify }}</div>

{% capture other-notice %}
**其他网页**

+ [首页](home)
+ [常见问题（FAQ）](faq)
+ [故障排查](troubleshooting)
+ [制作人员](credits)

{% endcapture %}
<div class="notice">{{ other-notice | markdownify }}</div>
