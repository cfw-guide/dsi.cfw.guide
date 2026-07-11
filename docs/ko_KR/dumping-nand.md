# NAND 덤프하기

이 페이지는 Nintendo DSi의 내부 저장소에 있는 데이터의 복사본인 NAND 백업을 만들기 위한 페이지입니다. 이 기능은 hiyaCFW를 설치할 때 사용하거나, no$gba나 melonDS의 DSi 에뮬레이션 기능을 사용하기 위해 사용할 수도 있습니다.

::: tip

SD 카드가 최소 250MB의 저장 공간을 필요로 하며, 그 이하일 경우 dumpTool에서 에러 메시지가 나올 것입니다.

:::

::: tip

이 작업을 수행하는 것을 강력히 권장합니다. NAND 백업은 향후 벽돌이 됐을 경우 복원 지점으로써 사용할 수 있습니다.

:::

## 섹션 I - SD 카드 설정

::: tip

이 가이드의 다른 섹션에서 이미 dumpTool을 다운로드했다면 이 섹션을 건너뛸 수 있습니다.

:::

1. 최신 버전의 [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)을 다운로드 합니다
2. SD 카드의 아무 곳에나 `dumpTool.nds`를 배치하세요

## 섹션 II - NAND 백업하기

1. Launch `dumpTool` through the menu you have installed
   - If you've used an exploit to launch it, and you're already in dumpTool, ignore this step
   - If Unlaunch is already installed and you we're directed to this page from the [Get Started](get-started.html#section-ii-checking-if-unlaunch-is-already-installed) page, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting
2. 닌텐도 DSi의 <kbd class="face">A</kbd> 버튼을 눌러 NAND 덤프를 시작하세요
   - NAND 덤프는 일반적으로 약 7분정도 소요됩니다
3. NAND 덤프가 완료됐다면, 닌텐도 DSi의 <kbd>START</kbd> 버튼을 눌러 dumpTool을 종료하세요
4. 콘솔의 전원을 종료한 뒤 SD 카드를 기기에 다시 삽입하세요
5. On the SD card, go to where `dumpTool.nds` is placed, and you'll see a new folder called `DT######...` which contains the NAND backup
   - If dumpTool is downloaded from the [Get Started](get-started.html) page, it'll be named `boot.nds`
   - Inside the folder is `nand.bin` which is the backup itself, and `nand.bin.sha1` which is the SHA1 hash of the backup
6. Store the `DT######...` folder somewhere safe, where you won't lose it
   - 가능하다면, 다른 저장 공간에 다양하게 백업을 해 두세요
   - 백업을 정상적으로 했다면, SD카드에서 백업 파일을 제거해도 됩니다

::: warning

`nand.bin` 파일의 SHA1 해시가 `nand.bin.sha1` 파일에 저장된 해시와 일치하지 않을 수 있습니다. 이는 dumpTool이 no$gba 푸터로 알려진 데이터를 SHA1 해시 계산 이후에 붙이기 때문입니다. [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)를 이용해 푸터가 없는 사본을 만들 수 있습니다.

:::

::: tip

Continue to [Choosing a Menu](choosing-a-menu.html)

:::
