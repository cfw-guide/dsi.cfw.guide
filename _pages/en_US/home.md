---
layout: splash
title: DSi Guide
header:
  overlay_color: "#1a1d24"
  overlay_image: /assets/images/home-page-feature.png
  overlay_filter: 0.5
  cta_label: "Get Started"
  cta_url: "#get-started"
excerpt: "The complete guide to modding<br>your Nintendo DSi, from stock to CFW."
---

For complete guides to homebrew and custom firmware for other devices, check out [CFW.Guide](https://cfw.guide/).
{: .notice--primary}

This guide is not compatible with Nintendo DSi development consoles.
{: .notice--danger}

Thoroughly read all of the introductory pages (including this one!) before proceeding.
{: .notice--info}

## What is homebrew?

[Homebrew](https://en.wikipedia.org/wiki/Homebrew_(video_games)) on the DSi usually refers to software that is not authorized by Nintendo. It allows you to run homebrew games, tools like save editing and backup, and emulators for various older systems.

Homebrew can be run for free on all Nintendo DSi consoles, regardless of firmware version or region. All you need is an entry point and an SD card to store your homebrew. The main entry point used in this guide will be called Memory Pit, but there are other entry points you could use if Memory Pit is unusable.

## What is Custom Firmware?

**Custom Firmware** ("CFW") is a modified version of the original firmware that extends functionality and makes improvements to certain aspects. For instance, it can be used to creating backups of games and run previously blocked flashcarts. You can also configure it to run homebrew titles at boot by holding down a specific button.

Custom Firmware on a Nintendo DSi can be launched using a low-level exploit, called Unlaunch. From there, you can install hiyaCFW, an aforementioned CFW which runs your internal storage (NAND) off of the SD card, dubbed "SDNAND." This allows for the installation of custom homebrew and DSiWare apps onto your DSi Menu without the risks of breaking your system.

The benefits of Unlaunch + hiyaCFW over other homebrew launch methods are numerous and as such, it is recommended to use this guide over any other that relies on outdated software (such as sudokuhax, hbmenu and hardmodding).

The only requirement to installing Custom Firmware is to make sure you can access homebrew, which we will get to in the guide.

## What can I do by modding my system?

- Redirect your NAND to the SD card
- Use normally incompatible flashcards
- Boot into different homebrew applications by holding different buttons when turning on your Nintendo DSi
- Launch any DSiWare (out-of-region and/or 3DS exclusives) from your SD card
- Run Nintendo DS game backups natively on your DSi SD card without the need of a flashcard
- Watch your favorite movies using MPEG4Player
- Run old-time classics using various emulators
- Use FreeNAND to transfer configurations, sys, titles and tickets to another Nintendo DSi from a SD NAND
- Display an image (refered to as the boot splash) on system launch

## What should I know before starting?

- Installing Unlaunch modifies your NAND, and in extreme edge cases has the potential to **brick** the system
  - While Unlaunch isn't a mandatory install, we will be going through the process of installing it. If you don't want to, stop after taking a NAND backup
- Make sure your console is charged when following this process. A sudden power loss could result in serious damage
- On Windows, it's recommended to [show file extensions](file-extensions-(windows)) if you are using the default File Explorer

Continue to [Launching the Exploit](launching-the-exploit){: #get-started}
{: .notice--info}
