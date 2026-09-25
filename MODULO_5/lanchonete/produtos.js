const produtos = [
    {
        id: 1,
        nome: "X-Tudo",
        preco:20
    },
    {
        id: 2,
        nome: "X-Salada",
        preco:18
    },
    {
        id: 3,
        nome: "HotDog",
        preco:12
    },
    {
        id: 4,
        nome: "Suco Natural",
        preco:10
    },
    {
        id: 5,
        nome: "Casquinha Mista",
        preco:7
    }
];

async function buscarProduto(id) {

    return new Promise((resolve,reject) => {

        setTimeout(() => {

            const produto= produtos.find(produto => produto.id === id);
            
            if (produto){
                resolve(produto);
            }
            else{
                reject("Produto não encontrado");
            }
        },2000)
    });
};
//transformando em modulo
module.exports = {
    buscarProduto
};
    
    
