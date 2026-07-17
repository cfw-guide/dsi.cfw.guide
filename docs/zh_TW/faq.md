# 常見問題

## 我應該進行主機更新嗎？

除非您知道已購買 DSiWare，否則**不建議**更新您的 Nintendo DSi 主機。 雖然您仍然可以遵循此指南，但更新的唯一好處是能夠訪問 Nintendo DSi 商店重新下載已購買的軟體。 所有其他優點，例如 Nintendo DSi 照相館軟體中的 Facebook 功能，都不再可用或不足以彌補缺點：

- 眾所周知，安裝主機更新通常會**當機並無法正常啟動**，其頻率與安裝 Unlaunch 的頻率大致相同
- 較舊的漏洞不再可用，如果您無法使用建議的漏洞，則可能需要使用舊漏洞
- 燒錄卡的相容性降低，但如果您安裝 Unlaunch，則可以繞過此問題

The only exception is an Unlaunch installation on a DSi with System Version 1.4.2 – this version is currently unsupported by Safe Unlaunch Installer (due to a bug), and requires updating your DSi console to 1.4.5.

## 哪一個是最好的漏洞？

整體而言，Unlaunch 是 Nintendo DSi 的最佳漏洞，唯一的缺點是安裝時會有輕微的當機風險。 一般情況下建議使用 Memory Pit 來安裝 Unlaunch。 如果您想避免任何風險，建議使用 Flipnote Lenny，因為它在自製軟體中的問題比 Memory Pit 更少，同時同樣安全且易於刪除。 以下列出了每個漏洞的優缺點：

### Memory Pit

優點:

- 快速簡便於使用
- 沒有損壞主機的風險，解除安裝就像取出SD或刪除一個檔案一樣簡單
- 與所有 Nintendo DSi 主機相容，除非它們的相機損壞且尚未完成相機教程

缺點:

- 每次存取自製軟體時都需要進入 Nintendo DSi 照相館軟體
- 由於 WRAM 僅對 ARM7 CPU 開放，因此與某些 DSi 模式軟體和自製軟體不相容
- 在自製軟體中，對 Slot-1（DS 遊戲卡插槽）的存取被阻止
- DSP的存取被阻止，會影響 GBARunner2 的聲音品質變差
- 安裝 Memory Pit 後，無法在 Nintendo DSi 照相館軟體中查看SD卡上的照片，因為這是漏洞的觸發因素
  - 安裝 Memory Pit 後查看SD卡照片的唯一方法是使用 **TW**i**L**ight Menu++ 透過 nds-bootstrap（v0.61.3 或更高版本）啟動已匯出的 Nintendo DSi 照相館軟體

### stylehax

優點:

- 與 Memory Pit 相比，與 DSi 模式軟體和自製軟體的相容性更好
- 簡便於使用
- 不存在損壞主機的風險
- 可在相機損壞的主機上使用
- GBARunner2 中的聲音品質更好

缺點:

- 需要網際網路存取
- 每次存取自製軟體時都需要進入 Nintendo DSi 瀏覽器，比 Memory Pit 需要更多時間
- 在自製軟體中，對 Slot-1（DS 遊戲卡插槽）的存取被阻止

### Flipnote Lenny

優點:

- 與 Memory Pit 相比，與 DSi 模式軟體和自製軟體的相容性更好
- 沒有損壞主機的風險，解除安裝就像取出SD或刪除一個資料夾一樣簡單
- 可在相機損壞的主機上使用
- GBARunner2 中的聲音品質更好

缺點:

- 每次存取自製軟體時都需要進入 Flipnote Studio，比 Memory Pit 需要更多時間
- 在自製軟體中，對 Slot-1（DS 遊戲卡插槽）的存取被阻止

### Unlaunch

優點:

- 允許在系統啟動時立即載入自製軟體和 DSiWare，並帶有可選的按鈕熱鍵
- 完全存取系統並不受任何限制，包括：
  - 存取 Slot-1 卡插槽允許匯出遊戲卡並載入不相容的燒錄卡
  - GBARunner2 中的聲音品質更好
