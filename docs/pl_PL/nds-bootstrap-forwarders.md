# forwardery nds-bootstrap dla hiyaCFW

Jest to dodatkowa sekcja, która polega na tworzeniu forwarderów dla nds-bootstrap. Pozwala ona na uruchamianie romów nds bezpośrednio z menu systemu SDNAND.

## Wymagania

- System Nintendo DSi z [Unlaunch](/installing-unlaunch) & [hiyaCFW](/hiyacfw-setup) zainstalowanymi
- Poradnik [TWiLight Menu++](launching-the-exploit#twilight-menu)
- Najnowsza wersja [MakeForwarder](https://github.com/Ta180m/Make-Forwarder-Dsi/releases)

### Instrukcje

1. Wyodrębnij *zawartość* `MakeForwarder.zip` do katalogu głównego karty SD
1. Uruchom TWiLight Menu++ przez menu Unlaunch
   - Przytrzymaj <kbd class="face">A</kbd> + <kbd class="face">B</kbd> przy starcie systemu
1. Uruchom swój ROM Nintendo DS
1. Gdy ROM już się uruchomi i zadziała, wyłącz konsolę
   - Jeśli to nie działa, podążaj za instrukcjami rozwiązywania problemów nds-bootstrap
1. Uruchom hiyaCFW w menu Unlaunch
1. Gdy znajdziesz się w menu systemu Nintendo DSi, odpakuj i uruchom "Forwarder Maker"
1. Ustaw swój docelowy bootstrap w zależności od typu twojej aplikacji:
   - **Retail ROM:** `sd:/_nds/nds-bootstrap-release.nds`
   - **Homebrew:** `sd:/_nds/nds-bootstrap-hb-release.nds`
1. Wybierz "create forwarder" i przejdź do lokalizacji twojego ROM

Powtarzaj krok 7 i 8 aż do uzyskania wszystkich ROM-ów jako forwardery.
- Nie musisz resetować docelowych wersji bootstrap, chyba że poprzedni wybór jest niedokładny do obecnego

Po utworzeniu wszystkich ROM-ów jako forwarderów, zrestartuj system i uruchom hiyaCFW. Powinny pojawić się jako prezenty.
