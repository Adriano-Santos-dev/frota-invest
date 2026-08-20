import type { Metadata } from "next";
import "./globals.css";

// Define os metadados do seu PWA
export const metadata: Metadata = {
  title: "Apex Assets | Investimento em Mobilidade",
  description: "Plataforma de investimento em frota de veículos elétricos.",
  manifest: "/manifest.json", // Aponta para o arquivo que criamos
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent", // Barra de status preta no iPhone
    title: "Apex Assets",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover", // Faz o app preencher a tela inteira (notch)
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full">
      {/* Define o fundo escuro no body para evitar flashes brancos */}
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-white flex justify-center items-center min-h-full m-0 overflow-hidden overscroll-none touch-none">
        
        {/* Container do App Shell - Fica visível imediatamente */}
        <div className="w-full max-w-md bg-slate-900 border border-slate-800/80 rounded-[2.5rem] shadow-2xl shadow-black overflow-hidden flex flex-col h-[90vh] relative isolate">
          
          {/* Efeito de fundo sutil (opcional, pra dar profundidade) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.3),rgba(15,23,42,0))} pointer-events-none"></div>

          {/* Conteúdo das páginas (Home, Detalhes, Carteira) */}
          <div className="relative z-10 flex-1 h-full">
            {children}
          </div>

          {/* Barra de Status Simulada (Para dar o feeling de app nativo) */}
          <div className="absolute top-0 inset-x-0 h-6 bg-slate-900/50 backdrop-blur-sm z-50 rounded-t-[2.5rem]" />
        </div>

        {/* Scripts para garantir o funcionamento do PWA */}
        <script src="/register-sw.js" defer></script>
      </body>
    </html>
  );
}