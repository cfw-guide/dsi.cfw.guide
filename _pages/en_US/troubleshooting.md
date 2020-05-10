---
title: Troubleshooting
---

{% include toc title="Table of Contents" %}

## Unlaunch

### Unlaunch freezes at `MISMATCH IN FAT COPIES`?
twlnf has a critical bug that doesn't properly update the entire NAND after modifying it, which causes certain homebrew (like the Unlaunch installer) to throw an error.

While fixable, the method to do so isn't set in stone and largely varies between systems. One method is to delete any DSiWare installed via twlnf in the past, but it has also been reported that moving *all* DSiWare to the SD card and back to the system can help in some cases.

### There is no audio or boot splash when launching "LAUNCHER" using Unlaunch
That is intentional. If you'd like to get those features back, install [hiyaCFW](installing-hiyacfw).

### I get a black screen when trying to launch the Unlaunch installer from TWiLight Menu++
Please use another homebrew launcher in the meantime. We recommend the latest version of [GodMode9i](https://github.com/RocketRobz/godmode9i/releases/latest)

The black screen cause is unknown.

## HiyaCFW

### "An Error Has Occurred"
If you get this message when booting hiyaCFW, it means you have too much free space on your SD card. The amount of free space compatible goes by every other range of two gigabytes. For example, 0-2 GB worth of free space works while 2-4 GB doesn't.

Enter the free space on your SD in the box below, press enter, and it will tell you if your SD has a working amount of free space.

<input id="sdSpace" type="number" placeholder="Free space on your SD, in gigabytes (ex. 1.5)" oninput="updateWillWork()">
Your SD card<span id="willWork">...</span><noscript>is unable to be checked due to JavaScript being disabled. Please enable it in your web browser and try again.</noscript>

If your SD needs less free space, you can easily fill it with dummy files. Listed below are command prompt/terminal commands that will make 1GB worth of dummy files.
 - Windows: `fsutil file createnew dummy0 1073741824`
 - Linux/macOS: `dd if=/dev/zero of=dummy0 count=1024 bs=1048576`

Fill it up until the website says that it will work.

The reason this happens is due to the way the Nintendo DSi System Menu was made. It uses a signed 32-bit integer, which means once an overflow occurs, it will jump to a negative number of free space.

This causes the Nintendo DSi System Menu to freak out, resulting in an "An error has occured" screen. This was never intended by the developers, since the NAND never exceeded 128 MB.

However, by using hiyaCFW, the NAND space is now determined by an exterior factor (your SD card), which can vary in size, resulting in this odd behavior.

<script>
function updateWillWork() {
  let freeSpace = document.getElementById("sdSpace").value;
  document.getElementById("willWork").innerHTML = " " + ((freeSpace % 4) < 2 ? "will work!" : "needs dummy files...");
}
</script>
