# TulpaWiki

Главный русскоязычный информационный ресурс в вики-формате о тульповодстве в целом и тульпафорсинге в частности.

## Приступая к работе

Нижеописанные инструкции помогут склонировать, собрать и отладить проект на локальной машине.

### Предварительные условия

Прежде чем приступить к работе, необходимо иметь в наличии на локальной машине компилятор статических сайтов [Hugo](https://gohugo.io/getting-started/installing/), браузер для визуальной отладки и любой текстовый редактор.

Перед началом работы с проектом убедитесь, что у вас установленна одна из последних стабильных версий Hugo.

### Установка

Склонируйте проект в любое удобное место:

```bash
git clone https://gitlab.com/TulpaWiki/tulpawiki.gitlab.io.git
```

Перейдите в корневую директорию проекта и запустите сборку в режиме разработки при помощи Hugo:

```bash
hugo serve -e development
```

При отсутствии ошибок проект будет собран и размещён по адресу `https://127.0.0.1:1313/` на локальной машине в режиме "горячей перезагрузки" изменений.

О [дополнительных опциях](https://gohugo.io/getting-started/usage/), [структуре проекта](https://gohugo.io/getting-started/directory-structure/), его возможностях и инструментах [читайте в документации Hugo](https://gohugo.io/documentation/).

## Развёртывание

Для сборки готового к развёртыванию проекта достаточно запустить Hugo в корневой директории без указания аргументов. При отсутствии ошибок готовый проект будет размещён в директории `public/`, для развёртывания достаточно разместить на любом веб-сервере только содержимое этой директории.

## Внесение правок

Прочтите [CONTRIBUTING.md](CONTRIBUTING.md), чтобы получить подробную информацию о правилах и процессе запросов на включение правок.

## Авторы

* **Лебедев Максим** -- Основатель -- [toby3d](https://toby3d.me/)

## Лицензия

Этот проект лицензируется в соответствии с лицензией Unlicense -- см. подробности в файле [LICENSE.md](LICENSE.md).

## Благодарности

* Райтифаг и команда Гексатреда
* Русскоязычное сообщество TulpaWiki в [Discord](https://discord.gg/dv5kpGs) и [Telegram](https://t.me/joinchat/AkuYY0ExBslQKlt2CRDazA)
* [Кирилл Даншин](https://danshin.pro/)
