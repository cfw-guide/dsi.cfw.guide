---
title: "提取原版卡带"
redirect_from:
  - 转储烧录卡
  - 转储游戏卡
---

此部分将使用GodMode9i提取原版卡带中的内容，使其可在模拟器、烧录卡或通过nds-bootstrap运行

## 需要准备
* 你想要提取的原版卡带
* 一台安装了[Unlaunch](installing-unlaunch)的Nintendo/iQue DSi

## 操作步骤
### 第一节 - SD 卡设置

正在使用Windows、Linux或 macOS 设备？ 使用 [Lazy DSi Downloader](lazy-dsi-downloader) 来自动设置您的 SD 卡。
{: .notice--info}

1. 下载最新版本的 [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
1. 从 GodMode9i 目录中解压 `GodMode9i.nds` 并复制到你SD卡的任意位置

### 第二节——DSi上的操作
1. 摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd>键 后，再摁下 Dsi 的电源键
   - 这应该能启动到Unlaunch Filemenu
1. 从 Unlaunping Filemenu 启动 GodMode9i
1. 确保游戏卡带被插入机器中
1. 选择 GodMode9i 中的“NDS GAMECARD”选项
1. 选择你是否需要空白填充内容（无游戏数据的内容）：
   - Full: 包括填充内容
   - Trim: 移除填充内容
1. 对你想要提取的所有卡带重复步骤3-5

提取出的文件将会在`sd:/gm9i/out`文件夹中找到
{: .notice--success}
