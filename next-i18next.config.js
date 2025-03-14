import path from "path";

const i18nConfig = {
    i18n: {
        locales: ["bg", "en"],
        defaultLocale: "en",
        localeDetection: false,
        react: { useSuspense: false }, // Fix for i18next in Next.js
        localePath: path.resolve("./public/locales"),
    },
};

export default i18nConfig;
