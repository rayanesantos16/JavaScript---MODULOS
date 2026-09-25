
const temperatura = 380; 
const freioPressionado = true; 
const alertaPerigo = temperatura >= 267;
const usoIntenso = temperatura > 300 && freioPressionado === true;
const freioSeguro = temperatura < 400 && temperatura >= 50;
const alertaPainel = temperatura > 400 || temperatura < 0;
const estadoInativo = !freioPressionado;

console.log("Alerta de Perigo:", alertaPerigo);    
console.log("Uso Intenso:", usoIntenso);          
console.log("Freio Seguro:", freioSeguro);        
console.log("Alerta no Painel:", alertaPainel);    
console.log("Estado Inativo:", estadoInativo);    
