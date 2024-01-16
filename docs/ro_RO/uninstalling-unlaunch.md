---
title: Dezinstalarea Unlaunch
---

::: danger

**Instalarea sau dezinstalarea a Unlaunch poate cauza un brick la întâmplare! Ai fost avertizat!**

:::

**ATENȚIE:** O dezinstalare Unlaunch poate cauza consolei Nintendo DSi un brick. Aici sunt câteva cazuri despre motivul pentru care vrei să dezinstalezi Unlaunch dar cu soluți care nu necesită dezinstalare.

- **The Unlaunch Background is scary:** [Reinstall Unlaunch](installing-unlaunch.html) using the new instructions. Acestea conțin acum instrucțiuni privind modul de schimbare a fundalului
- **Am o problemă cu Unlaunch sau consola mea după instalare:** Pagina de [Troubleshooting](troubleshooting.html#unlaunch) îți va explica cum să rezolvi multe probleme pe care le ai

::: warning

Pentru a reduce șansele de brick, asigură-te că nu ai instalat DSiWare nelegitim pe copia de NAND (redirecționarea SDNAND de la hiyaCFW nu se pune), sau dacă ai umblat la fișierele de sistem.

:::

::: warning

When uninstalling Unlaunch, you should **NOT** use its built-in uninstaller directly on your console as there is a chance that it will brick the console. Te rugăm să vezi mai jos pentru informații despre cum să-l dezinstalezi corect.

:::

Once you have reviewed the above information, follow the [Dumping NAND](dumping-nand.html) instructions to make a new NAND backup, then proceed to [Restoring a NAND Backup](restoring-nand.html). This will guide you through uninstalling Unlaunch from the NAND backup and flashing that to your console.

If you are not able to use no$gba or get an error after uninstalling Unlaunch in no$gba it is also possible to flash a NAND backup made prior to installing Unlaunch if you still have one, however it is recommended to try using a NAND backup that previously had Unlaunch first. This will make recovery significantly easier in the case of a brick requiring a hardmod as Unlaunch leaves the no$gba footer embedded in the NAND even when uninstalled.
