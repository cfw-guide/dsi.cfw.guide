---
title: NANDバックアップの復元
---

::: danger

警告！ これは***危険***です。 NANDは非常に繊細であり、特に複数回書き込みした場合は、これらのステップに忠実に従ってもブリックする危険性があります。 最後の手段としてのみ使用するべきです！

:::

::: tip

このページの*どれか一つでも*スキップしてはいけません。一つでも間違うと、DSiをブリックする可能性が大幅に増加します。

:::

まず、復元を行いたい問題について、より安全な解決策を提示します：
- DSiウェアのインストールは、hiyaCFWまたはTWiLight Menu++を使って行うことができます
- 写真の復元には[ninfs](https://github.com/ihaveamac/ninfs/releases)が利用できます。本体上で行いたい場合はhiyaCFWやTWiLight Menu++と組み合わせて使用します。 HiyaCFW Helperの最新版では、セットアップ中にNANDからSDNANDへ写真をコピーすることができます
- Unlaunchのボタン設定の復元はUnlaunchメニューから行えます。本体の電源投入時に<kbd class="face">A</kbd> + <kbd class="face">B</kbd>を長押しすることでメニューを開けます
- Unlaunchの起動時にエラーが発生してお困りですか？ SDカードを取り出し、本体を再起動してみてください。 動く場合は、問題はSDカードにあるため、NANDバックアップを復元しても問題は解決されません
- 起動時に「エラーが発生しました（An error has occurred）...」などと出たときはhiyaCFWのエラーで、NANDは無関係かもしれません。詳細は、DS-Homebrew Wikiの[hiyaCFW よくある質問・トラブルシューティング](https://wiki.ds-homebrew.com/hiyacfw/faq)を参照してください
- TWiLight Menu++のエラーはNANDとは無関係で、修正にはTWiLight Menu++の再インストールをするか[Discord](https://ds-homebrew.com/discord)で助けを求めるべきです
- Unlaunchの削除は、NANDをフラッシュするか、付属アンインストーラを使用するかにかかわらず、絶対に必要でない限り行うべきではありません。UnlaunchのAutoboot設定をLauncherにすれば、DSiは純正品のように機能します

NANDの操作を必要とする事柄は、Unlaunchのインストールのみです。 それ以外の場合は上記の代替案を使用してください。

## 必要事項
- **同じDSiからの**NANDバックアップ
- 最新版の[SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- UnlaunchやMemory Pitなど、NANDアクセス可能なHomebrewを実行する方法
- NANDバックアップをチェックするための[no$gba](https://problemkaputt.de/gba.htm)（Windows gaming version）
   - macOS・Linux利用者は[WINE](https://winehq.org)でno$gbaを利用できます
- [dsibiosdumper](http://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## no$gbaに使用するBIOSのダンプ
1. `dsibiosdumper.zip`アーカイブから `dsibiosdumper.nds`を取り出し、SDカード上の任意の場所に配置します
2. <kbd class="face">A</kbd>と<kbd class="face">B</kbd>を押したままDSiの電源を入れます
   - これはUnlaunchのファイルメニューを開くホットキーです
3. メニューからdsibiosdumperを起動します
4. <kbd class="face">A</kbd>を押してBIOSをSDカードにダンプします
5. <kbd>START</kbd>を押して、dsibiosdumperを終了します

## NANDバックアップのテスト
本体へNANDバックアップを復元する前に、まずそれが動くかテストすることが非常に重要です。no$gbaでブリックエラーが表示される場合は、おそらく本体もブリックしてしまいます。
1. `NO$GBA.EXE`を`no$gba-w.zip`から取り出します
2. NANDバックアップを`NO$GBA.EXE`のあるフォルダにコピーし、`DSI-1.MMC`に名前を変更します
3. `bios7i.bin`と`bios9i.bin`を`NO$GBA.EXE`のフォルダへコピーし、それぞれ`BIOSDSI7.ROM`と`BIOSDSI9.ROM`に改名します
4. `NO$GBA.EXE`を実行します
5. `Options` > `Emulation Setup`をクリックしてエミュレーション設定ウィンドウを開きます
6. `Reset/Startup Entrypoint`を`GBA/NDS BIOS (Nintendo logo)`に変更します
7. `NDS Mode/Colors`を`DSi (retail/16MB)`に変更します
8. `Save Now`をクリックします
9. 任意のDS ROM（`.nds`ファイル）を起動します

no$gbaでDSiメニューかUnlaunch Filemenuがロードされた場合は、次のセクションに進みます。 何かエラーが表示された場合、***そのバックアップを利用してはいけません***！

## NANDバックアップからUnlaunchを除去（任意）
もしUnlaunchをインストールした後にNANDバックアップを作成し、かつシステムからUnlaunchを削除したいなら、この手順に従ってください。 Unlaunchの削除をするつもりがなければ、この操作は必要**ありません**。
1. 最新版の[Unlaunch installer](https://problemkaputt.de/unlaunch.zip)をダウンロードします
1. `UNLAUNCH.DSI`を`unlaunch.zip`から取り出します
1. `UNLAUNCH.DSI`をno$gbaで起動してゲームカード スロットから開始します
   - Unlaunch installerが起動します。見た目はUnlaunch Filemenuに似ています
1. `Uninstall`を選びます
1. 完了したら`Power down`を選びます
1. DS ROMを再度起動し、DSiメニューがロードされ正常に動作することを確認します

## NANDバックアップの書き込み（ソフト的手法）

::: danger

ここからが危険な場所になるので、上記の手順をしっかり読み終えたか確認してください。 外部から直接ここにリンクされて上記の手順を読んでいない場合は、上に戻って、このページ全体を読んでください。

:::

::: danger

このセクションを始める前に、DSiが十分に充電されていることを確認してください。

:::

1. SDカードを挿入した状態で、<kbd class="face">A</kbd>と<kbd class="face">B</kbd>を押したままDSiの電源を入れます
3. SafeNANDManagerを起動します
4. `begin NAND restore`に対応するボタンを押して復元を開始します
6. 復元が完了したら、<kbd>START</kbd>を押してDSiの電源を切ります

これでNANDが復元されたはずです。

## NANDバックアップの書き込み（ハード的手法）
DSiが起動できない場合は、Hardmod（ハードウェア改造）がNANDバックアップを復元する唯一の方法です。 現存する最良のガイドは、[DS-Homebrew Wiki上のDSi Hardmodガイド](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi)です。
