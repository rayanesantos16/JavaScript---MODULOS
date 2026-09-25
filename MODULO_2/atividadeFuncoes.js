//#region Atividade 1 — Saudação
//Crie uma função chamada saudacao que receba um nome e retorne uma mensagem.
//Resultado esperado : Olá, Maria!
//----------------------------------------------------------------------
function saudacao(nome) {
    return {nome};
}
const pessoa = saudacao("rayane")
console.log(pessoa);
console.log("Olá," +pessoa.nome+ "!")
//----------------------------------------------------------------------
//#endregion
//----------------------------------------------------------------------

//#region Atividade 2 — Calculadora
//Crie quatro funções para cada uma das operações +, -, *, /
//Cada função deve receber dois números e retornar o resultado.
//----------------------------------------------------------------------
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

console.log(somar(1, 2));       
console.log(subtrair(4, 3));    
console.log(multiplicar(5, 6));  
console.log(dividir(10, 5));    
//----------------------------------------------------------------------
//#endregion
//----------------------------------------------------------------------

//#region Atividade 3 — Verificação de idade
//Crie uma função que receba uma idade e retorne: Menor de idade ou Maior de idade
//----------------------------------------------------------------------
function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
console.log(verificarIdade(17)); 
//----------------------------------------------------------------------
//#endregion
//----------------------------------------------------------------------

//#region Atividade 4 — Arrow Function

/*Transforme:
        function calcularDobro(numero) {
            return numero * 2;
        }

    em uma arrow function.
*/
//----------------------------------------------------------------------
const calcularDobro = (numero) =>{ 
    return numero * 2;
}
console.log(calcularDobro(5)); 

//----------------------------------------------------------------------
//#endregion
//----------------------------------------------------------------------