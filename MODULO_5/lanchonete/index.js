//exports e imports
const fs = require("fs/promises");
const {buscarUsuario}=require("./usuarios");
const {buscarProduto}=require("./produtos");
const {buscarPedidos}=require("./pedidos");

//função

async function fecharConta(usuarioId) {
  try{
    console.log("Buscando usuário...")
    const usuario = await buscarUsuario(usuarioId);
    console.log(usuario);

    console.log("Buscando pedidos...")
    const pedidos = await buscarPedidos (usuario.id);

//total geral
let totalGeral = 0
//array para os itens
const itensConta = [];

//varrer os pedidos para ver se tem do cliente
//varrer os itens produtos e add push os itens no itens conta
//estrutura do comando
for (const pedido of pedidos){
  const produto = await buscarProduto(pedido.produtoId);
  const subTotal = produto.preco * pedido.quantidade;

  itensConta.push({
    item: produto.nome,
    quantidade:pedido.quantidade,
    precoUnitario:produto.preco,
    subTotal:subTotal
  });
  totalGeral += subTotal
}
//contruir nosso arquivo
const comanda = {
  Estabelecimento: "Lanchonete JavaScript",
  cliente:{
    id: usuario.id,
    nome:usuario.nome
  },
  itens: itensConta,
  totalPagar: totalGeral
}
await fs.writeFile("comandaCliente.json",JSON.stringify(comanda,null,2),"utf-8");

console.log(comanda);
console.log("Obrigado pela compra!!")
  }
  catch(erro){
    console.error("Erro ao fechar a conta",erro);
  }
}

fecharConta(2);

