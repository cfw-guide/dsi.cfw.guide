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

The developer of Unlaunch (nocash) has intentionally patched out the background audio and boot-splash by default. 你可以使用 TWiLight Menu++ [重新安装Unlaunch](/installing-unlaunch) 来恢复这些特性。
