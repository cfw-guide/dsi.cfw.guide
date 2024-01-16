---
title: ゲームカード（DSソフト）の吸い出し
---

このセクションでは、GodMode9iを使ってゲームカードの吸い出しをします。エミュレータ、マジコン、またはnds-bootstrap経由でSDカードから遊べるようになります。

## 必要事項
- 吸い出したいソフトのゲームカード
- [Unlaunch](installing-unlaunch.html)がインストールされたDSi

## 手順
### セクション I - SDカードのセットアップ

1. 最新の[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)をダウンロードします
1. `GodMode9i.nds`をGodMode9iの圧縮ファイルから取り出し、SDカードの好きな場所へ配置します

### セクション II - ニンテンドーDSi上での操作
1. GodMode9iを起動します
1. ゲームカードが本体に挿入されていることを確認します
1. GodMode9iで「NDS GAMECARD」オプションを選択します
1. 吸い出すデータを選択します
    - 「Trimmed」オプションはROMの無駄な部分を削って吸い出し、SDカードのスペースを節約します。しかしROMハックのようなパッチがほとんど使えなくなります。
1. 目的のゲームカードのすべてに対して、ステップ2〜4を繰り返します

::: tip

The dumped Game Cards will be found in `sd:/gm9i/out`.

:::
