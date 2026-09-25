const pedidos = [
  { cliente: "Bia", valor: 150, pago: true },
  { cliente: "Bebel", valor: 300, pago: false },
  { cliente: "Nathy", valor: 500, pago: true },
  { cliente: "Lara", valor: 200, pago: true },
  { cliente: "Vinicius", valor: 100, pago: true },
  { cliente: "Michele", valor: 243, pago: true },
  { cliente: "Celina", valor: 2400, pago: false },
  { cliente: "Isadora", valor: 5400, pago: false },
  { cliente: "Alessandro ", valor: 1200, pago: true }
];

for (const pedido of pedidos) {
  if (pedido.pago) {
    console.log(`Pedidos pagos - Clientes: ${pedido.cliente} | Valor: R$${pedido.valor}`);
  }
}
