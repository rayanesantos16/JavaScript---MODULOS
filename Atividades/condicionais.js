//#region true or false (teste de idade)

const Idade = 20;
if(Idade >= 18) {
    console.log("Maior de idade");
}
//#endregion

//#region true or false (Maior ou menor de idade)

const idade = 16;

if(idade >=18){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

//#endregion

//#region Notas

// nota com casa decimal muito grande
const nota = 6.99;
// trnasformação para nota
const notaArredondada = Number(nota.toFixed(2))
//const notaArredondada = Math.trunc(nota*100)/100;
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
//#endregion

//#region composto (login)

const senha = 20;
const email = "rrrr@gmail.com"
const ativo = true;

if (senha === 18 && email === "rrrr@gmail.com" && ativo){
    console.log("Usuário autorizado");
}
else{
    console.log("sai fora do nosso site!!")
}

//#endregion

//#region switch case (dia da semana)

const dia = 6

switch(dia){

    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break;
    case 4:
        console.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-Feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sabádo");
        break;

    default:
        console.log("Dia não existente.");
}

//#endregion

//#region operador ternario (abstração de if/else)

const idaDe = 20;

const mensagem = idaDe >= 18 ? "Maior" : "Menor";
console.log(mensagem);

//#endregion

//#region laços

let contador = 1;

while(contador <= 6){
    console.log(contador);

contador++;

}

//#endregion

//#region for

for (let i = 1; i <= 5; i++){
    console.log(i)
}

//for...of

const frutas = ["Morango","Banana","Maçã","Manga","Uva"];
for(const fruta of frutas){
    console.log(fruta);
}

//tradicional

for(let i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}

//#endregion

