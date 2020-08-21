---
title: "nds-bootstrap forwarders for hiyaCFW"
redirect_from:
- /forwarder
---

This is an add-on section that involves creating forwarders for nds-bootstrap. This allows you to launch nds roms directly from your SDNAND's System Menu.

## Requirements

- A Nintendo DSi System with both [Unlaunch](/installing-unlaunch) & [hiyaCFW](/hiyacfw-setup) installed.
- A [TWiLight Menu++](launching-the-exploit#twilight-menu) setup
- The latest release of [MakeForwarder](https://github.com/Ta180m/Make-Forwarder-Dsi/releases/latest)

### Instructions

1. Extract *the contents of* `MakeForwarder.zip` to the root of your SD card
2. Launch TWiLight Menu++ via the Unlaunch menu
  - Hold **(A)** & **(B)** to go to the Unlaunch menu
3. Launch your Nintendo DS ROM
4. Once the ROM boots and works, turn off your console
  - If it does not work, please follow the nds-bootstrap troubleshooting guide
5. Launch hiyaCFW via the Unlaunch menu
6. Once in your Nintendo DSi System Menu, unwrap and launch "Forwarder Maker"
7. Set your target bootstrap depending on what your application is:
  - **Retail ROM:** `sd:/_nds/nds-bootstrap-release.nds`
  - **Homebrew:** `sd:/_nds/nds-bootstrap-hb-release.nds`
8. Select "create forwarder" & navigate to the location of your ROM

Repeat step 7 and 8 until you have gotten all of your ROMs created as forwarders.
- You do not need to reset target bootstrap versions unless your previous selection is inaccurate to the current one

Once you've gotten all your ROMs created as forwarders, reboot the system and launch hiyaCFW. They should now appear under gift boxes.
