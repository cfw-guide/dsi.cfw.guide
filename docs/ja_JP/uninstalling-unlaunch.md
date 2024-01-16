---
title: Unlaunchのアンインストール
---

::: danger

**Unlaunchのインストール・アンインストールでは本体がランダムにブリック（文鎮化）することがあります！ 警告しましたよ！**

:::

**警告：**Unlaunchのアンインストールにより、お使いのDSiがブリックする可能性があります。 Unlaunchをアンインストールしたくても、そうせずに済む場合がいくつかあります。例えば：

- **Unlaunchの背景が怖い：**[Unlaunchの再インストール](installing-unlaunch.html)で解決します。 背景を変更する手順も紹介されています
- **Unlaunchインストール後、Unlaunchや本体に問題が起きている：**[トラブルシューティング](troubleshooting.html#unlaunch)ページに、問題解決に役立つ情報があります

::: warning

ブリックの可能性を減らすために、NANDバックアップ上に不正なDSiウェアがインストールされていないか（hiyaCFWによるSD NANDリダイレクトは除く）、システムファイルが改ざんされていないかを確認してください。

:::

::: warning

Unlaunchを削除するとき、本体上でUnlaunch付属のアンインストーラを**使ってはいけません**。本体がブリックするおそれがあります。 正しくアンインストールする方法については、以下をご覧ください。

:::

Once you have reviewed the above information, follow the [Dumping NAND](dumping-nand.html) instructions to make a new NAND backup, then proceed to [Restoring a NAND Backup](restoring-nand.html). これにより、NANDバックアップからUnlaunchをアンインストールし、本体に書き込むことができます。

no$gbaを使用できない場合や、no$gbaでUnlaunchをアンインストール後にエラーが発生した場合は、Unlaunchインストール以前のNANDバックアップをフラッシュすることも可能です。しかし、以前Unlaunch含んでいたNANDバックアップをまず使ってみるのをお勧めします。 UnlaunchはアンインストールされてもNANDにno$gbaフッターを埋め込んだままなので、上記操作によって、Hardmodが必要となるブリックの場合も修復が格段に簡単になるためです。
