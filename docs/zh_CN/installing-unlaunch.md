---
title: 安装 Unlaunch
---

Unlaunch是系统启动时触发的一种漏洞。 This allows it to have higher privileges than normal DSiWare exploits such as Memory Pit, which makes it able to do the following:

- 通过组合键，在启动时启动应用程序(homebrew 或 DSiWare)
- Access to Slot-1, allowing you to dump Game Cards and launch incompatible flashcards
- Region locks removed on DSi-Enhanced / Exclusive Game Cards
- 通过 nds-bootstrap-hb 运行旧的 Nintendo DS homebrew
- 从内部SD卡启动DSiWare
- The following for Memory Pit users (other exploits already allow these):
     - Using a Windows, Linux or macOS device? 使用 Windows、Linux 或 macOS 设备？使用 [Lazy DSi Downloader](lazy-dsi-downloader) 来自动设置您的 SD 卡。
     - 在 GBARunner2 中实现更好的声音

::: danger

If you have not yet done so, please follow [Dumping NAND](dumping-nand). 虽然概率较低，Unlaunch仍有可能使DSi变砖。 A NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) would allow you to restore this backup, provided you know how to solder.

:::

::: warning

请确定你的机器在此过程中保持充电状态。 突然断电可能会造成严重的损坏。

:::

## 第一节 - SD 卡设置

::: tip

正在使用Windows、Linux或 macOS 设备？ 使用 [Lazy DSi Downloader](lazy-dsi-downloader) 来自动设置您的 SD 卡。

:::

1. 下载最新版本的[ Unlaunch ](https://problemkaputt.de/unlaunch.zip)
   - 使用[镜像链接](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip)，如果上述链接无法工作 1.从`unlaunch.zip`中解压`UNLAUNH.DSI`并复制到你SD卡的任意位置 1.确认你的SD卡上仍然有TWiLight菜单++
1. 从SD卡中删除`UNLAUNH.DSI`文件
1. 确认你的SD卡上仍然有 TWiLight 菜单++
   - If you are unsure, follow the instructions from the [Launching the Exploit](launching-the-exploit.html#twilight-menu) page

## 第二节——安装/更新Unlaunch

1. 打开TWiLight Menu++
   - 如果这是您第一次安装 Unlaunch，请通过您使用的漏洞重新启动 TWiLight Menu++
   - 如果您已经安装了Unlaunch并恢复更新，在启动时选择<kbd class="face">A</kbd> + <kbd class="face">B</kbd>选择`TWiLight菜单+ +`,当`BOOT.NDS`显示在底部屏幕时。
1. 启动暮光之城菜单++设置
   - 如果您没有更改主题，请按“启动漏洞”页面中的步骤操作。 否则，请参阅TWiLight 菜单++ 手册
1. 点击 <kbd class="l">L</kbd> / <kbd class="r">R</kbd> 或 <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> 直到您到达 `Unlaunch settings` 页面
1. If you want to change Unlaunch's background image, select `Background` and choose the one you want
   - If you want to create your own Unlaunch background, consult the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. 如果您想要健康和安全屏幕和 DSi 菜单音乐和声音，请将“启动器补丁”设置为“关闭”
   - This will also keep the region locking and card whitelist, meaning that some flashcards won't be usable from the DSi Menu
1. Exit TWiLight Menu++ Settings
1. 想要原生DSi菜单，请选择`Launcher`
1. 选择install选项
   - 如果未启动成功在`ERROR: MISMATCH IN FAT COPIES 排`，请查看我们[故障查询](疑难解答)页面
1. 完成后，重启您的系统

如果您此时看到 Unlaunch Filemenu 的屏幕，说明您已成功地破解了您的Nintendo DSi。
- 如果您不确定，请按照 [启动漏洞利用](launching-the-exploit#twilight-menu) 页面中的说明进行操作

## 第三部分 - 启动后配置

目前，Unlaunch 默认在启动时启动其文件菜单，但可以更改启动任何你想要的。

我们也将重设置nd-bootstrap以游戏中软重启至TWiLight Menu++（而不是触发关闭的DSiWare）

1. 摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd>键 后，再摁下 Dsi 的电源键
   - 这应该能启动到Unlaunch Filemenu
1. 导航到 `OPTIONS`, 并查看可用的选项
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd>被硬编码启动到Unlaunch的菜单，因此无法更改
   - “NO BUTTON”和“BUTTON A / B / X / Y”选项可以根据您的喜好进行设置，并根据按住的按钮选择 DSi 在启动时加载的内容。您可以选择任何 DSiWare、自制软件、Slot-1 卡、wifiboot 或 Unlaunch 的文件菜单 您可以选择启动任何 DSiWare, Homebrew, Slot-1卡, wifiboot, 或Unlaunch的文件菜单
      - 想要TWiLight Menu++，请在`BOOT.NDS`出现在下屏幕时，选择`TWiLight Menu++`选项
      - 想要原生 DSi 菜单，请选择 `Launcher`
   - `LOAD ERROR`出现时说明加载出现问题，例如SD卡未插入
1. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## 第四部分 - 清理你的 SD 卡

::: tip

1.同时摁住<kbd class="face">A</kbd>和<kbd class="face">B</kbd>键后，再摁下Dsi的电源键 1.导航到`OPTIONS`，并查看可用的选项

:::

- 如果您想创建自己的 Unlaunch 背景，请参阅 [DS-Homebrew Wiki 页面](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
   - 如果您使用了其他漏洞，请删除有关该漏洞的文件，而不是上面这个
- 从SD卡中删除`sd:/private/ds/app/484E494A/pit.bin`文件
