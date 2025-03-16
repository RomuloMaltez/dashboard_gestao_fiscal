import React from 'react';

const DashboardFiscal = () => {
  // Dados simulados para o protótipo
  const arrecadacaoData = [
    { tributo: 'ISS', meta: 258196651, realizado: 190000000, percentual: 73.6 },
    { tributo: 'IPTU', meta: 40976191, realizado: 32000000, percentual: 78.1 },
    { tributo: 'ITBI', meta: 24882600, realizado: 18500000, percentual: 74.3 },
    { tributo: 'TRSD', meta: 35760432, realizado: 22800000, percentual: 63.8 },
    { tributo: 'ITR', meta: 3395740, realizado: 2100000, percentual: 61.8 },
  ];

  const acoesFiscaisData = [
    { status: 'Concluídas', quantidade: 32 },
    { status: 'Em andamento', quantidade: 57 },
    { status: 'Atrasadas', quantidade: 18 },
    { status: 'Não iniciadas', quantidade: 25 },
  ];

  const tributosPrioritarios = [
    { 
      tributo: 'IPTU Usinas Rio Madeira', 
      potencial: 'R$ 40 milhões/ano', 
      status: 'Em análise',
      progresso: 30 
    },
    { 
      tributo: 'Taxa Fiscalização (4.516 contrib.)', 
      potencial: 'R$ 0,5 milhão/ano', 
      status: 'Em execução',
      progresso: 45 
    },
    { 
      tributo: 'ITBI (Observatório Imobiliário)', 
      potencial: 'R$ 5 milhões/ano', 
      status: 'Em desenvolvimento',
      progresso: 20 
    },
  ];

  // Formatar valores em reais
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Função para determinar a cor baseada no percentual
  const getColorByPercentage = (percentage) => {
    if (percentage < 65) return 'bg-red-500';
    if (percentage < 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Cabeçalho */}
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Sistema de Gestão Fiscal - Porto Velho</h1>
              <p className="text-sm">Departamento de Fiscalização (DEF) - 2025</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Última atualização: 14/03/2025</span>
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm">
                Atualizar dados
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="container mx-auto p-4 flex-grow">
        {/* Cards com resumo */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-gray-500 text-sm">Arrecadação Total</h3>
            <p className="text-2xl font-bold">
              {formatCurrency(arrecadacaoData.reduce((sum, item) => sum + item.realizado, 0))}
            </p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-gray-500">
                Meta: {formatCurrency(arrecadacaoData.reduce((sum, item) => sum + item.meta, 0))}
              </span>
              <span className="ml-2 text-sm text-yellow-600">
                73.1%
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-gray-500 text-sm">Ações Fiscais</h3>
            <p className="text-2xl font-bold">
              {acoesFiscaisData.reduce((sum, item) => sum + item.quantidade, 0)}
            </p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-green-600">
                {acoesFiscaisData[0].quantidade} concluídas
              </span>
              <span className="ml-2 text-sm text-red-600">
                {acoesFiscaisData[2].quantidade} atrasadas
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-gray-500 text-sm">Processos de Impugnação</h3>
            <p className="text-2xl font-bold">217</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-green-600">
                154 resolvidos
              </span>
              <span className="ml-2 text-sm text-yellow-600">
                63 pendentes
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-gray-500 text-sm">Potencial Adicional</h3>
            <p className="text-2xl font-bold">R$ 45,5 milhões</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-blue-600">
                Usinas + Taxas não cobradas
              </span>
            </div>
          </div>
        </div>

        {/* Gráficos e tabelas */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Arrecadação por tributo */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Arrecadação por Tributo</h2>
            
            <div className="space-y-4">
              {arrecadacaoData.map((item) => (
                <div key={item.tributo}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{item.tributo}</span>
                    <span>{item.percentual}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-4">
                    <div 
                      className={`h-4 rounded ${getColorByPercentage(item.percentual)}`} 
                      style={{ width: `${item.percentual}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Realizado: {formatCurrency(item.realizado)}</span>
                    <span>Meta: {formatCurrency(item.meta)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status das ações fiscais */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Status das Ações Fiscais</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 bg-green-100 rounded">
                <span className="text-3xl font-bold text-green-600">{acoesFiscaisData[0].quantidade}</span>
                <span className="text-sm text-green-800">Concluídas</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-blue-100 rounded">
                <span className="text-3xl font-bold text-blue-600">{acoesFiscaisData[1].quantidade}</span>
                <span className="text-sm text-blue-800">Em andamento</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-red-100 rounded">
                <span className="text-3xl font-bold text-red-600">{acoesFiscaisData[2].quantidade}</span>
                <span className="text-sm text-red-800">Atrasadas</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded">
                <span className="text-3xl font-bold text-gray-600">{acoesFiscaisData[3].quantidade}</span>
                <span className="text-sm text-gray-800">Não iniciadas</span>
              </div>
            </div>

            <div className="mt-4 pt-2 border-t">
              <h3 className="font-medium mb-2">Distribuição de Responsáveis</h3>
              <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <span className="text-sm">Auditores ativos: 15</span>
                <span className="text-sm">Média: 8,8 ações/auditor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ações prioritárias */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Projetos Estratégicos Prioritários</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Projeto</th>
                  <th className="p-2 text-left">Potencial de Arrecadação</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Progresso</th>
                </tr>
              </thead>
              <tbody>
                {tributosPrioritarios.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2 font-medium">{item.tributo}</td>
                    <td className="p-2 text-green-700 font-medium">{item.potencial}</td>
                    <td className="p-2">{item.status}</td>
                    <td className="p-2">
                      <div className="w-full bg-gray-200 rounded h-2.5">
                        <div 
                          className="h-2.5 rounded bg-blue-600" 
                          style={{ width: `${item.progresso}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Painel de alertas */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Alertas e Notificações</h2>
            <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">4 alertas críticos</span>
          </div>
          
          <div className="space-y-2">
            <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
              <h3 className="font-medium">Arrecadação TRSD abaixo da meta</h3>
              <p className="text-sm text-gray-600">Realizado apenas 63.8% da meta anual. Recomenda-se intensificar fiscalização.</p>
            </div>
            
            <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
              <h3 className="font-medium">Cobrança IPTU Usinas em risco</h3>
              <p className="text-sm text-gray-600">Processo de avaliação atrasado. Potencial de R$ 40 milhões em risco para 2025.</p>
            </div>
            
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <h3 className="font-medium">18 ações fiscais atrasadas</h3>
              <p className="text-sm text-gray-600">Necessária redistribuição de recursos ou revisão de prazos.</p>
            </div>
            
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <h3 className="font-medium">Alto volume de impugnações IPTU</h3>
              <p className="text-sm text-gray-600">63 processos de impugnação pendentes, número crescente.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-200 p-4 text-center text-gray-600 text-sm">
        <p>Sistema de Gestão Fiscal - Secretaria Municipal de Fazenda</p>
        <p>Departamento de Fiscalização (DEF) - SUREM - 2025</p>
      </footer>
    </div>
  );
};

export default DashboardFiscal;