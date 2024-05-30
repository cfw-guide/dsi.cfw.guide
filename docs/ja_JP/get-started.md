---
title: "はじめる"
---

The main homebrew application this guide has you install is **TW**i**L**ight Menu++, which is an upgrade/replacement to the Nintendo DSi Menu that allows running other homebrew applications, retail DS games, emulators for various older systems, and more.

改造の準備として、TWiLight Menu++とその他Homebrewツールをダウンロードすることから始めます。

## 必要事項

- ダウンロードしたファイルをSDカードへコピーする手段
- An application that can extract archives, such as [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), or [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
    - WinRARの使用はお勧めしません。ファイルが壊れる恐れがあるためです。
    - If you're using Windows 11, we also advise you to not use it's built-in extractor (Windows Explorer), as it'll cause an error saying that the filename is too long or not valid

## セクション I - 準備

::: warning

Ensure your SD card is [formatted correctly](sd-card-setup.html).

:::

1. SDカードをPCに挿入します
1. Download the latest release of [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
    - If it does not download, open the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest), and download `TWiLightMenu-DSi.7z`
1. 最新の[dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)をダウンロードします
1. Open `TWiLightMenu-DSi.7z`
    - If you're using Windows, ensure 7-Zip is installed, then follow these steps:
        1. Right-click on `TWiLightMenu-DSi.7z`
        1. If using Windows 11, click `Show more options`
        1. Hover over `7-zip`
        1. Click `Open archive`
1. `_nds`フォルダを`TWiLightMenu-DSi.7z`からSDカードのルートへコピーします
1. `BOOT.NDS`ファイルを`TWiLightMenu-DSi.7z`からSDカードのルートへコピーします
1. Close `TWiLightMenu-DSi.7z`
1. `dumpTool.nds`ファイルをSDカードのルートへコピーします

::: tip

Unsure what the SD "root" is? [See this image](/assets/images/sdroot/en_US.png)

:::


## セクション II - エクスプロイトの選択

From here you have three options, with a minor difference in what each entails.


### Memory Pit経由でUnlaunchをインストール

Memory Pit is an exploit utilizing the DSi Camera, compatible with all firmware versions. Optionally, this exploit can be used to install Unlaunch, a bootcode exploit that allows full control of the console on boot.

As Memory Pit is somewhat limited in homebrew compatibility, it is recommended to install Unlaunch, instead of using Memory Pit standalone. As this is the easiest method to install Unlaunch, this is the recommended path. However, there is a very minor risk of **bricking** your console when installing Unlaunch, so if this is a concern, see the alternate method below.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::


### stylehax

stylehax is an exploit utilizing the DSi Browser application, and can be used as an alternative to Memory Pit for installing Unlaunch (explained above) if your DSi has a broken camera.

For an Unlaunch-free experience, this exploit is recommended as using Memory Pit causes issues in some games and homebrew.

::: tip

Continue to [Launching the Exploit (stylehax)](launching-the-browser-exploit.html)

:::


### Flipnote Lenny（うごくメモ帳エクスプロイト）

Flipnote Lenny is an exploit utilizing the Flipnote Studio application.

If you have Flipnote Studio and do not plan on installing Unlaunch (explained above), this exploit is recommended for the same reason as stylehax.

You can always install Unlaunch later if you decide later on that you want it.

::: tip

Continue to [Launching the Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

For a more detailed pros and cons comparision of the available exploits, please see the [Which is the best exploit?](faq.html#which-is-the-best-exploit) FAQ.
