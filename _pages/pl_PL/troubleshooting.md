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

## hiyaCFW
### "Wystąpił błąd"
Istnieje kilka powodów, dla których możesz otrzymać ten błąd:

- **Zbyt dużo wolnego miejsca:** Menu Nintendo DSi posiada błąd, który ogranicza ilość wolnego miejsca. Chociaż nie występuje to na aktualnym NAND (ponieważ chip nigdy nie może przekraczać 128 MB), może się to zdarzyć przy użyciu karty SD. Co działa i co nie przy każdym oddziale 2GB. Na przykład posiadanie 0-2 GB wolnej pamięci działa, ale 2-4 GB już nie. To samo dotyczy 4-6 GB vs 6-8, aż do uzyskania rozmiaru karty SD. Najnowsza wersja hiyaCFW może jednak tworzyć pliki dummy więc upewnij się, że pobierasz najnowszą wersję [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) i umieść `hiya.dsi` z "for SDNAND SD card" do katalogu głównego karty SD.
- **Ponad 39 tytułów:** Istnieje limit 39 tytułów w menu systemu DSi. Usuń dodatkowe foldery z `/title`
- **Zbyt dużo DSiWare:** Istnieje również limit 200 bloków (25MB) dla DSiWare w folderze `00030004`. Może być to sprawdzone poprzez zainstalowanie jako aplikacji systemu [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest)
- **Nieprawidłowy tytuł:** Istnieje kilka parametrów, które należy wziąć pod uwagę przy dodawaniu tytułów do hiyaCFW:
   - Zrzuty kart gier nie mogą być uruchamiane bez obsługi przez [forwarder](/nds-bootstrap-forwarders.html)
   - Istnieje kilka argumentów, które należy przekazać konstruktorowi `.app`, aby działał z poziomu menu systemowego DSi
