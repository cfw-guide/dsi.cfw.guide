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

Homebrew can be run for free on all Nintendo DSi consoles, regardless of firmware version or region. All you need is an entry point and an SD card to store your homebrew. The entry point we'll use is Memory Pit, but there are other entry points you could use if Memory Pit is unusable.

## What is Custom Firmware?

**Custom Firmware** ("CFW") is a modified version of the original firmware that extends functionality and makes improvements to certain aspects. For instance, custom slot-1 code allows for creating dumps and run previously blocked flashcarts. You can also run advanced homebrew directly from boot and change which homebrew gets launched depending on the button held.

Custom Firmware on a Nintendo DSi needs to be launched via a bootrom exploit, which is why we use Unlaunch. From there, you can install hiyaCFW, an aforementioned CFW which redirects the System NAND to the SD card, dubbed "SDNAND." This allows for custom homebrew, and new DSiWare on your Nintendo DSi Menu without any of the risks involved.

The benefits of Unlaunch + hiyaCFW over other homebrew launch methods are numerous and as such, it is recommended to use this guide over any other that relies on outdated software (such as sudokuhax, hbmenu & hardmodding).

The only requirement to installing Custom Firmware is to make sure you can access homebrew, which we will get to in the guide.

## What can I do by modding my system?

- Redirect your NAND to the SD card
- Use normally incompatible flashcards
- Boot into different homebrew applications by holding different buttons when turning on your Nintendo DSi.
- Launch any DSiWare (out-of-region and/or 3DS exclusives) from your SD card.
- Run Nintendo DS game backups natively on your DSi SD card without the need of a flashcard.
- Watch your favorite movies using MPEG4Player.
- Run old-time classics using various emulators.
- Use FreeNAND to transfer configurations, sys, titles and tickets to another Nintendo DSi from a SD NAND.
- Display an image (refered to as the boot splash) on system launch.

## What should I know before starting?

- Installing Unlaunch modifies your NAND, and in extreme edge cases has the potential to **brick** the system.
  - While Unlaunch isn't a mandatory install, we will be going through the process of installing it. If you don't want to, stop after taking a NAND backup.
- Make sure your console is decently charged when following this process. A sudden power loss could result in serious damage.
- On Windows, it's recommended to [show file extentions](file-extensions-(windows)) if you are using the default File Explorer.

Get started by [Launching your Exploit](exploit-launch).
{: .notice--info}
