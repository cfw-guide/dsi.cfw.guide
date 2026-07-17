# NAND 백업 복구

::: danger

경고! 이건 _**위험합니다**_. 여기서 안내한 모든 순서를 정확히 따라해도 DSi가 낮은 확률로 벽돌이 될 수 있습니다. 특히 여러번 하는 경우에는요! 반드시 최후의 수단으로만 사용하세요!

:::

::: tip

이 페이지의 _어떠한 &#xAC83;_&#xB3C4; 스킵하지 마세요, 모든 실수는 DSi를 벽돌로 만들 가능성을 크게 높입니다.

:::

먼저, 이걸 하고싶어하는 분들에게 몇가지 안전한 대안을 알려드리겠습니다:

- DSiWare를 설치하는것은 hiyaCFW나 TWiLight Menu++로 대체할 수 있습니다
- 사진을 복원하는것은 [ninfs](https://github.com/ihaveamac/ninfs/releases)와 hiyaCFW를 통해 할 수 있고, 콘솔에서 보고 싶다면 TWiLight Menu++를 이용하면 됩니다. 최신버전의 HiyaCFW Helper는 설치 과정 중 NAND에 저장된 사진을 SDNAND에 저장할 수 있도록 도와줍니다
- Unlaunch 버튼 설정을 복구하는건 Unlaunch 메뉴에서 할수 있습니다. Unlaunch 메뉴는 콘솔을 <kbd class="face">A</kbd>와 <kbd class="face">B</kbd>를 동시에 누른 상태로 기기의 전원을 켜면 됩니다
- Unluanch를 켜는데 오류가 생기나요? SD카드를 뺸 채로 다시 켜보세요. 만약 작동한다면, SD카드에 문제가 생긴 것이며 NAND 백업을 복구하는 것 만으로는 해결되지 않습니다
- 부팅시 "An error has occurred..." 와 같은 오류가 나온다면 hiyaCFW와 관련된 오류이며 NAND와 관련된 오류가 아닙니다. DS-Homebrew Wiki의 [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq)를 읽어보세요
- TWiLight Menu++의 에러는 NAND와 상관이 없으며 여기서 오류가 생기는 경우 TWiLight Menu++를 재설치하거나 [디스코드](https://ds-homebrew.com/discord)에서 영어로 도움을 요청하세요
- Unlaunch를 삭제하는것은 NAND를 복구하거나 삭제 프로그램을 사용하여도, 절대적으로 필요하지 않은 경우 그대로 두는 것을 권장합니다. Autoboot key를 "Launcher"로 설정하게 되면 DSi가 순정 기기처럼 켜집니다

이 가이드에서 NAND에서 하는 유일한 행위는 Unluanch를 설치하는 것 뿐입니다. 다른게 문제인 것 같다면, 다른 방법을 사용하세요.

## 준비물

- **동일한 DSi 기기에서 추출한** 낸드 백업
- 최신 버전의 [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Unlaunch나 Memory Pit과 같이 NAND 접근을 하는 홈브류를 실행하는 방법
- NAND 백업을 확인하기 위한 [no$gba](https://problemkaputt.de/gba.htm) ("Windows gaming version"을 다운로드 하세요)
  - macOS와 Linux 유저는 [WINE](https://winehq.org)을 이용하세요
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## no$gba에서 사용하기 위해 BIOS 덤핑

1. `dsibiosdumper.zip`에서 `dsibiosdumper.nds`를 압축해제하여 SD카드의 아무 곳에나 놔두세요
2. <kbd class="face">A</kbd>와 <kbd class="face">B</kbd>를 누르면서 DSi 본체의 전원을 켜세요
   - 이는 Unlaunch의 파일 메뉴로 실행됩니다
3. Unlaunch 파일메뉴에서 dsibiosdumper를 실행하세요
4. <kbd class="face">A</kbd>을 눌러 바이오스를 SD카드에 덤프하세요
5. <kbd>START</kbd>를 눌러 dsibiosdumper를 종료하세요

## NAND 백업 테스트

콘솔에 NAND를 복원하기 전에, NAND 백업이 제대로 작동하는지 테스트 하는것은 매우 중요합니다. 만약 no$gba에서 벽돌 증상이 보이거나 에러가 난다면, 콘솔도 벽돌이 될겁니다.

1. `no$gba-w.zip` 에서 `NO$GBA.EXE`를 컴퓨터에 압축 해제해 주세요
2. NAND 백업을 복사해 `NO$GBA.EXE`와 같은 폴더에 넣고 `DSI-1.MMC`로 이름을 변경해 주세요
3. `bios7i.bin`과 `bios9i.bin`을 `NO$GBA.EXE`와 같은 폴더에 넣고, `BIOSDSI7.ROM`과 `BIOSDSI9.ROM`으로 이름을 변경해 주세요
4. `NO$GBA.EXE`를 실행해 주세요
5. `Options > Emulation Setup`으로 들어가 에뮬레이션 설정 창을 여세요
6. `Reset/Startup Entrypoint`를 `GBA/NDS BIOS (Nintendo logo)`로 변경해 주세요
7. `NDS Mode/Colors`를 `DSI (retail/16MB)`로 변경해 주세요
8. `Save Now`를 클릭해 주세요
9. 아무 닌텐도 DS 롬 (`.nds` 파일)을 실행해 주세요

만약 no$gba가 DSi 메뉴 (혹은 Unlaunch 파일메뉴)로 로딩된다면, 다음 섹션으로 진행해도 됩니다. 만약 어떤 종류의 에러라도 나온다면 _**절대 그 백업을 플래싱하지 마세요**_!

## NAND 백업에서 Unlaunch 삭제 (선택)

이 과정은 Unlaunch가 설치된 뒤 NAND 백업을 진행했고, 여기에서 Unlaunch를 지우고 싶을때 따르는 섹션입니다. 만약 Unlaunch를 지우려고 하는게 아니라면 이 섹션을 **진행하지 마세요**.

1. 최신 버전의 [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)를 다운로드 하세요
2. `unlaunch.zip`에서 `UNLAUNCH.DSI`를 압축해제 하세요
3. `UNLAUNCH.DSI`를 no$gba를 이용해 Game Card slot 모드로 실행하세요
   - 이렇게 하면 Unlaunch Filemenu와 유사한 Unlaunch 설치 프로그램이 시작됩니다.
4. `Uninstall`을 선택하세요
5. 완료가 되었다면, `Power down`을 선택하세요
6. 다시 아무 닌텐도 DS 롬을 실행해, DSi 메뉴가 정상적으로 동작하는지 확인하세요

만약 no$gba가 DSi 메뉴를 로딩할때 어떠한 에러라도 나온다면, _**절대 그 백업을 플래싱하지 마세요**_! 오래된 NAND 백업이 있다면 대신 그걸 사용해 보세요. **절대로** Unlaunch를 콘솔에서 직접 삭제하지 **마세요**, 이건 DSi를 벽돌로 만들 가능성이 매우 높습니다.

## NAND 백업 플래싱하기 (소프트웨어)

::: danger

위의 단계를 모두 읽었는지 확인하세요. 여기서부터는 위험해질 수 있습니다. 만약 링크를 통해 여기로 바로 왔다면, 맨 위로 다시 올라가 이 페이지를 정독 하세요.

:::

::: danger

이 섹션을 진행하면서 닌텐도 DSi는 안정적으로 충전되고 있는 상태여야 합니다.

:::

1. SD카드를 넣은 상태로, <kbd class="face">A</kbd>와 <kbd class="face">B</kbd> 버튼을 누른 채 닌텐도 DSi를 켜세요
2. SafeNANDManager를 실행하세요
3. `begin NAND restore` 버튼을 클릭하세요
4. 복원이 완료되면, <kbd>START</kbd>를 눌러 DSi를 종료하세요

이제 NAND가 복원되었습니다

## NAND 백업 플래싱하기 (하드모드)

만약 DSi를 부팅할수 없다면, 하드모드가 유일한 NAND백업 복원 방법입니다.  최고의 가이드가 [DS-Homebrew Wiki의 닌텐도 DSi 하드모드 가이드](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi)에 있습니다.
