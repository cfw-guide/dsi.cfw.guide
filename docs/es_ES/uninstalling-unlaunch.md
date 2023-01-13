---
title: Desinstalar Unlaunch
---

::: danger

**¡Instalar o desinstalar Unlaunch puede bloquear totalmente tu consola de manera aleatoria! ¡Fuiste advertido!**

:::

**ADVERTENCIA:** Desinstalar Unlaunch puede bloquear totalmente tu consola. Aquí hay algunos casos por los que podrías querer desinstalar Unlaunch, junto con soluciones que no lo requerirían.

- **El fondo de Unlaunch da miedo:** [Reinstala Unlaunch](installing-unlaunch.html) siguiendo las nuevas instrucciones. Ahora hay instrucciones para cambiar el fondo
- **Tengo problemas con Unlaunch o con mi consola después de instalarlo:** La [página de solución de problemas](troubleshooting.html#unlaunch) puede tener la solución a muchos de los problemas que podrías estar experimentando.

::: warning

Para reducir la posibilidad de bloqueo total, asegúrate de que no has instalado títulos DSiWare de forma no legítima a tu respaldo de la NAND (la redirección a títulos desde la SDNAND de hiyaCFW no cuenta), o que no has tocado y movido de alguna otra forma los archivos del sistema.

:::

::: warning

When uninstalling Unlaunch, you should **NOT** use its built-in uninstaller directly on your console as there is a chance that it will brick the console. Echa un vistazo a la información de más abajo para desinstalar Unlaunch de la manera correcta.

:::

Once you have reviewed the above information, follow the [Dumping NAND](dumping-nand.html) instructions to make a new NAND bacup, then proceed to [Restoring a NAND Backup](restoring-nand.html). This will guide you through uninstalling Unlaunch from the NAND backup and flashing that to your console.

If you are not able to use no$gba or get an error after uninstalling Unlaunch in no$gba it is also possible to flash a NAND backup made prior to installing Unlaunch if you still have one, however it is recommended to try using a NAND backup that previously had Unlaunch first. This will make recovery significantly easier in the case of a brick requiring a hardmod as Unlaunch leaves the no$gba footer embedded in the NAND even when uninstalled.
