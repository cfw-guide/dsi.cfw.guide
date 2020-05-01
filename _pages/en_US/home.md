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

## What is Custom Firmware?

**Custom Firmware** ("CFW") enables you to use more advanced homebrew that userland homebrew can't do. For instance, when launching a DSiWare application, the access to Slot-1 cards is revoked. Therefore, Custom Firmware is the only way to legally dump game cartridges.

There are also other advantages to custom firmware, such as launching blocked slot-1 cartridges & running hiyaCFW, a NAND -> SD redirector.

The only requirement to installing Custom Firmware is to make sure you can access homebrew, which we will get to in the guide.

## What does this guide install?
This guide will install Unlaunch, a bootrom exploit for the Nintendo DSi. Unlaunch enables you to run any DSi executable on your console & launch previously blocked flashcarts.
- Additionally, you can install hiyaCFW; a custom firmware which redirects the System NAND to the SD card, allowing for easy installation of homebrew on your DSi Menu.

The benefits of Unlaunch over other homebrew launch methods are numerous, and as such it is recommended to use this guide over any other that relies on outdated software (such as sudokuhax).

## What can I do by modding my system?

- Redirect your NAND to the SD card
- Use normally incompatible flashcards
- Boot into different homebrew applications by holding different buttons when turning on your Nintendo DSi.
- Launch any DSiWare (out-of-region and/or 3DS exclusives) from your SD card.
- Run Nintendo DS game backups natively on your DSi SD card without the need of a flashcard.
- Watch your favorite movies using MPEG4Player.
- Run old-time classics using a variety of emulators.
- Emulate the DS Memory Pak for software that requires it.
- Use FreeNAND to transfer configurations, sys, titles and tickets to another Nintendo DSi from a SD NAND.
- Display an image (refered to as the boot splash) on system launch.

## What should I know before starting?

- Installing Unlaunch modifies your NAND, which could potentially (but rarely has) result in a brick.
  - While Unlaunch is optional, it does give the benefit of homebrew launching on boot amongst other things.
- Make sure your console is decently charged when following this process. A sudden power loss could result in serious damage.
- The recommended exploit is Memory Pit, which exploits a flaw in the Nintendo DSi Camera application. It is a pre-installed application so this exploit will work for all retail systems, regions and firmware versions.
  - However, if Memory Pit is unusable on your Nintendo DSi, there are other exploits available depending on which DSiWare software you have installed on your system.
  - If you already have a DSiWareHax entry point, you could use that instead of memory pit.
- On Windows, it's recommended to [show file extentions](file-extensions-(windows)) if you are using the default File Explorer.

Get started by [Launching your Exploit](exploit-launch).
{: .notice--info}
