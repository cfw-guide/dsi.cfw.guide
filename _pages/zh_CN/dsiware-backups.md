---
title: DSiware备份
redirect_from:
  - more/dumping-dsiware-from-3ds
  - more/dumping-dsiware
  - dsiware
  - more/installing-dsiware
  - installing-dsiware
---

{% include toc title="DSiWare Backups" %}

## 首先需要…
- 最新版本的 [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - 下载压缩包，解压并将 `GodMode9i.nds` 放置在你 SD 卡的任意位置
- 一台安装了[Unlaunch](/unlaunch)的Nintendo/iQue DSi

## Nintendo DSi - 说明

### 第一部分 - 识别 .app 文件的路径
1. 摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd> 后，再摁下 DSi 的电源键
   - 这应该能启动到Unlaunch Filemenu
1. 在列表中找到您的程序
   - 如果他们显示为浅绿色，那么证明它已经被安装到了NAND上

当您悬停于项目上时，下屏应该显示其文件路径 记住这个路径，这对以后的操作非常重要！

示例路径如下 `nand:/title/0030005/484e4a45/content/00000003.app`
{: .notice--info}

### 第二节——提取文件
1. 从 Unlaunping Filemenu 启动 GodMode9i
1. 导航到 SYSNAND，路径便是您刚才记下来的那一个
1. 高亮选中 `.app` 文件，然后按 <kbd class="l">L</kbd>键 将其添加到剪贴板
   - 对您想要复制到同一个目录的所有文件重复此操作
1. 任意选择一个你想要粘贴的目录
1. 按 <kbd class="face">Y</kbd>键 将提取的 DSiWare 应用粘贴到您目前所在的目录

您现在应该可以在 TWiLight 菜单++ 或 Unlaunch Filemenu中看到你所提取的DSiWare 应用。
