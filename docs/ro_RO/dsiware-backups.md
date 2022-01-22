---
title: Copii DSiWare
---

## Cerințe
- Ultima versiune a [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - Descarcă arhiva, extrage conținuturile și plasează `GodMode9i.nds` oriunde pe cardul SD

## Nintendo DSi - Instrucțiuni

### Secțiunea I - Idnetificarea jocului DSiWare dorit
1. Lansează GodMode9i și selectează `[nand:] SYSNAND`
1. Navighează la dosarul `title`
1. Alege dosarul potrivit categoriei pe care o cauți
   - `00030004`: DSiWare Standard
   - `00030005`: Unelte Distractive Preinstalate
   - `0003000f`: Date de Sistem (fișiere non-DSiWare, nu pot fi rulate)
   - `00030015`: Unelte de Bază de Sistem
   - `00030017`: Launcher
1. Odată ce ai ales ce tip de DSiWare vrei să extragi, introdu un subdosar, și după aceea introdu `content`
1. Acolo ar trebui să fie acum un fișier `.app` vizibil. Selectează fișierul, și alege `Show NDS file info`. Acesta îți va spune dacă este titlul DSiWare pe care îl cauți
   - Dacă nu este titlul DSiWare pe care îl cauți, continuă să cauți în alte dosare până îl găsești
   - Fișierele din `0003000f` nu pot avea informațiile despre fișierele NDS afișate deoarece nu sunt fișiere DSiWare lansabile și nu conțin un banner valid

### Secțiunea II - Extragerea jocului DSiWare
1. Evidențiază fișierul `.app`, apoi apasă <kbd class="face">Y</kbd> pentru a-l adăuga la clipboard
1. Navighează cardul SD până la dosarul în care dorești să-ți pui titlul DSiWare
1. Apasă <kbd class="face">Y</kbd> din nou pentru pune titlul DSiWare în dosarul pe care în navighezi acum
   - Poți schimba numele fișierului după ce l-ai pus în dosar dacă apeși <kbd class="face">X</kbd> în timp ce ții apăsat pe <kbd class="R">R</kbd>
   - Repetă asta pentru toate fișierele pe care dorești să le copiezi în același dosar

Ar trebui să vezi acum titlul DSiWare în TWiLight Menu++ sau în Meniul de Fișiere Unlaunch.

### Secțiunea III - Extragerea fișierului de salvare (opțional)
1. În același dosar în care se află `content` pentru jocul DSiWare speificat, se va afla un dosar numit `data`
1. Înăuntrul dosarului `data` se află fișierul de salvare. Copiază acest fișier pe cardul tău SD la fel cum ai copiat titlul DSiWare însuși
   - Unlaunch și nds-bootstrap folosesc extensiile `.pub` și `.prv` pentru fișierele de salvare DSiWare. Dacă fișierul tău de salvare DSiWare a fost inițial numit `public.sav`, folosește extensia `.pub`, și dacă fișierul de salvare a fost numit inițial `private.sav`, foloseșye extensia `.prv`
   - Dacă dorești să folosești fișierul de salvare DSiWare cu TWiLight Menu ++, asigură-te că l-ai plasat în dosarul `saves` la locația ROM-ului tău
