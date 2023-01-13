---
title: よくある質問
---

## 本体の更新を行う必要がありますか？
購入したDSiウェアがない限り、DSiの更新は推奨**しません**。 更新してもガイドを進めることは可能ですが、更新による利点はニンテンドーDSiショップで購入済みタイトルを再ダウンロードできることくらいです。 その他、DSiカメラのFacebook連携をはじめとした様々な恩恵はもう得られないか、あっても更新の欠点を補えるものではありません。

- 本体の更新では時折本体が**ブリックする**ことが知られており、Unlaunchのインストールとほぼ同じ可能性で起こります。
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
     - Memory PitがインストールされているときにSDカードの写真を見る唯一の方法は、**TW**i**L**ight Menu++でＤＳｉカメラアプリを吸い出して（v0.61.3以降の）nds-bootstrapから起動することです

### stylehax
長所
- Memory PitよりもDSiモードのタイトルとHomebrewとの互換性が高い
- Easy to use
- No risk of damaging the console
- Useable on consoles with broken camera
- Better sound in GBARunner2

短所
- Requires internet access
- Requires loading the DSi Browser every time you want to access homebrew, slightly more time consuming than Memory Pit
- HomebrewではSlot-1（DSゲームカード）へのアクセス不能

### Flipnote Lenny
長所
- Better compatibility with DSi mode titles and homebrew than Memory Pit
- No risk of damaging the console, uninstalling is as simple as removing the SD or deleting one folder
- Useable on consoles with broken camera
- Better sound in GBARunner2

短所
- Requires loading Flipnote Studio every time you want to access homebrew, slightly more time consuming than Memory Pit
- Access to Slot-1 (the DS Game Card) is blocked in homebrew

### Unlaunch
Pros:
- Allows loading homebrew and DSiWare immediately on system boot, with optional button hotkeys
- Full access to the system without any restrictions, including:
   - Access to Slot-1 allowing dumping Game Cards and loading incompatible flashcards
   - Better sound in GBARunner2
- Removes region locks on DSi-Enhanced/Exclusive Game Cards
- Protection against most ways a DSi could brick
- DSi-Enhanced games can be run in DSi mode without a Donor ROM
- Old homebrew can be run via nds-bootstrap-hb

Cons:
- Very minor risk of **bricking** the console when installing
- Another, slightly higher, risk of bricking if you decide to [uninstall it](uninstalling-unlaunch.html)
- Not compatible with development consoles

## システムを改造することで、失われる機能はありますか？
If you install Unlaunch or use Flipnote Lenny, no functionality will be lost. If you use Memory Pit, you will be unable to view photos on the SD card using the DSi Camera, unless you launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap.
- To regain the ability to view your SD card photos when launching the DSi Camera from the DSi Menu, install Unlaunch or switch to a different exploit, then delete Memory Pit's `pit.bin` file
  - If `tip.bin` exists in the same folder, rename it back to `pit.bin`

## 吸い出したDSソフトはどうやってプレイできますか？
Playing Game Card dumps on the console requires the use of a flashcard or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting Slot-1 reads and writes to it.
- With TWiLight Menu++ you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using TWiLight Menu++ are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. In other words, you can drop your ROM files directly and play without any setup. There is no 39 title limit, neither hiyaCFW or Unlaunch are required and there are no restrictions on SD card free space you can have
- hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) guide on the DS-Homebrew Wiki, but it has some limitations. There is a hard limit of 39 titles, and they are less convenient to make than using TWiLight Menu++
   - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## Homebrewを更新するにはどうすればいいですか？
- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](installing-unlaunch.html) page
   - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card from the [updated release](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
   - If you use TWiLight Menu++, there is a high chance that the latest nds-bootstrap release is included with TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

Other homebrew might use other methods to update.

## 初めて改造します。（あるいは）セットアップをやり直したいです。 なにから始めればいいですか？
- If you have not already modified your console or are looking to update Unlaunch on your system, we recommend starting from the beginning of the guide and following through the pages. Be sure to read everything on the homepage
- If you have the latest version Unlaunch, follow the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) to set up TWiLight Menu++ on your system

## ペアレンタルコントロールを解除するにはどうしたらいいですか？
- The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls

## DSiのリージョン（地域）を変更できますか？
Yes, there are a few different methods depending on what you want to change:
- The safest and simplest method is to simply install TWiLight Menu++, it can use any official language and more without needing NAND modifications
- If you want to actually change the system region and are using hiyaCFW, you can use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) for Asian DSi systems. For American DSi systems use [this version of hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## hiyaCFWのインストールガイドはどうなったんですか？
Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).
- If you were linked to the page in question from another guide, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects

## どんな種類のSDカードを使うべきですか？
- You should buy an SD card from a trusted brand
- A full-size SD card or a microSD card with an adapter will both work
- Any capacity between 1 GB and 2 TB will work. For general usage, 8 GB is enough
  - Some software, such as hiyaCFW, may experience incrementally longer loading times with larger SD card capacities
- Speed class 8 or higher is recommended

## 他の本体で同じDSiのSDカードを使用できますか？
Generally, yes, with two exceptions:
- hiyaCFW will only work on the system it was set up for
- Even if you are using nds-bootstrap or a flashcard, friend codes in online NDS games will be reset when attempting to go online using a different console

## Homebrew環境構築後、新しいSDカードに切り替えるにはどうすればよいですか？
Format your new SD card using the [SD Card Setup](sd-card-setup.html) instructions, then simply move your data from the old SD card to the new one.

## Homebrew環境構築後、SDカードを挿入せずに本体を正常に使用できますか?
Yes. If you did not install Unlaunch, your system will remain completely unmodified. If you *did* install Unlaunch, you may need to [configure Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) to automatically boot the original DSi Menu under specified conditions.

## [Unlaunchのサイト](https://problemkaputt.de/unlaunch.htm)には「バージョン2.0は安全性不明」と書かれています。 以前のバージョンを使用するほうが良いですか？
The Unlaunch page has not been updated since version 2.0 was released, which was over two years ago. The vast majority of users experience no issues with this version, so it is considered safe.


## How do I run dumped DSiWare?
The recommended method is to simply launch them with TWiLight Menu++, due to the simple drag-and-drop method and there being no arbitrary limit. When nds-bootstrap is set as the launch method, it also gains the benefits of cheats and screenshots, as well as any other benefit provided by the in-game menu.

However, for the few titles that are incompatible, you can use [NTM](https://github.com/Epicpkmn11/NTM/releases) to install them on either internal memory or [hiyaCFW's SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing). In addition to lacking the benefits above, there is also a limit of 39 titles that cannot exceed 128 MiB/1,024 blocks in size. For SysNAND, there is also a very small risk of bricking the system when writing to the internal NAND.
