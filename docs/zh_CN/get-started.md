---
title: "开始"
---

本指南所安装的主要自制程序是 **TW**i**L**ight Menu++， 这是对 Nintendo DSi 菜单的升级/替换，允许运行其他自制应用程序，零售DS 游戏，各种旧平台的模拟器等等。

我们将从下载它以及其他一些自制程序工具开始，以便为接下来的利用漏洞破解做准备。

## 安装要求

- 将下载的文件复制到SD卡的方法
- 可以解压档案的应用程序，例如 [7-Zip](https://www.7-zip.org/) (Windows) 或 [The Unarchiver](https://apps.apple.com/cn/app/the-unarchiver/id425424353) (macOS)
    - 我们不建议您使用WinRAR，因为它可能会损坏数据
    - 如果您正在使用 Windows 11，我们也建议您不要使用它的内置解压 (Windows资源管理器)， 它会导致一个错误，说文件名太长或无效

## 第一步 – 准备工作

::: warning

确保你的SD卡已[正确格式化](sd-card-setup.html)。

:::

1. 将您的 SD 卡插入计算机
1. 下载最新版本的 [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
    - 点击后如果没有自动下载，那么就打开 [发布页](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest), 并下载 `TWiLightMenu-DSi.7z`
1. 下载最新版本的 [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. 打开 `TWiLightMenu-DSi.7z`
    - 如果您正在使用 Windows，请确认 7-Zip 已经安装，然后遵循以下步骤：
        1. 右击 `TWiLightMenu-DSi.7z`
        1. 如果使用 Windows 11，点击 `显示更多选项`
        1. 鼠标移动到 `7-zip`
        1. 点击`打开文件`
1. 将 `TWiLightMenu-DSi.7z` 中的 `_nds` 文件夹解压到SD卡的根目录
1. 将`TWiLightMenu-DSi.7z` 中的 `BOOT.NDS`文件解压到SD卡的根目录
1. 关闭 `TWiLightMenu-DSi.7z`
1. 将 `dumpTool.nds` 文件复制到SD卡的根目录下

::: tip

不确定SD卡"根目录"是什么？ [查看此图像](/assets/images/sdroot/en_US.png)

:::


## 第二步 — 选择漏洞

从这里开始，你有三个选项，每个选项的工作量略有不同。


### Installing Unlaunch via Memory Pit

Memory Pit is an exploit utilizing the DSi Camera, compatible with all firmware versions. Optionally, this exploit can be used to install Unlaunch, a bootcode exploit that allows full control of the console on boot.

As Memory Pit is somewhat limited in homebrew compatibility, it is recommended to install Unlaunch, instead of using Memory Pit standalone. As this is the easiest method to install Unlaunch, this is the recommended path. However, there is a very minor risk of **bricking** your console when installing Unlaunch, so if this is a concern, see the alternate method below.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::


### stylehax

stylehax is an exploit utilizing the DSi Browser application, and can be used as an alternative to Memory Pit for installing Unlaunch (explained above) if your DSi has a broken camera.

For an Unlaunch-free experience, this exploit is recommended as using Memory Pit causes issues in some games and homebrew.

::: tip

Continue to [Launching the Exploit (stylehax)](launching-the-browser-exploit.html)

:::


### Flipnote Lenny

Flipnote Lenny is an exploit utilizing the Flipnote Studio application.

If you have Flipnote Studio and do not plan on installing Unlaunch (explained above), this exploit is recommended for the same reason as stylehax.

You can always install Unlaunch later if you decide later on that you want it.

::: tip

Continue to [Launching the Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

For a more detailed pros and cons comparision of the available exploits, please see the [Which is the best exploit?](faq.html#which-is-the-best-exploit) FAQ.
