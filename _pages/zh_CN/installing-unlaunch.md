---
title: "安装 Unlaunch"
redirect_from:
  - /guide/installing-unlaunch
  - /unlaunch
---

{% include toc title="Navigation" %}

Unlaunch是系统启动时触发的一种漏洞。 这允许它拥有比普通Memory Pit更高的权限，这使它能够做以下事情：

- 通过组合键，在开机时启动应用程序(homebrew 或 DSiWare)
- 访问插槽1，允许您提取游戏卡并启动不兼容的烧录卡
- 在 DSi 增强/专用游戏中移除区域锁
- 通过 nds-bootstrap-hb 运行旧的Nintendo DS Homebrew
- 从内部SD卡启动 DSiWare
- 在 GBARunner2 中实现更好的声音
- 变砖保护

在此之前，请先进行 [NAND备份](dumping-nand)。 虽然概率较低，Unlaunch仍有可能使DSi变砖。 NAND备份 + [硬件修改](https://web.archive.org/web/20151102221503/https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/) 将允许您恢复这个备份，只要您知道如何解决。
{: .notice--danger}

请确定你的机器在此过程中保持充电状态。 突然断电可能会造成严重的损坏。
{: .notice--warning}

## 第一节——SD卡准备

正在使用Windows、Linux或 macOS 设备？ 使用 [Lazy DSi Downloader](lazy-dsi-downloader) 来自动设置您的 SD 卡。
{: .notice--info}

1. 下载最新版本的[ Unlaunch ](https://problemkaputt.de/unlaunch.zip)
   - 使用[镜像链接](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), 如果上述链接无法工作
1. 从 `unlaunch.zip`中解压 `UNLAUNH.DSI` 并复制到你SD卡的任意位置
1. 确认你的SD卡上仍然有 TWiLight 菜单++
   - 如果您不确定，请按照 [启动漏洞](launching-the-exploit#twilight-menu) 进行操作。

## 第二节——安装/更新Unlaunch

1. 打开TWiLight Menu++
   - 如果这是您第一次安装Unlaunch，通过您使用的漏洞重新启动TWiLight Menu++。
   - 如果您已经安装了Unlaunch并打算更新它， 在开机时按住 <kbd class="face">A</kbd> + <kbd class="face">B</kbd> 时选择 `TWiLight 菜单++`,当 `BOOT.NDS` 显示在底部屏幕时。
1. 启动 TWiLight 菜单++ 的设置
   - 如果您没有更改主题，请按“启动漏洞”页面中的步骤操作。 否则，请参阅TWiLight 菜单++ 手册
1. 按住 <kbd class="l">L</kbd> / <kbd class="r">R</kbd>键 直到您进入Unlaunch Settings页面
1. 如果您想要更改Unlaunch的背景图像，请点击 `Background` 并选择您想要的背景
1. 如果你想要健康和安全界面和 DSi 菜单音乐，请将 `Launcher Patches` 设置为 `Off`
   - 这也将使得区域锁定不能被移除
1. 退出 TWiLight 菜单++ 设置
1. 在文件导航菜单中，启动 `Unlaunch DSi Installer`
1. 选择install选项
   - 如果Unlaunch停留在 `ERROR: MISMATCH IN FAT COPIES`，请查看我们 [故障排查](troubleshooting) 页面
1. 完成后，重启您的系统

如果您在这个时候看到Unlaunch Filemenu的屏幕，说明您已成功地破解了您的Nintendo DSi。
- 如果您看到黑屏，请查看我们的 [故障排除](troubleshooting) 页面

## 第二节——安装Unlaunch后的设置

当前Unlaunch默认情况下开机启动其文件菜单，但这可以改变成其他你想要的启动方式。

我们也将重新设置nds-bootstrap以在游戏中软重启至 TWiLight Menu++ (而不是触发漏洞的DSiWare)

1. 同时摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd>键 后，再摁下 Dsi 的电源键
1. 导航到 `OPTIONS`, 并查看可用的选项
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> 被硬编码启动到 Unlaunch的菜单，因此无法更改
   - `不用按键` 或 ` A/B/X/Y按键` 的选项可以按照您喜欢的方式进行设置，之后你的 DSi 启动时所打开的内容，取决你的设置。 您可以选择启动任何 DSiWare, Homebrew, Slot-1卡, 或Unlaunch的文件菜单
      - 想要TWiLight Menu++, 请在 `BOOT.NDS` 出现在下屏幕时，选择 `TWiLight Menu++` 选项
      - 想要原生 DSi 菜单，请选择 `Launcher`
   - `LOAD ERROR`出现时说明加载出现问题, 比如SD卡未插入
1. 保存您的设置并返回到Unlaunch的菜单
1. 光标停在 `TWiLight Menu++` 选项上，并找到一个在底部屏幕上包含 `settings.srldr`路径的选项
1. 启动高亮选中的选项
1. 使用 <kbd class="l">L</kbd> 和 <kbd class="r">R</kbd> 按键切换到“Misc. Settings" 页面
1. 将“DSiWare Exploit”条目切换为“None”

## 第三部分 - 清理你的 SD 卡

此部分是可选的，仅用于使您的 SD 卡保持整洁。
{: .notice--primary}

- 从 SD 卡中删除 `sd:/private/ds/app/484E494A/pit.bin` 文件
   - 如果您使用了其他漏洞，请删除有关该漏洞的文件，而不是上面这个
- 从 SD 卡中删除 `UNLAUNH.DSI` 文件

继续 [安装HiyaCFW](installing-hiyacfw)（可选）
{: .notice--info}
