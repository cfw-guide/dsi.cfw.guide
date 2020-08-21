---
title: Installing hiyaCFW
redirect_from:
  - /guide/installing-hiyacfw
  - /guide/hiyacfw
  - /hiyacfw
  - /installing-hiyacfw
---

{% include toc title="Table of Contents" %}

Do not system update after installing hiyaCFW. This will remove hiyaCFW's SD patches.
{: .notice--danger}

hiyaCFW is a custom firmware that will allow you to run your system NAND (internal storage) off of your SD card.

This allows you to modify your system without risk of bricking your internal system, as any changes are simply made to the SD card instead, which can be easily restored.

It also features easy installation of homebrew applications to the DSi Menu, and displaying a custom splash screen on boot.

This section is entirely optional. If Unlaunch is enough for you, you can stop here.
{: .notice--primary}

## Requirements
- A Nintendo DSi with [Unlaunch](/installing-unlaunch) installed
- A NAND Backup taken from your device using dumpTool
  - If you don't have one of these, follow our [Dumping NAND](dumping-nand) guide
- A Windows, MacOS or Linux device

## Section I - Preparing your PC for hiyaCFW installing

<button class="tablinks btn btn--large btn--primary" id="defaultOpen" onclick="openTab(event, 'memoryPitInstructions')">Windows</button>
<button class="tablinks btn btn--large btn--info" onclick="openTab(event, 'flipnoteLennyInstructions')">Linux & MacOS</button>

{% capture memoryPitInstructions %}
### Windows

1. Download & install the latest version of [7-Zip](https://www.7-zip.org/download.html)
   - This will not work with any other archive extractor tool you own, such as WinRAR. hiyaCFW helper relies on 7-Zip itself, and not a general archive extractor
1. Download the latest windows version of [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Download the latest windows version of [Just-A-DFC](https://github.com/yourkalamity/just-a-dfc/releases)
1. Extract the hiyaCFW Helper archive anywhere on your PC
1. Launch the `HiyaCFW_Helper.exe` file, located in the folder you have just extracted
1. Leaving the hiyaCFW Helper open, launch the Just-A-DFC `.exe` file you downloaded earlier
{% endcapture %}

{% capture flipnoteLennyInstructions %}
### Linux & MacOS

1. Download & install the latest version of [Python 3](https://www.python.org/downloads/)
1. Download the latest python version of [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Download the latest python file of [Just-A-DFC](https://github.com/yourkalamity/just-a-dfc/releases)
1. Extract the hiyaCFW Helper archive anywhere on your PC
1. Launch two terminal windows
  - On MacOS, you can launch a terminal window by entering spotlight search (`Command` + `Space Key`) & typing "Terminal"
  - On Linux, launch a terminal instance via your application launcher
1. On the first terminal, `cd` to where you extracted the hiyaCFW Helper and type `py3 HiyaCFW_Helper.py`
1. On the second terminal, `cd` to where you downloaded `just-a-DFC.py` and type `py3 just-a-DFC.py`
{% endcapture %}

<div id="memoryPitInstructions" class="blanktabcontent">{{ memoryPitInstructions | markdownify }}</div>
<div id="flipnoteLennyInstructions" class="blanktabcontent">{{ flipnoteLennyInstructions | markdownify }}</div>

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

## Section II - Adding hiyaCFW files to your SD card
![](https://camo.githubusercontent.com/538f1d70409d6b38170ef7d845b7818bd902fd87/68747470733a2f2f696d6167652e6962622e636f2f68687a4b524c2f53637265656e2d53686f742d323031382d31302d31382d61742d31362d33302d31382e706e67)

1. Switch over to the hiyaCFW window
1. Click the `...` button in the `NAND file with No$GBA footer` box
1. Navigate to your NAND backup, and click `Open`
1. Press `Start`
1. In the new pop-up window, navigate to the root of your SD card, and press `OK`.
   - The process may take several minutes
1. When the application says "Done", close out of hiyaCFW Helper
1. Close the terminal window

## Section III - Maximizing available space

This is the section you should redo if you get a screen saying "An Error Has Occured"
{: .notice--info}

The Nintendo DSi System Menu has a limit on how much free space it could have on the storage device hosting the menu. While this doesn't occur on the actual NAND (since the chip would never exceed 128 MB), it can happen using an SD card. The factor of what is allowed and what isn't goes by every other range of two gigabytes. For example, while having 0-2 GB worth of free space would allow your system menu to boot, 2-4 GB doesn't. The same goes for 4-6 GB vs 6-8, up until you get to your SD card size.

Although the system menu only breaks when the SD card free space is in a negative range, it'd be much better to maximize what you are able to use out of your SD card. We'll be using the "Just-a-DFC" tool made by YourKalamity to do so.

1. Switch over to the terminal window containing Just-A-DFC
1. Identify where your SD card is mounted
1. Wait a few minutes until all the dummy files have been created
1. If the application doesn't close you out, hit ENTER.
1. Close the terminal window

## Section IV - Configuring Unlaunch and hiyaCFW

1. Power on your Nintendo DSi console while holding **(A) + (B)**
   - This should take you to Unlaunch's Management Menu.
1. Navigate to `OPTIONS` -> `NO BUTTON`
1. Select `hiya.dsi` and press **(A)**
   - This will make the system launch hiyaCFW at boot
1. Save your settings and restart your console
1. Hold **(SELECT)** while powering on your Nintendo DSi console to access the hiyaCFW settings
   - If you selected `Install latest TWiLight Menu++ on custom firmware` to boot into the SDNAND home screen instead of TWiLight Menu++, navigate to `Autoboot title` and press **(A)** to deselect it.
1. Change the settings to your liking, and press **(START)** to continue

Your system will now boot from the SD card instead of the internal NAND.

If you receive `An Error Has Occurred`, please view our [Troubleshooting](troubleshooting) page.
{: .notice--warning}
