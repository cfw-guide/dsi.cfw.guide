# NANDバックアップの復元

::: danger

警告！ これは_**危険**_です。 NANDは非常に繊細であり、特に複数回書き込みした場合は、これらのステップに忠実に従ってもブリックする危険性があります。 最後の手段としてのみ使用するべきです！

:::

::: tip

このページのどれか一つでも_スキップしてはいけません_。一つでも間違うと、DSiをブリックする可能性が大幅に増加します。

:::

まず、復元を行いたい問題について、より安全な解決策を提示します：

- DSiウェアのインストールは、hiyaCFWまたはTWiLight Menu++を使って行うことができます
- コンソールで写真の復元を行う場合は、[ninfs](https://github.com/ihaveamac/ninfs/releases) と hiyaCFW または TWiLight Menu++ を組み合わせて使用​​することで復元できます。 HiyaCFW Helperの最新版では、セットアップ中にNANDからSDNANDへ写真をコピーすることができます
- Unlaunchのボタン設定の復元はUnlaunchメニューから行えます。本体の電源投入時に<kbd class="face">A</kbd> + <kbd class="face">B</kbd>を長押しすることでメニューを開けます
- Unlaunchの起動時にエラーが発生してお困りですか？ SDカードを取り出し、本体を再起動してみてください。 動く場合は、問題はSDカードにあるため、NANDバックアップを復元しても問題は解決されません
- 起動時に"An error has occurred..."が表示される場合は、hiyaCFW のエラーである可能性があり、NAND とは関係ありません。詳細については、DS-Homebrew Wiki の [hiyaCFW FAQ & トラブルシューティング](https://wiki.ds-homebrew.com/hiyacfw/faq) を参照してください
- TWiLight Menu++ のエラーはNANDのエラートは無関係です。TWiLight Menu++ を再インストールするか、 [Discord](https://ds-homebrew.com/discord) で助けを求めてください
- Unlaunchの削除は、NANDをフラッシュするか、付属アンインストーラを使用するかにかかわらず、絶対に必要でない限り行うべきではありません。UnlaunchのAutoboot設定をLauncherにすれば、DSiは純正品のように機能します

NANDの操作を必要とする事柄は、Unlaunchのインストールのみです。 それ以外の場合は上記の代替案を使用してください。

## 必要事項

- **同じDSi**からバックアップしたNAND
- [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)の最新版
- UnlaunchやMemory Pitなど、NANDアクセス可能なHomebrewを実行する方法
- [no$gba](https://problemkaputt.de/gba.htm) で NAND バックアップを確認してください ( 'Windows gaming version'をダウンロードしてください)
  - macOS と Linux のユーザーは [WINE](https://winehq.org) を使用して$gba を実行できます
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## no$gbaに使用するBIOSのダンプ

1. `dsibiosdumper.zip`のZipファイルから`dsibiosdumper.nds`を解凍し、SDカードのどこかに置いてください
2. <kbd class="face">A</kbd>と<kbd class="face">B</kbd>を押したままDSiの電源を入れます
   - これはUnlaunchのファイルメニューを開くホットキーです
3. メニューからdsibiosdumperを起動します
4. <kbd class="face">A</kbd>を押してBIOSをSDカードにダンプします
5. <kbd>START</kbd>を押して、dsibiosdumperを終了します

## NANDバックアップのテスト

本体へNANDバックアップを復元する前に、まずそれが動くかテストすることが非常に重要です。no$gbaでブリックエラーが表示される場合は、おそらく本体もブリックしてしまいます。

1. `no$GBA-w.zip`から`no$gba.EXE`をコンピュータ上のフォルダに解凍してください
2. `NO$GBA.EXE`と同じフォルダにNANDバックアップをコピーし、名前を`DSI-1.MMC`に変更してください
3. `bios7i.bin` と `bios9i.bin` を、それぞれ `BIOSDSI7.ROM` と `BIOSDSI9.ROM` という名前に変更し、 `NO$GBA.EXE` と同じフォルダにコピーしてください。
4. `NO$GBA.EXE`を実行してください
5. `Options` > `Emulation Setup` をクリックしてエミュレーションセットアップウィンドウを開いてください
6. `Reset/Startup Entrypoint` を `GBA/NDS BIOS (Nintendo logo)` に変更してください
7. `NDS Mode/Colors`を`DSi (retail/16MB)`に変更してください
8. `Save Now`をクリックしてください
9. 任意のニンテンドーDS ROM(`.nds`ファイル)を起動してください

no$gbaでDSiメニューかUnlaunch Filemenuがロードされた場合は、次のセクションに進みます。 何らかのエラーが表示された場合は_**そのバックアップを使わないでください**_！

## NANDバックアップからUnlaunchを除去（任意）

もしUnlaunchをインストールした後にNANDバックアップを作成し、かつシステムからUnlaunchを削除したいなら、この手順に従ってください。 Unlaunchの削除をするつもりがなければ、この操作は**必要ありません**。

1. [Safe Unlaunch installer](https://problemkaputt.de/unlaunch.zip) の最新版をダウンロード
2. `UNLAUNCH.DSI`を`unlaunch.zip`から解凍してください
3. `UNLAUNCH.DSI`を$gba で起動し、ゲームカードスロットから起動してください
   - Unlaunch installerが起動します。見た目はUnlaunch Filemenuに似ています
4. `Uninstall`を選択してください
5. 完了したら`Power down`を選択してください
6. DS ROMを再度起動し、DSiメニューがロードされ正常に動作することを確認します

no$gbaでDSiメニューが表示されずに何らかのエラーが出た場合は_**そのバックアップを使わないでください**_！ 古いNANDバックアップをお持ちの場合は、代わりにそれを試したほうが良いです。 本体上でUnlaunch付属のアンインストーラーを使ってUnlaunchの削除をしては**いけません**。DSiをブリックする可能性が非常に高いためです。

## NANDバックアップの書き込み（ソフト的手法）

::: danger

ここからが危険な場所になるので、上記の手順をしっかり読み終えたか確認してください。 外部から直接ここにリンクされて上記の手順を読んでいない場合は、上に戻って、このページ全体を読んでください。

:::

::: danger

このセクションを始める前に、DSiが十分に充電されていることを確認してください。

:::

1. SDカードを挿入した状態で、<kbd class="face">A</kbd>と<kbd class="face">B</kbd>を押したままDSiの電源を入れます
2. SafeNANDManagerを起動します
3. `begin NAND restore`でボタンを押してください
4. 復元が完了したら、<kbd>START</kbd>を押してDSiの電源を切ります

これでNANDが復元されたはずです。

## NANDバックアップの書き込み(Hardmod)

DSiが起動できない場合は、Hardmod（ハードウェア改造）がNANDバックアップを復元する唯一の方法です。 現在存在する最良のガイドは、[DS-Homebrew WikiのNintendo DSi hardmodガイド](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi)です。
