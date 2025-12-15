//este mensaje sincronico se muestra primero
//antes de hacer la promesa
console.log("Tomando datos...");
//se realiza la funcion promesa asincrona
//y es para crear una promesa nueva
new Promise(resolve => {
  //con una funcion callback que toma datos después de 1 segundo
  setTimeout(() => {
    //donde se va a mostrar este mensaje asincrono despues de 1 segundo
    console.log("Procesando datos...");
    //y se resuelve la nueva promesa asincrcona
    resolve();
    //el tiempo de espera es de 1 segundo
  }, 1000);
})
//el .then(() => {}) es para poder ingresar a la siguiente promesa
.then(() => {
  //es una promesa asincrona
  //y al ingresar a esta nueva promesa y retonrar otra promesa
  //que ya esta recibiendo el resolve de la promesa anterior
  return new Promise(resolve => {
    //con una funcion callback que toma datos después de 1 segundo
    setTimeout(() => {
      //donde se va a mostrar este mensaje asincrono despues de 1 segundo
      console.log("Mostrando resultado");
      //y se resuelve la nueva promesa asincrcona
      resolve();
      //el tiempo de espera es de 1 segundo
    }, 1000);
  });
}); 

