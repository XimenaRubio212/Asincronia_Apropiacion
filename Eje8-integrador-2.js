const ordenes = [
  { id: 1, cliente: "Ana", monto: 120000 },
  { id: 2, cliente: "Luis", monto: 80000 },
  { id: 3, cliente: "María", monto: 150000 }
];

// CALLBACKS
function verificar(orden, callback) {
  setTimeout(() => {
    console.log(`Verificada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
    callback(orden);
  }, 1500);
}
// Verificar: 1.5 segundos
function procesar(orden, callback) {
  setTimeout(() => {
    console.log(`Procesada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
    callback(orden);
  }, 2000);
}
// Procesar: 2 segundos
function registrar(orden, callback) {
  setTimeout(() => {
    console.log(`Registrada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
    callback(orden);
  }, 1000);
}
// Registrar: 1 segundo
function notificar(orden) {
  setTimeout(() => {
    console.log(`Notificada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
  }, 500);
}
// Notificar: 0.5 segundos
verificar(ordenes[0], orden => {
  procesar(orden, orden => {
    registrar(orden, orden => {
      notificar(orden);
    });
  });
});

// Tiempo total: 1.5 + 2 + 1 + 0.5 = 5 Segundos.

// PROMESAS
function verificar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Verificada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
      resolve(orden);
    }, 1500);
  });
}

function procesar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Procesada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
      resolve(orden);
    }, 2000);
  });
}

function registrar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Registrada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
      resolve(orden);
    }, 1000);
  });
}

function notificar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Notificada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
      resolve(orden);
    }, 500);
  });
}

verificar(ordenes[1])
  .then(procesar)
  .then(registrar)
  .then(notificar);

// ASYNC/AWAIT
function verificar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Verificada orden...`);
      resolve(orden);
    }, 1500);
  });
}

function procesar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Procesada orden...`);
      resolve(orden);
    }, 2000);
  });
}

function registrar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Registrada orden...`);
      resolve(orden);
    }, 1000);
  });
}

function notificar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Notificada orden...`);
      resolve(orden);
    }, 500);
  });
}

async function consultarOrden(orden)
{
    try
    {
        const verficarOrden = await verificar(orden);
        console.log(verficarOrden);
        
        const procesarOrden = await procesar(verficarOrden);
        console.log(procesarOrden);

        const registrarOrden = await registrar(procesarOrden);
        console.log(registrarOrden);

        const notificarOrden = await notificar(registrarOrden);
        console.log(notificarOrden, "\nSIGUIENTE ORDEN.. \n");
    }
    catch (error)
    {
        console.log(error);
    }
}

async function OrdenEnseries() 
{
    for (let orden of ordenes)
    {
        await consultarOrden(orden);
    }
}

OrdenEnseries();