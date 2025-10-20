# Rozwiązywanie Problemów

## Unlaunch

### Unlaunch zawiesza się na `MISMATCH IN FAT COPIES`

twlnf ma krytyczny błąd, w którym nie aktualizuje poprawnie całego NAND po jego modyfikacji, który powoduje, że niektóre homebrew (takie jak Unlaunch installer) wyrzucą błąd.

Aby to naprawić, uruchom [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases) i wybierz `Fix FAT copy mismatch`.

### Nie ma dźwięku lub boot splashu podczas uruchamiania "LAUNCHER" za pomocą Unlaunch

Deweloper Unlaunch (nocash) celowo załatał domyślnie audio w tle i boot-splash. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) with `Enable sound and splash` turned on, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Uruchamianie pokazuje tylko czarny ekran po instalacji Unlaunch

Spróbuj wysunąć kartę SD i ponownie uruchomić konsolę. If it still only shows a black screen, you may need to flash your NAND via either [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) or a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Powering off in the DSi Menu and/or System Settings takes 5-10 seconds

The only solutions are starting the DSi Menu and/or System Settings with the SD card ejected, installing [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing), or uninstalling Unlaunch.

### After installing Unlaunch, I'm stuck booting into an application

Jest to prawdopodobnie spowodowane przez wybranie złej aplikacji pod opcją `NO BUTTON` w Unlaunch. Przytrzymaj <kbd class="face">A</kbd> + <kbd class="face">B</kbd> podczas uruchamiania konsoli, wejdź w `OPTIONS` i ustaw na cokolwiek chcesz.

### Inne problemy Unlaunch

Jeżeli Unlaunch pokazuje `Clusters too large`, `Bad VBR`, `Bad MBR`, lub nie pokazują się żadne aplikacje, podczas gdy karta SD jest włożona, karta SD jest prawdopodobnie źle sformatowana. Jeszcze raz zrób [konfigurację karty SD](sd-card-setup.html).

## TWiLight Menu++

Dla ogólnego rozwiązywania problemów TWiLight Menu++ zobacz jego stronę [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) na Wiki DS-Homebrew.

## Dalsza pomoc

Jeżeli napotkałeś problem, który nie ma rozwiązania tutaj, albo który następuje nawet mimo podanych rozwiązań, zapytan o pomoc na serwerze discord [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4).
