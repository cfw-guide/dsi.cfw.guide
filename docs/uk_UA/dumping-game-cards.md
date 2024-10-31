# Копіювання даних з Ігрових Картриджів

Цей розділ - посібник з копіювання ігрових картиджів за допомогою GodMode9i для того, щоб вони могли відтворюватися на емуляторах, флешкартах або на SD карті через nds-bootstrap.

## Вимоги

- Ігровий Картридж зі грою, яку ви хотіли б скопіювати
- Your Nintendo DSi console with [Unlaunch](installing-unlaunch.html) installed

## Інструкції

### Розділ I - Налаштування SD карти

1. Download the latest release of [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)
2. Extract `GodMode9i.nds` from the GodMode9i archive and place it anywhere on your SD card

### Розділ ІІ - Інструкції для Nintendo DSi

1. Запустіть GodMode9i
2. Переконайтеся, що Ігровий Картридж вставлений в консоль
3. Виберіть опцію "NDS GAMECARD" в GodMode9i
4. Виберіть що саме хочете скопіювати
   - Опції "Обрізати" для прошивки скопіює менший файл, який може зберегти пам'ять SD-карту, хоча такі файли не будуть працювати з більшістю патчів, наприклад з ROM хаками
5. Повторіть кроки 2-4 для всіх Ігрових Картриджів, які ви бажаєте скопіювати

::: tip

The dumped Game Cards will be found in `sd:/gm9i/out`.

:::
