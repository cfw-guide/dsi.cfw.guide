---
title: トラブルシューティング
---

## Unlaunch
### `MISMATCH IN FAT COPIES`でUnlaunchがフリーズする

twlnfには、NAND変更後に全体を適切に更新しない重大なバグがあります。これはUnlaunchインストーラなどの特定のHomebrewアプリでエラーが発生する原因となります。

これを修正するには、[NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases)を開き、`Fix FAT copy mismatch`を選択します。

### Unlaunchで「Launcher」を起動すると音や起動スプラッシュ画面がない

Unlaunchの開発者（nocash）は、意図的にBGMとスプラッシュ画面を消すパッチをデフォルトで適用しています。 You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) using TWiLight Menu++ with "Launcher Patches" set to "Default" on the Unlaunch page of TWiLight Menu++ settings, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Unlaunchインストール後、電源を入れても画面が点かない

SDカードを取り出して、本体の電源を入れてみてください。 それでもまだ画面が黒いままの場合は、[Hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod)によってNANDをフラッシュする必要があるかもしれません。

### Unlaunchのインストール後、アプリやUnlaunchファイルメニューの起動が止まる

これはおそらく、Unlaunchの`NO BUTTON`オプションで間違ったアプリを選択したことによって引き起こされます。 電源を入れるときに<kbd class="face">A</kbd> + <kbd class="face">B</kbd>を長押しし、`OPTIONS`から`NO BUTTON`の設定をお好みに合わせて設定してください。

### その他のUnlaunchの問題

Unlaunchで`Clusters too large`、`Bad VBR`、`Bad MBR`と表示される、あるいはSDカードを挿入してもアプリが何も表示されない場合、SDカードが正しくフォーマットされていない可能性があります。 [SDカードセットアップ](sd-card-setup.html)をもう一度試してください。

## TWiLight Menu++

一般的なTWiLight Menu++トラブルシューティングについては、DS-Homebrew Wikiの[よくある質問とトラブルシューティング](https://wiki.ds-homebrew.com/twilightmenu/faq)ページを参照してください。

## サポート

ここで解決できない問題に出くわした、あるいは上記の方法で解決しなかった場合は、[DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/yD3spjv)のDiscordサーバで質問してください。
