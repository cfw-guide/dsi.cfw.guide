# Játékkártyák dumpolása

Ez a rész a játék kártyák dumpolásáról szól GodMode9i-vel, így játszhatók emulátorral, flashcard-ról vagy az SD kártyádról nds-bootstrap segítségével.

## Követelmények

- A dumpolando cím játék kártyája
- A Nintendo DSi konzolod telepített [Unlaunch](installing-unlaunch.html)-csel

## Instrukciók

### I. rész - SD kártya telepítés

1. Töltsd le a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) legutolsó kiadását
2. Csomagold ki a `GodMode9i.nds`-t a GodMode9i archívból és rakd valahova az SD kártyádon

### II. rész - Nintendo DSi lépések

1. Indítsd el a GodMode9i-t
2. Biztosítsd, hogy a játékkártya csatlakoztatott legyen a konzolra
3. Válaszd az "NDS JÁTÉKKÁRTYA" opciót a GodMode9i-ben
4. Válaszd ki amit dumpolni akarsz
   - A "Vágott" opciók a ROM-okhoz kisebb fájlt dumpolnak, ami SD kártya helyet takart meg, de nem fognak működni a legtöbb patch-el, mint példul a ROM hack-ek
5. Ismételd meg a 2-4. lépéseket minden játék kártyára, amit szeretnél dumpolni

::: tip

A dumpolt játék kártyák az `sd:/gm9i/out` mappában lesznek megtalálhatók.

:::
