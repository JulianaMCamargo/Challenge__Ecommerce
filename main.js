let produtos = []
const endpointDaApi = ""
getBuscarProdutosDaApi()

async function getBuscarProdutosDaApi () {
    const resposta = await fetch (endpointDaApi)
    produtos = await resposta.json ()
    exibirProdutosNaTela(produtos)
}