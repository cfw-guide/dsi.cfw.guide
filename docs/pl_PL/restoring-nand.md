# Przywracanie kopii zapasowej NAND

::: danger

OSTRZEŻENIE! This is _**dangerous**_. Nawet podążając za tymi krokami, nadal istnieje potencjał do zablokowania DSi, ponieważ NAND jest bardzo niskiej jakości, zwłaszcza jeśli flashujesz wiele razy! Powinno to być stosowane tylko w ostateczności!

:::

::: tip

Do not skip _anything_ on this page, any mistake greatly increases chance of bricking your DSi.

:::

Po pierwsze, kilka bezpieczniejszych alternatyw dla tego:

- Instalacja DSiWare może być wykonana za pomocą hiyaCFW lub TWiLight Menu++
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. The latest version of the HiyaCFW Helper allows you to copy your photos from your NAND to the SDNAND during setup
- Restoring an Unlaunch button configuration can be done from the Unlaunch menu, which can be accessed by holding <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while powering the console on
- Uruchamianie w Unlaunch skutkujące błędem? Take out your SD card and try starting the system again. Jeśli zadziała, to jest to błąd na twojej karcie SD i przywrócenie kopii zapasowej NAND tego nie naprawi
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on [Discord](https://ds-homebrew.com/discord)
- Odinstalowanie Unlauncha, czy to poprzez flashowanie NAND czy użycie deinstalatora, powinno być unikane, chyba że jest to absolutnie konieczne, możesz ustawić klucze autobootu na "Launcher" i DSi będzie jak nowy

Jedyną rzeczą, którą powinieneś zrobić ze swoją pamięcią NAND jest instalacja Unlaunch. W przeciwnym razie należy korzystać z innych rozwiązań.

## Wymagania

- Your NAND backup **from the same DSi**
- The latest release of [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Sposób uruchamiania homebrew z dostępem NAND, takim jak Unlaunch lub Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), to check your NAND backup (Download the 'Windows gaming version')
  - macOS and Linux users can use [WINE](https://winehq.org) to run no$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Zrzucenie BIOS do użycia w no$gba

1. Extract `dsibiosdumper.nds` from the `dsibiosdumper.zip` archive and place it anywhere on your SD card
2. Włącz konsolę przytrzymując <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
   - To powinno uruchomić Unlaunch Filemenu
3. Uruchom dsibiosdumper z Unlaunch Filemenu
4. Naciśnij <kbd class="face">A</kbd> aby zrzucić BIOS do karty SD
5. Naciśnij <kbd>START</kbd> aby wyjść z dsibiosdumpera

## Testowanie kopii zapasowej NAND

Bardzo ważne jest, aby sprawdzić, czy kopia zapasowa NAND działa przed próbą przywrócenia jej na konsolę, jeśli pokaże zablokowanie w no$gba, najprawdopodobniej zablokuje również konsolę.

1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Copy your NAND backup to the folder you put `NO$GBA.EXE` in and rename it to `DSI-1.MMC`
3. Copy `bios7i.bin` and `bios9i.bin` to the folder you put `NO$GBA.EXE`, named `BIOSDSI7.ROM` and `BIOSDSI9.ROM`, respectively.
4. Run `NO$GBA.EXE`
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
8. Click `Save Now`
9. Launch any Nintendo DS ROM (`.nds` file)

If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. If it shows any kind of error _**do not flash that backup**_!

## Uninstalling Unlaunch from your NAND backup (optional)

Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.

1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
2. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
3. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu
4. Choose `Uninstall`
5. Once complete, choose `Power down`
6. Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly

If no$gba shows any kind of error instead of loading the DSi menu, _**do not flash that backup**_! If you have an older NAND backup you may want to try using that instead. Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## Wgrywanie kopii zapasowej NAND (Urządzenie)

::: danger

Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.

:::

::: danger

Make sure your Nintendo DSi system is well charged before beginning this section.

:::

1. Po włożeniu karty SD włącz Nintendo DSi, trzymając <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
2. Uruchom SafeNANDManager
3. Press the button to `begin NAND restore`
4. Po zakończeniu przywracania, naciśnij <kbd>START</kbd>, aby wyłączyć DSi

Your NAND should now be restored.

## Wgrywanie kopii zapasowej NAND (Hardmod)

If you cannot boot your Nintendo DSi, a hardmod is the only way to restore a NAND backup. The best guide that currently exists is the [Nintendo DSi hardmod guide on the DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
