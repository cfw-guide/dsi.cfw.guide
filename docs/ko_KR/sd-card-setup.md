# SD 카드 준비하기

이 페이지는 기기에 넣을 SD카드를 준비하는 방법에 대해 다룹니다. 이 과정에서 SD 카드를 포맷하고 오류가 있는지 확인합니다.

::: danger

이 작업을 수행하기 전에 SD카드 내용을 백업해야 합니다. 이 과정 중에, SD카드의 데이터는 전부 포맷됩니다.

:::

::::: tabs

:::: tab default Windows

### Section I - Formatting your SD card with sdFormatWindows

::: warning

It is **not** recommended to use the built in default Windows Formatting utility since this can cause compatibility problems with homebrew, as it does not format SD cards to the correct specifications set by the SD Association.

:::

1. Download the latest version of [sdFormatWindows](https://github.com/flashcarts/sdFormatWindows/releases/latest/download/sdFormatWindows.exe)
2. Run the `sdFormatWindows` application (the `.exe` file) from the location you downloaded it to, adminstrator privileges are required
3. Select your SD card drive
   - If your SD card is **32GB or less**, you can use the default settings
   - If your SD card is **64GB or more**, enable the **"Format as FAT32"** and **"Force 32KiB Cluster Size"** options
4. `Format` 버튼을 눌러 포맷 과정을 시작하세요

### Section II - Checking SD card read/write for errors

1. [h2testw 아카이브](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)를 다운로드 한 뒤 컴퓨터 아무데나 압축해제 하세요
   - 만약 위 링크가 작동하지 않으면, [archive.org](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)에서 다운로드 하세요
   - SD카드 외의 다른 외부 장치에 압축 해제해도 상관 없습니다
2. SD카드를 컴퓨터에 꽂고, `h2testw.exe`를 실행하세요
3. h2testw를 실행할 언어를 선택하세요
4. SD카드 드라이브를 선택하세요
5. `all available space`가 선택되어 있는지 확인해 주세요
6. Click `Write + Verify` (If this option is greyed out, ensure you formatted the SD card with the steps in Section I)

- 완료될 때까지 기다려 주세요

::: tip

테스트 결과가 `Test finished without errors`로 나오면 SD 카드는 정상이며 SD 카드 안의 모든 `.h2w` 파일을 삭제해도 됩니다.

:::

::: danger

다른 결과가 표시되면 SD 카드가 손상되었거나 오류가 있을 수 있으므로 SD 카드를 교체해야 할 수도 있습니다!

:::

::::

:::: tab Linux

::: tip

이 화면에선 SD 카드 협회의 사양에 맞게 SD카드를 포맷합니다. 이는 홈브류 앱을 실행할때 생기는 많은 문제를 해결할 수 있습니다.

:::

::: danger

64GB 이상의 SD카드는 이 과정에서 `exFAT`으로 포맷됩니다. _반드시_ 섹션 I & 섹션 II를 보고 `FAT32` 로 다시 포맷해야 합니다.

:::

### Section I - Formatting your SD card with sdFormatLinux

1. SD카드게 리눅스 머신에 **삽입되어 있지 않은지** 확인하세요
2. Download and extract the latest version of [sdFormatLinux](https://github.com/profi200/sdFormatLinux/releases/download/v0.2.0/sdFormatLinux_v0.2.0.7z) to your computer
3. Linux 터미널을 실행하세요
4. `watch "lsblk"`를 입력해 주세요
5. Linux 시스템에 SD카드를 삽입하세요
6. 출력값을 확인하세요. 아래와 같이 보일 것입니다:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. 장치 이름을 기록해 두세요. In our example above, it was `mmcblk0`
   - `RO` 값이 1이라면, 잠금 스위치가 내려가 있지 않은지 확인해 주세요
   - Make sure that you're targetting the **device**, `mmcblk0`, not the partition, `mmcblk0p1`
2. CTRL + C 를 입력해 메뉴를 닫으세요
3. Navigate to where you have extracted sdFormatLinux
4. Run `sudo ./sdFormatLinux -f -e trim /dev/(device name from above)` to format your SD card

::: tip

If you get an error message stating: `Error: Device is mounted`, you will need to run `sudo umount /dev/(partition name from above)` in order to complete the above step.

:::

### Section II - Formatting your SD card with mkdosfs

이 섹션은 64GB 이상의 SD 카드를 FAT32로 포맷하는 방법에 대해 다룹니다.

::: tip

만약 SD카드가 32GB 이하인 경우, 섹션 III으로 이동해 주세요.

:::

1. SD카드게 리눅스 머신에 **삽입되어 있지 않은지** 확인하세요
2. Linux 터미널을 실행하세요
3. `watch "lsblk"`를 입력해 주세요
4. Linux 시스템에 SD카드를 삽입하세요
5. 출력값을 확인하세요. 아래와 같이 보일 것입니다:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Take note of the device partition name. 위 예시에서는 `mmcblk0p1`입니다.
   - `RO` 값이 1이라면, 잠금 스위치가 내려가 있지 않은지 확인해 주세요
   - Make sure you're targetting the **partition**, `mmcblk0p1`, not the device, `mmcblk0`
2. CTRL + C 를 입력해 메뉴를 닫으세요
3. Run `sudo mkdosfs /dev/(partition name from above) -s 64 -F 32` to format your SD card to FAT32

### 섹션 III - F3 사용

1. Download and extract [the F3 archive](https://github.com/AltraMayor/f3/archive/v9.0.zip) anywhere on your computer.
2. F3 폴더에서 터미널을 실행하세요
3. `make` 명령을 실행해 F3를 컴파일해 주세요
4. SD 카드를 삽입하고 마운트한 상태에서 `./f3write <your sd card mount point>` 를 실행하세요
   - 완료될 때까지 기다려 주세요. 예시 결과는 아래를 참고해 주세요:
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
5. `./f3read <your sd card mount point>` 커맨드를 실행해 주세요.

- 완료될 때까지 기다려 주세요. 예시 결과는 아래를 참고해 주세요:
  ```
  $ ./f3read /media/michel/6135-3363/
                    SECTORS      ok/corrupted/changed/overwritten
  Validating file 1.h2w ... 2097152/        0/      0/      0
  ...
  Validating file 30.h2w ... 1491904/        0/      0/      0

     Data OK: 29.71 GB (62309312 sectors)
  Data LOST: 0.00 Byte (0 sectors)
              Corrupted: 0.00 Byte (0 sectors)
     Slightly changed: 0.00 Byte (0 sectors)
           Overwritten: 0.00 Byte (0 sectors)
  Average Reading speed: 9.42 MB/s
  ```

___

::: tip

시험 결과가 `Data LOST: 0.00 Byte (0 sectors)`로 나온다면 SD 카드는 정상이며 SD 카드의 모든 `.h2w`파일을 삭제해도 됩니다.

:::

::: danger

다른 결과가 표시되면 SD 카드가 손상되었거나 오류가 있을 수 있으므로 SD 카드를 교체해야 할 수도 있습니다!

:::

::::

:::: tab macOS

### 섹션 I - SD Formatter로 SD카드 포맷하기

::: tip

이 화면에선 SD 카드 협회의 사양에 맞게 SD카드를 포맷합니다. 이는 홈브류 앱을 실행할때 생기는 많은 문제를 해결할 수 있습니다.

:::

::: danger

64GB 이상의 SD카드는 이 과정에서 `exFAT`으로 포맷됩니다. _반드시_ 섹션 II를 참고하여 `FAT32`로 다시 포맷해야합니다.

:::

1. 최신 버전의 [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/)를 다운로드 하세요
   - 엔드 유저 라이센스에 동의해 다운로드를 시작하세요
2. 다운로드 한 `.zip` 파일에서 `Install SD Card Formatter`를 실행하세요 (`.mpkg` 파일을 통해)
3. `SD Card Formatter`를 실행하세요
4. SD카드를 선택해 주세요
5. `Quick Format`를 체크하세요
6. 포맷을 시작하세요

### 섹션 II - 디스크 유틸리티를 사용해 SD카드 포맷

이 섹션에서는 32GB보다 큰 SD카드를 FAT32로 포맷합니다.

::: tip

만약 SD카드가 32GB 이하인 경우, 섹션 III으로 이동해 주세요.

:::

#### OS X El Capitan (10.11) 및 이후 버전

1. 디스크 유틸리티 앱을 실행하세요
2. 좌측 상단의 `View` 패널에서 `Show All Devices` 를 선택해주세요
3. 사이드바에서 SD카드를 선택하세요
   - 올바른 디바이스를 선택했는지 확인하세요. 잘못하면 다른 드라이브를 포맷할 수도 있습니다!
4. 상단의 `지우기`를 클릭해 주세요
5. `Format`이 `MS-DOS (FAT32)` 로 선택되었는지 확인하세요
   - El Capitan (10.11) 에서 Catalina (10.15) 버전 사이의 경우 `MS-DOS (FAT)` 입니다
6. `Scheme` 이 `Master Boot Record` 로 설정되었는지 확인하세요
   - `Scheme`이 보이지 않는다면, `취소`를 누르고 디바이스 대신 볼륨을 선택해 주세요
7. `Erase`를 누르고, `Close` 를 누르세요

#### OS X Yosemite (10.10) 및 이전 버전

1. 디스크 유틸리티 앱을 실행하세요
2. 사이드바에서 SD카드를 선택하세요
   - 올바른 디바이스를 선택했는지 확인하세요. 잘못하면 다른 드라이브를 포맷할 수도 있습니다!
3. 위쪽의 `파티션` 을 선택하세요
   - 만약 `파티션` 이 표시되지 않으면, 볼륨이 아닌 디바이스를 선택해 주세요
4. `Parititon Layout`이 `1 Partition`으로 선택되었는지 확인하세요
5. `Format`이 `MS-DOS (FAT)`으로 선택되었는지 확인하세요
6. (파티션 테이블 밑에 있는) 옵션 버튼에서 `Master Boot Record`를 선택하세요.
7. `OK` -> `Apply` -> `Parititon`을 선택하세요

### 섹션 III - F3 사용

1. 터미널을 실행하세요
2. `brew install f3` 를 입력해 brew로 F3를 설치하세요
   - 만약 brew가 없다면, [brew.sh](https://brew.sh)의 가이드를 따라 brew를 설치하세요
3. SD 카드를 삽입하고 마운트한 상태에서 `./f3write <your sd card mount point>` 를 실행하세요
   - 완료될 때까지 기다려 주세요. 예시 결과는 아래를 참고해 주세요:
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
4. `./f3read <your sd card mount point>` 커맨드를 실행해 주세요.
   - 완료될 때까지 기다려 주세요. 예시 결과는 아래를 참고해 주세요:
   ```
   $ f3read /Volumes/SD\ CARD
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

::: tip

시험 결과가 `Data LOST: 0.00 Byte (0 sectors)`로 나온다면 SD 카드는 정상이며 SD 카드의 모든 `.h2w`파일을 삭제해도 됩니다.

:::

::: danger

다른 결과가 표시되면 SD 카드가 손상되었거나 오류가 있을 수 있으므로 SD 카드를 교체해야 할 수도 있습니다!

:::

::::

:::::

::: tip

이제 SD카드의 내용을 복원한 뒤 가이드를 진행할 수 있습니다.

:::

