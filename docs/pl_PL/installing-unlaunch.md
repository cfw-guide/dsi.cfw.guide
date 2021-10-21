---
title: "Instalacja Unlaunch"
---

{% include toc title="Navigation" %}

Unlaunch to exploit, który ma miejsce przy starcie systemu. Dzięki temu ma on wyższe uprawnienia niż zwykłe exploity DSiWare, takie jak Memory Pit, co pozwala mu na następujące działania:

- Uruchamianie aplikacji przy starcie (homebrew lub DSiWare) z opcjonalnymi kombinacjami przycisków
- Dostęp do Pola-1, umożliwiając zrzucanie gier i uruchamianie niekompatybilnych flashcartów
- Usunięto blokady regionalne z gier DSi-Enhanced/ ekskluzywnych
- Uruchom stare homebrew DS przez nds-bootstrap-hb
- Uruchamianie DSiWare z wewnętrznej karty SD
- Lepszy dźwięk w GBARunner2
- Ochrona przed awarią

Jeśli jeszcze tego nie zrobiłeś(-aś), stwórz kopię zapasową [NAND](dumping-nand). Choć szanse na to są niewielkie, Unlaunch może przypadkowo zawiesić NDSi. Kopia zapasowa NAND + [hardmod](https://web.archive.org/web/20151102221503/https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/) pozwoliłby Ci przywrócić tę kopię, pod warunkiem, że wiesz, jak lutować.
{: .notice--danger}

Upewnij się, że twoja konsola jest naładowana podczas śledzenia tego procesu. Nagła utrata energii może spowodować poważne szkody.
{: .notice--warning}

## Sekcja I - Przygotowania kart SD

Korzystasz z Windows, Linux lub macOS? Użyj [Lazy DSi Downloader](lazy-dsi-downloader), aby automatycznie skonfigurować kartę SD.
{: .notice--info}

1. Pobierz najnowszą wersję [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Mirror link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), jeśli powyższe nie działa
1. Wypakuj `UNLAUNCH.DSI` z archiwum `unlaunch.zip` i umieść go w dowolnym miejscu na swojej karcie SD
1. Zweryfikuj TWiLight Menu++ na karcie SD
   - Jeśli nie jesteś pewien, postępuj zgodnie z instrukcjami na stronie [Uruchamianie Exploita](launching-the-exploit#twilight-menu)

## Sekcja II - Instalacja/aktualizacja Unlaunch

1. Otwórz TWiLight Menu++
   - Jeśli po raz pierwszy instalujesz program Unlaunch, uruchom ponownie program TWiLight Menu++ za pomocą użytego exploita
   - Jeśli już zainstalowałeś Unlaunch i chcesz go zaktualizować, przytrzymaj <kbd class="face">A</kbd> + <kbd class="face">B</kbd> podczas włączania i wybierz `TWiLight Menu++` gdzie `BOOT.NDS` jest pokazany na dolnym ekranie
1. Uruchom Ustawienia TWiLight Menu++
   - Jeśli nie zmieniłeś swojego motywu, podążaj za "Uruchomienie exploita". W przeciwnym razie należy zapoznać się z podręcznikiem TWiLight Menu++
1. Naciśnij <kbd class="l">L</kbd> / <kbd class="r">R</kbd> lub <kbd class="face">X</kbd> / <kbd class="face">Y</kbd>, aż dojdziesz do strony `Ustawienia Unlaunch`
1. Jeśli chcesz zmienić obraz tła Unlauncha, wybierz `Tło` i wybierz to, które chcesz
   - Jeśli chcesz stworzyć własne tło Unlaunch, skonsultuj się z [stroną wiki DS-Homebrew](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
1. Jeśli chcesz, aby ekran Health and Safety oraz dźwięki menu DSi były włączone, ustaw `Launcher Patches` na `Off`
   - Zapobiegnie to również usunięciu blokady regionu
1. Wyjdź z ustawień TWiLight Menu++
1. W menu nawigacją plików uruchom `Unlaunch DSi Installer`
1. Wybierz opcję instalacji
   - Jeśli Unlaunch zawiesza się przy `ERROR: MISMATCH IN FAT COPIES`, proszę zerknąć na stronę [Troubleshooting](troubleshooting)
1. Po zakończeniu, uruchom ponownie system

Jeśli w tym momencie zobaczysz Filemenu Unlaunch, pomyślnie zmodowałeś Nintendo DSi.
- Jeśli widzisz czarny ekran, zajrzyj na stronę [Troubleshooting](troubleshooting)

## Sekcja III - Konfiguracja po-Unlaunch

Obecnie, Unlaunch domyślnie uruchamia swoje menu plików przy starcie systemu, ale można to zmienić uruchamiając co tylko chcesz.

Skonfigurujemy ponownie nds-bootstrap, aby uruchamiał TWiLight Menu++ (zamiast wykorzystanego tytułu DSiWare), gdy wykonamy soft-reset w grze.

1. Włącz konsolę przytrzymując <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
1. Przejdź do `OPTIONS`i spójrz na dostępne opcje
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> jest zakodowane, aby uruchomić w menu Unlaunch i jako takie nie może być zmienione
   - Opcje `NO BUTTON` i `BUTTON A / B / X / Y` mogą być ustawione jakkolwiek chcesz i będą wybierać co twój DSi załaduje przy starcie w zależności od tego, które przyciski są trzymane. Możesz wybrać dowolne DSiWare, homebrew, kartę Pola-1, wifiboot lub menu plików Unlaunch
      - W przypadku TWiLight Menu++ należy wybrać opcję `TWiLight Menu++`, gdzie na dolnym ekranie widoczny jest napis `BOOT.NDS`
      - Dla oryginalnego menu DSi wybierz `Launcher`
   - `LOAD ERROR` jest tym, co DSi pokaże, jeśli załadowanie plików się nie powiedzie, np. karta SD nie została włożona
1. Zapisz swoje ustawienia i wróć do menu Unlaunch
1. Najedź kursorem na opcje `TWiLight Menu++` i znajdź tę, która ma ścieżkę zawierającą `settings.srldr` na dolnym ekranie
1. Uruchom zaznaczoną opcję
1. Użyj przycisków <kbd class="l">L</kbd> / <kbd class="r">R</kbd> lub <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> aby przełączyć się na `Misc. Ustawienia` strony
1. Ustaw opcję `DSiWare Exploit` na `None`

## Sekcja IV - Czyszczenie karty SD

Ta sekcja jest opcjonalna i służy tylko do utrzymania niepotrzebnych plików w porządku (na karcie SD).
{: .notice--primary}

- Usuń plik `sd:/private/ds/app/484E494A/pit.bin` z karty SD
   - Jeśli użyto innego exploita, należy usunąć pliki z tego exploita
- Usuń plik `UNLAUNCH.DSI` z karty SD
