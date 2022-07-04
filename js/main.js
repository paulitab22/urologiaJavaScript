// Creamos el array de objetos de usuario

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
  
    // Con estos console log cooroboramos que se esté guardando efectivamente los valores de los imputs en las variables 

    console.log(mail);
    console.log(pasword)
    
    localStorage.setItem('mail', JSON.stringify(mail))
    localStorage.setItem('pasword', JSON.stringify(pasword))
  
  }
  
