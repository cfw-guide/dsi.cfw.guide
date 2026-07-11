# メニューの選択

ゲームを起動するためのメニューの選択肢は3つあります。 必要に応じて選択してください。

- **If you are unsure** (or cannot decide) which one to use, then choose [**TW**i**L**ight Menu++](#twilight-menu).
- If you are only looking to run a DSi-Compatible Flashcart that now shows the "An Error Occurred" screen, choose [Unlaunch Standalone](#unlaunch-standalone).

## [hiyaCFW](installing-unlaunch-and-hiyacfw.html)

NAND アクセスを SD カードにリダイレクトすることで、システム メモリではなく SD カードから DSi システム メニュー、システム アプリ、および DSiWare を実行する、最初で唯一のカスタム ファームウェアです。

可能な限り純正に近い機能のメニューを探している場合は、これをインストールしてください。

### 長所

- 元のニンテンドーDSiメニューを使用しています。 再構成はされていません！
- Games that are launched originally on DS(i) game cards can be launched from the DSi Menu after [creating forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders) for them, and DSiWare can be installed with [NTM](https://github.com/Epicpkmn11/NTM/releases).

### 短所

- As this requires Unlaunch, the console's NAND will be written, so there's a small chance to brick your console!
- DSまたはDSi ゲームのみに制限されています。 以前のコンソールからゲームを起動するには、それらのコンソールをエミュレートするアプリのフォワーダーを作成する必要があります。
- Creating forwarders for games can be time-consuming when compared to just adding them to the SD card.
- 元のDSiメニューの動作により、画面上で39個のアイコンに制限されます。
- メニューUIはカスタマイズできません。

## [**TW**i**L**ight Menu++](installing-twilight-menu.html)

これは、他の自作アプリケーション、市販の DS ゲーム、さまざまな古いシステムのエミュレーターなどを実行できる、オリジナルの Nintendo DSi メニューのアップグレード/置き換えとして開発されました。

### 長所

- DSiメニュー、3DSホームメニュー、およびいくつかのフラッシュカードUIに近い見た目の再構成が含まれています。
- ほとんどの UI は、ユーザーが作成したカスタムテーマをインストールすることでカスタマイズできます。
- DS、DSi、及びGBAのゲームを起動することができます。
- Games from older consoles prior to the GBA can be launched by [installing an add-on.](https://wiki.ds-homebrew.com/twilightmenu/installing-addons)
- hiyaCFWと一緒にインストールすることができます。

### 短所

- DSi メニュー UI には、音楽が短く低品質である (アドオンをインストールすることで回避可能)、スクロール バーをドラッグしたときのスクロールが異なるなど、いくつかの不正確な点があります。
- Wood UIにはスタートメニューなどのいくつかの機能がありません。
- ROM選択メニュー、DSクラシックメニュー、設定メニューなど、メニューを切り替えるのに数秒かかります。

## [AKMenu-Next](installing-akmenu-next.html)

これは、DSi SD カードと互換性があるように作成された、オリジナルの Wood/akmenu フラッシュカード メニューのアップグレード バージョンです。

### 長所

- 最速かつ最も軽量なメニューです。
- TWiLight Menu++のWood UIと比較した場合、メニューから機能(例:スタートメニューとグラフィカル情報/設定メニュー)が欠落することはありません。
- Customizeable by installing user-made custom themes compatible with Wood R4 & AKAIO.
- Games from older consoles including GBA can be launched by [installing a plugin.](https://coderkei.github.io/akmenu-next-docs/guides/plugins/)
- hiyaCFWと一緒にインストールすることができます。

### 短所

- Does not support DSiWare.
- 音楽および効果音は使用できません。
- DSi 拡張ゲームを Unlaunch なしで DSi モードでプレイできるようにするためのドナー ROM を自動設定しないため、手動で設定する必要があります。

## [Unlaunch Standalone](installing-unlaunch-standalone.html)

This does not install a custom menu and relies on the stock DSi Menu, but installing Unlaunch unlocks the DSi including allowing the use of previously blocked flashcarts

### 長所

- Allows for previously blocked DSi-Compatible flashcarts to work (prevents "An Error Occurred" screen for applicable flashcarts)
- Allows for other menus to be installed in the future without requiring a prior exploit
- Still uses stock DSi Menu

### 短所

- Does not install a menu with game loader capabilities
- No additional customisation options
