# Installing Unlaunch + hiyaCFW

You are about to install Unlaunch, a permanent bootcode exploit which gets installed onto the DSi console itself, allowing full control of the console on boot, and as a result, allows homebrew applications full access to the hardware without restrictions from DSi system apps or DSiWare titles.

Installing Unlaunch is required in order to use hiyaCFW.

::: danger

만약 [NAND 덤프하기](dumping-nand.html)를 하지 않았다면, 이걸 먼저 해주세요. A NAND backup + [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) (or a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod), provided you know how to solder) would allow you to restore this backup in case the console gets bricked afterwards.

:::

::: danger

Installing or uninstalling Unlaunch, while safe, writes to the console's NAND, so there's a small chance to brick your console!

:::

::: warning

If you do not have access to a PC, or if your PC is running ChromeOS, then please do not install Unlaunch and hiyaCFW. A PC (running Windows, Linux, or macOS) is required to ensure the SD Card used is formatted in a way compatible with Unlaunch.

:::

::: warning

Unlaunch는 Nintendo DSi 개발 콘솔과 호환되지 않습니다.

:::

## 섹션 I - SD 카드 설정

1. Download the latest version of [Safe Unlaunch installer](https://github.com/edo9300/unlaunch-installer/releases/latest/download/unlaunch-installer.dsi)
2. Delete `boot.nds` from the root of your SD card
3. Place `unlaunch-installer.dsi` on the root of your SD card
4. Rename `unlaunch-installer.dsi` to `boot.nds`

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

지금 시점에서 Unlaunch의 파일메뉴 화면이 보이지 않는다면, 성공적으로 닌텐도 DSi에 커펌을 설치한것입니다.

- If you see a black screen or if nothing is listed, please take a look at the [Troubleshooting](troubleshooting.html) page

## Section IV - Installing hiyaCFW

Go to [this page](https://wiki.ds-homebrew.com/hiyacfw/installing) to install hiyaCFW.

## Section V - Cleaning up your SD card

::: tip

이 섹션은 선택이며 불필요한 파일을 지워 SD카드를 정리하는데 사용됩니다.

:::

:::: tabs

:::tab default Memory Pit

- SD카드에서 `sd:/private/ds/app/484E494A/pit.bin`를 지우세요
- `tip.bin`을 `pit.bin`으로 바꾼 뒤에, 그대로 두세요
- 이제 SD카드의 루트에 `DCIM` 폴더를 복구할 수 있습니다
- Delete the `boot.nds` file from your SD card

:::

:::tab Flipnote Lenny

- 해당하는 폴더 안에 있는 `800031_104784BAB6B57_000.ppm`와 `T00031_1038C2A757B77_000.ppm`를 지우세요
  - `sd:/private/ds/app/4B47554A/001` (Japan)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
  - 자신 지역 외의 다른 모든 폴더를 삭제해도 무방합니다
- Delete the `unlaunch-installer.dsi` file from your SD card

:::
