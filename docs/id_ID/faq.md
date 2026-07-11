# Pertanyaan Umum

## Apakah harus perbarui sistem?

Memperbarui sistem DSi itu **tidak** dianjurkan, kecuali jika pernah membeli DSiWare. Walaupun panduan ini masih bisa diikuti jika demikian, pembaruan hanya berguna untuk bisa ke Nintendo DSi Shop dan mengunduh ulang apa yang pernah dibeli. Manfaat lainnya, seperti fitur Facebook di aplikasi Nintendo DSi Camera, sudah tidak bisa digunakan atau tidak cukup signifikan untuk membiarkan jeleknya:

- Terkadang konsol bisa **matot** saat memasang _System Update_, tingkat risikonya hampir seperti memasang Unlaunch
- Tidak bisa lagi ke eksploit lawas, ini bisa bermasalah jika eksploit modern tidak berfungsi
- Kompatibilitas _flashcard_ berkurang, namun ini bisa diakali dengan memasang Unlaunch

The only exception is an Unlaunch installation on a DSi with System Version 1.4.2 – this version is currently unsupported by Safe Unlaunch Installer (due to a bug), and requires updating your DSi console to 1.4.5.

## Eksploit mana yang terbaik?

Eksploit DSi yang terbaik saat ini yaitu Unlaunch, jeleknya ada risiko kecil bisa matot saat dipasang. Dianjurkan memasang Unlaunch menggunakan Memory Pit. Jika tidak ingin ada risiko, gunakan Flipnote Lenny karena isu _homebrew_ lebih sedikit dibanding Memory Pit, selain itu juga aman dihapus seperti Memory Pit. Berikut kelebihan dan kekurangan tiap eksploit:

### Memory Pit

Kelebihan:

- Cepat dan mudah
- Tidak merusak konsol, mencopot hanya dengan melepas kartu SD atau menghapus berkas
- Berfungsi di semua konsol DSi, kecuali jika kamera rusak atau tutorial kamera belum dilalui

Kekurangan:

- Harus ke aplikasi DSi Camera setiap kali ingin mengakses _homebrew_
- Tidak berfungsi di beberapa aplikasi DSi dan _homebrew_ karena WRAM hanya mau dibaca CPU ARM7
- _Homebrew_ tidak bisa mengakses Slot-1 (Kartrid DS)
- Tidak bisa mengakses DSP, berarti suara akan jelek di GBARunner2
- Foto di kartu SD tidak bisa dilihat pada aplikasi DSi Camera jika ada Memory Pit karena diperlukan untuk eksploit
  - Satu-satunya cara melihat foto kartu SD saat ada Memory Pit itu dengan menjalankan _dump_ ROM DSi Camera di **TW**i**L**ight Menu++ lewat nds-bootstrap (v0.61.3 ke atas)

### stylehax

Kelebihan:

- Kompatibilitas aplikasi DSi dan _homebrew_ lebih baik dari Memory Pit
- Mudah digunakan
- Tidak merusak konsol
- Bisa di konsol dengan kamera rusak
- Suara lancar di GBARunner2

Kekurangan:

- Perlu akses internet
- Harus ke DSi Browser setiap kali ingin mengakses _homebrew_, agak lebih memakan waktu dibanding Memory Pit
- _Homebrew_ tidak bisa mengakses Slot-1 (Kartrid DS)

### Flipnote Lenny

Kelebihan:

- Kompatibilitas aplikasi DSi dan _homebrew_ lebih baik dari Memory Pit
- Tidak merusak konsol, mencopot hanya perlu melepas kartu SD atau menghapus folder
- Bisa di konsol dengan kamera rusak
- Suara lancar di GBARunner2

Kekurangan:

- Harus ke Flipnote Studio setiap kali ingin mengakses _homebrew_, agak lebih memakan waktu dibanding Memory Pit
- _Homebrew_ tidak bisa mengakses Slot-1 (Kartrid DS)

### Unlaunch

Kelebihan:

- Bisa memuat _homebrew_ dan DSiWare di awal nyala sistem, dengan tombol pintas opsional
- Akses penuh ke sistem tanpa batasan apa pun, termasuk:
  - Mengakses Slot-1 agar bisa men-_dump_ kartrid dan membaca _flashcard_ tak kompatibel
  - Suara lancar di GBARunner2
- Melepas kunci-daerah pada Kartrid _DSi-Enhanced_/Eksklusif
- Melindungi dari berbagai cara DSi bisa matot
- Permainan _DSi-Enhanced_ bisa ke mode DSi tanpa ROM Donor
- Menjalankan _homebrew_ lawas lewat nds-bootstrap-hb

