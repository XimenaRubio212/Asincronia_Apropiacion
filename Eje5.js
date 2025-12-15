//este mensaje sincronico se muestra primero
//antes de hacer la promesa
console.log("Tomando datos...");
//se realiza la funcion promesa
new Promise(resolve => {
  setTimeout(() => {
    console.log("Procesando datos...");
    resolve();
  }, 1000);
})
.then(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Mostrando resultado");
      resolve();
    }, 1000);
  });
}); 