# Portfolio Landing Page

Современная визитка-портфолио с анимациями и адаптивным дизайном.

## Технологии

- **Frontend**: React 19, Tailwind CSS, shadcn/ui
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Create React App + CRACO

## 📦 Установка

```bash
git clone https://github.com/qwilton-god/portfolio.git

cd frontend

npm install

npm start
```

## 🌐 Запуск

После установки приложение будет доступно по адресу: `http://localhost:3000`

## 📁 Структура проекта

```
frontend/
├── src/
│   ├── components/     # React компоненты
│   │   ├── ui/        # shadcn/ui компоненты
│   │   ├── Hero.jsx   # Главный экран
│   │   ├── About.jsx  # О себе
│   │   ├── Skills.jsx # Навыки
│   │   ├── Projects.jsx # Проекты
│   │   └── Footer.jsx # Подвал
│   ├── pages/         # Страницы
│   ├── lib/           # Утилиты
│   └── mock.js        # Данные проектов
└── public/            # Статические файлы
```

## ✨ Возможности

- 🎨 Современный дизайн с градиентами и анимациями
- 📱 Полностью адаптивная верстка
- ⚡ Плавные переходы и эффекты
- 🎯 SEO-оптимизация
- ♿ Accessibility-friendly

## 🛠️ Настройка

Отредактируйте `src/mock.js` для добавления своих проектов:

```javascript
export const mockProjects = [
  {
    id: 1,
    title: 'Название проекта',
    description: 'Описание',
    image: 'url-изображения',
    technologies: ['React', 'Node.js'],
    liveUrl: 'https://...',
    githubUrl: 'https://github.com/...'
  }
];
```

Обновите социальные ссылки в `src/components/Footer.jsx`.

## 📝 Лицензия

MIT