Kekurangan:

- Saat memasang, ada risiko kecil sekali **konsol bisa matot**
- Risiko _sedikit_ bertambah jika ingin [mencopot Unlaunch](uninstalling-unlaunch.html)
- **Tidak kompatibel dengan konsol pengembang**

## Apakah ada fungsi yang hilang jika memodif konsol?

Jika memasang Unlaunch atau Flipnote Lenny, fungsi tidak ada yang hilang. Jika memasang Memory Pit, nanti tidak bisa melihat foto di kartu SD pada aplikasi DSi Camera, kecuali jika menjalankan _dump_ ROM DSi Camera di **TW**i**L**ight Menu++ lewat nds-bootstrap.

- Untuk bisa lagi melihat foto di kartu SD saat membuka DSi Camera dari DSi Menu, pasang Unlaunch atau gunakan eksploit lain, lalu hapus berkas `pit.bin` punya Memory Pit
  - Jika ada `tip.bin` di folder itu juga, ubah namanya balik ke `pit.bin`

## Bagaimana memainkan dump Kartrid Nintendo DS?

Memainkan _dump_ Kartrid di konsol memerlukan _flashcard_ atau nds-bootstrap, gunanya untuk membaca berkas ROM dari kartu SD internal dengan mengalihkan baca/tulis Slot-1 ke berkas.

