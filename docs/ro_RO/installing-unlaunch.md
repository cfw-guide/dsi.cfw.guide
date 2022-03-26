---
title: Instalarea Unlaunch
---

::: danger

Unlaunch nu este compatibil cu consolele Nintendo DSi de dezvoltare.

:::

Unlaunch este un exploit ce are loc la pornirea sistemului. Aceasta îi permite să aibă privilegii mai mari decât exploit-urile normale DSiWare precum Memory Pit, ceea ce-i permite să facă următoarele:

- Lansarea aplicațiilor la pornire (homebrew sau DSiWare), cu combinații de butoane opționale
- Acces la Slot-1, permițându-ți să creezi backup-uri pentru Carduri de Joc și să lansezi flashcard-uri incompatibile
- Blocajele de regiune scoase pe Cardurile de Joc Dsi-Enhanced / Exclusive
- Să ruleze jocuri homebrew vechi pentru Nintendo DS prin nds-bootstrap-hb
- Protecție împotriva brick-urilor
- Removes Donor ROM requirement for running DSi-Enhanced games in DSi mode
- Următoarele pentru utilizatorii de Memory Pit (alte exploit-uri deja permit acestea):
     - Compatibilitate îmbunătățită pentru jocurile DSiWare lansate de pe cardul SD
     - Sunet mai bun în GBARunner2

::: danger

Dacă nu ai făcut asta deja, te rugăm urmărește [Creere copie NAND](dumping-nand). Chiar dacă șansele sunt mici, Unlaunch poate să îi producă un brick consolei tale Nintendo DSi. O copie NAND + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) îți vor permite să restaurezi această copie, asta dacă știi să sudezi.

:::

::: warning

Asigură-te că sistemul tău este încărcat când urmezi acest proces. O oprire bruscă poate rezulta daune grave.

:::

## Secțiunea I - Setarea cardului SD

::: tip

Folosești Windows, Linux sau macOS? Folosește [Lazy DSi Downloader](lazy-dsi-downloader) pentru a-ți seta automat cardul SD.

:::

1. Descarcă ultima versiune a [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Link oglindă](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), dacă cel de mai sus nu merge
1. Extrage `UNLAUNCH.DSI` din arhiva `unlaunch.zip` și plaseaz-o oriunde pe cardul SD
1. Verifică dacă încă mai ai TWiLight Menu++ pe cardul SD
   - Dacă nu ești sigur, urmărește instrucțiunile de pe pagina [Lansarea Exploit-ului](launching-the-exploit.html#twilight-menu)

## Secțiunea II - Instalarea/Actualizarea Unlaunch

1. Deschide TWiLight Menu++
   - Dacă asta este prima dată când instalezi Unlaunch, relansează TWiLight Menu++ prin exploit-ul pe care l-ai folosit
   - Dacă ai instalat deja Unalaunch și vrei să-l actualizezi, ține apăsat pe <kbd class="face">A</kbd> + <kbd class="face">B</kbd> în timp ce pornești consola și selectează `TWiLight Menu++` unde `BOOT.NDS` apare pe ecranul de jos
1. Lansarea Setărilor TWiLight Menu++
   - Dacă nu ți-ai schimbat tema, urmează pașii de pe pagina "Lansarea Exploit-ului". Altfel, consultă Manualul TWiLight Menu++
1. Apasă <kbd class="l">L</kbd> / <kbd class="r">R</kbd> sau <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> până ajungi la pagina `Setări Unlaunch`
1. Dacă vrei să schimbi imaginea de fundal a Unlaunch, selectează `Fundal`și alege pe cea pe care o vrei
   - Dacă vrei să-ți creezi propriul fundal Unlaunch, vezi [pagina DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Dacă vrei ecranul Health and Safety și muzica și sunetele Meniului DSi când folosești Meniul Nintendo DSi oficial, atunci setează `Launcher Patches` la `Off`
   - Aceasta va menține blocajele de regiune și lista albă a cardurilor, ceea ce înseamnă că anumite flashcard-uri nu vor fi utilizabile din Meniul DSi
1. Ieși din Setările TWiLight Menu++
1. În meniul de navigare fișiere, lansează `Unlaunch DSi Installer`
1. Seelctează opțiunea de instalare
   - Dacă Unlaunch îngheață la `ERROR: MSIMATCH IN FAT COPIES`, te rugăm uită-te pe pagina de [Troubleshooting](troubleshooting)
1. După ce ai terminat, repornește-ți sistemul

Dacă vezi ecranul Meniului de Fișiere al Unlaunch, ți-ai modificat cu succes consola.
- Dacă vezi un ecran negru, te rugăm să consulți pagina de [Troubleshooting](troubleshooting)

## Secțiunea III - Configurarea după Instalarea Unlaunch

Momentan, Unlaunch își lansează implicit Meniul de Fișiere la pornire, dar aceasta poate fi schimbată pentru a lansa ce vrei tu.

1. Pornește-ți consola în timp ce ții apăsat pe <kbd class="face">A</kbd> și <kbd class="face">B</kbd>
   - Aceasta ar trebui să lanseze Meniul de Fișiere Unlaunch
1. Navighează la `OPȚIUNI`, și uită-te la opțiunile disponibile
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> este hard-codat pentru a lansa în meniul Unlaunch, deci nu poate fi schimbat
   - Opțiunile `NO BUTTON` și `BUTTON A / B / X / Y` pot fi setate cum îți dorești și vor alege ce va lansa pe DSi la pornire în funcție debutoanele care sunt apăsate. Poți selecta orice DSiWare, homebrew, cardul Slot-1, wifiboot, sau Meniul de Fișiere al Unlaunch
      - Pentru TWiLight Menu++, selectează opțiunea `TWiLight Menu++` unde `BOOT.NDS` este afișat pe ecranul de jos
      - Pentru Meniul DSi original, selectează `Launcher`
   - `LOAD ERROR` este ceea ce DSi va afișa dacă încarci ceve ce ai setat eșuează, precum faptul că nu ai introdus cardul SD
1. Selectează `SAVE & EXIT` pentru a-ți salva setările, apoi oprește consola DSi

## Secțiunea IV - Curățarea cardului SD

::: tip

Această secțiune este opțională și servește pentru a-ți curăța cardul SD.

:::

- Șterge fișierul `sd:/private/ds/app/484E494A/pit.bin` de pe cardul SD
   - Dacă ai folosit un alt expoit, șterge fișierele de la acel exploit
- Șterge fișierul `UNLAUNCH.DSI` de pe cardul SD
