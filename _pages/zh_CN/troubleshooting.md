---
title: 故障排查
---

{% include toc title="Table of Contents" %}

## Unlaunch
### Unlaunch 停留在 `MISMATCH IN FAT COPIES`?
在没有正确更新整个NAND时破解，twlnf会有一个关键的bug。 这会导致某些自制程序(如Unlaunch安装程序) 出现错误。

虽然可以修复，但这样做的方法并不是一成不变的，各系统之间差别很大。 一种方法是删除过去通过 twlnf 安装的任何DSiWare。 但也有报告称，将 *所有* DSiWare移动到SD卡并返回系统，在某些情况下可能有用。

如果你过去已经降级了系统, 则更新到 v1.4.5 (或 v1.4.6 如果你的DS 区域是中文或韩文的）也可以帮助解决这个bug。

### 在使用 Unlaunch启动"LAUNCHER"时没有声音或启动画面

Unlaunch的开发者(noncash) 默认修补背景音频和引导。 你可以使用 TWiLight Menu++ [重新安装Unlaunch](/installing-unlaunch) 来恢复这些特性。

## hiyaCFW
### "An Error Has Occurred"/“エラーが発生しました”
有几个原因会显示这个错误：

- **空闲空间太多：** Nintendo DSi 菜单有一个bug限制了可用空间的数量。 虽然这不会发生在原装NAND上(因为芯片不能超过128 MB)，但使用SD卡时会发生。 空闲空间在2GB范围内将不会出现错误。 例如, 0-2 GB可以正常工作, 但如果是2-4 GB它将不会正常工作 4-6 GB 对6-8的情况也是如此，直到你达到SD卡的大小为止。 最新的 hiyaCFW 版本可以创建虚拟文件， 所以请确保您下载最新版本的 [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) 并将 `hiya. si` 从“for SDNAND SD card”放到SD卡的根目录。
- **超过39个应用：** DSi 系统菜单有39个应用的限制。 从 `/title` 中删除任何其他文件夹
- **过多的 DSiWare：** 在 `00030004` 文件夹中，还有一个 200 个blocks（25MB）的限制。 可以通过使用 [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest) 安装系统应用程序来解决这个问题
- **无效的应用：** 这有一些您在将应用添加到hiyaCFW时需要考虑到的参数：
   - [forwarder](/nds-bootstrap-forwarders.html)处理完之前，将不能运行卡带提取的游戏
   - 有几个参数必须传递到 `.App` 生成器才能在 DSi 系统菜单中工作
