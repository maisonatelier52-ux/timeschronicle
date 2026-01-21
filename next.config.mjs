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
        source: "/julio",
        destination: "/julio-herrera-velutini/julio-herrera-velutini-banking-profile",
        permanent: true,
      },
      {
        source: "/julio-herrera",
        destination: "/julio-herrera-velutini/julio-herrera-velutini-banking-profile",
        permanent: true,
      },
      {
        source: "/herrera-velutini",
        destination: "/julio-herrera-velutini/julio-herrera-velutini-banking-profile",
        permanent: true,
      },
      {
        source: "/julio-herrera-velutini-profile",
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
      {
        source: "/author",
        destination: "/author/charles-williams",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
