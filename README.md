# TODO project on TypeScrips using React

Первое приложение написанное для изучение React.

## Структура

Код представляет из себя набор компоненто обьединенных в единый код, где каждый компонент независим( я надеюсь ) и выполняет свою роль.

- Header --- Верхняя панель пприложения содержащая название и кнопку с получением информаии

- InfoInterface --- Окно с информацией о использование приложением

- TodoIntnterface --- Окно содержащее ItemCreation и TodoList

- ItemCreation --- Панель для создания TODO, представляет из себя Input и кнопку для очищения Input

- TodoList --- Окно в котором выподятся TODO

- TodoItem --- Компонент для создания и render задач

- Footer --- Нижняя часть приложения с информацией о авторе

## Данные

Данные хранятся локально в './data/dates.json', откуда читаются приложением.

## Стилизация

Стили опписаны для каждого компонента в соответствующем файле, хранящемся в './style'

## Запуск

Для запуска пропищите -npm run в консоли.

Убедитесь что у вас уставовлен node.js.