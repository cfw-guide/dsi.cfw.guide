# Unlaunchのアンインストール

::: danger

**Installing or uninstalling Unlaunch may randomly brick your console! You have been warned!**

:::

**WARNING:** An uninstall of Unlaunch may brick your Nintendo DSi. Unlaunchをアンインストールしたくても、そうせずに済む場合がいくつかあります。例えば：

- **The Unlaunch Background is scary:** [Reinstall Unlaunch](installing-unlaunch.html) using the new instructions. 背景を変更する手順も紹介されています
- **I'm having an issue with Unlaunch or my console after installing it:** The [Troubleshooting](troubleshooting.html#unlaunch) page will explain how to fix many issues you may have

::: warning

ブリックの可能性を減らすために、NANDバックアップ上に不正なDSiウェアがインストールされていないか（hiyaCFWによるSD NANDリダイレクトは除く）、システムファイルが改ざんされていないかを確認してください。

:::

::: warning

When uninstalling Unlaunch, you should **NOT** use its built-in uninstaller directly on your console as there is a chance that it will brick the console. 正しくアンインストールする方法については、以下をご覧ください。

:::

Once you have reviewed the above information, follow the [Dumping NAND](dumping-nand.html) instructions to make a new NAND backup, then proceed to [Restoring a NAND Backup](restoring-nand.html). これにより、NANDバックアップからUnlaunchをアンインストールし、本体に書き込むことができます。

no$gbaを使用できない場合や、no$gbaでUnlaunchをアンインストール後にエラーが発生した場合は、Unlaunchインストール以前のNANDバックアップをフラッシュすることも可能です。しかし、以前Unlaunch含んでいたNANDバックアップをまず使ってみるのをお勧めします。 UnlaunchはアンインストールされてもNANDにno$gbaフッターを埋め込んだままなので、上記操作によって、Hardmodが必要となるブリックの場合も修復が格段に簡単になるためです。
