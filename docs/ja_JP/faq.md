---
title: よくある質問
---

## 本体の更新を行う必要がありますか？
いいえ。 最新版を含むどのバージョンのDSiでもHomebrewは起動できますが、更新するメリットは皆無です。 DSiショップは完全に終了しましたし、DSiカメラのFacebook連携も終了して久しいです。 更新がもたらすものはマジコンの規制のみです。 また更新中に、ごく稀にDSiが**ブリックする**危険もあります。これはUnlaunchをインストールするときのリスクと同程度です。

## 最も良いエクスプロイトはどれですか？
Unlaunchは全体的に最良のDSiエクスプロイトです。唯一の欠点は、インストール時に僅かなブリックの危険があることです。 一般的に、Memory Pitを使用してUnlaunchをインストールすることをお勧めします（最も簡単でかつ互換性があるため）。しかし、万が一のリスクを避けたいときは、Memory Pitの代わりにFlipnote Lennyを使用しましょう。Memory Pit単独では特定のケースで問題が起きる可能性があるためです。 以下は、それぞれのエクスプロイトの長所・短所の一覧です。

### Memory Pit
長所
- 手っ取り早くて簡単
- 本体に損傷を与える危険性なし（アンインストールもSDを抜き取るか、ファイルを1つ削除するだけ）
- 全DSi機種と互換性あり（カメラが正しく動作し、カメラのチュートリアルを終えることが条件）

短所
- Homebrewにアクセスするために毎回DSiカメラアプリを起動する手間
- WRAMがARM7 CPUにのみ開いているため、特定のDSiモードのタイトルおよびHomebrewと互換性がない
- HomebrewではSlot-1（DSゲームカード）へのアクセス不能
- DSPへのアクセスが不能で、結果としてGBARunner2の音質が悪化
- Memory Pitがインストールされている間は、SDカード上の写真がDSiカメラアプリで表示できない（エクスプロイトのトリガーであるため）
     - Memory PitがインストールされているときにSDカードの写真を見る唯一の方法は、**TW**i**L**ight Menu++でＤＳｉカメラアプリを吸い出して（v0.61.3以降の）nds-bootstrapから起動することです

### Flipnote Lenny（うごくメモ帳エクスプロイト）
長所
- Memory PitよりもDSiモードのタイトルとHomebrewとの互換性が高い
- 本体に損傷を与える危険性なし（アンインストールもSDを抜き取るか、フォルダを1つ削除するだけ）
- GBARunner2での音質が良い

短所
- うごくメモ帳が必要
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
- インストール時のごく僅かな**ブリック**の可能性
- [アンインストール](uninstalling-unlaunch.html)はインストールよりもわずかながら高リスク
- 開発用機種との互換性なし

## システムを改造することで、失われる機能はありますか？
Unlaunchをインストールしても、Flipnote Lennyを使用しても、何ら機能は失われません。 ただMemory Pitを使用する場合、Memory Pitがインストールされている間はDSiカメラアプリからSDカード上の写真を表示することはできません。 再びカメラアプリでSDカードの写真を見るためにはUnlaunchをインストールするか別のエクスプロイトに切り替えるかして、その後でMemory Pitの`pit.bin`ファイルを消去します。

