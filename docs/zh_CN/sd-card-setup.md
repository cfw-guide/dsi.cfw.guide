# SD 卡设置

This page is for preparing your SD card for your device. In the process, we'll format the SD card and check the card for errors.

::: danger

在开始操作前，记得备份你SD卡里的内容。 你的SD卡数据将在这个过程中被完全擦除。

:::

::::: tabs

:::: tab default Windows

### 第一节 —— 用SD Formatter 格式化你的SD卡

::: tip

This section formats the SD card to the specifications by the SD Card Association. This can fix many issues that may occur with running homebrew applications.

:::

::: danger

Any 64GB or larger SD cards will be formatted to `exFAT` in this process. You _must_ follow both Sections I & II to re-format to `FAT32`.

:::

1. 去这里下载最新版本的 **[SD Formatter]**(https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
   - If the above link doesn't work for you, download [from archive.org](https://web.archive.org/web/20220626204124/https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
   - Accept the End User License Agreement to start the download
2. Run `SD Card Formatter Setup` (the `.exe` file) in the downloaded `.zip` file with Adminstrator privileges, then install the program
3. Run `SD Card Formatter` from the Start Menu with Adminstrator privileges
4. 选择你的 SD 卡
5. 确认 `Quick Format` 复选框已被勾选
6. Press `Format` to start the format process
   - If you're using a 4GB-32GB SD card, and the cluster size is not reported as `32 kilobytes`, you'll need to follow Section II as well ![Screenshot of SD Card Formatter on Windows 11](/assets/images/sd-card-formatter.png)

### Section II - Formatting your SD card with GUIFormat

This section formats SD cards which are 64GB or larger to FAT32.  
This also applies to 4GB-32GB SD cards which have not been formatted with 32kb cluster size.

::: tip

If your SD card is 32GB or less in capacity, skip to Section III.

:::

1. 下载最新版本的 [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)
   - 点击网页上的图片以下载应用程序
2. 使用管理员权限运行 GUIFormat
3. Select your drive letter
4. 将 `Allocation size unit`（簇大小） 设置为 `32768`
   - 如果这对你的 SD卡来说太大了，请将它尽可能设置的高
5. 确认 `Quick Format` 复选框已被勾选
6. 开始格式化

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)

### 第三节——检查错误

1. 转到SD卡的属性窗口
   - `Windows 文件管理器` -> `此电脑` -> 右键点击你的SD卡 -> `属性`
2. 在`工具`选项卡中选择`检查`
3. 同时检查`"自动修复文件系统错误"`和`"扫描并尝试恢复错误扇区"`
4. 开始进行检查

这会扫描SD卡并纠正它发现的任何错误。

### 第四节 - 检查 SD 卡读/写

1. 下载 [the h2testw archive](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) 并将其解压到你电脑上任意地方
   - 如果上述链接不可用，请前往 [**这里**](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)下载Archive.org上的备份（中国大陆可能需要代理软件）
   - 也可以在外部设备上解压它，只要外部设备不是你的 SD 卡
2. 将SD卡插入你的计算机，运行 `h2testw.exe`
3. 在 h2testw 中选择中文或其他语言
4. 在“Drive”一行选择你的 SD 卡盘符
5. 确保 `all available space` 已勾选
6. 点击 `Write + Verify`

- 等待完成

::: tip

如果页面显示`Test finished without errors`，恭喜你的SD卡没有任何问题，接下来只需要删除SD卡上的所有`.h2w` 文件就行了。

:::

::: danger

如果测试结果显示任何其他结果，您的 SD 卡可能已经出错或损坏，可能需要更换 ！

:::





::: tip

If TWiLight Menu++ fails to start after following this method, please follow the Windows method instead, by either rebooting to Windows or running a Windows Virtual Machine

:::

### 第一节 - 格式化您的 SD 卡

1. 请确保你的SD卡 **没有** 插入到你的Linux设备
2. 启动Linux终端
3. 输入 `watch "lsblk"`
4. 插入你的SD卡到你的Linux设备
5. 观察终端输出内容 它输出内容应该是下面这样的：

```
```

1. 注意设备名， 在我们上面的示例中，它是 `mmcblk0p1`
   - 如果 `RO` 设置为1，请确认SD卡的写保护滑块没有滑下
   - 请确保你的目标**分区**是`mmcblk0p1` 而不是 `mmcblk0`
2. 按 CTRL + C 键退出菜单
3. 请根据你的SD卡容量来选择下面的操作
   - 2GB 或更小`sudo mkdosfs /dev/(上面提到的设备名) -s 64 -F 16`
     - 这将在 SD 卡上创建一个簇大小为 32KB 的 FAT16 分区
   - 4GB 或更大： `sudo mkdosfs /dev/(上面提到的设备名) -s 64 -F 32`
     - 这将在 SD 卡上创建一个簇大小为 32KB 的 FAT32 分区

