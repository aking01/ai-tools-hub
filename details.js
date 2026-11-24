
// ==========================================
// ПЕРЕВОДЫ СТРАНИЦЫ НЕЙРОСЕТЕЙ
// ==========================================

const toolsData = [
    {
        name: "ChatGPT",
        icon: "🤖",
        category: "Текст",
        description: "Универсальный ИИ-помощник от OpenAI для учёбы, работы и программирования.",
        url: "https://chatgpt.com/",
        about: "ChatGPT разработан компанией OpenAI. Он помогает решать задачи, анализировать информацию и создавать контент.",
        features: ["Ответы на вопросы", "Создание текстов", "Программирование", "Анализ документов и изображений", "Помощь в обучении"],
        advantages: "Универсальность, удобный интерфейс и множество возможностей.",
        disadvantages: "Некоторые модели и функции доступны по платной подписке.",
        price: "Есть бесплатный тариф и платные подписки."
    },
    {
        name: "Claude", icon: "🧠", category: "Текст",
        description: "ИИ от Anthropic для работы с текстами, документами и программированием.",
        url: "https://claude.ai/",
        about: "Claude — семейство ИИ-моделей компании Anthropic.",
        features: ["Написание текстов", "Анализ документов", "Программирование", "Обработка информации", "Обучение"],
        advantages: "Хорошо справляется с длинными текстами и сложными задачами.",
        disadvantages: "Есть ограничения бесплатного использования.",
        price: "Бесплатный доступ и платные тарифы."
    },
    {
        name: "Gemini", icon: "✨", category: "Текст",
        description: "ИИ-помощник Google для обучения и решения различных задач.",
        url: "https://gemini.google.com/",
        about: "Gemini — искусственный интеллект компании Google.",
        features: ["Ответы на вопросы", "Создание текстов", "Анализ изображений", "Программирование", "Интеграция с Google"],
        advantages: "Удобная интеграция с сервисами Google.",
        disadvantages: "Некоторые возможности зависят от региона и подписки.",
        price: "Бесплатный доступ и платные тарифы."
    },
    {
        name: "Perplexity", icon: "🔎", category: "Поиск",
        description: "Поисковый ИИ для поиска информации и изучения источников.",
        url: "https://www.perplexity.ai/",
        about: "Perplexity — поисковая система с искусственным интеллектом.",
        features: ["Поиск информации", "Ответы со ссылками", "Исследование тем", "Анализ информации", "Поиск материалов"],
        advantages: "Удобен для поиска информации и источников.",
        disadvantages: "Найденную информацию необходимо проверять.",
        price: "Бесплатный тариф и платная подписка."
    },
    {
        name: "DeepSeek", icon: "💡", category: "Текст",
        description: "ИИ для ответов на вопросы, программирования и анализа.",
        url: "https://www.deepseek.com/",
        about: "DeepSeek — компания, разрабатывающая модели искусственного интеллекта.",
        features: ["Ответы на вопросы", "Программирование", "Математические задачи", "Анализ текстов", "Обучение"],
        advantages: "Полезен для технических задач и обучения.",
        disadvantages: "Может допускать ошибки.",
        price: "Бесплатный чат; API оплачивается отдельно."
    },
    {
        name: "Leonardo AI", icon: "🎨", category: "Изображения",
        description: "ИИ для создания изображений и визуального контента.",
        url: "https://leonardo.ai/",
        about: "Leonardo AI — платформа для генерации изображений.",
        features: ["Создание изображений", "Генерация графики", "Игровые объекты", "Визуальные стили", "Редактирование"],
        advantages: "Большой выбор инструментов для создания графики.",
        disadvantages: "Количество генераций может быть ограничено.",
        price: "Есть бесплатные возможности и платные подписки."
    },
    {
        name: "Ideogram", icon: "🖼️", category: "Изображения",
        description: "ИИ для генерации изображений, постеров и дизайнов.",
        url: "https://ideogram.ai/",
        about: "Ideogram — сервис искусственного интеллекта для создания изображений и графического дизайна.",
        features: ["Генерация изображений", "Постеры", "Текст на изображениях", "Логотипы", "Дизайн"],
        advantages: "Хорошо подходит для изображений с текстом.",
        disadvantages: "Результат не всегда точно соответствует запросу.",
        price: "Бесплатный доступ с ограничениями и платные тарифы."
    },
    {
        name: "Adobe Firefly", icon: "🔥", category: "Изображения",
        description: "Инструмент Adobe для создания и редактирования изображений.",
        url: "https://firefly.adobe.com/",
        about: "Adobe Firefly — семейство генеративных ИИ-инструментов Adobe.",
        features: ["Генерация изображений", "Удаление объектов", "Редактирование фотографий", "Визуальные эффекты", "Генеративная заливка"],
        advantages: "Хорошо интегрируется с инструментами Adobe.",
        disadvantages: "Некоторые функции требуют подписки.",
        price: "Есть бесплатные кредиты и платные планы."
    },
    {
        name: "Runway", icon: "🎬", category: "Видео",
        description: "Платформа для создания и редактирования видео с помощью ИИ.",
        url: "https://runwayml.com/",
        about: "Runway — платформа искусственного интеллекта для генерации видео.",
        features: ["Создание видео по тексту", "Анимация изображений", "Редактирование видео", "Визуальные эффекты", "Обработка видео"],
        advantages: "Много инструментов для работы с видео.",
        disadvantages: "Генерация расходует кредиты.",
        price: "Бесплатный доступ с ограничениями и платные тарифы."
    },
    {
        name: "Pika", icon: "🎥", category: "Видео",
        description: "ИИ-сервис для генерации видеороликов и анимации.",
        url: "https://pika.art/",
        about: "Pika — инструмент искусственного интеллекта для создания и изменения видео.",
        features: ["Генерация видео", "Анимация изображений", "Короткие ролики", "Редактирование видео", "Эффекты"],
        advantages: "Подходит для создания коротких творческих роликов.",
        disadvantages: "Есть ограничения на количество генераций.",
        price: "Бесплатные возможности и платные тарифы."
    },
    {
        name: "Suno", icon: "🎵", category: "Звук",
        description: "ИИ для создания музыки и песен.",
        url: "https://suno.com/",
        about: "Suno — платформа для создания музыки с помощью искусственного интеллекта.",
        features: ["Создание музыки", "Генерация песен", "Тексты песен", "Музыкальные стили", "Вокал"],
        advantages: "Позволяет создавать музыкальные идеи без музыкального опыта.",
        disadvantages: "Коммерческое использование зависит от тарифа.",
        price: "Бесплатный тариф и платные подписки."
    },
    {
        name: "ElevenLabs", icon: "🎙️", category: "Звук",
        description: "ИИ для генерации голоса и озвучивания текста.",
        url: "https://elevenlabs.io/",
        about: "ElevenLabs специализируется на технологиях искусственного интеллекта для синтеза и обработки речи.",
        features: ["Преобразование текста в речь", "Генерация голосов", "Озвучивание видео", "Многоязычная речь", "Обработка аудио"],
        advantages: "Качественная генерация речи и поддержка разных языков.",
        disadvantages: "Есть ограничения на использование голосов и генераций.",
        price: "Бесплатный тариф и платные подписки."
    },
    {
        name: "Microsoft Copilot", icon: "💻", category: "Текст",
        description: "ИИ-помощник Microsoft для работы и учёбы.",
        url: "https://copilot.microsoft.com/",
        about: "Microsoft Copilot — ИИ-помощник для поиска информации, создания контента и решения задач.",
        features: ["Ответы на вопросы", "Создание текстов", "Поиск информации", "Работа с изображениями", "Помощь в учёбе"],
        advantages: "Удобная интеграция с продуктами Microsoft.",
        disadvantages: "Некоторые функции ограничены.",
        price: "Есть бесплатный доступ и платные планы."
    },
    {
        name: "Grok", icon: "🚀", category: "Текст",
        description: "ИИ-помощник для общения и анализа информации.",
        url: "https://grok.com/",
        about: "Grok — искусственный интеллект компании xAI.",
        features: ["Общение", "Ответы на вопросы", "Анализ информации", "Создание текстов", "Работа с изображениями"],
        advantages: "Разнообразные возможности для работы с информацией.",
        disadvantages: "Доступность функций зависит от тарифа и региона.",
        price: "Есть ограничения бесплатного доступа и платные планы."
    },
    {
        name: "NotebookLM", icon: "📚", category: "Текст",
        description: "ИИ для анализа документов и учебных материалов.",
        url: "https://notebooklm.google.com/",
        about: "NotebookLM от Google помогает изучать документы и работать с собственными источниками.",
        features: ["Анализ документов", "Создание кратких пересказов", "Ответы по источникам", "Учебные материалы", "Аудиообзоры"],
        advantages: "Удобен для учёбы и исследования документов.",
        disadvantages: "Качество ответов зависит от загруженных материалов.",
        price: "Бесплатный доступ и дополнительные платные возможности."
    },
    {
        name: "Qwen", icon: "🌐", category: "Текст",
        description: "ИИ для общения, анализа и программирования.",
        url: "https://chat.qwen.ai/",
        about: "Qwen — семейство моделей искусственного интеллекта компании Alibaba.",
        features: ["Ответы на вопросы", "Программирование", "Анализ текста", "Работа с изображениями", "Перевод"],
        advantages: "Подходит для разных интеллектуальных задач.",
        disadvantages: "Может допускать ошибки.",
        price: "Есть бесплатные возможности и платные сервисы."
    },
    {
        name: "Mistral Le Chat", icon: "🧠", category: "Текст",
        description: "Универсальный ИИ-помощник от Mistral.",
        url: "https://chat.mistral.ai/",
        about: "Le Chat — чат-помощник на основе моделей Mistral AI.",
        features: ["Создание текстов", "Ответы на вопросы", "Поиск информации", "Анализ документов", "Программирование"],
        advantages: "Быстрый помощник для повседневных задач.",
        disadvantages: "Некоторые возможности доступны по подписке.",
        price: "Бесплатный доступ и платные тарифы."
    },
    {
        name: "Midjourney", icon: "🎨", category: "Изображения",
        description: "Создание художественных изображений с помощью ИИ.",
        url: "https://www.midjourney.com/",
        about: "Midjourney — сервис генерации изображений по текстовым описаниям.",
        features: ["Генерация изображений", "Разные художественные стили", "Создание концепт-арта", "Дизайн персонажей", "Визуальные идеи"],
        advantages: "Высокое качество художественных изображений.",
        disadvantages: "Для использования обычно требуется платная подписка.",
        price: "Платные тарифы."
    },
    {
        name: "Playground AI", icon: "🖼️", category: "Изображения",
        description: "Создание и редактирование изображений.",
        url: "https://playground.com/",
        about: "Playground — платформа для создания визуального контента с помощью ИИ.",
        features: ["Генерация изображений", "Редактирование картинок", "Дизайн", "Создание иллюстраций", "Работа с изображениями"],
        advantages: "Подходит для творческих и дизайнерских задач.",
        disadvantages: "Некоторые функции могут быть ограничены тарифом.",
        price: "Доступность бесплатных функций и платных планов зависит от условий сервиса."
    },
    {
        name: "Kling AI", icon: "🎞️", category: "Видео",
        description: "Генерация видео с помощью искусственного интеллекта.",
        url: "https://klingai.com/",
        about: "Kling AI — платформа для создания видео по тексту и изображениям.",
        features: ["Видео по тексту", "Анимация изображений", "Создание сцен", "Редактирование видео", "Визуальные эффекты"],
        advantages: "Подходит для создания коротких видеороликов.",
        disadvantages: "Генерация может занимать время и расходовать кредиты.",
        price: "Есть бесплатные возможности и платные планы."
    },
    {
        name: "Luma AI", icon: "🎥", category: "Видео",
        description: "Создание видео и визуальных сцен с помощью ИИ.",
        url: "https://lumalabs.ai/",
        about: "Luma AI разрабатывает инструменты генеративного искусственного интеллекта для визуального контента.",
        features: ["Генерация видео", "Работа с изображениями", "Создание визуальных сцен", "Анимация", "Эксперименты с видео"],
        advantages: "Полезен для творческих проектов.",
        disadvantages: "Доступные функции зависят от тарифов.",
        price: "Есть платные планы и возможности с ограничениями."
    },
    {
        name: "HeyGen", icon: "🗣️", category: "Видео",
        description: "Создание видео с виртуальными ведущими.",
        url: "https://www.heygen.com/",
        about: "HeyGen — платформа для создания видео с ИИ-аватарами и синтезированной речью.",
        features: ["ИИ-аватары", "Озвучивание текста", "Перевод видео", "Создание презентационных роликов", "Синхронизация речи"],
        advantages: "Удобен для обучающих и рекламных видео.",
        disadvantages: "Бесплатное использование ограничено.",
        price: "Есть бесплатный тариф и платные подписки."
    },
    {
        name: "Higgsfield", icon: "🎬", category: "Видео",
        description: "Создание кинематографических видео с ИИ.",
        url: "https://higgsfield.ai/",
        about: "Higgsfield предлагает инструменты генерации видео и управления визуальными сценами.",
        features: ["Генерация видео", "Работа с изображениями", "Визуальные эффекты", "Кинематографические движения камеры", "Создание сцен"],
        advantages: "Много возможностей для визуального творчества.",
        disadvantages: "Некоторые функции требуют платных кредитов.",
        price: "Условия бесплатного доступа и подписок зависят от сервиса."
    },
    {
        name: "Udio", icon: "🎼", category: "Звук",
        description: "Генерация музыки с помощью ИИ.",
        url: "https://www.udio.com/",
        about: "Udio — сервис создания музыки с использованием искусственного интеллекта.",
        features: ["Создание музыки", "Генерация песен", "Музыкальные стили", "Работа с вокалом", "Музыкальные идеи"],
        advantages: "Позволяет экспериментировать с музыкальными идеями.",
        disadvantages: "Возможности зависят от доступных функций и условий использования.",
        price: "Есть бесплатные возможности и платные планы."
    },
    {
        name: "PlayHT", icon: "🎧", category: "Звук",
        description: "Создание реалистичной речи и озвучки.",
        url: "https://play.ht/",
        about: "PlayHT предлагает технологии синтеза речи и генерации голоса.",
        features: ["Преобразование текста в речь", "Генерация голосов", "Озвучивание материалов", "Работа с речью", "Разные голоса"],
        advantages: "Полезен для озвучивания контента.",
        disadvantages: "Возможности могут зависеть от тарифного плана.",
        price: "Условия тарифов нужно проверять на сайте."
    },
    {
        name: "Cursor", icon: "⌨️", category: "Программирование",
        description: "Редактор кода с ИИ-помощником.",
        url: "https://cursor.com/",
        about: "Cursor — редактор кода, который помогает программистам работать с проектами при помощи ИИ.",
        features: ["Написание кода", "Поиск ошибок", "Объяснение программ", "Редактирование файлов", "Работа с проектами"],
        advantages: "Ускоряет разработку программ и сайтов.",
        disadvantages: "Для некоторых функций требуется подписка.",
        price: "Есть бесплатный тариф и платные планы."
    },
    {
        name: "GitHub Copilot", icon: "🐙", category: "Программирование",
        description: "ИИ-помощник для написания программного кода.",
        url: "https://github.com/features/copilot",
        about: "GitHub Copilot помогает разработчикам писать, объяснять и улучшать код.",
        features: ["Автодополнение кода", "Создание функций", "Объяснение кода", "Поиск ошибок", "Помощь в разработке"],
        advantages: "Интегрируется с популярными редакторами кода.",
        disadvantages: "Есть ограничения бесплатного плана.",
        price: "Бесплатный план и платные подписки."
    },
    {
        name: "Lovable", icon: "💜", category: "Программирование",
        description: "Создание сайтов и приложений с помощью ИИ.",
        url: "https://lovable.dev/",
        about: "Lovable — платформа для разработки веб-проектов при помощи текстовых запросов.",
        features: ["Создание сайтов", "Создание интерфейсов", "Генерация кода", "Прототипирование", "Разработка приложений"],
        advantages: "Помогает быстро создавать прототипы.",
        disadvantages: "Бесплатные возможности ограничены.",
        price: "Есть бесплатные кредиты и платные планы."
    },
    {
        name: "Gamma", icon: "📊", category: "Текст",
        description: "Создание презентаций и документов с ИИ.",
        url: "https://gamma.app/",
        about: "Gamma — сервис для создания презентаций, страниц и визуальных документов.",
        features: ["Создание презентаций", "Генерация текстов", "Оформление слайдов", "Создание документов", "Визуальный дизайн"],
        advantages: "Ускоряет подготовку презентаций.",
        disadvantages: "Экспорт и некоторые функции могут быть ограничены.",
        price: "Есть бесплатный тариф и платные планы."
    },
    {
        name: "n8n", icon: "⚙️", category: "Автоматизация",
        description: "Автоматизация рабочих процессов и задач.",
        url: "https://n8n.io/",
        about: "n8n — платформа автоматизации, позволяющая соединять сервисы и создавать рабочие процессы.",
        features: ["Автоматизация задач", "Соединение сервисов", "Работа с API", "Создание рабочих процессов", "Интеграция ИИ"],
        advantages: "Гибкая настройка автоматизации.",
        disadvantages: "Для сложных сценариев потребуется техническое понимание.",
        price: "Есть бесплатный вариант самостоятельного размещения и платные облачные планы."
    }
];

