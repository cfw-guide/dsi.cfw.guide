# 選擇一種選單

有三個選單可用於啟動遊戲。 請選擇適合您需求的選單。

- **If you are unsure** (or cannot decide) which one to use, then choose [**TW**i**L**ight Menu++](#twilight-menu).
- If you are only looking to run a DSi-Compatible Flashcart that now shows the "An Error Occurred" screen, choose [Unlaunch Standalone](#unlaunch-standalone).

## [hiyaCFW](installing-unlaunch-and-hiyacfw.html)

第一個也是唯一一個將NAND存取重新導向到SD卡的自訂韌體。因此，從SD卡而不是主機記憶體執行 Nintendo DSi 的系統選單以及系統軟體和 DSiWare。

如果您希望獲得盡可能接近原始的體驗，請安裝此選單。

### 優點

- 使用原始的 Nintendo DSi 選單。 無需重新製作！
- Games that are launched originally on DS(i) game cards can be launched from the DSi Menu after [creating forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders) for them, and DSiWare can be installed with [NTM](https://github.com/Epicpkmn11/NTM/releases).

### 缺點

- As this requires Unlaunch, the console's NAND will be written, so there's a small chance to brick your console!
- 僅限於啟動 Nintendo DS 或 DSi 的遊戲。 要啟動舊版主機的遊戲，您需要為模擬這些主機的軟體建立轉發器。
- Creating forwarders for games can be time-consuming when compared to just adding them to the SD card.
- 由於原始 Nintendo DSi 選單的運行方式，螢幕上的圖示限制為39個。
- 選單的使用者介面不可自訂。

## [**TW**i**L**ight Menu++](installing-twilight-menu.html)

這是對原始 Nintendo DSi 選單的升級/替換。允許執行其他自製軟體、零售 Nintendo DS 遊戲、各種舊系統的模擬器等。

### 優點

- 包括 Nintendo DSi 的選單、Nintendo 3DS 的 HOME 選單和一些燒錄卡使用者介面的重新製作。
- 大部分的使用者介面都可以透過安裝使用者製作的自訂主題進行自訂。
- 可以啟動 Nintendo DS、DSi 和 GBA 的遊戲。
- Games from older consoles prior to the GBA can be launched by [installing an add-on.](https://wiki.ds-homebrew.com/twilightmenu/installing-addons)
- 可以與 hiyaCFW 一起安裝。

### 缺點

- Nintendo DSi 選單的使用者介面存在一些不準確之處。例如：音樂被縮短且品質較低（可以透過安裝附加元件來解決），以及拖曳捲軸時滾動方式不同。
- Wood 使用者介面缺少​​一些功能，例如："開始"選單。
- 在選單之間切換可能需要幾秒鐘，例如：ROM選擇選單、DS懷舊選單和/或設定選單。

## [AKMenu-Next](installing-akmenu-next.html)

這是原始 Wood/akmenu 燒錄卡選單的升級版本，與 Nintendo DSi 的SD卡相容。

### 優點

- 最快及最輕的選單。
- 與 TWLMenu++ 的 Wood 使用者介面相比，選單中沒有缺少任何功能（例如：開始選單、圖形資訊/設定選單）。
- Customizeable by installing user-made custom themes compatible with Wood R4 & AKAIO.
- Games from older consoles including GBA can be launched by [installing a plugin.](https://coderkei.github.io/akmenu-next-docs/guides/plugins/)
- 可以與 hiyaCFW 一起安裝。

### 缺點

- Does not support DSiWare.
- 無法使用音樂和/或音效。
- 不會自動設定"donor ROM"，以便 Nintendo DSi 增強型遊戲可以在沒有取消啟動的情況下在 DSi 模式下遊玩，而必須手動設定。

## [Unlaunch Standalone](installing-unlaunch-standalone.html)

This does not install a custom menu and relies on the stock DSi Menu, but installing Unlaunch unlocks the DSi including allowing the use of previously blocked flashcarts

### 優點

- Allows for previously blocked DSi-Compatible flashcarts to work (prevents "An Error Occurred" screen for applicable flashcarts)
- Allows for other menus to be installed in the future without requiring a prior exploit
- Still uses stock DSi Menu

### 缺點

- Does not install a menu with game loader capabilities
- No additional customisation options
