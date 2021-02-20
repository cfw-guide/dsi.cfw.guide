---
title: SD Card Setup
redirect_from:
  - /f3-(linux)
  - /h2testw-(windows)
  - /f3x-(mac)
  - /sd-prep
---

This page is for preparing your SD card for your Nintendo DSi. In the process, we'll format the SD card to a format suitable for the Nintendo DSi and check the card for errors.

Make sure to backup your SD card contents BEFORE following this. Your SD card will be WIPED in the process.
{: .notice--danger}

{% capture windowsInstructions %}
<noscript>
   <h2>Windows</h2>
</noscript>

## Section I - Formatting your SD card

1. Download the latest version of [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm)
  - Click on the picture on the website to download the app
1. Run GUIFormat with Administrator permissions
1. Select your drive letter
1. Set your `Allocation size unit` it to `32768`
  - If this is too large for your SD, set it to the highest one that works
1. Make sure the `Quick Format` check box is checked
1. Start the format process

![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)
{:.notice--info}

## Section II - Checking for errors
1. Go to the properties window of your SD card
   - `Windows Explorer` -> `This PC` -> Right click your SD card -> `Properties`
1. In the tools tab, Select `Check Now`
1. Check both `Automatically fix file system errors` and `Scan for and attempt recovery of bad sectors`
1. Start the checking process

This will scan the SD card and correct any errors it finds

## Section III - Checking SD card read/write

1. Download and extract [the h2testw archive](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) anywhere on your computer.
   - It can also be extracted on an external device as long as that external device isn't your SD card
1. With your SD card inserted into your computer, run `h2testw.exe`
1. Select which language you'd like to see h2testw in
1. Set your SD card's drive letter as your target
1. Ensure `all available space` is selected
1. Click `Write + Verify`
- Wait until the process is completed

If the test shows the result `Test finished without errors`, your SD card is good and you can delete all `.h2w` files on your SD card
{: .notice--info}

If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it!
{: .notice--danger}
{% endcapture %}

{% capture linuxInstructions %}
<noscript>
   <h2>Linux</h2>
</noscript>

## Section I - Determining which slot your SD card is in
1. Make sure your SD card is **not** inserted into your Linux machine
1. Launch the Linux Terminal
1. Type `watch "lsblk"`
1. Insert your SD card into your Linux machine
1. Observe the output. It should match something like this:
```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```
1. Take note of the device mount point. In our example above, it was `mmcblk0`
   - If `RO` is set to 1, make sure the lock switch is not slid down
1. Hit CTRL + C to exit the menu

## Section II - Formatting the card

1. Type in `sudo mkdosfs /dev/(device mount point from above) -s 64 -F 32 -I` to create a single FAT32 partition with 32 KB cluster size on the SD card

## Section III - Using F3
1. Download and extract [the F3 archive](https://github.com/AltraMayor/f3/archive/v7.2.zip) anywhere on your computer.
1. Launch the terminal in the F3 directory
1. Run `make` to compile F3
1. With your SD card inserted and mounted, run `./f3write <your sd card mount point>`
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
1. Run `./f3read <your sd card mount point>`
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

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your SD card is good and you can delete all `.h2w` files on your SD card
{: .notice--info}

If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it!
{: .notice--danger}
{% endcapture %}

{% capture macosInstructions %}
<noscript>
   <h2>macOS</h2>
</noscript>

## Section I - Formatting your SD card
### OS X El Capitan (10.11) and later

1. Launch the Disk Utility application
1. Select `Show All Devices` in the top-left `View` panel
1. Select your SD card from the sidebar
   - Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!
1. Click `Erase` at the top
1. Ensure that `Format` is set to `MS-DOS (FAT32)`
   - On El Capitan (10.11) through Catalina (10.15) choose `MS-DOS (FAT)`
1. Ensure that `Scheme` is set to `Master Boot Record`
   - If `Scheme` does not appear, click `Cancel` and make sure to choose the device instead of a volume
1. Click `Erase`, then click `Close`

### OS X Yosemite (10.10) and earlier
1. Launch the Disk Utility application
1. Select your SD card from the sidebar
   - Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!
1. Click `Partition` at the top
   - If `Partition` does not appear, make sure to choose the device instead of a volume
1. Ensure that `Partition Layout` is set to `1 Partition`
1. Ensure that `Format` is set to `MS-DOS (FAT)`
1. From the Options button (below the partition table), select `Master Boot Record`.
1. Click `OK` -> `Apply` -> `Partition`

## Section II - Using F3
1. Open Terminal
1. Install F3 from brew by running `brew install f3`
   - If you don't have brew, install it with the instructions on [brew.sh](https://brew.sh)
1. With your SD card inserted and mounted, run `f3write <your sd card mount point>`
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
1. Run `f3read <your sd card mount point>`
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

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your SD card is good and you can delete all `.h2w` files on your SD card
{: .notice--info}

If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it!
{: .notice--danger}
{% endcapture %}

<div class="tabcontainer">
   <a class="tablinks btn btn--large btn--info windows" href="#windowsInstructions" onclick="openTab(event, 'windowsInstructions')">Windows</a>
   <a class="tablinks btn btn--large btn--info macos" href="#macosInstructions" onclick="openTab(event, 'macosInstructions')">macOS</a>
   <a class="tablinks btn btn--large btn--info other" href="#linuxInstructions" onclick="openTab(event, 'linuxInstructions')">Linux</a>

   <div id="windowsInstructions" class="blanktabcontent">{{ windowsInstructions | markdownify }}</div>
   <div id="linuxInstructions" class="blanktabcontent">{{ linuxInstructions | markdownify }}</div>
   <div id="macosInstructions" class="blanktabcontent">{{ macosInstructions | markdownify }}</div>
</div>

You can now restore the contents of your SD card and continue.
{: .notice--primary}

<script src="/assets/js/tabs.js"></script>
