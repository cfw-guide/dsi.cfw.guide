# トラブルシューティング

## Unlaunch

### `MISMATCH IN FAT COPIES`と表示されてUnlaunchがフリーズする

twlnfには、NAND変更後に全体を適切に更新しない重大なバグがあります。これは特定のHomebrewアプリ(Unlaunchインストーラなど)でエラーが発生する原因となります。

これを修正するには、[NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases)を開き、`Fix FAT copy mismatch` を選択します。

### Unlaunchで「Launcher」を起動すると音や起動スプラッシュ画面がない

Unlaunchの開発者(nocash)は、意図的にBGMとスプラッシュ画面を消すパッチをデフォルトで適用しています。 これらを取り戻すには、[Unlaunch を再インストール](installing-unlaunch.html)して「サウンドとスプラッシュを有効にする」をオンにするか、[hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) を使用してください。

### Unlaunchインストール後、電源を入れても画面が点かない

SDカードを取り出して、本体の電源を入れてみてください。 それでもまだ黒い画面しか表示されない場合は、 [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) または [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod)を介してNANDをフラッシュする必要があるかもしれません。

### DSi メニューかシステム設定で電源を切るのに 5-10 秒かかります

唯一の解決策は、SD カードを取り外した状態で DSi メニューやシステム設定を起動するか、[hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) をインストールするか、Unlaunch をアンインストールすることです。

### Unlaunchのインストール後、アプリやUnlaunchファイルメニューの起動が止まる

これは、Unlaunch の`NO BUTTON`オプションで間違ったアプリを選択したために発生した可能性があります。 <kbd class="face">A</kbd> + <kbd class="face">B</kbd> を押したままコンソールを起動し、`OPTIONS` に移動して、`NO BUTTON` をお好みに設定してください。

### その他のUnlaunchの問題

Unlaunch が `Clusters too large`, `Bad VBR`, `Bad MBR`を表示したり、SDカードのアプリケーションが表示されない場合は、SDカードが正しくフォーマットされていない可能性があります。 [SD Card Setup](sd-card-setup.html) をもう一度行ってください。

## TWiLight Menu++

一般的なTWilight Menu++トラブルシューティングについては、DS-Homebrew Wikiの[FAQ & トラブルシューティング](https://wiki.ds-homebrew.com/twilightmenu/faq)ページを参照してください。

## サポート

ここで解決されない問題、または提供された解決策を行ったにもかかわらず問題が解決しない場合は、[DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4) Discord サーバーで助けを求めてください。
