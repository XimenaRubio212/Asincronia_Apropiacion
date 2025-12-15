const usuarios = [101, 102, 103, 104];

// VERSIÓN BLOQUEANTE
console.log("Inicio del programa.");
for (let i = 0; i < 90000; i++)
{
    console.log(usuarios[i]);
    
}
console.log("Fin del programa...");

// PROMESAS
function consultarUsuario(id) {
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id, nombre: `Usuario ${id}`})
        }, 1200);
    });
}

function consultarSeguridad(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario.seguridad = "OK";
      resolve(usuario);
    }, 800);
  });
}

function consultarRoles(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario.roles = ["admin", "ventas"];
      resolve(usuario);
    }, 2000);
  });
}

function registrar(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        usuario.tiempoTotal = "3.2 segundos";
        resolve(usuario)
    }, 600);
  });
}

async function procesarUsuarios(usuarios)
{
    for(let ID of usuarios)
    {
        let usuario = await consultarUsuario(ID);
        usuario = await consultarSeguridad(usuario);
        usuario = await consultarRoles(usuario);
        usuario = await registrar(usuario);

        console.log("Usuario final:", usuario, "\n");
    }
}

procesarUsuarios(usuarios);

// ASYNC/AWAIT

function consultarUsuario(id) {
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id, nombre: `Usuario ${id}`})
        }, 1200);
    });
}

function consultarSeguridad(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario.seguridad = "OK";
      resolve(usuario);
    }, 800);
  });
}

function consultarRoles(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario.roles = ["admin", "ventas"];
      resolve(usuario);
    }, 2000);
  });
}

function registrar(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(usuario)
    }, 600);
  });
}

async function procesarUsuarios(ID)
{
    const tiempoInicio = Date.now();

    let usuario = await consultarUsuario(ID);
    usuario = await consultarSeguridad(usuario);
    usuario = await consultarRoles(usuario);
    await registrar(usuario);

    const tiempo = (Date.now() - tiempoInicio) / 1000;
    usuario.tiempoTotal = `${tiempo} segundos`;

    return usuario;
}

async function MostrarUsuarios() 
{
    for (let ID of usuarios)
    {
        const resultado = await procesarUsuarios(ID);
        console.log(resultado);
    }
}

MostrarUsuarios();