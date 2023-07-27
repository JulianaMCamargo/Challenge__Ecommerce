let produtos = [];
const endpointDaApi = "https://64b8efab79b7c9def6c04883.mockapi.io/api/v1/produtos";

async function listaProdutos () {
    const resposta = await fetch (endpointDaApi);
    produtos = await resposta.json ();

    console.log(produtos);
}
