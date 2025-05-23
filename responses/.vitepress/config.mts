import {defineConfig} from "vitepress"

export default defineConfig(
    {
        title: "Нейронные сети",
        base: "/ros/",
        lang: "ru-RU",
        themeConfig: {
            nav: [
                {text: "Домой", link: "/"},
            ],
            outline: {
                label: "Вопросы"
            },
        }
    }
)
