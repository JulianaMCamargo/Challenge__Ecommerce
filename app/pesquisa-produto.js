import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./imprime-produtos.js"

const botaoPesquisa =  document.querySelector("[data-botao-pesquisa]");
botaoPesquisa.addEventListener("click", evento => buscarProdutos(evento));

async function buscarProdutos(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector("[data-campo-pesquisa]").value;
  const busca = await conectaAPI.buscaProduto(dadosDePesquisa);

  // Armazena os dados da busca no localStorage
  localStorage.setItem("busca", JSON.stringify(busca));

  // Redireciona para a página "ver-tudo.html"
  window.location.href = "../paginas/ver-tudo.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const lista = document.querySelector("[data-grid-lista]");

  // Recupera os dados da busca do localStorage
  const busca = JSON.parse(localStorage.getItem("busca"));

  if (busca) {
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }

    try {
      busca.forEach(elemento => lista.appendChild(constroiCard(elemento.imagemUrl, elemento.nomeProduto, elemento.preco, elemento.id)));
    } catch {
      if (busca.length === 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem produtos com esse termo</h2>`;
      }
    }
  } else {
    lista.innerHTML = `<h2">Nenhum resultado de busca encontrado</h2>`;
  }

  // Limpa os dados da busca armazenados no localStorage
  localStorage.removeItem("busca");
});
