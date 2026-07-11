# 匯出系統NAND

此頁面用於備份系統NAND，即 Nintendo DSi 主機記憶體上資料的副本。 可以用於設定 hiyaCFW，以及用於 Nintendo DSi 主機模擬的 no$gba 和 melonDS。

::: tip

請確認SD卡至少有250MB的可用儲存空間，否則將在 dumpTool 中遇到錯誤訊息。

:::

::: tip

強烈建議您這樣做。 系統NAND備份可以作為將來萬一發生當機時的還原點。

:::

## 第一部分 - SD卡設定

::: tip

如果您已經從本指南的另一部分下載了dumpTool，則可以略過此部分。

:::

1. 下載最新版本的 [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. 將`dumpTool.nds`放在SD卡上的任何位置

## 第二部分 - 匯出系統NAND

1. 透過您已安裝的選單中啟動`dumpTool`
   - If you've used an exploit to launch it, and you're already in dumpTool, ignore this step
   - 如果您已安裝了 Unlaunch，並且您從[開始使用](get-started.html#section-ii-checking-if-unlaunch-is-already-installed)頁面轉到此頁面，請在啟動主機時按住 <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
2. 按下 Nintendo DSi 上的 <kbd class="face">A</kbd> 按鈕即可開始匯出系統NAND
   - 系統NAND備份通常需要約7分鐘
3. 當系統NAND備份完成後，按下 Nintendo DSi 上的 <kbd class="face">START</kbd> 按鈕退出 dumpTool
4. 將主機電源關閉並將SD卡重新插入至你的裝置
5. 在SD卡上，前往`dumpTool.nds`所在的位置，您將看到一個命名為`DT######...`的新資料夾，其中包含系統NAND的備份
   - 如果是從[開始使用](get-started.html)頁面下載 dumpTool，它將被命名為“boot.nds”
   - 資料夾內有`nand.bin`即是備份本身，以及`nand.bin.sha1`即是備份的SHA1雜湊值
6. 將`DT######...`資料夾儲存在安全的地方，以免遺失
   - 如果可能，請在不同的儲存裝置上進行多次備份
   - 一旦你在其他地方完成了備份，你就可以將其從SD卡中刪除

::: warning

`nand.bin`的SHA1雜湊值與儲存在`nand.bin.sha1`中的雜湊值不符。 這是因為 dumpTool 在計算SHA1雜湊值後，會在`nand.bin`檔案中加入額外的資料（稱為 no$gba 頁腳）。 您可以使用 [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) 建立不含頁腳的副本。

:::

::: tip

Continue to [Choosing a Menu](choosing-a-menu.html)

:::
