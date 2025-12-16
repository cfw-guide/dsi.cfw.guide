# Installing Unlaunch + hiyaCFW

You are about to install Unlaunch, a permanent bootcode exploit which gets installed onto the DSi console itself, allowing full control of the console on boot, and as a result, allows homebrew applications full access to the hardware without restrictions from DSi system apps or DSiWare titles.

Installing Unlaunch is required in order to use hiyaCFW.

::: danger

在接下来的步骤前，请按照 [Dumping NAND](dumping-nand.html)的指引，将 NAND固件进行备份。 A NAND backup + [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) (or a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod), provided you know how to solder) would allow you to restore this backup in case the console gets bricked afterwards.

:::

::: danger

Installing or uninstalling Unlaunch, while safe, writes to the console's NAND, so there's a small chance to brick your console!

:::

::: warning

If you do not have access to a PC, or if your PC is running ChromeOS, then please do not install Unlaunch and hiyaCFW. A PC (running Windows, Linux, or macOS) is required to ensure the SD Card used is formatted in a way compatible with Unlaunch.

:::

::: warning

Unlaunch 与 Nintendo DSi 开发机不兼容。

:::

## 第一节 - SD 卡设置

1. Download the latest version of [Safe Unlaunch installer](https://github.com/edo9300/unlaunch-installer/releases/latest/download/unlaunch-installer.dsi)
2. Place `unlaunch-installer.dsi` on the root of your SD card
3. Rename `unlaunch-installer.dsi` to `boot.nds`

## Section II - Updating DSi system version

::: tip

If Unlaunch is already installed, skip to Section IV

:::

1. In the DSi Menu, launch the System Settings application (the icon is gray and has a white wrench)
   - The version will be shown on the bottom-right of the top screen
   - If the version is `Ver 1.4.2`, proceed with performing a system update
   - If the version is _not_ `Ver 1.4.2`, go straight to [Section III](#section-iii-installing-unlaunch)
2. Touch the number `4` to go to the fourth page
3. Touch `System Update`
   - It is the third option if your console isn't in your native language
4. Touch `Yes` when asked to connect to the internet and update
   - It is the left-side option if your console isn't in your native language
   - If the version is already up to date, go straight to [Section III](#section-iii-installing-unlaunch)
5. Touch the `Next` button
   - It is the right-side option if your console isn't in your native language
6. Touch the `I Accept` button
   - It is the top option if your console isn't in your native language
7. Touch the `OK` button
   - It is the bottom right-side option if your console isn't in your native language
8. Wait for the system to update, and reboot when finished

## Section III - Installing Unlaunch

1. Open the installer by re-running the [exploit that you used](launching-the-exploit.html)
2. Press the <kbd class="face">A</kbd> button after the `WARNING` message appears
   - If the battery LED is red, it'll tell you to plug in the console. Select `Yes` to continue after plugging it in
3. If you want to change the default background, select `[Custom background]` and press <kbd class="face">A</kbd> to select the one you want to use
   - Three custom backgrounds are included, but you can add more into a folder called `backgrounds` on the SD card root (create the folder if it doesn't exist)
4. If you want to keep both the DSi splash (with health and safety message) and the sound in the DSi system menu, select `Enable sound and splash` and press <kbd class="face">A</kbd> to turn it on
5. If Unlaunch is already installed, select the `Uninstall unlaunch` or `Restore launcher tmd` option, and press <kbd class="face">A</kbd> once it's done
6. Select the `Install unlaunch` option, and press the <kbd class="face">A</kbd> button
7. Press the <kbd class="face">A</kbd> button once installation is done
8. Press <kbd class="face">POWER</kbd> to reboot your system

If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.

- If you see a black screen or if nothing is listed, please take a look at the [Troubleshooting](troubleshooting.html) page

## Section IV - Installing hiyaCFW

Go to [this page](https://wiki.ds-homebrew.com/hiyacfw/installing) to install hiyaCFW.

## Section V - Cleaning up your SD card

::: tip

这些步骤并不是必要的，但假如你需要回收一些SD卡存储空间可以进行。

:::

:::: tabs

:::tab default Memory Pit

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
- Rename `tip.bin` back to `pit.bin`, and leave it intact
- You can now restore the `DCIM` folder that was on the root of your SD card
- Delete the `boot.nds` file from your SD card

:::

:::tab Flipnote Lenny

- 在下列路径里找到`800031_104784BAB6B57_000.ppm`和`T00031_1038C2A757B77_000.ppm` 文件并删除他们。
  - `sd:/private/ds/app/4B47554A/001` (日区)
  - `sd:/private/ds/app/4B475545/001` (美区)
  - `sd:/private/ds/app/4B475556/001` (欧洲、澳大利亚)
  - 如果你的区域不是上述任何一个，你也可以删除整个文件夹而不仅是删除你的区域相关文件。
- Delete the `unlaunch-installer.dsi` file from your SD card

:::
