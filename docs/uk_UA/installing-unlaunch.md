# Встановлення Unlaunch

::: warning

Якщо у вас немає доступу до ПК, або якщо ваш ПК працює на ChromeOS, то, будь ласка, не встановлюйте Unlaunch. Щоб виправити деякі проблеми, які можуть виникнути після встановлення Unlaunch, потрібен ПК (Windows, Linux, чи macOS).

:::

::: danger

If you have not yet done so, please follow [Dumping NAND](dumping-nand.html). Хоча шанси дуже малі, Unlaunch може випадково зацеглювати вашу Nintendo DSi. A NAND backup + [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod) would allow you to restore this backup, provided you know how to solder.

:::

::: warning

Переконайтеся, що ваша консоль заряджена під час виконання цього процесу. Раптова втрата енергії може спричинити серйозну шкоду.

:::

::: warning

Unlaunch не сумісний з консолями розробки Nintendo DSi.

:::

## Розділ I - Налаштування SD карти

1. Download the latest version of [Unlaunch](https://problemkaputt.de/unlaunch.zip)
   - [Mirror link](https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip), if the above doesn't work
2. Extract `UNLAUNCH.DSI` from the `unlaunch.zip` archive and place it anywhere on your SD card
3. Переконайтеся, що у вас все ще є TWiLight Menu++ на вашій SD карті
   - If you are unsure, follow the instructions from the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi)

## Розділ II - Встановлення/Оновлення Unlaunch

1. Відкрийте TWiLight Menu++
   - If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the [exploit that you used](launching-the-exploit.html)
   - If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the option labeled `TWiLight Menu++`
   - If several options are labeled `TWiLight Menu++`, select the option in where `BOOT.NDS` is shown at the end of the path on the bottom screen
     - This happens because you are running an older version of TWiLight Menu++, unless you're doing it on purpose, is suggested that you [update your installation](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
2. Запустіть Налаштування TWiLight Menu++
   - If you haven't changed your theme, press `SELECT` and touch the small DS icon on the bottom of the touch screen. В іншому випадку перегляньте Мануал TWiLight Menu++
3. Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the `Unlaunch settings` page
4. If you want to change Unlaunch's background image, select `Background` and choose the one you want
   - If you want to create your own Unlaunch background, see the [DS-Homebrew Wiki page](https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds)
5. Вийдіть з Налаштування TWiLight Menu++
6. In the file navigation menu, launch `Unlaunch DSi Installer`
   - If you see two black screens after launching, download [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start `Unlaunch.dsi`\
     This method does not enable Unlaunch to use custom patches and background
7. Оберіть опцію "install now"
   - If Unlaunch freezes at `ERROR: MISMATCH IN FAT COPIES`, please take a look at the [Troubleshooting](troubleshooting.html) page
8. Коли завершено, перезавантажте вашу консоль

Якщо при ввімкненні Nintendo DSi ви бачите Меню Unlaunch, то ви успішно модифікували свою консоль.

- If you see a black screen, please take a look at the [Troubleshooting](troubleshooting.html) page

## Розділ ІІІ - Конфігурація Unlaunch

Зараз, при ввімкненні ігрової консолі, Unlaunch запускає своє Меню, але це може бути змінено на що завгодно.

1. Увімкніть вашу консоль, утримуючи <kbd class="face">A</kbd> та <kbd class="face">B</kbd>
   - Ця комбінація має запустити Меню Unlaunch
   - If nothing is listed, or if only `TWiLight Menu++` isn't listed (even after scrolling down), then you'll need to [reformat the SD card](sd-card-setup.html)
2. Navigate to `OPTIONS`, and look at the available options
   - Комбінація <kbd class="face">A</kbd> + <kbd class="face">B</kbd> вже закодована як завантажувач Меню Unlaunch, тож ви не зможете змінити її
   - The `NO BUTTON` and `BUTTON A / B / X / Y` options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. Ви можете вибрати будь-який додаток DSiWare, доморобку, картридж з Slot-1, wifiboot або Меню Unlaunch's
     - For TWiLight Menu++, select  `TWiLight Menu++`
     - For the original DSi Menu, select `Launcher`
   - `LOAD ERROR` is what your DSi will load if loading what you have set fails, such as the SD card not being inserted
3. Select `SAVE & EXIT` to save your settings, then turn off your DSi

## Розділ IV - Очищення вашої SD карти

::: tip

Цей розділ є необов'язковим і служить лише як спосіб очистити вже непотрібні вам файли з SD карти.

:::

:::: tabs

:::tab default Memory Pit

- Delete the `sd:/private/ds/app/484E494A/pit.bin` file from your SD card
- Rename `tip.bin` back to `pit.bin`, and leave it intact
- You can now restore the `DCIM` folder that was on the root of your SD card
- Delete the `UNLAUNCH.DSI` file from your SD card

:::

:::tab Flipnote Lenny

- Delete the `800031_104784BAB6B57_000.ppm` and `T00031_1038C2A757B77_000.ppm` files from inside the following folders:
  - `sd:/private/ds/app/4B47554A/001` (Japan)
  - `sd:/private/ds/app/4B475545/001` (USA)
  - `sd:/private/ds/app/4B475556/001` (Europe/Australia)
  - Ви також можете видалити усі теки інших регіонів, окрім ваших
- Delete the `UNLAUNCH.DSI` file from your SD card

:::
