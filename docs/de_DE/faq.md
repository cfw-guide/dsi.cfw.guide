# Häufig gestellte Fragen

## Sollte ich ein Systemupdate durchführen?

It is **not** recommended to update your DSi unless you know there are purchased DSiWare. Während es immer noch möglich ist, dieser Anleitung zu folgen, wenn du dies tust, der einzige Vorteil zum Aktualisieren ist die Möglichkeit, auf den Nintendo DSi Shop zuzugreifen, um bereits gekaufte Titel erneut herunterzuladen. Alle anderen Vorteile, wie die Facebook-Integration in die Nintendo DSi Kamera-Anwendung, sind nicht mehr verwendbar oder nicht signifikant genug, um die Nachteile zu rechtfertigen:

- Installing System Updates is known to occasionally **brick** consoles, with roughly the same frequency as when installing Unlaunch
- Ältere Exploits können nicht mehr verwendet werden, was erforderlich sein kann, wenn du die empfohlenen Exploits nicht nutzen kannst
- Die Kompatibilität mit Flashcard wird verringert, dies wird jedoch umgangen, wenn Sie Unstart installieren

## Was ist der beste Exploit?

Das Unlaunch ist insgesamt der beste Exploit für den DSi, wobei der einzige Nachteil ist, dass es ein geringes Brick-Risiko bei der Installation gibt. Im Allgemeinen wird empfohlen, Memory Pit zum Installieren von Unlaunch zu verwenden. Wenn du Risiken vermeiden willst, empfiehlt es sich stattdessen Flipnote Lenny zu verwenden, da es weniger Probleme im Homebrew als Memory Pit hat, während es genauso sicher und einfach zu entfernen ist. Unten ist eine Liste der Vor- und Nachteile jedes Exploits:

### Memory Pit

Vorteile:

- Schnell und einfach zu benutzen
- Keine Gefahr der Konsole zu beschädigen, die Deinstallation ist so einfach wie das Entfernen der SD-Datei oder das Löschen einer Datei
- Kompatibel mit allen DSi Konsolen, es sei denn, sie haben eine defekte Kamera und haben das Kamera-Tutorial nicht abgeschlossen

Nachteile:

- Erfordert das Laden der DSi Kamera Anwendung jedes Mal, wenn du auf Homebrew zugreifen möchtest
- Inkompatibel mit bestimmten DSi Modus Titeln und Homebrew, da WRAM nur für die ARM7 CPU geöffnet ist
- Der Zugriff auf Slot-1 (die DS Game Card) ist im Homebrew gesperrt
- Der Zugriff auf das DSP ist blockiert, was zu schlechterem Ton in GBARunner2 führt
- Fotos auf der SD-Karte können nicht in der DSi Kamera Anwendung angezeigt werden, während Memory Pit installiert ist, da dies der Auslöser für den Exploit ist
  - The only way to view SD card photos while Memory Pit is installed, is to launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap (v0.61.3 or later)

### stylehax

Vorteile:

- Bessere Kompatibilität mit DSi-Modus-Titeln und Homebrew als Memory Pit
- Einfach in der Handhabung
- Keine Gefahr der Beschädigung der Konsole
- Nützlich auf Konsolen mit kaputter Kamera
- Besserer Ton in GBARunner2

Nachteile:

- Benötigt Internetzugriff
- Erfordert das Laden des DSi Browsers jedes Mal, wenn du auf Homebrew zugreifen möchtest, etwas mehr Zeitaufwand als Memory Pit
- Der Zugriff auf Slot-1 (die DS Game Card) ist im Homebrew gesperrt

### Flipnote Lenny

Vorteile:

- Bessere Kompatibilität mit DSi-Modus-Titeln und Homebrew als Memory Pit
- Keine Gefahr der Konsole zu beschädigen, die Deinstallation ist so einfach wie das Entfernen der SD-Datei oder das Löschen einer Datei
- Nützlich auf Konsolen mit kaputter Kamera
- Besserer Ton in GBARunner2

Nachteile:

- Erfordert das Laden von Flipnote Studio jedes Mal, wenn Sie auf Homebrew zugreifen möchten, etwas mehr Zeitaufwand als Memory Pit
- Der Zugriff auf Slot-1 (die DS Game Card) ist im Homebrew gesperrt

