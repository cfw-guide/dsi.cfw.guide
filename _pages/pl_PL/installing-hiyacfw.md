---
title: Instalacja hiyaCFW
---

{% include toc title="Table of Contents" %}

Nie aktualizuj systemu po zainstalowaniu hiyaCFW. Spowoduje to usunięcie hiyaCFW z SD.
{: .notice--danger}

hiyaCFW jest niestandardowym firmware, który pozwoli Ci uruchomić system NAND z karty SD.

Pozwala to na zainstalowanie własnych aplikacji w Nintendo DSi bez ryzyka awarii, ponieważ są zainstalowane na karcie SD, więc problemy można łatwo naprawić.

Umożliwia także łatwą instalację aplikacji homebrew w menu DSi oraz wyświetlanie niestandardowego ekranu startowego przy starcie systemu.

Ta sekcja jest całkowicie opcjonalna. Jeśli Unlaunch jest dla ciebie wystarczający, możesz zatrzymać się tutaj.
{: .notice--primary}

## Wymagania
- Nintendo DSi z zainstalowanym [Unlaunch](/installing-unlaunch)
- Kopia zapasowa NAND urządzenia przy użyciu dumpTool
   - Jeśli nie masz jednego z nich, skorzystaj z naszego przewodnika [Dumping NAND](dumping-nand)
- Urządzenie Windows, macOS lub Linux

## Sekcja I - Przygotowanie komputera do instalacji hiyaCFW

{% capture windowsPrep %}
<noscript>
   <h3>Windows</h3>
</noscript>

1. Pobierz &najnowszą wersję [7-Zip](https://www.7-zip.org/download.html)
   - Nie będzie to działać z żadnym innym narzędziem do rozpakowywania jak WinRAR. pomocnik hiyaCFW opiera się na samym 7-Zip, a nie na ogólnym rozpakowywaczu archiwów
1. Pobierz najnowszą wersję [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
   - Jeśli nie możesz go pobrać, ponieważ jest to "wirus", sprawdź, czy nie ma przycisku "zezwól" lub użyj innej przeglądarki, to nie jest wirus
1. Rozpakuj archiwum hiyaCFW Helper w dowolnym miejscu na swoim komputerze
{% endcapture %}

{% capture macosPrep %}
<noscript>
   <h3>macOS</h3>
</noscript>

1. Pobierz najnowszą wersję dla systemu macOS [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Rozpakuj archiwum hiyaCFW Helper w dowolnym miejscu na swoim komputerze
{% endcapture %}

{% capture linuxPrep %}
<noscript>
   <h3>Linux</h3>
</noscript>

1. Zainstaluj Python 3 za pomocą menedżera pakietów, jeśli nie jest jeszcze zainstalowany
1. Pobierz najnowszą wersję Pythona [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Rozpakuj archiwum hiyaCFW Helper w dowolnym miejscu na swoim komputerze
1. Upewnij się, że niezbędne pakiety Pythona są zainstalowane, uruchamiając `pip3 install -r requirements.txt` w katalogu zawierającym rozpakowane pliki
   - Możesz zainstalować pip, uruchamiając `python3 -m ensurepip`
{% endcapture %}

<div class="tabcontainer">
   <a class="tablinks btn btn--large btn--info delink windows" href="#windowsPrep" onclick="openTab(event, 'windowsPrep')">Windows</a>
   <a class="tablinks btn btn--large btn--info delink macos" href="#macosPrep" onclick="openTab(event, 'macosPrep')">macOS</a>
   <a class="tablinks btn btn--large btn--info delink other" href="#linuxPrep" onclick="openTab(event, 'linuxPrep')">Linux</a>

   <div id="windowsPrep" class="blanktabcontent">{{ windowsPrep | markdownify }}</div>
   <div id="macosPrep" class="blanktabcontent">{{ macosPrep | markdownify }}</div>
   <div id="linuxPrep" class="blanktabcontent">{{ linuxPrep | markdownify }}</div>
</div>

## Sekcja II - Dodawanie plików hiyaCFW do karty SD

![Zrzut ekranu HiyaCFW Helper](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Uruchom HeyaCFW Helper
  - **Windows:** - Uruchom plik `HiyaCFW_Helper.exe` wyodrębniony z archiwum hiyaCFW Helper (może być konieczne tymczasowe wyłączenie programu antywirusowego)
  - **macOS:** - Kliknij prawym przyciskiem myszy plik `HiyaCFW_Helper` wyodrębniony z archiwum hiyaCFW Helper i wybierz `Open`
  - **Linux:** - Uruchom `HiyaCFW_Helper.py` wyodrębniony z archiwum hiyaCFW Helper
1. Kliknij przycisk `...` w polu "NAND file with no$GBA footer"
1. Przejdź do swojej kopii zapasowej NAND i kliknij `Otwórz`
1. Naciśnij `Start`
1. W nowym wyskakującym oknie przejdź do katalogu głównego karty SD i naciśnij `OK`.
   - Proces może potrwać kilka minut
1. Gdy aplikacja mówi "Gotowe", zamknij hiyaCFW Helper
1. Zamknij okno terminala

## Sekcja III - Konfiguracja Unlaunch i hiyaCFW

1. Włącz swoją konsolę Nintendo DSi trzymając <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
   - To powinno zabrać cię do menu plików Unlaunch'a
1. Przejdź do `OPTIONS` -> `NO BUTTON`
1. Wybierz `hiyaCFW` i naciśnij <kbd class="face">A</kbd>
   - To sprawi, że system uruchomi hiyaCFW przy starcie
1. Zapisz ustawienia i zrestartuj konsolę
1. Przytrzymaj <kbd>SELECT</kbd> podczas włączania Nintendo DSi, aby uzyskać dostęp do ustawień hiyaCFW
   - Jeśli wybrano opcję "Install latest TWiLight Menu++ on custom firmware", aby uruchomić SDNAND zamiast TWiLight Menu++, przejdź do `Autoboot title` i naciśnij <kbd class="face">A</kbd>, aby go odznaczyć.
1. Zmień ustawienia jak chcesz i naciśnij <kbd>START</kbd>, aby kontynuować

Twój system uruchomi się teraz z karty SD zamiast wewnętrznego NAND.

Jeśli pokazuje `An Error Has Occurred`, zobacz naszą stronę [Troubleshooting](troubleshooting).
{: .notice--warning}

<script src="/assets/js/tabs.js"></script>
