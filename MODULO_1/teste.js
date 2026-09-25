const pedidos = [
  { cliente: "Bia", valor: 150, pago: true },
  { cliente: "Bebel", valor: 300, pago: false },
  { cliente: "Nathy", valor: 500, pago: true },
  { cliente: "Lara", valor: 200, pago: true },
  { cliente: "Vinicius", valor: 100, pago: true },
  { cliente: "Isadora", valor: 243, pago: true },
  { cliente: "Celina", valor: 2400, pago: false },
  { cliente: "Michele", valor: 5400, pago: false },
  { cliente: "Alessandro ", valor: 1200, pago: true }
];
for(let i = 0; i < pedidos.length; i++){
  if (pedidos [i].pago === true) {
    console.log(pedidos[i]);
  }
}

