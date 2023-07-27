import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./imprime-produtos.js";

const categoria = ["starwars", "consoles", "diversos"];

async function exibirProdutosPorCategoria(categoriaDaSecao){
    const secao = document.querySelector(`[data-categoria="${categoriaDaSecao}"]`);

    const produtos = await conectaAPI.filtraCategoria(); //recebe a lista de todos os elementos da API
    let produtosFiltrados = produtos.filter(elemento => elemento.categoria === categoriaDaSecao); //aqui ele vai buscar, em cada uma dos elementos da array, a propriedade categoria e verifica se a propriedade categoria do elemento é estritamente igual (===) ao valor da variável categoria 

    produtosFiltrados.forEach(elemento => secao.appendChild(constroiCard(elemento.imagemUrl, elemento.nomeProduto, elemento.preco, elemento.id)))
}

categoria.forEach(categoria => exibirProdutosPorCategoria(categoria));
