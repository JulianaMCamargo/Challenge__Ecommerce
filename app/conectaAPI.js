let produtos = [];
const endpointDaApi = "https://64b8efab79b7c9def6c04883.mockapi.io/api/v1/produtos";

// GET
async function listaProdutos () {
    const resposta = await fetch (endpointDaApi);
    produtos = await resposta.json ();
    return produtos;
}

listaProdutos();

async function filtraCategoria () {
    const resposta = await fetch (endpointDaApi);
    produtos = await resposta.json ();
    return produtos;
}

//GET + FILTER
async function buscaProduto (dadosDePesquisa) {
    const resposta = await fetch (`https://64b8efab79b7c9def6c04883.mockapi.io/api/v1/produtos?q=${dadosDePesquisa}`);
    produtos = await resposta.json();
    
    return produtos;
}

//PUSH
async function adicionaProdutos (imagemUrl, categoria, nomeProduto, preco, descricao) {
    const resposta = await fetch(endpointDaApi,{
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            imagemUrl: imagemUrl,
            categoria: categoria,
            nomeProduto: nomeProduto,
            preco: preco,
            descricao: descricao
        })  
    })

    if(!resposta.ok) {
        throw new Error ("Não foi possível cadastrar esse produto.")
    }

    produtos = await resposta.json ();
}

//DELETE
async function deletaProduto(idProduto) {
    const endpointDaApi = (`https://64b8efab79b7c9def6c04883.mockapi.io/api/v1//produtos/${idProduto}`);
    const resposta = await fetch(endpointDaApi, {method:"DELETE"});

    if (resposta.ok) {
        console.log("Produto excluído com sucesso.");
    } else {
        console.error("Erro ao excluir o produto:", resposta.statusText);
    }
}

export const conectaAPI = {
    listaProdutos,
    adicionaProdutos,
    filtraCategoria,
    buscaProduto,
    deletaProduto
}