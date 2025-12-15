//se muestra primero este 
console.log("Intentando operación riesgosa...");

new Promise((resolve, reject) => {
  const exito = Math.random() > 0.5; // 50% de éxito
  setTimeout(() => {
    if (exito) {
      resolve("Éxito");
    } else {
      reject("Falló");
    }
  }, 1000);
})
.then(mensaje => console.log(mensaje))
.catch(error => console.log(error));