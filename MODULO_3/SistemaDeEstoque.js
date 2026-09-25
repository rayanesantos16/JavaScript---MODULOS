// TRANSFORMANDO EM ARRAY DE OBJETO //
const estoque = [
    {
        id: 1,
        nome: "volante",
        quantidade:10,
        localizacao:"prateleira 1"
    },
    {
        id: 2,
        nome: "pedal",
        quantidade:5,
        localizacao:"prateleira 2"
    },
    {
        id: 3,
        nome: "câmbio",
        quantidade:50,
        localizacao:"prateleira 3"
    },
    {
        id: 4,
        nome: "calota",
        quantidade:100,
        localizacao:"prateleira 2"
    },
];
// CADASTRAR PRODUTO //
function cadastrarProduto(nome,quantidade,localizacao) {
    const novoProduto = {
        id : estoque.length + 1,
        nome : nome,
        quantidade : quantidade,
        localizacao : localizacao
    };
    estoque.push(novoProduto);
    console.log("Cadastro realizado com sucesso!")
};
// LISTAR ESTOQUE //
function listarEstoque() {
    for(const produto of estoque){
        console.log(
            `ID: ${produto.id}|` + 
            `Nome: ${produto.nome}|`+
            `Quantidade: ${produto.quantidade}|`+
            `Localização: ${produto.localizacao}|`
        );
    };    
};
// BUSCAR PRODUTO //
function buscarProduto(idBuscado) { 
    for(const produto of estoque){
        if(produto.id === idBuscado){
            console.log("Produto encontrado!");
            console.log(
            `ID: ${produto.id} | ` + 
            `Nome: ${produto.nome} | `+
            `Quantidade: ${produto.quantidade} | `+
            `Localização: ${produto.localizacao} | `
        );
        return produto;
        };
    };
    console.log("Não encotramos o produto...")
};
// ATUALIZAR QUANTIDADE //
function atualizarQuantidade(idBuscado,novaQuantidade) {
    for(produto of estoque){
        if(produto.id === idBuscado){
            produto.quantidade = novaQuantidade;
            console.log("Quantidade Atualizada");
            return;
        }
    }
    console.log("Produto não encotrado...")
};
// DELETAR PRODUTO //


function deletarProduto(){
};


// TESTANDO O SISTEMA //
console.log("\n------------------Cadastrando produto-------------------")
cadastrarProduto("motor",20,"Prateleira 2");

console.log("\n--------------Listando os produtos-----------------------")
listarEstoque();

console.log("\n----------------------Buscando produto-----------------------")
buscarProduto(3);

console.log("\n----------------------Atualizando Quantidade-----------------------")
atualizarQuantidade(3,20);
listarEstoque();