---
title: Troubleshooting
---

## Unlaunch
### Unlaunch îngheață la `MISMATCH IN FAT COPIES`

twlnf are o eroare critică în care nu actualizează corect întregul NAND după ce este modificat, ce cauzează anumite aplicații homebrew (precum instalatorul Unlaunch) să afișeze o eroare.

Deși se poate repara, metoda de a face asta depinde de fiecare sistem. O metodă este să ștergi orice joc DSiWare instalat în trecut prin twlnf, dar a fost descoperit că mutarea *tuturor* jocurilor DSiWare pe cardul SD și înapoi pe sistem poate ajuta în anumite cazuri.

Dacă ți-ai dezactualizat sistemul în trecut, actualizarea la v1.4.5 (sau v1.4.6 dacă regiunea consolei DSi este China sau Coreea) poate ajuta la repararea acestui bug.

Dacă problema persistă, încearcă asta:
1. Montează copia NAND cu [ninfs](https://github.com/ihaveamac/ninfs/releases), și pornește opțiunea `Allow writing`
1. Odată ce copia NAND este montată, montează `twl_main.img`. Dacă ești pe Windows, poți folosi [OSFMount](https://www.osforensics.com/tools/mount-disk-images.html) pentru a monta imaginea
1. Demontează `twl_main.img`, după demontează copia NAND în ninfs dacă NAND-ul a fost salvat, urmărește [Restaurare NAND](restoring-nand) și continuă cu [Instalarea Unlaunch](installing-unlaunch).

### Nu se aude nimic sau splash-ul de lansare nu apare când lansez "Launcher" în Unlaunch

Dezvoltatorul Unlaunch-ului (nocash) a oprit implicit muzica de fundal și splash-ul de pornire. Poți recâștiga aceste efecte prin a [reinstala Unlaunch](installing-unlaunch) folosind TWiLight Menu++, sau prin folosirea [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Când pornesc consola după ce am instalat Unlaunch apare doar un ecran negru

Încearcă să scoți cardul SD și să repornești consola. Dacă tot apare un ecran negru, va trebui să îți instakezi NAND-ul printr-un [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### După ce am insatlat Unlaunch, sunt blocat la pornirea unei aplicații sau în Meniul de Fișiere Unlaunch

Aceasta a fost cauzată probabil de alegerea unei aplicații greșite pentru opțiunea `NO BUTTON` în Unlaunch. Ține apăsat pe <kbd class="face">A</kbd> + <kbd class="face">B</kbd> în timp ce pornești consola, mergi la `OPTIONS`, și setează `NO BUTTON` la orice preferință ai.

### Alte probleme cu Unalunch

Dacă Unlaunch afișează `Clusters too large`, `Bad VBR`, `Bad MBR`, sau nu afișează nicio aplicație în timp ce cardul SD este inserat, cardul tău SD cel mai probabil nu a fost formatat corect. Reurmărește [Setarea Cardului SD](sd-card-setup).

## TWiLight Menu++

Pentru ajutor în legătură cu TWiLIght Menu++, vezi pagina sa de [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) pe DS-Homebrew Wiki.

## Asistență suplimentară

Dacă ai întâmpinat o problemă ce nu a fost rezolvată aici, sau una care persistă chiar și cu soluțiile oferite, cere ajutor în serverul de Discord [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/yD3spjv).
