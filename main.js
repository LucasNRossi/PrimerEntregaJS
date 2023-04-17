let edadUsuario = Number (prompt("Ingrese su edad: "));
let Dni = prompt("Trajo su DNI (si / no): ");
const EDAD_MINIMA = 18;
const DOCUMENTO = "si";

if ((Dni == DOCUMENTO) && (edadUsuario >= EDAD_MINIMA)){
  alert ("Puedes ingresar a la Disco bailable");
}
else{
  alert ("No puedes ingresar a la Disco bailable");
}

let edad = 18;

if (edadUsuario >= edad){
}
else {
  alert("Eres menor de edad");
}

let documento = "si";

if (Dni != documento){
  alert("Deberias traer tu DNI para poder ingresar")
}

let capacidad = 60;
let invitados = 0;

while((Dni == DOCUMENTO) && (edadUsuario >= EDAD_MINIMA)) {
  let invitados = prompt("¿Con cuantas personas asistirá?: ");
  if (invitados<capacidad){
    alert ("Pueden invitar algunas personas más")
  }
  else{
  alert ("El lugar se encuentra lleno")
  break
  }
}