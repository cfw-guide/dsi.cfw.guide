# Hibaelhárítás

## Unlaunch
### Az Unlaunch lefagy a `MISMATCH IN FAT COPIES` üzenetnél?
A twlnf-nek van egy kritikus hibája, amikor nem frissíti megfelelően az egész NAND-ot a módosítása után, ami bizonyos homebrew-ok esetén (mint példul az Unlaunch telepítő) hibát dob.

Habár javítható, a metódus, ahogy ez megtehető, nem kőbe vésett és változik a különböző rendszereken. Az egyik metódus, hogy törölj minden DSiWare-t ami a twlnf-en keresztül lett telepítve a múltban, de azt is jelentette valaki, hogy a mozgatása *minden* DSiWare-nek az SD kártyára, majd vissza segített bizonyos esetekben.

Ha korábban downgrade-elted a rendszert, a vissza frissítése v1.4.5-re (vagy v1.4.6-ra, ha a DS régiód kínai vagy koreai) is segíthet ezen a hibán.

### Nincs hang vagy boot képernyő, amikor a "LAUNCHER" kerül indításra az Unlaunch-csel

Az Unlaunch fejlesztője (nocash) szándékosan kipatchelte alapértelmezésként háttérzenét és a boot képernyőt. Visszaszerezheted ezeket az effekteket az [Unlaunch újratelepítésével](/installing-unlaunch) a TWiLight Menu++-n keresztül.
