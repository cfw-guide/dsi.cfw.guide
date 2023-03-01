---
title: Unlaunchのインストール
---

::: danger

まだ完了していない場合は、先に[NANDバックアップ](dumping-nand.html)を行ってください。 可能性は僅かながら、Unlaunchの事故でDSiをブリックすることがあります。 はんだ付けの技術があれば、NANDバックアップと[Hardmod（ハード的改造）](https://wiki.ds-homebrew.com/ds-index/hardmod)から、バックアップを復元できます。

:::

::: warning

この手順を実行するときは、本体が十分に充電されていることを確認してください。 作業中に電池切れを起こすと本体に深刻なダメージを与える可能性があります。

:::

::: warning

UnlaunchにはニンテンドーDSi開発機との互換性はありません。

:::

## セクション I - SD カードのセットアップ

1. 最新版[Unlaunch](https://problemkaputt.de/unlaunch.zip)をダウンロードします
   - 上のリンクがダメなときは[こちらのミラーリンク](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip)から
1. `UNLAUNCH.DSI`を`unlaunch.zip`から取り出し、SDカードの好きな場所へ配置します
1. SDカードにTWiLight Menu++が残っていることを確認します
   - 不明な場合は、[TWiLight Menu++インストールガイド](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)の手順に従ってください

## セクション II - Unlaunchのインストール・更新

1. TWiLight Menu++を起動します
   - Unlaunchをインストールするのが初めてなら、[以前使ったエクスプロイト](launching-the-exploit.html)でTWilight Menu++を再起動してください
   - Unlaunchをインストール済で更新を考えている場合は、起動時に<kbd class="face">A</kbd>と<kbd class="face">B</kbd>を長押しし、`TWiLight Menu++`というラベルの付いたオプションを選択します
   - `TWiLight Menu++`がいくつもある場合、下画面のPathの最後に`BOOT.NDS`と表示されるものを選びます
      - あなたが意図的にやったのでなければ、これは古いバージョンのTWiLight Menu++を実行しているために発生しています。[インストールを更新](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)することをお勧めします
1. TWiLight Menu++設定を起動します
   - テーマを変更していない場合は、`SELECT`を押し、タッチスクリーン下部のDSアイコンをタッチします。 それ以外の場合は、TWiLight Menu++ Manualを参照してください
1. <kbd class="l">L</kbd>/<kbd class="r">R</kbd>または<kbd class="face">X</kbd>/<kbd class="face">Y</kbd>を押して`Unlaunch設定`ページに移動します
1. Unlaunchの背景画像を変更したい場合は、`背景画像`を選択し、好みの画像を選択してください
   - 独自のUnlaunch背景を作成したい場合は、[DS-Homebrew Wiki ページ](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)をご覧ください
1. TWiLight Menu++設定を終了します
1. In the file navigation menu, launch `Unlaunch DSi Installer`
   - If you see two black screens after launching, download [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start `Unlaunch.dsi`    
     This method does not enable Unlaunch to use custom patches and background
1. Select the "install now" option
   - Unlaunchが`ERROR: MISMATCH IN FAT COPIES`でフリーズしたときは、[トラブルシューティング](troubleshooting.html)をお確かめください
1. 完了したら、本体を再起動します

If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.
- 黒い画面しか表示されないときは、[トラブルシューティング](troubleshooting.html)をお確かめください

## セクション III - Unlaunchインストール後の設定

Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed launch whatever you want.

1. <kbd class="face">A</kbd>と<kbd class="face">B</kbd>を押したままDSiの電源を入れる
   - これはUnlaunchのファイルメニューを開くホットキーです
   - 背景しか表示されない、またはSDカードのファイルが表示されない（`TWiLight Menu++`など）場合は、[SDカードの再フォーマット](sd-card-setup.html)が必要かもしれません。
1. `OPTIONS`に移動し、利用可能なオプションを確認します
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd>はUnlaunchメニューを起動するためにハードコードされているため変更はできません
   - `NO BUTTON`および`BUTTON A / B / X / Y`は好きなように設定できます。本体起動時にどのボタンが長押しされているかに応じてロードするものを選択します。 DSiウェアも、Homebrewも、Slot-1ゲームカードも、wifibootも、UnlaunchのFilemenuも選べます
      - TWiLight Menu++の場合、`TWiLight Menu++`を選択します
      - もともとのDSiメニューの場合は、`Launcher`を選択します
   - `LOAD ERROR`は、SDカードが挿入されてないなどで、設定されたものが開始できなかったときのオプションです
1. `SAVE & EXIT`を選択し、本体の電源を切ります

## セクション IV - SDカードのクリーンアップ

::: tip

This section is optional and only serves for keeping your SD card tidy of files you won't need.

:::

:::: tabs

::: tab name="Memory Pit" default

- SDカードから`sd:/private/ds/app/484E494A/pit.bin`ファイルを削除します
   - `tip.bin`がまだ存在する場合、`pit.bin`に名前を戻します
- SDカードのルートに`DCIM`があった場合、もう元に戻しても大丈夫です
- SDカードから`UNLAUNCH.DSI`ファイルを削除する

:::

::: tab name="Flipnote Lenny"

- 以下のフォルダから`800031_104784BAB6B57_000.ppm`と`T00031_1038C2A757B77_000.ppm`の2ファイルを削除します
   - `sd:/private/ds/app/4B47554A/001`（日本）
   - `sd:/private/ds/app/4B475545/001`（アメリカ）
   - `sd:/private/ds/app/4B475556/001`（ヨーロッパ・オーストラリア）
   - 自分の地域以外のフォルダを丸ごと削除してもOKです
- SDカードから`UNLAUNCH.DSI`ファイルを削除する

:::
