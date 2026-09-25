const servicos = [
  { id: 1, nome: "Consulta Veterinária", preco: 120 },
  { id: 2, nome: "Vacina Antirrábica", preco: 70 },
  { id: 3, nome: "Exame de Sangue", preco: 60 }
];

function buscarServico(servicoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const servico = servicos.find(s => s.id === Number(servicoId));
      
      if (servico) {
        resolve(servico);
      } else {
        reject(new Error(`Serviço com ID ${servicoId} não encontrado.`));
      }
    }, 500);
  });
}

module.exports = { buscarServico };
