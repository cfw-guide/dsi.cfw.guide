---
title: DSiWare
redirect_from:
  - more/dumping-dsiware-from-3ds
  - more/dumping-dsiware
  - dumping-dsiware
  - more/installing-dsiware
  - installing-dsiware
---

## Requirements
- The latest release of [maketmd](https://github.com/Tuxality/maketmd/releases){:target="_blank"} (if you're trying to convert a .app to a .tmk)
- The latest version of [GodMode9i](https://github.com/RocketRobz/godmode9i/releases){:target="_blank"}
- A Nintendo DSi console with [Unlaunch](/unlaunch) installed

## Identifying the path to the .app file
1. Boot your Nintendo DSi console by holding **(A) & (B)**
2. Identify your application in the list.
   - A light green entry means that they are installed to NAND.

When you hover over the entry, the bottom screen should show the path. Take note of the path.

An example path would be `nand:/title/0030005/484e4a45/content/00000003.app`
{: .notice--info}

## Extracting the file

1. Launch GodMode9i.
2. Navigate to SYSNAND, then navigate through the path you took note of above.
3. Highlight the file, then hit Y to copy.
   - Which file you use depends on your use case. For hiyaCFW, use the `.tmd`. Otherwise, use the `.app`
4. Navigate your SD card to where you'd like to place the file
   - For hiyaCFW usage, it'll be in `/title/00030004`
5. Hit Y to paste the file.

You should now either see the .app in TWiLight Menu++ or in your home menu if you use hiyaCFW.

## Converting 3DS DSiWare Dumps (.app) to an installable format (title.tmd)

1. Copy *the contents of* the maketmd `.zip` file to a folder on your PC
2. Open the dumped folder on your PC containing your DSiWare
3. Navigate to `content`
4. Delete the `cmd` folder, and the `.tmd` file
5. Delete any `.ctx` files if they exist
6. Drag and drop the `.app` file onto the maketmd program
    - You will see a new file named `title.tmd` be created

You now have your `.tmd` file you could use for hiyaCFW
