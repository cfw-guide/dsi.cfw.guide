# Cartrige-k dumpolása

Ez a rész a cartridge-k dumpolásáról szól GodMode9i-vel, így játszhatók emulátorral, flashcard-ról vagy az SD kártyádról nds-bootstrap segítségével.

## Követelmények
- A dumpolando cím cartridge-je
- A Nintendo DSi konzolod telepített [Unlaunch](installing-unlaunch)-csel

## Instrukciók
### I. rész - SD kártya telepítés

::: tip
Windows-t, Linux-ot vagy macOS-t használsz? Használd a [Lazy DSi Downloader](lazy-dsi-downloader)-t, hogy automatikusan telepítse az SD kártyád.
:::

1. Töltsd le a [GodMode9i](https://github.com/RocketRobz/godmode9i/releases) legfrissebb kiadását
1. Csomagold ki a `GodMode9i.nds`-t a GodMode9i archívból és rakd valahova az SD kártyádon

### II. rész - Nintendo DSi lépések
1. Kapcsold be a konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
   - Ez el kell indítsa az Unlaunch Filemenu-t
1. Indítsd el GodMode9i-t az Unlaunch Filemenu-ből
1. Biztosítsd, hogy a játékkártya csatlakoztatott legyen a konzolra
1. Válaszd az "NDS GAMECARD" opciót a GodMode9i-ben
1. Válaszd ki, szeretnél-e paddingolni vagy sem:
   - Full: Padding hozzáadva
   - Trim: Paddingolás eltávolítva
1. Ismételd meg a 3-5. lépéseket a cartridge-ekre, amit szeretnél dumpolni

::: tip
A dumpolt cartridge-ek az `sd:/gm9i/out` mappában található.
:::
