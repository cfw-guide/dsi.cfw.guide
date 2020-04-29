---
title: hiyaCFW
redirect_from:
  - /guide/installing-hiyacfw
  - /guide/hiyacfw
  - /installing-hiyacfw
---

{% include toc title="Table of Contents" %}

Do not system update after installing hiyaCFW. This will remove hiyaCFW's SD patches.
{: .notice--danger}

hiyaCFW has several advantages that an Unlaunch-only system will not. These include:
- Redirecting your NAND to the SD card
- Installing homebrew applications to the System Menu with ease
- Display a custom splash screen on system boot

## Requirements
- A Nintendo DSi with [Unlaunch](unlaunch)
- A [NAND backup](nand-dump) taken from your device, with the NO$GBA Footer
  - dumpTool will create this footer automatically when it makes a backup
  - If you followed the guide, you should already have one. If you do not, creating one at this point would work.
- The latest version of [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases){:target="_blank"}
  - Windows users are recommended to use the compiled `.exe` binary + the latest version of [7-Zip](https://www.7-zip.org/download.html){:target="_blank"}
  - Users of other operating systems could use the source code file `.py` (requires [Python 3](https://www.python.org/downloads/){:target="_blank"} with the Tk library)

## Instructions
### Section I - Preparing your SD card
1. Extract the hiyaCFW Helper archive anywhere on your computer.
2. Launch hiyaCFW Helper.
 - If launching the `.py` file opens IDLE, open the terminal to this directory and type `py3 HiyaCFW_Helper.py`
 - Windows users can just double click the `.exe` file in Windows Explorer
3. Click the `...` button in the `NAND file with No$GBA footer` box.
4. Navigate to your NAND backup, and click `Open`.
5. Press `Start`.
6. In the new pop-up window, navigate to the root of your SD card, and press `OK`.
  - The process may take several minutes

When it says "Done", then you may eject your SD card and insert it into your Nintendo DSi.

### Section II - Configuring hiyaCFW on your system
1. Power on your Nintendo DSi console while holding **(A) + (B)**.
  - Unlaunch's GUI should appear.
2. Launch `hiyaCFW`.
  - You can launch hiyaCFW automatically when booting your console by [configuring your options](unlaunch#switching-button-booting-combination).
3. Change the settings to your liking, and press (START) to continue

Your system will now boot from the SD card instead of the internal NAND.

### Section III - "An Error Has Occurred"
Unfortunately, the DSi System Menu was not built with the amount of free space the "NAND" has in mind. It uses a signed 32-bit integer, meaning that after 2GB, it will jump to a negative free space number. This is fine for the NAND, since it will never go over 128 MB. However, this is a problem when we redirect the NAND using hiyaCFW. Fortunately, this is easy to fix. After a certain point, the negative number becomes a positive, so you just want to keep that free space number always at a positive number.

The simplest way to do so is to simply fill up your SD card so that your free space value is less than 2GB. However, every other range of two gigabytes works, so 0GB-2GB free is fine, while 2GB-4GB is not.

Enter the free space on your SD in the box below, press enter, and it will tell you if your SD has a working amount of free space. (Javascript required for it to work)

If your SD needs less free space, you can easily fill it with dummy files. Listed below are command prompt/terminal commands that will make 1GB worth of dummy files.
 - Windows: `fsutil file createnew dummy0 1073741824`
 - Linux/macOS: `dd if=/dev/zero of=dummy0 count=1024 bs=1048576`

Fill it up until the website says that it will work.

<input id="sdSpace" type="number" placeholder="Free space on your SD, in gigabytes (ex. 1.5)" oninput="updateWillWork()">
Your SD card<span id="willWork">...</span><noscript>is unable to be checked due to JavaScript being disabled. Please enable it in your web browser and try again.</noscript>

<script>
function updateWillWork() {
  let freeSpace = document.getElementById("sdSpace").value;
  document.getElementById("willWork").innerHTML = " " + ((freeSpace % 4) < 2 ? "will work!" : "needs dummy files...");
}
</script>