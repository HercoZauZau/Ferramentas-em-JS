function calculadora() {
  let valor1 = document.querySelector(".valor1");
  let valor2 = document.querySelector(".valor2");
  let valores = document.querySelector("#result div:first-of-type");
  let resultado = document.querySelector("#result div:last-of-type");
  let sinal = ``;
  let focarValor = 0;

  valor1.addEventListener("keyup", focar);
  valor2.addEventListener("keyup", focar);
  document.body.addEventListener(`keyup`, calcula);

  document.querySelector("#mais").addEventListener("click", mais);
  document.querySelector("#menos").addEventListener("click", menos);
  document.querySelector("#vezes").addEventListener("click", vezes);
  document.querySelector("#dividir").addEventListener("click", dividir);

  for (let i = 0; i < 10; i++) {
    document.querySelector(`#n${i}`).addEventListener("mousedown", () => {
      digita(i);
    });
  }

  document.querySelector("#clear").addEventListener("mousedown", limpa);

  function digita(valor) {
    if (focarValor == 2) {
      valor2.value += valor;
    } else {
      valor1.value += valor;
    }

    calcula();
  }

  function limpa() {
    location.reload();
  }

  addEventListener("keydown", function (event) {
    if (event.code == "Space") {
      mudarModo();
    }
  });

  function calcula() {
    switch (sinal) {
      case `+`:
        mais();
        break;
      case `-`:
        menos();
        break;
      case `*`:
        vezes();
        break;
      case `/`:
        dividir();
        break;
      default:
        break;
    }
    focar();
  }

  function focar() {
    if (focarValor == 2) {
      valor2.focus();
    } else {
      valor1.focus();
    }

    valores.innerHTML = `${valor1.value} ${sinal} ${valor2.value}`;
  }

  // ==========================================================

  function mais() {
    focarValor = 2;
    resultado.innerText = Number(valor1.value) + Number(valor2.value);
    sinal = `+`;
    focar();
  }

  function menos() {
    focarValor = 2;
    resultado.innerText = Number(valor1.value) - Number(valor2.value);
    sinal = `-`;
    focar();
  }

  function vezes() {
    focarValor = 2;
    resultado.innerText = Number(valor1.value) * Number(valor2.value);
    sinal = `*`;
    focar();
  }

  function dividir() {
    focarValor = 2;
    if (valor2.value != 0) {
      resultado.innerText = (
        Number(valor1.value) / Number(valor2.value)
      ).toFixed(1);
    }
    sinal = `/`;
    focar();
  }

  const modo = document.querySelector("#modo");
  modo.addEventListener("click", mudarModo);

  function mudarModo() {
    let fundo, cor;

    if (modo.textContent == "CLARO") {
      modo.innerText = "ESCURO";
      fundo = "var(--cor-primaria-escura)";
      cor = "white";
      modo.style.backgroundColor = "black";
      modo.style.color = "white";
      document.querySelector("main").style.border = "2px solid white";
    } else {
      modo.innerText = "CLARO";
      fundo = "var(--cor-primaria)";
      cor = "white";
      modo.style.backgroundColor = "black";
      modo.style.color = "white";
      document.querySelector("main").style.border = "2px solid black";
    }

    const corpo = document.body.style;
    corpo.backgroundColor = fundo;
  }
}
