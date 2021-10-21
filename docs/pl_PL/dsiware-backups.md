---
title: Kopie zapasowe DSiWare
---

{% include toc title="DSiWare Backups" %}

## Wymagania
- Najnowsza wersja [GodMode9i](https://github.com/RocketRobz/godmode9i/releases)
   - Pobierz archiwum, rozpakuj zawartość i umieść `GodMode9i.nds` w dowolnym miejscu na karcie SD
- Nintendo DSi z zainstalowanym [Unlaunch](/unlaunch)

## Nintendo DSi - Instrukcje

### Sekcja I - Określanie ścieżki do pliku .app
1. Włącz swój DSi przytrzymując <kbd class="face">A</kbd> + <kbd class="face">B</kbd>
   - To powinno cię zabrać do menu plików Unlaunch
1. Zidentyfikuj swoją aplikację na liście
   - Jasnozielony wpis oznacza, że są one zainstalowane w pamięci NAND

Po najechaniu na wpis, na dolnym ekranie powinna pojawić się ścieżka. Zwróć uwagę na drogę.

Przykładową ścieżką może być `nand:/title/0030005/484e4a45/content/00000003.app`
{: .notice--info}

### Sekcja II - Rozpakowywanie pliku
1. Uruchom GodMode9i z menu plików
1. Przejdź do SYSNAND, następnie przejdź przez ścieżkę, którą zanotowałeś powyżej
1. Zaznacz plik `.app`, a następnie naciśnij <kbd class="face">Y</kbd> aby dodać go do schowka
1. Przejdź do katalogu, w którym chcesz umieścić zrzucony tytuł DSiWare
1. Naciśnij <kbd class="face">Y</kbd> ponownie, aby wkleić tytuł DSiWare do katalogu, w którym aktualnie się znajdujesz
   - Możesz zmienić nazwę pliku po wklejeniu go, naciskając <kbd class="face">X</kbd> i przytrzymując <kbd class="R">R</kbd>
   - Powtórz tę czynność dla wszystkich plików, które chcesz skopiować do tego samego katalogu

Tytuł DSiWare powinien być teraz widoczny w menu++ programu TWiLight lub w menu Unlaunch Filemenu.
