# Membuat Dump NAND

Laman ini berisi cara mencadang NAND yang merupakan penyimpanan internal Nintendo DSi. Bisa juga digunakan untuk hiyaCFW, serta no$gba dan melonDS untuk emulasi DSi.

::: tip

Pastikan kartu SD setidaknya tersisa 250MB, jika tidak nanti akan muncul pesan galat di dumpTool.

:::

::: tip

Ini sebaiknya dilakukan. Cadangan NAND bisa digunakan sebagai pemulihan kalau-kalau _brick_ (matot).

:::

## Bagian I - Penyiapan kartu SD

::: tip

Jika sudah mengunduh dumpTool dari panduan lain di situs ini, lewati saja bagian ini.

:::

1. Unduh versi terkini dari [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Taruh `dumpTool.nds` di mana saja di kartu SD

## Bagian II - Membuat Dump NAND

1. Launch `dumpTool` through the menu you have installed
   - If you've used an exploit to launch it, and you're already in dumpTool, ignore this step
   - If Unlaunch is already installed and you we're directed to this page from the [Get Started](get-started.html#section-ii-checking-if-unlaunch-is-already-installed) page, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting
2. Tekan tombol <kbd class="face">A</kbd> pada Nintendo DSi untuk membuat dump NAND
   - Mencadang NAND biasanya perlu 7 menit
3. Selesai mencadang NAND, tekan tombol <kbd>START</kbd> di Nintendo DSi untuk keluar dari dumpTool
4. Matikan daya konsol dan sisipkan kartu SD ke komputer
5. On the SD card, go to where `dumpTool.nds` is placed, and you'll see a new folder called `DT######...` which contains the NAND backup
   - If dumpTool is downloaded from the [Get Started](get-started.html) page, it'll be named `boot.nds`
   - Inside the folder is `nand.bin` which is the backup itself, and `nand.bin.sha1` which is the SHA1 hash of the backup
6. Store the `DT######...` folder somewhere safe, where you won't lose it
   - Jika bisa, salin juga ke berbagai penyimpanan lain
   - Sesudah menyalin cadangan NAND ke tempat lain, boleh hapus dari kartu SD

::: warning

_Hash_ SHA1 di `nand.bin` tidak akan sama dengan _hash_ di `nand.bin.sha1`. Ini karena dumpTool menambahkan data yaitu _no$gba footer_ ke berkas `nand.bin` setelah _hash_ SHA1 diperhitung. Gunakan [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) untuk membuat .bin tanpa _footer_.

:::

::: tip

Continue to [Choosing a Menu](choosing-a-menu.html)

:::