### Unlaunch

Vorteile:

- Ermöglicht das Laden von Homebrew und DSiWare beim Systemstart mit optionalen Tastaturkürzel
- Voller Zugriff auf das System ohne Einschränkungen, einschließlich:
  - Zugang zu Slot-1 ermöglicht das Dumpen von Spielkarten und das Laden inkompatibler Flashkarten
  - Besserer Ton in GBARunner2
- Entfernt Regionalsperren auf DSi-Verbesserung/Exklusive Spielkarten
- Schutz vor den meisten Möglichkeiten, die ein DSi kaputt machen könnte
- DSi-Verbeserte Spiele können im DSi Modus ohne Spender-ROM ausgeführt werden
- Altes Homebrew kann über nds-bootstrap-hb ausgeführt werden

Nachteile:

- Very minor risk of **bricking** the console when installing
- Another, slightly higher, risk of bricking if you decide to [uninstall it](uninstalling-unlaunch.html)
- Nicht kompatibel mit Entwicklungskonsolen

## Wird die Funktionalität durch Modifizierung meines Systems verloren?

Wenn Sie Flipnote Lenny oder unlaunch installiert haben, gehen keine Funktionen verloren. If you use Memory Pit, you will be unable to view photos on the SD card using the DSi Camera, unless you launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap.

- To regain the ability to view your SD card photos when launching the DSi Camera from the DSi Menu, install Unlaunch or switch to a different exploit, then delete Memory Pit's `pit.bin` file
  - If `tip.bin` exists in the same folder, rename it back to `pit.bin`

## Wie Spiele ich Nintendo DS Spielkarten-Dumps?

Das Spielen von Spielkarten-Dumps auf der Konsole benötigt die Nutzung einer Flashcard oder von nds-bootsstrap, ein Programm, was Spiele von der SD-Karte spielen lässt, indem es Slot-1 Reads umleitet und darauf schreibt.

- Mit TWiLight Menu++ können Sie auf Ihrer SD-Karte ROM-Dateien finden, die mit nds-bootstrap abgespielt werden können. Die Vorteile von TWiLight Menu++ sind ein Cheatmenü, in-Game Einstellungen und ausweichen von Beschränkungen, die Forwarder auslösen. Mit anderen Worten, du kannst per Drag-and-drop deine ROM Dateien direkt und ohne Setup starten. Es gibt keine Titelbegrenzung von 39, weder von hiyaCFW oder Unlauch und es gibt keine Beschränkung von freiem Speicherplatz auf der SD-Karte
- hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) guide on the DS-Homebrew Wiki, but it has some limitations. Dann gibt es aber eine feste Beschränkung von 39 Speilen und forwarder sind schwerer zu erstellen als TWiLight Menu++ zu nutzen
  - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## Wie kann ich mein Homebrew aktualisieren?

- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](installing-unlaunch.html) page
  - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card from the [updated release](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
  - Wenn du TWiLight Menu++ nutzt, ist es sehr wahrscheinlich, dass die neueste nds-bootstrap Version bei TWiLight Menü++ mit eingeschlossen ist
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

Anderes Homebrew könnte andere Methoden zum Aktualisieren nutzen.

## Ich bin neu oder würde gerne meine Einstellungen neu machen. Wo fange ich an?

- Wenn du deine Konsole noch nicht modfiziert hast oder Unlaunch auf deinem System updaten willst, empfehlen wir dir, am Anfang der Anleitung zu starten und durch alle Seiten zu lesen. Stelle sicher, dass du alles auf der Startseite gelesen hast
- If you have the latest version Unlaunch, follow the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) to set up TWiLight Menu++ on your system

## Wie kann ich die Kindersicherung enfernen?

- The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls

## Kann ich die Region meines Nintendo DSi's ändern?

Ja, es gibt ein paar verschiedene Methoden, je nachdem, was Sie ändern möchten:

