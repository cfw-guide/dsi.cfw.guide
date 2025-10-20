# Конфігурація SD карти

This page is for preparing your SD card for your device. In the process, we'll format the SD card and check the card for errors.

::: danger

Make sure to backup your SD card contents BEFORE following this. Your SD card will be WIPED in the process.

:::

::::: tabs

:::: tab default Windows

### Section I - Formatting your SD card with SD Formatter

::: tip

This section formats the SD card to the specifications by the SD Card Association. This can fix many issues that may occur with running homebrew applications.

:::

::: danger

Any 64GB or larger SD cards will be formatted to `exFAT` in this process. You _must_ follow both Sections I & II to re-format to `FAT32`.

:::

1. Download the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
   - If the above link doesn't work for you, download [from archive.org](https://web.archive.org/web/20220626204124/https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
   - Accept the End User License Agreement to start the download
2. Run `SD Card Formatter Setup` (the `.exe` file) in the downloaded `.zip` file with Adminstrator privileges, then install the program
3. Run `SD Card Formatter` from the Start Menu with Adminstrator privileges
4. Select your SD card
5. Make sure the `Quick Format` check box is checked
6. Press `Format` to start the format process
   - If you're using a 4GB-32GB SD card, and the cluster size is not reported as `32 kilobytes`, you'll need to follow Section II as well
     ![Screenshot of SD Card Formatter on Windows 11](/assets/images/sd-card-formatter.png)

### Section II - Formatting your SD card with GUIFormat

This section formats SD cards which are 64GB or larger to FAT32.  
This also applies to 4GB-32GB SD cards which have not been formatted with 32kb cluster size.

::: tip

If your SD card is 32GB or less in capacity, skip to Section III.

:::

1. Download the latest version of [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)
   - Click on the picture on the website to download the app
2. Run GUIFormat with Administrator permissions
3. Select your drive letter
4. Set the `Allocation size unit` to `32768`
   - If this is too large for your SD, set it to the highest one that works
5. Make sure the `Quick Format` check box is checked
6. Start the format process

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)

### Section III - Checking for errors

1. Go to the properties window of your SD card
   - `Windows Explorer` -> `This PC` -> Right click your SD card -> `Properties`
2. In the tools tab, Select `Check Now`
3. Check both `Automatically fix file system errors` and `Scan for and attempt recovery of bad sectors`
4. Start the checking process

This will scan the SD card and correct any errors it finds.

### Section IV - Checking SD card read/write

1. Download and extract [the h2testw archive](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) anywhere on your computer
   - If the above link doesn't work for you, download [from archive.org](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)
   - It can also be extracted on an external device as long as that external device isn't your SD card
2. With your SD card inserted into your computer, run `h2testw.exe`
3. Select which language you'd like to see h2testw in
4. Set your SD card's drive letter as your target
5. Ensure `all available space` is selected
6. Click `Write + Verify`

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

If TWiLight Menu++ fails to start after following this method, please follow the Windows method instead, by either rebooting to Windows or running a Windows Virtual Machine

:::

### Section I - Formatting your SD card

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

1. Take note of the device name. In our example above, it was `mmcblk0p1`
   - If `RO` is set to 1, make sure the lock switch is not slid down
   - Make sure you're targetting the **partition**, `mmcblk0p1` not `mmcblk0`
2. Hit CTRL + C to exit the menu
3. Follow the instructions relevant to your SD card's capacity:
   - 2GB or lower: `sudo mkdosfs /dev/(device name from above) -s 64 -F 16`
     - This creates a single FAT16 partition with 32 KB cluster size on the SD card
   - 4GB or higher: `sudo mkdosfs /dev/(device name from above) -s 64 -F 32`
     - This creates a single FAT32 partition with 32 KB cluster size on the SD card

::: tip

If you get an error message saying: `mkdosfs: /dev/(device name) contains a mounted file system`, you will need to `sudo umount /dev/(device name from above)` in order to complete the above step.
You should then reinsert the SD card **or** recreate the MOUNTPOINT (`sudo mkdir -p /run/media/user/FFFF-FFFF && sudo mount /dev/(device name) /run/media/user/FFFF-FFFF`) to continue.

:::

### Section II - Using F3

1. Download and extract [the F3 archive](https://github.com/AltraMayor/f3/archive/v7.2.zip) anywhere on your computer.
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

