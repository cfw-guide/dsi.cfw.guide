---
title: "FAQ"
redirect_from:
  - help/faq
---
{% include toc title="Table of Contents" %}

### What are the SD card requirements?
You will need a FAT32-Formatted SD card formatted with a 32kb cluster size to follow this guide
- Be sure to check your SD card for errors. You can do so by using [H2testw for Windows](h2testw-(windows)), [F3 for Linux](f3-(linux)) or [F3X for Mac](f3x-(mac)).

### What does a white screen in dumpTool mean?
That implies an SD card error. Please make sure you have formatted your SD card to FAT32 with a 32kb cluster size. Alternatively, test your SD card to make sure it isn't corrupted. You can do so by using [H2testw for Windows](h2testw-(windows)), [F3 for Linux](f3-(linux)) or [F3X for Mac](f3x-(mac)).

### Why does Unlaunch freeze at `MISMATCH IN FAT COPIES`?
twlnf has a critical bug that doesn't properly update the entire NAND after modifying it, which causes certain homebrew (like the Unlaunch installer) to throw an error. While fixable, the method to do so isn't set in stone and largely varies between systems. One method is to delete any DSiWare installed via twlnf in the past, but it has also been reported that moving *all* DSiWare to the SD card and back to the system can help in some cases.

### How do I launch retail ROMs?
Retail ROMs are not able to be launched through Unlaunch alone, as Retail ROMs was made to be used by Slot-1. In order to run them from your SD card, you'll need to use nds-bootstrap, an application that can redirect Slot-1 reads to the SD card. There are multiple ways you could use it.
- Download nds-bootstrap by itself and make constant changes to the configuration file. It isn't user friendly and won't work with soft-resets, but it works.
- Use TWiLight Menu++ to navigate your SD card and launch the ROM files. It will make the edits necessary to the configuration file.
- Set up hiyaCFW forwarder applications using [Title Manager for hiyaCFW](https://github.com/JeffRuLz/TMFH/releases). This will allow you to launch your ROM files from your DSi System Menu on your SDNAND.

### How do I change what booting my console boots me into when I have installed Unlaunch?
1. Power on your DSi while holding **(A)** & **(B)**.
2. Pick which button configuration you'd like to change in the `OPTIONS` menu.
  - (A) & (B) are hardcoded to open Unlaunch's menu; you can't change that.
3. Navigate to the application you'd like to launch when you hold that button (or no button).
  - If it's a file on your SD card, the file name should appear on the bottom screen.
  - To get the normal DSi Menu back, select "Launcher".

### I do not get any audio in my DSi Menu, nor do I have a boot splash when using Unlaunch
That is intentional. If you'd like to get those features back, [install hiyaCFW](installing-hiyacfw)

### How can I restore my NAND without Unlaunch?
You can follow Gadorach's [hardmodding guide](https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/){:target="_blank"} to hardmod your DSi. Previous soldering experience is required.

### Why do I boot into "An Error Has Occurred" when I use hiyaCFW with the default DSi Menu, and how can I fix it?
Unfortunately, the DSi System Menu was not built with the amount of free space the "NAND" has in mind. It uses a signed 32-bit integer, meaning that after 2GB, it will jump to a negative free space number. This is fine for the NAND, since it will never go over 128 MB. However, this is a problem when we redirect the NAND using hiyaCFW. Fortunately, this is easy to fix. After a certain point, the negative number becomes a positive, so you just want to keep that free space number always at a positive number.

The simplest way to do so is to simply fill up your SD card so that your free space value is less than 2GB. However, every other range of two gigabytes works, so 0GB-2GB free is fine, while 2GB-4GB is not.

Enter the free space on your SD in the box below, press enter, and it will tell you if your SD has a working amount of free space. (Javascript required for it to work)

If your SD needs less free space, you can easily fill it with dummy files. Listed below are command prompt/terminal commands that will make 1GB worth of dummy files.
 - Windows: `fsutil file createnew dummy0 1073741824`
 - Linux/macOS: `dd if=/dev/zero of=dummy0 count=1024 bs=1048576`

Fill it up until the website says that it will work.

<input id="sdSpace" type="number" placeholder="Free space on your SD, in gigabytes (ex. 1.5)" onchange="updateWillWork()">
Your SD<span id="willWork">...</span><noscript>is unable to be checked due to JavaScript being disabled. Please enable it and try again</noscript>

<script>
function updateWillWork() {
  let freeSpace = document.getElementById("sdSpace").value;
  document.getElementById("willWork").innerHTML = " " + ((freeSpace % 4) < 2 ? "will work!" : "needs dummy files...");
}
</script>

### Why don't I see TWiLight Menu++?
You're in SysNAND instead of the SDNAND. The HiyaCFW Helper isn't applying the CFW's patches properly, so please wait for a fix in the helper.

### Is there a safe way to remove Unlaunch?
Yes, Unlaunch v1.5 and higher's installer can uninstall Unlaunch. Keep in mind that this may result in an **irrecoverable brick** if you have installed any non-legit DSiWare to your system NAND (not the SDNAND redirection provided by hiyaCFW), or have otherwise messed with system files. On another note, it will say that the system will become "useless", which is just NoCash's way of saying stock.