# IT School Landing Page

![IT School Logo](./public/favicon.svg)

## 📝 Описание проекта

Современный лендинг для IT-школы, разработанный с использованием React и современных веб-технологий. Сайт представляет образовательную платформу, предлагающую курсы по программированию и IT-направлениям.

🔗 **Демо:** [https://nikapair.github.io/IT-school-landing/](https://nikapair.github.io/IT-school-landing/)

## 🛠️ Технологии

-   **React** - библиотека для создания пользовательских интерфейсов
-   **Styled Components** - CSS-in-JS библиотека для стилизации компонентов
-   **Framer Motion** - библиотека для создания анимаций
-   **Vite** - быстрый инструмент сборки для современных веб-приложений
-   **React Intersection Observer** - для анимаций при скролле

## 🚀 Функциональность

-   Адаптивный дизайн для всех устройств
-   Анимации при скролле и взаимодействии
-   Секции:
    -   Главная (Hero)
    -   О нас (About)
    -   Курсы (Courses)
    -   Футер с контактной информацией

## 📋 Структура проекта

```
education-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   └── CoursesSection.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Container.jsx
│   │       ├── Section.jsx
│   │       └── Typography.jsx
│   ├── styles/
│   │   └── theme.js
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## 🔧 Установка и запуск

1. Клонировать репозиторий:

```bash
git clone https://github.com/nikaPair/IT-school-landing.git
cd IT-school-landing
```

2. Установить зависимости:

```bash
npm install
```

3. Запустить проект в режиме разработки:

```bash
npm run dev
```

4. Собрать проект для продакшена:

```bash
npm run build
```

5. Деплой на GitHub Pages:

```bash
npm run deploy
```

## 📱 Адаптивность

Лендинг полностью адаптивен и корректно отображается на устройствах с различными размерами экрана:

-   Десктоп (1200px+)
-   Планшет (768px - 1199px)
-   Мобильные устройства (до 767px)

## 👨‍💻 Автор

-   GitHub: [nikaPair](https://github.com/nikaPair)
