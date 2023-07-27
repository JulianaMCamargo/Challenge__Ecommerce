import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-grid-lista]")

export default function constroiCard (imagemUrl, nomeProduto, preco, id){
    const produto = document.createElement("li");
    produto.className = "produtos__grid-itens";
    produto.setAttribute("data-produto-id", `${id}`);
    produto.innerHTML = 
        `<div class="produtos__grid-img">
            <button class="produtos__itens-delete icones" data-botao-delete"><img src="../assets/img/icone-delete.svg" alt="Ícone para deletar"></button>
            <a href="../paginas/editar-produto.html" class="produtos__item-editar icones"><img src="../assets/img/icone-editar.svg" alt="Ícone para editar"></a>
        </div>
        <h3 class="produtos__itens-descricao">${nomeProduto}</h3>
        <p class="produtos__itens-valor">R$${preco}</p>
        <p class="produtos__itens-referencia">${id}</p>
        <a href="#" class="produtos__itens-verproduto ver-produto">Ver Produto</a>`

    const imagem = produto.querySelector('.produtos__grid-img');
    imagem.style.backgroundImage = `url(${imagemUrl})`;

    console.log(produto);
    return produto; 
}

async function listaProdutos() {
    try{
            const produtos = await conectaAPI.listaProdutos();
            produtos.forEach(elemento => lista.appendChild(constroiCard(elemento.imagemUrl, elemento.nomeProduto, elemento.preco, elemento.id)));
        } catch{
        lista.innerHTML = ` <h3 class="produtos__itens-descricao">Não foi possível carregar a lista de produtos!</h3>`
    }
}

listaProdutos();
