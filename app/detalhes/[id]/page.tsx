'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function DetalhesAtivo() {
  const [cotas, setCotas] = useState(2)
  const valorUnitario = 200
  const taxaLucro = 0.075

  const totalInvestido = cotas * valorUnitario
  const rendimentoMes = totalInvestido * taxaLucro

  return (
    <div className="flex flex-col h-full bg-slate-900 animate-fadeIn transition-opacity duration-300">
      {/* Header com Voltar */}
      <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
        <Link href="/" className="text-cyan-400 text-xs font-semibold hover:underline">
          ← Voltar
        </Link>
        <h1 className="text-xs font-bold tracking-widest text-slate-300 uppercase">Detalhes do Veículo</h1>
        <div className="w-8" />
      </div>

      {/* Conteúdo */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Banner do Carro */}
        <div className="h-40 rounded-2xl bg-gradient-to-tr from-cyan-950 via-slate-800 to-slate-900 border border-slate-700/60 flex flex-col justify-end p-4 relative shadow-inner">
          <span className="absolute top-3 right-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-2.5 py-1 rounded-full font-bold">
            Ativo Verificado
          </span>
          <h2 className="text-base font-bold text-white">Toyota Hilux SRX 2024</h2>
          <p className="text-xs text-slate-400">Chassi vinculado ao contrato de locação corporativa.</p>
        </div>

        {/* Seletor */}
        <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/60 space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-slate-300">Quantidade de Cotas:</span>
            <span className="font-bold text-cyan-400">{cotas} cota(s)</span>
          </div>

          <input 
            type="range" 
            min="1" 
            max="15" 
            value={cotas}
            onChange={(e) => setCotas(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />

          <div className="pt-2 border-t border-slate-700/50 flex justify-between text-xs text-slate-400">
            <span>Valor por cota:</span>
            <span className="text-slate-200">R$ {valorUnitario},00</span>
          </div>
        </div>

        {/* Resumo Financeiro */}
        <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-slate-300">Total a Investir:</span>
            <span className="font-bold text-white text-sm">R$ {totalInvestido.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-slate-300">Lucro Estimado Mensal:</span>
            <span className="font-bold text-emerald-400 text-sm">+ R$ {rendimentoMes.toFixed(2)}</span>
          </div>
        </div>

        <button 
          onClick={() => alert(`Sucesso! Investimento de R$ ${totalInvestido} alocado na Hilux.`)}
          className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 rounded-xl text-xs transition shadow-lg shadow-cyan-900/30"
        >
          Confirmar Alocação de Capital
        </button>
      </div>
    </div>
  )
}