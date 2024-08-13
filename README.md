Облати хранения данных
-база данных на json
-BFF

- redux store

Сущности приложения
-пользователь: БД(список пользователей)б BFF(сесия текущего), стор (отображение в браузере)
-роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), стор(Использование на клиенте)
-статья: БД(списо кстатей), стор (отображение в браузере)
-комментарий: БД (список комментариев), стор(отображение браузере)

Таблицы БД:

- пользователи - users: id / login / password / registed_at / role_id
- роли -roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментарии - commenst: id / autor_id / post_id / content

Схема состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема Redux store (на клиенте)

- user: id / login / role
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id/ author / content / publishedAt
- users: массив user: id / login / registeredAt / role
