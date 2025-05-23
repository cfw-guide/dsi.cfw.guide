# 还原 NAND备份

::: danger

警告！ This is _**dangerous**_. 即使严格按照这些步骤操作也有可能使DSi变砖，因为机器的NAND闪存质量很低，尤其是如果你已经多次刷机！ 这只能作为最后手段使用！

:::

::: tip

Do not skip _anything_ on this page, any mistake greatly increases chance of bricking your DSi.

:::

首先，除了你打算这样做的原因之外，还有几种更安全的替代选择：

- 可以使用 hiyaCFW 或 TWiLight 菜单++安装DSiWare
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. HiyaCFW助手的最新版本允许您在设置过程中将您的照片从 NAND 复制到 SDNAND
- Restoring an Unlaunch button configuration can be done from the Unlaunch menu, which can be accessed by holding <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while powering the console on
- 启动至Unlaunch导致错误？ 取出SD卡，并且重启系统。 如果这有用，那么是SD卡出了错，还原NAND备份将不会修复它
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on [Discord](https://ds-homebrew.com/discord)
- 除非绝对有必要，否则应避免通过刷入NAND或使用其卸载器来卸载 您可以将自动启动密钥设置为“Launcher”，您的 DSi就会恢复正常了

你唯一应该用你的NAND做的事情是安装Unlaunch 除此之外，请用其他替代方法

## 首先需要…

- Your NAND backup **from the same DSi**
- The latest release of [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- 有利用NAND运行自制程序的方法，例如Unlaunch或Memory Pit 漏洞
- [no$gba](https://problemkaputt.de/gba.htm), to check your NAND backup (Download the 'Windows gaming version')
  - macOS and Linux users can use [WINE](https://winehq.org) to run no$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## 提取BIOS 以便使用no$gba

1. Extract `dsibiosdumper.nds` from the `dsibiosdumper.zip` archive and place it anywhere on your SD card
2. 摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd>键 后，再摁下 Dsi 的电源键
   - 这应该能启动到Unlaunch Filemenu
3. 从Unlaunch Filemenu启动 dsibiosdumper。
4. 按 <kbd class="face">A</kbd> 将BIOS 导出到SD卡
5. 按 <kbd>Start</kbd> 退出 dsibiosdumer

## 测试你的NAND备份

在尝试将NAND备份恢复到您的机器之前，测试您的NAND备份是否能用非常重要， 如果它在no$gba 时显示变砖错误，它很可能也会使您的机器变砖。

1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Copy your NAND backup to the folder you put `NO$GBA.EXE` in and rename it to `DSI-1.MMC`
3. Copy `bios7i.bin` and `bios9i.bin` to the folder you put `NO$GBA.EXE`, named `BIOSDSI7.ROM` and `BIOSDSI9.ROM`, respectively.
4. Run `NO$GBA.EXE`
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
8. Click `Save Now`
9. Launch any Nintendo DS ROM (`.nds` file)

If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. If it shows any kind of error _**do not flash that backup**_!

## Uninstalling Unlaunch from your NAND backup (optional)

Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.

1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
2. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
3. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu
4. Choose `Uninstall`
5. Once complete, choose `Power down`
6. Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly

If no$gba shows any kind of error instead of loading the DSi menu, _**do not flash that backup**_! If you have an older NAND backup you may want to try using that instead. Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## 刷入你的NAND备份 (软件方式)

::: danger

Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.

:::

::: danger

Make sure your Nintendo DSi system is well charged before beginning this section.

:::

1. 在插入 SD 卡的状态下，按住 <kbd class="face">A</kbd> 和<kbd class="face">B</kbd> 开机
2. 启动 SafeNANDManager
3. Press the button to `begin NAND restore`
4. 一旦恢复完成，按 <kbd>start</kbd> 关闭您的 DSi

Your NAND should now be restored.

## 刷入你的NAND备份 (硬件修改)

If you cannot boot your Nintendo DSi, a hardmod is the only way to restore a NAND backup. The best guide that currently exists is the [Nintendo DSi hardmod guide on the DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
