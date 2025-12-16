# Unlaunchのインストール

あなたはUnlaunchをインストールしようとしています。UnlaunchはDSiコンソールにインストールされる永久ブートコードエクスプロイトです。 起動時にコンソールを完全に制御できます。その結果、DSiシステムアプリやDSiWareタイトルから制限なく、Homebrewアプリケーションがハードウェアにフルアクセスできるようになります。

::: danger

まだ完了していない場合は、先に[NANDバックアップ](dumping-nand.html)を行ってください。 NANDバックアップ + [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) (または [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod)) がある場合は、その後コンソールが壊れた場合に備えて、このバックアップを復元することができます。

:::

::: danger

Unlaunchをインストールまたはアンインストールする場合、コンソールのNANDに書き込むので、コンソールがブリックする可能性がわずかにあります！

:::

::: warning

PCにアクセスできない場合、またはお使いのPCがChromeOSを実行している場合は、Unlaunchをインストールしないでください。 PC(Windows、Linux、またはmacOSを実行)は、使用されているSDカードがUnlaunchと互換性のある方法でフォーマットされていることを確認するために必要です。

:::

::: warning

UnlaunchにはニンテンドーDSi開発機との互換性はありません。

:::

## セクション I - SD カードのセットアップ

1. [Safe Unlaunch installer](https://github.com/edo9300/unlaunch-installer/releases/latest/download/unlaunch-installer.dsi) の最新版をダウンロード
2. `unlaunch-installer.dsi`をSDカードのどこかに移動します

## セクション II - DSi システムバージョンの更新

::: tip

Unlaunch が既にインストールされていて、Unlaunch を更新またはアンインストールしようとしている場合は、セクション III に進んでください

:::

1. DSi メニューで、本体設定を起動します(アイコンはグレーで、白いレンチがあります)
   - バージョンは上画面の右下に表示されます
   - If the version is `Ver 1.4.2`, proceed with performing a system update
   - If the version is _not_ `Ver 1.4.2`, go straight to [Section III](#section-iii-installing-updating-unlaunch)
2. `4`をタッチして4ページ目に進んでください
3. `システムアップデート` をタッチします。
   - コンソールの言語があなたの母国語でない場合は、3番目のオプションを選択してください
4. インターネットに接続して更新するように求められたら「はい」をタッチしてください
   - コンソールの言語があなたの母国語でない場合は、左側のオプションを選択してください
   - If the version is already up to date, go straight to [Section III](#section-iii-installing-updating-unlaunch)
5. `次へ`をタッチしてください
   - コンソールの言語があなたの母国語でない場合は、右側のオプションを選択してください
6. `同意する`をタッチしてください
   - コンソールの言語があなたの母国語でない場合は、上側のオプションを選択してください
7. `OK`をタッチしてください
   - コンソールの言語があなたの母国語でない場合は、右下のオプションを選択してください
8. システムが更新されるのを待ち、終了したら再起動してください

## セクション III - Unlaunchのインストール/更新

1. インストールしたメニューを開いてください(**TW**i**L**ightメニュー++ または akmenu-next)
   - Unlaunch を初めてインストールする場合は、[使用したエクスプロイト](launching-the-exploit.html)でメニューを起動してください
   - Unlaunchを既にインストールしており、アップデートしようとしている場合は、起動時に <kbd class="face">A</kbd> + <kbd class="face">B</kbd> を長押ししてください
2. アイコンが表示されているメニューで、「Safe Unlaunch installer」(使用されているメニューや表示方法に応じて「unlaunch-installer.dsi」としてリストされます)を起動します
3. `WARNING`メッセージが表示されたら、 <kbd class="face">A</kbd> ボタンを押してください
   - バッテリーLEDが赤色の場合、コンソールを充電するように教えてくれます。 充電コードを接続後に`Yes`を選択してください
4. デフォルトの背景を変更したい場合は、 `[Custom background]` を選択し、 <kbd class="face">A</kbd> を押して使用する背景を選択してください
   - 3 つのカスタム背景が含まれていますが、SD カードのルートにある `backgrounds` というフォルダーにさらに追加できます (フォルダーが存在しない場合は作成してください)
5. DSiスプラッシュ(「健康と安全のために」の画面)とサウンドの両方をDSiシステムメニューに保持したい場合は、‘`Enable sound and splash`を選択し、 <kbd class="face">A</kbd> を押してオンにしてください
6. Unlaunchがすでにインストールされている場合は、`Uninstall unlaunch` または `Restore launcher tmd` を選択し、完了したら <kbd class="face">A</kbd> を押してください
   - Unlaunchを**アンインストール**したいだけの場合は、ここで終わりにしてください
7. `Install unlaunch`を選択し、<kbd class="face">A</kbd>を押してください
8. インストールが完了したら、 <kbd class="face">A</kbd> ボタンを押してください
9. <kbd class="face">POWER</kbd> を押してシステムを再起動してください

この時点でUnlaunchのファイルメニューが表示されていれば、DSiの改造に成功しました。

- 黒い画面が表示された場合は、 [トラブルシューティング](troubleshooting.html)をご覧ください

## セクション IV - Unlaunchの設定

Unlaunchは今はデフォルトでファイルメニューを起動しますが、好きなものを起動するように変更できます。

1. <kbd class="face">A</kbd>と<kbd class="face">B</kbd>を押したままDSiの電源を入れます
   - これはUnlaunchのファイルメニューを開くホットキーです
   - 何もリストされていない場合、または NAND の内容のみリストされている場合 (下にスクロールしても)、[SD カードを再フォーマット](sd-card-setup.html)する必要があります
2. `OPTIONS`に移動し、利用可能なオプションを見てください
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd>はUnlaunchメニューを起動するためにハードコードされているため変更はできません
   - `NO BUTTON`および`BUTTON A / B / X / Y`オプションは好きなように設定でき、どのボタンが押されているかに応じて起動時に DSi が読み込むものを選択します。 DSiWare、Homebrew (インストールしたメニューを含む)、Slot-1カード、wifiboot、UnlaunchのFilemenuのいずれかを選択できます
     - 元の DSi メニューの場合は、`Launcher`を選択してください
   - `LOAD ERROR`は、SDカードが挿入されてないなどで、設定されたものが開始できなかったときのオプションです
3. `SAVE & EXIT`を選択し、本体の電源を切ってください

## セクション V - SDカードのクリーンアップ

::: tip

このセクションは任意です。不要なファイルを削除してSDカードを整理するためだけのものです。

:::

:::: tabs

:::tab default Memory Pit

- SDカードから`sd:/private/ds/app/484E494A/pit.bin`を削除してください
- `tip.bin`の名前を`pit.bin`に戻してください
- SDカードのルートにあった`DCIM`フォルダを復元できます
- SDカードから`unlaunch-installer.dsi`ファイルを削除してください

:::

:::tab Flipnote Lenny（うごくメモ帳エクスプロイト）

- 次のフォルダの中から`800031_104784BAB6B57_000.ppm`と`T00031_1038C2A757B77_000.ppm`ファイルを削除してください:
  - `sd:/private/ds/app/4B47554A/001` (日本)
  - `sd:/private/ds/app/4B475545/001` (アメリカ)
  - `sd:/private/ds/app/4B475556/001` (ヨーロッパ/オーストラリア)
  - 自分の地域以外のフォルダを丸ごと削除してもOKです
- SDカードから`unlaunch-installer.dsi`ファイルを削除してください

:::
