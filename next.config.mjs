/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint checks during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript checks during builds
  },
};

export default nextConfig;

