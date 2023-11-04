/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    Email: "ahmed766534@outlook.com",
  },
};

module.exports = nextConfig;
const withVideos = require("next-videos");

module.exports = withVideos();
