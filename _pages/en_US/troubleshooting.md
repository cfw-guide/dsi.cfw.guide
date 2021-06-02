---
title: Troubleshooting
---

{% include toc title="Table of Contents" %}

## Unlaunch
### Unlaunch freezes at `MISMATCH IN FAT COPIES`?
twlnf has a critical bug where it does not properly update the entire NAND after modifying it, which causes certain homebrew (like the Unlaunch installer) to throw an error.

While fixable, the method to do so isn't set in stone and largely varies between systems. One method is to delete any DSiWare installed via twlnf in the past, but it has also been reported that moving *all* DSiWare to the SD card and back to the system can help in some cases.

If you have downgraded the system in the past, updating back to v1.4.5 (or v1.4.6 if your DS region is Chinese or Korean) can help this bug as well.

### There is no audio or boot splash when launching "LAUNCHER" using Unlaunch

The developer of Unlaunch (nocash) has intentionally patched out the background audio and boot-splash by default. You can regain these effects by [reinstalling Unlaunch](/installing-unlaunch) using TWiLight Menu++.
