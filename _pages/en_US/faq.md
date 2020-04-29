---
title: "FAQ"
redirect_from:
  - help/faq
---
{% include toc title="Questions" %}

### What are the SD card requirements?
You will need a FAT32-Formatted SD card formatted with a 32kb cluster size to follow this guide
- Be sure to check your SD card for errors. You can do so by using [H2testw for Windows](h2testw-(windows)), [F3 for Linux](f3-(linux)) or [F3X for Mac](f3x-(mac)).

### What does a white screen in certain homebrew mean?
That implies an SD card error. Please make sure you have formatted your SD card to FAT32 with a 32kb cluster size. Alternatively, test your SD card to make sure it isn't corrupted. You can do so by using [H2testw for Windows](h2testw-(windows)), [F3 for Linux](f3-(linux)) or [F3X for Mac](f3x-(mac)).

### How do I launch retail ROMs?
Retail ROMs are not able to be launched through Unlaunch alone, as Retail ROMs was made to be used by Slot-1. In order to run them from your SD card, you'll need to use nds-bootstrap, an application that can redirect Slot-1 reads to the SD card. It knows what to launch based on the strings set in the configuration file. While manually setting up the configuration file is possible, it's tedious and isn't user friendly. Depending on how you'd like to access your ROMS, there are easier ways.
- hiyaCFW users can use forwarder applications using [Title Manager for hiyaCFW](https://github.com/JeffRuLz/TMFH/releases). This will allow you to launch your ROM files from your DSi System Menu on your SDNAND, but it requires an Unlaunch installation and limited to 40 titles.
- TWiLight Menu++ can navigate your SD card to discover and launch your ROM files. This has the benefit of no 40 title limit, drop and play (no conversion required), and no Unlaunch requirement.

### How can I restore my NAND without Unlaunch?
You can follow Gadorach's [hardmodding guide](https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/){:target="_blank"} to hardmod your DSi. Previous soldering experience is required.

### How do I setup a new SD card?
- If you have not installed Unlaunch, start the guide from the beginning.
- If you have installed Unlaunch, simply follow Section 1b of [Launching the Exploit](exploit-launch). This will restore TWiLight Menu++ for you.

Keep in mind that if you need to transfer to a new SD card, be sure to follow the SD card requirements listed above.