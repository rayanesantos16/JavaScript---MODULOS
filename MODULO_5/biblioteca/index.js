//Criar Arquivo
const fs = require("fs/promises");
async function criarArquivo() {
    const livros = [
        {
            id: 1,
            titulo: "Palavras Interrompidas",
            autor: " Marcos DeBrito"
        },
        {
            id: 2,
            titulo: "A Biblioteca da Meia-Noite",
            autor:"Matt Haig"
        },
    ];
    //Criar um arquivo
    await fs.writeFile("livros.json", JSON.stringify(livros,null,2));
    console.log("Arquivo criado com sucesso!");
}
//listar Livros
async function listarLivros() {
    // ler o arquivo
const dados = await fs.readFile("livros.json","utf-8");
    //transformar para objeto
    const livros = JSON.parse(dados);
    //exibir no console
    console.log(livros);
}
//Adicionar Livros
async function AdicionarLivro() {
    //Ler o arquivo
    const dados = await fs.readFile("livros.json","utf-8");
    //tranformar (parse)
    const livros = JSON.parse(dados)
    //add livro (push)
    livros.push({
            id: 3,
            titulo:"A cinco passos de você",
            autor:"Rachael Lippincott"
            });
    //retransformar no json
    await fs.writeFile("livros.json", JSON.stringify(livros,null,2));
    //livro adicionado
    console.log("Livro adicionado com sucesso!");
}
//Alterar Livros
async function alterarLivro(id) {
//precisa saber o livro
//ler o arquivo
const dados = await fs.readFile("livros.json","utf-8");
//tranformar o arquivo JSON --> Objeto
const livros = JSON.parse(dados);
//descobrir o livro 
const livro=livros.find((livro) => livro.id === id);
//logica se não existir
if(!livro){
    console.log("Livro não encontrado...");
    return;
}
//alterar o livro
livro.autor = "Rayane Santos";
//retransformar
await fs.writeFile("livros.json", JSON.stringify(livros,null,2));
//falar que deu certo
console.log("Livro alterado com sucesso!");  
}
//Deletar um livro
async function deletarLivro(){
//ler arquivo
const dados = await fs.readFile("livros.json","utf-8");
//transformar o arquivo
const livros = JSON.parse(dados);
//logica do não ter
if(!livros){
    console.log("Livro não encontrado...");
    return;}
//procurar o livro a ser deletado --- deleta os dados do livro
const livrosAtualizados = livros.filter((livro) => livro.id !== id);
if (livrosAtualizados.length === livros.length){
    console.log("livro",id,"não encontrado!");
    return;
}
//retransformar
await fs.writeFile("livros.json", JSON.stringify(livrosAtualizados,null,2));
//mensagem
console.log("Livro deletado com sucesso...");
};

//Função executar
async function executar() {
    await criarArquivo();
    await listarLivros();
    await AdicionarLivro();
    await alterarLivro();
    await deletarLivro(3);

}
//chamando a função 
executar();
