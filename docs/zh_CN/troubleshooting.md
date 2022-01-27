---
title: 故障排查
---

## Unlaunch
### Unlaunch 停留在 `MISMATCH IN FAT COPIES`

在没有正确更新整个NAND时破解，twlnf会有一个关键的bug。 这会导致某些自制程序(如Unlaunch安装程序) 出现错误。

To fix this, open [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), and select `Fix FAT copy mismatch`.

If the issue persists, try this:
1. Mount your NAND backup with [ninfs](https://github.com/ihaveamac/ninfs/releases), and enable the `Allow writing` option
1. Once your NAND backup is mounted, mount `twl_main.img`. If you are using Windows, you can use [OSFMount](https://www.osforensics.com/tools/mount-disk-images.html) to mount the image
1. Unmount `twl_main.img`, then unmount the NAND backup in ninfs If the NAND was saved, follow [Restoring NAND](restoring-nand) and continue with [Installing Unlaunch](installing-unlaunch).

### 在使用 Unlaunch启动"LAUNCHER"时没有声音或启动画面

Unlaunch的开发者(nocash) 默认修补背景音频和引导。 You can regain these effects by [reinstalling Unlaunch](installing-unlaunch) using TWiLight Menu++, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Powering on only shows a black screen after installing Unlaunch

Try ejecting the SD card and powering the console on again. If it still only shows a black screen, you may need to flash your NAND via a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### After installing Unlaunch, I'm stuck booting into an application

This was likely caused by choosing the wrong app for the `NO BUTTON` option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to `OPTIONS`, and set `NO BUTTON` to whatever your preference is.

### Other Unlaunch problems

If Unlaunch displays `Clusters too large`, `Bad VBR`, `Bad MBR`, or doesn't display any applications while the SD card is inserted, your SD card likely wasn't formatted correctly. Re-follow [SD Card Setup](sd-card-setup).

## TWiLight Menu++  troubleshooting

For general TWiLight Menu++ troubleshooting, see its [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) page on the DS-Homebrew Wiki.

## Further assistance

If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/yD3spjv) Discord server.
