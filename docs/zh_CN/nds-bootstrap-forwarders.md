# hiyaCFW的nds-bootstrap 转发器

这是一个附加部分，涉及为 nds-bootstrap创建转发器。 这允许您直接从SDNAND的系统菜单中启动nds roms。

## 需要准备

- 一台同时已安装有 [Unlaunch](/installing-unlaunch) & [hiyaCFW](/hiyacfw-setup) 的DSi
- [TWiLight Menu++](launching-the-exploit.html#twilight-menu) 设置
- 最新版本的 [MakeForwarder](https://github.com/Ta180m/Make-Forwarder-Dsi/releases)

### 操作步骤…

1. 将`MakeForwarder.zip`*的内容* 全部解压到 SD 卡根目录
1. 通过 Unlaunch菜单启动 TWiLight Menu++
   - 按住<kbd class="face">A</kbd>+<kbd class="face">B</kbd>开机来进入Unlaunch菜单
1. 启动你的NDS ROM
1. 一旦ROM 导入并运行，关闭您的机器
   - 如果无法工作，请遵循nds-bootstrap 故障排除指南
1. 通过Unlaunch菜单运行 hiyaCFW
1. 一旦进入DSi 系统菜单中，打开并启动 "Forwarder Maker"
1. 根据您的应用程序设置目标引导：
   - **普通ROM：** `sd:/_nds/nds-bootstrap-release.nds`
   - **自制程序：** `sd:_nds/nds-bootstrap-hb-release.nds`
1. 选择"create forwarder" & 导航到您ROM 的位置

重复第7步和第8步，直到你获得作为转发器创建的所有ROM。
- 您不需要重置目标引导版本，除非您以前的选择对于当前版本来说不准确

一旦你获得了作为转发器创建的所有ROM ，重启系统并启动hiyaCFW。 现在它们应该出现在礼品箱中。
