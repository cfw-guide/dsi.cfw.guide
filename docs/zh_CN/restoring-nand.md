---
title: 还原 NAND备份
---

::: danger

警告！ 这非常 ***危险***！！！ 即使严格按照这些步骤操作也有可能使DSi变砖，因为机器的NAND闪存质量很低，尤其是如果你已经多次刷机！ 这只能作为最后手段使用！

:::

::: tip

请勿跳过此页上的 *任何步骤*, 任何错误都会使得你DSi的变砖几率增加.

:::

首先，除了你打算这样做的原因之外，还有几种更安全的替代选择：
- 可以使用 hiyaCFW 或 TWiLight 菜单++安装DSiWare
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. The latest version of the HiyaCFW Helper allows you to copy your photos from your NAND to the SDNAND during setup
- Restoring an Unlaunch button configuration can be done from the Unlaunch menu, which can be accessed by holding <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while powering the console on
- 启动至Unlaunch导致错误？ Take out your SD card and try starting the system again. 如果这有用，那么是SD卡出了错，还原NAND备份将不会修复它
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- TWiLight 菜单++中的任何错误都与NAND无关，您应该尝试重新安装 TWiLight 菜单++或在 [Discord](https://ds-homebrew.com/discord) 上寻求帮助
- 除非绝对有必要，否则应避免通过刷入NAND或使用其卸载器来卸载 您可以将自动启动密钥设置为“Launcher”，您的 DSi就会恢复正常了

你唯一应该用你的NAND做的事情是安装Unlaunch 除此之外，请用其他替代方法

## 需要准备
- **来自同一个DSi**NAND备份
- 最新版本的 [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- 有利用NAND运行自制程序的方法，例如Unlaunch或Memory Pit 漏洞
- [no$gba](https://problemkaputt.de/gba.htm), 用来检查您的 NAND 备份 (下载 'Windows gaming version')
   - macOS 和 Linux 用户可以使用 [WINE](https://winehq.org) 来运行no$gba
- [dsibiosdumper](http://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## 提取BIOS 以便使用no$gba
1. 从 `dsibiodumper.zip` 压缩包中解压 `dsibiosdumper.nds` 并将其放置在你SD卡的任意位置
2. 摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd>键 后，再摁下 Dsi 的电源键
   - 这应该能启动到Unlaunch Filemenu
3. 从Unlaunch Filemenu启动 dsibiosdumper。
4. 按 <kbd class="face">A</kbd> 将BIOS 导出到SD卡
5. 按 <kbd>Start</kbd> 退出 dsibiosdumer

## 测试你的NAND备份
在尝试将NAND备份恢复到您的机器之前，测试您的NAND备份是否能用非常重要， 如果它在no$gba 时显示变砖错误，它很可能也会使您的机器变砖。
1. 将 `NO$GBA.EXE` 从 `no$gba-w.zip` 解压到您计算机上的一个文件夹中
2. 将您的NAND备份复制到您放置 `NO$GBA.EXE` 的文件夹，并重命名为 `DSI-1.MMC`
3. 复制 `bios7i.bin` 和 `bios9i.bin` 到您放置 `NO$GBA. EXE`的文件夹, 分别命名为 `BIOSDSI7.ROM` 和 `BIOSI9.ROM`
4. 运行 `NO$GBA.EXE`
5. 点击 `Options` > `Emulation Setup` 来打开模拟器设置窗口
6. 改变 `Reset/Startup Entrypoint` 为 `GBA/NDS BIOS (Nintendo logo)`
7. 改变 `NDS Mode/Colors`为 `DSi (retail/16MB)`
8. Click `Save Now`
9. 加载任何 NDS ROM (`.nds` 文件)

If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. 如果出现任何错误 ***不要刷入那个备份***！

## Uninstalling Unlaunch from your NAND backup (optional)
Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.
1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
1. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
1. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu
1. Choose `Uninstall`
1. Once complete, choose `Power down`
1. Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly

## 刷入你的NAND备份 (软件方式)

::: danger

请确保您已经阅读过上述步骤，因为这是开始变得危险的地方。 如果您直接链接到这里而没有跟从以上内容，请回到顶端阅读整个页面。

:::

::: danger

请确保您的 Nintendo DSi 在开始本节之前已经充满电。

:::

1. 在插入 SD 卡的状态下，按住 <kbd class="face">A</kbd> 和<kbd class="face">B</kbd> 开机
3. 启动 SafeNANDManager
4. 按下 `begin NAND restore`
6. 一旦恢复完成，按 <kbd>start</kbd> 关闭您的 DSi

现在你的NAND应该已被还原。

## 刷入你的NAND备份 (硬件修改)
如果你不能启动你的Nintendo DSi，硬刷是恢复NAND备份的唯一途径。 目前存在的最佳指南是 [DS-Homebrew Wiki 上的 Nintendo DSi 硬破 指南](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi)。
