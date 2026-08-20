'use client'
import { useState } from 'react'

export default function MobileApp() {
  const [telaAtual, setTelaAtual] = useState<'home' | 'detalhes' | 'carteira'>('home')
  const [carroSelecionado, setCarroSelecionado] = useState<any>(null)
  const [cotas, setCotas] = useState(1)

  const carros = [
    {
      id: 1,
      nome: 'Tesla Model 3 Long Range',
      placa: 'TSL-2026',
      valorCota: 250.00,
      retorno: '8.5% ao mês',
      status: 'disponivel',
      cotasRestantes: 14,
      totalCotas: 100,
      descricao: 'Veículo elétrico autônomo voltado para frotas executivas de alto padrão em grandes capitais.',
      imagemUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      nome: 'Porsche Taycan Performance',
      placa: 'PRS-9911',
      valorCota: 500.00,
      retorno: '11.2% ao mês',
      status: 'esgotado',
      cotasRestantes: 0,
      totalCotas: 50,
      descricao: 'Ativo de altíssima rentabilidade locado para corporações de luxo.',
      imagemUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Porsche_Taycan_4S%2C_2020_%28GIMEX4058%29.jpg/640px-Porsche_Taycan_4S%2C_2020_%28GIMEX4058%29.jpg'
    }
  ]

  const valorTotalInvestido = cotas * (carroSelecionado?.valorCota || 0)
  const retornoEstimado = valorTotalInvestido * 0.085

  return (
    <div className="min-h-screen bg-gray-50 text-gray-950 flex flex-col justify-between font-sans antialiased">
      
      {/* HEADER FIXO MOBILE (Visual Clean) */}
      <header className="px-4 py-3 border-b border-gray-100 bg-white sticky top-0 z-30 flex items-center justify-between shadow-sm w-full h-16">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center shadow-sm">
            <span className="text-white font-black text-sm tracking-tighter">T</span>
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-gray-950">Apex Assets</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Mobilidade</p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs text-emerald-700 font-bold tracking-wide">Online</span>
        </div>
      </header>

      {/* CORPO DO APLICATIVO */}
      <main className="flex-1 overflow-y-auto bg-gray-50 pb-28 pt-2 w-full">
        
        {/* TELA 1: HOME / VITRINE */}
        {telaAtual === 'home' && (
          <div className="space-y-5 w-full px-4">
            
            {/* Título da Página */}
            <div className="pt-3 pb-1">
              <h2 className="text-2xl font-extrabold text-gray-950 tracking-tighter">Oportunidades</h2>
              <p className="text-sm text-gray-600 mt-1">Selecione um veículo para investir.</p>
            </div>

            {/* Lista de Carros */}
            <div className="space-y-5">
              {carros.map((carro) => (
                <div 
                  key={carro.id} 
                  className={`bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all w-full shadow-sm ${
                    carro.status === 'esgotado' 
                      ? 'opacity-70 grayscale' 
                      : 'hover:shadow-lg active:scale-[0.98] cursor-pointer'
                  }`}
                  onClick={() => {
                    if (carro.status === 'disponivel') {
                      setCarroSelecionado(carro)
                      setTelaAtual('detalhes')
                    }
                  }}
                >
                  {/* Foto do Veículo */}
                  <div className="h-44 w-full bg-gray-100 relative overflow-hidden">
                    <img src={carro.imagemUrl} alt={carro.nome} className="w-full h-full object-cover" />
                    {carro.status === 'esgotado' && (
                       <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase shadow-lg">
                         Esgotado
                       </div>
                    )}
                  </div>

                  {/* Informações da Cota */}
                  <div className="p-5 relative bg-white">
                    <h4 className="font-bold text-gray-950 text-lg leading-tight">{carro.nome}</h4>
                    
                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 border-t border-gray-100 pt-4">
                      <p className="flex justify-between">Placa: <strong className="text-gray-950 font-semibold">{carro.placa}</strong></p>
                      <p className="flex justify-between">Cotas: <strong className="text-emerald-600 font-bold">{carro.cotasRestantes}/{carro.totalCotas}</strong></p>
                      <p className="flex justify-between">Valor: <strong className="text-gray-950 font-semibold">R$ {carro.valorCota.toFixed(2)}</strong></p>
                      <p className="flex justify-between">Lucro: <strong className="text-emerald-600 font-bold">{carro.retorno}</strong></p>
                    </div>

                    {carro.status === 'disponivel' && (
                      <div className="mt-5">
                        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 px-4 rounded-2xl text-sm tracking-wide shadow transition-all">
                          INVESTIR AGORA
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Patrimônio Sob Gestão */}
            <div className="mt-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Patrimônio total sob gestão</p>
              <h2 className="text-4xl font-black text-gray-950 mt-2 tracking-tighter">R$ 1.482.300,00</h2>
              <p className="text-xs text-emerald-600 mt-2 font-semibold bg-emerald-50 py-1 px-3 rounded-full inline-block">Auditoria Ativa BDO Global</p>
            </div>

          </div>
        )}

        {/* TELA 2: DETALHES */}
        {telaAtual === 'detalhes' && carroSelecionado && (
          <div className="space-y-6 w-full px-4">
            {/* Botão Voltar com espaçamento superior */}
            <div className='pt-4'>
              <button 
                onClick={() => setTelaAtual('home')}
                className="text-sm text-teal-700 font-bold flex items-center space-x-2 hover:bg-teal-50 px-4 py-2 rounded-full transition-colors"
              >
                <span>←</span> <span>Voltar à Vitrine</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              <img src={carroSelecionado.imagemUrl} alt={carroSelecionado.nome} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-3xl font-extrabold text-gray-950 tracking-tighter">{carroSelecionado.nome}</h2>
                <p className="text-gray-600 mt-4 leading-relaxed border-t border-gray-100 pt-4">{carroSelecionado.descricao}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold text-base">Quantidade de Cotas:</span>
                <span className="font-extrabold text-teal-700 text-lg bg-teal-50 px-4 py-1.5 rounded-xl">{cotas} cota(s)</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max={carroSelecionado.cotasRestantes} 
                value={cotas}
                onChange={(e) => setCotas(Number(e.target.value))}
                className="w-full h-3 bg-gray-100 rounded-full appearance-none cursor-pointer accent-teal-600"
              />
            </div>

            <div className="p-6 rounded-3xl bg-gray-950 border border-gray-900 text-white space-y-3 shadow-xl">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Total a Investir:</span>
                <span className="font-bold text-white text-base">R$ {valorTotalInvestido.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm border-t border-gray-800 pt-3">
                <span className="text-gray-300">Rendimento Mensal Estimado ({carroSelecionado.retorno}):</span>
                <span className="font-bold text-emerald-400 text-base">+ R$ {retornoEstimado.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={() => {
                alert(`Sucesso! Investimento de R$ ${valorTotalInvestido} confirmado.`)
                setTelaAtual('carteira')
              }}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-5 rounded-2xl shadow-lg transition-all active:scale-[0.98] text-sm tracking-wider uppercase"
            >
              Confirmar Investimento de R$ {valorTotalInvestido.toFixed(2)}
            </button>
          </div>
        )}

        {/* TELA 3: CARTEIRA */}
        {telaAtual === 'carteira' && (
          <div className="space-y-6 w-full px-4 pt-3">
            <h2 className="text-3xl font-extrabold text-gray-950 tracking-tighter px-1">Minha Posição</h2>

            <div className="p-7 rounded-3xl bg-gray-950 text-white space-y-4 shadow-2xl">
              <p className="text-sm text-gray-300 font-medium uppercase tracking-wider">Saldo de Lucro Disponível</p>
              <h3 className="text-5xl font-black tracking-tighter">R$ 142,50</h3>
              <button 
                onClick={() => alert("Saque solicitado com sucesso via Pix!")}
                className="w-full bg-white text-gray-950 hover:bg-gray-100 font-bold py-4 rounded-2xl text-sm transition shadow-sm active:scale-[0.98] tracking-wide"
              >
                SOLICITAR SAQUE
              </button>
            </div>

            <div className="space-y-4 pt-3">
              <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wider px-2">Meus Ativos</h4>
              <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-950 text-base">Tesla Model 3 Long Range</p>
                  <p className="text-sm text-gray-500 font-medium">2 Cotas (R$ 500,00 aplicados)</p>
                </div>
                <div className='text-right'>
                  <p className="text-base font-bold text-emerald-600">+ R$ 42,50</p>
                  <p className='text-xs text-gray-500'> / mês</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* NAVBAR INFERIOR FIXA (Corrigida e Fechada) */}
      <nav className="py-3 px-6 border-t border-gray-100 bg-white fixed bottom-0 left-0 right-0 z-40 flex justify-around items-center text-xs shadow-[0_-5px_30px_rgba(0,0,0,0.02)]">
        <button 
          onClick={() => setTelaAtual('home')}
          className={`font-bold flex flex-col items-center space-y-1 transition-colors ${telaAtual === 'home' ? 'text-teal-600' : 'text-gray-500 hover:text-teal-700'}`}
        >
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
           <span className='font-medium'>Início</span>
        </button>
        <button 
          onClick={() => setTelaAtual('carteira')}
          className={`font-bold flex flex-col items-center space-y-1 transition-colors ${telaAtual === 'carteira' ? 'text-teal-600' : 'text-gray-500 hover:text-teal-700'}`}
        >
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0