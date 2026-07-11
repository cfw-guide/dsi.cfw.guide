# 문제 해결하기

## Unlaunch

### Unlaunch가 `MISMATCH IN FAT COPIES`에서 멈춥니다

Unlaunch가 설치된 이후엔 twlnf가 전체 NAND를 제대로 업데이트하지 못하는 심각한 버그가 있는데, 이로 인해 특정 홈브류(예: Unlaunch 설치 프로그램)에서 오류가 발생합니다.

이를 해결하기 위해선, [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases)을 열고, `Fix FAT copy mismatch`를 선택하세요.

### Unlaunch를 이용해 "런처"를 실행할때 부트 스플래쉬나 소리가 들리지 않습니다

Unlaunch(nocash) 개발자는 기본 설정시 의도적으로 백그라운드 오디오와 부트 스플래시를 패치하도록 해놨습니다. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) with `Enable sound and splash` turned on, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Unlaunch를 설치한 뒤로 기기를 켜면 검은 화면만 나옵니다

SD카드를 뺀 채로 다시 기기를 켜보세요. If it still only shows a black screen, you may need to flash your NAND via either [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) or a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Powering off in the DSi Menu and/or System Settings takes 5-10 seconds

The only solutions are starting the DSi Menu and/or System Settings with the SD card ejected, installing [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing), or uninstalling Unlaunch.

### Unlaunch를 설치한 이후, 특정 앱이나 Unlaunch Filemenu로 부팅하는데 중간에 멈춥니다

이는 Unlaunch 옵션에서 `NO BUTTON`에 대해 잘못된 앱을 선택했을 수 있습니다. <kbd class="face">A</kbd> + <kbd class="face">B</kbd> 를 누른 채로 기기를 켠 뒤, `OPTIONS`에 들어가, `NO BUTTON`에 대한 설정을 원하는 것으로 바꾸세요.

### 다른 Unlaunch 문제

만약 Unlaunch가 `Clusters too large`, `Bad VBR`, `Bad MBR`이라는 메시지가 표시되거나 아무 애플리케이션도 표시되지 않는 경우, SD 카드가 올바르게 포맷되지 않았을 가능성이 큽니다. [SD카드 준비하기](sd-card-setup.html)과정을 다시 진행해 주세요.

## TWiLight Menu++

일반적인 TWiLight Menu++ 문제 해결에 관해서는, DS-Homebrew 위키의 [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) 페이지를 참고하세요.

## AKMenu-Next

For AKMenu-Next troubleshooting, please see the [Troubleshooting Page](https://coderkei.github.io/akmenu-next-docs/guides/troubleshooting) and [FAQ](https://coderkei.github.io/akmenu-next-docs/guides/faq) page on the AKMenu-Next Documentation Website.

## 추가 지원

만약 이 페이지에서 해결하지 못했거나, 여기의 해결책만으로 해결이 되지 않는 경우 [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4) 디스코드 서버에 영어로 도움을 요청하세요.
