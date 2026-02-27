## 🗂 Структура проекта

kr1front/
├── backend/
│ ├── app.js — сервер Express + CRUD + Swagger
│ └── package.json — зависимости бэкенда
├── frontend/
│ ├── public/
│ │ └── index.html — точка входа HTML
│ ├── src/
│ │ ├── api/
│ │ │ └── index.js — axios-клиент для запросов к API
│ │ ├── components/
│ │ │ ├── LaptopItem.jsx — карточка одного ноутбука
│ │ │ ├── LaptopModal.jsx — модальное окно добавления/редактирования
│ │ │ └── LaptopsList.jsx — список всех карточек
│ │ ├── pages/
│ │ │ └── LaptopsPage/
│ │ │ ├── LaptopsPage.jsx — главная страница
│ │ │ └── LaptopsPage.scss — стили (SCSS)
│ │ ├── App.js — корневой компонент
│ │ ├── index.css — глобальные стили
│ │ └── index.js — точка входа React
│ └── package.json — зависимости фронтенда
└── README.md
