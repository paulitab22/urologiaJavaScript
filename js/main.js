//Creamos el array de objetos usuario


let usuarios = [
  {
    email: "usuarioprueba@gmail.com",
    contraseña: "123",
  },
];

//Accion de boton iniciar sesión

let btnIniciarSesion = document.getElementById('btnLogIn')

    btnIniciarSesion.addEventListener("click", validacionUsuario);
                     


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
    nombreUsuario === usuario ? usuarioEncontrado = true: alert('Usuario no Encontrado')
    contraseniaUsuario === contrasenia ?
    (contraseniaEncontrada = true,
    window.open("./vistaturnos/turnos.html", "_self"))
    : alert('Contraseña no encontrada')

    
  }
}

// Acción de enviar el formulario

/* let formularioContacto = document.getElementById ("formularioContacto");
formularioContacto.addEventListener ("submit", validarFormulario);

function validarFormulario (e){
  e.preventDefault();
  console.log("Envió su formulario");
} */

let mail = [],
    pasword = [];

let btnLogin = document.getElementById('btnLogIn');

btnLogin.addEventListener('click', registrarDatos);

function registrarDatos(){
  let _mail = document.getElementById('txtEmail').value,
      _pasword = document.getElementById('txtContrasenia').value;
  
  mail.push(_mail);
  pasword.push(_pasword)

  /* Con estos console cooroboramos que se este guardando efectivamente los valores de los imputs en las variables */
  console.log(mail);
  console.log(pasword)
  
  localStorage.setItem('mail', JSON.stringify(mail))
  localStorage.setItem('pasword', JSON.stringify(pasword))

}
  