- Die sicherste und einfachste Methode ist, einfach TWiLight Menu++ zu installieren, es kann jede offizielle Sprache ohne NAND-Modifizierungen nutzen
- If you want to actually change the system region and are using hiyaCFW, open the config menu, and change the region setting (not possible with CHN and KOR NANDs)
  - If this breaks touch input, revert the region setting back to the original, and you can instead use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) for Asian DSi systems. For American DSi systems use [this version of hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## Was ist mit Lazy DSi Downloader passiert? Wie installiere ich CFW ohne sie?

Lazy DSi Downloader war ein Programm, mit dem du den manuellen Einrichtungsprozess überspringen kannst, indem du die notwendigen Dateien und Ordner auf deiner SD-Karte herunterlädst. Aufgrund der Art und Weise, wie es programmiert und verteilt wurde, stießen viele Benutzer auf verschiedene Probleme und mussten schließlich das Handbuch einrichten, da es schneller und/oder einfacher war, als alles zu reparieren, was das Problem verursacht hat.

To avoid more users encountering these issues, we no longer recommend using Lazy DSi Downloader, and instead [doing the manual setup](get-started.html) is the recommended way to go.

- Wenn du von einem Dritten mit dieser Anleitung verknüpft wurdest, der empfohlen hat, Lazy DSi Downloader zu benutzen, die Anweisungen, denen Sie folgen waren höchstwahrscheinlich veraltet. Nutze diese Anleitung daher stattdessen, weil sie dauerhaft von den Entwicklern dieser Projekte aufrechterhalten wird.

## Welche Art von SD-Karte sollte ich verwenden?

- Du solltest eine SD-Karte von einer vertrauenswürdigen Marke kaufen
- Entweder eine normal große SD-Karte oder eine microSD-Karte mit einem Adapter funktionieren
- Jede Speichergröße von 1 GB bis 2 TB funktioniert. Für normale Nutzung sind 8 GB aber genügend
  - Einige Software, wie hiyaCFW, könnte stufenweise längere Ladezeiten mit größeren Speicherkapazitäten haben
- Geschwindigkeiten Klasse 8 oder höher sind empfohlen

## Kann ich meine DSi SD-Karte mit anderen Systemen verwenden?

Im Allgemeinen ja, mit zwei Ausnahmen:

- hiyaCFW wird nur auf dem System funktionieren, für das es eingerichtet wurde
- Selbst wenn du nds-bootstrap oder eine Flashcard nutzt, werden Freundescodes in Online Nintendo-DS Spielen zurückgesetzt, wenn du versuchst mit einer anderen Konsole Online zu gehen

## Wie wechsele ich nach dem Homebrew auf eine neue SD-Karte?

Format your new SD card using the [SD Card Setup](sd-card-setup.html) instructions, then simply move your data from the old SD card to the new one.

## Kann ich nach dem Einrichten von Homebrew mein System normal ohne SD-Karte verwenden?

Ja. Wenn Sie Unstart nicht installiert haben, bleibt Ihr System vollständig unverändert. If you _did_ install Unlaunch, you may need to [configure Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) to automatically boot the original DSi Menu under specified conditions.

## The [Unlaunch page](https://problemkaputt.de/unlaunch.htm) says that version 2.0 is not known to be safe. Sollte ich die vorherige Version stattdessen nutzen?

The Unlaunch page has not been updated since version 2.0 was released in 2019. Die große Mehrheit der Benutzer haben keine Probleme mit dieser Version erfahren, also ist sie wahrscheinlich sicher.

## Wie führe ich gedumpte DSiWare aus?

Die empfohlene Methode ist es, sie einfach mit TWiLight-Menü + zu starten, da die einfache Zieh- und Drop-Methode keine willkürliche Begrenzung gibt. Wenn nds-bootstrap als Start-Methode gesetzt wird, erhält es auch die Vorteile von Cheats und Screenshots, sowie alle anderen Vorteile, die das Ingame-Menü bietet.

However, for the few titles that are incompatible, you can use [NTM](https://github.com/Epicpkmn11/NTM/releases) to install them on either internal memory or [hiyaCFW's SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing). Zusätzlich zu den oben genannten Vorteilen gibt es auch eine Begrenzung von 39 Titeln, die nicht größer als 128 MiB/1.024 Blöcke sind. Für SysNAND besteht auch ein sehr geringes Risiko, das System beim Schreiben an den internen NAND zu bestechen.
