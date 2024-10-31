# Відновлення резервної копії NAND

::: danger

УВАГА! This is _**dangerous**_. Навіть виконуючи ці кроки, ви все ще маєте шанс зацеглювати DSi, оскільки NAND має дуже низьку якість, особливо якщо ви прошиватимете її багато разів! Використовуйте цей посібник тільки в останню чергу!

:::

::: tip

Do not skip _anything_ on this page, any mistake greatly increases chance of bricking your DSi.

:::

По-перше, кілька більш безпечних альтернатив тому, чому ви хочете це зробити:

- Встановлення DSiWare можна зробити за допомогою hiyaCFW або TWiLight Menu++
- Recovering pictures can be done using [ninfs](https://github.com/ihaveamac/ninfs/releases), in combination with hiyaCFW or TWiLight Menu++ if you want them on console. Найновіша версія HiyaCFW Helper дозволяє копіювати ваші фотографії з вашого NAND у SDNAND під час конфігурації
- Відновлення конфігурації комбінацій кнопок в Unlaunch може бути зроблене в Меню Unlaunch, до якого можна потрапити, утримуючи <kbd class="face">A</kbd> + <kbd class="face">B</kbd> під час увімкнення консолі
- Завантаження в Unlaunch призводить до помилки? Вийміть SD карту і спробуйте знову запустити систему. Якщо це спрацювало, то це помилка з вашою SD картою та відновлення резервної копії NAND не виправить її
- "An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) on the DS-Homebrew Wiki for more information
- Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on [Discord](https://ds-homebrew.com/discord)
- Слід уникати видалення Unlaunch, будь то прошивкою NAND або за допомогою його деінсталятора, якщо це не є абсолютно необхідним. Ви можете встановити клавіші автозавантаження на «Launcher», і ваш DSi буде як зі заводу

Єдине, що вам слід робити з вашим NAND - це встановлення Unlaunch. Інакше використовуйте альтернативи.

## Вимоги

- Your NAND backup **from the same DSi**
- The latest release of [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Спосіб запуску доморобок з доступом до NAND, наприклад Unlaunch або Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), to check your NAND backup (Download the 'Windows gaming version')
  - macOS and Linux users can use [WINE](https://winehq.org) to run no$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Створення копії BIOS для використання в no$gba

1. Extract `dsibiosdumper.nds` from the `dsibiosdumper.zip` archive and place it anywhere on your SD card
2. Увімкніть вашу консоль, утримуючи <kbd class="face">A</kbd> та <kbd class="face">B</kbd>
   - Ця комбінація має запустити Меню Unlaunch
3. Запустіть dsibiosdumper з Меню Unlaunch
4. Натисніть <kbd class="face">А,</kbd> щоб скопіювати BIOS на SD карту
5. Натисніть <kbd>START</kbd>, щоб вийти з dsibiosdumper

## Перевірка резервної копії NAND

Дуже важливо перевірити, що ваша копія NAND працює перед спробою відновити її на консоль. Якщо no$gba показує помилку цеглювання, то скоріш за все ця копія зацеглює вашу консоль.

1. Extract `NO$GBA.EXE` from `no$gba-w.zip` to a folder on your computer
2. Copy your NAND backup to the folder you put `NO$GBA.EXE` in and rename it to `DSI-1.MMC`
3. Copy `bios7i.bin` and `bios9i.bin` to the folder you put `NO$GBA.EXE`, named `BIOSDSI7.ROM` and `BIOSDSI9.ROM`, respectively.
4. Run `NO$GBA.EXE`
5. Click `Options` > `Emulation Setup` to open the Emulation Setup window
6. Change `Reset/Startup Entrypoint` to `GBA/NDS BIOS (Nintendo logo)`
7. Change `NDS Mode/Colors` to `DSi (retail/16MB)`
8. Click `Save Now`
9. Launch any Nintendo DS ROM (`.nds` file)

Якщо no$gba завантажує меню DSi (або Меню Unlaunch), то сміливо переходьте до наступного розділу. If it shows any kind of error _**do not flash that backup**_!

## Видалення Unlaunch з резервної копії NAND (необов'язково)

Дотримуйтесь цього посібника, якщо ви створили резервну копію NAND після встановлення Unlaunch та ви хочете видалити Unlaunch з вашої консолі. If you are not trying to uninstall Unlaunch, you do **not** need to do this section.

1. Download the latest version of the [Unlaunch installer](https://problemkaputt.de/unlaunch.zip)
2. Extract `UNLAUNCH.DSI` from `unlaunch.zip`
3. Launch `UNLAUNCH.DSI` in no$gba and start it from the Game Card slot
   - Це запустить інсталятор Unlaunch, схожий на Меню Unlaunch
4. Choose `Uninstall`
5. Once complete, choose `Power down`
6. Запустіть будь-який ROM для Nintendo DS знову та переконайтеся, що ваше Меню DSi завантажується та працює належним чином

If no$gba shows any kind of error instead of loading the DSi menu, _**do not flash that backup**_! Якщо у вас є старіша резервна копія NAND, ви можете спробувати використати її замість нової копії. Do **not** try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.

## Прошивка резервної копії NAND (Програмне забезпечення)

::: danger

Переконайтеся, що ви прочитали наведені вище кроки, бо ця частина - найнебезпечніша з усіх на цій сторінці. Якщо ви були перенаправлені безпосередньо сюди, не виконуючи вищесказане, поверніться до початку та, хоча б, прочитайте всю сторінку.

:::

::: danger

Переконайтеся, що ваша система Nintendo DSi добре заряджена перед початком цього розділу.

:::

1. Коли SD карта вставлена в консоль, увімкніть вашу Nintendo DSi, утримуючи <kbd class="face">A</kbd> та <kbd class="face">B</kbd>
2. Запустіть SafeNANDManager
3. Press the button to `begin NAND restore`
4. Після завершення відновлення, натисніть <kbd>START</kbd>, щоб вимкнути вашу DSi

Тепер ваші дані NAND повинні бути відновлені.

## Прошивка резервної копії NAND (Хардмод)

Якщо ви не можете увімкнути Nintendo DSi, хардмод - єдиний спосіб відновити резервну копію NAND. The best guide that currently exists is the [Nintendo DSi hardmod guide on the DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
