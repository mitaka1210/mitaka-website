// next-i18next.config.js
const path = require("path");
module.exports = {
    i18n: {
        locales: ["bg", "en"],
        defaultLocale: "en",
        localeDetection: false,
        react: {useSuspense: false},//this line,
        localePath: path.resolve("./public/locales")
    },
};
