---
title: DSiware备份
---

{% include toc title="DSiWare Backups" %}

## 首先需要…
- 最新版本的 [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - 下载压缩包，解压并将 `GodMode9i.nds` 放置在你 SD 卡的任意位置
- 一台安装了[Unlaunch](/unlaunch)的Nintendo/iQue DSi

## Nintendo DSi - 说明

### 第一部分 - 识别 .app 文件的路径
1. Boot your Nintendo DSi console while holding <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
   - 这应该能启动到Unlaunch Filemenu
1. 在列表中找到您的程序
   - 如果他们显示为浅绿色，那么证明它已经被安装到了NAND上

当您悬停于项目上时，下屏应该显示其文件路径 记住这个路径，这对以后的操作非常重要！

示例路径如下 `nand:/title/0030005/484e4a45/content/00000003.app`
{: .notice--info}

### 第二节——提取文件
1. 从 Unlaunping Filemenu 启动 GodMode9i
1. 导航到 SYSNAND，路径便是您刚才记下来的那一个
1. Highlight the `.app` file, then press <kbd class="face">Y</kbd> to add it to the clipboard
1. 任意选择一个你想要粘贴的目录
1. Press <kbd class="face">Y</kbd> again to paste the DSiWare title in the directory you are currently navigating
   - You can change the name of the file after pasting it by pressing <kbd class="face">X</kbd> while holding <kbd class="R">R</kbd>
   - Repeat this for all files you wish to copy to the same directory

You should now see the DSiWare title in TWiLight Menu++ or the Unlaunch Filemenu.
