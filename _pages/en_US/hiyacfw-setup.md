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

This allows you to install your own apps to the Nintendo DSi Menu without risk of bricking, as they're installed to the SD card so problems can be easily be fixed.

It also features easy installation of homebrew applications to the DSi Menu, and displaying a custom splash screen on boot.

This section is entirely optional. If Unlaunch is enough for you, you can stop here.
{: .notice--primary}

## Requirements
- A Nintendo DSi with [Unlaunch](/installing-unlaunch) installed
- A NAND Backup taken from your device using dumpTool
   - If you don't have one of these, follow our [Dumping NAND](dumping-nand) guide
- A Windows, macOS or Linux device

## Section I - Preparing your PC for installing hiyaCFW

{% capture windowsPrep %}
<noscript>
   <h3>Windows</h3>
</noscript>

1. Download & install the latest version of [7-Zip](https://www.7-zip.org/download.html)
   - This will not work with any other archive extractor tool you own, such as WinRAR. hiyaCFW helper relies on 7-Zip itself, and not a general archive extractor
1. Download the latest Windows version of [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
{% endcapture %}

{% capture macosPrep %}
<noscript>
   <h3>macOS</h3>
</noscript>

1. Download the latest macOS version of [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extract the hiyaCFW Helper archive anywhere on your PC
1. Extract the Just-A-DFC archive anywhere on your PC
{% endcapture %}

{% capture linuxPrep %}
<noscript>
   <h3>Linux</h3>
</noscript>

1. Install Python 3 using your package manager if its not already installed
1. Download the latest Python version of [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extract the hiyaCFW Helper archive anywhere on your PC
1. Extract the Just-A-DFC archive anywhere on your PC
{% endcapture %}

<div class="tabcontainer">
   <a class="tablinks btn btn--large btn--info delink windows" href="#windowsPrep" onclick="openTab(event, 'windowsPrep')">Windows</a>
   <a class="tablinks btn btn--large btn--info delink macos" href="#macosPrep" onclick="openTab(event, 'macosPrep')">macOS</a>
   <a class="tablinks btn btn--large btn--info delink other" href="#linuxPrep" onclick="openTab(event, 'linuxPrep')">Linux</a>

   <div id="windowsPrep" class="blanktabcontent">{{ windowsPrep | markdownify }}</div>
   <div id="macosPrep" class="blanktabcontent">{{ macosPrep | markdownify }}</div>
   <div id="linuxPrep" class="blanktabcontent">{{ linuxPrep | markdownify }}</div>
</div>

## Section II - Adding hiyaCFW files to your SD card

![Screenshot of the HiyaCFW Helper](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

{% capture windowsHelper %}
<noscript>
   <h3>Windows</h3>
</noscript>

1. Launch the `HiyaCFW_Helper.exe` file
1. Click the `...` button in the "NAND file with No$GBA footer" box
1. Navigate to your NAND backup, and click `Open`
1. Press `Start`
1. In the new pop-up window, navigate to the root of your SD card, and press `OK`.
   - The process may take several minutes
1. When the application says "Done", close out of hiyaCFW Helper
1. Close the terminal window
{% endcapture %}

{% capture macosHelper %}
<noscript>
   <h3>macOS</h3>
</noscript>

1. Right click the `HiyaCFW_Helper` file extracted from the hiyaCFW Helper archive and choose `Open`
1. Click the `...` button in the "NAND file with No$GBA footer" box
1. Navigate to your NAND backup, and click `Open`
1. Press `Start`
1. In the new pop-up window, navigate to the root of your SD card, and press `OK`.
   - The process may take several minutes
1. When the application says "Done", close out of hiyaCFW Helper
1. Close the terminal window
{% endcapture %}

{% capture linuxHelper %}
<noscript>
   <h3>Linux</h3>
</noscript>

1. Launch the `HiyaCFW_Helper.py` extracted from the hiyaCFW Helper archive
1. Click the `...` button in the "NAND file with No$GBA footer" box
1. Navigate to your NAND backup, and click `Open`
1. Press `Start`
1. In the new pop-up window, navigate to the root of your SD card, and press `OK`.
   - The process may take several minutes
1. When the application says "Done", close out of hiyaCFW Helper
1. Close the terminal window
{% endcapture %}

<div class="tabcontainer">
   <a class="tablinks btn btn--large btn--info delink windows" href="#windowsHelper" onclick="openTab(event, 'windowsHelper')">Windows</a>
   <a class="tablinks btn btn--large btn--info delink macos" href="#macosHelper" onclick="openTab(event, 'macosHelper')">macOS</a>
   <a class="tablinks btn btn--large btn--info delink other" href="#linuxHelper" onclick="openTab(event, 'linuxHelper')">Linux</a>

   <div id="windowsHelper" class="blanktabcontent">{{ windowsHelper | markdownify }}</div>
   <div id="macosHelper" class="blanktabcontent">{{ macosHelper | markdownify }}</div>
   <div id="linuxHelper" class="blanktabcontent">{{ linuxHelper | markdownify }}</div>
</div>

## Section III - Maximizing available space

This is the section you should redo if you get a screen saying "An Error Has Occured"
{: .notice--info}

The Nintendo DSi Menu has a bug that limits how much free space there can be. While this doesn't occur on the actual NAND (since the chip can never exceed 128 MB), it can happen using an SD card. What works and what doesn't goes by every other range of two gigabytes. For example, having 0-2 GB of free space works, but 2-4 GB doesn't. The same goes for 4-6 GB vs 6-8, up until you get to the size of your SD card.

To ensure that your SD card has the maximum amount of free space that will work we'll be using Dummy File Creator for hiyaCFW.

1. Download the latest version of [Dummy File Creator](https://github.com/Epicpkmn11/dfc/releases/latest/download/dfc.nds)
1. Place `dfc.nds` anywhere on your SD card
1. Power on your Nintendo DSi console while holding <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
   - This should take you to Unlaunch's file menu
1. Select `Dummy File Creator` from the list
1. Once it finishes, press <kbd>START</kbd> to turn off your DSi

## Section IV - Configuring Unlaunch and hiyaCFW

1. Power on your Nintendo DSi console while holding <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
   - This should take you to Unlaunch's file menu
1. Navigate to `OPTIONS` -> `NO BUTTON`
1. Select `hiya.dsi` and press <kbd class="face">A</kbd>
   - This will make the system launch hiyaCFW at boot
1. Save your settings and restart your console
1. Hold <kbd>SELECT</kbd> while powering on your Nintendo DSi console to access the hiyaCFW settings
   - If you selected "Install latest TWiLight Menu++ on custom firmware", to boot into the SDNAND home screen instead of TWiLight Menu++ navigate to `Autoboot title` and press <kbd class="face">A</kbd> to deselect it.
1. Change the settings to your liking, and press <kbd>START</kbd> to continue

Your system will now boot from the SD card instead of the internal NAND.

If it shows `An Error Has Occurred`, please see our [Troubleshooting](troubleshooting) page.
{: .notice--warning}

<script src="/assets/js/tabs.js"></script>
