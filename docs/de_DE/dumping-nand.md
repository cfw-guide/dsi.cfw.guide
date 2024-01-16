---
title: NAND dumpen
---

Diese Seite dient dazu ein NAND backup zu erstellen, was eine Kopie der Daten des inneren Speichersystem's des DSi's ist. Dies kann sowohl genutzt werden um hiyaCFW einzurichten, als auch no$gba und melonDS für DSi emulation.

::: tip

Make sure the SD card has at least 250MB of free space, or else you'll run into an error message in dumpTool.

:::

::: tip

It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.

:::

## Abschnitt 1 -Einrichtung der SD-Karte

::: tip

If you have already downloaded dumpTool from another section of this guide, you can skip this section.

:::

1. Lade dir die neueste Version von [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds) herunter
1. Platziere `dumpTool.nds` irgendwo auf deiner SD-Karte


## Abschnitt II - NAND-Dump durchführen

1. Starte `dumpTool` mithilfe von TWiLight Menu++
1. Drücke die <kbd class="face">A</kbd> Taste auf deinem DSi um den NAND-Dump zu starten
    - Ein NAND-Backup dauert in der Regel um die 7 Minuten
1. Sobald das NAND-Backup fertig ist, drücke <kbd>START</kbd> auf deinem DSi um `dumpTool` zu verlassen
1. Schalte die Konsole aus und schiebe die SD-Karte zurück in den Computer
1. Verschiebe das Nand-Backup an einen Ort, wo es nicht verloren geht
    - Wenn möglich, mache eine Kopie/backup vom Nand-Backup auf verschiedenen Geräten
    - Erst wenn das NAND-Backup auf einem anderen Gerät gespeichert wurde, kann man es von der SD-Karte löschen

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
