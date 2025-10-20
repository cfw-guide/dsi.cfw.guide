# Rozpocznij

We'll begin with downloading some homebrew tool(s), in preparation for the exploit steps.

## Wymagania

- Możliwość kopiowania pobranych plików na kartę SD
- Aplikacja, która może rozpakowywać archiwa, takie jak [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS) lub [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
  - Zalecamy nie używać WinRAR, bo jest znany z psucia rzeczy
  - Jeżeli używasz Windows 11, to zalecamy też nie używać wbudowanej rozpakowarki (Windows Explorer), bo może spowodować błąd mówiący, że nazwa pliku jest zbyt długa albo nieprawidłowa

## Sekcja I - Przygotowanie

::: warning

Upewnij się, że twoja karta SD jest [poprawnie sformatowana](sd-card-setup.html).

:::

1. Włóż swoją kartę SD to twojego komputera
2. Download the latest release of [dumpTool](https://dsi.cfw.guide/assets/files/dumptool/boot.nds) as `boot.nds`
3. Copy the `boot.nds` file to the root of your SD card

::: tip

Nie jesteś pewny czym jest "początek" karty SD? [Sprawdź to zdjęcie](/assets/images/sdroot/pl_PL.png)

:::

## Sekcja II - Sprawdzanie, czy Unlaunch jest już zainstalowane

Unlaunch is a bootcode exploit which gets installed onto the DSi console itself, allowing full control of the console on boot, and as a result, allows homebrew applications full access to the hardware without restrictions from DSi system apps or DSiWare titles.

Niektóre konsole DSi, które są sprzedawane jako używane/odnowione, mogą mieć już zainstalowanego Unlaunch.

To check, press the <kbd class="face">POWER</kbd> button and immediately hold the <kbd class="face">A</kbd> + <kbd class="face">B</kbd> buttons.

- Jeżeli zobaczysz menu, które pokazuje `Nocash Unlaunch.dsi` na górnym ekranie, to oznacza, że Unlaunch jest już zainstalowany i możesz kontynuować z [zrzucaniem NAND-u](dumping-nand.html).
- Jeżeli DSi uruchamia się normalnie z pokazującym się DSi Menu, kontynuuj do Sekcji III.

## Section III - Memory Pit

Memory Pit is an exploit utilizing the DSi Camera, compatible with all firmware versions.

If using the exploit without installing Unlaunch, compatibility with some homebrews could be limited. If you encounter issues with DSi homebrews, you can return to this guide and set up an [alternate exploit](alternate-exploits.html) instead.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::
