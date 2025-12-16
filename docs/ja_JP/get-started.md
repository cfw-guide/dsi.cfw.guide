# はじめる

エクスプロイトの準備として、まずはHomebrewツールをダウンロードすることから始めます。

## 必要事項

- ダウンロードしたファイルをSDカードへコピーする手段
- [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), または [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook) などのZipファイルを解凍できるアプリケーション
  - WinRARの使用はお勧めしません。ファイルが壊れる恐れがあるためです。
  - Windows 11を使用している場合は、ファイル名が長すぎるか無効であるというエラーが発生するため、Windows標準の解凍機能を使用しないことをお勧めします。

## セクション I - 準備

::: warning

SDカードが[正しくフォーマット](sd-card-setup.html)されているか確認してください。

:::

1. SDカードをPCに挿入します
2. 最新の [dumpTool](https://dsi.cfw.guide/assets/files/dumptool/boot.nds) を`boot.nds`としてダウンロードしてください
3. `boot.nds`ファイルをSDカードのルートにコピーします

::: tip

SDカードの「ルート」が何だか分からないって？ [この画像を見てください](/assets/images/sdroot/en_US.png)

:::

## セクション II - Unlaunchがインストール済みか確認する

Unlaunch は DSi コンソール自体にインストールされるブートコードエクスプロイトで、起動時にコンソールを完全に制御できます。 その結果、DSiシステムアプリやDSiWareタイトルからの制限を受けず、Homebrewアプリがハードウェアにフルアクセスできるようになります。

中古品の一部のDSiコンソールには、既にUnlaunchがインストールされている可能性があります。

確認するには、 <kbd class="face">A</kbd> + <kbd class="face">B</kbd> ボタンを押しながら<kbd class="face">POWER</kbd> ボタンを押してください。

- 上部の画面に`Nocash Unlaunch.dsi`と表示されるメニューが表示された場合は、Unlaunch がすでにインストールされていることを意味し、[NANDのバックアップ](dumping-nand.html) を続行できます。
- DSi メニューが表示された状態で正常に起動する場合は、セクションIIIに進みます。

## セクション III - Memory Pit

Memory PitはDSiカメラを利用したエクスプロイトで、すべてのファームウェアバージョンに対応しています。

Unlaunchをインストールせずにエクスプロイトを使用すると、一部のHomebrewとの互換性が制限される可能性があります。 DSiのHomebrewで問題が発生した場合は、このガイドに戻って、代わりに[他のエクスプロイト](alternate-exploits.html) を試すことができます。

::: tip

[エクスプロイトの起動](launching-the-exploit.html)に進む

:::
