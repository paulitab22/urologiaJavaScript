//Creamos el array de objetos usuario

let usuarios = [
  {
    email: "usuarioprueba@gmail.com",
    contraseña: "123",
  },
];

//Accion de boton iniciar sesión

document
  .querySelector("#btnLogIn")
  .addEventListener("click", validacionUsuario);

//Sección funciones

//!Función para validar usuarios en inicio de sesión

function validacionUsuario() {
  let usuario = document.querySelector("#txtEmail").value;
  let contrasenia = document.querySelector("#txtContrasenia").value;
  let usuarioEncontrado = false;
  let contraseniaEncontrada = false;

  for (const usu of usuarios) {
    let nombreUsuario = usu.email;
    let contraseniaUsuario = usu.contraseña;
    if (nombreUsuario == usuario) {
      usuarioEncontrado = true;
      if (contraseniaUsuario == contrasenia) {
        contraseniaEncontrada = true;
        window.open("./views/turnos.html", "_self");
      }
    }
    console.log(usuarioEncontrado);
    console.log(contraseniaEncontrada);
  }
}
