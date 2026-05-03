# Node Hello Demo

Минимальное Node.js HTTP-приложение для проверки Node.js deployment template.

## Запуск приложения

- Port: `8080`
- HTML page: `/`
- Проверка состояния: `/health`
- Зависимости: нет

## Локальный запуск

```bash
npm install
npm run build
npm start
```

Необязательные переменные:

```bash
APP_NAME="Node Hello App" ENV_NAME=production PORT=8080 npm start
```

## Настройки шаблона

Рекомендуемые значения deployment template:

- Base image: `node:20-alpine`
- Root directory: `.`
- Output directory: `dist`
- Install command: `npm install`
- Build command: `npm run build`
- Run command: `node dist/index.js`
- Application port: `8080`
