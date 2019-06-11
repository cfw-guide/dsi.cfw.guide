---
layout: splash
title: DSi Guide
excerpt: "A complete Nintendo DSi homebrew guide, from stock to HiyaCFW."
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

{% capture notice-1 %}
This guide is available in other languages!
Click the <i class="fa fa-language" aria-hidden="true"></i> icon at the top right of the page to change the language.    
Alternatively, click [here](https://crowdin.com/project/dsi-guide) to help to keep these translations up to date.
{% endcapture %}

<div class="notice--info">{{ notice-1 | markdownify }}</div>

## What is homebrew?

Homebrew applications are custom, user-made software, which haven't been authorised by Nintendo. This can include save editing tools, games, emulators, and more.

Homebrew can be run for free on any DSi system, regardless of firmware version or region.

## What does this guide install?

This guide will install HiyaCFW, a custom firmware for the DSi. CFW can be set up on any console on any version.

Custom firmware enables you to use more advanced hacks that userland homebrew can’t easily do. For instance, signature patches let you install unsigned titles that appear right on your System Menu.

## What should I know before starting?

- Homebrew allows you to modify your system, which could easily result in a brick if done improperly
- Keep your console plugged in at all times during this process to avoid sudden power loss
- You will need an SD card to use this guide
  - Your console should come with one

## Which method should I use?

There are currently two major methods of running homebrew, and therefore running custom firmware:
- Memory Pit, a DSi Camera exploit for firmware version 1.4.5
- Flipnote Lenny, a firmware-agnostic Flipnote exploit

Memory Pit is much easier to set up, and as a result it is recommended to update to 1.4.5 if you're not already on that version, and use that method.
Continue to [Installing Unlaunch](installing-unlaunch)
{: .notice--info}
However, if for whatever reason you don't want to update, or cannot update, and have a functional copy of Flipnote Studio, you may proceed with Flipnote Lenny.
Continue to [Installing Unlaunch (Flipnote)](installing-unlaunch-legacy)
{: .notice--info}

