---
layout: splash
title: DSi Hacks Guide
header:
  overlay_color: "#1a1d24"
  overlay_image: /assets/images/home-page-feature.png
  overlay_filter: 0.5
  caption:
excerpt: "The complete guide to modding your Nintendo DSi."
---

Thoroughly read all of the introductory pages **(including this one)** before proceeding.
{: .notice--info}

For guides to modify other devices, check out the [cfw.guide](https://cfw.guide) website.
{: .notice--primary}

This guide is not compatible with Nintendo DSi development consoles.
{: .notice--danger}

## What is homebrew?

Homebrew applications are unlicensed software made for closed systems such as the Nintendo DSi. This can include save editors, games, emulators and more.

Homebrew can be run for free on all Nintendo DSi consoles, regardless of firmware version or region.

## How does this guide work? What does this guide do to my system? What is the process I'll be going through?

- Memory Pit is the Nintendo DSi Camera exploit used to run homebrew on all retail systems, regions and firmware versions.
- GodMode9i is then launched through Memory Pit. We use its DSi Homebrew launching capabilities to access the two other homebrew required.
- A backup of the Nintendo DSi Internal Memory (dubbed as a NAND backup) is taken at this point using dumpTool. It is a restore point in case the system becomes bricked while the Unlaunch installation process.
- Unlaunch is then installed, enabling you to run any DSi executable on your console & launch previously non-working flashcarts.

By following all of the above, you now have modified your system and can run any Nintendo DSi Homebrew you find. However, we recommend taking a look at hiyaCFW and TWiLight Menu++:

- TWiLight Menu++ is an open-source homebrew application that can act as a replacement to the Nintendo DSi System Menu. It provides a customizable unified interface for navigating your Nintendo DSi SD card to launch a variety of titles, including Nintendo DS and Gameboy Advance.
- hiyaCFW is a custom firmware which redirects the System NAND to the SD card, allowing for easy installation of homebrew on your DSi System Menu. It also restores the Nintendo DSi Boot Splash and audio in the DSi Menu (which gets removed by Unlaunch). Customizable boot images can also be set, which will be displayed before your system.

We have pages detailing how to install them if you desire to do so.

## What can I do by modding my system?

- Redirect your NAND to the SD card
- Use normally incompatible flashcards
- Boot into different homebrew applications by holding different buttons when turning on your Nintendo DSi.
- Launch any DSiWare (out-of-region and/or 3DS exclusives) from your SD card.
- Run Nintendo DS game backups natively on your DSi SD card without the need of a flashcard.
- Watch your favorite movies using MPEG4Player.
- Run old-time classics using a variety of emulators.
- Use FreeNAND to transfer configurations, sys, titles and tickets to another Nintendo DSi from a SD NAND

## What should I know before starting?

- Installing Unlaunch modifies your NAND, which could easily result in a brick if not done properly.
  - While Unlaunch is optional, it does give the benefit of homebrew launching on boot amongst other things.
- Make sure your console is decently charged when following this process. A sudden power loss could result in serious damage.
- The recommended exploit is Memory Pit, which exploits a flaw in the Nintendo DSi Camera application. It is a pre-installed application so this exploit will work for all retail systems, regions and firmware versions.
  - However, if Memory Pit is unusable on your Nintendo DSi, there are other exploits available depending on which DSiWare software you have installed on your system.
- On Windows, it's recommended to [show file extentions](file-extensions-(windows)) if you are using the default File Explorer.

Get started by [Launching your Exploit](installing-unlaunch).
{: .notice--info}
