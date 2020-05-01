---
title: SD card preparations
---

This is a subset of the main guide, to teach users how to prepare the SD card for following the guide. In the process, we'll format the SD card to a format suitable for the Nintendo DSi & checking for errors in the card.

Make sure to backup your SD card contents BEFORE following this. Your SD Card will be WIPED in the process.
{: .notice--danger}

<button class="tablinks btn btn--large btn--success" id="defaultOpen" onclick="openTab(event, 'memoryPitInstructions')">Windows</button>
<button class="tablinks btn btn--large btn--info" onclick="openTab(event, 'flipnoteLennyInstructions')">Linux</button>
<button class="tablinks btn btn--large btn--info" onclick="openTab(event, 'macOSInstructions')">MacOS</button>

{% capture memoryPitInstructions %}
## Windows

### Section I - Formatting your SD card

![](http://www.ridgecrop.demon.co.uk/guiformat.png)

1. Download the latest version of [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm)
  - If you have difficulties downloading it, click where it tells you to click in order to download it.
2. Run GUIFormat with Administrator permissions
3. Select your drive letter.
4. For your `allocation size unit`, set it to `32768`.
5. If the checkbox for "Quick Format" has a check inside, tick it off.
6. Start the format process.

### Section II - Checking for errors

1. Go to the properties window of your SD card.
  - `Windows Explorer` -> `This PC` -> Right click your SD card -> `Properties`.
2. In the tools tab, Select "Check Now".
2. Check both "Automatically fix file system errors" and "Scan for and attempt recovery of bad sectors".
3. Start the checking process.

This will scan the SD card and correct any errors it finds.

### Section III - Checking SD card read/write

1. Download and extract [the h2testw archive](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) anywhere on your computer.
  - It can also be extracted on an external device as long as that external device isn't your SD card.
2. With your SD card inserted into your computer, run `h2testw.exe`.
3. Select which language you'd like to see h2testw in.
4. Set your SD card's drive letter as your target.
5. Ensure "all available space" is selected.
6. Click "Write + Verify".
- Wait until the process is completed.

If the test shows the result `Test finished without errors`, your SD card is good and you can delete all `.h2w` files on your SD card
{: .notice--info}

If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it!
{: .notice--danger}
{% endcapture %}

{% capture flipnoteLennyInstructions %}
## Linux

### Section I - Determining which slot your SD card is in

1. Make sure your SD card is **not** inserted.
2. Launch the Linux Terminal
3. Type `watch "dmesg | tail -10"`
4. Insert your SD card into your PC.
5. Observe the output. It should match something like this:
```
[11599.200739] sd 3:0:0:0: [sdc] 7744512 512-byte logical blocks: (3.96 GB/3.69
GiB)
[11599.204630] sd 3:0:0:0: [sdc] Assuming drive cache: write through
[11599.210491] sd 3:0:0:0: [sdc] Assuming drive cache: write through
[11599.210495]  sdc:
```
6. Take note of the device mount point. In our example above, it was `sdc`.
7. Hit CTRL + C to exit the menu.

### Section II - Formatting the card

![](https://en.wikipedia.org/wiki/Cfdisk#/media/File:Cfdisk_screenshot.png)

1. Type in `sudo cfdisk /dev/(device mount point from above)`.
2. On each partition, hit `Delete`.
3. Create a new Primary partition that covers the size of your entire SD card.
- This will create a new partition with the linux filetype.
4. Select type and take a look at the menu.
5. Find "W95 FAT32" and take note of the code on the left side of that text.
6. Press any key, then enter the code you took note of in the previous step.
7. Hit enter, then hit Quit.

### Section III - Using F3
{% include_relative f3.md %}
{% endcapture %}

{% capture macOSInstructions %}
## MacOS

### Section I - Formatting your SD card

1. In the Disk Utility app on your Mac, choose View > Show All Devices.
2. In the sidebar, select your SD card.
3. Click the Erase button.
4. From the Scheme pop-up menu, select `Master Boot Record`.
5. From the Format pop-up menu, select MS-DOS (FAT)
6. Click Erase, then click Done.

### Section II - Using F3
{% include_relative f3.md %}
{% endcapture %}

<div id="memoryPitInstructions" class="tabcontent">{{ memoryPitInstructions | markdownify }}</div>
<div id="flipnoteLennyInstructions" class="tabcontent">{{ flipnoteLennyInstructions | markdownify }}</div>
<div id="macOSInstructions" class="tabcontent">{{ macOSInstructions | markdownify }}</div>

## How to continue on

- If your SD card dumps had Nintendo DSi modding done to it, feel free to restore it and continue onwards. There is no special way of restoring it.
- If your SD card was fresh and you'd like to get started, there are different steps you'd need to follow:
  - **Unlaunch + hiyaCFW users**: Follow Section 1b of [Launching the Exploit](exploit-launch), then refollow the [hiyaCFW](hiyacfw) setup.
  - **Unlaunch**: Follow Section 1b of [Launching the Exploit](exploit-launch)
  - **No Unlaunch**: Start from the beginning of the guide and follow through.

<script>
	let tabcontent = document.getElementsByClassName("tabcontent");
	let tablinks = document.getElementsByClassName("tablinks");

	function openTab(evt, tabName) {
		let element;

		for (element of tabcontent) {
			element.style.display = "none";
		}

		for (element of tablinks) {
			element.className = element.className.replace("btn--success", "btn--info");
			if (!element.className.includes('btn--info'))
				element.className += " btn--info";
		}

		document.getElementById(tabName).style.display = "block";
		evt.currentTarget.className = evt.currentTarget.className.replace("btn--info", "btn--success");
	}

	// Get the element with id="defaultOpen" and click on it
	document.getElementById("defaultOpen").click();
</script>