- 移除 Nintendo DSi 增強/專屬遊戲卡上的區域鎖定
- 防止 Nintendo DSi 主機出現大多數當機
- Nintendo DSi 增強遊戲無需 Donor ROM 即可在 DSi 模式下執行
- 較舊的自製軟體可以透過 nds-bootstrap-hb 執行

缺點:

- 安裝時會有輕微的**當機**風險
- 如果您決定[解除安裝](uninstalling-unlaunch.html)，則可能會有更高的當機風險
- 與開發主機不相容

## 破解我的主機會失去任何功能嗎？

如果您安裝 Unlaunch 或使用 Flipnote Lenny，則不會遺失任何功能。 如果您使用 Memory Pit，您將無法使用 Nintendo DSi 照相館查看SD卡上的照片，除非您使用 **TW**i**L**ight Menu++ 透過 nds-bootstrap 啟動已匯出的 Nintendo DSi 照相館軟體。

- 如果要在從 Nintendo DSi 選單啟動 Nintendo DSi 照相館時重新獲得查看SD卡照片的技能，建議安裝 Unlaunch 或使用其他漏洞，然後刪除 Memory Pit 的`pit.bin`檔案
  - 如果同一資料夾中存在`tip.bin`，則將其重新命名回`pit.bin`

## 如何遊玩已匯出的 Nintendo DS 遊戲卡？

在主機上玩已匯出的遊戲卡需要使用燒錄卡或 nds-bootstrap，一個程序透過將 Slot-1 卡插槽的讀取和寫入重新導向到內部SD卡，可以從內部SD卡玩遊戲。

