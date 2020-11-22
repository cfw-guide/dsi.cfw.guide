---
title: Installing hiyaCFW
redirect_from:
  - /guide/installing-hiyacfw
  - /guide/hiyacfw
  - /hiyacfw
  - /hiyacfw-setup
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
1. Extract the hiyaCFW Helper archive anywhere on your PC
{% endcapture %}

{% capture macosPrep %}
<noscript>
   <h3>macOS</h3>
</noscript>

1. Download the latest macOS version of [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extract the hiyaCFW Helper archive anywhere on your PC
{% endcapture %}

{% capture linuxPrep %}
<noscript>
   <h3>Linux</h3>
</noscript>

1. Install Python 3 using your package manager if its not already installed
1. Download the latest Python version of [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extract the hiyaCFW Helper archive anywhere on your PC
1. Make sure the neccessary Python packages are installed running `pip3 install -r requirements.txt` in the directory containing the extracted files
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

1. Launch hiyaCFW Helper
  - **Windows:** - Launch `HiyaCFW_Helper.exe`
  - **macOS:** - Right click the `HiyaCFW_Helper` file extracted from the hiyaCFW Helper archive and choose `Open`
  - **Linux:** - Launch the `HiyaCFW_Helper.py` extracted from the hiyaCFW Helper archive
1. Click the `...` button in the "NAND file with No$GBA footer" box
1. Navigate to your NAND backup, and click `Open`
1. Press `Start`
1. In the new pop-up window, navigate to the root of your SD card, and press `OK`.
   - The process may take several minutes
1. When the application says "Done", close out of hiyaCFW Helper
1. Close the terminal window

## Section III - Configuring Unlaunch and hiyaCFW

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
