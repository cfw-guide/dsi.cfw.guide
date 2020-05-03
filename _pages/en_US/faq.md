---
title: "FAQ"
redirect_from:
  - help/faq
---
{% include toc title="Questions" %}

### What does a white screen in certain homebrew mean?
That implies an SD card error. Please make sure you have [checked your SD card for errors](sd-prep).

### How do I launch retail ROMs?
Retail ROMs are not able to be launched through Unlaunch alone, as Retail ROMs was made to be used by Slot-1. In order to run them from your SD card, you'll need to use nds-bootstrap, an application that can redirect Slot-1 reads to the SD card. It knows what to launch based on the strings set in the configuration file. While manually setting up the configuration file is possible, it's tedious and isn't user friendly. Depending on how you'd like to access your ROMS, there are easier ways.
- hiyaCFW users can create [forwarders](forwarder) for the DSi System Menu, but it is limited to 40 title and involves more steps than drag and drop.
- TWiLight Menu++ can navigate your SD card to discover and launch your ROM files. This has the benefit of no 40 title limit, drop and play (no conversion required), and no Unlaunch requirement.

### How can I restore my NAND without Unlaunch?
You can follow Gadorach's [hardmodding guide](https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/){:target="_blank"} to hardmod your DSi. Previous soldering experience is required.