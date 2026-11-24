
const translations = {
    ru: {
        navHome: "Главная",
        navCatalog: "Каталог",
        navAbout: "О проекте",
        themeDay: "Дневной режим",
        themeNight: "Ночной режим",
        heroTag: "✦ МИР ИСКУССТВЕННОГО ИНТЕЛЛЕКТА",
        heroTitle: "Открой возможности",
        heroHighlight: "искусственного интеллекта",
        heroDescription: "Находи лучшие нейросети для учёбы, работы, творчества и повседневной жизни. Всё необходимое — в одном месте.",
        searchPlaceholder: "Найти нейросеть...",
        searchButton: "Найти →",
        tryFind: "Попробуй найти:",
        statTools: "ИИ-инструментов",
        statCategories: "Основных направления",
        statAccess: "Доступ к каталогу",
        feature1Title: "Быстрый поиск",
        feature1Description: "Находи подходящие нейросети за несколько секунд.",
        feature2Title: "Разные возможности",
        feature2Description: "Инструменты для текста, изображений, видео и звука.",
        feature3Title: "Избранное",
        feature3Description: "Сохраняй понравившиеся инструменты.",
        catalogTag: "✦ БИБЛИОТЕКА ИИ",
        catalogTitle: "Найди свой инструмент",
        catalogDescription: "Выбирай нейросеть под свои задачи.",
        filterAll: "Все инструменты",
        filterText: "Текст",
        filterImage: "Изображения",
        filterVideo: "Видео",
        filterAudio: "Звук",
        filterFavorites: "♥ Избранное",
        sortLabel: "Сортировка:",
        sortDefault: "По умолчанию",
        sortPopular: "Популярные",
        sortAZ: "По алфавиту: А–Я",
        sortZA: "По алфавиту: Я–А",
        scrollHint: "Листай вниз, чтобы увидеть все нейросети",
        emptyMessage: "Ничего не найдено. Попробуй другой запрос.",
        aboutTag: "О НАС",
        aboutTitle: "Искусственный интеллект",
        aboutHighlight: "становится ближе",
        aboutDescription: "AI Tools Hub — каталог полезных инструментов искусственного интеллекта. Наша цель — помочь тебе находить подходящие нейросети, изучать их возможности и выбирать лучшие решения.",
        aboutButton: "Исследовать каталог →",
        footerDescription: "Технологии будущего уже здесь.",
        modalFeatures: "Основные возможности",
        modalPros: "Преимущества",
        modalCons: "Недостатки",
        modalLink: "Перейти на официальный сайт →",
        category: {
            text: "Текст",
            image: "Изображения",
            video: "Видео",
            audio: "Звук",
            search: "Поиск",
            learning: "Обучение",
            programming: "Программирование",
            websites: "Создание сайтов",
            presentations: "Презентации",
            automation: "Автоматизация"
        },
        found: (count, total) => `Найдено ${count} из ${total} нейросетей`,
        noResults: query => `По запросу «${query}» ничего не найдено.`,
        noFavorites: "У тебя пока нет избранных нейросетей.",
        noCategory: "В этой категории пока нет инструментов.",
        noRatings: "Оценок пока нет",
        ratingCount: (average, count) => `${average} / 5 · ${count} оценок`,
        alreadyReviewed: "Ты уже оставил отзыв для этой нейросети.",
        reviewPlaceholder: "Напиши свой отзыв...",
        sendReview: "Отправить отзыв",
        reviews: count => `Отзывы (${count})`,
        noReviews: "Пока нет отзывов.",
        openTool: "Открыть инструмент →",
        favorite: "♡ В избранное",
        savedFavorite: "♥ В избранном",
        details: "Подробнее о нейросети →",
        rate: number => `Оценить на ${number}`,
        alertAlready: "Ты уже оставил отзыв для этой нейросети.",
        alertRating: "Сначала выбери оценку от 1 до 5 звёзд.",
        alertComment: "Напиши отзыв хотя бы из 3 символов.",
        alertSaved: "Спасибо! Твой отзыв опубликован.",
        alertError: "Не удалось сохранить отзыв. Попробуй ещё раз."
    },

    en: {
        navHome: "Home",
        navCatalog: "Catalog",
        navAbout: "About",
        themeDay: "Light mode",
        themeNight: "Dark mode",
        heroTag: "✦ THE WORLD OF ARTIFICIAL INTELLIGENCE",
        heroTitle: "Discover the power of",
        heroHighlight: "artificial intelligence",
        heroDescription: "Find the best AI tools for studying, working, creating and everyday life. Everything you need in one place.",
        searchPlaceholder: "Find an AI tool...",
        searchButton: "Search →",
        tryFind: "Try searching:",
        statTools: "AI tools",
        statCategories: "Main categories",
        statAccess: "Catalog access",
        feature1Title: "Quick search",
        feature1Description: "Find the right AI tools in seconds.",
        feature2Title: "Many possibilities",
        feature2Description: "Tools for text, images, video and audio.",
        feature3Title: "Favorites",
        feature3Description: "Save the tools you like.",
        catalogTag: "✦ AI LIBRARY",
        catalogTitle: "Find your tool",
        catalogDescription: "Choose an AI tool for your needs.",
        filterAll: "All tools",
        filterText: "Text",
        filterImage: "Images",
        filterVideo: "Video",
        filterAudio: "Audio",
        filterFavorites: "♥ Favorites",
        sortLabel: "Sort:",
        sortDefault: "Default",
        sortPopular: "Popular",
        sortAZ: "Alphabetical: A–Z",
        sortZA: "Alphabetical: Z–A",
        scrollHint: "Scroll down to explore all AI tools",
        emptyMessage: "Nothing found. Try another search.",
        aboutTag: "ABOUT US",
        aboutTitle: "Artificial intelligence",
        aboutHighlight: "is getting closer",
        aboutDescription: "AI Tools Hub is a catalog of useful artificial intelligence tools. Our goal is to help you discover AI tools, explore their features and choose the best solutions.",
        aboutButton: "Explore the catalog →",
        footerDescription: "The technology of tomorrow is already here.",
        modalFeatures: "Main features",
        modalPros: "Advantages",
        modalCons: "Disadvantages",
        modalLink: "Visit official website →",
        category: {
            text: "Text",
            image: "Images",
            video: "Video",
            audio: "Audio",
            search: "Search",
            learning: "Education",
            programming: "Programming",
            websites: "Website creation",
            presentations: "Presentations",
            automation: "Automation"
        },
        found: (count, total) => `Found ${count} of ${total} AI tools`,
        noResults: query => `No results found for "${query}".`,
        noFavorites: "You haven't added any favorites yet.",
        noCategory: "There are no tools in this category yet.",
        noRatings: "No ratings yet",
        ratingCount: (average, count) => `${average} / 5 · ${count} ratings`,
        alreadyReviewed: "You have already reviewed this AI tool.",
        reviewPlaceholder: "Write your review...",
        sendReview: "Submit review",
        reviews: count => `Reviews (${count})`,
        noReviews: "No reviews yet.",
        openTool: "Open tool →",
        favorite: "♡ Add to favorites",
        savedFavorite: "♥ In favorites",
        details: "Learn more →",
        rate: number => `Rate ${number} stars`,
        alertAlready: "You have already reviewed this AI tool.",
        alertRating: "Choose a rating from 1 to 5 stars first.",
        alertComment: "Your review must contain at least 3 characters.",
        alertSaved: "Thank you! Your review has been published.",
        alertError: "Could not save your review. Please try again."
    },

    zh: {
        navHome: "首页",
        navCatalog: "工具目录",
        navAbout: "关于我们",
        themeDay: "浅色模式",
        themeNight: "深色模式",
        heroTag: "✦ 人工智能的世界",
        heroTitle: "探索",
        heroHighlight: "人工智能的无限可能",
        heroDescription: "寻找适合学习、工作、创作和日常生活的优秀 AI 工具。一站式满足你的需求。",
        searchPlaceholder: "搜索 AI 工具...",
        searchButton: "搜索 →",
        tryFind: "试试搜索：",
        statTools: "AI 工具",
        statCategories: "主要类别",
        statAccess: "全天候访问",
        feature1Title: "快速搜索",
        feature1Description: "几秒钟内找到合适的 AI 工具。",
        feature2Title: "多种功能",
        feature2Description: "提供文本、图像、视频和音频工具。",
        feature3Title: "收藏夹",
        feature3Description: "收藏你喜欢的工具。",
        catalogTag: "✦ AI 工具库",
        catalogTitle: "找到你的 AI 工具",
        catalogDescription: "根据你的需求选择 AI 工具。",
        filterAll: "全部工具",
        filterText: "文本",
        filterImage: "图像",
        filterVideo: "视频",
        filterAudio: "音频",
        filterFavorites: "♥ 收藏",
        sortLabel: "排序：",
        sortDefault: "默认排序",
        sortPopular: "热门工具",
        sortAZ: "按名称排序：A–Z",
        sortZA: "按名称排序：Z–A",
        scrollHint: "向下滚动，查看更多 AI 工具",
        emptyMessage: "没有找到结果，请尝试其他搜索。",
        aboutTag: "关于我们",
        aboutTitle: "人工智能",
        aboutHighlight: "让未来触手可及",
        aboutDescription: "AI Tools Hub 是一个实用人工智能工具目录。我们的目标是帮助你发现合适的 AI 工具，了解它们的功能并选择最佳方案。",
        aboutButton: "探索工具目录 →",
        footerDescription: "未来科技，已经来到我们身边。",
        modalFeatures: "主要功能",
        modalPros: "优点",
        modalCons: "缺点",
        modalLink: "访问官方网站 →",
        category: {
            text: "文本",
            image: "图像",
            video: "视频",
            audio: "音频",
            search: "搜索",
            learning: "学习",
            programming: "编程",
            websites: "网站创建",
            presentations: "演示文稿",
            automation: "自动化"
        },
        found: (count, total) => `找到 ${count} / ${total} 个 AI 工具`,
        noResults: query => `没有找到与“${query}”相关的结果。`,
        noFavorites: "你还没有收藏任何 AI 工具。",
        noCategory: "此类别中暂时没有工具。",
        noRatings: "暂无评分",
        ratingCount: (average, count) => `${average} / 5 · ${count} 个评分`,
        alreadyReviewed: "你已经评价过这个 AI 工具。",
        reviewPlaceholder: "写下你的评价...",
        sendReview: "提交评价",
        reviews: count => `评价 (${count})`,
        noReviews: "暂无评价。",
        openTool: "打开工具 →",
        favorite: "♡ 添加到收藏",
        savedFavorite: "♥ 已收藏",
        details: "了解更多 →",
        rate: number => `评分：${number} 星`,
        alertAlready: "你已经评价过这个 AI 工具。",
        alertRating: "请先选择 1 到 5 星评分。",
        alertComment: "评价至少需要 3 个字符。",
        alertSaved: "谢谢！你的评价已发布。",
        alertError: "无法保存评价，请重试。"
    }
};

