const {i18n} = require("./next-i18next.config");


const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/bg",
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig;
