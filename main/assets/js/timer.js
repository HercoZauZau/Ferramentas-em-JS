function timer() {
  const iniciar = document.querySelector("#botaoTimer1");
  const pausar = document.querySelector("#botaoTimer2");
  const zerar = document.querySelector("#botaoTimer3");
  const relogio = document.querySelector("#relogio");

  iniciar.addEventListener("click", iniciarTimer);
  pausar.addEventListener("click", pausarTimer);
  zerar.addEventListener("click", zerarTimer);

  let contador = 0;
  let contaInicio = 0; // IMPEDE QUE SE ESTRAGUE A CONTAGEM NORMAL DO TEMPO AO CLICAR VÁRIAS VEZES NO "INICIAR"
  let horas;
  let minutos;
  let segundos;
  let pausa = false;

  function iniciarTimer() {
    pausa = false;

    if (contaInicio === 0) {
      relogio.style.color = "black";
      const gerarTempo = setInterval(() => {
        if (pausa === true) {
          clearInterval(gerarTempo);
          contador -= 1; // PRA PAUSAR EM TEMPO REAL
        }

        contador++;

        horas = Math.floor(contador / 3600);
        minutos = Math.floor((contador / 3600 - horas) * 60);
        segundos = Math.floor(((contador / 3600 - horas) * 60 - minutos) * 60);

        if (horas < 10) {
          horas = "0" + horas;
        }

        if (minutos < 10) {
          minutos = "0" + minutos;
        }

        if (segundos < 10) {
          segundos = "0" + segundos;
        }

        relogio.innerHTML = `${horas}:${minutos}:${segundos}`;
      }, 1000);
    }

    contaInicio++;
  }

  function pausarTimer() {
    if (contador != 0) {
      relogio.style.color = "red";
    }
    pausa = true;
    contaInicio = 0;
  }

  function zerarTimer() {
    relogio.style.color = "black";
    relogio.innerHTML = "00:00:00";
    pausa = true;
    contaInicio = 0;
    contador = 0;
  }
}
