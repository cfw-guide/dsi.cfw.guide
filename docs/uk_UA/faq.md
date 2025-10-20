# ЧаПи

## Чи слід мені оновлювати систему?

It is **not** recommended to update your DSi unless you know there are purchased DSiWare. Хоча все ще можливо дотримуватися цієї інструкції, якщо ви це зробите, але єдина тільки користь від оновлення - це можливість завантажити куплені додатки в Nintendo DSi Shop. Усі інші переваги, такі як інтеграція Facebook у додатку Nintendo DSi Camera, більше не можна використовувати або недостатньо значні, щоб виправдати недоліки:

- Installing System Updates is known to occasionally **brick** consoles, with roughly the same frequency as when installing Unlaunch
- Старіші експлойти буде неможливо використати, що може бути потрібно, якщо ви не в змозі використати жоден з рекомендованих експлойтів
- Сумісність з флешкартами скорочена, проте ця можливість відновлюється встановленням Unlaunch

## Який експлойт є найкращим?

У цілому для DSi найкращим експлойтом є Unlaunch, з єдиним недоліком як незначний ризик цеглювання при встановленні. Загалом, рекомендується використовувати Memory Pit для встановлення Unlaunch. Якщо ви хочете уникнути будь-якого ризику, рекомендується замість цього використовувати Flipnote Lenny, оскільки у нього є менше проблем у доморобками, ніж у Memory Pit, будучи безпечним і простим в користуванні та видаленні. Нижче наведено список переваг і недоліків кожного експлойту:

### Memory Pit

Переваги:

- Швидкий та зручний у користуванні
- Відсутній ризик пошкодження консолі, видалення настільки ж просте, як виймання SD карти чи видалення одного файлу
- Сумісний з усіма консолями DSi, що не мають зламаної камери та завершили посібник з камери

Недоліки:

- Потребує завантаження додатку DSi Camera щоразу, коли ви хочете отримати доступ до доморобних програм
- Несумісний з певними додатками та доморобками DSi режиму, бо WRAM тільки відкривається для ЦП ARM7
- Доступ до Slot-1 (Ігровий Картридж Nintendo DS) заблоковано у доморобках
- Доступ до DSP заблоковано, тому з'являється гірший звук в GBARunner2
- Фото на SD-карті не можна переглянути в додатку DSi Camera, поки встановлено Memory Pit, оскільки це і є тригером експлойту
  - The only way to view SD card photos while Memory Pit is installed, is to launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap (v0.61.3 or later)

### stylehax

Переваги:

- Краща сумісність з додатками режиму DSi та додатками, ніж у Memory Pit
- Простий у використанні
- Без ризику пошкодження консолі
- Можливо на консолях з розбитою камерою
- Кращий звук у GBARunner2

Недоліки:

- Потребує зв'язок з інтернетом
- Потребує завантаження додатку DSi Browser щоразу, коли ви хочете отримати доступ до доморобних програм, та споживає трохи більше часу, ніж Memory Pit
- Доступ до Slot-1 (Ігровий Картридж Nintendo DS) заблоковано у доморобках

### Flipnote Lenny

Переваги:

- Краща сумісність з додатками режиму DSi та додатками, ніж у Memory Pit
- Відсутній ризик пошкодження консолі, видалення настільки ж просте, як виймання SD карти чи видалення однієї теки
- Можливо на консолях з розбитою камерою
- Кращий звук у GBARunner2

Недоліки:

- Потребує завантаження додатку Flipnote Studio щоразу, коли ви хочете отримати доступ до доморобних програм, та споживає трохи більше часу, ніж Memory Pit
- Доступ до Slot-1 (Ігровий Картридж Nintendo DS) заблоковано у доморобках

### Unlaunch

Переваги:

- Дозволяє завантажувати доморобні програми та DSiWare одразу при завантаженні системи, з додатковими гарячими клавішами
- Повний доступ до системи без будь-яких обмежень, у тому числі:
  - Доступ до Слот-1, що дозволяє копіювати дані з Ігрових Картриджів та завантажувати несумісні флешкарти
  - Кращий звук у GBARunner2
- Видаляє блокування регіонів на Ігрових Картриджах з DSi-Enhanced/Exclusive іграми
- Захист від більшості способів цеглювання DSi
- DSi-Enhanced ігри можна запускати в режимі DSi без донорського ROM
- Давніші доморобки можна запускати через nds-bootstrap-hb

Недоліки:

- Very minor risk of **bricking** the console when installing
- Another, slightly higher, risk of bricking if you decide to [uninstall it](uninstalling-unlaunch.html)
- Несумісний з консолями розробки

## Чи втрачу я будь-які функціональні можливості через модифікацію системи?

Якщо ви встановите Unlaunch або використовуватимете Flipnote Lenny, тоді ніякої функціональністі не буде втрачено. If you use Memory Pit, you will be unable to view photos on the SD card using the DSi Camera, unless you launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap.

- To regain the ability to view your SD card photos when launching the DSi Camera from the DSi Menu, install Unlaunch or switch to a different exploit, then delete Memory Pit's `pit.bin` file
  - If `tip.bin` exists in the same folder, rename it back to `pit.bin`

## Як мені зіграти в скопійовані ігри Nintendo DS?

Щоб грати в скопійовані ігри з Ігрових Картриджів, потрібно використовувати флешкарти або nds-bootstrap - програму, що дозволяє грати в ігри DS зі внутрішньої пам'яті SD карти, перенаправляючи процеси зчитування та запису Slot-1 до ROM.

