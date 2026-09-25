//#region start operadores

const idade = 20;
console.log(idade >= 18);

//#endregion

//#region operadores matematicos

const a = 8;
const b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//#endregion

//#region operadores de comparação...

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); //Comparação de valor
console.log(a === b); //Comparação de valor e tipo
console.log(a !== b);

//#endregion

//#region Exercício 01:aplicando operadores de comparação com variáveis.

const idade_1 = 20;
const idade2 = 25;

console.log(idade1 > idade2);
console.log(idade1 < idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade2);
console.log(idade1 == idade2); //Comparação de valor
console.log(idade1 === idade2); //Comparação de valor e tipo
console.log(idade1 !== idade2);

//#endregion

//#region operadores logicos AND

const idade3= 20;
const idade4= 15;

console.log(idade3 > 18 && idade4 > 18);

//#endregion

//#region operadores logicos OR

console.log(idade3 > 18 || idade4 > 18);

//#endregion

//#region operadores logicos NOT 
console.log(!(idade3 > 18));

const idade1 = 25;
const matriculaAtivo=true;

const podeComprar = idade1 >= 18 && matriculaAtivo;

console.log(podeComprar);

//#endregion

//#region operadores de incremento e decremento

let numero = 10;

console.log(numero++); //10
console.log(numero); // 11
console.log(++numero); // 12

console.log(numero--); //12
console.log(numero); //11
console.log(--numero); //10

//#endregion

//#region Exercício 02: comparação apartir de variavel informada

const x = 5;
const y = 10;

const resultado = x < y;
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y); //Comparação de valor
console.log(x === y); //Comparação de valor e tipo
console.log(x !== y);

//#endregion

//#region verificar os resultados das comparações 

console.log(10 == "10");
console.log(10 ==="10");
console.log(true == 1);
console.log(true === 1);
console.log(null == undefined);
console.log(null === undefined);

//#endregion

//#region exercicio 3 - sistema de acesso DESAFIO


const dataNascimento = new Date ("2026-07-16")
const ativo = true;

const dezoitoAnosEmMilisegundos = 18 * 365.25 * 24 * 60 * 60 * 1000
const podepassar = (new Date() - dataNascimento) >= dezoitoAnosEmMilisegundos && ativo;

console.log(podepassar)

//#endregion

//#region Usando funçoes extras



//#endregion
