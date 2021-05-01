---
title: "nds-bootstrap forwarderek a hiyaCFW-hez"
redirect_from:
  - /forwarder
---

Ez a kiegészítő rész forwarderek létrehozásáról szól nds-bootstrap számára. Ez lehetővé teszi nds romok indítását közvetlenül az SDNAND System Menu-jéből.

## Követelmények

- Egy Nintendo DSi rendszer [Unlaunch](/installing-unlaunch) & [hiyaCFW](/hiyacfw-setup) telepítéssel
- Egy [TWiLight Menu++](launching-the-exploit#twilight-menu) telepítés
- A [MakeForwarder](https://github.com/Ta180m/Make-Forwarder-Dsi/releases) legutolsó kiadása

### Instrukciók

1. Csomagold ki *a tartalmát a* `MakeForwarder.zip`-nek az SD kártyád gyökerébe
1. Indítsd el a TWiLight Menu++-t az Unlaunch menüjéből
   - Nyomj a <kbd class="face">A</kbd> & <kbd class="face">B</kbd> gombokat az Unlaunch menühöz
1. Indítsd el a Nintendo DS ROM-od
1. Ha a ROM-od bootolt és működik, kapcsold ki a konzolod
   - Ha nem működött, akkor kövesd az nds-bootstrap hibaelhárítási lépeseket
1. Indítsd el a hiyaCFW-t az Unlaunch menüjéből
1. Ha a Nintendo DSi System Menüjében vagy, csomagold ki és indítsd el a "Forwarder Maker"-t
1. Válaszd ki a cél bootstrap-et az alkalmazásodtól függően:
   - **Kereskedelmi ROM:** `sd:/_nds/nds-bootstrap-release.nds`
   - **Homebrew:** `sd:/_nds/nds-bootstrap-hb-release.nds`
1. Válaszd a "create forwarder" & navigáld el a ROM-odhoz

Ismételd meg a 7. és 8. lépést, amíg minden ROM-odhoz nem csináltál forwardert.
- Nem szükséges visszaállítanod a cél bootstrap-et, csak akkor, ha a korábbi választás nem felel meg az aktuális ROM-hoz

Ha minden ROM-odhoz készült forwarder, indítsd újra a rendszered, majd indítsd el a hiyaCFW-t. Most már meg kell jelenniük, mint ajándék csomagok.
