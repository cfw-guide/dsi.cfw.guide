# Unlaunchのインストール

::: warning

If you do not have access to a PC, or if your PC is running ChromeOS, then please do not install Unlaunch. A PC (running Windows, Linux, or macOS) is required in order to fix some issues that may occur after installing Unlaunch.

:::

::: danger

If you have not yet done so, please follow [Dumping NAND](dumping-nand.html). 可能性は僅かながら、Unlaunchの事故でDSiをブリックすることがあります。 A NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) would allow you to restore this backup, provided you know how to solder.

:::

::: warning

この手順を実行するときは、本体が十分に充電されていることを確認してください。 作業中に電池切れを起こすと本体に深刻なダメージを与える可能性があります。

:::

::: warning

UnlaunchにはニンテンドーDSi開発機との互換性はありません。

:::

## セクション I - SD カードのセットアップ

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Mirror link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), if the above doesn't work
2. Extract `UNLAUNCH.DSI` from the `unlaunch.zip` archive and place it anywhere on your SD card
3. SDカードにTWiLight Menu++が残っていることを確認します
   - If you are unsure, follow the instructions from the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## セクション II - Unlaunchのインストール・更新

1. TWiLight Menu++を起動します
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the [exploit that you used](launching-the-exploit.html)
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the option labeled `TWiLight Menu++`
   - If several options are labeled `TWiLight Menu++`, select the option in where `BOOT.NDS` is shown at the end of the path on the bottom screen
     - This happens because you are running an older version of TWiLight Menu++, unless you're doing it on purpose, is suggested that you [update your installation](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
2. TWiLight Menu++設定を起動します
   - If you haven't changed your theme, press `SELECT` and touch the small DS icon on the bottom of the touch screen. それ以外の場合は、TWiLight Menu++ Manualを参照してください
3. Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the `Unlaunch settings` page
4. If you want to change Unlaunch's background image, select `Background` and choose the one you want
   - If you want to create your own Unlaunch background, see the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
5. TWiLight Menu++設定を終了します
6. In the file navigation menu, launch `Unlaunch DSi Installer`
   - If you see two black screens after launching, download [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start `Unlaunch.dsi`\
     This method does not enable Unlaunch to use custom patches and background
7. Select the "install now" option
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting.html) page
8. 完了したら、本体を再起動します

If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.

- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

## セクション III - Unlaunchインストール後の設定

Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed launch whatever you want.

1. <kbd class="face">A</kbd>と<kbd class="face">B</kbd>を押したままDSiの電源を入れます
   - これはUnlaunchのファイルメニューを開くホットキーです
   - If nothing is listed, or if only `TWiLight Menu++` isn't listed (even after scrolling down), then you'll need to [reformat the SD card](sd-card-setup.html)
2. Navigate to `OPTIONS`, and look at the available options
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd>はUnlaunchメニューを起動するためにハードコードされているため変更はできません
   - The `NO BUTTON` and `BUTTON A / B / X / Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. DSiウェアも、Homebrewも、Slot-1ゲームカードも、wifibootも、UnlaunchのFilemenuも選べます
     - For TWiLight Menu++, select  `TWiLight Menu++`
     - For the original DSi Menu, select `Launcher`
   - `LOAD ERROR` is what your DSi will load if loading what you have set fails, such as the SD card not being inserted
3. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## セクション IV - SDカードのクリーンアップ

::: tip

This section is optional and only serves for keeping your SD card tidy of files you won't need.

:::

:::: tabs

:::tab default Memory Pit

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
- Rename `tip.bin` back to `pit.bin`, and leave it intact
- You can now restore the `DCIM` folder that was on the root of your SD card
- Delete the `UNLAUNCH.DSI` file from your SD card

:::

:::tab Flipnote Lenny（うごくメモ帳エクスプロイト）

- Delete the `800031_104784BAB6B57_000.ppm` and `T00031_1038C2A757B77_000.ppm` files from inside the following folders:
  - `sd:/private/ds/app/4B47554A/001` (Japan)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
  - 自分の地域以外のフォルダを丸ごと削除してもOKです
- Delete the `UNLAUNCH.DSI` file from your SD card

:::
