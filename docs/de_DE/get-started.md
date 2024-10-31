# Erste Schritte

The main homebrew application this guide has you install is **TW**i**L**ight Menu++, which is an upgrade/replacement to the Nintendo DSi Menu that allows running other homebrew applications, retail DS games, emulators for various older systems, and more.

Wir beginnen mit dem Herunterladen und einigen anderen Homebrew Tool(s) in Vorbereitung für die Exploit Schritte.

## Anforderungen

- Eine Möglichkeit, heruntergeladene Dateien auf die SD-Karte zu kopieren
- An application that can extract archives, such as [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), or [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
  - Wir empfehlen, nicht WinRAR zu nutzen, da es bekannt ist, die Dateien zu beschädigen
  - If you're using Windows 11, we also advise you to not use it's built-in extractor (Windows Explorer), as it'll cause an error saying that the filename is too long or not valid

## Abschnitt I - Vorbereitung

::: warning

Ensure your SD card is [formatted correctly](sd-card-setup.html).

:::

1. Stecke deine SD Karte in dein Gerät
2. Download the latest release of [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
   - If it does not download, open the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest), and download `TWiLightMenu-DSi.7z`
3. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
4. Open `TWiLightMenu-DSi.7z`
   - If you're using Windows, ensure 7-Zip is installed, then follow these steps:
     1. Right-click on `TWiLightMenu-DSi.7z`
     2. If using Windows 11, click `Show more options`
     3. Hover over `7-zip`
     4. Click `Open archive`
5. Copy the `_nds` folder from `TWiLightMenu-DSi.7z` to the root of your SD card
6. Copy the `BOOT.NDS` file from `TWiLightMenu-DSi.7z` to the root of your SD card
7. Close `TWiLightMenu-DSi.7z`
8. Copy the `dumpTool.nds` file to the root of your SD card

::: tip

Bist du dir unsicher was das SD-Karten "Stammverzeichnis" ist? [See this image](/assets/images/sdroot/en_US.png)

:::

## Abschnitt II - Den Exploit starten

Von hier aus haben Sie drei Möglichkeiten, mit einem geringfügigen Unterschied in dem, was jede beinhaltet.

### Installiere Unlaunch mit Memory pit

Memory Pit ist ein Exploit, der die DSi Kamera nutzt und mit allen Firmware-Versionen kompatibel ist. Optional kann dieser Exploit genutzt werden, um Unlaunch zu installieren, einen Bootcode Exploit, der die volle Kontrolle der Konsole beim Booten ermöglicht.

Da Memory Pit in der Homebrew-Kompatibilität etwas eingeschränkt ist, wird empfohlen, Unlaunch zu installieren, anstatt Memory Pit alleine zu verwenden. Da dies die einfachste Methode ist, Unlaunch zu installieren, ist dies der empfohlene Pfad. However, there is a very minor risk of **bricking** your console when installing Unlaunch, so if this is a concern, see the alternate method below.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::

### stylehax

stylehax ist ein Exploit, der die DSi Browser Anwendung nutzt und kann als Alternative zu Memory Pit für die Installation von Unlaunch (oben erklärt) verwendet werden, falls Ihr DSi eine defekte Kamera hat.

Für eine unlaunch-freie Erfahrung wird dieser Exploit empfohlen, da die Verwendung von Memory Pit Probleme in einigen Spielen und Homebrew verursacht.

::: tip

Continue to [Launching the Exploit (stylehax)](launching-the-browser-exploit.html)

:::

### Flipnote Lenny

Flipnote Lenny ist ein Exploit, der die Flipnote Studio Anwendung nutzt.

Wenn Sie Flipnote Studio haben und nicht vorhaben, Unlaunch zu installieren (oben erklärt), wird dieser Exploit aus dem gleichen Grund wie stylehax empfohlen.

Sie können Unlaunch später immer installieren, wenn Sie sich später dafür entscheiden.

::: tip

Continue to [Launching the Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

For a more detailed pros and cons comparision of the available exploits, please see the [Which is the best exploit?](faq.html#which-is-the-best-exploit) FAQ.
