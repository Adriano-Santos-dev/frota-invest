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
      // Usando um placeholder de cor para garantir que aparece no mobile caso a imagem demore
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
      imagemUrl: 'https://images.unsplash.com/photo-1503376712351-1f28f782c5f1?q=80&w=600&auto=format&fit=crop'
    }
  ]

  const valorTotalInvestido = cotas * (carroSelecionado?.valorCota || 0)
  const retornoEstimado = valorTotalInvestido * 0.085

  return (
    // Removi o padding externo (p-6) do body para colar nas bordas do celular
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-between selection:bg-teal-500 selection:text-white font-sans antialiased">
      
      {/* HEADER FIXO MOBILE ( Ajustado para ocupar 100% da largura) */}
      <header className="px-4 py-3 border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-30 flex items-center justify-between shadow-sm w-full">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-red-600 border border-red-700 flex items-center justify-center shadow-inner">
            <span className="text-white font-black text-xs tracking-tighter">T</span>
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-gray-900">Apex Assets</h1>
            <p className="text-[10px] text-gray-400 font-medium">Apex</p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
          <span className="text-[10px] text-teal-700 font-bold tracking-wide">Online</span>
        </div>
      </header>

      {/* CORPO DO APLICATIVO ( Removido o max-w-lg e centralização para ocupar a tela toda) */}
      <main className="flex-1 overflow-y-auto bg-gray-50 pb-24 pt-1 w-full">
        
        {/* TELA 1: HOME / VITRINE ( Ajustado para mobile-first, colado nas bordas) */}
        {telaAtual === 'home' && (
          <div className="space-y-4 w-full">
            
            <div className="bg-white p-4 shadow-sm border-b border-gray-100">
              <h2 className="text-xl font-extrabold text-gray-950 tracking-tight">Veículos Disponíveis para Cota</h2>
              <p className="text-xs text-gray-500 mt-1">Selecione um veículo para visualizar os detalhes do investimento.</p>
            </div>

            <div className="space-y-4 px-4">
              {carros.map((carro) => (
                <div 
                  key={carro.id} 
                  className={`bg-white rounded-xl overflow-hidden border transition-all w-full ${
                    carro.status === 'esgotado' 
                      ? 'opacity-75 border-gray-100' 
                      : 'border-gray-100 hover:shadow-md active:scale-[0.99] cursor-pointer'
                  }`}
                  onClick={() => {
                    if (carro.status === 'disponivel') {
                      setCarroSelecionado(carro)
                      setTelaAtual('detalhes')
                    }
                  }}
                >
                  {/* Foto do Veículo - Ocupa toda a largura do card */}
                  <div className="h-40 w-full bg-gray-100 relative overflow-hidden border-b border-gray-100">
                    <img src={carro.imagemUrl} alt={carro.nome} className="w-full h-full object-cover" />
                    {carro.status === 'esgotado' && (
                       <div className="absolute top-3 right-3 bg-red-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase shadow-md">
                         Esgotado
                       </div>
                    )}
                  </div>

                  {/* Informações da Cota - Espaçamento compacto para mobile */}
                  <div className="p-3.5 relative">
                    <h4 className="font-bold text-gray-900 text-base leading-tight">{carro.nome}</h4>
                    
                    <div className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-gray-600 border-t border-gray-100 pt-3">
                      <p>Placa: <strong className="text-gray-800 font-semibold">{carro.placa}</strong></p>
                      <p>Disponível: <strong className="text-teal-600 font-bold">{carro.cotasRestantes}/{carro.totalCotas} cotas</strong></p>
                      <p>Valor Cota: <strong className="text-gray-800 font-semibold">R$ {carro.valorCota.toFixed(2)}</strong></p>
                      <p>Rendimento: <strong className="text-teal-600 font-bold">{carro.retorno}</strong></p>
                    </div>

                    {carro.status === 'disponivel' && (
                      <div className="mt-4 flex justify-end">
                        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg text-xs tracking-wide shadow transition-colors w-full sm:w-auto">
                          VER DETALHES
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Patrimônio Sob Gestão - Visual limpo */}
            <div className="mt-5 mx-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Patrimônio total sob gestão</p>
              <h2 className="text-2xl font-black text-gray-950 mt-0.5 tracking-tight">R$ 1.482.300,00</h2>
              <p className="text-[11px] text-teal-600 mt-1 font-medium">Auditoria Ativa BDO Global</p>
            </div>

          </div>
        )}

        {/* TELA 2: DETALHES (Mantendo o fluxo, mas ajustando o layout para mobile) */}
        {telaAtual === 'detalhes' && carroSelecionado && (
          <div className="space-y-5 p-4 w-full">
            <button 
              onClick={() => setTelaAtual('home')}
              className="text-xs text-teal-600 font-bold flex items-center space-x-1 hover:underline bg-teal-50 px-3 py-1.5 rounded-full"
            >
              <span>← Voltar à Vitrine</span>
            </button>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <img src={carroSelecionado.imagemUrl} alt={carroSelecionado.nome} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h2 className="text-2xl font-extrabold text-gray-950 tracking-tight">{carroSelecionado.nome}</h2>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed border-t border-gray-100 pt-3">{carroSelecionado.descricao}</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">Quantidade de Cotas:</span>
                <span className="font-bold text-teal-600 text-base bg-teal-50 px-3 py-1 rounded-md">{cotas} cota(s)</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max={carroSelecionado.cotasRestantes} 
                value={cotas}
                onChange={(e) => setCotas(Number(e.target.value))}
                className="w-full accent-teal-500 cursor-pointer h-2 bg-gray-100 rounded-lg"
              />
            </div>

            <div className="p-5 rounded-xl bg-teal-50 border border-teal-100 space-y-2.5 shadow-inner">
              <div className="flex justify-between text-xs">
                <span className="text-teal-800 font-medium">Total a Investir:</span>
                <span className="font-black text-teal-950 text-sm">R$ {valorTotalInvestido.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-teal-800 font-medium">Rendimento Estimado ({carroSelecionado.retorno}):</span>
                <span className="font-bold text-teal-600">+ R$ {retornoEstimado.toFixed(2)} / mês</span>
              </div>
            </div>

            <button 
              onClick={() => {
                alert(`Sucesso! Investimento de R$ ${valorTotalInvestido} confirmado. Redirecionando para carteira (simulação).`)
                setTelaAtual('carteira')
              }}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-xl shadow-lg transition active:scale-[0.99] text-xs tracking-wider uppercase"
            >
              Confirmar Investimento de R$ {valorTotalInvestido.toFixed(2)}
            </button>
          </div>
        )}

        {/* TELA 3: CARTEIRA (Visual limpo adaptado para mobile) */}
        {telaAtual === 'carteira' && (
          <div className="space-y-5 p-4 w-full">
            <h2 className="text-2xl font-extrabold text-gray-950 tracking-tight px-1">Minha Carteira</h2>

            <div className="p-5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white space-y-3 shadow-lg">
              <p className="text-[11px] text-teal-100 font-medium uppercase tracking-wider">Saldo de Lucro Disponível</p>
              <h3 className="text-4xl font-black tracking-tighter">R$ 142,50</h3>
              <button 
                onClick={() => alert("Saque solicitado com sucesso via Pix!")}
                className="w-full bg-white text-teal-700 hover:bg-gray-100 font-bold py-3 rounded-lg text-xs transition shadow-sm active:scale-[0.99]"
              >
                SOLICITAR SAQUE
              </button>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Meus Ativos</h4>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm text-gray-950">Tesla Model 3 Long Range</p>
                  <p className="text-xs text-gray-500 font-medium">2 Cotas (R$ 500,00)</p>
                </div>
                <span className="text-sm font-bold text-teal-600">+ R$ 42,50/mês</span>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* NAVBAR INFERIOR FIXA (Corrigida para não quebrar no Android/iPhone) */}
      <nav className="py-2.5 px-6 border-t border-gray-100 bg-white fixed bottom-0 left-0 right-0 z-40 flex justify-around items-center text-[11px] shadow-[0_-5px_30px_rgba(0,0,0,0.03)]">
        <button 
          onClick={() => setTelaAtual('home')}
          className={`font-bold flex flex-col items-center space-y-0.5 transition ${telaAtual === 'home' ? 'text-teal-600' : 'text-gray-400 hover:text-gray-700'}`}
        >
           <span className="text-lg">🏠</span>
           <span className="font-medium">Início</span>
        </button>
        <button 
          onClick={() => setTelaAtual('carteira')}
          className={`font-bold flex flex-col items-center space-y-0.5 transition ${telaAtual === 'carteira' ? 'text-teal-600' : 'text-gray-400 hover:text-gray-700'}`}
        >
           <span className="text-lg">💼</span>
           <span className="font-medium">Carteira</span>
        </button>
      </nav>

    </div>
  )
}