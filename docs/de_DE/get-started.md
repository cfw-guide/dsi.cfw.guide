---
title: "Erste Schritte"
---

Die Hauptanwendung, die Sie in dieser Anleitung installiert haben, ist **TW**i**L**ight Menu++, das ist ein Upgrade/Ersatz für das Nintendo DSi Menü, das es erlaubt, andere Homebrew Anwendungen, Einzelhandel DS Spiele, Emulatoren für verschiedene ältere Systeme und vieles mehr.

Wir beginnen mit dem Herunterladen und einigen anderen Homebrew Tool(s) in Vorbereitung für die Exploit Schritte.

## Anforderungen

- Eine Möglichkeit, heruntergeladene Dateien auf die SD-Karte zu kopieren
- Eine Anwendung, die Archive extrahieren kann, wie [7-Zip](https://www.7-zip.org/) (Windows), [Der Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS) oder [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
    - Wir empfehlen, nicht WinRAR zu nutzen, da es bekannt ist, die Dateien zu beschädigen
    - If you're using Windows 11, we also advise you to not use it's built-in extractor (Windows Explorer), as it'll cause an error saying that the filename is too long or not valid

## Abschnitt I - Vorbereitung

::: warning

Stelle sicher, dass deine SD-Karte [korrekt formatiert ist](sd-card-setup.html).

:::

1. Stecke deine SD Karte in dein Gerät
1. Download the latest release of [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
    - If it does not download, open the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest), and download `TWiLightMenu-DSi.7z`
1. Lade dir die neueste Version von [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds) herunter
1. Open `TWiLightMenu-DSi.7z`
    - If you're using Windows, ensure 7-Zip is installed, then follow these steps:
        1. Right-click on `TWiLightMenu-DSi.7z`
        1. If using Windows 11, click `Show more options`
        1. Hover over `7-zip`
        1. Click `Open archive`
1. Extrahiere den `nds` Ordner von `TWiLightMenu-DSi.7z` zum Stammverzeichnis der SD-Karte
1. Extrahiere die `BOOT.NDS` Datei von `TWiLightMenu-DSi.7z` zum Stammverzeichnis der SD-Karte
1. Close `TWiLightMenu-DSi.7z`
1. Kopiere die Datei `dumpTool.nds` in das Stammverzeichnis deiner SD-Karte

::: tip

Bist du dir unsicher was das SD-Karten "Stammverzeichnis" ist? [See this image](/assets/images/sdroot/en_US.png)

:::


## Abschnitt II - Den Exploit starten

Von hier aus haben Sie drei Möglichkeiten, mit einem geringfügigen Unterschied in dem, was jede beinhaltet.


### Installiere Unlaunch mit Memory pit

Memory Pit ist ein Exploit, der die DSi Kamera nutzt und mit allen Firmware-Versionen kompatibel ist. Optional kann dieser Exploit genutzt werden, um Unlaunch zu installieren, einen Bootcode Exploit, der die volle Kontrolle der Konsole beim Booten ermöglicht.

Da Memory Pit in der Homebrew-Kompatibilität etwas eingeschränkt ist, wird empfohlen, Unlaunch zu installieren, anstatt Memory Pit alleine zu verwenden. Da dies die einfachste Methode ist, Unlaunch zu installieren, ist dies der empfohlene Pfad. Es besteht jedoch ein sehr geringes Risiko, dass bei der Installation von Unlaunch Ihre Konsole **kaputt** zu mach also, wenn dies dir Angst bereitet, siehe die alternative Methode unten.

::: tip

Weiter zu [Den Exploit ausführen](launching-the-exploit.html)

:::


### stylehax

stylehax ist ein Exploit, der die DSi Browser Anwendung nutzt und kann als Alternative zu Memory Pit für die Installation von Unlaunch (oben erklärt) verwendet werden, falls Ihr DSi eine defekte Kamera hat.

Für eine unlaunch-freie Erfahrung wird dieser Exploit empfohlen, da die Verwendung von Memory Pit Probleme in einigen Spielen und Homebrew verursacht.

::: tip

Weiter zu [Start der Exploit (stylehax)](launching-the-browser-exploit.html)

:::


### Flipnote Lenny

Flipnote Lenny ist ein Exploit, der die Flipnote Studio Anwendung nutzt.

Wenn Sie Flipnote Studio haben und nicht vorhaben, Unlaunch zu installieren (oben erklärt), wird dieser Exploit aus dem gleichen Grund wie stylehax empfohlen.

Sie können Unlaunch später immer installieren, wenn Sie sich später dafür entscheiden.

::: tip

Weiter zu [Exploit starten (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

Für einen detaillierteren Vor- und Nachteile Vergleich der verfügbaren Exploits schauen Sie bitte auf die [Welche ist der beste Exploit?](faq.html#which-is-the-best-exploit) FAQ.