/* НЕЙРОСЕТИ */

const tools = [
    {
        name: "ChatGPT", icon: "🤖", category: "text", label: "text",
        description: {
            ru: "Универсальный ИИ-помощник от OpenAI для учёбы, работы и программирования.",
            en: "A versatile AI assistant by OpenAI for studying, work and programming.",
            zh: "OpenAI 推出的通用 AI 助手，可用于学习、工作和编程。"
        },
        url: "https://chatgpt.com/"
    },
    {
        name: "Claude", icon: "🧠", category: "text", label: "text",
        description: {
            ru: "ИИ от Anthropic для текстов, анализа документов и программирования.",
            en: "An AI assistant by Anthropic for writing, document analysis and coding.",
            zh: "Anthropic 推出的 AI 助手，可用于写作、文档分析和编程。"
        },
        url: "https://claude.ai/"
    },
    {
        name: "Gemini", icon: "✨", category: "text", label: "text",
        description: {
            ru: "ИИ-помощник Google для обучения и решения задач.",
            en: "Google's AI assistant for learning and problem-solving.",
            zh: "Google 的 AI 助手，可用于学习和解决问题。"
        },
        url: "https://gemini.google.com/"
    },
    {
        name: "Perplexity", icon: "🔎", category: "text", label: "search",
        description: {
            ru: "Поисковый ИИ для поиска информации и источников.",
            en: "An AI-powered search engine for finding information and sources.",
            zh: "AI 搜索引擎，帮助查找信息和资料来源。"
        },
        url: "https://www.perplexity.ai/"
    },
    {
        name: "DeepSeek", icon: "💡", category: "text", label: "text",
        description: {
            ru: "ИИ для ответов на вопросы, программирования и анализа.",
            en: "An AI tool for answering questions, coding and analysis.",
            zh: "用于回答问题、编程和分析的 AI 工具。"
        },
        url: "https://www.deepseek.com/"
    },
    {
        name: "Leonardo AI", icon: "🎨", category: "image", label: "image",
        description: {
            ru: "Создание изображений и визуального контента.",
            en: "Create images and visual content.",
            zh: "用于创建图像和视觉内容。"
        },
        url: "https://leonardo.ai/"
    },
    {
        name: "Ideogram", icon: "🖼️", category: "image", label: "image",
        description: {
            ru: "Генерация изображений, постеров и дизайнов.",
            en: "Generate images, posters and designs.",
            zh: "用于生成图像、海报和设计作品。"
        },
        url: "https://ideogram.ai/"
    },
    {
        name: "Adobe Firefly", icon: "🔥", category: "image", label: "image",
        description: {
            ru: "Создание и редактирование изображений.",
            en: "Create and edit images.",
            zh: "用于创建和编辑图像。"
        },
        url: "https://firefly.adobe.com/"
    },
    {
        name: "Runway", icon: "🎬", category: "video", label: "video",
        description: {
            ru: "Создание и редактирование видео с помощью ИИ.",
            en: "Create and edit videos with AI.",
            zh: "使用 AI 创建和编辑视频。"
        },
        url: "https://runwayml.com/"
    },
    {
        name: "Pika", icon: "🎥", category: "video", label: "video",
        description: {
            ru: "Генерация видеороликов и анимации.",
            en: "Generate videos and animations.",
            zh: "用于生成视频和动画。"
        },
        url: "https://pika.art/"
    },
    {
        name: "Suno", icon: "🎵", category: "audio", label: "audio",
        description: {
            ru: "Создание музыки и песен с помощью ИИ.",
            en: "Create music and songs with AI.",
            zh: "使用 AI 创作音乐和歌曲。"
        },
        url: "https://suno.com/"
    },
    {
        name: "ElevenLabs", icon: "🎙️", category: "audio", label: "audio",
        description: {
            ru: "Генерация голоса и озвучивание текста.",
            en: "AI voice generation and text-to-speech.",
            zh: "AI 语音生成和文本转语音。"
        },
        url: "https://elevenlabs.io/"
    },
    {
        name: "Microsoft Copilot", icon: "💻", category: "text", label: "text",
        description: {
            ru: "ИИ-помощник Microsoft для работы и учёбы.",
            en: "Microsoft's AI assistant for work and study.",
            zh: "Microsoft 的 AI 助手，可用于工作和学习。"
        },
        url: "https://copilot.microsoft.com/"
    },
    {
        name: "Grok", icon: "🚀", category: "text", label: "text",
        description: {
            ru: "ИИ-помощник для общения и анализа информации.",
            en: "An AI assistant for conversations and information analysis.",
            zh: "用于对话和信息分析的 AI 助手。"
        },
        url: "https://grok.com/"
    },
    {
        name: "NotebookLM", icon: "📚", category: "text", label: "learning",
        description: {
            ru: "Анализ документов, заметок и учебных материалов.",
            en: "Analyze documents, notes and study materials.",
            zh: "用于分析文档、笔记和学习资料。"
        },
        url: "https://notebooklm.google.com/"
    },
    {
        name: "Qwen", icon: "🌐", category: "text", label: "text",
        description: {
            ru: "ИИ для общения, анализа и программирования.",
            en: "An AI tool for conversation, analysis and coding.",
            zh: "用于对话、分析和编程的 AI 工具。"
        },
        url: "https://chat.qwen.ai/"
    },
    {
        name: "Mistral Le Chat", icon: "🧠", category: "text", label: "text",
        description: {
            ru: "Универсальный ИИ-помощник от Mistral.",
            en: "A versatile AI assistant by Mistral.",
            zh: "Mistral 推出的通用 AI 助手。"
        },
        url: "https://chat.mistral.ai/"
    },
    {
        name: "Midjourney", icon: "🎨", category: "image", label: "image",
        description: {
            ru: "Создание художественных изображений с помощью ИИ.",
            en: "Create artistic images with AI.",
            zh: "使用 AI 创作艺术图像。"
        },
        url: "https://www.midjourney.com/"
    },
    {
        name: "Playground AI", icon: "🖼️", category: "image", label: "image",
        description: {
            ru: "Создание и редактирование изображений.",
            en: "Create and edit images.",
            zh: "用于创建和编辑图像。"
        },
        url: "https://playground.com/"
    },
    {
        name: "Kling AI", icon: "🎞️", category: "video", label: "video",
        description: {
            ru: "Генерация видео с помощью искусственного интеллекта.",
            en: "Generate videos using artificial intelligence.",
            zh: "使用人工智能生成视频。"
        },
        url: "https://klingai.com/"
    },
    {
        name: "Luma AI", icon: "🎥", category: "video", label: "video",
        description: {
            ru: "Создание видео и визуальных сцен.",
            en: "Create videos and visual scenes.",
            zh: "用于创建视频和视觉场景。"
        },
        url: "https://lumalabs.ai/"
    },
    {
        name: "HeyGen", icon: "🗣️", category: "video", label: "video",
        description: {
            ru: "Создание видео с виртуальными ведущими.",
            en: "Create videos with virtual presenters.",
            zh: "使用虚拟主持人创建视频。"
        },
        url: "https://www.heygen.com/"
    },
    {
        name: "Higgsfield", icon: "🎬", category: "video", label: "video",
        description: {
            ru: "Создание кинематографических видео с ИИ.",
            en: "Create cinematic videos with AI.",
            zh: "使用 AI 创建电影风格的视频。"
        },
        url: "https://higgsfield.ai/"
    },
    {
        name: "Udio", icon: "🎼", category: "audio", label: "audio",
        description: {
            ru: "Генерация музыки с помощью ИИ.",
            en: "Generate music with AI.",
            zh: "使用 AI 生成音乐。"
        },
        url: "https://www.udio.com/"
    },
    {
        name: "PlayHT", icon: "🎧", category: "audio", label: "audio",
        description: {
            ru: "Создание реалистичной речи и озвучки.",
            en: "Create realistic speech and voiceovers.",
            zh: "用于创建逼真的语音和配音。"
        },
        url: "https://play.ht/"
    },
    {
        name: "Cursor", icon: "⌨️", category: "text", label: "programming",
        description: {
            ru: "Редактор кода с ИИ-помощником.",
            en: "A code editor with an AI assistant.",
            zh: "带有 AI 助手的代码编辑器。"
        },
        url: "https://cursor.com/"
    },
    {
        name: "GitHub Copilot", icon: "🐙", category: "text", label: "programming",
        description: {
            ru: "ИИ-помощник для написания программного кода.",
            en: "An AI assistant for writing code.",
            zh: "用于编写代码的 AI 助手。"
        },
        url: "https://github.com/features/copilot"
    },
    {
        name: "Lovable", icon: "💜", category: "text", label: "websites",
        description: {
            ru: "Создание веб-сайтов и приложений с помощью ИИ.",
            en: "Create websites and apps with AI.",
            zh: "使用 AI 创建网站和应用程序。"
        },
        url: "https://lovable.dev/"
    },
    {
        name: "Gamma", icon: "📊", category: "text", label: "presentations",
        description: {
            ru: "Создание презентаций и документов с ИИ.",
            en: "Create presentations and documents with AI.",
            zh: "使用 AI 创建演示文稿和文档。"
        },
        url: "https://gamma.app/"
    },
    {
        name: "n8n", icon: "⚙️", category: "text", label: "automation",
        description: {
            ru: "Автоматизация рабочих процессов и задач.",
            en: "Automate workflows and tasks.",
            zh: "用于自动化工作流程和任务。"
        },
        url: "https://n8n.io/"
    }
];

