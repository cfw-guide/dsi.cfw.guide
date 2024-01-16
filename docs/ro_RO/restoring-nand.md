---
title: Restaurarea unei copii NAND
---

::: danger

ATENŢIE! Aceasta este ***periculoasă***. Chiar și urmărirea acestor pași cu exactitate are potențialul de a cauza un brick consolei DSi deoarece NAND-ul este de calitate foarte joasă, în special dacă îl instalezi de mai multe ori! Aceasta ar trebui folosită doar în ultimă instanță!

:::

::: tip

Nu sări peste *nimic* de pe această pagină, orice greșeală mărește șansele de brick.

:::

Pentru început, câteva alternative mai sigure la motivul pentru care vrei să faci asta:
- Instalarea jocurilor DSiWare se poate face folosind hiyaCFW sau TWiLight Menu++
- Recuperarea pozelor se poate face folosind [ninfs](https://github.com/ihaveamac/ninfs/releases), în combinație cu hiyaCFW sau TWiLight Menu++ dacă le vrei pe consolă. Ultima versiune a HiyaCFW Helper îți permite să-ți copiezi pozele de pe NAND pe SDNAND în timpul configurării
- Restaurarea unui buton de configurare Unlaunch poate fi făcută din meniul Unlaunch, ce poate fi accesat dacă ții apăsat pe <kbd class="face">A</kbd> + <kbd class="face">B</kbd> în timp ce pornești consola
- Pornirea în Unlaunch cauzează o eroare? Scoate cardul SD și încearcă să repornești sistemul. Dacă funcționează, atunci există o eroare cu cardul tău SD și restaurarea unei copii NAND nu o va repara
- "An error has occurred..." la lansare este probabil o eroare cu hiyaCFW și nu este legată de NAND, vezi [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) pe DS-Homebrew Wiki pentru mai multe informații
- Orice eroare în TWiLight Menu++ nu are legătură și ar trebui să încerci să reinstalezi TWiLight Menu++ sau să ceri ajutor pe [Discord](https://ds-homebrew.com/discord)
- Dezinstalarea Unlaunch, fie prin instalarea NAND-ului sau folosind dezinstalatorul, ar trebui evitate cu orice preț dacă nu este absolut necesar, poți seta tastele de autopornire la "Launcher" și consola ta DSi va fi în siguranță

Singurul lucru pe care trebuie să-l faci cu NNAD-ul tău este să instalezi Unlaunch. Altfel folosește alternative.

## Cerințe
- Copia NAND **de pe același DSi**
- Ultima versiune a [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Un mod prin care să rulezi homebrew cu acces la NAND, precum Unlaunch sau Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), pentru a-ți examina copia NAND (Descarcă versiunea 'Windows gaming version')
    - Utilizatorii de macOS și Linux pot folosi [WINE](https://winehq.org) pentru a rula no$gba
- [dsibiosdumper](http://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Crearea unei copii BIOS pentru a o folosi în no$gba
1. Extrage `dsibiosdumper` din arhiva `dsibiosdumper.zip` și plaseaz=o oriunde pe cardul SD
2. Pornește-ți consola în timp ce ții apăsat pe <kbd class="face">A</kbd> și <kbd class="face">B</kbd>
    - Aceasta ar trebui să lanseze Meniul de Fișiere Unlaunch
3. Lansează dsibiosdumper din Meniul de Fișiere Unlaunch
4. Apasă <kbd class="face">A</kbd>pentru a crea o copie BIOS pe cardul SD
5. Apasă <kbd>START</kbd> pentru a ieși din dsibiosdumper

## Testarea copiei tale NAND
Este foarte important să testezi copia NAND pentru a vedea dacă este funcțională înainte de a o restaura pe consolă, iar dacă arată o eroare de brick în no$gba aceasta cel mai sigur va cauza un brick și consolei tale.
1. Extrage `NO$GBA.EXE` din `no$gba-w.zip` într-un dosar ce calculatorul tău
2. Copiează copia NAD în dosarul în care ai pus `NO$GBA.EXE` și redenumește-o în `DSI-1.MMC`
3. Copiază `bios7i.bin` și `bios9i.bin` în dosarul în care ai pus `NO$GBA.EXE`, numite `BIOSDSI7.ROM` și `BIOSDSI9.ROM`, respectiv.
4. Rulează `NO$GBA.EXE`
5. Apasă `Options` > `Emulation Setup` pentru a deschide fereastra Emulation Setup
6. Schimbă `Reset/Startup Entrypoint` în `GBA/NDS BIOS (Nintendo logo)`
7. Schimbă `NDS Mode/Colors` în `DSi (retail/16MB)`
8. Apasă `Save Now`
9. Lansează orice ROM Nintendo DS (fișier `.nds`)

Dacă no$gba lansează meniul DSi (sau Meniul de Fișiere Unlaunch), atunci continuă la secțiunea următoare. Dacă arată orice fel de eroare ***nu instala acea copie***!

## Dezinstalarea Unlaunch de pe copia NAND (opțional)
Urmează acești pași dacă ai creat o copie a NAND-ului după ce ai instalat Unlaunch și ai dori să dezinstalezi Unlaunch de pe sistemul tău. Dacă nu vrei să dezinstalezi Unlaunch, **nu** trebuie să urmezi această secțiune.
1. Descarcă ultima versiune a [instalatorului Unlaunch](https://problemkaputt.de/unlaunch.zip)
1. Extrage `UNLAUNCH.DSI` din `unlaunch.zip`
1. Lansează `UNLAUNCH.DSI` în no$gba și pornește-l din slotul Cardului de Joc
    - Acesta ar trebui să pornească instalatorul Unlaunch, care arată similar cu Meniul de Fișiere Unlaunch
1. Alege `Uninstall`
1. Odată finalizat, alege `Power down`
1. Lansează orice ROM Nintendo DS din nou, și asigură-te că meniul DSi se încarcă și funcționează corect

If no$gba shows any kind of error instead of loading the DSi menu, ***do not flash that backup***! If you have an older NAND backup you may want to try using that instead. Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## Instalarea copiei tale NAND (Software)

::: danger

Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.

:::

::: danger

Make sure your Nintendo DSi system is well charged before beginning this section.

:::

1. Cu cardul SD introdus, pornește consola Nintendo DSi în timp ce ții apăsat pe <kbd class="face">A</kbd> și <kbd class="face">B</kbd>
3. Lansează SafeNANDManager
4. Apasă butonul `begin NAND restore`
6. Odată ce restaurarea s-a încheiat, apasă <kbd>START</kbd> pentru a opri consola DSi

Your NAND should now be restored.

## Instalarea copiei tale NAND (Hardmod)
If you cannot boot your Nintendo DSi, a hardmod is the only way to restore a NAND backup. The best guide that currently exists is the [Nintendo DSi hardmod guide on the DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
