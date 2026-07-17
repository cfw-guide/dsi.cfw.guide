# 匯出遊戲卡

此部分於使用 GodMode9i 匯出遊戲卡，以便可以透過 nds-bootstrap 在模擬器、燒錄卡或SD卡上進行遊戲。

## 需求

- 您想要匯出的遊戲卡
- 已安裝 [Unlaunch](installing-unlaunch.html) 的 Nintendo DSi 主機

## 使用說明

### 第一部分 - SD卡設定

1. 下載最新版本的 [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)
2. 從 GodMode9i 的壓縮檔案中解壓縮`GodMode9i.nds`並將其放在SD卡上的任何位置

### 第二部分 - Nintendo DSi 使用說明

1. 啟動 GodMode9i
2. 確認遊戲卡已插入至主機
3. 在 GodMode9i 中選擇「NDS GAMECARD」選項
4. 選擇想要匯出的內容
   - 遊戲ROM中的「Trimmed」選項將匯出一個較小的檔案，可以節省SD卡的儲存空間。但它們不適用於大多數補丁，例如 ROM hack
5. 對您想要匯出的所有遊戲卡，重複第2至4步驟

::: tip

已匯出的遊戲卡將在`sd:/gm9i/out`中可以找到。

:::
