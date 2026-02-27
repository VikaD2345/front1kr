## Фронтенд и бэкенд разработка 
## Тема : Магазин ноутбуков 💻

Репозиторий содержит объединение практических работ с 1-5 практику 

Ссылки на репозитории практик с 1 по 5 
https://github.com/VikaD2345/practica1-

https://github.com/VikaD2345/practica2.1

https://github.com/VikaD2345/practica3

https://github.com/VikaD2345/practica4

https://github.com/VikaD2345/practica5


В рамках проекта реализован полный цикл разработки веб-приложения — от стилизации компонентов на Sass до документирования API через Swagger, с подключённым React-клиентом и Express-сервером.

## 🗂 Структура проекта

```
kr1front/
├── backend/
│   ├── app.js          — сервер Express + CRUD + Swagger
│   └── package.json    — зависимости бэкенда
├── frontend/
│   ├── public/
│   │   └── index.html  — точка входа HTML
│   ├── src/
│   │   ├── api/
│   │   │   └── index.js          — axios-клиент
│   │   ├── components/
│   │   │   ├── LaptopItem.jsx    — карточка ноутбука
│   │   │   ├── LaptopModal.jsx   — модальное окно
│   │   │   └── LaptopsList.jsx   — список карточек
│   │   ├── pages/
│   │   │   └── LaptopsPage/
│   │   │       ├── LaptopsPage.jsx
│   │   │       └── LaptopsPage.scss
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🚀 Запуск проекта

### Бэкенд
```bash
cd backend
npm install
npm start
```
Сервер запустится на http://localhost:3000
### Фронтенд 
```bash
cd frontend
npm install
npm start
```
Сайт откроется на http://localhost:3001

Ссылки после запуска
🌐 Сайт: http://localhost:3001

⚙️ API: http://localhost:3000/api/laptops

📄 Swagger UI: http://localhost:3000/api-docs
## 📚 Практика №1 — CSS-препроцессоры (SCSS)

**Тема:** переменные, миксины, вложенность селекторов.

В проекте используется препроцессор **SCSS**. 

**Переменные:**
```scss
$primary-color: #3498db;
$text-color: #333;
$border-radius: 12px;
```

**Миксин для кнопок:**
```scss
@mixin button-style($color) {
  padding: 10px 16px;
  background-color: $color;
  color: white;
  text-decoration: none;
  border-radius: $border-radius;
  display: inline-block;
}
}
```

**Вложенность:**
```scss
.product-card {
  width: 300px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: $border-radius;
  font-family: Arial, sans-serif;
  color: $text-color;

  &__image {
    width: 100%;
    border-radius: $border-radius;
  }

  &__title {
    margin: 12px 0 8px;
  }

  &__description {
    font-size: 14px;
    margin-bottom: 14px;
  }

  &__button {
    @include button-style($primary-color);
  }
}
```

### ▶️ Как запустить
```bash
npm install
npm run dev
```
Открыть http://127.0.0.1:5500/1/index.html — стили применяются автоматически.

---
<img width="740" height="575" alt="{2B4E6A47-6727-44EC-ACAF-5CF31036A7F1}" src="https://github.com/user-attachments/assets/6f27c178-c527-48d5-bbc1-b24bce876f8d" />

## 📚 Практика №2 — Сервер на Node.js + Express

**Тема:** создание REST API, CRUD-операции, middleware.

Сервер написан на **Express.js** и предоставляет полный набор CRUD-операций
для каталога ноутбуков.

**Маршруты API:**

| Метод | Путь | Описание |
|---|---|---|
| GET | /api/products | Получить все ноутбуки |
| GET | /api/products/:id | Получить по ID |
| POST | /api/products | Добавить ноутбук |
| PATCH | /api/products/:id | Обновить ноутбук |
| DELETE | /api/products/:id | Удалить ноутбук |

**Объект ноутбука:**
```json
{
  "name": "laptops-api",
  "version": "1.0.0",
  "description": "CRUD API для списка ноутбуков на Express.js",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}

