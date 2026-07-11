# Setarea Cardului SD

This page is for preparing your SD card for your device. In the process, we'll format the SD card and check the card for errors.

::: danger

Make sure to backup your SD card contents BEFORE following this. Your SD card will be WIPED in the process.

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
4. Press `Format` to start the format process

### Section II - Checking SD card read/write for errors

1. Download and extract [the h2testw archive](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) anywhere on your computer
   - If the above link doesn't work for you, download [from archive.org](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)
   - It can also be extracted on an external device as long as that external device isn't your SD card
2. With your SD card inserted into your computer, run `h2testw.exe`
3. Select which language you'd like to see h2testw in
4. Set your SD card's drive letter as your target
5. Ensure `all available space` is selected
6. Click `Write + Verify` (If this option is greyed out, ensure you formatted the SD card with the steps in Section I)

- Wait until the process is completed

::: tip

If the test shows the result `Test finished without errors`, your SD card is healthy and you can delete all `.h2w` files on your SD card.

:::

::: danger

If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it!

:::

::::

:::: tab Linux

::: tip

This section formats the SD card to the specifications by the SD Card Association. This can fix many issues that may occur with running homebrew applications.

:::

::: danger

Any 64GB or larger SD cards will be formatted to `exFAT` in this process. You _must_ follow both Sections I & II to re-format to `FAT32`.

:::

### Section I - Formatting your SD card with sdFormatLinux

1. Make sure your SD card is **not** inserted into your Linux machine
2. Download and extract the latest version of [sdFormatLinux](https://github.com/profi200/sdFormatLinux/releases/download/v0.2.0/sdFormatLinux_v0.2.0.7z) to your computer
3. Launch the Linux Terminal
4. Type `watch "lsblk"`
5. Insert your SD card into your Linux machine
6. Observe the output. It should match something like this:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Take note of the device name. In our example above, it was `mmcblk0`
   - If `RO` is set to 1, make sure the lock switch is not slid down
   - Make sure that you're targetting the **device**, `mmcblk0`, not the partition, `mmcblk0p1`
2. Hit CTRL + C to exit the menu
3. Navigate to where you have extracted sdFormatLinux
4. Run `sudo ./sdFormatLinux -f -e trim /dev/(device name from above)` to format your SD card

::: tip

If you get an error message stating: `Error: Device is mounted`, you will need to run `sudo umount /dev/(partition name from above)` in order to complete the above step.

:::

### Section II - Formatting your SD card with mkdosfs

This section formats SD cards which are 64GB or larger to FAT32.

::: tip

If your SD card is 32GB or less in capacity, skip to Section III.

:::

1. Make sure your SD card is **not** inserted into your Linux machine
2. Launch the Linux Terminal
3. Type `watch "lsblk"`
4. Insert your SD card into your Linux machine
5. Observe the output. It should match something like this:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Take note of the device partition name. In our example above, it was `mmcblk0p1`
   - If `RO` is set to 1, make sure the lock switch is not slid down
   - Make sure you're targetting the **partition**, `mmcblk0p1`, not the device, `mmcblk0`
2. Hit CTRL + C to exit the menu
3. Run `sudo mkdosfs /dev/(partition name from above) -s 64 -F 32` to format your SD card to FAT32

### Section III - Using F3

1. Download and extract [the F3 archive](https://github.com/AltraMayor/f3/archive/v9.0.zip) anywhere on your computer.
2. Launch the terminal in the F3 directory
3. Run `make` to compile F3
4. With your SD card inserted and mounted, run `./f3write <your sd card mount point>`
   - Wait until the process is complete. See below for an example output:
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
5. Run `./f3read <your sd card mount point>`

- Wait until the process is complete. See below for an example output:
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

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your SD card is healthy and you can delete all `.h2w` files on your SD card.

:::

::: danger

If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it!

:::

::::

:::: tab macOS

### Section I - Formatting your SD card with SD Formatter

::: tip

This section formats the SD card to the specifications by the SD Card Association. This can fix many issues that may occur with running homebrew applications.

:::

::: danger

Any 64GB or larger SD cards will be formatted to `exFAT` in this process. You _must_ follow Section II to re-format to `FAT32`.

:::

1. Download the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/)
   - Accept the End User License Agreement to start the download
2. Run `Install SD Card Formatter` (the `.mpkg` file) in the downloaded `.zip` file
3. Run `SD Card Formatter`
4. Select your SD card
5. Make sure the `Quick Format` check box is checked
6. Start the format process

### Section II - Formatting your SD card with Disk Utility

This section formats SD cards larger than 32GB to FAT32.

::: tip

If your SD card is 32GB or less in capacity, skip to Section III.

:::

#### OS X El Capitan (10.11) and later

1. Launch the Disk Utility application
2. Select `Show All Devices` in the top-left `View` panel
3. Select your SD card from the sidebar
   - Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!
4. Click `Erase` at the top
5. Ensure that `Format` is set to `MS-DOS (FAT32)`
   - On El Capitan (10.11) through Catalina (10.15) choose `MS-DOS (FAT)`
6. Ensure that `Scheme` is set to `Master Boot Record`
   - If `Scheme` does not appear, click `Cancel` and make sure to choose the device instead of a volume
7. Click `Erase`, then click `Close`

#### OS X Yosemite (10.10) and earlier

1. Launch the Disk Utility application
2. Select your SD card from the sidebar
   - Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!
3. Click `Partition` at the top
   - If `Partition` does not appear, make sure to choose the device instead of a volume
4. Ensure that `Partition Layout` is set to `1 Partition`
5. Ensure that `Format` is set to `MS-DOS (FAT)`
6. From the Options button (below the partition table), select `Master Boot Record`.
7. Click `OK` -> `Apply` -> `Partition`

### Section III - Using F3

1. Open Terminal
2. Install F3 from brew by running `brew install f3`
   - If you don't have brew, install it with the instructions on [brew.sh](https://brew.sh)
3. With your SD card inserted and mounted, run `f3write <your sd card mount point>`
   - Wait until the process is complete. See below for an example output:
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
4. Run `f3read <your sd card mount point>`
   - Wait until the process is complete. See below for an example output:
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

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your SD card is healthy and you can delete all `.h2w` files on your SD card.

:::

::: danger

If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it!

:::

::::

:::::

::: tip

You can now restore the contents of your SD card and continue.

:::

