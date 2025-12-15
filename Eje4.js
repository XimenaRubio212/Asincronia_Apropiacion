//este mensaje sincrono se muestra primero
console.log("Tomando datos...");
//desúes se realiza la funcion asíncrona
//esto es una callback que toma datos después de 1 segundo
setTimeout(() => {
  //este mensaje asíncrono se muestra después de 1 segundo
  console.log("Procesando datos...");
  //se realiza la segunda funcion asíncrona de 1 segundo
  setTimeout(() => {
    //continuando con este mensaje sincrono que se muestra después de otro segundo
    console.log("Mostrando resultado");
  }, 1000);
//este es el del primer setTimeout para
//que muestre en consola la primera función asíncrona después de 1 segundo
}, 1000);