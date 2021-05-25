---
title: "FAQ"
---

{% include toc title="Questions" %}

### Jaką funkcjonalność stracę modując mój system?
- Jeśli zdecydujesz się zainstalować Unlaunch, nie utracisz żadnych funkcji systemowych
- Jeśli chcesz mieć tylko Memory Pit, nie będzie można wtedy zapisać zdjęcia na karcie SD za pośrednictwem aplikacji Nintendo DSi Camera. Więc albo przełącz się na [alternatywny exploit](alternate-exploits) albo na [zainstaluj Unlaunch](/installing-unlaunch)

   Dzieje się tak, ponieważ plik metadanych (`pit.bin`) jest nadpisywany exploitem Memory Pit.

### Jak grać w zrzuty tytułów Nintendo DS?
Odtwarzanie zrzutów gier na konsoli wymaga użycia flashcarda lub nds-bootstrap, programu umożliwiającego granie z wewnętrznej karty SD poprzez przekierowanie na nią odczytów i zapisów ze Pola-1.
- Dzięki TWiLight Menu++ możesz nawigować po karcie SD w celu znalezienia plików ROM do odtworzenia z nds-bootstrap. Zaletą korzystania z TWiLight Menu++ jest posiadanie menu cheatów, ustawień dla poszczególnych gier oraz unikanie ograniczeń wprowadzanych przez forwardery. Innymi słowy, możesz wrzucić pliki ROM bezpośrednio i grać bez żadnych konfiguracji. Nie ma limitu 39 tytułów, ani hiyaCFW czy Unlaunch nie są wymagane i nie ma ograniczeń co do wolnego miejsca na karcie SD
- użytkownicy hiyaCFW mogą tworzyć [forwardery](nds-bootstrap-forwarders) dla SDNAND's DSi Menu, ale ma to pewne ograniczenia. Istnieje twardy limit 39 tytułów, są one mniej wygodne w produkcji i nie łatają automatycznie zabezpieczeń antypirackich

### Jak zaktualizować mój homebrew?
- **Unlaunch** - Postępuj zgodnie z instrukcjami na stronie [Instalacja](/installing-unlaunch)
- **hiyaCFW** - Zamień `hiya.dsi` w katalogu głównym karty SD z [zaktualizowaną wersją](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Postępuj zgodnie z instrukcjami na [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Skopiuj `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` do folderu `_nds` w katalogu głównym karty SD
   - Jeśli korzystasz z TWiLight Menu++, istnieje duża szansa, że najnowsze wersje nds-bootstrap zostaną uwzględnione w TWiLight Menu++
- **GodMode9i, dumpTool, MakeForwarder, itp.** - Postępuj zgodnie z instrukcjami użytymi do ich pobrania

Inne homebrew mogą używać innych metod do aktualizacji.

### Jestem nowy, lub chciałbym powtórzyć swoją konfigurację. Gdzie mam zacząć?
- Jeśli nie zmodyfikowałeś jeszcze swojej konsoli lub chcesz zaktualizować Unlaunch bez użycia hiyaCFW, zalecamy zacząć od początku przewodnika i podążać przez kolejne strony. Pamiętaj, aby przeczytać wszystko na stronie głównej
- Jeśli masz najnowszą wersję Unlaunch, ale nie chcesz hiyaCFW, postępuj zgodnie z Sekcją 1b w [Launching the Exploit](launching-the-exploit#twilight-menu), aby skonfigurować TWiLight Menu++ w swoim systemie
- Jeśli masz już program Unlaunch i chcesz zainstalować hiyaCFW, postępuj zgodnie z [Instalacja hiyaCFW](installing-hiyacfw), a następnie wróć do [Instalacja Unlaunch](installing-unlaunch), aby zaktualizować Unlaunch
   - hiyaCFW Helper, narzędzie używane do instalacji hiyaCFW, posiada opcję instalacji TWiLight Menu++. Nie ma potrzeby instalowania TWiLight Menu++ oddzielnie
   - Następnie, ponieważ używamy TWiLight Menu++ do uruchomienia instalatora Unlaunch, dlatego też aktualizujemy Unlaunch po skonfigurowaniu hiyaCFW

### Jak mogę usunąć kontrolę rodzicielską?
- [generator mkey](https://mkey.salthax.org) może wygenerować kod wymagany do usunięcia kontroli rodzicielskich
