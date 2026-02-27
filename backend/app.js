const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

// --- Middleware ---
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware логирования (Практика 4)
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`[${new Date().toISOString()}] [${req.method}] ${res.statusCode} ${req.path}`);
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      console.log('Body:', req.body);
    }
  });
  next();
});

// --- Данные: 10 ноутбуков (Практика 4) ---
let laptops = [
  { id: nanoid(6), name: 'Apple MacBook Air M2', category: 'Ультрабук', description: 'Тонкий и лёгкий ноутбук на чипе Apple M2', price: 89990, stock: 5, rating: 4.9 },
  { id: nanoid(6), name: 'Lenovo ThinkPad X1 Carbon', category: 'Бизнес', description: 'Надёжный бизнес-ноутбук с отличной клавиатурой', price: 112000, stock: 3, rating: 4.8 },
  { id: nanoid(6), name: 'ASUS ROG Strix G15', category: 'Игровой', description: 'Мощный игровой ноутбук с RTX 4060', price: 95000, stock: 7, rating: 4.7 },
  { id: nanoid(6), name: 'Dell XPS 15', category: 'Мультимедиа', description: 'OLED-дисплей, мощный процессор Intel Core i7', price: 130000, stock: 2, rating: 4.8 },
  { id: nanoid(6), name: 'HP Pavilion 15', category: 'Офисный', description: 'Доступный ноутбук для работы и учёбы', price: 42000, stock: 15, rating: 4.3 },
  { id: nanoid(6), name: 'Acer Nitro 5', category: 'Игровой', description: 'Игровой ноутбук начального уровня с RTX 3050', price: 58000, stock: 10, rating: 4.4 },
  { id: nanoid(6), name: 'Microsoft Surface Pro 9', category: 'Ультрабук', description: 'Планшет-ноутбук 2-в-1 на Windows 11', price: 105000, stock: 4, rating: 4.6 },
  { id: nanoid(6), name: 'Samsung Galaxy Book3', category: 'Мультимедиа', description: 'Стильный ноутбук с AMOLED-экраном', price: 78000, stock: 6, rating: 4.5 },
  { id: nanoid(6), name: 'Huawei MateBook D16', category: 'Офисный', description: 'Большой экран, долгое время работы от батареи', price: 55000, stock: 9, rating: 4.4 },
  { id: nanoid(6), name: 'MSI Titan GT77', category: 'Игровой', description: 'Флагманский игровой ноутбук с RTX 4090', price: 280000, stock: 1, rating: 4.9 },
];

// --- Swagger (Практика 5) ---
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API магазина ноутбуков',
      version: '1.0.0',
      description: 'CRUD API для управления каталогом ноутбуков',
    },
    servers: [{ url: `http://localhost:${port}`, description: 'Локальный сервер' }],
  },
  apis: ['./app.js'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * components:
 *   schemas:
 *     Laptop:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - description
 *         - price
 *         - stock
 *       properties:
 *         id:
 *           type: string
 *           description: Уникальный ID ноутбука
 *         name:
 *           type: string
 *           description: Название ноутбука
 *         category:
 *           type: string
 *           description: Категория (Игровой, Офисный, Ультрабук и т.д.)
 *         description:
 *           type: string
 *           description: Описание ноутбука
 *         price:
 *           type: number
 *           description: Цена в рублях
 *         stock:
 *           type: integer
 *           description: Количество на складе
 *         rating:
 *           type: number
 *           description: Рейтинг (0–5)
 *       example:
 *         id: "abc123"
 *         name: "Apple MacBook Air M2"
 *         category: "Ультрабук"
 *         description: "Тонкий и лёгкий ноутбук на чипе Apple M2"
 *         price: 89990
 *         stock: 5
 *         rating: 4.9
 */

// --- Хелпер (Практика 4) ---
function findLaptopOr404(id, res) {
  const laptop = laptops.find(l => l.id === id);
  if (!laptop) {
    res.status(404).json({ error: 'Laptop not found' });
    return null;
  }
  return laptop;
}

// --- CRUD маршруты (Практики 2 + 4 + 5) ---

/**
 * @swagger
 * /api/laptops:
 *   get:
 *     summary: Получить список всех ноутбуков
 *     tags: [Laptops]
 *     responses:
 *       200:
 *         description: Список ноутбуков
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Laptop'
 */
app.get('/api/laptops', (req, res) => {
  res.json(laptops);
});

/**
 * @swagger
 * /api/laptops/{id}:
 *   get:
 *     summary: Получить ноутбук по ID
 *     tags: [Laptops]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID ноутбука
 *     responses:
 *       200:
 *         description: Данные ноутбука
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Laptop'
 *       404:
 *         description: Ноутбук не найден
 */
app.get('/api/laptops/:id', (req, res) => {
  const laptop = findLaptopOr404(req.params.id, res);
  if (!laptop) return;
  res.json(laptop);
});

/**
 * @swagger
 * /api/laptops:
 *   post:
 *     summary: Добавить новый ноутбук
 *     tags: [Laptops]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Laptop'
 *     responses:
 *       201:
 *         description: Ноутбук создан
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Laptop'
 *       400:
 *         description: Неверные данные
 */
app.post('/api/laptops', (req, res) => {
  const { name, category, description, price, stock, rating } = req.body;
  if (!name || !category || !description || price === undefined || stock === undefined) {
    return res.status(400).json({ error: 'name, category, description, price, stock are required' });
  }
  const newLaptop = {
    id: nanoid(6),
    name: name.trim(),
    category: category.trim(),
    description: description.trim(),
    price: Number(price),
    stock: Number(stock),
    rating: rating !== undefined ? Number(rating) : null,
  };
  laptops.push(newLaptop);
  res.status(201).json(newLaptop);
});

/**
 * @swagger
 * /api/laptops/{id}:
 *   patch:
 *     summary: Обновить данные ноутбука
 *     tags: [Laptops]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Laptop'
 *     responses:
 *       200:
 *         description: Обновлённый ноутбук
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Laptop'
 *       400:
 *         description: Нет данных для обновления
 *       404:
 *         description: Ноутбук не найден
 */
app.patch('/api/laptops/:id', (req, res) => {
  const laptop = findLaptopOr404(req.params.id, res);
  if (!laptop) return;
  const { name, category, description, price, stock, rating } = req.body;
  if ([name, category, description, price, stock, rating].every(v => v === undefined)) {
    return res.status(400).json({ error: 'Nothing to update' });
  }
  if (name !== undefined) laptop.name = name.trim();
  if (category !== undefined) laptop.category = category.trim();
  if (description !== undefined) laptop.description = description.trim();
  if (price !== undefined) laptop.price = Number(price);
  if (stock !== undefined) laptop.stock = Number(stock);
  if (rating !== undefined) laptop.rating = Number(rating);
  res.json(laptop);
});

/**
 * @swagger
 * /api/laptops/{id}:
 *   delete:
 *     summary: Удалить ноутбук
 *     tags: [Laptops]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Ноутбук удалён
 *       404:
 *         description: Ноутбук не найден
 */
app.delete('/api/laptops/:id', (req, res) => {
  const exists = laptops.some(l => l.id === req.params.id);
  if (!exists) return res.status(404).json({ error: 'Laptop not found' });
  laptops = laptops.filter(l => l.id !== req.params.id);
  res.status(204).send();
});

// Глобальный 404 и обработчик ошибок
app.use((req, res) => res.status(404).json({ error: 'Not found' }));
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
  console.log(`Swagger UI: http://localhost:${port}/api-docs`);
});
