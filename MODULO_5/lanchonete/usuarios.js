//construiu objeto com usuarios
const usuarios = [
    {
        id: 1,
        nome: "Rayane",
        whats:"16981074065",
        email:"rayaneyasmind@gmail.com",
        cep:"123456789"
    },
    {
        id: 2,
        nome: "Michele",
        whats:"16997780152",
        email:"alemiray17@gmail.com",
        cep:"123456789"
    },
    {
        id: 3,
        nome: "Alessandro",
        whats:"16997780106",
        email:"alessandro@gmail.com",
        cep:"123456789"
    }
];
//função buscando usuarios
async function buscarUsuario(id) {

    return new Promise((resolve,reject) => {

        setTimeout(() => {

            const usuario = usuarios.find(usuario => usuario.id === id);
            
            if (usuario){
                resolve(usuario);
            }
            else{
                reject("Usuário não encontrado");
            }
        },2000)
    });
};
//transformando em modulo
module.exports = {
    buscarUsuario
};