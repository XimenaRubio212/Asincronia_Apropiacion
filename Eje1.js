//Se muestra el comportamiento sincrono en consola
console.log("Inicio");
//funcion que simula una operacion asincrona con setTimeout
setTimeout(() => {
    //mensaje que se muestra en consola despues de 2 segundos
    console.log("Operacion finalizada por completo...");
    //espera de tiempo para simular una operacion asincrona
}, 2000);
//este mensaje se muestra en consola y su comportamiento es sincrono
console.log("Fin");