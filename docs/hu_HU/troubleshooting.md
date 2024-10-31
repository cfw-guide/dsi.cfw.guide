# Hibaelhárítás

## Unlaunch

### Unlaunch freezes at `MISMATCH IN FAT COPIES`

A twlnf-nek van egy kritikus hibája, amikor nem frissíti megfelelően az egész NAND-ot a módosítása után, ami bizonyos homebrew-ok esetén (mint példul az Unlaunch telepítő) hibát dob.

To fix this, open [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), and select `Fix FAT copy mismatch`.

### Nincs hang vagy boot képernyő, amikor a "LAUNCHER" kerül indításra az Unlaunch-csel

Az Unlaunch fejlesztője (nocash) szándékosan kipatchelte alapértelmezésként háttérzenét és a boot képernyőt. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) using TWiLight Menu++ with "Launcher Patches" set to "Default" on the Unlaunch page of TWiLight Menu++ settings, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### A bekapcsolás csak fekete képernyőt mutat az Unlaunch telepítése után

Vedd ki az SD kártyád és próbáld újra indítani a rendszered. If it still only shows a black screen, you may need to flash your NAND via a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Az Unlaunch telepítése után beragadok egy alkalmazásba bootolásnál

This was likely caused by choosing the wrong app for the `NO BUTTON` option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to `OPTIONS`, and set `NO BUTTON` to whatever your preference is.

### Egyéb Unlaunch problémák

If Unlaunch displays `Clusters too large`, `Bad VBR`, `Bad MBR`, or doesn't display any applications while the SD card is inserted, your SD card likely wasn't formatted correctly. Re-follow [SD Card Setup](sd-card-setup.html).

## TWiLight Menu++ hibaelhárítás

For general TWiLight Menu++ troubleshooting, see its [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) page on the DS-Homebrew Wiki.

## További segítség

If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4) Discord server.
