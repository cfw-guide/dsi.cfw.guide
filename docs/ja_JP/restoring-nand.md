# NANDバックアップの復元

::: danger

警告！ This is _**dangerous**_. NANDは非常に繊細であり、特に複数回書き込みした場合は、これらのステップに忠実に従ってもブリックする危険性があります。 最後の手段としてのみ使用するべきです！

:::

::: tip

Do not skip _anything_ on this page, any mistake greatly increases chance of bricking your DSi.

:::

まず、復元を行いたい問題について、より安全な解決策を提示します：

- DSiウェアのインストールは、hiyaCFWまたはTWiLight Menu++を使って行うことができます
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. HiyaCFW Helperの最新版では、セットアップ中にNANDからSDNANDへ写真をコピーすることができます
- Unlaunchのボタン設定の復元はUnlaunchメニューから行えます。本体の電源投入時に<kbd class="face">A</kbd> + <kbd class="face">B</kbd>を長押しすることでメニューを開けます
- Unlaunchの起動時にエラーが発生してお困りですか？ SDカードを取り出し、本体を再起動してみてください。 動く場合は、問題はSDカードにあるため、NANDバックアップを復元しても問題は解決されません
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on [Discord](https://ds-homebrew.com/discord)
- Unlaunchの削除は、NANDをフラッシュするか、付属アンインストーラを使用するかにかかわらず、絶対に必要でない限り行うべきではありません。UnlaunchのAutoboot設定をLauncherにすれば、DSiは純正品のように機能します

NANDの操作を必要とする事柄は、Unlaunchのインストールのみです。 それ以外の場合は上記の代替案を使用してください。

## 必要事項

- Your NAND backup **from the same DSi**
- The latest release of [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- UnlaunchやMemory Pitなど、NANDアクセス可能なHomebrewを実行する方法
- [no$gba](https://problemkaputt.de/gba.htm), to check your NAND backup (Download the 'Windows gaming version')
  - macOS and Linux users can use [WINE](https://winehq.org) to run no$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## no$gbaに使用するBIOSのダンプ

1. Extract `dsibiosdumper.nds` from the `dsibiosdumper.zip` archive and place it anywhere on your SD card
2. <kbd class="face">A</kbd>と<kbd class="face">B</kbd>を押したままDSiの電源を入れます
   - これはUnlaunchのファイルメニューを開くホットキーです
3. メニューからdsibiosdumperを起動します
4. <kbd class="face">A</kbd>を押してBIOSをSDカードにダンプします
5. <kbd>START</kbd>を押して、dsibiosdumperを終了します

## NANDバックアップのテスト

本体へNANDバックアップを復元する前に、まずそれが動くかテストすることが非常に重要です。no$gbaでブリックエラーが表示される場合は、おそらく本体もブリックしてしまいます。

1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Copy your NAND backup to the folder you put `NO$GBA.EXE` in and rename it to `DSI-1.MMC`
3. Copy `bios7i.bin` and `bios9i.bin` to the folder you put `NO$GBA.EXE`, named `BIOSDSI7.ROM` and `BIOSDSI9.ROM`, respectively.
4. Run `NO$GBA.EXE`
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
8. Click `Save Now`
9. Launch any Nintendo DS ROM (`.nds` file)

no$gbaでDSiメニューかUnlaunch Filemenuがロードされた場合は、次のセクションに進みます。 If it shows any kind of error _**do not flash that backup**_!

## NANDバックアップからUnlaunchを除去（任意）

もしUnlaunchをインストールした後にNANDバックアップを作成し、かつシステムからUnlaunchを削除したいなら、この手順に従ってください。 If you are not trying to uninstall Unlaunch, you do **not** need to do this section.

1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
2. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
3. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - Unlaunch installerが起動します。見た目はUnlaunch Filemenuに似ています
4. Choose `Uninstall`
5. Once complete, choose `Power down`
6. DS ROMを再度起動し、DSiメニューがロードされ正常に動作することを確認します

If no$gba shows any kind of error instead of loading the DSi menu, _**do not flash that backup**_! 古いNANDバックアップをお持ちの場合は、代わりにそれを試したほうが良いです。 Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## NANDバックアップの書き込み（ソフト的手法）

::: danger

ここからが危険な場所になるので、上記の手順をしっかり読み終えたか確認してください。 外部から直接ここにリンクされて上記の手順を読んでいない場合は、上に戻って、このページ全体を読んでください。

:::

::: danger

このセクションを始める前に、DSiが十分に充電されていることを確認してください。

:::

1. SDカードを挿入した状態で、<kbd class="face">A</kbd>と<kbd class="face">B</kbd>を押したままDSiの電源を入れます
2. SafeNANDManagerを起動します
3. Press the button to `begin NAND restore`
4. 復元が完了したら、<kbd>START</kbd>を押してDSiの電源を切ります

これでNANDが復元されたはずです。

## NANDバックアップの書き込み（ハード的手法）

DSiが起動できない場合は、Hardmod（ハードウェア改造）がNANDバックアップを復元する唯一の方法です。 The best guide that currently exists is the [Nintendo DSi hardmod guide on the DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
