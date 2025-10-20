# Unlaunch telepítése

Az Unlaunch telepítésére készülsz, ami egy állandó bootcode exploit és telepítésre került a DSi konzolra magára, teljes hozzáférést adva a konzolhoz bootoláskor, és ennek eredményeként lehetővé teszi a homebrew alkalmazások teljes hozzáférését a hardverhez a DSi rendszer appok és a DSiWare címek korlátozásai nélkül.

::: danger

Ha még nem tetted meg, kérjük készíts egy [NAND mentést](dumping-nand.html). Egy NAND mentés + [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) (vagy egy [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod), ha tudsz forrasztani) lehetővé teszi, hogy helyreállítsd ezt a konzolt, ha a konzol később brickelődne.

:::

::: danger

Az Unlaunch telepítése és eltávolítása, habár biztonságos, ír a konzol NAND memóriájába, így van egy kis esélye annak, hogy brickelheti a konzolodat!

:::

::: warning

Ha nincs hozzáférésed egy PC-hez, vagy a PC-d ChromeOS-t futtat, ne telepítsd az Unlaunch-öt. Egy PC (ami Windows, Linux, vagy macOS operációs rendszerű) szükséges, hogy biztosítsuk, hogy az SD kártya olyan módon formázott, hogy megfelel az Unlaunch számára.

:::

::: warning

Az Unlaunch nem kompatibilis a Nintendo DSi fejlesztői konzolokkal.

:::

## I. rész - SD kártya telepítés

