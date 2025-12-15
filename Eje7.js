async function esperar() {
  console.log("Esperando 2 segundos...");

  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log("¡Listo!");
}

esperar();