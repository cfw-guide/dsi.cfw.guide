# Початок

The main homebrew application this guide has you install is **TW**i**L**ight Menu++, which is an upgrade/replacement to the Nintendo DSi Menu that allows running other homebrew applications, retail DS games, emulators for various older systems, and more.

Ну а почнемо ми з завантаження її разом з іншими доморобними інструментами, готуючись до виконання експлойту.

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
2. Download the latest release of [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
   - If it does not download, open the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest), and download `TWiLightMenu-DSi.7z`
3. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
4. Open `TWiLightMenu-DSi.7z`
   - Якщо ви використовуєте Windows, переконайтеся, що 7-Zip встановлено, тоді виконайте наступні дії:
     1. Right-click on `TWiLightMenu-DSi.7z`
     2. If using Windows 11, click `Show more options`
     3. Hover over `7-zip`
     4. Click `Open archive`
5. Copy the `_nds` folder from `TWiLightMenu-DSi.7z` to the root of your SD card
6. Copy the `BOOT.NDS` file from `TWiLightMenu-DSi.7z` to the root of your SD card
7. Close `TWiLightMenu-DSi.7z`
8. Copy the `dumpTool.nds` file to the root of your SD card

::: tip

Не знаєте, що таке "коренева тека"? [See this image](/assets/images/sdroot/en_US.png)

:::

## Розділ ІІ - Вибір експлойту

На цьому етапі у вас є три варіанти, з незначними різницями у процесі встановлення.

### Встановлення Unlaunch через Memory Pit

Memory Pit - експлойт, що використовує програму DSi Camera; також сумісний з усіма версіями прошивки. За бажанням, цей експлойт може бути використаний для встановлення Unlaunch - ще одного експлойту, але вже для завантажувального коду. Ця програма дає повний контроль над консоллю при завантаженні.

Оскільки Memory Pit дещо обмежений у сумісності з доморобками, рекомендується встановити Unlaunch замість постійного використання Memory Pit. Через те, що це - найпростіший метод встановлення Unlaunch, це рекомендований шлях. However, there is a very minor risk of **bricking** your console when installing Unlaunch, so if this is a concern, see the alternate method below.

::: tip

Continue to [Launching the Exploit](launching-the-exploit.html)

:::

### stylehax

stylehax - це експлойт програми DSi Browser. Її можна використовувати як альтернативу Memory Pit для встановлення Unlaunch (описано вище), якщо на вашому DSi зламана камера.

Для досвіду без Unlaunch, рекомендується використовувати саме цей експлойт, бо Memory Pit викликає проблеми в деяких іграх та доморобках.

::: tip

Continue to [Launching the Exploit (stylehax)](launching-the-browser-exploit.html)

:::

### Flipnote Lenny

Flipnote Lenny - це експлойт, що використовує програму Flipnote Studio.

Якщо у вас є Flipnote Studio та ви не плануєте встановлювати Unlaunch (описано вище), цей експлойт рекомендується з тієї ж причини, що й stylehax.

Ви завжди зможете встановити Unlaunch пізніше, якщо ви вирішите, що це вам потрібно.

::: tip

Continue to [Launching the Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

For a more detailed pros and cons comparision of the available exploits, please see the [Which is the best exploit?](faq.html#which-is-the-best-exploit) FAQ.