const detailTranslations = {
    en: {
        titles: {
            back: "← Back to catalog",
            visit: "Visit AI tool →",
            about: "About this AI",
            features: "Main features",
            advantages: "Advantages",
            disadvantages: "Disadvantages",
            price: "Pricing",
            notFound: "AI tool not found",
            error: "Error",
            notFoundText: "Return to the catalog and choose another AI tool."
        },
        categories: {
            "Текст": "Text",
            "Поиск": "Search",
            "Изображения": "Images",
            "Видео": "Video",
            "Звук": "Audio",
            "Программирование": "Programming",
            "Автоматизация": "Automation"
        },
        data: {
            "ChatGPT": [
                "A versatile AI assistant from OpenAI for studying, working and programming.",
                "ChatGPT was developed by OpenAI. It helps solve problems, analyze information and create content.",
                ["Answering questions", "Creating text", "Programming", "Analyzing documents and images", "Learning assistance"],
                "Versatile, easy to use and offers many features.",
                "Some models and features require a paid subscription.",
                "Free plan and paid subscriptions."
            ],
            "Claude": [
                "An AI assistant from Anthropic for text, documents and programming.",
                "Claude is a family of AI models developed by Anthropic.",
                ["Writing text", "Document analysis", "Programming", "Processing information", "Learning"],
                "Works well with long texts and complex tasks.",
                "Free usage is limited.",
                "Free access and paid plans."
            ],
            "Gemini": [
                "Google's AI assistant for learning and solving various tasks.",
                "Gemini is an artificial intelligence system developed by Google.",
                ["Answering questions", "Creating text", "Image analysis", "Programming", "Google integration"],
                "Convenient integration with Google services.",
                "Some features depend on your region and subscription.",
                "Free access and paid plans."
            ],
            "Perplexity": [
                "An AI search engine for finding information and exploring sources.",
                "Perplexity is an AI-powered search engine.",
                ["Information search", "Answers with sources", "Researching topics", "Information analysis", "Finding resources"],
                "Useful for finding information and sources.",
                "Search results should be checked.",
                "Free plan and paid subscription."
            ],
            "DeepSeek": [
                "An AI assistant for questions, programming and analysis.",
                "DeepSeek is a company that develops artificial intelligence models.",
                ["Answering questions", "Programming", "Math problems", "Text analysis", "Learning"],
                "Useful for technical tasks and learning.",
                "It can make mistakes.",
                "Free chat; API is billed separately."
            ],
            "Leonardo AI": [
                "An AI platform for creating images and visual content.",
                "Leonardo AI is a platform for generating images.",
                ["Image generation", "Graphic creation", "Game assets", "Visual styles", "Editing"],
                "Offers many tools for creating graphics.",
                "The number of generations may be limited.",
                "Free features and paid subscriptions."
            ],
            "Ideogram": [
                "An AI tool for generating images, posters and designs.",
                "Ideogram is an AI service for image generation and graphic design.",
                ["Image generation", "Posters", "Text in images", "Logos", "Design"],
                "Works well with text inside images.",
                "Results may not always match the prompt.",
                "Limited free access and paid plans."
            ],
            "Adobe Firefly": [
                "Adobe's tool for creating and editing images.",
                "Adobe Firefly is a family of generative AI tools from Adobe.",
                ["Image generation", "Object removal", "Photo editing", "Visual effects", "Generative fill"],
                "Integrates well with Adobe tools.",
                "Some features require a subscription.",
                "Free credits and paid plans."
            ],
            "Runway": [
                "An AI platform for creating and editing videos.",
                "Runway is an artificial intelligence platform for video generation.",
                ["Text-to-video", "Image animation", "Video editing", "Visual effects", "Video processing"],
                "Offers many tools for working with video.",
                "Video generation uses credits.",
                "Limited free access and paid plans."
            ],
            "Pika": [
                "An AI service for generating videos and animations.",
                "Pika is an AI tool for creating and modifying videos.",
                ["Video generation", "Image animation", "Short videos", "Video editing", "Effects"],
                "Suitable for creating short creative videos.",
                "The number of generations is limited.",
                "Free features and paid plans."
            ],
            "Suno": [
                "An AI tool for creating music and songs.",
                "Suno is a platform for creating music with artificial intelligence.",
                ["Music creation", "Song generation", "Song lyrics", "Music styles", "Vocals"],
                "Lets you create music ideas without musical experience.",
                "Commercial use depends on the plan.",
                "Free plan and paid subscriptions."
            ],
            "ElevenLabs": [
                "An AI tool for voice generation and text-to-speech.",
                "ElevenLabs specializes in AI speech synthesis and audio processing.",
                ["Text-to-speech", "Voice generation", "Video voiceovers", "Multilingual speech", "Audio processing"],
                "High-quality speech generation and support for many languages.",
                "Voice and generation usage may be limited.",
                "Free plan and paid subscriptions."
            ],
            "Microsoft Copilot": [
                "Microsoft's AI assistant for work and study.",
                "Microsoft Copilot helps search for information, create content and solve tasks.",
                ["Answering questions", "Creating text", "Information search", "Working with images", "Study assistance"],
                "Convenient integration with Microsoft products.",
                "Some features are limited.",
                "Free access and paid plans."
            ],
            "Grok": [
                "An AI assistant for conversation and information analysis.",
                "Grok is an artificial intelligence developed by xAI.",
                ["Conversations", "Answering questions", "Information analysis", "Creating text", "Working with images"],
                "Offers various tools for working with information.",
                "Feature availability depends on the plan and region.",
                "Limited free access and paid plans."
            ],
            "NotebookLM": [
                "An AI tool for analyzing documents and study materials.",
                "NotebookLM from Google helps you study documents and work with your own sources.",
                ["Document analysis", "Summaries", "Source-based answers", "Study materials", "Audio overviews"],
                "Useful for studying and researching documents.",
                "Answer quality depends on the uploaded materials.",
                "Free access and additional paid features."
            ],
            "Qwen": [
                "An AI assistant for conversation, analysis and programming.",
                "Qwen is a family of AI models developed by Alibaba.",
                ["Answering questions", "Programming", "Text analysis", "Working with images", "Translation"],
                "Suitable for many different tasks.",
                "It can make mistakes.",
                "Free features and paid services."
            ],
            "Mistral Le Chat": [
                "A versatile AI assistant from Mistral.",
                "Le Chat is an AI assistant powered by Mistral AI models.",
                ["Writing text", "Answering questions", "Information search", "Document analysis", "Programming"],
                "A fast assistant for everyday tasks.",
                "Some features require a subscription.",
                "Free access and paid plans."
            ],
            "Midjourney": [
                "Create artistic images using artificial intelligence.",
                "Midjourney is an image-generation service that uses text prompts.",
                ["Image generation", "Artistic styles", "Concept art", "Character design", "Visual ideas"],
                "High-quality artistic images.",
                "A paid subscription is usually required.",
                "Paid plans."
            ],
            "Playground AI": [
                "A platform for creating and editing images.",
                "Playground is a platform for creating visual content with AI.",
                ["Image generation", "Image editing", "Design", "Illustrations", "Working with images"],
                "Suitable for creative and design tasks.",
                "Some features may be limited by the plan.",
                "Free features and paid plans depend on current service conditions."
            ],
            "Kling AI": [
                "Generate videos using artificial intelligence.",
                "Kling AI is a platform for creating videos from text and images.",
                ["Text-to-video", "Image animation", "Scene creation", "Video editing", "Visual effects"],
                "Suitable for creating short videos.",
                "Generation can take time and use credits.",
                "Free features and paid plans."
            ],
            "Luma AI": [
                "Create videos and visual scenes using AI.",
                "Luma AI develops generative AI tools for visual content.",
                ["Video generation", "Working with images", "Visual scenes", "Animation", "Video experiments"],
                "Useful for creative projects.",
                "Available features depend on the plan.",
                "Paid plans and limited free features."
            ],
            "HeyGen": [
                "Create videos with virtual presenters.",
                "HeyGen is a platform for creating videos with AI avatars and synthetic speech.",
                ["AI avatars", "Text voiceovers", "Video translation", "Presentation videos", "Speech synchronization"],
                "Useful for educational and promotional videos.",
                "Free usage is limited.",
                "Free plan and paid subscriptions."
            ],
            "Higgsfield": [
                "Create cinematic videos with AI.",
                "Higgsfield offers tools for video generation and visual scene control.",
                ["Video generation", "Working with images", "Visual effects", "Cinematic camera movements", "Scene creation"],
                "Offers many creative visual tools.",
                "Some features require paid credits.",
                "Free access and subscription conditions depend on the service."
            ],
            "Udio": [
                "Generate music using artificial intelligence.",
                "Udio is a service for creating music with AI.",
                ["Music creation", "Song generation", "Music styles", "Working with vocals", "Musical ideas"],
                "Lets you experiment with musical ideas.",
                "Features depend on current service conditions.",
                "Free features and paid plans."
            ],
            "PlayHT": [
                "Create realistic speech and voiceovers.",
                "PlayHT offers speech synthesis and voice-generation technology.",
                ["Text-to-speech", "Voice generation", "Voiceovers", "Speech processing", "Different voices"],
                "Useful for creating voiceovers.",
                "Features may depend on the subscription plan.",
                "Check the service website for current pricing."
            ],
            "Cursor": [
                "A code editor with an AI assistant.",
                "Cursor is a code editor that helps developers work on projects using AI.",
                ["Writing code", "Finding errors", "Explaining programs", "Editing files", "Working with projects"],
                "Speeds up software and website development.",
                "Some features require a subscription.",
                "Free plan and paid plans."
            ],
            "GitHub Copilot": [
                "An AI assistant for writing software code.",
                "GitHub Copilot helps developers write, explain and improve code.",
                ["Code completion", "Creating functions", "Explaining code", "Finding errors", "Development assistance"],
                "Integrates with popular code editors.",
                "The free plan has limitations.",
                "Free plan and paid subscriptions."
            ],
            "Lovable": [
                "Create websites and applications using AI.",
                "Lovable is a platform for building web projects with text prompts.",
                ["Website creation", "Interface design", "Code generation", "Prototyping", "App development"],
                "Helps create prototypes quickly.",
                "Free features are limited.",
                "Free credits and paid plans."
            ],
            "Gamma": [
                "Create presentations and documents with AI.",
                "Gamma is a service for creating presentations, pages and visual documents.",
                ["Presentation creation", "Text generation", "Slide design", "Document creation", "Visual design"],
                "Speeds up presentation preparation.",
                "Export and some features may be limited.",
                "Free plan and paid plans."
            ],
            "n8n": [
                "Automate workflows and everyday tasks.",
                "n8n is an automation platform that connects services and creates workflows.",
                ["Task automation", "Connecting services", "Working with APIs", "Creating workflows", "AI integration"],
                "Flexible automation configuration.",
                "Complex workflows require technical knowledge.",
                "Free self-hosted version and paid cloud plans."
            ]
        }
    },

    zh: {
        titles: {
            back: "← 返回工具目录",
            visit: "访问 AI 工具 →",
            about: "关于此 AI",
            features: "主要功能",
            advantages: "优点",
            disadvantages: "缺点",
            price: "价格",
            notFound: "未找到该 AI 工具",
            error: "错误",
            notFoundText: "请返回目录并选择其他 AI 工具。"
        },
        categories: {
            "Текст": "文本",
            "Поиск": "搜索",
            "Изображения": "图像",
            "Видео": "视频",
            "Звук": "音频",
            "Программирование": "编程",
            "Автоматизация": "自动化"
        },
        data: {
            "ChatGPT": [
                "OpenAI 推出的通用 AI 助手，可用于学习、工作和编程。",
                "ChatGPT 由 OpenAI 开发，可以帮助解决问题、分析信息和创作内容。",
                ["回答问题", "创建文本", "编程", "分析文档和图像", "辅助学习"],
                "用途广泛，界面方便，功能丰富。",
                "部分模型和功能需要付费订阅。",
                "提供免费版本和付费订阅。"
            ],
            "Claude": [
                "Anthropic 推出的 AI 助手，适合处理文本、文档和编程任务。",
                "Claude 是 Anthropic 开发的一系列人工智能模型。",
                ["撰写文本", "分析文档", "编程", "处理信息", "学习"],
                "擅长处理长文本和复杂任务。",
                "免费使用存在限制。",
                "提供免费访问和付费套餐。"
            ],
            "Gemini": [
                "Google 的 AI 助手，可用于学习和解决各种问题。",
                "Gemini 是 Google 开发的人工智能系统。",
                ["回答问题", "创建文本", "图像分析", "编程", "集成 Google 服务"],
                "与 Google 服务集成方便。",
                "部分功能取决于地区和订阅。",
                "提供免费访问和付费套餐。"
            ],
            "Perplexity": [
                "AI 搜索工具，用于查找信息和研究资料来源。",
                "Perplexity 是一款人工智能搜索引擎。",
                ["搜索信息", "提供来源链接", "研究主题", "分析信息", "查找资料"],
                "适合查找信息和资料来源。",
                "搜索结果仍需核实。",
                "提供免费版本和付费订阅。"
            ],
            "DeepSeek": [
                "用于回答问题、编程和分析的 AI 工具。",
                "DeepSeek 是一家开发人工智能模型的公司。",
                ["回答问题", "编程", "数学题", "文本分析", "学习"],
                "适合技术任务和学习。",
                "可能会出现错误。",
                "聊天功能免费；API 需单独付费。"
            ],
            "Leonardo AI": [
                "用于创建图像和视觉内容的 AI 平台。",
                "Leonardo AI 是一个图像生成平台。",
                ["生成图像", "创建图形", "游戏素材", "视觉风格", "编辑"],
                "提供丰富的图形创作工具。",
                "生成次数可能受到限制。",
                "提供免费功能和付费订阅。"
            ],
            "Ideogram": [
                "用于生成图像、海报和设计的 AI 工具。",
                "Ideogram 是用于图像生成和图形设计的 AI 服务。",
                ["生成图像", "制作海报", "图像中的文字", "标志设计", "设计"],
                "擅长生成包含文字的图像。",
                "结果不一定完全符合提示。",
                "提供有限的免费访问和付费套餐。"
            ],
            "Adobe Firefly": [
                "Adobe 推出的图像创建和编辑工具。",
                "Adobe Firefly 是 Adobe 的生成式 AI 工具系列。",
                ["生成图像", "删除物体", "照片编辑", "视觉效果", "生成式填充"],
                "与 Adobe 工具集成良好。",
                "部分功能需要订阅。",
                "提供免费额度和付费套餐。"
            ],
            "Runway": [
                "用于创建和编辑视频的 AI 平台。",
                "Runway 是一个人工智能视频生成平台。",
                ["文本生成视频", "图像动画", "视频编辑", "视觉效果", "视频处理"],
                "提供多种视频制作工具。",
                "视频生成会消耗点数。",
                "提供有限的免费访问和付费套餐。"
            ],
            "Pika": [
                "用于生成视频和动画的 AI 服务。",
                "Pika 是用于创建和修改视频的 AI 工具。",
                ["视频生成", "图像动画", "短视频", "视频编辑", "特效"],
                "适合制作创意短视频。",
                "生成次数有限制。",
                "提供免费功能和付费套餐。"
            ],
            "Suno": [
                "用于创作音乐和歌曲的 AI 工具。",
                "Suno 是一个使用人工智能创作音乐的平台。",
                ["音乐创作", "歌曲生成", "歌词", "音乐风格", "人声"],
                "无需音乐经验也能创作音乐。",
                "商业使用取决于套餐。",
                "提供免费版本和付费订阅。"
            ],
            "ElevenLabs": [
                "用于生成语音和文本转语音的 AI 工具。",
                "ElevenLabs 专注于 AI 语音合成和音频处理技术。",
                ["文本转语音", "语音生成", "视频配音", "多语言语音", "音频处理"],
                "语音质量高，支持多种语言。",
                "语音和生成次数可能受到限制。",
                "提供免费版本和付费订阅。"
            ],
            "Microsoft Copilot": [
                "Microsoft 推出的工作和学习 AI 助手。",
                "Microsoft Copilot 帮助搜索信息、创建内容和解决问题。",
                ["回答问题", "创建文本", "搜索信息", "处理图像", "辅助学习"],
                "与 Microsoft 产品集成方便。",
                "部分功能受到限制。",
                "提供免费访问和付费套餐。"
            ],
            "Grok": [
                "用于对话和信息分析的 AI 助手。",
                "Grok 是 xAI 开发的人工智能。",
                ["对话", "回答问题", "信息分析", "创建文本", "处理图像"],
                "提供多种信息处理功能。",
                "功能取决于套餐和地区。",
                "提供有限的免费访问和付费套餐。"
            ],
            "NotebookLM": [
                "用于分析文档和学习资料的 AI 工具。",
                "Google 的 NotebookLM 帮助用户学习文档并处理自己的资料来源。",
                ["文档分析", "摘要", "基于来源回答问题", "学习资料", "音频概览"],
                "适合学习和研究文档。",
                "回答质量取决于上传的资料。",
                "提供免费访问和额外付费功能。"
            ],
            "Qwen": [
                "用于对话、分析和编程的 AI 助手。",
                "Qwen 是 Alibaba 开发的一系列人工智能模型。",
                ["回答问题", "编程", "文本分析", "处理图像", "翻译"],
                "适用于多种不同任务。",
                "可能会出现错误。",
                "提供免费功能和付费服务。"
            ],
            "Mistral Le Chat": [
                "Mistral 推出的通用 AI 助手。",
                "Le Chat 是基于 Mistral AI 模型的聊天助手。",
                ["撰写文本", "回答问题", "搜索信息", "分析文档", "编程"],
                "适合日常任务的快速助手。",
                "部分功能需要订阅。",
                "提供免费访问和付费套餐。"
            ],
            "Midjourney": [
                "使用人工智能创作艺术图像。",
                "Midjourney 是通过文本描述生成图像的服务。",
                ["图像生成", "艺术风格", "概念艺术", "角色设计", "视觉创意"],
                "能够生成高质量艺术图像。",
                "通常需要付费订阅。",
                "付费套餐。"
            ],
            "Playground AI": [
                "用于创建和编辑图像的平台。",
                "Playground 是一个使用 AI 创建视觉内容的平台。",
                ["图像生成", "图像编辑", "设计", "插画", "图像处理"],
                "适合创意和设计任务。",
                "部分功能可能受到套餐限制。",
                "免费功能和付费套餐取决于服务当前政策。"
            ],
            "Kling AI": [
                "使用人工智能生成视频。",
                "Kling AI 是一个通过文本和图像创建视频的平台。",
                ["文本生成视频", "图像动画", "场景创建", "视频编辑", "视觉效果"],
                "适合制作短视频。",
                "生成可能需要时间并消耗点数。",
                "提供免费功能和付费套餐。"
            ],
            "Luma AI": [
                "使用 AI 创建视频和视觉场景。",
                "Luma AI 开发用于视觉内容的生成式人工智能工具。",
                ["视频生成", "图像处理", "视觉场景", "动画", "视频实验"],
                "适合创意项目。",
                "可用功能取决于套餐。",
                "提供付费套餐和有限的免费功能。"
            ],
            "HeyGen": [
                "使用虚拟主持人创建视频。",
                "HeyGen 是一个使用 AI 虚拟形象和合成语音创建视频的平台。",
                ["AI 虚拟形象", "文本配音", "视频翻译", "演示视频", "语音同步"],
                "适合教育和宣传视频。",
                "免费使用受到限制。",
                "提供免费版本和付费订阅。"
            ],
            "Higgsfield": [
                "使用 AI 创建电影风格的视频。",
                "Higgsfield 提供视频生成和视觉场景控制工具。",
                ["视频生成", "图像处理", "视觉效果", "电影级镜头运动", "场景创建"],
                "提供丰富的视觉创作功能。",
                "部分功能需要付费点数。",
                "免费访问和订阅条件取决于服务。"
            ],
            "Udio": [
                "使用人工智能生成音乐。",
                "Udio 是一项使用 AI 创作音乐的服务。",
                ["音乐创作", "歌曲生成", "音乐风格", "人声处理", "音乐创意"],
                "可以尝试各种音乐创意。",
                "功能取决于当前服务条件。",
                "提供免费功能和付费套餐。"
            ],
            "PlayHT": [
                "创建逼真的语音和配音。",
                "PlayHT 提供语音合成和语音生成技术。",
                ["文本转语音", "语音生成", "内容配音", "语音处理", "不同声音"],
                "适合制作内容配音。",
                "功能可能取决于订阅套餐。",
                "请在服务网站查看当前价格。"
            ],
            "Cursor": [
                "带有 AI 助手的代码编辑器。",
                "Cursor 是一款利用 AI 帮助开发者处理项目的代码编辑器。",
                ["编写代码", "查找错误", "解释程序", "编辑文件", "处理项目"],
                "加快软件和网站开发。",
                "部分功能需要订阅。",
                "提供免费版本和付费套餐。"
            ],
            "GitHub Copilot": [
                "用于编写程序代码的 AI 助手。",
                "GitHub Copilot 帮助开发者编写、解释和改进代码。",
                ["代码补全", "创建函数", "解释代码", "查找错误", "辅助开发"],
                "可与流行的代码编辑器集成。",
                "免费套餐有使用限制。",
                "提供免费套餐和付费订阅。"
            ],
            "Lovable": [
                "使用 AI 创建网站和应用程序。",
                "Lovable 是一个通过文本提示开发网页项目的平台。",
                ["创建网站", "界面设计", "代码生成", "原型设计", "应用开发"],
                "帮助快速创建原型。",
                "免费功能有限。",
                "提供免费点数和付费套餐。"
            ],
            "Gamma": [
                "使用 AI 创建演示文稿和文档。",
                "Gamma 是一个用于创建演示文稿、页面和视觉文档的服务。",
                ["创建演示文稿", "文本生成", "幻灯片设计", "创建文档", "视觉设计"],
                "加快演示文稿制作。",
                "导出和部分功能可能受到限制。",
                "提供免费版本和付费套餐。"
            ],
            "n8n": [
                "自动化工作流程和日常任务。",
                "n8n 是一个自动化平台，可以连接不同服务并创建工作流程。",
                ["任务自动化", "连接服务", "使用 API", "创建工作流程", "集成 AI"],
                "自动化配置灵活。",
                "复杂流程需要一定的技术知识。",
                "提供免费自托管版本和付费云套餐。"
            ]
        }
    }
};

