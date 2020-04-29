---
title: NAND Backup
redirect_from:
  - /guide/installing-unlaunch
---

A NAND backup is extremely critical to be taken. It is essentailly a restore point in case your DSi later messes up in the future (which might happen with a faulty Unlaunch installation). You'd also need it if you'd like to setup hiyaCFW and NO$GBA, both of which require files from the NAND backup.

1. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases){:target="_blank"}
2. Place `dumpTool.nds` anywhere on your SD card.
3. Launch it using your Homebrew Launcher
  - If you come here from the Exploit Launch page, launch your exploit.
  - If you have already installed Unlaunch, use Unlaunch's homebrew launcher by holding (A) + (B) on your system boot and selecting it in the menu.
4. Follow the on-screen prompts.
  - This will take several minutes (around seven). Please be patient.
5. Hit the `START` button on your Nintendo DSi to exit when it is completed.
  - If you used GodMode9i as a Homebrew Launcher, the system will shut down at this point.

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a NO$GBA footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases){:target="_blank"} to create a copy without the footer.
{: .notice--warning}

Store this NAND backup in a safe spot, one where you won't lose it.

It is highly recommended to install [Unlaunch](unlaunch) at this point.
{: .notice--info}