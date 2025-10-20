# FAQ

## Czy powinienem zrobić aktualizację systemu?

**Nie** jest rekomendowane, żeby aktualizować swoje DSi, chyba że wiesz, że są kupione DSiWare. Jest wciąż możliwe, żeby kontynuować z tym poradnikiem, jeżeli tak zrobisz, ale jedynym plusem jest możliwość dostępu do Nintendo DSi Shop, aby instalować już kupione tytuły. Wszystkie inne plusy, takie jak integracja Facebook'a w aplikacji Nintendo DSi Camera, nie są już zdolne do użytku lub nie są wystarczające, aby uzasadnić minusy:

- Instalowanie aktualizacji systemowych może okazjonalnie **spowodować awarię** konsoli, z mniej więcej taką samą częstotliwością, jak instalowanie Unlaunch
- Starsze exploit'y mogą już nie być zdatne do użytku, jeżeli nie jesteś w stanie użyć zalecanych exploit'ów
- Kompatybilność z Flashcard'ami jest zmniejszona, jednak jest to obchodzone, jeśli zainstalujesz Unlaunch

## Jaki jest najlepszy exploit?

Unlaunch jest ogółem najlepszym exploit'em dla DSi, z jedynym minusem, że jest mała szansa na awarię podczas instalacji. Ogółem jest zalecane, aby użyć Memory Pit do instalacji Unlaunch. Jeżeli chcesz ominąć jakiekolwiek ryzyko to zalecane jest użycie Flipnote Lenny, bo ma mniej problemów z homebrew niż Memory Pit, podczas gdy jest tak samo bezpieczne i proste do usunięcia. Poniżej jest lista plusów i minusów każdego exploit'a:

### Memory Pit

Plusy:

- Szybkie i proste do użytku
- Brak ryzyka uszkodzenia konsoli, odinstalowywanie jest tak proste jak usunięcie karty SD lub usunięcia jednego pliku
- Kompatybilne z każdą konsolą DSi, chyba że mają zepsutą kamerę albo nie skończyły wprowadzenia kamery

Minusy:

- Wymaga uruchamiania aplikacji DSi Camera za każdym razem, gdy chcesz uruchomić homebrew
- Niekompatybilne z niektórymi tytułami DSi mode i z homebrew, bo WRAM jest dostępny tylko dla CPU ARM7
- Dostęp do Slot-1 (czyli DS Game Card) jest zablokowany w homebrew
- Dostęp do DSP jest zablokowany skutkując gorszym dźwiękiem w GBARunner2
- Zdjęcia na karcie SD nie mogą być oglądane, gdy aplikacji DSi Camera ma zainstalowany Memory Pit, ponieważ jest to miejsce wywołania exploit'u
  - Jedynym sposobem na oglądanie zdjęć na karcie SD, podczas gdy Memory Pit jest zainstalowany jest odpalenie zrzutu ROM aplikacji DSi Camera i używając **TW**i**L**ight Menu++, by odpalić go poprzez nds-bootstrap (v0.61.3 lub nowszy)

### stylehax

Plusy:

- Lepsza kompatybilność z tytułami DSi mode i homebrew od Memory Pit
- Łatwe do użytku
- Brak ryzyka uszkodzenia konsoli
- Używalne na konsolach z niedziałającą kamerą
- Lepszy dźwięk w GBARunner2

Minusy:

- Wymaga dostępu do internetu
- Wymaga uruchamiania DSi Browser za każdym razem, gry chcesz mieć dostęp do homebrew, trochę bardziej czasochłonne niż Memory Pit
- Dostęp do Slot-1 (czyli DS Game Card) jest zablokowany w homebrew

### Flipnote Lenny

Plusy:

- Lepsza kompatybilność z tytułami DSi mode i homebrew od Memory Pit
- Brak ryzyka uszkodzenia konsoli, odinstalowywanie jest tak proste, jak usunięcie karty SD lub usunięcie jednego pliku
- Używalne na konsolach z niedziałającą kamerą
- Lepszy dźwięk w GBARunner2

Minusy:

- Wymaga ładowania Flipnote Studio za każdym razem, gdy chcesz mieć dostęp do homebrew, trochę bardziej czasochłonne niż Memory Pit
- Dostęp do Slot-1 (czyli DS Game Card) jest zablokowany w homebrew

### Unlaunch

Plusy:

- Pozwala na ładowanie homebrew i DSiWare automatycznie po włączeniu systemu, opcjonalne skróty klawiszowe
- Pełny dostęp do systemu bez żadnych ograniczeń, wliczając:
  - Dostęp do Slot-1 pozwalając na zrzucanie Kart Gry i ładowanie niekompatybilnych flashcard'ów
  - Lepszy dźwięk w GBARunner2
