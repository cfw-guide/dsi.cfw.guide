---
title: SD card Setup
redirect_from:
  - /f3-(linux)
  - /h2testw-(windows)
  - /f3x-(mac)
  - /sd-prep
---

This is a subset of the main guide, to teach users how to prepare the SD card for following the guide. In the process, we'll format the SD card to a format suitable for the Nintendo DSi & checking for errors in the card.

Make sure to backup your SD card contents BEFORE following this. Your SD Card will be WIPED in the process.
{: .notice--danger}

<button class="tablinks btn btn--large btn--primary" id="defaultOpen" onclick="openTab(event, 'memoryPitInstructions')">Windows</button>
<button class="tablinks btn btn--large btn--info" onclick="openTab(event, 'macOSInstructions')">MacOS</button>
<button class="tablinks btn btn--large btn--info" onclick="openTab(event, 'flipnoteLennyInstructions')">Linux</button>

{% capture memoryPitInstructions %}
## Windows
### Section I - Formatting your SD card
![](https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png)

1. Download the latest version of [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm)
  - If you have difficulties downloading it, click where it tells you to click in order to download it
2. Run GUIFormat with Administrator permissions
3. Select your drive letter
4. For your `allocation size unit`, set it to `32768`
5. Make sure the `Quick Format` check box is unchecked
6. Start the format process

### Section II - Checking for errors
1. Go to the properties window of your SD card
  - `Windows Explorer` -> `This PC` -> Right click your SD card -> `Properties`
2. In the tools tab, Select "Check Now"
2. Check both "Automatically fix file system errors" and "Scan for and attempt recovery of bad sectors"
3. Start the checking process

This will scan the SD card and correct any errors it finds

### Section III - Checking SD card read/write

1. Download and extract [the h2testw archive](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) anywhere on your computer.
  - It can also be extracted on an external device as long as that external device isn't your SD card
2. With your SD card inserted into your computer, run `h2testw.exe`
3. Select which language you'd like to see h2testw in
4. Set your SD card's drive letter as your target
5. Ensure "all available space" is selected
6. Click "Write + Verify"
- Wait until the process is completed

If the test shows the result `Test finished without errors`, your SD card is good and you can delete all `.h2w` files on your SD card
{: .notice--info}

If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it!
{: .notice--danger}
{% endcapture %}

{% capture flipnoteLennyInstructions %}
## Linux
### Section I - Determining which slot your SD card is in
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
6. Take note of the device mount point. In our example above, it was `mmcblk0`
  - If `RO` is set to 1, make sure the lock switch is not slid down
7. Hit CTRL + C to exit the menu

### Section II - Formatting the card
![](https://s.blogcdn.com/www.engadget.com/media/2012/06/cfdisk.jpg)

1. Type in `sudo cfdisk /dev/(device mount point from above)`
2. On each partition, hit `Delete`
3. Create a new Primary partition that covers the size of your entire SD card
- This will create a new partition with the linux filetype
4. Select type and take a look at the menu
5. Find "W95 FAT32" and take note of the code on the left side of that text
6. Press any key, then enter the code you took note of in the previous step
7. Hit enter, then hit Quit

### Section III - Using F3
{% include_relative f3.md %}
{% endcapture %}

{% capture macOSInstructions %}
## Mac OS
### Section I - Formatting your SD card
#### OS X El Capitan (10.11) and later

1. Launch the Disk Utility application
2. Select "Show All Devices" in the top-left "View" panel
3. Select your SD card from the sidebar
  - Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!
4. Click "Erase" at the top
6. Ensure that "Format" is set to "MS-DOS (FAT)"
7. Ensure that "Scheme" is set to "Master Boot Record"
  - If "Scheme" does not appear, click "Cancel" and make sure to choose the device instead of a volume
8. Click "Erase", then click "Close"

#### OS X Yosemite (10.10) and earlier
1. Launch the Disk Utility application
2. Select your SD card from the sidebar
  - Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!
3. Click "Partition" at the top
  + If "Partition" does not appear, make sure to choose the device instead of a volume
4. Ensure that "Partition Layout" is set to "1 Partition"
5. Ensure that "Format" is set to "MS-DOS (FAT)"
6. From the Options button (below the partition table), select "Master Boot Record".
7. Click `OK` -> `Apply` -> `Partition`

### Section II - Using F3
{% include_relative f3.md %}
{% endcapture %}

<div id="memoryPitInstructions" class="blanktabcontent">{{ memoryPitInstructions | markdownify }}</div>
<div id="flipnoteLennyInstructions" class="blanktabcontent">{{ flipnoteLennyInstructions | markdownify }}</div>
<div id="macOSInstructions" class="blanktabcontent">{{ macOSInstructions | markdownify }}</div>

You can now restore the contents of your SD card and continue.
{: .notice--primary}

<script>
	let tabcontent = document.getElementsByClassName("blanktabcontent");
	let tablinks = document.getElementsByClassName("tablinks");

	function openTab(evt, tabName) {
		let element;

		for (element of tabcontent) {
			element.style.display = "none";
		}

		for (element of tablinks) {
			element.className = element.className.replace("btn--primary", "btn--info");
			if (!element.className.includes('btn--info'))
				element.className += " btn--info";
		}

		document.getElementById(tabName).style.display = "block";
		evt.currentTarget.className = evt.currentTarget.className.replace("btn--info", "btn--primary");
	}

	// Get the element with id="defaultOpen" and click on it
	document.getElementById("defaultOpen").click();
</script>
