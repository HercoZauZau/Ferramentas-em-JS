function agenda() {
  fetch("pessoas.json")
    .then((resposta) => resposta.json())
    .then((json) => carregar(json));

  function carregar(json) {
    const table = document.createElement("table");

    for (let pessoa of json) {
      const tr = document.createElement("tr");

      let td1 = document.createElement("td");
      td1.innerHTML = pessoa.nome;
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.innerHTML = pessoa.email;
      tr.appendChild(td2);

      table.appendChild(tr);
    }

    const resultado = document.querySelector(".tabela");
    resultado.appendChild(table);

    document.body.style.textAlign = "center";
  }
}
