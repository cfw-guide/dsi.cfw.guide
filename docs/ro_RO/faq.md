---
title: FAQ
---

## Ce funcții voi pierde dacă îmi modific consola?
- Dacă decizi să instalezi Unlaunch, nu vei pierde nici o funcție de sistem
- Dacă folosești doar Memory Pit, nu vei putea să salvezi poze pe cardul SD prin aplicația Nintendo DSi Camera cât timp exploit-ul este instalat. Fie urmează [Exploit-uri Alternative](alternate-exploits), sau urmează [Instalarea Unlaunch](installing-unlaunch)
   - Asta se întâmplă deoarece fișierul de metadate (`pit.bin`) este suprascris cu exploit-ul Memory Pit

## Cum pot rula copiile Cardurilor de Joc Nintendo DS?
Pentru a rula copii ale Cardurilor de joc pe consolă îți trebuie un flashcard sau nds-bootstrap, un program ce permite jocurilor să fie jucate de pe cardul SD intern prin redirecționarea citirilor Slot-1 și scrie pe el.
- Cu TWiLight Menu++ poți naviga cardul SD pentru a găsi ROM-uri pentru a le juca cu nds-bootstrap. Avantajele pe care le ai dacă folosești TWiLight Menu++ sunt cheats-urile, setările în joc, și evitarea restricțiilor pe care forwarder-ele le au. Cu alte cuvinte, poți să-ți pui fișierele ROM direct și să joci fără nicio configurare. Nu există nici o limită de 39 de titluri, nici hiyaCFW sau Unlaunch nu sunt necesare și nu există restricții pe spațiul liber pe care îl ai pe cardul SD
- Utilizatorii hiyaCFW pot crea forwardere pentru Meniul DSi al SDNAND-ului folosind ghidul [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) pe DS-Homebrew Wiki, dar are și el niște limitări. Există o limită de 39 de titluri, și sunt mai puțin convenabil de făcut decât dacă folosești TWiLight Menu++
   - Dacă nu ai hiyaCFW și vrei să folosești forwardere, poți citi [ghidul de instalare hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) pe DS-Homebrew Wiki

## Cum îmi actualizez aplicațiile homebrew?
- **Unlaunch** - Urmează instrucțiunile de pe pagina [Instalarea Unlaunch](installing-unlaunch)
   - **Nu** trebuie să dezinstalezi Unlaunch înainte de a face asta
- **hiyaCFW** - Inlocuiește `hiya.dsi` de pe rădăcina cardului SD de la [versiunea actualizată](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Urmează instrucțiunile de pe [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copiază `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` în dosarul `_nds` de pe rădăcina cardului SD
   - Dacă folosești TWiLight Menu++, există o șansă mare ca ultima versiune a nds-bootstrap să fie inclusă cu TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Urmează instrucțiunile folosite pentru a le descărca

Alte aplicații homebrew ar putea folosi alte metode de actualizare.

## Sunt nou sau mi-ar plăcea să-mi refac configurarea. De unde încep?
- Dacă nu ți-ai modifcat încă sistemul sau dacă vrei să actualizezi Unlaunch pe sistemul tău, îți recomandăm să începi de la începutul ghidului și să urmărești paginile. Asigură-te că citești totul de pe pagina principală
- Dacă ai ultima versiune a Unalunch, urmează Secțiunea 1b a [Lansării Exploit-ului](launching-the-exploit.html#twilight-menu) pentru a seta TWiLight Menu++ pe sistemul tău

## Cum pot dezactiva controlul parental?
- [mkey generator](https://mkey.salthax.org) poate genera codul necesar pentru a dezactiva controlul parental

## Pot schimba regiunea consolei Nintendo DSi?
Da, există câteva metode diferite în funcție de ce vrei să schimbi:
- Cea mai sigură și simplă metodă este doar să instalezi TWiLight Menu++, ce poate folosi orice limbă oficială și mai mult de atât fără a necesita modificări ale NAND-ului
- Dacă vrei să schimbi regiunea sistemului și folosești hiyaCFW, poți folosi [liyalang](https://github.com/Yoti/cli_hiyalang/releases) creat de Yoti
- În cele din urmă, dacă vrei să schimbi regiunea NAND-ului de sistem, poți folosi [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/) de Mighty Max

## Ce s-a întâmplat cu ghidul de instalare hiyaCFW?
Deoarece hiyaCFW nu are un scop foarte funcțional și a fost o parte problematică și derutantă a ghidului pentru mulți utilizatori, a fost mutat la [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).
- Dacă ai primit linkul pentru pagina respectivă din alt ghid, instrucțiunile pe care le-ai urmat sunt cel mai probabil învechite. Te rugăm să urmezi acest ghid, deoarece este menținut în mod constant de dezvoltatorii acestor proiecte

## Ce fel de card SD ar trebui să folosesc?
- Ar trebui să cumperi un card SD de la o marcă de încredere (de exemplu SanDisk)
- Un card SD mare sau un card microSD cu un adaptor vor funționa
- Orice capacitate între 1 GB și 2 TB a funcționa. Pentru uz general, 8 GB sunt suficient
  - Anumite aplicații, precum hiyaCFW, pot avea timpuri de încărcare infernale cu carduri SD cu memorie multă
- Clasa de viteză 8 sau mai mare este recomandat

## Pot folosi cardul SD al consolei mele DSi și pe alte sisteme?
În general, da, cu două excepții:
- hiyaCFW va funcționa doar pe sitemul pe care a fost setat
- Chair dacă ai nds-bootstrap sau un flashcard, codurile de prieteni în jocurile NDS online vor fi resetate când încerci să te conectezi online folosind o consolă diferită

## [Pagina Unlaunch](https://problemkaputt.de/unlaunch.htm) spune că versiunea 2.0 nu este cunoscută ca fiind sigură. Ar trebui să folosesc versiuni anterioare?
Pagina de dezlansare nu a fost actualizată de când versiunea 2.0 a fost lansată, care a fost cu peste doi ani în urmă. Marea majoritate a utilizatorilor nu a avut probleme cu această versiune, deci este considerată sigură.
