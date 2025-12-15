console.log("1. Tomando datos...");

new Promise(resolve => {
  setTimeout(() => {
    console.log("2. Procesando datos...");
    resolve();
  }, 1000);
})
.then(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("3. Mostrando resultado");
      resolve();
    }, 1000);
  });
});