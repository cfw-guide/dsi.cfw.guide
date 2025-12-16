# NANDのバックアップ

このページは、NAND（DSi内部ストレージ）のバックアップ作成に関するものです。 hiyaCFWのセットアップや、DSiエミュレータ「No$GBA」や「melonDS」のセットアップに使用できます。

::: tip

SDカードに少なくとも250MBの空き容量があることを確認してください。そうしないとdumpToolでエラーメッセージが表示されます。

:::

::: tip

このセクションの手順を行うことを強くお勧めします。 NANDバックアップは、DSiがブリックした場合、将来的に復元ポイントとして使用できます。

:::

## セクション I - SD カードのセットアップ

::: tip

すでにこのガイドの別のセクションから dumpTool をダウンロードしている場合は、このセクションをスキップできます。

:::

1. 最新の [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds) をダウンロード
2. SDカードのどこかに`dumpTool.nds`を配置してください

## Section II - NANDのバックアップ

1. インストールしたメニューから`dumpTool`を起動します
   - If you've used an exploit to launch it, and you're already in dumpTool, ignore this step
   - Unlaunchがすでにインストールされていて、「[はじめる](get-started.html#section-ii-checking-if-unlaunch-is-already-installed)」のページからこのページに移動した場合は、<kbd class="face">A</kbd> + <kbd class="face">B</kbd>を押しながら起動してください
2. NANDのバックアップを開始するには、DSiの<kbd class="face">A</kbd>ボタンを押します
   - NANDバックアップは通常約7分かかります
3. NANDバックアップが完了したら、<kbd>START</kbd>ボタンを押してdumpToolを終了します
4. 本体の電源を切ってSDカードをパソコンなどに挿入します
5. SDカード上で`dumpTool.nds`がある場所に移動すると、NANDバックアップを含む`DT######...`という名前の新しいフォルダが表示されます
   - dumpToolを「[はじめる](get-started.html)」のページからダウンロードした場合、ファイル名は`boot.nds`です
   - フォルダ内にはバックアップ自体である`nand.bin`と、バックアップのSHA1ハッシュである`nand.bin.sha1`があります
6. `DT######...`フォルダを失くさない安全な場所に保存してください
   - 可能であれば、異なるストレージ機器に複数のバックアップを作成してください
   - 他の場所にバックアップできたら、SDカードからは削除して大丈夫です
7. dumpToolをエクスプロイトで起動し、「[はじめる](get-started.html)」のページからダウンロードされた場合は、SDカードのルートから`boot.nds`を削除してください

::: warning

`nand.bin`のSHA1ハッシュは、`nand.bin.sha1`に保存されているハッシュと一致しません。 これはdumpToolがSHA1ハッシュが計算された後に`nand.bin`ファイルに$gba フッターとして知られていない追加データを追加するためです。 [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)を使ってフッターなしのコピーを作成できます。

:::

::: tip

[メニューの選択](choosing-a-menu.html)に進む

:::
