# 자주 묻는 질문(FAQ)

## 시스템 업데이트를 해야 하나요?

DSiWare를 구입하지 않은 이상 DSi를 업데이트하지 **않는** 것이 좋습니다. 업데이트를 해도 이 가이드를 따를 수는 있지만, 업데이트의 유일한 이점은 Nintendo DSi Shop에 접속하여 이미 구매한 타이틀을 다시 다운로드할 수 있다는 것 밖에 없습니다. Nintendo DSi 카메라 애플리케이션의 Facebook 통합과 같은 다른 모든 이점은 더 이상 사용할 수 없거나 단점을 정당화할 만큼 중요하지 않습니다.

- 시스템 업데이트를 설치하면 가끔 콘솔이 **벽돌**이 되는 것으로 알려져 있으며 이는 Unlaunch를 설치할 때와 거의 같은 확률로 알려져 있습니다.
- 오래된 취약점이 더이상 사용이 불가능해지며, 권장 익스플로잇을 사용할 수 없을때 문제가 될 수 있습니다
- 플래시카드 호환성이 줄어듭니다. 하지만 이는 Unlaunch를 설치한다면 우회할 수 있습니다

The only exception is an Unlaunch installation on a DSi with System Version 1.4.2 – this version is currently unsupported by Safe Unlaunch Installer (due to a bug), and requires updating your DSi console to 1.4.5.

## 최고의 취약점은 무엇입니까?

Unlaunch는 전반적으로 DSi에 대한 최고의 익스플로잇이며 유일한 단점은 설치 시 사소한 벽돌 위험이 있다는 것입니다. 일반적으로 Unlaunch를 설치하기 위해서 Memory Pit을 사용하는 것을 추천합니다. 어떠한 위험성도 감수하지 않기 위해선 Flipnote Lenny를 대신 사용하는 것을 추천합니다. Memory Pit보다 홈브류에서 문제가 적고 안전하며, 제거하기도 간단합니다. 하단은 각 익스플로잇의 장점과 단점입니다:

### Memory Pit

장점:

- 빠르고 쉽게 사용 가능
- 콘솔에 데미지를 주지 않고, 삭제도 단순히 SD카드를 뽑거나 파일을 지우는 것으로 간단히 가능
- 카메라가 고장났거나 카메라 튜토리얼을 완료하지 않은 경우를 제외하고 모든 DSi 콘솔과 호환됨

단점:

- 홈브류에 접근하기 위해서 매일 DSi 카메라를 켜야함
- WRAM이 ARM7 CPU에만 개방되어 있기 때문에 특정 DSi 모드 타이틀 및 홈브류와 호환되지 않음
- 홈브류에서 Slot-1 (DS 게임 카드) 접근이 불가능함
- DSP 접근이 불가능하여 GBARunner2에서 소리가 안좋게 들림
- Memory Pit이 설치되어 있는 동안에는 DSi 카메라 애플리케이션에서 SD 카드에 있는 사진을 볼 수 없음 (익스플로잇이 사진 기능을 악용하기 때문)
  - Memory Pit이 설치된 상태에서 SD카드의 사진을 보는 유일한 방법은, **TW**i**L**ight Menu++와 nds-bootstrap (v0.61.3 혹은 그 이후 버전)을 이용해 DSi 카메라의 롬 덤프 버전을 실행해 보는 것입니다

### stylehax

장점:

- Memory Pit보다 DSi 모드 타이틀과 홈브류에서 더 좋은 호환성을 보임
- 사용하기 쉬움
- 콘솔에 데미지를 입힐 가능성이 없음
- 카메라가 고장났어도 사용 가능
- GBARunner2에서 소리가 더 좋게 나옴

단점:

- 인터넷 접속이 필요함
- 홈브류를 접근하기 위해서 매번 DSi 브라우저를 로딩시켜야 하며, 이는 Memory Pit보다 약간 더 많은 시간이 필요함
- 홈브류에서 Slot-1 (DS 게임 카드) 접근이 불가능함