/* ЯЗЫК */

let currentLanguage = localStorage.getItem("aiLanguage") || "ru";

if (!translations[currentLanguage]) currentLanguage = "ru";

function t(key) {
    return translations[currentLanguage][key];
}

function applyLanguage() {
    const dictionary = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (dictionary[key] !== undefined &&
            typeof dictionary[key] === "string") {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (dictionary[key]) {
            element.placeholder = dictionary[key];
        }
    });

    const languageSelect = document.getElementById("language-select");
    if (languageSelect) languageSelect.value = currentLanguage;

    updateThemeLabel();
    renderTools();
}

const languageSelect = document.getElementById("language-select");

if (languageSelect) {
    languageSelect.value = currentLanguage;

    languageSelect.addEventListener("change", () => {
        currentLanguage = languageSelect.value;
        localStorage.setItem("aiLanguage", currentLanguage);
        applyLanguage();
    });
}

/* ХРАНИЛИЩЕ */

function loadStorage(key, fallback) {
    try {
        const saved = localStorage.getItem(key);
        return saved === null ? fallback : JSON.parse(saved);
    } catch {
        return fallback;
    }
}

function saveStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch {
        return false;
    }
}

let favorites = loadStorage("aiFavorites", []);
let ratings = loadStorage("aiRatings", {});
let reviews = loadStorage("aiReviews", []);
let votedTools = loadStorage("aiVoted", []);
let pendingRatings = {};

