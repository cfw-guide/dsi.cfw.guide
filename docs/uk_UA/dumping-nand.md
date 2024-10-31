# Створення резервної копії NAND

Ця сторінка призначена для створення резервної копії NAND, що є копією даних про вбудоване сховище Nintendo DSi. Ця копія може бути використана для налаштування hiyaCFW, а також no$gba і melonDS для емуляції DSi.

::: tip

Переконайтеся в тому, що SD карта має щонайменше 250 МБ вільного місця, бо в іншому випадку ви зіткнетеся з повідомленням про помилку в dumpTool.

:::

::: tip

Наполегливо рекомендується це робити. Резервна копія NAND може бути використана як точка відновлення у майбутньому, в разі цеглювання консолі.

:::

## Розділ I - Налаштування SD карти

::: tip

Якщо ви вже завантажили dumpTool з іншого розділу цього посібника, ви можете пропустити цей розділ.

:::

1. Download the latest release of [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Place `dumpTool.nds` anywhere on your SD card

## Розділ ІІ - Створення копії NAND

1. Launch `dumpTool` through TWiLight Menu++
2. Натисніть кнопку <kbd class="face">A</kbd> на Nintendo DSi, щоб почати процес створення копії NAND
   - Створення резервної копії NAND зазвичай займає близько 7 хвилин
3. Коли створення резервної копії буде завершено, натисніть кнопку <kbd>START</kbd> на вашому Nintendo DSi, щоб вийти з dumpTool
4. Вимкніть консоль та вставте SD карту у свій пристрій (наприклад, комп'ютер)
5. Збережіть цю резервну копію у надійному місці, де ви не втратите її
   - Якщо можливо, зробіть декілька резервних копій на різних носіях інформації (жорсткий диск, SSD тощо)
   - Після копіювання резервної копії її на різноманітні носії інформації, ви можете видалити її з SD карти

::: warning

The SHA1 hash of the `nand.bin` will not match the hash stored in `nand.bin.sha1`. This is because dumpTool adds additional data known as a no$gba footer to the `nand.bin` file after the SHA1 hash is calculated. You can use the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) to create a copy without the footer.

:::

::: tip

Continue to [Installing Unlaunch](installing-unlaunch.html) (Optional)

:::