## 吸い出したDSソフトはどうやってプレイできますか？
吸い出したDSソフトで遊ぶには、マジコンもしくはnds-bootstrap（Slot-1の読み書きをリダイレクトすることで、内部SDカードからゲームをプレイ可能にするプログラム）の使用が必要です。
- TWiLight Menu++を使えば、SDカード内のROMをnds-bootstrapでプレイすることができます。 TWiLight Menu++を使用する利点は、チートメニューが使えること、ゲームごとに設定を変更できること、フォワーダ（下記リンク参照）による制限を回避できることです。 つまり、ROMファイルを適当に配置するだけで、事前準備なしでプレイできます。 39タイトルという制約（後述）もなく、hiyaCFWやUnlaunchも必要なく、利用できるSDカードの（空き）容量制限もありません
- hiyaCFWユーザならDS-Homebrew Wikiの[DSゲームフォワーダ](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card)ガイドを参考に、SD NAND DSiメニュー用のフォワーダを作成できますが、いくつか制限があります。 例えば、作れるフォワーダの数は39タイトル分までという厳しい制限です。これなら作るよりもTWiLight Menu++を使ってしまうほうが便利でしょう
   - hiyaCFWを持ってないがフォワーダを使用したい場合は、DS-Homebrew Wikiの[hiyaCFWインストールガイド](https://wiki.ds-homebrew.com/hiyacfw/installing)に従ってください

## Homebrewを更新するにはどうすればいいですか？
- **Unlaunch**―[Unlaunchのインストール](installing-unlaunch.html)ページの手順に従ってください
   - 更新前にアンインストールする必要は**ありません**
- **hiyaCFW**―SDカードのルートにある`hiya.dsi`を[更新されたリリース](https://github.com/RocketRobz/hiyaCFW/releases)で置き換えてください
- **TWiLight Menu++**―[DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)の指示に従ってください
- **nds-bootstrap**―SDカードのルートにある`_nds`フォルダに、`nds-bootstrap-hb-release.nds`と`nds-bootstrap-release.nds`をコピーしてください
   - TWiLight Menu++を使用している場合は、すでに最新のnds-bootstrapが含まれている可能性が高いです
- **GodMode9i, dumpTool, Forwarder3-DS, etc**―ダウンロード時の手順に従ってください

他のHomebrewはそれぞれのやり方で更新できます。

## 初めて改造します。（あるいは）セットアップをやり直したいです。 なにから始めればいいですか？
- まだ本体に変更を加えてない、またはインストール済みのUnlaunchを更新しようとしている場合、このガイドのはじめから順にページをたどることをお勧めします。 書いてあることはすべて必ず読んでください
- 最新バージョンのUnlaunchをお使いの場合は、[TWiLight Menu++インストールガイド](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)に従って本体のTWiLight Menu++をセットアップしてください

## ペアレンタルコントロールを解除するにはどうしたらいいですか？
- [mkey generator](https://mkey.salthax.org)で、ペアレンタルコントロールを解除するために必要なコードを生成できます

## DSiのリージョン（地域）を変更できますか？
はい。変更したいものによって方法が異なります。
- 最も安全かつ簡単な方法は、単にTWiLight Menu++をインストールすることです。本体のNANDを変更せず、任意の公式・非公式の言語を使用できます
- hiyaCFWを使用していて、実際にシステムのリージョンを変更したい場合、アジアのDSiシステムにはYotiの[hiyalang](https://github.com/Yoti/cli_hiyalang/releases)が使用できます。 アメリカのDSi機種には、[このバージョンのhiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)が利用可能です。
- 最後に、実際のシステムNANDでリージョンを変更したい場合は、Mighty Maxの[DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)を使用できます。

## hiyaCFWのインストールガイドはどうなったんですか？
hiyaCFWはあまり機能的な役目を果たさず、多くのユーザにとって問題・混乱の種となるガイドでした。 そのため[DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing)に移動しました。
- 他のガイドからそのページに誘導された場合、おそらく古いガイドを参考にしてしまったのでしょう。 代わりにこのガイドを使用してください。こちらはプロジェクト開発者によって絶えず維持されています

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

## [Unlaunchのサイト](https://problemkaputt.de/unlaunch.htm)には「バージョン2.0は安全性不明」と書かれています。 以前のバージョンを使用するほうが良いですか？
Unlaunchのサイトは、2年以上前にバージョン2.0がリリースされて以来更新されていません。 多くのユーザがこのバージョンを使っていて問題が発生していないため、安全だと考えられます。

## DSiウェアはどのようにインストールするんですか？
DSiウェアをプレイするには3つの方法があります。
- TWiLight Menu++からROMを実行するだけ。最も簡単で、制約と言えばSDカードの最大容量に注意することだけです。ただし相性の問題がわずかに存在します
- [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing)をインストールして、[NTM](https://github.com/Epicpkmn11/NTM/releases)か[TMFH](https://github.com/JeffRuLz/TMFH/releases)を使ってDSiウェアをインストールする。実際のDSiメニューと同じなので39作しかインストールできませんが、互換性は抜群です
- [NTM](https://github.com/Epicpkmn11/NTM/releases)を使って内部NANDのDSiメニューに直接インストールする。これも互換性は最高ですが、39作までの個数制約と1024ブロック（128MiB）までの容量制約があり、さらに内部NANDへ書き込むことによるごく稀なブリックの可能性があります
