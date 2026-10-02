//import 

import http from "http";

//criar servidor

const servidor = http.createServer((req, res) => {

//headers

res.writeHead(200,{"content-type": "text/html; charset=utf-8"});

//body

res.end(JSON.stringify({mensagem: "A minha primeira API com node.js"}));

//demostração do método que está sendo utilizado

console.log(req.method);

});

// iniciando servidor

servidor.listen(3000,() =>{
    console.log("Servidor rodando na porta 3000");
});
