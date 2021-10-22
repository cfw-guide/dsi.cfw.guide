# Dumping Game Cards

This section is for dumping game cards using GodMode9i so they can be played on emulators, flashcards, or your SD card via nds-bootstrap.

## 需要准备
- The game card of the title you would like to dump
- 一台安装了[Unlaunch](installing-unlaunch)的Nintendo/iQue DSi

## 操作步骤
### Section I - SD card setup

::: tip
Using a Windows, Linux, or macOS device? 使用 [Lazy DSi Downloader](lazy-dsi-downloader) 来自动设置您的 SD 卡。
:::

1. 下载最新版本的 [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
1. 从 GodMode9i 目录中解压 `GodMode9i.nds` 并复制到你SD卡的任意位置

### Section II - Nintendo DSi instructions
1. 摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd>键 后，再摁下 Dsi 的电源键
   - 这应该能启动到Unlaunch Filemenu
1. 从 Unlaunping Filemenu 启动 GodMode9i
1. Ensure the game card is inserted into the console
1. 选择 GodMode9i 中的“NDS GAMECARD”选项
1. 选择你是否需要空白填充内容（无游戏数据的内容）：
   - Full: 包括填充内容
   - Trim: 移除填充内容
1. Repeat steps 3-5 for all game cards you wish to dump

::: tip
The dumped game cards will be found in `sd:/gm9i/out`.
:::
