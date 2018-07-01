---
title: Installing DSiWare
redirect_from:
  - more/installing-dsiware
---

You must have [Unlaunch](/guide/installing-unlaunch/) and [HiyaCFW](/guide/installing-hiyacfw/) installed before proceeding.
{: .notice--info}

This guide will install your 3DS DSiWare dumps to your DSi console's home menu. This will convert your 3DS DSiWare dumps to an installable format using a tool called maketmd.

## Downloads
- The latest release of [maketmd](https://github.com/Tuxality/maketmd/releases){:target="_blank"}

## Instructions
1. Copy *the contents of* the maketmd `.zip` file to a folder on your PC
1. Open the dumped folder on your PC containing your DSiWare
1. Navigate to `content`
1. Delete the `cmd` folder, and the `.tmd` file
1. Delete any `.ctx` files if they exist
1. Drag and drop the `.app` file onto the maketmd program
    - You will see a new file named `title.tmd` be created
1. Copy the DSiWare folder to the `/title/00030004` folder on your DSi's SD card
    - If your System Menu has been replaced with DSiMenu++, you will need to rerun the argv generator and place the new argv files in `_nds/dsimenuplusplus/dsiware` once more
1. Power on your DSi, and "unwrap" the new DSiWare
    - If you boot to an "error has occured" screen, you have exceeded the amount of allowed DSiWare blocks on your system
    - DSiMenu++ can get around this limitation, see the link below for more information