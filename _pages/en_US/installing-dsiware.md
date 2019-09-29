---
title: Installing DSiWare
redirect_from:
  - more/installing-dsiware
---

{% include toc title="Table of Contents" %}

You must have [Unlaunch](/guide/installing-unlaunch/) and [HiyaCFW](/guide/installing-hiyacfw/) installed before proceeding.
{: .notice--info}

This method will install your 3DS DSiWare dumps to your DSi console's home menu. This will convert your 3DS DSiWare dumps to an installable format using a tool called maketmd.

## Downloads
- The latest release of [maketmd](https://github.com/Tuxality/maketmd/releases){:target="_blank"}

## Instructions
1. Copy *the contents of* the maketmd `.zip` file to a folder on your PC
2. Open the dumped folder on your PC containing your DSiWare
3. Navigate to `content`
4. Delete the `cmd` folder, and the `.tmd` file
5. Delete any `.ctx` files if they exist
6. Drag and drop the `.app` file onto the maketmd program
    - You will see a new file named `title.tmd` be created
7. Copy the DSiWare folder to the `/title/00030004` folder on your DSi's SD card
    - If your System Menu has been replaced with TWiLight Menu++, you can place the .app file anywhere on the SD card, and just launch it. In this case, you're done!
8. Power on your DSi, and "unwrap" the new DSiWare
    - If you boot to an "error has occured" screen, you have exceeded the amount of allowed DSiWare blocks on your system
    - TWiLight Menu++ can get around this limitation, see [Replacing the System Menu with TWiLight Menu++](replacing-system-menu-with-twlmenu++) for more information
