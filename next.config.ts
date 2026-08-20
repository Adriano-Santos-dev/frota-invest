import type { NextConfig } from "next";

// Importa e configura o PWA
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  // Libera o IP local para testes (mantenha isso)
  allowedDevOrigins: ["192.168.1.68", "localhost:3000"],
  
  // --- ADICIONE ESSA LINHA AQUI ---
  // Isso diz ao Next.js 16/Turbopack para aceitar a configuração de Webpack do PWA
  // sem reclamar que está faltando configuração específica para o Turbopack.
  turbopack: {}, 
  // --------------------------------
};

// Exporta o config final com o PWA envelopado
export default withPWA(nextConfig);