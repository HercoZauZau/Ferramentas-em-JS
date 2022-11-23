const links = document.querySelectorAll("a");

links.forEach((e) => {
  e.addEventListener("click", (l) => {
    l.preventDefault();
  });
});

links.forEach((e) => {
  e.addEventListener("mouseenter", (l) => {
    let alvo = l.target;
    let classe = e.className;

    // console.log(c);
    l.preventDefault();
    carregaPagina(alvo, classe);
  });
});

const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

async function carregaPagina(link, classe) {
  const objConfig = {
    method: "GET",
    url: link,
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response, classe);
  } catch (erro) {
    console.error(erro);
  }
}

function carregaResultado(response, classe) {
  document.querySelector(".resultado").innerHTML = response;

  switch (classe) {
    case "timer":
      timer();
      break;
    case "tarefas":
      tarefas();
      break;
    case "calculadora":
      calculadora();
      break;
    case "agenda":
      agenda();
      break;
    default:
      break;
  }
}
