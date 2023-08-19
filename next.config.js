/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
    },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;
  