---
title: Copiere NAND
---

Această pagină este pentru creerea unei copii NAND, ce este o copie a datelor de pe stocarea interna a Nintendo DSi. Ea poate fi folosit pentru a seta hiyaCFW, precum și no$gba și melonDS pentru emularea DSi.

::: tip

Este recomandat să faci acest lucru. O copie NAND poate fi folosită ca un punct de restaurare în viitor, în cazul unui brick.

:::

## Secțiunea I - Setarea cardului SD

::: tip

If you have already downloaded dumpTool from another section of this guide, you can skip this section.

:::

1. Descarcă ultima versiune a [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
1. Plasează `dumptool.nds` oriunde pe cardul tău SD


## Secțiunea II - Creerea unei copii NAND

1. Lansează `dumpTool` prin TWiLight Menu++
1. Apasă butonul <kbd class="face">A</kbd> pe Nintendo DSi pentru a începe creerea unei copii NAND
   - O copiere NAND durează de obicei 7 minute
1. Când copierea NAND este completă, apasă butonul <kbd>START</kbd> pe Nintendo DSi pentru a ieși din dumpTool
1. Oprește-ți consola și inserează cardul SD înapoi în dispozitiv
1. Păstrează această copie undeva în siguranță, unde nu-l poți pierde
   - Dacă este posibil, creează mai multe copii pe mai multe dispozitive
   - Odată ce ai salvat-o în alt loc, poți să o ștergi de pe cardul SD

::: warning

Hash-ul SHA1 al `nand.bin` nu se va potrivi cu hash-ul stocat în `nand.bin.sha1`. Asta deoarece dumpTool crează date suplimentare cunoscute ca un footer no$gba pe fișierul `nand.bin` după ce hash-ul SHA1 este calculat. Poți folosi [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) pentru a crea o copie fără footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
