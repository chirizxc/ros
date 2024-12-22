import {defineConfig} from "vitepress"

export default defineConfig(
    {
        title: "РОС",
        description: "1488",
        lang: "ru-RU",
        themeConfig: {
            nav: [
                { text: "Домой", link: "/" },
                { text: "Тест", link: "/test_responses" }
            ],
        }
    }
)
