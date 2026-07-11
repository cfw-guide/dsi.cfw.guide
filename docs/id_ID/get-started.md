# Memulai

We'll begin with downloading some homebrew tool(s), in preparation for the exploit steps.

## Persyaratan

- Bisa menyalin berkas unduhan ke kartu SD
- Aplikasi untuk mengekstrak arsip, seperti [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), atau [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
  - Kami sarankan jangan gunakan WinRAR, biasanya mengacau berkas
  - Jika menggunakan Windows 11, sebaiknya jangan gunakan pengekstrak bawaan (Windows Explorer), karena akan galat "nama berkas terlalu panjang" atau tidak absah
- A good quality name-brand SD card (or name-brand MicroSD with SD adapter). **This is important as you may encounter compatibility issues and loss of data using an off-brand or counterfeit SD card!** For more information, [please see this article](https://www.flashcarts.net/microsd-fakes) on fake MicroSD cards, the information it has also applies to full size SD cards.

## Bagian I - Persiapan

::: warning

Ensure your SD card is [formatted correctly with this guide](sd-card-setup.html). You may encounter compatibility problems with homebrew or an SD Card with the wrong filesystem by skipping this step.

:::

1. Sisipkan kartu SD ke komputer
2. Download the latest release of [dumpTool](https://dsi.cfw.guide/assets/files/dumptool/boot.nds) as `boot.nds`
3. Copy the `boot.nds` file to the root of your SD card
   - Make sure it is specifically named `boot.nds` instead of `boot (1).nds` or any other name

::: tip

Bingung apa itu "akar" kartu SD? [Lihat gambar ini](/assets/images/sdroot/id_ID.png)

:::

## Bagian II - Memeriksa apakah Unlaunch terpasang

Unlaunch is a bootcode exploit which gets installed onto the DSi console itself, allowing full control of the console on boot, and as a result, allows homebrew applications full access to the hardware without restrictions from DSi system apps or DSiWare titles.

Some DSi consoles that are sold as used/refurbished might already have Unlaunch installed.

To check, press the <kbd class="face">POWER</kbd> button and immediately hold the <kbd class="face">A</kbd> + <kbd class="face">B</kbd> buttons.

- If you see a menu which shows `Nocash Unlaunch.dsi` on the top screen, this means Unlaunch is already installed, and you can continue with [dumping the NAND](dumping-nand.html).
- If the DSi starts normally with the DSi Menu appearing, proceed with Section III.

## Section III - Memory Pit

Memory Pit is an exploit utilizing the DSi Camera, compatible with all firmware versions.

If using the exploit without installing Unlaunch, compatibility with some homebrews could be limited. If you encounter issues with DSi homebrews and/or the camera function in DSi-Enhanced games, you can return to this guide and set up an [alternate exploit](alternate-exploits.html) instead.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::
