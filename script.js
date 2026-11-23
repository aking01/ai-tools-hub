
const tools = [
    {
        name: "ChatGPT",
        icon: "🤖",
        category: "text",
        label: "Текст",
        description: "Умный помощник для учёбы и работы.",
        url: "https://chatgpt.com/"
    },
    {
        name: "Claude",
        icon: "🧠",
        category: "text",
        label: "Текст",
        description: "Создание текстов и анализ информации.",
        url: "https://claude.ai/"
    },
    {
        name: "Gemini",
        icon: "✨",
        category: "text",
        label: "Текст",
        description: "ИИ-помощник от Google.",
        url: "https://gemini.google.com/"
    },
    {
        name: "Perplexity",
        icon: "🔎",
        category: "text",
        label: "Текст",
        description: "Поиск информации с помощью ИИ.",
        url: "https://www.perplexity.ai/"
    },
    {
        name: "DeepSeek",
        icon: "💡",
        category: "text",
        label: "Текст",
        description: "ИИ для вопросов и программирования.",
        url: "https://www.deepseek.com/"
    },
    {
        name: "Leonardo AI",
        icon: "🎨",
        category: "image",
        label: "Изображения",
        description: "Создание изображений с помощью ИИ.",
        url: "https://leonardo.ai/"
    },
    {
        name: "Ideogram",
        icon: "🖼️",
        category: "image",
        label: "Изображения",
        description: "Генерация изображений и дизайнов.",
        url: "https://ideogram.ai/"
    },
    {
        name: "Adobe Firefly",
        icon: "🔥",
        category: "image",
        label: "Изображения",
        description: "Создание и редактирование изображений.",
        url: "https://firefly.adobe.com/"
    },
    {
        name: "Runway",
        icon: "🎬",
        category: "video",
        label: "Видео",
        description: "Создание видео с помощью ИИ.",
        url: "https://runwayml.com/"
    },
    {
        name: "Pika",
        icon: "🎥",
        category: "video",
        label: "Видео",
        description: "Генерация видеороликов.",
        url: "https://pika.art/"
    },
    {
        name: "Suno",
        icon: "🎵",
        category: "audio",
        label: "Звук",
        description: "Создание музыки и песен.",
        url: "https://suno.com/"
    },
    {
        name: "ElevenLabs",
        icon: "🎙️",
        category: "audio",
        label: "Звук",
        description: "Генерация голоса и озвучивание.",
        url: "https://elevenlabs.io/"
    }
];

// Избранное
let favorites = JSON.parse(
    localStorage.getItem("aiFavorites") || "[]"
);

let currentCategory = "all";

const toolList = document.getElementById("tool-list");
const searchInput = document.getElementById("search");
const resultCount = document.getElementById("result-count");
const emptyMessage = document.getElementById("empty-message");

// Отображение карточек
function renderTools() {
    const query = searchInput.value.trim().toLowerCase();

    const filteredTools = tools.filter(tool => {
        const matchesCategory =
            currentCategory === "all" ||
            (currentCategory === "favorites"
                ? favorites.includes(tool.name)
                : tool.category === currentCategory);

        const matchesSearch =
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.label.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    toolList.innerHTML = filteredTools.map(tool => {
        const saved = favorites.includes(tool.name);

        return `
            <article class="card">
                <div class="card-icon">${tool.icon}</div>
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <span class="card-category">${tool.label}</span>

                <a href="${tool.url}"
                   target="_blank"
                   rel="noopener noreferrer">
                    Открыть инструмент →
                </a>

                <button
                    class="favorite-btn ${saved ? "saved" : ""}"
                    data-favorite="${tool.name}">
                    ${saved ? "♥ В избранном" : "♡ В избранное"}
                </button>
            
<button
    class="details-btn"
    data-details="${tool.name}">
    Подробнее о нейросети →
</button>

</article>

        `;
    }).join("");

    resultCount.textContent = `Найдено: ${filteredTools.length}`;

    emptyMessage.hidden = filteredTools.length > 0;
}

// Добавление и удаление избранного
toolList.addEventListener("click", event => {
    const button = event.target.closest("[data-favorite]");

    if (!button) return;

    const name = button.dataset.favorite;

    if (favorites.includes(name)) {
        favorites = favorites.filter(item => item !== name);
    } else {
        favorites.push(name);
    }

    localStorage.setItem(
        "aiFavorites",
        JSON.stringify(favorites)
    );

    renderTools();
});

// Категории
document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".filter.active")
            ?.classList.remove("active");

        button.classList.add("active");
        currentCategory = button.dataset.category;

        renderTools();
    });
});