if (!Array.isArray(favorites)) favorites = [];
if (!Array.isArray(reviews)) reviews = [];
if (!Array.isArray(votedTools)) votedTools = [];
if (!ratings || typeof ratings !== "object" || Array.isArray(ratings)) ratings = {};

let currentCategory = "all";
let currentSort = "default";

const popularTools = [
    "ChatGPT", "Gemini", "Claude", "DeepSeek",
    "Midjourney", "Suno", "Perplexity", "Runway"
];

/* ЭЛЕМЕНТЫ */

const toolList = document.getElementById("tool-list");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-btn");
const resultCount = document.getElementById("result-count");
const emptyMessage = document.getElementById("empty-message");
const filterButtons = document.querySelectorAll(".filter");
const sortSelect = document.getElementById("sort-tools");

/* ЗАЩИТА ТЕКСТА */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);
}

/* РЕЙТИНГ */

function getRating(toolName) {
    const oldRating = ratings[toolName] || { total: 0, count: 0 };
    const toolReviews = reviews.filter(review => review.tool === toolName);

    const total = (Number(oldRating.total) || 0) +
        toolReviews.reduce((sum, review) => sum + (Number(review.rating) || 0), 0);

    const count = (Number(oldRating.count) || 0) + toolReviews.length;

    return {
        count,
        average: count ? total / count : 0
    };
}

