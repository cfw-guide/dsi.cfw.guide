---
title: NANDのバックアップ
---

このページは、NAND（DSi内部ストレージ）のバックアップ作成に関するものです。 hiyaCFWのセットアップや、DSiエミュレータ「No$GBA」や「melonDS」のセットアップに使用できます。

::: tip

バックアップを行うことを強くお勧めします。 後々ブリックした時に、復元ポイントとして使用できるためです。

:::

## セクション I - SD カードのセットアップ

::: tip

すでにこのガイドの別のセクションでdumpToolをダウンロードしている場合は、このセクションをスキップできます。

:::

1. 最新の[dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)をダウンロードします
1. SDカードの好きな場所に`dumpTool.nds`を移動します


## Section II - NANDのバックアップ

1. `dumpTool`をTWiLight Menu++から起動します
1. NANDのバックアップを開始するには、DSiの<kbd class="face">A</kbd>ボタンを押します
   - NANDバックアップは通常約7分かかります
1. NANDバックアップが完了したら、<kbd>START</kbd>ボタンを押してdumpToolを終了します
1. 本体の電源を切ってSDカードをパソコンなどに挿入します
1. このバックアップを、安全で、失くす心配のない場所に保管します
   - 可能であれば、異なるストレージ機器に複数のバックアップを作成します
   - 他の場所にバックアップできたら、SDカードからは消してOKです

::: warning

`nand.bin`のSHA1ハッシュは、`nand.bin.sha1`に格納されているハッシュと一致しません。 これはSHA1ハッシュを計算後に、No$GBAフッターとして知られるデータをdumpToolが`nand.bin`に追加しているためです。 フッターなしでバックアップを作成するには、[hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)を使用します。

:::

::: tip

[Unlaunchのインストール](installing-unlaunch.html)に進む（任意）

:::
