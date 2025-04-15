# Медицинский центр "Ама"

Веб-приложение для медицинского центра, предоставляющее информацию о клинике, услугах, врачах и позволяющее пациентам записываться на прием.

## Функциональность

- Информация о клинике и услугах
- Список врачей с подробной информацией
- Личный кабинет пациента
- Запись на прием
- История посещений
- Система оплаты услуг
- Настройки профиля

## Технологии

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/yourusername/ama-medical-center.git
cd ama-medical-center
```

2. Установите зависимости:
```bash
cd client
npm install
```

3. Запустите сервер разработки:
```bash
npm run dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере

## Деплой на Render.com

1. Создайте новый Web Service на Render.com
2. Подключите ваш GitHub репозиторий
3. Укажите следующие настройки:
   - Build Command: `cd client && npm install && npm run build`
   - Start Command: `cd client && npm start`
   - Environment: Node
   - Branch: main

## Структура проекта

```
ama-medical-center/
├── client/                 # Next.js приложение
│   ├── public/            # Статические файлы
│   │   ├── components/    # React компоненты
│   │   ├── pages/        # Страницы приложения
│   │   └── styles/       # Стили
│   ├── package.json      # Зависимости
│   └── tsconfig.json     # Конфигурация TypeScript
└── README.md             # Документация
```

## Лицензия

MIT 