/* ПЕРЕВОД ОПИСАНИЯ */

function getToolDescription(tool) {
    return tool.description[currentLanguage] || tool.description.ru;
}

function getToolLabel(tool) {
    return t("category")[tool.label] || tool.label;
}

/* КАРТОЧКИ */

function renderTools() {
    if (!toolList) return;

    const query = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    let filteredTools = tools.filter(tool => {
        const matchesCategory =
            currentCategory === "all" ||
            (currentCategory === "favorites"
                ? favorites.includes(tool.name)
                : tool.category === currentCategory);

        const searchableText = [
            tool.name,
            getToolDescription(tool),
            getToolLabel(tool)
        ].join(" ").toLowerCase();

        return matchesCategory && searchableText.includes(query);
    });

    if (currentSort === "az") {
        filteredTools.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === "za") {
        filteredTools.sort((a, b) => b.name.localeCompare(a.name));
    } else if (currentSort === "popular") {
        filteredTools.sort((a, b) => {
            const aIndex = popularTools.indexOf(a.name);
            const bIndex = popularTools.indexOf(b.name);
            return (aIndex < 0 ? 999 : aIndex) - (bIndex < 0 ? 999 : bIndex);
        });
    }

    if (resultCount) {
        resultCount.textContent = t("found")(filteredTools.length, tools.length);
    }

    if (emptyMessage) {
        emptyMessage.hidden = filteredTools.length > 0;

        if (!filteredTools.length) {
            emptyMessage.textContent = query
                ? t("noResults")(searchInput.value.trim())
                : currentCategory === "favorites"
                    ? t("noFavorites")
                    : t("noCategory");
        }
    }

    toolList.innerHTML = filteredTools.map(tool => {
        const saved = favorites.includes(tool.name);
        const rating = getRating(tool.name);
        const alreadyVoted = votedTools.includes(tool.name);
        const toolReviews = reviews.filter(review => review.tool === tool.name);

        return `
            <article class="card">
                <div class="card-icon">${tool.icon}</div>
                <h3>${escapeHTML(tool.name)}</h3>
                <p>${escapeHTML(getToolDescription(tool))}</p>
                <span class="card-category">${escapeHTML(getToolLabel(tool))}</span>

                <div class="rating">
                    <div class="rating-stars" data-rating="${escapeHTML(tool.name)}">
                        ${[1, 2, 3, 4, 5].map(number => `
                            <button
                                type="button"
                                class="star-btn ${number <= rating.average ? "selected" : ""}"
                                data-star="${number}"
                                data-tool="${escapeHTML(tool.name)}"
                                ${alreadyVoted ? "disabled" : ""}
                                aria-label="${escapeHTML(t("rate")(number))}">
                                ★
                            </button>
                        `).join("")}
                    </div>

                    <p class="rating-info">
                        ${rating.count
                            ? t("ratingCount")(rating.average.toFixed(1), rating.count)
                            : t("noRatings")}
                    </p>
                </div>

                ${alreadyVoted ? `
                    <p class="review-status">${escapeHTML(t("alreadyReviewed"))}</p>
                ` : `
                    <form class="review-form" data-review-form="${escapeHTML(tool.name)}">
                        <textarea
                            class="review-input"
                            name="comment"
                            maxlength="300"
                            placeholder="${escapeHTML(t("reviewPlaceholder"))}"
                            required></textarea>

                        <button class="review-submit" type="submit">
                            ${escapeHTML(t("sendReview"))}
                        </button>
                    </form>
                `}

                <details class="reviews-list">
                    <summary>${escapeHTML(t("reviews")(toolReviews.length))}</summary>
                    ${toolReviews.length
                        ? toolReviews.map(review => {
                            const stars = Math.max(0, Math.min(5, Number(review.rating) || 0));
                            return `
                                <div class="review-item">
                                    <div class="review-stars">${"★".repeat(stars)}${"☆".repeat(5 - stars)}</div>
                                    <p>${escapeHTML(review.comment)}</p>
                                </div>
                            `;
                        }).join("")
                        : `<p>${escapeHTML(t("noReviews"))}</p>`
                    }
                </details>

                <a class="open-tool-btn"
                   href="${escapeHTML(tool.url)}"
                   target="_blank"
                   rel="noopener noreferrer">
                    ${escapeHTML(t("openTool"))}
                </a>

                <button
                    class="favorite-btn ${saved ? "saved" : ""}"
                    data-favorite="${escapeHTML(tool.name)}"
                    type="button"
                    aria-pressed="${saved}">
                    ${escapeHTML(saved ? t("savedFavorite") : t("favorite"))}
                </button>

                <a class="details-btn"
                   href="details.html?name=${encodeURIComponent(tool.name)}">
                    ${escapeHTML(t("details"))}
                </a>
            </article>
        `;
    }).join("");

    filterButtons.forEach(button => {
        const active = button.dataset.category === currentCategory;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

/* КЛИКИ ПО ЗВЁЗДАМ И ИЗБРАННОМУ */

if (toolList) {
    toolList.addEventListener("click", event => {
        const starButton = event.target.closest("[data-star]");

        if (starButton) {
            const toolName = starButton.dataset.tool;

            if (votedTools.includes(toolName)) return;

            pendingRatings[toolName] = Number(starButton.dataset.star);

            const starContainer = starButton.closest(".rating-stars");

            starContainer.querySelectorAll(".star-btn").forEach(button => {
                button.classList.toggle(
                    "selected",
                    Number(button.dataset.star) <= pendingRatings[toolName]
                );
            });

            return;
        }

        const favoriteButton = event.target.closest("[data-favorite]");

        if (favoriteButton) {
            const name = favoriteButton.dataset.favorite;

            favorites = favorites.includes(name)
                ? favorites.filter(item => item !== name)
                : [...favorites, name];

            saveStorage("aiFavorites", favorites);
            renderTools();
        }
    });

    /* ОТПРАВКА ОТЗЫВА */

    toolList.addEventListener("submit", event => {
        const form = event.target.closest("[data-review-form]");
        if (!form) return;

        event.preventDefault();

        const toolName = form.dataset.reviewForm;
        const comment = form.elements.comment.value.trim();
        const rating = pendingRatings[toolName];

        if (votedTools.includes(toolName)) {
            alert(t("alertAlready"));
            return;
        }

        if (!rating) {
            alert(t("alertRating"));
            return;
        }

        if (comment.length < 3) {
            alert(t("alertComment"));
            return;
        }

        reviews.push({
            tool: toolName,
            rating: rating,
            comment: comment,
            date: new Date().toISOString()
        });

        votedTools.push(toolName);

        const reviewsSaved = saveStorage("aiReviews", reviews);
        const votesSaved = saveStorage("aiVoted", votedTools);

        if (!reviewsSaved || !votesSaved) {
            reviews.pop();
            votedTools.pop();
            saveStorage("aiReviews", reviews);
            saveStorage("aiVoted", votedTools);
            alert(t("alertError"));
            return;
        }

        delete pendingRatings[toolName];

        alert(t("alertSaved"));
        renderTools();
    });
}

/* ФИЛЬТРЫ */

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentCategory = button.dataset.category || "all";
        renderTools();
    });
});

