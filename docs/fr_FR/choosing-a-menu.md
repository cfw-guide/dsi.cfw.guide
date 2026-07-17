# Choix du menu

Trois menus sont disponibles pour lancer les jeux. Choisissez celui qui vous convient le mieux.

- **If you are unsure** (or cannot decide) which one to use, then choose [**TW**i**L**ight Menu++](#twilight-menu).
- If you are only looking to run a DSi-Compatible Flashcart that now shows the "An Error Occurred" screen, choose [Unlaunch Standalone](#unlaunch-standalone).

## [hiyaCFW](installing-unlaunch-and-hiyacfw.html)

Le premier et le seul firmware personnalisé qui redirige l'accès NAND vers la carte SD, permettant ainsi d'exécuter le menu système de la DSi et les applications systèmes et DSiWare à partir de la carte SD au lieu de la mémoire du système.

Installez ce menu si vous souhaitez une utilisation aussi fidèle que possible au menu système.

### Avantages

- Le menu Nintendo DSi d'origine est utilisé. Il ne s'agit pas d'une reproduction !
- Games that are launched originally on DS(i) game cards can be launched from the DSi Menu after [creating forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders) for them, and DSiWare can be installed with [NTM](https://github.com/Epicpkmn11/NTM/releases).

### Inconvénients

- As this requires Unlaunch, the console's NAND will be written, so there's a small chance to brick your console!
- Limité au lancement de jeux DS ou DSi. Pour lancer des jeux de consoles plus anciennes, vous devrez créer des redirections pour les applications qui émulent ces consoles.
- Creating forwarders for games can be time-consuming when compared to just adding them to the SD card.
- Limité à 39 icônes à l'écran en raison du fonctionnement du menu DSi d'origine.
- L'interface du menu n'est pas personnalisable.

## [**TW**i**L**ight Menu++](installing-twilight-menu.html)

Développé pour remplacer le menu Nintendo DSi d'origine par un menu plus à jour, qui permet d'exécuter d'autres applications homebrew, des jeux DS commerciaux, des émulateurs pour diverses consoles plus anciennes, et plus encore.

### Avantages

- Intègre des recréations presque fidèles du menu DSi, du menu HOME de la 3DS et des interfaces de certains linkers.
- La plupart des interfaces peuvent être personnalisées en installant des thèmes utilisateur.
- Les jeux DS, DSi et GBA peuvent être lancés.
- Games from older consoles prior to the GBA can be launched by [installing an add-on.](https://wiki.ds-homebrew.com/twilightmenu/installing-addons)
- Peut être installé à côté de hiyaCFW.

### Inconvénients

- The DSi Menu UI has a few inaccuracies, such as the music being shortened and in low quality (can be worked around by installing an add-on), and different scrolling when dragging the scroll bar.
- The Wood UI is missing some features, such as the start menu.
- Can take a few seconds to switch between menus, such as the ROM selection menu, the DS Classic Menu, and/or Settings menu.

## [AKMenu-Next](installing-akmenu-next.html)

This is an upgraded version of the original Wood/akmenu flashcard menu, made to be compatible with the DSi SD card.

### Avantages

- The fastest and most lightweight menu available.
- No features are missing from the menu (ex. start menu and graphical info/settings menu) when compared to the Wood UI from TWLMenu++.
- Customizeable by installing user-made custom themes compatible with Wood R4 & AKAIO.
- Games from older consoles including GBA can be launched by [installing a plugin.](https://coderkei.github.io/akmenu-next-docs/guides/plugins/)
- Peut être installé à côté de hiyaCFW.

### Inconvénients

- Does not support DSiWare.
- Music and/or sound effects cannot be used.
- Does not auto-set a donor ROM in order for DSi-Enhanced games to be played in DSi mode without Unlaunch, and would have to be set manually.

## [Unlaunch Standalone](installing-unlaunch-standalone.html)

This does not install a custom menu and relies on the stock DSi Menu, but installing Unlaunch unlocks the DSi including allowing the use of previously blocked flashcarts

### Avantages

- Allows for previously blocked DSi-Compatible flashcarts to work (prevents "An Error Occurred" screen for applicable flashcarts)
- Allows for other menus to be installed in the future without requiring a prior exploit
- Still uses stock DSi Menu

### Inconvénients

- Does not install a menu with game loader capabilities
- No additional customisation options
