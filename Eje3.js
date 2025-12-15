//este mensaje se muesta antes de iniciar el comportamiento asincronico
//este mensaje es sincronico
console.log("Iniciando pedido...");
//comportamiento asincronico con setTimeout
setTimeout(() => {
  //este es el mensjae asincrona que se muesta
  //despues de 3 segundos
  console.log("Pedido entregado");
}, 3000);