/* ПОИСК */

if (searchInput) {
    searchInput.addEventListener("input", renderTools);
}

if (searchButton) {
    searchButton.addEventListener("click", renderTools);
}

/* СОРТИРОВКА */

if (sortSelect) {
    sortSelect.addEventListener("change", () => {
        currentSort = sortSelect.value;
        renderTools();
    });
}

/* ТЕМА */

function updateThemeLabel() {
    const label = document.getElementById("theme-label");
    if (!label) return;

    const theme = localStorage.getItem("aiTheme") || "dark";
    label.textContent = theme === "dark" ? t("themeDay") : t("themeNight");
}

/* ПРИМЕНЕНИЕ ПЕРЕВОДА */

applyLanguage();

/* АНИМАЦИЯ ИКОНОК */

function startAIIntroAnimation() {
    const hero = document.querySelector(".hero");
    const cards = [...document.querySelectorAll("#tool-list .card")];

    if (!hero || cards.length !== 30) return;
    if (sessionStorage.getItem("aiIntroPlayed")) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    sessionStorage.setItem("aiIntroPlayed", "true");

    const heroRect = hero.getBoundingClientRect();
    const items = [];

    cards.forEach((card, index) => {
        const target = card.querySelector(".card-icon");
        if (!target) return;

        const flying = document.createElement("div");
        flying.className = "flying-ai-icon";
        flying.textContent = target.textContent.trim();

        document.body.appendChild(flying);
        target.classList.add("ai-icon-hidden");

        const columns = window.innerWidth < 600 ? 5 : 6;
        const rows = Math.ceil(cards.length / columns);
        const col = index % columns;
        const row = Math.floor(index / columns);

        const spacingX = heroRect.width / columns;
        const spacingY = Math.min(65, (heroRect.height - 60) / rows);

        const startX = heroRect.left + col * spacingX + spacingX / 2 - 21;
        const startY = heroRect.top + 90 + row * spacingY;

        flying.style.left = `${startX}px`;
        flying.style.top = "-70px";
        flying.style.transform = "scale(0.65)";

        items.push({ flying, target, startX, startY });
    });

    requestAnimationFrame(() => {
        items.forEach((item, index) => {
            setTimeout(() => {
                item.flying.style.opacity = "1";
                item.flying.style.left = `${item.startX}px`;
                item.flying.style.top = `${item.startY}px`;
                item.flying.style.transform = "scale(1)";
            }, index * 65);
        });
    });

    const arrivalTime = 1700 + items.length * 65 + 1000;

    setTimeout(() => {
        items.forEach((item, index) => {
            setTimeout(() => {
                const rect = item.target.getBoundingClientRect();

                item.flying.style.left =
                    `${rect.left + rect.width / 2 - 21}px`;

                item.flying.style.top =
                    `${rect.top + rect.height / 2 - 21}px`;

                item.flying.style.transform = "scale(0.8)";

                setTimeout(() => {
                    item.target.classList.remove("ai-icon-hidden");
                    item.flying.style.opacity = "0";

                    setTimeout(() => item.flying.remove(), 500);
                }, 1700);

            }, index * 55);
        });
    }, arrivalTime);
}

/* ЗАПУСК */

document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("tool-list");
    if (!list) return;

    const check = setInterval(() => {
        const cards = list.querySelectorAll(".card");

        if (cards.length === 30) {
            clearInterval(check);
            setTimeout(startAIIntroAnimation, 500);
        }
    }, 200);

    setTimeout(() => clearInterval(check), 15000);
});
