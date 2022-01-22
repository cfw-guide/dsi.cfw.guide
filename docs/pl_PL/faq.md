---
title: FAQ
---

## Jaką funkcjonalność stracę modując mój system?
- Jeśli zdecydujesz się zainstalować Unlaunch, nie utracisz żadnych funkcji systemowych
- Jeśli chcesz mieć tylko Memory Pit, nie będzie można wtedy zapisać zdjęcia na karcie SD za pośrednictwem aplikacji Nintendo DSi Camera. Either follow [Alternate Exploits](alternate-exploits) instead, or follow [Installing Unlaunch](installing-unlaunch)
   - Dzieje się tak, ponieważ plik metadanych (`pit.bin`) jest nadpisywany exploitem Memory Pit

## Jak grać w zrzuty tytułów Nintendo DS?
Odtwarzanie zrzutów gier na konsoli wymaga użycia flashcarda lub nds-bootstrap, programu umożliwiającego granie z wewnętrznej karty SD poprzez przekierowanie na nią odczytów i zapisów ze Pola-1.
- Dzięki TWiLight Menu++ możesz nawigować po karcie SD w celu znalezienia plików ROM do odtworzenia z nds-bootstrap. Zaletą korzystania z TWiLight Menu++ jest posiadanie menu cheatów, ustawień dla poszczególnych gier oraz unikanie ograniczeń wprowadzanych przez forwardery. Innymi słowy, możesz wrzucić pliki ROM bezpośrednio i grać bez żadnych konfiguracji. Nie ma limitu 39 tytułów, ani hiyaCFW czy Unlaunch nie są wymagane i nie ma ograniczeń co do wolnego miejsca na karcie SD
- hiyaCFW users can create forwarders using the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) for the SDNAND's DSi Menu, but it has some limitations. There is a hard limit of 39 titles, and they are less convenient to make than using TWiLight Menu++
   - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## Jak zaktualizować mój homebrew?
- **Unlaunch** - Postępuj zgodnie z instrukcjami na stronie [Instalacja](installing-unlaunch)
   - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** - Zamień `hiya.dsi` w katalogu głównym karty SD z [zaktualizowaną wersją](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Postępuj zgodnie z instrukcjami na [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Skopiuj `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` do folderu `_nds` w katalogu głównym karty SD
   - Jeśli korzystasz z TWiLight Menu++, istnieje duża szansa, że najnowsze wersje nds-bootstrap zostaną uwzględnione w TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

Inne homebrew mogą używać innych metod do aktualizacji.

## Jestem nowy, lub chciałbym powtórzyć swoją konfigurację. Gdzie mam zacząć?
- Jeśli nie zmodyfikowałeś jeszcze swojej konsoli lub chcesz zaktualizować Unlaunch na swoim systemie, zalecamy wrócić do początku przewodnika i podążać za poradnikiem. Pamiętaj, aby przeczytać wszystko na stronie głównej
- Jeśli masz najnowszą wersję Unlaunch, postępuj zgodnie z Sekcją 1b w [Launching the Exploit](launching-the-exploit#twilight-menu), aby skonfigurować TWiLight Menu++ w swoim systemie

## Jak mogę usunąć kontrolę rodzicielską?
- [generator mkey](https://mkey.salthax.org) może wygenerować kod wymagany do usunięcia kontroli rodzicielskich

## Czy mogę zmienić mój region Nintendo DSi?
Tak, istnieje kilka różnych metod w zależności od tego, co chcesz zmienić:
- Najbezpieczniejszą i najprostszą metodą jest po prostu zainstalowanie TWiLight Menu++, który może używać każdego oficjalnego języka i nie tylko, bez konieczności modyfikacji NAND
- Jeśli chcesz zmienić region systemowy i korzystać z hiyaCFW, możesz użyć [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) Yoti'sa
- Wreszcie, jeśli chcesz zmienić region na aktualnym systemie NAND, możesz użyć [DDS Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/) Mighty Max'a

## What happened to the hiyaCFW installation guide?
Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).
- If you were linked to the page in question from another guide, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects

## What kind of SD card should I use?
- You should buy an SD card from a trusted brand
- A full-size SD card or a microSD card with an adapter will both work
- Any capacity between 1 GB and 2 TB will work. For general usage, 8 GB is enough
  - Some software, such as hiyaCFW, may experience incrementally longer loading times with larger SD card capacities
- Speed class 8 or higher is recommended

## Can I use my DSi SD card on other systems?
Generally, yes, with two exceptions:
- hiyaCFW will only work on the system it was set up for
- Even if you are using nds-bootstrap or a flashcard, friend codes in online NDS games will be reset when attempting to go online using a different console

## The [Unlaunch page](https://problemkaputt.de/unlaunch.htm) says that version 2.0 is not known to be safe. Should I use a previous version instead?
The Unlaunch page has not been updated since version 2.0 was released, which was over two years ago. The vast majority of users experience no issues with this version, so it is considered safe.
