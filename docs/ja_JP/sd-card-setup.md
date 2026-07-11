# SDカードのセットアップ

このページは、お持ちの機器用にSDカードの準備をするためのものです。 この操作でSDカードをフォーマットし、エラーがないかの確認をします。 このセクションでは、SDアソシエーションの仕様に合わせてSDカードをフォーマットします。 Homebrewアプリの実行において発生しうる多くの問題を修正できるでしょう。

::: danger

追加されたデバイス名をメモしてください。 上記の例では`mmcblk0p1`です この手順を進める前に必ずSDカードの内容をバックアップしてください。 処理によってカード内のデータは完全に失われます。

:::

::::: tabs

:::: tab default Windows

### Section I - Formatting your SD card with sdFormatWindows

::: warning

It is **not** recommended to use the built in default Windows Formatting utility since this can cause compatibility problems with homebrew, as it does not format SD cards to the correct specifications set by the SD Association.

:::

1. Download the latest version of [sdFormatWindows](https://github.com/flashcarts/sdFormatWindows/releases/latest/download/sdFormatWindows.exe)
2. Run the `sdFormatWindows` application (the `.exe` file) from the location you downloaded it to, adminstrator privileges are required
3. Select your SD card drive
   - If your SD card is **32GB or less**, you can use the default settings
   - If your SD card is **64GB or more**, enable the **"Format as FAT32"** and **"Force 32KiB Cluster Size"** options
4. `フォーマット`を押してフォーマット作業を開始します

### Section II - Checking SD card read/write for errors

1. [H2testwのアーカイブ](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)をダウンロード・展開します
   - 上のリンクが切れているときは、[archive.orgから](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)ダウンロードしてください
   - チェックを行うSDカード以外の、任意の外付けメディアに展開することも可能です
2. SDカードをコンピュータに挿入した状態で`h2testw.exe`を実行します
3. H2testwで表示する言語を選択します
4. `Select target`でお使いのSDカードを選択します
5. 忘れずに`all available space`を選択します
6. Click `Write + Verify` (If this option is greyed out, ensure you formatted the SD card with the steps in Section I)

- 処理が完了するまで待ちます。 下記は出力の例です：

::: tip

テスト結果が`Test finished without errors`であればお持ちのSDカードは正常です。SDカード上の`.h2w`ファイルはすべて削除して構いません。

:::

::: danger

異なる結果が表示されていれば、お持ちのSDカードは破損・損傷している恐れがあり、新しいSDカードに交換が必要です！

:::

::::

:::: tab Linux

::: tip

このセクションでは、SDアソシエーションの仕様に合わせてSDカードをフォーマットします。 Homebrewアプリの実行において発生しうる多くの問題を修正できるでしょう。

:::

::: danger

このセクションでは、SDアソシエーションの仕様に合わせてSDカードをフォーマットします。 Homebrewアプリの実行において発生しうる多くの問題を修正できるでしょう。 この操作では、64GB以上のSDカードは`exFAT`でフォーマットされます。 You _must_ follow both Sections I & II to re-format to `FAT32`.

:::

### Section I - Formatting your SD card with sdFormatLinux

1. SDカードがLinuxマシンに挿入されて**いない**ことを確認します
2. Download and extract the latest version of [sdFormatLinux](https://github.com/profi200/sdFormatLinux/releases/download/v0.2.0/sdFormatLinux_v0.2.0.7z) to your computer
3. Linuxのターミナルを起動します
4. `watch "lsblk"`を打ちます
5. SDカードをLinuxマシンに挿入します
6. 出力を見ます。 以下のように映るはずです：

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. 追加されたデバイス名をメモしてください。 In our example above, it was `mmcblk0`
   - `RO`が1になっていたら、ロックスイッチが下にスライドしないようにしてください
   - Make sure that you're targetting the **device**, `mmcblk0`, not the partition, `mmcblk0p1`
2. Ctrl + C を押してメニューを終了します
3. Navigate to where you have extracted sdFormatLinux
4. Run `sudo ./sdFormatLinux -f -e trim /dev/(device name from above)` to format your SD card

::: tip

If you get an error message stating: `Error: Device is mounted`, you will need to run `sudo umount /dev/(partition name from above)` in order to complete the above step.

:::

### Section II - Formatting your SD card with mkdosfs

このセクションでは、64GB 以上の SD カードを FAT32 にフォーマットします。

::: tip

SDカードの容量が32GB以下の場合は、ここを飛ばしてセクション III に進んでください。

:::

1. SDカードがLinuxマシンに挿入されて**いない**ことを確認します
2. Linuxのターミナルを起動します
3. `watch "lsblk"`を打ちます
4. SDカードをLinuxマシンに挿入します
5. 出力を見ます。 以下のように映るはずです：

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Take note of the device partition name. 上記の例では`mmcblk0p1`です
   - `RO`が1になっていたら、ロックスイッチが下にスライドしないようにしてください
   - Make sure you're targetting the **partition**, `mmcblk0p1`, not the device, `mmcblk0`
2. Ctrl + C を押してメニューを終了します
3. Run `sudo mkdosfs /dev/(partition name from above) -s 64 -F 32` to format your SD card to FAT32

### セクション III - F3の使用

1. Download and extract [the F3 archive](https://github.com/AltraMayor/f3/archive/v9.0.zip) anywhere on your computer.
2. F3のディレクトリでターミナルを起動します
3. `make`を実行してF3をコンパイルします
4. SDカードを挿入してマウントしたら、`./f3write <your sd card mount point>`を実行します
   - 処理が完了するまで待ちます。 下記は出力の例です： 下記は出力の例です：
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
5. `./f3read <your sd card mount point>`を実行します

- 処理が完了するまで待ちます。 下記は出力の例です： 下記は出力の例です：
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

:::: tab macOS

### セクション I - SDメモリカードフォーマッターでフォーマット

::: tip

このセクションでは、SDアソシエーションの仕様に合わせてSDカードをフォーマットします。 Homebrewアプリの実行において発生しうる多くの問題を修正できるでしょう。

:::

::: danger

このセクションでは、SDアソシエーションの仕様に合わせてSDカードをフォーマットします。 Homebrewアプリの実行において発生しうる多くの問題を修正できるでしょう。 出力を見ます。 以下のように映るはずです：

:::

1. [SDメモリカードフォーマッター](https://www.sdcard.org/ja/downloads-2/formatter-2/)の最新版をダウンロードします
   - エンドユーザーライセンス契約に同意してダウンロードを始めてください
2. ダウンロードした`.zip`ファイルに含まれる`Install SD Card Formatter`（`.mpkg`ファイル）を実行します
3. `SDカードフォーマッタ`を実行します
4. SDカードを選択します
5. `クイックフォーマット`が選択されていることを確認します
6. フォーマットを開始します

### セクション II - ディスクユーティリティでフォーマット

このセクションでは、32GBより大きいSDカードをFAT32でフォーマットします。

::: tip

SDカードの容量が32GB以下の場合は、ここを飛ばしてセクション III に進んでください。

:::

#### OS X El Capitan (10.11) 以降

1. ディスクユーティリティアプリケーションを起動します
2. 左上の`表示`パネルで`すべてのデバイスを表示`を選択します
3. サイドバーからSDカードを選択します
   - SDカードが正しく選択されていることを確認してください。さもないと、意図しないドライブを消してしまう可能性があります！
4. 上部にある`消去`をクリックします
5. `フォーマット`を`MS-DOS (FAT32)`に設定します
   - El Capitan（10.11）〜Catalina（10.15）では`MS-DOS (FAT)`を選択してください。
6. `方式`を`マスター・ブート・レコード`に設定します
   - `方式`が表示されない場合、`キャンセル`をクリックし、ボリュームではなくデバイスを選択してください
7. `消去`をクリックし、`完了`をクリックします

#### OS X Yosemite (10.10) 以前

1. ディスクユーティリティアプリケーションを起動します
2. サイドバーからSDカードを選択します
   - SDカードが正しく選択されていることを確認してください。さもないと、意図しないドライブを消してしまう可能性があります！
3. 上部にある`パーティション作成`をクリックします
   - `パーティション作成`が表示されない場合、ボリュームではなくデバイスを選択してください
4. `パーティションのレイアウト：`を`1 パーティション`に設定します
5. `フォーマット`を`MS-DOS (FAT)`に設定します
6. オプションボタン（パーティション テーブルの下）から、`マスター・ブート・レコード`を選択します
7. `OK` -> `適用` -> `パーティション`とクリックしていきます

### セクション III - F3の使用

1. ターミナルを開きます
2. `brew install f3`を実行して、brewからF3をインストールします
   - brewを持っていない場合は、[brew.sh](https://brew.sh)の指示に従ってインストールしてください
3. SDカードを挿入してマウントしたら、`f3write <your sd card mount point>`を実行します
   - 処理が完了するまで待ちます。 下記は出力の例です： 下記は出力の例です：
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
4. `f3read <your sd card mount point>`を実行します
   - 処理が完了するまで待ちます。 下記は出力の例です： 下記は出力の例です：
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