- Використовуючи TWiLight Menu++, ви можете переміщатися по SD картці, щоб знайти файли ROM для гри через nds-bootstrap. Переваги використання TWiLight Menu++ - чит-меню, меню, налаштування прямо в грі та уникання обмежень, які приносять перенаправлячі. Іншими словами, ви можете кинути свої файли ROM безпосередньо на SD карту та грати без будь-яких додаткових конфігурацій. Немає ліміту в 39 додатків, ні hiyaCFW, ні Unlaunch не потрібні, та немає обмежень на SD картці
- hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) guide on the DS-Homebrew Wiki, but it has some limitations. Існує жорстка межа у 39 додатків, та їхнє створення менш зручне, ніж використання TWiLight Menu++
  - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## Як оновити встановлені доморобки?

- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](installing-unlaunch.html) page
  - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card from the [updated release](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
  - Якщо ви використовуєте TWiLight Menu++, то, скоріш за все, останній реліз nds-bootstrap вже включений в TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

Інші доморобки можуть використовувати інші методи для оновлення.

## Я новачок, або хотів би переробити свою конфігурацію. З чого мені починати?

- Якщо ви ще не модифікували свою консоль або хочете оновити Unlaunch на своїй системі, радимо розпочати з початку посібника та прочитати його сторінки. Обов'язково прочитайте все на головній сторінці
- If you have the latest version Unlaunch, follow the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) to set up TWiLight Menu++ on your system

## Як можна видалити батьківський контроль?

- The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls

## Чи можу я змінити регіон своєї Nintendo DSi?

Так - є кілька різних методів, залежно від того, що ви хочете змінити:

- Найбезпечніший та найпростіший метод - просто встановити TWiLight Menu++, оскільки ця програма може використовувати будь-яку офіційну мову (та деякі неофіційні теж!) та не потребує модифікацій NAND
- Якщо ви справді хочете змінити системний регіон, а також використовуєте hiyaCFW, відкрийте меню конфігурації та змініть налаштування регіону (неможливо зробити з CHN та KOR NAND)
  - If this breaks touch input, revert the region setting back to the original, and you can instead use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) for Asian DSi systems. For American DSi systems use [this version of hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## Що сталося з Lazy DSi Downloader? Як мені встановити CFW без цього додатку?

Lazy DSi Downloader - це програма, яка дозволяла вам пропустити процес ручного встановлення, завантаживши необхідні файли та теки на SD карту. Але, через те, як вона була запрограмована та розподілена, багато користувачів зіткнулися з різними проблемами, та врешті-решт були змушені робити ручне встановлення, оскільки воно булр швидше та/або простіше ніж виправляти все, що спричиняло проблему.

To avoid more users encountering these issues, we no longer recommend using Lazy DSi Downloader, and instead [doing the manual setup](get-started.html) is the recommended way to go.

- Якщо ви отримали посилання на цей посібник від третьої сторони, яка рекомендувала використовувати Lazy DSi Downloader, то інструкції, яких ви дотримувалися, швидше за все, вже застаріли. Будь ласка, натомість використовуйте цей посібник, оскільки він постійно підтримується розробниками проєктів, що тут згадуються.

## Яку SD карту мені слід використовувати?

- Купіть SD карту у надійного бренду
- Повномасштабна SD карта або microSD карта з адаптером добре працюватимуть
- Будь-яка місткість між 1 Гб і 2 ТБ добре працюватимуть. Зазвичай, достатньо всього 8 ГБ
  - Деякі програми, такі як hiyaCFW, можуть довше завантажуватися з більшою місткістю SD карти
- Рекомендовано клас швидкості 8 або вище

## Чи можу я використовувати свою SD карту з однієї DSi на іншій?

Як правило, так, але з двома винятками:

- hiyaCFW працюватиме лише на системі, на яку програма була встановлена
- Навіть якщо ви використовуєте nds-bootstrap або флешкарту, коди друзів в онлайн-іграх NDS будуть скинуті, коли ви намагатиметеся під'єднатися, використовуючи іншу консоль

## Як перемкнутися на нову SD картку після налаштування доморобок?

Format your new SD card using the [SD Card Setup](sd-card-setup.html) instructions, then simply move your data from the old SD card to the new one.

## Чи можу я досі використовувати систему нормально без SD карти вставленої після налаштування доморобок?

Так. Якщо ви ще не встановлювали Unlaunch, система залишиться повністю незміненою. If you _did_ install Unlaunch, you may need to [configure Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) to automatically boot the original DSi Menu under specified conditions.

## The [Unlaunch page](https://problemkaputt.de/unlaunch.htm) says that version 2.0 is not known to be safe. Чи повинен я використовувати попередню версію?

Сторінка Unlaunch не була оновлена після випуску версії 2.0, що вийшла у 2019 році. Переважна більшість користувачів не має жодних проблем з цією версією, тому вона вважається безпечною.

## Як запустити скопійовані програми DSiWare?

Рекомендований метод - просто запустити їх за допомогою TWiLight Menu++, оскільки це просто перетягнення та кладення файлів без довільного ліміту. Коли nds-bootstrap встановлено як метод запуску, ви також здобуваєте переваги читів і скриншотів, як і будь-яка інша перевага, що надається в ігровому меню.

However, for the few titles that are incompatible, you can use [NTM](https://github.com/Epicpkmn11/NTM/releases) to install them on either internal memory or [hiyaCFW's SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing). Як додаток до браків вищевказаних переваг, існує також ліміт на 39 додатків, які не можуть перевищувати 128 Мбіт/1,024 блоки у розмірі. Для SysNAND, також існує дуже невеликий ризик цеглюваня системи при написанні на внутрішню NAND.
