# ゲームカードのダンプ

このセクションでは、GodMode9iを使ってゲームカードの吸い出しをします。エミュレータ、マジコン、またはnds-bootstrap経由でSDカードから遊べるようになります。

## 必要事項

- 吸い出したいソフトのゲームカード
- Your Nintendo DSi console with [Unlaunch](installing-unlaunch.html) installed

## 手順

### セクション I - SD カードのセットアップ

1. Download the latest release of [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)
2. Extract `GodMode9i.nds` from the GodMode9i archive and place it anywhere on your SD card

### セクション II - ニンテンドーDSi上での操作

1. GodMode9iを起動します
2. ゲームカードが本体に挿入されていることを確認します
3. GodMode9iで「NDS GAMECARD」オプションを選択します
4. 吸い出すデータを選択します
   - 「Trimmed」オプションはROMの無駄な部分を削って吸い出し、SDカードのスペースを節約します。しかしROMハックのようなパッチがほとんど使えなくなります。
5. 目的のゲームカードのすべてに対して、ステップ2〜4を繰り返します

::: tip

The dumped Game Cards will be found in `sd:/gm9i/out`.

:::
