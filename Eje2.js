//se muestra el mensaje antes del ciclo del comportamiento sincronico
console.log("Antes del ciclo pesado");
// Simulamos trabajo síncrono
const inicio = Date.now();
// ciclo que dura aproximadamente 3 segundos
while (Date.now() - inicio < 3000) {
  // bloquea el hilo
}
//este mensaje se muestra despues de que el ciclo pesado ha terminado
//del comportamiento sincronico
console.log("Después del ciclo pesado — todo se detuvo durante 3s");