import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-forms-adicionar-produto]");

async function adicionaProdutos (evento){
    evento.preventDefault()

    const imagemUrl = document.querySelector("[data-imagemUrl]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nomeProduto = document.querySelector("[data-nomeProduto]").value;
    const preco = document.querySelector("[data-preco]").value;
    const descricao = document.querySelector("[data-descricao]").value;

    try{
        await conectaAPI.adicionaProdutos(imagemUrl, categoria, nomeProduto, preco, descricao);

        window.location.href = "../paginas/produto-adicionado.html"
    }catch (e){
        alert(e);
    }
}

formulario.addEventListener("submit", evento => adicionaProdutos (evento));