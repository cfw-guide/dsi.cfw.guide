---
title: "FAQ"
redirect_from:
  - help/faq
---
{% include toc title="Table of Contents" %}

### Unlaunch freezes at `MISMATCH IN FAT COPIES`. What do I do?
This error is caused by twlnf. It has a critical bug that doesn't properly update the entire NAND after modifying it. This causes certain homebrew (like the Unlaunch installer) to throw an error. Fortunately, this is fixable. Unfortunately, the *method* to fix it isn't set in stone, and largely varies from system to system. Generally, deleting any DSiWare installed via twlnf in the past does the job, but make sure you have another homebrew entrypoint available if you delete an entrypoint. It has also been reported that moving *all* DSiWare to the SD card and back to the system can help in some cases.

### How can I restore my NAND without Unlaunch?
You can follow Gadorach's [hardmodding guide](https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/){:target="_blank"} to hardmod your DSi. Previous soldering experience is required.

### Why do I boot into "An Error Has Occurred" when I use hiyaCFW with the default DSi Menu, and how can I fix it?
Unfortunately, the DSi System Menu was not built with the amount of free space the "NAND" has in mind. It uses a signed 32-bit integer, meaning that after 2GB, it will jump to a negative free space number. This is fine for the NAND, since it will never go over 128 MB. However, this is a problem when we redirect the NAND using hiyaCFW. Fortunately, this is easy to fix. After a certain point, the negative number becomes a positive, so you just want to keep that free space number always at a positive number.

The simplest way to do so is to simply fill up your SD card so that your free space value is less than 2GB. However, every other range of two gigabytes works, so 0GB-2GB free is fine, while 2GB-4GB is not.

Enter the free space on your SD in the box below, press enter, and it will tell you if your SD has a working amount of free space. (Javascript required for it to work)

If your SD needs less free space, you can create dummy files. There are commands you could put into your command prompt/terminal, dependent on your operating system. Be sure to use the right command for the right operating system. We have these commands listed below, that will make 1GB worth of dummy files
 - Windows: `fsutil file createnew dummy0 1073741824`
 - Linux/macOS: `dd if=/dev/zero of=dummy0 count=1024 bs=1048576`

Fill it up until the website says that it will work.

<input id="sdSpace" type="number" placeholder="Free space on your SD, in gigabytes (ex. 1.5)" onchange="updateWillWork()">
Your SD <span id="willWork">...</span>

<script>
function updateWillWork() {
  let freeSpace = document.getElementById("sdSpace").value;
  document.getElementById("willWork").innerHTML = freeSpace % 4 < 2 ? "will work!" : "needs dummy files...";
}
</script>

### Why don't I see TWiLight Menu++?
You're in SysNAND instead of the SDNAND. The HiyaCFW Helper isn't applying the CFW's patches properly, so please wait for a fix in the helper.

### Is there a safe way to remove Unlaunch?
Yes, Unlaunch v1.5 and higher's installer can uninstall Unlaunch. Keep in mind that this may result in an **irrecoverable brick** if you have installed any non-legit DSiWare to your system NAND (not the SDNAND redirection provided by hiyaCFW), or have otherwise messed with system files. On another note, it will say that the system will become "useless", which is just NoCash's way of saying stock.

### I get a white screen when trying to use dumpTool
That implies an SD card error. Please make sure you have formatted your SD card to FAT32 with a 32kb cluster size. Alternatively, test your SD card to make sure it isn't corrupted. You can do so by using [H2testw for Windows](h2testw-(windows)), [F3 for Linux](f3-(linux)) or [F3X for Mac](f3x-(mac)).

### How do I change what booting my console boots me into when I have installed Unlaunch?
1. Power on your DSi while holding **(A)** & **(B)**.
2. Navigate to `OPTIONS`, and press (A).
3. Pick which button configuration you'd like to change.
  - (A) & (B) are hardcoded to open Unlaunch's menu; you can't change that.
4. Navigate to the application you'd like to launch when you hold that button (or no button).
  - If it's a file on your SD card, it should say the file name on the bottom screen.
  - To get the normal DSi Menu back, hit "Launcher".
5. Navigate to `SAVE & EXIT`, and press (A).

### I do not get any audio in my DSi Menu, nor do I have a boot splash when using Unlaunch
That is intentional. If you'd like to get those features back, install hiyaCFW/
