---
title: Odinstalowywanie
---

::: danger

**Instalacja lub odinstalowanie Unlaunch może losowo zablokować konsolę! Zostałeś ostrzeżony!**

:::

**OSTRZEŻENIE:** Odinstalowanie może zablokować Twój Nintendo DSi. Oto kilka przypadków powodów, dla których możesz chcieć odinstalować Unlaunch, ale z rozwiązaniami które nie wymagają odinstalowania.

- **The Unlaunch Background is scary:** [Reinstall Unlaunch](installing-unlaunch.html) using the new instructions. Obecnie zawierają instrukcje dotyczące zmiany tła
- **I'm having an issue with Unlaunch or my console after installing it:** The [Troubleshooting](troubleshooting.html#unlaunch) page will explain how to fix many issues you may have

::: warning

Zmniejszenie szans na zablokowanie, upewnij się, że nie zainstalowałeś żadnych nielegalnych DSiWare do twojego systemu NAND (przekierowanie SDNAND dostarczone przez hiyaCFW nie liczy się), lub w inny sposób manipulowałeś plikami systemowymi.

:::

::: warning

When uninstalling Unlaunch, you should **NOT** use its built-in uninstaller directly on your console as there is a chance that it will brick the console. Please see below for information on uninstalling it properly.

:::

Once you have reviewed the above information, follow the [Dumping NAND](dumping-nand.html) instructions to make a new NAND backup, then proceed to [Restoring a NAND Backup](restoring-nand.html). This will guide you through uninstalling Unlaunch from the NAND backup and flashing that to your console.

If you are not able to use no$gba or get an error after uninstalling Unlaunch in no$gba it is also possible to flash a NAND backup made prior to installing Unlaunch if you still have one, however it is recommended to try using a NAND backup that previously had Unlaunch first. This will make recovery significantly easier in the case of a brick requiring a hardmod as Unlaunch leaves the no$gba footer embedded in the NAND even when uninstalled.
