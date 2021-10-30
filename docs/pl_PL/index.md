---
home: true
title: Przewodnik DSi
header:
  overlay_image: /assets/images/home-page-feature.png
  overlay_filter: 0.5
---

::: tip

Aby uzyskać całkowity przewodnik do homebrew i niestandardowych firmware dla innych urządzeń, sprawdź poradnik [CFW.Poradnik](https://cfw.guide/).

:::

::: danger

Ten przewodnik nie jest kompatybilny z konsolami deweloperskimi Nintendo DSi.

:::

::: tip

Dokładnie przeczytaj wszystkie strony wprowadzające (łącznie z tą!) przed przystąpieniem do pracy.

:::

## Czym jest homebrew?

[Aplikacje Homebrew](https://en.wikipedia.org/wiki/Homebrew_(video_games)) są nielicencjonowanymi programami stworzonymi dla systemów zamkniętych, takich jak Nintendo DSi. Aplikacje te mogą obejmować zarówno programy użytkowe, jak i niestandardowe gry homebrew.

Homebrew można uruchomić za darmo na wszystkich konsolach Nintendo DSi, niezależnie od wersji firmware'u czy regionu. Wszystko, czego potrzebujesz, to punkt wejścia i karta SD do przechowywania swojego homebrew. Główny punkt wejścia użyty w tym poradniku nazywa się Memory Pit, ale istnieją inne punkty wejścia, których możesz użyć, jeśli Memory Pit jest dla ciebie bezużyteczny.

## Co ten przewodnik zrobi z moim systemem?

Pamiętaj, że poradnik jest skonstruowany liniowo, ale to zależy od tego, jak głęboko chcesz się posunąć w modowaniu systemu.

- Ustawimy punkt wejścia, aby uruchomić podstawowy homebrew poprzez Memory Pit, czyli exploit dla aplikacji Nintendo DSi Camera
- Następnie wykonamy kopię zapasową NAND, która jest przydatna jako punkt przywracania w przypadku, gdyby coś się zepsuło
- Wreszcie, dla użytkowników, którzy chcą zdobyć dostęp do pełnych możliwości DSi, przejdziemy ich przez instalację Unlaunch. Unlaunch pozwala na uruchamianie homebrew z większymi uprawnieniami (takimi jak dostęp do Pola-1)
   - Instalacja Unlaunch modyfikuje twoją pamięć NAND, a w skrajnych przypadkach ma potencjał do **zablokowania** systemu. Jeśli nie chcesz ryzykować, możesz przestać po zrobieniu kopii zapasowej NAND

## Co mogę zrobić modując swój system?

- Run Nintendo DS(i) game backups or ROM hacks from your DSi SD card without the need of a flashcard
- Uruchom dowolny DSiWare (z innego regionu i/lub ekskluzywy na 3ds) z karty SD
- Uruchom aplikacje DSiWare i homebrew trzymając specyficzne przyciski podczas włączania Nintendo DSi
- Uruchom dawne klasyki za pomocą różnych emulatorów
- Użyj normalnie niekompatybilnych flaschardów
- Redirect your NAND to the SD card using hiyaCFW
- Obejrzyj swoje ulubione filmy używając MPEG4Player
- Wyświetlanie obrazu (zwanego rozbryzgiem startowym) podczas uruchamiania systemu
- Play homebrew games

## Gdzie mogę znaleźć aplikacje homebrew?

- [Universal-DB](https://db.universal-team.net/ds) zawiera większość nowoczesnych homebrew, z ładnym wyszukiwaniem i sortowaniem, aby śledzić, co zostało ostatnio zaktualizowane
- [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew) ma wiele starszych homebrew, jednak wiele z nich będzie działać tylko na flashcardach

## Co należy wiedzieć przed rozpoczęciem?

- W systemie Windows zaleca się, aby [pokazać rozszerzenia plików](file-extensions-%28windows%29), jeśli używasz domyślnego Eksploratora plików
- Jedyne ryzyko związane z awarią pochodzi z instalacji Unlaunch, a ryzyko to jest minimalne
- Jeśli nie masz doświadczenia w kopiowaniu plików na kartę SD, mamy do dyspozycji narzędzia pomocnicze

::: tip

Przejdź do [Uruchamianie Exploitu](launching-the-exploit)

:::
