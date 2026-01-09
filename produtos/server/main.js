import { buscarProdutos} from '../server/produtosService.js';
import { buscarAcessorios } from '../server/buscarAcessorios.js';
import { criarProdutoCard } from '../components/produtoCard.js';
import {buscarDesktop } from '../server/buscarDesktop.js';
import {buscarAudio } from '../server/buscarAudio.js';
import {buscarCarossel } from '../server/buscarCarossel.js';

async function init() {
 

  const carossel = await buscarCarossel();
  console.log('Carrossel carregado:', carossel);

  const produtos = await buscarProdutos();
  console.log('Produtos carregados:', produtos);

  const acessorios = await buscarAcessorios();
  console.log('Acessórios carregados:', acessorios);

  const desktop = await buscarDesktop();
  console.log('Desktops carregados:', desktop);

  const audio = await buscarAudio();
  console.log('Áudios carregados:', audio);

  const containerTodosProdutos = document.getElementById('todosProdutos');
  const containerAcessorios = document.getElementById('acessorios');
  const containerProdutos = document.getElementById('produtos');
  const containerDesktop = document.getElementById('desktop');
  const containerAudio = document.getElementById('audio');
  const containerCarossel = document.getElementById('carrossel');
  const elemento = document.createElement('h2');
  console.log('Container todosProdutos encontrado:', containerTodosProdutos);

  // Combinar todos os produtos em uma lista única
  const todosProdutos = [...produtos, ...acessorios, ...desktop, ...audio, ...carossel];
  console.log('Todos os produtos combinados:', todosProdutos);

  if (containerProdutos) {
    containerProdutos.innerHTML = produtos
      .map(criarProdutoCard)
      .join('');
      elemento.innerText = 'Notebooks';
      containerProdutos.appendChild(elemento);
    console.log('Container produtos preenchido');
  }

  if (containerAcessorios) {
    containerAcessorios.innerHTML = acessorios
      .map(criarProdutoCard)
      .join('');
    console.log('Container acessórios preenchido');
  }

  if (containerDesktop) {
    containerDesktop.innerHTML = desktop
      .map(criarProdutoCard)
      .join('');
    console.log('Container desktop preenchido');
  }
  if (containerCarossel) {
    containerCarossel.innerHTML = carossel
      .map(criarProdutoCard)
      .join('');
    console.log('Container carrossel preenchido');
  }

  if (containerAudio) {
    containerAudio.innerHTML = audio
      .map(criarProdutoCard)
      .join('');
    console.log('Container audio preenchido');
  }

  // Preencher o container de todos os produtos
  if (containerTodosProdutos) {
    containerTodosProdutos.innerHTML = todosProdutos
      .map(criarProdutoCard)
      .join('');
    console.log('Container todosProdutos preenchido com', todosProdutos.length, 'produtos');
  }

}


init();
