---
title: Troubleshooting
---

{% include toc title="Table of Contents" %}

## Unlaunch
### Unlaunch freezes at `MISMATCH IN FAT COPIES`?
twlnf has a critical bug where it does not properly update the entire NAND after modifying it, which causes certain homebrew (like the Unlaunch installer) to throw an error.

While fixable, the method to do so isn't set in stone and largely varies between systems. One method is to delete any DSiWare installed via twlnf in the past, but it has also been reported that moving *all* DSiWare to the SD card and back to the system can help in some cases.

If you have downgraded the system in the past, reupdating to v1.4.5 (or v1.4.6 if your DS region is Chinese or Korean) will fix this bug as well.

### There is no audio or boot splash when launching "LAUNCHER" using Unlaunch
That is intentionally done by nocash, the dev of Unlaunch. Thankfully, there is a way to revert said patches, by [reinstalling Unlaunch](/installing-unlaunch) using TWiLight Menu++

## hiyaCFW
### "An Error Has Occurred"
There are several reasons you might get this error:

- **Too Much Free Space:** Follow [Section III of hiyaCFW setup](/hiyacfw-setup#section-iii---maximizing-available-space) again
- **Over 39 Titles:** There is a limit of 39 titles on your DSi System Menu. Delete any additional folders from `/title`
- **Invalid Title:** There are several parameters you need to take into account when adding titles to hiyaCFW:
   - Cartridge dumps cannot be ran without being handled by a [forwarder](/nds-bootstrap-forwarder)
   - There are several arguments that have to be passed to the `.app` builder in order to work from the DSi System Menu
