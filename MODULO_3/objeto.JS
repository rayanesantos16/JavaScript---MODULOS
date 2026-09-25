/*
um objeto representa uma "coisa" do mundo real atraves de 
propriedades e comportamentos.

const nome = [] array
const nome = {} objeto
const arrayDeObjeto [{},{},{}] < -- mais comum
const objetoDeObjeto { {}, {}, {} } <-- pode rolar tbm
*/

//construindo um 1 objeto

const aluno = {
    id: 1,
    nome: "davi",
    idade:17,
    curso: "ensino medio Integrado",
    RM: 87654,
    cadastroAtivo: true,
    email: null,
    hobbi: ["ler", "bola", "xadrez"],
    endereço: {
        rua: "Rua 35,405",
        bairro: "Jardim Italia",
        cidade: " Santa Rita do Passa Quatro",
        estado: "Sao Paulo",
        pais: "Brasi",
        cep: 13000560
    }
};

 
//console.log(aluno);

//acessando propriedade do objeto
//#region 
console.log(aluno.nome);

// regra se cadastroAtivo = true, msg = seja bem vindo ao nosso sistema.
if(aluno.cadastroAtivo === true){
    console.log(aluno.nome + "seja bem- vendo ao nosso sistema");

}
else{
    console.log("seu cadastro nao esta ativo, procure as RH");
}
console.log(aluno.endereço.rua);
//#endregion


//alterar propriedades do objeto
//#region 
aluno.idade = 18;

console.log(aluno.idade);
//#endregion

//#region 
//alterar cadastroAtivo e bairro;
//cadstroAtivo
aluno.cadastroAtivo = true;

//bairro
aluno.bairro = "mangue Seco";
console.log(aluno);
//#endregion

//adicionar propriedade
//#region 
aluno.cpf = 9871234567
aluno.telefone = "(19) 99572-5811"
//console.log(aluno);
//#endregion

//deletar ujma propriedade
//#region 
delete aluno.curso;
console.log(aluno);
//#endregion

//destructuring
//#region 
const {nome, idade, RM } = aluno;
console.log(nome);
//#endregion

// Renomeando propriedade com Destructuring
//#region 
const {nome: nomeCompleto} = aluno;
console.log(nomeCompleto);
//#endregion

//spread operator ... algo como espalhar
//#region 

const dadosFamilia = {
    nomMae: "Neide Honorio",
    nomePai: "Amauri Honorio",
};

const usuario = {
    ...aluno,
    ...dadosFamilia,
    dataCadastro: "28/08/26"
};

console.log(usuario);
//#endregion

//object.keys, object.values e object.entries
//#region 
//chave do objetos
console.log(Object.keys(aluno));


console.log("--------------------------")
//valores do objeto
console.log(Object.values(aluno));


console.log("----------------------------")
//relaçao chave <--> valor
console.log(Object.entries(aluno));
//#endregion

//objeto x JSON
//#region 

//objeto passando para JSON
const json = JSON.stringify(aluno);
console.log(json);


//JSON passando para objeto
const objeto = JSON.parse(json);
console.log(objeto);
//#endregion