### Flipnote Lenny

장점:

- Memory Pit보다 DSi 모드 타이틀과 홈브류에서 더 좋은 호환성을 보임
- 콘솔에 데미지를 주지 않고, 삭제도 단순히 SD카드를 뽑거나 폴더를 지우는 것으로 간단히 가능
- 카메라가 고장났어도 사용 가능
- GBARunner2에서 소리가 더 좋게 나옴

단점:

- 홈브류를 접근하기 위해서 매번 Flipnote Studio를 켜야 하며, 이는 Memory Pit보다 약간 더 많은 시간이 필요함
- 홈브류에서 Slot-1 (DS 게임 카드) 접근이 불가능함

### Unlaunch

장점:

- 추가적인 버튼 핫키만 누름으로써 시스템이 켜질 때 홈브류나 DSiWare에 접근 가능
- 아래 사항을 포함한 모든 시스템에 아무런 제약 없이 접근 가능:
  - 호환되지 않는 플래시카드와 게임카드 덤핑 등 Slot-1에 대한 접근 권한 획득
  - GBARunner2에서 소리가 더 좋게 나옴
- DSi-Enhanced/전용 게임카드의 지역 락 해제
- DSi가 벽돌이 될 수 있는 대부분의 방법에 대해 보호
- DSi-Enhanced 게임이 Donor ROM 없이 DSi 모드에서 실행 가능
- 오래된 홈브류가 nds-bootstrap-hb를 통해 실행 가능

단점:

- 설치시 **벽돌**이 될 매우 작은 가능성이 있음
- [삭제](uninstalling-unlaunch.html)시, 벽돌이 될 가능성이 아주 약간 더 있음
- 개발용 콘솔에는 호환되지 않음

## 시스템을 모딩함으로써 사용할 수 없는 기능은 무엇입니까?

Unlaunch나 Flipnote Lenny를 설치하게 되면, 모든 기능을 정상적으로 사용 가능합니다. Memory Pit을 사용하는 경우, **TW**i**L**ight Menu++로 DSi 카메라 애플리케이션의 ROM 덤프를 실행하여 nds-bootstrap을 통해 부팅하지 않는 한 DSi 카메라를 사용하여 SD 카드에 있는 사진을 볼 수 없습니다.

- DSi 메뉴에서 DSi 카메라를 시작할 때 SD 카드 사진을 볼 수 있는 기능을 다시 얻으려면 Unlaunch를 설치하거나 다른 익스플로잇을 사용한 다음 Memory Pit의 `pit.bin` 파일을 삭제하세요
  - 만약 `tip.bin`이 같은 폴더에 있다면, 다시 `pit.bin`으로 바꾸세요

## 어떻게 닌텐도 DS 게임카드 덤프를 플레이할 수 있나요?

콘솔에서 게임카드 덤프를 플레이하기 위해선 플래시카드가 필요하거나 nds-bootstrap이 필요합니다. nds-bootstrap은 슬롯 1의 읽기 및 쓰기를 내부 SD 카드로 리디렉션하여 게임을 실행 가능하게 하는 프로그램입니다.

- With TWiLight Menu++ & AKMenu-Next you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using these menus are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. 다르게 말하면, 별다른 설치 과정 없이 ROM 파일을 직접적으로 플레이할 수 있습니다. 39개의 타이틀 설치 제약도 없으며, hiyaCFW나 Unlaunch가 필요한것도 아니며, SD카드의 남은 공간 제약도 없습니다.
- hiyaCFW 사용자는 DS-Homebrew Wiki의 [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) 가이드를 사용해 SDNAND의 DSi 메뉴에 포워더를 생성할 수 있지만, 몇가지 제약 사항이 있습니다. 앱이 최대 39개로 제한되어 있으며, 진입 장벽이 TWiLight Menu++를 쓰는것보다 더 높고 불편합니다.
  - hiyaCFW가 없고 포워더를 사용하고 싶은 경우 DS-Homebrew Wiki의 [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing)를 확인해 보세요

