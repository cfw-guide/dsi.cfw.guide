---
title: "はじめる"
---

このガイドでインストールするHomebrewアプリはTWiLight Menu++です。ニンテンドーDSiメニューのアップグレード・置き換えであり、他のHomebrewアプリや市販DSゲーム、昔の様々なゲーム機のエミュレータなどを起動させることができます。

改造の準備として、TWiLight Menu++とその他Homebrewツールをダウンロードすることから始めます。

::: tip

Windows、Linux、macOSマシンをお使いですか？ [Lazy DSi Downloader](lazy-dsi-downloader.html)を使ってSDカードを自動セットアップできます。

:::

## 必要事項

- ダウンロードしたファイルをSDカードへコピーする手段
- アーカイブを展開するソフト。[7-Zip](https://www.7-zip.org/)（Windows）や[The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353)（macOS）など
   - WinRARの使用はお勧めしません。ファイルが壊れる恐れがあるためです。

## セクション I - 準備

::: warning

SDカードが[正しくフォーマットされていること](sd-card-setup.html)を確認してください。

:::

1. SDカードをPCに挿入します
1. 最新の[TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)をダウンロードします
1. 最新の[dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)をダウンロードします
1. `_nds`フォルダを`TWiLightMenu-DSi.7z`からSDカードのルートへコピーします
1. `BOOT.NDS`ファイルを`TWiLightMenu-DSi.7z`からSDカードのルートへコピーします
1. `dumpTool.nds`ファイルをSDカードのルートへコピーします

::: tip

SDカードの「ルート」が何だかわかりませんか？ [こちらをご覧ください](https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png)

:::


## セクション II - エクスプロイトの選択

From here you have three options, with a minor difference in what each entails.


### Memory Pit経由でUnlaunchをインストール

Memory PitはDSiカメラを利用したエクスプロイトで、すべてのファームウェアバージョンとに対応しています。 必要に応じて、このエクスプロイトを使用してUnlaunch（起動時に本体を完全に制御できるブートコードエクスプロイト）をインストールすることができます。

Memory PitはHomebrew互換性に多少制限があるため、Memory Pit単独で使用する代わりにUnlaunchをインストールすることをお勧めします。 これがUnlaunchをインストールする最も簡単な方法で、おすすめの手順です。 しかし、Unlaunchのインストールには僅かながら本体を**ブリック（文鎮化）する**可能性があるため、心配なら下記の代わりの方法をご覧ください。

::: tip

[エクスプロイトを起動する](launching-the-exploit.html)に進む

:::


### stylehax

stylehax is an exploit utilizing the DSi Browser application, and can be used as an alternative to Memory Pit for installing Unlaunch (explained above) if your DSi has a broken camera.

For an Unlaunch-free experience, this exploit is recommended as using Memory Pit causes issues in some games and homebrew.

::: tip

Continue to [Launching the Exploit (stylehax)](launching-the-browser-exploit.html)

:::


### Flipnote Lenny（うごくメモ帳エクスプロイト）

Flipnote Lennyはうごくメモ帳を利用したエクスプロイトです。

If you have Flipnote Studio and do not plan on installing Unlaunch (explained above), this exploit is recommended for the same reason as stylehax.

必要なら、後でいつでもUnlaunchをインストールすることもできます。

::: tip

Continue to [Launching the Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

For a more detailed pros and cons comparision of the available exploits, please see the [Which is the best exploit?](faq.html#which-is-the-best-exploit) FAQ.
