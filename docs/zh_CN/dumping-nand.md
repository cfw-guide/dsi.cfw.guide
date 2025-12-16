# 提取NAND

这个页面用于备份NAND，它是DSi内部数据的拷贝。 它可以用来配置hiyaCFW自定义固件，以及no$gba和melonDS对DSi的模拟。

::: tip

请确保SD卡有至少 250MB 可用空间，否则您将会在转储工具中出现错误消息。

:::

::: tip

强烈建议你进行该步骤。 如果机器变砖，NAND备份可以用于系统恢复

:::

## 第一节 - SD 卡设置

::: tip

如果您已经从本指南的另一个部分下载了转储工具，您可以跳过此部分。

:::

1. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Place `dumpTool.nds` anywhere on your SD card

## 第二节——提取NAND

1. Launch `dumpTool` through the menu you have installed
   - If you've used an exploit to launch it, and you're already in dumpTool, ignore this step
   - If Unlaunch is already installed and you we're directed to this page from the [Get Started](get-started.html#section-ii-checking-if-unlaunch-is-already-installed) page, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting
2. 点击Nintendo DSi上的 <kbd class="face">A</kbd> 键来开始提取你的 NAND
   - NAND备份一般需要7分钟左右
3. 当NAND备份完成后，按 <kbd>START</kbd> 按钮退出提取工具
4. 关闭DSi并将SD卡插入您的电脑中
5. On the SD card, go to where `dumpTool.nds` is placed, and you'll see a new folder called `DT######...` which contains the NAND backup
   - If dumpTool is downloaded from the [Get Started](get-started.html) page, it'll be named `boot.nds`
   - Inside the folder is `nand.bin` which is the backup itself, and `nand.bin.sha1` which is the SHA1 hash of the backup
6. Store the `DT######...` folder somewhere safe, where you won't lose it
   - 如果可能，请在不同的存储设备上做多个备份
   - 如果你在其他地方完成了备份，你可以在SD卡中将其删除
7. If you've started dumpTool via an exploit, and was downloaded from the [Get Started](get-started.html) page, delete `boot.nds` from the SD card root

::: warning

nand.bin 的 SHA1 hash值会与 nand.bin.sha1 中储存的hash值不匹配。 这是因为在计算SHA1 hash值后，dumpTool对 nand.bin 文件增加了一个 no$gba 页脚的额外数据。 你可以使用 [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) 创建一个没有页脚的副本。

:::

::: tip

Continue to [Choosing a Menu](choosing-a-menu.html)

:::
