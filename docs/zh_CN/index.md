---
title: DSi 破解指南
<!--header:
  overlay_color: "#1a1d24"
  overlay_image: /assets/images/home-page-feature.png
  overlay_filter: 0.5-->
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
- Finally, for users that want access to the full capabilities of the DSi we will walk them through installing Unlaunch. Unlaunch allows homebrew to run with more permissions (such as Slot-1 access) and at system boot
   - 安装 Unlaunch 时，在极个别情况下，可能会使设备**变砖**。 如果你想防止设备变砖，在此之前可以给NAND做一个备份

## 修改系统能做什么？

- Run Nintendo DS(i) game backups from your DSi SD card without the need of a flashcard
- Launch any DSiWare (out-of-region and/or 3DS exclusives) from your SD card
- 在Nintendo DSi开机时通过长按特定的按钮来启动至DSiWare和自制程序。
- Run old-time classics using various emulators
- Use normally incompatible flashcards
- Redirect your NAND to the SD card
- Watch your favorite movies using MPEG4Player
- Use FreeNAND to transfer configurations, sys, titles and tickets to another Nintendo DSi from a SDNAND
- 在启动时显示自定义图像（取代原生启动动画）

## 在哪里能找到自制软件？

- [Universal-DB](https://db.universal-team.net/ds) has most modern homebrew, with nice search and sorting to keep track of what's been updated recently
- [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew) has a lot of older homebrew, however many will only work on flashcards

## 开始之前我应该知道什么？

- 在Windows上，如果您正在使用默认的文件资源管理器，建议 [显示文件扩展名](file-extensions-%28windows%29)
- 唯一会使设备变砖的风险来自 Unlaunch，但机率微乎其微
- 如果您没有经验将文件复制到SD卡，我们有可用的辅助工具帮助您。

Continue to [Launching the Exploit](launching-the-exploit)
{: .notice--info}
