---
title: Installing DSiWare
redirect_from:
  - more/installing-dsiware
---

{% include toc title="Table of Contents" %}

You must have [Unlaunch](/guide/installing-unlaunch/) and [HiyaCFW](/guide/installing-hiyacfw/) installed before proceeding.
{: .notice--info}

## NDS method

This guide will "install" the DSiWare to your DSi, for use with DSiMenu++.

## Instructions
1. Open the dumped folder on your PC containing your DSiWare
2. Navigate to `content`
3. Rename the `.app` file to have a `.nds` extension
4. Make a directory in your SD card's `roms` folder called `dsiware` if it doesn't already exist
5. Move your DSiWare `.nds` file to the `roms/dsiware` folder on your SD card
6. Power on your DSi, open DSiMenu++, and navigate to `roms > dsiware`
  - Your new DSiWare will appear
  - If you're having issues with some games, then follow below method

## LaunchArg method

This method will install your 3DS DSiWare dumps to your DSi console's home menu. This will convert your 3DS DSiWare dumps to an installable format using a tool called maketmd.

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
    - If your System Menu has been replaced with DSiMenu++, you will need to rerun the launcharg generator and place the new launcharg files in `roms/dsiware` once more
1. Power on your DSi, and "unwrap" the new DSiWare
    - If you boot to an "error has occured" screen, you have exceeded the amount of allowed DSiWare blocks on your system
    - DSiMenu++ can get around this limitation, see NDS method
