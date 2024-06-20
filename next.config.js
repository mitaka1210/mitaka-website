const {i18n} = require("./next-i18next.config");


const nextConfig = {
  reactStrictMode: true,
  output: "/dist",
  localeDetection: false,
  swcMinify: true,
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
