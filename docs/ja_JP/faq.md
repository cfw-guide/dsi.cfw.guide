# よくある質問

## 本体の更新を行う必要がありますか？

It is **not** recommended to update your DSi unless you know there are purchased DSiWare. 更新してもガイドを進めることは可能ですが、更新による利点はニンテンドーDSiショップで購入済みタイトルを再ダウンロードできることくらいです。 その他、DSiカメラのFacebook連携をはじめとした様々な恩恵はもう得られないか、あっても更新の欠点を補えるものではありません。

- Installing System Updates is known to occasionally **brick** consoles, with roughly the same frequency as when installing Unlaunch
- 古いエクスプロイトはもう利用できません。推奨されるエクスプロイトを現状で利用できないようであれば更新が必須かもしれません。
- マジコンの互換性が低下します。しかしながらUnlaunchをインストールすればこの問題は回避できます。

## 最も良いエクスプロイトはどれですか？

Unlaunchは全体的に最良のDSiエクスプロイトです。唯一の欠点は、インストール時に僅かなブリックの危険があることです。 一般的には、Memory Pitを使用してUnlaunchをインストールするのがおすすめです。 あらゆるリスクを回避したい場合は、代わりにFlipnote Lennyの使用をお勧めします。これは、Memory Pitと同じくらい安全で除去も簡単でありながら、Homebrewに関する問題がより少ないためです。 以下は、それぞれのエクスプロイトの長所・短所の一覧です。

### Memory Pit

長所

- 手っ取り早くて簡単
- 本体に損傷を与える危険性なし（アンインストールもSDを抜き取るか、ファイルを1つ削除するだけ）
- 全DSi機種と互換性あり（カメラが正しく動作し、カメラのチュートリアルを終えることが条件）

短所

- HomebrewにアクセスするたびにDSiカメラアプリを起動する必要がある
- WRAMがARM7 CPUにのみ開いているため、特定のDSiモードのタイトルおよびHomebrewと互換性がない
- HomebrewではSlot-1（DSゲームカード）へのアクセス不能
- DSPへのアクセスが不能で、結果としてGBARunner2の音質が悪化
- Memory Pitがインストールされている間は、SDカード上の写真がDSiカメラアプリで表示できない（エクスプロイトのトリガーであるため）
  - The only way to view SD card photos while Memory Pit is installed, is to launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap (v0.61.3 or later)

### stylehax

長所

- Memory PitよりもDSiモードのタイトルとHomebrewとの互換性が高い
- Easy to use
- No risk of damaging the console
- Useable on consoles with broken camera
- GBARunner2での音質が良い

短所

- Requires internet access
- Requires loading the DSi Browser every time you want to access homebrew, slightly more time consuming than Memory Pit
- HomebrewではSlot-1（DSゲームカード）へのアクセス不能

### Flipnote Lenny（うごくメモ帳エクスプロイト）

長所

- Memory PitよりもDSiモードのタイトルとHomebrewとの互換性が高い
- 本体に損傷を与える危険性なし（アンインストールもSDを抜き取るか、フォルダを1つ削除するだけ）
- Useable on consoles with broken camera
- GBARunner2での音質が良い

短所

- Homebrewにアクセスするために毎回うごくメモ帳を読み込む手間（Memory Pitより少し時間がかかる）
- HomebrewではSlot-1（DSゲームカード）へのアクセス不能

### Unlaunch

長所

- 本体起動時にHomebrewやDSiウェアを直ちに読み込み可能。また任意のショートカットキーを指定可能
- システムへの無制限なフルアクセス
  - Slot-1にアクセスしてゲームカードの吸出し、互換性のないマジコンの読込みが可能
  - GBARunner2での音質が良い
- DSi対応・専用ソフトのリージョンロックを解除可能
- 起こりうるDSiブリックに対する保護機能
- ドナーROMを使わずにDSi対応ゲームをDSiモードで起動可能
- nds-bootstrap-hb経由で古いHomebrewを起動可能

短所

- Very minor risk of **bricking** the console when installing
- Another, slightly higher, risk of bricking if you decide to [uninstall it](uninstalling-unlaunch.html)
- 開発用機種との互換性なし

## システムを改造することで、失われる機能はありますか？

Unlaunchをインストールしても、Flipnote Lennyを使用しても、何ら機能は失われません。 If you use Memory Pit, you will be unable to view photos on the SD card using the DSi Camera, unless you launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap.

- To regain the ability to view your SD card photos when launching the DSi Camera from the DSi Menu, install Unlaunch or switch to a different exploit, then delete Memory Pit's `pit.bin` file
  - If `tip.bin` exists in the same folder, rename it back to `pit.bin`

## 吸い出したDSソフトはどうやってプレイできますか？

吸い出したDSソフトで遊ぶには、マジコンもしくはnds-bootstrap（Slot-1の読み書きをリダイレクトすることで、内部SDカードからゲームをプレイ可能にするプログラム）の使用が必要です。

