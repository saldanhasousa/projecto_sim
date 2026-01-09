import { pegarCarrinho, removerDoCarrinho, limparCarrinho } from './cartManager.js';

const checkoutItems = document.getElementById('checkout-items');
const subtotalEl = document.getElementById('checkout-subtotal');
const freteEl = document.getElementById('checkout-frete');
const totalEl = document.getElementById('checkout-total');

function formatarPreco(valor) {
    return `R$ ${(valor / 1000).toFixed(3)}`;
}

export function atualizarCheckout() {
    const carrinho = pegarCarrinho();
    checkoutItems.innerHTML = '';

    let subtotal = 0;
    carrinho.forEach(item => {
        const itemTotal = item.preco * item.quantidade;
        subtotal += itemTotal;

        const div = document.createElement('div');
        div.className = "flex justify-between items-center border-b pb-2";
        div.innerHTML = `
            <div>
                <p>${item.nome} x ${item.quantidade}</p>
            </div>
            <div class="flex items-center gap-2">
                <p>${formatarPreco(itemTotal)}</p>
                <button class="text-red-500 hover:text-red-700" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        checkoutItems.appendChild(div);
    });

    const frete = subtotal > 0 ? 20000 : 0; // exemplo: frete fixo 20.000
    const total = subtotal + frete;

    subtotalEl.innerText = formatarPreco(subtotal);
    freteEl.innerText = formatarPreco(frete);
    totalEl.innerText = formatarPreco(total);

    // Adiciona evento de remover
    checkoutItems.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            removerDoCarrinho(id);
            atualizarCheckout();
        });
    });
}

// Chama no carregamento da página
atualizarCheckout();
