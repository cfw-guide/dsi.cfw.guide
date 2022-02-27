---
title: Játékkártyák dumpolása
---

Ez a rész a játék kártyák dumpolásáról szól GodMode9i-vel, így játszhatók emulátorral, flashcard-ról vagy az SD kártyádról nds-bootstrap segítségével.

## Követelmények
- A dumpolando cím játék kártyája
- A Nintendo DSi konzolod telepített [Unlaunch](installing-unlaunch)-csel

## Instrukciók
### I. rész - SD kártya telepítés

::: tip

Windows-t, Linux-ot vagy macOS-t használsz? Használd a [Lazy DSi Downloader](lazy-dsi-downloader)-t, hogy automatikusan telepítse az SD kártyád.

:::

1. Töltsd le a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) legfrissebb kiadását
1. Csomagold ki a `GodMode9i.nds`-t a GodMode9i archívból és rakd valahova az SD kártyádon

### II. rész - Nintendo DSi lépések
1. Launch GodMode9i
1. Ensure the Game Card is inserted into the console
1. Select the "NDS GAMECARD" option in GodMode9i
1. Select what you want to dump
   - The "Trimmed" options for the ROM will dump a smaller file that can save SD card space, however they won't work for most patches such as ROM hacks
1. Repeat steps 2-4 for all Game Cards you wish to dump

::: tip

A dumpolt játék kártyák az `sd:/gm9i/out` mappában lesznek megtalálhatók.

:::
