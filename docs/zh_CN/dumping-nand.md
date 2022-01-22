---
title: 提取NAND
---

这个页面用于备份NAND，它是DSi内部数据的拷贝。 It can be used to set up hiyaCFW, as well as no$gba and melonDS for DSi emulation.

::: tip

强烈建议你进行该步骤。 如果机器变砖，NAND备份可以用于系统恢复

:::

## 第一节 - SD 卡设置

::: tip

正在使用Windows、Linux或 macOS 设备？ 使用 [Lazy DSi Downloader](lazy-dsi-downloader) 来自动设置您的 SD 卡。

:::

1. 下载最新版本的 [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. 将 `dumpTool.nds` 放置在你SD卡的任意位置

## 第二节——提取NAND
1. 通过 TWiLight 菜单++ 启动 `dumpTool`
1. 点击Nintendo DSi上的 <kbd class="face">A</kbd> 键来开始提取你的 NAND
   - NAND备份一般需要7分钟左右
1. 当NAND备份完成后，按 <kbd>START</kbd> 按钮退出提取工具
1. 关闭DSi并将SD卡插入您的电脑中
1. 将此备份存储在任何安全且不会丢失的地方
   - 如果可能，请在不同的存储设备上做多个备份
   - 如果你在其他地方完成了备份，你可以在SD卡中将其删除

::: warning

`nand.bin` 的 SHA1 hash值将与 `nand.bin.sha1` 中储存的hash值不匹配。 这是因为在计算SHA1 hash值后，dumpTool对 `nand.bin` 文件增加了一个 no$gba 页脚的额外数据。 您可以使用 [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) 创建一个无页脚的副本。

:::

::: tip

继续 [安装Unlaunch](installing-unlaunch) (Optional, not compatible with Nintendo DSi development consoles)

:::
