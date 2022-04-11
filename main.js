// Datos del paciente

function Paciente(nombre, edad, dni) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.fechaNacimiento = fechaNacimiento;
  this.dni= dni;
  this.email= email;
}

let nombreUsuario = prompt("Ingrese su nombre");
let apellidoUsuario = prompt("Ingrese su apellido");
let edadUsuario = parseInt(prompt("Ingrese su edad"));
let fechaNacimientoUsuario = prompt("Ingrese su fecha de nacimiento");
let dniUsuario= prompt("Ingrese su número de documento");
let emailUsuario= prompt("Ingrese su email");


//!    Declaro array de objetos medicos
const medicos = [
    { nombre: "Arsenio", especialidad: "urologiaAdultos" },
    { nombre: "Sergio", especialidad: "urologiaGeneral" },
    { nombre: "Ramiro", especialidad: "cirugias" },
    { nombre: "Juan", especialidad: "urologiaPediatrica" },
  ];
  
  //! Declaro array de servicios
  const servicios = [
    "urologiaAdultos",
    "urologiaGeneral",
    "cirugias",
    "urologiaPediatrica",
  ];
  
  function medicoEspecialidad(espe, medicos) {
    const especialista = medicos.find((el) => el.especialidad == espe);
    return especialista.nombre;
  }

alert("Bienvenido al Centro del Urologia");

const usuario = prompt("Ingrese Nombre de Usuario")

console.log(usuario);

const usuarioNuevo = prompt("¿Es un usuario nuevo? \n 1.Si \n 2.No")

while ((usuarioNuevo != `2`) && (usuarioNuevo.toLowerCase() != `no` ) 
    && (usuarioNuevo != `1`) && (usuarioNuevo.toLowerCase() != `si`)) {

        usuarioNuevo = prompt ("Usted ha ingresado un dato incorrecto ¿Es un usuario nuevo?")
    }

    if ((usuarioNuevo == `2`) || (usuarioNuevo.toLowerCase() == `no`)) {
        alert("Entrá a la página y conocenos un poco más");
    }

    else if ((usuarioNuevo == `1` || (usuarioNuevo.toLowerCase() == `si`))){
        alert("Bienvenidos a nuestra página")
    }

    else {
        alert("Datos incorrectos, vuelva a intentar");
    }

// El usuario va a elegir el motivo por el cual ingresa a la página

let servicioElegido = parseInt(
    prompt(
      "Los servicios disponibles en nuestra clínica son: \n 1-" +
        servicios[0] +
        "\n 2-" +
        servicios[1] +
        "\n 3-" +
        servicios[2] +
        "\n 4-" +
        servicios[3]
    )
  );
  
  switch (servicioElegido) {
    case 1:
      alert(
        "El especialista disponible para la especialidad elejida es el doctor: " +
          medicoEspecialidad("urologiaAdultos", medicos)
      );
      break;
    case 2:
      alert(
        "El especialista disponible para la especialidad elejida es el doctor: " +
          medicoEspecialidad("urologiaGeneral", medicos)
      );
      break;
    case 3:
      alertalert(
        "El especialista disponible para la especialidad elejida es el doctor: " +
          medicoEspecialidad("cirugias", medicos)
      );
      break;
    case 4:
      alert(
        "El especialista disponible para la especialidad elejida es el doctor: " +
          medicoEspecialidad("urologiaPediatrica", medicos)
      );
      break;
    default:
      alert("el numero ingresado no es correcto");
  }

var cantDiasDelMes = 0;

const mesDeCita = prompt(` 
    ¿En que mes quiere agendar su turno? (elija un número del 1 al 12)
    1.Enero
    2.Febrero
    3.Marzo
    4.Abril
    5.Mayo
    6.Junio
    7.Julio
    8.Agosto
    9.Septiembre
    10.Octubre
    11.Noviembre
    12.Diciembre
                `);

if (mesDeCita == 1) {
    cantDiasDelMes = 31;
} else if (mesDeCita == 2) {
    cantDiasDelMes = 28;
} else if (mesDeCita == 3) {
    cantDiasDelMes = 31;
} else if (mesDeCita == 4) {
    cantDiasDelMes = 30;
} else if (mesDeCita == 5) {
    cantDiasDelMes = 31;
} else if (mesDeCita == 6) {
    cantDiasDelMes = 30;
} else if (mesDeCita == 7) {
    cantDiasDelMes = 31;
} else if (mesDeCita == 8) {
    cantDiasDelMes = 31;
} else if (mesDeCita == 9) {
    cantDiasDelMes = 30;
} else if (mesDeCita == 10) {
    cantDiasDelMes = 31;
} else if (mesDeCita == 11) {
    cantDiasDelMes = 30;
} else if (mesDeCita == 12) {
    cantDiasDelMes = 31;
}

let nuevaCita = 0;

for ( nuevaCita = 1; nuevaCita <= cantDiasDelMes; nuevaCita ++){
    console.log("Días disponibles: " + nuevaCita);
}





















