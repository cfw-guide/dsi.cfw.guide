---
title: Instalacja Unlaunch
---

::: warning

If you do not have access to a PC, or if your PC is running ChromeOS, then please do not install Unlaunch. A PC (running Windows, Linux, or macOS) is required in order to fix some issues that may occur after installing Unlaunch.

:::

::: danger

Jeśli jeszcze tego nie zrobiłeś(-aś), stwórz kopię zapasową [NAND](dumping-nand.html). Choć szanse na to są niewielkie, Unlaunch może przypadkowo zapsuć twoje NDSi. Kopia zapasowa NAND + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) pozwoli Ci przywrócić tę kopię, pod warunkiem, że wiesz, jak lutować.

:::

::: warning

Upewnij się, że twoja konsola jest naładowana podczas wykonywania tego procesu. Nagła utrata zasilania może spowodować poważne szkody.

:::

::: warning

Unlaunch nie jest kompatybilny z konsolami deweloperskimi Nintendo DSi.

:::

## Sekcja I - Konfiguracja karty SD

1. Pobierz najnowszą wersję [Unlaunch](https://problemkaputt.de/unlaunch.zip)
    - [Mirror link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), jeśli powyższe nie działa
1. Wypakuj `UNLAUNCH.DSI` z archiwum `unlaunch.zip` i umieść go w dowolnym miejscu na swojej karcie SD
1. Zweryfikuj, że dalej posiadasz TWiLight Menu++ na karcie SD
    - Jeśli nie jesteś pewien, postępuj zgodnie z instrukcjami [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## Sekcja II - Instalacja/aktualizacja Unlaunch

1. Otwórz TWiLight Menu++
    - Jeśli po raz pierwszy instalujesz program Unlaunch, uruchom ponownie program TWiLight Menu++ za pomocą użytego [exploita](launching-the-exploit.html)
    - Jeśli już zainstalowałeś Unlaunch i chcesz go zaktualizować, przytrzymaj <kbd class="face">A</kbd> + <kbd class="face">B</kbd> podczas włączania i wybierz `TWiLight Menu++`
    - Jeśli kilka opcji jest oznaczonych jako `TWiLight Menu++`, wybierz opcję gdzie `BOOT. DS` jest wyświetlany na dolnym ekranie
      - Dzieje się tak, ponieważ używasz starszej wersji TWiLight Menu++, chyba że robisz to w celu, sugerowane jest [zaktualizowanie instalacji](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
1. Uruchom Ustawienia TWiLight Menu++
    - Jeśli nie zmieniłeś motywu, naciśnij `SELECT` i dotknij małej ikony DS na dole ekranu dotykowego. W przeciwnym razie zobacz podręcznik TWiLight Menu++
1. Naciśnij <kbd class="l">L</kbd> / <kbd class="r">R</kbd> lub <kbd class="face">X</kbd> / <kbd class="face">Y</kbd>, aż dojdziesz do strony `Ustawienia Unlaunch`
1. Jeśli chcesz zmienić obraz tła Unlauncha, wybierz `Tło` i wybierz to, które chcesz
    - Jeśli chcesz stworzyć własne tło Unlaunch, sprawdź [stronę wiki DS-Homebrew](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Wyjdź z ustawień TWiLight Menu++
1. W menu nawigacji plików uruchom `Unlaunch DSi Installer`
    - Jeśli widzisz dwa czarne ekrany po uruchomieniu, pobierz [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), umieść plik .dsi w katalogu głównym SD, a następnie uruchom GodMode9i za pomocą TWiLight Menu++, i uruchom `Unlaunch.dsi`    
      Ta metoda nie pozwala Unlaunch'owi na używanie niestandardowych patchów i tła
1. Wybierz opcję "install now"
    - Jeśli Unlaunch zawiesza się przy `ERROR: MISMATCH IN FAT COPIES`,sprawdź stronę [Troubleshooting](troubleshooting.html)
1. Po zakończeniu, uruchom ponownie system

Jeśli w tym momencie zobaczysz manu plików Unlaunch, pomyślnie zmodowałeś Nintendo DSi.
- Jeśli widzisz czarny ekran, zajrzyj na stronę [Troubleshooting](troubleshooting.html)

## Sekcja III - Konfiguracja po-Unlaunch

Obecnie, Unlaunch domyślnie uruchamia swoje menu plików przy starcie systemu, ale można to zmienić uruchamiając co tylko chcesz.

1. Włącz konsolę przytrzymując <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
    - To powinno uruchomić menu plików Unlaunch'a
    - If nothing is listed, or if only `TWiLight Menu++` isn't listed (even after scrolling down), then you'll need to [reformat the SD card](sd-card-setup.html)
1. Przejdź do `OPTIONS` i spójrz na dostępne opcje
    - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> jest zakodowane, aby uruchomić w menu Unlaunch i jako takie nie może być zmienione
    - Opcje `NO BUTTON` i `BUTTON A / B / X / Y` mogą być ustawione jakkolwiek chcesz i będą wybierać co twój DSi załaduje przy starcie w zależności od tego, które przyciski są trzymane. Możesz wybrać dowolne DSiWare, homebrew, kartridż w Slot-1, wifiboot lub menu plików Unlaunch
      - Dla TWiLight Menu++, wybierz  `TWiLight Menu++`
      - Dla oryginalnego menu DSi wybierz `Launcher`
    - `LOAD ERROR` jest tym, co DSi pokaże, jeśli załadowanie plików się nie powiedzie, np. karta SD nie została włożona
1. Wybierz `SAVE & EXIT`, aby zapisać ustawienia, a następnie wyłącz DSi

## Sekcja IV - Czyszczenie karty SD

::: tip

Ta sekcja jest opcjonalna i służy tylko do wyczyszczenia niepotrzebnych plików na karcie SD.

:::

:::: tabs

::: tab name="Memory Pit" default

- Usuń plik `sd:/private/ds/app/484E494A/pit.bin` z karty SD
- Rename `tip.bin` back to `pit.bin`, and leave it intact
- You can now restore the `DCIM` folder that was on the root of your SD card
- Usuń plik `UNLAUNCH.DSI` z karty SD

:::

::: tab name="Flipnote Lenny"

- Usuń pliki `800031_104784BAB6B57_000.ppm` i `T00031_1038C2A757B77_000.ppm` z następujących folderów:
    - `sd:/private/ds/app/4B47554A/001` (Japonia)
    - `sd:/private/ds/app/4B475545/001` (USA)
    - `sd:/private/ds/app/4B475556/001` (Europa/Australia)
    - Możesz również usunąć wszystkie foldery dla regionów poza twoim
- Usuń plik `UNLAUNCH.DSI` z karty SD

:::
