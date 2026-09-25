const pedidos = [
    {
        id: 1,
        usuarioId:2,
        produtoId:4,
        quantidade:3,
        valor:40

    },
    {
        id: 2,
        usuarioId:1,
        produtoId:1,
        quantidade:3,
        valor:60

    },
    {
        id: 3,
        usuarioId:3,
        produtoId:5,
        quantidade:2,
        valor:14

    },
];

async function buscarPedidos(usuarioId) {

    return new Promise((resolve,reject) => {

        setTimeout(() => {

            const pedidosUsuario= pedidos.filter(pedido => pedido.usuarioId === usuarioId);
            
            if (pedidosUsuario.length > 0){
                resolve(pedidosUsuario);
            }
            else{
                reject("Pedido não encontrado");
            }
        },2000)
    });
};
//transformando em modulo
module.exports = {
    buscarPedidos
};
    