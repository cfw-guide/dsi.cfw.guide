---
layout: splash
title: DSi 破解指南
header:
  overlay_color: "#1a1d24"
  overlay_image: /assets/images/homeage-feature.png
  overlay_filter: 0.5
excerpt: "最完整的 Nintendo DSi 破解指南"
---

欲了解其他设备的自制程序和自定义固件的完整指南，请参阅 [CFW.Guide](https://cfw.guide/)
{: .notice--primary}

本指南不适用于Nintendo DSi开发机。
{: .notice--danger}

在继续之前，请详细阅读包括本页在内的全部介绍页面。
{: .notice--info}

## 自制程序（Homebrew）是什么 ？

[自制](https://en.wikipedia.org/wiki/Homebrew_(video_games)) 软件 是指为一个封闭生态的系统上开发并使用非正常渠道安装的软件，例如我们将会提到的 Nintendo DSi. 这些软件涵盖实用工具到自制游戏。

自制软件可以在所有 Nintendo DSi 机器上免费、自由地运行，与固件版本或区域无关。 您需要的只是一个入口点和一个SD卡来存储您的自制程序。 本指南中使用的主要入口点将称为 Memory Pit. 但如果 Memory Pit 不可用，您还可以使用其他入口点。

## 这个指南要对我的掌机做什么？

这个指南是以线性方式设计的， 当然你可以决定你要走多远。

- 我们将设置一个入口点来通过 Memory Pit 启动基本的自制程序，这是对”Nintendo DSi Camera“应用程序的漏洞利用
- 然后我们将备份你的NAND，这个备份是有用的恢复点，以防你稍后陷入困境。
- 对于想要更多控制权的用户，我们会让他们安装Unlaunch. Unlaunch允许自制程序获得更多的权限（例如slot-1访问）和打开设备时代替系统菜单启动
   - 安装 Unlaunch 时，在极个别情况下，可能会使设备**变砖**。 如果你想防止设备变砖，在此之前可以给NAND做一个备份
- 最后，对于想要在Nintendo DSi 系统菜单上安装自定义应用程序的用户，我们将会安装hiyaCFW

## 修改系统能做什么？

- 将NAND重定向到SD卡
- 使用通常情况下不兼容的烧录卡
- 在Nintendo DSi开机时通过长按特定的按钮来启动至DSiWare和自制程序。
- 从SD卡启动任何DSiWare (跨区和/或3DS专用版本)
- 直接从DSi的SD卡上运行Nintendo DS游戏，而不需要烧录卡
- 使用 MP4播放器 观看喜欢的电影
- 用各种模拟器玩老游戏
- 使用 FreeNAND 将配置、 系统、 title 和 ticket通过 SDNAND 传输到另一个 Nintendo DSi
- 在启动时显示自定义图像（取代原生启动动画）

## 在哪里能找到自制软件？

- [Universal DB](https://db.universal-team.net/ds) 拥有最新的现代自制软件，并且可以通过搜索和排序快速寻找想要的软件
- [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications) 拥有较旧的自制软件，这些软件可能只能在烧录卡上运行

## 开始之前我应该知道什么？

- 在Windows上，如果您正在使用默认的文件资源管理器，建议 [显示文件扩展名](file-extensions-%28windows%29)
- 唯一会使设备变砖的风险来自 Unlaunch，但机率微乎其微
- 如果您没有经验将文件复制到SD卡，我们有可用的辅助工具帮助您。

开始 [触发漏洞](launching-the-exploit){: #get-started}
{: .notice--info}
