---
title: SDカードのセットアップ
---

このページは、お持ちの機器用にSDカードの準備をするためのものです。 この操作でSDカードをフォーマットし、エラーがないかの確認をします。

::: danger

この手順を進める前に必ずSDカードの内容をバックアップしてください。 処理によってカード内のデータは完全に失われます。

:::

::::: tabs

:::: tab name="Windows" os="windows"

### セクション I - SDメモリカードフォーマッターでフォーマット

::: tip

このセクションでは、SDアソシエーションの仕様に合わせてSDカードをフォーマットします。 Homebrewアプリの実行において発生しうる多くの問題を修正できるでしょう。

:::

::: danger

この操作では、64GB以上のSDカードは`exFAT`でフォーマットされます。 その場合はセクション II に従って`FAT32`で再フォーマット_しなければなりません_。

:::

1. [SDメモリカードフォーマッター](https://www.sdcard.org/ja/downloads-2/formatter-2/)の最新版をダウンロードします
    - 上のリンクが切れているときは、[archive.orgから](https://web.archive.org/web/20220626204124/https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)ダウンロードしてください
    - エンドユーザーライセンス契約に同意してダウンロードを始めてください
1. ダウンロードした`.zip`ファイルに含まれる`SD Card Formatter Setup`（`.exe`ファイル）を管理者権限で実行し、プログラムをインストールします
1. スタートメニューから`SD Card Formatter`を管理者権限で実行する
1. SDカードを選択します
1. `クイックフォーマット`が選択されていることを確認します
1. `フォーマット`を押してフォーマット作業を開始します ![Windows 11でのSD Card Formatterのスクリーンショット](/assets/images/sd-card-formatter.png)

### セクション II - GUIFormatでフォーマット

このセクションでは、32GBより大きいSDカードをFAT32でフォーマットします。

::: tip

If you have not followed Section I yet, please do so.

:::

::: tip

SDカードの容量が32GB以下の場合は、ここを飛ばしてセクション III に進んでください。

:::

1. [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)の最新版をダウンロードします
    - ダウンロードするにはサイトの画像をクリックしてください
1. 管理者権限でGUIFormatを実行します
1. ドライブレターを選択します
1. `Allocation unit size`を`32768`に設定します
    - この数値がお使いのSDカードには大きすぎる場合、SDカードが動作する一番大きい値に設定してください
1. `Quick Format`チェック ボックスがオンになっていることを確認します
1. フォーマットを開始します

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)

### セクション III - エラーのチェック
1. SDカードのプロパティウィンドウを表示します
    - `エクスプローラー` -> `PC` -> SDカードを右クリック -> `プロパティ`
1. ツールタブで、`チェック`を選択します
1. 存在する場合は、`ファイル システム エラーを自動的に修復する`と`不良セクターをスキャンし、回復する`の両方にチェックを入れます
1. 画面の指示に従い、チェックを開始します

これでSDカードがスキャンされ、発見されたすべてのエラーが修正されます。

### セクション IV - SDカードの読み書きのチェック

1. [H2testwのアーカイブ](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)をダウンロード・展開します
    - 上のリンクが切れているときは、[archive.orgから](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)ダウンロードしてください
    - チェックを行うSDカード以外の、任意の外付けメディアに展開することも可能です
1. SDカードをコンピュータに挿入した状態で`h2testw.exe`を実行します
1. H2testwで表示する言語を選択します
1. `Select target`でお使いのSDカードを選択します
1. 忘れずに`all available space`を選択します
1. `Write + Verify`をクリックします
- 処理が完了するまで待ちます

::: tip

テスト結果が`Test finished without errors`であればお持ちのSDカードは正常です。SDカード上の`.h2w`ファイルはすべて削除して構いません。

:::

::: danger

異なる結果が表示されていれば、お持ちのSDカードは破損・損傷している恐れがあり、新しいSDカードに交換が必要です！

:::

::::

:::: tab name="Linux" os="other"

::: tip

この方法に従ってTWiLight Menu++が起動できない場合は、代わりにWindows実マシンか仮想マシンを起動して、Windowsの方法に従ってください。

:::

### セクション I - SDカードのフォーマット
1. SDカードがLinuxマシンに挿入されて**いない**ことを確認します
1. Linuxのターミナルを起動します
1. `watch "lsblk"`を打ちます
1. SDカードをLinuxマシンに挿入します
1. 出力を見ます。 以下のように映るはずです：
```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```
1. 追加されたデバイス名をメモしてください。 上記の例では`mmcblk0p1`です
    - `RO`が1になっていたら、ロックスイッチが下にスライドしないようにしてください
    - Make sure you're targetting the **partition**, `mmcblk0p1` not `mmcblk0`
1. Ctrl + C を押してメニューを終了します
1. 次のうち、お使いのSDカードの容量にあった手順に従ってください：
    - 2GB以下：`sudo mkdosfs /dev/(上で見つけたデバイス名) -s 64 -F 16`
      - これにより、SDカード上にクラスタサイズが32KBのFAT16パーティションが一つ作成されます
    - 4GB以上：`sudo mkdosfs /dev/(上で見つけたデバイス名) -s 64 -F 32`
      - これにより、SDカード上にクラスタサイズが32KBのFAT32パーティションが一つ作成されます

### セクションII - F3の使用
1. [F3のアーカイブ](https://github.com/AltraMayor/f3/archive/v7.2.zip)をダウンロード・展開します
1. F3のディレクトリでターミナルを起動します
1. `make`を実行してF3をコンパイルします
1. SDカードを挿入してマウントしたら、`./f3write <your sd card mount point>`を実行します
    - 処理が完了するまで待ちます。 下記は出力の例です：
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. `./f3read <your sd card mount point>`を実行します
- 処理が完了するまで待ちます。 下記は出力の例です：
   ```
   $ ./f3read /media/michel/6135-3363/
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

::: tip

テスト結果が`Data LOST: 0.00 Byte (0 sectors)`であればお持ちのSDカードは正常です。SDカード上の`.h2w`ファイルはすべて削除して構いません。

:::

::: danger

異なる結果が表示されていれば、お持ちのSDカードは破損・損傷している恐れがあり、新しいSDカードに交換が必要です！

:::

::::

:::: tab name="macOS" os="macos"

### セクション I - SDメモリカードフォーマッターでフォーマット

::: tip

このセクションでは、SDアソシエーションの仕様に合わせてSDカードをフォーマットします。 Homebrewアプリの実行において発生しうる多くの問題を修正できるでしょう。

:::

::: danger

この操作では、64GB以上のSDカードは`exFAT`でフォーマットされます。 その場合はセクション II に従って`FAT32`で再フォーマット_しなければなりません_。

:::

1. [SDメモリカードフォーマッター](https://www.sdcard.org/ja/downloads-2/formatter-2/)の最新版をダウンロードします
    - エンドユーザーライセンス契約に同意してダウンロードを始めてください
1. ダウンロードした`.zip`ファイルに含まれる`Install SD Card Formatter`（`.mpkg`ファイル）を実行します
1. `SDカードフォーマッタ`を実行します
1. SDカードを選択します
1. `Quick Format`チェック ボックスがオンになっていることを確認します
1. フォーマットを開始します

### セクション II - ディスクユーティリティでフォーマット

このセクションでは、32GBより大きいSDカードをFAT32でフォーマットします。

::: tip

SDカードの容量が32GB以下の場合は、ここを飛ばしてセクション III に進んでください。

:::

#### OS X El Capitan (10.11) 以降

1. ディスクユーティリティアプリケーションを起動します
1. 左上の`表示`パネルで`すべてのデバイスを表示`を選択します
1. サイドバーからSDカードを選択します
    - SDカードが正しく選択されていることを確認してください。さもないと、意図しないドライブを消してしまう可能性があります！
1. 上部にある`消去`をクリックします
1. `フォーマット`を`MS-DOS (FAT32)`に設定します
    - El Capitan（10.11）〜Catalina（10.15）では`MS-DOS (FAT)`を選択してください。
1. `方式`を`マスター・ブート・レコード`に設定します
    - `方式`が表示されない場合、`キャンセル`をクリックし、ボリュームではなくデバイスを選択してください
1. `消去`をクリックし、`完了`をクリックします

#### OS X Yosemite (10.10) 以前
1. ディスクユーティリティアプリケーションを起動します
1. サイドバーからSDカードを選択します
    - SDカードが正しく選択されていることを確認してください。さもないと、意図しないドライブを消してしまう可能性があります！
1. 上部にある`パーティション作成`をクリックします
    - `パーティション作成`が表示されない場合、ボリュームではなくデバイスを選択してください
1. `パーティションのレイアウト：`を`1 パーティション`に設定します
1. `フォーマット`を`MS-DOS (FAT)`に設定します
1. オプションボタン（パーティション テーブルの下）から、`マスター・ブート・レコード`を選択します
1. `OK` -> `適用` -> `パーティション`とクリックしていきます

### セクション III - F3の使用
1. ターミナルを開きます
1. `brew install f3`を実行して、brewからF3をインストールします
    - brewを持っていない場合は、[brew.sh](https://brew.sh)の指示に従ってインストールしてください
1. SDカードを挿入してマウントしたら、`f3write <your sd card mount point>`を実行します
    - 処理が完了するまで待ちます。 下記は出力の例です：
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
1. `f3read <your sd card mount point>`を実行します
    - 処理が完了するまで待ちます。 下記は出力の例です：
   ```
   $ f3read /Volumes/SD\ CARD
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

::: tip

テスト結果が`Data LOST: 0.00 Byte (0 sectors)`であればお持ちのSDカードは正常です。SDカード上の`.h2w`ファイルはすべて削除して構いません。

:::

::: danger

異なる結果が表示されていれば、お持ちのSDカードは破損・損傷している恐れがあり、新しいSDカードに交換が必要です！

:::

::::

:::::

::: tip

もうSDカードの内容を復元して、次に進んでOKです。

:::

