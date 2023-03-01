---
title: 安装 Unlaunch
---

::: danger

If you have not yet done so, please follow [Dumping NAND](dumping-nand.html). While the chances are slim, Unlaunch can accidentally brick your Nintendo DSi. A NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) would allow you to restore this backup, provided you know how to solder.

:::

::: warning

Make sure your console is charged when following this process. A sudden power loss could result in serious damage.

:::

::: warning

Unlaunch is not compatible with Nintendo DSi development consoles.

:::

## 第一节 - SD 卡设置

1. 下载最新版本的[ Unlaunch ](https://problemkaputt.de/unlaunch.zip)
   - 使用[镜像链接](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip)，如果上述链接无法工作 1.从`unlaunch.zip`中解压`UNLAUNH.DSI`并复制到你SD卡的任意位置 1.确认你的SD卡上仍然有TWiLight菜单++
1. 从SD卡中删除`UNLAUNH.DSI`文件
1. 确认你的SD卡上仍然有 TWiLight 菜单++
   - If you are unsure, follow the instructions from the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## 第二节——安装/更新Unlaunch

1. 打开TWiLight Menu++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the [exploit that you used](launching-the-exploit.html)
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the option labeled `TWiLight Menu++`
   - If several options are labeled `TWiLight Menu++`, select the option in where `BOOT.NDS` is shown at the end of the path on the bottom screen
      - This happens because you are running an older version of TWiLight Menu++, unless you're doing it on purpose, is suggested that you [update your installation](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
1. 启动 TWiLight Menu++ 设置
   - If you haven't changed your theme, press `SELECT` and touch the small DS icon on the bottom of the touch screen. Otherwise, see the TWiLight Menu++ Manual
1. 点击 <kbd class="l">L</kbd> / <kbd class="r">R</kbd> 或 <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> 直到您到达 `Unlaunch settings` 页面
1. If you want to change Unlaunch's background image, select `Background` and choose the one you want
   - If you want to create your own Unlaunch background, see the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Exit TWiLight Menu++ Settings
1. In the file navigation menu, launch `Unlaunch DSi Installer`
   - If you see two black screens after launching, download [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start `Unlaunch.dsi`    
     This method does not enable Unlaunch to use custom patches and background
1. Select the "install now" option
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting.html) page
1. When completed, reboot your system

If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.
- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

## 第三部分 - 启动后配置

Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed launch whatever you want.

1. 摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd>键 后，再摁下 Dsi 的电源键
   - 这应该能启动到Unlaunch Filemenu
   - If only the background is shown, or if no files from the SD card are shown (ex. `TWiLight Menu++`), then you'll need to [reformat the SD card](sd-card-setup.html)
1. 导航到 `OPTIONS`, 并查看可用的选项
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd>被硬编码启动到Unlaunch的菜单，因此无法更改
   - “NO BUTTON”和“BUTTON A / B / X / Y”选项可以根据您的喜好进行设置，并根据按住的按钮选择 DSi 在启动时加载的内容。您可以选择任何 DSiWare、自制软件、Slot-1 卡、wifiboot 或 Unlaunch 的文件菜单 您可以选择任何DSIWare，Homebrew，Slot-1卡，Wifiboot或Unlaunch能引导的文件
      - For TWiLight Menu++, select  `TWiLight Menu++`
      - 想要原生 DSi 菜单，请选择 `Launcher`
   - `LOAD ERROR`出现时说明加载出现问题，例如SD卡未插入
1. 选择SAVE & EXIT以保存设置，然后关闭您的DSI

## 第四部分 - 清理你的 SD 卡

::: tip

This section is optional and only serves for keeping your SD card tidy of files you won't need.

:::

:::: tabs

::: tab name="Memory Pit" default

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
   - If `tip.bin` still exists, then rename it back to `pit.bin`
- You can now restore the `DCIM` folder that was on the root of your SD card, if this folder existed
- 从SD卡中删除`sd:/private/ds/app/484E494A/pit.bin`文件

:::

::: tab name="Flipnote Lenny"

- Delete the `800031_104784BAB6B57_000.ppm` and `T00031_1038C2A757B77_000.ppm` files from inside the following folders:
   - `sd:/private/ds/app/4B47554A/001` (Japan)
   - `sd:/private/ds/app/4B475545/001` (USA)
   - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
   - You can also delete the entire folders for the regions besides your own
- 从SD卡中删除`sd:/private/ds/app/484E494A/pit.bin`文件

:::
