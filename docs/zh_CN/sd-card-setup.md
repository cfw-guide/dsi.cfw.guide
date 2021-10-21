---
title: SD 卡设置
---

此页用于为您的Nintendo DSi准备SD卡。 在此过程中，我们将格式化SD卡以符合任天堂DSi的格式 ，并且检查卡中的错误。

请确保以此操作之前，备份您SD卡的内容。 您的SD卡将在这个过程中被擦除数据。
{: .notice--danger}

{% capture windowsInstructions %}
<noscript>
   <h2>Windows</h2>
</noscript>

## 第一节 - 格式化您的 SD 卡

1. 下载最新版本的 [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)
  - 点击网页上的图片以下载应用程序
1. 使用管理员权限运行 GUIFormat
1. 选择 SD 卡对应的盘符
1. 将 `Allocation size unit`设置为 `32768`
  - 如果这对于您的 SD卡来说太大的话，请将它尽可能设置为最高
1. 确认 `Quick Format` 复选框已被勾选
1. 开始格式化进程

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)
{:.notice--info}

## 第二节——检查错误
1. 转到SD卡的属性窗口
   - `Windows 文件管理器` -> `此电脑` -> 右键点击你的SD卡 -> `属性`
1. 在“工具”选项卡中选择`检查`
1. 同时检查`"自动修复文件系统错误"`和`"扫描并尝试恢复错误扇区"`
1. 开始进行检查

这将扫描SD卡并纠正它发现的任何错误

## 第 三 节 - 检查 SD 卡读/写

1. 下载 [the h2testw archive](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) 并将其解压到你电脑上任意地方。
   - 也可以在外部设备上解压它，只要外部设备不是您的 SD 卡
1. 将SD卡插入您的计算机，运行 `h2testw.exe`
1. 在 h2testw 中选择中文或其他语言
1. 在“Drive”一行选择你的 SD 卡盘符
1. 确保 `all available space` 已勾选
1. 点击 `Write + Verify`
- 等待完成

如果测试结果显示 ` Test finished without errors`，那你的 SD 卡很好，你可以删除所有你SD卡上的`.h2w` 文件
{: .notice--info}

如果测试显示任何其他结果，的 SD卡可能已损坏或损坏，你可能需要替换它！
{: .notice--danger}
{% endcapture %}

{% capture linuxInstructions %}
<noscript>
   <h2>Linux</h2>
</noscript>

## 第一节 - 格式化您的 SD 卡
1. 请确保你的SD卡 **没有** 插入到你的Linux设备
1. 启动Linux终端
1. 输入 `watch "lsblk"`
1. 插入你的SD卡到你的Linux设备
1. 观察终端输出内容 输出内容应该与以下内容搭配：
```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```
1. 注意设备的挂载点 在上面的示例中，它是 `mmcblk0p1`
   - 如果 `RO` 设置为1, 确保锁定开关并没有滑下
1. 按 CTRL + C 键退出菜单
1. 输入 `sudo mkdosfs /dev/(上面的设备挂载点) - s 64 -F 32` 来在SD卡上创建一个 FAT32格式, 分配单位大小为32 KB 的分区

## 第 二 节 - 使用F3
1. 下载并解压 [ F3 文件](https://github.com/AltraMayor/f3/archive/v7.2.zip) 到你的计算机的任意地方
1. 在F3文件夹里启动终端
1. 输入 `make` 对F3进行打包
1. 插入并安装SD卡，输入 `./f3write <your sd card mount point>`
   - 等待处理完毕 请参阅下面的示例。
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. 输入 `./f3read <your sd card mount point>`
- 等待处理完毕。 请参阅下面的示例。
   ```
   $ ./f3read /media/michel/6135-3363/
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

如果测试结果显示 `Data LOST: 0.00 Byte (0 sectors)` 这证明你的SD卡非常好并且你可以删除所有在你SD卡里的 `.h2w`文件
{: .notice--info}

如果测试结果显示任何其他结果，您的 SD 卡可能已经出错或损坏，可能需要更换 ！
{: .notice--danger}
{% endcapture %}

{% capture macosInstructions %}
<noscript>
   <h2>macOS</h2>
</noscript>

## 第一节 - 格式化您的 SD 卡
### OS X El Capitan (10.11) 及更高版本

1. 启动"Disk Utility"应用程序
1. 通过左上角的 `View` 面板，选择 `Show All Devices`
1. 从侧边栏选择你的SD卡
   - 确保你选择的是正确的设备, 否则你可能会格式化错误的驱动器
1. 点击顶端的`Erase`
1. 确保 `Format` 设置为 `MS-DOS (FAT32)`
   - 在 El Capitan(10.11) 中通过 Catalina (10.15) 选择 `MS-DOS (FAT)`
1. 确保 `Scheme` 被设置为 `Master Boot Record`
   - 如果"Scheme"不显示, 点击"Cancel"并确保你选择的不是声音设备
1. 点击 `Erase`, 再点击 `Close`

### OS X Yosemite (10.10) 及更早版本
1. 启动"Disk Utility"应用程序
1. 从侧边栏选择你的SD卡
   - 确保你选择的是正确的设备, 否则你可能会格式化错误的驱动器
1. 点击顶部的 `Partition`
   - 如果"Partition"不显示, 请确保你选择的不是声音设备
1. 确保`Partition Layout` 被设为 `1 Partition`
1. 确保 `Format` 设置为 `MS-DOS (FAT)`
1. 从设置按钮 (分区表下方), 选择`"Master Boot Record"`
1. 点击 `OK` -> `Apply` -> `Partition`

## 第 二 节 - 使用F3
1. 打开终端
1. 输入 `brew install f3`，从brew安装 F3
   - 如果你没有brew，请根据说明 [brew.sh](https://brew.sh) 安装
1. 插入并安装SD卡，输入 `f3write <your sd card mount point>`
   - 等待处理完毕。 请参阅下面的示例。
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. 运行 `f3read <your sd card mount point>`
   - 等待处理完毕。 请参阅下面的示例。
   ```
   $ f3read /Volumes/SD\ CARD
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

如果测试结果显示 `Data LOST: 0.00 Byte (0 sectors)` 这证明你的SD卡非常好并且你可以删除所有在你SD卡里的 `.h2w`文件
{: .notice--info}

如果测试结果显示任何其他结果，您的 SD 卡可能已经出错或损坏，可能需要更换 ！
{: .notice--danger}
{% endcapture %}

<div class="tabcontainer">
   <a class="tablinks btn btn--large btn--info windows" href="#windowsInstructions" onclick="openTab(event, 'windowsInstructions')">Windows</a>
   <a class="tablinks btn btn--large btn--info macos" href="#macosInstructions" onclick="openTab(event, 'macosInstructions')">macOS</a>
   <a class="tablinks btn btn--large btn--info other" href="#linuxInstructions" onclick="openTab(event, 'linuxInstructions')">Linux</a>

   <div id="windowsInstructions" class="blanktabcontent">{{ windowsInstructions | markdownify }}</div>
   <div id="linuxInstructions" class="blanktabcontent">{{ linuxInstructions | markdownify }}</div>
   <div id="macosInstructions" class="blanktabcontent">{{ macosInstructions | markdownify }}</div>
</div>

你现在可以恢复你的SD卡数据并继续此教程
{: .notice--primary}

