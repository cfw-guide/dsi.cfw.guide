# Початок

We'll begin with downloading some homebrew tool(s), in preparation for the exploit steps.

## Вимоги

- Спосіб копіювання завантажених файлів на SD карту
- An application that can extract archives, such as [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), or [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
  - Радимо вам не користуватися WinRAR, оскільки це, як відомо, може поламати деякі речі
  - Якщо ви використовуєте Windows 11, ми також радимо не використовувати його вбудований архіватор (Файловий провідник Windows), оскільки це спричинить помилку, що ім'я файлу задовге або неприпустиме

## Розділ I - Підготовка

::: warning

Ensure your SD card is [formatted correctly](sd-card-setup.html).

:::

1. Вставте SD карту у ваш комп'ютер
2. Download the latest release of [dumpTool](https://dsi.cfw.guide/assets/files/dumptool/boot.nds) as `boot.nds`
3. Copy the `boot.nds` file to the root of your SD card

::: tip

Не знаєте, що таке "коренева тека"? [See this image](/assets/images/sdroot/en_US.png)

:::

## Section II - Checking if Unlaunch is already installed

Unlaunch is a bootcode exploit which gets installed onto the DSi console itself, allowing full control of the console on boot, and as a result, allows homebrew applications full access to the hardware without restrictions from DSi system apps or DSiWare titles.

Some DSi consoles that are sold as used/refurbished might already have Unlaunch installed.

To check, press the <kbd class="face">POWER</kbd> button and immediately hold the <kbd class="face">A</kbd> + <kbd class="face">B</kbd> buttons.

- If you see a menu which shows `Nocash Unlaunch.dsi` on the top screen, this means Unlaunch is already installed, and you can continue with [dumping the NAND](dumping-nand.html).
- If the DSi starts normally with the DSi Menu appearing, proceed with Section III.

## Section III - Memory Pit

Memory Pit is an exploit utilizing the DSi Camera, compatible with all firmware versions.

If using the exploit without installing Unlaunch, compatibility with some homebrews could be limited. If you encounter issues with DSi homebrews, you can return to this guide and set up an [alternate exploit](alternate-exploits.html) instead.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::
