# Unlaunch 설치하기

You are about to install Unlaunch, a permanent bootcode exploit which gets installed onto the DSi console itself, allowing full control of the console on boot, and as a result, allows homebrew applications full access to the hardware without restrictions from DSi system apps or DSiWare titles.

::: danger

만약 [NAND 덤프하기](dumping-nand.html)를 하지 않았다면, 이걸 먼저 해주세요. A NAND backup + [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) (or a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod), provided you know how to solder) would allow you to restore this backup in case the console gets bricked afterwards.

:::

::: danger

Installing or uninstalling Unlaunch, while safe, writes to the console's NAND, so there's a small chance to brick your console!

:::

::: warning

PC에 접근할 수 없거나, PC가 ChromeOS를 쓰고 있다면, Unlaunch를 설치하지 마세요. A PC (running Windows, Linux, or macOS) is required to ensure the SD Card used is formatted in a way compatible with Unlaunch.

:::

::: warning

Unlaunch는 Nintendo DSi 개발 콘솔과 호환되지 않습니다.

:::

## 섹션 I - SD 카드 설정

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

지금 시점에서 Unlaunch의 파일메뉴 화면이 보이지 않는다면, 성공적으로 닌텐도 DSi에 커펌을 설치한것입니다.

- 검은색 화면이 보인다면, [문제 해결](troubleshooting.html) 페이지를 참조해 주세요

## Section IV - Post-Unlaunch configuration

Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed to launch whatever you want.

1. <kbd class="face">A</kbd>와 <kbd class="face">B</kbd>를 누르면서 DSi 본체의 전원을 켜세요
   - 이는 Unlaunch의 파일 메뉴로 실행됩니다
   - If nothing is listed, or if only the NAND contents are listed (even after scrolling down), then you'll need to [reformat the SD card](sd-card-setup.html)
2. `OPTIONS`로 이동 후, 가능한 옵션을 확인해 보세요
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> 는 Unlaunch의 메뉴로 들어가기 위해 하드코딩 되어 있어, 수정할 수 없습니다
   - The `NO BUTTON` (Which autoboots) and `BUTTON A / B / X / Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. You can select any DSiWare, homebrew (including whichever menu you installed), the Slot-1 card, wifiboot, or Unlaunch's Filemenu
     - 일반적인 DSi 메뉴를 설정하고 싶으면, `Launcher`를 선택하세요
     - For TWiLight Menu++, select `TWiLight Menu++` (Listed as `sdmc:/BOOT.NDS` on the bottom screen)
     - For AKMenu-Next, select `AKMenu-Next` (Listed as `sdmc:/akmenu-next.dsi` on the bottom screen)
     - For hiyaCFW, select `hiyaCFW` (Listed as `sdmc:/hiya.dsi` on the bottom screen)
   - `LOAD ERROR`는 DSi가 필요한 세팅을 로딩할 때 실패한 경우입니다. 예를 들어 SD카드가 삽입되어 있지 않을 수 있습니다
3. `SAVE & EXIT`을 눌러 설정을 저장하고, DSi를 종료하세요

## Section V - Cleaning up your SD card

::: tip

이 섹션은 선택이며 불필요한 파일을 지워 SD카드를 정리하는데 사용됩니다.

:::

:::: tabs

:::tab default Memory Pit

- SD카드에서 `sd:/private/ds/app/484E494A/pit.bin`를 지우세요
- `tip.bin`을 `pit.bin`으로 바꾼 뒤에, 그대로 두세요
- 이제 SD카드의 루트에 `DCIM` 폴더를 복구할 수 있습니다
- Delete the `unlaunch-installer.dsi` file from your SD card

:::

:::tab Flipnote Lenny

- 해당하는 폴더 안에 있는 `800031_104784BAB6B57_000.ppm`와 `T00031_1038C2A757B77_000.ppm`를 지우세요
  - `sd:/private/ds/app/4B47554A/001` (Japan)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
  - 자신 지역 외의 다른 모든 폴더를 삭제해도 무방합니다
- Delete the `unlaunch-installer.dsi` file from your SD card

:::
