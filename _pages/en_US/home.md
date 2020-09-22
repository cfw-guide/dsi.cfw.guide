---
layout: splash
title: DSi Guide
header:
  overlay_color: "#1a1d24"
  overlay_image: /assets/images/home-page-feature.png
  overlay_filter: 0.5
  cta_label: "Get Started"
  cta_url: "#get-started"
excerpt: "The complete guide to modding your Nintendo DSi"
---

For complete guides to homebrew and custom firmware for other devices, check out [CFW.Guide](https://cfw.guide/).
{: .notice--primary}

This guide is not compatible with Nintendo DSi development consoles.
{: .notice--danger}

Thoroughly read all of the introductory pages (including this one!) before proceeding.
{: .notice--info}

## What is homebrew?

[Homebrew](https://en.wikipedia.org/wiki/Homebrew_(video_games)) applications are unlicensed software made for closed systems such as the Nintendo DSi. These applications can range from utilities to custom homebrew games.

Homebrew can be run for free on all Nintendo DSi consoles, regardless of firmware version or region. All you need is an entry point and an SD card to store your homebrew. The main entry point used in this guide is called Memory Pit, but there are other entry points you can use if Memory Pit is unusable.

## What will this guide do to my system?

Keep in mind that the guide is structured in a linear path, yet it generally depends on how deep you want to go in terms of modding the system.

- We will be setting up an entry point to launch basic homebrew via Memory Pit, the exploit for the Nintendo DSi Camera application
- We will then take a NAND backup, which is useful as a restoration point in case you mess up later on
- For users that want more control, we will walk them through installing Unlaunch. Unlaunch allows homebrew to run with more permissions (such as slot-1 access) and at system boot
   - Installing Unlaunch modifies your NAND, and in extreme edge cases has the potential to **brick** the system. If you do not want to brick, you could stop after taking a NAND backup
- Finally, for users that want to install custom applications on their Nintendo DSi System Menu, we will install hiyaCFW

## What can I do by modding my system?

- Redirect your NAND to the SD card
- Use normally incompatible flashcards
- Boot into DSiWare and homebrew applications by holding specific buttons when turning on your Nintendo DSi
- Launch any DSiWare (out-of-region and/or 3DS exclusives) from your SD card
- Run Nintendo DS game backups from your DSi SD card without the need of a flashcard
- Watch your favorite movies using MPEG4Player
- Run old-time classics using various emulators
- Use FreeNAND to transfer configurations, sys, titles and tickets to another Nintendo DSi from a SD NAND
- Display an image (referred to as the boot splash) on system launch

## Where can I find homebrew applications?

- [Universal DB](https://db.universal-team.net/ds) has most modern homebrew, with nice search and sorting to keep track of what's been updated recently.
- [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications) has a lot of older homebrew, however many will only work on flashcards.

## What should I know before starting?

- On Windows, it's recommended to [show file extensions](file-extensions-(windows)) if you are using the default File Explorer
- The only brick risk comes from installing Unlaunch, and the brick risk is minimal

Continue to [Launching the Exploit](launching-the-exploit){: #get-started}
{: .notice--info}
