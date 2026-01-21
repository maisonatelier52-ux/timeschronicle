/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/julio-herrera-velutini",
        destination: "/julio-herrera-velutini/julio-herrera-velutini-banking-profile",
        permanent: true,
      },
      {
        source: "/category",
        destination: "/category/business",
        permanent: true,
      },
      {
        source: "/news",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