1. Töltsd le a [Safe Unlaunch installer](https://github.com/edo9300/unlaunch-installer/releases/latest/download/unlaunch-installer.dsi) legutolsó verzióját
2. Rakd az `unlaunch-installer.dsi`-t bárhová az SD kártyádon

## II. rész - A DSi rendszer verzió frissítése

::: tip

Ha az Unlaunch már telepített és frissíteni vagy eltávolítani szeretnéd az Unlaunch-öt, ugorj a III. részhez

:::

1. A DSi Menuben indítsd el a System Settings alkalmazást (szürke ikon egy fehér csavarkulcssal)
   - A verzió a felső képernyő jobb alsp részén látható
   - Ha a verzió `Ver 1.4.2`, folytasd egy rendszer frissítéssel
   - Egyébként menj egyenesen a III. részhez
2. Érintsd meg a `4`-et, hogy a 4. oldalhoz menj
3. Érintsd meg az `System Update`-et
   - Ez a harmadik opció, ha a konzol nem az anyanyelveden van
4. Érintsd meg a `Yes`-t amikor kérdi a csatlakozást az internethez és frissítéshez
   - Ez a bal oldali opció, ha a konzol nem az anyanyelveden van
   - Ha a verzió már friss, menjd egyenesen a III. részhez
5. Érintsd meg a `Next` gombot
   - Ez a jobb oldali opció, ha a konzol nem az anyanyelveden van
6. Érintsd meg az `I Accept` gombot
   - Ez a legfelső opció, ha a konzol nem az anyanyelveden van
7. Érintsd meg az `OK` gombot
   - Ez a jobb alsó opció, ha a konzol nem az anyanyelveden van
8. Várj a rendszer frissítéséig, majd bootolj újra ha végzett

## III. rész - Az Unlaunch telepítése/frissítése

1. Nyisd meg a menüt amit telepítettél (**TW**i**L**ight Menu++ vagy akmenu-next)
   - Ha ez az első alkalom, hogy telepíted az Unlaunch-öt, töltsd újra a menütt az [exploiton keresztül, amit használtál](launching-the-exploit.html)
   - Ha már telepítetted az Unlaunch-öt és frissíteni szeretnéd, tartsd nyomva az <kbd class="face">A</kbd> + <kbd class="face">B</kbd> gombokat, amíg bootolsz
2. A menüben ahol az ikonok listázódnak, indítsd el a `Safe Unlaunch installer`-t (ami `unlaunch-installer.dsi`-nek listázott függően a menütől ahol használva lett és/vagy hogyan van megjelenítve)
3. Nyomj <kbd class="face">A</kbd> gombot a `WARNING` üzenet megjelenése után
   - Ha az elem LED piros, akkor azt mondja neked, hogy dugd be a konzolt. Válassz `Yes`-t a folytatáshoz, miután bedugtad
4. Ha szeretnéd cserélni az Unlaunch hátterét, válaszd a `[Custom background]` opciót és nyomj <kbd class="face">A</kbd> gombot neked tetsző használatához
   - Három egyedi háttér található a csomagban, de továbbiakat is hozzáadhatsz az SD kártya gyökérkönyvtárában található `backgrounds` mappába (ha a mappa még nem létezik, hozd létre)
5. Ha szretnéd megtartani a DSi kezdőképernyőt (az egészségügyi üzenettel) és a hangját a DSi rendszer menünek, válaszd az `Enable sound and splash` opciót ás nyomj <kbd class="face">A</kbd> gombot a bekapcsolásához
6. Ha az Unlaunch már telepített, válaszd az `Uninstall unlaunch` vagy a `Restore launcher tmd` opciót és nyomj <kbd class="face">A</kbd> gombot, ha kész
   - Ha csak az Unlaunch-öt szeretnéd eltávolítani, megállhatsz itt
7. Válaszd az `Install unlaunch` opciót és nyomj <kbd class="face">A</kbd> gombot
8. Nyomj <kbd class="face">A</kbd> gombot, ha a telepítés kész
9. Nyomj <kbd class="face">POWER</kbd> gombot a rendszered újraindításához

Ha az Unlaunch Filemenu képernyőt látod ezen a ponton, akkor sikeresen moddoltad a Nintendo DSi-det.

- Ha fekete képernyőt kapsz, tekintsd meg a [Hibaelhárítás](troubleshooting.html) oldalt

## IV. rész - Unlaunch-utáni konfiguráció

Jelenleg az Unlaunch alapértelmezésben a Filemenu-t indítja bootoláskor, de ez módosítható bármire, amit indítani szeretnél.

1. Kapcsold be a konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
   - Ez el kell indítsa az Unlaunch Filemenu-t
   - Ha semmi nem listázott vagy csak a NAND tartalom listázott (még legörgetés után sem), akkor [újra kell formáznod az SD kártyád](sd-card-setup.html)
2. Navigálj az `OPTIONS`-höz és nézd meg az elérhető opciókat
   - <kbd class="face">A</kbd> + <kbd class="face">B</kbd> hardkódolt az Unlaunch menühöz, így az nem cserélhető
   - A `NO BUTTON` és `BUTTON A / B / X / Y` opciók beállíthatók, ahogy szeretnéd, hogy mit töltsön a DSi-d a bootolásnál, attól függően melyik gomb volt lenyomva. Kiválaszthatsz bármilyen DSiWare-t, homebrew-t (beleértve bármelyik menüt amit telepítettél), a Slot-1 kártyát, wifiboot-ot vagy az Unlaunch Filemenu-jét
     - Az eredeti DSi Menühöz, válaszd a `Launcher`-t\`
   - `LOAD ERROR` az, amit a DSi be fog tölteni, amikor amit beállítottál az hibára fut, mert például az SD kártya nem lett beillesztve
3. Válaszd a `SAVE & EXIT` opciót a beállításaid mentéséhez, majd kapcsold ki a DSi konzolod

## V. rész - Takarítás az SD kártyán

::: tip

Ez a rész opcionális és csak azt a célt szolgálja, hogy az SD kártyádon ne maradjon fájl, amire nincs szükséged.

:::

:::: tabs

:::tab default Memory Pit

- Töröld az `sd:/private/ds/app/484E494A/pit.bin` fájlt az SD kártyádról
- Nevezd vissza a `tip.bin` fájlt a `pit.bin` névre, és hagyd ahogy van
- Most már visszaállíthatod a `DCIM` mappát, ami az SD kártyád gyökerében volt
- Töröld az `unlaunch-installer.dsi` fájlt az SD kártyádról

:::

:::tab Flipnote Lenny

- Töröld a `800031_104784BAB6B57_000.ppm` és a `T00031_1038C2A757B77_000.ppm` fájlokat a következő mappából:
  - `sd:/private/ds/app/4B47554A/001` (Japán)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europa/Ausztrália)
  - Törölheted az összes mappát a saját régiódón kívül is
- Töröld az `unlaunch-installer.dsi` fájlt az SD kártyádról

:::