// ==========================================
// 页面语言和内容显示
// ==========================================

const params = new URLSearchParams(window.location.search);
const toolName = (params.get("name") || "").trim().toLowerCase();

const tool = toolsData.find(item =>
    item.name.toLowerCase() === toolName
);

const elements = {
    icon: document.getElementById("tool-icon"),
    name: document.getElementById("tool-name"),
    category: document.getElementById("tool-category"),
    description: document.getElementById("tool-description"),
    about: document.getElementById("tool-about"),
    features: document.getElementById("tool-features"),
    advantages: document.getElementById("tool-advantages"),
    disadvantages: document.getElementById("tool-disadvantages"),
    price: document.getElementById("tool-price"),
    link: document.getElementById("tool-link")
};

const languageSelect = document.getElementById("language-select");

let currentLanguage = localStorage.getItem("aiLanguage") || "ru";

if (!["ru", "en", "zh"].includes(currentLanguage)) {
    currentLanguage = "ru";
}

function translatePage() {
    const lang = currentLanguage;
    const translation = detailTranslations[lang];

    document.documentElement.lang = lang;

    if (languageSelect) {
        languageSelect.value = lang;
    }

    // Перевод заголовков HTML
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        const commonTranslations = {
            backToCatalog: translation.titles.back,
            visitTool: translation.titles.visit,
            aboutTool: translation.titles.about,
            mainFeatures: translation.titles.features,
            advantages: translation.titles.advantages,
            disadvantages: translation.titles.disadvantages,
            price: translation.titles.price
        };

        if (commonTranslations[key]) {
            element.textContent = commonTranslations[key];
        }
    });

    if (!tool) {
        elements.icon.textContent = "🤖";
        elements.name.textContent = translation.titles.notFound;
        elements.category.textContent = translation.titles.error;
        elements.description.textContent = translation.titles.notFoundText;
        elements.about.textContent = "";
        elements.features.replaceChildren();
        elements.advantages.textContent = "";
        elements.disadvantages.textContent = "";
        elements.price.textContent = "";
        elements.link.hidden = true;
        return;
    }

    elements.icon.textContent = tool.icon;
    elements.name.textContent = tool.name;

    if (lang === "ru") {
        elements.category.textContent = tool.category;
        elements.description.textContent = tool.description;
        elements.about.textContent = tool.about;
        elements.advantages.textContent = tool.advantages;
        elements.disadvantages.textContent = tool.disadvantages;
        elements.price.textContent = tool.price;

        elements.features.replaceChildren();

        tool.features.forEach(feature => {
            const li = document.createElement("li");
            li.textContent = feature;
            elements.features.appendChild(li);
        });
    } else {
        const data = translation.data[tool.name];

        if (!data) {
            elements.description.textContent = tool.description;
            elements.about.textContent = tool.about;
            elements.advantages.textContent = tool.advantages;
            elements.disadvantages.textContent = tool.disadvantages;
            elements.price.textContent = tool.price;
            elements.category.textContent = tool.category;
        } else {
            elements.description.textContent = data[0];
            elements.about.textContent = data[1];
            elements.advantages.textContent = data[3];
            elements.disadvantages.textContent = data[4];
            elements.price.textContent = data[5];
            elements.category.textContent =
                translation.categories[tool.category] || tool.category;

            elements.features.replaceChildren();

            data[2].forEach(feature => {
                const li = document.createElement("li");
                li.textContent = feature;
                elements.features.appendChild(li);
            });
        }
    }

    elements.link.href = tool.url;
    elements.link.hidden = false;
}

