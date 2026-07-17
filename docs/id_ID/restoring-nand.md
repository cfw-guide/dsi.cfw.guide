# Memulihkan cadangan NAND

::: danger

PERINGATAN! Ini _**berbahaya**_. Even following these steps exactly still has potential to brick the DSi as the NAND is very low quality, especially if you flash multiple times! This should only be used as a last resort!

:::

::: tip

Do not skip _anything_ on this page, any mistake greatly increases chance of bricking your DSi.

:::

First, a few safer alternatives to why you might want to do this:

- Installing DSiWare can be done using hiyaCFW or TWiLight Menu++
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. The latest version of the HiyaCFW Helper allows you to copy your photos from your NAND to the SDNAND during setup
- Restoring an Unlaunch button configuration can be done from the Unlaunch menu, which can be accessed by holding <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while powering the console on
- Booting into Unlaunch resulting in an error? Take out your SD card and try starting the system again. If it works, then it's a fault with your SD card and restoring a NAND backup won't fix it
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on [Discord](https://ds-homebrew.com/discord)
- Uninstalling Unlaunch, whether by flashing NAND or using its uninstaller, should avoided unless absolutely necessary, you can set the autoboot keys to "Launcher" and your DSi will be like stock

The only thing you should be doing with your NAND is installing Unlaunch. Use the alternatives otherwise.

## Persyaratan

- Cadangan NAND **dari DSi yang sama**
- Versi terkini dari [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Konsol bisa ke _homebrew_ dengan akses NAND, seperti Unlaunch atau Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), untuk menguji cadangan NAND (Unduh yang 'Windows gaming version')
  - Pengguna macOS dan Linux perlu [WINE](https://winehq.org) untuk membuka no$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Membuat dump BIOS untuk diuji no$gba

1. Ekstrak `dsibiosdumper.nds` dari arsip `dsibiosdumper.zip`, dan taruh di mana saja di kartu SD
2. Nyalakan daya konsol selagi menahan <kbd class="face">A</kbd> dan <kbd class="face">B</kbd>
   - Ini seharusnya ke Filemenu dari Unlaunch
3. Buka dsibiosdumper dari Filemenu di Unlaunch
4. Tekan <kbd class="face">A</kbd> untuk men-_dump_ BIOS ke kartu SD
5. Tekan <kbd>START</kbd> untuk keluar dari dsibiosdumper

## Menguji cadangan NAND

It is very important to test that your NAND backup is working before attempting to restore it to your console, if it shows a brick error in no$gba it will most likely brick your console too.

1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Salin cadangan NAND Anda ke folder yang ada `NO$GBA.EXE` dan ubah namanya menjadi `DSI-1.MMC`
3. Copy `bios7i.bin` and `bios9i.bin` to the folder you put `NO$GBA.EXE`, named `BIOSDSI7.ROM` and `BIOSDSI9.ROM`, respectively.
4. Run `NO$GBA.EXE`
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Ubah `NDS Mode/Colors` ke `DSi (retail/16MB)`
8. Click `Save Now`
9. Launch any Nintendo DS ROM (`.nds` file)

If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. Jika terjadi galat, _**jangan flash-kan cadangan ini**_!

## Mencopot Unlaunch dari cadangan NAND (opsional)

Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.

1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
2. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
3. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu
4. Choose `Uninstall`
5. Once complete, choose `Power down`
6. Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly

If no$gba shows any kind of error instead of loading the DSi menu, _**do not flash that backup**_! If you have an older NAND backup you may want to try using that instead. Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## Mem-flash cadangan NAND (Cara Digital)

::: danger

Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.

:::

::: danger

Make sure your Nintendo DSi system is well charged before beginning this section.

:::

1. Sisipkan kartu SD, lalu nyalakan Nintendo DSi sambil menahan <kbd class="face">A</kbd> dan <kbd class="face">B</kbd>
2. Buka SafeNANDManager
3. Pulihkan dengan menekan `begin NAND restore`
4. Selesai memulihkan, tekan <kbd>START</kbd> untuk mematikan daya DSi

Kini NAND konsol seharusnya pulih.

## Mem-flash cadangan NAND (Oprek Fisik)

Jika Nintendo DSi masih tidak menyala, memulihkan cadangan NAND berarti perlu oprek fisik. Panduan jelasnya bisa dilihat di [panduan oprek fisik Nintendo DSi di Wiki DS-Homebrew](https://wiki.ds-homebrew.com/id-ID/ds-index/hardmod#nintendo-dsi).
