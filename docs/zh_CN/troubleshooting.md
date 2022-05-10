---
title: 故障排查
---

## Unlaunch
### Unlaunch 停留在 `MISMATCH IN FAT COPIES`

在没有正确更新整个NAND时破解，twlnf会有一个关键的bug。 这会导致某些自制程序(如Unlaunch安装程序) 出现错误。

To fix this, open [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), and select `Fix FAT copy mismatch`.

### 在使用 Unlaunch启动"LAUNCHER"时没有声音或启动画面

The developer of Unlaunch (nocash) has intentionally patched out the background audio and boot-splash by default. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) using TWiLight Menu++ with "Launcher Patches" disabled on the Unlaunch page of TWiLight Menu++ settings, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Powering on only shows a black screen after installing Unlaunch

Try ejecting the SD card and powering the console on again. If it still only shows a black screen, you may need to flash your NAND via a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### After installing Unlaunch, I'm stuck booting into an application

This was likely caused by choosing the wrong app for the `NO BUTTON` option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to `OPTIONS`, and set `NO BUTTON` to whatever your preference is.

### Other Unlaunch problems

If Unlaunch displays `Clusters too large`, `Bad VBR`, `Bad MBR`, or doesn't display any applications while the SD card is inserted, your SD card likely wasn't formatted correctly. Re-follow [SD Card Setup](sd-card-setup.html).

## TWiLight Menu++  troubleshooting

For general TWiLight Menu++ troubleshooting, see its [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) page on the DS-Homebrew Wiki.

## Further assistance

If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/yD3spjv) Discord server.
