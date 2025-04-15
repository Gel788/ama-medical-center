# Структура проекта

```
├── client/                      # Frontend приложение
│   ├── public/                  # Статические файлы
│   │   ├── images/             # Изображения
│   │   └── locales/            # Файлы локализации
│   ├── src/
│   │   ├── components/         # React компоненты
│   │   ├── pages/              # Страницы приложения
│   │   ├── hooks/              # Кастомные хуки
│   │   ├── services/           # Сервисы API
│   │   ├── store/              # Redux store
│   │   ├── styles/             # Стили
│   │   └── utils/              # Утилиты
│   └── tests/                  # Тесты
│
├── server/                      # Backend приложение
│   ├── src/
│   │   ├── controllers/        # Контроллеры
│   │   ├── models/             # Модели данных
│   │   ├── routes/             # Маршруты API
│   │   ├── services/           # Бизнес-логика
│   │   ├── middleware/         # Middleware
│   │   └── utils/              # Утилиты
│   └── tests/                  # Тесты
│
├── shared/                      # Общий код
│   ├── constants/              # Константы
│   ├── types/                  # TypeScript типы
│   └── utils/                  # Общие утилиты
│
├── docs/                       # Документация
│   ├── api/                    # API документация
│   ├── database/               # Схема базы данных
│   └── deployment/             # Инструкции по развертыванию
│
├── scripts/                    # Скрипты
│   ├── setup.sh               # Настройка окружения
│   ├── build.sh               # Сборка проекта
│   └── deploy.sh              # Деплой
│
└── docker/                     # Docker конфигурация
    ├── client/                # Dockerfile для frontend
    ├── server/                # Dockerfile для backend
    └── docker-compose.yml     # Композиция сервисов
```

## Описание основных директорий

### Frontend (client/)
- `components/` - Переиспользуемые React компоненты
- `pages/` - Страницы приложения
- `hooks/` - Кастомные React хуки
- `services/` - Сервисы для работы с API
- `store/` - Redux store и логика управления состоянием
- `styles/` - Стили и темы
- `utils/` - Вспомогательные функции

### Backend (server/)
- `controllers/` - Обработчики запросов
- `models/` - Модели данных и схемы
- `routes/` - Определение маршрутов API
- `services/` - Бизнес-логика
- `middleware/` - Промежуточные обработчики
- `utils/` - Вспомогательные функции

### Общие ресурсы (shared/)
- `constants/` - Общие константы
- `types/` - TypeScript типы и интерфейсы
- `utils/` - Общие утилиты

### Документация (docs/)
- `api/` - Документация API
- `database/` - Схемы и миграции базы данных
- `deployment/` - Инструкции по развертыванию

### Конфигурация Docker (docker/)
- Отдельные Dockerfile для каждого сервиса
- Docker Compose для оркестрации 