::: tip

If you get an error message saying: `mkdosfs: /dev/(device name) contains a mounted file system`, you will need to `sudo umount /dev/(device name from above)` in order to complete the above step.
You should then reinsert the SD card **or** recreate the MOUNTPOINT (`sudo mkdir -p /run/media/user/FFFF-FFFF && sudo mount /dev/(device name) /run/media/user/FFFF-FFFF`) to continue.

:::

### 第 二 节 - 使用F3

1. 下载并解压 [ F3 文件](https://github.com/AltraMayor/f3/archive/v7.2.zip) 到你计算机的任意地方
2. 在F3文件夹里启动终端
3. 输入 `make` 对F3进行打包
4. 插入并安装SD卡，输入 `./f3write <your sd card mount point>`
   - 等待处理完成， 处理完成时终端输出的内容看起来是这样的：
   ```
   ```
5. 运行 `./f3read <你的SD卡挂载路径>`

- 等待处理完成， 处理完成时终端输出的内容看起来是这样的：
  ```
  ```

___

::: tip

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your SD card is healthy and you can delete all `.h2w` files on your SD card.

:::

::: danger

如果测试结果显示任何其他结果，您的 SD 卡可能已经出错或损坏，可能需要更换 ！

:::

::::

:::: tab macOS

### 第一节 —— 用SD Formatter 格式化你的SD卡

::: tip

This section formats the SD card to the specifications by the SD Card Association. This can fix many issues that may occur with running homebrew applications.

:::

::: danger

Any 64GB or larger SD cards will be formatted to `exFAT` in this process. You _must_ follow Section II to re-format to `FAT32`.

:::

1. Download the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/)
   - Accept the End User License Agreement to start the download
2. Run `Install SD Card Formatter` (the `.mpkg` file) in the downloaded `.zip` file
3. Run `SD Card Formatter`
4. 选择你的 SD 卡
5. 确认 `Quick Format` 复选框已被勾选
6. 开始格式化

### Section II - Formatting your SD card with Disk Utility

This section formats SD cards larger than 32GB to FAT32.

::: tip

If your SD card is 32GB or less in capacity, skip to Section III.

:::

#### OS X El Capitan (10.11) 及更高版本

1. 启动"Disk Utility"应用程序
2. 通过左上角的 `View` 面板，选择 `Show All Devices`
3. 从侧边栏选择你的SD卡
   - 确保你选择的是正确的设备, 否则你可能会格式化错误的驱动器
4. 点击顶端的`Erase`
5. 确保 `Format` 设置为 `MS-DOS (FAT32)`
   - 在 El Capitan(10.11) 中通过 Catalina (10.15) 选择 `MS-DOS (FAT)`
6. 确保 `Scheme` 被设置为 `Master Boot Record`
   - 如果"Scheme"不显示, 点击"Cancel"并确保你选择的不是声音设备
7. 点击 `Erase`, 再点击 `Close`

#### OS X Yosemite (10.10) 及更早版本

1. 启动"Disk Utility"应用程序
2. 从侧边栏选择你的SD卡
   - 确保你选择的是正确的设备, 否则你可能会格式化错误的驱动器
3. 点击顶部的 `Partition`
   - 如果"Partition"不显示, 请确保你选择的是一个**设备**而不是一个**卷**
4. 确保`Partition Layout` 被设为 `1 Partition`
5. 确保 `Format` 设置为 `MS-DOS (FAT)`
6. 从设置按钮 (分区表下方), 选择`"Master Boot Record"`
7. 点击 `OK` -> `Apply` -> `Partition`

### 第 三 节 - 使用F3键

1. 打开终端
2. 输入 `brew install f3`，从brew安装 F3
   - 如果你没有brew，请根据说明 [brew.sh](https://brew.sh) 安装
3. 插入并安装SD卡，输入 `f3write <your sd card mount point>`
   - 等待处理完成， 处理完成时终端输出的内容看起来是这样的：
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
4. 运行 `f3read <你的SD卡挂载点>`
   - 等待处理完成， 处理完成时终端输出的内容看起来是这样的：
   ```
   ```

___

::: tip

如果测试结果显示 `Data LOST: 0.00 Byte (0 sectors)` 代表你的 SD 卡完好，接着删除 SD 卡上的所有 `.h2w` 文件。

:::

::: danger

如果测试结果显示任何其他结果，你的 SD 卡可能已经出错或者损坏，请更换它。

:::





::: tip

现在你可以恢复你的SD卡文件并继续了。

:::

