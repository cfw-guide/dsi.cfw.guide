---
---

# DSiware备份

## 首先需要…
- 最新版本的 [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - 下载压缩包，解压并将 `GodMode9i.nds` 放置在你 SD 卡的任意位置

## Nintendo DSi - 说明

### Section I - Identifying the desired DSiWare
1. Launch GodMode9i and select `[nand:] SYSNAND`
1. Navigate to the `title` folder
1. Choose the folder according to whichever category you're looking for
   - `00030004`: Standard DSiWare
   - `00030005`: Pre-installed Fun Tools
   - `0003000f`: System Data (non-DSiWare files, can't be run)
   - `00030015`: System Base Tools
   - `00030017`: Launcher
1. Once you have chosen which type of DSiWare you would like to extract, enter a subfolder, and then enter `content`
1. There should now be an `.app` file visible. Select the file, and choose `Show NDS file info`. This will tell you if it's the DSiWare that you are looking for
   - If it is not the DSiWare title that you were looking for, continue searching in other folders until you find it
   - Files in `0003000f` cannot have their NDS file info viewed because they are not launchable DSiWare and do not contain a valid banner

### Section II - Extracting the DSiWare
1. Highlight the `.app` file, then press <kbd class="face">Y</kbd> to add it to the clipboard
1. Navigate your SD card to the directory where you'd like to place the dumped DSiWare title
1. Press <kbd class="face">Y</kbd> again to paste the DSiWare title in the directory you are currently navigating
   - You can change the name of the file after pasting it by pressing <kbd class="face">X</kbd> while holding <kbd class="R">R</kbd>
   - Repeat this for all files you wish to copy to the same directory

You should now see the DSiWare title in TWiLight Menu++ or the Unlaunch Filemenu.

### Section III - Extracting the save file (optional)
1. In the same folder as `content` for your specified DSiWare, there will be a folder named `data`
1. Inside the `data` folder is the save file. Copy this file to your SD card in the same way you did for the DSiWare title itself
   - Unlaunch and nds-bootstrap use the `.pub` and `.prv` file extensions for DSiWare save files. If your DSiWare save file was originally titled `public.sav`, use the `.pub` extension, and if the save file was originally titled `private.sav`, use the `.prv` extension
   - If you wish to use the DSiWare save file with TWiLight Menu++, make sure to place it in the `saves` folder at the location of your ROM
