# Egy menü választása

Három menü érhető el a játékok indításához. Válaszd azt, ami megfelel az igényeidnek.

- **Ha nem vagy biztos benne** (vagy nem tudsz dönteni), válaszd a [**TW**i**L**ight Menu++](#twilight-menu)-t.
- Ha csak azt keresed hogyan tudsz futtatni egy a DSi-kompatibilis Flashcart-ot, ami már az "An Error Occurred" hibát mutatja, válaszd az [Unlaunch Standalone](#unlaunch-standalone)-t.

## [hiyaCFW](installing-unlaunch-and-hiyacfw.html)

Az első és egyetlen egyedi firmware, ami átirányítja a NAND hozzáférést az SD kártyára, és ennek eredményeként a DSi rendszer menüjét rendszerelkalmazásokkal és DSiWare-t SD kártyáról futtatja a a rendszer memória helyett.

Telepítsd ezt, ha az eredeti működéshez legközelebb álló élményre vágysz.

### Előnyök

- Az eredeti Nintendo DSi Menu kerül felhasználásra. Nincs újra elkészítés!
- A játok, amik eredetileg DS(i) játékkártyákról indítottak, elindíthatók a DSi Menu-ből [forwarder létrehozása](https://wiki.ds-homebrew.com/ds-index/forwarders) után és a DSiWare-ek telepíthetők [NTM](https://github.com/Epicpkmn11/NTM/releases)-mel.

### Hátrányok

- Mivel ez igényli au Unlaunch-öt, ezért ír a konzol NAND memóriájába, így van egy kis esélye annak, hogy brickelheti a konzolodat!
- Csak DS és DSi játékok indítására. A korábbi konzolokról származó játékok indításához léte kell hoznod forwardereket az appokhoz, amik emulálják azokat a konzolokat.
- A Forwarderek létrehozása a játékokhoz időigényes összehasonlítva azzal, hogy mennyi idő az SD kártyára másolni őket.
- 39 ikonra korlátozott a képernyőn azért, ahogy a DSi Menu működik.
- A menü felhasználói felület nem egyedisíthető.

## [**TW**i**L**ight Menu++](installing-twilight-menu.html)

Egy feljavítása/cseréje az eredeti Nintendo DSi Menu-nek, ami lehetővé teszi más homebrew-ok, kereskedelmi DS játékok, más régebbi rendszerek emulátorainak és egyebeknek a futtatását.

### Előnyök

- Tartalmazza a DSi Menu, a 3DS HOME Menu, és néhány flashcard felületének az eredetihez hű megvalósítását.
- A legtöbb felület egyedivé tehető a felhasználók által készített témák telepítésével.
- DS, DSi és GBA játékok indíthatók.
- A GBA előtti konzolok játékai egy [add-on segítségével](https://wiki.ds-homebrew.com/twilightmenu/installing-addons) indíthatók
- Telepíthető a hiyaCFW mellé.

### Hátrányok

- A DSi Menu felület tartalmaz néhány pontatlanságot, mint például a zene rövidebb és alacsonyabb minőségű (megkerülhető egy add-on telepítésével), és eltérő görgetés, a görgetősáv húzásakor.
- A Fa felületről hiányzik néhány szolgáltatás, mint például a start menü.
- Néhány másodpercre van szükség a menük közötti átkapcsoláshoz, mint mint például ROM kiválasztó menü, a DS Classic Menu, és/vagy Beállítások menü.

## [AKMenu-Next](installing-akmenu-next.html)

Ez egy frissített verziója az eredeti Fa/akmenu flashcard menünek, amit kompatibilissá tettek a DSi SD kártyájával.

### Előnyök

- A leggyorsabb és legkönnyebb elérhető menü.
- Nem hiányzik semmilyen szolgáltatás a menüből (pl. start menü és grafikus info/settings menu) összehasonlítva a Fa felülettel a TWLMenu++-ből.
- Egyedivé tehető a felhasználók által készített Wood R4 & AKAIO kompatibilis témák telepítésével.
- A játékok régebbi konzolokról beleértve a GBA-t is egy [add-on segítségével](https://coderkei.github.io/akmenu-next-docs/guides/plugins/) indíthatók
- Telepíthető a hiyaCFW mellé.

### Hátrányok

- Nem támogatja a DSiWare-t.
- Zene és/vagy hangeffektek nem használhatók.
- Nem állít be automatikusan donor ROM-ot annak érdekében, hogy a DSi-Enhanced játékok DSi módban legyenek játszhatók Unlaunch nélkül, és kézzel kell beállítani.

## [Unlaunch Standalone](installing-unlaunch-standalone.html)

Ez nem telepít egy egyéni menüt és az alap DSi Menu-n alapul, de az Unlaunch telepítése feloldja a DSi-t, beleértve a korábban már blokkolt flshcart-okat

### Előnyök

- Lehetővé teszi a korábban blokolt DSi-kompatibilis flashcart-ok használatát (megelőzi az "An Error Occurred" képernyőt a vonatkozó flashcart-ok estében)
- Lehetővé teszi más menük telepítését a jövőben, anélkül, hogy előtte expliotolni kellene
- Továbbra is alap DSi Menu-t használ

### Hátrányok

- Nem telepít menüt játék betöltő funkciókkal
- Nincsennek tovább egyéniesítő lehetőségek
