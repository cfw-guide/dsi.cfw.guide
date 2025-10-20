# Hibaelhárítás

## Unlaunch

### Az Unlaunch lefagy a `MISMATCH IN FAT COPIES` üzenetnél

A twlnf-nek van egy kritikus hibája, amikor nem frissíti megfelelően az egész NAND-ot a módosítása után, ami bizonyos homebrew-ok esetén (mint példul az Unlaunch telepítő) hibát dob.

Ennek a javításához, nyisd meg a [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases)-t és válaszd a Fix FAT copy mismatch opciót\`.

### Nincs hang vagy boot képernyő, amikor a "LAUNCHER" kerül indításra az Unlaunch-csel

Az Unlaunch fejlesztője (nocash) szándékosan kipatchelte alapértelmezésként háttérzenét és a boot képernyőt. Visszaszerezheted ezeket az effekteket az [Unlaunch újratelepítésével](installing-unlaunch.html) az `Enable sound and splash` opció bekapcsolásávak vagy a [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) használatával.

### A bekapcsolás csak fekete képernyőt mutat az Unlaunch telepítése után

Vedd ki az SD kártyád és próbáld újra indítani a rendszered. Ha továbbra is fekete képernyőt mutat, lehet, hogy flash-elned kell a NAND-od [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot)-tal vagy [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod)-on keresztül.

### A kikapcsolás a DSi Menüben és/vagy System Settings-ben 5-10 másodpercet igényel

A lehetséges megoldások, a DSi Menu és/vagy System Settings indítása kivett SD kártyával, a [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) telepítése vagy az Unlaunch eltávolítása.

### Az Unlaunch telepítése után beragadok egy alkalmazásba bootolásnál

Ez valószínűleg egy rossz app választása miatt van a `NO BUTTON` opciónál az Unlaunch-ben. Tartsd nyomva az <kbd class="face">A</kbd> + <kbd class="face">B</kbd> gombokat a konzol indításakor és menj az `OPTIONS` menübe, majd állítsd be a `NO BUTTON` opciót arra, amire szeretnéd.

### Egyéb Unlaunch problémák

Ha az Unlaunch `Clusters too large`, `Bad VBR`, `Bad MBR` hibát jelenít meg vagy nem jelenít meg semmilyen alkalmazást, miközben az SD kártya behelyezett, az SD kártyád valószínűleg nem jól formázott. Kövesd újra az [SD kártya készítést](sd-card-setup.html).

## TWiLight Menu++ hibaelhárítás

Az általános TWiLight Menu++ hibaelhárításhoz tekintsd meg a [GYIK & hibaelhárítás](https://wiki.ds-homebrew.com/twilightmenu/faq) oldalt a DS-Homebrew Wiki-n.

## További segítség

Ha olyan hibába ütköztél, ami nincs megoldva itt, vagy egy olyanba, ami továbbra is fenn áll a megadott megoldások ellenére kérj segítséget a [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4) Discord szerveren.