## 어떻게 홈브류를 업데이트하나요?

- **Unlaunch** - [Unlaunch 설치](installing-unlaunch.html) 페이지의 가이드를 따라하세요
  - 이 작업을 하기 전 Unlaunch를 삭제하지 **말아야** 합니다
- **hiyaCFW** - SD카드의 루트에 있는 `hiya.dsi` 파일을 [최신 릴리즈](https://github.com/RocketRobz/hiyaCFW/releases)에 있는 파일로 교체하세요
- **TWiLight Menu++** - [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)의 가이드를 따라하세요
- **AKMenu-Next** - Follow the instructions on the [AKMenu-Next Documentation](https://coderkei.github.io/akmenu-next-docs/guides/akmenu-next/#__tabbed_1_5)
- **nds-bootstrap** - `nds-bootstrap-hb-release.nds`와 `nds-bootstrap-release.nds`파일을 복사해 SD카드 루트의 `_nds`폴더에 붙여넣기 하세요
  - TWiLight Menu++를 사용하는 경우 최신 nds 부트스트랩 릴리스가 TWiLight Menu++에 포함될 가능성이 높습니다
- **GodMode9i, dumpTool, Forwarder3-DS, 기타** - 다운로드에 사용된 지침을 따르세요

다른 홈브류는 업데이트하기 위해 다른 방법을 사용할 수도 있습니다.

## 저는 처음이거나 설치를 다시 하고 싶습니다. 어디서부터 시작해야 될까요?

- 만약 콘솔을 한번도 수정하지 않았거나 Unlaunch를 업데이트 하는 방법을 찾고 있다면, 이 가이드의 처음부터 시작해 모든 페이지를 다 읽어보는 것을 추천합니다. 홈페이지에 있는 모든 내용을 꼭 읽어보세요
- 만약 최신 버전의 Unlaunch가 설치되어 있다면, [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)를 참고하여 시스템에 TWiLight Menu++를 설치해 보세요

## 어떻게 청소년 보호 기능을 해제하나요?

- The [mkey generator](https://mkey.nintendohomebrew.com) can generate the code required to remove parental controls

## 제 닌텐도 DSi의 지역을 바꿀수 있나요?

네, 하지만 변경하고 싶은 것에 따라서 몇가지 다른 방법이 존재합니다:

- 가장 안전하고 쉬운 방법은 TWiLight Menu++를 설치하는 것입니다, 이는 NAND 수정없이 공식적인 언어들을 제공합니다
- 실제 시스템 지역을 변경하고 싶고 hiyaCFW를 사용하고 있다면 설정 메뉴를 열고, 지역 설정을 변경하세요 (CHN, KOR NAND에서는 불가능합니다)
  - 만약 변경 후 터치스크린이 작동하지 않는다면, 원래 설정으로 바꾼 뒤, 아시아 DSi 시스템을 위한 Yoti의 [hiyalang](https://github.com/Yoti/cli_hiyalang/releases)을 사용할 수 있습니다. 미국 버전의 경우 [이 hiyalang 버전](https://github.com/Simonsator/cli_hiyalang/releases/)을 사용하세요
- 마지막으로 실제 시스템 NAND의 지역변경을 하고싶다면, Mighty Max의 [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)를 사용할 수 있습니다

## Lazy DSi Downloader에 무슨일이 생겼나요? 이거 없이 커펌을 어떻게 설치하나요?

Lazy DSi Downloader는 기본적으로 수동 설정 과정을 건너뛰고 SD 카드에 필요한 파일과 폴더를 다운로드하여 저장할 수 있는 프로그램입니다. 하지만 프로그래밍 및 배포 방식으로 인해 많은 사용자가 다양한 문제에 직면했고 결국 수동으로 설정해야 했습니다. 문제의 원인을 해결하는 것보다 더 빠르고 쉬웠기 때문입니다.

더 많은 사용자가 이런 문제를 겪는 걸 막기 위해, 더이상 Lazy DSi Downloader를 사용하는것을 추천하지 않습니다. 대신 [수동 설치](get-started.html)를 하는것이 권장됩니다.

- 제 3자가 Lazy DSi Downloader를 쓰라며 이 가이드를 보내준 경우, 제 3자의 방식이 오래된 것일 가능성이 큽니다. 대신, 개발자들이 주기적으로 관리하고 있는 이 가이드를 따르세요.

## 어떤 종류의 SD 카드를 사용해야 하나요?

- 믿을만한 브랜드에서 SD카드를 구매해야 합니다
- 일반 SD카드나 어댑터를 이용한 microSD카드 둘다 상관 없습니다
- 용량은 1GB에서 2TB 까지 작동합니다. 일반적으로, 8GB면 충분합니다
  - hiyaCFW와 같은 일부 소프트웨어는 SD 카드 용량이 클수록 로딩 시간이 길어질 수 있습니다
- 속도 클래스는 8 이상을 권장합니다
- Read the [Counterfeit MicroSD Cards Guide](https://www.flashcarts.net/microsd-fakes) to ensure you do not end up with a counterfeit SD/MicroSD card

## DSi SD카드를 다른 시스템에 사용 가능한가요?

일반적으로, 네, 하지만 두가지 예외가 있습니다:

- hiyaCFW는 설치한 기기에서만 작동합니다
- nds-bootstrap이나 플래시카드를 이용중이라면, NDS 게임의 온라인에서 사용하는 친구 코드는 기기가 바뀔때마다 초기화 됩니다

## 홈브류를 설정한 뒤에 어떻게 새로운 SD카드로 교체하나요?

새 SD카드를 [SD카드 설정](sd-card-setup.html)의 가이드를 통해 포맷 후, 단순히 이전 SD카드의 데이터를 새 SD카드에 옮기면 됩니다.

## 홈브류를 설정한 뒤에 SD 카드를 꽃지 않고도 제 시스템을 평범하게 사용할 수 있나요?

네. 만약 Unlaunch를 설치하지 않았다면, 시스템은 완전히 모딩되지 않은 상태로 남게 됩니다. 만약 Unlaunch를 설치 _했다면_, 특정 조건에서 원래 DSi 메뉴로 부팅되도록 [Unlaunch를 설정](installing-unlaunch.html#section-iii-post-unlaunch-configuration)해야 할 수도 있습니다.

## [Unlaunch 페이지](https://problemkaputt.de/unlaunch.htm)에서 버전 2.0이 안전하지 않은 것(not known to be safe)으로 나와 있습니다. 이전 버전을 사용해야 하나요?

Unlaunch 페이지는 2019년 버전 2.0이 출시된 이후 업데이트되지 않았습니다. 대부분의 사용자가 이 버전을 사용하면서 문제를 겪지 않았기에, 안전할 것입니다.

## 덤프한 DSiWare를 어떻게 구동하나요?

가장 추천하는 방법은 TWiLight Menu++를 이용해 구동시키는 것입니다. 이는 드래그 & 드랍으로 간단히 추가가 가능하고, 별도의 제한이 없습니다. 실행 방법으로 nds-bootstrap이 설정되어 있다면, 치트와 스크린샷, 인게임 메뉴 등 다양한 추가 기능을 제공합니다.

그러나, 몇몇 앱은 호환이 되지 않으며, 이 때는 [NTM](https://github.com/Epicpkmn11/NTM/releases)을 이용해 내부 메모리나 [hiyaCFW의 SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing)에 설치가 가능합니다. 위의 장점과는 다르게, 최대 39개밖에 설치를 못하며 128MiB/1,024 블록 사이즈까지밖에 설치 못합니다. SysNAND에 설치하게 되는 경우, 내부 NAND에 쓰기 작업을 진행하기 때문에 매우 약간이나마 벽돌이 될 가능성이 존재합니다.
