# 시작하기

We'll begin with downloading some homebrew tool(s), in preparation for the exploit steps.

## 준비물

- 다운로드한 파일을 SD 카드에 복사할 수 있는 수단
- 압축 해제를 할 수 있는 프로그램. 예를 들어, [7-Zip](https://www.7-zip.org/) (윈도우), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (크롬북)
  - WinRAR는 사용하지 않는 것을 추천합니다. 가끔 파일이 깨지는 경우가 있습니다.
  - 윈도우 11을 사용하는 경우, 윈도우 익스플로러의 기본 압축 해제 프로그램을 사용하지 마세요. 파일 명이 너무 길거나 적합하지 않다며 오류 메시지가 나오는 경우가 있습니다.
- A good quality name-brand SD card (or name-brand MicroSD with SD adapter). **This is important as you may encounter compatibility issues and loss of data using an off-brand or counterfeit SD card!** For more information, [please see this article](https://www.flashcarts.net/microsd-fakes) on fake MicroSD cards, the information it has also applies to full size SD cards.

## 섹션 I - 준비 작업

::: warning

Ensure your SD card is [formatted correctly with this guide](sd-card-setup.html). You may encounter compatibility problems with homebrew or an SD Card with the wrong filesystem by skipping this step.

:::

1. SD카드를 컴퓨터에 삽입해 주세요
2. Download the latest release of [dumpTool](https://dsi.cfw.guide/assets/files/dumptool/boot.nds) as `boot.nds`
3. Copy the `boot.nds` file to the root of your SD card
   - Make sure it is specifically named `boot.nds` instead of `boot (1).nds` or any other name

::: tip

SD카드의 "루트"가 무슨 뜻인가요? [이 이미지를 참고하세요](/assets/images/sdroot/en_US.png)

:::

## 섹션 II - Unlaunch가 이미 설치되어있는지 확인

Unlaunch is a bootcode exploit which gets installed onto the DSi console itself, allowing full control of the console on boot, and as a result, allows homebrew applications full access to the hardware without restrictions from DSi system apps or DSiWare titles.

몇몇 DSi 콘솔은 Unlaunch가 설치된 채로 중고/리퍼비시 상품으로 판매되고 있습니다.

To check, press the <kbd class="face">POWER</kbd> button and immediately hold the <kbd class="face">A</kbd> + <kbd class="face">B</kbd> buttons.

- 만약 `Nocash Unlaunch.dsi` 라는 메뉴가 상단 화면에 나온다면, Unlaunch가 이미 설치되어 있다는 뜻입니다. [NAND 덤프하기](dumping-nand.html) 페이지에서 계속 진행하세요.
- 만약 DSi가 일반적인 DSi 메뉴가 나오면서 부팅된다면, 섹션 III로 이동하세요.

## Section III - Memory Pit

Memory Pit is an exploit utilizing the DSi Camera, compatible with all firmware versions.

If using the exploit without installing Unlaunch, compatibility with some homebrews could be limited. If you encounter issues with DSi homebrews and/or the camera function in DSi-Enhanced games, you can return to this guide and set up an [alternate exploit](alternate-exploits.html) instead.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::
