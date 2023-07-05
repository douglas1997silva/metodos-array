let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenarPorPreco.addEventListener('click', OrdemDosPreco)

function OrdemDosPreco(){
   
   let LivrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
   exibirOsLivrosNaTela(LivrosOrdenados)

}