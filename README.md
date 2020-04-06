# TulpaWiki

Главный русскоязычный информационный ресурс в вики-формате о тульповодстве в
целом и тульпафорсинге в частности.

## Приступая к работе

Эти инструкции помогут склонировать, собрать и отладить проект.

### Предварительные условия

Прежде чем приступить к работе, необходимо иметь в наличии компилятор
статических сайтов [Hugo](https://gohugo.io/getting-started/installing/),
браузер для визуальной отладки и любой текстовый редактор.

Перед началом работы с проектом убедитесь, что у вас установлена последняя
стабильная версия Hugo.

### Установка

Склонируйте проект:

```bash
git clone https://gitlab.com/TulpaWiki/tulpawiki.gitlab.io.git
```

Перейдите в корневую директорию проекта и запустите сборку в режиме разработки:

```bash
hugo serve -e development
```

При отсутствии ошибок проект будет собран и размещён по адресу
`https://127.0.0.1:1313/` в режиме "горячей перезагрузки" изменений.

О [дополнительных опциях](https://gohugo.io/getting-started/usage/),
[структуре проекта](https://gohugo.io/getting-started/directory-structure/),
возможностях и инструментах Hugo [читайте в документации](https://gohugo.io/documentation/).

## Развёртывание

Для сборки готового к развёртыванию проекта достаточно запустить Hugo в
корневой директории без указания аргументов. При отсутствии ошибок готовый
проект будет размещён в директории `public/`, для развёртывания достаточно
разместить на любом веб-сервере содержимое только этой директории.

## Внесение правок

Прочтите [CONTRIBUTING.md](CONTRIBUTING.md), чтобы получить подробную
информацию о правилах и процессе запросов на включение правок.

## Авторы

* **Лебедев Максим** -- Основатель -- [toby3d](https://toby3d.me/)

## Лицензия

Этот проект лицензируется в соответствии с лицензией Unlicense -- см.
подробности в файле [LICENSE](LICENSE). Вы вольны копировать,
модифицировать, публиковать, использовать, компилировать, продавать, sell, or
distribute this software,

## Благодарности

* Райтифаг и команда Гексатреда
* Русскоязычное сообщество TulpaWiki в [Discord](https://discord.gg/dv5kpGs) и [Telegram](https://t.me/joinchat/AkuYY0ExBslQKlt2CRDazA)
* [Кирилл Даншин](https://danshin.pro/)
