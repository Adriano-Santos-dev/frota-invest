import type { NextConfig } from "next";
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.68", "localhost:3000"], // Mantém tua liberação de IP
};

export default withPWA(nextConfig);