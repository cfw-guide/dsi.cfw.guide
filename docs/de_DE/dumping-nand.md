# NAND dumpen

Diese Seite dient dazu ein NAND backup zu erstellen, was eine Kopie der Daten des inneren Speichersystem's des DSi's ist. Dies kann sowohl genutzt werden um hiyaCFW einzurichten, als auch no$gba und melonDS für DSi emulation.

::: tip

Vergewissern Sie sich, dass die SD-Karte mindestens 250 MB freien Speicherplatz hat, sonst gibt es eine Fehlermeldung in dumpTool.

:::

::: tip

Es wird dringenst empfohlen, dies zu tun. Ein NAND backup kann im falle, wenn der DSi beschädigt wird, als Wiederherstellungspunkt dienen.

:::

## Abschnitt 1 -Einrichtung der SD-Karte

::: tip

Wenn Sie dumpTool bereits von einem anderen Abschnitt dieser Anleitung heruntergeladen haben, können Sie diesen Abschnitt überspringen.

:::

1. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Place `dumpTool.nds` anywhere on your SD card

## Abschnitt II - NAND-Dump durchführen

1. Launch `dumpTool` through TWiLight Menu++
2. Drücke die <kbd class="face">A</kbd> Taste auf deinem DSi um den NAND-Dump zu starten
   - Ein NAND-Backup dauert in der Regel um die 7 Minuten
3. Sobald das NAND-Backup fertig ist, drücke <kbd>START</kbd> auf deinem DSi um <code>dumpTool</code> zu verlassen
4. Schalte die Konsole aus und schiebe die SD-Karte zurück in den Computer
5. Verschiebe das Nand-Backup an einen Ort, wo es nicht verloren geht
   - Wenn möglich, mache eine Kopie/backup vom Nand-Backup auf verschiedenen Geräten
   - Erst wenn das NAND-Backup auf einem anderen Gerät gespeichert wurde, kann man es von der SD-Karte löschen

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
