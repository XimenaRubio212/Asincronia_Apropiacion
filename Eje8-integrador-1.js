//Con callbacks
console.log("Buscando usuario...");

setTimeout(() => {
    console.log("Consultando permisos...");

  setTimeout(() => {
    console.log("Generando reporte final");

    setTimeout(() => {
      console.log("Reporte listo");
    }, 1000);
  }, 2000);
}, 1000);


//Con promesas
console.log("Buscando usuario...");

new Promise(resolve => setTimeout(resolve, 1000))
.then(() => {
  console.log("Consultando permisos...");
  return new Promise(resolve => setTimeout(resolve, 2000));
})
.then(() => {
  console.log("Generando reporte final");
  return new Promise(resolve => setTimeout(resolve, 1000));
})
.then(() => console.log("Reporte listo"));


//Con async/await
async function consultar() {
  console.log("Buscando usuario...");
  await new Promise(r => setTimeout(r, 1000));

  console.log("Consultando permisos...");
  await new Promise(r => setTimeout(r, 2000));

  console.log("Generando reporte final");
  await new Promise(r => setTimeout(r, 1000));

  console.log("Reporte listo");
}

consultar();