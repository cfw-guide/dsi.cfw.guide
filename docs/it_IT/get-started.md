# Per iniziare

Per prima cosa scaricheremo alcuni tool per homebrew, in preparazione per i passaggi dell'exploit.

## Requisiti

- Un modo per copiare i file scaricati sulla scheda SD
- Un'applicazione che può estrarre archivi, come [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), o [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
  - Ti consigliamo di non usare WinRAR, perché è noto causare problemi
  - Se stai usando Windows 11, ti consigliamo di non utilizzare l'estrattore integrato (Windows Explorer), perché causerà un errore dicendo che il nome del file è troppo lungo o non valido

## Sezione I - Preparazione

::: warning

Assicurati che la tua scheda SD sia [formattata correttamente](sd-card-setup.html).

:::

1. Inserisci la scheda SD nel PC
2. Scarica l'ultima versione di [dumpTool](https://dsi.cfw.guide/assets/files/dumptool/boot.nds) come `boot.nds`
3. Copia il file `boot.nds` nella root della tua scheda SD

::: tip

Non sai cosa sia la "root" della SD? [Vedi questa immagine](/assets/images/sdroot/en_US.png)

:::

## Sezione II - Verifica se Unlaunch è già installato

Unlaunch is a bootcode exploit which gets installed onto the DSi console itself, allowing full control of the console on boot, and as a result, allows homebrew applications full access to the hardware without restrictions from DSi system apps or DSiWare titles.

Alcune console DSi che sono vendute come usato/ricondizionate potrebbero già avere Unlaunch installato.

To check, press the <kbd class="face">POWER</kbd> button and immediately hold the <kbd class="face">A</kbd> + <kbd class="face">B</kbd> buttons.

- Se vedi un menu che mostra `Nocash Unlaunch.dsi` nella schermata superiore, ciò significa che Unlaunch è già installato, quindi puoi proseguire a [Effettuare dump della NAND](dumping-nand.html).
- Se il DSi inizia normalmente con il menu DSi che appare, procedi con la Sezione III.

## Sezione III - Memory Pit

Memory Pit is an exploit utilizing the DSi Camera, compatible with all firmware versions.

If using the exploit without installing Unlaunch, compatibility with some homebrews could be limited. If you encounter issues with DSi homebrews, you can return to this guide and set up an [alternate exploit](alternate-exploits.html) instead.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::
