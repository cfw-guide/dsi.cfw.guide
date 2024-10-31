# Restaurarea unei copii NAND

::: danger

ATENŢIE! This is _**dangerous**_. Chiar și urmărirea acestor pași cu exactitate are potențialul de a cauza un brick consolei DSi deoarece NAND-ul este de calitate foarte joasă, în special dacă îl instalezi de mai multe ori! Aceasta ar trebui folosită doar în ultimă instanță!

:::

::: tip

Do not skip _anything_ on this page, any mistake greatly increases chance of bricking your DSi.

:::

Pentru început, câteva alternative mai sigure la motivul pentru care vrei să faci asta:

- Instalarea jocurilor DSiWare se poate face folosind hiyaCFW sau TWiLight Menu++
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. Ultima versiune a HiyaCFW Helper îți permite să-ți copiezi pozele de pe NAND pe SDNAND în timpul configurării
- Restaurarea unui buton de configurare Unlaunch poate fi făcută din meniul Unlaunch, ce poate fi accesat dacă ții apăsat pe <kbd class="face">A</kbd> + <kbd class="face">B</kbd> în timp ce pornești consola
- Pornirea în Unlaunch cauzează o eroare? Scoate cardul SD și încearcă să repornești sistemul. Dacă funcționează, atunci există o eroare cu cardul tău SD și restaurarea unei copii NAND nu o va repara
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on [Discord](https://ds-homebrew.com/discord)
- Dezinstalarea Unlaunch, fie prin instalarea NAND-ului sau folosind dezinstalatorul, ar trebui evitate cu orice preț dacă nu este absolut necesar, poți seta tastele de autopornire la "Launcher" și consola ta DSi va fi în siguranță

Singurul lucru pe care trebuie să-l faci cu NNAD-ul tău este să instalezi Unlaunch. Altfel folosește alternative.

## Cerințe

- Your NAND backup **from the same DSi**
- The latest release of [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Un mod prin care să rulezi homebrew cu acces la NAND, precum Unlaunch sau Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), to check your NAND backup (Download the 'Windows gaming version')
  - macOS and Linux users can use [WINE](https://winehq.org) to run no$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Crearea unei copii BIOS pentru a o folosi în no$gba

1. Extract `dsibiosdumper.nds` from the `dsibiosdumper.zip` archive and place it anywhere on your SD card
2. Pornește-ți consola în timp ce ții apăsat pe <kbd class="face">A</kbd> și <kbd class="face">B</kbd>
   - Aceasta ar trebui să lanseze Meniul de Fișiere Unlaunch
3. Lansează dsibiosdumper din Meniul de Fișiere Unlaunch
4. Apasă <kbd class="face">A</kbd>pentru a crea o copie BIOS pe cardul SD
5. Apasă <kbd>START</kbd> pentru a ieși din dsibiosdumper

## Testarea copiei tale NAND

Este foarte important să testezi copia NAND pentru a vedea dacă este funcțională înainte de a o restaura pe consolă, iar dacă arată o eroare de brick în no$gba aceasta cel mai sigur va cauza un brick și consolei tale.

1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Copy your NAND backup to the folder you put `NO$GBA.EXE` in and rename it to `DSI-1.MMC`
3. Copy `bios7i.bin` and `bios9i.bin` to the folder you put `NO$GBA.EXE`, named `BIOSDSI7.ROM` and `BIOSDSI9.ROM`, respectively.
4. Run `NO$GBA.EXE`
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
8. Click `Save Now`
9. Launch any Nintendo DS ROM (`.nds` file)

Dacă no$gba lansează meniul DSi (sau Meniul de Fișiere Unlaunch), atunci continuă la secțiunea următoare. If it shows any kind of error _**do not flash that backup**_!

## Dezinstalarea Unlaunch de pe copia NAND (opțional)

Urmează acești pași dacă ai creat o copie a NAND-ului după ce ai instalat Unlaunch și ai dori să dezinstalezi Unlaunch de pe sistemul tău. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.

1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
2. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
3. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - Acesta ar trebui să pornească instalatorul Unlaunch, care arată similar cu Meniul de Fișiere Unlaunch
4. Choose `Uninstall`
5. Once complete, choose `Power down`
6. Lansează orice ROM Nintendo DS din nou, și asigură-te că meniul DSi se încarcă și funcționează corect

If no$gba shows any kind of error instead of loading the DSi menu, _**do not flash that backup**_! If you have an older NAND backup you may want to try using that instead. Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## Instalarea copiei tale NAND (Software)

::: danger

Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.

:::

::: danger

Make sure your Nintendo DSi system is well charged before beginning this section.

:::

1. Cu cardul SD introdus, pornește consola Nintendo DSi în timp ce ții apăsat pe <kbd class="face">A</kbd> și <kbd class="face">B</kbd>
2. Lansează SafeNANDManager
3. Press the button to `begin NAND restore`
4. Odată ce restaurarea s-a încheiat, apasă <kbd>START</kbd> pentru a opri consola DSi

Your NAND should now be restored.

## Instalarea copiei tale NAND (Hardmod)

If you cannot boot your Nintendo DSi, a hardmod is the only way to restore a NAND backup. The best guide that currently exists is the [Nintendo DSi hardmod guide on the DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
