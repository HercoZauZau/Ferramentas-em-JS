window.onload = function () {
  let hora = new Date();
  let hora_completa = `${hora.getHours()}:${hora.getMinutes()}`;

  let divHoras = document.querySelector("#horas")
  divHoras.innerText = hora_completa;
};
