# トラブルシューティング

## Unlaunch

### Unlaunch freezes at `MISMATCH IN FAT COPIES`

twlnfには、NAND変更後に全体を適切に更新しない重大なバグがあります。これはUnlaunchインストーラなどの特定のHomebrewアプリでエラーが発生する原因となります。

To fix this, open [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), and select `Fix FAT copy mismatch`.

### Unlaunchで「Launcher」を起動すると音や起動スプラッシュ画面がない

Unlaunchの開発者（nocash）は、意図的にBGMとスプラッシュ画面を消すパッチをデフォルトで適用しています。 You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) using TWiLight Menu++ with "Launcher Patches" set to "Default" on the Unlaunch page of TWiLight Menu++ settings, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Unlaunchインストール後、電源を入れても画面が点かない

SDカードを取り出して、本体の電源を入れてみてください。 If it still only shows a black screen, you may need to flash your NAND via a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Unlaunchのインストール後、アプリやUnlaunchファイルメニューの起動が止まる

This was likely caused by choosing the wrong app for the `NO BUTTON` option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to `OPTIONS`, and set `NO BUTTON` to whatever your preference is.

### その他のUnlaunchの問題

If Unlaunch displays `Clusters too large`, `Bad VBR`, `Bad MBR`, or doesn't display any applications while the SD card is inserted, your SD card likely wasn't formatted correctly. Re-follow [SD Card Setup](sd-card-setup.html).

## TWiLight Menu++

For general TWiLight Menu++ troubleshooting, see its [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) page on the DS-Homebrew Wiki.

## サポート

If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4) Discord server.
