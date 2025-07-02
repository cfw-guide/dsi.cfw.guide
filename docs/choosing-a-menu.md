# Choosing a Menu

There are three menus available in order to launch games. Choose whichever one that suits your needs.

## [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing)

The first and only custom firmware which redirects NAND access to the SD card, and as a result, runs the DSi system menu along with system applications and DSiWare from the SD card instead of the system memory.

Install this if you're looking for an experience which is close to stock as possible.

### Before installing

1. Download [GodMode9**i**](https://github.com/DS-Homebrew/GodMode9i/releases/latest/download/GodMode9i.dsi)
1. Copy the `GodMode9i.dsi` file to the root of your SD card
1. Rename `GodMode9i.dsi` to `boot.nds`
1. Install Unlaunch by following the guide linked at the bottom of this page

### Pros

- The original Nintendo DSi Menu is used. No recreation here!
- Games that are launched originally on DS(i) game cards can be launched from the DSi Menu after [creating forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders) for them.

### Cons

- Requires Unlaunch to be installed in order to use.
- Restricted to only launching DS or DSi games. To launch games from prior consoles, you'll need to create forwarders for apps which emulate those consoles.
- Limited to 39 icons on-screen due to how the original DSi Menu works.
- Menu UI is not customizeable.

## [**TW**i**L**ight Menu++](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

This is developed an upgrade/replacement to the original Nintendo DSi Menu that allows running other homebrew applications, retail DS games, emulators for various older systems, and more.

### Pros

- Includes near-faithful recreations of the DSi Menu, the 3DS HOME Menu, and some flashcard UIs.
- Most UIs are customizeable by installing user-made custom themes.
- Games from the DS, DSi, and GBA can be launched.
- Games from older consoles prior to the GBA can be launched by installing an add-on.
- Unlaunch is not required to use this.
- The background in the Unlaunch menu can be changed, and when installing Unlaunch, the DSi Menu music will be re-enabled by default if you start `Launcher` from the menu.
- Can be installed alongside hiyaCFW.

### Cons

- The DSi Menu UI has a few inaccuracies, such as the music being shortened and in low quality, different scrolling when dragging the scroll bar, and different transparency on the edges of the username text.
- The Wood UI theme is missing some features, such as the start menu.
- Can take a few seconds to switch between menus, such as the ROM selection menu, the DS Classic Menu, and/or Settings menu.

## [akmenu-next](https://sanrax.github.io/flashcart-guides/tutorials/akmenu-next/#__tabbed_1_2)

This is an upgraded version of the original Wood/akmenu flashcard menu, made to be compatible with the DSi SD card.

### Pros

- The fastest and most lightweight menu available.
- No features are missing from the menu (ex. start menu and graphical info/settings menu) when compared to the Wood UI menu from TWLMenu++.
- Customizeable by installing user-made custom themes.
- Unlaunch is not required to use this.
- Can be installed alongside hiyaCFW.

### Cons

- Restricted to only launching DS or DSi games. To launch games from prior consoles, you'll need to install emulators.
- Music and/or sound effects cannot be used.
- Does not auto-set a donor ROM in order for DSi-Enhanced games to be played in DSi mode without Unlaunch, and would have to be set manually

## After installation

Run the [exploit that you used](launching-the-exploit.html) to start dumpTool, and the installed menu (either TWiLight Menu++ or akmenu-next in this case) will then start.
- If you're using TWiLight Menu++ for the first time, it will ask you to select your language and region. These do not need to match your console's language or region so set them to whichever you prefer.

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
