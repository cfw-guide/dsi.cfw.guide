---
home: true
title: Home
heroImage: /assets/images/home-page-feature.png
heroText: DSi Guide
tagline: The complete guide to modding your Nintendo DSi
---

::: tip
For complete guides to homebrew and custom firmware for other devices, check out [CFW.Guide](https://cfw.guide/).
:::

::: danger
This guide is not compatible with Nintendo DSi development consoles.
:::

::: tip
Thoroughly read all of the introductory pages (including this one!) before proceeding.
:::

## What is homebrew?

[Homebrew](https://en.wikipedia.org/wiki/Homebrew_(video_games)) applications are unlicensed software made for closed systems such as the Nintendo DSi. These applications can range from utilities to custom homebrew games.

Homebrew can be run for free on all Nintendo DSi consoles, regardless of firmware version or region. All you need is an entry point and an SD card to store your homebrew. The main entry point used in this guide is called Memory Pit, but there are other entry points you can use if Memory Pit is unusable.

## What will this guide do to my system?

Keep in mind that the guide is structured in a linear path, yet it generally depends on how deep you want to go in terms of modding the system.

- We will be setting up an entry point to launch basic homebrew via Memory Pit, the exploit for the Nintendo DSi Camera application
- We will then take a NAND backup, which is useful as a restoration point in case you mess up later on
- Finally, for users that want access to the full capabilities of the DSi we will walk them through installing Unlaunch. Unlaunch allows homebrew to run with more permissions (such as Slot-1 access) and at system boot
   - Installing Unlaunch modifies your NAND, and in extreme edge cases has the potential to **brick** the system. If you do not risk bricking, you can stop after taking a NAND backup

## What can I do by modding my system?

- Run Nintendo DS(i) game backups or ROM hacks from your DSi SD card without the need of a flashcard
- Launch any DSiWare (out-of-region and/or 3DS exclusives) from your SD card
- Boot into DSiWare and homebrew applications by holding specific buttons when turning on your Nintendo DSi
- Run old-time classics using various emulators
- Use normally incompatible flashcards
- Redirect your NAND to the SD card using hiyaCFW
- Watch your favorite movies using MPEG4Player
- Display an image (referred to as the boot splash) on system launch
- Play homebrew games

## Where can I find homebrew applications?

- [Universal-DB](https://db.universal-team.net/ds) has most modern homebrew, with nice search and sorting to keep track of what's been updated recently
- [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew) has a lot of older homebrew, however many will only work on flashcards

## What should I know before starting?

- On Windows, it's recommended to [show file extensions](file-extensions-%28windows%29) if you are using the default File Explorer
- The only brick risk comes from installing Unlaunch, and the brick risk is minimal
- If you are not experienced with copying files to an SD card, we have helper tools available at your disposal

::: tip NEXT PAGE
Continue to [Launching the Exploit](launching-the-exploit)
:::
