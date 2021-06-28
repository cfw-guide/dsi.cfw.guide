---
title: Rozwiązywanie problemów
---

{% include toc title="Table of Contents" %}

## Unlaunch
### Czy Unlaunch zamraża się na `MISMATCH IN FAT COPIES`?
twlnf ma krytyczny błąd, w którym nie aktualizuje poprawnie całego NAND po jego modyfikacji, który powoduje, że niektóre homebrew (takie jak Unlaunch installer) wyrzucą błąd.

O ile jest to naprawialne, metoda w dużej mierze różni się w zależności od systemów. Jedną z metod jest usunięcie dowolnego DSiWare zainstalowanego przez twlnf, ale zgłoszono również, że przeniesienie *wszystkich* DSiWare na kartę SD i powrót do systemu może również okazać się pomocne.

Jeśli w przeszłości zdowngradowałeś system, aktualizacja do wersji v1.4.5 (lub v1.4.6 jeśli Twój region DS jest chiński lub koreański) może również pomóc w tym błędzie.

### Nie ma dźwięku lub boot splashu podczas uruchamiania "LAUNCHER" za pomocą Unlaunch

Twórca Unlaunch (nocash) celowo załatał domyślnie dźwięk w tle i boot-splash. Możesz odzyskać te efekty [ponownie instalując Unlaunch](/installing-unlaunch) używając TWiLight Menu++.
