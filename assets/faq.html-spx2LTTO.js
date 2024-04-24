import{_ as s,r,o as h,c as d,a as e,b as n,w as l,d as i,e as o}from"./app-ULTNArho.js";const u={},c=o('<h2 id="本体の更新を行う必要がありますか" tabindex="-1"><a class="header-anchor" href="#本体の更新を行う必要がありますか" aria-hidden="true">#</a> 本体の更新を行う必要がありますか？</h2><p>購入したDSiウェアがない限り、DSiの更新は推奨<strong>しません</strong>。 更新してもガイドを進めることは可能ですが、更新による利点はニンテンドーDSiショップで購入済みタイトルを再ダウンロードできることくらいです。 その他、DSiカメラのFacebook連携をはじめとした様々な恩恵はもう得られないか、あっても更新の欠点を補えるものではありません。</p><ul><li>本体の更新では時折本体が<strong>ブリックする</strong>ことが知られており、Unlaunchのインストールとほぼ同じ可能性で起こります。</li><li>古いエクスプロイトはもう利用できません。推奨されるエクスプロイトを現状で利用できないようであれば更新が必須かもしれません。</li><li>マジコンの互換性が低下します。しかしながらUnlaunchをインストールすればこの問題は回避できます。</li></ul><h2 id="最も良いエクスプロイトはどれですか" tabindex="-1"><a class="header-anchor" href="#最も良いエクスプロイトはどれですか" aria-hidden="true">#</a> 最も良いエクスプロイトはどれですか？</h2><p>Unlaunchは全体的に最良のDSiエクスプロイトです。唯一の欠点は、インストール時に僅かなブリックの危険があることです。 一般的には、Memory Pitを使用してUnlaunchをインストールするのがおすすめです。 あらゆるリスクを回避したい場合は、代わりにFlipnote Lennyの使用をお勧めします。これは、Memory Pitと同じくらい安全で除去も簡単でありながら、Homebrewに関する問題がより少ないためです。 以下は、それぞれのエクスプロイトの長所・短所の一覧です。</p><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3><p>長所</p><ul><li>手っ取り早くて簡単</li><li>本体に損傷を与える危険性なし（アンインストールもSDを抜き取るか、ファイルを1つ削除するだけ）</li><li>全DSi機種と互換性あり（カメラが正しく動作し、カメラのチュートリアルを終えることが条件）</li></ul><p>短所</p><ul><li>HomebrewにアクセスするたびにDSiカメラアプリを起動する必要がある</li><li>WRAMがARM7 CPUにのみ開いているため、特定のDSiモードのタイトルおよびHomebrewと互換性がない</li><li>HomebrewではSlot-1（DSゲームカード）へのアクセス不能</li><li>DSPへのアクセスが不能で、結果としてGBARunner2の音質が悪化</li><li>Memory Pitがインストールされている間は、SDカード上の写真がDSiカメラアプリで表示できない（エクスプロイトのトリガーであるため） <ul><li>Memory PitがインストールされているときにSDカードの写真を見る唯一の方法は、<strong>TW</strong>i<strong>L</strong>ight Menu++でＤＳｉカメラアプリを吸い出して（v0.61.3以降の）nds-bootstrapから起動することです</li></ul></li></ul><h3 id="stylehax" tabindex="-1"><a class="header-anchor" href="#stylehax" aria-hidden="true">#</a> stylehax</h3><p>長所</p><ul><li>Memory PitよりもDSiモードのタイトルとHomebrewとの互換性が高い</li><li>Easy to use</li><li>No risk of damaging the console</li><li>Useable on consoles with broken camera</li><li>GBARunner2での音質が良い</li></ul><p>短所</p><ul><li>Requires internet access</li><li>Requires loading the DSi Browser every time you want to access homebrew, slightly more time consuming than Memory Pit</li><li>HomebrewではSlot-1（DSゲームカード）へのアクセス不能</li></ul><h3 id="flipnote-lenny-うごくメモ帳エクスプロイト" tabindex="-1"><a class="header-anchor" href="#flipnote-lenny-うごくメモ帳エクスプロイト" aria-hidden="true">#</a> Flipnote Lenny（うごくメモ帳エクスプロイト）</h3><p>長所</p><ul><li>Memory PitよりもDSiモードのタイトルとHomebrewとの互換性が高い</li><li>本体に損傷を与える危険性なし（アンインストールもSDを抜き取るか、フォルダを1つ削除するだけ）</li><li>Useable on consoles with broken camera</li><li>GBARunner2での音質が良い</li></ul><p>短所</p><ul><li>Homebrewにアクセスするために毎回うごくメモ帳を読み込む手間（Memory Pitより少し時間がかかる）</li><li>HomebrewではSlot-1（DSゲームカード）へのアクセス不能</li></ul><h3 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h3><p>長所</p><ul><li>本体起動時にHomebrewやDSiウェアを直ちに読み込み可能。また任意のショートカットキーを指定可能</li><li>システムへの無制限なフルアクセス <ul><li>Slot-1にアクセスしてゲームカードの吸出し、互換性のないマジコンの読込みが可能</li><li>GBARunner2での音質が良い</li></ul></li><li>DSi対応・専用ソフトのリージョンロックを解除可能</li><li>起こりうるDSiブリックに対する保護機能</li><li>ドナーROMを使わずにDSi対応ゲームをDSiモードで起動可能</li><li>nds-bootstrap-hb経由で古いHomebrewを起動可能</li></ul><p>短所</p>',24),_=e("li",null,[i("インストール時のごく僅かな"),e("strong",null,"ブリック"),i("の可能性")],-1),m=e("li",null,"開発用機種との互換性なし",-1),p=o('<h2 id="システムを改造することで、失われる機能はありますか" tabindex="-1"><a class="header-anchor" href="#システムを改造することで、失われる機能はありますか" aria-hidden="true">#</a> システムを改造することで、失われる機能はありますか？</h2><p>Unlaunchをインストールしても、Flipnote Lennyを使用しても、何ら機能は失われません。 Memory Pitを使用すると、DSiカメラを使ってSDカード上の写真を閲覧できなくなります。<strong>TW</strong>i<strong>L</strong>ight Menu++を使用してnds-bootstrap経由でDSiカメラアプリのROMダンプを起動するというのが閲覧する唯一の方法です。</p><ul><li>DSiメニューからカメラアプリを起動したときにSDカードの写真閲覧機能を取り戻すには、Unlaunchをインストールするか別のエクスプロイトに切り替えるかして、その後Memory Pitの<code>pit.bin</code>ファイルを消去します <ul><li><code>tip.bin</code>が同じフォルダに存在する場合、<code>pit.bin</code>に名前を戻します</li></ul></li></ul><h2 id="吸い出したdsソフトはどうやってプレイできますか" tabindex="-1"><a class="header-anchor" href="#吸い出したdsソフトはどうやってプレイできますか" aria-hidden="true">#</a> 吸い出したDSソフトはどうやってプレイできますか？</h2><p>吸い出したDSソフトで遊ぶには、マジコンもしくはnds-bootstrap（Slot-1の読み書きをリダイレクトすることで、内部SDカードからゲームをプレイ可能にするプログラム）の使用が必要です。</p>',5),b=e("li",null,"TWiLight Menu++を使えば、SDカード内のROMをnds-bootstrapでプレイすることができます。 TWiLight Menu++を使用する利点は、チートメニューが使えること、ゲームごとに設定を変更できること、フォワーダ（下記リンク参照）による制限を回避できることです。 つまり、ROMファイルを適当に配置するだけで、事前準備なしでプレイできます。 39タイトルという制約（後述）もなく、hiyaCFWやUnlaunchも必要なく、利用できるSDカードの（空き）容量制限もありません",-1),g={href:"https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card",target:"_blank",rel:"noopener noreferrer"},w={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"homebrewを更新するにはどうすればいいですか",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#homebrewを更新するにはどうすればいいですか","aria-hidden":"true"},"#"),i(" Homebrewを更新するにはどうすればいいですか？")],-1),y=e("strong",null,"Unlaunch",-1),D=e("ul",null,[e("li",null,[i("更新前にアンインストールする必要は"),e("strong",null,"ありません")])],-1),S=e("strong",null,"hiyaCFW",-1),k=e("code",null,"hiya.dsi",-1),x={href:"https://github.com/RocketRobz/hiyaCFW/releases",target:"_blank",rel:"noopener noreferrer"},M=e("strong",null,"TWiLight Menu++",-1),W={href:"https://wiki.ds-homebrew.com/twilightmenu/updating-dsi",target:"_blank",rel:"noopener noreferrer"},H=o("<li><strong>nds-bootstrap</strong>―SDカードのルートにある<code>_nds</code>フォルダに、<code>nds-bootstrap-hb-release.nds</code>と<code>nds-bootstrap-release.nds</code>をコピーしてください <ul><li>TWiLight Menu++を使用している場合は、すでに最新のnds-bootstrapが含まれている可能性が高いです</li></ul></li><li><strong>GodMode9i, dumpTool, Forwarder3-DS, etc</strong>―ダウンロード時の手順に従ってください</li>",2),L=e("p",null,"他のHomebrewはそれぞれのやり方で更新できます。",-1),P=e("h2",{id:"初めて改造します。-あるいは-セットアップをやり直したいです。-なにから始めればいいですか",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#初めて改造します。-あるいは-セットアップをやり直したいです。-なにから始めればいいですか","aria-hidden":"true"},"#"),i(" 初めて改造します。（あるいは）セットアップをやり直したいです。 なにから始めればいいですか？")],-1),U=e("li",null,"まだ本体に変更を加えてない、またはインストール済みのUnlaunchを更新しようとしている場合、このガイドのはじめから順にページをたどることをお勧めします。 書いてあることはすべて必ず読んでください",-1),F={href:"https://wiki.ds-homebrew.com/twilightmenu/installing-dsi",target:"_blank",rel:"noopener noreferrer"},N=e("h2",{id:"ペアレンタルコントロールを解除するにはどうしたらいいですか",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ペアレンタルコントロールを解除するにはどうしたらいいですか","aria-hidden":"true"},"#"),i(" ペアレンタルコントロールを解除するにはどうしたらいいですか？")],-1),T={href:"https://mkey.salthax.org",target:"_blank",rel:"noopener noreferrer"},C=e("h2",{id:"dsiのリージョン-地域-を変更できますか",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dsiのリージョン-地域-を変更できますか","aria-hidden":"true"},"#"),i(" DSiのリージョン（地域）を変更できますか？")],-1),R=e("p",null,"はい。変更したいものによって方法が異なります。",-1),v=e("li",null,"最も安全かつ簡単な方法は、単にTWiLight Menu++をインストールすることです。本体のNANDを変更せず、任意の公式・非公式の言語を使用できます",-1),A={href:"https://github.com/Yoti/cli_hiyalang/releases",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/Simonsator/cli_hiyalang/releases/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://gbatemp.net/threads/release-dsi-language-patcher.582836/",target:"_blank",rel:"noopener noreferrer"},G=e("h2",{id:"hiyacfwのインストールガイドはどうなったんですか",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hiyacfwのインストールガイドはどうなったんですか","aria-hidden":"true"},"#"),i(" hiyaCFWのインストールガイドはどうなったんですか？")],-1),j={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},I=e("ul",null,[e("li",null,"他のガイドからそのページに誘導された場合、おそらく古いガイドを参考にしてしまったのでしょう。 代わりにこのガイドを使用してください。こちらはプロジェクト開発者によって絶えず維持されています")],-1),q=e("h2",{id:"what-happened-with-lazy-dsi-downloader-how-do-i-install-cfw-without-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-happened-with-lazy-dsi-downloader-how-do-i-install-cfw-without-it","aria-hidden":"true"},"#"),i(" What happened with Lazy DSi Downloader? How do I install CFW without it?")],-1),E=e("p",null,"Lazy DSi Downloader was a program that essentially allowed you to skip the manual setup process by downloading and placing the necessary files and folders on your SD card. However, due to the way it was programmed and distributed, many users encountered various issues and ended up having to do the manual set up, as it was quicker and/or easier than fixing whatever was causing the issue.",-1),J=o('<ul><li>If you were linked to this guide by a third party that recommended using Lazy DSi Downloader, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects.</li></ul><h2 id="どんな種類のsdカードを使うべきですか" tabindex="-1"><a class="header-anchor" href="#どんな種類のsdカードを使うべきですか" aria-hidden="true">#</a> どんな種類のSDカードを使うべきですか？</h2><ul><li>信頼できるブランドからSDカードを購入しましょう</li><li>フルサイズのSDカードまたはmicroSDカード（アダプター併用）はどちらでも使用できます</li><li>1GB以上2TB以下のどんな容量でもいけます。 一般的な使い方では、8GBで十分です <ul><li>hiyaCFWなどの一部のソフトウェアでは、SDカードの容量が大きいほどロード時間が長くなることがあります</li></ul></li><li>スピードクラス8以上をお勧めします</li></ul><h2 id="他の本体で同じdsiのsdカードを使用できますか" tabindex="-1"><a class="header-anchor" href="#他の本体で同じdsiのsdカードを使用できますか" aria-hidden="true">#</a> 他の本体で同じDSiのSDカードを使用できますか？</h2><p>一般的には可能です。ただし2つの例外があります。</p><ul><li>hiyaCFWははじめにセットアップされたシステムでのみ動作します</li><li>nds-bootstrapやマジコンを使用している場合でも、オンライン対応ゲームのフレンドコードは別の本体でオンラインにしたときにリセットされます</li></ul><h2 id="homebrew環境構築後、新しいsdカードに切り替えるにはどうすればよいですか" tabindex="-1"><a class="header-anchor" href="#homebrew環境構築後、新しいsdカードに切り替えるにはどうすればよいですか" aria-hidden="true">#</a> Homebrew環境構築後、新しいSDカードに切り替えるにはどうすればよいですか？</h2>',7),O=e("h2",{id:"homebrew環境構築後、sdカードを挿入せずに本体を正常に使用できますか",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#homebrew環境構築後、sdカードを挿入せずに本体を正常に使用できますか","aria-hidden":"true"},"#"),i(" Homebrew環境構築後、SDカードを挿入せずに本体を正常に使用できますか?")],-1),V=e("em",null,"インストールした",-1),Y={id:"unlaunchのサイトには「バージョン2-0は安全性不明」と書かれています。-以前のバージョンを使用するほうが良いですか",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#unlaunchのサイトには「バージョン2-0は安全性不明」と書かれています。-以前のバージョンを使用するほうが良いですか","aria-hidden":"true"},"#",-1),Q={href:"https://problemkaputt.de/unlaunch.htm",target:"_blank",rel:"noopener noreferrer"},X=e("p",null,"Unlaunchのサイトは、2年以上前にバージョン2.0がリリースされて以来更新されていません。 多くのユーザがこのバージョンを使っていて問題が発生していないため、安全だと考えられます。",-1),Z=e("h2",{id:"how-do-i-run-dumped-dsiware",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-do-i-run-dumped-dsiware","aria-hidden":"true"},"#"),i(" How do I run dumped DSiWare?")],-1),$=e("p",null,"The recommended method is to simply launch them with TWiLight Menu++, due to the simple drag-and-drop method and there being no arbitrary limit. When nds-bootstrap is set as the launch method, it also gains the benefits of cheats and screenshots, as well as any other benefit provided by the in-game menu.",-1),ee={href:"https://github.com/Epicpkmn11/NTM/releases",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"};function ne(te,ae){const a=r("RouterLink"),t=r("ExternalLinkIcon");return h(),d("div",null,[c,e("ul",null,[_,e("li",null,[n(a,{to:"/ja_JP/uninstalling-unlaunch.html"},{default:l(()=>[i("アンインストール")]),_:1}),i("はインストールよりもわずかながら高リスク")]),m]),p,e("ul",null,[b,e("li",null,[i("hiyaCFWユーザならDS-Homebrew Wikiの"),e("a",g,[i("DSゲームフォワーダ"),n(t)]),i("ガイドを参考に、SD NAND DSiメニュー用のフォワーダを作成できますが、いくつか制限があります。 39タイトルまでの厳しい制限があり、作成自体がTWiLight Menu++を使うよりも不便です。 "),e("ul",null,[e("li",null,[i("hiyaCFWを持ってないがフォワーダを使用したい場合は、DS-Homebrew Wikiの"),e("a",w,[i("hiyaCFWインストールガイド"),n(t)]),i("に従ってください")])])])]),f,e("ul",null,[e("li",null,[y,i("―"),n(a,{to:"/ja_JP/installing-unlaunch.html"},{default:l(()=>[i("Unlaunchのインストール")]),_:1}),i("ページの手順に従ってください "),D]),e("li",null,[S,i("―SDカードのルートにある"),k,i("を"),e("a",x,[i("更新されたリリース"),n(t)]),i("で置き換えてください")]),e("li",null,[M,i("―"),e("a",W,[i("DS-Homebrew Wiki"),n(t)]),i("の指示に従ってください")]),H]),L,P,e("ul",null,[U,e("li",null,[i("最新バージョンのUnlaunchをお使いの場合は、"),e("a",F,[i("TWiLight Menu++インストールガイド"),n(t)]),i("に従って本体のTWiLight Menu++をセットアップしてください")])]),N,e("ul",null,[e("li",null,[e("a",T,[i("mkey generator"),n(t)]),i("で、ペアレンタルコントロールを解除するために必要なコードを生成できます")])]),C,R,e("ul",null,[v,e("li",null,[i("hiyaCFWを使用していて、実際にシステムのリージョンを変更したい場合、アジアのDSiシステムにはYotiの"),e("a",A,[i("hiyalang"),n(t)]),i("が使用できます。 アメリカのDSi機種には、"),e("a",B,[i("このバージョンのhiyalang"),n(t)]),i("が利用可能です。")]),e("li",null,[i("最後に、実際のシステムNANDでリージョンを変更したい場合は、Mighty Maxの"),e("a",z,[i("DSi Language Patcher"),n(t)]),i("を使用できます。")])]),G,e("p",null,[i("hiyaCFWはあまり機能的な役目を果たさず、多くのユーザにとって問題・混乱の種となるガイドでした。 そのため"),e("a",j,[i("DS-Homebrew Wiki"),n(t)]),i("に移動しました。")]),I,q,E,e("p",null,[i("To avoid more users encountering these issues, we no longer recommend using Lazy DSi Downloader, and instead "),n(a,{to:"/ja_JP/get-started.html"},{default:l(()=>[i("doing the manual setup")]),_:1}),i(" is the recommended way to go.")]),J,e("p",null,[n(a,{to:"/ja_JP/sd-card-setup.html"},{default:l(()=>[i("SDカードのセットアップ")]),_:1}),i("の手順で新しいSDカードをフォーマットして、古いSDカードから新しいSDカードへデータを移すだけでOKです。")]),O,e("p",null,[i("はい。 Unlaunchをインストールしなければ、システムは何ら変更されません。 Unlaunchを"),V,i("場合は、"),n(a,{to:"/ja_JP/installing-unlaunch.html#section-iii-post-unlaunch-configuration"},{default:l(()=>[i("Unlaunchの設定")]),_:1}),i("で元のDSiメニューを自動起動するように変更を加える必要があるかもしれません。")]),e("h2",Y,[K,i(),e("a",Q,[i("Unlaunchのサイト"),n(t)]),i("には「バージョン2.0は安全性不明」と書かれています。 以前のバージョンを使用するほうが良いですか？")]),X,Z,$,e("p",null,[i("However, for the few titles that are incompatible, you can use "),e("a",ee,[i("NTM"),n(t)]),i(" to install them on either internal memory or "),e("a",ie,[i("hiyaCFW's SDNAND"),n(t)]),i(". In addition to lacking the benefits above, there is also a limit of 39 titles that cannot exceed 128 MiB/1,024 blocks in size. For SysNAND, there is also a very small risk of bricking the system when writing to the internal NAND.")])])}const oe=s(u,[["render",ne],["__file","faq.html.vue"]]);export{oe as default};