console.log("Tomando datos...");

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