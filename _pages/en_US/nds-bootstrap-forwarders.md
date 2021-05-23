---
title: "nds-bootstrap forwarders for hiyaCFW"
---

This is an add-on section that involves creating forwarders for nds-bootstrap. This allows you to launch nds roms directly from your SDNAND's System Menu.

## Requirements

- A Nintendo DSi System with both [Unlaunch](/installing-unlaunch) & [hiyaCFW](/hiyacfw-setup) installed
- A [TWiLight Menu++](launching-the-exploit#twilight-menu) setup
- The latest release of [MakeForwarder](https://github.com/Ta180m/Make-Forwarder-Dsi/releases)

### Instructions

1. Extract *the contents of* `MakeForwarder.zip` to the root of your SD card
1. Launch TWiLight Menu++ via the Unlaunch menu
   - Hold <kbd class="face">A</kbd> & <kbd class="face">B</kbd> to go to the Unlaunch menu
1. Launch your Nintendo DS ROM
1. Once the ROM boots and works, turn off your console
   - If it does not work, please follow the nds-bootstrap troubleshooting guide
1. Launch hiyaCFW via the Unlaunch menu
1. Once in your Nintendo DSi System Menu, unwrap and launch "Forwarder Maker"
1. Set your target bootstrap depending on what your application is:
   - **Retail ROM:** `sd:/_nds/nds-bootstrap-release.nds`
   - **Homebrew:** `sd:/_nds/nds-bootstrap-hb-release.nds`
1. Select "create forwarder" & navigate to the location of your ROM

Repeat step 7 and 8 until you have gotten all of your ROMs created as forwarders.
- You do not need to reset target bootstrap versions unless your previous selection is inaccurate to the current one

Once you've gotten all your ROMs created as forwarders, reboot the system and launch hiyaCFW. They should now appear under gift boxes.
