const {i18n} = require("./next-i18next.config");


const nextConfig = {
  i18n,
  reactStrictMode: true,
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
