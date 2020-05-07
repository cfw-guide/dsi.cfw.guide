---
title: "Unlaunch"
---

{% include toc title="Navigation" %}

Unlaunch is a bootloader stage 2 exploit, allowing the highest amount of control over SCFG (short for special configuration). This means that homebrew are able to take full advantage of the hardware, and this is all done immediately after boot.

If you have not yet done so, please made a [NAND backup](dump-nand). Unlaunch modifies the NAND which could result in a brick if done improperly.
{: .notice--danger}

Make sure your console is decently charged when following this process. A sudden power loss could result in serious damage.
{: .notice--warning}

## Instructions
### Installing/Updating
1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip){:target="_blank"}
2. Extract `UNLAUNCH.DSI` from the Unlaunch archive and copy it anywhere your SD card.
3. Launch it using your Homebrew Launcher
  - If you are installing a fresh copy of Unlaunch, use TWiLight Menu++.
  - If you have already installed Unlaunch, use Unlaunch's homebrew launcher by holding (A) + (B) on your system boot and selecting it in the menu.
4. Select the install option.
  - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at our troubleshooting section further down.
6. When completed, reboot (power down and power back on) your system in order to verify Unlaunch installed properly.

If you see Unlaunch's management screen at this point, you have successfully modded your Nintendo DSi.

- Keeping Memory Pit (`pit.bin`) is unnecessary since you now have a stabler way to launch Nintendo DSi Homebrew. You can now delete it or restore a backup to a pit.bin file you've made before.
- Keeping Unlaunch's installer (`UNLAUNCH.DSI`) is not needed. The only functionality the current file has is uninstalling Unlaunch (in case you ever decide to revert your console back to stock), so we recommend removing it.
  - If an unlaunch update ever comes, you'll need to use `UNLAUNCH.DSI` to install it. However, updates could only be distributed from donwloading a new `UNLAUNCH.DSI` so the current version wouldn't be useful other than uninstallation.

You now have the ability to launch into [hiyaCFW](hiyacfw), a custom firmware which redirects the System NAND to the SD card. This allows for easy installation of homebrew and DSiWare on your DSi System Menu & enables you to mess around with the . It also restores the Nintendo DSi Boot Splash and audio in the DSi Menu (which gets removed by Unlaunch). Customizable boot images can also be set, which will be displayed before your system.
{: .notice--info}

### TWiLight Menu++ soft reset fix.
1. Hold (A) & (B) when powering on your console.
  - You should now be in Unlaunch's configuration menu.
2. Navigate to `sd:/_nds/TWiLightMenu`
3. Launch `settings.srldr`
4. Switch over to the "Misc. Settings" page.
  - You could use either the back-triggers or X & Y to switch pages.
5. Switch the "DSiWare Exploit" entry to "None".

### Switching button booting combination
1. Power on your DSi while holding **(A)** & **(B)**.
2. Pick which button configuration you'd like to change in the `OPTIONS` menu.
  - (A) & (B) are hardcoded to open Unlaunch's menu; you can't change that.
3. Navigate to the application you'd like to launch when you hold that button (or no button).
  - If it's a file on your SD card, the file name should appear on the bottom screen.
    - Set it to `boot.nds` if you come from the TWiLight Menu++ page.
    - Set it to `hiya.dsi` if you come from the hiyaCFW page.
  - To get the normal DSi Menu back, select "Launcher".

### Uninstalling
This may **result in a brick** if you have installed any non-legit DSiWare to your System NAND (not the SDNAND redirection provided by hiyaCFW), or have otherwise tampered with system files.
{: .notice--danger}

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip){:target="_blank"}
2. Extract `UNLAUNCH.DSI` from the Unlaunch archive and copy it anywhere your SD card.
3. Hold (A) + (B) on system boot.
4. Select the `UNLAUNCH.DSI` file you had just downloaded.
5. Select `Uninstall`
  - It will say that the system will become "useless", which is NoCash's way of saying stock aka back to normal.
6. When completed, reboot (power down and power back on) your system in order to verify Unlaunch uninstalled properly.

If you see Unlaunch's management screen at this point, you have successfully modded your Nintendo DSi.

## Troubleshooting
### Unlaunch freezes at `MISMATCH IN FAT COPIES`?
twlnf has a critical bug that doesn't properly update the entire NAND after modifying it, which causes certain homebrew (like the Unlaunch installer) to throw an error. While fixable, the method to do so isn't set in stone and largely varies between systems. One method is to delete any DSiWare installed via twlnf in the past, but it has also been reported that moving *all* DSiWare to the SD card and back to the system can help in some cases.

### There is no audio or boot splash when launching "LAUNCHER" using Unlaunch
That is intentional. If you'd like to get those features back, install [hiyaCFW](hiyacfw).

### I get a black screen when trying to launch the Unlaunch installer from TWiLight Menu++
Please use another homebrew launcher in the meantime. We recommend the latest version of [GodMode9i](https://github.com/RocketRobz/godmode9i/releases/latest){:target="_blank"}

The black screen cause is unknown.