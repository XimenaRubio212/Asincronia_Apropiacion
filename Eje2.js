console.log("Antes del ciclo pesado");

// Simulamos trabajo síncrono intensivo (~3s en muchos entornos)
const inicio = Date.now();
while (Date.now() - inicio < 3000) {
  // bloquea el hilo
}

console.log("Después del ciclo pesado — todo se detuvo durante 3s");