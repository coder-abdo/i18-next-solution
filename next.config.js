/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js",
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
  i18n,
});
