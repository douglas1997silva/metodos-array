let livros = []
const endpointDaApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json"

buscaLivroDaApi();


async function buscaLivroDaApi(){
    const resposta = await fetch (endpointDaApi)
    livros = await resposta.json()
    let livrosComDescontos = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDescontos)
}


