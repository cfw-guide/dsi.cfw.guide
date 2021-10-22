# FAQ

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
- Jeśli nie zmodyfikowałeś jeszcze swojej konsoli lub chcesz zaktualizować Unlaunch na swoim systemie, zalecamy wrócić do początku przewodnika i podążać za poradnikiem. Pamiętaj, aby przeczytać wszystko na stronie głównej
- Jeśli masz najnowszą wersję Unlaunch, postępuj zgodnie z Sekcją 1b w [Launching the Exploit](launching-the-exploit#twilight-menu), aby skonfigurować TWiLight Menu++ w swoim systemie

### Jak mogę usunąć kontrolę rodzicielską?
- [generator mkey](https://mkey.salthax.org) może wygenerować kod wymagany do usunięcia kontroli rodzicielskich

### Czy mogę zmienić mój region Nintendo DSi?
Tak, istnieje kilka różnych metod w zależności od tego, co chcesz zmienić:
- Najbezpieczniejszą i najprostszą metodą jest po prostu zainstalowanie TWiLight Menu++, który może używać każdego oficjalnego języka i nie tylko, bez konieczności modyfikacji NAND
- Jeśli chcesz zmienić region systemowy i korzystać z hiyaCFW, możesz użyć [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) Yoti'sa
- Wreszcie, jeśli chcesz zmienić region na aktualnym systemie NAND, możesz użyć [DDS Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/) Mighty Max'a
