//import 

import http from "http";

//criar servidor

const servidor = http.createServer((req, res) => {

//headers

res.setHeader("content-type", "text/html; charset=utf-8");

//logica body de rota

if (req.url === "/"){

    res.end("pagina inicial");

}else if(req.url=== "/livros"){

    res.end("Página de livros");
}else if(req.url === "/usuarios"){
    res.end("Página usuários");
}else{
    res.end("ERRO 404: página não encontrada");
}

});

servidor.listen(3000,() =>{
    console.log("Servidor rodando na porta 3000");
});