- Usuwa zablokowanie regionu na Kartach Gry DSi-Enchanced/Exclusive
- Zabezpieczenie przed większością sposobów, w jakie DSi mogłoby mieć awarię
- Gry DSi-Enhanced mogą być otwieranie w DSi mode bez romu dawczego
- Stare homebrew może być uruchamianie poprzez nds-boostrap-hb

Minusy:

- Bardzo małe ryzyko **zablokowania** konsoli podczas instalacji
- Inne, trochę większe, ryzyko spowodowania awarii, jeżeli zdecydujesz się go [odinstalować](uninstalling-unlaunch.html)
- Nie jest kompatybilne z konsolami deweloperskimi

## Czy stracę jakąkolwiek funkcjonalność poprzez modyfikowanie mojego systemu?

Jeśli zainstalujesz Unlaunch albo użyjesz Flipnote Lenny, nie stracisz żadnej funkcjonalności. Jeśli użyjesz Memory Pit, nie będziesz w stanie przeglądać zdjęć na karcie SD podczas używania DSi Camera, chyba że uruchomisz zrzut ROM-u aplikacji DSi Camera, używając **TW**i**L**ight Menu++, aby uruchomić go poprzez nds-bootstrap.

- Aby odzyskać możliwość oglądania twoich zdjęć na karcie SD podczas uruchamiania DSi Camera z DSi Menu, zainstaluj Unlaunch albo zmień na inny exploit, potem usuń plik `pit.bin` Memory Pit
  - Jeżeli `tip.bin` istnieje w tym samym katalogu, zmień jego nazwę z powrotem na `pit.bin`

## Jak mogę grać w zrzuty Kart Gier Nintendo DS?

Granie w zrzuty Kart Gier na konsoli wymaga użycia flashcard'a albo nds-bootstrap, programu, który pozwala na granie w gry z wewnętrzej karty SD poprzez przekierowanie odczytów i zapisów do Slot-1.

- Z TWiLight Menu++ możesz nawigować po twojej karcie SD, aby znaleźć pliki ROM do uruchamiania poprzez nds-bootstrap. Zaletami używania TWiLight Menu++ jest menu oszustw, ustawienia na grę i unikanie restrykcji, które posiadają forwarder'y. Innymi słowy, możesz przenieść swoje pliki ROM bezpośrednio i grać bez żadnej konfiguracji. Nie ma limitu 39 tytułów ani hiyaCFW, ani Unlaunch nie są wymagane i nie ma restrykcji o wolnym miejscu na karcie SD, jakie możesz mieć
- Użytkownicy hiyaCFW mogą tworzyć przekazywacze do DSi Menu SDNAND-u używając poradnika [Przekazywaczy DS Game](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) na Wiki DS-Homebrew, ale ma swoje limitacje. Jest twardy limit 39 tytułów, ale są mniej praktyczne do zrobienia niż używanie TWiLight Menu++
  - Użytkownicy hiyaCFW mogą tworzyć forwarder'y do DSi Menu SDNAND-u używając poradnika [Fowarder'ów DS Game](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) na Wiki DS-Homebrew, ale ma to swoje limitacje

## Jak mogę aktualizować moje homebrew?

- **Unlaunch** - Podążaj za instrukcjami na stronie [Instalowanie Unlaunch](installing-unlaunch.html)
  - **Nie** potrzebujesz odinstalowywać Unlaunch przed robieniem tego
