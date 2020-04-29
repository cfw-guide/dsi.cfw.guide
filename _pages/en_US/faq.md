---
title: "FAQ"
redirect_from:
  - help/faq
---
{% include toc title="Table of Contents" %}

### What are the SD card requirements?
You will need a FAT32-Formatted SD card formatted with a 32kb cluster size to follow this guide
- Be sure to check your SD card for errors. You can do so by using [H2testw for Windows](h2testw-(windows)), [F3 for Linux](f3-(linux)) or [F3X for Mac](f3x-(mac)).

### What does a white screen in certain homebrew mean?
That implies an SD card error. Please make sure you have formatted your SD card to FAT32 with a 32kb cluster size. Alternatively, test your SD card to make sure it isn't corrupted. You can do so by using [H2testw for Windows](h2testw-(windows)), [F3 for Linux](f3-(linux)) or [F3X for Mac](f3x-(mac)).

### How do I launch retail ROMs?
Retail ROMs are not able to be launched through Unlaunch alone, as Retail ROMs was made to be used by Slot-1. In order to run them from your SD card, you'll need to use nds-bootstrap, an application that can redirect Slot-1 reads to the SD card. There are multiple ways you could use it.
- Download nds-bootstrap by itself and make constant changes to the configuration file. It isn't user friendly and won't work with soft-resets, but it works.
- Use TWiLight Menu++ to navigate your SD card and launch the ROM files. It will make the edits necessary to the configuration file.
- Set up hiyaCFW forwarder applications using [Title Manager for hiyaCFW](https://github.com/JeffRuLz/TMFH/releases). This will allow you to launch your ROM files from your DSi System Menu on your SDNAND.

### How can I restore my NAND without Unlaunch?
You can follow Gadorach's [hardmodding guide](https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/){:target="_blank"} to hardmod your DSi. Previous soldering experience is required.