- With TWiLight Menu++ & AKMenu-Next you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using these menus are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. 簡單來說，您可以直接放下遊戲ROM檔案並進行遊戲，無需任何設定。 沒有39個軟體的限制，也不需要 hiyaCFW 或 Unlaunch，並且對SD卡可用儲存空間沒有限制
- hiyaCFW 使用者可以使用 DS-Homebrew Wiki 上的 [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) 指南為 SDNAND 的 Nintendo DSi 選單建立轉發器，不過有一些限制。 軟體數量有39個的硬性限制，而且製作起來不如使用 TWiLight Menu++ 的方便
  - 如果您沒有 hiyaCFW 並且想要使用轉發器，您可以按照 DS-Homebrew Wiki 上的 [hiyaCFW 安裝指南](https://wiki.ds-homebrew.com/hiyacfw/installing)進行操作

## 如何更新自製軟體？

- **Unlaunch** - 請按照[安裝 Unlaunch](installing-unlaunch.html) 頁面上的說明進行操作
  - 在執行此操作之前，您**無需**解除安裝 Unlaunch
- **hiyaCFW** - 從[最近更新版本](https://github.com/RocketRobz/hiyaCFW/releases)覆蓋SD卡根目錄下的`hiya.dsi`
- **TWiLight Menu++** - 按照 [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi) 上的說明進行操作
- **AKMenu-Next** - Follow the instructions on the [AKMenu-Next Documentation](https://coderkei.github.io/akmenu-next-docs/guides/akmenu-next/#__tabbed_1_5)
- **nds-bootstrap** - 將`nds-bootstrap-hb-release.nds`和`nds-bootstrap-release.nds`複製至SD卡根目錄下的`_nds`資料夾
  - 如果您使用 TWiLight Menu++，則很有可能最新的 nds-bootstrap 版本包含在 TWiLight Menu++ 中
- **GodMode9i、dumpTool、Forwarder3-DS 等** - 按照說明下載並進行操作

其他自製軟體可能會使用其他方法來進行更新。

## 我是新手或想重新設定。 應該從哪裡開始？

- 如果您尚未破解主機或希望更新主機上的 Unlaunch，我們建議您從指南的開頭開始並按照頁面進行操作。 請確認閱讀首頁上的所有內容
- 如果您安裝了最新版本的 Unlaunch，按照 [TWiLight Menu++ 安裝指南](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)在您的主機上設定 TWiLight Menu++

## 如何移除「家長或監護人設定的使用限制」？

- The [mkey generator](https://mkey.nintendohomebrew.com) can generate the code required to remove parental controls

## 我可以變更 Nintendo DSi 主機的地區嗎？

可以，根據您想要變更的內容，有幾種不同的方法：

- 最安全並最簡單的方法是直接安裝 TWiLight Menu++，可以使用任何官方語言，而且不需要修改系統NAND
- 如果您想要實際變更系統區域並使用中 hiyaCFW，首先開啟設定選單，然後變更區域設定（無法使用中國/韓國地區的系統NAND）
  - 如果觸控輸入已破壞了，將區域設定恢復為初始設定，然後您可以為亞洲版 Nintendo DSi 主機使用 Yoti 的 [hiyalang](https://github.com/Yoti/cli_hiyalang/releases)。 對於美版 Nintendo DSi 主機，請使用[此版本的 hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- 最後，如果您想變更實際系統NAND上的區域，您可以使用 Mighty Max 的 [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## Lazy DSi Downloader 發生了什麼事？ 如果沒有它如何安裝自訂韌體？

Lazy DSi Downloader 是一個程式，基本上允許您透過下載並將必要的檔案和資料夾放在SD卡上來略過手動設定過程。 不過，由於此程式的編程和分發方式，許多使用者遇到了各種問題，最終不得不進行手動設定，因為這比修復導致問題的原因更快和/或更容易。

為了避免更多使用者遇到這些問題，我們不再建議使用 Lazy DSi Downloader，而是建議進行[手動設定](get-started.html)。

- 如果您透過推薦使用 Lazy DSi Downloader 的第三方連結到此指南，那麼您所遵循的說明很可能已經過時了。 請使用此指南，因為此指南由這些專案的開發人員不斷維護。

## 我應該使用哪種SD卡？

- 應該從值得信賴的品牌購買SD卡
- 全尺寸的SD卡或附轉接器的microSD都可以使用
- 1GB到2TB之間的任何容量都可以。 對於一般用途，8GB就足夠了
  - 某些軟體（例如 hiyaCFW）在SD卡容量較大的情況下可能會出現更長的載入時間
- 建議使用 Speed Class 8 或更高
- Read the [Counterfeit MicroSD Cards Guide](https://www.flashcarts.net/microsd-fakes) to ensure you do not end up with a counterfeit SD/MicroSD card

## 我可以在其他主機上使用我 Nintendo DSi 的SD卡嗎？

一般來說可以的，但有兩個例外：

- hiyaCFW 只能在已設定的主機上執行
- 即使您使用 nds-bootstrap 或燒錄卡，在嘗試使用其他主機上網時，線上 Nintendo DS 遊戲中的好友代碼也會被重置

## 設定自製軟體後如何切換到新的SD卡？

使用[SD卡設定](sd-card-setup.html)說明格式化新的SD卡，然後將資料從舊的SD卡移動至新的SD卡。

## 設定自製軟體後及即使沒有插入SD卡，我還能正常使用我的主機嗎？

可以。 如果您沒有安裝 Unlaunch，您的主機將保持完全未修改狀態。 但如果您有安裝 Unlaunch，則可能需要[配置 Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) 以在指定條件下自動啟動原始 Nintendo DSi 選單。

## [Unlaunch 頁面](https://problemkaputt.de/unlaunch.htm)表示版本2.0尚不安全。 我應該使用以前的版本嗎？

從2019年發布版本2.0以來，Unlaunch 頁面尚未更新。 大多數使用者在使用此版本時沒有遇到任何問題，因此版本被認為是安全的。

## 如何執行已匯出的 DSiWare？

建議的方法是使用 TWiLight Menu++ 直接啟動此軟體，因為拖放方法簡單，並且沒有任意限制。 當 nds-bootstrap 被設定為啟動方法時，同時還可以獲得作弊和螢幕截圖的好處，以及遊戲內選單提供的任何其他好處。

但是，對於少數不相容的軟體，您可以使用 [NTM](https://github.com/Epicpkmn11/NTM/releases) 將軟體安裝至主機記憶體或 [hiyaCFW 的 SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing) 上。 除了缺乏上述好處之外，還有39個軟體的限制，其大小不能超過128 MiB/1,024個區域。 對於 SysNAND，寫入至內部系統NAND時也存在非常小的導致主機當機的風險。