- With TWiLight Menu++ & AKMenu-Next you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using these menus are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. Selain itu, bisa langsung taruh berkas ROM lalu main tanpa menyiapkan apa pun. Tidak ada batas 39 judul, tidak perlu pasang hiyaCFW atau Unlaunch, dan tidak dibatasi harus berapa sisa ruang kartu SD
- Pengguna hiyaCFW bisa membuat _forwarder_ di DSi Menu SDNAND dengan panduan [_Forwarder_ Permainan DS](https://wiki.ds-homebrew.com/id-ID/ds-index/forwarders?tab=tab-dsi-sd-card) di Wiki DS-Homebrew, tapi ada batasan. Hanya bisa sampai 39 judul dan kurang nyaman daripada TWiLight Menu++
  - Jika tidak terpasang hiyaCFW dan ingin menggunakan _forwarder_, ikuti [panduan memasang hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) di Wiki DS-Homebrew

## Bagaimana memperbarui homebrew?

- **Unlaunch** - Ikuti instruksi di laman [Memasang Unlaunch](installing-unlaunch.html)
  - **TIDAK PERLU** mencopot Unlaunch sebelum mengikuti ini
- **hiyaCFW** - Timpa `hiya.dsi` di akar kartu SD dengan [versi termutakhir](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Ikuti instruksi di [Wiki DS-Homebrew](https://wiki.ds-homebrew.com/id-ID/twilightmenu/updating-dsi)
- **AKMenu-Next** - Follow the instructions on the [AKMenu-Next Documentation](https://coderkei.github.io/akmenu-next-docs/guides/akmenu-next/#__tabbed_1_5)
- **nds-bootstrap** - Salin`nds-bootstrap-hb-release.nds` dan `nds-bootstrap-release.nds` ke folder `_nds` di akar kartu SD
  - Jika sudah ada TWiLight Menu++, kemungkinan besar nds-bootstrap dari TWiLight Menu++ sudah versi terkini
- **GodMode9i, dumpTool, Forwarder3-DS, dll** - Ikuti instruksi dari laman unduhnya

Cara memperbarui _homebrew_ lain mungkin berbeda.

## Saya pertama kali atau ingin perbarui CFW. Mulai dari mana?

- Jika pertama kali memodif konsol atau ingin memperbarui Unlaunch di konsol, sebaiknya mulai dari awal panduan dan ikuti laman secara berurut. Baca dulu semua yang di laman beranda
- Jika sudah ada Unlaunch versi terkini, ikuti [panduan memasang TWiLight Menu++](https://wiki.ds-homebrew.com/id-ID/twilightmenu/installing-dsi) untuk menyiapkan TWiLight Menu++ ke konsol

## Bagaimana melepas Parental Controls?

- The [mkey generator](https://mkey.nintendohomebrew.com) can generate the code required to remove parental controls

## Apakah bisa mengubah daerah Nintendo DSi?

Bisa, tapi metode akan berbeda tergantung apa yang ingin diubah:

- Metode ter'aman dan termudah itu dengan memasang TWiLight Menu++, tersedia lebih banyak bahasa resmi dan tanpa perlu memodif NAND
- Jika ingin mengubah daerah konsol, tapi yang SDNAND, buka menu konfigurasi hiyaCFW, dan ubah pengaturan "region" (tidak bisa untuk NAND daerah CHN dan KOR)
  - Jika mengacau sentuhan layar, ubah pengaturan "region" ke yang sebelumnya, dan ganti gunakan [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) dari Yoti untuk DSi daerah Asia. Untuk DSi daerah Amerika, gunakan [hiyalang versi ini](https://github.com/Simonsator/cli_hiyalang/releases/)
- Terakhir, jika ingin mengubah daerah pada NAND sistem sungguhan, gunakan [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/) dari Mighty Max

## Ada apa dengan Lazy DSi Downloader? Sekarang bagaimana pasang CFW?

Lazy DSi Downloader adalah program untuk menyingkat penyiapan sendiri seperti mengunduh serta menaruh berkas dan folder yang perlu ke kartu SD. Namun, dari cara penataolahan dan distribusinya, banyak pengguna malah kena berbagai isu dan akhirnya memasang sendiri karena lebih mudah dan/atau cepat daripada memperbaiki isunya.

Untuk menghindari banyak pengguna kena isu ini, **kami tidak lagi menganjurkan Lazy DSi Downloader** dan lebih menganjurkan [cara memasang sendiri](get-started.html).

- Jika datang ke panduan ini karena orang lain menganjurkan Lazy DSi Downloader, instruksi tersebut kemungkinan besar sudah usang. Mohon gunakan panduan ini saja karena lebih dimutakhirkan para pengembang proyek ini.

## Saya perlu kartu SD seperti apa?

- Harus beli kartu SD dari merek terpercaya
- Kartu SD ukuran biasa atau microSD dengan adaptor keduanya bisa
- Kartu SD ukuran 1 GB hingga 2 TB akan bisa. Untuk keperluan biasa, 8 GB cukup
  - Pada peranti lunak seperti hiyaCFW, mungkin akan dimuat lebih lama semakin besarnya daya tampung kartu SD
- Kartu SD kelas kecepatan 8 ke atas dianjurkan
- Read the [Counterfeit MicroSD Cards Guide](https://www.flashcarts.net/microsd-fakes) to ensure you do not end up with a counterfeit SD/MicroSD card

## Apakah bisa kartu SD DSi digunakan konsol lain?

Biasanya, bisa, tapi ada pengecualian:

- hiyaCFW hanya berfungsi pada konsol tempatnya dibuat
- Bahkan jika menggunakan nds-bootstrap atau _flashcard_, _friend code_ permainan NDS akan ke setelan awal saat bermain daring di konsol berbeda

## Bagaimana ganti ke kartu SD baru setelah sudah homebrew?

Formatkan kartu SD baru dengan instruksi [Penyiapan Kartu SD](sd-card-setup.html), lalu tinggal pindahkan data dari kartu SD lama ke yang baru.

## Apakah konsol masih berfungsi normal tanpa kartu SD setelah memasang homebrew?

Iya. Jika tidak memasang Unlaunch, berarti konsol belum sepenuhnya dimodif. Jika _sudah_ memasang Unlaunch, mungkin perlu [menyetel Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) untuk otomatis ke DSi Menu asli saat tidak ada kartu SD.

## Kata [laman Unlaunch](https://problemkaputt.de/unlaunch.htm), versi 2.0 itu tidak aman. Apakah sebaiknya versi sebelumnya?

Laman Unlaunch sudah lama tidak diperbarui sejak versi 2.0 dirilis tahun 2019. Sebagian besar pengguna tidak kena isu dengan versi ini, jadi dianggap aman.

## Bagaimana menjalankan dump DSiWare?

The recommended method is to simply launch them with TWiLight Menu++, due to the simple drag-and-drop method and there being no arbitrary limit. When nds-bootstrap is set as the launch method, it also gains the benefits of cheats and screenshots, as well as any other benefit provided by the in-game menu.

However, for the few titles that are incompatible, you can use [NTM](https://github.com/Epicpkmn11/NTM/releases) to install them on either internal memory or [hiyaCFW's SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing). In addition to lacking the benefits above, there is also a limit of 39 titles that cannot exceed 128 MiB/1,024 blocks in size. For SysNAND, there is also a very small risk of bricking the system when writing to the internal NAND.