```

**В каталоге 10 ноутбуков:**
- ASUS VivoBook 15
- Lenovo IdeaPad 3
- Apple MacBook Air M2


### ▶️ Как запустить
```bash
cd backend
npm install
npm start
```
```
node app.js
```
Проверить: http://localhost:3000/api/products — вернёт JSON со списком ноутбуков.
<img width="1916" height="858" alt="{CDBD582D-D772-4BE2-A5F6-B512BE1C5035}" src="https://github.com/user-attachments/assets/677f7781-841b-41d9-8efd-4419fcf372cb" />
<img width="1917" height="938" alt="{DEEA67D4-5F72-4845-85DD-B336DF5EDDF8}" src="https://github.com/user-attachments/assets/22466ee0-99eb-4544-a6fe-9f75357a8d44" />

## 📚 Практика №3 — JSON и тестирование в Postman

**Тема:** формат данных JSON, тестирование API через Postman.

**Postman-коллекция — выполненные запросы:**

**CRUD-запросы к API (POST, GET, PATCH, DELETE)

Проверка статусов (200/201/204/400/404)

Проверка тела ответа и обработки ошибок**

Cсылка на репозиторий со скриншотами :

https://github.com/VikaD2345/practica3

## 📚 Практика №4 — API + React

**Тема:** связь React-фронтенда с Express-бэкендом через axios, CORS.

**Компоненты приложения:**
- `ProductPage` — главная страница, загружает данные через `useEffect`
- `ProductList` — сетка карточек ноутбуков
- `ProductItem` — карточка с названием, категорией, ценой, складом и рейтингом
- `ProductModal` — форма добавления и редактирования ноутбука

**axios-клиент:**
```js
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json' }
});
```

**CORS на бэкенде:**
```js
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### ▶️ Как запустить
Терминал 1 — бэкенд:
```bash
cd D:\practica4\backend
npm start
```
Терминал 2 — фронтенд:
```bash
cd D:\practica4\frontend
npm run dev
```
Открыть http://localhost:3001

---
<img width="1332" height="986" alt="{0EB47D97-15E3-4717-A9D0-E4D3F7AEE5D3}" src="https://github.com/user-attachments/assets/d7ef9d8e-06fb-400a-b713-8a604d625c3c" />
<img width="1909" height="991" alt="{AC1512D4-C110-4C2A-BCA7-E502BCDBA9B5}" src="https://github.com/user-attachments/assets/4a24473f-dbd9-4344-abc3-ebfa87c90304" />
<img width="1706" height="958" alt="{B0027D98-DD2F-444D-8903-84C730F845E0}" src="https://github.com/user-attachments/assets/e609aeaa-6753-4694-87e2-b66d0b892f3f" />
<img width="1841" height="925" alt="{3B628FED-BA6B-4386-A9C9-69F61AB7B702}" src="https://github.com/user-attachments/assets/152b2da9-7526-47ca-9e55-d821cc968d4f" />


## 📚 Практика №5 — Swagger (OpenAPI)

**Тема:** документирование REST API с помощью Swagger.

Использованы библиотеки `swagger-jsdoc` и `swagger-ui-express`.
Все эндпоинты описаны через JSDoc-аннотации `@swagger` прямо в коде.

**Задокументированные эндпоинты:**
- `GET /api/products`
- `POST /api/products`
- `GET /api/products/{id}`
- `PATCH /api/products/{id}`
- `DELETE /api/products/{id}`

### ▶️ Как запустить
```bash
cd D:\practica5\backend
npm install
npm start
```
```bash
cd D:\practica5\frontend
npm run dev
```
Открыть http://localhost:3000/api-docs  
Нажать **"Try it out"** у любого эндпоинта — можно отправить реальный запрос прямо из браузера.

