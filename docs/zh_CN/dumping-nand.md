---
title: 提取NAND
---

这个页面用于备份NAND，它是DSi内部数据的拷贝。 It can be used to set up hiyaCFW, as well as no$gba and melonDS for DSi emulation.

::: tip

Make sure the SD card has at least 250MB of free space, or else you'll run into an error message in dumpTool.

:::

::: tip

It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.

:::

## 第一节 - SD 卡设置

::: tip

If you have already downloaded dumpTool from another section of this guide, you can skip this section.

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

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
