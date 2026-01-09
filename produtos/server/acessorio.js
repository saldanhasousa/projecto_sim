import { buscarAcessorios } from '../server/acessoriosService.js';
import { criarProdutoCard } from '../components/produtoCard.js';

async function init() {
  const acessorio = await buscarAcessorios();


  const container = document.getElementById('acessorios');


 
  container.innerHTML = acessorio
    .map(acessorio => criarProdutoCard(acessorio))
    .join('');
}

init();