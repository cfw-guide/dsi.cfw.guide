# 安裝 Unlaunch

您即將安裝 Unlaunch，這是一種永久性的引導程式碼漏洞，它安裝到 Nintendo DSi 主機本身上，允許在啟動時完全控制主機，因此允許自製應用程式完全存取硬件，而不受 Nintendo DSi 主機軟體或 DSiWare 軟體的限制。

::: danger

如果您尚未執行此操作，請按照[匯出系統NAND](dumping-nand.html)進行操作。 A NAND backup + [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) (or a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod), provided you know how to solder) would allow you to restore this backup in case the console gets bricked afterwards.

:::

::: danger

安裝或解除安裝 Unlaunch 雖然安全，會寫入主機的系統NAND，因此有很小的幾率會將主機當機！

:::

::: warning

如果您無法使用電腦，或者您的電腦執行的作業系統是 ChromeOS，請不要安裝 Unlaunch。 需要一台個人電腦（執行 Windows、Linux 或 macOS）來確認所使用的SD卡格式與 Unlaunch 相容。

:::

::: warning

Unlaunch 與 Nintendo DSi 的開發版主機不相容。

:::

## 第一部分 - SD卡設定

1. Download the latest version of [Safe Unlaunch installer](https://github.com/edo9300/unlaunch-installer/releases/latest/download/unlaunch-installer.dsi)
2. Place `unlaunch-installer.dsi` anywhere on your SD card

## Section II - Updating DSi system version

::: tip

If Unlaunch is already installed and you are looking to update or uninstall Unlaunch, skip to Section III

:::

1. In the DSi Menu, launch the System Settings application (the icon is gray and has a white wrench)
   - The version will be shown on the bottom-right of the top screen
   - If the version is `Ver 1.4.2`, proceed with performing a system update
   - If the version is _not_ `Ver 1.4.2`, go straight to [Section III](#section-iii-installing-updating-unlaunch)
2. Touch the number `4` to go to the fourth page
3. Touch `System Update`
   - It is the third option if your console isn't in your native language
4. Touch `Yes` when asked to connect to the internet and update
   - It is the left-side option if your console isn't in your native language
   - If the version is already up to date, go straight to [Section III](#section-iii-installing-updating-unlaunch)
5. Touch the `Next` button
   - It is the right-side option if your console isn't in your native language
6. Touch the `I Accept` button
   - It is the top option if your console isn't in your native language
7. Touch the `OK` button
   - It is the bottom right-side option if your console isn't in your native language
8. Wait for the system to update, and reboot when finished

## Section III - Installing/Updating Unlaunch

1. Open the menu you have installed (**TW**i**L**ight Menu++ or AKMenu-Next)
   - If this is your first time installing Unlaunch, relaunch the menu through the [exploit that you used](launching-the-exploit.html)
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting
2. In the menu where the icons are listed, launch `Safe Unlaunch installer` (listed as `unlaunch-installer.dsi` depending on which menu is used and/or how it's displayed)
3. Press the <kbd class="face">A</kbd> button after the `WARNING` message appears
   - If the battery LED is red, it'll tell you to plug in the console. Select `Yes` to continue after plugging it in
4. If you want to change the default background, select `[Custom background]` and press <kbd class="face">A</kbd> to select the one you want to use
   - Three custom backgrounds are included, but you can add more into a folder called `backgrounds` on the SD card root (create the folder if it doesn't exist)
5. If you want to keep both the DSi splash (with health and safety message) and the sound in the DSi system menu, select `Enable sound and splash` and press <kbd class="face">A</kbd> to turn it on
6. If Unlaunch is already installed, select the `Uninstall unlaunch` or `Restore launcher tmd` option, and press <kbd class="face">A</kbd> once it's done
   - If you only want to **uninstall** Unlaunch, you can stop here
7. Select the `Install unlaunch` option, and press the <kbd class="face">A</kbd> button
8. Press the <kbd class="face">A</kbd> button once installation is done
9. Press <kbd class="face">POWER</kbd> to reboot your system

If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.

- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

## Section IV - Post-Unlaunch configuration

Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed to launch whatever you want.

1. Power on your console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd>
   - This should launch the Unlaunch Filemenu
   - If nothing is listed, or if only the NAND contents are listed (even after scrolling down), then you'll need to [reformat the SD card](sd-card-setup.html)
2. Navigate to `OPTIONS`, and look at the available options
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> is hardcoded to launch into Unlaunch's menu, and as such cannot be changed
   - The `NO BUTTON` (Which autoboots) and `BUTTON A / B / X / Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. You can select any DSiWare, homebrew (including whichever menu you installed), the Slot-1 card, wifiboot, or Unlaunch's Filemenu
     - For the original DSi Menu, select `Launcher`
     - For TWiLight Menu++, select `TWiLight Menu++` (Listed as `sdmc:/BOOT.NDS` on the bottom screen)
     - For AKMenu-Next, select `AKMenu-Next` (Listed as `sdmc:/akmenu-next.dsi` on the bottom screen)
     - For hiyaCFW, select `hiyaCFW` (Listed as `sdmc:/hiya.dsi` on the bottom screen)
   - `LOAD ERROR` is what your DSi will load if loading what you have set fails, such as the SD card not being inserted
3. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## Section V - Cleaning up your SD card

::: tip

This section is optional and only serves for keeping your SD card tidy of files you won't need.

:::

:::: tabs

:::tab default Memory Pit

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
- Rename `tip.bin` back to `pit.bin`, and leave it intact
- You can now restore the `DCIM` folder that was on the root of your SD card
- Delete the `unlaunch-installer.dsi` file from your SD card

:::

:::tab Flipnote Lenny

- Delete the `800031_104784BAB6B57_000.ppm` and `T00031_1038C2A757B77_000.ppm` files from inside the following folders:
  - `sd:/private/ds/app/4B47554A/001` (Japan)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
  - You can also delete the entire folders for the regions besides your own
- Delete the `unlaunch-installer.dsi` file from your SD card

:::