- **hiyaCFW** - Zamień `hiya.dsi` na początku karty SD z [zaktualizowanego wydania](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Podążaj za instrukcjami na [Wiki DS-Homebrew](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Skopiuj `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` do folderu `_nds` na początku twojej karty SD
  - Jeżeli używasz TWiLight Menu++, to jest duża szansa, że masz najnowszą wersję nds-bootstrap zawartą z TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, itp.** - Podążaj za instrukcjami używanymi do pobrania ich

Inne homebrew mogą używać inne metody aktualizacji.

## Jestem nowy lub chciałbym odnowić moją instalację. Gdzie mam zacząć?

- Jeżeli jeszcze nie zmodyfikowałeś swojej konsoli albo chcesz zaktualizować Unlaunch na swoim systemie, zalecamy rozpoczęcie od początku poradnika i podążanie przez wszystkie strony. Upewnij się, że przeczytałeś wszystko na stronie głównej
- Jeżeli masz najnowszą wersję Unlaunch, podążaj za [poradnikiem instalacji TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi), aby ustawić TWiLight Menu++ na swoim systemie

## Jak mogę usunąć kontrolę rodzicielską?

- [Generator mkey](https://mkey.salthax.org) może wygenerować kod wymagany do usunięcia kontroli rodzicielskiej

## Czy mogę zmienić region mojego Nintendo DSi?

Tak, jest parę różnych metod, w zależności od tego, co chcesz zmienić:

- Najbezpieczniejsza i najprostsza metoda to po prostu zainstalowanie TWiLight Menu++, może używać jakiegokolwiek oficjalnego języka i więcej bez modyfikacji NAND-u
- Jeżeli właściwie chcesz zmienić region systemu i używasz hiyaCFW, otwórz menu konfiguracyjne, i zmień ustawienie regionu (nie jest to możliwe z NAND-ami CHN i KOR)
  - Jeżeli zepsuje to wprowadzanie dotykowe, przywróć swoje ustawienia do oryginalnych, i możesz używać zamiast tego [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) Yoti'ego dla Azjatyckich systemów DSi. Dla Amerykańskich systemów DSi, użyj [tę wersję hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Na koniec, jeżeli chcesz zmienić region na właściwym NAND-zie systemowych, możesz użyc [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/https://gbatemp.net/threads/release-dsi-language-patcher.582836/) Mighty Max'a

## Co stało się z Lazy DSi Downloader? Jak zainstaluje CFW bez niego?

Lazy DSi Downloader był programem, który praktycznie pozwalał Ci na pominięcie manualnego procesu konfiguracji poprzez pobieranie i przenoszenie wymaganych plików do folderów na twojej karcie SD. Jednakże, z powodu tego, jak był on zaprogramowany i rozprowadzany, wielu użytkowników miało różne problemy i kończyli, robiąc manualne ustawienie, bo było to szybsze i/lub łatwiejsze niż naprawianie czegokolwiek, co powodowało problem.

Aby zapobiec większej liczbie użytkowników przed napotykaniem tych problemów, nie zalecamy już używania Lazy DSi Downloaded, i zamiast tego [zrobienie manualnego ustawienia](get-started.html) jest zalecaną drogą.

- Jeżeli byłeś tu skierowany przez osoby trzecie, które zalecały używanie Lazy DSi Downloader, to instrukcje, jakimi podążałeś, były najprawdopodobniej przestarzałe. Proszę, zamiast tego użyj tego poradnika, bo jest on utrzymywany przez deweloperów tych projektów.

## Jaki typ karty SD powinienem użyć?

- Powinieneś kupić kartę SD od zaufanej firmy
- Pełno-rozmiarowa karta SD lub karta microSD z adapterem powinny równie dobrze działać
- Jakakolwiek wielkość pomiędzy 1 GB a 2 TB będzie działać. Dla ogólnego użytku, 8 GB jest wystarczające
  - Niektóre oprogramowanie, takie jak hitaCFW, może mieć o wiele dłuższy czas ładowania z kartami SD o większej pojemności
- Klasa prędkości 8 lub większa jest zalecana

## Czy mogę użyć moją karte SD DSi na innych systemach?

Ogólnie, tak, jednak są dwa wyjątki:

- hiyaCFW będzie działać tylko na systemie, na jakim był ustawiony
- Nawet jeżeli używasz nds-bootstrap lub flashcard'a, kody znajomego w sieciowych grach NDS będzie resetowany, jeżeli spróbujesz pójść online używając innej konsoli

## Jak mogę zmienić do nowej karty SD po ustawieniu homebrew?

Sformatuj swoją kartę SD używając instrukcji [Konfiguracji Karty SD](sd-card-setup.html), potem po prostu przenieś swoje dane ze starej karty SD do nowej.

## Czy mogę wciąż używać mojego systemu normalnie bez karty SD po skonfigurowaniu homebrew?

Tak. Jeżeli nie instalowałeś Unlaunch, twój system będzie zupełnie niezmodyfikowany. Jeżeli **zainstalowałeś** Unlaunch, będziesz musiał [skonfigurować Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration), aby automatycznie uruchamiał się do oryginalnego DSi Menu pod ustalonymi kondycjami.

## [Strona Unlaunch](https://problemkaputt.de/unlaunch.htm) mówi, że wersja 2.0 nie jest bezpieczna. Czy powinienem użyć wcześniejszej wersji?

Strona Unlaunch nie była aktualizowana, od kiedy wersja 2.0 była wydana w 2019. Większość użytkowników nie doświadcza problemów z tą wersją, więc jest ona uznana za bezpieczną.

## Jak mam uruchamiać zrzucone DSiware?

Zalecaną metodą jest po prostu uruchomienie ich za pomocą TWiLight Menu++, z powodu prostej metody "przeciągnij i upuść" i braku arbitralnych limitów. Kiedy nds-bootstrap jest ustawiony jako domyślna metoda, zyskuje on także zalety innych oszustw i zrzutów ekranu, oraz innych zalet zawartych przez menu w grze.

Jednakże, dla tych kilku tytułów, które nie są kompatybilne, możesz użyć [NTM](https://github.com/Epicpkmn11/NTM/releases), aby zainstalować je albo w pamięci wewnętrznej albo w [SDNAND hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing). W dodatku do braku w. w. zalet jest też limit 39 tytułów, które nie mogą być większe od 128MiB/1.024 bloków wielkości. Dla SysNAND istnieje też bardzo małe ryzyko awarii systemu podczas zapisywania do wewnętrznego NAND-u.
