---
title: 安装 hiyaCFW
redirect_from:
  - /guide/安装hiyacfw
  - /guide/hiyacfw
  - /hiyacfw
  - /hiyacfw-setup
---

{% include toc title="Table of Contents" %}

安装hiyaCFW后不要进行系统更新。 这将会移除hiyaCFW的SD卡补丁。
{: .notice--danger}

hiyaCFW是一种自制固件，这将允许您从SD卡运行系统NAND(内部存储)。

这使您可以将自己的应用程序安装到Nintendo DSi 菜单中而不会有变砖的风险， 因为他们被安装到 SD 卡，因此问题可以轻松地解决。

它还可以轻松安装自制程序到 DSi 菜单 以及在启动时显示自定义启动画面。

本节是完全可选的。 如果Unlaunch对你来说够用了，您可以在此停住。
{: .notice--primary}

## 需求
- 一台安装了[Unlaunch](/installing-unlaunch)的Nintendo/iQue DSi
- 使用 dumpTool 从您的设备上备份的 NAND
   - 如果你没有，请遵照我们的 [Dumping NAND](dumping-nand) 指南
- 一台Windows, macOS 或 Linux 设备

## 第一节 - 准备您的电脑以安装 hiyaCFW

{% capture windowsPrep %}
<noscript>
   <h3>Windows</h3>
</noscript>

1. 下载 & 安装最新版本的 [7-Zip](https://www.7-zip.org/download.html)
   - 您拥有的任何其他解压工具将不适用，如WinRAR。 hiyaCFW helper 依赖于7-Zip 本身，一般的解压工具则不行
1. 下载最新Windows版本的 [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
   - 如果您的设备或浏览器因为它是“病毒”不能下载，请允许下载或使用不同的浏览器，它实际上不是病毒。
1. 解压hiyaCFW Helper文档到你计算机上的任意位置
{% endcapture %}

{% capture macosPrep %}
<noscript>
   <h3>macOS</h3>
</noscript>

1. 下载最新macOS版本的 [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. 解压hiyaCFW Helper文档到你计算机上的任意位置
{% endcapture %}

{% capture linuxPrep %}
<noscript>
   <h3>Linux</h3>
</noscript>

1. 如果 Python 3尚未安装，请使用软件包管理器安装
1. 下载最新Python版本的 [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. 解压hiyaCFW Helper文档到你计算机上的任意位置
1. 请确保通过运行解压文件中的 `pip3 install -r requirements.txt` 来安装必需的 Python 软件包
   - 你可以通过运行 `python3 -m ensurepip`来安装pip
{% endcapture %}

<div class="tabcontainer">
   <a class="tablinks btn btn--large btn--info delink windows" href="#windowsPrep" onclick="openTab(event, 'windowsPrep')">Windows</a>
   <a class="tablinks btn btn--large btn--info delink macos" href="#macosPrep" onclick="openTab(event, 'macosPrep')">macOS</a>
   <a class="tablinks btn btn--large btn--info delink other" href="#linuxPrep" onclick="openTab(event, 'linuxPrep')">Linux</a>

   <div id="windowsPrep" class="blanktabcontent">{{ windowsPrep | markdownify }}</div>
   <div id="macosPrep" class="blanktabcontent">{{ macosPrep | markdownify }}</div>
   <div id="linuxPrep" class="blanktabcontent">{{ linuxPrep | markdownify }}</div>
</div>

## 第二部分 - 将hiyaCFW 文件添加到您的 SD 卡

![HiyaCFW Helper的截图](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. 启动 hiyaCFW Helper
  - **Windows:** - 启动从hiyaCFW Helper解压的的文件`HiyaCFW_Helper.exe` (您可能需要暂时关闭杀毒软件)
  - **macOS:** - 右键点击从hiyaCFW Helper中解压出来的`HiyaCFW_Helper` 然后选择 `打开`
  - **Linux:** - 启动从hiyaCFW Helper中解压出来的`HiyaCFW_Helper.py`
1. 点击 `...` 在 "NAND file with No$GBA foote" 框上的按键
1. 导航到你的NAND备份，然后点击 `Open`
1. 按 `Start`
1. 在新的弹出窗口中，导航到你SD卡的根目录，然后按 `OK`。
   - 进程可能需要几分钟时间
1. 当应用程序说“Done”时，关闭hiyaCFW Helper
1. 关闭当前窗口。

## 第三部分 - 配置Unlaunch和hiyaCFW

1. 同时摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd> 后，再摁下 DSi 的电源键
   - 这应该能启动到Unlaunch Filemenu
1. 导航到 `OPTIONS` -> `NO BUTTON`
1. 选择 `hiyaCFW` 并按 <kbd class="face">A</kbd>
   - 这将使系统在开机时启动 hiyaCFW
1. 保存您的设置并重启机器
1. 按住<kbd>SELECT</kbd> 开机来进入 hiyaCFW设置
   - 如果你选择了 "Install latest TWiLight Menu++ on custom firmware"，请开机进入 SDNAND 主界面而不是 TWiLight Menu++ ，导航至 `Autoboot title` 并按 <kbd class="face">A</kbd> 来取消选中。
1. 按喜好更改设置, 然后按<kbd>START</kbd> 继续

您的系统现在将从 SD 卡中启动而不是内部NAND。

如果显示 `An Error Has Occurred`提示, 请查看 [故障排除](troubleshooting) 页面.
{: .notice--warning}

<script src="/assets/js/tabs.js"></script>
