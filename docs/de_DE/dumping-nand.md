---
title: NAND dumpen
---

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

Der SHA1-Hash von der `nand.bin` wird nicht mit der von `nand.bin.sha1` übereinstimmen. Das liegt daran, dass dumpTool weitere Daten (NO$gba-Footer genannt) zur `nand.bin` Datei hinzufügt, nachdem der SHA1-Hash kalkuliert wurde. Du kannst die [hiyaCFW Hilfe](https://github.com/mondul/HiyaCFW-Helper/releases) nutzen, um eine Kopie ohne No$gba-Footer zu erstellen.

:::

::: tip

Fahre fort mit der [Installation von Unlaunch](installing-unlaunch.html) (Optional)

:::
