import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-grid-lista]");
lista.addEventListener("click", deletarProduto);
    
async function deletarProduto(evento){
    var elementoClicado = evento.target;

    if(elementoClicado.classList.contains("produtos__itens-delete")){
        var produto = elementoClicado.parentNode;
        var card = produto.parentNode;

        const idProduto = card.querySelector(".produtos__itens-referencia");
        const id = idProduto.textContent;
        console.log(id)

        await conectaAPI.deletaProduto(id); //aqui eu estou deletando da API
    
        card.remove(); //aqui deleto da página
    }
}