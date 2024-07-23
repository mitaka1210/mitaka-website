/** @type {import("next").NextConfig} */
const nextConfig = {
  // Други настройки
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  // Ако използвате специална директория за страниците
  appDir: "src/app",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