// Поиск
searchInput.addEventListener("input", renderTools);

document.getElementById("search-btn")
    .addEventListener("click", renderTools);

// Запуск
renderTools();
// Информация о нейросетях
const toolDetails = {
    "ChatGPT": {
        features: ["Ответы на вопросы", "Создание текстов", "Помощь с программированием"],
        pros: "Универсальность и широкий набор возможностей.",
        cons: "Для некоторых функций и моделей нужна платная подписка."
    },
    "Claude": {
        features: ["Работа с текстами", "Анализ документов", "Помощь с кодом"],
        pros: "Хорошо подходит для сложных текстовых задач.",
        cons: "Доступность функций зависит от региона и тарифа."
    },
    "Gemini": {
        features: ["Ответы на вопросы", "Работа с текстом и изображениями", "Интеграция с сервисами Google"],
        pros: "Удобная связь с экосистемой Google.",
        cons: "Некоторые возможности зависят от тарифа."
    },
    "Perplexity": {
        features: ["Поиск информации", "Ответы со ссылками на источники", "Исследование тем"],
        pros: "Удобен для поиска и изучения информации.",
        cons: "Источники и ответы всё равно нужно проверять."
    },
    "DeepSeek": {
        features: ["Ответы на вопросы", "Программирование", "Решение задач"],
        pros: "Полезен для технических и учебных задач.",
        cons: "Может допускать ошибки в ответах."
    },
    "Leonardo AI": {
        features: ["Создание изображений", "Генерация графики", "Работа с визуальными стилями"],
        pros: "Много инструментов для создания визуального контента.",
        cons: "Часть функций и возможностей платная."
    },
    "Ideogram": {
        features: ["Генерация изображений", "Создание постеров", "Работа с текстом на изображениях"],
        pros: "Подходит для графики и рекламных материалов.",
        cons: "Результат не всегда точно соответствует запросу."
    },
    "Adobe Firefly": {
        features: ["Генерация изображений", "Редактирование графики", "Инструменты для дизайна"],
        pros: "Удобен для творческой работы и дизайна.",
        cons: "Некоторые функции требуют подписки Adobe."
    },
    "Runway": {
        features: ["Создание видео", "Редактирование видео", "Работа с визуальными эффектами"],
        pros: "Много инструментов для работы с видео.",
        cons: "Генерация может расходовать платные кредиты."
    },
    "Pika": {
        features: ["Генерация видео", "Анимация изображений", "Создание коротких роликов"],
        pros: "Удобен для творческих видеопроектов.",
        cons: "Есть ограничения на генерацию и тарифы."
    },
    "Suno": {
        features: ["Создание музыки", "Генерация песен", "Создание музыки по описанию"],
        pros: "Позволяет быстро создавать музыкальные идеи.",
        cons: "Условия коммерческого использования зависят от тарифа."
    },
    "ElevenLabs": {
        features: ["Синтез речи", "Озвучивание текста", "Генерация голосов"],
        pros: "Полезен для озвучивания видео и проектов.",
        cons: "Есть ограничения на использование голосов и тарифы."
    }
};

// Находим элементы информационного окна
const modal = document.getElementById("tool-modal");
const modalClose = document.getElementById("modal-close");

// Открытие информации о нейросети
toolList.addEventListener("click", event => {
    const button = event.target.closest("[data-details]");

    if (!button) return;

    const name = button.dataset.details;
    const tool = tools.find(item => item.name === name);
    const details = toolDetails[name];

    if (!tool || !details) return;

    document.getElementById("modal-icon").textContent = tool.icon;
    document.getElementById("modal-title").textContent = tool.name;
    document.getElementById("modal-category").textContent = tool.label;
    document.getElementById("modal-description").textContent = tool.description;
    document.getElementById("modal-pros").textContent = details.pros;
    document.getElementById("modal-cons").textContent = details.cons;

    const features = document.getElementById("modal-features");

    features.replaceChildren();

    details.features.forEach(feature => {
        const li = document.createElement("li");
        li.textContent = feature;
        features.appendChild(li);
    });

    const link = document.getElementById("modal-link");
    link.href = tool.url;

    modal.classList.add("show");
});

// Закрытие окна
modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Закрытие при нажатии на затемнённый фон
modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

// Закрытие клавишей Escape
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        modal.classList.remove("show");
    }
});

