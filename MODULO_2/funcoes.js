//#region Funções

function quandoClicarNoBotao(){
    console.log("obrigado(a) por comprar na nossa loja");
}
//chamando a fução
quandoClicarNoBotao();

function exibirMensagem(){
    console.log("Viva como se fosse o último dia de sua vida!");

}
exibirMensagem();

//mais simples de tudo (parametros)

//#endregion

//#region Somar 

function somar(){
    const resultado = 10 + 7 ;
    console.log(resultado)
}
somar();

// reutilizando sem const

function somar(numero1, numero2){
    console.log(numero1 + numero2)
}
somar(10 , 7);
somar(20 , 10);
somar(30 , 17);
//#endregion

//#region Return

function somar(numero1, numero2){
    return numero1 + numero2;
}

const resultado = somar (8 + 3);

if (resultado >= 11){
    console.log("O SENAI é massa!");
}

else{
    console.log("Ainda é massa.");
}

/* console.log() é como mostrar o resultado em uma tela.

return é como entregar o resultado para outra parte do programa.
*/


//#endregion

//#region Calcular desconto

//Declarar as constantes 
const valor = 400; 
const desconto = 20;
//Constante com calculo do valorFinal 
const valorFinal = calcularDesconto(valor, desconto);

//Chamas das/ funções 
calculoImposto(valorFinal);
cashBack(valorFinal);
parcelamento(valorFinal);

// #region Funções
function calcularDesconto(valor, desconto){
    return valor - desconto;   
}
//Imposto sobre produto
function calculoImposto(valorFinal){
    const valorImposto = valorFinal * 0.04;
    console.log("Valor tributário: " + valorImposto);
}
//Regra CashBack
function cashBack(valorFinal){
    if(valorFinal > 50){
        const cashBack = valorFinal*0.10;
        console.log("Valor do CashBack: " + cashBack);
    }
}

function parcelamento(valorFinal){
    if (valorFinal > 399) {
        // Compras acima de 399: sem juros
        const valorParcelado = valorFinal / 6;
        console.log("Valor das parcelas 6x sem juros: R$ " + valorParcelado); 
        
    } else if (valorFinal >= 100) {
        // Compras entre 100 e 399: com 2% de juros no total
        const valorParcelado = (valorFinal * 1.02) / 6;
        console.log("Valor das parcelas 6x com juros: R$ " + valorParcelado); 
        
    } else {
        // Compras abaixo de 100: não parcela
        console.log("O valor não atinge o mínimo de R$ 100 para parcelamento.");
    }
}
//#endregion

//#region cadastro user
function cadastroUser(id,nome,senha,cpf,email){
    return{
        id,nome,senha,cpf,email
    };
}

const usuario = cadastroUser(1, "Rayane","Ray1607.",53509908880,"rayaneyasmind@gmail.com");

console.log(usuario);

console.log("Oi" + usuario.nome + "seu cadastro foi realizado com sucesso!")

//#endregion

//#region funçao tradicional

function somar(numero1, numero2){
    return numero1 + numero2;
}

//arrow funçao
const somarTra = (numero1, numero2) => {
return numero1 + numero2;
}

somarTra(8, 3);
somar(8, 3);

//#endregion

