'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Perfil() {
  const [saldo, setSaldo] = useState(145.50)

  return (
    <div className="flex flex-col h-full bg-slate-900 animate-fadeIn transition-opacity duration-300">
      <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
        <div>
          <span className="text-xs text-slate-400 uppercase tracking-widest">Painel Pessoal</span>
          <h1 className="text-base font-bold text-white">Minha Carteira</h1>
        </div>
        <Link href="/" className="text-cyan-400 text-xs font-semibold hover:underline">
          Início
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Card Saldo */}
        <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 space-y-3">
          <p className="text-xs text-emerald-400 font-medium">Rendimento Disponível para Saque</p>
          <p className="text-2xl font-black text-white">R$ {saldo.toFixed(2)}</p>
          <button 
            onClick={() => {
              alert("Solicitação de saque enviada via PIX!")
              setSaldo(0)
            }}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2.5 rounded-xl transition shadow-lg shadow-emerald-900/20"
          >
            Solicitar Saque PIX
          </button>
        </div>

        {/* Ativos Atuais */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Meus Ativos Vinculados</h3>
          <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-2xl flex justify-between items-center">
            <div>
              <p className="font-bold text-white text-sm">Toyota Hilux SRX</p>
              <p className="text-xs text-slate-400">2 Cotas (R$ 400,00 aplicados)</p>
            </div>
            <span className="text-xs font-bold text-emerald-400">+ R$ 30,00/mês</span>
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-slate-800 bg-slate-900/90 flex justify-around text-xs text-slate-400 font-medium">
        <Link href="/" className="hover:text-cyan-400 flex flex-col items-center transition">
          <span>Início</span>
        </Link>
        <Link href="/perfil" className="text-cyan-400 flex flex-col items-center">
          <span>Carteira</span>
        </Link>
      </div>
    </div>
  )
}