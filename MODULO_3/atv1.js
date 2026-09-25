//#region=====atividade - 1 descubrir resultado===============================//=========================================//

//codigo da atividade//

const mensagem = "Olá";
function teste(){
    const nome="joão";
    console.log(mensagem);
    console.log(nome)
}
teste();
console.log(mensagem);
console.log(nome);
//=====================================//=========================================//

//A) Quais linhas funcionam?
//Resp: A Linha 1,7,8 e 9 funcionam.
//B) Qual linha gera erro?
//Resp: A Linha 2 gera erro.
//C) Por quê?
//Resp: função não podem ser acessadas fora da função. Por isso, o sistema gera um erro.
//#endregion

//#region=====================atividade 2 - corrigir erro================//=========================================//
//codigo da atividade//
function calcular(){
    const resultado=10+20;
}
console.log(resultado);
//=====================================//=========================================//
//A)Identifique o problema.
//Resp: A variável resultado foi declarada com const dentro da função calcular(), o que limita o interior da função.
//O console.log(resultado) tenta acessá-la a partir de fora da função, onde ela não existe, gerando um erro.
//B)Modifique o código para que o resultado possa ser utilizado fora da função. 
//=====================================//=========================================//
function calcular(){
    const resultado = 10 + 20;
    console.log(resultado); //30
}
calcular(); //mostra o resultado


//#endregion=====================================//=========================================//

