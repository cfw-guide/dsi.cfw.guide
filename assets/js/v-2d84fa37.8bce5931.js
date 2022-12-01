"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4963],{74266:(l,e,n)=>{n.r(e),n.d(e,{data:()=>a});const a={key:"v-2d84fa37",path:"/ja_JP/sd-card-setup.html",title:"SDカードのセットアップ",lang:"ja-JP",frontmatter:{title:"SDカードのセットアップ"},excerpt:"",headers:[{level:3,title:"セクション I - SDメモリカードフォーマッターでフォーマット",slug:"セクション-i-sdメモリカードフォーマッターでフォーマット",children:[]},{level:3,title:"セクション II - GUIFormatでフォーマット",slug:"セクション-ii-guiformatでフォーマット",children:[]},{level:3,title:"セクション III - エラーのチェック",slug:"セクション-iii-エラーのチェック",children:[]},{level:3,title:"セクション IV - SDカードの読み書きのチェック",slug:"セクション-iv-sdカードの読み書きのチェック",children:[]},{level:3,title:"セクション I - SDカードのフォーマット",slug:"セクション-i-sdカードのフォーマット",children:[]},{level:3,title:"セクションII - F3の使用",slug:"セクションii-f3の使用",children:[]},{level:3,title:"セクション I - SDメモリカードフォーマッターでフォーマット",slug:"セクション-i-sdメモリカードフォーマッターでフォーマット-1",children:[]},{level:3,title:"セクション II - ディスクユーティリティでフォーマット",slug:"セクション-ii-ディスクユーティリティでフォーマット",children:[]},{level:3,title:"セクション III - F3の使用",slug:"セクション-iii-f3の使用",children:[]}],filePathRelative:"ja_JP/sd-card-setup.md"}},28075:(l,e,n)=>{n.r(e),n.d(e,{default:()=>Cl});var a=n(66252);const i=(0,a._)("p",null,"このページは、お持ちの機器用にSDカードの準備をするためのものです。 この操作でSDカードをフォーマットし、エラーがないかの確認をします。",-1),s=(0,a._)("div",{class:"custom-container danger"},[(0,a._)("p",{class:"custom-container-title"},"DANGER"),(0,a._)("p",null,"この手順を進める前に必ずSDカードの内容をバックアップしてください。 処理によってカード内のデータは完全に失われます。")],-1),r=(0,a._)("h3",{id:"セクション-i-sdメモリカードフォーマッターでフォーマット",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#セクション-i-sdメモリカードフォーマッターでフォーマット","aria-hidden":"true"},"#"),(0,a.Uk)(" セクション I - SDメモリカードフォーマッターでフォーマット")],-1),u=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,"このセクションでは、SDアソシエーションの仕様に合わせてSDカードをフォーマットします。 Homebrewアプリの実行において発生しうる多くの問題を修正できるでしょう。")],-1),_=(0,a._)("div",{class:"custom-container danger"},[(0,a._)("p",{class:"custom-container-title"},"DANGER"),(0,a._)("p",null,[(0,a.Uk)("この操作では、64GB以上のSDカードは"),(0,a._)("code",null,"exFAT"),(0,a.Uk)("でフォーマットされます。 その場合はセクション II に従って"),(0,a._)("code",null,"FAT32"),(0,a.Uk)("で再フォーマット_しなければなりません_。")])],-1),t={href:"https://www.sdcard.org/ja/downloads-2/formatter-2/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://web.archive.org/web/20220626204124/https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/",target:"_blank",rel:"noopener noreferrer"},o=(0,a._)("li",null,"エンドユーザーライセンス契約に同意してダウンロードを始めてください",-1),d=(0,a._)("li",null,[(0,a.Uk)("ダウンロードした"),(0,a._)("code",null,".zip"),(0,a.Uk)("ファイルに含まれる"),(0,a._)("code",null,"SD Card Formatter Setup"),(0,a.Uk)("（"),(0,a._)("code",null,".exe"),(0,a.Uk)("ファイル）を管理者権限で実行し、プログラムをインストールします")],-1),m=(0,a._)("li",null,[(0,a.Uk)("スタートメニューから"),(0,a._)("code",null,"SD Card Formatter"),(0,a.Uk)("を管理者権限で実行する")],-1),p=(0,a._)("li",null,"SDカードを選択します",-1),k=(0,a._)("li",null,[(0,a._)("code",null,"クイックフォーマット"),(0,a.Uk)("が選択されていることを確認します")],-1),b=(0,a._)("li",null,"フォーマットを開始します",-1),h=(0,a._)("h3",{id:"セクション-ii-guiformatでフォーマット",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#セクション-ii-guiformatでフォーマット","aria-hidden":"true"},"#"),(0,a.Uk)(" セクション II - GUIFormatでフォーマット")],-1),U=(0,a._)("p",null,"このセクションでは、32GBより大きいSDカードをFAT32でフォーマットします。",-1),g=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,"SDカードの容量が32GB以下の場合は、ここを飛ばしてセクション III に進んでください。")],-1),S={href:"http://ridgecrop.co.uk/index.htm?guiformat.htm",target:"_blank",rel:"noopener noreferrer"},D=(0,a._)("ul",null,[(0,a._)("li",null,"ダウンロードするにはサイトの画像をクリックしてください")],-1),f=(0,a._)("li",null,"管理者権限でGUIFormatを実行します",-1),w=(0,a._)("li",null,"ドライブレターを選択します",-1),I=(0,a._)("li",null,[(0,a._)("code",null,"Allocation unit size"),(0,a.Uk)("を"),(0,a._)("code",null,"32768"),(0,a.Uk)("に設定します "),(0,a._)("ul",null,[(0,a._)("li",null,"この数値がお使いのSDカードには大きすぎる場合、SDカードが動作する一番大きい値に設定してください")])],-1),v=(0,a._)("li",null,[(0,a._)("code",null,"Quick Format"),(0,a.Uk)("チェック ボックスがオンになっていることを確認します")],-1),x=(0,a._)("li",null,"フォーマットを開始します",-1),F=(0,a._)("p",null,[(0,a._)("img",{src:"https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png",alt:""})],-1),T=(0,a._)("h3",{id:"セクション-iii-エラーのチェック",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#セクション-iii-エラーのチェック","aria-hidden":"true"},"#"),(0,a.Uk)(" セクション III - エラーのチェック")],-1),B=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a.Uk)("SDカードのプロパティウィンドウを表示します "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("code",null,"エクスプローラー"),(0,a.Uk)(" -> "),(0,a._)("code",null,"PC"),(0,a.Uk)(" -> SDカードを右クリック -> "),(0,a._)("code",null,"プロパティ")])])]),(0,a._)("li",null,[(0,a.Uk)("ツールタブで、"),(0,a._)("code",null,"チェック"),(0,a.Uk)("を選択します")]),(0,a._)("li",null,[(0,a.Uk)("存在する場合は、"),(0,a._)("code",null,"ファイル システム エラーを自動的に修復する"),(0,a.Uk)("と"),(0,a._)("code",null,"不良セクターをスキャンし、回復する"),(0,a.Uk)("の両方にチェックを入れます")]),(0,a._)("li",null,"画面の指示に従い、チェックを開始します")],-1),O=(0,a._)("p",null,"これでSDカードがスキャンされ、発見されたすべてのエラーが修正されます。",-1),A=(0,a._)("h3",{id:"セクション-iv-sdカードの読み書きのチェック",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#セクション-iv-sdカードの読み書きのチェック","aria-hidden":"true"},"#"),(0,a.Uk)(" セクション IV - SDカードの読み書きのチェック")],-1),y={href:"http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip",target:"_blank",rel:"noopener noreferrer"},G={href:"https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip",target:"_blank",rel:"noopener noreferrer"},C=(0,a._)("li",null,"チェックを行うSDカード以外の、任意の外付けメディアに展開することも可能です",-1),W=(0,a._)("li",null,[(0,a.Uk)("SDカードをコンピュータに挿入した状態で"),(0,a._)("code",null,"h2testw.exe"),(0,a.Uk)("を実行します")],-1),R=(0,a._)("li",null,"H2testwで表示する言語を選択します",-1),P=(0,a._)("li",null,[(0,a._)("code",null,"Select target"),(0,a.Uk)("でお使いのSDカードを選択します")],-1),M=(0,a._)("li",null,[(0,a.Uk)("忘れずに"),(0,a._)("code",null,"all available space"),(0,a.Uk)("を選択します")],-1),E=(0,a._)("li",null,[(0,a._)("code",null,"Write + Verify"),(0,a.Uk)("をクリックします")],-1),K=(0,a._)("ul",null,[(0,a._)("li",null,"処理が完了するまで待ちます")],-1),L=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,[(0,a.Uk)("テスト結果が"),(0,a._)("code",null,"Test finished without errors"),(0,a.Uk)("であればお持ちのSDカードは正常です。SDカード上の"),(0,a._)("code",null,".h2w"),(0,a.Uk)("ファイルはすべて削除して構いません。")])],-1),N=(0,a._)("div",{class:"custom-container danger"},[(0,a._)("p",{class:"custom-container-title"},"DANGER"),(0,a._)("p",null,"異なる結果が表示されていれば、お持ちのSDカードは破損・損傷している恐れがあり、新しいSDカードに交換が必要です！")],-1),V=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,"この方法に従ってTWiLight Menu++が起動できない場合は、代わりにWindows実マシンか仮想マシンを起動して、Windowsの方法に従ってください。")],-1),z=(0,a._)("h3",{id:"セクション-i-sdカードのフォーマット",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#セクション-i-sdカードのフォーマット","aria-hidden":"true"},"#"),(0,a.Uk)(" セクション I - SDカードのフォーマット")],-1),j=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a.Uk)("SDカードがLinuxマシンに挿入されて"),(0,a._)("strong",null,"いない"),(0,a.Uk)("ことを確認します")]),(0,a._)("li",null,"Linuxのターミナルを起動します"),(0,a._)("li",null,[(0,a._)("code",null,'watch "lsblk"'),(0,a.Uk)("を打ちます")]),(0,a._)("li",null,"SDカードをLinuxマシンに挿入します"),(0,a._)("li",null,"出力を見ます。 以下のように映るはずです：")],-1),H=(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nmmcblk0     179:0    0   3,8G  0 disk\n└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br")])],-1),J=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a.Uk)("追加されたデバイス名をメモしてください。 上記の例では"),(0,a._)("code",null,"mmcblk0p1"),(0,a.Uk)("です")])],-1),$=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("code",null,"RO"),(0,a.Uk)("が1になっていたら、ロックスイッチが下にスライドしないようにしてください")])],-1),Y=(0,a._)("ol",null,[(0,a._)("li",null,"Ctrl + C を押してメニューを終了します"),(0,a._)("li",null,[(0,a.Uk)("次のうち、お使いのSDカードの容量にあった手順に従ってください： "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("2GB以下："),(0,a._)("code",null,"sudo mkdosfs /dev/(上で見つけたデバイス名) -s 64 -F 16"),(0,a._)("ul",null,[(0,a._)("li",null,"これにより、SDカード上にクラスタサイズが32KBのFAT16パーティションが一つ作成されます")])]),(0,a._)("li",null,[(0,a.Uk)("4GB以上："),(0,a._)("code",null,"sudo mkdosfs /dev/(上で見つけたデバイス名) -s 64 -F 32"),(0,a._)("ul",null,[(0,a._)("li",null,"これにより、SDカード上にクラスタサイズが32KBのFAT32パーティションが一つ作成されます")])])])])],-1),Z=(0,a._)("h3",{id:"セクションii-f3の使用",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#セクションii-f3の使用","aria-hidden":"true"},"#"),(0,a.Uk)(" セクションII - F3の使用")],-1),Q={href:"https://github.com/AltraMayor/f3/archive/v7.2.zip",target:"_blank",rel:"noopener noreferrer"},X=(0,a._)("li",null,"F3のディレクトリでターミナルを起動します",-1),q=(0,a._)("li",null,[(0,a._)("code",null,"make"),(0,a.Uk)("を実行してF3をコンパイルします")],-1),ll=(0,a._)("li",null,[(0,a.Uk)("SDカードを挿入してマウントしたら、"),(0,a._)("code",null,"./f3write <your sd card mount point>"),(0,a.Uk)("を実行します "),(0,a._)("ul",null,[(0,a._)("li",null,"処理が完了するまで待ちます。 下記は出力の例です：")]),(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"$ ./f3write /media/michel/6135-3363/\nFree space: 29.71 GB\nCreating file 1.h2w ... OK!\n...\nCreating file 30.h2w ... OK!\nFree space: 0.00 Byte\nAverage Writing speed: 4.90 MB/s\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br")])])],-1),el=(0,a._)("li",null,[(0,a._)("code",null,"./f3read <your sd card mount point>"),(0,a.Uk)("を実行します")],-1),nl=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("処理が完了するまで待ちます。 下記は出力の例です："),(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"$ ./f3read /media/michel/6135-3363/\n                  SECTORS      ok/corrupted/changed/overwritten\nValidating file 1.h2w ... 2097152/        0/      0/      0\n...\nValidating file 30.h2w ... 1491904/        0/      0/      0\n\n   Data OK: 29.71 GB (62309312 sectors)\nData LOST: 0.00 Byte (0 sectors)\n            Corrupted: 0.00 Byte (0 sectors)\n   Slightly changed: 0.00 Byte (0 sectors)\n         Overwritten: 0.00 Byte (0 sectors)\nAverage Reading speed: 9.42 MB/s\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br")])])])],-1),al=(0,a._)("hr",null,null,-1),il=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,[(0,a.Uk)("テスト結果が"),(0,a._)("code",null,"Data LOST: 0.00 Byte (0 sectors)"),(0,a.Uk)("であればお持ちのSDカードは正常です。SDカード上の"),(0,a._)("code",null,".h2w"),(0,a.Uk)("ファイルはすべて削除して構いません。")])],-1),sl=(0,a._)("div",{class:"custom-container danger"},[(0,a._)("p",{class:"custom-container-title"},"DANGER"),(0,a._)("p",null,"異なる結果が表示されていれば、お持ちのSDカードは破損・損傷している恐れがあり、新しいSDカードに交換が必要です！")],-1),rl=(0,a._)("h3",{id:"セクション-i-sdメモリカードフォーマッターでフォーマット-1",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#セクション-i-sdメモリカードフォーマッターでフォーマット-1","aria-hidden":"true"},"#"),(0,a.Uk)(" セクション I - SDメモリカードフォーマッターでフォーマット")],-1),ul=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,"このセクションでは、SDアソシエーションの仕様に合わせてSDカードをフォーマットします。 Homebrewアプリの実行において発生しうる多くの問題を修正できるでしょう。")],-1),_l=(0,a._)("div",{class:"custom-container danger"},[(0,a._)("p",{class:"custom-container-title"},"DANGER"),(0,a._)("p",null,[(0,a.Uk)("この操作では、64GB以上のSDカードは"),(0,a._)("code",null,"exFAT"),(0,a.Uk)("でフォーマットされます。 その場合はセクション II に従って"),(0,a._)("code",null,"FAT32"),(0,a.Uk)("で再フォーマット_しなければなりません_。")])],-1),tl={href:"https://www.sdcard.org/ja/downloads-2/formatter-2/",target:"_blank",rel:"noopener noreferrer"},cl=(0,a._)("ul",null,[(0,a._)("li",null,"エンドユーザーライセンス契約に同意してダウンロードを始めてください")],-1),ol=(0,a._)("li",null,[(0,a.Uk)("ダウンロードした"),(0,a._)("code",null,".zip"),(0,a.Uk)("ファイルに含まれる"),(0,a._)("code",null,"Install SD Card Formatter"),(0,a.Uk)("（"),(0,a._)("code",null,".mpkg"),(0,a.Uk)("ファイル）を実行します")],-1),dl=(0,a._)("li",null,[(0,a._)("code",null,"SDカードフォーマッタ"),(0,a.Uk)("を実行します")],-1),ml=(0,a._)("li",null,"SDカードを選択します",-1),pl=(0,a._)("li",null,[(0,a._)("code",null,"Quick Format"),(0,a.Uk)("チェック ボックスがオンになっていることを確認します")],-1),kl=(0,a._)("li",null,"フォーマットを開始します",-1),bl=(0,a._)("h3",{id:"セクション-ii-ディスクユーティリティでフォーマット",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#セクション-ii-ディスクユーティリティでフォーマット","aria-hidden":"true"},"#"),(0,a.Uk)(" セクション II - ディスクユーティリティでフォーマット")],-1),hl=(0,a._)("p",null,"このセクションでは、32GBより大きいSDカードをFAT32でフォーマットします。",-1),Ul=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,"SDカードの容量が32GB以下の場合は、ここを飛ばしてセクション III に進んでください。")],-1),gl=(0,a._)("h4",{id:"os-x-el-capitan-10-11-以降",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#os-x-el-capitan-10-11-以降","aria-hidden":"true"},"#"),(0,a.Uk)(" OS X El Capitan (10.11) 以降")],-1),Sl=(0,a._)("ol",null,[(0,a._)("li",null,"ディスクユーティリティアプリケーションを起動します"),(0,a._)("li",null,[(0,a.Uk)("左上の"),(0,a._)("code",null,"表示"),(0,a.Uk)("パネルで"),(0,a._)("code",null,"すべてのデバイスを表示"),(0,a.Uk)("を選択します")]),(0,a._)("li",null,[(0,a.Uk)("サイドバーからSDカードを選択します "),(0,a._)("ul",null,[(0,a._)("li",null,"SDカードが正しく選択されていることを確認してください。さもないと、意図しないドライブを消してしまう可能性があります！")])]),(0,a._)("li",null,[(0,a.Uk)("上部にある"),(0,a._)("code",null,"消去"),(0,a.Uk)("をクリックします")]),(0,a._)("li",null,[(0,a._)("code",null,"フォーマット"),(0,a.Uk)("を"),(0,a._)("code",null,"MS-DOS (FAT32)"),(0,a.Uk)("に設定します "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("El Capitan（10.11）〜Catalina（10.15）では"),(0,a._)("code",null,"MS-DOS (FAT)"),(0,a.Uk)("を選択してください。")])])]),(0,a._)("li",null,[(0,a._)("code",null,"方式"),(0,a.Uk)("を"),(0,a._)("code",null,"マスター・ブート・レコード"),(0,a.Uk)("に設定します "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("code",null,"方式"),(0,a.Uk)("が表示されない場合、"),(0,a._)("code",null,"キャンセル"),(0,a.Uk)("をクリックし、ボリュームではなくデバイスを選択してください")])])]),(0,a._)("li",null,[(0,a._)("code",null,"消去"),(0,a.Uk)("をクリックし、"),(0,a._)("code",null,"完了"),(0,a.Uk)("をクリックします")])],-1),Dl=(0,a._)("h4",{id:"os-x-yosemite-10-10-以前",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#os-x-yosemite-10-10-以前","aria-hidden":"true"},"#"),(0,a.Uk)(" OS X Yosemite (10.10) 以前")],-1),fl=(0,a._)("ol",null,[(0,a._)("li",null,"ディスクユーティリティアプリケーションを起動します"),(0,a._)("li",null,[(0,a.Uk)("サイドバーからSDカードを選択します "),(0,a._)("ul",null,[(0,a._)("li",null,"SDカードが正しく選択されていることを確認してください。さもないと、意図しないドライブを消してしまう可能性があります！")])]),(0,a._)("li",null,[(0,a.Uk)("上部にある"),(0,a._)("code",null,"パーティション作成"),(0,a.Uk)("をクリックします "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("code",null,"パーティション作成"),(0,a.Uk)("が表示されない場合、ボリュームではなくデバイスを選択してください")])])]),(0,a._)("li",null,[(0,a._)("code",null,"パーティションのレイアウト："),(0,a.Uk)("を"),(0,a._)("code",null,"1 パーティション"),(0,a.Uk)("に設定します")]),(0,a._)("li",null,[(0,a._)("code",null,"フォーマット"),(0,a.Uk)("を"),(0,a._)("code",null,"MS-DOS (FAT)"),(0,a.Uk)("に設定します")]),(0,a._)("li",null,[(0,a.Uk)("オプションボタン（パーティション テーブルの下）から、"),(0,a._)("code",null,"マスター・ブート・レコード"),(0,a.Uk)("を選択します")]),(0,a._)("li",null,[(0,a._)("code",null,"OK"),(0,a.Uk)(" -> "),(0,a._)("code",null,"適用"),(0,a.Uk)(" -> "),(0,a._)("code",null,"パーティション"),(0,a.Uk)("とクリックしていきます")])],-1),wl=(0,a._)("h3",{id:"セクション-iii-f3の使用",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#セクション-iii-f3の使用","aria-hidden":"true"},"#"),(0,a.Uk)(" セクション III - F3の使用")],-1),Il=(0,a._)("li",null,"ターミナルを開きます",-1),vl=(0,a._)("code",null,"brew install f3",-1),xl={href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"},Fl=(0,a._)("li",null,[(0,a.Uk)("SDカードを挿入してマウントしたら、"),(0,a._)("code",null,"f3write <your sd card mount point>"),(0,a.Uk)("を実行します "),(0,a._)("ul",null,[(0,a._)("li",null,"処理が完了するまで待ちます。 下記は出力の例です：")]),(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"$ f3write /Volumes/SD\\ CARD\nFree space: 29.71 GB\nCreating file 1.h2w ... OK!\n...\nCreating file 30.h2w ... OK!\nFree space: 0.00 Byte\nAverage Writing speed: 4.90 MB/s\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br")])])],-1),Tl=(0,a._)("li",null,[(0,a._)("code",null,"f3read <your sd card mount point>"),(0,a.Uk)("を実行します "),(0,a._)("ul",null,[(0,a._)("li",null,"処理が完了するまで待ちます。 下記は出力の例です：")]),(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"$ f3read /Volumes/SD\\ CARD\n                  SECTORS      ok/corrupted/changed/overwritten\nValidating file 1.h2w ... 2097152/        0/      0/      0\n...\nValidating file 30.h2w ... 1491904/        0/      0/      0\n\n   Data OK: 29.71 GB (62309312 sectors)\nData LOST: 0.00 Byte (0 sectors)\n            Corrupted: 0.00 Byte (0 sectors)\n   Slightly changed: 0.00 Byte (0 sectors)\n         Overwritten: 0.00 Byte (0 sectors)\nAverage Reading speed: 9.42 MB/s\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br")])])],-1),Bl=(0,a._)("hr",null,null,-1),Ol=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,[(0,a.Uk)("テスト結果が"),(0,a._)("code",null,"Data LOST: 0.00 Byte (0 sectors)"),(0,a.Uk)("であればお持ちのSDカードは正常です。SDカード上の"),(0,a._)("code",null,".h2w"),(0,a.Uk)("ファイルはすべて削除して構いません。")])],-1),Al=(0,a._)("div",{class:"custom-container danger"},[(0,a._)("p",{class:"custom-container-title"},"DANGER"),(0,a._)("p",null,"異なる結果が表示されていれば、お持ちのSDカードは破損・損傷している恐れがあり、新しいSDカードに交換が必要です！")],-1),yl=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,"もうSDカードの内容を復元して、次に進んでOKです。")],-1),Gl={},Cl=(0,n(83744).Z)(Gl,[["render",function(l,e){const n=(0,a.up)("OutboundLink"),Gl=(0,a.up)("Tab"),Cl=(0,a.up)("Tabs");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,s,(0,a.Wm)(Cl,{tabs:""},{default:(0,a.w5)((()=>[(0,a.Wm)(Gl,{tab:"",name:"Windows",os:"windows"},{default:(0,a.w5)((()=>[r,u,_,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("a",t,[(0,a.Uk)("SDメモリカードフォーマッター"),(0,a.Wm)(n)]),(0,a.Uk)("の最新版をダウンロードします "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("上のリンクが切れているときは、"),(0,a._)("a",c,[(0,a.Uk)("archive.orgから"),(0,a.Wm)(n)]),(0,a.Uk)("ダウンロードしてください")]),o])]),d,m,p,k,b]),h,U,g,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("a",S,[(0,a.Uk)("GUIFormat"),(0,a.Wm)(n)]),(0,a.Uk)("の最新版をダウンロードします "),D]),f,w,I,v,x]),F,T,B,O,A,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("a",y,[(0,a.Uk)("H2testwのアーカイブ"),(0,a.Wm)(n)]),(0,a.Uk)("をダウンロード・展開します "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("上のリンクが切れているときは、"),(0,a._)("a",G,[(0,a.Uk)("archive.orgから"),(0,a.Wm)(n)]),(0,a.Uk)("ダウンロードしてください")]),C])]),W,R,P,M,E]),K,L,N])),_:1}),(0,a.Wm)(Gl,{tab:"",name:"Linux",os:"other"},{default:(0,a.w5)((()=>[V,z,j,H,J,$,Y,Z,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("a",Q,[(0,a.Uk)("F3のアーカイブ"),(0,a.Wm)(n)]),(0,a.Uk)("をダウンロード・展開します")]),X,q,ll,el]),nl,al,il,sl])),_:1}),(0,a.Wm)(Gl,{tab:"",name:"macOS",os:"macos"},{default:(0,a.w5)((()=>[rl,ul,_l,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("a",tl,[(0,a.Uk)("SDメモリカードフォーマッター"),(0,a.Wm)(n)]),(0,a.Uk)("の最新版をダウンロードします "),cl]),ol,dl,ml,pl,kl]),bl,hl,Ul,gl,Sl,Dl,fl,wl,(0,a._)("ol",null,[Il,(0,a._)("li",null,[vl,(0,a.Uk)("を実行して、brewからF3をインストールします "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("brewを持っていない場合は、"),(0,a._)("a",xl,[(0,a.Uk)("brew.sh"),(0,a.Wm)(n)]),(0,a.Uk)("の指示に従ってインストールしてください")])])]),Fl,Tl]),Bl,Ol,Al])),_:1})])),_:1}),yl],64)}]])},83744:(l,e)=>{e.Z=(l,e)=>{const n=l.__vccOpts||l;for(const[l,a]of e)n[l]=a;return n}}}]);