---
<img width="1916" height="1005" alt="{BDB0064E-436D-46DF-BAF3-8B9F043095E5}" src="https://github.com/user-attachments/assets/d1cfa077-66f5-4463-a3c2-6c5ad46e305b" />
<img width="1910" height="956" alt="{68029F2B-1D1C-4448-9FBA-F3085849B72D}" src="https://github.com/user-attachments/assets/7577a5b3-8730-4a2f-b7eb-aba6b7e34d9c" />
<img width="1886" height="970" alt="{41B5D47B-1B00-4169-B000-8FCE16C77497}" src="https://github.com/user-attachments/assets/024eced2-5476-4541-8cca-2638a7464cf3" />
<img width="1887" height="928" alt="{25CDB229-1756-419B-91BE-40B23E7079C6}" src="https://github.com/user-attachments/assets/25e7bacc-cb18-446b-b9e1-c936bdb5f72a" />
<img width="1796" height="913" alt="{8820456A-0B1B-4C21-9B8A-3CBB1C4CE65F}" src="https://github.com/user-attachments/assets/7326a3b3-1071-48b2-af96-5f599f26e1d2" />
<img width="1777" height="940" alt="{384221CC-2325-4C0E-9E81-823BF5469124}" src="https://github.com/user-attachments/assets/582eaf14-f3d3-4926-9c41-a084f371e99a" />
<img width="1864" height="971" alt="{29A544CA-ED8F-4DA1-94C3-240B6D794A28}" src="https://github.com/user-attachments/assets/bd0e3867-0b19-496f-a05a-843825661487" />



## 📚 Практика №6 — Контрольная работа №1

**Тема:** финальная доработка и сдача проекта.

### Чеклист
- ✅ Все CRUD-операции работают через интерфейс сайта
- ✅ Swagger UI доступен и работает в интерактивном режиме
- ✅ Репозиторий открыт для проверки
- ✅ README.md подготовлен

### ▶️ Запуск всего проекта
Терминал 1:
```bash
cd backend && npm install && npm start
```
Терминал 2:
```bash
cd frontend && npm install && npm start
```

Проверить:
- 🌐 Сайт: http://localhost:3001
- ⚙️ API: http://localhost:3000/api/laptops
- 📄 Swagger: http://localhost:3000/api-docs

---
<img width="1916" height="984" alt="{11B435A5-91A1-4A60-8700-9B6FA991310C}" src="https://github.com/user-attachments/assets/9f0f626e-b282-40ab-9282-f07d7eccfdfe" />
<img width="1897" height="998" alt="{F4AE9A04-88FD-4F80-A70E-204DDDAEEEE0}" src="https://github.com/user-attachments/assets/82646699-88d5-4f05-8f0d-5c1c0e9c0c85" />
<img width="1920" height="978" alt="{C0C22242-8D5C-4EEA-B243-A95C24692BC9}" src="https://github.com/user-attachments/assets/2f8086a7-9c1c-42ab-9a1f-0c320b853a95" />
<img width="1907" height="999" alt="{73CFC05B-FDA2-488D-B4B4-F1480C1E11BC}" src="https://github.com/user-attachments/assets/8360c822-ad73-4281-b27c-e361181c82f1" />
<img width="1920" height="926" alt="{DACB23E6-3698-4447-9DA7-F3CFBE6DFB6A}" src="https://github.com/user-attachments/assets/c93b83e3-9fec-4303-a1c5-f682679f25f3" />

## 🛠 Технологии

| Часть | Технологии |
|---|---|
| Frontend | React 18, Axios, SCSS (SASS) |
| Backend | Node.js, Express, nanoid, CORS |
| Документация | Swagger / OpenAPI 3.0 |
| Тестирование | Postman |
---

## 📝 Вывод

В ходе выполнения практических заданий был разработан полноценный веб-проект
на тему «Ноутбуки», включающий клиентскую и серверную части.

В процессе работы были получены следующие навыки:

- **Практика 1** — стилизация интерфейса с помощью SCSS: переменные, миксины, вложенность селекторов
- **Практика 2** — разработка REST API на Node.js + Express с полным набором CRUD-операций
- **Практика 3** — работа с форматом данных JSON и тестирование API в Postman
- **Практика 4** — создание React-приложения и его связь с бэкендом через axios и CORS
- **Практика 5** — документирование API с помощью Swagger (OpenAPI 3.0)
- **Практика 6** — сборка всех практик в единый проект, тестирование и подготовка репозитория

Итогом работы стало готовое веб-приложение — магазин ноутбуков с возможностью
просмотра каталога, добавления, редактирования и удаления товаров через
удобный интерфейс.

