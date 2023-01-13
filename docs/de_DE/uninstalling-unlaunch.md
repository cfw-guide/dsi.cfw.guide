---
title: Unlaunch Deinstallieren
---

::: danger

**Die Installation oder Deinstallation von Unlaunch könnte deine Konsole beschädigen! Du wurdest gewarnt!**

:::

**WARNUNG:** Die Deinstallation von Unlaunch könnte deinen Nintendo DSi beschädigen. Dies könnten Gründe sein, warum du Unlaunch deinstallieren willst, aber mit Lösungen die keine Deinstallation benötigen.

- **The Unlaunch Background is scary:** [Reinstall Unlaunch](installing-unlaunch.html) using the new instructions. Sie beschreiben einen Weg, den Hintergrund zu ändern
- **Ich habe ein Problem mit Unlaunch oder der Konsole nach der Installation:** Die [Troubleshooting](troubleshooting.html#unlaunch) Seite erklärt Lösungen für Probleme die sie haben könnten

::: warning

Um das Risiko zu verringern, den DSi zu beschädigen, stelle sicher, dass du keine unzulässige DSiWare zu deinem NAND backup installiert hast (die SDNAND umleitung von hiyaCFW zählt nicht), oder in anderer Weise Systemdateinen manipuliert hast.

:::

::: warning

When uninstalling Unlaunch, you should **NOT** use its built-in uninstaller directly on your console as there is a chance that it will brick the console. Siehe die korrekte Information zur Deinstallation unten.

:::

Once you have reviewed the above information, follow the [Dumping NAND](dumping-nand.html) instructions to make a new NAND bacup, then proceed to [Restoring a NAND Backup](restoring-nand.html). This will guide you through uninstalling Unlaunch from the NAND backup and flashing that to your console.

If you are not able to use no$gba or get an error after uninstalling Unlaunch in no$gba it is also possible to flash a NAND backup made prior to installing Unlaunch if you still have one, however it is recommended to try using a NAND backup that previously had Unlaunch first. This will make recovery significantly easier in the case of a brick requiring a hardmod as Unlaunch leaves the no$gba footer embedded in the NAND even when uninstalled.
