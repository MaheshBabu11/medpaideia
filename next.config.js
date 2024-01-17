const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

// Configuration object tells the next-pwa plugin
const withPWAConfig = withPWA({
  dest: 'public', // Destination directory for the PWA files
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
});

module.exports = withPWAConfig(nextConfig);
