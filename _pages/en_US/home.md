---
layout: splash
title: DSi Guide
excerpt: "A complete Nintendo DSi homebrew guide, from stock to hiyaCFW."
header:
  overlay_color: "#1a1d24"
  cta_label: "Get Started"
  cta_url: installing-unlaunch
---

For complete guides to homebrew and custom firmware for other devices, check out [CFW.Guide](https://cfw.guide).
{: .notice--primary}

This guide is not compatible with development DSi consoles.
{: .notice--danger}

Thoroughly read all of the introductory pages (including this one!) before proceeding.
{: .notice--info}

Translators, please help us with translations. Join our [Crowdin Project](https://crowdin.com/project/dsi-guide) to translate this guide to other languages.
{: .notice--info}

## What is homebrew?

Homebrew applications are custom, user-made software, which haven't been authorised by Nintendo. This can include save editing tools, games, emulators, and more.

Homebrew can be run for free on any DSi system, regardless of firmware version or region.

## What does this guide install?

This guide will install Unlaunch, a bootrom exploit for the Nintendo DSi. It removes RSA, whitelist and region checks, allowing you to run any DSi executable on your console. Additionally, you can install hiyaCFW and/or TWiLight Menu++:

- hiyaCFW is a custom firmware for the DSi allowing you to redirect your NAND to the SD card and have a launch splash before boot.
- TWiLight Menu++ is an open-source homebrew application developed by RocketRobz that can act as a home menu replacement. It has many additional features, such as custom themes and file management. It's also an all in one menu for different many emulators, such as .nds file loading with nds-bootstrap.

## What should I know before starting?

- Homebrew allows you to modify your system, which could easily result in a brick if done improperly
- Make sure your console is decently charged when following this process. A sudden power loss could result in serious damage.
- The recommended method is to use Memory Pit, a DSi Camera exploit for all retail systems, firmware versions and regions. However, if it doesn't work and you have a functioning copy of Flipnote Studios, you could try using [Flipnote Lenny](installing-unlaunch-legacy)
- You will need a FAT32-Formatted SD card formatted with a 32kb cluster size to follow this guide
 - Be sure to check your SD card for errors. You can do so by using [H2testw for Windows](h2testw-(windows)), [F3 for Linux](f3-(linux)) or [F3X for Mac](f3x-(mac))
- On Windows, it's recommended to [show file extentions](file-extensions-(windows)) if you are using the default File Explorer.

Continue to the [Memory Pit Guide](installing-unlaunch).
{: .notice--info}
