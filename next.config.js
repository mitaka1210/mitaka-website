const nextConfig = {
  reactStrictMode: true,
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
export default nextConfig;
