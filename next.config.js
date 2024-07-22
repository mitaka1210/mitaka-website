const {i18n} = require("./next-i18next.config");


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Други настройки
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  // Ако използвате специална директория за страниците
  pagesDir: "src/app",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Home-page",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
