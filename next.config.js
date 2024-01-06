const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/telegram-webk-documents' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = withNextra(nextConfig);
