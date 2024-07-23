// next-i18next.config.js
import { resolve } from "path";
export const i18n = {
  locales: ["bg", "en"],
  defaultLocale: "bg",
  localeDetection: false,
  react: { useSuspense: false }, //this line,
  localePath: resolve("./public/locales")
};
