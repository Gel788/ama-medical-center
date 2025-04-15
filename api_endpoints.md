# API Эндпоинты

## Аутентификация
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh-token
POST /api/auth/reset-password
```

## Пользователи
```
GET    /api/users/me
PUT    /api/users/me
GET    /api/users/{id}
PUT    /api/users/{id}
DELETE /api/users/{id}
```

## Врачи
```
GET    /api/doctors
GET    /api/doctors/{id}
POST   /api/doctors
PUT    /api/doctors/{id}
DELETE /api/doctors/{id}
GET    /api/doctors/{id}/schedule
PUT    /api/doctors/{id}/schedule
```

## Услуги
```
GET    /api/services
GET    /api/services/{id}
POST   /api/services
PUT    /api/services/{id}
DELETE /api/services/{id}
GET    /api/services/categories
```

## Записи на прием
```
GET    /api/appointments
GET    /api/appointments/{id}
POST   /api/appointments
PUT    /api/appointments/{id}
DELETE /api/appointments/{id}
GET    /api/appointments/available-slots
```

## Медицинские карты
```
GET    /api/medical-records
GET    /api/medical-records/{id}
POST   /api/medical-records
PUT    /api/medical-records/{id}
GET    /api/medical-records/{id}/documents
POST   /api/medical-records/{id}/documents
```

## Акции и спецпредложения
```
GET    /api/promotions
GET    /api/promotions/{id}
POST   /api/promotions
PUT    /api/promotions/{id}
DELETE /api/promotions/{id}
```

## Отзывы
```
GET    /api/reviews
GET    /api/reviews/{id}
POST   /api/reviews
PUT    /api/reviews/{id}
DELETE /api/reviews/{id}
```

## Оплаты
```
POST   /api/payments/create
GET    /api/payments/{id}
POST   /api/payments/webhook
GET    /api/payments/history
```

## Уведомления
```
GET    /api/notifications
POST   /api/notifications/settings
PUT    /api/notifications/settings
DELETE /api/notifications/{id}
```

## Контент
```
GET    /api/content/blog
GET    /api/content/blog/{id}
POST   /api/content/blog
PUT    /api/content/blog/{id}
DELETE /api/content/blog/{id}
GET    /api/content/pages/{slug}
PUT    /api/content/pages/{slug}
```

## Статистика и аналитика
```
GET    /api/analytics/appointments
GET    /api/analytics/revenue
GET    /api/analytics/patients
GET    /api/analytics/services
```

## Параметры ответов

### Успешный ответ
```json
{
  "success": true,
  "data": {},
  "message": "Операция выполнена успешно"
}
```

### Ответ с ошибкой
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Описание ошибки"
  }
}
```

## Пагинация
Для списков используется пагинация с параметрами:
```
?page=1&limit=20&sort=created_at&order=desc
```

## Фильтрация
Поддерживаются следующие параметры фильтрации:
```
?filter[field]=value
?filter[date_from]=2024-01-01
?filter[date_to]=2024-12-31
?filter[status]=active
```

## Поиск
Поддерживается полнотекстовый поиск:
```
?search=query
``` 