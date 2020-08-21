---
title: Troubleshooting
---

{% include toc title="Table of Contents" %}

## Unlaunch
### Unlaunch freezes at `MISMATCH IN FAT COPIES`?
twlnf has a critical bug that doesn't properly update the entire NAND after modifying it, which causes certain homebrew (like the Unlaunch installer) to throw an error.

While fixable, the method to do so isn't set in stone and largely varies between systems. One method is to delete any DSiWare installed via twlnf in the past, but it has also been reported that moving *all* DSiWare to the SD card and back to the system can help in some cases.

## hiyaCFW
### "An Error Has Occurred"
There are several reasons you might get this error:

- **Too Much Free Space:** Follow [Section III of hiyaCFW setup](/hiyacfw-setup#section-iii---maximizing-available-space) again
- **Over 39 Titles:** There is a limit of 39 titles on your DSi System Menu. Delete any additional folders from `/title`
- **Invalid Title:** There are several parameters you need to take into account when adding titles to hiyaCFW:
   - Cartridge dumps cannot be ran without being handled by a [forwarder](/nds-bootstrap-forwarder)
   - There are several arguments that have to be passed to the `.app` builder in order to work from the DSi System Menu
