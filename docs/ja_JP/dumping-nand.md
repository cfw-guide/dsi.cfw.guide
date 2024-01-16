---
title: NANDのバックアップ
---

このページは、NAND（DSi内部ストレージ）のバックアップ作成に関するものです。 hiyaCFWのセットアップや、DSiエミュレータ「No$GBA」や「melonDS」のセットアップに使用できます。

::: tip

Make sure the SD card has at least 250MB of free space, or else you'll run into an error message in dumpTool.

:::

::: tip

It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.

:::

## セクション I - SD カードのセットアップ

::: tip

If you have already downloaded dumpTool from another section of this guide, you can skip this section.

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

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