// Переключение языка
if (languageSelect) {
    languageSelect.addEventListener("change", () => {
        currentLanguage = languageSelect.value;
        localStorage.setItem("aiLanguage", currentLanguage);
        translatePage();
    });
}

// Первоначальная загрузка
translatePage();

function updateToolLanguage() {
    const language = localStorage.getItem("aiLanguage") || "ru";
    const params = new URLSearchParams(window.location.search);
    const toolName = (params.get("name") || "").trim().toLowerCase();

    const tool = toolsData.find(item =>
        item.name.toLowerCase() === toolName
    );

    if (!tool) return;

    const translations = detailTranslations[language] || detailTranslations.ru;

    const getText = (field) => {
        const value = tool[field];

        if (language === "ru") return value;

        const translated = translations.tools?.[tool.name]?.[field];

        return translated || value;
    };

    document.getElementById("tool-description").textContent = getText("description");
    document.getElementById("tool-about").textContent = getText("about");
    document.getElementById("tool-advantages").textContent = getText("advantages");
    document.getElementById("tool-disadvantages").textContent = getText("disadvantages");
    document.getElementById("tool-price").textContent = getText("price");

    const features = document.getElementById("tool-features");
    features.replaceChildren();

    const translatedFeatures = getText("features");

    translatedFeatures.forEach(feature => {
        const li = document.createElement("li");
        li.textContent = feature;
        features.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", updateToolLanguage);

window.addEventListener("storage", updateToolLanguage);
