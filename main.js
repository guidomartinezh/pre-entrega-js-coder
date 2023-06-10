function mostrarMensajeDiaSemana() {
  const dia = new Date().getDay();
  const nombreUsuario = prompt('Ingrese su nombre');

  switch (dia) {
    case 0:
      alert("¡Hola " + nombreUsuario + "! ¡Hoy es domingo! 😴");
      break;
    case 1:
      alert("¡Hola " + nombreUsuario + "! ¡Nooo, es lunes! 😱");
      break;
    case 2:
      alert("¡Hola " + nombreUsuario + "! ¡Hoy es martes! 🥵");
      break;
    case 3:
      alert("¡Hola " + nombreUsuario + "! ¡Hoy es miércoles! Llegaste a la mitad de la semana 🤓");
      break;
    case 4:
      alert("¡Hola " + nombreUsuario + "! ¡Ya casi... falta poco! 💪");
      break;
    case 5:
      alert("¡Hola " + nombreUsuario + "! ¡Feliz viernes!🎉");
      break;
    case 6:
      alert("¡Hola " + nombreUsuario + "! ¡Hoy es sábado de descanso! 😄");
      break;
  }

  if (dia == 0 || dia == 6) {
    alert('Estimado usuario, te esperamos a partir del día lunes para una nueva semana de tus actividades favoritas.');
  } else if (dia >= 1 && dia <= 5) {
    alert('Se muestra guía de actividades.');
  }
}

mostrarMensajeDiaSemana();



