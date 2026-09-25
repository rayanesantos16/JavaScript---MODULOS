//#region Atividade 1 — Maioridade - 
// Crei uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".

const idade = 21;

if(idade >=18){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

//#endregion

//#region Atividade 2 — Aprovação -
//Implemente com if/else e com switch case.
//Crie uma variável nota e atribua um valor.

//Atividade 2.1

const nota = 5.9;
const notaArredondada = Number(nota.toFixed(2))
console.log(notaArredondada)

if (nota >= 7) {
    console.log("Aprovado!")
}

if (nota < 7 && nota >= 5){
    console.log("Recuperação!")
}

else {
    console.log("Reprovado.")
}

//Atividade 2.2 

const Nota = 1

switch(Nota){

    case 1:
        console.log("Reprovado");
        break;
    case 2:
        console.log("Reprovado");
        break;
    case 3:
        console.log("Reprovado");
        break;
    case 4:
        console.log("Reprovado");
        break;
    case 5:
        console.log("Recuperação");
        break;
    case 6:
        console.log("Recuperação");
        break;
    case 7:
        console.log("Aprovado");
        break;
    case 8:
        console.log("Aprovado");
        break;
    case 9:
        console.log("Aprovado");
        break;
    case 10:
        console.log("Aprovado");
        break;
    default:
        console.log("Nota não encontrada.");
}

//#endregion

//#region Atividade 3 — Login - 
//Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.

const usuario= "nome";
const senha = "1234";
const ativo = true;

if (usuario === "nome" && senha === "1234" && ativo){
    console.log("Usuário autorizado");
}
else{
    console.log("Login não autorizado")
}

//#endregion

//#region Atividade 4 — Status do pedido - 
// Crie uma variável statusPedido e
// atribua um valor (pendente, pago, envidado, processando, entregue,
// concluído).

const StatusPedido = 8

switch(StatusPedido){

    case 1:
        console.log("Pendente");
        break;
    case 2:
        console.log("Pago");
        break;
    case 3:
        console.log("Enviado");
        break;
    case 4:
        console.log("Processando");
        break;
    case 5:
        console.log("Entregue");
        break;
    case 6:
        console.log("Concluído");
        break;
    case 7:
        console.log("Fazer Pedido");
        break;
    case 8:
        console.log("Cancelar Pedido");
        break;
    default:
        console.log("Pedido não existente.");
}


//#endregion

//#region Atividade 5 — Contador - 
// Crie uma algoritmo que com "for" para imprimir 
// todos os numeros pares de 1 a 100.

for (let pares = 2; pares <= 100; pares += 2) {
  console.log(pares);
}


//#endregion

//#region Atividade 6 - Refaça o exercicio 5 agora usando for...of e while.
//6.1

let pares = 2;

while (pares <= 100) {
  console.log(pares);
  pares += 2;
}

//6.2

const pares = Array.from({ length: 100 }, (_, i) => i + 1);
for (const par of pares) {
  if (par % 2 === 0) {
    console.log(par);
  }
}

//#endregion

//#region Atividade 7 — Crie um array com 10 nomes e exiba cada um dele usando for...of.
// Array criado com exatamente 10 nomes

const nomes = [
  "Bia",
  "Bebel",
  "Nathy",
  "Lara",
  "Isadora",
  "Celina",
  "Mari",
  "Vinicius",
  "Michele",
  "Alessandro"
];

for (const nome of nomes) {
  console.log(nome); 
}

//#endregion

//#region Atividade 8 - Crie um array com 10 exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length. 
// Array com 10 nomes (strings) para validar a lógica de letras

const listaNomes = [
   "Bia",
  "Bebel",
  "Nathy",
  "Lara",
  "Isadora",
  "Celina",
  "Mari",
  "Vinicius",
  "Michele",
  "Alessandro"
];

for (const nome of listaNomes) {
  if (nome.length > 5) {
    console.log(nome); 
  }
}

//#endregion

//#region Atividade 9 — Somando valores
    //Dado o array de números, calcule a soma de todos os elementos do 
    //array e exiba o resultaconst numeros =;
    //Dica: você pode usar um loop for ou for...of para percorrer 
    //o array e somar os valores.
    //const numeros = [10, 20, 30, 40, 50];
// Resultado esperado: 150

const numeros =[10,20,30,40,50];
let soma = 0;

for (const numero of numeros) {
  soma += numero; 
}

console.log("A soma total é:", soma); 

//#endregion
