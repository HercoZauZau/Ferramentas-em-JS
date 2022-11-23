function tarefas() {
  const adicionar = document.querySelector("#adicionar");
  const entrada = document.querySelector("#entrada");
  const tarefasCriadas = document.querySelector("#tarefasCriadas");

  let posicaoTarefa = 0;

  adicionar.addEventListener("click", adicionarTarefa);

  function adicionarTarefa() {
    if (entrada.value != "") {
      posicaoTarefa++;

      tarefasCriadas.innerHTML += `
            <p id='paragrafoTarefa${posicaoTarefa}'>
            • ${entrada.value}
            <button class='right'>
                Apagar
            </button>
            <button class='right'>
                Feito
            </button>
            </p>`;

      entrada.value = "";

      for (let index = 1; index <= posicaoTarefa; index++) {
        if (document.querySelector(`#paragrafoTarefa${index}`)) {
          document
            .querySelector(`#paragrafoTarefa${index} button:first-of-type`)
            .addEventListener("click", () => {
              document.querySelector(`#paragrafoTarefa${index}`).remove();
            });

          document
            .querySelector(`#paragrafoTarefa${index} button:last-of-type`)
            .addEventListener("click", () => {
              document.querySelector(
                `#paragrafoTarefa${index}`
              ).style.textDecoration = "line-through";
              document
                .querySelector(`#paragrafoTarefa${index} button:last-of-type`)
                .remove();
            });
        }
      }
    }
  }
}
