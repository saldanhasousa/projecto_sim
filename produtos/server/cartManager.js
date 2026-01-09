// cartManager.js
export function adicionarAoCarrinho(produto) {
    // Pega o carrinho do localStorage ou cria vazio
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verifica se o produto já está no carrinho
    const index = carrinho.findIndex(item => item.id === produto.id);
    if (index !== -1) {
        // Se já existe, aumenta a quantidade
        carrinho[index].quantidade += 1;
    } else {
        // Se não existe, adiciona com quantidade 1
        carrinho.push({ ...produto, quantidade: 1 });
    }

    // Salva de volta no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarBadge();
}

// Atualiza o contador no ícone do carrinho
export function atualizarBadge() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const badge = document.getElementById('cart-count');
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    if (badge) badge.innerText = totalItens;
}

// Remove item do carrinho
export function removerDoCarrinho(produtoId) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(item => item.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarBadge();
}

// Limpa o carrinho
export function limparCarrinho() {
    localStorage.removeItem('carrinho');
    atualizarBadge();
}

// Retorna o carrinho
export function pegarCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho')) || [];
}
