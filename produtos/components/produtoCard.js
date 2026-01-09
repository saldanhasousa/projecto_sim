export function criarProdutoCard(produto) {
  return `
   
    <div class="card">
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="card-body">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <span class="preco">${produto.preco.toLocaleString()} Kz</span>
        <div class="flex justify-center ga-2.5">
          <button class="btn-adicionar">Adicionar</button>
          <button onclick="window.location.href='../../produtos/checkout.html'" class="btn-comprar">Comprar</button>
        </div>
      </div>
    </div>
  `;
}