- TWiLight Menu++を使えば、SDカード内のROMをnds-bootstrapでプレイすることができます。 TWiLight Menu++を使用する利点は、チートメニューが使えること、ゲームごとに設定を変更できること、フォワーダ（下記リンク参照）による制限を回避できることです。 つまり、ROMファイルを適当に配置するだけで、事前準備なしでプレイできます。 39タイトルという制約（後述）もなく、hiyaCFWやUnlaunchも必要なく、利用できるSDカードの（空き）容量制限もありません
- hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) guide on the DS-Homebrew Wiki, but it has some limitations. 39タイトルまでの厳しい制限があり、作成自体がTWiLight Menu++を使うよりも不便です。
  - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## Homebrewを更新するにはどうすればいいですか？

- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](installing-unlaunch.html) page
  - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card from the [updated release](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
  - TWiLight Menu++を使用している場合は、すでに最新のnds-bootstrapが含まれている可能性が高いです
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

他のHomebrewはそれぞれのやり方で更新できます。

## 初めて改造します。（あるいは）セットアップをやり直したいです。 なにから始めればいいですか？

- まだ本体に変更を加えてない、またはインストール済みのUnlaunchを更新しようとしている場合、このガイドのはじめから順にページをたどることをお勧めします。 書いてあることはすべて必ず読んでください
- If you have the latest version Unlaunch, follow the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) to set up TWiLight Menu++ on your system

## ペアレンタルコントロールを解除するにはどうしたらいいですか？

- The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls

## DSiのリージョン（地域）を変更できますか？

はい。変更したいものによって方法が異なります。

- 最も安全かつ簡単な方法は、単にTWiLight Menu++をインストールすることです。本体のNANDを変更せず、任意の公式・非公式の言語を使用できます
- If you want to actually change the system region and are using hiyaCFW, open the config menu, and change the region setting (not possible with CHN and KOR NANDs)
  - If this breaks touch input, revert the region setting back to the original, and you can instead use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) for Asian DSi systems. For American DSi systems use [this version of hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## What happened with Lazy DSi Downloader? How do I install CFW without it?

Lazy DSi Downloader was a program that essentially allowed you to skip the manual setup process by downloading and placing the necessary files and folders on your SD card. However, due to the way it was programmed and distributed, many users encountered various issues and ended up having to do the manual set up, as it was quicker and/or easier than fixing whatever was causing the issue.

To avoid more users encountering these issues, we no longer recommend using Lazy DSi Downloader, and instead [doing the manual setup](get-started.html) is the recommended way to go.

- If you were linked to this guide by a third party that recommended using Lazy DSi Downloader, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects.

## どんな種類のSDカードを使うべきですか？

- 信頼できるブランドからSDカードを購入しましょう
- フルサイズのSDカードまたはmicroSDカード（アダプター併用）はどちらでも使用できます
- 1GB以上2TB以下のどんな容量でもいけます。 一般的な使い方では、8GBで十分です
  - hiyaCFWなどの一部のソフトウェアでは、SDカードの容量が大きいほどロード時間が長くなることがあります
- スピードクラス8以上をお勧めします

## 他の本体で同じDSiのSDカードを使用できますか？

一般的には可能です。ただし2つの例外があります。

- hiyaCFWははじめにセットアップされたシステムでのみ動作します
- nds-bootstrapやマジコンを使用している場合でも、オンライン対応ゲームのフレンドコードは別の本体でオンラインにしたときにリセットされます

## Homebrew環境構築後、新しいSDカードに切り替えるにはどうすればよいですか？

Format your new SD card using the [SD Card Setup](sd-card-setup.html) instructions, then simply move your data from the old SD card to the new one.

## Homebrew環境構築後、SDカードを挿入せずに本体を正常に使用できますか?

はい。 Unlaunchをインストールしなければ、システムは何ら変更されません。 If you _did_ install Unlaunch, you may need to [configure Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) to automatically boot the original DSi Menu under specified conditions.

## The [Unlaunch page](https://problemkaputt.de/unlaunch.htm) says that version 2.0 is not known to be safe. 以前のバージョンを使用するほうが良いですか？

The Unlaunch page has not been updated since version 2.0 was released in 2019. 多くのユーザがこのバージョンを使っていて問題が発生していないため、安全だと考えられます。

## How do I run dumped DSiWare?

The recommended method is to simply launch them with TWiLight Menu++, due to the simple drag-and-drop method and there being no arbitrary limit. When nds-bootstrap is set as the launch method, it also gains the benefits of cheats and screenshots, as well as any other benefit provided by the in-game menu.

However, for the few titles that are incompatible, you can use [NTM](https://github.com/Epicpkmn11/NTM/releases) to install them on either internal memory or [hiyaCFW's SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing). In addition to lacking the benefits above, there is also a limit of 39 titles that cannot exceed 128 MiB/1,024 blocks in size. For SysNAND, there is also a very small risk of bricking the system when writing to the internal NAND.
